
import * as React from "react"
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'

interface HeroSectionCleanProps {
  formData: any;
  currentColors: any;
  content?: any;
}

// פונקציה לקבלת וריאציה רנדומלית - 6 וריאציות
const getRandomVariation = () => {
  return Math.floor(Math.random() * 6); // 0, 1, 2, 3, 4, או 5
};

// פונקציה לקבלת סגנון רקע רנדומלי - 6 סגנונות
const getRandomBackgroundStyle = (variation: number) => {
  const styles = [
    "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-blue-950/20",
    "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-950 dark:to-purple-950/20",
    "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-950 dark:to-green-950/20",
    "bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-950 dark:to-orange-950/20",
    "bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-950 dark:to-cyan-950/20",
    "bg-gradient-to-br from-rose-50 to-pink-100 dark:from-gray-950 dark:to-rose-950/20"
  ];
  return styles[variation] || styles[0];
};

// פונקציה לקבלת צבע כפתור רנדומלי - 6 סגנונות
const getRandomButtonStyle = (variation: number) => {
  const styles = [
    "bg-blue-600 hover:bg-blue-700 text-white",
    "bg-purple-600 hover:bg-purple-700 text-white",
    "bg-green-600 hover:bg-green-700 text-white",
    "bg-orange-600 hover:bg-orange-700 text-white",
    "bg-cyan-600 hover:bg-cyan-700 text-white",
    "bg-rose-600 hover:bg-rose-700 text-white"
  ];
  return styles[variation] || styles[0];
};

// פונקציה לקבלת צבע אקסנט רנדומלי - 6 צבעים
const getRandomAccentColor = (variation: number) => {
  const colors = [
    "border-blue-200 dark:border-blue-800",
    "border-purple-200 dark:border-purple-800", 
    "border-green-200 dark:border-green-800",
    "border-orange-200 dark:border-orange-800",
    "border-cyan-200 dark:border-cyan-800",
    "border-rose-200 dark:border-rose-800"
  ];
  return colors[variation] || colors[0];
};

