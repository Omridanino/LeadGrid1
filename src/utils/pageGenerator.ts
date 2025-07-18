// Complete HTML Generator - Creates exact HTML from template preview with premium support
import { DesignTheme, getDefaultTheme } from '@/types/designThemes';

export const generatePageHTML = (templateData: any, designTheme?: DesignTheme) => {
  const template = templateData;
  const theme = designTheme || getDefaultTheme();
  // More robust premium detection
  const isPremium = template?.category?.includes('פרימיום') || template?.id?.includes('-pro');
  
  console.log('generatePageHTML - selected theme:', theme);
  console.log('generatePageHTML - theme styles:', theme.styles);
  
  console.log('pageGenerator - received template:', template);
  console.log('pageGenerator - whyUs data:', template.whyUs);
  console.log('pageGenerator - whatWeGive data:', template.whatWeGive);
  console.log('pageGenerator - gallery data:', template.gallery);
  console.log('pageGenerator - process data:', template.process);
  console.log('Template ID:', template.id, 'isPremium:', isPremium);

  // Helper functions for new content sections - moved to top
  // NEW SECTIONS GENERATORS - why us, what we give, process
  
  // Get design-specific styling based on selected theme
  const themeStyles = {
    primaryColor: theme.styles.primary,
    secondaryColor: theme.styles.secondary,
    accentColor: theme.styles.accent,
    backgroundColor: theme.styles.background,
    textColor: theme.styles.text,
    borderRadius: theme.styles.borderRadius,
    fontFamily: theme.styles.fontFamily,
    shadows: theme.styles.shadows || '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    heroBackground: theme.styles.heroBackground || theme.styles.background,
    heroText: theme.styles.heroText || theme.styles.text
  };

  // Override template styles with theme styles
  const effectiveStyles = {
    ...template.styles,
    ...themeStyles
  };

  const generateWhyUsSection = (whyUs: any, styles: any, isPremium: boolean) => {
    if (!whyUs || !whyUs.items || whyUs.items.length === 0) return '';
    
    if (theme.id === 'diamond-crystal') {
      return `
      <section class="why-us py-20 relative overflow-hidden" style="background: linear-gradient(135deg, hsl(240, 20%, 8%) 0%, hsl(260, 30%, 12%) 30%, hsl(280, 25%, 10%) 70%, hsl(240, 20%, 8%) 100%);">
          ${generatePremiumBackgroundHTML('diamondCrystal')}
          
          <div class="max-w-7xl mx-auto px-6 relative z-10">
              <div class="text-center mb-16">
                  ${whyUs.badge ? `<div class="inline-block px-3 py-1 text-xs font-medium rounded-full bg-black/40 border-2 border-purple-400/60 text-purple-300 shadow-lg shadow-purple-400/20 mb-4">${whyUs.badge}</div>` : ''}
                  <h2 class="text-4xl md:text-6xl font-bold mb-6 text-purple-300" style="text-shadow: 0 0 15px hsl(300, 100%, 50%), 0 0 30px hsl(180, 100%, 50%);">${whyUs.title}</h2>
                  ${whyUs.subtitle ? `<p class="text-xl md:text-2xl text-purple-100" style="opacity: 0.9;">${whyUs.subtitle}</p>` : ''}
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  ${whyUs.items.map((item: any) => `
                      <div class="relative group">
                          <div class="h-full p-8 rounded-3xl transition-all duration-300 transform hover:scale-105" style="background: linear-gradient(135deg, rgba(255, 105, 180, 0.1), rgba(0, 255, 255, 0.08)); border: 2px solid rgba(255, 105, 180, 0.3); box-shadow: 0 0 30px rgba(255, 105, 180, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.1);">
                              <div class="w-16 h-16 mb-6 flex items-center justify-center" style="background: linear-gradient(135deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%)); border: 2px solid hsl(300, 100%, 50%); clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%); box-shadow: 0 0 20px rgba(255, 105, 180, 0.6);">
                                  <i class="ri-${item.icon || 'star-line'} text-2xl text-white"></i>
                              </div>
                              <h3 class="text-xl font-bold mb-3 text-purple-300" style="text-shadow: 0 0 10px hsl(300, 100%, 50%);">${item.title}</h3>
                              <p class="text-purple-100" style="opacity: 0.9;">${item.description}</p>
                          </div>
                      </div>
                  `).join('')}
              </div>
          </div>
      </section>`;
    }
  };

  const generateWhatWeGiveSection = (whatWeGive: any, styles: any, isPremium: boolean) => {
    if (!whatWeGive || !whatWeGive.services || whatWeGive.services.length === 0) return '';
    
    if (theme.id === 'diamond-crystal') {
      return `
      <section class="what-we-give py-20 relative overflow-hidden" style="background: linear-gradient(135deg, hsl(240, 20%, 8%) 0%, hsl(260, 30%, 12%) 30%, hsl(280, 25%, 10%) 70%, hsl(240, 20%, 8%) 100%);">
          ${generatePremiumBackgroundHTML('diamondCrystal')}
          
          <div class="max-w-7xl mx-auto px-6 relative z-10">
              <div class="text-center mb-16">
                  ${whatWeGive.badge ? `<div class="inline-block px-3 py-1 text-xs font-medium rounded-full bg-black/40 border-2 border-purple-400/60 text-purple-300 shadow-lg shadow-purple-400/20 mb-4">${whatWeGive.badge}</div>` : ''}
                  <h2 class="text-4xl md:text-6xl font-bold mb-6 text-purple-300" style="text-shadow: 0 0 15px hsl(300, 100%, 50%), 0 0 30px hsl(180, 100%, 50%);">${whatWeGive.title}</h2>
                  ${whatWeGive.subtitle ? `<p class="text-xl md:text-2xl mb-8 text-purple-100" style="opacity: 0.9;">${whatWeGive.subtitle}</p>` : ''}
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  ${whatWeGive.services.map((service: any) => `
                      <div class="flex items-start space-x-4 rtl:space-x-reverse group">
                          <div class="w-12 h-12 flex items-center justify-center flex-shrink-0" style="background: linear-gradient(135deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%)); border: 2px solid hsl(300, 100%, 50%); clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%); box-shadow: 0 0 20px rgba(255, 105, 180, 0.6); color: white;">
                              <i class="ri-${service.icon || 'check-line'} text-xl text-white"></i>
                          </div>
                          <div class="flex-1">
                              <h3 class="text-xl font-bold mb-2 text-purple-300" style="text-shadow: 0 0 10px hsl(300, 100%, 50%);">${service.title}</h3>
                              <p class="text-lg text-purple-100" style="opacity: 0.9;">${service.description}</p>
                          </div>
                      </div>
                  `).join('')}
              </div>
              ${whatWeGive.image ? `
              <div class="mt-16 flex justify-center">
                  <div class="relative">
                      <div class="aspect-square flex items-center justify-center" style="background: linear-gradient(135deg, hsl(240, 20%, 8%), hsl(260, 30%, 12%)); border: 3px solid hsl(300, 100%, 50%); clip-path: polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%); box-shadow: 0 0 60px rgba(255, 105, 180, 0.5), inset 0 0 40px rgba(0, 255, 255, 0.1);">
                          <p class="text-purple-300 text-center p-8 text-lg" style="text-shadow: 0 0 15px hsl(300, 100%, 50%);">${whatWeGive.image}</p>
                      </div>
                  </div>
              </div>
              ` : ''}
          </div>
      </section>`;
    }
    
    return `
    <section class="what-we-give py-20" style="background: ${isPremium ? (theme.id === 'luxury-premium' ? 'linear-gradient(135deg, hsl(0, 0%, 2%) 0%, hsl(45, 15%, 5%) 50%, hsl(0, 0%, 3%) 100%)' : 'linear-gradient(135deg, rgba(30,64,175,0.9), rgba(55,65,81,0.9))') : styles.backgroundColor};">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                ${whatWeGive.badge ? `<div class="inline-block px-3 py-1 text-xs ${isPremium ? (theme.id === 'luxury-premium' ? 'bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-200 border border-yellow-500/30' : 'bg-blue-600/20 text-blue-300 border border-blue-500/30') : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'} rounded-full mb-4">${whatWeGive.badge}</div>` : ''}
                <h2 class="text-4xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor};">${whatWeGive.title}</h2>
                ${whatWeGive.subtitle ? `<p class="text-xl" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor}; opacity: 0.8;">${whatWeGive.subtitle}</p>` : ''}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${whatWeGive.services.map((service: any) => `
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 ${isPremium ? (theme.id === 'luxury-premium' ? 'bg-black/20 backdrop-blur-sm border-yellow-500/30' : 'bg-white/10 backdrop-blur-sm border-white/20') : ''}">
                        <div class="text-4xl mb-4" style="color: ${isPremium ? (theme.id === 'luxury-premium' ? '#fbbf24' : getPremiumTextColor(templateData.id)) : styles.primaryColor};">
                            <i class="ri-${service.icon}"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor};">${service.title}</h3>
                        <p style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor}; opacity: 0.8;">${service.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
  };

  const generateProcessSection = (process: any, styles: any, isPremium: boolean) => {
    if (!process || !process.steps || process.steps.length === 0) return '';
    return `
    <!-- Process Section -->
    <section class="process py-20" style="background: ${isPremium ? 'linear-gradient(135deg, rgba(55,65,81,0.9), rgba(30,64,175,0.9))' : styles.backgroundColor};">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                ${process.badge ? `<div class="inline-block px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 mb-4">${process.badge}</div>` : ''}
                <h2 class="text-4xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor};">${process.title}</h2>
                ${process.subtitle ? `<p class="text-xl" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor}; opacity: 0.8;">${process.subtitle}</p>` : ''}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${process.steps.map((step: any, index: number) => `
                    <div class="relative group">
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 ${isPremium ? 'bg-white/10 backdrop-blur-sm border-white/20' : ''}">
                            <div class="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                <span class="text-2xl font-bold text-white">${index + 1}</span>
                            </div>
                            <h3 class="text-xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor};">${step.title}</h3>
                            <p class="text-lg mb-4" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor}; opacity: 0.8;">${step.description}</p>
                            ${step.duration ? `<p class="text-sm font-medium" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor}; opacity: 0.6;">${step.duration}</p>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
  };

  const generateGallerySection = (gallery: any, styles: any, isPremium: boolean) => {
    if (!gallery || !gallery.images || gallery.images.length === 0) return '';
    return `
    <section class="py-20" style="background: ${isPremium ? 'linear-gradient(135deg, rgba(55,65,81,0.9), rgba(30,64,175,0.9))' : styles.backgroundColor};">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                ${gallery.badge ? `<div class="inline-block px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 mb-4">${gallery.badge}</div>` : ''}
                <h2 class="text-4xl font-bold mb-4 text-white">${gallery.title}</h2>
                ${gallery.subtitle ? `<p class="text-xl text-slate-300">${gallery.subtitle}</p>` : ''}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-${gallery.columns || 3} gap-6">
                ${gallery.images.map((img: any) => `
                    <div class="group overflow-hidden rounded-lg shadow-lg">
                        <img src="${img.src}" alt="${img.alt}" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                        ${img.caption ? `<div class="p-4 bg-white/10"><p class="text-white text-sm">${img.caption}</p></div>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
  };

  const generateHeadingSection = (heading: any, styles: any, isPremium: boolean) => {
    if (!heading || !heading.title) return '';
    return `
    <section class="py-16" style="background: ${isPremium ? 'linear-gradient(135deg, rgba(55,65,81,0.9), rgba(30,64,175,0.9))' : styles.backgroundColor};">
        <div class="max-w-4xl mx-auto px-6 text-${heading.alignment}">
            ${heading.badge ? `<div class="inline-block px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 mb-4">${heading.badge}</div>` : ''}
            <h2 class="${heading.size === 'small' ? 'text-2xl' : heading.size === 'medium' ? 'text-3xl' : heading.size === 'large' ? 'text-4xl' : 'text-6xl'} font-bold mb-4 text-white">${heading.title}</h2>
            ${heading.subtitle ? `<p class="text-xl text-slate-300">${heading.subtitle}</p>` : ''}
        </div>
    </section>`;
  };

  const generateTextSection = (text: any, styles: any, isPremium: boolean) => {
    if (!text || !text.content) return '';
    return `
    <section class="py-16" style="background: ${isPremium ? 'linear-gradient(135deg, rgba(55,65,81,0.9), rgba(30,64,175,0.9))' : styles.backgroundColor};">
        <div class="max-w-4xl mx-auto px-6 text-${text.alignment}">
            ${text.badge ? `<div class="inline-block px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 mb-4">${text.badge}</div>` : ''}
            ${text.title ? `<h3 class="text-2xl font-bold mb-4 text-white">${text.title}</h3>` : ''}
            <div class="${text.textSize === 'small' ? 'text-sm' : text.textSize === 'medium' ? 'text-base' : 'text-lg'} text-slate-300 leading-relaxed">
                ${text.content.split('\n').map((line: string) => `<p class="mb-4">${line}</p>`).join('')}
            </div>
        </div>
    </section>`;
  };

  const generateVideoSection = (video: any, styles: any, isPremium: boolean) => { 
    if (!video || !video.url) return '';
    return `<section class="py-20" style="background: ${isPremium ? 'linear-gradient(135deg, rgba(55,65,81,0.9), rgba(30,64,175,0.9))' : styles.backgroundColor};"><div class="max-w-4xl mx-auto px-6"><h2 class="text-4xl font-bold mb-4 text-white">${video.title || 'וידאו'}</h2></div></section>`;
  };
  const generateSliderSection = (slider: any, styles: any, isPremium: boolean) => { 
    if (!slider || !slider.items || slider.items.length === 0) return '';
    return `<section class="py-20" style="background: ${isPremium ? 'linear-gradient(135deg, rgba(55,65,81,0.9), rgba(30,64,175,0.9))' : styles.backgroundColor};"><div class="max-w-6xl mx-auto px-6"><h2 class="text-4xl font-bold mb-4 text-white">${slider.title || 'סליידר'}</h2></div></section>`;
  };
  const generateListSection = (list: any, styles: any, isPremium: boolean) => { 
    if (!list || !list.items || list.items.length === 0) return '';
    return `<section class="py-16" style="background: ${isPremium ? 'linear-gradient(135deg, rgba(55,65,81,0.9), rgba(30,64,175,0.9))' : styles.backgroundColor};"><div class="max-w-4xl mx-auto px-6"><h2 class="text-3xl font-bold mb-8 text-white">${list.title || 'רשימה'}</h2></div></section>`;
  };
  const generateEmbedSection = (embed: any, styles: any, isPremium: boolean) => { 
    if (!embed || !embed.htmlCode) return '';
    return `<section class="py-16" style="background: ${isPremium ? 'linear-gradient(135deg, rgba(55,65,81,0.9), rgba(30,64,175,0.9))' : styles.backgroundColor};"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl font-bold mb-8 text-white">${embed.title || 'תוכן משובץ'}</h2></div></section>`;
  };
  const generateSocialBarSection = (social: any, styles: any, isPremium: boolean) => { 
    if (!social || !social.socialLinks || social.socialLinks.length === 0) return '';
    return `<section class="py-16" style="background: ${isPremium ? 'linear-gradient(135deg, rgba(55,65,81,0.9), rgba(30,64,175,0.9))' : styles.backgroundColor};"><div class="max-w-4xl mx-auto px-6"><h2 class="text-3xl font-bold mb-8 text-white">${social.title || 'רשתות חברתיות'}</h2></div></section>`;
  };
  
  // Premium text colors for content - now editable
  const getPremiumTextColor = (templateId: string, sectionType: string = '', customColor?: string) => {
    // If custom color is provided, use it
    if (customColor) return customColor;
    
    // Special handling for luxury-premium theme
    if (theme.id === 'luxury-premium') {
      return '#f1f5f9'; // Light gray-white for luxury premium
    }
    
    // Check for section-specific custom colors
    const sectionColors = {
      emotional: template.styles.emotionalTitleColor || template.styles.emotionalTextColor,
      features: template.styles.featuresTitleColor || template.styles.featuresTextColor,
      testimonials: template.styles.testimonialsTitleColor || template.styles.testimonialsTextColor,
      about: template.styles.aboutTitleColor || template.styles.aboutTextColor,
      pricing: template.styles.pricingTitleColor || template.styles.pricingTextColor,
      faq: template.styles.faqTitleColor || template.styles.faqTextColor,
      'final-cta': template.styles.finalCtaTitleColor || template.styles.finalCtaTextColor,
      contact: template.styles.contactTitleColor || template.styles.contactTextColor
    };
    
    if (sectionType && sectionColors[sectionType as keyof typeof sectionColors]) {
      return sectionColors[sectionType as keyof typeof sectionColors];
    }
    
    // Otherwise use template defaults
    switch (templateId) {
      case 'tech-consultant-pro':
        return 'white';
      case 'neon-academy-pro':
        return '#00f5ff';
      case 'blockchain-tech-pro':
        return '#bfdbfe';
      case 'creative-3d-pro':
        return '#374151';
      case 'authkit-tech-pro':
        return '#bfdbfe';
      case 'nft-future-pro':
        return '#e879f9';
      default:
        return 'white';
    }
  };

  // Get premium icon colors based on template
  const getPremiumIconColors = (templateId: string) => {
    // Special handling for luxury-premium theme
    if (theme.id === 'luxury-premium') {
      return 'from-yellow-400 via-yellow-500 to-yellow-600';
    }
    
    switch (templateId) {
      case 'tech-consultant-pro':
        return 'from-blue-400 to-slate-500';
      case 'neon-academy-pro':
        return 'from-cyan-400 to-purple-500';
      case 'blockchain-tech-pro':
        return 'from-blue-400 to-indigo-600';
      case 'nft-future-pro':
        return 'from-purple-400 to-pink-500';
      case 'creative-3d-pro':
        return 'from-orange-400 to-pink-400';
      case 'authkit-tech-pro':
        return 'from-blue-400 to-gray-600';
      default:
        return 'from-blue-400 to-purple-500';
    }
  };

  // Generate styling for each section based on template styles
  const getSectionStyle = (bgColor: string, bgImage?: string, isPremiumTemplate = false, templateId?: string, sectionType?: string) => {
    if (isPremiumTemplate && templateId) {
      // Use premium animated backgrounds
      const premiumBg = getPremiumAnimatedBackground(templateId, sectionType || '');
      if (premiumBg.background) {
        return `background: ${premiumBg.background}; position: relative; overflow: hidden;`;
      }
    }
    
    let style = `background-color: ${bgColor};`;
    if (bgImage) {
      style += `background-image: url(${bgImage}); background-size: cover; background-position: center; background-repeat: no-repeat;`;
    }
    return style;
  };

  // Premium animated backgrounds with CSS animations - Enhanced Luxury Premium
  const getPremiumAnimatedBackground = (templateId: string, sectionType: string) => {
    const baseStyles = {
      position: 'relative',
      overflow: 'hidden',
    };

    // Special Luxury Premium backgrounds - Much more luxurious
    if (theme.id === 'luxury-premium') {
      return {
        ...baseStyles,
        background: sectionType === 'hero' ? 
          'linear-gradient(135deg, hsl(0, 0%, 1%) 0%, hsl(0, 0%, 6%) 20%, hsl(45, 25%, 4%) 50%, hsl(38, 30%, 6%) 80%, hsl(0, 0%, 2%) 100%)' :
          sectionType === 'features' ? 
          'linear-gradient(135deg, hsl(0, 0%, 3%) 0%, hsl(45, 20%, 6%) 30%, hsl(38, 25%, 5%) 70%, hsl(0, 0%, 4%) 100%)' :
          sectionType === 'emotional' ? 
          'linear-gradient(135deg, hsl(0, 0%, 2%) 0%, hsl(45, 15%, 5%) 50%, hsl(0, 0%, 3%) 100%)' :
          sectionType === 'testimonials' ? 
          'linear-gradient(135deg, hsl(0, 0%, 4%) 0%, hsl(45, 18%, 7%) 50%, hsl(0, 0%, 5%) 100%)' :
          sectionType === 'about' ? 
          'linear-gradient(135deg, hsl(0, 0%, 3%) 0%, hsl(38, 20%, 6%) 50%, hsl(0, 0%, 4%) 100%)' :
          sectionType === 'pricing' ? 
          'linear-gradient(135deg, hsl(0, 0%, 2%) 0%, hsl(45, 22%, 8%) 30%, hsl(38, 25%, 6%) 70%, hsl(0, 0%, 3%) 100%)' :
          sectionType === 'faq' ? 
          'linear-gradient(135deg, hsl(0, 0%, 4%) 0%, hsl(45, 16%, 6%) 50%, hsl(0, 0%, 5%) 100%)' :
          sectionType === 'contact' ? 
          'linear-gradient(135deg, hsl(0, 0%, 1%) 0%, hsl(45, 28%, 8%) 50%, hsl(0, 0%, 3%) 100%)' :
          'linear-gradient(135deg, hsl(0, 0%, 3%) 0%, hsl(45, 20%, 6%) 50%, hsl(0, 0%, 4%) 100%)',
        animationType: 'luxuryPremium'
      };
    }

    // Debug log
    console.log('Getting background for template:', templateId, 'section:', sectionType);

    switch (templateId) {
      case 'diamond-crystal':
        return {
          ...baseStyles,
          background: sectionType === 'hero' ? 'linear-gradient(135deg, hsl(240, 20%, 8%) 0%, hsl(260, 30%, 12%) 30%, hsl(280, 40%, 10%) 70%, hsl(300, 35%, 8%) 100%)' :
                     sectionType === 'features' ? 'linear-gradient(to bottom, hsl(240, 20%, 8%), hsl(260, 30%, 12%))' :
                     sectionType === 'pricing' ? 'linear-gradient(to bottom, hsl(260, 30%, 12%), hsl(280, 40%, 10%))' :
                     sectionType === 'testimonials' ? 'linear-gradient(to bottom, hsl(280, 40%, 10%), hsl(300, 35%, 8%))' :
                     sectionType === 'emotional' ? 'linear-gradient(to bottom, hsl(240, 20%, 8%), hsl(280, 40%, 10%))' :
                     sectionType === 'about' ? 'linear-gradient(to bottom, hsl(260, 30%, 12%), hsl(300, 35%, 8%))' :
                     sectionType === 'contact' ? 'linear-gradient(to bottom, hsl(240, 20%, 8%), hsl(260, 30%, 12%))' :
                     sectionType === 'faq' ? 'linear-gradient(to bottom, hsl(280, 40%, 10%), hsl(240, 20%, 8%))' :
                     sectionType === 'final-cta' ? 'linear-gradient(135deg, hsl(260, 30%, 12%) 0%, hsl(280, 40%, 10%) 100%)' :
                     'linear-gradient(135deg, hsl(240, 20%, 8%) 0%, hsl(260, 30%, 12%) 100%)',
          animationType: 'diamondCrystal'
        };
      
      case 'tech-consultant-pro':
        return {
          ...baseStyles,
          background: sectionType === 'hero' ? 'linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(55, 65, 81) 50%, rgb(0, 0, 0) 100%)' :
                     sectionType === 'features' ? 'linear-gradient(to bottom, rgb(15, 23, 42), rgb(55, 65, 81))' :
                     sectionType === 'pricing' ? 'linear-gradient(to bottom, rgb(55, 65, 81), rgb(15, 23, 42))' :
                     sectionType === 'testimonials' ? 'linear-gradient(to bottom, rgb(15, 23, 42), rgb(0, 0, 0))' :
                     sectionType === 'emotional' ? 'linear-gradient(to bottom, rgb(55, 65, 81), rgb(15, 23, 42))' :
                     sectionType === 'about' ? 'linear-gradient(to bottom, rgb(30, 41, 59), rgb(15, 23, 42))' :
                     sectionType === 'contact' ? 'linear-gradient(to bottom, rgb(15, 23, 42), rgb(55, 65, 81))' :
                     sectionType === 'faq' ? 'linear-gradient(to bottom, rgb(55, 65, 81), rgb(30, 41, 59))' :
                     sectionType === 'final-cta' ? 'linear-gradient(135deg, rgb(55, 65, 81) 0%, rgb(15, 23, 42) 100%)' :
                     'linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 100%)',
          animationType: 'dynamicGradients'
        };
      
      case 'neon-academy-pro':
        return {
          ...baseStyles,
          background: sectionType === 'hero' ? 'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(124, 58, 237) 50%, rgb(0, 0, 0) 100%)' :
                     sectionType === 'features' ? 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(88, 28, 135))' :
                     sectionType === 'pricing' ? 'linear-gradient(to bottom, rgb(88, 28, 135), rgb(0, 0, 0))' :
                     sectionType === 'testimonials' ? 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(88, 28, 135))' :
                     sectionType === 'emotional' ? 'linear-gradient(to bottom, rgb(124, 58, 237), rgb(0, 0, 0))' :
                     sectionType === 'about' ? 'linear-gradient(to bottom, rgb(88, 28, 135), rgb(124, 58, 237))' :
                     sectionType === 'contact' ? 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(88, 28, 135))' :
                     sectionType === 'faq' ? 'linear-gradient(to bottom, rgb(88, 28, 135), rgb(0, 0, 0))' :
                     sectionType === 'final-cta' ? 'linear-gradient(135deg, rgb(124, 58, 237) 0%, rgb(0, 0, 0) 100%)' :
                     'linear-gradient(135deg, rgb(124, 58, 237) 0%, rgb(0, 0, 0) 100%)',
          animationType: 'advancedSparkles'
        };
      
      case 'blockchain-tech-pro':
        return {
          ...baseStyles,
          background: sectionType === 'hero' ? 'linear-gradient(135deg, rgb(30, 27, 75) 0%, rgb(30, 64, 175) 50%, rgb(124, 45, 18) 100%)' :
                     sectionType === 'features' ? 'linear-gradient(to bottom, rgb(30, 27, 75), rgb(30, 64, 175))' :
                     sectionType === 'pricing' ? 'linear-gradient(to bottom, rgb(30, 64, 175), rgb(30, 27, 75))' :
                     sectionType === 'testimonials' ? 'linear-gradient(to bottom, rgb(30, 27, 75), rgb(88, 28, 135))' :
                     sectionType === 'emotional' ? 'linear-gradient(to bottom, rgb(30, 64, 175), rgb(49, 46, 129))' :
                     sectionType === 'about' ? 'linear-gradient(to bottom, rgb(49, 46, 129), rgb(30, 27, 75))' :
                     sectionType === 'contact' ? 'linear-gradient(to bottom, rgb(30, 27, 75), rgb(30, 64, 175))' :
                     sectionType === 'faq' ? 'linear-gradient(to bottom, rgb(30, 64, 175), rgb(49, 46, 129))' :
                     sectionType === 'final-cta' ? 'linear-gradient(135deg, rgb(30, 64, 175) 0%, rgb(30, 27, 75) 100%)' :
                     'linear-gradient(135deg, rgb(49, 46, 129) 0%, rgb(30, 64, 175) 100%)',
          animationType: 'animatedPaths'
        };
      
      case 'creative-3d-pro':
        return {
          ...baseStyles,
          background: sectionType === 'hero' ? 'linear-gradient(135deg, rgb(254, 215, 170) 0%, rgb(252, 165, 165) 50%, rgb(192, 132, 252) 100%)' :
                     sectionType === 'features' ? 'linear-gradient(to bottom, rgb(254, 215, 170), rgb(252, 165, 165))' :
                     sectionType === 'pricing' ? 'linear-gradient(to bottom, rgb(252, 165, 165), rgb(192, 132, 252))' :
                     sectionType === 'testimonials' ? 'linear-gradient(to bottom, rgb(192, 132, 252), rgb(254, 215, 170))' :
                     sectionType === 'emotional' ? 'linear-gradient(to bottom, rgb(254, 215, 170), rgb(192, 132, 252))' :
                     sectionType === 'about' ? 'linear-gradient(to bottom, rgb(252, 165, 165), rgb(254, 215, 170))' :
                     sectionType === 'contact' ? 'linear-gradient(to bottom, rgb(192, 132, 252), rgb(252, 165, 165))' :
                     sectionType === 'faq' ? 'linear-gradient(to bottom, rgb(254, 215, 170), rgb(252, 165, 165))' :
                     sectionType === 'final-cta' ? 'linear-gradient(135deg, rgb(252, 165, 165) 0%, rgb(192, 132, 252) 100%)' :
                     'linear-gradient(135deg, rgb(253, 186, 116) 0%, rgb(251, 113, 133) 100%)',
          animationType: 'fluidBlob'
        };
      
      case 'authkit-tech-pro':
        return {
          ...baseStyles,
          background: sectionType === 'hero' ? 'linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(30, 64, 175) 100%)' :
                     sectionType === 'features' ? 'linear-gradient(to bottom, rgb(17, 24, 39), rgb(15, 23, 42))' :
                     sectionType === 'pricing' ? 'linear-gradient(to bottom, rgb(15, 23, 42), rgb(30, 64, 175))' :
                     sectionType === 'testimonials' ? 'linear-gradient(to bottom, rgb(30, 64, 175), rgb(17, 24, 39))' :
                     sectionType === 'emotional' ? 'linear-gradient(to bottom, rgb(15, 23, 42), rgb(30, 41, 59))' :
                     sectionType === 'about' ? 'linear-gradient(to bottom, rgb(30, 41, 59), rgb(30, 64, 175))' :
                     sectionType === 'contact' ? 'linear-gradient(to bottom, rgb(17, 24, 39), rgb(15, 23, 42))' :
                     sectionType === 'faq' ? 'linear-gradient(to bottom, rgb(30, 64, 175), rgb(30, 41, 59))' :
                     sectionType === 'final-cta' ? 'linear-gradient(135deg, rgb(30, 64, 175) 0%, rgb(15, 23, 42) 100%)' :
                     'linear-gradient(135deg, rgb(51, 65, 85) 0%, rgb(30, 64, 175) 100%)',
          animationType: 'premium3D'
        };
      
      case 'nft-future-pro':
        return {
          ...baseStyles,
          background: sectionType === 'hero' ? 'linear-gradient(135deg, rgb(88, 28, 135) 0%, rgb(168, 85, 247) 50%, rgb(30, 64, 175) 100%)' :
                     sectionType === 'features' ? 'linear-gradient(to bottom, rgb(88, 28, 135), rgb(168, 85, 247))' :
                     sectionType === 'pricing' ? 'linear-gradient(to bottom, rgb(168, 85, 247), rgb(236, 72, 153))' :
                     sectionType === 'testimonials' ? 'linear-gradient(to bottom, rgb(88, 28, 135), rgb(168, 85, 247))' :
                     sectionType === 'emotional' ? 'linear-gradient(to bottom, rgb(168, 85, 247), rgb(88, 28, 135))' :
                     sectionType === 'about' ? 'linear-gradient(to bottom, rgb(139, 92, 246), rgb(168, 85, 247))' :
                     sectionType === 'contact' ? 'linear-gradient(to bottom, rgb(168, 85, 247), rgb(236, 72, 153))' :
                     sectionType === 'faq' ? 'linear-gradient(to bottom, rgb(88, 28, 135), rgb(139, 92, 246))' :
                     sectionType === 'final-cta' ? 'linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 100%)' :
                     'linear-gradient(135deg, rgb(30, 27, 75) 0%, rgb(139, 92, 246) 100%)',
          animationType: 'holographicFlow'
        };
      
      default:
        return {
          ...baseStyles,
          background: 'linear-gradient(135deg, rgb(55, 65, 81) 0%, rgb(30, 64, 175) 100%)',
          animationType: 'dynamicGradients'
        };
    }
  };

  // Generate premium background HTML with animations - Enhanced for Luxury Premium
  const generatePremiumBackgroundHTML = (animationType: string) => {
    // Special Diamond Crystal backgrounds
    if (animationType === 'diamondCrystal') {
      return `
      <div style="position: absolute; inset: 0; overflow: hidden;">
        <!-- Diamond Crystal Particles -->
        <div style="position: absolute; inset: 0;">
          ${[...Array(30)].map((_, i) => `
            <div style="
              position: absolute;
              width: ${4 + Math.random() * 6}px;
              height: ${4 + Math.random() * 6}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              background: linear-gradient(135deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%));
              clip-path: polygon(50% 0%, 80% 25%, 100% 50%, 80% 75%, 50% 100%, 20% 75%, 0% 50%, 20% 25%);
              animation: diamondFloat ${8 + Math.random() * 12}s infinite ease-in-out ${Math.random() * 6}s;
              box-shadow: 0 0 ${12 + Math.random() * 20}px rgba(255, 105, 180, 0.7), 0 0 ${6 + Math.random() * 12}px rgba(0, 255, 255, 0.5);
              opacity: 0.9;
            "></div>
          `).join('')}
        </div>
        
        <!-- Crystal Geometric Shapes -->
        <div style="position: absolute; inset: 0;">
          ${[...Array(6)].map((_, i) => `
            <div style="
              position: absolute;
              width: ${120 + i * 25}px;
              height: ${120 + i * 25}px;
              left: ${10 + i * 13}%;
              top: ${5 + (i % 3) * 25}%;
              border: 3px solid rgba(255, 105, 180, 0.4);
              clip-path: polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%);
              background: linear-gradient(135deg, rgba(255, 105, 180, 0.1), rgba(0, 255, 255, 0.08), transparent);
              animation: crystalSpin ${25 + i * 8}s linear infinite;
              box-shadow: 0 0 30px rgba(255, 105, 180, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.15);
              opacity: 0.5;
            "></div>
          `).join('')}
        </div>
        
        <!-- Diamond Light Rays -->
        <div style="position: absolute; inset: 0; background: 
          radial-gradient(ellipse at 20% 30%, rgba(255, 105, 180, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 70%, rgba(0, 255, 255, 0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 60% 20%, rgba(255, 20, 147, 0.1) 0%, transparent 50%);
          animation: diamondPulse 10s infinite ease-in-out;
        "></div>
        
        <!-- Sparkling Effects -->
        <div style="position: absolute; inset: 0;">
          ${[...Array(15)].map((_, i) => `
            <div style="
              position: absolute;
              width: ${6 + i * 3}px;
              height: ${6 + i * 3}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              background: radial-gradient(circle, rgba(255, 105, 180, 0.8) 0%, rgba(0, 255, 255, 0.6) 50%, transparent 100%);
              clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
              animation: sparkle ${4 + i * 1.5}s infinite ease-in-out ${i * 0.3}s;
              filter: blur(0.5px);
            "></div>
          `).join('')}
        </div>
      </div>`;
    }
    
    // Special Luxury Premium backgrounds
    if (animationType === 'luxuryPremium') {
      return `
      <div style="position: absolute; inset: 0; overflow: hidden;">
        <!-- Luxury Golden Particles -->
        <div style="position: absolute; inset: 0;">
          ${[...Array(40)].map((_, i) => `
            <div style="
              position: absolute;
              width: ${3 + Math.random() * 5}px;
              height: ${3 + Math.random() * 5}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              background: linear-gradient(135deg, hsl(45, 100%, 75%), hsl(38, 100%, 60%));
              border-radius: 50%;
              animation: luxuryFloat ${6 + Math.random() * 8}s infinite ease-in-out ${Math.random() * 4}s;
              box-shadow: 0 0 ${8 + Math.random() * 15}px rgba(255, 215, 0, 0.6), 0 0 ${4 + Math.random() * 8}px rgba(255, 193, 7, 0.4);
              opacity: 0.8;
            "></div>
          `).join('')}
        </div>
        
        <!-- Luxury Geometric Shapes -->
        <div style="position: absolute; inset: 0;">
          ${[...Array(8)].map((_, i) => `
            <div style="
              position: absolute;
              width: ${100 + i * 20}px;
              height: ${100 + i * 20}px;
              left: ${8 + i * 11}%;
              top: ${10 + (i % 4) * 20}%;
              border: 2px solid rgba(255, 215, 0, 0.5);
              border-radius: ${i % 3 === 0 ? '50%' : i % 3 === 1 ? '15px' : '0%'};
              background: linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 193, 7, 0.05), transparent);
              animation: luxurySpin ${20 + i * 6}s linear infinite;
              box-shadow: 0 0 25px rgba(255, 215, 0, 0.2), inset 0 0 15px rgba(255, 215, 0, 0.1);
              opacity: 0.4;
            "></div>
          `).join('')}
        </div>
        
        <!-- Luxury Glow Effects -->
        <div style="position: absolute; inset: 0;">
          ${[...Array(10)].map((_, i) => `
            <div style="
              position: absolute;
              width: ${40 + i * 8}px;
              height: ${40 + i * 8}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, rgba(255, 193, 7, 0.2) 50%, transparent 100%);
              border-radius: 50%;
              animation: luxuryGlow ${8 + i * 2}s infinite ease-in-out ${i * 0.5}s;
              filter: blur(1px);
            "></div>
          `).join('')}
        </div>
        
        <!-- Luxury Background Gradients -->
        <div style="
          position: absolute; 
          inset: 0; 
          background: 
            radial-gradient(circle at 25% 35%, rgba(255, 215, 0, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 75% 65%, rgba(255, 193, 7, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(255, 235, 59, 0.06) 0%, transparent 50%);
          animation: luxuryPulse 8s infinite ease-in-out;
        "></div>
      </div>`;
    }
    
    switch (animationType) {
      case 'dynamicGradients':
        return `
        <div style="position: absolute; inset: 0; overflow: hidden;">
          <div style="position: absolute; inset: 0;">
            <div style="
              position: absolute; 
              inset: 0; 
              opacity: 0.7;
              background: 
                radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%);
              animation: gradientShift 12s ease-in-out infinite;
            "></div>
          </div>
          ${[...Array(12)].map((_, i) => `
            <div style="
              position: absolute;
              width: ${20 + Math.random() * 40}px;
              height: ${20 + Math.random() * 40}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              background: linear-gradient(${Math.random() * 360}deg, rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.4));
              border-radius: ${i % 3 === 0 ? '50%' : i % 3 === 1 ? '0' : '20%'};
              animation: floatGeometric ${8 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s;
              filter: blur(1px);
              opacity: 0.6;
            "></div>
          `).join('')}
        </div>`;

      case 'advancedSparkles':
        return `
        <div style="position: absolute; inset: 0; overflow: hidden;">
          ${[...Array(35)].map((_, i) => `
            <div style="
              position: absolute;
              width: ${2 + Math.random() * 4}px;
              height: ${2 + Math.random() * 4}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              background: ${['#ffffff', '#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 4)]};
              border-radius: 50%;
              animation: sparkleFloat ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s;
              filter: blur(0.5px);
              box-shadow: 0 0 6px currentColor;
            "></div>
          `).join('')}
        </div>`;

      case 'animatedPaths':
        return `
        <div style="position: absolute; inset: 0; overflow: hidden;">
          <svg style="position: absolute; inset: 0; width: 100%; height: 100%;" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="energyFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="rgba(59, 130, 246, 0)" />
                <stop offset="50%" stop-color="rgba(59, 130, 246, 0.8)" />
                <stop offset="100%" stop-color="rgba(168, 85, 247, 0)" />
              </linearGradient>
            </defs>
            ${[...Array(12)].map((_, i) => {
              const y = 100 + i * 60;
              const amplitude = 80 + Math.sin(i * 0.5) * 40;
              return `
                <path
                  d="M-100,${y} Q${200 + Math.sin(i) * 50},${y - amplitude} ${600},${y + amplitude * 0.5} T${1300},${y}"
                  stroke="url(#energyFlow1)"
                  stroke-width="${4 - i * 0.2}"
                  fill="none"
                  style="
                    animation: energyFlow ${15 + i * 2}s linear infinite;
                    stroke-dasharray: ${60 + i * 10} ${120 + i * 20};
                  "
                />
              `;
            }).join('')}
          </svg>
        </div>`;

      case 'fluidBlob':
        return `
        <div style="position: absolute; inset: 0; overflow: hidden;">
          ${[
            { size: 300, x: '15%', y: '20%', colors: ['#3b82f6', '#1d4ed8'], delay: 0, speed: 20 },
            { size: 250, x: '70%', y: '15%', colors: ['#8b5cf6', '#7c3aed'], delay: 3, speed: 25 },
            { size: 280, x: '20%', y: '70%', colors: ['#ec4899', '#db2777'], delay: 6, speed: 18 },
            { size: 200, x: '75%', y: '75%', colors: ['#06b6d4', '#0891b2'], delay: 9, speed: 22 }
          ].map((blob, i) => `
            <div style="
              position: absolute;
              width: ${blob.size}px;
              height: ${blob.size}px;
              left: ${blob.x};
              top: ${blob.y};
              background: radial-gradient(circle at 30% 30%, ${blob.colors[0]}80, ${blob.colors[1]}40);
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
              animation: fluidMorph ${blob.speed}s ease-in-out infinite ${blob.delay}s;
              filter: blur(${1 + i * 0.5}px);
              opacity: 0.7;
            "></div>
          `).join('')}
        </div>`;

      case 'premium3D':
        return `
        <div style="position: absolute; inset: 0; overflow: hidden; perspective: 1200px;">
          ${[...Array(8)].map((_, i) => {
            const size = 80 + i * 20;
            const depth = 20 + i * 10;
            return `
              <div style="
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${15 + (i % 3) * 25}%;
                top: ${15 + Math.floor(i / 3) * 20}%;
                transform-style: preserve-3d;
                animation: rotate3D ${12 + i * 2}s linear infinite;
              ">
                <div style="
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(135deg, ${['#1e40af', '#7c3aed', '#db2777', '#059669'][i % 4]}80, ${['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'][i % 4]}40);
                  transform: rotateY(0deg) translateZ(${depth}px);
                  border: 1px solid rgba(255,255,255,0.1);
                  backdrop-filter: blur(2px);
                "></div>
              </div>
            `;
          }).join('')}
        </div>`;

      case 'holographicFlow':
        return `
        <div style="position: absolute; inset: 0; overflow: hidden;">
          <div style="position: absolute; inset: 0;">
            <div style="
              position: absolute; 
              inset: 0; 
              opacity: 0.8;
              background: 
                radial-gradient(ellipse at 25% 25%, rgba(168, 85, 247, 0.5) 0%, transparent 50%),
                radial-gradient(ellipse at 75% 75%, rgba(236, 72, 153, 0.5) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%);
              animation: holographicShift 15s ease-in-out infinite;
            "></div>
          </div>
          ${[...Array(20)].map((_, i) => `
            <div style="
              position: absolute;
              width: ${15 + Math.random() * 35}px;
              height: ${15 + Math.random() * 35}px;
              left: ${Math.random() * 100}%;
              top: ${Math.random() * 100}%;
              background: linear-gradient(${Math.random() * 360}deg, rgba(168, 85, 247, 0.7), rgba(236, 72, 153, 0.5));
              border-radius: ${i % 4 === 0 ? '50%' : i % 4 === 1 ? '0' : i % 4 === 2 ? '20%' : '40% 60%'};
              animation: holographicFloat ${10 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 4}s;
              filter: blur(1.5px);
              opacity: 0.7;
            "></div>
          `).join('')}
        </div>`;

      default:
        return '';
    }
  };

  // Premium styles for different templates (exact match to components)
  const getPremiumStyles = () => {
    if (!isPremium) return '';
    
    switch (template.id) {
      case 'tech-consultant-pro':
        return `
        /* Tech Consultant Effects */
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2)) !important;
          border: 2px solid rgba(59, 130, 246, 0.5) !important;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3) !important;
        }`;
        
      case 'neon-academy-pro':
        return `
        /* Neon Academy Effects */
        .neon-text {
          color: #00f5ff !important;
          text-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff !important;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(0, 245, 255, 0.1) !important;
          border: 1px solid rgba(0, 245, 255, 0.3);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.2);
        }
        
        .cyberpunk-grid::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: grid-glow 4s ease-in-out infinite alternate;
        }
        
        @keyframes grid-glow {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(147, 51, 234, 0.2)) !important;
          border: 2px solid #00f5ff !important;
          box-shadow: 0 0 20px #00f5ff !important;
        }`;
        
      case 'blockchain-tech-pro':
        return `
        /* Blockchain Effects */
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(59, 130, 246, 0.1) !important;
          border: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
        }
        
        .particle-network::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%);
        }
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2)) !important;
          border: 2px solid rgba(59, 130, 246, 0.5) !important;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4) !important;
        }`;
        
      case 'nft-future-pro':
        return `
        /* NFT Future Effects */
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(147, 51, 234, 0.1) !important;
          border: 1px solid rgba(147, 51, 234, 0.3);
          box-shadow: 0 0 30px rgba(147, 51, 234, 0.2);
        }
        
        .holographic {
          background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff) !important;
          background-size: 200% 200%;
          animation: holographic 3s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        @keyframes holographic {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2)) !important;
          border: 2px solid rgba(147, 51, 234, 0.5) !important;
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.4) !important;
        }`;
        
      case 'creative-3d-pro':
        return `
        /* Creative 3D Effects */
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.2) !important;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          box-shadow: 
            8px 8px 16px rgba(163, 177, 198, 0.3),
            -8px -8px 16px rgba(255, 255, 255, 0.5);
        }
        
        .morphing-shape {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morph 8s ease-in-out infinite;
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(251, 113, 133, 0.3), rgba(192, 132, 252, 0.3)) !important;
          border: 2px solid rgba(251, 113, 133, 0.5) !important;
          box-shadow: 0 0 15px rgba(251, 113, 133, 0.3) !important;
        }`;
        
      case 'authkit-tech-pro':
        return `
        /* AuthKit Effects */
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(30, 64, 175, 0.1) !important;
          border: 1px solid rgba(30, 64, 175, 0.3);
          box-shadow: 0 0 20px rgba(30, 64, 175, 0.2);
        }
        
        .tech-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2)) !important;
          border: 2px solid rgba(59, 130, 246, 0.5) !important;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4) !important;
        }`;
        
      default:
        return `
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }`;
    }
  };

  // Generate complete HTML with exact Tailwind classes and styling
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.hero.title}</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: ["class"],
        theme: {
          extend: {
            colors: {
              border: 'hsl(240 5.9% 90%)',
              input: 'hsl(240 5.9% 90%)', 
              ring: 'hsl(240 5.9% 10%)',
              background: 'hsl(0 0% 100%)',
              foreground: 'hsl(240 10% 3.9%)',
              primary: {
                DEFAULT: 'hsl(240 9% 98%)',
                foreground: 'hsl(240 5.9% 10%)'
              },
              secondary: {
                DEFAULT: 'hsl(240 4.8% 95.9%)',
                foreground: 'hsl(240 5.9% 10%)'
              },
              muted: {
                DEFAULT: 'hsl(240 4.8% 95.9%)',
                foreground: 'hsl(240 3.8% 46.1%)'
              },
              accent: {
                DEFAULT: 'hsl(240 4.8% 95.9%)',
                foreground: 'hsl(240 5.9% 10%)'
              },
              card: {
                DEFAULT: 'hsl(0 0% 100%)',
                foreground: 'hsl(240 10% 3.9%)'
              }
            },
            borderRadius: {
              lg: '0.75rem',
              md: '0.5rem',
              sm: '0.25rem'
            }
          }
        }
      }
    </script>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet">
    <style>
        /* Theme-specific root variables */
        :root {
            --theme-primary: ${theme.styles.primary};
            --theme-secondary: ${theme.styles.secondary};
            --theme-accent: ${theme.styles.accent};
            --theme-background: ${theme.styles.background};
            --theme-text: ${theme.styles.text};
            --theme-border-radius: ${theme.styles.borderRadius || '8px'};
            --theme-shadow: ${theme.styles.shadows || '0 4px 6px -1px rgba(0, 0, 0, 0.1)'};
        }
        
        body {
            font-family: ${theme.styles.fontFamily || "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"};
            direction: rtl;
            background: ${theme.styles.background};
            color: ${theme.styles.text};
        }
        
        /* Apply theme colors to all sections */
        .hero { background: ${theme.styles.heroBackground || theme.styles.background} !important; }
        .emotional { background: ${theme.styles.background} !important; }
        .features { background: ${theme.styles.background} !important; }
        .testimonials { background: ${theme.styles.background} !important; }
        .about { background: ${theme.styles.background} !important; }
        .pricing { background: ${theme.styles.background} !important; }
        .faq { background: ${theme.styles.background} !important; }
        .contact { background: ${theme.styles.background} !important; }
        .final-cta { background: ${theme.styles.background} !important; }
        .footer { background: ${theme.styles.background} !important; }
        
        /* Premium Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 0.3; }
        }
        
        @keyframes float3d {
          0%, 100% { transform: translateY(0px) rotateY(0deg) scale(1); }
          50% { transform: translateY(-20px) rotateY(180deg) scale(1.1); }
        }
        
        @keyframes neonGlow {
          0%, 100% { box-shadow: 0 0 5px #8b5cf6, 0 0 10px #8b5cf6; }
          50% { box-shadow: 0 0 20px #8b5cf6, 0 0 30px #8b5cf6, 0 0 40px #8b5cf6; }
        }
        
        @keyframes particles {
          0% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.7; }
          100% { transform: translateY(0px) scale(1); opacity: 0.3; }
        }
        
        @keyframes matrixRain {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
        
        /* Premium Background Animations */
        @keyframes gradientShift {
          0%, 100% { transform: translateX(0%) rotate(0deg); }
          33% { transform: translateX(-10%) rotate(120deg); }
          66% { transform: translateX(10%) rotate(240deg); }
        }
        
        @keyframes floatGeometric {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg) scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes sparkleFloat {
          0%, 100% { 
            opacity: 0; 
            transform: translateY(0px) scale(0);
          }
          50% { 
            opacity: 1; 
            transform: translateY(-20px) scale(1.5);
          }
        }
        
        @keyframes energyFlow {
          0% { 
            stroke-dashoffset: 0;
            opacity: 0.7;
          }
          50% { 
            stroke-dashoffset: -200;
            opacity: 1;
          }
          100% { 
            stroke-dashoffset: -400;
            opacity: 0.7;
          }
        }
        
        @keyframes fluidMorph {
          0%, 100% { 
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(0deg) scale(1);
          }
          25% { 
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: rotate(90deg) scale(1.1);
          }
          50% { 
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
            transform: rotate(180deg) scale(0.9);
          }
          75% { 
            border-radius: 70% 30% 60% 40% / 40% 50% 60% 30%;
            transform: rotate(270deg) scale(1.05);
          }
        }
        
        /* Diamond Crystal Animations */
        @keyframes diamondFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg);
            opacity: 0.9;
            box-shadow: 0 0 12px rgba(255, 105, 180, 0.7), 0 0 6px rgba(0, 255, 255, 0.5);
          }
          25% { 
            transform: translateY(-15px) scale(1.1) rotate(90deg);
            opacity: 1;
            box-shadow: 0 0 20px rgba(255, 105, 180, 0.9), 0 0 12px rgba(0, 255, 255, 0.7);
          }
          50% { 
            transform: translateY(-30px) scale(1.3) rotate(180deg);
            opacity: 0.8;
            box-shadow: 0 0 25px rgba(255, 105, 180, 1), 0 0 15px rgba(0, 255, 255, 0.8);
          }
          75% { 
            transform: translateY(-15px) scale(1.1) rotate(270deg);
            opacity: 1;
            box-shadow: 0 0 18px rgba(255, 105, 180, 0.8), 0 0 10px rgba(0, 255, 255, 0.6);
          }
        }
        
        @keyframes crystalSpin {
          0% { 
            transform: rotate(0deg) scale(1);
            opacity: 0.5;
          }
          50% { 
            transform: rotate(180deg) scale(1.1);
            opacity: 0.7;
          }
          100% { 
            transform: rotate(360deg) scale(1);
            opacity: 0.5;
          }
        }
        
        @keyframes diamondPulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% { 
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }
        
        /* Luxury Premium Animations */
        @keyframes luxuryFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg);
            opacity: 0.8;
          }
          33% { 
            transform: translateY(-20px) scale(1.2) rotate(120deg);
            opacity: 1;
          }
          66% { 
            transform: translateY(-10px) scale(1.1) rotate(240deg);
            opacity: 0.9;
          }
        }
        
        @keyframes luxurySpin {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          to { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes luxuryGlow {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.3);
          }
        }
        
        @keyframes luxuryPulse {
          0%, 100% { 
            opacity: 0.8;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.1);
          }
        }
        
        @keyframes rotate3D {
          0% { 
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
          }
          25% { 
            transform: rotateX(90deg) rotateY(45deg) rotateZ(15deg) translateZ(30px);
          }
          50% { 
            transform: rotateX(180deg) rotateY(90deg) rotateZ(30deg) translateZ(60px);
          }
          75% { 
            transform: rotateX(270deg) rotateY(135deg) rotateZ(45deg) translateZ(30px);
          }
          100% { 
            transform: rotateX(360deg) rotateY(180deg) rotateZ(60deg) translateZ(0px);
          }
        }
        
        @keyframes holographicShift {
          0%, 100% { 
            transform: translateX(0%) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          33% { 
            transform: translateX(-15%) rotate(120deg) scale(1.1);
            opacity: 0.9;
          }
          66% { 
            transform: translateX(15%) rotate(240deg) scale(0.9);
            opacity: 1;
          }
        }
        
        @keyframes holographicFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-40px) rotate(180deg) scale(1.3);
            opacity: 0.9;
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-20px) scale(1.1);
            opacity: 1;
          }
        }
        
         @keyframes spin {
           from { transform: rotate(0deg); }
           to { transform: rotate(360deg); }
         }
         
         /* Neon Cyber Animations */
         @keyframes hexGlow {
           0%, 100% { 
             opacity: 0.3; 
             box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
           }
           50% { 
             opacity: 0.8; 
             box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
           }
         }
         
         @keyframes scanLine {
           0% { transform: translateX(-100%); }
           100% { transform: translateX(100%); }
         }
         
         @keyframes dataFlow {
           0% { transform: translateX(-100%); opacity: 0; }
           50% { opacity: 1; }
           100% { transform: translateX(100%); opacity: 0; }
         }
         
         @keyframes matrixFloat {
           0%, 100% { 
             transform: translateY(0px) rotate(0deg); 
             opacity: 0.4; 
           }
           50% { 
             transform: translateY(-30px) rotate(180deg); 
             opacity: 0.8; 
           }
         }
         
         @keyframes digitalRain {
           0% { transform: translateY(-200px); opacity: 0; }
           10% { opacity: 1; }
           90% { opacity: 1; }
           100% { transform: translateY(100vh); opacity: 0; }
         }
        
        /* Premium Effects */
        ${getPremiumStyles()}
        
        /* Premium sections use exact component styling with animations */
        .hero { 
            ${isPremium ? (() => {
              const bgData = getPremiumAnimatedBackground(template.id, 'hero');
              return `${bgData.background}; position: relative; overflow: hidden;`;
            })() : 'background-color: ' + template.styles.heroBackground + ';'}
            padding: 5rem 1.5rem;
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        
        .emotional { 
            ${isPremium ? (() => {
              const bgData = getPremiumAnimatedBackground(template.id, 'emotional');
              return `${bgData.background}; position: relative; overflow: hidden;`;
            })() : 'background-color: ' + template.styles.emotionalBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .features { 
            ${isPremium ? (() => {
              const bgData = getPremiumAnimatedBackground(template.id, 'features');
              return `${bgData.background}; position: relative; overflow: hidden;`;
            })() : 'background-color: ' + template.styles.featuresBackground + ';'}
            padding: 5rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .testimonials { 
            ${isPremium ? (() => {
              const bgData = getPremiumAnimatedBackground(template.id, 'testimonials');
              return `${bgData.background}; position: relative; overflow: hidden;`;
            })() : 'background-color: ' + template.styles.testimonialsBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .about { 
            ${isPremium ? (() => {
              const bgData = getPremiumAnimatedBackground(template.id, 'about');
              return `${bgData.background}; position: relative; overflow: hidden;`;
            })() : 'background-color: ' + template.styles.aboutBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .pricing { 
            ${isPremium ? (() => {
              const bgData = getPremiumAnimatedBackground(template.id, 'pricing');
              return `${bgData.background}; position: relative; overflow: hidden;`;
            })() : 'background-color: ' + template.styles.pricingBackground + ';'}
            padding: 5rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .faq { 
            ${isPremium ? (() => {
              const bgData = getPremiumAnimatedBackground(template.id, 'faq');
              return `${bgData.background}; position: relative; overflow: hidden;`;
            })() : 'background-color: ' + template.styles.faqBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .final-cta { 
            ${isPremium ? (() => {
              const bgData = getPremiumAnimatedBackground(template.id, 'final-cta');
              return `${bgData.background}; position: relative; overflow: hidden;`;
            })() : 'background-color: ' + template.styles.finalCtaBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .contact { 
            ${isPremium ? (() => {
              const bgData = getPremiumAnimatedBackground(template.id, 'contact');
              return `${bgData.background}; position: relative; overflow: hidden;`;
            })() : 'background-color: ' + template.styles.contactBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .footer { 
            ${isPremium ? 'background-color: ' + template.styles.primaryColor + ';' : 'background-color: ' + template.styles.footerBackground + ';'}
            padding: 2rem 1.5rem;
            text-align: center;
        }
        
        /* Body should match the section backgrounds */
        body {
            ${isPremium ? (() => {
              const bodyBgData = getPremiumAnimatedBackground(template.id, 'hero');
              return `background: ${bodyBgData.background}; position: relative; overflow-x: hidden;`;
            })() : `background: ${template.styles.backgroundColor || '#ffffff'};`}
            color: ${template.styles.textColor};
            margin: 0;
            padding: 0;
            font-family: system-ui, -apple-system, sans-serif;
        }
    </style>
</head>
<body class="text-foreground">

    <!-- Hero Section -->
    ${theme.id === 'diamond-crystal' ? `
    <!-- Diamond Crystal Hero -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden" style="background: linear-gradient(135deg, hsl(240, 20%, 8%) 0%, hsl(260, 30%, 12%) 30%, hsl(280, 25%, 10%) 70%, hsl(240, 20%, 8%) 100%);">
      
      <!-- Neon Grid Background -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 98px, rgba(0, 255, 255, 0.2) 100px), repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(255, 0, 255, 0.2) 100px);"></div>
      </div>
      
      <!-- Floating Neon Particles -->
      <div class="absolute inset-0">
        ${Array.from({length: 20}, (_, i) => `
          <div class="absolute rounded-full animate-pulse" style="
            width: ${2 + Math.random() * 6}px;
            height: ${2 + Math.random() * 6}px;
            background: ${i % 3 === 0 ? 'hsl(300, 100%, 50%)' : i % 3 === 1 ? 'hsl(180, 100%, 50%)' : 'hsl(60, 100%, 50%)'};
            box-shadow: 0 0 20px ${i % 3 === 0 ? 'hsl(300, 100%, 50%)' : i % 3 === 1 ? 'hsl(180, 100%, 50%)' : 'hsl(60, 100%, 50%)'};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float${i % 3} ${3 + Math.random() * 4}s ease-in-out infinite;
            z-index: 1;
          ">
            <div class="absolute inset-0 rounded-full" style="
              background: radial-gradient(circle, ${i % 3 === 0 ? 'hsl(300, 100%, 50%)' : i % 3 === 1 ? 'hsl(180, 100%, 50%)' : 'hsl(60, 100%, 50%)'} 0%, transparent 70%);
              transform: scale(3);
              opacity: 0.3;
            "></div>
          </div>
        `).join('')}
      </div>
      
      <!-- Neon Scanning Lines -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" style="
          top: 20%;
          animation: scan 3s ease-in-out infinite;
        "></div>
        <div class="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" style="
          top: 70%;
          animation: scan 4s ease-in-out infinite reverse;
        "></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div class="mb-6">
          <h1 class="text-6xl md:text-8xl font-bold mb-6" style="
            font-family: 'Orbitron', monospace;
            background: linear-gradient(45deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%), hsl(60, 100%, 50%));
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: neonGlow 2s ease-in-out infinite alternate;
            text-shadow: 0 0 15px hsl(300, 100%, 50%), 0 0 25px hsl(180, 100%, 50%);
          ">
            ${template.hero.title}
          </h1>
          <p class="text-xl md:text-2xl text-cyan-200 mb-8" style="
            text-shadow: 0 0 20px hsl(180, 100%, 50%);
            animation: flicker 3s ease-in-out infinite;
          ">
            ${template.hero.subtitle}
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#features" class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-110" style="
            background: linear-gradient(45deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%));
            color: white;
            box-shadow: 0 0 30px hsl(300, 100%, 50%), 0 0 60px hsl(180, 100%, 50%);
            border: 2px solid hsl(300, 100%, 50%);
            position: relative;
          ">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span class="relative z-10">${template.hero.button1Text || 'התחל עכשיו'}</span>
          </a>
          
          <a href="#about" class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-110" style="
            background: transparent;
            color: hsl(180, 100%, 50%);
            border: 2px solid hsl(180, 100%, 50%);
            box-shadow: 0 0 20px hsl(180, 100%, 50%);
          ">
            <div class="absolute inset-0 bg-gradient-to-r from-hsl(180, 100%, 50%) to-hsl(300, 100%, 50%) opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span class="relative z-10">${template.hero.button2Text || 'למד עוד'}</span>
          </a>
        </div>
      </div>
    </section>
    
    <!-- Neon Cyber CSS Animations -->
    <style>
      @keyframes neonGlow {
         0%, 100% {
           text-shadow: 0 0 15px hsl(300, 100%, 50%), 0 0 25px hsl(180, 100%, 50%);
         }
         50% {
           text-shadow: 0 0 10px hsl(300, 100%, 50%), 0 0 20px hsl(180, 100%, 50%);
         }
      }
      
      @keyframes flicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
      }
      
      @keyframes scan {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes float0 {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      
      @keyframes float1 {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-30px) rotate(-180deg); }
      }
      
      @keyframes float2 {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-25px) rotate(360deg); }
      }
    </style>
    
    <!-- Additional Neon Cyber Animations -->
    <style>
      @keyframes borderScan {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
    </style>
    
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden" style="background: linear-gradient(135deg, hsl(0, 0%, 3%) 0%, hsl(0, 0%, 8%) 30%, hsl(45, 15%, 6%) 70%, hsl(0, 0%, 5%) 100%);">
      
      <!-- Luxury Golden Particles -->
      <div class="absolute inset-0">
        ${Array.from({length: 30}, (_, i) => `
          <div class="absolute rounded-full opacity-70" style="
            width: ${2 + Math.random() * 4}px;
            height: ${2 + Math.random() * 4}px;
            background: linear-gradient(135deg, hsl(45, 100%, 60%), hsl(38, 100%, 45%));
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${8 + Math.random() * 12}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
          "></div>
        `).join('')}
      </div>

      <!-- Golden Geometric Shapes -->
      <div class="absolute inset-0">
        ${Array.from({length: 6}, (_, i) => `
          <div class="absolute border opacity-30" style="
            width: ${100 + i * 20}px;
            height: ${100 + i * 20}px;
            left: ${10 + i * 15}%;
            top: ${15 + (i % 3) * 25}%;
            border-color: rgba(255, 215, 0, 0.4);
            border-width: 1px;
            border-radius: ${i % 2 === 0 ? '50%' : '8px'};
            transform: rotate(${i * 45}deg);
            animation: spin ${20 + i * 5}s linear infinite;
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), transparent);
          "></div>
        `).join('')}
      </div>

      <!-- Luxury Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

      <!-- Content -->
      <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
        ${template.hero.badge ? `
          <div class="inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold mb-6 backdrop-blur-sm" style="
            color: hsl(45, 100%, 70%);
            border-color: rgba(255, 215, 0, 0.3);
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 193, 7, 0.05));
          ">
            ${template.hero.badge}
          </div>
        ` : ''}
        
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight" style="
          background: linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 100%, 65%));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
          font-family: 'Playfair Display', 'Frank Ruhl Libre', serif;
        ">
          ${template.hero.title}
        </h1>
        
        <h2 class="text-2xl md:text-3xl mb-8 font-light" style="
          color: hsl(0, 0%, 85%);
          font-family: 'Playfair Display', 'Frank Ruhl Libre', serif;
        ">
          ${template.hero.subtitle}
        </h2>
        
        <p class="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed" style="
          color: hsl(0, 0%, 75%);
          opacity: 0.9;
        ">
          ${template.hero.description}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#contact" class="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105" style="
            background: linear-gradient(135deg, hsl(45, 100%, 60%), hsl(38, 100%, 45%));
            color: hsl(0, 0%, 10%);
            box-shadow: 0 8px 32px rgba(255, 215, 0, 0.4);
            border: 1px solid rgba(255, 215, 0, 0.3);
          ">
            ${template.hero.button1Icon ? `<i class="ri-${template.hero.button1Icon}"></i>` : ''}
            ${template.hero.button1Text || 'התחל עכשיו'}
          </a>
          
          <a href="#features" class="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm" style="
            background: rgba(255, 255, 255, 0.1);
            color: hsl(0, 0%, 95%);
            border: 1px solid rgba(255, 215, 0, 0.3);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          ">
            ${template.hero.button2Icon ? `<i class="ri-${template.hero.button2Icon}"></i>` : ''}
            ${template.hero.button2Text || 'למד עוד'}
          </a>
        </div>
      </div>

      <!-- Bottom Fade -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>
    ` : `
    <!-- Regular Hero -->
    <section class="hero" ${template.styles.heroBackgroundImage ? `style="background-image: url(${template.styles.heroBackgroundImage}); background-size: cover; background-position: center; background-repeat: no-repeat;"` : ''}>
        ${isPremium ? (() => {
          const bgData = getPremiumAnimatedBackground(template.id, 'hero');
          return generatePremiumBackgroundHTML(bgData.animationType);
        })() : ''}
        ${template.styles.heroBackgroundImage ? '<div class="absolute inset-0 bg-black/40 z-0"></div>' : ''}
        ${isPremium ? `
        <!-- Premium hero effects based on template -->
        ${template.id === 'tech-consultant-pro' ? `
        <!-- Floating glass panels -->
        ${Array.from({length: 6}, (_, i) => `
            <div class="absolute backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl" style="
                width: ${80 + i * 20}px; 
                height: ${60 + i * 15}px; 
                left: ${10 + i * 15}%; 
                top: ${15 + (i % 3) * 25}%; 
                transform: rotate(${i * 30}deg);
                animation: float ${15 + i * 2}s infinite ease-in-out;
                animation-delay: ${i * 2}s;
                opacity: 0.1;
            "></div>
        `).join('')}
        ` : ''}
        ${template.id === 'neon-academy-pro' ? `
        <!-- Neon city skyline -->
        <div class="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/50 to-transparent">
            ${Array.from({length: 20}, (_, i) => `
                <div class="absolute bg-purple-600 opacity-30" style="
                    width: ${20 + Math.random() * 30}px;
                    height: ${100 + Math.random() * 100}px;
                    left: ${i * 5}%;
                    bottom: 0;
                    animation: neonGlow 3s infinite ease-in-out;
                    animation-delay: ${i * 0.1}s;
                "></div>
            `).join('')}
        </div>
        ` : ''}
        ${template.id === 'blockchain-tech-pro' ? `
        <!-- Particle network -->
        <div class="absolute inset-0 opacity-30">
            ${Array.from({length: 50}, (_, i) => `
                <div class="absolute w-1 h-1 bg-blue-400 rounded-full" style="
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: particles 4s infinite ease-in-out;
                    animation-delay: ${i * 0.1}s;
                "></div>
            `).join('')}
        </div>
        ` : ''}
        ${template.id === 'creative-3d-pro' ? `
        <!-- 3D clay shapes -->
        ${Array.from({length: 8}, (_, i) => `
            <div class="absolute rounded-full opacity-80" style="
                width: ${60 + i * 10}px;
                height: ${60 + i * 10}px;
                background: linear-gradient(135deg, ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#f38ba8', '#a8e6cf'][i]}, ${['#ff8e8e', '#6eddd6', '#67c3d7', '#a8d4ba', '#fed85d', '#ffb3f5', '#f5a3c7', '#b8ebd5'][i]});
                left: ${5 + i * 11}%;
                top: ${10 + (i % 4) * 20}%;
                box-shadow: 0 ${10 + i * 2}px ${20 + i * 3}px rgba(0,0,0,0.1);
                animation: float3d ${8 + i}s infinite ease-in-out;
                animation-delay: ${i * 0.5}s;
            "></div>
        `).join('')}
        ` : ''}
        ${template.id === 'authkit-tech-pro' ? `
        <!-- Matrix rain effect -->
        <div class="absolute inset-0 opacity-20">
            ${Array.from({length: 50}, (_, i) => `
                <div class="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent" style="
                    left: ${i * 2}%;
                    animation: matrixRain 3s infinite linear;
                    animation-delay: ${i * 0.3}s;
                "></div>
            `).join('')}
        </div>
        ` : ''}
        ` : ''}
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center">
                ${template.hero.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id, 'hero', template.styles.heroBadgeColor) : (template.styles.heroBackgroundImage ? 'white' : template.styles.accentColor)}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : (template.styles.heroBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.accentColor)};">${template.hero.badge}</div>` : ''}
                <h1 class="text-4xl md:text-6xl font-bold mb-4 ${isPremium && template.id === 'neon-academy-pro' ? 'neon-text' : ''}" style="color: ${isPremium ? getPremiumTextColor(template.id, 'hero', template.styles.heroTitleColor) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; ${isPremium && (template.id === 'blockchain-tech-pro' || template.id === 'nft-future-pro') ? 'background: linear-gradient(45deg, #60a5fa, #a78bfa, #22d3ee); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;' : ''}">${template.hero.title}</h1>
                <h2 class="text-xl md:text-2xl mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id, 'hero', template.styles.heroTextColor) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.9;">${template.hero.subtitle}</h2>
                <p class="text-lg mb-8 max-w-4xl mx-auto" style="color: ${isPremium ? getPremiumTextColor(template.id, 'hero', template.styles.heroTextColor) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.8;">${template.hero.description}</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform text-black font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 95%, 65%)); box-shadow: 0 12px 40px rgba(255, 215, 0, 0.5), 0 4px 20px rgba(255, 193, 7, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3); border: 2px solid rgba(255, 215, 0, 0.6); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);' : 'background-color: ' + effectiveStyles.accentColor + '; ' + (isPremium ? 'backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);' : '')}">
                        ${template.hero.button1Icon ? `<i class="ri-${template.hero.button1Icon}"></i>` : ''}
                        ${template.hero.button1Text || 'התחל עכשיו'}
                    </a>
                    <a href="#features" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform backdrop-blur-sm text-white font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 215, 0, 0.1)); border: 2px solid rgba(255, 215, 0, 0.5); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);' : 'background-color: ' + effectiveStyles.secondaryColor + '; ' + (isPremium ? 'backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);' : '')}">
                        ${template.hero.button2Icon ? `<i class="ri-${template.hero.button2Icon}"></i>` : ''}
                        ${template.hero.button2Text || 'למד עוד'}
                    </a>
                </div>
            </div>
        </div>
    </section>
    `}

    <!-- Emotional Section -->
    ${template.emotional && template.emotional.title ? `
     <section class="emotional" style="${isPremium ? (() => {
       const bgData = getPremiumAnimatedBackground(template.id, 'emotional');
       return bgData.background + '; position: relative; overflow: hidden;';
     })() : 'background-color: ' + template.styles.backgroundColor + '; padding: 80px 0;'}">
         ${isPremium ? (() => {
           const bgData = getPremiumAnimatedBackground(template.id, 'emotional');
           return generatePremiumBackgroundHTML(bgData.animationType);
         })() : ''}
         <div class="max-w-6xl mx-auto px-4 relative z-10">
             <div class="text-center">
                 ${template.emotional.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id, 'emotional', template.styles.emotionalBadgeColor) : template.styles.accentColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.accentColor};">${template.emotional.badge}</div>` : ''}
                 <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id, 'emotional', template.styles.emotionalTitleColor) : template.styles.textColor};">${template.emotional.title}</h2>
                 <p class="text-lg max-w-4xl mx-auto opacity-90 mb-8" style="color: ${isPremium ? getPremiumTextColor(template.id, 'emotional', template.styles.emotionalTextColor) : template.styles.textColor};">${template.emotional.content || template.emotional.description || ''}</p>
                 ${template.emotional.quote ? `
                 <blockquote class="text-xl italic mb-4 max-w-3xl mx-auto" style="color: ${isPremium ? getPremiumTextColor(template.id, 'emotional') : template.styles.textColor}; opacity: 0.9;">
                     "${template.emotional.quote}"
                 </blockquote>
                 ${template.emotional.author ? `<cite class="text-sm" style="color: ${isPremium ? getPremiumTextColor(template.id, 'emotional') : template.styles.textColor}; opacity: 0.7;">- ${template.emotional.author}</cite>` : ''}
                 ` : ''}
                 ${template.emotional.button1Text || template.emotional.button2Text ? `
                 <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                     ${template.emotional.button1Text ? `
                      <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform text-black font-bold' : 'text-white'} ${isPremium ? 'glass-effect' : ''}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 95%, 65%)); box-shadow: 0 12px 40px rgba(255, 215, 0, 0.5), 0 4px 20px rgba(255, 193, 7, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3); border: 2px solid rgba(255, 215, 0, 0.6); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);' : 'background-color: ' + template.styles.primaryColor + '; ' + (isPremium ? 'backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);' : '')}">
                          ${template.emotional.button1Icon ? `<i class="ri-${template.emotional.button1Icon}"></i>` : ''}
                          ${template.emotional.button1Text || 'צור קשר'}
                      </a>
                      ` : ''}
                      ${template.emotional.button2Text ? `
                      <a href="#about" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform backdrop-blur-sm text-white font-bold' : 'text-white'} ${isPremium ? 'glass-effect' : ''}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 215, 0, 0.1)); border: 2px solid rgba(255, 215, 0, 0.5); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);' : 'background-color: ' + template.styles.secondaryColor + '; ' + (isPremium ? 'backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);' : '')}">
                          ${template.emotional.button2Icon ? `<i class="ri-${template.emotional.button2Icon}"></i>` : ''}
                          ${template.emotional.button2Text || 'אודותינו'}
                     </a>
                     ` : ''}
                 </div>
                 ` : ''}
             </div>
         </div>
     </section>
     ` : ''}

    <!-- WhyUs Section -->
     ${template.whyUs ? `
      <section class="relative py-20 overflow-hidden" style="${isPremium ? (() => {
        const bgData = getPremiumAnimatedBackground(template.id, 'whyUs');
        return bgData.background + '; position: relative; overflow: hidden;';
      })() : 'background-color: ' + template.styles.backgroundColor + ';'}">
          ${isPremium ? (() => {
            const bgData = getPremiumAnimatedBackground(template.id, 'whyUs');
            return generatePremiumBackgroundHTML(bgData.animationType || 'dynamicGradients');
          })() : ''}
          
          ${theme.id === 'diamond-crystal' ? `
          <!-- Diamond Crystal Background -->
          <div class="absolute inset-0 opacity-30">
              ${Array.from({length: 50}, (_, i) => `
                  <div class="absolute transform rotate-45" style="
                      width: ${20 + Math.random() * 40}px;
                      height: ${20 + Math.random() * 40}px;
                      left: ${Math.random() * 100}%;
                      top: ${Math.random() * 100}%;
                      background: linear-gradient(135deg, 
                          hsl(300, 100%, 50%) 0%, 
                          hsl(180, 100%, 50%) 50%, 
                          hsl(60, 100%, 50%) 100%
                      );
                      border-radius: 15%;
                      animation: diamondFloat ${4 + Math.random() * 3}s infinite ease-in-out;
                      animation-delay: ${Math.random() * 2}s;
                      box-shadow: 0 0 20px rgba(255, 105, 180, 0.4);
                  "></div>
              `).join('')}
          </div>
          
          <!-- Prismatic Light Rays -->
          <div class="absolute inset-0 overflow-hidden">
              ${Array.from({length: 8}, (_, i) => `
                  <div class="absolute origin-center" style="
                      width: 2px;
                      height: 300px;
                      left: ${12.5 * (i + 1)}%;
                      top: -150px;
                      background: linear-gradient(to bottom, 
                          transparent 0%, 
                          hsl(${60 + i * 45}, 100%, 50%) 20%, 
                          hsl(${120 + i * 45}, 100%, 50%) 60%, 
                          transparent 100%
                      );
                      transform: rotate(${i * 45}deg);
                      animation: prismRay ${6 + i}s infinite linear;
                      animation-delay: ${i * 0.5}s;
                      opacity: 0.4;
                  "></div>
              `).join('')}
          </div>
          ` : theme.id === 'neon-academy-pro' ? `
          <!-- Neon Cyber Hexagonal Grid -->
          <div class="absolute inset-0 opacity-20">
              ${Array.from({length: 40}, (_, i) => `
                  <div class="absolute" style="
                      width: 60px;
                      height: 60px;
                      left: ${(i % 8) * 12.5}%;
                      top: ${Math.floor(i / 8) * 20}%;
                      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                      border: 1px solid #00ffff;
                      background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), transparent);
                      animation: hexGlow ${3 + Math.random() * 2}s infinite ease-in-out alternate;
                      animation-delay: ${i * 0.1}s;
                  "></div>
              `).join('')}
          </div>
          
          <!-- Scanning Lines -->
          <div class="absolute inset-0">
              ${Array.from({length: 3}, (_, i) => `
                  <div class="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" style="
                      top: ${25 + i * 25}%;
                      animation: scanLine ${4 + i}s infinite linear;
                      animation-delay: ${i * 1.5}s;
                  "></div>
              `).join('')}
          </div>
          ` : ''}
          
          <div class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
               ${template.whyUs.badge ? `<div class="inline-block px-3 py-1 text-xs font-medium rounded-full ${theme.id === 'diamond-crystal' ? 'bg-black/40 border-2 border-purple-400/60 text-purple-300 shadow-lg shadow-purple-400/20' : theme.id === 'neon-academy-pro' ? 'bg-black/50 border-2 border-cyan-400/50 text-cyan-300 shadow-lg shadow-cyan-400/20' : isPremium ? (theme.id === 'luxury-premium' ? 'bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-200 border border-yellow-500/30' : 'bg-white/10 border border-white/20 text-white backdrop-blur-sm') : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'} mb-4">${template.whyUs.badge}</div>` : ''}
                <h2 class="text-4xl md:text-6xl font-bold mb-6 ${theme.id === 'diamond-crystal' ? 'text-purple-300' : theme.id === 'neon-academy-pro' ? 'text-cyan-300' : ''}" style="color: ${getPremiumTextColor(template.id, 'whyUs')}; ${theme.id === 'diamond-crystal' ? 'text-shadow: 0 0 15px hsl(300, 100%, 50%), 0 0 30px hsl(180, 100%, 50%);' : theme.id === 'neon-academy-pro' ? 'text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;' : ''}">
                  ${template.whyUs.title}
                </h2>
               ${template.whyUs.subtitle ? `<p class="text-xl md:text-2xl ${theme.id === 'diamond-crystal' ? 'text-purple-100' : theme.id === 'neon-academy-pro' ? 'text-cyan-100' : ''}" style="color: ${getPremiumTextColor(template.id, 'whyUs')}; opacity: 0.9;">${template.whyUs.subtitle}</p>` : ''}
             </div>
             <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
               ${template.whyUs.items ? template.whyUs.items.map((item: any, index: number) => `
                 <div class="group transition-all duration-300 hover:scale-105" style="${theme.id === 'neon-academy-pro' ? 'background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 20, 40, 0.8)); border: 2px solid #00ffff; border-radius: 0; clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%); box-shadow: 0 0 30px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1); padding: 2rem; position: relative;' : isPremium ? (theme.id === 'luxury-premium' ? 'background: rgba(0, 0, 0, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 1rem; padding: 2rem;' : 'background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 1rem; padding: 2rem;') : 'background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; padding: 2rem;'}">
                   
                   ${theme.id === 'neon-academy-pro' ? `
                   <!-- Cyber Corner Circuits -->
                   <div class="absolute top-2 right-2 w-8 h-8" style="
                       background: linear-gradient(45deg, transparent 30%, #00ffff 30%, #00ffff 70%, transparent 70%);
                       opacity: 0.6;
                   "></div>
                   <div class="absolute bottom-2 left-2 w-8 h-8" style="
                       background: linear-gradient(-45deg, transparent 30%, #00ffff 30%, #00ffff 70%, transparent 70%);
                       opacity: 0.6;
                   "></div>
                   
                   <!-- Data Stream Lines -->
                   <div class="absolute inset-0 overflow-hidden pointer-events-none">
                       ${Array.from({length: 5}, (_, i) => `
                           <div class="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" style="
                               top: ${20 + i * 15}%;
                               animation: dataFlow ${2 + i * 0.5}s infinite linear;
                               animation-delay: ${i * 0.3}s;
                           "></div>
                       `).join('')}
                   </div>
                   ` : ''}
                   
                   <div class="w-16 h-16 mb-6 flex items-center justify-center ${theme.id === 'neon-academy-pro' ? '' : 'rounded-xl'}" style="${theme.id === 'neon-academy-pro' ? 'background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(0, 180, 255, 0.3)); border: 2px solid #00ffff; clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); color: #00ffff;' : 'background: linear-gradient(135deg, ' + getPremiumIconColors(template.id) + ');'}">
                     <i class="ri-${item.icon || 'star-fill'} text-2xl ${theme.id === 'neon-academy-pro' ? 'text-cyan-300' : 'text-white'}"></i>
                   </div>
                   <h3 class="text-2xl font-bold mb-4 ${theme.id === 'neon-academy-pro' ? 'text-cyan-300' : ''}" style="color: ${getPremiumTextColor(template.id, 'whyUs')}; ${theme.id === 'neon-academy-pro' ? 'text-shadow: 0 0 5px #00ffff;' : ''}">${item.title}</h3>
                   <p class="text-lg leading-relaxed ${theme.id === 'neon-academy-pro' ? 'text-cyan-100' : ''}" style="color: ${getPremiumTextColor(template.id, 'whyUs')}; opacity: 0.8;">${item.description}</p>
                 </div>
               `).join('') : ''}
            </div>
          </div>
      </section>
     ` : ''}

     <!-- WhatWeGive Section -->
     ${template.whatWeGive ? `
      <section class="relative py-20 overflow-hidden" style="${isPremium ? (() => {
        const bgData = getPremiumAnimatedBackground(template.id, 'whatWeGive');
        return bgData.background + '; position: relative; overflow: hidden;';
      })() : 'background-color: ' + template.styles.backgroundColor + ';'}">
          ${isPremium ? (() => {
            const bgData = getPremiumAnimatedBackground(template.id, 'whatWeGive');
            return generatePremiumBackgroundHTML(bgData.animationType || 'dynamicGradients');
          })() : ''}
          
          ${theme.id === 'diamond-crystal' ? `
          <!-- Crystal Particle Field -->
          <div class="absolute inset-0 opacity-25">
              ${Array.from({length: 80}, (_, i) => `
                  <div class="absolute rounded-full" style="
                      width: ${4 + Math.random() * 8}px;
                      height: ${4 + Math.random() * 8}px;
                      left: ${Math.random() * 100}%;
                      top: ${Math.random() * 100}%;
                      background: linear-gradient(135deg, 
                          hsl(${180 + i * 3}, 100%, 50%) 0%, 
                          hsl(${300 + i * 2}, 100%, 50%) 100%
                      );
                      animation: crystalFloat ${3 + Math.random() * 4}s infinite ease-in-out;
                      animation-delay: ${Math.random() * 3}s;
                      box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
                  "></div>
              `).join('')}
          </div>
          
          <!-- Refraction Lines -->
          <div class="absolute inset-0 opacity-20">
              ${Array.from({length: 15}, (_, i) => `
                  <div class="absolute bg-gradient-to-r from-transparent via-current to-transparent" style="
                      width: 100%;
                      height: 1px;
                      left: 0;
                      top: ${(i * 7) % 100}%;
                      color: hsl(${200 + i * 20}, 100%, 50%);
                      animation: refractionFlow ${5 + Math.random() * 3}s infinite linear;
                      animation-delay: ${i * 0.3}s;
                  "></div>
              `).join('')}
          </div>
          ` : theme.id === 'neon-academy-pro' ? `
          <!-- Cyber Matrix Background -->
          <div class="absolute inset-0 opacity-10">
              ${Array.from({length: 100}, (_, i) => `
                  <div class="absolute w-2 h-2 bg-cyan-400 rounded-full" style="
                      left: ${Math.random() * 100}%;
                      top: ${Math.random() * 100}%;
                      animation: matrixFloat ${4 + Math.random() * 3}s infinite ease-in-out;
                      animation-delay: ${Math.random() * 2}s;
                  "></div>
              `).join('')}
          </div>
          
          <!-- Digital Rain Effect -->
          <div class="absolute inset-0 opacity-15">
              ${Array.from({length: 20}, (_, i) => `
                  <div class="absolute w-px bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent" style="
                      left: ${i * 5}%;
                      height: 200px;
                      animation: digitalRain ${3 + Math.random() * 2}s infinite linear;
                      animation-delay: ${i * 0.2}s;
                  "></div>
              `).join('')}
          </div>
          ` : ''}
          
          <div class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                ${template.whatWeGive.badge ? `<div class="inline-block px-3 py-1 text-xs font-medium rounded-full ${theme.id === 'diamond-crystal' ? 'bg-black/40 border-2 border-purple-400/60 text-purple-300 shadow-lg shadow-purple-400/20' : theme.id === 'neon-academy-pro' ? 'bg-black/60 border-2 border-cyan-400/60 text-cyan-300 shadow-lg shadow-cyan-400/20' : isPremium ? 'bg-white/10 border border-white/20 text-white backdrop-blur-sm' : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'} mb-4">${template.whatWeGive.badge}</div>` : ''}
                <h2 class="text-4xl md:text-6xl font-bold mb-6 ${theme.id === 'diamond-crystal' ? 'text-purple-300' : theme.id === 'neon-academy-pro' ? 'text-cyan-300' : ''}" style="color: ${getPremiumTextColor(template.id, 'whatWeGive')}; ${theme.id === 'diamond-crystal' ? 'text-shadow: 0 0 15px hsl(300, 100%, 50%), 0 0 30px hsl(180, 100%, 50%);' : theme.id === 'neon-academy-pro' ? 'text-shadow: 0 0 15px #00ffff, 0 0 30px #00ffff;' : ''}">
                  ${template.whatWeGive.title}
                </h2>
                ${template.whatWeGive.subtitle ? `<p class="text-xl md:text-2xl mb-8 ${theme.id === 'diamond-crystal' ? 'text-purple-100' : theme.id === 'neon-academy-pro' ? 'text-cyan-100' : ''}" style="color: ${getPremiumTextColor(template.id, 'whatWeGive')}; opacity: 0.9;">${template.whatWeGive.subtitle}</p>` : ''}
                <div class="space-y-6">
                  ${template.whatWeGive.services ? template.whatWeGive.services.map((service: any) => `
                    <div class="flex items-start space-x-4 rtl:space-x-reverse group">
                      <div class="w-12 h-12 flex items-center justify-center flex-shrink-0 ${theme.id === 'diamond-crystal' ? '' : theme.id === 'neon-academy-pro' ? '' : 'rounded-lg'}" style="${theme.id === 'diamond-crystal' ? 'background: linear-gradient(135deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%)); border: 2px solid hsl(300, 100%, 50%); clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%); box-shadow: 0 0 20px rgba(255, 105, 180, 0.6); color: white;' : theme.id === 'neon-academy-pro' ? 'background: linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(0, 180, 255, 0.4)); border: 2px solid #00ffff; clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%); box-shadow: 0 0 15px rgba(0, 255, 255, 0.4); color: #00ffff;' : 'background: linear-gradient(135deg, ' + getPremiumIconColors(template.id) + ');'}">
                        <i class="ri-${service.icon || 'check-line'} text-xl ${theme.id === 'diamond-crystal' ? 'text-white' : theme.id === 'neon-academy-pro' ? 'text-cyan-300' : 'text-white'}"></i>
                      </div>
                      <div>
                        <h3 class="text-xl font-bold mb-2 ${theme.id === 'diamond-crystal' ? 'text-purple-300' : theme.id === 'neon-academy-pro' ? 'text-cyan-300' : ''}" style="color: ${getPremiumTextColor(template.id, 'whatWeGive')}; ${theme.id === 'diamond-crystal' ? 'text-shadow: 0 0 10px hsl(300, 100%, 50%);' : theme.id === 'neon-academy-pro' ? 'text-shadow: 0 0 8px #00ffff;' : ''}">${service.title}</h3>
                        <p class="text-lg ${theme.id === 'diamond-crystal' ? 'text-purple-100' : theme.id === 'neon-academy-pro' ? 'text-cyan-100' : ''}" style="color: ${getPremiumTextColor(template.id, 'whatWeGive')}; opacity: 0.8;">${service.description}</p>
                      </div>
                    </div>
                  `).join('') : ''}
                </div>
              </div>
              <div class="relative">
                ${template.whatWeGive.image ? `<div class="aspect-square flex items-center justify-center ${theme.id === 'diamond-crystal' ? '' : theme.id === 'neon-academy-pro' ? '' : 'rounded-3xl'}" style="${theme.id === 'diamond-crystal' ? 'background: linear-gradient(135deg, hsl(240, 20%, 8%), hsl(260, 30%, 12%)); border: 3px solid hsl(300, 100%, 50%); clip-path: polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%); box-shadow: 0 0 60px rgba(255, 105, 180, 0.5), inset 0 0 40px rgba(0, 255, 255, 0.1);' : theme.id === 'neon-academy-pro' ? 'background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 30, 60, 0.9)); border: 3px solid #00ffff; clip-path: polygon(10% 0%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 20%); box-shadow: 0 0 50px rgba(0, 255, 255, 0.4), inset 0 0 30px rgba(0, 255, 255, 0.1);' : 'background: linear-gradient(135deg, ' + getPremiumIconColors(template.id) + ');'}">
                  <p class="${theme.id === 'diamond-crystal' ? 'text-purple-300' : theme.id === 'neon-academy-pro' ? 'text-cyan-300' : 'text-white'} text-center p-8 text-lg" style="${theme.id === 'diamond-crystal' ? 'text-shadow: 0 0 15px hsl(300, 100%, 50%);' : theme.id === 'neon-academy-pro' ? 'text-shadow: 0 0 10px #00ffff;' : ''}">${template.whatWeGive.image}</p>
                </div>` : ''}
              </div>
            </div>
          </div>
      </section>
     ` : ''}

    <!-- Gallery Section -->
    ${template.gallery ? `
     <section class="relative py-20 overflow-hidden" style="${isPremium ? (() => {
       const bgData = getPremiumAnimatedBackground(template.id, 'gallery');
       return bgData.background + '; position: relative; overflow: hidden;';
     })() : 'background-color: ' + template.styles.backgroundColor + ';'}">
         ${isPremium ? (() => {
           const bgData = getPremiumAnimatedBackground(template.id, 'gallery');
           return generatePremiumBackgroundHTML(bgData.animationType || 'dynamicGradients');
         })() : ''}
         <div class="relative z-10 max-w-7xl mx-auto px-6">
           <div class="text-center mb-16">
             ${template.gallery.badge ? `<div class="inline-block px-3 py-1 text-xs font-medium rounded-full ${isPremium ? 'bg-white/10 border border-white/20 text-white backdrop-blur-sm' : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'} mb-4">${template.gallery.badge}</div>` : ''}
             <h2 class="text-4xl md:text-6xl font-bold mb-6" style="color: ${getPremiumTextColor(template.id, 'gallery')};">
               ${template.gallery.title}
             </h2>
             ${template.gallery.subtitle ? `<p class="text-xl md:text-2xl" style="color: ${getPremiumTextColor(template.id, 'gallery')}; opacity: 0.9;">${template.gallery.subtitle}</p>` : ''}
           </div>
           <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
             ${template.gallery.images ? template.gallery.images.map((img: any) => `
               <div class="group overflow-hidden rounded-2xl ${isPremium ? 'bg-white/5 backdrop-blur-sm border border-white/10' : 'bg-white/10 border border-white/20'} hover:scale-105 transition-all duration-300">
                 <div class="aspect-video bg-gradient-to-br ${getPremiumIconColors(template.id)} flex items-center justify-center">
                   <p class="text-white text-center p-4">${img.src || img.caption}</p>
                 </div>
                 ${img.caption ? `<div class="p-6">
                   <p class="text-lg" style="color: ${getPremiumTextColor(template.id, 'gallery')};">${img.caption}</p>
                 </div>` : ''}
               </div>
             `).join('') : ''}
           </div>
         </div>
     </section>
    ` : ''}

    <!-- Process Section -->
    ${template.process ? `
     <section class="relative py-20 overflow-hidden" style="${isPremium ? (() => {
       const bgData = getPremiumAnimatedBackground(template.id, 'process');
       return bgData.background + '; position: relative; overflow: hidden;';
     })() : 'background-color: ' + template.styles.backgroundColor + ';'}">
         ${isPremium ? (() => {
           const bgData = getPremiumAnimatedBackground(template.id, 'process');
           return generatePremiumBackgroundHTML(bgData.animationType || 'dynamicGradients');
         })() : ''}
         <div class="relative z-10 max-w-7xl mx-auto px-6">
           <div class="text-center mb-16">
             ${template.process.badge ? `<div class="inline-block px-3 py-1 text-xs font-medium rounded-full ${isPremium ? 'bg-white/10 border border-white/20 text-white backdrop-blur-sm' : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'} mb-4">${template.process.badge}</div>` : ''}
             <h2 class="text-4xl md:text-6xl font-bold mb-6" style="color: ${getPremiumTextColor(template.id, 'process')};">
               ${template.process.title}
             </h2>
             ${template.process.subtitle ? `<p class="text-xl md:text-2xl" style="color: ${getPremiumTextColor(template.id, 'process')}; opacity: 0.9;">${template.process.subtitle}</p>` : ''}
           </div>
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             ${template.process.steps ? template.process.steps.map((step: any, index: number) => `
               <div class="relative group">
                 <div class="${isPremium ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10' : 'bg-white/10 border border-white/20'} rounded-2xl p-8 transition-all duration-300 hover:scale-105">
                   <div class="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${getPremiumIconColors(template.id)} flex items-center justify-center">
                     <span class="text-2xl font-bold text-white">${index + 1}</span>
                   </div>
                   <h3 class="text-xl font-bold mb-4" style="color: ${getPremiumTextColor(template.id, 'process')};">${step.title}</h3>
                   <p class="text-lg mb-4" style="color: ${getPremiumTextColor(template.id, 'process')}; opacity: 0.8;">${step.description}</p>
                   ${step.duration ? `<p class="text-sm font-medium" style="color: ${getPremiumTextColor(template.id, 'process')}; opacity: 0.6;">${step.duration}</p>` : ''}
                 </div>
                 ${index < (template.process.steps.length - 1) ? `
                   <div class="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r ${getPremiumIconColors(template.id)} transform -translate-y-1/2 z-10"></div>
                 ` : ''}
               </div>
             `).join('') : ''}
           </div>
         </div>
     </section>
    ` : ''}

    <!-- Features Section -->
    <section class="features">
        ${isPremium ? (() => {
          const bgData = getPremiumAnimatedBackground(template.id, 'features');
          return generatePremiumBackgroundHTML(bgData.animationType);
        })() : ''}
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16">
                ${template.features.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id, 'features', template.styles.featuresBadgeColor) : template.styles.primaryColor}; border-color: ${isPremium ? (theme.id === 'luxury-premium' ? 'rgba(255,215,0,0.5)' : 'rgba(255,255,255,0.3)') : template.styles.primaryColor};">${template.features.badge}</div>` : ''}
                <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id, 'features', template.styles.featuresTitleColor) : template.styles.textColor};">${template.features.title}</h2>
                ${template.features.subtitle ? `<p class="text-xl" style="color: ${isPremium ? getPremiumTextColor(template.id, 'features', template.styles.featuresTextColor) : template.styles.textColor}; opacity: 0.8;">${template.features.subtitle}</p>` : ''}
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                ${template.features.items.map((feature: any) => {
                   if (theme.id === 'diamond-crystal') {
                     return `
                       <div class="relative group">
                         <!-- Diamond Crystal Card -->
                         <div class="relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105 transform hover:rotate-1" style="
                           background: linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(135, 206, 235, 0.15) 100%);
                           border: 2px solid rgba(255, 215, 0, 0.3);
                           box-shadow: 0 0 30px rgba(255, 215, 0, 0.2), 0 0 60px rgba(135, 206, 235, 0.1);
                           backdrop-filter: blur(10px);
                         ">
                           
                           <!-- Crystal Sparkle Effect -->
                           <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="
                             background: radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.2) 0%, transparent 70%);
                             animation: sparkle 3s ease-in-out infinite;
                           "></div>
                           
                           <!-- Prismatic Light Effect -->
                           <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" style="
                             animation: prism-light 2s ease-in-out infinite;
                           "></div>
                           
                           <!-- Content -->
                           <div class="relative z-10 space-y-4">
                             <!-- Diamond Icon -->
                             <div class="w-12 h-12 rounded-lg flex items-center justify-center transform rotate-45" style="
                               background: linear-gradient(45deg, hsl(45, 100%, 50%), hsl(200, 100%, 50%));
                               box-shadow: 0 0 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(135, 206, 235, 0.2);
                             ">
                               <i class="ri-${feature.icon} text-xl text-white transform -rotate-45"></i>
                             </div>
                             
                             <!-- Crystal Title -->
                             <h3 class="text-xl font-bold" style="
                               color: hsl(45, 100%, 70%);
                               text-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
                               font-family: 'Cinzel', serif;
                             ">
                               ${feature.title}
                             </h3>
                             
                             <!-- Crystal Description -->
                             <p class="text-gray-200 leading-relaxed" style="
                               text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
                             ">
                               ${feature.description}
                             </p>
                           </div>
                         </div>
                       </div>`;
                  } else if (isPremium) {
                    return `
                      <div class="relative group perspective-1000">
                        <div class="relative transform-gpu transition-all duration-300 preserve-3d group-hover:rotateY-5">
                          <!-- Floating background with glass effect -->
                          <div class="absolute inset-0 ${theme.id === 'luxury-premium' ? 'bg-gradient-to-br from-black/60 to-black/30' : 'bg-gradient-to-br from-white/10 to-white/5'} backdrop-blur-xl rounded-2xl shadow-2xl ${theme.id === 'luxury-premium' ? 'border border-yellow-500/40' : 'border border-white/20'}"></div>
                          
                          <!-- Glow effect -->
                          <div class="absolute inset-0 bg-gradient-to-br ${theme.id === 'luxury-premium' ? 'from-yellow-500/20 to-yellow-600/20' : 'from-blue-500/20 to-purple-500/20'} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                          
                          <!-- Content -->
                          <div class="relative z-10 p-8 space-y-4">
                            <!-- Floating icon -->
                            <div class="w-16 h-16 bg-gradient-to-br ${getPremiumIconColors(template.id)} rounded-xl flex items-center justify-center shadow-lg">
                              <i class="ri-${feature.icon} text-2xl text-white"></i>
                            </div>
                            
                            <!-- Title -->
                            <h3 class="text-xl font-bold ${theme.id === 'luxury-premium' ? 'bg-gradient-to-r from-yellow-200 to-yellow-300 bg-clip-text text-transparent' : 'text-white bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent'}">
                              ${feature.title}
                            </h3>
                            
                            <!-- Description -->
                            <p class="${theme.id === 'luxury-premium' ? 'text-yellow-100/90' : 'text-blue-100/80'} leading-relaxed">
                              ${feature.description}
                            </p>
                            
                            <!-- Floating particles -->
                            <div class="absolute top-4 right-4 w-2 h-2 ${theme.id === 'luxury-premium' ? 'bg-yellow-400' : 'bg-blue-400'} rounded-full opacity-60 animate-pulse"></div>
                            <div class="absolute bottom-6 left-6 w-1 h-1 ${theme.id === 'luxury-premium' ? 'bg-yellow-500' : 'bg-purple-400'} rounded-full opacity-40 animate-pulse delay-500"></div>
                          </div>
                        </div>
                      </div>`;
                  } else {
                    return `
                      <div class="rounded-lg border ${theme.id === 'luxury-premium' ? 'bg-gradient-to-br from-black/60 to-black/30 border-yellow-500/40' : 'bg-card'} text-card-foreground shadow-sm p-6">
                        <div class="text-4xl mb-4" style="color: ${theme.id === 'luxury-premium' ? '#fbbf24' : template.styles.primaryColor};">
                          <i class="ri-${feature.icon}"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2" style="color: ${theme.id === 'luxury-premium' ? '#fbbf24' : template.styles.textColor};">${feature.title}</h3>
                        <p style="color: ${theme.id === 'luxury-premium' ? 'rgba(251, 191, 36, 0.9)' : template.styles.textColor}; opacity: 0.8;">${feature.description}</p>
                      </div>`;
                  }
                }).join('')}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                ${theme.id === 'diamond-crystal' ? `
                <a href="#contact" class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-110" style="
                    background: linear-gradient(45deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%));
                    color: white;
                    box-shadow: 0 0 20px hsl(300, 100%, 50%);
                    border: 2px solid hsl(300, 100%, 50%);
                    font-family: 'Orbitron', monospace;
                ">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span class="relative z-10">
                        ${template.features.button1Icon ? `<i class="ri-${template.features.button1Icon}"></i>` : ''}
                        ${template.features.button1Text || 'צור קשר'}
                    </span>
                </a>
                <a href="#testimonials" class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-110" style="
                    background: transparent;
                    color: hsl(180, 100%, 50%);
                    border: 2px solid hsl(180, 100%, 50%);
                    box-shadow: 0 0 15px hsl(180, 100%, 50%);
                    font-family: 'Orbitron', monospace;
                ">
                    <div class="absolute inset-0 bg-gradient-to-r from-hsl(180, 100%, 50%) to-hsl(300, 100%, 50%) opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span class="relative z-10">
                        ${template.features.button2Icon ? `<i class="ri-${template.features.button2Icon}"></i>` : ''}
                        ${template.features.button2Text || 'לקוחות מספרים'}
                    </span>
                </a>
                ` : `
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform text-black font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 95%, 65%)); box-shadow: 0 12px 40px rgba(255, 215, 0, 0.5), 0 4px 20px rgba(255, 193, 7, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3); border: 2px solid rgba(255, 215, 0, 0.6); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);' : 'background-color: ' + template.styles.primaryColor + ';'}">
                    ${template.features.button1Icon ? `<i class="ri-${template.features.button1Icon}"></i>` : ''}
                    ${template.features.button1Text || 'צור קשר'}
                </a>
                <a href="#testimonials" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform backdrop-blur-sm text-white font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 215, 0, 0.1)); border: 2px solid rgba(255, 215, 0, 0.5); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);' : 'background-color: ' + template.styles.secondaryColor + ';'}">
                    ${template.features.button2Icon ? `<i class="ri-${template.features.button2Icon}"></i>` : ''}
                    ${template.features.button2Text || 'לקוחות מספרים'}
                </a>
                `}
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials">
        ${isPremium ? (() => {
          const bgData = getPremiumAnimatedBackground(template.id, 'testimonials');
          return generatePremiumBackgroundHTML(bgData.animationType);
        })() : ''}
        ${isPremium ? `
        <!-- Animated background particles -->
        <div class="absolute inset-0">
            ${Array.from({length: 20}, (_, i) => `
                <div class="absolute w-2 h-2 ${theme.id === 'luxury-premium' ? 'bg-yellow-400/20' : 'bg-blue-400/20'} rounded-full animate-pulse" style="left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation-delay: ${i * 0.2}s;"></div>
            `).join('')}
        </div>
        ` : ''}
        
        <div class="max-w-6xl mx-auto px-6 relative z-10">
            ${theme.id === 'diamond-crystal' ? `
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-16" style="
              background: linear-gradient(45deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%), hsl(60, 100%, 50%));
              background-size: 200% 200%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: neonGlow 2s ease-in-out infinite alternate;
              text-shadow: 0 0 15px hsl(300, 100%, 50%), 0 0 25px hsl(180, 100%, 50%);
              font-family: 'Orbitron', monospace;
            ">
              ${template.testimonials.title}
            </h2>
            ` : isPremium ? `
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 ${theme.id === 'luxury-premium' ? 'bg-gradient-to-r from-yellow-200 to-yellow-300 bg-clip-text text-transparent' : 'bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent'}">
                ${template.testimonials.title}
            </h2>
            ` : `
            <div class="text-center mb-12">
                ${template.testimonials.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${template.styles.primaryColor}; border-color: ${template.styles.primaryColor};">${template.testimonials.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold" style="color: ${template.styles.textColor};">${template.testimonials.title}</h2>
            </div>
            `}
            
            <!-- Testimonials grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                ${template.testimonials.testimonials.map((testimonial: any) => {
                   if (theme.id === 'diamond-crystal') {
                     return `
                       <div class="relative group">
                         <!-- Diamond Crystal Testimonial Card -->
                         <div class="relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105 transform hover:rotate-1" style="
                           background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 20, 147, 0.1) 100%);
                           border: 2px solid rgba(255, 215, 0, 0.3);
                           box-shadow: 0 0 30px rgba(255, 215, 0, 0.2), 0 0 60px rgba(255, 20, 147, 0.1);
                           backdrop-filter: blur(10px);
                         ">
                           
                           <!-- Crystal Sparkle Animation -->
                           <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="
                             background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.5), transparent);
                             animation: sparkle 3s ease-in-out infinite;
                           "></div>
                           
                           <div class="relative z-10">
                             <!-- Crystal Quote Icon -->
                             <div class="mb-4">
                               <i class="ri-double-quotes-l text-3xl transform rotate-12" style="
                                 color: hsl(45, 100%, 60%);
                                 text-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
                               "></i>
                             </div>
                             
                             <!-- Testimonial Text -->
                             <p class="text-lg mb-6" style="
                               color: hsl(0, 0%, 90%);
                               text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
                             ">${testimonial.text}</p>
                             
                             <!-- Client Info -->
                             <div class="flex items-center gap-3">
                               <div class="w-12 h-12 rounded-full overflow-hidden transform rotate-12" style="
                                 border: 2px solid hsl(320, 100%, 60%);
                                 box-shadow: 0 0 20px rgba(255, 20, 147, 0.4);
                               ">
                                 <img src="${testimonial.image}" alt="${testimonial.name}" class="w-full h-full object-cover">
                               </div>
                               <div>
                                 <h4 class="font-bold" style="
                                   color: hsl(320, 100%, 60%);
                                   text-shadow: 0 0 15px rgba(255, 20, 147, 0.4);
                                   font-family: 'Cinzel', serif;
                                 ">
                                   ${testimonial.name}
                                 </h4>
                                 <p class="text-sm" style="
                                   color: hsl(45, 100%, 60%);
                                   text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
                                 ">
                                   ${testimonial.role}
                                 </p>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>`;
                  } else {
                    return `
                      <div class="relative group">
                        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20"></div>
                        <div class="relative z-10 p-6 space-y-4">
                            <!-- Quote icon -->
                            <div class="w-8 h-8 bg-gradient-to-br ${theme.id === 'luxury-premium' ? 'from-yellow-400 to-yellow-600' : 'from-blue-400 to-purple-500'} rounded-full flex items-center justify-center mb-4">
                                <span class="text-white text-sm">"</span>
                            </div>
                            
                            <!-- Rating -->
                            <div class="flex mb-3">
                                ${Array(testimonial.rating || 5).fill(0).map(() => '<span style="color: #fbbf24; font-size: 1rem;">★</span>').join('')}
                            </div>
                            
                            <!-- Content -->
                            <p class="${theme.id === 'luxury-premium' ? 'text-gray-200/90' : 'text-blue-100/90'} italic leading-relaxed">"${testimonial.content}"</p>
                            
                            <!-- Author info -->
                            <div class="flex items-center gap-3 pt-4">
                                <div class="w-12 h-12 bg-gradient-to-br ${theme.id === 'luxury-premium' ? 'from-yellow-400 to-yellow-600' : 'from-blue-400 to-purple-500'} rounded-full flex items-center justify-center text-white font-bold">
                                    ${testimonial.name?.charAt(0) || 'א'}
                                </div>
                                <div>
                                    <p class="text-white font-semibold">${testimonial.name}</p>
                                    <p class="${theme.id === 'luxury-premium' ? 'text-yellow-200/70' : 'text-blue-200/70'} text-sm">${testimonial.role}</p>
                                </div>
                            </div>
                         </div>
                     </div>`;
                   }
                 }).join('')}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                ${theme.id === 'diamond-crystal' ? `
                <a href="#contact" class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-110" style="
                  background: linear-gradient(45deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%));
                  color: white;
                  box-shadow: 0 0 30px hsl(300, 100%, 50%), 0 0 60px hsl(180, 100%, 50%);
                  border: 2px solid hsl(300, 100%, 50%);
                  font-family: 'Orbitron', monospace;
                ">
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span class="relative z-10">${template.testimonials.button1Text || 'צור קשר'}</span>
                </a>
                
                <a href="#about" class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-110" style="
                  background: transparent;
                  color: hsl(180, 100%, 50%);
                  border: 2px solid hsl(180, 100%, 50%);
                  box-shadow: 0 0 20px hsl(180, 100%, 50%);
                  font-family: 'Orbitron', monospace;
                ">
                  <div class="absolute inset-0 bg-gradient-to-r from-hsl(180, 100%, 50%) to-hsl(300, 100%, 50%) opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span class="relative z-10">${template.testimonials.button2Text || 'אודותינו'}</span>
                </a>
                ` : `
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform text-black font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 95%, 65%)); box-shadow: 0 12px 40px rgba(255, 215, 0, 0.5), 0 4px 20px rgba(255, 193, 7, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3); border: 2px solid rgba(255, 215, 0, 0.6); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);' : 'background-color: ' + template.styles.primaryColor + ';'}">
                    ${template.testimonials.button1Icon ? `<i class="ri-${template.testimonials.button1Icon}"></i>` : ''}
                    ${template.testimonials.button1Text || 'צור קשר'}
                </a>
                <a href="#about" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform backdrop-blur-sm text-white font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 215, 0, 0.1)); border: 2px solid rgba(255, 215, 0, 0.5); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);' : 'background-color: ' + template.styles.secondaryColor + ';'}">
                    ${template.testimonials.button2Icon ? `<i class="ri-${template.testimonials.button2Icon}"></i>` : ''}
                    ${template.testimonials.button2Text || 'אודותינו'}
                 </a>
                 `}
             </div>
        </div>
    </section>


    <!-- About Section -->
    <section id="about" class="about">
        ${theme.id === 'diamond-crystal' ? `
        <!-- Neon Cyber About Section -->
        <div class="relative overflow-hidden py-20" style="background: linear-gradient(135deg, hsl(240, 20%, 8%) 0%, hsl(260, 30%, 12%) 30%, hsl(280, 25%, 10%) 70%, hsl(240, 20%, 8%) 100%);">
            <!-- Neon Grid Background -->
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 98px, rgba(0, 255, 255, 0.1) 100px), repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(255, 0, 255, 0.1) 100px);"></div>
            </div>
            
            <div class="max-w-6xl mx-auto px-4 relative z-10">
                <div class="text-center mb-12">
                    ${template.about.badge ? `<div class="inline-block px-3 py-1 text-xs rounded-full mb-4" style="background: linear-gradient(45deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%)); color: white; border: 1px solid hsl(300, 100%, 50%); box-shadow: 0 0 15px hsl(300, 100%, 50%);">${template.about.badge}</div>` : ''}
                    <h2 class="text-3xl md:text-4xl font-bold mb-6" style="
                        background: linear-gradient(45deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%), hsl(60, 100%, 50%));
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-shadow: 0 0 10px hsl(300, 100%, 50%);
                        font-family: 'Orbitron', monospace;
                    ">${template.about.title}</h2>
        ` : `
        ${isPremium ? (() => {
          const bgData = getPremiumAnimatedBackground(template.id, 'about');
          return generatePremiumBackgroundHTML(bgData.animationType);
        })() : ''}
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center mb-12">
                ${template.about.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.secondaryColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.secondaryColor};">${template.about.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.about.title}</h2>
        `}
                <p class="text-lg max-w-4xl mx-auto opacity-90" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.about.description}</p>
            </div>
            
            ${template.about.stats && template.about.stats.length > 0 ? `
                <div class="grid md:grid-cols-3 gap-8 text-center mb-12">
                    ${template.about.stats.map((stat: any) => `
                        <div>
                            <div class="text-4xl font-bold mb-2" style="color: ${template.styles.primaryColor};">${stat.number}</div>
                            <div class="text-lg opacity-80" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${stat.label}</div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform text-black font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 95%, 65%)); box-shadow: 0 12px 40px rgba(255, 215, 0, 0.5), 0 4px 20px rgba(255, 193, 7, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3); border: 2px solid rgba(255, 215, 0, 0.6); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);' : 'background-color: ' + template.styles.primaryColor + ';'}">
                    ${template.about.button1Icon ? `<i class="ri-${template.about.button1Icon}"></i>` : ''}
                    ${template.about.button1Text || 'צור קשר'}
                </a>
                <a href="#pricing" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform backdrop-blur-sm text-white font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 215, 0, 0.1)); border: 2px solid rgba(255, 215, 0, 0.5); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);' : 'background-color: ' + template.styles.secondaryColor + ';'}">
                    ${template.about.button2Icon ? `<i class="ri-${template.about.button2Icon}"></i>` : ''}
                    ${template.about.button2Text || 'מחירים'}
                </a>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
        ${isPremium ? (() => {
          const bgData = getPremiumAnimatedBackground(template.id, 'pricing');
          return generatePremiumBackgroundHTML(bgData.animationType);
        })() : ''}
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            ${isPremium ? `
            <!-- Animated liquid background -->
            <div class="absolute inset-0 opacity-30">
                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
                    <defs>
                        <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color: #3b82f6; stop-opacity: 0.3;" />
                            <stop offset="50%" style="stop-color: #8b5cf6; stop-opacity: 0.2;" />
                            <stop offset="100%" style="stop-color: #06b6d4; stop-opacity: 0.3;" />
                        </linearGradient>
                    </defs>
                    <path d="M0,300 Q250,200 500,300 T1000,300 L1000,1000 L0,1000 Z" fill="url(#liquidGradient)" />
                </svg>
            </div>
            
            <div class="text-center mb-16">
                ${template.pricing.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${getPremiumTextColor(template.id)}; border-color: rgba(255,255,255,0.3);">${template.pricing.badge}</div>` : ''}
                <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">${template.pricing.title}</h2>
                ${template.pricing.subtitle ? `<p class="text-xl text-blue-100/70 max-w-2xl mx-auto">${template.pricing.subtitle}</p>` : ''}
            </div>
            ` : `
            <div class="text-center mb-12">
                ${template.pricing.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${template.styles.primaryColor}; border-color: ${template.styles.primaryColor};">${template.pricing.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: ${template.styles.textColor};">${template.pricing.title}</h2>
                ${template.pricing.subtitle ? `<p class="text-xl opacity-80" style="color: ${template.styles.textColor};">${template.pricing.subtitle}</p>` : ''}
            </div>
            `}
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                ${template.pricing.plans.map((plan: any, index: number) => `
                    <div class="relative group perspective-1000 ${plan.recommended ? 'lg:scale-105' : ''}">
                        ${plan.recommended ? `
                            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                <div class="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                                    <span style="color: currentColor;">★</span>
                                    מומלץ
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="relative transform-gpu transition-all duration-500 preserve-3d group-hover:rotateY-5">
                            <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"></div>
                            
                            ${plan.recommended ? '<div class="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl blur-sm"></div>' : ''}
                            
                            <div class="relative z-10 p-8 space-y-6">
                                <h3 class="text-2xl font-bold text-white text-center">${plan.name}</h3>
                                
                                <div class="text-center">
                                    <div class="text-4xl md:text-5xl font-bold text-white mb-2">${plan.price}</div>
                                    <div class="text-blue-200/70">${plan.period}</div>
                                </div>
                                
                                <ul class="space-y-3">
                                    ${plan.features.map((feature: string) => `
                                        <li class="flex items-center gap-3 text-blue-100/80">
                                            <span style="color: #4ade80; font-size: 1.25rem;">✓</span>
                                            ${feature}
                                        </li>
                                    `).join('')}
                                </ul>
                                
                                <a href="#contact" class="w-full py-3 font-medium rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center text-center" style="background: ${plan.recommended ? 'linear-gradient(to right, #fbbf24, #f97316)' : (theme.id === 'luxury-premium' ? 'linear-gradient(to right, #d4af37, #b8860b)' : 'linear-gradient(to right, #3b82f6, #8b5cf6)')}; color: ${plan.recommended ? '#111827' : '#ffffff'};">
                                    ${plan.buttonText || 'בחר תוכנית'}
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform text-black font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 95%, 65%)); box-shadow: 0 12px 40px rgba(255, 215, 0, 0.5), 0 4px 20px rgba(255, 193, 7, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3); border: 2px solid rgba(255, 215, 0, 0.6); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);' : 'background-color: ' + template.styles.primaryColor + ';'}">
                    ${template.pricing.button1Icon ? `<i class="ri-${template.pricing.button1Icon}"></i>` : ''}
                    ${template.pricing.button1Text || 'צור קשר'}
                </a>
                <a href="#faq" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform backdrop-blur-sm text-white font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 215, 0, 0.1)); border: 2px solid rgba(255, 215, 0, 0.5); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);' : 'background-color: ' + template.styles.secondaryColor + ';'}">
                    ${template.pricing.button2Icon ? `<i class="ri-${template.pricing.button2Icon}"></i>` : ''}
                    ${template.pricing.button2Text || 'שאלות נפוצות'}
                </a>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    ${template.gallery ? `
     <section class="relative py-20 overflow-hidden" style="${isPremium ? (() => {
       const bgData = getPremiumAnimatedBackground(template.id, 'gallery');
       return bgData.background + '; position: relative; overflow: hidden;';
     })() : 'background-color: ' + template.styles.backgroundColor + ';'}">
         ${isPremium ? (() => {
           const bgData = getPremiumAnimatedBackground(template.id, 'gallery');
           return generatePremiumBackgroundHTML(bgData.animationType || 'dynamicGradients');
         })() : ''}
         
         ${theme.id === 'diamond-crystal' ? `
         <!-- Diamond Crystal Gallery Background -->
         <div class="absolute inset-0 opacity-20">
             ${Array.from({length: 30}, (_, i) => `
                 <div class="absolute" style="
                     width: ${30 + Math.random() * 20}px;
                     height: ${30 + Math.random() * 20}px;
                     left: ${Math.random() * 100}%;
                     top: ${Math.random() * 100}%;
                     background: conic-gradient(
                         hsl(300, 100%, 50%) 0deg,
                         hsl(180, 100%, 50%) 120deg,
                         hsl(60, 100%, 50%) 240deg,
                         hsl(300, 100%, 50%) 360deg
                     );
                     border-radius: 50%;
                     animation: diamondSpin ${5 + Math.random() * 5}s infinite linear;
                     animation-delay: ${Math.random() * 3}s;
                 "></div>
             `).join('')}
         </div>
         ` : ''}
         
         <div class="relative z-10 max-w-7xl mx-auto px-6">
           <div class="text-center mb-16">
             ${template.gallery.badge ? `<div class="inline-block px-3 py-1 text-xs font-medium rounded-full ${theme.id === 'diamond-crystal' ? 'bg-black/40 border-2 border-purple-400/60 text-purple-300 shadow-lg shadow-purple-400/20' : isPremium ? 'bg-white/10 border border-white/20 text-white backdrop-blur-sm' : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'} mb-4">${template.gallery.badge}</div>` : ''}
             <h2 class="text-4xl md:text-6xl font-bold mb-6 ${theme.id === 'diamond-crystal' ? 'text-purple-300' : ''}" style="color: ${getPremiumTextColor(template.id, 'gallery')}; ${theme.id === 'diamond-crystal' ? 'text-shadow: 0 0 15px hsl(300, 100%, 50%), 0 0 30px hsl(180, 100%, 50%);' : ''}">
               ${template.gallery.title}
             </h2>
             ${template.gallery.subtitle ? `<p class="text-xl md:text-2xl ${theme.id === 'diamond-crystal' ? 'text-purple-100' : ''}" style="color: ${getPremiumTextColor(template.id, 'gallery')}; opacity: 0.9;">${template.gallery.subtitle}</p>` : ''}
           </div>
           <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
             ${template.gallery.images ? template.gallery.images.map((img: any) => `
               <div class="group overflow-hidden rounded-2xl ${theme.id === 'diamond-crystal' ? 'bg-black/20 backdrop-blur-sm border border-purple-500/30' : isPremium ? 'bg-white/5 backdrop-blur-sm border border-white/10' : 'bg-white/10 border border-white/20'} hover:scale-105 transition-all duration-300">
                 <div class="aspect-video ${theme.id === 'diamond-crystal' ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gradient-to-br ' + getPremiumIconColors(template.id)} flex items-center justify-center">
                   <p class="text-white text-center p-4">${img.src || img.caption}</p>
                 </div>
                 ${img.caption ? `<div class="p-6">
                   <p class="text-lg ${theme.id === 'diamond-crystal' ? 'text-purple-100' : ''}" style="color: ${getPremiumTextColor(template.id, 'gallery')};">${img.caption}</p>
                 </div>` : ''}
               </div>
             `).join('') : ''}
           </div>
         </div>
     </section>
    ` : ''}

    <!-- FAQ Section -->
    <section id="faq" class="faq relative py-20 overflow-hidden" style="${isPremium ? (() => {
       const bgData = getPremiumAnimatedBackground(template.id, 'faq');
       return bgData.background + '; position: relative; overflow: hidden;';
     })() : 'background-color: ' + template.styles.backgroundColor + ';'}">
        ${isPremium ? (() => {
           const bgData = getPremiumAnimatedBackground(template.id, 'faq');
           return generatePremiumBackgroundHTML(bgData.animationType || 'dynamicGradients');
         })() : ''}
        
        ${theme.id === 'diamond-crystal' ? `
        <!-- Diamond Crystal FAQ Background -->
        <div class="absolute inset-0 opacity-15">
            ${Array.from({length: 25}, (_, i) => `
                <div class="absolute" style="
                    width: ${25 + Math.random() * 15}px;
                    height: ${25 + Math.random() * 15}px;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    background: linear-gradient(45deg, 
                        hsl(300, 100%, 50%) 0%, 
                        hsl(180, 100%, 50%) 50%, 
                        hsl(60, 100%, 50%) 100%
                    );
                    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
                    animation: diamondFloat ${6 + Math.random() * 4}s infinite ease-in-out;
                    animation-delay: ${Math.random() * 3}s;
                "></div>
            `).join('')}
        </div>
        ` : ''}
        
        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16">
                ${template.faq.badge ? `<div class="inline-block px-3 py-1 text-xs font-medium rounded-full ${theme.id === 'diamond-crystal' ? 'bg-black/40 border-2 border-purple-400/60 text-purple-300 shadow-lg shadow-purple-400/20' : isPremium ? 'bg-white/10 border border-white/20 text-white backdrop-blur-sm' : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'} mb-4">${template.faq.badge}</div>` : ''}
                <h2 class="text-4xl md:text-6xl font-bold mb-6 ${theme.id === 'diamond-crystal' ? 'text-purple-300' : ''}" style="color: ${getPremiumTextColor(template.id, 'faq')}; ${theme.id === 'diamond-crystal' ? 'text-shadow: 0 0 15px hsl(300, 100%, 50%), 0 0 30px hsl(180, 100%, 50%);' : ''}">${template.faq.title}</h2>
                ${template.faq.subtitle ? `<p class="text-xl md:text-2xl ${theme.id === 'diamond-crystal' ? 'text-purple-100' : ''}" style="color: ${getPremiumTextColor(template.id, 'faq')}; opacity: 0.9;">${template.faq.subtitle}</p>` : ''}
            </div>
            
            <div class="space-y-4 mb-12">
                ${template.faq.questions?.map((qa: any, index: number) => `
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 ${theme.id === 'diamond-crystal' ? 'bg-black/20 backdrop-blur-sm border-purple-500/30' : isPremium ? 'bg-white/10 backdrop-blur-sm border-white/20' : ''}">
                        <h3 class="text-lg font-bold mb-2 text-right ${theme.id === 'diamond-crystal' ? 'text-purple-300' : ''}" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${qa.question}</h3>
                        <p class="opacity-80 text-right ${theme.id === 'diamond-crystal' ? 'text-purple-100' : ''}" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${qa.answer}</p>
                    </div>
                `).join('') || ''}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform text-black font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 95%, 65%)); box-shadow: 0 12px 40px rgba(255, 215, 0, 0.5), 0 4px 20px rgba(255, 193, 7, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3); border: 2px solid rgba(255, 215, 0, 0.6); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);' : 'background-color: ' + template.styles.primaryColor + ';'}">
                    ${template.faq.button1Icon ? `<i class="ri-${template.faq.button1Icon}"></i>` : ''}
                    ${template.faq.button1Text || 'צור קשר'}
                </a>
                <a href="#final-cta" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 ${theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform backdrop-blur-sm text-white font-bold' : 'text-white'}" style="${theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 215, 0, 0.1)); border: 2px solid rgba(255, 215, 0, 0.5); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);' : 'background-color: ' + template.styles.secondaryColor + ';'}">
                    ${template.faq.button2Icon ? `<i class="ri-${template.faq.button2Icon}"></i>` : ''}
                    ${template.faq.button2Text || 'התחל עכשיו'}
                </a>
            </div>
        </div>
    </section>



    
    <!-- New Content Sections -->
    ${template.heading ? generateHeadingSection(template.heading, template.styles, isPremium) : ''}
    ${template.text ? generateTextSection(template.text, template.styles, isPremium) : ''}
    ${template.video ? generateVideoSection(template.video, template.styles, isPremium) : ''}
    ${template.slider ? generateSliderSection(template.slider, template.styles, isPremium) : ''}
    ${template.list ? generateListSection(template.list, template.styles, isPremium) : ''}
    ${template.embed ? generateEmbedSection(template.embed, template.styles, isPremium) : ''}
    ${template.socialBar ? generateSocialBarSection(template.socialBar, template.styles, isPremium) : ''}

    <!-- Contact Section - Moved to be last -->
    <section id="contact" class="contact relative py-20 overflow-hidden" style="${isPremium ? (() => {
          const bgData = getPremiumAnimatedBackground(template.id, 'contact');
          return bgData.background + '; position: relative; overflow: hidden;';
        })() : 'background-color: ' + template.styles.backgroundColor + ';'}">
        ${isPremium ? (() => {
          const bgData = getPremiumAnimatedBackground(template.id, 'contact');
          return generatePremiumBackgroundHTML(bgData.animationType);
        })() : ''}
        
        ${theme.id === 'diamond-crystal' ? `
        <!-- Diamond Crystal Contact Background -->
        <div class="absolute inset-0 opacity-10">
            ${Array.from({length: 20}, (_, i) => `
                <div class="absolute" style="
                    width: ${40 + Math.random() * 30}px;
                    height: ${40 + Math.random() * 30}px;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    background: radial-gradient(circle, 
                        hsl(300, 100%, 50%) 0%, 
                        hsl(180, 100%, 50%) 50%, 
                        transparent 100%
                    );
                    border-radius: 50%;
                    animation: crystalPulse ${4 + Math.random() * 3}s infinite ease-in-out;
                    animation-delay: ${Math.random() * 2}s;
                "></div>
            `).join('')}
        </div>
        ` : ''}
        
        <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
            <h2 class="text-4xl md:text-6xl font-bold mb-6 ${theme.id === 'diamond-crystal' ? 'text-purple-300' : ''}" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor}; ${theme.id === 'diamond-crystal' ? 'text-shadow: 0 0 15px hsl(300, 100%, 50%), 0 0 30px hsl(180, 100%, 50%);' : ''}">${template.contact.title}</h2>
            ${template.contact.subtitle ? `<p class="text-xl mb-8 opacity-80 ${theme.id === 'diamond-crystal' ? 'text-purple-100' : ''}" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.contact.subtitle}</p>` : ''}
            <div class="rounded-lg border shadow-sm p-8 max-w-md mx-auto ${theme.id === 'diamond-crystal' ? 'bg-black/30 border-purple-500/40 backdrop-blur-sm' : theme.id === 'luxury-premium' ? 'bg-gradient-to-br from-black/90 to-black/70 border-yellow-500/50 backdrop-blur-sm' : 'bg-card text-card-foreground'}">
                <form class="space-y-4">
                    <input type="text" placeholder="שם מלא" class="w-full px-3 py-2 border rounded-md text-right ${theme.id === 'diamond-crystal' ? 'bg-black/40 border-purple-500/30 text-purple-100 placeholder:text-purple-200/70' : theme.id === 'luxury-premium' ? 'bg-black/60 border-yellow-500/30 text-yellow-100 placeholder:text-yellow-200/70' : 'border-input'}" />
                    <input type="email" placeholder="אימייל" class="w-full px-3 py-2 border rounded-md text-right ${theme.id === 'diamond-crystal' ? 'bg-black/40 border-purple-500/30 text-purple-100 placeholder:text-purple-200/70' : theme.id === 'luxury-premium' ? 'bg-black/60 border-yellow-500/30 text-yellow-100 placeholder:text-yellow-200/70' : 'border-input'}" />
                    <input type="tel" placeholder="טלפון" class="w-full px-3 py-2 border rounded-md text-right ${theme.id === 'diamond-crystal' ? 'bg-black/40 border-purple-500/30 text-purple-100 placeholder:text-purple-200/70' : theme.id === 'luxury-premium' ? 'bg-black/60 border-yellow-500/30 text-yellow-100 placeholder:text-yellow-200/70' : 'border-input'}" />
                    <textarea placeholder="הודעה" rows="4" class="w-full px-3 py-2 border rounded-md text-right ${theme.id === 'diamond-crystal' ? 'bg-black/40 border-purple-500/30 text-purple-100 placeholder:text-purple-200/70' : theme.id === 'luxury-premium' ? 'bg-black/60 border-yellow-500/30 text-yellow-100 placeholder:text-yellow-200/70' : 'border-input'}"></textarea>
                    <button type="submit" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 w-full ${theme.id === 'diamond-crystal' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform text-white font-bold' : theme.id === 'luxury-premium' ? 'group relative rounded-2xl transition-all duration-500 hover:scale-110 transform text-black font-bold' : 'text-white'} ${isPremium ? 'backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);' : ''}" style="${theme.id === 'diamond-crystal' ? 'background: linear-gradient(135deg, hsl(300, 100%, 50%), hsl(180, 100%, 50%)); box-shadow: 0 12px 40px rgba(255, 105, 180, 0.5), 0 4px 20px rgba(0, 255, 255, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3); border: 2px solid rgba(255, 105, 180, 0.6); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);' : theme.id === 'luxury-premium' ? 'background: linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 95%, 65%)); box-shadow: 0 12px 40px rgba(255, 215, 0, 0.5), 0 4px 20px rgba(255, 193, 7, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3); border: 2px solid rgba(255, 215, 0, 0.6); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);' : 'background-color: ' + template.styles.primaryColor + ';'}">
                        ${template.contact.buttonText || 'שלח הודעה'}
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer relative py-16 overflow-hidden" style="${isPremium ? (() => {
          const bgData = getPremiumAnimatedBackground(template.id, 'footer');
          return bgData.background + '; position: relative; overflow: hidden;';
        })() : 'background-color: ' + template.styles.backgroundColor + ';'}">
        ${theme.id === 'diamond-crystal' ? `
        <!-- Diamond Crystal Footer Background -->
        <div class="absolute inset-0 opacity-5">
            ${Array.from({length: 15}, (_, i) => `
                <div class="absolute" style="
                    width: ${15 + Math.random() * 10}px;
                    height: ${15 + Math.random() * 10}px;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    background: linear-gradient(135deg, 
                        hsl(300, 100%, 50%) 0%, 
                        hsl(180, 100%, 50%) 100%
                    );
                    border-radius: 50%;
                    animation: footerFloat ${8 + Math.random() * 4}s infinite ease-in-out;
                    animation-delay: ${Math.random() * 4}s;
                "></div>
            `).join('')}
        </div>
        ` : ''}
        
        <div class="text-center relative z-10">
            <p class="${theme.id === 'diamond-crystal' ? 'text-purple-200' : ''}" style="color: ${isPremium ? getPremiumTextColor(template.id) : '#ffffff'};">&copy; 2024 ${template.footer?.companyName || template.hero?.title || 'החברה'}. כל הזכויות שמורות.</p>
        </div>
    </footer>

</body>
</html>`;

};