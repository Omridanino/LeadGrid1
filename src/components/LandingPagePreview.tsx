
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
      <div className="w-full min-h-screen" style={{ position: 'relative', backgroundColor: currentColors.background }}>
        {/* Hero Section */}
        <div 
          className="text-center py-20 px-8 relative"
          style={{ background: currentColors.heroBackground || currentColors.background }}
        >
          <div className="max-w-4xl mx-auto">
            {content?.hero?.badge && (
              <div className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold bg-white/10 backdrop-blur-sm border border-white/20">
                <span style={{ color: currentColors.accent }}>{content.hero.badge}</span>
              </div>
            )}
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: currentColors.headlineColor }}
            >
              {content?.hero?.title || formData?.businessName || 'דף הנחיתה שלך'}
            </h1>
            {content?.hero?.subtitle && (
              <h2 
                className="text-xl md:text-2xl mb-8"
                style={{ color: currentColors.subheadlineColor }}
              >
                {content.hero.subtitle}
              </h2>
            )}
            {content?.hero?.description && (
              <p 
                className="text-lg mb-8 leading-relaxed"
                style={{ color: currentColors.text }}
              >
                {content.hero.description}
              </p>
            )}
            <div className="flex gap-4 justify-center flex-wrap">
              {content?.hero?.button1Text && (
                <button 
                  className="px-8 py-4 rounded-xl font-semibold text-lg transition hover:scale-105"
                  style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                >
                  {content.hero.button1Text}
                </button>
              )}
              {content?.hero?.button2Text && (
                <button 
                  className="px-8 py-4 rounded-xl font-semibold text-lg transition hover:scale-105 border-2"
                  style={{ 
                    backgroundColor: 'transparent', 
                    color: currentColors.secondary,
                    borderColor: currentColors.secondary
                  }}
                >
                  {content.hero.button2Text}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Emotional Section */}
        {content?.emotional && (
          <EmotionalSection 
            content={{ emotionalSection: content.emotional }}
            currentColors={currentColors}
            formData={formData}
          />
        )}

        {/* Services Section */}
        {content?.services && (
          <section className="py-20 px-8" style={{ backgroundColor: '#1a1a2e' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4" style={{ color: currentColors.featuresColor }}>
                  {content.services.title}
                </h2>
                {content.services.subtitle && (
                  <p className="text-xl" style={{ color: currentColors.featuresTextColor }}>
                    {content.services.subtitle}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.services.items?.map((service: any, index: number) => (
                  <div key={index} className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: currentColors.primary }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    {service.price && (
                      <p className="text-xl font-semibold mb-4" style={{ color: currentColors.accent }}>
                        {service.price}
                      </p>
                    )}
                    {service.features && (
                      <ul className="space-y-2">
                        {service.features.map((feature: string, fIndex: number) => (
                          <li key={fIndex} className="text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Us Section */}
        {content?.whyUs && (
          <section className="py-20 px-8" style={{ backgroundColor: '#0f0f23' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4" style={{ color: currentColors.aboutColor }}>
                  {content.whyUs.title}
                </h2>
                {content.whyUs.subtitle && (
                  <p className="text-xl" style={{ color: currentColors.aboutTextColor }}>
                    {content.whyUs.subtitle}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.whyUs.reasons?.map((reason: any, index: number) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: currentColors.primary }}>
                      {reason.title}
                    </h3>
                    <p className="text-gray-300">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        {content?.pricing && (
          <section className="py-20 px-8" style={{ backgroundColor: '#1a1a2e' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4" style={{ color: currentColors.contactColor }}>
                  {content.pricing.title}
                </h2>
                {content.pricing.subtitle && (
                  <p className="text-xl" style={{ color: currentColors.contactTextColor }}>
                    {content.pricing.subtitle}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.pricing.plans?.map((plan: any, index: number) => (
                  <div key={index} className={`bg-white/5 p-6 rounded-xl backdrop-blur-sm border ${plan.popular ? 'border-blue-500' : 'border-white/10'} relative`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">פופולרי</span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2" style={{ color: currentColors.primary }}>
                      {plan.name}
                    </h3>
                    <p className="text-3xl font-bold mb-4" style={{ color: currentColors.accent }}>
                      {plan.price}
                    </p>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <ul className="space-y-2 mb-6">
                      {plan.features?.map((feature: string, fIndex: number) => (
                        <li key={fIndex} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      className="w-full py-3 rounded-lg font-semibold transition hover:scale-105"
                      style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                    >
                      בחר תוכנית
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {content?.contact && (
          <section className="py-20 px-8" style={{ backgroundColor: '#0f0f23' }}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4" style={{ color: currentColors.contactColor }}>
                {content.contact.title}
              </h2>
              {content.contact.subtitle && (
                <p className="text-xl mb-8" style={{ color: currentColors.contactTextColor }}>
                  {content.contact.subtitle}
                </p>
              )}
              {content.contact.description && (
                <p className="text-lg mb-12 text-gray-300">{content.contact.description}</p>
              )}
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg transition hover:scale-105"
                style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
              >
                {content.contact.form?.submitText || 'צור קשר'}
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default LandingPagePreview;
