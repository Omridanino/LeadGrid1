
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, Quote, MessageCircle, HelpCircle, Award } from "lucide-react";
import { ColorScheme } from "@/components/ColorEditor";
import { useToast } from "@/hooks/use-toast";
import { getHeroImageUrl } from "@/utils/heroImageUtils";

interface PageElement {
  id: string;
  type: 'title' | 'text' | 'image' | 'testimonial' | 'faq' | 'blog' | 'whychoose';
  content: any;
  order: number;
}

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage?: string;
  elements?: PageElement[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements = [] }: LandingPagePreviewProps) => {
  const { toast } = useToast();

  const handleCtaClick = () => {
    toast({
      title: "🎯 קריאה לפעולה!",
      description: "בדף האמיתי זה יוביל לטופס יצירת קשר או דף הזמנה",
    });
  };

  const finalHeroImage = formData.heroStyle === 'image' ? getHeroImageUrl(content, heroImage || '', formData) : null;

  // Render based on design style
  if (formData.designStyle === 'storytelling') {
    return <StorytellingPreview content={content} currentColors={currentColors} formData={formData} finalHeroImage={finalHeroImage} handleCtaClick={handleCtaClick} />;
  }

  if (formData.designStyle === 'minimal') {
    return <MinimalPreview content={content} currentColors={currentColors} formData={formData} finalHeroImage={finalHeroImage} handleCtaClick={handleCtaClick} />;
  }

  // Default 3D style
  return <ThreeDPreview content={content} currentColors={currentColors} formData={formData} finalHeroImage={finalHeroImage} handleCtaClick={handleCtaClick} />;
};

