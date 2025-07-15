// Complete HTML Generator - Creates exact HTML from template preview with premium support
import { DesignTheme, getDefaultTheme } from '@/types/designThemes';
import { getHeroHTML, getPremiumAnimatedBackground, generatePremiumBackgroundHTML, getPremiumTextColor } from './heroGenerators';

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
    return `
    <!-- Why Us Section -->
    <section class="why-us py-20" style="background: ${isPremium ? 'linear-gradient(135deg, rgba(55,65,81,0.9), rgba(30,64,175,0.9))' : styles.backgroundColor};">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                ${whyUs.badge ? `<div class="inline-block px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 mb-4">${whyUs.badge}</div>` : ''}
                <h2 class="text-4xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor};">${whyUs.title}</h2>
                ${whyUs.subtitle ? `<p class="text-xl" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor}; opacity: 0.8;">${whyUs.subtitle}</p>` : ''}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${whyUs.items.map((item: any) => `
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 ${isPremium ? 'bg-white/10 backdrop-blur-sm border-white/20' : ''}">
                        <div class="text-4xl mb-4" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.primaryColor};">
                            <i class="ri-${item.icon}"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor};">${item.title}</h3>
                        <p style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor}; opacity: 0.8;">${item.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
  };

  const generateWhatWeGiveSection = (whatWeGive: any, styles: any, isPremium: boolean) => {
    if (!whatWeGive || !whatWeGive.services || whatWeGive.services.length === 0) return '';
    return `
    <!-- What We Give Section -->
    <section class="what-we-give py-20" style="background: ${isPremium ? 'linear-gradient(135deg, rgba(30,64,175,0.9), rgba(55,65,81,0.9))' : styles.backgroundColor};">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                ${whatWeGive.badge ? `<div class="inline-block px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 mb-4">${whatWeGive.badge}</div>` : ''}
                <h2 class="text-4xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor};">${whatWeGive.title}</h2>
                ${whatWeGive.subtitle ? `<p class="text-xl" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor}; opacity: 0.8;">${whatWeGive.subtitle}</p>` : ''}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${whatWeGive.services.map((service: any) => `
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 ${isPremium ? 'bg-white/10 backdrop-blur-sm border-white/20' : ''}">
                        <div class="text-4xl mb-4" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.primaryColor};">
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
                    <div class="text-center">
                        <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold" style="background-color: ${styles.primaryColor}; color: white;">
                            ${index + 1}
                        </div>
                        <h3 class="text-xl font-bold mb-2" style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor};">${step.title}</h3>
                        <p style="color: ${isPremium ? getPremiumTextColor(templateData.id) : styles.textColor}; opacity: 0.8;">${step.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
  };

  // Additional helper functions from the original file
  const generateGallerySection = (gallery: any, styles: any, isPremium: boolean) => {
    if (!gallery || !gallery.images || gallery.images.length === 0) return '';
    return `
    <!-- Gallery Section -->
    <section class="gallery py-20" style="background: ${styles.backgroundColor};">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                ${gallery.badge ? `<div class="inline-block px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 mb-4">${gallery.badge}</div>` : ''}
                <h2 class="text-4xl font-bold mb-4" style="color: ${styles.textColor};">${gallery.title}</h2>
                ${gallery.subtitle ? `<p class="text-xl" style="color: ${styles.textColor}; opacity: 0.8;">${gallery.subtitle}</p>` : ''}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${gallery.images.map((image: any) => `
                    <div class="aspect-square rounded-lg overflow-hidden">
                        <img src="${image.url}" alt="${image.alt || ''}" class="w-full h-full object-cover">
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
  };

  // Main template HTML structure
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.businessName || 'אתר עסקי'}</title>
    <meta name="description" content="${template.businessDescription || 'אתר עסקי מקצועי'}" />
    
    <!-- Font setup based on theme -->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: ${theme.styles.fontFamily};
            color: ${theme.styles.text};
            background: ${theme.styles.background};
            line-height: 1.6;
        }
        
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            background: ${theme.styles.heroBackground};
        }
    </style>
</head>
<body class="text-foreground">

    <!-- Hero Section -->
    <section class="hero">
        ${getHeroHTML(template, theme, isPremium)}
    </section>

    <!-- Features Section -->
    <section id="features" class="features py-20" style="background: ${theme.styles.featuresBackground};">
        <div class="max-w-6xl mx-auto px-6">
            <div class="text-center mb-12">
                ${template.features?.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${theme.styles.primary}; border-color: ${theme.styles.primary};">${template.features.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold" style="color: ${theme.styles.featuresText};">${template.features?.title || 'השירותים שלנו'}</h2>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                ${template.features?.features?.map((feature: any) => `
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                        <div class="text-4xl mb-4" style="color: ${theme.styles.primary};">
                            <i class="ri-${feature.icon}"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2" style="color: ${theme.styles.featuresText};">${feature.title}</h3>
                        <p style="color: ${theme.styles.featuresText}; opacity: 0.8;">${feature.description}</p>
                    </div>
                `).join('') || ''}
            </div>
        </div>
    </section>

    <!-- Dynamic sections -->
    ${template.whyUs ? generateWhyUsSection(template.whyUs, effectiveStyles, isPremium) : ''}
    ${template.whatWeGive ? generateWhatWeGiveSection(template.whatWeGive, effectiveStyles, isPremium) : ''}
    ${template.process ? generateProcessSection(template.process, effectiveStyles, isPremium) : ''}
    ${template.gallery ? generateGallerySection(template.gallery, effectiveStyles, isPremium) : ''}

    <!-- Contact Section -->
    <section id="contact" class="contact py-20" style="background: ${theme.styles.background};">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: ${theme.styles.text};">${template.contact?.title || 'צור קשר'}</h2>
            <p class="text-xl mb-8" style="color: ${theme.styles.text}; opacity: 0.8;">${template.contact?.subtitle || 'נשמח לשמוע ממך'}</p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                ${template.contact?.phone ? `<a href="tel:${template.contact.phone}" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${theme.styles.primary};">
                    <i class="ri-phone-line"></i>
                    ${template.contact.phone}
                </a>` : ''}
                
                ${template.contact?.email ? `<a href="mailto:${template.contact.email}" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${theme.styles.secondary};">
                    <i class="ri-mail-line"></i>
                    ${template.contact.email}
                </a>` : ''}
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer py-8" style="background: ${theme.styles.secondary};">
        <div class="text-center">
            <p style="color: ${theme.styles.text};">&copy; 2024 ${template.footer?.companyName || template.hero?.title || 'החברה'}. כל הזכויות שמורות.</p>
        </div>
    </footer>

</body>
</html>`;
};