// HTML Generator that creates exact copy of PremiumSection preview
export const generatePageHTML = (templateData: any) => {
  const template = templateData;
  const isPremium = template.category.includes('פרימיום');
  
  // Import Remix Icons via CSS link
  const remixIconsLink = '<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">';
  
  // CSS Styles matching exact premium sections
  const getTemplateCSS = () => {
    let styles = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        overflow-x: hidden;
        background: #000;
        color: white;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }
      
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1.1rem;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        z-index: 10;
      }
      
      .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
      }
      
      .card {
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 12px;
        padding: 2rem;
        transition: transform 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      
      .card:hover {
        transform: translateY(-5px);
      }
      
      .badge {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 1rem;
        backdrop-filter: blur(10px);
      }
      
      /* Grid layouts */
      .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
      .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
      
      /* Text alignments */
      .text-center { text-align: center; }
      .text-right { text-align: right; }
      
      /* Flex utilities */
      .flex { display: flex; }
      .flex-col { flex-direction: column; }
      .items-center { align-items: center; }
      .justify-center { justify-content: center; }
      .gap-4 { gap: 1rem; }
      
      /* Spacing */
      .mb-4 { margin-bottom: 1rem; }
      .mb-6 { margin-bottom: 1.5rem; }
      .mb-8 { margin-bottom: 2rem; }
      .mb-12 { margin-bottom: 3rem; }
      .py-16 { padding: 4rem 0; }
      .py-20 { padding: 5rem 0; }
      .px-4 { padding: 0 1rem; }
      .px-6 { padding: 0 1.5rem; }
      
      /* Typography */
      .text-4xl { font-size: 2.5rem; }
      .text-3xl { font-size: 2rem; }
      .text-2xl { font-size: 1.5rem; }
      .text-xl { font-size: 1.25rem; }
      .text-lg { font-size: 1.125rem; }
      .font-bold { font-weight: 700; }
      
      /* Stars */
      .star {
        color: #fbbf24;
        font-size: 1.2rem;
      }
      
      /* Mobile responsive */
      @media (max-width: 768px) {
        .text-4xl { font-size: 2rem; }
        .text-3xl { font-size: 1.5rem; }
        .grid-2, .grid-3 { 
          grid-template-columns: 1fr; 
          gap: 1.5rem;
        }
        .flex { 
          flex-direction: column; 
          align-items: center;
          gap: 1rem;
        }
        .py-16 { padding: 3rem 0; }
        .py-20 { padding: 3rem 0; }
      }
    `;

    // Template-specific styles
    switch (template.id) {
      case 'tech-consultant-pro':
        styles += `
          .bg-tech-hero { background: linear-gradient(135deg, #0f172a 0%, #374151 50%, #000000 100%); }
          .bg-tech-features { background: linear-gradient(135deg, #1f2937 0%, #374151 100%); }
          .bg-tech-pricing { background: linear-gradient(135deg, #374151 0%, #1f2937 100%); }
          .bg-tech-testimonials { background: linear-gradient(135deg, #1f2937 0%, #000000 100%); }
          .bg-tech-faq { background: linear-gradient(135deg, #374151 0%, #1f2937 100%); }
          .bg-tech-contact { background: linear-gradient(135deg, #1f2937 0%, #374151 100%); }
          .glass-effect {
            backdrop-filter: blur(20px);
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        `;
        break;
      case 'neon-academy-pro':
        styles += `
          .bg-neon-hero { background: linear-gradient(135deg, #000000 0%, #7c3aed 50%, #000000 100%); }
          .bg-neon-features { background: linear-gradient(135deg, #000000 0%, #581c87 100%); }
          .bg-neon-pricing { background: linear-gradient(135deg, #581c87 0%, #000000 100%); }
          .bg-neon-testimonials { background: linear-gradient(135deg, #000000 0%, #581c87 100%); }
          .bg-neon-faq { background: linear-gradient(135deg, #000000 0%, #581c87 100%); }
          .bg-neon-contact { background: linear-gradient(135deg, #581c87 0%, #000000 100%); }
          .neon-text {
            color: #00f5ff !important;
            text-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff;
          }
          .neon-glow {
            box-shadow: 0 0 20px #00f5ff, 0 0 40px #00f5ff;
          }
        `;
        break;
      default:
        styles += `
          .bg-default { background: linear-gradient(135deg, #374151 0%, #1e40af 100%); }
        `;
    }

    return styles;
  };

  // Generate exact section HTML matching PremiumSection
  const generateSectionHTML = (sectionType: string) => {
    switch (sectionType) {
      case 'hero':
        const heroClass = template.id === 'tech-consultant-pro' ? 'bg-tech-hero' :
                         template.id === 'neon-academy-pro' ? 'bg-neon-hero' : 'bg-default';
        const heroTextColor = template.id === 'neon-academy-pro' ? '#00f5ff' : 'white';
        return `
          <section class="py-20 px-6 ${heroClass}" style="min-height: 100vh; display: flex; align-items: center;">
            <div class="max-w-7xl mx-auto text-center">
              ${template.hero.badge ? `<div class="badge" style="color: ${heroTextColor};">${template.hero.badge}</div>` : ''}
              <h1 class="text-4xl font-bold mb-4 ${template.id === 'neon-academy-pro' ? 'neon-text' : ''}" style="color: ${heroTextColor};">
                ${template.hero.title}
              </h1>
              <h2 class="text-xl mb-6" style="color: ${heroTextColor}; opacity: 0.9;">
                ${template.hero.subtitle}
              </h2>
              <p class="text-lg mb-8" style="color: ${heroTextColor}; opacity: 0.8; max-width: 48rem; margin: 0 auto 2rem;">
                ${template.hero.description}
              </p>
              <div class="flex gap-4 justify-center">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                  ${template.hero.button1Text}
                </a>
                <a href="#features" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                  ${template.hero.button2Text}
                </a>
              </div>
            </div>
          </section>
        `;

      case 'features':
        const featuresClass = template.id === 'tech-consultant-pro' ? 'bg-tech-features' :
                             template.id === 'neon-academy-pro' ? 'bg-neon-features' : 'bg-default';
        const featuresTextColor = template.id === 'neon-academy-pro' ? '#00f5ff' : 'white';
        return `
          <section class="py-20 px-6 ${featuresClass}">
            <div class="max-w-7xl mx-auto">
              <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 ${template.id === 'neon-academy-pro' ? 'neon-text' : ''}" style="color: ${featuresTextColor};">
                  ${template.features.title}
                </h2>
              </div>
              <div class="grid-3">
                ${template.features.items.map((feature: any) => `
                  <div class="card">
                    <div style="width: 4rem; height: 4rem; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: ${template.styles.primaryColor}20; border: 2px solid ${template.styles.primaryColor}; color: ${template.styles.primaryColor}; font-size: 1.5rem; margin: 0 auto 1rem;">
                      <i class="ri-${feature.icon}"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-center" style="color: ${featuresTextColor};">${feature.title}</h3>
                    <p class="text-center" style="color: ${featuresTextColor}; opacity: 0.8;">${feature.description}</p>
                  </div>
                `).join('')}
              </div>
              <div class="flex gap-4 justify-center" style="margin-top: 3rem;">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                  ${template.features.button1Text}
                </a>
                <a href="#testimonials" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                  ${template.features.button2Text}
                </a>
              </div>
            </div>
          </section>
        `;

      case 'testimonials':
        const testimonialsClass = template.id === 'tech-consultant-pro' ? 'bg-tech-testimonials' :
                                 template.id === 'neon-academy-pro' ? 'bg-neon-testimonials' : 'bg-default';
        const testimonialsTextColor = template.id === 'neon-academy-pro' ? '#00f5ff' : 'white';
        return `
          <section class="py-16 px-6 ${testimonialsClass}">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2 class="text-3xl font-bold ${template.id === 'neon-academy-pro' ? 'neon-text' : ''}" style="color: ${testimonialsTextColor};">
                  ${template.testimonials.title}
                </h2>
              </div>
              <div class="grid-3 mb-12">
                ${template.testimonials.testimonials.map((testimonial: any) => `
                  <div class="card ${template.id === 'neon-academy-pro' ? 'neon-glow' : ''}">
                    <div class="flex mb-4">
                      ${Array(testimonial.rating).fill(0).map(() => '<span class="star">★</span>').join('')}
                    </div>
                    <p class="mb-4 text-right" style="font-style: italic; color: ${testimonialsTextColor}; opacity: 0.9;">
                      "${testimonial.content}"
                    </p>
                    <div>
                      <p class="font-bold" style="color: ${testimonialsTextColor};">${testimonial.name}</p>
                      <p style="opacity: 0.8; color: ${testimonialsTextColor};">${testimonial.role}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="flex gap-4 justify-center">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                  ${template.testimonials.button1Text}
                </a>
                <a href="#about" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                  ${template.testimonials.button2Text}
                </a>
              </div>
            </div>
          </section>
        `;

      case 'pricing':
        const pricingClass = template.id === 'tech-consultant-pro' ? 'bg-tech-pricing' :
                            template.id === 'neon-academy-pro' ? 'bg-neon-pricing' : 'bg-default';
        const pricingTextColor = template.id === 'neon-academy-pro' ? '#00f5ff' : 'white';
        return `
          <section class="py-16 px-6 ${pricingClass}">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2 class="text-3xl font-bold ${template.id === 'neon-academy-pro' ? 'neon-text' : ''}" style="color: ${pricingTextColor};">
                  ${template.pricing.title}
                </h2>
              </div>
              <div class="grid-3 mb-12">
                ${template.pricing.plans.map((plan: any) => `
                  <div class="card text-center ${plan.recommended ? 'border: 2px solid ' + template.styles.primaryColor + '; transform: scale(1.05);' : ''}">
                    <h3 class="text-2xl font-bold mb-4" style="color: ${pricingTextColor};">${plan.name}</h3>
                    <div class="mb-6">
                      <span class="text-4xl font-bold" style="color: ${template.styles.primaryColor};">${plan.price}</span>
                      <span style="opacity: 0.6; color: ${pricingTextColor};">/${plan.period}</span>
                    </div>
                    <ul style="list-style: none; padding: 0; margin-bottom: 1.5rem; text-align: right;">
                      ${plan.features.map((feature: string) => `
                        <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; color: ${pricingTextColor};">
                          <span style="color: ${template.styles.primaryColor};">✓</span>
                          ${feature}
                        </li>
                      `).join('')}
                    </ul>
                    <a href="#contact" class="btn" style="background-color: ${plan.recommended ? template.styles.primaryColor : template.styles.secondaryColor}; color: white; width: 100%; text-align: center;">${plan.buttonText}</a>
                  </div>
                `).join('')}
              </div>
              <div class="flex gap-4 justify-center">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                  ${template.pricing.button1Text}
                </a>
                <a href="#faq" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                  ${template.pricing.button2Text}
                </a>
              </div>
            </div>
          </section>
        `;

      case 'faq':
        const faqClass = template.id === 'tech-consultant-pro' ? 'bg-tech-faq' :
                        template.id === 'neon-academy-pro' ? 'bg-neon-faq' : 'bg-default';
        const faqTextColor = template.id === 'neon-academy-pro' ? '#00f5ff' : 'white';
        return `
          <section class="py-16 px-6 ${faqClass}">
            <div class="max-w-4xl mx-auto">
              <div class="text-center mb-12">
                <h2 class="text-3xl font-bold ${template.id === 'neon-academy-pro' ? 'neon-text' : ''}" style="color: ${faqTextColor};">
                  ${template.faq.title}
                </h2>
              </div>
              <div style="margin-bottom: 3rem;">
                ${template.faq.questions.map((faq: any, index: number) => `
                  <div class="card ${template.id === 'neon-academy-pro' ? 'neon-glow' : ''}" style="margin-bottom: 1rem;">
                    <h3 class="text-lg font-bold mb-2 text-right" style="color: ${faqTextColor};">${faq.question}</h3>
                    <p class="text-right" style="opacity: 0.8; color: ${faqTextColor};">${faq.answer}</p>
                  </div>
                `).join('')}
              </div>
              <div class="flex gap-4 justify-center">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                  ${template.faq.button1Text}
                </a>
                <a href="#final-cta" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                  ${template.faq.button2Text}
                </a>
              </div>
            </div>
          </section>
        `;

      case 'contact':
        const contactClass = template.id === 'tech-consultant-pro' ? 'bg-tech-contact' :
                            template.id === 'neon-academy-pro' ? 'bg-neon-contact' : 'bg-default';
        const contactTextColor = template.id === 'neon-academy-pro' ? '#00f5ff' : 'white';
        return `
          <section class="py-16 px-6 ${contactClass}">
            <div class="max-w-4xl mx-auto text-center">
              <h2 class="text-3xl font-bold mb-6 ${template.id === 'neon-academy-pro' ? 'neon-text' : ''}" style="color: ${contactTextColor};">
                ${template.contact.title}
              </h2>
              ${template.contact.subtitle ? `<p class="text-xl mb-8" style="opacity: 0.8; color: ${contactTextColor};">${template.contact.subtitle}</p>` : ''}
              <div class="card ${template.id === 'neon-academy-pro' ? 'neon-glow' : ''}" style="max-width: 32rem; margin: 0 auto;">
                <form style="display: flex; flex-direction: column; gap: 1rem;">
                  <input type="text" placeholder="שם מלא" style="padding: 1rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; text-align: right; font-size: 1rem; background: rgba(255,255,255,0.1); color: ${contactTextColor};" />
                  <input type="email" placeholder="אימייל" style="padding: 1rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; text-align: right; font-size: 1rem; background: rgba(255,255,255,0.1); color: ${contactTextColor};" />
                  <input type="tel" placeholder="טלפון" style="padding: 1rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; text-align: right; font-size: 1rem; background: rgba(255,255,255,0.1); color: ${contactTextColor};" />
                  <textarea placeholder="הודעה" rows="4" style="padding: 1rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; text-align: right; font-size: 1rem; resize: vertical; background: rgba(255,255,255,0.1); color: ${contactTextColor};"></textarea>
                  <button type="submit" class="btn" style="background-color: ${template.styles.primaryColor}; color: white; width: 100%;">${template.contact.buttonText}</button>
                </form>
              </div>
            </div>
          </section>
        `;

      default:
        return '';
    }
  };

  // Generate complete HTML
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.hero.title}</title>
    ${remixIconsLink}
    <style>
        ${getTemplateCSS()}
    </style>
</head>
<body>
    ${generateSectionHTML('hero')}
    
    ${template.emotional ? generateSectionHTML('emotional') : ''}
    
    ${generateSectionHTML('features')}
    
    ${generateSectionHTML('testimonials')}
    
    ${generateSectionHTML('pricing')}
    
    ${generateSectionHTML('faq')}
    
    ${generateSectionHTML('contact')}
    
    <footer class="py-8 px-4 text-center" style="background-color: ${template.styles.primaryColor}; color: white;">
        <p>&copy; 2024 ${template.footer.companyName}. כל הזכויות שמורות.</p>
    </footer>
</body>
</html>`;
};