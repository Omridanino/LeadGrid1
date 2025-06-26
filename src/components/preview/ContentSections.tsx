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
        return 'card-liquid-glass';
      case 'metal':
        return 'card-metal';
      case 'image':
        return 'card-image-depth';
      default:
        return 'card-3d';
    }
  };

  const getBackgroundClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'bg-geometric';
      case 'glass':
        return 'bg-liquid-glass';
      case 'metal':
        return 'bg-metal';
      case 'image':
        return 'bg-image-depth';
      default:
        return 'bg-3d';
    }
  };

  const getButtonClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'btn-geometric';
      case 'glass':
        return 'btn-liquid-glass';
      case 'metal':
        return 'btn-metal';
      case 'image':
        return 'btn-image-depth';
      default:
        return 'btn-3d';
    }
  };

  const getIconClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'icon-geometric';
      case 'glass':
        return 'icon-liquid-glass';
      case 'metal':
        return 'icon-metal';
      case 'image':
        return 'icon-image-depth';
      default:
        return 'icon-3d';
    }
  };

  const getTypographyClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'typography-modern';
      case 'glass':
        return 'typography-liquid';
      case 'metal':
        return 'typography-luxury';
      case 'image':
        return 'typography-cinematic';
      default:
        return 'typography-tech';
    }
  };

  const renderButton = (text: string, className?: string) => {
    const baseClass = `btn-base ${getButtonClass()} ${className || ''}`;
    
    return (
      <button className={baseClass}>
        <i className="ri-arrow-left-line text-lg"></i>
        {text}
      </button>
    );
  };

  // Generate default content with business name integration
  const businessName = formData?.businessName || 'העסק שלי';
  const businessType = formData?.businessType || 'שירותים עסקיים';

  // ENHANCED LIQUID GLASS STYLE - Elegant glass aesthetic
  if (formData.heroStyle === 'glass') {
    return (
      <div className="w-full">
        {/* Liquid Glass Value Proposition - Enhanced Elegance */}
        <section className="py-20 px-4 bg-liquid-glass relative overflow-hidden">
          <div className="liquid-orb liquid-orb-1"></div>
          <div className="liquid-orb liquid-orb-2"></div>
          <div className="liquid-orb liquid-orb-3"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="floating-badge mb-8">
                <i className="ri-star-fill text-yellow-400 text-xl"></i>
                <span className="typography-liquid text-white font-semibold">הצעת הערך הייחודית</span>
              </div>
              {/* ENHANCED Glass Section Title */}
              <h2 className="typography-liquid text-3xl md:text-5xl font-black mb-8 text-white liquid-glow glass-title-enhanced">
                {content?.sections?.emotionalSection?.title || "חוויה נוזלית מדהימה"}
              </h2>
              <div className="liquid-glass-panel-enhanced p-10 max-w-4xl mx-auto">
                <p className="typography-liquid text-lg md:text-xl leading-relaxed text-white liquid-text-glow">
                  {content?.sections?.emotionalSection?.content || `בעולם הטכנולוגיה המתקדמת, ${businessName} מציע לכם חוויה נוזלית ייחודה שמשלבת חדשנות עם אלגנטיות.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Liquid Glass Why Choose Us */}
        <section className="py-20 px-4 bg-liquid-glass-alt relative overflow-hidden">
          <div className="liquid-wave-enhanced"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="typography-liquid text-3xl md:text-5xl font-black mb-8 text-white liquid-glow glass-title-enhanced">
                למה לבחור בנו?
              </h2>
              <div className="floating-subtitle-enhanced">
                <p className="typography-liquid text-lg text-blue-200">
                  הסיבות הנוזליות שעושות אותנו שונים
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {(content?.sections?.whyUs?.reasons || [
                { title: "טכנולוגיה נוזלית מתקדמת", description: "פתרונות חדשניים המשלבים זרימה טבעית עם יעילות מקסימלית" },
                { title: "חוויית משתמש זורמת", description: "אינטראקציה חלקה ואינטואיטיבית שמתאימה לכל צורך" },
                { title: "גמישות מוחלטת", description: "התאמה דינמית לכל דרישה ושינוי בזמן אמת" },
                { title: "איכות שקופה ונקייה", description: "שירות ברור וישיר ללא הפתעות או עמימות" }
              ]).map((reason: any, index: number) => (
                <div key={index} className="liquid-morph-card-enhanced group">
                  <div className="liquid-icon-orb-enhanced">
                    <i className="ri-diamond-line text-blue-300 text-2xl"></i>
                  </div>
                  <h3 className="typography-liquid text-xl font-bold mb-4 text-white liquid-text-glow">
                    {reason.title}
                  </h3>
                  <p className="typography-liquid text-blue-200 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="liquid-ripple-enhanced"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Liquid Glass Services - Flowing Grid */}
        <section className="py-20 px-4 bg-liquid-glass relative overflow-hidden">
          <div className="liquid-flow-bg"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="typography-liquid text-3xl md:text-5xl font-black mb-8 text-white liquid-glow glass-title-enhanced">
                השירותים הנוזליים שלנו
              </h2>
            </div>
            
            <div className="liquid-grid">
              {(content?.sections?.whatWeGive?.services || [
                { title: "פתרונות זורמים", description: "שירותים שמתאימים עצמם לצרכים המשתנים שלכם" },
                { title: "איכות שקופה", description: "רמת שירות גבוהה וברורה בכל שלב מהתהליך" },
                { title: "ליווי נוזלי", description: "תמיכה רציפה שזורמת איתכם לאורך כל המסע" },
                { title: "תוצאות נוזריות", description: "הישגים שמתפתחים ומשתפרים עם הזמן" }
              ]).map((service: any, index: number) => (
                <div key={index} className="liquid-service-card">
                  <div className="liquid-check-orb">
                    <i className="ri-check-line text-green-400 text-xl"></i>
                  </div>
                  <h3 className="typography-liquid text-xl font-bold text-white mb-3 liquid-text-glow">
                    {service.title}
                  </h3>
                  <p className="typography-liquid text-blue-200 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Liquid Glass Process - Flowing Timeline */}
        <section className="py-20 px-4 bg-liquid-glass-alt relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-liquid text-3xl md:text-5xl font-black mb-8 text-white liquid-glow glass-title-enhanced">
                תהליך העבודה הנוזלי
              </h2>
            </div>
            
            <div className="liquid-timeline">
              {[
                { step: 1, title: "זרימה ראשונית", desc: "הבנה עמוקה של הצרכים והמטרות", icon: "ri-target-line" },
                { step: 2, title: "עיצוב נוזלי", desc: "תכנון גמיש שמתאים עצמו לדרישות", icon: "ri-lightbulb-line" },
                { step: 3, title: "יישום זורם", desc: "ביצוע חלק ומדוייק של הפתרון", icon: "ri-settings-line" },
                { step: 4, title: "התפתחות מתמשכת", desc: "שיפור וליווי רציף לאורך זמן", icon: "ri-rocket-line" }
              ].map((process, index) => (
                <div key={index} className="liquid-timeline-item">
                  <div className="liquid-step-orb">
                    <span className="typography-liquid font-bold text-lg text-blue-900">{process.step}</span>
                  </div>
                  <div className="liquid-process-card">
                    <div className="liquid-process-icon">
                      <i className={`${process.icon} text-blue-300 text-3xl`}></i>
                    </div>
                    <h3 className="typography-liquid text-xl font-bold text-white mb-3 liquid-text-glow">
                      {process.title}
                    </h3>
                    <p className="typography-liquid text-blue-200 leading-relaxed">
                      {process.desc}
                    </p>
                  </div>
                  {index < 3 && <div className="liquid-flow-connector"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Liquid Glass Testimonials - Floating Bubbles */}
        <section className="py-20 px-4 bg-liquid-glass relative overflow-hidden">
          <div className="liquid-bubble-field">
            <div className="liquid-bubble liquid-bubble-1"></div>
            <div className="liquid-bubble liquid-bubble-2"></div>
            <div className="liquid-bubble liquid-bubble-3"></div>
            <div className="liquid-bubble liquid-bubble-4"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="typography-liquid text-3xl md:text-5xl font-black mb-8 text-white liquid-glow glass-title-enhanced">
                חוויות נוזליות
              </h2>
            </div>
            
            <div className="liquid-testimonials-grid">
              {(content?.sections?.testimonials || [
                { name: "דני כהן", role: "מנהל חדשנות", content: `החוויה עם ${businessName} הייתה נוזלית לחלוטין - הכל זרם בצורה טבעית ויעילה.` },
                { name: "שרה לוי", role: "יועצת טכנולוגיות", content: `הגישה הנוזלית שלהם פשוט מהפכנית. כל שינוי מתבצע בזרימה חלקה.` },
                { name: "מיכל רוזן", role: "מנהלת פרויקטים", content: "השירות זורם כמו נהר - טבעי, רציף ומרשים בתוצאותיו." }
              ]).map((testimonial: any, index: number) => (
                <div key={index} className="liquid-testimonial-bubble">
                  <div className="liquid-quote-orb">
                    <i className="ri-chat-quote-line text-blue-300 text-xl"></i>
                  </div>
                  
                  <p className="typography-liquid leading-relaxed text-white mb-6 liquid-text-glow italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="liquid-author">
                    <div className="liquid-avatar">
                      <i className="ri-user-line text-blue-300 text-lg"></i>
                    </div>
                    <div>
                      <p className="typography-liquid font-bold text-white">
                        {testimonial.name}
                      </p>
                      {testimonial.role && (
                        <p className="typography-liquid text-xs text-blue-200">
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

        {/* Liquid Glass CTA - Immersive Experience */}
        <section className="py-20 px-4 bg-liquid-glass-final relative overflow-hidden">
          <div className="liquid-immersion-bg"></div>
          
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <div className="liquid-cta-orb">
              <h2 className="typography-liquid text-3xl md:text-5xl font-black mb-12 text-white liquid-glow glass-title-enhanced">
                {content?.contactTitle || 'צאו למסע נוזלי'}
              </h2>
              
              <div className="liquid-immersion-panel p-10 mb-12">
                <p className="typography-liquid text-2xl text-white leading-relaxed liquid-text-glow">
                  בואו ניצור יחד חוויה נוזלית שתשנה את האופן שבו אתם חושבים על השירות
                </p>
              </div>

              <div className="liquid-contact-flow mb-12">
                <div className="liquid-contact-orb">
                  <i className="ri-phone-line text-blue-300 text-xl"></i>
                  <span className="typography-liquid text-white font-medium">050-1234567</span>
                </div>
                <div className="liquid-contact-orb">
                  <i className="ri-mail-line text-blue-300 text-xl"></i>
                  <span className="typography-liquid text-white font-medium">info@business.co.il</span>
                </div>
              </div>

              <div className="liquid-action-flow">
                {renderButton('התחילו את הזרימה')}
                {renderButton('גלו את החוויה')}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ENHANCED IMAGE STYLE - Modern, layered, immersive redesign
  if (formData.heroStyle === 'image') {
    return (
      <div className="w-full">
        {/* Image Style Value Proposition - COMPLETELY REDESIGNED */}
        <section className="py-20 px-4 bg-image-depth-redesigned relative overflow-hidden">
          <div className="immersive-depth-layers">
            <div className="depth-layer-redesigned depth-layer-1"></div>
            <div className="depth-layer-redesigned depth-layer-2"></div>
            <div className="depth-layer-redesigned depth-layer-3"></div>
            <div className="depth-layer-redesigned depth-layer-4"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="immersive-grid-layout">
              <div className="immersive-content-flow">
                <div className="modern-badge-3d mb-8">
                  <i className="ri-cube-line text-cyan-400 text-2xl"></i>
                  <span className="typography-cinematic text-white font-bold">הצגת הערך המרהיבה</span>
                </div>
                <h2 className="typography-cinematic text-3xl md:text-5xl font-black mb-8 text-white immersive-glow modern-title-3d">
                  {content?.sections?.emotionalSection?.title || "חוויה קולנועית מרהיבה"}
                </h2>
                <div className="immersive-content-panel">
                  <p className="typography-cinematic text-lg leading-relaxed text-white">
                    {content?.sections?.emotionalSection?.content || `${businessName} מביא לכם חוויה קולנועית עמוקה שמשלבת אסתטיקה מרהיבה עם תוכן איכותי.`}
                  </p>
                </div>
              </div>
              <div className="immersive-3d-showcase">
                <div className="showcase-depth-frame">
                  <div className="depth-orb-center">
                    <div className="orb-rings-3d">
                      <div className="ring-3d ring-3d-1"></div>
                      <div className="ring-3d ring-3d-2"></div>
                      <div className="ring-3d ring-3d-3"></div>
                    </div>
                    <i className="ri-eye-line text-cyan-400 text-5xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Style Why Choose Us - REDESIGNED with Modern Depth */}
        <section className="py-20 px-4 bg-image-depth-alt-redesigned relative overflow-hidden">
          <div className="layered-parallax-bg">
            <div className="parallax-element parallax-element-1"></div>
            <div className="parallax-element parallax-element-2"></div>
            <div className="parallax-element parallax-element-3"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="typography-cinematic text-3xl md:text-5xl font-black mb-8 text-white immersive-glow modern-title-3d">
                הייחודיות שלנו
              </h2>
              <div className="modern-subtitle-3d">
                <p className="typography-cinematic text-lg text-gray-300">
                  העומק והחדות שעושים את ההבדל
                </p>
              </div>
            </div>
            
            <div className="modern-depth-grid">
              {(content?.sections?.whyUs?.reasons || [
                { title: "עומק ויזואלי מרהיב", description: "חוויה תלת-מימדית שמביאה את התוכן לחיים בצורה מדהימה" },
                { title: "פרספקטיבה ייחודית", description: "זווית ראייה חדשה שמציגה את השירות בצורה בלתי נשכחת" },
                { title: "איכות קולנועית", description: "רמת הפקה גבוהה שמתאימה לסטנדרטים המחמירים ביותר" },
                { title: "התחושה האמיתית", description: "חוויה אותנטית ומרגשת שנשארת בזיכרון לאורך זמן" }
              ]).map((reason: any, index: number) => (
                <div key={index} className="modern-depth-card-redesigned">
                  <div className="depth-card-layers">
                    <div className="card-depth-shadow"></div>
                    <div className="card-content-layer">
                      <div className="modern-icon-frame-3d">
                        <i className="ri-award-line text-yellow-400 text-3xl"></i>
                      </div>
                      <h3 className="typography-cinematic text-xl font-bold mb-4 text-white immersive-glow">
                        {reason.title}
                      </h3>
                      <p className="typography-cinematic text-gray-300 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Style Services - Layered Showcase */}
        <section className="py-20 px-4 bg-image-depth relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-cinematic text-3xl md:text-5xl font-black mb-8 text-white immersive-glow modern-title-3d">
                השירותים המרהיבים שלנו
              </h2>
            </div>
            
            <div className="layered-services">
              {(content?.sections?.whatWeGive?.services || [
                { title: "יצירה קולנועית", description: "הפקת תוכן ברמה קולנועית עם עומק וחדות מקסימלית" },
                { title: "עיצוב ממוקד", description: "פתרונות ויזואליים שמשלבים אסתטיקה עם פונקציונליות" },
                { title: "ליווי מקצועי", description: "הנחיה מומחית לאורך כל תהליך הפקת התוכן" },
                { title: "תוצאות מרהיבות", description: "הישגים ויזואליים שעוצרים את הנשימה" }
              ]).map((service: any, index: number) => (
                <div key={index} className="layered-service-item">
                  <div className="service-depth-frame">
                    <div className="service-icon-3d">
                      <i className="ri-check-circle-line text-green-400 text-2xl"></i>
                    </div>
                    <div className="service-content">
                      <h3 className="typography-cinematic text-xl font-bold text-white mb-3 immersive-glow">
                        {service.title}
                      </h3>
                      <p className="typography-cinematic text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Style Process - Cinematic Timeline */}
        <section className="py-20 px-4 bg-image-depth-alt relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-cinematic text-3xl md:text-5xl font-black mb-8 text-white immersive-glow modern-title-3d">
                תהליך הפקה קולנועי
              </h2>
            </div>
            
            <div className="cinematic-timeline">
              {[
                { step: 1, title: "חזון ויזואלי", desc: "הגדרת הרעיון והחזון האסתטי", icon: "ri-eye-line" },
                { step: 2, title: "תכנון הפקה", desc: "עיצוב מפורט של כל שלבי הביצוע", icon: "ri-file-paper-line" },
                { step: 3, title: "יצירה והפקה", desc: "ביצוע מקצועי ברמה קולנועית", icon: "ri-camera-line" },
                { step: 4, title: "עיבוד וליטוש", desc: "שיפור וליטוש לתוצאה מושלמת", icon: "ri-diamond-line" }
              ].map((process, index) => (
                <div key={index} className="cinematic-process-frame">
                  <div className="process-number-3d">
                    <span className="typography-cinematic font-bold text-2xl text-white">{process.step}</span>
                  </div>
                  <div className="process-card-3d">
                    <div className="process-icon-showcase">
                      <i className={`${process.icon} text-blue-400 text-4xl`}></i>
                    </div>
                    <h3 className="typography-cinematic text-2xl font-bold text-white mb-4 immersive-glow">
                      {process.title}
                    </h3>
                    <p className="typography-cinematic text-gray-300 leading-relaxed">
                      {process.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Style Testimonials - Spotlight Gallery */}
        <section className="py-20 px-4 bg-image-depth relative overflow-hidden">
          <div className="spotlight-overlay"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="typography-cinematic text-3xl md:text-5xl font-black mb-8 text-white immersive-glow modern-title-3d">
                ביקורות מרהיבות
              </h2>
            </div>
            
            <div className="spotlight-gallery">
              {(content?.sections?.testimonials || [
                { name: "דני כהן", role: "במאי וידאו", content: `העבודה עם ${businessName} הייתה חוויה קולנועית אמיתית - כל פרט מושלם.` },
                { name: "שרה לוי", role: "מעצבת גרפית", content: `הרמה הוויזואלית פשוט מדהימה. כל פרויקט הופך ליצירת אמנות.` },
                { name: "מיכל רוזן", role: "מפיקה", content: "המקצועיות והיצירתיות שלהם מביאות תוצאות שעוצרות את הנשימה." }
              ]).map((testimonial: any, index: number) => (
                <div key={index} className="spotlight-card">
                  <div className="spotlight-beam"></div>
                  <div className="testimonial-frame-3d">
                    <div className="quote-icon-3d">
                      <i className="ri-double-quotes-l text-yellow-400 text-2xl"></i>
                    </div>
                    
                    <p className="typography-cinematic text-lg leading-relaxed text-white mb-6 immersive-glow italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="author-showcase">
                      <div className="author-avatar-3d">
                        <i className="ri-user-3-line text-blue-400 text-3xl"></i>
                      </div>
                      <div>
                        <p className="typography-cinematic text-xl font-bold text-white immersive-glow">
                          {testimonial.name}
                        </p>
                        {testimonial.role && (
                          <p className="typography-cinematic text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Style CTA - Epic Finale */}
        <section className="py-20 px-4 bg-image-depth-finale relative overflow-hidden">
          <div className="epic-backdrop"></div>
          
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <div className="epic-stage">
              <h2 className="typography-cinematic text-4xl md:text-6xl font-black mb-12 text-white immersive-glow epic-title modern-title-3d">
                {content?.contactTitle || 'הגיע הזמן לפעולה'}
              </h2>
              
              <div className="epic-panel">
                <p className="typography-cinematic text-2xl text-white leading-relaxed immersive-glow">
                  בואו ניצור יחד פרויקט קולנועי שישאיר את כולם ללא מילים
                </p>
              </div>

              <div className="epic-contacts">
                <div className="contact-frame-3d">
                  <i className="ri-phone-line text-blue-400 text-2xl"></i>
                  <span className="typography-cinematic text-white font-bold text-lg">050-1234567</span>
                </div>
                <div className="contact-frame-3d">
                  <i className="ri-mail-line text-blue-400 text-2xl"></i>
                  <span className="typography-cinematic text-white font-bold text-lg">info@business.co.il</span>
                </div>
              </div>

              <div className="epic-actions">
                {renderButton('התחילו את הפרויקט')}
                {renderButton('גלו את האפשרויות')}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ENHANCED GEOMETRIC STYLE - Clean, modern, non-intrusive
  if (formData.heroStyle === 'geometric') {
    return (
      <div className="w-full">
        {/* Geometric Value Proposition - Clean and Modern */}
        <section className="py-20 px-4 bg-geometric-clean relative overflow-hidden">
          <div className="geometric-clean-shapes">
            <div className="clean-shape clean-shape-1"></div>
            <div className="clean-shape clean-shape-2"></div>
            <div className="clean-shape clean-shape-3"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="clean-badge mb-8">
                <i className="ri-shapes-line text-blue-400 text-xl"></i>
                <span className="typography-modern text-white font-semibold">הצעת הערך</span>
              </div>
              <h2 className="typography-modern text-3xl md:text-5xl font-black mb-8 text-white geometric-clean-glow">
                {content?.sections?.emotionalSection?.title || "עיצוב גיאומטרי מודרני"}
              </h2>
              <div className="clean-content-panel p-8 max-w-4xl mx-auto">
                <p className="typography-modern text-lg leading-relaxed text-white">
                  {content?.sections?.emotionalSection?.content || `${businessName} מציע פתרונות מודרניים ונקיים שמשלבים פשטות עם יעילות מקסימלית.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geometric Why Choose Us - Clean Layout */}
        <section className="py-20 px-4 bg-geometric-clean-alt relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-modern text-3xl md:text-5xl font-black mb-8 text-white geometric-clean-glow">
                למה לבחור בנו?
              </h2>
              <div className="clean-subtitle">
                <p className="typography-modern text-lg text-gray-300">
                  הסיבות הברורות לבחירה נכונה
                </p>
              </div>
            </div>
            
            <div className="clean-grid-layout">
              {(content?.sections?.whyUs?.reasons || [
                { title: "עיצוב נקי ומודרני", description: "פתרונות מינימליסטיים שמתמקדים בתוכן והפונקציונליות" },
                { title: "יעילות מקסימלית", description: "תהליכים מותאמים שחוסכים זמן ומשאבים" },
                { title: "בהירות ושקיפות", description: "תקשורת ברורה וישירה בכל שלב" },
                { title: "תוצאות מדידות", description: "הישגים קונקרטיים שניתן לבחון ולמדוד" }
              ]).map((reason: any, index: number) => (
                <div key={index} className="clean-reason-card">
                  <div className="clean-icon-container">
                    <i className="ri-check-circle-line text-green-400 text-2xl"></i>
                  </div>
                  <h3 className="typography-modern text-xl font-bold mb-4 text-white">
                    {reason.title}
                  </h3>
                  <p className="typography-modern text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Geometric Services */}
        <section className="py-20 px-4 bg-geometric-clean relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-modern text-3xl md:text-5xl font-black mb-8 text-white geometric-clean-glow">
                השירותים שלנו
              </h2>
            </div>
            
            <div className="clean-grid-layout">
              {(content?.sections?.whatWeGive?.services || [
                { title: "פתרונות מותאמים", description: "שירותים מותאמים בדיוק לצרכים הייחודיים שלכם" },
                { title: "איכות ללא פשרות", description: "רמת שירות גבוהה ועקבית בכל שלב מהתהליך" },
                { title: "ליווי מלא", description: "תמיכה צמודה לאורך כל התהליך מההתחלה ועד הסוף" },
                { title: "תוצאות מוכחות", description: "הישגים קונקרטיים ומדידים שאתם יכולים לראות" }
              ]).map((service: any, index: number) => (
                <div key={index} className="clean-reason-card">
                  <div className="clean-icon-container">
                    <i className="ri-check-line text-green-400 text-xl"></i>
                  </div>
                  <h3 className="typography-modern text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="typography-modern text-gray-300 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Geometric Process */}
        <section className="py-20 px-4 bg-geometric-clean-alt relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-modern text-3xl md:text-5xl font-black mb-8 text-white geometric-clean-glow">
                תהליך העבודה שלנו
              </h2>
            </div>
            
            <div className="clean-grid-layout">
              {[
                { step: 1, title: "ניתוח צרכים", desc: "בדיקה מעמיקה של הדרישות והמטרות שלכם", icon: "ri-target-line" },
                { step: 2, title: "תכנון אסטרטגי", desc: "עיצוב תוכנית עבודה מותאמת אישית", icon: "ri-lightbulb-line" },
                { step: 3, title: "ביצוע מקצועי", desc: "יישום הפתרון ברמה הגבוהה ביותר", icon: "ri-settings-line" },
                { step: 4, title: "מעקב ותמיכה", desc: "ליווי מתמשך ושיפורים נוספים", icon: "ri-rocket-line" }
              ].map((process, index) => (
                <div key={index} className="clean-reason-card text-center">
                  <div className="relative mb-6">
                    <div className="clean-icon-container mx-auto">
                      <i className={`${process.icon} text-blue-400 text-xl`}></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="typography-modern text-lg font-bold mb-3 text-white">
                    {process.title}
                  </h3>
                  <p className="typography-modern text-gray-300 leading-relaxed text-sm">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Geometric Testimonials */}
        <section className="py-20 px-4 bg-geometric-clean relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-modern text-3xl md:text-5xl font-black mb-8 text-white geometric-clean-glow">
                מה הלקוחות שלנו אומרים
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {(content?.sections?.testimonials || [
                { name: "דני כהן", role: "מנהל עסק", content: `השירות של ${businessName} פשוט מעולה! הצוות המקצועי והיחס האישי עשו את כל ההבדל.` },
                { name: "שרה לוי", role: "יזמת", content: `עבדנו עם ${businessName} על מספר פרויקטים והתוצאות תמיד מעולות. מקצועיות ברמה אחרת!` },
                { name: "מיכל רוזן", role: "בעלת חנות", content: "הליווי והתמיכה שקיבלתי היו פשוט מדהימים. השירות החרג מכל הציפיות!" }
              ]).map((testimonial: any, index: number) => (
                <div key={index} className="clean-reason-card">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                    ))}
                  </div>
                  
                  <i className="ri-chat-quote-line text-blue-400 text-xl mb-3 block"></i>
                  
                  <p className="typography-modern leading-relaxed text-white mb-4 italic text-sm">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <i className="ri-user-line text-white text-lg"></i>
                    </div>
                    <div>
                      <p className="typography-modern font-bold text-white text-sm">
                        {testimonial.name}
                      </p>
                      {testimonial.role && (
                        <p className="typography-modern text-xs text-gray-400">
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

        {/* Geometric CTA */}
        <section className="py-20 px-4 bg-geometric-clean-alt relative overflow-hidden">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="typography-modern text-3xl md:text-5xl font-black mb-8 text-white geometric-clean-glow">
                {content?.contactTitle || 'מוכנים להתחיל?'}
              </h2>
              
              <div className="clean-content-panel p-6 mb-8">
                <p className="typography-modern text-lg md:text-xl text-white leading-relaxed">
                  בואו ניצור יחד משהו מדהים שיקדם את העסק שלכם
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                <div className="clean-reason-card p-4">
                  <div className="flex items-center gap-3 justify-center">
                    <i className="ri-phone-line text-blue-400 text-lg"></i>
                    <span className="typography-modern text-white font-medium">050-1234567</span>
                  </div>
                </div>
                <div className="clean-reason-card p-4">
                  <div className="flex items-center gap-3 justify-center">
                    <i className="ri-mail-line text-blue-400 text-lg"></i>
                    <span className="typography-modern text-white font-medium">info@business.co.il</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                {renderButton('צור קשר עכשיו')}
                {renderButton('קבל הצעת מחיר')}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ENHANCED METALLIC STYLE - Fixed contrast throughout
  if (formData.heroStyle === 'metal') {
    return (
      <div className="w-full">
        {/* Metallic Value Proposition - PROPER CONTRAST */}
        <section className="py-20 px-4 bg-metal-enhanced relative overflow-hidden">
          <div className="metallic-ambiance">
            <div className="metal-particle metal-particle-1"></div>
            <div className="metal-particle metal-particle-2"></div>
            <div className="metal-particle metal-particle-3"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="luxury-badge-enhanced mb-8">
                <i className="ri-vip-crown-line text-yellow-400 text-xl"></i>
                <span className="typography-luxury text-white font-semibold">הצעת הערך הפרמיום</span>
              </div>
              {/* REDUCED size with PROPER CONTRAST */}
              <h2 className="typography-luxury text-3xl md:text-4xl font-black mb-8 text-white metallic-glow">
                {content?.sections?.emotionalSection?.title || "יוקרה מתכתית ללא פשרות"}
              </h2>
              <div className="luxury-content-panel-enhanced p-8 max-w-4xl mx-auto">
                <p className="typography-luxury text-lg leading-relaxed text-gray-900">
                  {content?.sections?.emotionalSection?.content || `${businessName} מביא לכם חוויית יוקרה מתכתית שמשלבת אלגנטיות עם מקצועיות ברמה הגבוהה ביותר.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metallic Why Choose Us - PROPER CONTRAST */}
        <section className="py-20 px-4 bg-metal-enhanced-alt relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              {/* REDUCED size with PROPER CONTRAST */}
              <h2 className="typography-luxury text-3xl md:text-4xl font-black mb-8 text-white metallic-glow">
                למה לבחור בנו?
              </h2>
              <div className="luxury-subtitle-enhanced">
                <p className="typography-luxury text-lg text-gray-300">
                  המצוינות שמבדילה אותנו
                </p>
              </div>
            </div>
            
            <div className="luxury-grid-enhanced">
              {(content?.sections?.whyUs?.reasons || [
                { title: "יוקרה ללא פשרות", description: "רמת שירות פרמיום שמתאימה לסטנדרטים הגבוהים ביותר" },
                { title: "מצוינות מתכתית", description: "איכות מוצקה ועמידה שנבנית להחזיק לאורך זמן" },
                { title: "בלעדיות ויוקרה", description: "חוויה אישית ומותאמת לרמה הגבוהה ביותר" },
                { title: "מקצועיות מושלמת", description: "ביצוע ללא רבב ברמת דיוק ואיכות מקסימלית" }
              ]).map((reason: any, index: number) => (
                <div key={index} className="luxury-reason-card-enhanced">
                  <div className="luxury-icon-frame-enhanced">
                    <i className="ri-medal-line text-yellow-400 text-2xl"></i>
                  </div>
                  {/* REDUCED size with PROPER CONTRAST */}
                  <h3 className="typography-luxury text-lg font-bold mb-4 text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="typography-luxury text-gray-800 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metallic Services - PROPER CONTRAST */}
        <section className="py-20 px-4 bg-metal-enhanced relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-luxury text-3xl md:text-4xl font-black mb-8 text-white metallic-glow">
                השירותים הפרמיום שלנו
              </h2>
            </div>
            
            <div className="luxury-grid-enhanced">
              {(content?.sections?.whatWeGive?.services || [
                { title: "שירות יוקרתי", description: "פתרונות פרמיום המותאמים לרמה הגבוהה ביותר" },
                { title: "איכות מתכתית", description: "רמת שירות מוצקה ועמידה שנבנית להחזיק לאורך זמן" },
                { title: "ליווי VIP", description: "תמיכה אישית ומסורה ברמה הגבוהה ביותר" },
                { title: "תוצאות יוקרתיות", description: "הישגים מרשימים שמשקפים את רמת המצוינות שלנו" }
              ]).map((service: any, index: number) => (
                <div key={index} className="luxury-reason-card-enhanced">
                  <div className="luxury-icon-frame-enhanced">
                    <i className="ri-check-line text-green-400 text-xl"></i>
                  </div>
                  <h3 className="typography-luxury text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="typography-luxury text-gray-800 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metallic Process - PROPER CONTRAST */}
        <section className="py-20 px-4 bg-metal-enhanced-alt relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-luxury text-3xl md:text-4xl font-black mb-8 text-white metallic-glow">
                תהליך העבודה הפרמיום
              </h2>
            </div>
            
            <div className="luxury-grid-enhanced">
              {[
                { step: 1, title: "ייעוץ יוקרתי", desc: "בדיקה מעמיקה של הצרכים ברמה הגבוהה ביותר", icon: "ri-target-line" },
                { step: 2, title: "תכנון פרמיום", desc: "עיצוב תוכנית עבודה מותאמת לסטנדרטים הגבוהים", icon: "ri-lightbulb-line" },
                { step: 3, title: "ביצוע מושלם", desc: "יישום הפתרון ברמת דיוק ואיכות מקסימלית", icon: "ri-settings-line" },
                { step: 4, title: "שירות VIP", desc: "ליווי מתמשך ותמיכה ברמה הגבוהה ביותר", icon: "ri-rocket-line" }
              ].map((process, index) => (
                <div key={index} className="luxury-reason-card-enhanced text-center">
                  <div className="relative mb-6">
                    <div className="luxury-icon-frame-enhanced mx-auto">
                      <i className={`${process.icon} text-yellow-400 text-xl`}></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="typography-luxury text-lg font-bold mb-3 text-gray-900">
                    {process.title}
                  </h3>
                  <p className="typography-luxury text-gray-800 leading-relaxed text-sm">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metallic Testimonials - PROPER CONTRAST */}
        <section className="py-20 px-4 bg-metal-enhanced relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-luxury text-3xl md:text-4xl font-black mb-8 text-white metallic-glow">
                עדויות יוקרתיות
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {(content?.sections?.testimonials || [
                { name: "דני כהן", role: "מנהל עסק", content: `השירות של ${businessName} פשוט יוקרתי! הרמה הגבוהה והיחס הפרמיום עשו את כל ההבדל.` },
                { name: "שרה לוי", role: "יזמת", content: `עבדנו עם ${businessName} על מספר פרויקטים והתוצאות תמיד ברמה הגבוהה ביותר. מקצועיות פרמיום!` },
                { name: "מיכל רוזן", role: "בעלת חנות", content: "הליווי והתמיכה שקיבלתי היו ברמה יוקרתית. השירות החרג מכל הציפיות!" }
              ]).map((testimonial: any, index: number) => (
                <div key={index} className="luxury-reason-card-enhanced">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                    ))}
                  </div>
                  
                  <i className="ri-chat-quote-line text-yellow-400 text-xl mb-3 block"></i>
                  
                  <p className="typography-luxury leading-relaxed text-gray-900 mb-4 italic text-sm">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                      <i className="ri-user-line text-white text-lg"></i>
                    </div>
                    <div>
                      <p className="typography-luxury font-bold text-gray-900 text-sm">
                        {testimonial.name}
                      </p>
                      {testimonial.role && (
                        <p className="typography-luxury text-xs text-gray-700">
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

        {/* Metallic CTA - PROPER CONTRAST */}
        <section className="py-20 px-4 bg-metal-enhanced-alt relative overflow-hidden">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="typography-luxury text-3xl md:text-4xl font-black mb-8 text-white metallic-glow">
                {content?.contactTitle || 'מוכנים לחוויה פרמיום?'}
              </h2>
              
              <div className="luxury-content-panel-enhanced p-6 mb-8">
                <p className="typography-luxury text-lg md:text-xl text-gray-900 leading-relaxed">
                  בואו ניצור יחד משהו יוקרתי שיקדם את העסק שלכם לרמה הבאה
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                <div className="luxury-reason-card-enhanced p-4">
                  <div className="flex items-center gap-3 justify-center">
                    <i className="ri-phone-line text-yellow-400 text-lg"></i>
                    <span className="typography-luxury text-gray-900 font-medium">050-1234567</span>
                  </div>
                </div>
                <div className="luxury-reason-card-enhanced p-4">
                  <div className="flex items-center gap-3 justify-center">
                    <i className="ri-mail-line text-yellow-400 text-lg"></i>
                    <span className="typography-luxury text-gray-900 font-medium">info@business.co.il</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                {renderButton('צור קשר עכשיו')}
                {renderButton('קבל הצעת מחיר')}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Default styles remain unchanged but with consistent font size reductions
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
                  <i className="ri-trophy-line text-yellow-400 text-2xl"></i>
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
                    <i className="ri-check-line text-green-400 text-xl"></i>
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
              <i className="ri-laptop-line text-blue-400 text-3xl ml-3"></i>
              תהליך העבודה שלנו
            </h2>
            <p className="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              תהליך מובנה ומקצועי שמבטיח תוצאות מעולות
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "ניתוח צרכים", desc: "בדיקה מעמיקה של הדרישות והמטרות שלכם", icon: "ri-target-line" },
              { step: 2, title: "תכנון אסטרטגי", desc: "עיצוב תוכנית עבודה מותאמת אישית", icon: "ri-lightbulb-line" },
              { step: 3, title: "ביצוע מקצועי", desc: "יישום הפתרון ברמה הגבוהה ביותר", icon: "ri-settings-line" },
              { step: 4, title: "מעקב ותמיכה", desc: "ליווי מתמשך ושיפורים נוספים", icon: "ri-rocket-line" }
            ].map((process, index) => (
              <div key={index} className={`${getCardClass()} text-center p-6 animate-scale-in animate-delay-${index + 1}`}>
                <div className="relative mb-6">
                  <div className={`${getIconClass()} mx-auto w-12 h-12 flex items-center justify-center`}>
                    <i className={`${process.icon} text-blue-400 text-xl`}></i>
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
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                  ))}
                </div>
                
                <i className="ri-chat-quote-line text-blue-400 text-xl mb-3 block"></i>
                
                <p className="typography-body leading-relaxed text-white mb-4 italic text-sm">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <i className="ri-user-line text-white text-lg"></i>
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
                  <i className="ri-phone-line text-blue-400 text-lg"></i>
                  <span className="typography-body text-white font-medium">050-1234567</span>
                </div>
              </div>
              <div className={`${getCardClass()} p-4`}>
                <div className="flex items-center gap-3 justify-center">
                  <i className="ri-mail-line text-blue-400 text-lg"></i>
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
                { icon: 'ri-shield-check-line', title: 'מוגן ומאובטח', desc: 'ביטחון מלא' },
                { icon: 'ri-time-line', title: 'מענה מהיר', desc: 'תוך 24 שעות' },
                { icon: 'ri-heart-line', title: 'ללא התחייבות', desc: 'ייעוץ חינם' }
              ].map((badge, index) => (
                <div key={index} className={`${getCardClass()} p-4 text-center`}>
                  <div className={`${getIconClass()} mx-auto mb-2 w-8 h-8 flex items-center justify-center`}>
                    <i className={`${badge.icon} text-blue-400 text-lg`}></i>
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
