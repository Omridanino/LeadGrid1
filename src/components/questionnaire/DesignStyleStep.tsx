import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, Sparkles, Gem, Shapes, Palette } from "lucide-react";

interface DesignStyleStepProps {
  formData: {
    designStyle: string;
    navigationStyle: string;
  };
  updateFormData: (field: string, value: string) => void;
}

export const DesignStyleStep = ({ formData, updateFormData }: DesignStyleStepProps) => {
  const currentDesignStyle = formData.designStyle || '3d-tech';
  const currentNavigationStyle = formData.navigationStyle || 'floating';

  if (!formData.designStyle) {
    updateFormData('designStyle', '3d-tech');
  }
  if (!formData.navigationStyle) {
    updateFormData('navigationStyle', 'floating');
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-4 rounded-xl border border-purple-500/20">
        <Label htmlFor="designStyle" className="text-white font-bold text-lg mb-3 block">סגנון העיצוב</Label>
        <Select onValueChange={(value) => updateFormData('designStyle', value)} value={currentDesignStyle}>
          <SelectTrigger className="bg-gray-800/80 border-purple-500/30 text-white hover:bg-gray-700/80 focus:border-purple-400 focus:ring-purple-400 h-12 text-lg backdrop-blur-sm">
            <SelectValue placeholder="בחר סגנון עיצוב" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900/95 border-purple-500/30 backdrop-blur-xl z-[9999]">
            <SelectItem value="3d-tech" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצוב תלת-מימד טכנולוגי</div>
                  <div className="text-sm text-gray-300">עיצוב מתקדם עם אפקטים מרשימים</div>
                </div>
              </div>
            </SelectItem>
            
            <SelectItem value="gradient" className="text-white hover:bg-blue-700/50 cursor-pointer focus:bg-blue-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצובים גרדיאנט מתקדמים</div>
                  <div className="text-sm text-gray-300">עיצובים צבעוניים עם אפקטים תלת-מימדיים</div>
                </div>
              </div>
            </SelectItem>

            <SelectItem value="glass" className="text-white hover:bg-teal-700/50 cursor-pointer focus:bg-teal-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 via-blue-500 to-indigo-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצובים נוזליים וזכוכית</div>
                  <div className="text-sm text-gray-300">אפקטים נוזליים ושקופים מרהיבים</div>
                </div>
              </div>
            </SelectItem>

            <SelectItem value="geometric" className="text-white hover:bg-orange-700/50 cursor-pointer focus:bg-orange-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center">
                  <Shapes className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצובים גיאומטריים</div>
                  <div className="text-sm text-gray-300">צורות גיאומטריות ואפקטים מתמטיים</div>
                </div>
              </div>
            </SelectItem>

            <SelectItem value="metal" className="text-white hover:bg-gray-700/50 cursor-pointer focus:bg-gray-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 flex items-center justify-center">
                  <Gem className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצובים מתכתיים</div>
                  <div className="text-sm text-gray-300">מראה מתכתי מלוטש ואלגנטי</div>
                </div>
              </div>
            </SelectItem>

            <SelectItem value="image" className="text-white hover:bg-emerald-700/50 cursor-pointer focus:bg-emerald-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצובים עם תמונות תלת-מימדיות</div>
                  <div className="text-sm text-gray-300">אפקטים חזותיים עם תמונות מרהיבות</div>
                </div>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="mt-3 p-3 bg-black/30 rounded-lg border border-purple-500/20">
          <p className="text-sm text-purple-200">
            {currentDesignStyle === '3d-tech' && "עיצוב טכנולוגי מתקדם עם אפקטים תלת-מימדיים מרשימים - מושלם לעסקים חדשניים"}
            {currentDesignStyle === 'gradient' && "עיצובים גרדיאנט מתקדמים עם אפקטים תלת-מימדיים צבעוניים ו Maraיבים"}
            {currentDesignStyle === 'glass' && "עיצובים נוזליים וזכוכית עם אפקטים שקופים ו Maraיבים"}
            {currentDesignStyle === 'geometric' && "עיצובים גיאומטריים עם צורות מתמטיות ואפקטים גיאומטריים"}
            {currentDesignStyle === 'metal' && "עיצובים מתכתיים עם מראה מלוטש ואלגנטי"}
            {currentDesignStyle === 'image' && "עיצובים עם תמונות תלת-מימדיות ואפקטים חזותיים מרהיבים"}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-4 rounded-xl border border-blue-500/20">
        <Label htmlFor="navigationStyle" className="text-white font-bold text-lg mb-3 block">סגנון ניווט</Label>
        <Select onValueChange={(value) => updateFormData('navigationStyle', value)} value={currentNavigationStyle}>
          <SelectTrigger className="bg-gray-800/80 border-blue-500/30 text-white hover:bg-gray-700/80 focus:border-blue-400 focus:ring-blue-400 h-12 backdrop-blur-sm">
            <SelectValue placeholder="בחר סגנון ניווט" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900/95 border-blue-500/30 backdrop-blur-xl z-[9999]">
            <SelectItem value="floating" className="text-white hover:bg-blue-700/50 cursor-pointer focus:bg-blue-700/50 p-3">
              <span>ניווט מרחף</span>
            </SelectItem>
            <SelectItem value="fixed" className="text-white hover:bg-blue-700/50 cursor-pointer focus:bg-blue-700/50 p-3">
              <span>ניווט קבוע</span>
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="mt-2 p-2 bg-black/30 rounded-lg border border-blue-500/20">
          <p className="text-sm text-blue-200">
            {currentNavigationStyle === 'floating' ? "תפריט ניווט מרחף מתקדם" : "ניווט קבוע וברור"}
          </p>
        </div>
      </div>
    </div>
  );
};
