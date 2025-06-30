
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Palette, Zap, Sparkles, Building, Leaf, Cpu, Check } from "lucide-react";
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
        { 
          id: "creative", 
          label: "עסק יצירתי ואמנותי", 
          description: "סטודיו, גלריה, אמן, מעצב",
          icon: "🎨"
        },
        { 
          id: "tech", 
          label: "טכנולוגיה וחדשנות", 
          description: "סטארטאפ, הייטק, פיתוח, AI",
          icon: "🚀" 
        },
        { 
          id: "corporate", 
          label: "עסק מסורתי ומקצועי", 
          description: "עורך דין, רואה חשבון, ייעוץ עסקי",
          icon: "💼" 
        },
        { 
          id: "wellness", 
          label: "בריאות, יופי ורווחה", 
          description: "קוסמטיקה, יוגה, טיפולים, ספא",
          icon: "🌿" 
        },
        { 
          id: "retail", 
          label: "מכירות ושירותים", 
          description: "חנות, מסעדה, שירותים לצרכן",
          icon: "🛍️" 
        },
        { 
          id: "education", 
          label: "חינוך והדרכה", 
          description: "קורסים, הדרכות, מרכז לימוד",
          icon: "📚" 
        }
      ]
    },
    {
      id: "design-preference",
      title: "איזה סגנון עיצוב מדבר אליך הכי הרבה?",
      subtitle: "בחר את הסגנון שהכי מתאים לאישיות המותג שלך",
      options: [
        { 
          id: "minimal", 
          label: "פשוט, נקי ומינימלי", 
          description: "פחות זה יותר - עיצוב נקי וממוקד",
          icon: "✨" 
        },
        { 
          id: "colorful", 
          label: "צבעוני, נועז ואנרגטי", 
          description: "צבעים חזקים שמושכים תשומת לב",
          icon: "🌈" 
        },
        { 
          id: "artistic", 
          label: "יצירתי, ייחודי ואמנותי", 
          description: "עיצוב שבורר גבולות ומפתיע",
          icon: "🎭" 
        },
        { 
          id: "elegant", 
          label: "אלגנטי, מקצועי וקלאסי", 
          description: "עיצוב עסקי שמעביר אמינות",
          icon: "👔" 
        },
        { 
          id: "natural", 
          label: "טבעי, רך וחמים", 
          description: "עיצוב שמזכיר טבע ושלווה",
          icon: "🍃" 
        },
        { 
          id: "futuristic", 
          label: "עתידני, טכנולוגי ומתקדם", 
          description: "עיצוב שמביא את העתיד להיום",
          icon: "⚡" 
        }
      ]
    },
    {
      id: "target-audience",
      title: "למי הדף מיועד בעיקר?",
      subtitle: "הבנת הקהל היעד תעזור לנו לבחור את הטון הנכון",
      options: [
        { 
          id: "young", 
          label: "צעירים ובני 20-35", 
          description: "דור המילניום וZ - דיגיטל נייטיב",
          icon: "🎯" 
        },
        { 
          id: "professional", 
          label: "אנשי מקצוע 30-50", 
          description: "קהל עסקי עם כוח קנייה",
          icon: "💰" 
        },
        { 
          id: "senior", 
          label: "קהל בוגר 40+", 
          description: "מבוגרים עם ניסיון וידע",
          icon: "🎓" 
        },
        { 
          id: "mixed", 
          label: "קהל מעורב מכל הגילאים", 
          description: "פונה לכל הקבוצות",
          icon: "👥" 
        }
      ]
    },
    {
      id: "business-goal",
      title: "מה המטרה העיקרית של הדף?",
      subtitle: "זה יעזור לנו להתאים את העיצוב למטרה",
      options: [
        { 
          id: "sales", 
          label: "מכירות ורכישות", 
          description: "לקוחות יקנו מוצרים או שירותים",
          icon: "💳" 
        },
        { 
          id: "leads", 
          label: "איסוף לידים וצרכים", 
          description: "לקוחות פוטנציאליים ישאירו פרטים",
          icon: "📋" 
        },
        { 
          id: "branding", 
          label: "חיזוק המותג והמודעות", 
          description: "להעלות את הכרת המותג",
          icon: "🏆" 
        },
        { 
          id: "engagement", 
          label: "מעורבות וקהילה", 
          description: "ליצור קהילה של עוקבים",
          icon: "❤️" 
        }
      ]
    }
  ];

  const styleRecommendations = {
    // Business type + Design preference combinations
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
      count: "15 תבניות פרימיום",
      benefits: ["פשטות מקסימלית", "קריאות מעולה", "טעינה מהירה", "מיקוד במסר"]
    },
    {
      id: "colorful", 
      name: "נועז וצבעוני",
      description: "צבעים חזקים וגרדיאנטים דינמיים שמושכים תשומת לב מקסימלית",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500",
      textColor: "text-white",
      count: "15 תבניות פרימיום",
      benefits: ["זכירות גבוהה", "בלטה מהקהל", "אנרגיה חיובית", "עידוד פעולה"]
    },
    {
      id: "artistic",
      name: "אמנותי וניסיוני", 
      description: "עיצובים ייחודיים עם אלמנטים יצירתיים וחדשניים שמפתיעים",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600",
      textColor: "text-white", 
      count: "15 תבניות פרימיום",
      benefits: ["יצירתיות מקסימלית", "רושם בל יימחה", "ביטוי אישיות", "חוויה ייחודית"]
    },
    {
      id: "corporate",
      name: "עסקי ואלגנטי",
      description: "מקצועי ואמין, מושלם לעסקים מסורתיים ולחברות גדולות",
      icon: <Building className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-600 to-blue-800", 
      textColor: "text-white",
      count: "15 תבניות פרימיום",
      benefits: ["אמינות מקסימלית", "מקצועיות", "אלגנטיות", "בניית אמון"]
    },
    {
      id: "organic",
      name: "אורגני ורך",
      description: "צבעים טבעיים וצורות רכות, מושלם לעסקי בריאות ורווחה",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-gradient-to-br from-green-400 to-emerald-600",
      textColor: "text-white",
      count: "5 תבניות פרימיום",
      benefits: ["תחושה טבעית", "רוגע ושלווה", "חמימות", "קרבה לטבע"]
    },
    {
      id: "tech",
      name: "טכנולוגי ועתידני",
      description: "עיצוב חדשני עם אלמנטים תלת-מימדיים ואפקטים מתקדמים",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
      textColor: "text-white", 
      count: "5 תבניות פרימיום",
      benefits: ["חדשנות מקסימלית", "רושם טכנולוגי", "עיצוב עתידני", "אפקטים מתקדמים"]
    }
  ];

  const handleAnswerSelect = (answerId: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentStep] = answerId;
    setSelectedAnswers(newAnswers);

    // Auto-advance after selection with slight delay for better UX
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Calculate recommendation and show styles
        setCurrentStep(questions.length);
      }
    }, 300);
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
      <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" dir="rtl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">🎯 בוא נמצא את העיצוב המושלם עבורך</h2>
                  <p className="text-blue-100 text-lg">
                    {currentStep < questions.length 
                      ? `שלב ${currentStep + 1} מתוך ${questions.length} | כ-30 שניות` 
                      : "🎉 בחר את הסגנון שלך מתוך 70 תבניות פרימיום"}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors text-2xl font-bold bg-white/10 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              
              {/* Progress Bar */}
              {currentStep < questions.length && (
                <div className="bg-white/20 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    className="h-full bg-white rounded-full shadow-lg"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              )}
            </div>
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
                  className="space-y-8"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {questions[currentStep].title}
                    </h3>
                    <p className="text-gray-600 text-lg">{questions[currentStep].subtitle}</p>
                  </div>

                  <div className="grid gap-4 max-w-3xl mx-auto">
                    {questions[currentStep].options.map((option, index) => (
                      <motion.div
                        key={option.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card
                          className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                            selectedAnswers[currentStep] === option.id
                              ? "ring-2 ring-purple-500 bg-purple-50 shadow-lg scale-[1.02]"
                              : "hover:bg-gray-50 border-gray-200"
                          }`}
                          onClick={() => handleAnswerSelect(option.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="text-3xl">{option.icon}</div>
                                <div>
                                  <h4 className="font-bold text-gray-900 mb-1 text-lg">
                                    {option.label}
                                  </h4>
                                  <p className="text-gray-600">{option.description}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {selectedAnswers[currentStep] === option.id && (
                                  <Check className="w-6 h-6 text-green-500" />
                                )}
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                // Style Selection
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="text-center mb-8">
                    <div className="mb-4">
                      <Badge className="bg-green-100 text-green-800 px-4 py-2 text-lg">
                        ✨ המלצה מותאמת אישית
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      בחר את סגנון העיצוב שלך
                    </h3>
                    <p className="text-gray-600 text-lg">
                      על בסיס התשובות שלך, אנחנו ממליצים על <span className="font-bold text-purple-600">
                        {styles.find(s => s.id === recommendedStyleId)?.name}
                      </span>
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {styles.map((style, index) => (
                      <motion.div
                        key={style.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="cursor-pointer"
                        onClick={() => handleStyleSelect(style.id)}
                      >
                        <Card className={`h-full overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                          style.id === recommendedStyleId 
                            ? "ring-4 ring-green-400 shadow-xl" 
                            : "hover:shadow-xl"
                        }`}>
                          <div className={`${style.color} p-6 ${style.textColor} relative`}>
                            {style.id === recommendedStyleId && (
                              <div className="absolute top-2 right-2">
                                <Badge className="bg-green-500 text-white text-xs">
                                  🎯 מומלץ
                                </Badge>
                              </div>
                            )}
                            <div className="flex items-center justify-between mb-4">
                              {style.icon}
                              <Badge variant="secondary" className="bg-white/20 text-current text-xs">
                                {style.count}
                              </Badge>
                            </div>
                            <h4 className="font-bold text-xl mb-2">{style.name}</h4>
                            <p className="text-sm opacity-90 mb-4">{style.description}</p>
                            
                            <div className="space-y-1">
                              {style.benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs opacity-80">
                                  <Check className="w-3 h-3" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <Button
                              variant={style.id === recommendedStyleId ? "default" : "outline"}
                              className={`w-full ${
                                style.id === recommendedStyleId 
                                  ? "bg-green-600 hover:bg-green-700 text-white shadow-lg" 
                                  : ""
                              }`}
                            >
                              {style.id === recommendedStyleId ? "🎯 בחר המלצה (מומלץ)" : "בחר סגנון זה"}
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

