import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from 'lucide-react';
import { TemplateData } from '@/types/template';
import { PremiumSection } from '../ui/premium-section';

interface TemplatePreviewProps {
  template: TemplateData;
}

const getSectionStyle = (backgroundColor: string, backgroundImage?: string) => {
  const baseStyle: React.CSSProperties = {
    backgroundColor: backgroundColor
  };
  
  if (backgroundImage) {
    baseStyle.backgroundImage = `url(${backgroundImage})`;
    baseStyle.backgroundSize = 'cover';
    baseStyle.backgroundPosition = 'center';
    baseStyle.backgroundRepeat = 'no-repeat';
  }
  
  return baseStyle;
};

const getPremiumTextColor = (templateId: string, template?: TemplateData, sectionType?: string, colorType?: 'title' | 'text' | 'badge') => {
  // Check for custom colors first
  if (template && sectionType && colorType) {
    const sectionColors = {
      emotional: {
        title: template.styles.emotionalTitleColor,
        text: template.styles.emotionalTextColor,
        badge: template.styles.emotionalBadgeColor
      },
      features: {
        title: template.styles.featuresTitleColor,
        text: template.styles.featuresTextColor,
        badge: template.styles.featuresBadgeColor
      },
      testimonials: {
        title: template.styles.testimonialsTitleColor,
        text: template.styles.testimonialsTextColor,
        badge: template.styles.testimonialsBadgeColor
      },
      about: {
        title: template.styles.aboutTitleColor,
        text: template.styles.aboutTextColor,
        badge: template.styles.aboutBadgeColor
      },
      pricing: {
        title: template.styles.pricingTitleColor,
        text: template.styles.pricingTextColor,
        badge: template.styles.pricingBadgeColor
      },
      faq: {
        title: template.styles.faqTitleColor,
        text: template.styles.faqTextColor,
        badge: template.styles.faqBadgeColor
      },
      'final-cta': {
        title: template.styles.finalCtaTitleColor,
        text: template.styles.finalCtaTextColor,
        badge: template.styles.finalCtaBadgeColor
      },
      contact: {
        title: template.styles.contactTitleColor,
        text: template.styles.contactTextColor,
        badge: template.styles.contactBadgeColor
      }
    };
    
    const sectionColor = sectionColors[sectionType as keyof typeof sectionColors]?.[colorType];
    if (sectionColor) return sectionColor;
  }
  
  // Default colors by template
  switch (templateId) {
    case 'tech-consultant-pro':
      return 'white';
    case 'neon-academy-pro':
      return '#00f5ff';
    case 'blockchain-tech-pro':
      return '#bfdbfe';
    case 'creative-3d-pro':
      return '#374151';
    case 'authkit-tech-pro':
      return '#bfdbfe';
    case 'nft-future-pro':
      return '#e879f9';
    default:
      return 'white';
  }
};

