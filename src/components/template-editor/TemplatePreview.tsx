
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

export const TemplatePreview = ({ template }: TemplatePreviewProps) => {
  return (
    <div className="min-h-full" style={{ backgroundColor: template.styles.backgroundColor, color: template.styles.textColor }}>
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${template.styles.primaryColor}dd, ${template.styles.secondaryColor}dd)` }}>
        <div className="max-w-6xl mx-auto text-center">
          {template.hero.badge && (
            <Badge className="mb-4 text-white" style={{ backgroundColor: template.styles.accentColor }}>
              {template.hero.badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {template.hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-white/90">
            {template.hero.subtitle}
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-white/80">
            {template.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white" style={{ backgroundColor: template.styles.accentColor }}>
              {template.hero.button1Text}
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              {template.hero.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.backgroundColor }}>
        <div className="max-w-4xl mx-auto text-center">
          {template.emotional.badge && (
            <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
              {template.emotional.badge}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {template.emotional.title}
          </h2>
          <p className="text-lg leading-relaxed opacity-90 mb-8">
            {template.emotional.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" style={{ backgroundColor: template.styles.primaryColor }}>
              {template.emotional.button1Text}
            </Button>
            <Button size="lg" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
              {template.emotional.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4" style={{ backgroundColor: `${template.styles.primaryColor}05` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.features.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.features.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {template.features.title}
            </h2>
            {template.features.subtitle && (
              <p className="text-xl opacity-80">
                {template.features.subtitle}
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {template.features.items.map((item, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" style={{ backgroundColor: template.styles.primaryColor }}>
              {template.features.button1Text}
            </Button>
            <Button size="lg" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
              {template.features.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.backgroundColor }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.testimonials.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.testimonials.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold">
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
                <p className="mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" style={{ backgroundColor: template.styles.primaryColor }}>
              {template.testimonials.button1Text}
            </Button>
            <Button size="lg" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
              {template.testimonials.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4" style={{ backgroundColor: `${template.styles.secondaryColor}05` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.about.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.secondaryColor, color: template.styles.secondaryColor }}>
                {template.about.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {template.about.title}
            </h2>
            <p className="text-lg max-w-4xl mx-auto opacity-90">
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
                  <div className="text-lg opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" style={{ backgroundColor: template.styles.primaryColor }}>
              {template.about.button1Text}
            </Button>
            <Button size="lg" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
              {template.about.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.backgroundColor }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.pricing.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.pricing.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {template.pricing.title}
            </h2>
            {template.pricing.subtitle && (
              <p className="text-xl opacity-80">
                {template.pricing.subtitle}
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {template.pricing.plans.map((plan, index) => (
              <Card key={index} className={`p-6 text-center ${plan.recommended ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6 text-right">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" style={{ backgroundColor: template.styles.primaryColor }}>
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" style={{ backgroundColor: template.styles.primaryColor }}>
              {template.pricing.button1Text}
            </Button>
            <Button size="lg" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
              {template.pricing.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4" style={{ backgroundColor: `${template.styles.primaryColor}05` }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {template.faq.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.faq.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold">
              {template.faq.title}
            </h2>
          </div>
          
          <div className="space-y-4 mb-12">
            {template.faq.questions.map((qa, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold mb-2 text-right">{qa.question}</h3>
                <p className="opacity-80 text-right">{qa.answer}</p>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" style={{ backgroundColor: template.styles.primaryColor }}>
              {template.faq.button1Text}
            </Button>
            <Button size="lg" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
              {template.faq.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4" style={{ background: `linear-gradient(135deg, ${template.styles.primaryColor}dd, ${template.styles.accentColor}dd)` }}>
        <div className="max-w-4xl mx-auto text-center">
          {template.finalCta.badge && (
            <Badge className="mb-4 text-white" style={{ backgroundColor: template.styles.secondaryColor }}>
              {template.finalCta.badge}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {template.finalCta.title}
          </h2>
          <p className="text-lg mb-8 text-white/90">
            {template.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white" style={{ backgroundColor: template.styles.accentColor }}>
              {template.finalCta.button1Text}
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              {template.finalCta.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.backgroundColor }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {template.contact.title}
          </h2>
          {template.contact.subtitle && (
            <p className="text-xl mb-8 opacity-80">
              {template.contact.subtitle}
            </p>
          )}
          <Card className="p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <Input placeholder="שם מלא" className="text-right" />
              <Input placeholder="אימייל" className="text-right" />
              <Input placeholder="טלפון" className="text-right" />
              <Textarea placeholder="הודעה" rows={4} className="text-right" />
              <Button className="w-full" style={{ backgroundColor: template.styles.primaryColor }}>
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
