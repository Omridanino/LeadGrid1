
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronLeft, Palette, Zap, Sparkles, Building, Leaf, Cpu, Check, X } from "lucide-react";
import TemplateSelector from "./TemplateSelector";

interface StyleQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
  onStyleSelect: (style: string) => void;
}

const StyleQuestionnaire = ({ isOpen, onClose, onStyleSelect }: StyleQuestionnaireProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>("");

  const questions = [
    {
      id: "business-type",
      title: "איזה סוג עסק יש לך?",
      subtitle: "זה יעזור לנו להמליץ על הסגנון המתאים ביותר עבורך",
      options: [
        { id: "creative", label: "עסק יצירתי ואמנותי", description: "סטודיו, גלריה, אמן, מעצב", icon: "🎨" },
        { id: "tech", label: "טכנולוגיה וחדשנות", description: "סטארטאפ, הייטק, פיתוח, AI", icon: "🚀" },
        { id: "corporate", label: "עסק מסורתי ומקצועי", description: "עורך דין, רואה חשבון, ייעוץ עסקי", icon: "💼" },
        { id: "wellness", label: "בריאות, יופי ורווחה", description: "קוסמטיקה, יוגה, טיפולים, ספא", icon: "🌿" },
        { id: "retail", label: "מכירות ושירותים", description: "חנות, מסעדה, שירותים לצרכן", icon: "🛍️" },
        { id: "education", label: "חינוך והדרכה", description: "קורסים, הדרכות, מרכז לימוד", icon: "📚" }
      ]
    },
    {
      id: "design-preference",
      title: "איזה סגנון עיצוב מדבר אליך הכי הרבה?",
      subtitle: "בחר את הסגנון שהכי מתאים לאישיות המותג שלך",
      options: [
        { id: "minimal", label: "פשוט, נקי ומינימלי", description: "פחות זה יותר - עיצוב נקי וממוקד", icon: "✨" },
        { id: "colorful", label: "צבעוני, נועז ואנרגטי", description: "צבעים חזקים שמושכים תשומת לב", icon: "🌈" },
        { id: "artistic", label: "יצירתי, ייחודי ואמנותי", description: "עיצוב שבורר גבולות ומפתיע", icon: "🎭" },
        { id: "elegant", label: "אלגנטי, מקצועי וקלאסי", description: "עיצוב עסקי שמעביר אמינות", icon: "👔" },
        { id: "natural", label: "טבעי, רך וחמים", description: "עיצוב שמזכיר טבע ושלווה", icon: "🍃" },
        { id: "futuristic", label: "עתידני, טכנולוגי ומתקדם", description: "עיצוב שמביא את העתיד להיום", icon: "⚡" }
      ]
    }
  ];

  const styleRecommendations = {
    "creative-artistic": "artistic",
    "creative-colorful": "artistic", 
    "creative-natural": "organic",
    "creative-minimal": "artistic",
    "creative-elegant": "artistic",
    "creative-futuristic": "artistic",
    "tech-futuristic": "tech",
    "tech-minimal": "tech",
    "tech-colorful": "tech",
    "tech-elegant": "minimal",
    "tech-artistic": "tech",
    "tech-natural": "minimal",
    "corporate-elegant": "corporate",
    "corporate-minimal": "corporate",
    "corporate-colorful": "corporate",
    "corporate-natural": "corporate",
    "corporate-artistic": "minimal",
    "corporate-futuristic": "corporate",
    "wellness-natural": "organic",
    "wellness-minimal": "organic",
    "wellness-elegant": "organic",
    "wellness-colorful": "organic",
    "wellness-artistic": "organic",
    "wellness-futuristic": "minimal",
    "retail-colorful": "colorful",
    "retail-minimal": "minimal",
    "retail-elegant": "minimal",
    "retail-natural": "organic",
    "retail-artistic": "colorful",
    "retail-futuristic": "tech",
    "education-minimal": "minimal",
    "education-elegant": "corporate",
    "education-natural": "organic",
    "education-colorful": "colorful", 
    "education-artistic": "artistic",
    "education-futuristic": "tech"
  };

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
      count: "8 תבניות",
      benefits: ["תחושה טבעית", "רוגע ושלווה", "חמימות", "קרבה לטבע"]
    },
    {
      id: "tech",
      name: "טכנולוגי ועתידני",
      description: "עיצוב חדשני עם אלמנטים תלת-מימדיים ואפקטים מתקדמים",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
      textColor: "text-white", 
      count: "8 תבניות",
      benefits: ["חדשנות מקסימלית", "רושם טכנולוגי", "עיצוב עתידני", "אפקטים מתקדמים"]
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
      setCurrentStep(questions.length);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
    onStyleSelect(styleId);
    setShowTemplates(true);
  };

  const getRecommendedStyle = () => {
    if (selectedAnswers.length >= 2) {
      const businessType = selectedAnswers[0];
      const designPref = selectedAnswers[1]; 
      const key = `${businessType}-${designPref}`;
      return styleRecommendations[key as keyof typeof styleRecommendations] || "minimal";
    }
    return "minimal";
  };

  const recommendedStyleId = getRecommendedStyle();

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
          className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
        >
          {/* Compact Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  {currentStep < questions.length ? `🎯 ${questions[currentStep].title}` : '🎨 בחר את הסגנון שלך'}
                </h2>
                <p className="text-blue-100 text-sm">
                  {currentStep < questions.length 
                    ? `שלב ${currentStep + 1} מתוך ${questions.length}` 
                    : "בחר מתוך 70+ תבניות פרימיום"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors bg-white/10 rounded-full w-8 h-8 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {/* Compact Progress Bar */}
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

          <div className="p-6">
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
                  <div className="text-center">
                    <p className="text-gray-600 mb-6">{questions[currentStep].subtitle}</p>
                  </div>

                  <div className="grid gap-3 max-w-2xl mx-auto">
                    {questions[currentStep].options.map((option, index) => (
                      <motion.div
                        key={option.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card
                          className={`cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.01] ${
                            selectedAnswers[currentStep] === option.id
                              ? "ring-2 ring-blue-500 bg-blue-50 shadow-md scale-[1.01]"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={() => handleAnswerSelect(option.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="text-2xl">{option.icon}</div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1">
                                    {option.label}
                                  </h4>
                                  <p className="text-gray-600 text-sm">{option.description}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {selectedAnswers[currentStep] === option.id && (
                                  <Check className="w-5 h-5 text-green-500" />
                                )}
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Compact Navigation */}
                  <div className="flex justify-between items-center pt-6">
                    <Button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      קודם
                    </Button>
                    
                    <div className="flex gap-1">
                      {questions.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentStep 
                              ? 'bg-blue-600' 
                              : index < currentStep 
                                ? 'bg-green-500' 
                                : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    <Button
                      onClick={handleNext}
                      disabled={!selectedAnswers[currentStep]}
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      {currentStep === questions.length - 1 ? 'סיים' : 'הבא'}
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ) : (
                // Compact Style Selection
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex justify-start">
                    <Button
                      onClick={handleBack}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      חזור לשאלון
                    </Button>
                  </div>

                  <div className="text-center">
                    <Badge className="bg-green-100 text-green-800 px-3 py-1 mb-3">
                      ✨ המלצה מותאמת אישית
                    </Badge>
                    <p className="text-gray-600">
                      המלצה עבורך: <span className="font-bold text-blue-600">
                        {styles.find(s => s.id === recommendedStyleId)?.name}
                      </span>
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {styles.map((style, index) => (
                      <motion.div
                        key={style.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="cursor-pointer"
                        onClick={() => handleStyleSelect(style.id)}
                      >
                        <Card className={`h-full overflow-hidden transition-all duration-200 hover:shadow-lg ${
                          style.id === recommendedStyleId 
                            ? "ring-2 ring-green-400 shadow-md" 
                            : "hover:shadow-md"
                        }`}>
                          <div className={`${style.color} p-4 ${style.textColor} relative`}>
                            {style.id === recommendedStyleId && (
                              <div className="absolute top-2 right-2">
                                <Badge className="bg-green-500 text-white text-xs">
                                  🎯 מומלץ
                                </Badge>
                              </div>
                            )}
                            <div className="flex items-center justify-between mb-3">
                              {style.icon}
                              <Badge variant="secondary" className="bg-white/20 text-current text-xs">
                                {style.count}
                              </Badge>
                            </div>
                            <h4 className="font-bold text-lg mb-2">{style.name}</h4>
                            <p className="text-sm opacity-90 mb-3">{style.description}</p>
                            
                            <div className="space-y-1">
                              {style.benefits.slice(0, 2).map((benefit, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs opacity-80">
                                  <Check className="w-3 h-3" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <CardContent className="p-3">
                            <Button
                              variant={style.id === recommendedStyleId ? "default" : "outline"}
                              size="sm"
                              className={`w-full ${
                                style.id === recommendedStyleId 
                                  ? "bg-green-600 hover:bg-green-700 text-white" 
                                  : ""
                              }`}
                            >
                              {style.id === recommendedStyleId ? "🎯 בחר (מומלץ)" : "בחר סגנון"}
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
