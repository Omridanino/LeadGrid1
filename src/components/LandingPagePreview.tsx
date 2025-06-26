
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

  // Enhanced 3D glassmorphism section component
  const renderGlassmorphismSection = (children: React.ReactNode, className: string = "") => (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: currentColors.background }}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-16 left-16 w-48 h-48 rounded-full"
          style={{ 
            background: `conic-gradient(from 45deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent}, ${currentColors.primary})`,
            animation: 'spin 30s linear infinite',
            filter: 'blur(8px)',
            transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)'
          }}
        />
        <div 
          className="absolute bottom-16 right-16 w-36 h-36 rounded-full"
          style={{ 
            background: `linear-gradient(135deg, ${currentColors.secondary}60, ${currentColors.accent}60)`,
            animation: 'pulse 4s ease-in-out infinite',
            filter: 'blur(6px)',
            transform: 'perspective(800px) rotateX(-30deg) rotateY(60deg)'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full"
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
      className={`group relative p-5 rounded-3xl transition-all duration-700 cursor-pointer border ${hoverScale ? 'hover:scale-105' : ''}`}
      style={{ 
        background: `linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`,
        border: `2px solid ${currentColors.primary}40`,
        backdropFilter: 'blur(20px)',
        boxShadow: `0 25px 80px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2)`,
        transform: 'perspective(1000px) rotateX(5deg) rotateY(2deg)'
      }}
    >
      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-all duration-700 -z-10"
        style={{ 
          background: `radial-gradient(ellipse at center, ${currentColors.primary}50, ${currentColors.secondary}30, transparent 70%)`
        }}
      />
      {children}
    </div>
  );

  const finalHeroImage = formData.heroStyle === 'image' ? getHeroImageUrl(content, heroImage || '', formData) : null;

  return (
    <Card className="bg-gray-900 border-gray-700 overflow-hidden">
      <CardContent className="p-0">
        {/* Enhanced Hero Section - smaller sizes */}
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
                className="mb-4 text-base px-5 py-2 border-2 animate-pulse"
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
                className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in"
                style={{ 
                  color: currentColors.headlineColor || 'white',
                  textShadow: '0 10px 30px rgba(0,0,0,0.8)',
                  transform: 'perspective(800px) rotateX(5deg)'
                }}
              >
                {content.headline}
              </h1>
              
              <p 
                className="text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed"
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
                className="text-lg px-8 py-4 shadow-2xl rounded-2xl hover:scale-110 transition-all duration-700 font-bold mb-8 relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary}, ${currentColors.secondary})`,
                  color: 'white',
                  border: 'none',
                  boxShadow: `0 20px 60px ${currentColors.accent}60`,
                  transform: 'perspective(500px) rotateX(8deg)'
                }}
                onClick={handleCtaClick}
              >
                <span className="relative z-10">{content.cta}</span>
              </Button>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 max-w-4xl mx-auto">
                {Object.entries(content.stats).map(([key, value], index) => (
                  <div 
                    key={index} 
                    className="p-5 rounded-3xl hover:scale-110 transition-all duration-700 shadow-2xl"
                    style={{ 
                      background: `linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))`,
                      backdropFilter: 'blur(15px)',
                      border: `2px solid ${currentColors.primary}40`,
                      transform: 'perspective(600px) rotateX(10deg) rotateY(5deg)'
                    }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>{value as string}</div>
                    <div className="text-white font-semibold" style={{ textShadow: '0 3px 8px rgba(0,0,0,0.3)' }}>{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Enhanced Features Section - smaller sizes */}
        {renderGlassmorphismSection(
          <div className="p-8">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.featuresColor || currentColors.text,
                textShadow: '0 8px 16px rgba(0,0,0,0.4)',
                transform: 'perspective(800px) rotateX(8deg)'
              }}
            >
              <Star className="w-8 h-8 ml-3 animate-bounce" style={{ color: currentColors.accent }} />
              {content.featuresTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
              {content.features.map((feature: string, index: number) => (
                <div key={index}>
                  {renderGlassmorphismCard(
                    <div className="flex items-start">
                      <div 
                        className="w-10 h-10 rounded-2xl flex items-center justify-center ml-3 flex-shrink-0 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700"
                        style={{ 
                          background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`,
                          boxShadow: `0 15px 30px ${currentColors.primary}60`,
                          transform: 'perspective(300px) rotateX(15deg)'
                        }}
                      >
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <span 
                        className="text-base leading-relaxed font-semibold"
                        style={{ 
                          color: currentColors.featuresTextColor || currentColors.text,
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Why Choose Us Section - Always Display - smaller sizes */}
        {content.whyChooseUs && renderGlassmorphismSection(
          <div className="p-8">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              style={{ 
                color: currentColors.text,
                textShadow: '0 10px 20px rgba(0,0,0,0.5)',
                transform: 'perspective(1000px) rotateX(10deg)'
              }}
            >
              <Award className="w-10 h-10 ml-3 inline animate-bounce" style={{ color: currentColors.accent }} />
              {content.whyChooseUs.title}
            </h2>
            <p className="text-center text-lg mb-12 opacity-90" style={{ color: currentColors.text }}>
              הסיבות המובילות לבחור בנו מבין כל האפשרויות
            </p>
            
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {content.whyChooseUs.items.map((item: any, index: number) => (
                <div key={index}>
                  {renderGlassmorphismCard(
                    <div className="p-5">
                      <div className="relative mb-6">
                        <div 
                          className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative"
                          style={{ 
                            background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary} 50%, ${currentColors.accent})`,
                            boxShadow: `0 30px 60px ${currentColors.primary}60, inset 0 4px 0 rgba(255,255,255,0.4)`,
                            transform: 'perspective(500px) rotateX(25deg) rotateY(15deg)'
                          }}
                        >
                          <i 
                            className={`ri-${item.icon} text-4xl text-white group-hover:scale-125 transition-all duration-700`}
                            style={{ 
                              textShadow: '0 8px 16px rgba(0,0,0,0.6)',
                              transform: 'perspective(200px) rotateX(-15deg)'
                            }}
                          />
                        </div>

                        {/* Floating particles - smaller */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full animate-pulse" 
                             style={{ backgroundColor: currentColors.accent, boxShadow: `0 0 25px ${currentColors.accent}` }} />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full animate-pulse" 
                             style={{ backgroundColor: currentColors.secondary, animationDelay: '0.5s', boxShadow: `0 0 20px ${currentColors.secondary}` }} />
                      </div>
                      
                      <div className="text-center relative">
                        <p 
                          className="text-lg leading-relaxed font-bold group-hover:text-opacity-100 transition-all duration-700"
                          style={{ 
                            color: currentColors.text,
                            textShadow: '0 4px 8px rgba(0,0,0,0.4)',
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

            <div className="text-center mt-16">
              <p className="text-xl mb-8 opacity-90" style={{ color: currentColors.text }}>
                מוכנים להתחיל את המסע איתנו?
              </p>
              <Button 
                size="lg"
                className="px-16 py-6 text-xl font-bold rounded-3xl hover:scale-110 transition-all duration-700 shadow-2xl relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary}, ${currentColors.secondary})`,
                  color: 'white',
                  boxShadow: `0 25px 80px ${currentColors.accent}60`,
                  transform: 'perspective(500px) rotateX(10deg)'
                }}
                onClick={handleCtaClick}
              >
                <span className="relative z-10">בואו נתחיל עכשיו ✨</span>
              </Button>
            </div>
          </div>
        )}

        {/* Enhanced About Section - smaller sizes */}
        {renderGlassmorphismSection(
          <div className="p-8">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.aboutColor || currentColors.text,
                textShadow: '0 8px 16px rgba(0,0,0,0.4)',
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
                    className="text-lg md:text-xl leading-relaxed text-center"
                    style={{ 
                      color: currentColors.aboutTextColor || currentColors.text,
                      textShadow: '0 3px 6px rgba(0,0,0,0.3)'
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

        {/* Enhanced Testimonials Section - smaller sizes */}
        {renderGlassmorphismSection(
          <div className="p-8">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.text,
                textShadow: '0 8px 16px rgba(0,0,0,0.4)',
                transform: 'perspective(800px) rotateX(8deg)'
              }}
            >
              <Quote className="w-8 h-8 ml-3 animate-bounce" style={{ color: currentColors.primary }} />
              מה אומרים עלינו
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {content.testimonials.map((testimonial: any, index: number) => (
                <div key={index}>
                  {renderGlassmorphismCard(
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div 
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl"
                          style={{ 
                            background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`,
                            transform: 'perspective(300px) rotateX(15deg)'
                          }}
                        >
                          {testimonial.image}
                        </div>
                        <div className="mr-3">
                          <div className="font-bold text-lg" style={{ color: currentColors.primary }}>{testimonial.name}</div>
                          <div className="text-gray-400 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                      <p 
                        className="mb-4 text-base leading-relaxed"
                        style={{ 
                          color: currentColors.text,
                          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}
                      >
                        "{testimonial.content}"
                      </p>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced FAQ Section - smaller sizes */}
        {renderGlassmorphismSection(
          <div className="p-8">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center"
              style={{ 
                color: currentColors.text,
                textShadow: '0 8px 16px rgba(0,0,0,0.4)',
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
                          textShadow: '0 3px 6px rgba(0,0,0,0.3)'
                        }}
                      >
                        {item.question}
                      </h3>
                      <p 
                        className="leading-relaxed text-base"
                        style={{ 
                          color: currentColors.text,
                          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
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
        
        {/* Enhanced Contact Section - smaller sizes */}
        {renderGlassmorphismSection(
          <div className="p-8">
            <div className="max-w-4xl mx-auto text-center">
              {renderGlassmorphismCard(
                <div className="p-8">
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center"
                    style={{ 
                      color: currentColors.contactColor || currentColors.text,
                      textShadow: '0 6px 12px rgba(0,0,0,0.4)'
                    }}
                  >
                    <MessageCircle className="w-6 h-6 ml-3 animate-bounce" style={{ color: currentColors.accent }} />
                    {content.contactTitle}
                  </h2>
                  <div 
                    className="p-6 rounded-2xl mb-6"
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
                    className="text-lg px-10 py-4 rounded-2xl hover:scale-110 transition-all duration-700 font-bold shadow-2xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`, 
                      color: 'white',
                      border: 'none',
                      boxShadow: `0 15px 40px ${currentColors.primary}60`
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

export default LandingPagePreview;