// 3D Glassmorphism Preview Component
const ThreeDPreview = ({ content, currentColors, formData, finalHeroImage, handleCtaClick }: any) => {
  // Enhanced 3D glassmorphism section component
  const renderGlassmorphismSection = (children: React.ReactNode, className: string = "") => (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: currentColors.background }}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-12 left-12 w-32 h-32 rounded-full"
          style={{ 
            background: `conic-gradient(from 45deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent}, ${currentColors.primary})`,
            animation: 'spin 30s linear infinite',
            filter: 'blur(8px)',
            transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)'
          }}
        />
        <div 
          className="absolute bottom-12 right-12 w-24 h-24 rounded-full"
          style={{ 
            background: `linear-gradient(135deg, ${currentColors.secondary}60, ${currentColors.accent}60)`,
            animation: 'pulse 4s ease-in-out infinite',
            filter: 'blur(6px)',
            transform: 'perspective(800px) rotateX(-30deg) rotateY(60deg)'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full"
          style={{ 
            background: `conic-gradient(from 0deg, transparent, ${currentColors.primary}20, transparent)`,
            animation: 'spin 20s linear infinite',
            transform: 'perspective(1000px) rotateX(75deg) translate(-50%, -50%)'
          }}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

  // Enhanced glassmorphism card component - smaller sizes
  const renderGlassmorphismCard = (children: React.ReactNode, hoverScale: boolean = true) => (
    <div 
      className={`group relative p-3 rounded-xl transition-all duration-700 cursor-pointer border ${hoverScale ? 'hover:scale-105' : ''}`}
      style={{ 
        background: `linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`,
        border: `2px solid ${currentColors.primary}40`,
        backdropFilter: 'blur(20px)',
        boxShadow: `0 20px 60px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2)`,
        transform: 'perspective(1000px) rotateX(5deg) rotateY(2deg)'
      }}
    >
      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 transition-all duration-700 -z-10"
        style={{ 
          background: `radial-gradient(ellipse at center, ${currentColors.primary}50, ${currentColors.secondary}30, transparent 70%)`
        }}
      />
      {children}
    </div>
  );

  return (
    <Card className="bg-gray-900 border-gray-700 overflow-hidden">
      <CardContent className="p-0">
        {/* Hero Section */}
        {renderGlassmorphismSection(
          <div 
            className="p-4 text-center min-h-[300px] flex flex-col justify-center relative"
            style={{
              background: finalHeroImage 
                ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${finalHeroImage}')` 
                : `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-transparent"></div>
            <div className="relative z-10">
              <Badge 
                className="mb-2 text-xs px-3 py-1 border-2 animate-pulse"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                  transform: 'perspective(300px) rotateX(10deg)'
                }}
              >
                {content.badge}
              </Badge>
              
              <h1 
                className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in"
                style={{ 
                  color: currentColors.headlineColor || 'white',
                  textShadow: '0 10px 30px rgba(0,0,0,0.8)',
                  transform: 'perspective(800px) rotateX(5deg)'
                }}
              >
                {content.headline}
              </h1>
              
              <p 
                className="text-sm md:text-base mb-4 max-w-xl mx-auto leading-relaxed"
                style={{ 
                  color: currentColors.subheadlineColor || 'rgba(255,255,255,0.9)',
                  textShadow: '0 5px 15px rgba(0,0,0,0.6)',
                  transform: 'perspective(600px) rotateX(3deg)'
                }}
              >
                {content.subheadline}
              </p>
              
              <Button 
                size="sm" 
                className="text-sm px-4 py-2 shadow-2xl rounded-lg hover:scale-110 transition-all duration-700 font-bold mb-4 relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary}, ${currentColors.secondary})`,
                  color: 'white',
                  border: 'none',
                  boxShadow: `0 15px 40px ${currentColors.accent}60`,
                  transform: 'perspective(500px) rotateX(8deg)'
                }}
                onClick={handleCtaClick}
              >
                <span className="relative z-10">{content.cta}</span>
              </Button>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3 max-w-2xl mx-auto">
                {Object.entries(content.stats).map(([key, value], index) => (
                  <div 
                    key={index} 
                    className="p-2 rounded-lg hover:scale-110 transition-all duration-700 shadow-2xl"
                    style={{ 
                      background: `linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))`,
                      backdropFilter: 'blur(15px)',
                      border: `2px solid ${currentColors.primary}40`,
                      transform: 'perspective(600px) rotateX(10deg) rotateY(5deg)'
                    }}
                  >
                    <div className="text-lg md:text-xl font-bold text-white mb-1" style={{ textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>{value as string}</div>
                    <div className="text-xs text-white font-semibold" style={{ textShadow: '0 3px 8px rgba(0,0,0,0.3)' }}>{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Why Choose Us Section */}
        {content.whyChooseUs && renderGlassmorphismSection(
          <div className="p-4">
            <h2 
              className="text-xl md:text-2xl font-bold mb-3 text-center"
              style={{ 
                color: currentColors.text,
                textShadow: '0 8px 16px rgba(0,0,0,0.5)',
                transform: 'perspective(1000px) rotateX(10deg)'
              }}
            >
              <Award className="w-6 h-6 ml-2 inline animate-bounce" style={{ color: currentColors.accent }} />
              {content.whyChooseUs.title}
            </h2>
            <p className="text-center text-sm mb-6 opacity-90" style={{ color: currentColors.text }}>
              הסיבות המובילות לבחור בנו מבין כל האפשרויות
            </p>
            
            <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
              {content.whyChooseUs.items.map((item: any, index: number) => (
                <div key={index}>
                  {renderGlassmorphismCard(
                    <div className="p-3">
                      <div className="relative mb-3">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative"
                          style={{ 
                            background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary} 50%, ${currentColors.accent})`,
                            boxShadow: `0 20px 40px ${currentColors.primary}60, inset 0 4px 0 rgba(255,255,255,0.4)`,
                            transform: 'perspective(500px) rotateX(25deg) rotateY(15deg)'
                          }}
                        >
                          <i 
                            className={`ri-${item.icon} text-lg text-white group-hover:scale-125 transition-all duration-700`}
                            style={{ 
                              textShadow: '0 6px 12px rgba(0,0,0,0.6)',
                              transform: 'perspective(200px) rotateX(-15deg)'
                            }}
                          />
                        </div>

                        {/* Floating particles - smaller */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse" 
                             style={{ backgroundColor: currentColors.accent, boxShadow: `0 0 20px ${currentColors.accent}` }} />
                        <div className="absolute -bottom-0 -left-0 w-2 h-2 rounded-full animate-pulse" 
                             style={{ backgroundColor: currentColors.secondary, animationDelay: '0.5s', boxShadow: `0 0 15px ${currentColors.secondary}` }} />
                      </div>
                      
                      <div className="text-center relative">
                        <p 
                          className="text-sm leading-relaxed font-bold group-hover:text-opacity-100 transition-all duration-700"
                          style={{ 
                            color: currentColors.text,
                            textShadow: '0 3px 6px rgba(0,0,0,0.4)',
                            transform: 'perspective(500px) rotateX(5deg)'
                          }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-base mb-4 opacity-90" style={{ color: currentColors.text }}>
                מוכנים להתחיל את המסע איתנו?
              </p>
              <Button 
                size="sm"
                className="px-8 py-3 text-base font-bold rounded-xl hover:scale-110 transition-all duration-700 shadow-2xl relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary}, ${currentColors.secondary})`,
                  color: 'white',
                  boxShadow: `0 20px 60px ${currentColors.accent}60`,
                  transform: 'perspective(500px) rotateX(10deg)'
                }}
                onClick={handleCtaClick}
              >
                <span className="relative z-10">בואו נתחיל עכשיו ✨</span>
              </Button>
            </div>
          </div>
        )}

        {/* About Section */}
        {renderGlassmorphismSection(
          <div className="p-4">
            <h2 
              className="text-xl md:text-2xl font-bold mb-4 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.aboutColor || currentColors.text,
                textShadow: '0 6px 12px rgba(0,0,0,0.4)',
                transform: 'perspective(800px) rotateX(8deg)'
              }}
            >
              <Users className="w-5 h-5 ml-2 animate-bounce" style={{ color: currentColors.secondary }} />
              {content.aboutTitle}
            </h2>
            <div className="max-w-2xl mx-auto">
              {renderGlassmorphismCard(
                <div className="p-4">
                  <p 
                    className="text-sm md:text-base leading-relaxed text-center"
                    style={{ 
                      color: currentColors.aboutTextColor || currentColors.text,
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {content.aboutText}
                  </p>
                </div>,
                false
              )}
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        {renderGlassmorphismSection(
          <div className="p-4">
            <h2 
              className="text-xl md:text-2xl font-bold mb-4 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.text,
                textShadow: '0 6px 12px rgba(0,0,0,0.4)',
                transform: 'perspective(800px) rotateX(8deg)'
              }}
            >
              <Quote className="w-5 h-5 ml-2 animate-bounce" style={{ color: currentColors.primary }} />
              מה אומרים עלינו
            </h2>
            <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
              {content.testimonials.map((testimonial: any, index: number) => (
                <div key={index}>
                  {renderGlassmorphismCard(
                    <div className="p-3">
                      <div className="flex items-center mb-2">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
                          style={{ 
                            background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`,
                            transform: 'perspective(300px) rotateX(15deg)'
                          }}
                        >
                          {testimonial.image}
                        </div>
                        <div className="mr-2">
                          <div className="font-bold text-sm" style={{ color: currentColors.primary }}>{testimonial.name}</div>
                          <div className="text-gray-400 text-xs">{testimonial.role}</div>
                        </div>
                      </div>
                      <p 
                        className="mb-2 text-xs leading-relaxed"
                        style={{ 
                          color: currentColors.text,
                          textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                        }}
                      >
                        "{testimonial.content}"
                      </p>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {renderGlassmorphismSection(
          <div className="p-4">
            <h2 
              className="text-xl md:text-2xl font-bold mb-4 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.text,
                textShadow: '0 6px 12px rgba(0,0,0,0.4)',
                transform: 'perspective(800px) rotateX(8deg)'
              }}
            >
              <HelpCircle className="w-5 h-5 ml-2 animate-bounce" style={{ color: currentColors.secondary }} />
              שאלות נפוצות
            </h2>
            <div className="max-w-2xl mx-auto space-y-2">
              {content.faq.map((item: any, index: number) => (
                <div key={index}>
                  {renderGlassmorphismCard(
                    <div className="p-3">
                      <h3 
                        className="font-bold mb-2 text-sm"
                        style={{ 
                          color: currentColors.secondary,
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}
                      >
                        {item.question}
                      </h3>
                      <p 
                        className="leading-relaxed text-xs"
                        style={{ 
                          color: currentColors.text,
                          textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Contact Section */}
        {renderGlassmorphismSection(
          <div className="p-4">
            <div className="max-w-2xl mx-auto text-center">
              {renderGlassmorphismCard(
                <div className="p-4">
                  <h2 
                    className="text-lg md:text-xl font-bold mb-3 flex items-center justify-center"
                    style={{ 
                      color: currentColors.contactColor || currentColors.text,
                      textShadow: '0 4px 8px rgba(0,0,0,0.4)'
                    }}
                  >
                    <MessageCircle className="w-4 h-4 ml-2 animate-bounce" style={{ color: currentColors.accent }} />
                    {content.contactTitle}
                  </h2>
                  <div 
                    className="p-3 rounded-lg mb-3"
                    style={{ 
                      background: 'rgba(0,0,0,0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div 
                      className="whitespace-pre-line leading-relaxed text-sm"
                      style={{ 
                        color: currentColors.contactTextColor || currentColors.text,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {formData.contactInfo}
                    </div>
                  </div>
                  <Button 
                    className="text-sm px-6 py-2 rounded-lg hover:scale-110 transition-all duration-700 font-bold shadow-2xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`, 
                      color: 'white',
                      border: 'none',
                      boxShadow: `0 10px 30px ${currentColors.primary}60`
                    }}
                    onClick={handleCtaClick}
                  >
                    {content.cta}
                  </Button>
                </div>,
                false
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Storytelling Preview Component
const StorytellingPreview = ({ content, currentColors, formData, finalHeroImage, handleCtaClick }: any) => {
  return (
    <Card className="bg-white border-gray-200 overflow-hidden">
      <CardContent className="p-0">
        {/* Hero Section */}
        <div 
          className="p-8 text-center min-h-[400px] flex flex-col justify-center"
          style={{
            background: finalHeroImage 
              ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${finalHeroImage}')` 
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white'
          }}
        >
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            {content.badge}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
            הסיפור שלנו התחיל כאן
          </h1>
          
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90 leading-relaxed">
            מתוך חלום להביא שינוי אמיתי, התחלנו במסע שמטרתו לתת לכם את השירות הטוב ביותר. כל לקוח הוא חלק מהסיפור שלנו.
          </p>
          
          <Button 
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={handleCtaClick}
          >
            בואו נכיר
          </Button>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
            {Object.entries(content.stats).map(([key, value], index) => (
              <div key={index} className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                <div className="text-2xl md:text-3xl font-bold">{value as string}</div>
                <div className="text-sm opacity-80 mt-1">{key}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        {content.whyChooseUs && (
          <div className="p-8 bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-light text-center mb-8 text-gray-800">
              למה אנחנו שונים?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {content.whyChooseUs.items.map((item: any, index: number) => (
                <div key={index} className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
                  >
                    <i className={`ri-${item.icon} text-2xl text-white`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">הערך שלנו</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Section */}
        <div className="p-8">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-8 text-gray-800">
            הסיפור מאחורי {content.aboutTitle}
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700 mb-8">{content.aboutText}</p>
            <p className="text-xl italic text-gray-600 font-light">
              "אנחנו מאמינים שכל לקוח ראוי לחוויה אישית ומיוחדת שתישמר איתו לתמיד."
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="p-8 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-8 text-gray-800">
            הסיפורים של הלקוחות שלנו
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {content.testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-lg relative">
                <div className="absolute -top-2 left-6 text-6xl text-red-500 leading-none">"</div>
                <div className="flex items-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl mr-4"
                    style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
                  >
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-4">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-800">
            בואו נתחיל את הסיפור שלכם
          </h2>
          <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-2xl mb-6">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {formData.contactInfo}
            </div>
          </div>
          <Button 
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={handleCtaClick}
          >
            התחילו עכשיו
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Minimal Preview Component  
const MinimalPreview = ({ content, currentColors, formData, finalHeroImage, handleCtaClick }: any) => {
  return (
    <Card className="bg-white border-gray-200 overflow-hidden">
      <CardContent className="p-0">
        {/* Hero Section */}
        <div 
          className="p-4 min-h-[80vh] flex items-center"
          style={{
            background: finalHeroImage 
              ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${finalHeroImage}')` 
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white'
          }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="inline-block px-3 py-1 bg-white/20 text-xs font-medium uppercase tracking-wide mb-4 rounded">
              {content.badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {content.headline}
            </h1>
            
            <p className="text-lg md:text-xl mb-8 font-light opacity-90">
              {content.subheadline}
            </p>
            
            <Button 
              size="lg"
              className="bg-black hover:bg-transparent border-2 border-black hover:text-black text-white px-8 py-4 font-semibold transition-all duration-200"
              onClick={handleCtaClick}
            >
              {content.cta}
            </Button>

            <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/20">
              {Object.entries(content.stats).map(([key, value], index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">{value as string}</div>
                  <div className="text-xs font-light uppercase tracking-wide opacity-80 mt-1">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        {content.whyChooseUs && (
          <div className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              {content.whyChooseUs.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {content.whyChooseUs.items.map((item: any, index: number) => (
                <div key={index} className="text-left">
                  <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                    <i className={`ri-${item.icon} text-2xl text-white`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">יתרון תחרותי</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Section */}
        <div className="p-12 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">פתרון</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-gray-700">{content.aboutText}</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">המלצות</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-white text-lg mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-12 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">שאלות נפוצות</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {content.faq.map((item: any, index: number) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">יצירת קשר</h2>
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 border border-gray-200 mb-8">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {formData.contactInfo}
            </div>
          </div>
          <Button 
            size="lg"
            className="bg-black hover:bg-transparent border-2 border-black hover:text-black text-white px-8 py-4 font-semibold transition-all duration-200"
            onClick={handleCtaClick}
          >
            {content.cta}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPagePreview;
