import { ColorScheme } from "./ColorEditor";
import { FormData } from "@/utils/questionnaireUtils";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: FormData;
  heroImage?: string;
  elements: any[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements }: LandingPagePreviewProps) => {
  const finalHeroImage = formData.heroStyle === 'image' && heroImage ? heroImage : null;
  
  const shouldShowSection = (sectionId: string) => {
    if (!formData.selectedElements || formData.selectedElements.length === 0) {
      return true; // Show all sections if none selected
    }
    return formData.selectedElements.includes(sectionId);
  };

  const getStylesByDesignStyle = () => {
    switch (formData.designStyle) {
      case 'storytelling':
        return getStorytellingStyles();
      case 'minimal':
        return getMinimalStyles();
      default: // '3d'
        return get3DStyles();
    }
  };

  const get3DStyles = () => ({
    background: `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%)`,
    color: currentColors.text,
    fontFamily: "'Inter', sans-serif"
  });

  const getStorytellingStyles = () => ({
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #4a6741 100%)',
    color: '#ecf0f1',
    fontFamily: "'Playfair Display', Georgia, serif"
  });

  const getMinimalStyles = () => ({
    background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)',
    color: '#f7fafc',
    fontFamily: "'Inter', -apple-system, sans-serif"
  });

  const renderHeroSection = () => (
    <div className="relative min-h-[80vh] flex items-center justify-center text-center px-8 py-16" 
         style={{
           background: finalHeroImage 
             ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${finalHeroImage}')` 
             : getStylesByDesignStyle().background,
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="max-w-5xl mx-auto z-10">
        <span className={`inline-block px-6 py-3 mb-8 rounded-full text-lg font-medium ${
          formData.designStyle === 'storytelling' 
            ? 'bg-white/20 text-white border-2 border-white/30'
            : formData.designStyle === 'minimal'
            ? 'bg-gray-900/50 text-white border border-gray-400'
            : 'bg-white/20 text-white'
        }`}>
          {content.badge}
        </span>
        <h1 className={`font-bold mb-8 leading-tight ${
          formData.designStyle === 'storytelling' 
            ? 'text-6xl md:text-7xl text-white'
            : formData.designStyle === 'minimal'
            ? 'text-5xl md:text-6xl text-white font-light'
            : 'text-5xl md:text-6xl text-white'
        }`}>
          {content.headline}
        </h1>
        <p className={`mb-12 leading-relaxed ${
          formData.designStyle === 'storytelling' 
            ? 'text-2xl md:text-3xl text-white/90 font-light'
            : formData.designStyle === 'minimal'
            ? 'text-xl md:text-2xl text-white/80 font-light'
            : 'text-xl md:text-2xl text-white/90'
        }`}>
          {content.subheadline}
        </p>
        <a href="#contact" className={`inline-block px-12 py-5 font-bold text-xl transition-all duration-300 ${
          formData.designStyle === 'storytelling' 
            ? 'bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-2xl hover:shadow-red-500/50 hover:scale-105'
            : formData.designStyle === 'minimal'
            ? 'bg-white text-gray-900 border-2 border-white hover:bg-transparent hover:text-white'
            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-2xl hover:scale-105'
        }`}>
          {content.cta}
        </a>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {Object.entries(content.stats).map(([key, value]) => (
            <div key={key} className={`text-center p-6 rounded-2xl ${
              formData.designStyle === 'storytelling' 
                ? 'bg-white/10 backdrop-blur-lg border border-white/20'
                : formData.designStyle === 'minimal'
                ? 'bg-gray-900/30 border border-gray-600'
                : 'bg-white/10 backdrop-blur-lg'
            }`}>
              <div className={`font-bold mb-2 ${
                formData.designStyle === 'storytelling' 
                  ? 'text-4xl text-white'
                  : formData.designStyle === 'minimal'
                  ? 'text-3xl text-white'
                  : 'text-3xl text-white'
              }`}>
                {value}
              </div>
              <div className={`font-medium ${
                formData.designStyle === 'storytelling' 
                  ? 'text-lg text-white/80'
                  : formData.designStyle === 'minimal'
                  ? 'text-sm text-white/70 uppercase tracking-wide'
                  : 'text-lg text-white/80'
              }`}>
                {key}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderWhyChooseSection = () => (
    <div className="py-16 px-8 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">למה לבחור בנו?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.whyChooseUs.items.map((item: any) => (
            <div key={item.text} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-2xl text-purple-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">אודותינו</h2>
        <p className="text-gray-700 leading-relaxed">
          {content.aboutText}
        </p>
      </div>
    </div>
  );

  const renderServicesSection = () => (
    <div className="py-16 px-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">השירותים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example service items - replace with actual data */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">שירות 1</h3>
            <p className="text-gray-600">תיאור שירות 1.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">שירות 2</h3>
            <p className="text-gray-600">תיאור שירות 2.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">שירות 3</h3>
            <p className="text-gray-600">תיאור שירות 3.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTestimonialsSection = () => (
    <div className="py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">מה הלקוחות אומרים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.testimonials.map((testimonial: any) => (
            <div key={testimonial.name} className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="text-purple-600 text-2xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStorySection = () => (
    <div className="py-16 px-8 bg-purple-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">הסיפור שלנו</h2>
        <p className="text-gray-700 leading-relaxed">
          {content.storyText}
        </p>
      </div>
    </div>
  );

  const renderValuesSection = () => (
    <div className="py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">הערכים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example value items - replace with actual data */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">ערך 1</h3>
            <p className="text-gray-600">תיאור ערך 1.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">ערך 2</h3>
            <p className="text-gray-600">תיאור ערך 2.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">ערך 3</h3>
            <p className="text-gray-600">תיאור ערך 3.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProblemSolutionSection = () => (
    <div className="py-16 px-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">בעיה ופתרון</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example problem/solution items - replace with actual data */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">בעיה</h3>
            <p className="text-gray-600">תיאור בעיה.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">פתרון</h3>
            <p className="text-gray-600">תיאור פתרון.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPricingSection = () => (
    <div className="py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">תמחור</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example pricing tiers - replace with actual data */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">בסיסי</h3>
            <p className="text-gray-600">תכונות בסיסיות.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">סטנדרטי</h3>
            <p className="text-gray-600">תכונות סטנדרטיות.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">פרימיום</h3>
            <p className="text-gray-600">תכונות פרימיום.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFAQSection = () => (
    <div className="py-16 px-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">שאלות נפוצות</h2>
        <div className="space-y-4">
          {content.faq.map((item: any) => (
            <div key={item.question} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">צור קשר</h2>
        <p className="text-gray-700 leading-relaxed">
          צרו קשר לקבלת מידע נוסף או הצעת מחיר.
        </p>
        <div className="mt-8">
          {formData.contactInfo}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={getStylesByDesignStyle()}>
      {renderHeroSection()}
      
      {shouldShowSection('why-choose') && renderWhyChooseSection()}
      {shouldShowSection('about') && renderAboutSection()}
      {shouldShowSection('services') && renderServicesSection()}
      {shouldShowSection('testimonials') && renderTestimonialsSection()}
      {shouldShowSection('story') && formData.designStyle === 'storytelling' && renderStorySection()}
      {shouldShowSection('values') && formData.designStyle === 'storytelling' && renderValuesSection()}
      {shouldShowSection('problem-solution') && formData.designStyle === 'minimal' && renderProblemSolutionSection()}
      {shouldShowSection('pricing') && formData.designStyle === 'minimal' && renderPricingSection()}
      {shouldShowSection('faq') && renderFAQSection()}
      {shouldShowSection('contact') && renderContactSection()}
    </div>
  );
};

export default LandingPagePreview;
