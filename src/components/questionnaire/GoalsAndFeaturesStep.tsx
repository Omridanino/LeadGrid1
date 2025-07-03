
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { QuestionnaireData } from '../LandingPageQuestionnaire';

interface GoalsAndFeaturesStepProps {
  data: QuestionnaireData;
  onUpdate: (section: keyof QuestionnaireData, data: any) => void;
}

export const GoalsAndFeaturesStep = ({ data, onUpdate }: GoalsAndFeaturesStepProps) => {
  const updateField = (field: string, value: string) => {
    const updatedGoals = { ...data.goals };
    // Since goals is an array in QuestionnaireData, we need to handle this differently
    // For now, let's add these fields to the goals array or handle them separately
    onUpdate('goals', [...data.goals, `${field}: ${value}`]);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="mainServices" className="text-white font-semibold">מה השירותים או המוצרים המרכזיים שלך? *</Label>
        <Textarea
          id="mainServices"
          value=""
          onChange={(e) => updateField('mainServices', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="פרט בדיוק מה אתה מציע: איזה שירותים? איזה מוצרים? איך זה עובד? מה התהליך? איזה חבילות או אפשרויות יש? מה כלול בכל שירות? תן דוגמאות קונקרטיות של פרויקטים שעשית..."
          rows={5}
        />
        <p className="text-sm text-gray-400 mt-1">ככל שתפרט יותר, כך הלקוחות יבינו טוב יותר מה הם מקבלים</p>
      </div>

      <div>
        <Label htmlFor="uniqueAdvantages" className="text-white font-semibold">מה הייחודיות והיתרונות הבולטים שלך? *</Label>
        <Textarea
          id="uniqueAdvantages"
          value=""
          onChange={(e) => updateField('uniqueAdvantages', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="מה עושה אותך מיוחד? איזה כישורים או יכולות יש לך שאחרים לא? איזה ציוד מתקדם? איזה שיטות עבודה? איזה תוצאות מיוחדות השגת? מה הלקוחות הכי מעריכים בך? איזה פידבקים אתה מקבל?"
          rows={5}
        />
      </div>

      <div>
        <Label htmlFor="competitionDifference" className="text-white font-semibold">מה מבדיל אותך מהמתחרים? *</Label>
        <Textarea
          id="competitionDifference"
          value=""
          onChange={(e) => updateField('competitionDifference', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="למה לקוח יבחר בך ולא במישהו אחר? מה אתה עושה אחרת? איך השירות שלך טוב יותר? מה המחיר שלך לעומת האיכות? איזה יחס אתה נותן? מה הזמינות שלך? איזה ערובות או אחריות אתה נותן?"
          rows={4}
        />
        <p className="text-sm text-gray-400 mt-1">זה המקום להדגיש את הערך המוסף שלך</p>
      </div>

      <div>
        <Label htmlFor="targetAudience" className="text-white font-semibold">מי בדיוק קהל היעד שלך? *</Label>
        <Textarea
          id="targetAudience"
          value=""
          onChange={(e) => updateField('targetAudience', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="תאר בפירוט: איזה גילאים? איזה מין? איזה מקצועות? איזה הכנסה? איזה תחומי עניין? איפה הם גרים? איך הם מתנהגים? מה חשוב להם? איך הם מחפשים שירותים כמו שלך? איזה ערוצים הם משתמשים?"
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="clientProblems" className="text-white font-semibold">איזה בעיות או צרכים אתה פותר ללקוחות?</Label>
        <Textarea
          id="clientProblems"
          value=""
          onChange={(e) => updateField('clientProblems', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="מה הכאב או הקושי שהלקוחות מגיעים איתו אליך? איזה מצב הם רוצים להגיע אליו? איך החיים שלהם משתפרים אחרי שעבדו איתך? איזה תוצאות הם מקבלים? תן דוגמאות מהשטח..."
          rows={4}
        />
        <p className="text-sm text-gray-400 mt-1">הבנת הצרכים של הלקוחות היא המפתח להצלחה</p>
      </div>

      <div>
        <Label htmlFor="mainGoal" className="text-white font-semibold">מה המטרה העיקרית של דף הנחיתה?</Label>
        <Select onValueChange={(value) => updateField('mainGoal', value)} value="">
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 focus:border-purple-500 focus:ring-purple-500">
            <SelectValue placeholder="בחר מטרה עיקרית" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600 z-50">
            <SelectItem value="sales" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">הגדלת מכירות ישירות</SelectItem>
            <SelectItem value="leads" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">יצירת לידים וקביעת פגישות</SelectItem>
            <SelectItem value="awareness" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">הגדלת המודעות למותג</SelectItem>
            <SelectItem value="signup" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">רישום לשירות או ניוזלטר</SelectItem>
            <SelectItem value="contact" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">יצירת קשר וייעוץ ראשוני</SelectItem>
            <SelectItem value="booking" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">קביעת תורים ושירותים</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
