import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, TrendingUp, Phone, Quote, MessageCircle, HelpCircle, Heart, Zap, Target, Calendar, Award } from "lucide-react";
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

  const renderPageElement = (element: PageElement) => {
    const isEditing = false;

    if (!isEditing) {
      return (
        <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
          <span className="text-white">{element.type}</span>
        </div>
      );
    }

    switch (element.type) {
      case 'title':
        const TitleTag = element.content.size as keyof JSX.IntrinsicElements;
        return (
          <div key={element.id} className="p-8 relative overflow-hidden" style={{ backgroundColor: currentColors.background }}>
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute top-10 left-10 w-20 h-20 rounded-full animate-pulse"
                style={{ 
                  background: `radial-gradient(circle, ${currentColors.primary}, transparent)`,
                  transform: 'perspective(500px) rotateX(30deg) rotateY(30deg)'
                }}
              ></div>
              <div 
                className="absolute bottom-10 right-10 w-16 h-16 rounded-full animate-pulse"
                style={{ 
                  background: `radial-gradient(circle, ${currentColors.accent}, transparent)`,
                  animationDelay: '1s',
                  transform: 'perspective(500px) rotateX(-30deg) rotateY(-30deg)'
                }}
              ></div>
            </div>
            
            <TitleTag 
              className="text-center font-bold flex items-center justify-center gap-4 relative z-10"
              style={{ 
                color: currentColors.text,
                fontSize: element.content.size === 'h1' ? '3rem' : 
                         element.content.size === 'h2' ? '2.5rem' : '2rem',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                transform: 'perspective(1000px) rotateX(5deg)'
              }}
            >
              {element.content.icon && (
                <div 
                  className="animate-bounce"
                  style={{
                    transform: 'perspective(300px) rotateY(15deg)',
                    filter: `drop-shadow(0 8px 16px ${currentColors.accent}40)`
                  }}
                >
                  <i 
                    className={`ri-${element.content.icon} text-4xl`} 
                    style={{ 
                      color: currentColors.accent,
                      textShadow: `0 0 20px ${currentColors.accent}80`
                    }}
                  ></i>
                </div>
              )}
              {element.content.text}
            </TitleTag>
          </div>
        );

      case 'text':
        return (
          <div key={element.id} className="p-8 relative overflow-hidden" style={{ backgroundColor: currentColors.background }}>
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full animate-pulse"
                style={{ 
                  background: `conic-gradient(from 0deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.primary})`,
                  transform: 'perspective(500px) rotateX(45deg) rotateZ(45deg)',
                  animationDelay: '0.5s'
                }}
              ></div>
            </div>
            
            <div className="max-w-4xl mx-auto relative z-10">
              <p 
                className="text-lg leading-relaxed text-center flex items-center justify-center gap-4"
                style={{ 
                  color: currentColors.text,
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  transform: 'perspective(800px) rotateX(2deg)'
                }}
              >
                {element.content.icon && (
                  <div 
                    className="hover:scale-110 transition-transform duration-300"
                    style={{
                      transform: 'perspective(200px) rotateY(10deg)',
                      filter: `drop-shadow(0 4px 8px ${currentColors.primary}40)`
                    }}
                  >
                    <i 
                      className={`ri-${element.content.icon} text-3xl`} 
                      style={{ 
                        color: currentColors.primary,
                        textShadow: `0 0 15px ${currentColors.primary}60`
                      }}
                    ></i>
                  </div>
                )}
                {element.content.text}
              </p>
            </div>
          </div>
        );

      case 'image':
        return (
          <div key={element.id} className="p-8" style={{ backgroundColor: currentColors.background }}>
            <div className="max-w-4xl mx-auto text-center">
              {element.content.url && (
                <div className="relative">
                  <img 
                    src={element.content.url} 
                    alt={element.content.alt} 
                    className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
                    style={{
                      transform: 'perspective(1000px) rotateY(2deg)',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                    }}
                  />
                  {element.content.caption && (
                    <p className="mt-4 text-sm opacity-80" style={{ color: currentColors.text }}>
                      {element.content.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        );

      case 'whychoose':
        return (
          <div key={element.id} className="p-16 relative overflow-hidden" style={{ backgroundColor: currentColors.background }}>
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute top-20 left-20 w-64 h-64 rounded-full animate-pulse"
                style={{ 
                  background: `conic-gradient(from 45deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent}, ${currentColors.primary})`,
                  transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg) rotateZ(15deg)',
                  filter: 'blur(4px)'
                }}
              ></div>
              <div 
                className="absolute bottom-20 right-20 w-48 h-48 rounded-full animate-pulse"
                style={{ 
                  background: `linear-gradient(135deg, ${currentColors.secondary}60, ${currentColors.accent}60)`,
                  animationDelay: '0.7s',
                  transform: 'perspective(800px) rotateX(-30deg) rotateY(60deg)',
                  filter: 'blur(3px)'
                }}
              ></div>
              <div 
                className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full"
                style={{ 
                  background: `conic-gradient(from 0deg, transparent, ${currentColors.primary}20, transparent)`,
                  animation: 'spin 20s linear infinite',
                  transform: 'perspective(1000px) rotateX(75deg) translate(-50%, -50%)'
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <h2 
                className="text-5xl font-bold mb-6 text-center"
                style={{ 
                  color: currentColors.text,
                  textShadow: '0 8px 16px rgba(0,0,0,0.4)',
                  transform: 'perspective(1000px) rotateX(10deg)'
                }}
              >
                <Award className="w-12 h-12 ml-4 inline animate-bounce" style={{ color: currentColors.accent }} />
                {element.content.title}
              </h2>
              <p className="text-center text-xl mb-16 opacity-80" style={{ color: currentColors.text }}>
                הסיבות המובילות לבחור בנו מבין כל האפשרויות
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {element.content.items.map((item: any, index: number) => (
                  <div 
                    key={index}
                    className="group relative p-10 rounded-3xl transition-all duration-700 hover:scale-110 cursor-pointer"
                    style={{ 
                      background: `linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`,
                      border: `3px solid ${currentColors.primary}40`,
                      backdropFilter: 'blur(20px)',
                      boxShadow: `0 25px 80px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2)`,
                      transform: 'perspective(1000px) rotateX(15deg) rotateY(8deg)'
                    }}
                  >
                    <div className="relative mb-8">
                      <div 
                        className="w-28 h-28 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative"
                        style={{ 
                          background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary} 50%, ${currentColors.accent})`,
                          boxShadow: `0 25px 50px ${currentColors.primary}60, inset 0 3px 0 rgba(255,255,255,0.4)`,
                          transform: 'perspective(500px) rotateX(25deg) rotateY(15deg)'
                        }}
                      >
                        <i 
                          className={`ri-${item.icon} text-5xl text-white group-hover:scale-125 transition-all duration-700`}
                          style={{ 
                            textShadow: '0 6px 12px rgba(0,0,0,0.6)',
                            transform: 'perspective(200px) rotateX(-15deg)'
                          }}
                        ></i>
                        
                        <div 
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                          style={{ 
                            background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)`,
                            animation: 'shimmer 3s infinite'
                          }}
                        ></div>
                      </div>

                      <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full opacity-80 animate-pulse" 
                           style={{ backgroundColor: currentColors.accent, boxShadow: `0 0 20px ${currentColors.accent}` }}></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-60 animate-pulse" 
                           style={{ backgroundColor: currentColors.secondary, animationDelay: '0.5s', boxShadow: `0 0 15px ${currentColors.secondary}` }}></div>
                      <div className="absolute top-1/2 -right-4 w-3 h-3 rounded-full opacity-40 animate-pulse" 
                           style={{ backgroundColor: currentColors.primary, animationDelay: '1s', boxShadow: `0 0 12px ${currentColors.primary}` }}></div>
                    </div>
                    
                    <div className="text-center relative">
                      <p 
                        className="text-xl leading-relaxed font-bold group-hover:text-opacity-100 transition-all duration-700"
                        style={{ 
                          color: currentColors.text,
                          textShadow: '0 3px 6px rgba(0,0,0,0.4)',
                          transform: 'perspective(500px) rotateX(8deg)'
                        }}
                      >
                        {item.text}
                      </p>
                      
                      <div 
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10"
                        style={{ 
                          background: `radial-gradient(ellipse at center, ${currentColors.primary}50, ${currentColors.secondary}30, transparent 70%)`
                        }}
                      ></div>
                    </div>

                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-20"
                      style={{ 
                        background: `linear-gradient(145deg, ${currentColors.primary}40, ${currentColors.secondary}40, ${currentColors.accent}40)`,
                        filter: 'blur(3px)',
                        transform: 'scale(1.08)'
                      }}
                    ></div>

                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 animate-pulse -z-30"
                      style={{ 
                        boxShadow: `0 0 40px ${currentColors.accent}80, inset 0 0 30px ${currentColors.primary}40`
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-20">
                <p className="text-2xl mb-10 opacity-90" style={{ color: currentColors.text }}>
                  מוכנים להתחיל את המסע איתנו?
                </p>
                <Button 
                  size="lg"
                  className="px-20 py-8 text-2xl font-bold rounded-3xl hover:scale-110 transition-all duration-700 shadow-2xl relative overflow-hidden"
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

            <style>{`
              @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
            `}</style>
          </div>
        );

      default:
        return null;
    }
  };

  // The amazing Why Choose Us section with 4 items in 2x2 grid
  const renderWhyChooseUs = (whyChoose: any) => (
    <div className="p-16 relative overflow-hidden" style={{ backgroundColor: currentColors.background }}>
      {/* Optimized background animations */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-20 left-20 w-64 h-64 rounded-full"
          style={{ 
            background: `conic-gradient(from 45deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent}, ${currentColors.primary})`,
            animation: 'spin 30s linear infinite',
            filter: 'blur(8px)'
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full"
          style={{ 
            background: `linear-gradient(135deg, ${currentColors.secondary}60, ${currentColors.accent}60)`,
            animation: 'pulse 4s ease-in-out infinite',
            filter: 'blur(6px)'
          }}
        />
      </div>

      <div className="relative z-10">
        <h2 
          className="text-5xl font-bold mb-6 text-center"
          style={{ 
            color: currentColors.text,
            textShadow: '0 8px 16px rgba(0,0,0,0.4)',
            transform: 'perspective(1000px) rotateX(10deg)'
          }}
        >
          <Award className="w-12 h-12 ml-4 inline animate-bounce" style={{ color: currentColors.accent }} />
          {whyChoose.title}
        </h2>
        <p className="text-center text-xl mb-16 opacity-80" style={{ color: currentColors.text }}>
          הסיבות המובילות לבחור בנו מבין כל האפשרויות
        </p>
        
        {/* Changed to 2x2 grid for 4 items */}
        <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto">
          {whyChoose.items.map((item: any, index: number) => (
            <div 
              key={index}
              className="group relative p-10 rounded-3xl transition-all duration-700 hover:scale-110 cursor-pointer"
              style={{ 
                background: `linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`,
                border: `3px solid ${currentColors.primary}40`,
                backdropFilter: 'blur(20px)',
                boxShadow: `0 25px 80px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2)`,
                transform: 'perspective(1000px) rotateX(15deg) rotateY(8deg)'
              }}
            >
              <div className="relative mb-8">
                <div 
                  className="w-28 h-28 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative"
                  style={{ 
                    background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary} 50%, ${currentColors.accent})`,
                    boxShadow: `0 25px 50px ${currentColors.primary}60, inset 0 3px 0 rgba(255,255,255,0.4)`,
                    transform: 'perspective(500px) rotateX(25deg) rotateY(15deg)'
                  }}
                >
                  <i 
                    className={`ri-${item.icon} text-5xl text-white group-hover:scale-125 transition-all duration-700`}
                    style={{ 
                      textShadow: '0 6px 12px rgba(0,0,0,0.6)',
                      transform: 'perspective(200px) rotateX(-15deg)'
                    }}
                  />
                  
                  {/* Shimmer effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ 
                      background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)`,
                      transform: 'translateX(-100%)',
                      animation: 'shimmer 3s infinite'
                    }}
                  />
                </div>

                {/* Floating particles */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full animate-pulse" 
                     style={{ backgroundColor: currentColors.accent, boxShadow: `0 0 20px ${currentColors.accent}` }} />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full animate-pulse" 
                     style={{ backgroundColor: currentColors.secondary, animationDelay: '0.5s', boxShadow: `0 0 15px ${currentColors.secondary}` }} />
              </div>
              
              <div className="text-center relative">
                <p 
                  className="text-xl leading-relaxed font-bold group-hover:text-opacity-100 transition-all duration-700"
                  style={{ 
                    color: currentColors.text,
                    textShadow: '0 3px 6px rgba(0,0,0,0.4)',
                    transform: 'perspective(500px) rotateX(8deg)'
                  }}
                >
                  {item.text}
                </p>
              </div>

              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-all duration-700 -z-10"
                style={{ 
                  background: `radial-gradient(ellipse at center, ${currentColors.primary}50, ${currentColors.secondary}30, transparent 70%)`
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-2xl mb-10 opacity-90" style={{ color: currentColors.text }}>
            מוכנים להתחיל את המסע איתנו?
          </p>
          <Button 
            size="lg"
            className="px-20 py-8 text-2xl font-bold rounded-3xl hover:scale-110 transition-all duration-700 shadow-2xl relative overflow-hidden"
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

      {/* CSS animations */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );

  const renderServiceCards = (serviceCards: any[]) => (
    <div className="p-8" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: currentColors.text }}>
        <Target className="w-8 h-8 ml-3 inline" style={{ color: currentColors.accent }} />
        השירותים שלנו
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {serviceCards.map((service: any, index: number) => (
          <div 
            key={index}
            className="group p-6 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-all duration-300"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderColor: `${currentColors.primary}40`
            }}
          >
            <div 
              className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-2xl"
              style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}
            >
              {service.icon}
            </div>
            <h3 className="font-bold mb-2" style={{ color: currentColors.primary }}>{service.title}</h3>
            <p className="text-sm" style={{ color: currentColors.text }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTimeline = (timelineSteps: any[]) => (
    <div className="p-8" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: currentColors.text }}>
        <Calendar className="w-8 h-8 ml-3 inline" style={{ color: currentColors.secondary }} />
        התהליך שלנו
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute right-8 top-0 bottom-0 w-0.5" style={{ background: `linear-gradient(to bottom, ${currentColors.primary}, ${currentColors.secondary})` }}></div>
          
          {timelineSteps.map((step: any, index: number) => (
            <div key={index} className="relative flex items-center mb-12">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg z-10"
                style={{ backgroundColor: step.color }}
              >
                {step.step}
              </div>
              <div className="mr-8">
                <h3 className="text-xl font-bold mb-2" style={{ color: step.color }}>{step.title}</h3>
                <p style={{ color: currentColors.text }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPricing = (plans: any[]) => (
    <div className="p-8" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: currentColors.text }}>
        <Award className="w-8 h-8 ml-3 inline" style={{ color: currentColors.accent }} />
        התכניות שלנו
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan: any, index: number) => (
          <div 
            key={index}
            className={`p-8 rounded-2xl border relative ${plan.highlighted ? 'scale-105 shadow-2xl' : ''}`}
            style={{ 
              backgroundColor: plan.highlighted ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
              borderColor: plan.highlighted ? currentColors.accent : `${currentColors.primary}40`
            }}
          >
            {plan.highlighted && (
              <div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white text-sm font-bold"
                style={{ backgroundColor: currentColors.accent }}
              >
                הכי פופולרי
              </div>
            )}
            <h3 className="text-2xl font-bold mb-4" style={{ color: currentColors.primary }}>{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold" style={{ color: currentColors.text }}>{plan.price}</span>
              <span className="text-gray-400">/{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center">
                  <Check className="w-5 h-5 ml-2" style={{ color: currentColors.accent }} />
                  <span style={{ color: currentColors.text }}>{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className="w-full rounded-xl font-bold"
              style={{ 
                backgroundColor: plan.highlighted ? currentColors.accent : currentColors.primary,
                color: 'white'
              }}
              onClick={handleCtaClick}
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEmotional = (emotional: any) => (
    <div className="p-8" style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-white">
        <Heart className="w-8 h-8 ml-3" />
        {emotional.title}
      </h2>
      <div className="p-8 rounded-xl max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed text-center text-gray-200">
          {emotional.content}
        </p>
      </div>
    </div>
  );

  const finalHeroImage = formData.heroStyle === 'image' ? getHeroImageUrl(content, heroImage || '', formData) : null;

  return (
    <Card className="bg-gray-900 border-gray-700 overflow-hidden">
      <CardContent className="p-0">
        {/* Hero Section */}
        <div 
          className="p-12 text-center relative overflow-hidden min-h-[500px] flex flex-col justify-center"
          style={{
            background: finalHeroImage 
              ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${finalHeroImage}')` 
              : `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="relative z-10">
            <Badge 
              className="mb-6 text-lg px-4 py-2 border"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)'
              }}
            >
              {content.badge}
            </Badge>
            
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: currentColors.headlineColor || 'white' }}
            >
              {content.headline}
            </h1>
            
            <p 
              className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ color: currentColors.subheadlineColor || 'rgba(255,255,255,0.9)' }}
            >
              {content.subheadline}
            </p>
            
            <Button 
              size="lg" 
              className="text-xl px-10 py-4 shadow-2xl rounded-xl hover:scale-105 transition-transform font-bold mb-8"
              style={{ 
                backgroundColor: currentColors.accent, 
                color: 'white',
                border: 'none'
              }}
              onClick={handleCtaClick}
            >
              {content.cta}
            </Button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-4xl mx-auto">
              {Object.entries(content.stats).map(([key, value], index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl hover:scale-105 transition-transform shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value as string}</div>
                  <div className="text-white font-semibold text-lg">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Custom Elements */}
        {elements && elements.length > 0 && (
          <div>
            {elements
              .sort((a, b) => a.order - b.order)
              .map((element) => renderPageElement(element))
            }
          </div>
        )}

        {/* Features Section */}
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.featuresColor || currentColors.text }}
          >
            <Star className="w-8 h-8 ml-3" style={{ color: currentColors.accent }} />
            {content.featuresTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {content.features.map((feature: string, index: number) => (
              <div 
                key={index} 
                className="flex items-start p-6 rounded-xl hover:scale-105 transition-all duration-300 border"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${currentColors.primary}40`
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center ml-4 flex-shrink-0 mt-1"
                  style={{ backgroundColor: currentColors.primary }}
                >
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span 
                  className="text-sm leading-relaxed"
                  style={{ color: currentColors.featuresTextColor || currentColors.text }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section - Single instance with amazing design */}
        {content.whyChooseUs && renderWhyChooseUs(content.whyChooseUs)}

        {/* About Section */}
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.aboutColor || currentColors.text }}
          >
            <Users className="w-8 h-8 ml-3" style={{ color: currentColors.secondary }} />
            {content.aboutTitle}
          </h2>
          <div 
            className="p-8 rounded-xl border max-w-4xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderColor: `${currentColors.secondary}40`
            }}
          >
            <p 
              className="text-lg leading-relaxed text-center"
              style={{ color: currentColors.aboutTextColor || currentColors.text }}
            >
              {content.aboutText}
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.text }}
          >
            <Quote className="w-8 h-8 ml-3" style={{ color: currentColors.primary }} />
            מה אומרים עלינו
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.testimonials.map((testimonial: any, index: number) => (
              <div 
                key={index}
                className="p-6 rounded-xl border hover:scale-105 transition-transform"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${currentColors.primary}40`
                }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl"
                    style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}
                  >
                    {testimonial.image}
                  </div>
                  <div className="mr-4">
                    <div className="font-semibold" style={{ color: currentColors.primary }}>{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p 
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: currentColors.text }}
                >
                  "{testimonial.content}"
                </p>
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
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.text }}
          >
            <HelpCircle className="w-8 h-8 ml-3" style={{ color: currentColors.secondary }} />
            שאלות נפוצות
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {content.faq.map((item: any, index: number) => (
              <div 
                key={index}
                className="p-6 rounded-xl border hover:scale-105 transition-transform"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${currentColors.secondary}40`
                }}
              >
                <h3 
                  className="font-semibold mb-3 text-lg"
                  style={{ color: currentColors.secondary }}
                >
                  {item.question}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: currentColors.text }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <div 
            className="p-8 rounded-2xl border text-center max-w-4xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderColor: `${currentColors.primary}40`
            }}
          >
            <h2 
              className="text-2xl font-bold mb-6 flex items-center justify-center"
              style={{ color: currentColors.contactColor || currentColors.text }}
            >
              <MessageCircle className="w-6 h-6 ml-3" style={{ color: currentColors.accent }} />
              {content.contactTitle}
            </h2>
            <div 
              className="p-6 rounded-xl mb-6"
              style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
            >
              <div 
                className="whitespace-pre-line leading-relaxed"
                style={{ color: currentColors.contactTextColor || currentColors.text }}
              >
                {formData.contactInfo}
              </div>
            </div>
            <Button 
              className="text-xl px-8 py-4 rounded-xl hover:scale-105 transition-transform font-bold"
              style={{ 
                background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`, 
                color: 'white',
                border: 'none'
              }}
              onClick={handleCtaClick}
            >
              {content.cta}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPagePreview;
