import { ReactNode } from "react";
import { ColorScheme } from "@/components/ColorEditor";
import { StyleAwareSection } from "./StyleAwareSections";
import { Handshake, Diamond, Award } from "lucide-react";

interface ContentSectionsProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  selectedElements: string[];
}

export const ContentSections = ({ content, currentColors, formData, selectedElements }: ContentSectionsProps) => {
  if (!content || !formData) return null;

  const businessType = formData.businessType || 'שירותים מקצועיים';
  const businessName = formData.businessName || 'העסק שלי';
  const targetAudience = Array.isArray(formData.targetAudience) ? formData.targetAudience.join(', ') : 'לקוחות פוטנציאליים';
  const mainServices = Array.isArray(formData.mainServices) ? formData.mainServices : [];
  
  return (
    <>
      {/* Smooth Gradient Transition from Hero */}
      <div className="h-32 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>

      {/* Emotional Paragraph Section */}
      <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="alternate">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              הסיפור שלנו התחיל עם חלום פשוט
            </h2>
            <div className="text-xl md:text-2xl text-gray-200 leading-relaxed space-y-6">
              <p>
                לא רק עוד {businessType} - ליצור אדריכלות שמאמת עושה את ההבדל. לא עוד עמק רגיל, אלא מקום שבו איכות 
                ומקצועיות הם לא רק מילים יפות אלא דרך חיים. כל יום אנחנו קמים עם המחשבה: "להיות הכתובת המובילה בתחום" - זה 
                מה שמניע אותנו להיות טובים יותר, לחדש, לשפר ולהתקדם.
              </p>
              <p>
                החמימה שלנו היא לתת לכם חוויה שתזכרו, שירות שטופח עליו לאחרים, ותוצאות שיש לכם את החיים.
              </p>
            </div>
            <div className="mt-12">
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto backdrop-blur-sm border border-white/20">
                <Award className="w-5 h-5 text-yellow-400" />
                גלו את כל השירותים 🚀
              </button>
            </div>
          </div>
        </div>
      </StyleAwareSection>

      {/* Services Section */}
      <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="standard">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              השירותים המקצועיים שלנו
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              אנחנו מספקים פתרונות מותאמים אישית ב{businessType} עם דגש על איכות, מקצועיות ושירות ללא פשרות
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainServices.slice(0, 3).map((service: string, index: number) => (
              <div key={index} className="group">
                <div 
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:from-white/15 hover:to-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    boxShadow: `
                      0 20px 60px rgba(0, 0, 0, 0.4),
                      inset 0 2px 0 rgba(255, 255, 255, 0.3)
                    `,
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Diamond className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    פתרון מקצועי ומותאם אישית שיעזור לכם להשיג את המטרות שלכם בצורה היעילה ביותר
                  </p>
                  <button className="group bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto backdrop-blur-sm border border-white/20">
                    <Handshake className="w-4 h-4 text-yellow-400" />
                    בואו נתחיל
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </StyleAwareSection>

      {/* Why Choose Us Section */}
      <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="alternate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              למה לבחור דווקא בנו?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              אנחנו לא סתם עוד חברה - אנחנו השותף שלכם לדרך להצלחה
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group">
              <div 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:from-white/15 hover:to-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl h-full"
                style={{
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.4),
                    inset 0 2px 0 rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">יחס אישי ושירות מותאם</h3>
                <p className="text-gray-300 leading-relaxed">
                  אנחנו מאמינים שכל לקוח הוא עולם ומלואו. לכן אנחנו מתאימים את השירות והפתרונות בדיוק לצרכים שלכם.
                </p>
              </div>
            </div>

            <div className="group">
              <div 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:from-white/15 hover:to-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl h-full"
                style={{
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.4),
                    inset 0 2px 0 rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Diamond className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">איכות</h3>
                <p className="text-gray-300 leading-relaxed">
                  כל פרויקט מקבל את מלוא תשומת הלב שלנו. אנחנו לא מתפשרים על איכות ולא מותירים על תמצאותינו.
                </p>
              </div>
            </div>

            <div className="group">
              <div 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:from-white/15 hover:to-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl h-full"
                style={{
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.4),
                    inset 0 2px 0 rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">ניסיון מוכח ומקצועיות</h3>
                <p className="text-gray-300 leading-relaxed">
                  עם שנים רבות של עבודה מקצועית ומאות לקוחות מרוצים, אנחנו יודעים בדיוק איך לתת לכם את השירות הטוב ביותר.
                </p>
              </div>
            </div>

            <div className="group">
              <div 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:from-white/15 hover:to-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl h-full"
                style={{
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.4),
                    inset 0 2px 0 rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Diamond className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">מחירים הוגנים ושקיפות מלאה</h3>
                <p className="text-gray-300 leading-relaxed">
                  אנו מאמינים בעבודה שקופה ובמחירים הוגנים. לא נפתיעים, לא הפתעות - רק שירות כנה ואמין.
                </p>
              </div>
            </div>

            <div className="group">
              <div 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:from-white/15 hover:to-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl h-full"
                style={{
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.4),
                    inset 0 2px 0 rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">תמיכה מתמשכת ואמינה</h3>
                <p className="text-gray-300 leading-relaxed">
                  אנחנו כאן בשבילכם גם אחרי שהפרויקט מסתיים. התמיכה והליווי שלנו נמשכים לאורך זמן.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto backdrop-blur-sm border border-white/20">
              <Award className="w-5 h-5 text-yellow-400" />
              הכירו אותנו יותר 🎯
            </button>
          </div>
        </div>
      </StyleAwareSection>

      {/* Testimonials Section */}
      <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="standard">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              מה הלקוחות שלנו אומרים
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              הביקורות הכנות שמראות איך אנחנו באמת עוזרים ללקוחות שלנו להגשים חלומות
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[0, 1, 2].map((index) => {
              const testimonial = content?.sections?.testimonials?.[index];
              return (
                <div key={index} className="group">
                  <div 
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl h-full"
                    style={{
                      boxShadow: `
                        0 20px 60px rgba(0, 0, 0, 0.4),
                        inset 0 2px 0 rgba(255, 255, 255, 0.3)
                      `,
                    }}
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center italic">
                      "{testimonial?.content || `השירות ב${businessName} פשוט מעולה! צוות מקצועי, שירות אדיב ותוצאות שחורגות מהציפיות. ממליץ בחום!`}"
                    </p>
                    <div className="text-center">
                      <div className="font-bold text-white text-lg">
                        {testimonial?.name || `לקוח מרוצה ${index + 1}`}
                      </div>
                      <div className="text-gray-400">
                        {testimonial?.role || targetAudience}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto backdrop-blur-sm border border-white/20">
              <Diamond className="w-5 h-5 text-white" />
              קבלו הצעת מחיר 💎
            </button>
          </div>
        </div>
      </StyleAwareSection>

      {/* About Section */}
      <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="alternate">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                קצת עלינו - הסיפור מאחורי הקסם
              </h2>
              <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                <p>
                  {content?.sections?.about?.paragraph1 || 
                    `אנחנו צוות מקצועי עם ניסיון של מעל 10 שנים בתחום ה${businessType}. התחלנו כחלום קטן ובנינו את עצמנו צעד אחר צעד, לקוח אחר לקוח, פרויקט אחר פרויקט.`
                  }
                </p>
                <p>
                  {content?.sections?.about?.paragraph2 || 
                    `המטרה שלנו היא לספק שירות ברמה הגבוהה ביותר ולהיות השותף הימין שלכם בדרך להצלחה. אנחנו מאמינים שכל לקוח מגיע לקבל יחס אישי, פתרון מותאם ותוצאות שמדברות בעד עצמן.`
                  }
                </p>
              </div>
              <div className="mt-10">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 backdrop-blur-sm border border-white/20">
                  <Handshake className="w-5 h-5 text-yellow-400" />
                  בואו נכיר מקרוב 🌟
                </button>
              </div>
            </div>
            <div className="relative">
              <div 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-2 transform hover:scale-105 transition-all duration-500"
                style={{
                  boxShadow: `
                    0 25px 70px rgba(0, 0, 0, 0.5),
                    inset 0 2px 0 rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                <img
                  src={content?.sections?.about?.image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"}
                  alt="הצוות שלנו"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </StyleAwareSection>

      {/* Contact Section */}
      <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="final">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {content?.contactTitle || "בואו נתחיל ביחד!"}
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              מוכנים לקחת את העסק שלכם לשלב הבא? אנחנו כאן כדי לעזור לכם להגשים את המטרות שלכם.
              צרו קשר עוד היום ונתחיל לבנות ביחד את הצלחתכם.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center gap-4 backdrop-blur-sm border border-white/20">
                <Award className="w-6 h-6 text-yellow-400" />
                בואו נתחיל עכשיו! 🚀
              </button>
              
              <button className="group bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 backdrop-blur-sm border border-white/30">
                <Diamond className="w-5 h-5 text-blue-400" />
                עוד מידע
              </button>
            </div>
            
            <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">טלפון</h3>
                <p className="text-gray-300">050-123-4567</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                  <Diamond className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">אימייל</h3>
                <p className="text-gray-300">info@business.co.il</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">כתובת</h3>
                <p className="text-gray-300">תל אביב, ישראל</p>
              </div>
            </div>
          </div>
        </div>
      </StyleAwareSection>
    </>
  );
};
