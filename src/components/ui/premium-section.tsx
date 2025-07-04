import React from 'react';
import { motion } from 'framer-motion';
import { HolographicHero } from './holographic-hero';
import { FloatingCardsGrid } from './floating-cards';
import { LiquidPricing } from './liquid-pricing';
import { MorphingTestimonials } from './morphing-testimonials';
import { TechConsultantHero, NeonAcademyHero, BlockchainTechHero } from './premium-heroes';
import { Creative3DHero, AuthKitHero } from './premium-heroes-2';
import { NFTFutureCards, Creative3DCards, AuthKitCards } from './premium-cards';
import { TemplateData } from '@/types/template';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardContent } from './card';
import { Input } from './input';
import { Textarea } from './textarea';
import { 
  Code, Database, Server, RefreshCw, PlayCircle, Star, 
  Award, Users, Share, Shield, Eye, Flashlight, Image, 
  BarChart, User, Monitor, Film, Heart, Fingerprint,
  Lock, ShieldCheck, Scan, Sparkles
} from 'lucide-react';

const iconMap = {
  'code-line': Code,
  'database-line': Database,
  'server-line': Server,
  'refresh-line': RefreshCw,
  'play-circle-line': PlayCircle,
  'user-star-line': Star,
  'award-line': Award,
  'team-line': Users,
  'share-line': Share,
  'shield-line': Shield,
  'eye-line': Eye,
  'flashlight-line': Flashlight,
  'image-line': Image,
  'bar-chart-line': BarChart,
  'user-line': User,
  'monitor-line': Monitor,
  'film-line': Film,
  'user-heart-line': Heart,
  'fingerprint-line': Fingerprint,
  'lock-password-line': Lock,
  'shield-check-line': ShieldCheck,
  'fingerprint-2-line': Scan,
  'magic-line': Sparkles
};

interface PremiumSectionProps {
  template: TemplateData;
  sectionType: 'hero' | 'features' | 'pricing' | 'testimonials' | 'emotional' | 'about' | 'faq' | 'finalCta' | 'contact' | 'footer';
}

