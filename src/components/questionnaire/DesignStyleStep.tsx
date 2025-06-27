
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Navigation, Menu, Waves, Star, Zap, Atom, Palette, Layers } from "lucide-react";

interface DesignStyleStepProps {
  formData: {
    designStyle: string;
    navigationStyle: string;
  };
  updateFormData: (field: string, value: string) => void;
}

export const DesignStyleStep = ({ formData, updateFormData }: DesignStyleStepProps) => {
  const currentDesignStyle = formData.designStyle || 'dynamic-gradients';
  const currentNavigationStyle = formData.navigationStyle || 'floating';

  if (!formData.designStyle) {
    updateFormData('designStyle', 'dynamic-gradients');
  }
  if (!formData.navigationStyle) {
    updateFormData('navigationStyle', 'floating');
  }

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-2xl border border-purple-500/20">
        <Label htmlFor="designStyle" className="text-white font-bold text-lg mb-4 block">בחר את הסגנון הטכנולוגי החדשני *</Label>
        <Select onValueChange={(value) => updateFormData('designStyle', value)} value={currentDesignStyle}>
          <SelectTrigger className="bg-gray-800/80 border-purple-500/30 text-white hover:bg-gray-700/80 focus:border-purple-400 focus:ring-purple-400 h-14 text-lg backdrop-blur-sm">
            <SelectValue placeholder="בחר סגנון עיצוב פרימיום" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900/95 border-purple-500/30 backdrop-blur-xl z-[9999]">
            <SelectItem value="dynamic-gradients" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <Atom className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">גרדיאנטים דינמיים AI</div>
                  <div className="text-sm text-gray-300">טכנולוגיה מתקדמת עם אפקטי חלקיקים</div>
                </div>
              </div>
            </SelectItem>
            <SelectItem value="sparkles-effects" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">אפקטי נוצץ אינטראקטיביים</div>
                  <div className="text-sm text-gray-300">מערכת חלקיקים מתקדמת עם תגובה לעכבר</div>
                </div>
              </div>
            </SelectItem>
            <SelectItem value="animated-paths" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center">
                  <Navigation className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">נתיבים מונפשים פרימיום</div>
                  <div className="text-sm text-gray-300">עקומות SVG חלקות בסגנון מינימליסטי</div>
                </div>
              </div>
            </SelectItem>
            <SelectItem value="fluid-blobs" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center">
                  <Waves className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">בועות נוזל מרובות צבעים</div>
                  <div className="text-sm text-gray-300">אנימציה נוזלית טבעית ומהפנטת</div>
                </div>
              </div>
            </SelectItem>
            <SelectItem value="spline-3d" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">סצנות תלת מימד חיות</div>
                  <div className="text-sm text-gray-300">Three.js מתקדם עם תנועה מרשימה</div>
                </div>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="mt-4 p-4 bg-black/30 rounded-xl border border-purple-500/20">
          <p className="text-sm text-purple-200 leading-relaxed">
            {currentDesignStyle === 'dynamic-gradients' && "טכנולוגיה מתקדמת: גרדיאנטים דינמיים עם אפקטי חלקיקים AI, תאורה חכמה ואנימציות חלקות - הבחירה הבטוחה ביותר לעסקים מובילים"}
            {currentDesignStyle === 'sparkles-effects' && "מערכת חלקיקים אינטראקטיבית מתקדמת: נוצצים שמגיבים לתנועת העכבר, אפקטי תאורה דינמיים ואנימציות מרהיבות"}
            {currentDesignStyle === 'animated-paths' && "עיצוב מינימליסטי מתקדם: נתיבים מונפשים עם עקומות SVG איכותיות, אנימציות חלקות ועיצוב אלגנטי ברמה בינלאומית"}
            {currentDesignStyle === 'fluid-blobs' && "בועות נוזל מרובות בצבעים שונים: אנימציה טבעית ומהפנטת עם תנועה אורגנית, מתאימה לעסקים יצירתיים ומתקדמים"}
            {currentDesignStyle === 'spline-3d' && "סצנות תלת מימד מתקדמות: אובייקטים מרחפים עם תנועה מרשימה, תאורה דינמית ואפקטים ויזואליים ברמת האמנות"}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-6 rounded-2xl border border-blue-500/20">
        <Label htmlFor="navigationStyle" className="text-white font-bold text-lg mb-4 block">סגנון ניווט מתקדם</Label>
        <Select onValueChange={(value) => updateFormData('navigationStyle', value)} value={currentNavigationStyle}>
          <SelectTrigger className="bg-gray-800/80 border-blue-500/30 text-white hover:bg-gray-700/80 focus:border-blue-400 focus:ring-blue-400 h-12 backdrop-blur-sm">
            <SelectValue placeholder="בחר סגנון ניווט" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900/95 border-blue-500/30 backdrop-blur-xl z-[9999]">
            <SelectItem value="floating" className="text-white hover:bg-blue-700/50 cursor-pointer focus:bg-blue-700/50 p-3">
              <div className="flex items-center gap-2">
                <Menu className="w-4 h-4" />
                <span>ניווט מרחף מתקדם</span>
              </div>
            </SelectItem>
            <SelectItem value="glassmorphism" className="text-white hover:bg-blue-700/50 cursor-pointer focus:bg-blue-700/50 p-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>זכוכית מטושטשת פרימיום</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="mt-3 p-3 bg-black/30 rounded-lg border border-blue-500/20">
          <p className="text-sm text-blue-200">
            {currentNavigationStyle === 'floating' && "תפריט ניווט מרחף עם אפקטים מתקדמים, הצללות ואנימציות חלקות"}
            {currentNavigationStyle === 'glassmorphism' && "ניווט בסגנון זכוכית מטושטשת עם שקיפות דינמית ואפקטי עומק"}
          </p>
        </div>
      </div>
    </div>
  );
};
