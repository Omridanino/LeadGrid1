
import { generatePageHTML } from "@/utils/pageGenerator";
import { ColorScheme } from "@/types/colors";
import { EmotionalSection } from "@/components/EmotionalSection";


interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  elements: string[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements }: LandingPagePreviewProps) => {
  // Show loading or placeholder if formData is not ready
  if (!formData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-lg">טוען את הדף שלך...</p>
        </div>
      </div>
    );
  }

  // If we have a selected template, show the generated HTML
  if (formData?.selectedTemplate) {
    // Merge the generated content with any user edits and current colors
    const templateWithContent = {
      ...formData.selectedTemplate,
      features: content?.features || formData.selectedTemplate.features,
      hero: content?.hero || formData.selectedTemplate.hero,
      about: content?.about || formData.selectedTemplate.about,
      services: content?.services || formData.selectedTemplate.services,
      testimonials: content?.testimonials || formData.selectedTemplate.testimonials,
      pricing: content?.pricing || formData.selectedTemplate.pricing,
      faq: content?.faq || formData.selectedTemplate.faq,
      contact: content?.contact || formData.selectedTemplate.contact,
      // Apply current color scheme
      styles: {
        ...formData.selectedTemplate.styles,
        ...currentColors,
        primaryColor: currentColors.primary,
        secondaryColor: currentColors.secondary,
        accentColor: currentColors.accent,
        backgroundColor: currentColors.background,
        textColor: currentColors.text,
        heroTitleColor: currentColors.headlineColor,
        heroSubtitleColor: currentColors.subheadlineColor,
        featuresTitleColor: currentColors.featuresColor,
        featuresTextColor: currentColors.featuresTextColor,
        aboutTitleColor: currentColors.aboutColor,
        aboutTextColor: currentColors.aboutTextColor,
        contactTitleColor: currentColors.contactColor,
        contactTextColor: currentColors.contactTextColor
      }
    };
    
    console.log('Template with merged content and colors:', templateWithContent);
    const htmlContent = generatePageHTML(templateWithContent);
    
    return (
      <div className="w-full h-full" style={{ 
        maxHeight: '100vh', 
        overflowY: 'auto', 
        overflowX: 'hidden',
        scrollBehavior: 'smooth'
      }}>
        <iframe
          srcDoc={htmlContent}
          className="w-full h-full border-0"
          style={{ minHeight: '100vh' }}
          title="Landing Page Preview"
        />
      </div>
    );
  }

  // Fallback to sections display - show each section individually
  return (
    <div className="w-full h-full" style={{ 
      maxHeight: '100vh', 
      overflowY: 'auto', 
      overflowX: 'hidden',
      scrollBehavior: 'smooth'
    }}>
      <div className="w-full min-h-screen" style={{ position: 'relative', backgroundColor: '#0f0f23' }}>
        {/* Hero Placeholder */}
        <div className="text-center py-20 bg-gradient-to-br from-blue-900 to-purple-900">
          <h1 className="text-4xl font-bold text-white mb-4">
            {content?.hero?.title || formData?.businessName || 'דף הנחיתה שלך'}
          </h1>
          <p className="text-xl text-gray-300">
            {content?.hero?.subtitle || 'תיאור העסק שלך יופיע כאן'}
          </p>
        </div>

        {/* Emotional Section */}
        {content?.emotional && (
          <EmotionalSection 
            content={{ emotionalSection: content.emotional }}
            currentColors={currentColors}
            formData={formData}
          />
        )}
      </div>
    </div>
  );
};

export default LandingPagePreview;
