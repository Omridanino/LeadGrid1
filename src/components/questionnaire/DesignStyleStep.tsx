
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Navigation, Menu, Waves, Star, Zap } from "lucide-react";

interface DesignStyleStepProps {
  formData: {
    designStyle: string;
    heroStyle: string;
    navigationStyle: string;
  };
  updateFormData: (field: string, value: string) => void;
}

export const DesignStyleStep = ({ formData, updateFormData }: DesignStyleStepProps) => {
  // Set Fluid Blobs as default if not already set
  if (!formData.designStyle) {
    updateFormData('designStyle', 'fluid-blobs');
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="designStyle" className="text-white font-semibold">סגנון העיצוב החדש שלנו *</Label>
        <Select onValueChange={(value) => updateFormData('designStyle', value)} value={formData.designStyle || 'fluid-blobs'}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="בחר סגנון עיצוב" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fluid-blobs">
              <div className="flex items-center gap-2">
                <Waves className="w-4 h-4" />
                בועות נוזל זורמות (Fluid Blobs)
              </div>
            </SelectItem>
            <SelectItem value="spline-3d">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                סצנות תלת מימד (Spline 3D)
              </div>
            </SelectItem>
            <SelectItem value="animated-paths">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                נתיבים מונפשים (Animated Paths)
              </div>
            </SelectItem>
            <SelectItem value="sparkles-effects">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                אפקטי נוצץ (Sparkles Effects)
              </div>
            </SelectItem>
            <SelectItem value="dynamic-gradients">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                גרדיאנטים דינמיים (Dynamic Gradients)
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {formData.designStyle === 'fluid-blobs' && "עיצוב עם בועות נוזל זורמות ואפקטים תלת מימדיים מרהיבים"}
          {formData.designStyle === 'spline-3d' && "סצנות תלת מימד אינטראקטיביות עם אובייקטים מרחפים"}
          {formData.designStyle === 'animated-paths' && "נתיבים גרפיים מונפשים עם תנועות חלקות"}
          {formData.designStyle === 'sparkles-effects' && "חלקיקים נוצצים ואפקטי אור מדהימים"}
          {formData.designStyle === 'dynamic-gradients' && "גרדיאנטים משתנים עם צבעים דינמיים"}
        </p>
      </div>

      <div>
        <Label htmlFor="heroStyle" className="text-white font-semibold">איך תרצו שיוצג הדף בחלק העליון?</Label>
        <Select onValueChange={(value) => updateFormData('heroStyle', value)} value={formData.heroStyle}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="בחר סגנון הצגה" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fluid-morphing">
              <div className="flex items-center gap-2">
                <Waves className="w-4 h-4" />
                בועות נוזל מתמרפות
              </div>
            </SelectItem>
            <SelectItem value="floating-3d">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                אובייקטים תלת מימד מרחפים
              </div>
            </SelectItem>
            <SelectItem value="animated-vectors">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                וקטורים מונפשים
              </div>
            </SelectItem>
            <SelectItem value="particle-burst">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                פיצוץ חלקיקים
              </div>
            </SelectItem>
            <SelectItem value="gradient-waves">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                גלי גרדיאנטים
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {formData.heroStyle === 'fluid-morphing' && "בועות נוזל שמשנות צורה באופן דינמי"}
          {formData.heroStyle === 'floating-3d' && "אובייקטים תלת מימדיים שמרחפים ומסתובבים"}
          {formData.heroStyle === 'animated-vectors' && "וקטורים גרפיים עם אנימציות חלקות"}
          {formData.heroStyle === 'particle-burst' && "חלקיקים שמתפוצצים ונוצצים"}
          {formData.heroStyle === 'gradient-waves' && "גלים של צבעים משתנים"}
        </p>
      </div>

      <div>
        <Label htmlFor="navigationStyle" className="text-white font-semibold">סגנון הניווט</Label>
        <Select onValueChange={(value) => updateFormData('navigationStyle', value)} value={formData.navigationStyle || 'floating'}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="בחר סגנון ניווט" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="floating">
              <div className="flex items-center gap-2">
                <Menu className="w-4 h-4" />
                ניווט מרחף
              </div>
            </SelectItem>
            <SelectItem value="glassmorphism">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                זכוכית מטושטשת
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {(formData.navigationStyle || 'floating') === 'floating' && "תפריט ניווט מרחף עם אפקטים מתקדמים"}
          {formData.navigationStyle === 'glassmorphism' && "ניווט בסגנון זכוכית מטושטשת"}
        </p>
      </div>
    </div>
  );
};
