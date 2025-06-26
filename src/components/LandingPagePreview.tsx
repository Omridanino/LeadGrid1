
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star, CheckCircle2, Users, Target, Image, Award, Zap, Cpu, Network, Rocket } from "lucide-react";
import { ColorScheme } from "@/components/ColorEditor";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  elements: string[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements }: LandingPagePreviewProps) => {
  const [currentGradient, setCurrentGradient] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  // Enhanced gradient backgrounds
  const gradientBackgrounds = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)'
  ];

  // Enhanced animated backgrounds with more sophisticated effects
  const animatedBackgrounds = [
    'radial-gradient(circle at 20% 80%, #120078 0%, #9d0208 50%, #f48c06 100%)',
    'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    'conic-gradient(from 0deg at 50% 50%, #ff006e, #fb5607, #ffbe0b, #8338ec)',
    'radial-gradient(circle at 50% 50%, #667eea 0%, #764ba2 50%, #f2994a 100%)',
    'linear-gradient(45deg, #fa709a, #fee140, #43e97b, #38f9d7)',
    'linear-gradient(270deg, #8b5cf6, #06b6d4, #10b981, #f59e0b)',
    'radial-gradient(ellipse at top, #e11d48, #7c3aed, #2563eb)',
    'conic-gradient(from 90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ef4444)'
  ];

  const getBusinessImage = (businessType: string) => {
    const businessImages = {
      'עורך דין': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop',
      'רופא': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop',
      'מעצב גרפי': 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&h=1080&fit=crop',
      'יועץ עסקי': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop',
      'מורה פרטי': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop',
      'מאמן כושר': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
      'צלם': 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&h=1080&fit=crop',
      'נהג': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop',
      'מספר': 'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=1920&h=1080&fit=crop',
      'default': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop'
    };

    return businessImages[businessType as keyof typeof businessImages] || businessImages.default;
  };

  // Cycle through gradients
  useEffect(() => {
    if (formData.heroStyle === 'gradient') {
      const interval = setInterval(() => {
        setCurrentGradient((prev) => (prev + 1) % gradientBackgrounds.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [formData.heroStyle]);

  // Cycle through animations
  useEffect(() => {
    if (formData.heroStyle === 'animated') {
      const interval = setInterval(() => {
        setCurrentAnimation((prev) => (prev + 1) % animatedBackgrounds.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [formData.heroStyle]);

  const getHeroStyle = () => {
    if (formData.heroStyle === 'image') {
      const imageUrl = heroImage || getBusinessImage(formData.businessType);
      return {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    } else if (formData.heroStyle === 'animated') {
      return {
        background: animatedBackgrounds[currentAnimation],
        backgroundSize: '400% 400%',
        animation: 'gradient 8s ease infinite'
      };
    } else {
      return {
        background: gradientBackgrounds[currentGradient],
        transition: 'background 2s ease-in-out'
      };
    }
  };

  const selectedElements = formData?.selectedElements || [];

  return (
    <div className="w-full bg-gray-900 text-white overflow-y-auto max-h-screen">
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .tech-glow {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1);
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.2); }
        }
        .tech-title {
          background: linear-gradient(45deg, #00f5ff, #0066ff, #00ccff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: tech-gradient 3s ease infinite;
        }
        @keyframes tech-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .matrix-bg {
          position: relative;
          overflow: hidden;
        }
        .matrix-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: matrix-move 20s linear infinite;
          pointer-events: none;
        }
        @keyframes matrix-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden matrix-bg"
        style={getHeroStyle()}
      >
        <div className="container mx-auto text-center z-10 relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tech-title">
            {content?.headline || formData.businessName}
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed tech-glow"
            style={{ color: currentColors.subheadlineColor }}
          >
            {content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 floating-animation tech-glow"
            style={{ 
              backgroundColor: currentColors.primary,
              color: 'white'
            }}
          >
            {content?.cta || 'בואו נתחיל לעבוד יחד'}
          </Button>
        </div>
      </section>

      {/* Emotional Section */}
      {content?.sections?.emotionalSection && (
        <section className="py-20 px-4" style={{ backgroundColor: currentColors.background }}>
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8" style={{ color: currentColors.featuresColor }}>
              {content.sections.emotionalSection.title}
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: currentColors.featuresTextColor }}>
              {content.sections.emotionalSection.content}
            </p>
          </div>
        </section>
      )}

      {/* Why Us Section */}
      {content?.sections?.whyUs && (
        <section className="py-20 px-4" style={{ backgroundColor: currentColors.background }}>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: currentColors.featuresColor }}>
              {content.sections.whyUs.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.sections.whyUs.reasons?.map((reason: any, index: number) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 tech-glow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center tech-glow" style={{ backgroundColor: currentColors.primary }}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: currentColors.featuresColor }}>
                      {reason.title}
                    </h3>
                    <p style={{ color: currentColors.featuresTextColor }}>
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What We Give Section */}
      {content?.sections?.whatWeGive && (
        <section className="py-20 px-4" style={{ backgroundColor: currentColors.background }}>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: currentColors.featuresColor }}>
              {content.sections.whatWeGive.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.sections.whatWeGive.services?.map((service: any, index: number) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 tech-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-6 h-6" style={{ color: currentColors.primary }} />
                      <h3 className="text-lg font-semibold" style={{ color: currentColors.featuresColor }}>
                        {service.title}
                      </h3>
                    </div>
                    <p style={{ color: currentColors.featuresTextColor }}>
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {selectedElements.includes('gallery') && (
        <section className="py-20 px-4" style={{ backgroundColor: currentColors.background }}>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: currentColors.featuresColor }}>
              <Image className="w-8 h-8 inline-block mr-3" />
              {content?.sections?.gallery?.title || 'גלריית העבודות שלנו'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {content?.sections?.gallery?.images?.filter((img: any) => img?.url).map((galleryImage: any, index: number) => (
                <div key={index} className="relative group overflow-hidden rounded-lg aspect-square tech-glow">
                  <img 
                    src={galleryImage.url}
                    alt={galleryImage.description || `עבודה ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold">{galleryImage.description || `עבודה ${index + 1}`}</p>
                  </div>
                </div>
              )) || (
                <div className="col-span-3 text-center py-12">
                  <Image className="w-16 h-16 mx-auto mb-4 text-gray-500" />
                  <p className="text-gray-400">עדיין לא הועלו תמונות לגלריה</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Process Section */}
      {selectedElements.includes('process') && (
        <section className="py-20 px-4" style={{ backgroundColor: currentColors.background }}>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: currentColors.featuresColor }}>
              <Cpu className="w-8 h-8 inline-block mr-3" />
              תהליך העבודה הטכנולוגי שלנו
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "ניתוח חכם", desc: "ניתוח מתקדם של הצרכים באמצעות AI", icon: <Zap className="w-8 h-8" /> },
                { step: 2, title: "תכנון דיגיטלי", desc: "עיצוב מתקדם באמצעות כלים טכנולוגיים", icon: <Cpu className="w-8 h-8" /> },
                { step: 3, title: "פיתוח חכם", desc: "יישום מתקדם עם טכנולוגיות חדישות", icon: <Network className="w-8 h-8" /> },
                { step: 4, title: "השקה חדשנית", desc: "הטמעה חכמה ומעקב בזמן אמת", icon: <Rocket className="w-8 h-8" /> }
              ].map((process, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 text-center tech-glow">
                  <CardContent className="p-6">
                    <div 
                      className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center tech-glow"
                      style={{ backgroundColor: currentColors.primary }}
                    >
                      <div className="text-white">
                        {process.icon}
                      </div>
                    </div>
                    <div 
                      className="text-3xl font-bold mb-2"
                      style={{ color: currentColors.primary }}
                    >
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: currentColors.featuresColor }}>
                      {process.title}
                    </h3>
                    <p style={{ color: currentColors.featuresTextColor }}>
                      {process.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {selectedElements.includes('about') && (
        <section className="py-20 px-4" style={{ backgroundColor: currentColors.background }}>
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: currentColors.aboutColor }}>
                  <Users className="w-8 h-8 inline-block mr-3" />
                  קצת עלינו
                </h2>
                <p className="text-lg mb-6" style={{ color: currentColors.aboutTextColor }}>
                  אנחנו צוות מקצועי עם ניסיון של מעל 10 שנים בתחום. אנו מתמחים בפתרונות יצירתיים ומותאמים אישית לכל לקוח.
                </p>
                <p className="text-lg" style={{ color: currentColors.aboutTextColor }}>
                  המטרה שלנו היא לספק שירות ברמה הגבוהה ביותר ולהבטיח שביעות רצון מלאה של הלקוחות שלנו.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="הצוות שלנו"
                  className="rounded-lg shadow-lg tech-glow"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {content?.sections?.testimonials && content.sections.testimonials.some((t: any) => t.name && t.content) && (
        <section className="py-20 px-4" style={{ backgroundColor: currentColors.background }}>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: currentColors.featuresColor }}>
              מה הלקוחות שלנו אומרים
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.sections.testimonials.filter((t: any) => t.name && t.content).map((testimonial: any, index: number) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 tech-glow">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-4 italic" style={{ color: currentColors.featuresTextColor }}>
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                        <Users className="w-6 h-6 text-gray-300" />
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: currentColors.featuresColor }}>
                          {testimonial.name}
                        </p>
                        {testimonial.role && (
                          <p className="text-sm" style={{ color: currentColors.featuresTextColor }}>
                            {testimonial.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 px-4" style={{ backgroundColor: currentColors.background }}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: currentColors.contactColor }}>
            {content?.contactTitle || 'בואו נתחיל לעבוד יחד'}
          </h2>
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center gap-3 justify-center">
              <Phone className="w-5 h-5" style={{ color: currentColors.primary }} />
              <span style={{ color: currentColors.contactTextColor }}>050-1234567</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Mail className="w-5 h-5" style={{ color: currentColors.primary }} />
              <span style={{ color: currentColors.contactTextColor }}>info@business.co.il</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <MapPin className="w-5 h-5" style={{ color: currentColors.primary }} />
              <span style={{ color: currentColors.contactTextColor }}>תל אביב, ישראל</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="mt-8 text-lg px-8 py-4 rounded-2xl tech-glow"
            style={{ 
              backgroundColor: currentColors.primary,
              color: 'white'
            }}
          >
            צור קשר עכשיו
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPagePreview;
