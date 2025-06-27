
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
  const currentDesignStyle = formData.designStyle || 'dynamic-gradients';
  const currentHeroStyle = formData.heroStyle || 'gradient-waves';
  const currentNavigationStyle = formData.navigationStyle || 'floating';

  if (!formData.designStyle) {
    updateFormData('designStyle', 'dynamic-gradients');
  }
  if (!formData.heroStyle) {
    updateFormData('heroStyle', 'gradient-waves');
  }
  if (!formData.navigationStyle) {
    updateFormData('navigationStyle', 'floating');
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="designStyle" className="text-white font-semibold">סגנון העיצוב החדש שלנו *</Label>
        <Select onValueChange={(value) => updateFormData('designStyle', value)} value={currentDesignStyle}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 focus:border-purple-500 focus:ring-purple-500">
            <SelectValue placeholder="בחר סגנון עיצוב" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600 z-50">
            <SelectItem value="dynamic-gradients" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                גרדיאנטים דינמיים (Dynamic Gradients)
              </div>
            </SelectItem>
            <SelectItem value="sparkles-effects" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                אפקטי נוצץ (Sparkles Effects)
              </div>
            </SelectItem>
            <SelectItem value="animated-paths" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                נתיבים מונפשים (Animated Paths)
              </div>
            </SelectItem>
            <SelectItem value="fluid-blobs" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Waves className="w-4 h-4" />
                בועות נוזל זורמות (Fluid Blobs)
              </div>
            </SelectItem>
            <SelectItem value="spline-3d" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                סצנות תלת מימד (Spline 3D)
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {currentDesignStyle === 'dynamic-gradients' && "גרדיאנטים משתנים עם צבעים דינמיים - מומלץ!"}
          {currentDesignStyle === 'sparkles-effects' && "חלקיקים נוצצים ואפקטי אור מדהימים"}
          {currentDesignStyle === 'animated-paths' && "נתיבים גרפיים מונפשים עם תנועות חלקות"}
          {currentDesignStyle === 'fluid-blobs' && "עיצוב עם בועות נוזל זורמות ואפקטים תלת מימדיים מרהיבים"}
          {currentDesignStyle === 'spline-3d' && "סצנות תלת מימד אינטראקטיביות עם אובייקטים מרחפים"}
        </p>
      </div>

      <div>
        <Label htmlFor="heroStyle" className="text-white font-semibold">איך תרצו שיוצג הדף בחלק העליון?</Label>
        <Select onValueChange={(value) => updateFormData('heroStyle', value)} value={currentHeroStyle}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 focus:border-purple-500 focus:ring-purple-500">
            <SelectValue placeholder="בחר סגנון הצגה" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600 z-50">
            <SelectItem value="gradient-waves" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                גלי גרדיאנטים
              </div>
            </SelectItem>
            <SelectItem value="particle-burst" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                פיצוץ חלקיקים
              </div>
            </SelectItem>
            <SelectItem value="animated-vectors" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                וקטורים מונפשים
              </div>
            </SelectItem>
            <SelectItem value="fluid-morphing" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Waves className="w-4 h-4" />
                בועות נוזל מתמרפות
              </div>
            </SelectItem>
            <SelectItem value="floating-3d" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                אובייקטים תלת מימד מרחפים
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {currentHeroStyle === 'gradient-waves' && "גלים של צבעים משתנים - מומלץ!"}
          {currentHeroStyle === 'particle-burst' && "חלקיקים שמתפוצצים ונוצצים"}
          {currentHeroStyle === 'animated-vectors' && "וקטורים גרפיים עם אנימציות חלקות"}
          {currentHeroStyle === 'fluid-morphing' && "בועות נוזל שמשנות צורה באופן דינמי"}
          {currentHeroStyle === 'floating-3d' && "אובייקטים תלת מימדיים שמרחפים ומסתובבים"}
        </p>
      </div>

      <div>
        <Label htmlFor="navigationStyle" className="text-white font-semibold">סגנון הניווט</Label>
        <Select onValueChange={(value) => updateFormData('navigationStyle', value)} value={currentNavigationStyle}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 focus:border-purple-500 focus:ring-purple-500">
            <SelectValue placeholder="בחר סגנון ניווט" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600 z-50">
            <SelectItem value="floating" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Menu className="w-4 h-4" />
                ניווט מרחף
              </div>
            </SelectItem>
            <SelectItem value="glassmorphism" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                זכוכית מטושטשת
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {currentNavigationStyle === 'floating' && "תפריט ניווט מרחף עם אפקטים מתקדמים"}
          {currentNavigationStyle === 'glassmorphism' && "ניווט בסגנון זכוכית מטושטשת"}
        </p>
      </div>
    </div>
  );
};
