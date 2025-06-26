
import { ColorScheme } from "./ColorEditor";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin, Edit2, Star, Users, Award, Calendar, Play, Image, ArrowRight, CheckCircle, Target, Lightbulb, Shield } from "lucide-react";

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

  const EditButton = ({ section, className = "" }: { section: string; className?: string }) => (
    <Button
      onClick={() => setEditingSection(editingSection === section ? null : section)}
      className={`absolute top-2 right-2 bg-blue-600/80 hover:bg-blue-700/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all z-10 ${className}`}
      size="sm"
    >
      <Edit2 className="w-3 h-3" />
    </Button>
  );

  // Lightweight optimized styles
  const optimizedStyles = useMemo(() => `
    .tech-hero {
      background: linear-gradient(135deg, 
        rgba(10, 10, 26, 0.95) 0%,
        rgba(26, 26, 58, 0.85) 50%,
        rgba(10, 10, 26, 0.95) 100%
      );
      position: relative;
    }

    .tech-card {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      transition: all 0.3s ease;
    }

    .tech-card:hover {
      transform: translateY(-4px);
      border-color: rgba(59, 130, 246, 0.3);
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }

    .tech-button {
      background: linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary});
      border: none;
      transition: all 0.3s ease;
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    }

    .tech-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }

    .neon-text {
      text-shadow: 0 0 10px ${currentColors.accent}40;
    }

    .tech-stats {
      background: rgba(59, 130, 246, 0.05);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .tech-stats:hover {
      transform: translateY(-2px);
      border-color: rgba(59, 130, 246, 0.4);
    }

    .tech-grid {
      background-image: 
        linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
      .hero-section { min-height: 70vh !important; padding: 2rem 1rem !important; }
      .hero-title { font-size: 2rem !important; line-height: 1.2 !important; }
      .hero-subtitle { font-size: 1.1rem !important; }
      .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
      .features-grid { grid-template-columns: 1fr !important; }
      .contact-grid { grid-template-columns: 1fr !important; }
    }

    @media (max-width: 480px) {
      .hero-title { font-size: 1.75rem !important; }
      .section-title { font-size: 1.75rem !important; }
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
  `, [currentColors]);

  return (
    <div className="w-full text-white overflow-hidden rounded-lg relative" 
         style={{
           background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a1a 100%)',
           position: 'relative'
         }}
         dir="rtl">
      
      <style>{optimizedStyles}</style>

      {/* Section 1: Hero Section */}
      <section id="hero" className="section-container group relative min-h-[600px] flex items-center justify-center text-center p-8 tech-hero tech-grid"
               style={finalHeroImage ? {
                 background: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('${finalHeroImage}')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               } : {}}>
        
        {editMode && <EditButton section="hero" />}
        
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 text-white rounded-full font-semibold text-sm tech-card">
              {content.badge}
            </span>
          </div>
          
          <h1 className="hero-title text-4xl lg:text-6xl font-bold mb-8 neon-text"
              style={{ 
                color: currentColors.headlineColor || 'white',
                fontWeight: '900'
              }}>
            {content.headline}
          </h1>
          
          <p className="hero-subtitle text-lg lg:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto px-4"
             style={{ color: currentColors.subheadlineColor || 'rgba(255,255,255,0.9)' }}>
            {content.subheadline}
          </p>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="tech-button inline-block px-10 py-4 text-white font-bold text-lg mb-16"
          >
            {content.cta}
          </button>

          {/* Stats Grid */}
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
            {Object.entries(content.stats).map(([key, value], index) => (
              <div key={key} className="tech-stats p-6 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-3 neon-text">{String(value)}</div>
                <div className="text-sm lg:text-base text-white opacity-80 font-medium">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Emotional Section */}
      {content.sections?.emotionalSection && (
        <section id="emotional" className="section-container group py-20 px-8 relative tech-grid">
          {editMode && <EditButton section="emotional" />}
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="tech-card p-12">
              <div className="text-6xl mb-8">
                {content.sections.emotionalSection.icon}
              </div>
              <h2 className="text-4xl font-bold mb-8 neon-text" style={{ color: currentColors.text }}>
                {content.sections.emotionalSection.title}
              </h2>
              <p className="text-xl leading-relaxed opacity-90 max-w-2xl mx-auto" style={{ color: currentColors.text }}>
                {content.sections.emotionalSection.content}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Why Us */}
      {content.sections?.whyUs && (
        <section id="why-us" className="section-container group py-20 px-8">
          {editMode && <EditButton section="why-us" />}
          
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
              {content.sections.whyUs.title}
            </h2>
            
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.sections.whyUs.items.map((item: any, idx: number) => (
                <div key={idx} className="tech-card p-8">
                  <div className="text-5xl mb-6">
                    {item.icon}
                  </div>
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
      )}

      {/* Section 4: What We Give */}
      {content.sections?.whatWeGive && (
        <section id="what-we-give" className="section-container group py-20 px-8 tech-grid">
          {editMode && <EditButton section="what-we-give" />}
          
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
              {content.sections.whatWeGive.title}
            </h2>
            
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-10">
              {content.sections.whatWeGive.items.map((item: any, idx: number) => (
                <div key={idx} className="text-center">
                  <div className="tech-card p-10">
                    <div className="text-6xl mb-8">
                      {item.icon}
                    </div>
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

      {/* Gallery Section */}
      {elements.includes('gallery') && (
        <section id="gallery" className="section-container group py-20 px-8">
          {editMode && <EditButton section="gallery" />}
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <Image className="w-6 h-6 text-blue-400" />
                <h2 className="text-4xl font-bold neon-text" style={{ color: currentColors.text }}>
                  גלריית העבודות שלנו
                </h2>
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                עבודות מרשימות שביצענו עבור לקוחות מרבית התחומים
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4,5,6,7,8].map((item, idx) => (
                <div key={idx} className="tech-card aspect-square p-4">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Image className="w-8 h-8 text-white/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {elements.includes('process') && (
        <section id="process" className="section-container group py-20 px-8 tech-grid">
          {editMode && <EditButton section="process" />}
          
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-green-400" />
                <h2 className="text-4xl font-bold neon-text" style={{ color: currentColors.text }}>
                  תהליך העבודה שלנו
                </h2>
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                מתכנון ועד ביצוע - כך אנחנו מבטיחים תוצאות מושלמות
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "תכנון ואפיון", desc: "בדיקת הצרכים והגדרת המטרות", icon: <Lightbulb className="w-6 h-6" /> },
                { step: "02", title: "פיתוח וביצוע", desc: "יצירה מקצועית לפי הסטנדרטים הגבוהים", icon: <CheckCircle className="w-6 h-6" /> },
                { step: "03", title: "מסירה ותמיכה", desc: "מסירה מושלמת עם תמיכה שוטפת", icon: <Shield className="w-6 h-6" /> }
              ].map((process, idx) => (
                <div key={idx} className="tech-card p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{process.step}</span>
                  </div>
                  <div className="text-blue-400 mb-3 flex justify-center">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 neon-text" style={{ color: currentColors.text }}>
                    {process.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {elements.includes('about') && (
        <section id="about" className="section-container group py-20 px-8">
          {editMode && <EditButton section="about" />}
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-purple-400" />
                  <h2 className="text-4xl font-bold neon-text" style={{ color: currentColors.text }}>
                    קצת עלינו
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    אנחנו צוות מקצועי עם ניסיון רב שנים בתחום {formData.businessType}. 
                    המומחיות שלנו מבוססת על ידע עמוק והבנה של הצרכים הייחודיים של כל לקוח.
                  </p>
                  <p>
                    החזון שלנו הוא להעניק שירות ברמה הגבוהה ביותר, תוך שמירה על יחס אישי 
                    וליווי צמוד לכל אורך הדרך.
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="font-semibold text-sm">מומחים מוסמכים</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="font-semibold text-sm">שירות 5 כוכבים</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="tech-card p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 neon-text" style={{ color: currentColors.text }}>
                  הצוות המקצועי
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  צוות מנוסה ומקצועי שיודע להתאים את עצמו לכל אתגר ולהביא תוצאות מעל לציפיות
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section id="testimonials" className="section-container group py-20 px-8 tech-grid">
        {editMode && <EditButton section="testimonials" />}
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text" style={{ color: currentColors.text }}>
            💭 מה אומרים עלינו
          </h2>
          
          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content.sections?.testimonials || [
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
              <div key={idx} className="tech-card p-6 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-xl ml-3 flex items-center justify-center tech-card">
                    <span className="text-xl">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg neon-text" style={{ color: currentColors.primary }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm opacity-70" style={{ color: currentColors.text }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="mb-6 italic leading-relaxed" style={{ color: currentColors.text }}>
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

      {/* Contact Section */}
      <section id="contact" className="section-container group py-24 px-8">
        {editMode && <EditButton section="contact" />}
        
        <div className="max-w-5xl mx-auto">
          <div className="tech-card p-12">
            <div className="text-center mb-12 relative z-10">
              <div className="w-24 h-24 rounded-2xl mx-auto mb-8 tech-card flex items-center justify-center">
                <span className="text-4xl">💬</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 neon-text" style={{ color: currentColors.text }}>
                {content.sections?.contactTitle || content.contactTitle}
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
                    className="bg-black/40 border border-white/20 placeholder:text-white/50 h-12 text-lg rounded-xl"
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
                    className="bg-black/40 border border-white/20 placeholder:text-white/50 h-12 text-lg rounded-xl"
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
                  className="bg-black/40 border border-white/20 placeholder:text-white/50 h-12 text-lg rounded-xl"
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium mb-3 text-gray-300">הודעה *</label>
                <Textarea
                  placeholder="איך נוכל לעזור לך?"
                  rows={5}
                  value={contactForm.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-black/40 border border-white/20 placeholder:text-white/50 text-lg rounded-xl"
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
            <div className="contact-grid grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 relative z-10">
              {[
                { icon: <Phone className="w-8 h-8" />, title: "טלפון", info: "050-1234567" },
                { icon: <Mail className="w-8 h-8" />, title: "אימייל", info: "info@business.co.il" },
                { icon: <MapPin className="w-8 h-8" />, title: "כתובת", info: "תל אביב, ישראל" }
              ].map((contact, idx) => (
                <div key={idx} className="tech-card p-6 text-center">
                  <div className="w-16 h-16 rounded-xl mx-auto mb-4 tech-card flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <h4 className="font-bold text-white mb-3 text-lg neon-text">{contact.title}</h4>
                  <p className="text-gray-300">{contact.info}</p>
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
