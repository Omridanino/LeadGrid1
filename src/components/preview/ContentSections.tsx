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
        <img src="https://cdn.iconscout.com/3d-pack/left-arrow/thumb-400-2.png" alt="arrow" style={{width: '20px', height: '20px'}} />
        {text}
      </button>
    );
  };

  // Generate default content with business name integration
  const businessName = formData?.businessName || 'העסק שלי';
  const businessType = formData?.businessType || 'שירותים עסקיים';

  // LIQUID GLASS STYLE - Completely unique floating elements design
  if (formData.heroStyle === 'glass') {
    return (
      <div className="w-full">
        {/* Liquid Glass Value Proposition - Floating Bubbles Design */}
        <section className="py-20 px-4 bg-liquid-glass relative overflow-hidden">
          <div className="liquid-orb liquid-orb-1"></div>
          <div className="liquid-orb liquid-orb-2"></div>
          <div className="liquid-orb liquid-orb-3"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="floating-badge mb-8">
                <img src="https://cdn.iconscout.com/3d-pack/star/thumb-400-2.png" alt="star" style={{width: '24px', height: '24px'}} />
                <span className="typography-liquid text-white font-semibold">הצעת הערך הייחודית</span>
              </div>
              <h2 className="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">
                {content?.sections?.emotionalSection?.title || "חוויה נוזלית מדהימה"}
              </h2>
              <div className="liquid-glass-panel p-10 max-w-4xl mx-auto">
                <p className="typography-liquid text-xl md:text-2xl leading-relaxed text-white liquid-text-glow">
                  {content?.sections?.emotionalSection?.content || `בעולם הטכנולוגיה המתקדמת, ${businessName} מציע לכם חוויה נוזלית ייחודה שמשלבת חדשנות עם אלגנטיות.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Liquid Glass Why Choose Us - Morphing Cards */}
        <section className="py-20 px-4 bg-liquid-glass-alt relative overflow-hidden">
          <div className="liquid-wave"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">
                למה לבחור בנו?
              </h2>
              <div className="floating-subtitle">
                <p className="typography-liquid text-xl text-blue-200">
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
                <div key={index} className="liquid-morph-card group">
                  <div className="liquid-icon-orb">
                    <img src="https://cdn.iconscout.com/3d-pack/diamond/thumb-400-2.png" alt="feature" style={{width: '32px', height: '32px'}} />
                  </div>
                  <h3 className="typography-liquid text-2xl font-bold mb-4 text-white liquid-text-glow">
                    {reason.title}
                  </h3>
                  <p className="typography-liquid text-blue-200 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="liquid-ripple"></div>
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
              <h2 className="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">
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
                    <img src="https://cdn.iconscout.com/3d-pack/check-mark/thumb-400-2.png" alt="check" style={{width: '24px', height: '24px'}} />
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
              <h2 className="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">
                תהליך העבודה הנוזלי
              </h2>
            </div>
            
            <div className="liquid-timeline">
              {[
                { step: 1, title: "זרימה ראשונית", desc: "הבנה עמוקה של הצרכים והמטרות", icon: "https://cdn.iconscout.com/3d-pack/target/thumb-400-2.png" },
                { step: 2, title: "עיצוב נוזלי", desc: "תכנון גמיש שמתאים עצמו לדרישות", icon: "https://cdn.iconscout.com/3d-pack/idea/thumb-400-2.png" },
                { step: 3, title: "יישום זורם", desc: "ביצוע חלק ומדוייק של הפתרון", icon: "https://cdn.iconscout.com/3d-pack/settings/thumb-400-2.png" },
                { step: 4, title: "התפתחות מתמשכת", desc: "שיפור וליווי רציף לאורך זמן", icon: "https://cdn.iconscout.com/3d-pack/rocket/thumb-400-2.png" }
              ].map((process, index) => (
                <div key={index} className="liquid-timeline-item">
                  <div className="liquid-step-orb">
                    <span className="typography-liquid font-bold text-lg text-blue-900">{process.step}</span>
                  </div>
                  <div className="liquid-process-card">
                    <div className="liquid-process-icon">
                      <img src={process.icon} alt={process.title} style={{width: '40px', height: '40px'}} />
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
              <h2 className="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">
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
                    <img src="https://cdn.iconscout.com/3d-pack/chat/thumb-400-2.png" alt="quote" style={{width: '24px', height: '24px'}} />
                  </div>
                  
                  <p className="typography-liquid leading-relaxed text-white mb-6 liquid-text-glow italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="liquid-author">
                    <div className="liquid-avatar">
                      <img src="https://cdn.iconscout.com/3d-pack/user/thumb-400-2.png" alt="user" style={{width: '20px', height: '20px'}} />
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
              <h2 className="typography-liquid text-5xl md:text-7xl font-black mb-12 text-white liquid-glow">
                {content?.contactTitle || 'צאו למסע נוזלי'}
              </h2>
              
              <div className="liquid-immersion-panel p-10 mb-12">
                <p className="typography-liquid text-2xl text-white leading-relaxed liquid-text-glow">
                  בואו ניצור יחד חוויה נוזלית שתשנה את האופן שבו אתם חושבים על השירות
                </p>
              </div>

              <div className="liquid-contact-flow mb-12">
                <div className="liquid-contact-orb">
                  <img src="https://cdn.iconscout.com/3d-pack/phone/thumb-400-2.png" alt="phone" style={{width: '24px', height: '24px'}} />
                  <span className="typography-liquid text-white font-medium">050-1234567</span>
                </div>
                <div className="liquid-contact-orb">
                  <img src="https://cdn.iconscout.com/3d-pack/email/thumb-400-2.png" alt="email" style={{width: '24px', height: '24px'}} />
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

  // IMAGE STYLE - Completely redesigned sections (hero stays the same)
  if (formData.heroStyle === 'image') {
    return (
      <div className="w-full">
        {/* Image Style Value Proposition - Cinematic Parallax */}
        <section className="py-20 px-4 bg-image-depth relative overflow-hidden">
          <div className="cinematic-overlay"></div>
          <div className="depth-layers">
            <div className="depth-layer depth-layer-1"></div>
            <div className="depth-layer depth-layer-2"></div>
            <div className="depth-layer depth-layer-3"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="cinematic-grid">
              <div className="cinematic-content">
                <div className="cinematic-badge">
                  <img src="https://cdn.iconscout.com/3d-pack/movie/thumb-400-2.png" alt="cinema" style={{width: '24px', height: '24px'}} />
                  <span className="typography-cinematic text-white font-semibold">הצגת הערך</span>
                </div>
                <h2 className="typography-cinematic text-5xl md:text-7xl font-black mb-8 text-white cinematic-glow">
                  {content?.sections?.emotionalSection?.title || "חוויה קולנועית מרהיבה"}
                </h2>
                <div className="cinematic-panel">
                  <p className="typography-cinematic text-xl leading-relaxed text-white">
                    {content?.sections?.emotionalSection?.content || `${businessName} מביא לכם חוויה קולנועית עמוקה שמשלבת אסתטיקה מרהיבה עם תוכן איכותי.`}
                  </p>
                </div>
              </div>
              <div className="cinematic-visual">
                <div className="depth-showcase">
                  <div className="showcase-frame"></div>
                  <div className="showcase-content">
                    <img src="https://cdn.iconscout.com/3d-pack/cube/thumb-400-2.png" alt="showcase" style={{width: '120px', height: '120px'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Style Why Choose Us - Depth Cards */}
        <section className="py-20 px-4 bg-image-depth-alt relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-cinematic text-5xl md:text-7xl font-black mb-8 text-white cinematic-glow">
                הייחודיות שלנו
              </h2>
              <div className="cinematic-subtitle">
                <p className="typography-cinematic text-xl text-gray-300">
                  העומק והחדות שעושים את ההבדל
                </p>
              </div>
            </div>
            
            <div className="depth-cards-grid">
              {(content?.sections?.whyUs?.reasons || [
                { title: "עומק ויזואלי מרהיב", description: "חוויה תלת-מימדית שמביאה את התוכן לחיים בצורה מדהימה" },
                { title: "פרספקטיבה ייחודית", description: "זווית ראייה חדשה שמציגה את השירות בצורה בלתי נשכחת" },
                { title: "איכות קולנועית", description: "רמת הפקה גבוהה שמתאימה לסטנדרטים המחמירים ביותר" },
                { title: "התחושה האמיתית", description: "חוויה אותנטית ומרגשת שנשארת בזיכרון לאורך זמן" }
              ]).map((reason: any, index: number) => (
                <div key={index} className="depth-card">
                  <div className="depth-card-inner">
                    <div className="depth-icon-frame">
                      <img src="https://cdn.iconscout.com/3d-pack/award/thumb-400-2.png" alt="award" style={{width: '40px', height: '40px'}} />
                    </div>
                    <h3 className="typography-cinematic text-2xl font-bold mb-4 text-white cinematic-glow">
                      {reason.title}
                    </h3>
                    <p className="typography-cinematic text-gray-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                  <div className="depth-shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Style Services - Layered Showcase */}
        <section className="py-20 px-4 bg-image-depth relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="typography-cinematic text-5xl md:text-7xl font-black mb-8 text-white cinematic-glow">
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
                      <img src="https://cdn.iconscout.com/3d-pack/check-circle/thumb-400-2.png" alt="service" style={{width: '32px', height: '32px'}} />
                    </div>
                    <div className="service-content">
                      <h3 className="typography-cinematic text-xl font-bold text-white mb-3 cinematic-glow">
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
              <h2 className="typography-cinematic text-5xl md:text-7xl font-black mb-8 text-white cinematic-glow">
                תהליך הפקה קולנועי
              </h2>
            </div>
            
            <div className="cinematic-timeline">
              {[
                { step: 1, title: "חזון ויזואלי", desc: "הגדרת הרעיון והחזון האסתטי", icon: "https://cdn.iconscout.com/3d-pack/eye/thumb-400-2.png" },
                { step: 2, title: "תכנון הפקה", desc: "עיצוב מפורט של כל שלבי הביצוע", icon: "https://cdn.iconscout.com/3d-pack/blueprint/thumb-400-2.png" },
                { step: 3, title: "יצירה והפקה", desc: "ביצוע מקצועי ברמה קולנועית", icon: "https://cdn.iconscout.com/3d-pack/camera/thumb-400-2.png" },
                { step: 4, title: "עיבוד וליטוש", desc: "שיפור וליטוש לתוצאה מושלמת", icon: "https://cdn.iconscout.com/3d-pack/diamond/thumb-400-2.png" }
              ].map((process, index) => (
                <div key={index} className="cinematic-process-frame">
                  <div className="process-number-3d">
                    <span className="typography-cinematic font-bold text-2xl text-white">{process.step}</span>
                  </div>
                  <div className="process-card-3d">
                    <div className="process-icon-showcase">
                      <img src={process.icon} alt={process.title} style={{width: '48px', height: '48px'}} />
                    </div>
                    <h3 className="typography-cinematic text-2xl font-bold text-white mb-4 cinematic-glow">
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
              <h2 className="typography-cinematic text-5xl md:text-7xl font-black mb-8 text-white cinematic-glow">
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
                      <img src="https://cdn.iconscout.com/3d-pack/quote/thumb-400-2.png" alt="quote" style={{width: '32px', height: '32px'}} />
                    </div>
                    
                    <p className="typography-cinematic text-lg leading-relaxed text-white mb-6 cinematic-glow italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="author-showcase">
                      <div className="author-avatar-3d">
                        <img src="https://cdn.iconscout.com/3d-pack/user-circle/thumb-400-2.png" alt="user" style={{width: '48px', height: '48px'}} />
                      </div>
                      <div>
                        <p className="typography-cinematic text-xl font-bold text-white cinematic-glow">
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
              <h2 className="typography-cinematic text-6xl md:text-8xl font-black mb-12 text-white cinematic-glow epic-title">
                {content?.contactTitle || 'הגיע הזמן לפעולה'}
              </h2>
              
              <div className="epic-panel">
                <p className="typography-cinematic text-2xl text-white leading-relaxed cinematic-glow">
                  בואו ניצור יחד פרויקט קולנועי שישאיר את כולם ללא מילים
                </p>
              </div>

              <div className="epic-contacts">
                <div className="contact-frame-3d">
                  <img src="https://cdn.iconscout.com/3d-pack/phone-call/thumb-400-2.png" alt="phone" style={{width: '32px', height: '32px'}} />
                  <span className="typography-cinematic text-white font-bold text-lg">050-1234567</span>
                </div>
                <div className="contact-frame-3d">
                  <img src="https://cdn.iconscout.com/3d-pack/email-open/thumb-400-2.png" alt="email" style={{width: '32px', height: '32px'}} />
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

  // Default styles (geometric, metal, and 3d) remain unchanged
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
                  <img src="https://cdn.iconscout.com/3d-pack/trophy/thumb-400-2.png" alt="trophy" style={{width: '32px', height: '32px'}} />
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
                    <img src="https://cdn.iconscout.com/3d-pack/check-mark/thumb-400-2.png" alt="check" style={{width: '24px', height: '24px'}} />
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
              <img src="https://cdn.iconscout.com/3d-pack/laptop/thumb-400-2.png" alt="process" style={{width: '40px', height: '40px', display: 'inline-block', marginLeft: '12px'}} />
              תהליך העבודה שלנו
            </h2>
            <p className="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              תהליך מובנה ומקצועי שמבטיח תוצאות מעולות
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "ניתוח צרכים", desc: "בדיקה מעמיקה של הדרישות והמטרות שלכם", icon: "https://cdn.iconscout.com/3d-pack/target/thumb-400-2.png" },
              { step: 2, title: "תכנון אסטרטגי", desc: "עיצוב תוכנית עבודה מותאמת אישית", icon: "https://cdn.iconscout.com/3d-pack/idea/thumb-400-2.png" },
              { step: 3, title: "ביצוע מקצועי", desc: "יישום הפתרון ברמה הגבוהה ביותר", icon: "https://cdn.iconscout.com/3d-pack/settings/thumb-400-2.png" },
              { step: 4, title: "מעקב ותמיכה", desc: "ליווי מתמשך ושיפורים נוספים", icon: "https://cdn.iconscout.com/3d-pack/rocket/thumb-400-2.png" }
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
                    <img key={i} src="https://cdn.iconscout.com/3d-pack/star/thumb-400-2.png" alt="star" style={{width: '16px', height: '16px'}} />
                  ))}
                </div>
                
                <img src="https://cdn.iconscout.com/3d-pack/chat/thumb-400-2.png" alt="quote" style={{width: '24px', height: '24px', marginBottom: '12px'}} />
                
                <p className="typography-body leading-relaxed text-white mb-4 italic text-sm">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <img src="https://cdn.iconscout.com/3d-pack/user/thumb-400-2.png" alt="user" style={{width: '20px', height: '20px'}} />
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
                  <img src="https://cdn.iconscout.com/3d-pack/phone/thumb-400-2.png" alt="phone" style={{width: '20px', height: '20px'}} />
                  <span className="typography-body text-white font-medium">050-1234567</span>
                </div>
              </div>
              <div className={`${getCardClass()} p-4`}>
                <div className="flex items-center gap-3 justify-center">
                  <img src="https://cdn.iconscout.com/3d-pack/email/thumb-400-2.png" alt="email" style={{width: '20px', height: '20px'}} />
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
                { icon: 'https://cdn.iconscout.com/3d-pack/security/thumb-400-2.png', title: 'מוגן ומאובטח', desc: 'ביטחון מלא' },
                { icon: 'https://cdn.iconscout.com/3d-pack/clock/thumb-400-2.png', title: 'מענה מהיר', desc: 'תוך 24 שעות' },
                { icon: 'https://cdn.iconscout.com/3d-pack/heart/thumb-400-2.png', title: 'ללא התחייבות', desc: 'ייעוץ חינם' }
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
