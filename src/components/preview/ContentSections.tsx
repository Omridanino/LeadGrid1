
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Star, CheckCircle2, Users, Target, Image, Award, Zap, Cpu, Network, Rocket, ArrowLeft, Quote, Shield, Clock, ThumbsUp, TrendingUp, Heart, Sparkles } from "lucide-react";
import { ColorScheme } from "@/components/ColorEditor";

interface ContentSectionsProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  selectedElements: string[];
}

export const ContentSections = ({ content, currentColors, formData, selectedElements }: ContentSectionsProps) => {
  
  // Get consistent styling classes based on hero style
  const getCardClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'card-geometric';
      case 'glass':
        return 'card-glass';
      case 'metal':
        return 'card-metal';
      case 'image':
        return 'card-image';
      default:
        return 'card-3d';
    }
  };

  const getBackgroundClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'bg-geometric';
      case 'glass':
        return 'bg-glass';
      case 'metal':
        return 'bg-metal';
      case 'image':
        return 'bg-image';
      default:
        return 'bg-3d';
    }
  };

  const getButtonClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'btn-geometric';
      case 'glass':
        return 'btn-glass';
      case 'metal':
        return 'btn-metal';
      case 'image':
        return 'btn-image';
      default:
        return 'btn-3d';
    }
  };

  const getIconClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'icon-geometric';
      case 'glass':
        return 'icon-glass';
      case 'metal':
        return 'icon-metal';
      case 'image':
        return 'icon-image';
      default:
        return 'icon-3d';
    }
  };

  const getTypographyClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'typography-modern';
      case 'glass':
        return 'typography-modern';
      case 'metal':
        return 'typography-luxury';
      case 'image':
        return 'typography-modern';
      default:
        return 'typography-tech';
    }
  };

  const renderButton = (text: string, className?: string, isSecondary?: boolean) => {
    const baseClass = `btn-base ${getButtonClass()} ${className || ''}`;
    
    return (
      <button className={baseClass}>
        <ArrowLeft className="w-5 h-5" />
        {text}
      </button>
    );
  };

  return (
    <>
      {/* Value Proposition Section - Always show */}
      <section className={`section-standard ${getBackgroundClass()}`}>
        <div className="container-hero">
          <div className="text-center max-w-6xl mx-auto">
            <h2 className={`${getTypographyClass()} text-5xl md:text-7xl font-black mb-8 text-white animate-slide-up`}>
              {content?.sections?.emotionalSection?.title || "השירות שמשנה את המשחק"}
            </h2>
            <div className={`${getCardClass()} p-12 animate-slide-up animate-delay-1`}>
              <p className="typography-body text-xl md:text-2xl leading-relaxed text-white">
                {content?.sections?.emotionalSection?.content || `בעולם שמתפתח במהירות, ${formData.businessName || 'העסק שלנו'} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${formData.businessType || 'שירותים עסקיים'}.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Always show */}
      <section className={`section-standard ${getBackgroundClass()}`}>
        <div className="container-hero">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className={`${getTypographyClass()} text-5xl md:text-6xl font-black mb-6 text-white`}>
              {content?.sections?.whyUs?.title || "למה כדאי לבחור דווקא בנו?"}
            </h2>
            <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
              הסיבות שעושות אותנו לבחירה הטובה ביותר עבורכם
            </p>
          </div>
          
          <div className="grid-professional">
            {(content?.sections?.whyUs?.reasons || [
              { title: "שירות מקצועי ברמה הגבוהה", description: "צוות מנוסה עם מומחיות מוכחת ושנות ניסיון רבות" },
              { title: "זמינות ומהירות בשירות", description: "מענה מהיר ויעיל לכל פנייה תוך זמן קצר" },
              { title: "יחס אישי ומסור", description: "טיפול אישי בכל לקוח ופרויקט - אתם חשובים לנו" },
              { title: "מחירים הוגנים ושקופים", description: "תמחור ברור ללא הפתעות או עלויות נסתרות" }
            ]).map((reason: any, index: number) => (
              <div key={index} className={`${getCardClass()} p-8 text-center animate-scale-in animate-delay-${index + 1}`}>
                <div className={`${getIconClass()} mx-auto mb-6`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className={`${getTypographyClass()} text-2xl font-bold mb-4 text-white`}>
                  {reason.title}
                </h3>
                <p className="typography-body text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Always show */}
      <section className={`section-standard ${getBackgroundClass()}`}>
        <div className="container-hero">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className={`${getTypographyClass()} text-5xl md:text-6xl font-black mb-6 text-white`}>
              {content?.sections?.whatWeGive?.title || "מה אתם מקבלים מאיתנו"}
            </h2>
            <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
              השירותים המקצועיים שלנו מותאמים בדיוק לצרכים שלכם
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(content?.sections?.whatWeGive?.services || [
              { title: "שירות מותאם אישית", description: "פתרונות מותאמים בדיוק לצרכים הייחודיים שלכם" },
              { title: "איכות ללא פשרות", description: "רמת שירות גבוהה ועקבית בכל שלב מהתהליך" },
              { title: "ליווי מלא", description: "תמיכה צמודה לאורך כל התהליך מההתחלה ועד הסוף" },
              { title: "תוצאות מוכחות", description: "הישגים קונקרטיים ומדידים שאתם יכולים לראות" }
            ]).map((service: any, index: number) => (
              <div key={index} className={`${getCardClass()} p-8 animate-slide-up animate-delay-${index + 1}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className={getIconClass()}>
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`${getTypographyClass()} text-xl font-bold text-white mb-2`}>
                      {service.title}
                    </h3>
                    <p className="typography-body text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Always show */}
      <section className={`section-standard ${getBackgroundClass()}`}>
        <div className="container-hero">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className={`${getTypographyClass()} text-5xl md:text-6xl font-black mb-6 text-white`}>
              <Cpu className="w-12 h-12 inline-block ml-4" />
              תהליך העבודה שלנו
            </h2>
            <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
              תהליך מובנה ומקצועי שמבטיח תוצאות מעולות
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "ניתוח צרכים", desc: "בדיקה מעמיקה של הדרישות והמטרות שלכם", icon: <Target className="w-8 h-8" /> },
              { step: 2, title: "תכנון אסטרטגי", desc: "עיצוב תוכנית עבודה מותאמת אישית", icon: <Cpu className="w-8 h-8" /> },
              { step: 3, title: "ביצוע מקצועי", desc: "יישום הפתרון ברמה הגבוהה ביותר", icon: <Network className="w-8 h-8" /> },
              { step: 4, title: "מעקב ותמיכה", desc: "ליווי מתמשך ושיפורים נוספים", icon: <Rocket className="w-8 h-8" /> }
            ].map((process, index) => (
              <div key={index} className={`${getCardClass()} text-center p-8 animate-scale-in animate-delay-${index + 1}`}>
                <div className="relative mb-8">
                  <div className={`${getIconClass()} mx-auto`}>
                    <div className="text-white">
                      {process.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {process.step}
                  </div>
                </div>
                <h3 className={`${getTypographyClass()} text-xl font-bold mb-4 text-white`}>
                  {process.title}
                </h3>
                <p className="typography-body text-gray-300 leading-relaxed">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Always show */}
      <section className={`section-standard ${getBackgroundClass()}`}>
        <div className="container-hero">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className={`${getTypographyClass()} text-5xl md:text-6xl font-black mb-6 text-white`}>
              מה הלקוחות שלנו אומרים
            </h2>
            <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
              עדויות אמיתיות מלקוחות מרוצים
            </p>
          </div>
          
          <div className="grid-testimonials">
            {(content?.sections?.testimonials || [
              { name: "דני כהן", role: "מנהל עסק", content: `השירות של ${formData.businessName || 'העסק'} פשוט מעולה! הצוות המקצועי והיחס האישי עשו את כל ההבדל.` },
              { name: "שרה לוי", role: "יזמת", content: `עבדנו עם ${formData.businessName || 'החברה'} על מספר פרויקטים והתוצאות תמיד מעולות. מקצועיות ברמה אחרת!` },
              { name: "מיכל רוזן", role: "בעלת חנות", content: "הליווי והתמיכה שקיבלתי היו פשוט מדהימים. השירות החרג מכל הציפיות!" }
            ]).map((testimonial: any, index: number) => (
              <div key={index} className={`${getCardClass()} p-8 animate-scale-in animate-delay-${index + 1}`}>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                
                <p className="typography-body text-lg leading-relaxed text-white mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`${getTypographyClass()} font-bold text-white`}>
                      {testimonial.name}
                    </p>
                    {testimonial.role && (
                      <p className="typography-body text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Always show */}
      <section className={`section-standard ${getBackgroundClass()}`}>
        <div className="container-hero">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className={`${getTypographyClass()} text-5xl md:text-6xl font-black mb-6 text-white`}>
              שאלות נפוצות
            </h2>
            <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
              תשובות לשאלות הנפוצות ביותר
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { question: "כמה זמן לוקח התהליך?", answer: "התהליך נע בין שבוע לחודש, תלוי במורכבות הפרויקט והדרישות הספציפיות שלכם." },
              { question: "איך הגישה שלכם שונה?", answer: "אנחנו מתמחים בפתרונות מותאמים אישית ובליווי צמוד לאורך כל התהליך." },
              { question: "מה כלול במחיר?", answer: "המחיר כולל את כל השירותים הבסיסיים, ליווי מלא ותמיכה לאחר הפרויקט." },
              { question: "איך מתחילים?", answer: "פשוט צרו קשר איתנו לייעוץ ראשוני חינמי ובחינת האפשרויות המתאימות לכם." }
            ].map((faq, index) => (
              <div key={index} className={`${getCardClass()} p-8 animate-slide-up animate-delay-${index + 1}`}>
                <h3 className={`${getTypographyClass()} text-xl font-bold mb-4 text-white`}>
                  {faq.question}
                </h3>
                <p className="typography-body text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Always show */}
      <section className={`section-standard ${getBackgroundClass()} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        
        <div className="container-hero text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${getTypographyClass()} text-5xl md:text-6xl font-black mb-8 text-white animate-slide-up`}>
              {content?.contactTitle || 'מוכנים להתחיל?'}
            </h2>
            
            <div className={`${getCardClass()} p-8 mb-12 animate-slide-up animate-delay-1`}>
              <p className="typography-body text-xl md:text-2xl text-white leading-relaxed">
                בואו ניצור יחד משהו מדהים שיקדם את העסק שלכם
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12 animate-slide-up animate-delay-2">
              <div className={`${getCardClass()} p-6`}>
                <div className="flex items-center gap-4 justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="typography-body text-white font-medium">050-1234567</span>
                </div>
              </div>
              <div className={`${getCardClass()} p-6`}>
                <div className="flex items-center gap-4 justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="typography-body text-white font-medium">info@business.co.il</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up animate-delay-3">
              {renderButton('צור קשר עכשיו', 'text-lg')}
              {renderButton('קבל הצעת מחיר', 'text-lg')}
            </div>

            {/* Enhanced Trust Badges */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up animate-delay-4">
              {[
                { icon: <Shield className="w-6 h-6" />, title: 'מוגן ומאובטח', desc: 'ביטחון מלא' },
                { icon: <Clock className="w-6 h-6" />, title: 'מענה מהיר', desc: 'תוך 24 שעות' },
                { icon: <Heart className="w-6 h-6" />, title: 'ללא התחייבות', desc: 'ייעוץ חינם' }
              ].map((badge, index) => (
                <div key={index} className={`${getCardClass()} p-6 text-center`}>
                  <div className={`${getIconClass()} mx-auto mb-3 text-white`}>
                    {badge.icon}
                  </div>
                  <h3 className={`${getTypographyClass()} font-semibold text-white mb-1`}>
                    {badge.title}
                  </h3>
                  <p className="typography-body text-gray-300 text-sm">
                    {badge.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
