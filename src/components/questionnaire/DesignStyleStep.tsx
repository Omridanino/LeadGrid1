
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap } from "lucide-react";

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
          </SelectContent>
        </Select>
        <div className="mt-3 p-3 bg-black/30 rounded-lg border border-purple-500/20">
          <p className="text-sm text-purple-200">
            עיצוב טכנולוגי מתקדם עם אפקטים תלת-מימדיים מרשימים - מושלם לעסקים חדשניים
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
