// Complete HTML Generator - Creates exact HTML from template preview with premium support
import { getPremiumStyles, getPremiumAnimations } from './premium-styles';
import { getPremiumTextColor, getPremiumSectionBackground } from './premium-colors';
import { getPremiumHeroEffects } from './premium-hero-effects';
import { generateFeaturesSection, generateTestimonialsSection, generatePricingSection } from './html-sections-generator';

export const generatePageHTML = (templateData: any) => {
  const template = templateData;
  const isPremium = template.category.includes('פרימיום');

  // Generate styling for each section based on template styles
  const getSectionStyle = (bgColor: string, bgImage?: string) => {
    let style = `background-color: ${bgColor};`;
    if (bgImage) {
      style += `background-image: url(${bgImage}); background-size: cover; background-position: center; background-repeat: no-repeat;`;
    }
    return style;
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
    <style>
        body {
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
            direction: rtl;
        }
        
        ${getPremiumAnimations()}
        
        /* Premium Effects */
        ${getPremiumStyles(template.id)}
        
        /* Premium sections use exact component styling */
        .hero { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'hero') : 'background-color: ' + template.styles.heroBackground + ';'}
            padding: 5rem 1.5rem;
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        
        .emotional { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'emotional') : 'background-color: ' + template.styles.emotionalBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .features { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'features') : 'background-color: ' + template.styles.featuresBackground + ';'}
            padding: 5rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .testimonials { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'testimonials') : 'background-color: ' + template.styles.testimonialsBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .about { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'about') : 'background-color: ' + template.styles.aboutBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .pricing { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'pricing') : 'background-color: ' + template.styles.pricingBackground + ';'}
            padding: 5rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .faq { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'faq') : 'background-color: ' + template.styles.faqBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .final-cta { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'final-cta') : 'background-color: ' + template.styles.finalCtaBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .contact { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'contact') : 'background-color: ' + template.styles.contactBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .footer { 
            ${isPremium ? 'background-color: ' + template.styles.primaryColor + ';' : 'background-color: ' + template.styles.footerBackground + ';'}
            padding: 2rem 1.5rem;
            text-align: center;
        }
    </style>
