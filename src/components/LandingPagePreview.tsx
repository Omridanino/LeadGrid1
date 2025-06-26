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
    <div className="w-full bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden rounded-lg" dir="rtl">
      <style>{`
        .simple-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .simple-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        .cta-button {
          background: linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary});
          box-shadow: 0 4px 15px ${currentColors.accent}40;
          transition: all 0.3s ease;
          border: none;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px ${currentColors.accent}60;
        }

        .contact-section {
          background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(31,41,55,0.9));
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          backdrop-filter: blur(10px);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center text-center p-8"
               style={{
                 background: finalHeroImage 
                   ? `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${finalHeroImage}')` 
                   : `linear-gradient(135deg, ${currentColors.primary}20, ${currentColors.secondary}10, ${currentColors.background})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 mb-6 text-white rounded-full font-semibold text-sm simple-card">
            {content.badge}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6"
              style={{ 
                color: currentColors.headlineColor || 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}>
            {content.headline}
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto"
             style={{ color: currentColors.subheadlineColor || 'rgba(255,255,255,0.9)' }}>
            {content.subheadline}
          </p>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="cta-button inline-block px-8 py-4 text-white font-bold rounded-lg text-lg mb-12"
          >
            {content.cta}
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {Object.entries(content.stats).map(([key, value]) => (
              <div key={key} className="simple-card p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{String(value)}</div>
                <div className="text-sm text-white opacity-70">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: currentColors.text }}>
            💎 למה לבחור בנו?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="simple-card p-6 text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                   style={{ background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary})` }}>
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">תמיכה 24/7</h3>
              <p className="text-gray-300 text-sm">זמינים עבורכם בכל שעה</p>
            </div>

            <div className="simple-card p-6 text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                   style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">ניסיון רב שנים</h3>
              <p className="text-gray-300 text-sm">מומחיות מוכחת בתחום</p>
            </div>

            <div className="simple-card p-6 text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                   style={{ background: `linear-gradient(135deg, ${currentColors.secondary}, ${currentColors.accent})` }}>
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">שירות מקצועי</h3>
              <p className="text-gray-300 text-sm">איכות ללא פשרות</p>
            </div>

            <div className="simple-card p-6 text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                   style={{ background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.secondary})` }}>
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">מחירים הוגנים</h3>
              <p className="text-gray-300 text-sm">שקיפות מלאה במחירים</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: currentColors.text }}>
            ⚡ השירותים שלנו
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "מהירות במתן שירות", desc: "זמן תגובה מהיר ושירות יעיל" },
              { icon: "🛡️", title: "אמינות וביטחון", desc: "שירות אמין עם רמת ביטחון גבוהה" },
              { icon: "🎧", title: "תמיכה מלאה", desc: "ליווי צמוד לאורך כל הדרך" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="simple-card p-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
                       style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: currentColors.text }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: currentColors.text }} className="opacity-80">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="contact-section p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                   style={{ background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary})` }}>
                <span className="text-3xl">💬</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: currentColors.text }}>
                בואו נתחיל לעבוד יחד
              </h2>
              <p className="text-lg text-gray-300">מלא את הפרטים ונחזור אליך בהקדם</p>
            </div>
            
            <form onSubmit={handleContactSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">שם מלא *</label>
                  <Input
                    type="text"
                    placeholder="השם שלך"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">כתובת אימייל *</label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 h-12"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">מספר טלפון</label>
                <Input
                  type="tel"
                  placeholder="050-1234567"
                  value={contactForm.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">הודעה *</label>
                <Textarea
                  placeholder="איך נוכל לעזור לך?"
                  rows={5}
                  value={contactForm.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full py-4 text-lg font-bold cta-button"
              >
                <Send className="w-5 h-5 ml-2" />
                שלח הודעה
              </Button>
            </form>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="simple-card p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-3" style={{ color: currentColors.accent }} />
                <h4 className="font-bold text-white mb-2">טלפון</h4>
                <p className="text-gray-300">050-1234567</p>
              </div>
              
              <div className="simple-card p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-3" style={{ color: currentColors.accent }} />
                <h4 className="font-bold text-white mb-2">אימייל</h4>
                <p className="text-gray-300">info@business.co.il</p>
              </div>
              
              <div className="simple-card p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: currentColors.accent }} />
                <h4 className="font-bold text-white mb-2">כתובת</h4>
                <p className="text-gray-300">תל אביב, ישראל</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {content.whyChooseUs && elements.includes('whyChooseUs') && (
        <section className="py-16 px-8 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{ color: currentColors.text }}>
              🏆 {content.whyChooseUs.title}
            </h2>
            <p className="text-center text-lg mb-12 opacity-80" style={{ color: currentColors.text }}>
              הסיבות המובילות לבחור בנו
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.whyChooseUs.items.map((item: any, idx: number) => (
                <div key={idx} className="simple-card p-6 flex items-center text-right">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center ml-4 flex-shrink-0"
                       style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ color: currentColors.primary }}>
                      יתרון מוביל
                    </h3>
                    <p style={{ color: currentColors.text }} className="opacity-80">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="cta-button inline-block px-8 py-4 text-white font-bold rounded-lg text-lg"
              >
                בואו נתחיל עכשיו ✨
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {elements.includes('services') && (
        <section className="relative py-16 px-8">
          <div className="glassmorphism-bg absolute inset-0 opacity-5"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: currentColors.text }}>
              🎯 השירותים שלנו
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🔧", title: "פתרונות מקצועיים", desc: "שירותים מקצועיים המותאמים לצרכים שלכם", price: "החל מ₪199" },
                { icon: "👥", title: "ייעוץ אישי", desc: "ליווי צמוד ויעוץ מקצועי לאורך כל הדרך", price: "החל מ₪299" },
                { icon: "🚀", title: "פתרון מהיר", desc: "תוצאות מהירות ויעילות ללא פשרות", price: "החל מ₪399" }
              ].map((service, idx) => (
                <div key={idx} className="text-center">
                  <div className="glassmorphism-card p-6 rounded-2xl">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
                         style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: currentColors.text }}>
                      {service.title}
                    </h3>
                    <p style={{ color: currentColors.text }} className="opacity-80 mb-4">
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
        <section className="relative py-16 px-8">
          <div className="glassmorphism-bg absolute inset-0 opacity-5"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: currentColors.text }}>
              👥 {content.aboutTitle}
            </h2>
            <div className="glassmorphism-card p-8 rounded-2xl">
              <p className="text-lg leading-relaxed mb-6" 
                 style={{ color: currentColors.aboutTextColor || currentColors.text }}>
                {content.aboutText}
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="cta-button inline-block px-8 py-4 text-white font-bold rounded-lg text-lg"
              >
                למד עוד עלינו
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {elements.includes('testimonials') && (
        <section className="relative py-16 px-8">
          <div className="glassmorphism-bg absolute inset-0 opacity-5"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: currentColors.text }}>
              💭 מה אומרים עלינו
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {content.testimonials.map((testimonial: any, idx: number) => (
                <div key={idx} className="glassmorphism-card p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center ml-3"
                         style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
                      <span className="text-lg">{testimonial.image}</span>
                    </div>
                    <div>
                      <h4 className="font-bold" style={{ color: currentColors.primary }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm opacity-70" style={{ color: currentColors.text }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 italic" style={{ color: currentColors.text }}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex">
                    {'★'.repeat(testimonial.rating).split('').map((star, i) => (
                      <span key={i} className="text-yellow-400 text-lg">{star}</span>
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
        <section className="relative py-16 px-8">
          <div className="glassmorphism-bg absolute inset-0 opacity-5"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: currentColors.text }}>
              ❓ שאלות נפוצות
            </h2>
            
            <div className="space-y-6">
              {content.faq.map((item: any, idx: number) => (
                <div key={idx} className="glassmorphism-card p-6 rounded-2xl">
                  <h3 className="font-bold mb-3 text-lg" style={{ color: currentColors.secondary }}>
                    {item.question}
                  </h3>
                  <p style={{ color: currentColors.text }} className="opacity-80 leading-relaxed">
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