const getEffectClasses = (effectType: string | null) => {
  if (!effectType) return '';
  
  switch (effectType) {
    // Basic Effects
    case 'fade-in':
      return 'animate-fade-in';
    case 'slide-up':
      return 'animate-slide-up';
    case 'scale-in':
      return 'animate-scale-in';
    case 'bounce-in':
      return 'animate-bounce-in';
    case 'slide-right':
      return 'animate-slide-right';
    case 'flip':
      return 'animate-flip';
    case 'zoom-in':
      return 'animate-zoom-in';
    case 'float':
      return 'animate-float';
    case 'tilt':
      return 'animate-tilt';
    case 'shimmer':
      return 'animate-shimmer';
    
    // 3D Effects
    case 'flip-3d':
      return 'animate-flip-3d';
    case 'cube-rotate':
      return 'animate-cube-rotate';
    case 'elastic-bounce':
      return 'animate-elastic-bounce';
    
    // Particle Effects
    case 'particles':
      return 'particles-bg';
    case 'stardust':
      return 'stardust-bg';
    case 'particle-float':
      return 'animate-particle-float';
    
    // Light Effects
    case 'aurora':
      return 'animate-aurora';
    case 'light-beam':
      return 'light-beam-bg';
    case 'pulse-glow':
      return 'animate-pulse-glow';
    case 'holographic':
      return 'animate-holographic';
    
    // Morphing Effects
    case 'morph':
      return 'animate-morph';
    case 'liquid-distort':
      return 'animate-liquid-distort';
    
    // Interactive Effects
    case 'magnetic-pull':
      return 'animate-magnetic-pull magnetic-field';
    case 'ripple':
      return 'animate-ripple';
    
    // Motion Effects
    case 'vortex':
      return 'animate-vortex';
    case 'gravity-well':
      return 'animate-gravity-well';
    case 'orbital':
      return 'animate-orbital';
    
    // Glass Effects
    case 'glass-morph':
      return 'glass-effect';
    case 'frosted-glass':
      return 'frosted-glass';
    case 'crystal-reflection':
      return 'crystal-reflection';
    
    default:
      return '';
  }
};

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({ template }) => {
  const isPremium = template.category.includes('פרימיום');

  // For premium templates, use PremiumSection components
  if (isPremium) {
    return (
      <div className="min-h-full">
        <PremiumSection template={template} sectionType="hero" />
        
        {/* Emotional Section */}
        {template.emotional && (
          <section className="py-16 px-4 relative" style={getSectionStyle(template.styles.emotionalBackground, template.styles.emotionalBackgroundImage)}>
            {template.styles.emotionalBackgroundImage && (
              <div className="absolute inset-0 bg-black/30"></div>
            )}
            <div className="max-w-6xl mx-auto text-center relative z-10">
              {template.emotional.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: getPremiumTextColor(template.id, template, 'emotional', 'badge') || template.styles.accentColor, 
                  color: getPremiumTextColor(template.id, template, 'emotional', 'badge')
                }}>
                  {template.emotional.badge}
                </Badge>
              )}
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: getPremiumTextColor(template.id, template, 'emotional', 'title') }}>
                {template.emotional.title}
              </h2>
              <p className="text-lg max-w-4xl mx-auto opacity-90 mb-8" style={{ color: getPremiumTextColor(template.id, template, 'emotional', 'text') }}>
                {template.emotional.description}
              </p>
              
              {/* Add buttons to emotional section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
                  {template.emotional.button1Icon && <i className={`ri-${template.emotional.button1Icon}`}></i>}
                  {template.emotional.button1Text}
                </Button>
                <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor, color: '#ffffff' }}>
                  {template.emotional.button2Icon && <i className={`ri-${template.emotional.button2Icon}`}></i>}
                  {template.emotional.button2Text}
                </Button>
              </div>
            </div>
          </section>
        )}
        
        <PremiumSection template={template} sectionType="features" />
        
        {/* Testimonials Section */}
        <section className="py-16 px-4 relative" style={getSectionStyle(template.styles.testimonialsBackground, template.styles.testimonialsBackgroundImage)}>
          {template.styles.testimonialsBackgroundImage && (
            <div className="absolute inset-0 bg-black/30"></div>
          )}
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              {template.testimonials.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: getPremiumTextColor(template.id, template, 'testimonials', 'badge') || template.styles.primaryColor, 
                  color: getPremiumTextColor(template.id, template, 'testimonials', 'badge')
                }}>
                  {template.testimonials.badge}
                </Badge>
              )}
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: getPremiumTextColor(template.id, template, 'testimonials', 'title') }}>
                {template.testimonials.title}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {template.testimonials.testimonials.map((testimonial, index) => (
                <Card key={index} className={`p-6 bg-white/10 backdrop-blur-sm border-white/20`}>
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 italic" style={{ color: getPremiumTextColor(template.id), opacity: 0.9 }}>"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold" style={{ color: getPremiumTextColor(template.id) }}>{testimonial.name}</p>
                    <p className="text-sm opacity-70" style={{ color: getPremiumTextColor(template.id) }}>{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
                {template.testimonials.button1Icon && <i className={`ri-${template.testimonials.button1Icon}`}></i>}
                {template.testimonials.button1Text}
              </Button>
              <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor, color: '#ffffff' }}>
                {template.testimonials.button2Icon && <i className={`ri-${template.testimonials.button2Icon}`}></i>}
                {template.testimonials.button2Text}
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 relative" style={getSectionStyle(template.styles.aboutBackground, template.styles.aboutBackgroundImage)}>
          {template.styles.aboutBackgroundImage && (
            <div className="absolute inset-0 bg-black/30"></div>
          )}
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              {template.about.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: template.styles.secondaryColor, 
                  color: getPremiumTextColor(template.id)
                }}>
                  {template.about.badge}
                </Badge>
              )}
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: getPremiumTextColor(template.id) }}>
                {template.about.title}
              </h2>
              <p className="text-lg max-w-4xl mx-auto opacity-90" style={{ color: getPremiumTextColor(template.id) }}>
                {template.about.description}
              </p>
            </div>
            
            {template.about.stats && template.about.stats.length > 0 && (
              <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                {template.about.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold mb-2" style={{ color: template.styles.primaryColor }}>
                      {stat.number}
                    </div>
                    <div className="text-lg opacity-80" style={{ color: getPremiumTextColor(template.id) }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
                {template.about.button1Icon && <i className={`ri-${template.about.button1Icon}`}></i>}
                {template.about.button1Text}
              </Button>
              <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor, color: '#ffffff' }}>
                {template.about.button2Icon && <i className={`ri-${template.about.button2Icon}`}></i>}
                {template.about.button2Text}
              </Button>
            </div>
          </div>
        </section>

        <PremiumSection template={template} sectionType="pricing" />

        {/* FAQ Section */}
        <section className="py-16 px-4 relative" style={getSectionStyle(template.styles.faqBackground, template.styles.faqBackgroundImage)}>
          {template.styles.faqBackgroundImage && (
            <div className="absolute inset-0 bg-black/30"></div>
          )}
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              {template.faq.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: template.styles.primaryColor, 
                  color: getPremiumTextColor(template.id)
                }}>
                  {template.faq.badge}
                </Badge>
              )}
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: getPremiumTextColor(template.id) }}>
                {template.faq.title}
              </h2>
            </div>
            
            <div className="space-y-4 mb-12">
              {template.faq.questions.map((qa, index) => (
                <Card key={index} className={`p-6 bg-white/10 backdrop-blur-sm border-white/20`}>
                  <h3 className="text-lg font-bold mb-2 text-right" style={{ color: getPremiumTextColor(template.id) }}>{qa.question}</h3>
                  <p className="opacity-80 text-right" style={{ color: getPremiumTextColor(template.id) }}>{qa.answer}</p>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
                {template.faq.button1Icon && <i className={`ri-${template.faq.button1Icon}`}></i>}
                {template.faq.button1Text}
              </Button>
              <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor, color: '#ffffff' }}>
                {template.faq.button2Icon && <i className={`ri-${template.faq.button2Icon}`}></i>}
                {template.faq.button2Text}
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 relative" style={getSectionStyle(template.styles.finalCtaBackground, template.styles.finalCtaBackgroundImage)}>
          {template.styles.finalCtaBackgroundImage && (
            <div className="absolute inset-0 bg-black/30"></div>
          )}
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {template.finalCta.badge && (
              <Badge className="mb-4" style={{ 
                backgroundColor: template.styles.secondaryColor,
                color: '#ffffff'
              }}>
                {template.finalCta.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: getPremiumTextColor(template.id) }}>
              {template.finalCta.title}
            </h2>
            <p className="text-lg mb-8" style={{ color: getPremiumTextColor(template.id), opacity: 0.9 }}>
              {template.finalCta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-white flex items-center gap-2" style={{ backgroundColor: template.styles.accentColor }}>
                {template.finalCta.button1Icon && <i className={`ri-${template.finalCta.button1Icon}`}></i>}
                {template.finalCta.button1Text}
              </Button>
              <Button size="lg" className="text-white flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor }}>
                {template.finalCta.button2Icon && <i className={`ri-${template.finalCta.button2Icon}`}></i>}
                {template.finalCta.button2Text}
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 relative" style={getSectionStyle(template.styles.contactBackground, template.styles.contactBackgroundImage)}>
          {template.styles.contactBackgroundImage && (
            <div className="absolute inset-0 bg-black/30"></div>
          )}
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: getPremiumTextColor(template.id) }}>
              {template.contact.title}
            </h2>
            {template.contact.subtitle && (
              <p className="text-xl mb-8 opacity-80" style={{ color: getPremiumTextColor(template.id) }}>
                {template.contact.subtitle}
              </p>
            )}
            <Card className={`p-8 max-w-md mx-auto bg-white/10 backdrop-blur-sm border-white/20`}>
              <div className="space-y-4">
                <Input placeholder="שם מלא" className="text-right bg-white/10 border-white/20 text-white placeholder:text-white/70" />
                <Input placeholder="אימייל" className="text-right bg-white/10 border-white/20 text-white placeholder:text-white/70" />
                <Input placeholder="טלפון" className="text-right bg-white/10 border-white/20 text-white placeholder:text-white/70" />
                <Textarea placeholder="הודעה" rows={4} className="text-right bg-white/10 border-white/20 text-white placeholder:text-white/70" />
                <Button className="w-full text-white" style={{ backgroundColor: template.styles.primaryColor }}>
                  {template.contact.buttonText}
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Custom Dynamic Elements */}
        {/* Gallery Section */}
        {template.gallery && (
          <section 
            className={`py-12 px-4 relative overflow-hidden ${getEffectClasses(template.effects?.hero)}`} 
            style={getSectionStyle(template.styles.backgroundColor, template.styles.heroBackgroundImage)}
          >
            {template.styles?.primaryColor && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
                </div>
              </>
            )}
            {template.styles.heroBackgroundImage && (
              <div className="absolute inset-0 bg-black/30"></div>
            )}
            <div className="max-w-6xl mx-auto relative z-10 text-center" dir="rtl">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.gallery.title}
                </h2>
                {template.gallery.subtitle && (
                  <p className="text-lg opacity-80 mb-6" style={{ color: getPremiumTextColor(template.id) }}>
                    {template.gallery.subtitle}
                  </p>
                )}
              </div>
              <div className={`grid gap-4 ${template.gallery.layout === 'grid' ? `grid-cols-1 md:grid-cols-${template.gallery.columns || 3}` : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                {template.gallery.images?.map((img, index) => (
                  <Card key={index} className="overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img.src} alt={img.alt || img.caption || `תמונה ${index + 1}`} className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
                    {(img.caption || img.alt) && (
                      <CardContent className="p-3">
                        <p className="text-xs" style={{ color: getPremiumTextColor(template.id) }}>{img.caption || img.alt}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* List Section */}
        {template.list && template.list.items && template.list.items.length > 0 && (
          <section 
            className={`py-12 px-4 relative ${getEffectClasses(template.effects?.hero)}`} 
            style={getSectionStyle(template.styles.backgroundColor, template.styles.heroBackgroundImage)}
          >
            {template.styles.heroBackgroundImage && (
              <div className="absolute inset-0 bg-black/30"></div>
            )}
            <div className="max-w-4xl mx-auto relative z-10 text-center" dir="rtl">
              <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: getPremiumTextColor(template.id) }}>
                {template.list.title}
              </h2>
              <div className="space-y-4">
                {template.list.listType === 'ordered' && (
                  <ol className="list-decimal list-inside space-y-3 text-right">
                    {template.list.items.map((item, index) => (
                      <li key={index} className="text-lg" style={{ color: getPremiumTextColor(template.id) }}>
                        <strong>{item.title}</strong>
                        {item.description && <div className="text-sm opacity-80 mt-1">{item.description}</div>}
                      </li>
                    ))}
                  </ol>
                )}
                {template.list.listType === 'unordered' && (
                  <ul className="list-disc list-inside space-y-3 text-right">
                    {template.list.items.map((item, index) => (
                      <li key={index} className="text-lg" style={{ color: getPremiumTextColor(template.id) }}>
                        <strong>{item.title}</strong>
                        {item.description && <div className="text-sm opacity-80 mt-1">{item.description}</div>}
                      </li>
                    ))}
                  </ul>
                )}
                {template.list.listType === 'icon' && (
                  <div className="space-y-4">
                    {template.list.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 text-right">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: template.styles.primaryColor }}>
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold" style={{ color: getPremiumTextColor(template.id) }}>{item.title}</h3>
                          {item.description && <p className="text-sm opacity-80 mt-1" style={{ color: getPremiumTextColor(template.id) }}>{item.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Heading Section */}
        {template.heading && (
          <section className="py-12 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
            <div className="max-w-6xl mx-auto text-center" dir="rtl">
              <div className={`text-${template.heading.alignment || 'center'}`}>
                <h2 className={`font-bold mb-4 ${
                  template.heading.size === 'small' ? 'text-xl md:text-2xl' :
                  template.heading.size === 'large' ? 'text-4xl md:text-5xl' :
                  'text-2xl md:text-3xl'
                }`} style={{ color: getPremiumTextColor(template.id) }}>
                  {template.heading.title}
                </h2>
                {template.heading.subtitle && (
                  <p className="text-lg opacity-80" style={{ color: getPremiumTextColor(template.id) }}>
                    {template.heading.subtitle}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Text Section */}
        {template.text && (
          <section className="py-12 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
            <div className="max-w-4xl mx-auto text-center" dir="rtl">
              <div className={`text-${template.text.alignment || 'center'}`}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.text.title}
                </h2>
                <div className={`prose prose-lg max-w-none ${
                  template.text.textSize === 'small' ? 'text-sm' :
                  template.text.textSize === 'large' ? 'text-xl' :
                  'text-base'
                }`} style={{ color: getPremiumTextColor(template.id) }}>
                  {template.text.content?.split('\n').map((paragraph, index) => (
                    paragraph.trim() && <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Video Section */}
        {template.video && template.video.videoUrl && (
          <section className="py-12 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
            <div className="max-w-4xl mx-auto text-center" dir="rtl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: getPremiumTextColor(template.id) }}>
                {template.video.title}
              </h2>
              {template.video.subtitle && (
                <p className="text-lg opacity-80 mb-8" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.video.subtitle}
                </p>
              )}
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                {template.video.videoType === 'youtube' && (
                  <iframe
                    src={template.video.videoUrl.replace('watch?v=', 'embed/')}
                    className="w-full h-full"
                    allowFullScreen
                    title={template.video.title}
                  />
                )}
                {template.video.videoType === 'vimeo' && (
                  <iframe
                    src={template.video.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                    title={template.video.title}
                  />
                )}
                {template.video.videoType === 'direct' && (
                  <video
                    src={template.video.videoUrl}
                    controls={template.video.controls}
                    className="w-full h-full"
                    autoPlay={false}
                  />
                )}
              </div>
            </div>
          </section>
        )}

        {/* Slider Section */}
        {template.slider && template.slider.slides && template.slider.slides.length > 0 && (
          <section className="py-12 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
            <div className="max-w-4xl mx-auto text-center" dir="rtl">
              <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: getPremiumTextColor(template.id) }}>
                {template.slider.title}
              </h2>
              <div className="relative">
                <div className="overflow-hidden rounded-lg">
                  <div className="flex transition-transform duration-300">
                    {template.slider.slides.map((slide, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                          <h3 className="text-xl font-bold mb-4" style={{ color: getPremiumTextColor(template.id) }}>
                            {slide.title}
                          </h3>
                          <p className="mb-6 opacity-80" style={{ color: getPremiumTextColor(template.id) }}>
                            {slide.description}
                          </p>
                          {slide.buttonText && (
                            <Button style={{ backgroundColor: template.styles.primaryColor }} className="text-white">
                              {slide.buttonText}
                            </Button>
                          )}
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Embed Section */}
        {template.embed && template.embed.htmlCode && (
          <section className="py-12 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
            <div className="max-w-4xl mx-auto text-center" dir="rtl">
              <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: getPremiumTextColor(template.id) }}>
                {template.embed.title}
              </h2>
              <div 
                className="rounded-lg overflow-hidden"
                style={{ height: template.embed.height || 400 }}
                dangerouslySetInnerHTML={{ __html: template.embed.htmlCode }}
              />
            </div>
          </section>
        )}

        {/* Social Bar Section */}
        {template.socialBar && template.socialBar.socialLinks && template.socialBar.socialLinks.length > 0 && (
          <section className="py-12 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
            <div className="max-w-4xl mx-auto text-center" dir="rtl">
              {template.socialBar.title && (
                <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.socialBar.title}
                </h2>
              )}
              <div className={`flex gap-6 ${template.socialBar.alignment === 'center' ? 'justify-center' : template.socialBar.alignment === 'right' ? 'justify-end' : 'justify-start'}`}>
                {template.socialBar.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:opacity-80"
                    style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}
                  >
                    <i className={`ri-${link.platform}-fill`}></i>
                    {template.socialBar.showLabels && link.label && (
                      <span>{link.label}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        </footer>

        {/* Footer */}
        <footer className="py-8 px-4 text-center" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
          <p>&copy; 2024 {template.footer.companyName}. כל הזכויות שמורות.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-full text-center" dir="rtl" style={{ backgroundColor: template.styles.backgroundColor, color: template.styles.textColor }}>
      {/* All sections here */}
      <div>תצוגה מקדימה של התבנית</div>
    </div>
  );
};
        {/* Gallery Section */}
        {template.gallery && template.gallery.images && template.gallery.images.length > 0 && (
          <section 
            className={`py-16 px-4 relative ${getEffectClasses(template.effects?.hero)}`} 
            style={getSectionStyle(template.styles.backgroundColor, template.styles.heroBackgroundImage)}
          >
            {template.styles.heroBackgroundImage && (
              <div className="absolute inset-0 bg-black/30"></div>
            )}
            <div className="max-w-6xl mx-auto text-center relative z-10" dir="rtl">
              {template.gallery.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: getPremiumTextColor(template.id), 
                  color: getPremiumTextColor(template.id) 
                }}>
                  {template.gallery.badge}
                </Badge>
              )}
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: getPremiumTextColor(template.id) }}>
                {template.gallery.title}
              </h2>
              {template.gallery.subtitle && (
                <p className="text-xl opacity-80 mb-8" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.gallery.subtitle}
                </p>
              )}
              <div className={`grid gap-4 ${template.gallery.layout === 'grid' ? `md:grid-cols-${template.gallery.columns || 3}` : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                {template.gallery.images.map((img, index) => (
                  <Card key={index} className="overflow-hidden bg-white/10 backdrop-blur-sm border-white/20">
                    <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
                    {img.caption && (
                      <CardContent className="p-4">
                        <p className="text-sm" style={{ color: getPremiumTextColor(template.id) }}>{img.caption}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Text Section */}
        {template.text && (
          <section 
            className={`py-16 px-4 relative ${getEffectClasses(template.effects?.hero)}`} 
            style={getSectionStyle(template.styles.backgroundColor, template.styles.heroBackgroundImage)}
          >
            {template.styles.heroBackgroundImage && (
              <div className="absolute inset-0 bg-black/30"></div>
            )}
            <div className="max-w-6xl mx-auto text-center relative z-10" dir="rtl">
              {template.text.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: getPremiumTextColor(template.id), 
                  color: getPremiumTextColor(template.id) 
                }}>
                  {template.text.badge}
                </Badge>
              )}
              {template.text.title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.text.title}
                </h2>
              )}
              <div className={`${
                template.text.textSize === 'large' ? 'text-xl' :
                template.text.textSize === 'medium' ? 'text-lg' :
                'text-base'
              }`} style={{ color: getPremiumTextColor(template.id) }}>
                <div dangerouslySetInnerHTML={{ __html: template.text.content.replace(/\n/g, '<br>') }} />
              </div>
            </div>
          </section>
        )}

        {/* Heading Section */}
        {template.heading && (
          <section 
            className={`py-16 px-4 relative ${getEffectClasses(template.effects?.hero)}`} 
            style={getSectionStyle(template.styles.backgroundColor, template.styles.heroBackgroundImage)}
          >
            {template.styles.heroBackgroundImage && (
              <div className="absolute inset-0 bg-black/30"></div>
            )}
            <div className="max-w-6xl mx-auto text-center relative z-10" dir="rtl">
              {template.heading.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: getPremiumTextColor(template.id), 
                  color: getPremiumTextColor(template.id) 
                }}>
                  {template.heading.badge}
                </Badge>
              )}
              <h2 className={`font-bold mb-4 ${
                template.heading.size === 'xl' ? 'text-5xl md:text-6xl' :
                template.heading.size === 'large' ? 'text-4xl md:text-5xl' :
                template.heading.size === 'medium' ? 'text-3xl md:text-4xl' :
                'text-2xl md:text-3xl'
              }`} style={{ color: getPremiumTextColor(template.id) }}>
                {template.heading.title}
              </h2>
              {template.heading.subtitle && (
                <p className="text-xl opacity-80" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.heading.subtitle}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Video Section */}
        {template.video && template.video.videoUrl && (
          <section 
            className={`py-16 px-4 relative ${getEffectClasses(template.effects?.hero)}`} 
            style={getSectionStyle(template.styles.backgroundColor, template.styles.heroBackgroundImage)}
          >
            {template.styles.heroBackgroundImage && (
              <div className="absolute inset-0 bg-black/30"></div>
            )}
            <div className="max-w-4xl mx-auto text-center relative z-10" dir="rtl">
              {template.video.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: getPremiumTextColor(template.id), 
                  color: getPremiumTextColor(template.id) 
                }}>
                  {template.video.badge}
                </Badge>
              )}
              {template.video.title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.video.title}
                </h2>
              )}
              {template.video.subtitle && (
                <p className="text-xl mb-8 opacity-80" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.video.subtitle}
                </p>
              )}
              <div className="aspect-video bg-black/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                {template.video.videoType === 'youtube' ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${template.video.videoUrl.split('v=')[1] || template.video.videoUrl}`}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                ) : (
                  <div style={{ color: getPremiumTextColor(template.id) }}>
                    <p>וידאו: {template.video.videoUrl}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Social Bar Section */}
        {template.socialBar && template.socialBar.socialLinks && template.socialBar.socialLinks.length > 0 && (
          <section 
            className={`py-16 px-4 relative ${getEffectClasses(template.effects?.hero)}`} 
            style={getSectionStyle(template.styles.backgroundColor, template.styles.heroBackgroundImage)}
          >
            {template.styles.heroBackgroundImage && (
              <div className="absolute inset-0 bg-black/30"></div>
            )}
            <div className="max-w-4xl mx-auto text-center relative z-10" dir="rtl">
              {template.socialBar.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: getPremiumTextColor(template.id), 
                  color: getPremiumTextColor(template.id) 
                }}>
                  {template.socialBar.badge}
                </Badge>
              )}
              {template.socialBar.title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.socialBar.title}
                </h2>
              )}
              <div className="flex gap-6 justify-center">
                {template.socialBar.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:opacity-80 bg-white/10 backdrop-blur-sm border border-white/20"
                    style={{ color: getPremiumTextColor(template.id) }}
                  >
                    <i className={`ri-${link.platform}-fill`}></i>
                    {template.socialBar.showLabels && link.label && (
                      <span>{link.label}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* List Section */}
        {template.list && template.list.items && template.list.items.length > 0 && (
          <section 
            className={`py-16 px-4 relative ${getEffectClasses(template.effects?.hero)}`} 
            style={getSectionStyle(template.styles.backgroundColor, template.styles.heroBackgroundImage)}
          >
            {template.styles.heroBackgroundImage && (
              <div className="absolute inset-0 bg-black/30"></div>
            )}
            <div className="max-w-4xl mx-auto text-center relative z-10" dir="rtl">
              {template.list.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: getPremiumTextColor(template.id), 
                  color: getPremiumTextColor(template.id) 
                }}>
                  {template.list.badge}
                </Badge>
              )}
              {template.list.title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.list.title}
                </h2>
              )}
              <div className="space-y-4">
                {template.list.items.map((item, index) => (
                  <Card key={index} className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 text-right">
                        <h3 className="font-bold" style={{ color: getPremiumTextColor(template.id) }}>{item.title}</h3>
                        {item.description && (
                          <p className="opacity-80" style={{ color: getPremiumTextColor(template.id) }}>{item.description}</p>
                        )}
                      </div>
                      {template.list.listType === 'ordered' && (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: template.styles.primaryColor }}>
                          {index + 1}
                        </div>
                      )}
                      {template.list.listType === 'icon' && item.icon && (
                        <div className="w-8 h-8 flex items-center justify-center" style={{ color: template.styles.primaryColor }}>
                          <i className={`ri-${item.icon}`}></i>
                        </div>
                      )}
                      {template.list.listType === 'unordered' && (
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: template.styles.primaryColor }}></div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Embed Section */}
        {template.embed && template.embed.htmlCode && (
          <section 
            className={`py-16 px-4 relative ${getEffectClasses(template.effects?.hero)}`} 
            style={getSectionStyle(template.styles.backgroundColor, template.styles.heroBackgroundImage)}
          >
            {template.styles.heroBackgroundImage && (
              <div className="absolute inset-0 bg-black/30"></div>
            )}
            <div className="max-w-6xl mx-auto text-center relative z-10" dir="rtl">
              {template.embed.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: getPremiumTextColor(template.id), 
                  color: getPremiumTextColor(template.id) 
                }}>
                  {template.embed.badge}
                </Badge>
              )}
              {template.embed.title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.embed.title}
                </h2>
              )}
              <div 
                className="w-full bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                style={{ height: template.embed.height || 400 }}
                dangerouslySetInnerHTML={{ __html: template.embed.htmlCode }}
              />
            </div>
          </section>
        )}

        {/* Slider Section */}
        {template.slider && template.slider.slides && template.slider.slides.length > 0 && (
          <section 
            className={`py-16 px-4 relative ${getEffectClasses(template.effects?.hero)}`} 
            style={getSectionStyle(template.styles.backgroundColor, template.styles.heroBackgroundImage)}
          >
            {template.styles.heroBackgroundImage && (
              <div className="absolute inset-0 bg-black/30"></div>
            )}
            <div className="max-w-6xl mx-auto text-center relative z-10" dir="rtl">
              {template.slider.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: getPremiumTextColor(template.id), 
                  color: getPremiumTextColor(template.id) 
                }}>
                  {template.slider.badge}
                </Badge>
              )}
              {template.slider.title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.slider.title}
                </h2>
              )}
              {template.slider.subtitle && (
                <p className="text-xl opacity-80 mb-8" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.slider.subtitle}
                </p>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {template.slider.slides.map((slide, index) => (
                  <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                    {slide.image && (
                      <img src={slide.image} alt={slide.title} className="w-full h-32 object-cover rounded mb-4" />
                    )}
                    <h3 className="text-xl font-bold mb-2" style={{ color: getPremiumTextColor(template.id) }}>{slide.title}</h3>
                    <p className="mb-4 opacity-80" style={{ color: getPremiumTextColor(template.id) }}>{slide.description}</p>
                    {slide.buttonText && (
                      <Button className="text-white" style={{ backgroundColor: template.styles.primaryColor }}>
                        {slide.buttonText}
                      </Button>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-full" style={{ backgroundColor: template.styles.backgroundColor, color: template.styles.textColor }}>
      {/* Hero Section */}
      <section className={`py-20 px-4 relative ${getEffectClasses(template.effects?.hero)}`} style={getSectionStyle(template.styles.heroBackground, template.styles.heroBackgroundImage)}>
        {template.styles.heroBackgroundImage && (
          <div className="absolute inset-0 bg-black/40"></div>
        )}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {template.hero.badge && (
            <Badge className="mb-4 text-white" style={{ backgroundColor: template.styles.accentColor }}>
              {template.hero.badge}
            </Badge>
          )}
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${template.effects?.hero === 'holographic' ? 'holographic-text' : ''}`} style={{ color: template.styles.heroBackgroundImage ? '#ffffff' : template.styles.textColor }}>
            {template.hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl mb-6" style={{ color: template.styles.heroBackgroundImage ? '#ffffff' : template.styles.textColor, opacity: 0.9 }}>
            {template.hero.subtitle}
          </h2>
          <p className="text-lg mb-8 max-w-4xl mx-auto" style={{ color: template.styles.heroBackgroundImage ? '#ffffff' : template.styles.textColor, opacity: 0.8 }}>
            {template.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white flex items-center gap-2" style={{ backgroundColor: template.styles.accentColor }}>
              {template.hero.button1Icon && <i className={`ri-${template.hero.button1Icon}`}></i>}
              {template.hero.button1Text}
            </Button>
            <Button size="lg" className="text-white flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor }}>
              {template.hero.button2Icon && <i className={`ri-${template.hero.button2Icon}`}></i>}
              {template.hero.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Emotional Section */}
      {template.emotional && (
        <section className={`py-16 px-4 relative ${getEffectClasses(template.effects?.emotional)}`} style={getSectionStyle(template.styles.emotionalBackground, template.styles.emotionalBackgroundImage)}>
          {template.styles.emotionalBackgroundImage && (
            <div className="absolute inset-0 bg-black/30"></div>
          )}
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {template.emotional.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.accentColor, color: template.styles.accentColor }}>
                {template.emotional.badge}
              </Badge>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${template.effects?.emotional === 'holographic' ? 'holographic-text' : ''}`} style={{ color: template.styles.emotionalBackgroundImage ? '#ffffff' : template.styles.textColor }}>
              {template.emotional.title}
            </h2>
            <p className="text-lg max-w-4xl mx-auto opacity-90" style={{ color: template.styles.emotionalBackgroundImage ? '#ffffff' : template.styles.textColor }}>
              {template.emotional.description}
            </p>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className={`py-16 px-4 relative ${getEffectClasses(template.effects?.features)}`} style={getSectionStyle(template.styles.featuresBackground, template.styles.featuresBackgroundImage)}>
        {template.styles.featuresBackgroundImage && (
          <div className="absolute inset-0 bg-black/30"></div>
        )}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {template.features.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.features.badge}
              </Badge>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${template.effects?.features === 'holographic' ? 'holographic-text' : ''}`} style={{ color: template.styles.featuresBackgroundImage ? '#ffffff' : template.styles.textColor }}>
              {template.features.title}
            </h2>
            {template.features.subtitle && (
              <p className="text-xl opacity-80" style={{ color: template.styles.featuresBackgroundImage ? '#ffffff' : template.styles.textColor }}>
                {template.features.subtitle}
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {template.features.items.map((feature, index) => (
              <Card key={index} className={`p-6 ${template.effects?.features === 'glass-morph' ? 'glass-effect' : ''}`}>
                <div className="text-4xl mb-4" style={{ color: template.styles.primaryColor }}>
                  <i className={`ri-${feature.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: template.styles.textColor }}>{feature.title}</h3>
                <p style={{ color: template.styles.textColor, opacity: 0.8 }}>{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
              {template.features.button1Icon && <i className={`ri-${template.features.button1Icon}`}></i>}
              {template.features.button1Text}
            </Button>
            <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor, color: '#ffffff' }}>
              {template.features.button2Icon && <i className={`ri-${template.features.button2Icon}`}></i>}
              {template.features.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-16 px-4 relative ${getEffectClasses(template.effects?.testimonials)}`} style={getSectionStyle(template.styles.testimonialsBackground, template.styles.testimonialsBackgroundImage)}>
        {template.styles.testimonialsBackgroundImage && (
          <div className="absolute inset-0 bg-black/30"></div>
        )}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {template.testimonials.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.testimonials.badge}
              </Badge>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold ${template.effects?.testimonials === 'holographic' ? 'holographic-text' : ''}`} style={{ color: template.styles.testimonialsBackgroundImage ? '#ffffff' : template.styles.textColor }}>
              {template.testimonials.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {template.testimonials.testimonials.map((testimonial, index) => (
              <Card key={index} className={`p-6 ${template.effects?.testimonials === 'glass-morph' ? 'glass-effect' : ''}`}>
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic opacity-90" style={{ color: template.styles.textColor }}>"{testimonial.content}"</p>
                <div>
                  <p className="font-bold" style={{ color: template.styles.textColor }}>{testimonial.name}</p>
                  <p className="text-sm opacity-70" style={{ color: template.styles.textColor }}>{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
              {template.testimonials.button1Icon && <i className={`ri-${template.testimonials.button1Icon}`}></i>}
              {template.testimonials.button1Text}
            </Button>
            <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor, color: '#ffffff' }}>
              {template.testimonials.button2Icon && <i className={`ri-${template.testimonials.button2Icon}`}></i>}
              {template.testimonials.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-16 px-4 relative ${getEffectClasses(template.effects?.about)}`} style={getSectionStyle(template.styles.aboutBackground, template.styles.aboutBackgroundImage)}>
        {template.styles.aboutBackgroundImage && (
          <div className="absolute inset-0 bg-black/30"></div>
        )}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {template.about.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.secondaryColor, color: template.styles.secondaryColor }}>
                {template.about.badge}
              </Badge>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${template.effects?.about === 'holographic' ? 'holographic-text' : ''}`} style={{ color: template.styles.aboutBackgroundImage ? '#ffffff' : template.styles.textColor }}>
              {template.about.title}
            </h2>
            <p className="text-lg max-w-4xl mx-auto opacity-90" style={{ color: template.styles.aboutBackgroundImage ? '#ffffff' : template.styles.textColor }}>
              {template.about.description}
            </p>
          </div>
          
          {template.about.stats && template.about.stats.length > 0 && (
            <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
              {template.about.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2" style={{ color: template.styles.primaryColor }}>
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-80" style={{ color: template.styles.aboutBackgroundImage ? '#ffffff' : template.styles.textColor }}>{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
              {template.about.button1Icon && <i className={`ri-${template.about.button1Icon}`}></i>}
              {template.about.button1Text}
            </Button>
            <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor, color: '#ffffff' }}>
              {template.about.button2Icon && <i className={`ri-${template.about.button2Icon}`}></i>}
              {template.about.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`py-16 px-4 relative ${getEffectClasses(template.effects?.pricing)}`} style={getSectionStyle(template.styles.pricingBackground, template.styles.pricingBackgroundImage)}>
        {template.styles.pricingBackgroundImage && (
          <div className="absolute inset-0 bg-black/30"></div>
        )}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {template.pricing.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.pricing.badge}
              </Badge>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${template.effects?.pricing === 'holographic' ? 'holographic-text' : ''}`} style={{ color: template.styles.pricingBackgroundImage ? '#ffffff' : template.styles.textColor }}>
              {template.pricing.title}
            </h2>
            {template.pricing.subtitle && (
              <p className="text-xl opacity-80" style={{ color: template.styles.pricingBackgroundImage ? '#ffffff' : template.styles.textColor }}>
                {template.pricing.subtitle}
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {template.pricing.plans.map((plan, index) => (
              <Card key={index} className={`p-6 text-center ${plan.recommended ? 'ring-2 ring-blue-500 scale-105' : ''} ${template.effects?.pricing === 'glass-morph' ? 'glass-effect' : ''}`}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: template.styles.textColor }}>{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: template.styles.primaryColor }}>{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6 text-right">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2" style={{ color: template.styles.textColor }}>
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full text-white" style={{ backgroundColor: template.styles.primaryColor }}>
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
              {template.pricing.button1Icon && <i className={`ri-${template.pricing.button1Icon}`}></i>}
              {template.pricing.button1Text}
            </Button>
            <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor, color: '#ffffff' }}>
              {template.pricing.button2Icon && <i className={`ri-${template.pricing.button2Icon}`}></i>}
              {template.pricing.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 px-4 relative ${getEffectClasses(template.effects?.faq)}`} style={getSectionStyle(template.styles.faqBackground, template.styles.faqBackgroundImage)}>
        {template.styles.faqBackgroundImage && (
          <div className="absolute inset-0 bg-black/30"></div>
        )}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {template.faq.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.faq.badge}
              </Badge>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold ${template.effects?.faq === 'holographic' ? 'holographic-text' : ''}`} style={{ color: template.styles.faqBackgroundImage ? '#ffffff' : template.styles.textColor }}>
              {template.faq.title}
            </h2>
          </div>
          
          <div className="space-y-4 mb-12">
            {template.faq.questions.map((qa, index) => (
              <Card key={index} className={`p-6 ${template.effects?.faq === 'glass-morph' ? 'glass-effect' : ''}`}>
                <h3 className="text-lg font-bold mb-2 text-right" style={{ color: template.styles.textColor }}>{qa.question}</h3>
                <p className="opacity-80 text-right" style={{ color: template.styles.textColor }}>{qa.answer}</p>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
              {template.faq.button1Icon && <i className={`ri-${template.faq.button1Icon}`}></i>}
              {template.faq.button1Text}
            </Button>
            <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor, color: '#ffffff' }}>
              {template.faq.button2Icon && <i className={`ri-${template.faq.button2Icon}`}></i>}
              {template.faq.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`py-16 px-4 relative ${getEffectClasses(template.effects?.finalCta)}`} style={getSectionStyle(template.styles.finalCtaBackground, template.styles.finalCtaBackgroundImage)}>
        {template.styles.finalCtaBackgroundImage && (
          <div className="absolute inset-0 bg-black/30"></div>
        )}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {template.finalCta.badge && (
            <Badge className="mb-4 text-white" style={{ backgroundColor: template.styles.secondaryColor }}>
              {template.finalCta.badge}
            </Badge>
          )}
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${template.effects?.finalCta === 'holographic' ? 'holographic-text' : ''}`} style={{ color: template.styles.finalCtaBackgroundImage ? '#ffffff' : template.styles.textColor }}>
            {template.finalCta.title}
          </h2>
          <p className="text-lg mb-8" style={{ color: template.styles.finalCtaBackgroundImage ? '#ffffff' : template.styles.textColor, opacity: 0.9 }}>
            {template.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white flex items-center gap-2" style={{ backgroundColor: template.styles.accentColor }}>
              {template.finalCta.button1Icon && <i className={`ri-${template.finalCta.button1Icon}`}></i>}
              {template.finalCta.button1Text}
            </Button>
            <Button size="lg" className="text-white flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor }}>
              {template.finalCta.button2Icon && <i className={`ri-${template.finalCta.button2Icon}`}></i>}
              {template.finalCta.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-16 px-4 relative ${getEffectClasses(template.effects?.contact)}`} style={getSectionStyle(template.styles.contactBackground, template.styles.contactBackgroundImage)}>
        {template.styles.contactBackgroundImage && (
          <div className="absolute inset-0 bg-black/30"></div>
        )}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${template.effects?.contact === 'holographic' ? 'holographic-text' : ''}`} style={{ color: template.styles.contactBackgroundImage ? '#ffffff' : template.styles.textColor }}>
            {template.contact.title}
          </h2>
          {template.contact.subtitle && (
            <p className="text-xl mb-8 opacity-80" style={{ color: template.styles.contactBackgroundImage ? '#ffffff' : template.styles.textColor }}>
              {template.contact.subtitle}
            </p>
          )}
          <Card className={`p-8 max-w-md mx-auto ${template.effects?.contact === 'glass-morph' ? 'glass-effect' : ''}`}>
            <div className="space-y-4">
              <Input placeholder="שם מלא" className="text-right" />
              <Input placeholder="אימייל" className="text-right" />
              <Input placeholder="טלפון" className="text-right" />
              <Textarea placeholder="הודעה" rows={4} className="text-right" />
              <Button className="w-full text-white" style={{ backgroundColor: template.styles.primaryColor }}>
                {template.contact.buttonText}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      {template.gallery && (
        <section 
          className={`py-12 px-4 relative overflow-hidden ${getEffectClasses(template.effects?.hero)}`} 
          style={getSectionStyle(template.styles.backgroundColor, template.styles.heroBackgroundImage)}
        >
          {/* Premium Effects */}
          {template.styles?.primaryColor && (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
              </div>
            </>
          )}
          {template.styles.heroBackgroundImage && (
            <div className="absolute inset-0 bg-black/30"></div>
          )}
          <div className="max-w-6xl mx-auto relative z-10" dir="rtl">
            <div className="text-center mb-8">
              {template.gallery.badge && (
                <Badge className="mb-4" variant="outline" style={{ 
                  borderColor: getPremiumTextColor(template.id), 
                  color: getPremiumTextColor(template.id) 
                }}>
                  {template.gallery.badge}
                </Badge>
              )}
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: getPremiumTextColor(template.id) }}>
                {template.gallery.title}
              </h2>
              {template.gallery.subtitle && (
                <p className="text-lg opacity-80 mb-6" style={{ color: getPremiumTextColor(template.id) }}>
                  {template.gallery.subtitle}
                </p>
              )}
            </div>
            <div className={`grid gap-4 ${template.gallery.layout === 'grid' ? `grid-cols-1 md:grid-cols-${template.gallery.columns || 3}` : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {template.gallery.images?.map((img, index) => (
                <Card key={index} className="overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-shadow">
                  <img src={img.src} alt={img.alt || img.caption || `תמונה ${index + 1}`} className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
                  {(img.caption || img.alt) && (
                    <CardContent className="p-3">
                      <p className="text-xs" style={{ color: getPremiumTextColor(template.id) }}>{img.caption || img.alt}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Heading Section */}
      {template.heading && (
        <section className="py-16 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
          <div className="max-w-6xl mx-auto">
            <div className={`text-${template.heading.alignment || 'center'}`}>
              {template.heading.badge && (
                <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                  {template.heading.badge}
                </Badge>
              )}
              <h2 className={`font-bold mb-4 ${
                template.heading.size === 'xl' ? 'text-5xl md:text-6xl' :
                template.heading.size === 'large' ? 'text-4xl md:text-5xl' :
                template.heading.size === 'medium' ? 'text-3xl md:text-4xl' :
                'text-2xl md:text-3xl'
              }`} style={{ color: template.styles.textColor }}>
                {template.heading.title}
              </h2>
              {template.heading.subtitle && (
                <p className="text-xl opacity-80" style={{ color: template.styles.textColor }}>
                  {template.heading.subtitle}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Text Section */}
      {template.text && (
        <section className="py-16 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
          <div className="max-w-6xl mx-auto">
            <div className={`text-${template.text.alignment || 'center'}`}>
              {template.text.badge && (
                <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                  {template.text.badge}
                </Badge>
              )}
              {template.text.title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: template.styles.textColor }}>
                  {template.text.title}
                </h2>
              )}
              <div className={`${
                template.text.textSize === 'large' ? 'text-xl' :
                template.text.textSize === 'medium' ? 'text-lg' :
                'text-base'
              }`} style={{ color: template.styles.textColor }}>
                <div dangerouslySetInnerHTML={{ __html: template.text.content.replace(/\n/g, '<br>') }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Section */}
      {template.video && template.video.videoUrl && (
        <section className="py-16 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
          <div className="max-w-4xl mx-auto text-center">
            {template.video.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.video.badge}
              </Badge>
            )}
            {template.video.title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: template.styles.textColor }}>
                {template.video.title}
              </h2>
            )}
            {template.video.subtitle && (
              <p className="text-xl mb-8 opacity-80" style={{ color: template.styles.textColor }}>
                {template.video.subtitle}
              </p>
            )}
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              {template.video.videoType === 'youtube' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${template.video.videoUrl.split('v=')[1] || template.video.videoUrl}`}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              ) : (
                <div className="text-gray-500">
                  <p>וידאו: {template.video.videoUrl}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Slider Section */}
      {template.slider && template.slider.slides && template.slider.slides.length > 0 && (
        <section className="py-16 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              {template.slider.badge && (
                <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                  {template.slider.badge}
                </Badge>
              )}
              {template.slider.title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: template.styles.textColor }}>
                  {template.slider.title}
                </h2>
              )}
              {template.slider.subtitle && (
                <p className="text-xl opacity-80" style={{ color: template.styles.textColor }}>
                  {template.slider.subtitle}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {template.slider.slides.map((slide, index) => (
                <Card key={index} className="p-6">
                  {slide.image && (
                    <img src={slide.image} alt={slide.title} className="w-full h-32 object-cover rounded mb-4" />
                  )}
                  <h3 className="text-xl font-bold mb-2" style={{ color: template.styles.textColor }}>{slide.title}</h3>
                  <p className="mb-4 opacity-80" style={{ color: template.styles.textColor }}>{slide.description}</p>
                  {slide.buttonText && (
                    <Button className="text-white" style={{ backgroundColor: template.styles.primaryColor }}>
                      {slide.buttonText}
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* List Section */}
      {template.list && template.list.items && template.list.items.length > 0 && (
        <section className="py-16 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              {template.list.badge && (
                <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                  {template.list.badge}
                </Badge>
              )}
              {template.list.title && (
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: template.styles.textColor }}>
                  {template.list.title}
                </h2>
              )}
            </div>
            <div className="space-y-4">
              {template.list.items.map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-4">
                    {template.list.listType === 'ordered' && (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: template.styles.primaryColor }}>
                        {index + 1}
                      </div>
                    )}
                    {template.list.listType === 'icon' && item.icon && (
                      <div className="w-8 h-8 flex items-center justify-center" style={{ color: template.styles.primaryColor }}>
                        <i className={`ri-${item.icon}`}></i>
                      </div>
                    )}
                    {template.list.listType === 'unordered' && (
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: template.styles.primaryColor }}></div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold" style={{ color: template.styles.textColor }}>{item.title}</h3>
                      {item.description && (
                        <p className="opacity-80" style={{ color: template.styles.textColor }}>{item.description}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Embed Section */}
      {template.embed && template.embed.htmlCode && (
        <section className="py-16 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              {template.embed.badge && (
                <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                  {template.embed.badge}
                </Badge>
              )}
              {template.embed.title && (
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: template.styles.textColor }}>
                  {template.embed.title}
                </h2>
              )}
            </div>
            <div 
              className="w-full bg-white rounded-lg border"
              style={{ height: template.embed.height || 400 }}
              dangerouslySetInnerHTML={{ __html: template.embed.htmlCode }}
            />
          </div>
        </section>
      )}

      {/* Social Bar Section */}
      {template.socialBar && template.socialBar.socialLinks && template.socialBar.socialLinks.length > 0 && (
        <section className="py-16 px-4" style={getSectionStyle(template.styles.backgroundColor)}>
          <div className="max-w-4xl mx-auto">
            <div className={`text-${template.socialBar.alignment || 'center'} mb-8`}>
              {template.socialBar.badge && (
                <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                  {template.socialBar.badge}
                </Badge>
              )}
              {template.socialBar.title && (
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: template.styles.textColor }}>
                  {template.socialBar.title}
                </h2>
              )}
            </div>
            <div className={`flex gap-6 ${template.socialBar.alignment === 'center' ? 'justify-center' : template.socialBar.alignment === 'right' ? 'justify-end' : 'justify-start'}`}>
              {template.socialBar.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:opacity-80"
                  style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}
                >
                  <i className={`ri-${link.platform}-fill`}></i>
                  {template.socialBar.showLabels && link.label && (
                    <span>{link.label}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer placeholder */}
      <footer className="py-8 px-4 text-center" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
        <p>&copy; 2024 {template.footer.companyName}. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
};

export default TemplatePreview;