</head>
<body class="bg-background text-foreground">

    <!-- Hero Section -->
    <section class="hero">
        ${template.styles.heroBackgroundImage ? '<div class="absolute inset-0 bg-black/40 z-0"></div>' : ''}
        ${isPremium ? getPremiumHeroEffects(template.id) : ''}
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center">
                ${template.hero.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.accentColor)}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : (template.styles.heroBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.accentColor)};">${template.hero.badge}</div>` : ''}
                <h1 class="text-4xl md:text-6xl font-bold mb-4 ${isPremium && template.id === 'neon-academy-pro' ? 'neon-text' : ''}" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; ${isPremium && (template.id === 'blockchain-tech-pro' || template.id === 'nft-future-pro') ? 'background: linear-gradient(45deg, #60a5fa, #a78bfa, #22d3ee); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;' : ''}">${template.hero.title}</h1>
                <h2 class="text-xl md:text-2xl mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.9;">${template.hero.subtitle}</h2>
                <p class="text-lg mb-8 max-w-4xl mx-auto" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.8;">${template.hero.description}</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.accentColor}; ${isPremium ? 'backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);' : ''}">
                        ${template.hero.button1Icon ? `<i class="ri-${template.hero.button1Icon}"></i>` : ''}
                        ${template.hero.button1Text}
                    </a>
                    <a href="#features" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor}; ${isPremium ? 'backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);' : ''}">
                        ${template.hero.button2Icon ? `<i class="ri-${template.hero.button2Icon}"></i>` : ''}
                        ${template.hero.button2Text}
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Emotional Section -->
    ${template.emotional ? `
    <section class="emotional">
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center">
                ${template.emotional.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.accentColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.accentColor};">${template.emotional.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.emotional.title}</h2>
                <p class="text-lg max-w-4xl mx-auto opacity-90" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.emotional.description}</p>
            </div>
        </div>
    </section>
    ` : ''}

    ${generateFeaturesSection(template, isPremium)}
    ${generateTestimonialsSection(template, isPremium)}

    <!-- About Section -->
    ${template.about ? `
    <section id="about" class="about">
        <div class="max-w-6xl mx-auto px-6 relative z-10">
            <div class="text-center mb-12">
                ${template.about.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.primaryColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.about.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.about.title}</h2>
                ${template.about.subtitle ? `<p class="text-xl opacity-80" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.about.subtitle}</p>` : ''}
            </div>
            
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p class="text-lg mb-6 opacity-90" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.about.description}</p>
                    
                    <div class="space-y-4 mb-8">
                        ${template.about.highlights.map((highlight: string) => `
                            <div class="flex items-center gap-3">
                                <span style="color: #4ade80; font-size: 1.25rem;">✓</span>
                                <span style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${highlight}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.primaryColor};">
                            ${template.about.button1Icon ? `<i class="ri-${template.about.button1Icon}"></i>` : ''}
                            ${template.about.button1Text}
                        </a>
                        <a href="#pricing" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                            ${template.about.button2Icon ? `<i class="ri-${template.about.button2Icon}"></i>` : ''}
                            ${template.about.button2Text}
                        </a>
                    </div>
                </div>
                
                <div class="relative">
                    ${template.about.image ? `<img src="${template.about.image}" alt="About" class="rounded-lg shadow-lg w-full">` : `
                        <div class="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                            <i class="ri-image-line text-4xl text-gray-500"></i>
                        </div>
                    `}
                </div>
            </div>
        </div>
    </section>
    ` : ''}

    ${generatePricingSection(template, isPremium)}

    <!-- FAQ Section -->
    ${template.faq ? `
    <section id="faq" class="faq">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <div class="text-center mb-12">
                ${template.faq.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.primaryColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.faq.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.faq.title}</h2>
            </div>
            
            <div class="space-y-4 mb-12">
                ${template.faq.questions.map((faq: any, index: number) => `
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <button class="flex w-full items-center justify-between p-6 text-left" onclick="toggleFaq(${index})">
                            <span class="font-medium" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${faq.question}</span>
                            <i class="ri-arrow-down-s-line text-xl transition-transform" id="faq-icon-${index}" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};"></i>
                        </button>
                        <div class="px-6 pb-6 hidden" id="faq-answer-${index}">
                            <p style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor}; opacity: 0.8;">${faq.answer}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.primaryColor};">
                    ${template.faq.button1Icon ? `<i class="ri-${template.faq.button1Icon}"></i>` : ''}
                    ${template.faq.button1Text}
                </a>
                <a href="#about" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                    ${template.faq.button2Icon ? `<i class="ri-${template.faq.button2Icon}"></i>` : ''}
                    ${template.faq.button2Text}
                </a>
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Final CTA Section -->
    ${template.finalCta ? `
    <section class="final-cta">
        <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
            ${template.finalCta.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.primaryColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.finalCta.badge}</div>` : ''}
            <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.finalCta.title}</h2>
            <p class="text-xl mb-8 opacity-90" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.finalCta.description}</p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.primaryColor};">
                    ${template.finalCta.button1Icon ? `<i class="ri-${template.finalCta.button1Icon}"></i>` : ''}
                    ${template.finalCta.button1Text}
                </a>
                <a href="#pricing" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                    ${template.finalCta.button2Icon ? `<i class="ri-${template.finalCta.button2Icon}"></i>` : ''}
                    ${template.finalCta.button2Text}
                </a>
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <div class="text-center mb-12">
                ${template.contact.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.primaryColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.contact.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.contact.title}</h2>
                ${template.contact.subtitle ? `<p class="text-xl opacity-80" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.contact.subtitle}</p>` : ''}
            </div>
            
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">פרטי התקשרות</h3>
                    <div class="space-y-4">
                        ${template.contact.phone ? `
                            <div class="flex items-center gap-3">
                                <i class="ri-phone-line text-xl" style="color: ${template.styles.primaryColor};"></i>
                                <span style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.contact.phone}</span>
                            </div>
                        ` : ''}
                        ${template.contact.email ? `
                            <div class="flex items-center gap-3">
                                <i class="ri-mail-line text-xl" style="color: ${template.styles.primaryColor};"></i>
                                <span style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.contact.email}</span>
                            </div>
                        ` : ''}
                        ${template.contact.address ? `
                            <div class="flex items-center gap-3">
                                <i class="ri-map-pin-line text-xl" style="color: ${template.styles.primaryColor};"></i>
                                <span style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.contact.address}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <div>
                    <form class="space-y-4">
                        <div>
                            <input type="text" placeholder="שם מלא" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                        <div>
                            <input type="email" placeholder="אימייל" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                        <div>
                            <input type="tel" placeholder="טלפון" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                        <div>
                            <textarea placeholder="הודעה" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" class="w-full py-3 rounded-lg text-white font-medium transition-colors" style="background-color: ${template.styles.primaryColor};">
                            שלח הודעה
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="text-center">
            <p style="color: ${isPremium ? getPremiumTextColor(template.id) : '#ffffff'};">&copy; 2024 ${template.footer.companyName}. כל הזכויות שמורות.</p>
        </div>
    </footer>

    <script>
        function toggleFaq(index) {
            const answer = document.getElementById('faq-answer-' + index);
            const icon = document.getElementById('faq-icon-' + index);
            
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                answer.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }
    </script>

</body>
</html>`;
};
