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