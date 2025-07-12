
import { generatePageHTML } from "@/utils/pageGenerator";
import { ColorScheme } from "@/types/colors";


interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  elements: string[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements }: LandingPagePreviewProps) => {
  console.log('=== LandingPagePreview START ===');
  console.log('LandingPagePreview - content received:', content);
  console.log('LandingPagePreview - formData received:', formData);
  console.log('LandingPagePreview - content?.whyUs:', content?.whyUs);
  console.log('LandingPagePreview - content?.whatWeGive:', content?.whatWeGive);
  console.log('LandingPagePreview - content?.gallery:', content?.gallery);
  console.log('LandingPagePreview - content?.process:', content?.process);
  console.log('LandingPagePreview - formData?.selectedTemplate:', formData?.selectedTemplate);
  console.log('=== LandingPagePreview ANALYSIS ===');
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
    // Prioritize generated content over template defaults
    const templateWithContent = {
      ...formData.selectedTemplate,
      features: content?.features || formData.selectedTemplate.features,
      hero: content?.hero || formData.selectedTemplate.hero,
      emotional: content?.emotional || formData.selectedTemplate.emotional,
      about: content?.about || formData.selectedTemplate.about,
      // For new sections, prioritize generated content since template might not have them
      whyUs: content?.whyUs || formData.selectedTemplate.whyUs || null,
      whatWeGive: content?.whatWeGive || formData.selectedTemplate.whatWeGive || null,
      gallery: content?.gallery || formData.selectedTemplate.gallery || null,
      process: content?.process || formData.selectedTemplate.process || null,
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
    console.log('Has whyUs?', !!templateWithContent.whyUs, templateWithContent.whyUs);
    console.log('Has whatWeGive?', !!templateWithContent.whatWeGive, templateWithContent.whatWeGive);
    console.log('Has gallery?', !!templateWithContent.gallery, templateWithContent.gallery);
    console.log('Has process?', !!templateWithContent.process, templateWithContent.process);
    console.log('Content prop:', content);
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

  // If no selectedTemplate but we have content, create a basic template structure
  if (!formData?.selectedTemplate && content) {
    const basicTemplate = {
      id: 'generated-template',
      category: 'בסיסי',
      hero: content.hero || {},
      emotional: content.emotional || {},
      whyUs: content.whyUs || {},
      whatWeGive: content.whatWeGive || {},
      gallery: content.gallery || {},
      process: content.process || {},
      features: content.features || {},
      about: content.about || {},
      services: content.services || {},
      testimonials: content.testimonials || {},
      pricing: content.pricing || {},
      faq: content.faq || {},
      contact: content.contact || {},
      styles: {
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

    console.log('Using basic template with generated content:', basicTemplate);
    const htmlContent = generatePageHTML(basicTemplate);

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

  // Fallback to original hero section
  return (
    <div className="w-full h-full" style={{ 
      maxHeight: '100vh', 
      overflowY: 'auto', 
      overflowX: 'hidden',
      scrollBehavior: 'smooth'
    }}>
      <div className="w-full min-h-screen" style={{ position: 'relative' }}>
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold">תצוגה מקדימה של דף הנחיתה</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPagePreview;
