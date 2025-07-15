// Complete HTML Generator - Creates exact HTML from template preview with premium support
import { DesignTheme, getDefaultTheme } from '@/types/designThemes';
import { getHeroHTML, getPremiumAnimatedBackground, generatePremiumBackgroundHTML, getPremiumTextColor } from './heroGenerators';
import { 
  generateThemedFeaturesSection,
  generateThemedWhyUsSection,
  generateThemedWhatWeGiveSection,
  generateThemedProcessSection,
  generateThemedGallerySection,
  generateThemedTestimonialsSection,
  generateThemedContactSection,
  generateThemedFooter,
  generateThemedAboutSection,
  generateThemedServicesSection,
  generateThemedPricingSection,
  generateThemedFAQSection
} from './themedSections';

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
    ${template.features ? generateThemedFeaturesSection(template.features, theme) : ''}

    <!-- About Section -->
    ${template.about ? generateThemedAboutSection(template.about, theme) : ''}

    <!-- Dynamic sections with themed designs -->
    ${template.whyUs ? generateThemedWhyUsSection(template.whyUs, theme) : ''}
    ${template.whatWeGive ? generateThemedWhatWeGiveSection(template.whatWeGive, theme) : ''}
    ${template.services ? generateThemedServicesSection(template.services, theme) : ''}
    ${template.process ? generateThemedProcessSection(template.process, theme) : ''}
    ${template.gallery ? generateThemedGallerySection(template.gallery, theme) : ''}
    ${template.testimonials ? generateThemedTestimonialsSection(template.testimonials, theme) : ''}
    ${template.pricing ? generateThemedPricingSection(template.pricing, theme) : ''}
    ${template.faq ? generateThemedFAQSection(template.faq, theme) : ''}

    <!-- Contact Section -->
    ${generateThemedContactSection(template.contact, theme)}

    <!-- Footer -->
    ${generateThemedFooter(template.footer, theme, template)}

</body>
</html>`;
};