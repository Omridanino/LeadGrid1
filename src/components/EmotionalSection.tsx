
import React from 'react';
import { ColorScheme } from "@/types/colors";
import { Button } from "@/components/ui/button";

interface EmotionalSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
}

const EmotionalSection = ({ content, currentColors, formData }: EmotionalSectionProps) => {
  const emotionalSection = content?.emotionalSection || {
    title: 'הגיע הזמן לפעול',
    subtitle: 'אל תחמיץ את ההזדמנות הזו',
    text: 'הצטרף אלינו עוד היום והתחל את המסע שלך להצלחה',
    badge: 'מוגבל בזמן',
    backgroundColor: '#1e1e2e',
    buttons: [{ id: '1', text: 'התחל עכשיו', style: 'primary', visible: true }]
  };

  const getButtonStyle = (style: string) => {
    switch (style) {
      case 'primary':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'secondary':
        return 'bg-gray-600 hover:bg-gray-700 text-white';
      case 'outline':
        return 'border border-white text-white hover:bg-white hover:text-black';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  return (
    <section 
      className="py-16 px-4 text-center"
      style={{ 
        backgroundColor: emotionalSection.backgroundColor || '#1e1e2e',
        color: content?.colors?.emotionalText || '#ffffff'
      }}
    >
      <div className="container mx-auto max-w-4xl">
        {emotionalSection.badge && (
          <div className="inline-block px-4 py-2 bg-red-600 text-white text-sm rounded-full mb-6">
            {emotionalSection.badge}
          </div>
        )}
        
        <h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: content?.colors?.emotionalTitle || '#ffffff' }}
        >
          {emotionalSection.title}
        </h2>
        
        {emotionalSection.subtitle && (
          <h3 className="text-xl md:text-2xl text-gray-300 mb-6">
            {emotionalSection.subtitle}
          </h3>
        )}
        
        {emotionalSection.text && (
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {emotionalSection.text}
          </p>
        )}
        
        <div className="flex flex-wrap gap-4 justify-center">
          {emotionalSection.buttons?.map((button: any) => 
            button.visible && (
              <Button
                key={button.id}
                className={`px-8 py-3 text-lg rounded-lg transition-all duration-300 ${getButtonStyle(button.style)}`}
              >
                {button.text}
              </Button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
