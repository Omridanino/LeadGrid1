
import React from 'react';
import { TemplateData } from '@/types/template';
import { Button } from "@/components/ui/button";
import { Star, Heart, Zap, Shield, Award, Target, Phone, Mail, MapPin } from 'lucide-react';

interface TemplatePreviewProps {
  template: TemplateData;
}

export const TemplatePreview = ({ template }: TemplatePreviewProps) => {
  const styles = template.styles || {
    primaryColor: '#1e40af',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    fontFamily: 'Arial'
  };

  const getIconComponent = (iconName: string) => {
    const icons = {
      star: Star,
      heart: Heart,
      zap: Zap,
      shield: Shield,
      award: Award,
      target: Target
    };
    return icons[iconName as keyof typeof icons] || Star;
  };

  const renderHeroSection = () => {
    const hero = template.hero;
    if (!hero) return null;

    return (
      <section 
        className="relative py-20 px-4 text-center"
        style={{ 
          backgroundColor: hero.backgroundImage ? 'transparent' : styles.primaryColor,
          backgroundImage: hero.backgroundImage ? `url(${hero.backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          width: '100%',
          margin: 0,
          minHeight: '60vh'
        }}
      >
        {hero.backgroundImage && <div className="absolute inset-0 bg-black/50" />}
        <div className="relative max-w-4xl mx-auto">
          {hero.title && (
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: styles.fontFamily }}
            >
              {hero.title}
            </h1>
          )}
          {hero.subtitle && (
            <h2 
              className="text-xl md:text-2xl mb-6 opacity-90"
              style={{ fontFamily: styles.fontFamily }}
            >
              {hero.subtitle}
            </h2>
          )}
          {hero.description && (
            <p 
              className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto"
              style={{ fontFamily: styles.fontFamily }}
            >
              {hero.description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {hero.primaryButton?.text && (
              <Button
                size="lg"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  border: '2px solid white',
                  color: 'white',
                  fontFamily: styles.fontFamily
                }}
                className="hover:bg-white/30 px-8 py-3 text-lg"
              >
                {hero.primaryButton.text}
              </Button>
            )}
            {hero.secondaryButton?.text && (
              <Button
                variant="outline"
                size="lg"
                style={{ 
                  borderColor: 'white',
                  backgroundColor: 'transparent',
                  color: 'white',
                  fontFamily: styles.fontFamily
                }}
                className="hover:bg-white/10 px-8 py-3 text-lg"
              >
                {hero.secondaryButton.text}
              </Button>
            )}
          </div>
          {hero.showVideo && hero.videoUrl && (
            <div className="mt-12">
              <div className="relative max-w-2xl mx-auto bg-black rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-0 h-0 border-l-6 border-l-white border-y-4 border-y-transparent mr-1"></div>
                    </div>
                    <p>וידאו: {hero.videoUrl}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  const renderFeaturesSection = () => {
    const features = template.features;
    if (!features || !features.items?.length) return null;

    return (
      <section 
        className="py-20 px-4"
        style={{ 
          backgroundColor: styles.backgroundColor === '#ffffff' ? '#f8fafc' : styles.backgroundColor,
          color: styles.textColor,
          width: '100%',
          margin: 0
        }}
      >
        <div className="max-w-6xl mx-auto">
          {features.title && (
            <h2 
              className="text-3xl md:text-4xl font-bold text-center mb-4"
              style={{ 
                color: styles.primaryColor,
                fontFamily: styles.fontFamily 
              }}
            >
              {features.title}
            </h2>
          )}
          {features.subtitle && (
            <p 
              className="text-lg text-center mb-12 opacity-80"
              style={{ fontFamily: styles.fontFamily }}
            >
              {features.subtitle}
            </p>
          )}
          <div className={`grid gap-8 ${
            features.layout === 'list' ? 'grid-cols-1 max-w-3xl mx-auto' :
            features.layout === 'carousel' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {features.items.map((item, index) => {
              const IconComponent = getIconComponent(item.icon);
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                  style={{ borderColor: styles.primaryColor + '20' }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: styles.primaryColor + '20' }}
                  >
                    <IconComponent 
                      className="w-8 h-8"
                      style={{ color: styles.primaryColor }}
                    />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ 
                      color: styles.primaryColor,
                      fontFamily: styles.fontFamily 
                    }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="opacity-80"
                    style={{ 
                      color: styles.textColor,
                      fontFamily: styles.fontFamily 
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  const renderContactSection = () => {
    const contact = template.contact;
    if (!contact) return null;

    return (
      <section 
        className="py-20 px-4"
        style={{ 
          backgroundColor: styles.backgroundColor === '#ffffff' ? '#f1f5f9' : styles.backgroundColor,
          color: styles.textColor,
          width: '100%',
          margin: 0
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {contact.title && (
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ 
                color: styles.primaryColor,
                fontFamily: styles.fontFamily 
              }}
            >
              {contact.title}
            </h2>
          )}
          {contact.subtitle && (
            <p 
              className="text-lg mb-12 opacity-80"
              style={{ fontFamily: styles.fontFamily }}
            >
              {contact.subtitle}
            </p>
          )}
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: styles.primaryColor }}
              >
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2" style={{ color: styles.primaryColor }}>טלפון</h3>
              <p>{contact.phone || '03-1234567'}</p>
            </div>
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: styles.primaryColor }}
              >
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2" style={{ color: styles.primaryColor }}>אימייל</h3>
              <p>{contact.email || 'info@example.com'}</p>
            </div>
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: styles.primaryColor }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2" style={{ color: styles.primaryColor }}>כתובת</h3>
              <p>{contact.address || 'רחוב הרצל 123, תל אביב'}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="השם שלכם"
                className="w-full p-4 border border-gray-300 rounded-lg"
                style={{ fontFamily: styles.fontFamily }}
              />
              <input 
                type="email" 
                placeholder="כתובת מייל"
                className="w-full p-4 border border-gray-300 rounded-lg"
                style={{ fontFamily: styles.fontFamily }}
              />
              <input 
                type="tel" 
                placeholder="מספר טלפון"
                className="w-full p-4 border border-gray-300 rounded-lg"
                style={{ fontFamily: styles.fontFamily }}
              />
              <textarea 
                placeholder="איך נוכל לעזור לכם?"
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-lg"
                style={{ fontFamily: styles.fontFamily }}
              />
              <Button
                size="lg"
                className="w-full py-4 text-lg"
                style={{ 
                  backgroundColor: styles.primaryColor,
                  fontFamily: styles.fontFamily 
                }}
              >
                שלחו הודעה
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div 
      className="min-h-screen"
      style={{ 
        fontFamily: styles.fontFamily,
        width: '100%',
        margin: 0,
        padding: 0,
        direction: 'rtl'
      }}
    >
      {renderHeroSection()}
      {renderFeaturesSection()}
      {renderContactSection()}
      
      {/* Add other sections as needed */}
      {template.emotional && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: styles.primaryColor }}>
              {template.emotional.title || 'החלום שלכם מתחיל כאן'}
            </h2>
            <p className="text-lg opacity-80">
              {template.emotional.description || 'אנחנו כאן כדי להגשים את החלום שלכם ולהביא אתכם למקום הטוב ביותר.'}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};
