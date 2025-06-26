
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Heart, Zap } from "lucide-react";

interface DesignStyleStepProps {
  formData: {
    designStyle: string;
    heroStyle: string;
  };
  updateFormData: (field: string, value: string) => void;
}

export const DesignStyleStep = ({ formData, updateFormData }: DesignStyleStepProps) => {
  const getStyleDescription = (style: string) => {
    switch (style) {
      case '3d':
        return "חוויה ויזואלית מרשימה, דינמית וסוחפת. שימוש באלמנטים תלת-ממדיים (מודלים, צללים, עומק). אנימציות חלקות בזמן גלילה. מתאים למותגים חדשניים, טכנולוגיים או יוקרתיים.";
      case 'storytelling':
        return "מכוון לרגש, לסיפור האישי וליצירת חיבור אנושי. פתיח עם סיפור: איך הכל התחיל, למה אתה עושה את זה. תמונות אישיות / לקוחות אמיתיים / המלצות מצולמות. שפה בגובה העיניים, הדגשת ערכים כמו אמון, יחס אישי, שקיפות. מתאים ליועצים, מטפלים, נותני שירותים שרוצים 'לחבק' את הגולש.";
      case 'minimal':
        return "יעיל, חד, טכני – הכל בפרונט, בלי חפירות. מבנה של סקשנים קצרים: פתרונות – יתרונות – מחירים – שאלות נפוצות. שפה תכל'סית עם אייקונים, מספרים, והדגשת יתרונות תחרותיים. מתאים לשירותים דיגיטליים, אפליקציות, סטארטאפים.";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="designStyle" className="text-white font-semibold">איזה סגנון עיצוב מתאים לכם? *</Label>
        <Select onValueChange={(value) => updateFormData('designStyle', value)} value={formData.designStyle}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="בחר סגנון עיצוב" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3d">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                סגנון תלת מימדי (3D)
              </div>
            </SelectItem>
            <SelectItem value="storytelling">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                סגנון אישי-רגשי (Storytelling & Trust)
              </div>
            </SelectItem>
            <SelectItem value="minimal">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                סגנון מהיר וחד (One-Pager Tech / SaaS)
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {getStyleDescription(formData.designStyle)}
        </p>
      </div>

      <div>
        <Label htmlFor="heroStyle" className="text-white font-semibold">איך תרצו שיוצג הדף בחלק העליון?</Label>
        <Select onValueChange={(value) => updateFormData('heroStyle', value)} value={formData.heroStyle}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="בחר סגנון הצגה" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gradient">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                רקע יפה עם משפטים (ללא תמונה)
              </div>
            </SelectItem>
            <SelectItem value="image">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                תמונה עם משפטים על גביה
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {formData.heroStyle === 'gradient' 
            ? "הדף יוצג עם רקע בצבעי הדרגה יפים ללא תמונות"
            : "הדף יוצג עם תמונה רלוונטית לעסק שלכם ברקע"
          }
        </p>
      </div>
    </div>
  );
};
