
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronLeft, Palette, Zap, Sparkles, Building, Leaf, Cpu, X } from "lucide-react";
import TemplateSelector from "./TemplateSelector";

interface StyleQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
  onStyleSelect: (style: string) => void;
}

const StyleQuestionnaire = ({ isOpen, onClose, onStyleSelect }: StyleQuestionnaireProps) => {
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>("");

  const styles = [
    {
      id: "minimal",
      name: "מינימלי ומודרני",
      description: "עיצוב נקי עם הרבה שטח לבן ופוקוס על התוכן החשוב",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-gradient-to-br from-gray-100 to-gray-200",
      textColor: "text-gray-800",
      count: "15 תבניות",
      benefits: ["פשטות מקסימלית", "קריאות מעולה", "טעינה מהירה", "מיקוד במסר"]
    },
    {
      id: "colorful", 
      name: "נועז וצבעוני",
      description: "צבעים חזקים וגרדיאנטים דינמיים שמושכים תשומת לב מקסימלית",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500",
      textColor: "text-white",
      count: "15 תבניות",
      benefits: ["זכירות גבוהה", "בלטה מהקהל", "אנרגיה חיובית", "עידוד פעולה"]
    },
    {
      id: "artistic",
      name: "אמנותי וניסיוני", 
      description: "עיצובים ייחודיים עם אלמנטים יצירתיים וחדשניים שמפתיעים",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600",
      textColor: "text-white", 
      count: "15 תבניות",
      benefits: ["יצירתיות מקסימלית", "רושם בל יימחה", "ביטוי אישיות", "חוויה ייחודית"]
    },
    {
      id: "corporate",
      name: "עסקי ואלגנטי",
      description: "מקצועי ואמין, מושלם לעסקים מסורתיים ולחברות גדולות",
      icon: <Building className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-600 to-blue-800", 
      textColor: "text-white",
      count: "15 תבניות",
      benefits: ["אמינות מקסימלית", "מקצועיות", "אלגנטיות", "בניית אמון"]
    },
    {
      id: "organic",
      name: "אורגני ורך",
      description: "צבעים טבעיים וצורות רכות, מושלם לעסקי בריאות ורווחה",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-gradient-to-br from-green-400 to-emerald-600",
      textColor: "text-white",
      count: "12 תבניות",
      benefits: ["תחושה טבעית", "רוגע ושלווה", "חמימות", "קרבה לטבע"]
    },
    {
      id: "tech",
      name: "טכנולוגי ועתידני",
      description: "עיצוב חדשני עם אלמנטים תלת-מימדיים ואפקטים מתקדמים",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
      textColor: "text-white", 
      count: "10 תבניות",
      benefits: ["חדשנות מקסימלית", "רושם טכנולוגי", "עיצוב עתידני", "אפקטים מתקדמים"]
    }
  ];

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
    onStyleSelect(styleId);
    setShowTemplates(true);
  };

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        dir="rtl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">🎨 בחר את סגנון האתר שלך</h2>
                <p className="text-blue-100">בחר מתוך 77+ תבניות מעוצבות ומותאמות לעסק שלך</p>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors bg-white/10 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Style Selection */}
          <div className="p-8">
            <div className="text-center mb-8">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4 text-sm">
                ✨ כל הסגנונות כוללים עיצוב מותאם נייד
              </Badge>
              <p className="text-gray-600 text-lg">
                כל סגנון כולל מגוון רחב של תבניות מקצועיות שתוכל להתאים לעסק שלך
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {styles.map((style, index) => (
                <motion.div
                  key={style.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                  onClick={() => handleStyleSelect(style.id)}
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl group">
                    <div className={`${style.color} p-6 ${style.textColor} relative`}>
                      <div className="flex items-center justify-between mb-4">
                        {style.icon}
                        <Badge variant="secondary" className="bg-white/20 text-current">
                          {style.count}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-xl mb-3">{style.name}</h3>
                      <p className="text-sm opacity-90 mb-4 leading-relaxed">{style.description}</p>
                      
                      <div className="space-y-2">
                        {style.benefits.slice(0, 2).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm opacity-90">
                            <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Button className="w-full group-hover:scale-105 transition-transform bg-gray-900 hover:bg-gray-800 text-white">
                        בחר סגנון זה
                        <ChevronRight className="w-4 h-4 mr-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                לא בטוח איזה סגנון מתאים לך?
              </h4>
              <p className="text-gray-600 mb-4">
                תוכל לשנות את הסגנון בכל שלב גם אחרי בחירת התבנית
              </p>
              <Button 
                onClick={() => handleStyleSelect("minimal")}
                variant="outline" 
                className="border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                התחל עם הסגנון המינימלי (הכי פופולרי)
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Template Selector */}
      <TemplateSelector
        isOpen={showTemplates}
        onClose={() => {
          setShowTemplates(false);
          onClose();
        }}
        selectedStyle={selectedStyle}
      />
    </>
  );
};

export default StyleQuestionnaire;
