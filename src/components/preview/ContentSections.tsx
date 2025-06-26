
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

  const renderButton = (text: string, className?: string) => {
    const baseClass = `btn-base ${getButtonClass()} ${className || ''}`;
    
    return (
      <button className={baseClass}>
        <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style={{width: '20px', height: '20px'}} />
        {text}
      </button>
    );
  };

  // Generate default content with business name integration
  const businessName = formData?.businessName || 'העסק שלי';
  const businessType = formData?.businessType || 'שירותים עסקיים';

  return (
    <div className="w-full">
      {/* Value Proposition Section */}
      <section className={`py-16 px-4 ${getBackgroundClass()}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className={`${getTypographyClass()} text-4xl md:text-5xl font-black mb-8 text-white animate-slide-up`}>
              {content?.sections?.emotionalSection?.title || "השירות שמשנה את המשחק"}
            </h2>
            <div className={`${getCardClass()} p-8 animate-slide-up animate-delay-1`}>
              <p className="typography-body text-lg md:text-xl leading-relaxed text-white">
                {content?.sections?.emotionalSection?.content || `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${businessType}.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-16 px-4 ${getBackgroundClass()}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className={`${getTypographyClass()} text-4xl md:text-5xl font-black mb-6 text-white`}>
              {content?.sections?.whyUs?.title || "למה כדאי לבחור דווקא בנו?"}
            </h2>
            <p className="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              הסיבות שעושות אותנו לבחירה הטובה ביותר עבורכם
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(content?.sections?.whyUs?.reasons || [
              { title: "שירות מקצועי ברמה הגבוהה", description: "צוות מנוסה עם מומחיות מוכחת ושנות ניסיון רבות" },
              { title: "זמינות ומהירות בשירות", description: "מענה מהיר ויעיל לכל פנייה תוך זמן קצר" },
              { title: "יחס אישי ומסור", description: "טיפול אישי בכל לקוח ופרויקט - אתם חשובים לנו" },
              { title: "מחירים הוגנים ושקופים", description: "תמחור ברור ללא הפתעות או עלויות נסתרות" }
            ]).map((reason: any, index: number) => (
              <div key={index} className={`${getCardClass()} p-6 text-center animate-scale-in animate-delay-${index + 1}`}>
                <div className={`${getIconClass()} mx-auto mb-4 w-12 h-12 flex items-center justify-center`}>
                  <img src="https://img.icons8.com/3d-fluency/94/trophy.png" alt="trophy" style={{width: '32px', height: '32px'}} />
                </div>
                <h3 className={`${getTypographyClass()} text-lg font-bold mb-3 text-white`}>
                  {reason.title}
                </h3>
                <p className="typography-body text-gray-300 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-16 px-4 ${getBackgroundClass()}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className={`${getTypographyClass()} text-4xl md:text-5xl font-black mb-6 text-white`}>
              {content?.sections?.whatWeGive?.title || "מה אתם מקבלים מאיתנו"}
            </h2>
            <p className="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              השירותים המקצועיים שלנו מותאמים בדיוק לצרכים שלכם
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {(content?.sections?.whatWeGive?.services || [
              { title: "שירות מותאם אישית", description: "פתרונות מותאמים בדיוק לצרכים הייחודיים שלכם" },
              { title: "איכות ללא פשרות", description: "רמת שירות גבוהה ועקבית בכל שלב מהתהליך" },
              { title: "ליווי מלא", description: "תמיכה צמודה לאורך כל התהליך מההתחלה ועד הסוף" },
              { title: "תוצאות מוכחות", description: "הישגים קונקרטיים ומדידים שאתם יכולים לראות" }
            ]).map((service: any, index: number) => (
              <div key={index} className={`${getCardClass()} p-6 animate-slide-up animate-delay-${index + 1}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${getIconClass()} w-8 h-8 flex items-center justify-center`}>
                    <img src="https://img.icons8.com/3d-fluency/94/checkmark.png" alt="check" style={{width: '24px', height: '24px'}} />
                  </div>
                  <div>
                    <h3 className={`${getTypographyClass()} text-lg font-bold text-white mb-2`}>
                      {service.title}
                    </h3>
                    <p className="typography-body text-gray-300 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-16 px-4 ${getBackgroundClass()}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className={`${getTypographyClass()} text-4xl md:text-5xl font-black mb-6 text-white`}>
              <img src="https://img.icons8.com/3d-fluency/94/laptop.png" alt="process" style={{width: '40px', height: '40px', display: 'inline-block', marginLeft: '12px'}} />
              תהליך העבודה שלנו
            </h2>
            <p className="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              תהליך מובנה ומקצועי שמבטיח תוצאות מעולות
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "ניתוח צרכים", desc: "בדיקה מעמיקה של הדרישות והמטרות שלכם", icon: "https://img.icons8.com/3d-fluency/94/bullseye.png" },
              { step: 2, title: "תכנון אסטרטגי", desc: "עיצוב תוכנית עבודה מותאמת אישית", icon: "https://img.icons8.com/3d-fluency/94/idea.png" },
              { step: 3, title: "ביצוע מקצועי", desc: "יישום הפתרון ברמה הגבוהה ביותר", icon: "https://img.icons8.com/3d-fluency/94/gear.png" },
              { step: 4, title: "מעקב ותמיכה", desc: "ליווי מתמשך ושיפורים נוספים", icon: "https://img.icons8.com/3d-fluency/94/rocket.png" }
            ].map((process, index) => (
              <div key={index} className={`${getCardClass()} text-center p-6 animate-scale-in animate-delay-${index + 1}`}>
                <div className="relative mb-6">
                  <div className={`${getIconClass()} mx-auto w-12 h-12 flex items-center justify-center`}>
                    <img src={process.icon} alt={process.title} style={{width: '24px', height: '24px'}} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
                    {process.step}
                  </div>
                </div>
                <h3 className={`${getTypographyClass()} text-lg font-bold mb-3 text-white`}>
                  {process.title}
                </h3>
                <p className="typography-body text-gray-300 leading-relaxed text-sm">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-16 px-4 ${getBackgroundClass()}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className={`${getTypographyClass()} text-4xl md:text-5xl font-black mb-6 text-white`}>
              מה הלקוחות שלנו אומרים
            </h2>
            <p className="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              עדויות אמיתיות מלקוחות מרוצים
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {(content?.sections?.testimonials || [
              { name: "דני כהן", role: "מנהל עסק", content: `השירות של ${businessName} פשוט מעולה! הצוות המקצועי והיחס האישי עשו את כל ההבדל.` },
              { name: "שרה לוי", role: "יזמת", content: `עבדנו עם ${businessName} על מספר פרויקטים והתוצאות תמיד מעולות. מקצועיות ברמה אחרת!` },
              { name: "מיכל רוזן", role: "בעלת חנות", content: "הליווי והתמיכה שקיבלתי היו פשוט מדהימים. השירות החרג מכל הציפיות!" }
            ]).map((testimonial: any, index: number) => (
              <div key={index} className={`${getCardClass()} p-6 animate-scale-in animate-delay-${index + 1}`}>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src="https://img.icons8.com/3d-fluency/94/star.png" alt="star" style={{width: '16px', height: '16px'}} />
                  ))}
                </div>
                
                <img src="https://img.icons8.com/3d-fluency/94/quote-left.png" alt="quote" style={{width: '24px', height: '24px', marginBottom: '12px'}} />
                
                <p className="typography-body leading-relaxed text-white mb-4 italic text-sm">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <img src="https://img.icons8.com/3d-fluency/94/user.png" alt="user" style={{width: '20px', height: '20px'}} />
                  </div>
                  <div>
                    <p className={`${getTypographyClass()} font-bold text-white text-sm`}>
                      {testimonial.name}
                    </p>
                    {testimonial.role && (
                      <p className="typography-body text-xs text-gray-400">
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

      {/* FAQ Section */}
      <section className={`py-16 px-4 ${getBackgroundClass()}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className={`${getTypographyClass()} text-4xl md:text-5xl font-black mb-6 text-white`}>
              שאלות נפוצות
            </h2>
            <p className="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              תשובות לשאלות הנפוצות ביותר
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { question: "כמה זמן לוקח התהליך?", answer: "התהליך נע בין שבוע לחודש, תלוי במורכבות הפרויקט והדרישות הספציפיות שלכם." },
              { question: "איך הגישה שלכם שונה?", answer: "אנחנו מתמחים בפתרונות מותאמים אישית ובליווי צמוד לאורך כל התהליך." },
              { question: "מה כלול במחיר?", answer: "המחיר כולל את כל השירותים הבסיסיים, ליווי מלא ותמיכה לאחר הפרויקט." },
              { question: "איך מתחילים?", answer: "פשוט צרו קשר איתנו לייעוץ ראשוני חינמי ובחינת האפשרויות המתאימות לכם." }
            ].map((faq, index) => (
              <div key={index} className={`${getCardClass()} p-6 animate-slide-up animate-delay-${index + 1}`}>
                <h3 className={`${getTypographyClass()} text-lg font-bold mb-3 text-white`}>
                  {faq.question}
                </h3>
                <p className="typography-body text-gray-300 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className={`py-16 px-4 ${getBackgroundClass()} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${getTypographyClass()} text-4xl md:text-5xl font-black mb-8 text-white animate-slide-up`}>
              {content?.contactTitle || 'מוכנים להתחיל?'}
            </h2>
            
            <div className={`${getCardClass()} p-6 mb-8 animate-slide-up animate-delay-1`}>
              <p className="typography-body text-lg md:text-xl text-white leading-relaxed">
                בואו ניצור יחד משהו מדהים שיקדם את העסק שלכם
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 animate-slide-up animate-delay-2">
              <div className={`${getCardClass()} p-4`}>
                <div className="flex items-center gap-3 justify-center">
                  <img src="https://img.icons8.com/3d-fluency/94/phone.png" alt="phone" style={{width: '20px', height: '20px'}} />
                  <span className="typography-body text-white font-medium">050-1234567</span>
                </div>
              </div>
              <div className={`${getCardClass()} p-4`}>
                <div className="flex items-center gap-3 justify-center">
                  <img src="https://img.icons8.com/3d-fluency/94/email.png" alt="email" style={{width: '20px', height: '20px'}} />
                  <span className="typography-body text-white font-medium">info@business.co.il</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up animate-delay-3">
              {renderButton('צור קשר עכשיו')}
              {renderButton('קבל הצעת מחיר')}
            </div>

            {/* Enhanced Trust Badges */}
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-slide-up animate-delay-4">
              {[
                { icon: 'https://img.icons8.com/3d-fluency/94/security-checked.png', title: 'מוגן ומאובטח', desc: 'ביטחון מלא' },
                { icon: 'https://img.icons8.com/3d-fluency/94/clock.png', title: 'מענה מהיר', desc: 'תוך 24 שעות' },
                { icon: 'https://img.icons8.com/3d-fluency/94/heart.png', title: 'ללא התחייבות', desc: 'ייעוץ חינם' }
              ].map((badge, index) => (
                <div key={index} className={`${getCardClass()} p-4 text-center`}>
                  <div className={`${getIconClass()} mx-auto mb-2 w-8 h-8 flex items-center justify-center`}>
                    <img src={badge.icon} alt={badge.title} style={{width: '20px', height: '20px'}} />
                  </div>
                  <h3 className={`${getTypographyClass()} font-semibold text-white mb-1 text-sm`}>
                    {badge.title}
                  </h3>
                  <p className="typography-body text-gray-300 text-xs">
                    {badge.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
