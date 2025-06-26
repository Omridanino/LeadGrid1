
import { ColorScheme } from "./ColorEditor";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin, Edit2 } from "lucide-react";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage?: string;
  elements?: string[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements = [] }: LandingPagePreviewProps) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [editMode, setEditMode] = useState(false);
  const { toast } = useToast();

  if (!content) {
    return (
      <div className="w-full h-96 bg-gray-900 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">טוען תצוגה מקדימה...</p>
      </div>
    );
  }

  const finalHeroImage = formData.heroStyle === 'image' && heroImage ? heroImage : null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "ההודעה נשלחה בהצלחה! 📧",
      description: "נחזור אליך בהקדם האפשרי",
    });

    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden rounded-lg" dir="rtl">
      <style>{`
        .silver-icon {
          color: rgba(192, 192, 192, 0.8);
          background: linear-gradient(135deg, rgba(192, 192, 192, 0.1), rgba(169, 169, 169, 0.05));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(192, 192, 192, 0.2);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .silver-icon:hover {
          color: rgba(192, 192, 192, 1);
          border-color: rgba(192, 192, 192, 0.4);
          transform: translateY(-2px);
        }

        .tech-card {
          background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(30,30,30,0.9));
          backdrop-filter: blur(15px);
          border: 1px solid rgba(192, 192, 192, 0.2);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .tech-card:hover {
          transform: translateY(-3px);
          border-color: rgba(192, 192, 192, 0.4);
        }

        .tech-button {
          background: linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary});
          border: none;
          transition: all 0.3s ease;
          border-radius: 12px;
        }

        .tech-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .tech-form {
          background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(20,20,20,0.95));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(192, 192, 192, 0.1);
          border-radius: 20px;
        }

        .form-field {
          background: rgba(0,0,0,0.6);
          border: 1px solid rgba(192, 192, 192, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          border-radius: 10px;
          color: white;
        }

        .form-field:focus {
          background: rgba(0,0,0,0.8);
          border-color: rgba(192, 192, 192, 0.5);
          outline: none;
        }

        .stats-card {
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(30,30,30,0.8));
          backdrop-filter: blur(15px);
          border: 1px solid rgba(192, 192, 192, 0.2);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .stats-card:hover {
          transform: translateY(-3px);
          border-color: rgba(192, 192, 192, 0.4);
        }

        .neon-text {
          text-shadow: 
            0 0 5px ${currentColors.accent}60,
            0 0 10px ${currentColors.accent}40;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .hero-section {
            min-height: 70vh !important;
            padding: 2rem 1rem !important;
          }
          
          .hero-title {
            font-size: 2rem !important;
            line-height: 1.2 !important;
            margin-bottom: 1rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 2rem !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .tech-card {
            padding: 1.5rem !important;
          }
          
          .silver-icon {
            width: 3rem !important;
            height: 3rem !important;
          }
          
          .contact-form {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.75rem !important;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
          }
          
          .section-title {
            font-size: 1.75rem !important;
          }
          
          .tech-button {
            padding: 0.75rem 1.5rem !important;
            font-size: 1rem !important;
          }
        }
      `}</style>

      {/* Edit Mode Toggle */}
      <Button
        onClick={() => setEditMode(!editMode)}
        className="fixed top-32 left-4 z-50 bg-blue-600 hover:bg-blue-700 rounded-full p-3"
        size="sm"
      >
        <Edit2 className="w-4 h-4" />
      </Button>

      {/* Hero Section */}
      <section className="hero-section relative min-h-[600px] flex items-center justify-center text-center p-8"
               style={{
                 background: finalHeroImage 
                   ? `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${finalHeroImage}')` 
                   : `linear-gradient(135deg, ${currentColors.primary}20, ${currentColors.secondary}10, ${currentColors.background})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <span className="inline-block px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 text-white rounded-full font-semibold text-sm tech-card">
            {content.badge}
          </span>
          
          <h1 className="hero-title text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 neon-text"
              style={{ 
                color: currentColors.headlineColor || 'white',
                textShadow: `0 0 30px ${currentColors.accent}, 0 8px 16px rgba(0,0,0,0.5)`
              }}>
            {content.headline}
          </h1>
          
          <p className="hero-subtitle text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto px-4"
             style={{ color: currentColors.subheadlineColor || 'rgba(255,255,255,0.9)' }}>
            {content.subheadline}
          </p>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="tech-button inline-block px-8 md:px-10 py-4 md:py-5 text-white font-bold text-base md:text-lg mb-12 md:mb-16"
          >
            {content.cta}
          </button>

          {/* Stats Grid */}
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
            {Object.entries(content.stats).map(([key, value], index) => (
              <div key={key} className="stats-card p-4 md:p-6 text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 neon-text">{String(value)}</div>
                <div className="text-xs md:text-sm lg:text-base text-white opacity-80">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-12 md:mb-16 neon-text" style={{ color: currentColors.text }}>
            💎 למה לבחור בנו?
          </h2>
          
          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="tech-card p-6 md:p-8 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl mx-auto mb-4 md:mb-6 silver-icon">
                <span className="text-2xl md:text-3xl">🎧</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white neon-text">תמיכה 24/7</h3>
              <p className="text-gray-300 text-sm leading-relaxed">זמינים עבורכם בכל שעה</p>
            </div>

            <div className="tech-card p-6 md:p-8 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl mx-auto mb-4 md:mb-6 silver-icon">
                <span className="text-2xl md:text-3xl">🏆</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white neon-text">ניסיון רב שנים</h3>
              <p className="text-gray-300 text-sm leading-relaxed">מומחיות מוכחת בתחום</p>
            </div>

            <div className="tech-card p-6 md:p-8 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl mx-auto mb-4 md:mb-6 silver-icon">
                <span className="text-2xl md:text-3xl">⭐</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white neon-text">שירות מקצועי</h3>
              <p className="text-gray-300 text-sm leading-relaxed">איכות ללא פשרות</p>
            </div>

            <div className="tech-card p-6 md:p-8 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl mx-auto mb-4 md:mb-6 silver-icon">
                <span className="text-2xl md:text-3xl">💰</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white neon-text">מחירים הוגנים</h3>
              <p className="text-gray-300 text-sm leading-relaxed">שקיפות מלאה במחירים</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-r from-gray-900/30 to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-12 md:mb-16 neon-text" style={{ color: currentColors.text }}>
            ⚡ השירותים שלנו
          </h2>
          
          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { icon: "⚡", title: "מהירות במתן שירות", desc: "זמן תגובה מהיר ושירות יעיל" },
              { icon: "🛡️", title: "אמינות וביטחון", desc: "שירות אמין עם רמת ביטחון גבוהה" },
              { icon: "🎧", title: "תמיכה מלאה", desc: "ליווי צמוד לאורך כל הדרך" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="tech-card p-6 md:p-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl mx-auto mb-6 md:mb-8 silver-icon">
                    <span className="text-2xl md:text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 neon-text" style={{ color: currentColors.text }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: currentColors.text }} className="opacity-80 text-base md:text-lg leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="tech-form contact-form p-8 md:p-10 lg:p-12">
            <div className="text-center mb-8 md:mb-12 relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl mx-auto mb-6 md:mb-8 silver-icon">
                <span className="text-3xl md:text-4xl">💬</span>
              </div>
              
              <h2 className="section-title text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 neon-text" style={{ color: currentColors.text }}>
                בואו נתחיל לעבוד יחד
              </h2>
              <p className="text-lg md:text-xl text-gray-300">מלא את הפרטים ונחזור אליך בהקדם</p>
            </div>
            
            <form onSubmit={handleContactSubmit} className="max-w-3xl mx-auto space-y-6 md:space-y-8 relative z-10">
              <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-base md:text-lg font-medium mb-2 md:mb-3 text-gray-300">שם מלא *</label>
                  <Input
                    type="text"
                    placeholder="השם שלך"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="form-field placeholder:text-white/50 h-12 md:h-14 text-base md:text-lg border-0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-base md:text-lg font-medium mb-2 md:mb-3 text-gray-300">כתובת אימייל *</label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="form-field placeholder:text-white/50 h-12 md:h-14 text-base md:text-lg border-0"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-base md:text-lg font-medium mb-2 md:mb-3 text-gray-300">מספר טלפון</label>
                <Input
                  type="tel"
                  placeholder="050-1234567"
                  value={contactForm.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="form-field placeholder:text-white/50 h-12 md:h-14 text-base md:text-lg border-0"
                />
              </div>
              
              <div>
                <label className="block text-base md:text-lg font-medium mb-2 md:mb-3 text-gray-300">הודעה *</label>
                <Textarea
                  placeholder="איך נוכל לעזור לך?"
                  rows={5}
                  value={contactForm.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="form-field placeholder:text-white/50 text-base md:text-lg border-0"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full py-5 md:py-6 text-lg md:text-xl font-bold tech-button border-0"
              >
                <Send className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
                שלח הודעה
              </Button>
            </form>

            {/* Contact Info Cards */}
            <div className="contact-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 relative z-10">
              <div className="tech-card p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl mx-auto mb-3 md:mb-4 silver-icon">
                  <Phone className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="font-bold text-white mb-2 md:mb-3 text-base md:text-lg neon-text">טלפון</h4>
                <p className="text-gray-300 text-base md:text-lg">050-1234567</p>
              </div>
              
              <div className="tech-card p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl mx-auto mb-3 md:mb-4 silver-icon">
                  <Mail className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="font-bold text-white mb-2 md:mb-3 text-base md:text-lg neon-text">אימייל</h4>
                <p className="text-gray-300 text-base md:text-lg">info@business.co.il</p>
              </div>
              
              <div className="tech-card p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl mx-auto mb-3 md:mb-4 silver-icon">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="font-bold text-white mb-2 md:mb-3 text-base md:text-lg neon-text">כתובת</h4>
                <p className="text-gray-300 text-base md:text-lg">תל אביב, ישראל</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {elements.includes('testimonials') && content.testimonials && (
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-12 md:mb-16 neon-text" style={{ color: currentColors.text }}>
              💭 מה אומרים עלינו
            </h2>
            
            <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {content.testimonials.map((testimonial: any, idx: number) => (
                <div key={idx} className="tech-card p-6 md:p-8 rounded-2xl">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg ml-3 md:ml-4 silver-icon">
                      <span className="text-base md:text-lg">{testimonial.image}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg md:text-xl" style={{ color: currentColors.primary }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm opacity-70" style={{ color: currentColors.text }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 md:mb-6 italic text-base md:text-lg" style={{ color: currentColors.text }}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex">
                    {'★'.repeat(testimonial.rating).split('').map((star, i) => (
                      <span key={i} className="text-yellow-400 text-lg md:text-xl">{star}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {elements.includes('faq') && content.faq && (
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-12 md:mb-16 neon-text" style={{ color: currentColors.text }}>
              ❓ שאלות נפוצות
            </h2>
            
            <div className="space-y-6 md:space-y-8">
              {content.faq.map((item: any, idx: number) => (
                <div key={idx} className="tech-card p-6 md:p-8 rounded-2xl">
                  <h3 className="font-bold mb-3 md:mb-4 text-lg md:text-xl" style={{ color: currentColors.secondary }}>
                    {item.question}
                  </h3>
                  <p style={{ color: currentColors.text }} className="opacity-80 leading-relaxed text-base md:text-lg">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LandingPagePreview;
