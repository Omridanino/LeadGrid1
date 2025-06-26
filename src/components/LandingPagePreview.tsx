import { ColorScheme } from "./ColorEditor";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";

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
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-10px);
          }
        }

        @keyframes softPulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes subtleGlow {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
          }
        }

        .tech-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .tech-card:hover {
          transform: translateY(-5px) scale(1.02);
          background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08));
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .floating-gentle {
          animation: gentleFloat 4s ease-in-out infinite;
        }

        .floating-gentle:nth-child(2) { animation-delay: -1s; }
        .floating-gentle:nth-child(3) { animation-delay: -2s; }
        .floating-gentle:nth-child(4) { animation-delay: -3s; }

        .holographic-btn {
          background: linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary}, ${currentColors.secondary});
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
          border: none;
          transition: all 0.3s ease;
          will-change: transform;
        }

        .holographic-btn:hover {
          transform: translateY(-2px);
          animation: subtleGlow 2s ease infinite;
        }

        .neon-text {
          text-shadow: 0 0 10px ${currentColors.accent}80;
        }

        .contact-form-glass {
          background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(31,41,55,0.9));
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
        }

        .contact-form-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, ${currentColors.primary}20, transparent, ${currentColors.accent}20);
          opacity: 0.5;
          pointer-events: none;
        }

        .form-field {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .form-field:focus {
          background: rgba(255,255,255,0.1);
          border-color: ${currentColors.accent};
          box-shadow: 0 0 20px ${currentColors.accent}40;
          outline: none;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .pulse-soft {
          animation: softPulse 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .tech-card:hover {
            transform: translateY(-3px) scale(1.01);
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-center p-8"
               style={{
                 background: finalHeroImage 
                   ? `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${finalHeroImage}')` 
                   : `linear-gradient(135deg, ${currentColors.primary}20, ${currentColors.secondary}10, ${currentColors.background})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-6 py-3 mb-8 text-white rounded-full font-semibold text-sm tech-card pulse-soft">
            {content.badge}
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 neon-text"
              style={{ 
                color: currentColors.headlineColor || 'white',
                textShadow: `0 0 20px ${currentColors.accent}, 0 4px 8px rgba(0,0,0,0.5)`
              }}>
            {content.headline}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto"
             style={{ color: currentColors.subheadlineColor || 'rgba(255,255,255,0.9)' }}>
            {content.subheadline}
          </p>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="holographic-btn inline-block px-10 py-5 text-white font-bold rounded-xl text-lg mb-16"
          >
            {content.cta}
          </button>

          {/* Stats Grid */}
          <div className="stats-grid max-w-4xl mx-auto">
            {Object.entries(content.stats).map(([key, value], index) => (
              <div key={key} className={`tech-card floating-gentle p-6 text-center`}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 pulse-soft">{String(value)}</div>
                <div className="text-sm md:text-base text-white opacity-80">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
            💎 למה לבחור בנו?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="tech-card p-8 text-center floating-gentle">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 pulse-soft"
                   style={{ background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary})` }}>
                <span className="text-3xl">🎧</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white neon-text">תמיכה 24/7</h3>
              <p className="text-gray-300 text-sm leading-relaxed">זמינים עבורכם בכל שעה</p>
            </div>

            <div className="tech-card p-8 text-center floating-gentle">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 pulse-soft"
                   style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white neon-text">ניסיון רב שנים</h3>
              <p className="text-gray-300 text-sm leading-relaxed">מומחיות מוכחת בתחום</p>
            </div>

            <div className="tech-card p-8 text-center floating-gentle">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 pulse-soft"
                   style={{ background: `linear-gradient(135deg, ${currentColors.secondary}, ${currentColors.accent})` }}>
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white neon-text">שירות מקצועי</h3>
              <p className="text-gray-300 text-sm leading-relaxed">איכות ללא פשרות</p>
            </div>

            <div className="tech-card p-8 text-center floating-gentle">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 pulse-soft"
                   style={{ background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.secondary})` }}>
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white neon-text">מחירים הוגנים</h3>
              <p className="text-gray-300 text-sm leading-relaxed">שקיפות מלאה במחירים</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-gray-900/30 to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
            ⚡ השירותים שלנו
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: "⚡", title: "מהירות במתן שירות", desc: "זמן תגובה מהיר ושירות יעיל" },
              { icon: "🛡️", title: "אמינות וביטחון", desc: "שירות אמין עם רמת ביטחון גבוהה" },
              { icon: "🎧", title: "תמיכה מלאה", desc: "ליווי צמוד לאורך כל הדרך" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="tech-card p-8 floating-gentle">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 pulse-soft"
                       style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 neon-text" style={{ color: currentColors.text }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: currentColors.text }} className="opacity-80 text-lg leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="contact-form-glass p-10 md:p-12">
            <div className="text-center mb-12 relative z-10">
              <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 pulse-soft"
                   style={{ background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary})` }}>
                <span className="text-4xl">💬</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text" style={{ color: currentColors.text }}>
                בואו נתחיל לעבוד יחד
              </h2>
              <p className="text-xl text-gray-300">מלא את הפרטים ונחזור אליך בהקדם</p>
            </div>
            
            <form onSubmit={handleContactSubmit} className="max-w-3xl mx-auto space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium mb-3 text-gray-300">שם מלא *</label>
                  <Input
                    type="text"
                    placeholder="השם שלך"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="form-field text-white placeholder:text-white/50 h-14 text-lg rounded-xl border-0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-3 text-gray-300">כתובת אימייל *</label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="form-field text-white placeholder:text-white/50 h-14 text-lg rounded-xl border-0"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-lg font-medium mb-3 text-gray-300">מספר טלפון</label>
                <Input
                  type="tel"
                  placeholder="050-1234567"
                  value={contactForm.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="form-field text-white placeholder:text-white/50 h-14 text-lg rounded-xl border-0"
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium mb-3 text-gray-300">הודעה *</label>
                <Textarea
                  placeholder="איך נוכל לעזור לך?"
                  rows={6}
                  value={contactForm.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="form-field text-white placeholder:text-white/50 text-lg rounded-xl border-0"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full py-6 text-xl font-bold holographic-btn rounded-xl border-0"
              >
                <Send className="w-6 h-6 ml-3" />
                שלח הודעה
              </Button>
            </form>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 relative z-10">
              <div className="tech-card p-8 text-center floating-gentle">
                <Phone className="w-10 h-10 mx-auto mb-4 pulse-soft" style={{ color: currentColors.accent }} />
                <h4 className="font-bold text-white mb-3 text-lg neon-text">טלפון</h4>
                <p className="text-gray-300 text-lg">050-1234567</p>
              </div>
              
              <div className="tech-card p-8 text-center floating-gentle">
                <Mail className="w-10 h-10 mx-auto mb-4 pulse-soft" style={{ color: currentColors.accent }} />
                <h4 className="font-bold text-white mb-3 text-lg neon-text">אימייל</h4>
                <p className="text-gray-300 text-lg">info@business.co.il</p>
              </div>
              
              <div className="tech-card p-8 text-center floating-gentle">
                <MapPin className="w-10 h-10 mx-auto mb-4 pulse-soft" style={{ color: currentColors.accent }} />
                <h4 className="font-bold text-white mb-3 text-lg neon-text">כתובת</h4>
                <p className="text-gray-300 text-lg">תל אביב, ישראל</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {content.whyChooseUs && elements.includes('whyChooseUs') && (
        <section className="py-20 px-8 bg-gradient-to-r from-gray-900/30 to-black/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 neon-text" style={{ color: currentColors.text }}>
              🏆 {content.whyChooseUs.title}
            </h2>
            <p className="text-center text-xl mb-16 opacity-80" style={{ color: currentColors.text }}>
              הסיבות המובילות לבחור בנו
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {content.whyChooseUs.items.map((item: any, idx: number) => (
                <div key={idx} className="tech-card p-8 flex items-center text-right floating-gentle">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center ml-6 flex-shrink-0 pulse-soft"
                       style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3 text-lg neon-text" style={{ color: currentColors.primary }}>
                      יתרון מוביל
                    </h3>
                    <p style={{ color: currentColors.text }} className="opacity-80 text-lg leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <button 
                onClick={() => scrollToSection('contact')}
                className="holographic-btn inline-block px-10 py-5 text-white font-bold rounded-xl text-lg"
              >
                בואו נתחיל עכשיו ✨
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {elements.includes('services') && (
        <section className="relative py-20 px-8">
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
              🎯 השירותים שלנו
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: "🔧", title: "פתרונות מקצועיים", desc: "שירותים מקצועיים המותאמים לצרכים שלכם", price: "החל מ₪199" },
                { icon: "👥", title: "ייעוץ אישי", desc: "ליווי צמוד ויעוץ מקצועי לאורך כל הדרך", price: "החל מ₪299" },
                { icon: "🚀", title: "פתרון מהיר", desc: "תוצאות מהירות ויעילות ללא פשרות", price: "החל מ₪399" }
              ].map((service, idx) => (
                <div key={idx} className="text-center">
                  <div className="tech-card p-8 rounded-2xl floating-gentle">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-8 pulse-soft"
                         style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 neon-text" style={{ color: currentColors.text }}>
                      {service.title}
                    </h3>
                    <p style={{ color: currentColors.text }} className="opacity-80 text-lg leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <div className="text-lg font-bold" style={{ color: currentColors.accent }}>
                      {service.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {elements.includes('about') && (
        <section className="relative py-20 px-8">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 neon-text" style={{ color: currentColors.text }}>
              👥 {content.aboutTitle}
            </h2>
            <div className="tech-card p-12 rounded-2xl floating-gentle">
              <p className="text-lg leading-relaxed mb-8" 
                 style={{ color: currentColors.aboutTextColor || currentColors.text }}>
                {content.aboutText}
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="holographic-btn inline-block px-10 py-5 text-white font-bold rounded-xl text-lg"
              >
                למד עוד עלינו
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {elements.includes('testimonials') && (
        <section className="relative py-20 px-8">
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
              💭 מה אומרים עלינו
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              {content.testimonials.map((testimonial: any, idx: number) => (
                <div key={idx} className="tech-card p-8 rounded-2xl floating-gentle">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center ml-4 pulse-soft"
                         style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
                      <span className="text-lg">{testimonial.image}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl" style={{ color: currentColors.primary }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm opacity-70" style={{ color: currentColors.text }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="mb-6 italic text-lg" style={{ color: currentColors.text }}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex">
                    {'★'.repeat(testimonial.rating).split('').map((star, i) => (
                      <span key={i} className="text-yellow-400 text-xl">{star}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {elements.includes('faq') && (
        <section className="relative py-20 px-8">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
              ❓ שאלות נפוצות
            </h2>
            
            <div className="space-y-8">
              {content.faq.map((item: any, idx: number) => (
                <div key={idx} className="tech-card p-8 rounded-2xl floating-gentle">
                  <h3 className="font-bold mb-4 text-xl" style={{ color: currentColors.secondary }}>
                    {item.question}
                  </h3>
                  <p style={{ color: currentColors.text }} className="opacity-80 leading-relaxed text-lg">
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
