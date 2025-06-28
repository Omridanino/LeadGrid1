
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Zap, Wand2, Palette, Camera, Gem } from "lucide-react";

interface DesignStyleStepProps {
  formData: {
    designStyle: string;
    navigationStyle: string;
  };
  updateFormData: (field: string, value: string) => void;
}

export const DesignStyleStep = ({ formData, updateFormData }: DesignStyleStepProps) => {
  const currentDesignStyle = formData.designStyle || 'hero-section-modern';
  const currentNavigationStyle = formData.navigationStyle || 'floating';

  if (!formData.designStyle) {
    updateFormData('designStyle', 'hero-section-modern');
  }
  if (!formData.navigationStyle) {
    updateFormData('navigationStyle', 'floating');
  }

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-2xl border border-purple-500/20">
        <Label htmlFor="designStyle" className="text-white font-bold text-lg mb-4 block">בחר את סגנון העיצוב הבסיסי *</Label>
        <Select onValueChange={(value) => updateFormData('designStyle', value)} value={currentDesignStyle}>
          <SelectTrigger className="bg-gray-800/80 border-purple-500/30 text-white hover:bg-gray-700/80 focus:border-purple-400 focus:ring-purple-400 h-14 text-lg backdrop-blur-sm">
            <SelectValue placeholder="בחר סגנון עיצוב" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900/95 border-purple-500/30 backdrop-blur-xl z-[9999]">
            <SelectItem value="hero-section-modern" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצוב מודרני מתקדם</div>
                  <div className="text-sm text-gray-300">עיצוב נקי עם אנימציות מתקדמות וטיפוגרפיה יפה</div>
                </div>
              </div>
            </SelectItem>
            
            <SelectItem value="hero-section-animated" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Wand2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצוב עם אנימציות מתקדמות</div>
                  <div className="text-sm text-gray-300">אפקטי Typewriter ואנימציות מרהיבות עם AnimatedGroup</div>
                </div>
              </div>
            </SelectItem>

            <SelectItem value="hero-section-typewriter" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצוב עם אפקט כתיבה</div>
                  <div className="text-sm text-gray-300">טקסט דינמי עם אפקט מכונת כתיבה מתקדם</div>
                </div>
              </div>
            </SelectItem>

            <SelectItem value="hero-section-rotating" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">
                  <Camera className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצוב עם טקסט מתחלף</div>
                  <div className="text-sm text-gray-300">כותרות דינמיות עם אפקט החלפת טקסט חלק</div>
                </div>
              </div>
            </SelectItem>

            <SelectItem value="3d-tech" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצוב תלת-מימד טכנולוגי</div>
                  <div className="text-sm text-gray-300">עיצוב מתקדם עם אפקטים תלת-מימדיים מרשימים</div>
                </div>
              </div>
            </SelectItem>

            <SelectItem value="basic" className="text-white hover:bg-purple-700/50 cursor-pointer focus:bg-purple-700/50 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-500 to-slate-500 flex items-center justify-center">
                  <Gem className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">עיצוב בסיסי ויפה</div>
                  <div className="text-sm text-gray-300">עיצוב נקי וקלאסי עם אפקטים בסיסיים</div>
                </div>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="mt-4 p-4 bg-black/30 rounded-xl border border-purple-500/20">
          <p className="text-sm text-purple-200 leading-relaxed">
            {currentDesignStyle === 'hero-section-modern' && "עיצוב מודרני עם אנימציות חלקות וטיפוגרפיה מתקדמת - מתאים לעסקים מקצועיים"}
            {currentDesignStyle === 'hero-section-animated' && "עיצוב עם אנימציות מתקדמות וקבוצות אנימציה - מושלם לעסקים יצירתיים"}
            {currentDesignStyle === 'hero-section-typewriter' && "עיצוב עם אפקט מכונת כתיבה דינמי - מתאים לעסקים טכנולוגיים"}
            {currentDesignStyle === 'hero-section-rotating' && "עיצוב עם טקסט מתחלף וחלק - מושלם לעסקים רב-תחומיים"}
            {currentDesignStyle === 'basic' && "עיצוב נקי וקלאסי עם אפקטים בסיסיים - מתאים לכל סוג עסק ולכל קהל"}
            {currentDesignStyle === '3d-tech' && "עיצוב טכנולוגי מתקדם עם אפקטים תלת-מימדיים מרשימים - מושלם לעסקים חדשניים ומתקדמים"}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-6 rounded-2xl border border-blue-500/20">
        <Label htmlFor="navigationStyle" className="text-white font-bold text-lg mb-4 block">סגנון ניווט</Label>
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
        <div className="mt-3 p-3 bg-black/30 rounded-lg border border-blue-500/20">
          <p className="text-sm text-blue-200">
            {currentNavigationStyle === 'floating' && "תפריט ניווט מרחף עם אפקטים מתקדמים"}
            {currentNavigationStyle === 'fixed' && "ניווט קבוע וברור במעלה הדף"}
          </p>
        </div>
      </div>
    </div>
  );
};
