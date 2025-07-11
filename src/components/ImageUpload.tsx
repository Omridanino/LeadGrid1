import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface ImageUploadProps {
  currentImageUrl?: string;
  onImageChange: (imageUrl: string) => void;
  bucket: string;
  className?: string;
}

const ImageUpload = ({ currentImageUrl, onImageChange, bucket, className = "" }: ImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "שגיאה",
        description: "אנא בחר קובץ תמונה תקין",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "שגיאה", 
        description: "גודל הקובץ לא יכול לחרוג מ-5MB",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(fileName, file);

      if (error) {
        throw error;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(fileName);

      onImageChange(publicUrl);

      toast({
        title: "הצלחה! 🎉",
        description: "התמונה הועלתה בהצלחה",
      });

    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "שגיאה",
        description: "אירעה שגיאה בהעלאת התמונה",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    onImageChange('');
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {currentImageUrl ? (
        <div className="relative group">
          <img 
            src={currentImageUrl} 
            alt="תמונה שהועלתה" 
            className="w-full h-48 object-cover rounded-lg border"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
            <Button
              variant="destructive"
              size="sm"
              onClick={handleRemoveImage}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4 mr-2" />
              הסר תמונה
            </Button>
          </div>
        </div>
      ) : (
        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground mb-4">גרור תמונה או לחץ להעלאה</p>
          <p className="text-xs text-muted-foreground mb-4">JPG, PNG, GIF עד 5MB</p>
        </div>
      )}
      
      <div className="relative">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          disabled={isUploading}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <Button 
          variant="outline" 
          className="w-full"
          disabled={isUploading}
        >
          <Upload className="h-4 w-4 mr-2" />
          {isUploading ? 'מעלה תמונה...' : currentImageUrl ? 'החלף תמונה' : 'העלה תמונה'}
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;