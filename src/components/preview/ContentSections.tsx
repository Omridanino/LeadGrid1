
import { ReactNode } from "react";
import { ColorScheme } from "@/components/ColorEditor";
import { StyleAwareSection } from "./StyleAwareSections";
import { Handshake, Diamond, Award, Target, Users, Clock, Shield, Zap, Star, Mail, Phone, MapPin, Send } from "lucide-react";

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
      <div className="h-32 bg-gradient-to-b from-transparent via-purple-900/30 via-blue-900/40 to-black/90"></div>

      {/* Emotional Paragraph Section */}
      <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="alternate">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              הסיפור שלנו התחיל עם חלום פשוט
            </h2>
            <div className="text-xl md:text-2xl text-gray-200 leading-relaxed space-y-6">
              <p>
                לפני כמה שנים, כשהקמנו את {businessName}, החלום שלנו היה לא רק לספק עוד שירות ב{businessType}.
                רצינו ליצור חוויה אמיתית שתשנה לכם את החיים. לא עוד חברה רגילה שמבטיחה ולא מקיימת - אלא מקום שבו
                איכות ומקצועיות הם הבסיס לכל מה שאנחנו עושים.
              </p>
              <p>
                היום, אחרי מאות לקוחות מרוצים ופרויקטים מוצלחים, אנחנו עדיין מתרגשים מכל פרויקט חדש.
                כי בשבילנו זה לא רק עבודה - זה התשוקה שלנו לעזור לכם להצליח.
              </p>
            </div>
            <div className="mt-12">
              <button 
                className="group relative font-bold text-white overflow-hidden backdrop-blur-xl border border-white/20 transition-all duration-300 px-10 py-4 rounded-full text-lg"
                style={{
                  background: `linear-gradient(135deg, 
                    #6B73FF 0%, 
                    #9C40FF 50%, 
                    #FF6B9D 100%)`,
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    0 8px 25px rgba(0, 0, 0, 0.3),
                    0 0 20px rgba(107, 115, 255, 0.2)
                  `,
                }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.2) 0%,
                      transparent 30%,
                      transparent 70%,
                      rgba(255, 255, 255, 0.1) 100%)`,
                    borderRadius: 'inherit'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  בואו נכיר מקרוב 🚀
                </span>
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
              כל שירות שאנחנו מציעים נבנה מתוך ניסיון של שנים, עם התאמה מלאה לצרכים הייחודיים שלכם
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
                    פתרון מקצועי שנבנה במיוחד עבורכם, עם ליווי אישי לאורך כל הדרך עד להשגת התוצאות הטובות ביותר
                  </p>
                  <button 
                    className="group relative font-bold text-white overflow-hidden backdrop-blur-xl border border-white/20 transition-all duration-300 px-6 py-3 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(107, 115, 255, 0.8) 0%, 
                        rgba(156, 64, 255, 0.8) 50%, 
                        rgba(255, 107, 157, 0.8) 100%)`,
                      boxShadow: `
                        inset 0 1px 0 rgba(255, 255, 255, 0.2),
                        0 8px 25px rgba(0, 0, 0, 0.3)
                      `,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Handshake className="w-4 h-4 text-yellow-400" />
                      בואו נתחיל
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </StyleAwareSection>

      {/* Why Choose Us Section - 6 Cards */}
      <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="alternate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              למה לבחור דווקא בנו?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              אנחנו לא סתם עוד חברת {businessType} - אנחנו השותפים שלכם לצמיחה והצלחה
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
                  כל לקוח מקבל טיפול אישי מלא. אנחנו מכירים אתכם בשם, מבינים את הצרכים שלכם ובונים פתרונות בדיוק בשבילכם.
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
                <h3 className="text-2xl font-bold text-white mb-6">איכות ללא פשרות</h3>
                <p className="text-gray-300 leading-relaxed">
                  אנחנו לא מתפשרים על איכות. כל פרויקט עובר בדיקות קפדניות ומקבל את מלוא תשומת הלב שלנו עד לתוצאה המושלמת.
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
                  שנים של עבודה מקצועית, מאות לקוחות מרוצים ותוצאות מדברות בעד עצמן. אנחנו יודעים בדיוק איך לעזור לכם להצליח.
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
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">מחירים הוגנים ושקיפות מלאה</h3>
                <p className="text-gray-300 leading-relaxed">
                  עבודה שקופה, מחירים הוגנים וללא הפתעות לא נעימות. אתם יודעים בדיוק מה אתם מקבלים ובכמה זה עולה.
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
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">תמיכה מתמשכת ואמינה</h3>
                <p className="text-gray-300 leading-relaxed">
                  הקשר שלנו לא נגמר עם סיום הפרויקט. אנחנו כאן בשבילכם לאורך זמן, עם ליווי מקצועי ותמיכה מתמשכת.
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
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">חדשנות וטכנולוגיה מתקדמת</h3>
                <p className="text-gray-300 leading-relaxed">
                  אנחנו תמיד בחזית הטכנולוגיה, מביאים לכם את הכלים והשיטות הכי מתקדמות שיש כדי להבטיח תוצאות מעולות.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button 
              className="group relative font-bold text-white overflow-hidden backdrop-blur-xl border border-white/20 transition-all duration-300 px-12 py-4 rounded-full text-lg"
              style={{
                background: `linear-gradient(135deg, 
                  #10B981 0%, 
                  #059669 50%, 
                  #047857 100%)`,
                boxShadow: `
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  0 8px 25px rgba(0, 0, 0, 0.3),
                  0 0 20px rgba(16, 185, 129, 0.2)
                `,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                הכירו אותנו יותר 🎯
              </span>
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
              הביקורות הכנות שמראות בדיוק איך אנחנו עוזרים ללקוחות שלנו להגשים חלומות ולהשיג הצלחות אמיתיות
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "דני כהן", role: "מנהל עסק", content: `העבודה עם ${businessName} הייתה פשוט מדהימה! צוות מקצועי, שירות אדיב ותוצאות שחרגו מכל הציפיות שלי. הם באמת הבינו מה אני צריך והביאו לי בדיוק את מה שחלמתי עליו` },
              { name: "מיכל לוי", role: "יזמת", content: `אחרי שעבדתי עם כמה חברות אחרות, הגעתי ל${businessName} וכאן הבנתי מה זה שירות אמיתי. הם לא עזבו אותי עד שהכל היה מושלם, ואני ממליצה עליהם בחום!` },
              { name: "יוסי פרידמן", role: "בעל עסק", content: `התוצאות שקיבלתי מהשקעה ב${businessName} עלו על כל הציפיות! הם לא רק עשו את העבודה - הם ליוו אותי כל הדרך והפכו להיות השותפים שלי להצלחה` }
            ].map((testimonial, index) => (
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
                    "{testimonial.content}"
                  </p>
                  <div className="text-center">
                    <div className="font-bold text-white text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              className="group relative font-bold text-white overflow-hidden backdrop-blur-xl border border-white/20 transition-all duration-300 px-10 py-4 rounded-full text-lg"
              style={{
                background: `linear-gradient(135deg, 
                  #F59E0B 0%, 
                  #D97706 50%, 
                  #B45309 100%)`,
                boxShadow: `
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  0 8px 25px rgba(0, 0, 0, 0.3),
                  0 0 20px rgba(245, 158, 11, 0.2)
                `,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Diamond className="w-5 h-5 text-white" />
                קבלו הצעת מחיר 💎
              </span>
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
                  לא רק עוד אדריכל - ליצור אדריכלות שמאמת עושה את ההבדל. לא עוד עמק רגיל, אלא מקום שבו
                  איכות ומקצועיות הם לא רק מילים יפות אלא דרך חיים. כל יום אנחנו קמים עם המחשבה: "להיות
                  הכתובת המובילה בתחום" - זה מה שמניע אותנו להיות טובים יותר, לחדש, לשפר ולהתקדם.
                </p>
                <p>
                  החמימה שלנו היא לתת לכם חוויה שתזכרו, שירות שטופח עליו לאחרים, ותוצאות שיש לכם את החיים.
                </p>
              </div>
              <div className="mt-10">
                <button 
                  className="group relative font-bold text-white overflow-hidden backdrop-blur-xl border border-white/20 transition-all duration-300 px-10 py-4 rounded-full text-lg"
                  style={{
                    background: `linear-gradient(135deg, 
                      #3B82F6 0%, 
                      #8B5CF6 50%, 
                      #A855F7 100%)`,
                    boxShadow: `
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      0 8px 25px rgba(0, 0, 0, 0.3),
                      0 0 20px rgba(59, 130, 246, 0.2)
                    `,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Handshake className="w-5 h-5 text-yellow-400" />
                    בואו נכיר מקרוב 🌟
                  </span>
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

      {/* Contact Form Section */}
      <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="final">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              בואו נתחיל ביחד!
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              מוכנים לקחת את העסק שלכם לשלב הבא? השאירו פרטים ונחזור אליכם תוך 24 שעות
            </p>
            
            {/* Contact Form */}
            <div className="max-w-2xl mx-auto mb-16">
              <div 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8"
                style={{
                  boxShadow: `
                    0 25px 70px rgba(0, 0, 0, 0.5),
                    inset 0 2px 0 rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="השם המלא שלכם"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="מספר טלפון"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="כתובת אימייל"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="ספרו לנו קצת על הפרויקט שלכם..."
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="group relative font-bold text-white overflow-hidden backdrop-blur-xl border border-white/20 transition-all duration-300 px-12 py-4 rounded-full text-xl w-full"
                    style={{
                      background: `linear-gradient(135deg, 
                        #6B73FF 0%, 
                        #9C40FF 50%, 
                        #FF6B9D 100%)`,
                      boxShadow: `
                        inset 0 1px 0 rgba(255, 255, 255, 0.2),
                        0 8px 25px rgba(0, 0, 0, 0.3),
                        0 0 20px rgba(107, 115, 255, 0.2)
                      `,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Send className="w-6 h-6 text-white" />
                      שלחו את הפרטים ובואו נתחיל! 🚀
                    </span>
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">טלפון</h3>
                <p className="text-gray-300">050-123-4567</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">אימייל</h3>
                <p className="text-gray-300">info@business.co.il</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
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
