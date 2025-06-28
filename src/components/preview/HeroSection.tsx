'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Sparkles, ArrowRight, Star, Zap, Heart, Trophy, Target, Rocket } from 'lucide-react';
import { HorizonHeroSection } from '../ui/horizon-hero-section';
import { HeroDesignAli } from '../ui/hero-designali';
import { HeroFuturistic } from '../ui/hero-futuristic';
import ScrollExpandMedia from '../ui/scroll-expansion-hero';
import { BackgroundPaths } from '../ui/background-paths';
import { HeroScroll } from '../ui/container-scroll-animation';
import { ColorScheme } from '@/components/ColorEditor';

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  content,
  currentColors,
  formData,
  heroImage
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDesign, setCurrentDesign] = useState('modern');

  // Extract answers from formData for backward compatibility
  const answers = formData || {};

  useEffect(() => {
    setIsVisible(true);
    // Randomly select design on component mount
    const designs = [
      'modern', 'minimal', 'bold', 'elegant', 'creative',
      'tech', 'gradient', 'glassmorphism', 'animated', 'premium',
      '3d-tech', '3d-designali', '3d-futuristic', '3d-scroll-expansion',
      '3d-background-paths', '3d-container-scroll'
    ];
    setCurrentDesign(designs[Math.floor(Math.random() * designs.length)]);
  }, []);

  const getTypewriterStrings = () => {
    const baseStrings = ["Innovation", "Excellence", "Quality", "Success"];
    if (answers.services && answers.services.length > 0) {
      return [...answers.services, ...baseStrings];
    }
    if (answers.businessType) {
      return [answers.businessType, ...baseStrings];
    }
    return baseStrings;
  };

  const getBusinessIcon = () => {
    const businessType = answers.businessType?.toLowerCase() || '';
    if (businessType.includes('tech') || businessType.includes('software')) return <Zap className="w-6 h-6" />;
    if (businessType.includes('design') || businessType.includes('creative')) return <Sparkles className="w-6 h-6" />;
    if (businessType.includes('health') || businessType.includes('medical')) return <Heart className="w-6 h-6" />;
    if (businessType.includes('education') || businessType.includes('training')) return <Trophy className="w-6 h-6" />;
    if (businessType.includes('marketing') || businessType.includes('advertising')) return <Target className="w-6 h-6" />;
    return <Rocket className="w-6 h-6" />;
  };

  const renderHeroByDesignStyle = () => {
    const textColor = currentColors?.text || '#000000';
    const borderColor = currentColors?.border || '#e5e7eb';
    const backgroundColor = currentColors?.background || '#ffffff';
    const primaryColor = currentColors?.primary || '#3b82f6';
    const accentColor = currentColors?.accent || '#10b981';

    switch (currentDesign) {
      case 'modern':
        return (
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor }}>
            {heroImage && (
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
            )}
            <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  {getBusinessIcon()}
                  <span className="ml-2">New</span>
                </Badge>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6"
                style={{ color: textColor }}
              >
                {answers.businessName || 'Your Business'}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 opacity-80"
                style={{ color: textColor }}
              >
                {answers.tagline || 'Your vision, our expertise'}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  className="px-8 py-3 text-lg font-semibold"
                  style={{ backgroundColor: primaryColor, borderColor }}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="px-8 py-3 text-lg"
                  style={{ borderColor, color: textColor }}
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        );

      case 'minimal':
        return (
          <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor }}>
            <div className="text-center max-w-4xl mx-auto px-6">
              <h1 className={`text-6xl md:text-8xl font-light mb-8 ${fontSize}`} style={{ color: textColor }}>
                {answers.businessName || 'Minimal'}
              </h1>
              <p className={`text-lg md:text-xl mb-12 opacity-70 ${fontSize}`} style={{ color: textColor }}>
                {answers.tagline || 'Less is more'}
              </p>
              <Button variant="ghost" size={'default' as any} className="text-lg px-8 py-3 border-b-2" style={{ borderColor }}>
                Explore
              </Button>
            </div>
          </div>
        );

      case 'bold':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
            <div className="text-center max-w-5xl mx-auto px-6">
              <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className={`text-7xl md:text-9xl font-black mb-8 text-white ${fontSize}`}
              >
                {answers.businessName || 'BOLD'}
              </motion.h1>
              <p className={`text-2xl md:text-3xl mb-12 text-white/80 ${fontSize}`}>
                {answers.tagline || 'Make a statement'}
              </p>
              <Button size={'default' as any} className="px-12 py-4 text-xl font-bold bg-yellow-400 text-black hover:bg-yellow-300">
                TAKE ACTION
              </Button>
            </div>
          </div>
        );

      case 'elegant':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
            <div className="text-center max-w-4xl mx-auto px-6">
              <div className="mb-8">
                <Star className="w-12 h-12 mx-auto text-gold-500 mb-4" style={{ color: accentColor }} />
              </div>
              <h1 className={`text-5xl md:text-7xl font-serif mb-8 text-gray-800 ${fontSize}`}>
                {answers.businessName || 'Elegant'}
              </h1>
              <p className={`text-xl md:text-2xl mb-12 text-gray-600 italic ${fontSize}`}>
                {answers.tagline || 'Timeless sophistication'}
              </p>
              <Button variant="outline" size={'default' as any} className="px-8 py-3 text-lg border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white">
                Discover More
              </Button>
            </div>
          </div>
        );

      case 'creative':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
            <div className="text-center max-w-5xl mx-auto px-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mb-8"
              >
                <Sparkles className="w-16 h-16 mx-auto text-white" />
              </motion.div>
              <h1 className={`text-6xl md:text-8xl font-bold mb-8 text-white ${fontSize}`}>
                {answers.businessName || 'Creative'}
              </h1>
              <p className={`text-2xl md:text-3xl mb-12 text-white/90 ${fontSize}`}>
                {answers.tagline || 'Unleash your imagination'}
              </p>
              <Button size={'default' as any} className="px-10 py-4 text-xl font-bold bg-white text-purple-600 hover:bg-gray-100">
                Get Creative
              </Button>
            </div>
          </div>
        );

      case 'tech':
        return (
          <div className="min-h-screen flex items-center justify-center bg-black text-green-400">
            <div className="text-center max-w-5xl mx-auto px-6">
              <div className="mb-8 font-mono text-sm opacity-60">
                {'> initializing_system...'}
              </div>
              <h1 className={`text-6xl md:text-8xl font-mono font-bold mb-8 ${fontSize}`}>
                {answers.businessName || 'TECH_CO'}
              </h1>
              <p className={`text-xl md:text-2xl mb-12 font-mono ${fontSize}`}>
                {answers.tagline || '// Building the future'}
              </p>
              <Button size={'default' as any} className="px-8 py-3 text-lg font-mono bg-green-400 text-black hover:bg-green-300">
                {'> execute_command'}
              </Button>
            </div>
          </div>
        );

      case 'gradient':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
            <div className="text-center max-w-5xl mx-auto px-6">
              <motion.h1
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className={`text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent ${fontSize}`}
                style={{ backgroundSize: "200% 200%" }}
              >
                {answers.businessName || 'Gradient'}
              </motion.h1>
              <p className={`text-2xl md:text-3xl mb-12 text-white/90 ${fontSize}`}>
                {answers.tagline || 'Colors of innovation'}
              </p>
              <Button size={'default' as any} className="px-10 py-4 text-xl font-bold bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                Explore Colors
              </Button>
            </div>
          </div>
        );

      case 'glassmorphism':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
            <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
              <CardContent className="p-12 text-center">
                <h1 className={`text-5xl md:text-7xl font-bold mb-8 text-white ${fontSize}`}>
                  {answers.businessName || 'Glass'}
                </h1>
                <p className={`text-xl md:text-2xl mb-12 text-white/80 ${fontSize}`}>
                  {answers.tagline || 'Transparent excellence'}
                </p>
                <Button size={'default' as any} className="px-8 py-3 text-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                  See Through
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'animated':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="text-center max-w-5xl mx-auto px-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className={`text-6xl md:text-8xl font-bold mb-8 text-white ${fontSize}`}
              >
                {(answers.businessName || 'Animated').split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className={`text-2xl md:text-3xl mb-12 text-white/80 ${fontSize}`}
              >
                {answers.tagline || 'Motion in every pixel'}
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size={'default' as any} className="px-10 py-4 text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Animate Now
                </Button>
              </motion.div>
            </div>
          </div>
        );

      case 'premium':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
            <div className="text-center max-w-4xl mx-auto px-6">
              <div className="mb-8">
                <Trophy className="w-16 h-16 mx-auto text-gold-400" style={{ color: accentColor }} />
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gold-400 to-yellow-600 bg-clip-text text-transparent ${fontSize}`}>
                {answers.businessName || 'Premium'}
              </h1>
              <p className={`text-xl md:text-2xl mb-12 text-gray-300 ${fontSize}`}>
                {answers.tagline || 'Excellence redefined'}
              </p>
              <Button size={'default' as any} className="px-8 py-3 text-lg bg-gradient-to-r from-gold-400 to-yellow-600 text-black font-bold hover:from-gold-300 hover:to-yellow-500">
                Experience Premium
              </Button>
            </div>
          </div>
        );

      case '3d-tech':
        return (
          <div className="relative z-10">
            <HorizonHeroSection
              title={answers.businessName || 'Your Business'}
              subtitle1={answers.tagline || 'Your vision'}
              subtitle2="our expertise"
            />
          </div>
        );

      case '3d-designali':
        return (
          <div className="relative z-10">
            <HeroDesignAli
              title={`Your complete platform for the ${answers.businessType || 'Business'}.`}
              subtitle={`Welcome to my creative playground! I'm ${answers.businessName || 'Your Company'}`}
              typewriterStrings={getTypewriterStrings()}
              onStartClick={() => console.log('Start button clicked')}
              onBookCallClick={() => console.log('Book call clicked')}
            />
          </div>
        );

      case '3d-futuristic':
        return (
          <div className="relative z-10">
            <HeroFuturistic
              title={answers.businessName || 'Build Your Dreams'}
              subtitle={answers.tagline || 'AI-powered creativity for the next generation.'}
              buttonText="Scroll to explore"
              onButtonClick={() => console.log('Futuristic button clicked')}
            />
          </div>
        );

      case '3d-scroll-expansion':
        return (
          <div className="relative z-10">
            <ScrollExpandMedia
              mediaType="video"
              mediaSrc="https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1"
              posterSrc="https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg"
              bgImageSrc="https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS"
              title={`${answers.businessName || 'Immersive'} Experience`}
              date={answers.businessType || 'Digital Journey'}
              scrollToExpand="Scroll to Expand"
              textBlend={false}
            >
              <div className="max-w-4xl mx-auto relative z-20">
                <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                  About {answers.businessName || 'Our Company'}
                </h2>
                <p className="text-lg mb-8 text-black dark:text-white">
                  {answers.description || 'Experience the future of business with our innovative solutions.'}
                </p>
              </div>
            </ScrollExpandMedia>
          </div>
        );

      case '3d-background-paths':
        return (
          <div className="relative z-10">
            <BackgroundPaths
              title={answers.businessName || 'Background Paths'}
              subtitle={answers.tagline || 'Dynamic animated backgrounds'}
              buttonText="Discover Excellence"
              onButtonClick={() => console.log('Background paths button clicked')}
            />
          </div>
        );

      case '3d-container-scroll':
        return (
          <div className="relative z-10">
            <HeroScroll
              title={`Unleash the power of ${answers.businessType || 'Innovation'}`}
              subtitle={answers.businessName || 'Scroll Animations'}
              imageSrc="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1920&auto=format&fit=crop"
              onButtonClick={() => console.log('Container scroll button clicked')}
            />
          </div>
        );

      default:
        return (
          <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor }}>
            <div className="text-center max-w-4xl mx-auto px-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-8" style={{ color: textColor }}>
                {answers.businessName || 'Your Business'}
              </h1>
              <p className="text-xl md:text-2xl mb-12 opacity-80" style={{ color: textColor }}>
                {answers.tagline || 'Your vision, our expertise'}
              </p>
              <Button style={{ backgroundColor: primaryColor }}>
                Get Started
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className={`w-full ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {renderHeroByDesignStyle()}
    </motion.div>
  );
};

export default HeroSection;