export const HeroSectionClean = ({ formData, currentColors, content }: HeroSectionCleanProps) => {
    // קבלת וריאציה רנדומלית וקבועה לכל עמוד
    const [variation] = React.useState(() => getRandomVariation());
    
    // Helper function to get text style classes
    const getTextStyleClasses = (elementStyle: string) => {
      switch (elementStyle) {
        case "black-text":
          return "text-black";
        case "white-text":
          return "text-white";
        case "gold-text":
          return "text-yellow-400";
        case "gradient-gold-text":
          return "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent";
        case "gradient-purple-text":
          return "bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent";
        case "gradient-blue-text":
          return "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";
        default:
          return "text-gray-900 dark:text-white";
      }
    };

    // Helper function to get button style classes
    const getButtonStyleClasses = (elementStyle: string) => {
      switch (elementStyle) {
        case "black-on-white":
          return "bg-white text-black border border-black";
        case "white-on-black":
          return "bg-black text-white border border-white";
        case "gradient-gold-black":
          return "bg-gradient-to-r from-yellow-400 to-black text-white border-0";
        case "gradient-gold-white":
          return "bg-gradient-to-r from-yellow-400 to-white text-black border-0";
        case "gradient-purple-tech":
          return "bg-gradient-to-r from-purple-600 to-white text-white border-0";
        default:
          return getRandomButtonStyle(variation);
      }
    };
    
    const businessName = content?.headline || formData?.businessName || "שם העסק"
    const businessStory = content?.subheadline || formData?.businessStory || "פתרונות נקיים ופשוטים"
    const mainServices = content?.description || formData?.mainServices || "אנחנו מביאים לכם פתרונות פשוטים ויעילים שעוזרים לכם להצליח"
    
    return (
        <div className={`min-h-screen ${getRandomBackgroundStyle(variation)}`} dir="rtl">
            <main>
                <section className="py-24 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center space-y-8">
                            {content?.badge ? (
                                <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${getRandomAccentColor(variation)}`}>
                                    <Zap className="w-4 h-4" />
                                    <span className="text-sm font-medium">{content.badge}</span>
                                </div>
                            ) : (
                                <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${getRandomAccentColor(variation)}`}>
                                    <Zap className="w-4 h-4" />
                                    <span className="text-sm font-medium">ברוכים הבאים ל{businessName}</span>
                                </div>
                            )}
                            
                            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight ${content?.headlineStyle ? getTextStyleClasses(content.headlineStyle) : 'text-gray-900 dark:text-white'}`}>
                                {businessStory}
                            </h1>
                            
                            <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${content?.subheadlineStyle ? getTextStyleClasses(content.subheadlineStyle) : 'text-gray-600 dark:text-gray-300'}`}>
                                {mainServices}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                                    <Button
                                        key={index}
                                        size="lg"
                                        className={`px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${getButtonStyleClasses(button.style || 'default')}`}
                                    >
                                        {button.text}
                                    </Button>
                                )) || (
                                    <>
                                        <Button
                                            size="lg"
                                            className={`px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${getRandomButtonStyle(variation)}`}
                                        >
                                            התחל עכשיו
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="px-8 py-3 text-lg rounded-xl"
                                        >
                                            למד עוד
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                        
                        <div className="mt-20">
                            <div className={`relative mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-2xl ${getRandomAccentColor(variation)} bg-white dark:bg-gray-950`}>
                                <div className="aspect-[16/9] relative rounded-2xl p-8" style={{
                                    background: `linear-gradient(135deg, ${
                                        variation === 0 ? 'rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%' :
                                        variation === 1 ? 'rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%' :
                                        variation === 2 ? 'rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%' :
                                        variation === 3 ? 'rgba(249, 115, 22, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%' :
                                        variation === 4 ? 'rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%' :
                                        'rgba(244, 63, 94, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%'
                                    })`
                                }}>
                                    <div className="space-y-4">
                                        <div className={`h-4 rounded w-3/4 ${
                                            variation === 0 ? 'bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-600 dark:to-purple-600' :
                                            variation === 1 ? 'bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600' :
                                            variation === 2 ? 'bg-gradient-to-r from-green-300 to-emerald-300 dark:from-green-600 dark:to-emerald-600' :
                                            variation === 3 ? 'bg-gradient-to-r from-orange-300 to-red-300 dark:from-orange-600 dark:to-red-600' :
                                            variation === 4 ? 'bg-gradient-to-r from-cyan-300 to-blue-300 dark:from-cyan-600 dark:to-blue-600' :
                                            'bg-gradient-to-r from-rose-300 to-pink-300 dark:from-rose-600 dark:to-pink-600'
                                        }`}></div>
                                        <div className={`h-4 rounded w-1/2 ${
                                            variation === 0 ? 'bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-600 dark:to-purple-600' :
                                            variation === 1 ? 'bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600' :
                                            variation === 2 ? 'bg-gradient-to-r from-green-300 to-emerald-300 dark:from-green-600 dark:to-emerald-600' :
                                            variation === 3 ? 'bg-gradient-to-r from-orange-300 to-red-300 dark:from-orange-600 dark:to-red-600' :
                                            variation === 4 ? 'bg-gradient-to-r from-cyan-300 to-blue-300 dark:from-cyan-600 dark:to-blue-600' :
                                            'bg-gradient-to-r from-rose-300 to-pink-300 dark:from-rose-600 dark:to-pink-600'
                                        }`}></div>
                                        <div className={`h-32 rounded-lg ${
                                            variation === 0 ? 'bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800' :
                                            variation === 1 ? 'bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800' :
                                            variation === 2 ? 'bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-800 dark:to-emerald-800' :
                                            variation === 3 ? 'bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-800 dark:to-red-800' :
                                            variation === 4 ? 'bg-gradient-to-br from-cyan-200 to-blue-200 dark:from-cyan-800 dark:to-blue-800' :
                                            'bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-800 dark:to-pink-800'
                                        }`}></div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className={`h-20 rounded ${
                                                variation === 0 ? 'bg-blue-100 dark:bg-blue-800' :
                                                variation === 1 ? 'bg-purple-100 dark:bg-purple-800' :
                                                variation === 2 ? 'bg-green-100 dark:bg-green-800' :
                                                variation === 3 ? 'bg-orange-100 dark:bg-orange-800' :
                                                variation === 4 ? 'bg-cyan-100 dark:bg-cyan-800' :
                                                'bg-rose-100 dark:bg-rose-800'
                                            }`}></div>
                                            <div className={`h-20 rounded ${
                                                variation === 0 ? 'bg-purple-100 dark:bg-purple-800' :
                                                variation === 1 ? 'bg-pink-100 dark:bg-pink-800' :
                                                variation === 2 ? 'bg-emerald-100 dark:bg-emerald-800' :
                                                variation === 3 ? 'bg-red-100 dark:bg-red-800' :
                                                variation === 4 ? 'bg-blue-100 dark:bg-blue-800' :
                                                'bg-pink-100 dark:bg-pink-800'
                                            }`}></div>
                                            <div className={`h-20 rounded ${
                                                variation === 0 ? 'bg-blue-100 dark:bg-blue-800' :
                                                variation === 1 ? 'bg-purple-100 dark:bg-purple-800' :
                                                variation === 2 ? 'bg-green-100 dark:bg-green-800' :
                                                variation === 3 ? 'bg-orange-100 dark:bg-orange-800' :
                                                variation === 4 ? 'bg-cyan-100 dark:bg-cyan-800' :
                                                'bg-rose-100 dark:bg-rose-800'
                                            }`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
