import React from 'react';
import { motion } from 'framer-motion';
import { HolographicHero } from './holographic-hero';
import { FloatingCardsGrid } from './floating-cards';
import { LiquidPricing } from './liquid-pricing';
import { MorphingTestimonials } from './morphing-testimonials';
import { TemplateData } from '@/types/template';
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
  sectionType: 'hero' | 'features' | 'pricing' | 'testimonials';
}

export const PremiumSection = ({ template, sectionType }: PremiumSectionProps) => {
  const getIconComponent = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || Code;
  };

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
      const featuresCards = template.features.items.map(item => ({
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
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                {template.features.title}
              </h2>
              {template.features.subtitle && (
                <p className="text-xl text-blue-100/70 max-w-2xl mx-auto">
                  {template.features.subtitle}
                </p>
              )}
            </motion.div>
            
            <FloatingCardsGrid cards={featuresCards} />
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
};