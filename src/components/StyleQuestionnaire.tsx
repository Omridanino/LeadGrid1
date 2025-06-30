
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Palette, Zap, Sparkles, Building, Leaf, Cpu } from "lucide-react";

interface StyleQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
  onStyleSelect: (style: string) => void;
}

const StyleQuestionnaire = ({ isOpen, onClose, onStyleSelect }: StyleQuestionnaireProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const questions = [
    {
      id: "business-type",
      title: "איזה סוג עסק יש לך?",
      subtitle: "זה יעזור לנו להמליץ על הסגנון המתאים ביותר",
      options: [
        { id: "creative", label: "עסק יצירתי", description: "סטודיו, גלריה, אמן" },
        { id: "tech", label: "טכנולוגיה", description: "סטארטאפ, הייטק, פיתוח" },
        { id: "corporate", label: "עסקי מסורתי", description: "עורך דין, רואה חשבון, ייעוץ" },
        { id: "wellness", label: "בריאות ורווחה", description: "קוסמטיקה, יוגה, טיפולים" },
        { id: "retail", label: "מכירות ושירותים", description: "חנות, מסעדה, שירותים" }
      ]
    },
    {
      id: "design-preference",
      title: "איזה סגנון עיצוב אתה הכי אוהב?",
      subtitle: "בחר את הסגנון שהכי מדבר אליך",
      options: [
        { id: "minimal", label: "פשוט ונקי", description: "פחות זה יותר" },
        { id: "colorful", label: "צבעוני ונועז", description: "אוהב צבעים חזקים" },
        { id: "elegant", label: "אלגנטי ומקצועי", description: "קלאסי ומעוצב" },
        { id: "natural", label: "טבעי ורך", description: "חיבור לטבע" },
        { id: "modern", label: "מודרני וחדשני", description: "עיצוב עכשווי" }
      ]
    },
    {
      id: "target-audience",
      title: "למי הדף מיועד?",
      subtitle: "הבנת הקהל תעזור לנו לבחור את הטון הנכון",
      options: [
        { id: "young", label: "צעירים (20-35)", description: "דור המילניום" },
        { id: "professional", label: "אנשי מקצוע (30-50)", description: "קהל עסקי" },
        { id: "senior", label: "בוגרים (40+)", description: "קהל מבוגר" },
        { id: "mixed", label: "קהל מעורב", description: "כל הגילאים" }
      ]
    }
  ];

  const styleRecommendations = {
    // Creative business + colorful/natural → artistic
    "creative-colorful": "artistic",
    "creative-natural": "organic",
    "creative-minimal": "minimal",
    "creative-elegant": "artistic",
    "creative-modern": "artistic",
    
    // Tech business → tech/minimal
    "tech-minimal": "tech",
    "tech-modern": "tech",
    "tech-colorful": "tech",
    "tech-elegant": "minimal",
    "tech-natural": "minimal",
    
    // Corporate → corporate/minimal
    "corporate-elegant": "corporate",
    "corporate-minimal": "corporate",
    "corporate-modern": "corporate",
    "corporate-colorful": "corporate",
    "corporate-natural": "corporate",
    
    // Wellness → organic/minimal
    "wellness-natural": "organic",
    "wellness-minimal": "organic",
    "wellness-elegant": "organic",
    "wellness-colorful": "organic",
    "wellness-modern": "minimal",
    
    // Retail → colorful/minimal
    "retail-colorful": "colorful",
    "retail-minimal": "minimal",
    "retail-elegant": "minimal",
    "retail-natural": "organic",
    "retail-modern": "colorful"
  };

  const styles = [
    {
      id: "minimal",
      name: "מינימלי ומודרני",
      description: "עיצוב נקי עם הרבה שטח לבן ופוקוס על התוכן",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-gradient-to-br from-gray-100 to-gray-200",
      textColor: "text-gray-800",
      count: "15 תבניות"
    },
    {
      id: "colorful",
      name: "נועז וצבעוני",
      description: "צבעים חזקים וגרדיאנטים דינמיים שמושכים תשומת לב",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500",
      textColor: "text-white",
      count: "15 תבניות"
    },
    {
      id: "artistic",
      name: "אמנותי וניסיוני",
      description: "עיצובים ייחודיים עם אלמנטים יצירתיים וחדשניים",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600",
      textColor: "text-white",
      count: "15 תבניות"
    },
    {
      id: "corporate",
      name: "עסקי ואלגנטי",
      description: "מקצועי ואמין, מושלם לעסקים מסורתיים",
      icon: <Building className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      textColor: "text-white",
      count: "15 תבניות"
    },
    {
      id: "organic",
      name: "אורגני ורך",
      description: "צבעים טבעיים וצורות רכות, מושלם לעסקי בריאות",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-gradient-to-br from-green-400 to-emerald-600",
      textColor: "text-white",
      count: "5 תבניות"
    },
    {
      id: "tech",
      name: "טכנולוגי ועתידני",
      description: "עיצוב חדשני עם אלמנטים תלת-מימדיים ואפקטים מתקדמים",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
      textColor: "text-white",
      count: "5 תבניות"
    }
  ];

  const handleAnswerSelect = (answerId: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentStep] = answerId;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate recommendation
      const businessType = selectedAnswers[0];
      const designPref = selectedAnswers[1];
      const key = `${businessType}-${designPref}`;
      const recommendedStyle = styleRecommendations[key as keyof typeof styleRecommendations] || "minimal";
      
      setCurrentStep(questions.length); // Show style selection
    }
  };

  const handleStyleSelect = (styleId: string) => {
    onStyleSelect(styleId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" dir="rtl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">בוא נמצא את העיצוב המושלם בשבילך</h2>
              <p className="text-purple-100 mt-1">
                {currentStep < questions.length 
                  ? `שלב ${currentStep + 1} מתוך ${questions.length}` 
                  : "בחר את הסגנון שלך"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          
          {/* Progress Bar */}
          {currentStep < questions.length && (
            <div className="mt-4 bg-white/20 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                className="h-full bg-white rounded-full"
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {currentStep < questions.length ? (
              // Questionnaire Steps
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {questions[currentStep].title}
                  </h3>
                  <p className="text-gray-600">{questions[currentStep].subtitle}</p>
                </div>

                <div className="grid gap-4">
                  {questions[currentStep].options.map((option) => (
                    <Card
                      key={option.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        selectedAnswers[currentStep] === option.id
                          ? "ring-2 ring-purple-500 bg-purple-50"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => handleAnswerSelect(option.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {option.label}
                            </h4>
                            <p className="text-gray-600 text-sm">{option.description}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button
                    onClick={handleNext}
                    disabled={!selectedAnswers[currentStep]}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    {currentStep < questions.length - 1 ? "המשך" : "ראה המלצות"}
                    <ChevronRight className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              // Style Selection
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    בחר את סגנון העיצוב שלך
                  </h3>
                  <p className="text-gray-600">כל סגנון כולל מספר תבניות מקצועיות לבחירה</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {styles.map((style) => (
                    <motion.div
                      key={style.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer"
                      onClick={() => handleStyleSelect(style.id)}
                    >
                      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className={`${style.color} p-6 ${style.textColor}`}>
                          <div className="flex items-center justify-between mb-4">
                            {style.icon}
                            <Badge variant="secondary" className="bg-white/20 text-current">
                              {style.count}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-lg mb-2">{style.name}</h4>
                          <p className="text-sm opacity-90">{style.description}</p>
                        </div>
                        <CardContent className="p-4">
                          <Button
                            variant="outline"
                            className="w-full"
                          >
                            בחר סגנון זה
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default StyleQuestionnaire;
