
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap } from 'lucide-react';
import TemplateSelector from "./TemplateSelector";
import RealQuestionnaire from "./RealQuestionnaire";

interface LandingPageQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

const LandingPageQuestionnaire = ({ isOpen, onClose }: LandingPageQuestionnaireProps) => {
  const [selectedOption, setSelectedOption] = useState<'custom' | 'template' | null>(null);

  if (!isOpen) return null;

  if (selectedOption === 'template') {
    return <TemplateSelector isOpen={true} onClose={() => setSelectedOption(null)} />;
  }

  if (selectedOption === 'custom') {
    return <RealQuestionnaire isOpen={true} onClose={() => setSelectedOption(null)} />;
  }

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl p-8">
        
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl font-bold mb-4">איך תרצה ליצור את הדף שלך?</h2>
          <p className="text-gray-400 text-lg">בחר את הדרך המתאימה לך ביותר</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* אפשרות 1 - שאלון מותאם אישית */}
          <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/50 cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-xl shadow-blue-500/30">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              
              <div>
                <Badge className="bg-blue-500 text-white mb-4 px-4 py-2">מומלץ!</Badge>
                <h3 className="text-2xl font-bold text-white mb-4">דף מותאם אישית</h3>
                <p className="text-gray-300 text-lg mb-6">
                  שאלון קצר של 4 שלבים שיבנה לך דף נחיתה מותאם במיוחד לעסק שלך
                </p>
                
                <div className="space-y-3 text-blue-200 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>תוכן מותאם לעסק שלך</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>עיצוב שמתאים לקהל היעד</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>לוקח 3-5 דקות</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => setSelectedOption('custom')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 text-lg font-bold"
              >
                בואו נתחיל עם השאלון
              </Button>
            </CardContent>
          </Card>

          {/* אפשרות 2 - תבניות מוכנות */}
          <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/50 cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/25">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto flex items-center justify-center shadow-xl shadow-green-500/30">
                <Zap className="w-10 h-10 text-white" />
              </div>
              
              <div>
                <Badge className="bg-green-500 text-white mb-4 px-4 py-2">מהיר!</Badge>
                <h3 className="text-2xl font-bold text-white mb-4">תבניות מוכנות</h3>
                <p className="text-gray-300 text-lg mb-6">
                  בחר מתוך תבניות מוכנות ועורך אותן לפי הצרכים שלך
                </p>
                
                <div className="space-y-3 text-green-200 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>תבניות מקצועיות מוכנות</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>אפשרות עריכה מלאה</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>לוקח דקה</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => setSelectedOption('template')}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-bold"
              >
                בחר מתבניות מוכנות
              </Button>
            </CardContent>
          </Card>

        </div>

        <div className="text-center mt-8">
          <Button
            onClick={onClose}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            סגור
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPageQuestionnaire;
