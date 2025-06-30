
import { useState, useRef, useEffect } from 'react';
import { ColorScheme } from "@/types/colors";
import { HeroSection } from "./preview/HeroSection";
import { NavigationSection } from "./preview/NavigationSection";
import ModernFeaturesSection from "./ModernFeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage?: string;
  elements: string[];
}

const LandingPagePreview = ({ 
  content, 
  currentColors, 
  formData, 
  heroImage, 
  elements 
}: LandingPagePreviewProps) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      if (heroRef.current && scrollPosition < heroRef.current.offsetTop + heroRef.current.offsetHeight) {
        setActiveSection('hero');
      } else if (featuresRef.current && scrollPosition < featuresRef.current.offsetTop + featuresRef.current.offsetHeight) {
        setActiveSection('features');
      } else if (testimonialsRef.current) {
        setActiveSection('testimonials');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const refs = {
      hero: heroRef,
      features: featuresRef,
      testimonials: testimonialsRef,
    };
    
    const targetRef = refs[sectionId as keyof typeof refs];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <NavigationSection 
        formData={formData}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      
      <div ref={heroRef}>
        <HeroSection 
          content={content}
          currentColors={currentColors}
          formData={formData}
          heroImage={heroImage}
        />
      </div>

      {elements.includes('features') && (
        <div ref={featuresRef}>
          <ModernFeaturesSection 
            content={content?.featuresSection}
            currentColors={currentColors}
            formData={formData}
          />
        </div>
      )}

      {elements.includes('testimonials') && (
        <div ref={testimonialsRef}>
          <TestimonialsSection 
            content={content?.testimonialsSection}
            currentColors={currentColors}
            formData={formData}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LandingPagePreview;
