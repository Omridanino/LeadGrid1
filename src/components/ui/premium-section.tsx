
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

  // Template-specific rendering with advanced designs
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
            <section className="relative py-20 bg-gradient-to-b from-slate-900 to-gray-900 overflow-hidden">
              {/* Floating glass elements */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    rotateY: [0, 180, 360],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 15 + i * 2,
                    repeat: Infinity,
                    delay: i * 2
                  }}
                  className="absolute backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl"
                  style={{
                    width: `${60 + i * 15}px`,
                    height: `${40 + i * 10}px`,
                    left: `${5 + i * 8}%`,
                    top: `${10 + (i % 4) * 20}%`,
                    transform: `rotate(${i * 25}deg)`
                  }}
                />
              ))}
              
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
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
            <section className="relative py-20 bg-black overflow-hidden">
              {/* Cyberpunk grid */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                  {[...Array(400)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        boxShadow: [
                          "0 0 0px #ff00ff",
                          "0 0 10px #00ffff", 
                          "0 0 0px #ff00ff"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 3
                      }}
                      className="border-[0.5px] border-purple-500/20"
                    />
                  ))}
                </div>
              </div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-black mb-4 neon-text"
                      style={{
                        background: "linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 30px #ff00ff"
                      }}>
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
            <section className="relative py-20 bg-gradient-to-b from-indigo-950 to-blue-950 overflow-hidden">
              {/* Particle network animation */}
              <svg className="absolute inset-0 w-full h-full">
                {[...Array(150)].map((_, i) => (
                  <g key={i}>
                    <motion.circle
                      cx={Math.random() * 1920}
                      cy={Math.random() * 1080}
                      r="2"
                      fill="#60a5fa"
                      animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [0.5, 2, 0.5]
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                    {i < 75 && (
                      <motion.line
                        x1={Math.random() * 1920}
                        y1={Math.random() * 1080}
                        x2={Math.random() * 1920}
                        y2={Math.random() * 1080}
                        stroke="#3b82f6"
                        strokeWidth="1"
                        opacity="0.3"
                        animate={{
                          opacity: [0.1, 0.6, 0.1]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          delay: Math.random() * 3
                        }}
                      />
                    )}
                  </g>
                ))}
              </svg>
              
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {template.features.title}
                    </span>
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
        case 'hero':
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
        case 'features':
          const nftCards = template.features.items.map(item => ({
            title: item.title,
            description: item.description,
            icon: getIconComponent(item.icon)
          }));
          return (
            <section className="relative py-20 bg-gradient-to-b from-purple-900 to-pink-900 overflow-hidden">
              {/* Holographic background effects */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                      duration: 10 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl"
                    style={{
                      width: `${100 + i * 20}px`,
                      height: `${100 + i * 20}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                    {template.features.title}
                  </h2>
                </motion.div>
                <NFTFutureCards cards={nftCards} />
              </div>
            </section>
          );
        case 'pricing':
          return (
            <LiquidPricing
              title={template.pricing.title}
              subtitle={template.pricing.subtitle}
              plans={template.pricing.plans}
              className="bg-gradient-to-b from-pink-900 to-purple-900"
            />
          );
        case 'testimonials':
          return (
            <MorphingTestimonials
              title={template.testimonials.title}
              testimonials={template.testimonials.testimonials}
              className="bg-gradient-to-b from-purple-900 to-pink-900"
            />
          );
        default:
          return null;
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
            <section className="relative py-20 bg-gradient-to-b from-orange-200 to-pink-200 overflow-hidden">
              {/* 3D floating shapes */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -40, 0],
                    rotateY: [0, 360],
                    rotateX: [0, 180],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 12 + i,
                    repeat: Infinity,
                    delay: i * 0.8
                  }}
                  className="absolute rounded-2xl opacity-60"
                  style={{
                    width: `${60 + i * 15}px`,
                    height: `${60 + i * 15}px`,
                    background: `linear-gradient(135deg, ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][i % 6]}, ${['#ff8e8e', '#6eddd6', '#67c3d7', '#a8d4ba', '#fed85d', '#ffb3f5'][i % 6]})`,
                    left: `${5 + i * 6}%`,
                    top: `${10 + (i % 4) * 20}%`,
                    boxShadow: `0 ${15 + i * 3}px ${30 + i * 5}px rgba(0,0,0,0.2)`,
                    filter: 'blur(1px)'
                  }}
                />
              ))}
              
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-800">
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
            <section className="relative py-20 bg-gradient-to-b from-gray-950 to-slate-900 overflow-hidden">
              {/* Matrix digital rain */}
              <div className="absolute inset-0 opacity-15">
                {[...Array(100)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, 1000],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 3
                    }}
                    className="absolute w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                    style={{
                      left: `${Math.random() * 100}%`,
                      height: '150px'
                    }}
                  />
                ))}
              </div>
              
              {/* Floating binary code */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -50, 0],
                    rotateY: [0, 180, 360],
                    opacity: [0.1, 0.4, 0.1]
                  }}
                  transition={{
                    duration: 15 + i * 2,
                    repeat: Infinity,
                    delay: i * 1.5
                  }}
                  className="absolute bg-slate-800/20 backdrop-blur-sm border border-blue-500/10 rounded-lg p-3 font-mono text-xs text-blue-300/50"
                  style={{
                    left: `${8 + i * 8}%`,
                    top: `${12 + (i % 4) * 20}%`
                  }}
                >
                  {['010', '101', '110', '001'][i % 4]}
                </motion.div>
              ))}
              
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white font-mono"
                      style={{
                        textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
                      }}>
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

    // Default case - enhanced holographic style
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
            <section className="relative py-20 bg-gradient-to-b from-gray-900 to-blue-900 overflow-hidden">
              {/* Enhanced holographic background */}
              <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 360],
                      opacity: [0.1, 0.4, 0.1]
                    }}
                    transition={{
                      duration: 12 + i * 2,
                      repeat: Infinity,
                      delay: i * 0.6
                    }}
                    className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl"
                    style={{
                      width: `${80 + i * 15}px`,
                      height: `${80 + i * 15}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
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
