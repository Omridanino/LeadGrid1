import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from 'lucide-react';
import { TemplateData } from '@/types/template';

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

export const TemplatePreview = ({ template }: TemplatePreviewProps) => {
  return (
    <div className="min-h-full" style={{ backgroundColor: template.styles.backgroundColor, color: template.styles.textColor }}>
      {/* Hero Section */}
      <section className="py-20 px-4 relative" style={getSectionStyle(template.styles.heroBackground, template.styles.heroBackgroundImage)}>
        {template.styles.heroBackgroundImage && (
          <div className="absolute inset-0 bg-black/40"></div>
        )}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {template.hero.badge && (
            <Badge className="mb-4 text-white" style={{ backgroundColor: template.styles.accentColor }}>
              {template.hero.badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: template.styles.heroBackgroundImage ? '#ffffff' : template.styles.textColor }}>
            {template.hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl mb-6" style={{ color: template.styles.heroBackgroundImage ? '#ffffff' : template.styles.textColor, opacity: 0.9 }}>
            {template.hero.subtitle}
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: template.styles.heroBackgroundImage ? '#ffffff' : template.styles.textColor, opacity: 0.8 }}>
            {template.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white flex items-center gap-2" style={{ backgroundColor: template.styles.accentColor }}>
              {template.hero.button1Icon && <i className={`ri-${template.hero.button1Icon}`}></i>}
              {template.hero.button1Text}
            </Button>
            <Button size="lg" className="text-white flex items-center gap-2" style={{ backgroundColor: template.styles.primaryColor }}>
              {template.hero.button2Icon && <i className={`ri-${template.hero.button2Icon}`}></i>}
              {template.hero.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="py-16 px-4 relative" style={getSectionStyle(template.styles.emotionalBackground, template.styles.emotionalBackgroundImage)}>
        {template.styles.emotionalBackgroundImage && (
          <div className="absolute inset-0 bg-black/30"></div>
        )}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {template.emotional.badge && (
            <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
              {template.emotional.badge}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: template.styles.emotionalBackgroundImage ? '#ffffff' : template.styles.textColor }}>
            {template.emotional.title}
          </h2>
          <p className="text-lg leading-relaxed opacity-90 mb-8" style={{ color: template.styles.emotionalBackgroundImage ? '#ffffff' : template.styles.textColor }}>
            {template.emotional.description}
          </p>
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

      {/* Features Section */}
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.featuresBackground }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.features.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.features.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: template.styles.textColor }}>
              {template.features.title}
            </h2>
            {template.features.subtitle && (
              <p className="text-xl opacity-80" style={{ color: template.styles.textColor }}>
                {template.features.subtitle}
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {template.features.items.map((item, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: template.styles.textColor }}>{item.title}</h3>
                <p className="opacity-80" style={{ color: template.styles.textColor }}>{item.description}</p>
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
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.testimonialsBackground }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.testimonials.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.testimonials.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: template.styles.textColor }}>
              {template.testimonials.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {template.testimonials.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic" style={{ color: template.styles.textColor }}>"{testimonial.content}"</p>
                <div>
                  <p className="font-bold" style={{ color: template.styles.textColor }}>{testimonial.name}</p>
                  <p className="text-sm opacity-80" style={{ color: template.styles.textColor }}>{testimonial.role}</p>
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
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.aboutBackground }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.about.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.secondaryColor, color: template.styles.secondaryColor }}>
                {template.about.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: template.styles.textColor }}>
              {template.about.title}
            </h2>
            <p className="text-lg max-w-4xl mx-auto opacity-90" style={{ color: template.styles.textColor }}>
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
                  <div className="text-lg opacity-80" style={{ color: template.styles.textColor }}>{stat.label}</div>
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
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.pricingBackground }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.pricing.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.pricing.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: template.styles.textColor }}>
              {template.pricing.title}
            </h2>
            {template.pricing.subtitle && (
              <p className="text-xl opacity-80" style={{ color: template.styles.textColor }}>
                {template.pricing.subtitle}
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {template.pricing.plans.map((plan, index) => (
              <Card key={index} className={`p-6 text-center ${plan.recommended ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
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
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.faqBackground }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {template.faq.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.faq.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: template.styles.textColor }}>
              {template.faq.title}
            </h2>
          </div>
          
          <div className="space-y-4 mb-12">
            {template.faq.questions.map((qa, index) => (
              <Card key={index} className="p-6">
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
      <section className="py-16 px-4 relative" style={getSectionStyle(template.styles.finalCtaBackground, template.styles.finalCtaBackgroundImage)}>
        {template.styles.finalCtaBackgroundImage && (
          <div className="absolute inset-0 bg-black/30"></div>
        )}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {template.finalCta.badge && (
            <Badge className="mb-4 text-white" style={{ backgroundColor: template.styles.secondaryColor }}>
              {template.finalCta.badge}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: template.styles.finalCtaBackgroundImage ? '#ffffff' : template.styles.textColor }}>
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
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.contactBackground }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: template.styles.textColor }}>
            {template.contact.title}
          </h2>
          {template.contact.subtitle && (
            <p className="text-xl mb-8 opacity-80" style={{ color: template.styles.textColor }}>
              {template.contact.subtitle}
            </p>
          )}
          <Card className="p-8 max-w-md mx-auto">
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

      {/* Footer placeholder */}
      <footer className="py-8 px-4 text-center" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
        <p>&copy; 2024 {template.footer.companyName}. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
};