export const PremiumSection = ({ template, sectionType }: PremiumSectionProps) => {
  const getIconComponent = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || Code;
  };

  const getPremiumTextColor = (templateId: string) => {
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

  // Generic section renderer for missing sections
  const renderGenericSection = (sectionData: any, bgStyle: string, title: string) => {
    return (
      <section className={`py-16 px-4 relative ${bgStyle}`}>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {sectionData?.badge && (
            <Badge className="mb-4" variant="outline" style={{ 
              borderColor: template.styles.primaryColor, 
              color: getPremiumTextColor(template.id)
            }}>
              {sectionData.badge}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: getPremiumTextColor(template.id) }}>
            {title}
          </h2>
          {sectionData?.description && (
            <p className="text-lg max-w-4xl mx-auto opacity-90 mb-8" style={{ color: getPremiumTextColor(template.id) }}>
              {sectionData.description}
            </p>
          )}
          {sectionData?.button1Text && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
                {sectionData.button1Icon && <i className={`ri-${sectionData.button1Icon}`}></i>}
                {sectionData.button1Text}
              </Button>
              {sectionData.button2Text && (
                <Button size="lg" className="flex items-center gap-2" style={{ backgroundColor: template.styles.secondaryColor, color: '#ffffff' }}>
                  {sectionData.button2Icon && <i className={`ri-${sectionData.button2Icon}`}></i>}
                  {sectionData.button2Text}
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    );
  };

  // Template-specific rendering
  switch (template.id) {
    case 'tech-consultant-pro':
      switch (sectionType) {
        case 'hero':
          return (
            <TechConsultantHero
              badge={template.hero.badge}
              title={template.hero.title}
              subtitle={template.hero.subtitle}
              description={template.hero.description}
              button1Text={template.hero.button1Text}
              button2Text={template.hero.button2Text}
            />
          );
        case 'features':
          const techCards = template.features.items.map(item => ({
            title: item.title,
            description: item.description,
            icon: getIconComponent(item.icon)
          }));
          return (
            <section className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    {template.features.title}
                  </h2>
                </motion.div>
                <FloatingCardsGrid cards={techCards} />
              </div>
            </section>
          );
        case 'pricing':
          return (
            <LiquidPricing
              title={template.pricing.title}
              subtitle={template.pricing.subtitle}
              plans={template.pricing.plans}
              className="bg-gradient-to-b from-gray-900 to-slate-900"
            />
          );
        case 'testimonials':
          return (
            <MorphingTestimonials
              title={template.testimonials.title}
              testimonials={template.testimonials.testimonials}
              className="bg-gradient-to-b from-slate-900 to-black"
            />
          );
        case 'emotional':
          return renderGenericSection(template.emotional, 'bg-gradient-to-b from-gray-900 to-slate-900', template.emotional?.title || '');
        case 'about':
          return renderGenericSection(template.about, 'bg-gradient-to-b from-slate-900 to-gray-900', template.about.title);
        case 'faq':
          return (
            <section className="py-16 px-4 relative bg-gradient-to-b from-gray-900 to-slate-900">
              <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{template.faq.title}</h2>
                </div>
                <div className="space-y-4 mb-12">
                  {template.faq.questions.map((qa, index) => (
                    <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                      <h3 className="text-lg font-bold mb-2 text-right text-white">{qa.question}</h3>
                      <p className="opacity-80 text-right text-white">{qa.answer}</p>
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
          );
        case 'finalCta':
          return renderGenericSection(template.finalCta, 'bg-gradient-to-b from-slate-900 to-gray-900', template.finalCta.title);
        case 'contact':
          return (
            <section className="py-16 px-4 relative bg-gradient-to-b from-gray-900 to-slate-900">
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{template.contact.title}</h2>
                {template.contact.subtitle && (
                  <p className="text-xl mb-8 opacity-80 text-white">{template.contact.subtitle}</p>
                )}
                <Card className="p-8 max-w-md mx-auto bg-white/10 backdrop-blur-sm border-white/20">
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
          );
        case 'footer':
          return (
            <footer className="py-8 px-4 text-center bg-slate-900">
              <p className="text-white">&copy; 2024 {template.footer.companyName}. כל הזכויות שמורות.</p>
            </footer>
          );
        default:
          return null;
      }

    case 'neon-academy-pro':
      switch (sectionType) {
        case 'hero':
          return (
            <NeonAcademyHero
              badge={template.hero.badge}
              title={template.hero.title}
              subtitle={template.hero.subtitle}
              description={template.hero.description}
              button1Text={template.hero.button1Text}
              button2Text={template.hero.button2Text}
            />
          );
        case 'features':
          const neonCards = template.features.items.map(item => ({
            title: item.title,
            description: item.description,
            icon: getIconComponent(item.icon)
          }));
          return (
            <section className="py-20 bg-gradient-to-b from-black to-purple-900">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-200 neon-text">
                    {template.features.title}
                  </h2>
                </motion.div>
                <FloatingCardsGrid cards={neonCards} />
              </div>
            </section>
          );
        case 'pricing':
          return (
            <LiquidPricing
              title={template.pricing.title}
              subtitle={template.pricing.subtitle}
              plans={template.pricing.plans}
              className="bg-gradient-to-b from-purple-900 to-black"
            />
          );
        case 'testimonials':
          return (
            <MorphingTestimonials
              title={template.testimonials.title}
              testimonials={template.testimonials.testimonials}
              className="bg-gradient-to-b from-black to-purple-900"
            />
          );
        case 'emotional':
          return renderGenericSection(template.emotional, 'bg-gradient-to-b from-black to-purple-900', template.emotional?.title || '');
        case 'about':
          return renderGenericSection(template.about, 'bg-gradient-to-b from-purple-900 to-black', template.about.title);
        case 'faq':
          return (
            <section className="py-16 px-4 relative bg-gradient-to-b from-black to-purple-900">
              <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-cyan-200 neon-text">{template.faq.title}</h2>
                </div>
                <div className="space-y-4 mb-12">
                  {template.faq.questions.map((qa, index) => (
                    <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-cyan-400/30 neon-glow">
                      <h3 className="text-lg font-bold mb-2 text-right text-cyan-200">{qa.question}</h3>
                      <p className="opacity-80 text-right text-cyan-100">{qa.answer}</p>
                    </Card>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="flex items-center gap-2 neon-glow" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
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
          );
        case 'finalCta':
          return renderGenericSection(template.finalCta, 'bg-gradient-to-b from-purple-900 to-black', template.finalCta.title);
        case 'contact':
          return (
            <section className="py-16 px-4 relative bg-gradient-to-b from-black to-purple-900">
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-200 neon-text">{template.contact.title}</h2>
                {template.contact.subtitle && (
                  <p className="text-xl mb-8 opacity-80 text-cyan-100">{template.contact.subtitle}</p>
                )}
                <Card className="p-8 max-w-md mx-auto bg-white/10 backdrop-blur-sm border-cyan-400/30 neon-glow">
                  <div className="space-y-4">
                    <Input placeholder="שם מלא" className="text-right bg-black/20 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-300/70" />
                    <Input placeholder="אימייל" className="text-right bg-black/20 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-300/70" />
                    <Input placeholder="טלפון" className="text-right bg-black/20 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-300/70" />
                    <Textarea placeholder="הודעה" rows={4} className="text-right bg-black/20 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-300/70" />
                    <Button className="w-full text-white neon-glow" style={{ backgroundColor: template.styles.primaryColor }}>
                      {template.contact.buttonText}
                    </Button>
                  </div>
                </Card>
              </div>
            </section>
          );
        case 'footer':
          return (
            <footer className="py-8 px-4 text-center bg-black">
              <p className="text-cyan-200">&copy; 2024 {template.footer.companyName}. כל הזכויות שמורות.</p>
            </footer>
          );
        default:
          return null;
      }

    case 'blockchain-tech-pro':
      switch (sectionType) {
        case 'hero':
          return (
            <BlockchainTechHero
              badge={template.hero.badge}
              title={template.hero.title}
              subtitle={template.hero.subtitle}
              description={template.hero.description}
              button1Text={template.hero.button1Text}
              button2Text={template.hero.button2Text}
            />
          );
        case 'features':
          const blockchainCards = template.features.items.map(item => ({
            title: item.title,
            description: item.description,
            icon: getIconComponent(item.icon)
          }));
          return (
            <section className="py-20 bg-gradient-to-b from-indigo-950 to-blue-950">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-200">
                    {template.features.title}
                  </h2>
                </motion.div>
                <FloatingCardsGrid cards={blockchainCards} />
              </div>
            </section>
          );
        case 'pricing':
          return (
            <LiquidPricing
              title={template.pricing.title}
              subtitle={template.pricing.subtitle}
              plans={template.pricing.plans}
              className="bg-gradient-to-b from-blue-950 to-indigo-950"
            />
          );
        case 'testimonials':
          return (
            <MorphingTestimonials
              title={template.testimonials.title}
              testimonials={template.testimonials.testimonials}
              className="bg-gradient-to-b from-indigo-950 to-purple-950"
            />
          );
        default:
          return null;
      }

    case 'nft-future-pro':
      switch (sectionType) {
        case 'features':
          const nftCards = template.features.items.map(item => ({
            title: item.title,
            description: item.description,
            icon: getIconComponent(item.icon)
          }));
          return (
            <section className="py-20 bg-gradient-to-b from-purple-900 to-pink-900">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                    {template.features.title}
                  </h2>
                </motion.div>
                <NFTFutureCards cards={nftCards} />
              </div>
            </section>
          );
        default:
          return (
            <HolographicHero
              badge={template.hero.badge}
              title={template.hero.title}
              subtitle={template.hero.subtitle}
              description={template.hero.description}
              button1Text={template.hero.button1Text}
              button2Text={template.hero.button2Text}
              className="bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900"
            />
          );
      }

    case 'creative-3d-pro':
      switch (sectionType) {
        case 'hero':
          return (
            <Creative3DHero
              badge={template.hero.badge}
              title={template.hero.title}
              subtitle={template.hero.subtitle}
              description={template.hero.description}
              button1Text={template.hero.button1Text}
              button2Text={template.hero.button2Text}
              button1Icon={template.hero.button1Icon}
              button2Icon={template.hero.button2Icon}
            />
          );
        case 'features':
          const creativeCards = template.features.items.map(item => ({
            title: item.title,
            description: item.description,
            icon: getIconComponent(item.icon)
          }));
          return (
            <section className="py-20 bg-gradient-to-b from-orange-200 to-pink-200">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                    {template.features.title}
                  </h2>
                </motion.div>
                <Creative3DCards cards={creativeCards} />
              </div>
            </section>
          );
        case 'pricing':
          return (
            <LiquidPricing
              title={template.pricing.title}
              subtitle={template.pricing.subtitle}
              plans={template.pricing.plans}
              className="bg-gradient-to-b from-pink-200 to-purple-200"
            />
          );
        case 'testimonials':
          return (
            <MorphingTestimonials
              title={template.testimonials.title}
              testimonials={template.testimonials.testimonials}
              className="bg-gradient-to-b from-purple-200 to-orange-200"
            />
          );
        default:
          return null;
      }

    case 'authkit-tech-pro':
      switch (sectionType) {
        case 'hero':
          return (
            <AuthKitHero
              badge={template.hero.badge}
              title={template.hero.title}
              subtitle={template.hero.subtitle}
              description={template.hero.description}
              button1Text={template.hero.button1Text}
              button2Text={template.hero.button2Text}
              button1Icon={template.hero.button1Icon}
              button2Icon={template.hero.button2Icon}
            />
          );
        case 'features':
          const authCards = template.features.items.map(item => ({
            title: item.title,
            description: item.description,
            icon: getIconComponent(item.icon)
          }));
          return (
            <section className="py-20 bg-gradient-to-b from-gray-950 to-slate-900">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-200">
                    {template.features.title}
                  </h2>
                </motion.div>
                <AuthKitCards cards={authCards} />
              </div>
            </section>
          );
        case 'pricing':
          return (
            <LiquidPricing
              title={template.pricing.title}
              subtitle={template.pricing.subtitle}
              plans={template.pricing.plans}
              className="bg-gradient-to-b from-slate-900 to-blue-950"
            />
          );
        case 'testimonials':
          return (
            <MorphingTestimonials
              title={template.testimonials.title}
              testimonials={template.testimonials.testimonials}
              className="bg-gradient-to-b from-blue-950 to-gray-950"
            />
          );
        case 'emotional':
        case 'about':
        case 'faq':
        case 'finalCta':
        case 'contact':
        case 'footer':
          return renderGenericSection(
            sectionType === 'emotional' ? template.emotional :
            sectionType === 'about' ? template.about :
            sectionType === 'faq' ? template.faq :
            sectionType === 'finalCta' ? template.finalCta :
            sectionType === 'contact' ? template.contact :
            template.footer,
            'bg-gradient-to-b from-purple-900 to-pink-900',
            sectionType === 'emotional' ? template.emotional?.title || '' :
            sectionType === 'about' ? template.about.title :
            sectionType === 'faq' ? template.faq.title :
            sectionType === 'finalCta' ? template.finalCta.title :
            sectionType === 'contact' ? template.contact.title :
            'Footer'
          );
        default:
          return null;
      }

    // Default case - original holographic style
    default:
      switch (sectionType) {
        case 'hero':
          return (
            <HolographicHero
              badge={template.hero.badge}
              title={template.hero.title}
              subtitle={template.hero.subtitle}
              description={template.hero.description}
              button1Text={template.hero.button1Text}
              button2Text={template.hero.button2Text}
              className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
            />
          );
        case 'features':
          const defaultCards = template.features.items.map(item => ({
            title: item.title,
            description: item.description,
            icon: getIconComponent(item.icon)
          }));
          return (
            <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                    {template.features.title}
                  </h2>
                </motion.div>
                <FloatingCardsGrid cards={defaultCards} />
              </div>
            </section>
          );
        case 'pricing':
          return (
            <LiquidPricing
              title={template.pricing.title}
              subtitle={template.pricing.subtitle}
              plans={template.pricing.plans}
              className="bg-gradient-to-b from-blue-900 to-purple-900"
            />
          );
        case 'testimonials':
          return (
            <MorphingTestimonials
              title={template.testimonials.title}
              testimonials={template.testimonials.testimonials}
              className="bg-gradient-to-b from-purple-900 to-gray-900"
            />
          );
        default:
          return null;
      }
  }
};