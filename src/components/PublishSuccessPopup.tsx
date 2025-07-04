
import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Copy, ExternalLink, CheckCircle, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface PublishSuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  publishedUrl: string;
  siteName: string;
}

export const PublishSuccessPopup = ({ isOpen, onClose, publishedUrl, siteName }: PublishSuccessPopupProps) => {
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(publishedUrl);
      toast({
        title: "✅ הקישור הועתק!",
        description: "הקישור הועתק ללוח",
      });
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const openInNewTab = () => {
    window.open(publishedUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-gray-900 border-gray-700 text-white">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <DialogTitle className="text-xl font-bold text-green-400">
            🎉 האתר פורסם בהצלחה!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <div className="text-center">
            <p className="text-gray-300 text-sm mb-3">
              האתר שלך מוכן ונגיש בקישור הבא:
            </p>
            
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 break-all text-sm text-blue-400">
              {publishedUrl}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              onClick={copyToClipboard}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              size="sm"
            >
              <Copy className="w-4 h-4 ml-1" />
              העתק קישור
            </Button>
            
            <Button
              onClick={openInNewTab}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              size="sm"
            >
              <ExternalLink className="w-4 h-4 ml-1" />
              פתח אתר
            </Button>
          </div>
          
          
          <div className="text-center pt-3 border-t border-gray-700">
            <div className="mb-3">
              <p className="text-gray-400 text-xs mb-2">נזקק לעזרה? צרו קשר:</p>
              <div className="flex items-center justify-center gap-2 text-sm text-blue-400">
                <Mail className="w-4 h-4" />
                <span>info.Leadgrid@gmail.com</span>
              </div>
            </div>
            <Button
              onClick={onClose}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
              size="sm"
            >
              סגור
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
