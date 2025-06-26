
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, Quote, MessageCircle, HelpCircle, Award, Target, Zap, Shield, Heart, TrendingUp, Clock } from "lucide-react";
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
          className="absolute top-16 left-16 w-40 h-40 rounded-full"
          style={{ 
            background: `conic-gradient(from 45deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent}, ${currentColors.primary})`,
            animation: 'spin 30s linear infinite',
            filter: 'blur(8px)',
            transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)'
          }}
        />
        <div 
          className="absolute bottom-16 right-16 w-32 h-32 rounded-full"
          style={{ 
            background: `linear-gradient(135deg, ${currentColors.secondary}60, ${currentColors.accent}60)`,
            animation: 'pulse 4s ease-in-out infinite',
            filter: 'blur(6px)',
            transform: 'perspective(800px) rotateX(-30deg) rotateY(60deg)'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full"
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

  // Enhanced glassmorphism card component
  const renderGlassmorphismCard = (children: React.ReactNode, hoverScale: boolean = true) => (
    <div 
      className={`group relative p-6 rounded-2xl transition-all duration-700 cursor-pointer border ${hoverScale ? 'hover:scale-105' : ''}`}
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
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 -z-10"
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
            className="p-8 text-center min-h-[500px] flex flex-col justify-center relative"
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
                className="mb-4 text-sm px-4 py-2 border-2 animate-pulse"
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
                className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in"
                style={{ 
                  color: currentColors.headlineColor || 'white',
                  textShadow: '0 10px 30px rgba(0,0,0,0.8)',
                  transform: 'perspective(800px) rotateX(5deg)'
                }}
              >
                {content.headline}
              </h1>
              
              <p 
                className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
                style={{ 
                  color: currentColors.subheadlineColor || 'rgba(255,255,255,0.9)',
                  textShadow: '0 5px 15px rgba(0,0,0,0.6)',
                  transform: 'perspective(600px) rotateX(3deg)'
                }}
              >
                {content.subheadline}
              </p>
              
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 shadow-2xl rounded-xl hover:scale-110 transition-all duration-700 font-bold mb-8 relative overflow-hidden"
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">
                {Object.entries(content.stats).map(([key, value], index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-xl hover:scale-110 transition-all duration-700 shadow-2xl"
                    style={{ 
                      background: `linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))`,
                      backdropFilter: 'blur(15px)',
                      border: `2px solid ${currentColors.primary}40`,
                      transform: 'perspective(600px) rotateX(10deg) rotateY(5deg)'
                    }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>{value as string}</div>
                    <div className="text-sm text-white font-semibold" style={{ textShadow: '0 3px 8px rgba(0,0,0,0.3)' }}>{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        {renderGlassmorphismSection(
          <div className="p-8">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.text,
                textShadow: '0 8px 16px rgba(0,0,0,0.5)',
                transform: 'perspective(1000px) rotateX(10deg)'
              }}
            >
              <Zap className="w-8 h-8 ml-3 animate-bounce" style={{ color: currentColors.accent }} />
              התכונות המרכזיות שלנו
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: 'speed-fill', title: 'מהירות במתן שירות', desc: 'זמן תגובה מהיר ושירות יעיל' },
                { icon: 'shield-check-fill', title: 'אמינות וביטחון', desc: 'שירות אמין עם רמת ביטחון גבוהה' },
                { icon: 'customer-service-2-fill', title: 'תמיכה 24/7', desc: 'זמינים עבורכם בכל שעות היום' }
              ].map((feature, index) => (
                <div key={index}>
                  {renderGlassmorphismCard(
                    <div className="p-6 text-center">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700"
                        style={{ 
                          background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary} 50%, ${currentColors.accent})`,
                          boxShadow: `0 20px 40px ${currentColors.primary}60, inset 0 4px 0 rgba(255,255,255,0.4)`,
                          transform: 'perspective(500px) rotateX(25deg) rotateY(15deg)'
                        }}
                      >
                        <i 
                          className={`ri-${feature.icon} text-2xl text-white group-hover:scale-125 transition-all duration-700`}
                          style={{ 
                            textShadow: '0 6px 12px rgba(0,0,0,0.6)',
                            transform: 'perspective(200px) rotateX(-15deg)'
                          }}
                        />
                      </div>
                      
                      <h3 
                        className="text-lg font-bold mb-3"
                        style={{ 
                          color: currentColors.text,
                          textShadow: '0 3px 6px rgba(0,0,0,0.4)'
                        }}
                      >
                        {feature.title}
                      </h3>
                      
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ 
                          color: currentColors.text,
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Why Choose Us Section */}
        {content.whyChooseUs && renderGlassmorphismSection(
          <div className="p-8">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-6 text-center"
              style={{ 
                color: currentColors.text,
                textShadow: '0 8px 16px rgba(0,0,0,0.5)',
                transform: 'perspective(1000px) rotateX(10deg)'
              }}
            >
              <Award className="w-8 h-8 ml-3 inline animate-bounce" style={{ color: currentColors.accent }} />
              {content.whyChooseUs.title}
            </h2>
            <p className="text-center text-lg mb-8 opacity-90" style={{ color: currentColors.text }}>
              הסיבות המובילות לבחור בנו מבין כל האפשרויות
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {content.whyChooseUs.items.map((item: any, index: number) => (
                <div key={index}>
                  {renderGlassmorphismCard(
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div 
                          className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative"
                          style={{ 
                            background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary} 50%, ${currentColors.accent})`,
                            boxShadow: `0 20px 40px ${currentColors.primary}60, inset 0 4px 0 rgba(255,255,255,0.4)`,
                            transform: 'perspective(500px) rotateX(25deg) rotateY(15deg)'
                          }}
                        >
                          <i 
                            className={`ri-${item.icon} text-2xl text-white group-hover:scale-125 transition-all duration-700`}
                            style={{ 
                              textShadow: '0 6px 12px rgba(0,0,0,0.6)',
                              transform: 'perspective(200px) rotateX(-15deg)'
                            }}
                          />

                          {/* Floating particles */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full animate-pulse" 
                               style={{ backgroundColor: currentColors.accent, boxShadow: `0 0 20px ${currentColors.accent}` }} />
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full animate-pulse" 
                               style={{ backgroundColor: currentColors.secondary, animationDelay: '0.5s', boxShadow: `0 0 15px ${currentColors.secondary}` }} />
                        </div>
                        
                        <div className="mr-4">
                          <h3 
                            className="text-lg font-bold"
                            style={{ 
                              color: currentColors.primary,
                              textShadow: '0 3px 6px rgba(0,0,0,0.4)'
                            }}
                          >
                            יתרון מוביל
                          </h3>
                        </div>
                      </div>
                      
                      <p 
                        className="text-base leading-relaxed font-medium"
                        style={{ 
                          color: currentColors.text,
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-xl mb-6 opacity-90" style={{ color: currentColors.text }}>
                מוכנים להתחיל את המסע איתנו?
              </p>
              <Button 
                size="lg"
                className="px-12 py-4 text-xl font-bold rounded-2xl hover:scale-110 transition-all duration-700 shadow-2xl relative overflow-hidden"
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

        {/* Services Section */}
        {renderGlassmorphismSection(
          <div className="p-8">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.text,
                textShadow: '0 8px 16px rgba(0,0,0,0.5)',
                transform: 'perspective(1000px) rotateX(10deg)'
              }}
            >
              <Target className="w-8 h-8 ml-3 animate-bounce" style={{ color: currentColors.secondary }} />
              השירותים שלנו
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: 'tools-fill', title: 'פתרונות מקצועיים', desc: 'שירותים מקצועיים המותאמים לצרכים שלכם', price: 'החל מ₪199' },
                { icon: 'team-fill', title: 'ייעוץ אישי', desc: 'ליווי צמוד ויעוץ מקצועי לאורך כל הדרך', price: 'החל מ₪299' },
                { icon: 'rocket-2-fill', title: 'פתרון מהיר', desc: 'תוצאות מהירות ויעילות ללא פשרות', price: 'החל מ₪399' }
              ].map((service, index) => (
                <div key={index}>
                  {renderGlassmorphismCard(
                    <div className="p-6 text-center">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700"
                        style={{ 
                          background: `linear-gradient(135deg, ${currentColors.secondary}, ${currentColors.accent})`,
                          boxShadow: `0 20px 40px ${currentColors.secondary}60, inset 0 4px 0 rgba(255,255,255,0.4)`,
                          transform: 'perspective(500px) rotateX(25deg) rotateY(15deg)'
                        }}
                      >
                        <i 
                          className={`ri-${service.icon} text-2xl text-white`}
                          style={{ 
                            textShadow: '0 6px 12px rgba(0,0,0,0.6)',
                            transform: 'perspective(200px) rotateX(-15deg)'
                          }}
                        />
                      </div>
                      
                      <h3 
                        className="text-lg font-bold mb-3"
                        style={{ color: currentColors.text }}
                      >
                        {service.title}
                      </h3>
                      
                      <p 
                        className="text-sm mb-4 leading-relaxed"
                        style={{ color: currentColors.text }}
                      >
                        {service.desc}
                      </p>
                      
                      <div 
                        className="text-xl font-bold"
                        style={{ color: currentColors.accent }}
                      >
                        {service.price}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Section */}
        {renderGlassmorphismSection(
          <div className="p-8">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.aboutColor || currentColors.text,
                textShadow: '0 6px 12px rgba(0,0,0,0.4)',
                transform: 'perspective(800px) rotateX(8deg)'
              }}
            >
              <Users className="w-8 h-8 ml-3 animate-bounce" style={{ color: currentColors.secondary }} />
              {content.aboutTitle}
            </h2>
            <div className="max-w-4xl mx-auto">
              {renderGlassmorphismCard(
                <div className="p-8">
                  <p 
                    className="text-lg md:text-xl leading-relaxed text-center mb-6"
                    style={{ 
                      color: currentColors.aboutTextColor || currentColors.text,
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {content.aboutText}
                  </p>
                  <div className="text-center">
                    <Button 
                      className="px-8 py-3 text-lg font-bold rounded-xl hover:scale-105 transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`, 
                        color: 'white'
                      }}
                      onClick={handleCtaClick}
                    >
                      למד עוד עלינו
                    </Button>
                  </div>
                </div>,
                false
              )}
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        {renderGlassmorphismSection(
          <div className="p-8">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.text,
                textShadow: '0 6px 12px rgba(0,0,0,0.4)',
                transform: 'perspective(800px) rotateX(8deg)'
              }}
            >
              <Quote className="w-8 h-8 ml-3 animate-bounce" style={{ color: currentColors.primary }} />
              מה אומרים עלינו
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {content.testimonials.map((testimonial: any, index: number) => (
                <div key={index}>
                  {renderGlassmorphismCard(
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg"
                          style={{ 
                            background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`,
                            transform: 'perspective(300px) rotateX(15deg)'
                          }}
                        >
                          {testimonial.image}
                        </div>
                        <div className="mr-3">
                          <div className="font-bold text-base" style={{ color: currentColors.primary }}>{testimonial.name}</div>
                          <div className="text-gray-400 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                      <p 
                        className="mb-4 text-base leading-relaxed"
                        style={{ 
                          color: currentColors.text,
                          textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                        }}
                      >
                        "{testimonial.content}"
                      </p>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
          <div className="p-8">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.text,
                textShadow: '0 6px 12px rgba(0,0,0,0.4)',
                transform: 'perspective(800px) rotateX(8deg)'
              }}
            >
              <HelpCircle className="w-8 h-8 ml-3 animate-bounce" style={{ color: currentColors.secondary }} />
              שאלות נפוצות
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {content.faq.map((item: any, index: number) => (
                <div key={index}>
                  {renderGlassmorphismCard(
                    <div className="p-6">
                      <h3 
                        className="font-bold mb-3 text-lg"
                        style={{ 
                          color: currentColors.secondary,
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}
                      >
                        {item.question}
                      </h3>
                      <p 
                        className="leading-relaxed text-base"
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
          <div className="p-8">
            <div className="max-w-4xl mx-auto text-center">
              {renderGlassmorphismCard(
                <div className="p-8">
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center"
                    style={{ 
                      color: currentColors.contactColor || currentColors.text,
                      textShadow: '0 4px 8px rgba(0,0,0,0.4)'
                    }}
                  >
                    <MessageCircle className="w-8 h-8 ml-3 animate-bounce" style={{ color: currentColors.accent }} />
                    {content.contactTitle}
                  </h2>
                  <div 
                    className="p-6 rounded-xl mb-6"
                    style={{ 
                      background: 'rgba(0,0,0,0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div 
                      className="whitespace-pre-line leading-relaxed text-lg"
                      style={{ 
                        color: currentColors.contactTextColor || currentColors.text,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {formData.contactInfo}
                    </div>
                  </div>
                  <Button 
                    size="lg"
                    className="text-xl px-10 py-4 rounded-xl hover:scale-110 transition-all duration-700 font-bold shadow-2xl"
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
          className="p-12 text-center min-h-[600px] flex flex-col justify-center"
          style={{
            background: finalHeroImage 
              ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${finalHeroImage}')` 
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white'
          }}
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-base px-6 py-2">
            {content.badge}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            הסיפור שלנו התחיל כאן
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            מתוך חלום להביא שינוי אמיתי, התחלנו במסע שמטרתו לתת לכם את השירות הטוב ביותר. כל לקוח הוא חלק מהסיפור שלנו.
          </p>
          
          <Button 
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={handleCtaClick}
          >
            בואו נכיר
          </Button>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {Object.entries(content.stats).map(([key, value], index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-3xl backdrop-blur-md">
                <div className="text-3xl md:text-4xl font-bold">{value as string}</div>
                <div className="text-base opacity-80 mt-2">{key}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="p-12 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-gray-800">
            <Heart className="w-10 h-10 inline ml-3 text-red-500" />
            איך הכל התחיל
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              "הכל התחיל מרגע של השראה. ראינו צורך אמיתי בשוק, משהו שחסר ויכול לעשות הבדל אמיתי בחיי האנשים. 
              החלטנו שלא נתפשר על איכות ושלא נוותר על החלום שלנו להיות הטובים ביותר במה שאנחנו עושים."
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <p className="text-lg italic text-gray-600">
                "המטרה שלנו היא פשוטה: לתת לכל לקוח חוויה שהוא לא ישכח ושירות שהוא יספר עליו לחברים שלו."
              </p>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        {content.whyChooseUs && (
          <div className="p-12 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
              למה אנחנו שונים?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {content.whyChooseUs.items.map((item: any, index: number) => (
                <div key={index} className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
                  >
                    <i className={`ri-${item.icon} text-3xl text-white`} />
                  </div>
                  <h3 className="font-semibold text-xl mb-4 text-gray-800">הערך שלנו</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Values Section */}
        <div className="p-12">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
            <Shield className="w-10 h-10 inline ml-3 text-blue-600" />
            הערכים שמנחים אותנו
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'hand-heart-fill', title: 'יחס אישי', desc: 'כל לקוח מקבל יחס אישי ומותאם במיוחד עבורו' },
              { icon: 'shield-check-fill', title: 'אמינות', desc: 'אנחנו עומדים במילה שלנו ומקפידים על איכות ללא פשרות' },
              { icon: 'lightbulb-flash-fill', title: 'חדשנות', desc: 'תמיד מחפשים דרכים חדשות ויצירתיות לשפר את השירות' }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
                >
                  <i className={`ri-${value.icon} text-2xl text-white`} />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="p-12 bg-gradient-to-l from-purple-50 to-blue-50">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
            הסיפור מאחורי {content.aboutTitle}
          </h2>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-gray-700 mb-12">{content.aboutText}</p>
            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <p className="text-2xl italic text-gray-600 font-light leading-relaxed">
                "אנחנו מאמינים שכל לקוח ראוי לחוויה אישית ומיוחדת שתישמר איתו לתמיד. 
                זה לא רק עסק עבורנו - זו מסירות אמיתית למטרה."
              </p>
              <div className="mt-8">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg"
                  onClick={handleCtaClick}
                >
                  הכירו את הצוות שלנו
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="p-12 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
            הסיפורים של הלקוחות שלנו
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg relative">
                <div className="absolute -top-4 left-8 text-7xl text-red-500 leading-none">"</div>
                <div className="flex items-center mb-6 mt-4">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl mr-4"
                    style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
                  >
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6 text-lg">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            בואו נתחיל את הסיפור שלכם
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            מוכנים להפוך את החלום שלכם למציאות? בואו נכיר ונתחיל לכתוב יחד את הפרק הבא.
          </p>
          <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-3xl mb-8 backdrop-blur-md">
            <div className="whitespace-pre-line text-lg leading-relaxed">
              {formData.contactInfo}
            </div>
          </div>
          <Button 
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
          className="p-8 min-h-[80vh] flex items-center"
          style={{
            background: finalHeroImage 
              ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${finalHeroImage}')` 
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white'
          }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 text-sm font-medium uppercase tracking-wide mb-6 rounded">
              {content.badge}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {content.headline}
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 font-light opacity-90 leading-relaxed">
              {content.subheadline}
            </p>
            
            <Button 
              size="lg"
              className="bg-black hover:bg-transparent border-2 border-black hover:text-black text-white px-10 py-5 font-semibold transition-all duration-200 text-lg"
              onClick={handleCtaClick}
            >
              {content.cta}
            </Button>

            <div className="grid grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/20">
              {Object.entries(content.stats).map(([key, value], index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">{value as string}</div>
                  <div className="text-sm font-light uppercase tracking-wide opacity-80 mt-2">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problem Section */}
        <div className="p-16 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            <TrendingUp className="w-12 h-12 inline ml-4 text-blue-600" />
            הבעיה
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              חברות רבות מתמודדות עם אתגרים דומים: חוסר יעילות, עלויות גבוהות, וקושי למצוא פתרונות מותאמים.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'חוסר יעילות', desc: 'תהליכים איטיים ולא אופטימליים' },
                { title: 'עלויות גבוהות', desc: 'השקעות מיותרות ללא תשואה ברורה' },
                { title: 'פתרונות לא מותאמים', desc: 'פתרונות גנריים שלא עונים על הצרכים הספציפיים' }
              ].map((problem, index) => (
                <div key={index} className="bg-white p-6 border border-gray-200 text-center">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">{problem.title}</h3>
                  <p className="text-gray-600">{problem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Solution Section */}
        <div className="p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">פתרון</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl leading-relaxed text-gray-700 mb-12">{content.aboutText}</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'speed-fill', title: 'מהירות', desc: 'תוצאות מהירות ויעילות מקסימלית' },
                { icon: 'target-fill', title: 'דיוק', desc: 'פתרונות מדויקים ומותאמים אישית' },
                { icon: 'award-fill', title: 'איכות', desc: 'רמת איכות גבוהה ללא פשרות' }
              ].map((solution, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-20 h-20 bg-blue-600 flex items-center justify-center mb-6 mx-auto">
                    <i className={`ri-${solution.icon} text-3xl text-white`} />
                  </div>
                  <h3 className="font-semibold text-xl mb-4 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        {content.whyChooseUs && (
          <div className="p-16 bg-gray-50">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              {content.whyChooseUs.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {content.whyChooseUs.items.map((item: any, index: number) => (
                <div key={index} className="text-left bg-white p-8 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6">
                    <i className={`ri-${item.icon} text-2xl text-white`} />
                  </div>
                  <h3 className="font-semibold text-xl mb-4 text-gray-900">יתרון תחרותי</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Section */}
        <div className="p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            <Clock className="w-12 h-12 inline ml-4 text-blue-600" />
            מחירים
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'בסיסי', price: '₪299', features: ['שירות בסיסי', 'תמיכה במייל', 'גישה למערכת'] },
              { title: 'מתקדם', price: '₪599', features: ['כל התכונות הבסיסיות', 'תמיכה טלפונית', 'דוחות מפורטים', 'אינטגרציות'], popular: true },
              { title: 'מקצועי', price: '₪999', features: ['כל התכונות המתקדמות', 'ייעוץ אישי', 'התאמה אישית', 'תמיכה 24/7'] }
            ].map((plan, index) => (
              <div key={index} className={`bg-white p-8 border-2 text-center relative ${plan.popular ? 'border-blue-600' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 text-sm font-semibold">
                    הכי פופולרי
                  </div>
                )}
                <h3 className="font-semibold text-2xl mb-4 text-gray-900">{plan.title}</h3>
                <div className="text-4xl font-bold mb-6 text-blue-600">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-3 font-semibold ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                  onClick={handleCtaClick}
                >
                  בחר תוכנית
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="p-16 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">המלצות</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 flex items-center justify-center text-white text-xl ml-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">שאלות נפוצות</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {content.faq.map((item: any, index: number) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <h3 className="font-semibold text-xl mb-3 text-gray-900">{item.question}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-16 text-center bg-gray-900 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">יצירת קשר</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            מוכנים להתחיל? צרו קשר היום ובואו נראה איך אנחנו יכולים לעזור לכם.
          </p>
          <div className="max-w-3xl mx-auto bg-gray-800 p-8 border border-gray-700 mb-8">
            <div className="whitespace-pre-line text-lg leading-relaxed">
              {formData.contactInfo}
            </div>
          </div>
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 border-2 border-white hover:text-gray-900 text-gray-900 px-10 py-5 font-semibold transition-all duration-200 text-lg"
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
