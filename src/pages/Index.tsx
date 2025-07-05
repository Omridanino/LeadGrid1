
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, 
  Zap, 
  Rocket, 
  Star, 
  Crown,
  Users,
  TrendingUp,
  Shield,
  Globe,
  ArrowLeft,
  ChevronLeft,
  CheckCircle,
  PlayCircle,
  Layers,
  Database,
  Cpu,
  Code2,
  Palette,
  Layout,
  Type,
  Image,
  Video
} from 'lucide-react';
import GlassIcon from "@/components/ui/glass-icon";
import LandingPageQuestionnaire from "@/components/LandingPageQuestionnaire";

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  const handleOpenQuestionnaire = () => {
    setIsQuestionnaireOpen(true);
  };

  const handleCloseQuestionnaire = () => {
    setIsQuestionnaireOpen(false);
  };

  const templateCategories = [
    {
      id: 'basic',
      name: 'תבניות בסיסיות',
      price: '89.90₪',
      period: 'לחודש',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      description: 'תבניות מקצועיות לדפי נחיתה יעילים',
      features: ['10+ תבניות מוכנות', 'עריכה חזותית', 'תמיכה בסיסית', 'ייצוא HTML'],
      templates: 4,
      icon: Star
    },
    {
      id: 'premium',
      name: 'תבניות פרימיום',
      price: '119.90₪',
      period: 'לחודש',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      description: 'תבניות מתקדמות עם אפקטים ואנימציות',
      features: ['25+ תבניות פרימיום', 'אפקטים מתקדמים', 'אנימציות 3D', 'תמיכה מועדפת'],
      templates: 6,
      icon: Crown,
      popular: true
    },
    {
      id: 'exclusive',
      name: 'תבניות אקסלוסיביות',
      price: '149.90₪',
      period: 'לחודש',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/30',
      description: 'תבניות יוקרה עם עיצוב חדשני ורכיבים אינטראקטיביים',
      features: ['40+ תבניות יוקרה', 'רכיבים אינטראקטיביים', 'עיצוב מותאם אישית', 'תמיכה VIP'],
      templates: 8,
      icon: Rocket
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'יצירה מהירה',
      description: 'צור דף נחיתה מקצועי תוך דקות',
      color: 'text-yellow-400'
    },
    {
      icon: Palette,
      title: 'עיצוב מתקדם',
      description: 'אפקטים ואנימציות ברמה עולמית',
      color: 'text-pink-400'
    },
    {
      icon: Code2,
      title: 'קוד נקי',
      description: 'HTML מוכן להטמעה בכל פלטפורמה',
      color: 'text-blue-400'
    },
    {
      icon: TrendingUp,
      title: 'ממירות גבוהות',
      description: 'עיצובים מבוססי נתונים להמרות מקסימליות',
      color: 'text-green-400'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'בחר תבנית',
      description: 'בחר מתוך עשרות תבניות מעוצבות',
      icon: Layout,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02', 
      title: 'התאם אישית',
      description: 'ערוך תוכן, צבעים ואפקטים בקלות',
      icon: Palette,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'פרסם',
      description: 'קבל קוד HTML מוכן להטמעה',
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: 'הצלח',
      description: 'צפה בממירות גבוהות ומכירות מוגברות',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      title: 'עיצוב ברמה עולמית',
      description: 'תבניות מעוצבות על ידי מעצבים מובילים מחו"ל',
      icon: Star,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'טכנולוגיה מתקדמת',
      description: 'אפקטים ואנימציות חדשניות שמרשימות מבקרים',
      icon: Cpu,
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      title: 'ביצועים מהירים',
      description: 'קוד מוטב לטעינה מהירה וחוויית משתמש מושלמת',
      icon: Zap,
      gradient: 'from-green-400 to-cyan-500'
    },
    {
      title: 'תמיכה מקצועית',
      description: 'צוות מומחים זמין לסייע בכל שאלה או בעיה',
      icon: Shield,
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" dir="rtl">
      {/* Advanced Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Gradient overlays with animations */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse_at_top,rgba(255,215,0,0.15),transparent_50%)',
              'radial-gradient(ellipse_at_top_right,rgba(192,192,192,0.15),transparent_50%)',
              'radial-gradient(ellipse_at_top_left,rgba(255,215,0,0.15),transparent_50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse_at_bottom_right,rgba(255,105,180,0.2),transparent_60%)',
              'radial-gradient(ellipse_at_bottom_left,rgba(64,224,208,0.2),transparent_60%)',
              'radial-gradient(ellipse_at_bottom,rgba(255,105,180,0.2),transparent_60%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Floating glass orbs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full backdrop-blur-sm border border-white/10"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 8px 25px rgba(0, 0, 0, 0.1)'
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Enhanced floating particles with gold/silver colors */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-yellow-400/40' : i % 3 === 1 ? 'bg-gray-300/40' : 'bg-white/30'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Morphing liquid shapes */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`liquid-${i}`}
            className="absolute opacity-20"
            style={{
              width: `${150 + Math.random() * 200}px`,
              height: `${150 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i === 0 ? 'radial-gradient(circle, rgba(255,215,0,0.3), transparent)' : 
                         i === 1 ? 'radial-gradient(circle, rgba(192,192,192,0.3), transparent)' :
                                  'radial-gradient(circle, rgba(255,105,180,0.3), transparent)',
            }}
            animate={{
              borderRadius: [
                '60% 40% 30% 70% / 60% 30% 70% 40%',
                '30% 60% 70% 40% / 50% 60% 30% 60%',
                '40% 30% 60% 70% / 40% 70% 50% 30%',
                '60% 40% 30% 70% / 60% 30% 70% 40%'
              ],
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              LeadGrid
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              onClick={handleOpenQuestionnaire}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-purple-500/30 transition-all duration-300"
            >
              <Rocket className="w-5 h-5 ml-2" />
              צור דף עכשיו
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 text-sm mb-6">
              <Sparkles className="w-4 h-4 ml-2" />
              הפלטפורמה המתקדמת ביותר ליצירת דפי נחיתה
            </Badge>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span 
                className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                style={{ 
                  backgroundSize: '200% 200%',
                  background: 'linear-gradient(45deg, hsl(var(--gold)), hsl(var(--silver)), hsl(var(--gold)))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                יצירת דפי נחיתה
              </motion.span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
                }}
                style={{ 
                  backgroundSize: '200% 200%',
                  background: 'linear-gradient(45deg, hsl(var(--gold)), hsl(var(--silver)), hsl(var(--platinum)))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                מקצועיים תוך דקות
              </motion.span>
            </motion.h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              פלטפורמה חדשנית המאפשרת ליצור דפי נחיתה מתקדמים עם 
              <span className="text-blue-400 font-semibold"> אפקטים מטורפים</span>,
              <span className="text-purple-400 font-semibold"> אנימציות מתקדמות</span> ו
              <span className="text-pink-400 font-semibold">עיצוב ברמה עולמית</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              onClick={handleOpenQuestionnaire}
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <Rocket className="w-6 h-6 ml-3" />
              התחל בחינם עכשיו
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
            >
              <PlayCircle className="w-6 h-6 ml-3" />
              צפה בדמו
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '50+', label: 'תבניות מעוצבות' },
              { number: '10K+', label: 'לקוחות מרוצים' },
              { number: '99%', label: 'שביעות רצון' },
              { number: '24/7', label: 'תמיכה מקצועית' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Template Categories Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 px-4 py-2 text-sm mb-6">
              <Crown className="w-4 h-4 ml-2" />
              תבניות לכל צורך
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                בחר את החבילה
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                המושלמת עבורך
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              מבסיסי ועד יוקרה - מצא את התבנית שתוביל את העסק שלך להצלחה
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {templateCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  {category.popular && (
                    <div className="absolute -top-4 right-6 z-10">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-xs">
                        הכי פופולרי
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`h-full bg-gradient-to-br ${category.bgColor} border-2 ${category.borderColor} backdrop-blur-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-2xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {category.price}
                        </span>
                        <span className="text-gray-400 text-lg">/{category.period}</span>
                      </div>
                      
                      <p className="text-gray-300 mb-6">{category.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        {category.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button
                        onClick={handleOpenQuestionnaire}
                        className={`w-full bg-gradient-to-r ${category.color} hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white py-3 rounded-xl`}
                      >
                        התחל עכשיו
                      </Button>
                      
                      <div className="mt-4 text-center">
                        <span className="text-sm text-gray-400">
                          {category.templates} תבניות זמינות
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 px-4 py-2 text-sm mb-6">
              <Zap className="w-4 h-4 ml-2" />
              תהליך פשוט ומהיר
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                איך זה עובד?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              4 שלבים פשוטים לדף נחיתה מקצועי שיעלה את ההמרות שלך
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 text-sm mb-6">
              <Star className="w-4 h-4 ml-2" />
              למה LeadGrid?
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                יתרונות שאין לאף אחד אחר
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const glassVariants = ['gold', 'silver', 'platinum', 'rainbow'] as const;
              const variant = glassVariants[index % glassVariants.length];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 10,
                    z: 50
                  }}
                  className="text-center group perspective-1000"
                >
                  <motion.div
                    className="relative"
                    whileHover={{ rotateX: 5, rotateY: 5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Card className="h-full bg-gradient-to-br from-black/40 via-gray-900/30 to-black/40 border border-white/10 backdrop-blur-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                      {/* Glass morphism overlay */}
                      <motion.div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: `linear-gradient(135deg, 
                            rgba(255, 255, 255, 0.1) 0%,
                            transparent 30%,
                            transparent 70%,
                            rgba(255, 255, 255, 0.05) 100%)`,
                        }}
                        whileHover={{ opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Animated border glow */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: `linear-gradient(45deg, 
                            rgba(255, 215, 0, 0.2), 
                            rgba(192, 192, 192, 0.2), 
                            rgba(255, 215, 0, 0.2))`,
                          backgroundSize: '200% 200%'
                        }}
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      <CardContent className="p-8 relative z-10">
                        <motion.div 
                          className="mx-auto mb-6"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <GlassIcon 
                            icon={Icon} 
                            size="lg" 
                            variant={variant}
                          />
                        </motion.div>
                        
                        <motion.h3 
                          className="text-xl font-bold text-white mb-3"
                          whileHover={{ scale: 1.05 }}
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-300"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {feature.description}
                        </motion.p>
                      </CardContent>
                      
                      {/* Floating sparkles on hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.5 }}
                      >
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`,
                            }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                      </motion.div>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                למה אנחנו שונים?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              אנחנו לא רק עוד פלטפורמה - אנחנו מהפכה בעולם יצירת דפי הנחיתה
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 flex-shrink-0`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                          <p className="text-gray-300 text-lg leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  מוכן להתחיל?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                הצטרף לאלפי יזמים שכבר יצרו דפי נחיתה מקצועיים ומוכרים יותר
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Button
                  onClick={handleOpenQuestionnaire}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-10 py-4 text-lg rounded-xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  <Rocket className="w-6 h-6 ml-3" />
                  התחל בחינם עכשיו
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-xl backdrop-blur-sm"
                >
                  <PlayCircle className="w-6 h-6 ml-3" />
                  צפה בדמו חי
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                LeadGrid
              </span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 LeadGrid. כל הזכויות שמורות.
            </div>
          </div>
        </div>
      </footer>
      
      {/* Questionnaire Modal */}
      <LandingPageQuestionnaire 
        isOpen={isQuestionnaireOpen} 
        onClose={handleCloseQuestionnaire} 
      />
    </div>
  );
};

export default Index;
