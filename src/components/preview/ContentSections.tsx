
import { StyleAwareSection } from "./StyleAwareSections";

interface ContentSectionsProps {
  content: any;
  currentColors: any;
  formData: any;
  selectedElements: string[];
}

export const ContentSections = ({ content, currentColors, formData, selectedElements }: ContentSectionsProps) => {
  // אם אין formData, לא מציגים כלום
  if (!formData || !formData.businessName) {
    return null;
  }

  return (
    <div className="w-full">
      {/* פסקת רגש */}
      <EmotionalSection 
        formData={formData}
        currentColors={currentColors}
      />
    </div>
  );
};

// רכיב פסקת רגש
const EmotionalSection = ({ formData, currentColors }: { formData: any; currentColors: any }) => {
  const generateEmotionalContent = () => {
    const businessName = formData?.businessName || 'העסק שלנו';
    const businessType = formData?.businessType || 'עסק מקצועי';
    const targetAudience = formData?.targetAudience || 'לקוחות יקרים';
    const businessValues = formData?.businessValues || 'איכות ומקצועיות';

    // יצירת תוכן רגשי מבוסס על הנתונים
    return {
      title: `${businessName} - כאן כדי להגשים את החלום שלכם`,
      content: `אנחנו ב-${businessName} מבינים שכל ${targetAudience} מחפש יותר מסתם ${businessType} רגיל. אתם מחפשים מישהו שיבין אתכם, שיעמוד לצדכם ושיעזור לכם להגיע למקום שאתם באמת רוצים להיות. עם שנים של ניסיון והתמחות, אנחנו לא רק מספקים שירות - אנחנו בונים חלומות ומגשימים חזונות. ${businessValues} זה לא רק מילים עבורנו, זה הבסיס לכל מה שאנחנו עושים. בואו נצור יחד משהו מיוחד, משהו שבאמת משנה.`
    };
  };

  const emotionalContent = generateEmotionalContent();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="standard">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* כותרת רגשית */}
          <h2 
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            style={{ color: currentColors.headlineColor }}
          >
            {emotionalContent.title}
          </h2>
          
          {/* תוכן רגשי */}
          <div 
            className="text-xl md:text-2xl leading-relaxed font-medium opacity-90"
            style={{ color: currentColors.subheadlineColor }}
          >
            {emotionalContent.content}
          </div>

          {/* אלמנט עיצובי */}
          <div className="mt-12">
            <div 
              className="w-32 h-1 mx-auto rounded-full"
              style={{ 
                background: `linear-gradient(90deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent})`
              }}
            />
          </div>
        </div>
      </div>
    </StyleAwareSection>
  );
};
