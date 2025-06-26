
import { ColorScheme } from "./ColorEditor";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin, Edit2, Share2, Download, Palette, Type } from "lucide-react";

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
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const { toast } = useToast();

  if (!content) {
    return (
      <div className="w-full h-96 bg-gray-900 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">טוען תצוגה מקדימה...</p>
      </div>
    );
  }

  const isTechy3D = formData.designStyle === '3d';
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: content.headline,
          text: content.subheadline,
          url: window.location.href,
        });
        toast({
          title: "שותף בהצלחה! 🎉",
          description: "הדף שותף בהצלחה",
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "הקישור הועתק! 📋",
        description: "הקישור הועתק ללוח העתקות",
      });
    }
  };

  const handleExportPDF = () => {
    window.print();
    toast({
      title: "מייצא ל-PDF... 📄",
      description: "בחר 'שמור כ-PDF' בחלון ההדפסה",
    });
  };

  // Dynamic tech background styles
  const techBackgroundStyle = isTechy3D && content.techBackground ? {
    background: `${content.techBackground}, 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)`,
    position: 'relative' as const,
  } : {};

  const EditButton = ({ section, className = "" }: { section: string; className?: string }) => (
    <Button
      onClick={() => setEditingSection(editingSection === section ? null : section)}
      className={`absolute top-2 right-2 bg-blue-600/80 hover:bg-blue-700/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all z-10 ${className}`}
      size="sm"
    >
      {editingSection === section ? <Palette className="w-3 h-3" /> : <Edit2 className="w-3 h-3" />}
    </Button>
  );

  return (
    <div className="w-full text-white overflow-hidden rounded-lg" 
         style={isTechy3D ? techBackgroundStyle : { background: 'linear-gradient(to-b, from-gray-900, via-black, to-gray-900)' }}
         dir="rtl">
      
      {/* Enhanced Tech Styles */}
      <style>{`
        .tech-card {
          background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(30,30,30,0.9));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .tech-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .tech-card:hover {
          transform: translateY(-8px) rotateX(5deg);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1);
        }

        .tech-button {
          background: linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary});
          border: none;
          transition: all 0.4s ease;
          border-radius: 15px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .tech-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .tech-button:hover::before {
          left: 100%;
        }

        .tech-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
        }

        .neon-text {
          text-shadow: 
            0 0 10px ${currentColors.accent}80,
            0 0 20px ${currentColors.accent}60,
            0 0 30px ${currentColors.accent}40;
        }

        .floating-animation {
          animation: floating 6s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 40px rgba(255,255,255,0.2); }
        }

        /* Enhanced mobile responsiveness */
        @media (max-width: 768px) {
          .hero-section { min-height: 70vh !important; padding: 2rem 1rem !important; }
          .hero-title { font-size: 2rem !important; line-height: 1.2 !important; margin-bottom: 1rem !important; }
          .hero-subtitle { font-size: 1.1rem !important; margin-bottom: 2rem !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
          .features-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .tech-card { padding: 1.5rem !important; }
          .contact-form { padding: 1.5rem !important; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 1.75rem !important; }
          .hero-subtitle { font-size: 1rem !important; }
          .section-title { font-size: 1.75rem !important; }
          .tech-button { padding: 0.75rem 1.5rem !important; font-size: 1rem !important; }
        }

        .section-container {
          position: relative;
        }

        .section-container:hover .edit-controls {
          opacity: 1;
        }

        .edit-controls {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
      `}</style>

      {/* Action Buttons */}
      <div className="fixed top-20 left-4 z-50 flex flex-col gap-2">
        <Button
          onClick={() => setEditMode(!editMode)}
          className="bg-blue-600 hover:bg-blue-700 rounded-full p-3"
          size="sm"
        >
          <Edit2 className="w-4 h-4" />
        </Button>
        <Button
          onClick={handleShare}
          className="bg-green-600 hover:bg-green-700 rounded-full p-3"
          size="sm"
        >
          <Share2 className="w-4 h-4" />
        </Button>
        <Button
          onClick={handleExportPDF}
          className="bg-red-600 hover:bg-red-700 rounded-full p-3"
          size="sm"
        >
          <Download className="w-4 h-4" />
        </Button>
      </div>

      {/* Section 1: Hero Section */}
      <section id="hero" className="section-container group relative min-h-[600px] flex items-center justify-center text-center p-8"
               style={{
                 background: finalHeroImage 
                   ? `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${finalHeroImage}')` 
                   : isTechy3D 
                     ? 'transparent'
                     : `linear-gradient(135deg, ${currentColors.primary}20, ${currentColors.secondary}10, ${currentColors.background})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        
        {editMode && <EditButton section="hero" />}
        
        <div className="relative z-10 max-w-4xl mx-auto w-full floating-animation">
          <span className="inline-block px-6 py-3 mb-8 text-white rounded-full font-semibold text-sm tech-card pulse-glow">
            {content.badge}
          </span>
          
          <h1 className="hero-title text-4xl lg:text-7xl font-bold mb-8 neon-text"
              style={{ 
                color: currentColors.headlineColor || 'white',
                textShadow: `0 0 30px ${currentColors.accent}, 0 8px 16px rgba(0,0,0,0.5)`
              }}>
            {content.headline}
          </h1>
          
          <p className="hero-subtitle text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto px-4"
             style={{ color: currentColors.subheadlineColor || 'rgba(255,255,255,0.9)' }}>
            {content.subheadline}
          </p>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="tech-button inline-block px-10 py-5 text-white font-bold text-lg mb-16"
          >
            {content.cta}
          </button>

          {/* Stats Grid */}
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
            {Object.entries(content.stats).map(([key, value], index) => (
              <div key={key} className="tech-card p-6 text-center floating-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 neon-text">{String(value)}</div>
                <div className="text-sm lg:text-base text-white opacity-80">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Emotional Section (Tech Style Only) */}
      {isTechy3D && content.sections?.emotionalSection && (
        <section id="emotional" className="section-container group py-20 px-8 relative">
          {editMode && <EditButton section="emotional" />}
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="tech-card p-12 floating-animation">
              <div className="text-6xl mb-8">{content.sections.emotionalSection.icon}</div>
              <h2 className="text-4xl font-bold mb-8 neon-text" style={{ color: currentColors.text }}>
                {content.sections.emotionalSection.title}
              </h2>
              <p className="text-xl leading-relaxed opacity-90" style={{ color: currentColors.text }}>
                {content.sections.emotionalSection.content}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Why Us (Tech Style) */}
      {isTechy3D && content.sections?.whyUs ? (
        <section id="why-us" className="section-container group py-20 px-8">
          {editMode && <EditButton section="why-us" />}
          
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
              {content.sections.whyUs.title}
            </h2>
            
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.sections.whyUs.items.map((item: any, idx: number) => (
                <div key={idx} className="tech-card p-8 floating-animation" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 neon-text" style={{ color: currentColors.text }}>
                    {item.title}
                  </h3>
                  <p className="opacity-80 leading-relaxed" style={{ color: currentColors.text }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        // Legacy advantages section for non-tech styles
        <section id="advantages" className="section-container group py-20 px-8">
          {editMode && <EditButton section="advantages" />}
          
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
              💎 למה לבחור בנו?
            </h2>
            
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "🎧", title: "תמיכה 24/7", desc: "זמינים עבורכם בכל שעה" },
                { icon: "🏆", title: "ניסיון רב שנים", desc: "מומחיות מוכחת בתחום" },
                { icon: "⭐", title: "שירות מקצועי", desc: "איכות ללא פשרות" },
                { icon: "💰", title: "מחירים הוגנים", desc: "שקיפות מלאה במחירים" }
              ].map((item, idx) => (
                <div key={idx} className="tech-card p-8 text-center floating-animation" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="text-3xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white neon-text">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 4: What We Give (Tech Style) */}
      {isTechy3D && content.sections?.whatWeGive && (
        <section id="what-we-give" className="section-container group py-20 px-8 bg-gradient-to-r from-gray-900/30 to-black/50">
          {editMode && <EditButton section="what-we-give" />}
          
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
              {content.sections.whatWeGive.title}
            </h2>
            
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-10">
              {content.sections.whatWeGive.items.map((item: any, idx: number) => (
                <div key={idx} className="text-center">
                  <div className="tech-card p-8 floating-animation" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="text-4xl mb-8">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-6 neon-text" style={{ color: currentColors.text }}>
                      {item.title}
                    </h3>
                    <p style={{ color: currentColors.text }} className="opacity-80 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Testimonials */}
      <section id="testimonials" className="section-container group py-20 px-8">
        {editMode && <EditButton section="testimonials" />}
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
            💭 מה אומרים עלינו
          </h2>
          
          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-10">
            {(isTechy3D && content.sections?.testimonials ? content.sections.testimonials : [
              {
                name: "דני כהן",
                role: "מנהל עסק", 
                content: "שירות מעולה ומקצועי! ממליץ בחום",
                rating: 5,
                image: "👨‍💼"
              },
              {
                name: "שרה לוי",
                role: "יזמת",
                content: "התוצאות הטובות ביותר שקיבלתי",
                rating: 5,
                image: "👩‍💼"
              },
              {
                name: "מיכל רוזן",
                role: "בעלת חנות",
                content: "חוויה נהדרת וטיפול אישי",
                rating: 5,
                image: "👩‍🔧"
              }
            ]).map((testimonial: any, idx: number) => (
              <div key={idx} className="tech-card p-8 rounded-2xl floating-animation" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-lg ml-4 flex items-center justify-center tech-card">
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

      {/* Section 6: Contact Form */}
      <section id="contact" className="section-container group py-24 px-8">
        {editMode && <EditButton section="contact" />}
        
        <div className="max-w-5xl mx-auto">
          <div className="tech-form contact-form p-12">
            <div className="text-center mb-12 relative z-10">
              <div className="w-24 h-24 rounded-3xl mx-auto mb-8 tech-card flex items-center justify-center floating-animation">
                <span className="text-4xl">💬</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 neon-text" style={{ color: currentColors.text }}>
                {isTechy3D && content.sections ? content.sections.contactTitle : content.contactTitle}
              </h2>
              <p className="text-xl text-gray-300">מלא את הפרטים ונחזור אליך בהקדם</p>
            </div>
            
            <form onSubmit={handleContactSubmit} className="max-w-3xl mx-auto space-y-8 relative z-10">
              <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium mb-3 text-gray-300">שם מלא *</label>
                  <Input
                    type="text"
                    placeholder="השם שלך"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-black/60 border border-white/20 placeholder:text-white/50 h-14 text-lg rounded-xl backdrop-blur-md"
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
                    className="bg-black/60 border border-white/20 placeholder:text-white/50 h-14 text-lg rounded-xl backdrop-blur-md"
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
                  className="bg-black/60 border border-white/20 placeholder:text-white/50 h-14 text-lg rounded-xl backdrop-blur-md"
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium mb-3 text-gray-300">הודעה *</label>
                <Textarea
                  placeholder="איך נוכל לעזור לך?"
                  rows={5}
                  value={contactForm.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-black/60 border border-white/20 placeholder:text-white/50 text-lg rounded-xl backdrop-blur-md"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full py-6 text-xl font-bold tech-button"
              >
                <Send className="w-6 h-6 ml-3" />
                שלח הודעה
              </Button>
            </form>

            {/* Contact Info Cards */}
            <div className="contact-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
              {[
                { icon: <Phone className="w-8 h-8" />, title: "טלפון", info: "050-1234567" },
                { icon: <Mail className="w-8 h-8" />, title: "אימייל", info: "info@business.co.il" },
                { icon: <MapPin className="w-8 h-8" />, title: "כתובת", info: "תל אביב, ישראל" }
              ].map((contact, idx) => (
                <div key={idx} className="tech-card p-8 text-center floating-animation" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 rounded-xl mx-auto mb-4 tech-card flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <h4 className="font-bold text-white mb-3 text-lg neon-text">{contact.title}</h4>
                  <p className="text-gray-300 text-lg">{contact.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPagePreview;
