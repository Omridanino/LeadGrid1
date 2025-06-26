
import { ColorScheme } from "./ColorEditor";
import { useState } from "react";
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

  return (
    <div className="w-full text-white overflow-hidden rounded-lg relative" 
         style={{
           background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 25%, #2d1b4e 50%, #1a1a3a 75%, #0a0a1a 100%)',
           position: 'relative'
         }}
         dir="rtl">
      
      {/* Advanced 3D Tech Styles */}
      <style>{`
        .tech-hero-3d {
          background: linear-gradient(135deg, 
            rgba(10, 10, 26, 0.95) 0%,
            rgba(26, 26, 58, 0.85) 25%,
            rgba(45, 27, 78, 0.75) 50%,
            rgba(26, 26, 58, 0.85) 75%,
            rgba(10, 10, 26, 0.95) 100%
          ),
          radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
          radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 80%);
          position: relative;
          overflow: hidden;
        }

        .tech-hero-3d::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.02) 49%, rgba(255,255,255,0.02) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.02) 49%, rgba(255,255,255,0.02) 51%, transparent 52%);
          background-size: 60px 60px;
          animation: techGrid 20s linear infinite;
          pointer-events: none;
        }

        @keyframes techGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        .floating-card-3d {
          background: linear-gradient(135deg, 
            rgba(255,255,255,0.05) 0%, 
            rgba(255,255,255,0.02) 50%, 
            rgba(0,0,0,0.1) 100%
          );
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .floating-card-3d::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.1) 0%, 
            transparent 50%, 
            rgba(139, 92, 246, 0.1) 100%
          );
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
        }

        .floating-card-3d:hover::before {
          opacity: 1;
        }

        .floating-card-3d:hover {
          transform: translateY(-15px) rotateX(5deg) rotateY(2deg);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 
            0 30px 60px rgba(0,0,0,0.4),
            0 0 50px rgba(59, 130, 246, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .tech-button-3d {
          background: linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary});
          border: none;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 10px 30px rgba(0,0,0,0.3),
            0 0 20px rgba(59, 130, 246, 0.2);
          transform-style: preserve-3d;
        }

        .tech-button-3d::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255,255,255,0.3), 
            transparent
          );
          transition: left 0.8s ease;
        }

        .tech-button-3d:hover::before {
          left: 100%;
        }

        .tech-button-3d:hover {
          transform: translateY(-8px) rotateX(5deg);
          box-shadow: 
            0 20px 50px rgba(0,0,0,0.4),
            0 0 30px rgba(59, 130, 246, 0.3);
        }

        .neon-glow-3d {
          text-shadow: 
            0 0 10px ${currentColors.accent}80,
            0 0 20px ${currentColors.accent}60,
            0 0 40px ${currentColors.accent}40,
            0 0 80px ${currentColors.accent}20;
          animation: neonPulse 3s ease-in-out infinite alternate;
        }

        @keyframes neonPulse {
          from {
            text-shadow: 
              0 0 10px ${currentColors.accent}80,
              0 0 20px ${currentColors.accent}60,
              0 0 40px ${currentColors.accent}40;
          }
          to {
            text-shadow: 
              0 0 20px ${currentColors.accent}90,
              0 0 30px ${currentColors.accent}70,
              0 0 60px ${currentColors.accent}50,
              0 0 100px ${currentColors.accent}30;
          }
        }

        .floating-element {
          animation: floatingTech 8s ease-in-out infinite;
        }

        @keyframes floatingTech {
          0%, 100% { 
            transform: translateY(0px) rotateZ(0deg); 
          }
          25% { 
            transform: translateY(-20px) rotateZ(1deg); 
          }
          50% { 
            transform: translateY(-10px) rotateZ(-1deg); 
          }
          75% { 
            transform: translateY(-15px) rotateZ(0.5deg); 
          }
        }

        .tech-stats-3d {
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.1) 0%,
            rgba(139, 92, 246, 0.05) 50%,
            rgba(6, 182, 212, 0.1) 100%
          );
          backdrop-filter: blur(25px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 25px;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .tech-stats-3d::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255,255,255,0.5), 
            transparent
          );
        }

        .tech-stats-3d:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 
            0 25px 50px rgba(0,0,0,0.3),
            0 0 30px rgba(59, 130, 246, 0.2);
        }

        .tech-grid-bg {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 30s linear infinite;
        }

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }

        /* Enhanced mobile responsiveness */
        @media (max-width: 768px) {
          .hero-section { min-height: 70vh !important; padding: 2rem 1rem !important; }
          .hero-title { font-size: 2rem !important; line-height: 1.2 !important; margin-bottom: 1rem !important; }
          .hero-subtitle { font-size: 1.1rem !important; margin-bottom: 2rem !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
          .features-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .floating-card-3d { padding: 1.5rem !important; }
          .contact-form { padding: 1.5rem !important; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 1.75rem !important; }
          .hero-subtitle { font-size: 1rem !important; }
          .section-title { font-size: 1.75rem !important; }
          .tech-button-3d { padding: 0.75rem 1.5rem !important; font-size: 1rem !important; }
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

      {/* Section 1: Hero Section */}
      <section id="hero" className="section-container group relative min-h-[700px] flex items-center justify-center text-center p-8 tech-hero-3d tech-grid-bg"
               style={finalHeroImage ? {
                 background: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('${finalHeroImage}')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               } : {}}>
        
        {editMode && <EditButton section="hero" />}
        
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="floating-element mb-8">
            <span className="inline-block px-8 py-4 text-white rounded-full font-semibold text-sm floating-card-3d">
              {content.badge}
            </span>
          </div>
          
          <h1 className="hero-title text-5xl lg:text-8xl font-bold mb-10 neon-glow-3d"
              style={{ 
                color: currentColors.headlineColor || 'white',
                fontWeight: '900'
              }}>
            {content.headline}
          </h1>
          
          <p className="hero-subtitle text-xl lg:text-3xl mb-16 opacity-90 leading-relaxed max-w-4xl mx-auto px-4"
             style={{ color: currentColors.subheadlineColor || 'rgba(255,255,255,0.9)' }}>
            {content.subheadline}
          </p>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="tech-button-3d inline-block px-12 py-6 text-white font-bold text-xl mb-20"
          >
            {content.cta}
          </button>

          {/* Enhanced Stats Grid */}
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
            {Object.entries(content.stats).map(([key, value], index) => (
              <div key={key} className="tech-stats-3d p-8 text-center floating-element" 
                   style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-4 neon-glow-3d">{String(value)}</div>
                <div className="text-sm lg:text-base text-white opacity-80 font-medium">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Emotional Section */}
      {content.sections?.emotionalSection && (
        <section id="emotional" className="section-container group py-24 px-8 relative tech-grid-bg">
          {editMode && <EditButton section="emotional" />}
          
          <div className="max-w-5xl mx-auto text-center">
            <div className="floating-card-3d p-16 floating-element">
              <div className="text-8xl mb-12 floating-element" style={{ animationDelay: '0.5s' }}>
                {content.sections.emotionalSection.icon}
              </div>
              <h2 className="text-5xl font-bold mb-12 neon-glow-3d" style={{ color: currentColors.text }}>
                {content.sections.emotionalSection.title}
              </h2>
              <p className="text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto" style={{ color: currentColors.text }}>
                {content.sections.emotionalSection.content}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Why Us */}
      {content.sections?.whyUs && (
        <section id="why-us" className="section-container group py-24 px-8">
          {editMode && <EditButton section="why-us" />}
          
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-20 neon-glow-3d" style={{ color: currentColors.text }}>
              {content.sections.whyUs.title}
            </h2>
            
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-10">
              {content.sections.whyUs.items.map((item: any, idx: number) => (
                <div key={idx} className="floating-card-3d p-10 floating-element" 
                     style={{ animationDelay: `${idx * 0.2}s` }}>
                  <div className="text-6xl mb-8 floating-element" style={{ animationDelay: `${idx * 0.1 + 0.5}s` }}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 neon-glow-3d" style={{ color: currentColors.text }}>
                    {item.title}
                  </h3>
                  <p className="opacity-80 leading-relaxed text-lg" style={{ color: currentColors.text }}>
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
        <section id="what-we-give" className="section-container group py-24 px-8 tech-grid-bg">
          {editMode && <EditButton section="what-we-give" />}
          
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-20 neon-glow-3d" style={{ color: currentColors.text }}>
              {content.sections.whatWeGive.title}
            </h2>
            
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-12">
              {content.sections.whatWeGive.items.map((item: any, idx: number) => (
                <div key={idx} className="text-center">
                  <div className="floating-card-3d p-12 floating-element" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <div className="text-7xl mb-10 floating-element" style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}>
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-8 neon-glow-3d" style={{ color: currentColors.text }}>
                      {item.title}
                    </h3>
                    <p style={{ color: currentColors.text }} className="opacity-80 text-xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* New Section: Gallery (if selected) */}
      {elements.includes('gallery') && (
        <section id="gallery" className="section-container group py-24 px-8">
          {editMode && <EditButton section="gallery" />}
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <Image className="w-8 h-8 text-blue-400" />
                <h2 className="text-5xl font-bold neon-glow-3d" style={{ color: currentColors.text }}>
                  גלריית העבודות שלנו
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                עבודות מרשימות שביצענו עבור לקוחות מרבית התחומים
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1,2,3,4,5,6,7,8].map((item, idx) => (
                <div key={idx} className="floating-card-3d aspect-square p-4 floating-element"
                     style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <Image className="w-12 h-12 text-white/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* New Section: Process (if selected) */}
      {elements.includes('process') && (
        <section id="process" className="section-container group py-24 px-8 tech-grid-bg">
          {editMode && <EditButton section="process" />}
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-green-400" />
                <h2 className="text-5xl font-bold neon-glow-3d" style={{ color: currentColors.text }}>
                  תהליך העבודה שלנו
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                מתכנון ועד ביצוע - כך אנחנו מבטיחים תוצאות מושלמות
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "תכנון ואפיון", desc: "בדיקת הצרכים והגדרת המטרות", icon: <Lightbulb className="w-8 h-8" /> },
                { step: "02", title: "פיתוח וביצוע", desc: "יצירה מקצועית לפי הסטנדרטים הגבוהים", icon: <CheckCircle className="w-8 h-8" /> },
                { step: "03", title: "מסירה ותמיכה", desc: "מסירה מושלמת עם תמיכה שוטפת", icon: <Shield className="w-8 h-8" /> }
              ].map((process, idx) => (
                <div key={idx} className="floating-card-3d p-10 text-center floating-element"
                     style={{ animationDelay: `${idx * 0.2}s` }}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6 floating-element"
                       style={{ animationDelay: `${idx * 0.1 + 0.5}s` }}>
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {process.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 neon-glow-3d" style={{ color: currentColors.text }}>
                    {process.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* New Section: About Us (if selected) */}
      {elements.includes('about') && (
        <section id="about" className="section-container group py-24 px-8">
          {editMode && <EditButton section="about" />}
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="floating-element">
                <div className="inline-flex items-center gap-3 mb-8">
                  <Users className="w-8 h-8 text-purple-400" />
                  <h2 className="text-5xl font-bold neon-glow-3d" style={{ color: currentColors.text }}>
                    קצת עלינו
                  </h2>
                </div>
                <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                  <p>
                    אנחנו צוות מקצועי עם ניסיון רב שנים בתחום {formData.businessType}. 
                    המומחיות שלנו מבוססת על ידע עמוק והבנה של הצרכים הייחודיים של כל לקוח.
                  </p>
                  <p>
                    החזון שלנו הוא להעניק שירות ברמה הגבוהה ביותר, תוך שמירה על יחס אישי 
                    וליווי צמוד לכל אורך הדרך. אנו מאמינים שהצלחתכם היא גם ההצלחה שלנו.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-6 h-6 text-yellow-400" />
                      <span className="font-semibold">מומחים מוסמכים</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 text-yellow-400" />
                      <span className="font-semibold">שירות 5 כוכבים</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="floating-card-3d p-12 floating-element" style={{ animationDelay: '0.3s' }}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-8 floating-element">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 neon-glow-3d" style={{ color: currentColors.text }}>
                    הצוות המקצועי
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    צוות מנוסה ומקצועי שיודע להתאים את עצמו לכל אתגר ולהביא תוצאות מעל לציפיות
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Testimonials */}
      <section id="testimonials" className="section-container group py-24 px-8 tech-grid-bg">
        {editMode && <EditButton section="testimonials" />}
        
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 neon-glow-3d" style={{ color: currentColors.text }}>
            💭 מה אומרים עלינו
          </h2>
          
          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-12">
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
              <div key={idx} className="floating-card-3d p-10 rounded-3xl floating-element" 
                   style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 rounded-2xl ml-4 flex items-center justify-center floating-card-3d floating-element">
                    <span className="text-2xl">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl neon-glow-3d" style={{ color: currentColors.primary }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm opacity-70 text-lg" style={{ color: currentColors.text }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="mb-8 italic text-xl leading-relaxed" style={{ color: currentColors.text }}>
                  "{testimonial.content}"
                </p>
                <div className="flex">
                  {'★'.repeat(testimonial.rating).split('').map((star, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">{star}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Contact Form */}
      <section id="contact" className="section-container group py-32 px-8">
        {editMode && <EditButton section="contact" />}
        
        <div className="max-w-6xl mx-auto">
          <div className="floating-card-3d p-16">
            <div className="text-center mb-16 relative z-10">
              <div className="w-32 h-32 rounded-3xl mx-auto mb-12 floating-card-3d flex items-center justify-center floating-element">
                <span className="text-6xl">💬</span>
              </div>
              
              <h2 className="text-5xl font-bold mb-8 neon-glow-3d" style={{ color: currentColors.text }}>
                {content.sections?.contactTitle || content.contactTitle}
              </h2>
              <p className="text-2xl text-gray-300">מלא את הפרטים ונחזור אליך בהקדם</p>
            </div>
            
            <form onSubmit={handleContactSubmit} className="max-w-4xl mx-auto space-y-10 relative z-10">
              <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xl font-medium mb-4 text-gray-300">שם מלא *</label>
                  <Input
                    type="text"
                    placeholder="השם שלך"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-black/60 border border-white/20 placeholder:text-white/50 h-16 text-xl rounded-2xl backdrop-blur-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xl font-medium mb-4 text-gray-300">כתובת אימייל *</label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-black/60 border border-white/20 placeholder:text-white/50 h-16 text-xl rounded-2xl backdrop-blur-md"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xl font-medium mb-4 text-gray-300">מספר טלפון</label>
                <Input
                  type="tel"
                  placeholder="050-1234567"
                  value={contactForm.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-black/60 border border-white/20 placeholder:text-white/50 h-16 text-xl rounded-2xl backdrop-blur-md"
                />
              </div>
              
              <div>
                <label className="block text-xl font-medium mb-4 text-gray-300">הודעה *</label>
                <Textarea
                  placeholder="איך נוכל לעזור לך?"
                  rows={6}
                  value={contactForm.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-black/60 border border-white/20 placeholder:text-white/50 text-xl rounded-2xl backdrop-blur-md"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full py-8 text-2xl font-bold tech-button-3d"
              >
                <Send className="w-8 h-8 ml-4" />
                שלח הודעה
              </Button>
            </form>

            {/* Contact Info Cards */}
            <div className="contact-grid grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 relative z-10">
              {[
                { icon: <Phone className="w-10 h-10" />, title: "טלפון", info: "050-1234567" },
                { icon: <Mail className="w-10 h-10" />, title: "אימייל", info: "info@business.co.il" },
                { icon: <MapPin className="w-10 h-10" />, title: "כתובת", info: "תל אביב, ישראל" }
              ].map((contact, idx) => (
                <div key={idx} className="floating-card-3d p-10 text-center floating-element" 
                     style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-20 h-20 rounded-2xl mx-auto mb-6 floating-card-3d flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <h4 className="font-bold text-white mb-4 text-2xl neon-glow-3d">{contact.title}</h4>
                  <p className="text-gray-300 text-xl">{contact.info}</p>
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
