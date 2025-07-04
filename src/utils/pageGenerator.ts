// Complete HTML Generator - Creates exact HTML from template preview
export const generatePageHTML = (templateData: any) => {
  const template = templateData;
  
  // Generate styling for each section based on template styles
  const getSectionStyle = (bgColor: string, bgImage?: string) => {
    let style = `background-color: ${bgColor};`;
    if (bgImage) {
      style += `background-image: url(${bgImage}); background-size: cover; background-position: center; background-repeat: no-repeat;`;
    }
    return style;
  };

  // Generate complete HTML with all sections
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.hero.title}</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: ${template.styles.textColor};
            background-color: ${template.styles.backgroundColor};
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
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
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
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
        }
        
        .card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .star {
            color: #fbbf24;
            font-size: 1.2rem;
        }
        
        /* Section Backgrounds */
        .hero { 
            ${getSectionStyle(template.styles.heroBackground, template.styles.heroBackgroundImage)}
            padding: 5rem 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
        }
        
        .emotional { 
            ${getSectionStyle(template.styles.emotionalBackground, template.styles.emotionalBackgroundImage)}
            padding: 4rem 0;
            position: relative;
        }
        
        .features { 
            ${getSectionStyle(template.styles.featuresBackground, template.styles.featuresBackgroundImage)}
            padding: 4rem 0;
            position: relative;
        }
        
        .testimonials { 
            ${getSectionStyle(template.styles.testimonialsBackground, template.styles.testimonialsBackgroundImage)}
            padding: 4rem 0;
            position: relative;
        }
        
        .about { 
            ${getSectionStyle(template.styles.aboutBackground, template.styles.aboutBackgroundImage)}
            padding: 4rem 0;
            position: relative;
        }
        
        .pricing { 
            ${getSectionStyle(template.styles.pricingBackground, template.styles.pricingBackgroundImage)}
            padding: 4rem 0;
            position: relative;
        }
        
        .faq { 
            ${getSectionStyle(template.styles.faqBackground, template.styles.faqBackgroundImage)}
            padding: 4rem 0;
            position: relative;
        }
        
        .final-cta { 
            ${getSectionStyle(template.styles.finalCtaBackground, template.styles.finalCtaBackgroundImage)}
            padding: 4rem 0;
            position: relative;
        }
        
        .contact { 
            ${getSectionStyle(template.styles.contactBackground, template.styles.contactBackgroundImage)}
            padding: 4rem 0;
            position: relative;
        }
        
        .footer { 
            ${getSectionStyle(template.styles.footerBackground, template.styles.footerBackgroundImage)}
            padding: 3rem 0;
            position: relative;
        }
        
        /* Background overlay for sections with images */
        .bg-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.4);
            z-index: 1;
        }
        
        .content {
            position: relative;
            z-index: 2;
        }
        
        /* Grid layouts */
        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; }
        
        /* Text alignments */
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        
        /* Flex utilities */
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-wrap { flex-wrap: wrap; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .gap-1 { gap: 0.5rem; }
        .gap-2 { gap: 1rem; }
        .gap-3 { gap: 1.5rem; }
        .gap-4 { gap: 2rem; }
        
        /* Spacing */
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 1rem; }
        .mb-4 { margin-bottom: 1.5rem; }
        .mb-6 { margin-bottom: 2rem; }
        .mb-8 { margin-bottom: 3rem; }
        .mb-12 { margin-bottom: 4rem; }
        
        /* Typography */
        .text-4xl { font-size: 2.5rem; }
        .text-3xl { font-size: 2rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-xl { font-size: 1.25rem; }
        .text-lg { font-size: 1.125rem; }
        .text-sm { font-size: 0.875rem; }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        
        /* Colors based on template */
        .text-primary { color: ${template.styles.primaryColor}; }
        .text-secondary { color: ${template.styles.secondaryColor}; }
        .text-accent { color: ${template.styles.accentColor}; }
        .text-white { color: white; }
        .bg-primary { background-color: ${template.styles.primaryColor}; }
        .bg-secondary { background-color: ${template.styles.secondaryColor}; }
        .bg-accent { background-color: ${template.styles.accentColor}; }
        
        /* Feature icons */
        .feature-icon {
            width: 4rem;
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: ${template.styles.primaryColor}20;
            border: 2px solid ${template.styles.primaryColor};
            color: ${template.styles.primaryColor};
            font-size: 1.5rem;
            margin: 0 auto 1rem;
        }
        
        /* Accordion styles */
        .accordion-item {
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            margin-bottom: 1rem;
            overflow: hidden;
        }
        
        .accordion-header {
            background: #f9fafb;
            padding: 1rem;
            cursor: pointer;
            font-weight: 600;
            border: none;
            width: 100%;
            text-align: right;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .accordion-content {
            padding: 1rem;
            background: white;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .text-4xl { font-size: 2rem; }
            .text-3xl { font-size: 1.5rem; }
            .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
            .flex { 
                flex-direction: column; 
                align-items: center;
                gap: 1rem;
            }
            .flex .btn {
                width: 100%;
                max-width: 280px;
                text-align: center;
                justify-content: center;
            }
            .hero { padding: 3rem 0; min-height: auto; }
            .container { padding: 0 1.5rem; }
            .text-center { text-align: center; }
            
            /* Center all content blocks in mobile */
            .content > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
        }
    </style>
</head>
<body>

    <!-- Hero Section -->
    <section class="hero">
        ${template.styles.heroBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center">
                ${template.hero.badge ? `<div class="badge" style="color: ${template.styles.heroBackgroundImage ? 'white' : template.styles.accentColor}; border-color: ${template.styles.heroBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.accentColor};">${template.hero.badge}</div>` : ''}
                <h1 class="text-4xl font-bold mb-4" style="color: ${template.styles.heroBackgroundImage ? 'white' : template.styles.textColor};">${template.hero.title}</h1>
                <h2 class="text-xl mb-6" style="color: ${template.styles.heroBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.9;">${template.hero.subtitle}</h2>
                <p class="text-lg mb-8" style="color: ${template.styles.heroBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8; max-width: 48rem; margin: 0 auto 2rem;">${template.hero.description}</p>
                <div class="flex gap-2 justify-center flex-wrap">
                    <a href="#contact" class="btn" style="background-color: ${template.styles.accentColor}; color: white;">
                        ${template.hero.button1Icon ? `<i class="ri-${template.hero.button1Icon}"></i>` : ''}
                        ${template.hero.button1Text}
                    </a>
                    <a href="#features" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                        ${template.hero.button2Icon ? `<i class="ri-${template.hero.button2Icon}"></i>` : ''}
                        ${template.hero.button2Text}
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Emotional Section -->
    <section class="emotional">
        ${template.styles.emotionalBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center">
                ${template.emotional.badge ? `<div class="badge" style="color: ${template.styles.emotionalBackgroundImage ? 'white' : template.styles.primaryColor}; border-color: ${template.styles.emotionalBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.emotional.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-6" style="color: ${template.styles.emotionalBackgroundImage ? 'white' : template.styles.textColor};">${template.emotional.title}</h2>
                <p class="text-lg mb-8" style="color: ${template.styles.emotionalBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.9; max-width: 64rem; margin: 0 auto 2rem;">${template.emotional.description}</p>
                <div class="flex gap-2 justify-center flex-wrap">
                    <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                        ${template.emotional.button1Icon ? `<i class="ri-${template.emotional.button1Icon}"></i>` : ''}
                        ${template.emotional.button1Text}
                    </a>
                    <a href="#features" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                        ${template.emotional.button2Icon ? `<i class="ri-${template.emotional.button2Icon}"></i>` : ''}
                        ${template.emotional.button2Text}
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
        ${template.styles.featuresBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-12">
                ${template.features.badge ? `<div class="badge" style="color: ${template.styles.featuresBackgroundImage ? 'white' : template.styles.primaryColor}; border-color: ${template.styles.featuresBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.features.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-4" style="color: ${template.styles.featuresBackgroundImage ? 'white' : template.styles.textColor};">${template.features.title}</h2>
                ${template.features.subtitle ? `<p class="text-xl" style="color: ${template.styles.featuresBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">${template.features.subtitle}</p>` : ''}
            </div>
            
            <div class="grid-4 mb-12">
                ${template.features.items.map((item: any) => `
                    <div class="card text-center">
                        <div class="feature-icon">
                            <i class="ri-${item.icon === 'user-heart-line' ? 'heart-3-line' : item.icon === 'monitor-line' ? 'computer-line' : item.icon === 'film-line' ? 'film-line' : item.icon}"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2" style="color: ${template.styles.textColor};">${item.title}</h3>
                        <p style="color: ${template.styles.textColor}; opacity: 0.8;">${item.description}</p>
                    </div>
                `).join('')}
            </div>

            <div class="flex gap-2 justify-center flex-wrap">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                    ${template.features.button1Icon ? `<i class="ri-${template.features.button1Icon}"></i>` : ''}
                    ${template.features.button1Text}
                </a>
                <a href="#testimonials" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                    ${template.features.button2Icon ? `<i class="ri-${template.features.button2Icon}"></i>` : ''}
                    ${template.features.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials">
        ${template.styles.testimonialsBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-12">
                ${template.testimonials.badge ? `<div class="badge" style="color: ${template.styles.testimonialsBackgroundImage ? 'white' : template.styles.primaryColor}; border-color: ${template.styles.testimonialsBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.testimonials.badge}</div>` : ''}
                <h2 class="text-3xl font-bold" style="color: ${template.styles.testimonialsBackgroundImage ? 'white' : template.styles.textColor};">${template.testimonials.title}</h2>
            </div>
            
            <div class="grid-3 mb-12">
                ${template.testimonials.testimonials.map((testimonial: any) => `
                    <div class="card">
                        <div class="flex mb-4">
                            ${Array(testimonial.rating).fill(0).map(() => '<span class="star">★</span>').join('')}
                        </div>
                        <p class="mb-4" style="color: ${template.styles.textColor}; font-style: italic;">"${testimonial.content}"</p>
                        <div>
                            <p class="font-bold" style="color: ${template.styles.textColor};">${testimonial.name}</p>
                            <p class="text-sm" style="color: ${template.styles.textColor}; opacity: 0.8;">${testimonial.role}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="flex gap-2 justify-center flex-wrap">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                    ${template.testimonials.button1Icon ? `<i class="ri-${template.testimonials.button1Icon}"></i>` : ''}
                    ${template.testimonials.button1Text}
                </a>
                <a href="#about" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                    ${template.testimonials.button2Icon ? `<i class="ri-${template.testimonials.button2Icon}"></i>` : ''}
                    ${template.testimonials.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        ${template.styles.aboutBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-12">
                ${template.about.badge ? `<div class="badge" style="color: ${template.styles.aboutBackgroundImage ? 'white' : template.styles.secondaryColor}; border-color: ${template.styles.aboutBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.secondaryColor};">${template.about.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-6" style="color: ${template.styles.aboutBackgroundImage ? 'white' : template.styles.textColor};">${template.about.title}</h2>
                <p class="text-lg" style="color: ${template.styles.aboutBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.9; max-width: 64rem; margin: 0 auto;">${template.about.description}</p>
            </div>
            
            ${template.about.stats && template.about.stats.length > 0 ? `
                <div class="grid-3 text-center mb-12">
                    ${template.about.stats.map((stat: any) => `
                        <div>
                            <div class="text-4xl font-bold mb-2" style="color: ${template.styles.primaryColor};">${stat.number}</div>
                            <div class="text-lg" style="color: ${template.styles.aboutBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">${stat.label}</div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            <div class="flex gap-2 justify-center flex-wrap">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                    ${template.about.button1Icon ? `<i class="ri-${template.about.button1Icon}"></i>` : ''}
                    ${template.about.button1Text}
                </a>
                <a href="#pricing" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                    ${template.about.button2Icon ? `<i class="ri-${template.about.button2Icon}"></i>` : ''}
                    ${template.about.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
        ${template.styles.pricingBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-12">
                ${template.pricing.badge ? `<div class="badge" style="color: ${template.styles.pricingBackgroundImage ? 'white' : template.styles.primaryColor}; border-color: ${template.styles.pricingBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.pricing.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-4" style="color: ${template.styles.pricingBackgroundImage ? 'white' : template.styles.textColor};">${template.pricing.title}</h2>
                ${template.pricing.subtitle ? `<p class="text-xl" style="color: ${template.styles.pricingBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">${template.pricing.subtitle}</p>` : ''}
            </div>
            
            <div class="grid-3 mb-12">
                ${template.pricing.plans.map((plan: any) => `
                    <div class="card text-center ${plan.recommended ? 'border: 2px solid ' + template.styles.primaryColor + '; transform: scale(1.05);' : ''}">
                        <h3 class="text-2xl font-bold mb-4" style="color: ${template.styles.textColor};">${plan.name}</h3>
                        <div class="mb-6">
                            <span class="text-4xl font-bold" style="color: ${template.styles.primaryColor};">${plan.price}</span>
                            <span style="color: ${template.styles.textColor}; opacity: 0.6;">/${plan.period}</span>
                        </div>
                        <ul class="text-right mb-6" style="list-style: none; padding: 0;">
                            ${plan.features.map((feature: string) => `
                                <li class="flex items-center gap-2 mb-2" style="color: ${template.styles.textColor};">
                                    <span style="color: ${template.styles.primaryColor};">✓</span>
                                    ${feature}
                                </li>
                            `).join('')}
                        </ul>
                        <a href="#contact" class="btn" style="background-color: ${plan.recommended ? template.styles.primaryColor : template.styles.secondaryColor}; color: white; width: 100%;">${plan.buttonText}</a>
                    </div>
                `).join('')}
            </div>

            <div class="flex gap-2 justify-center flex-wrap">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                    ${template.pricing.button1Icon ? `<i class="ri-${template.pricing.button1Icon}"></i>` : ''}
                    ${template.pricing.button1Text}
                </a>
                <a href="#faq" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                    ${template.pricing.button2Icon ? `<i class="ri-${template.pricing.button2Icon}"></i>` : ''}
                    ${template.pricing.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq">
        ${template.styles.faqBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-12">
                ${template.faq.badge ? `<div class="badge" style="color: ${template.styles.faqBackgroundImage ? 'white' : template.styles.primaryColor}; border-color: ${template.styles.faqBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.faq.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-4" style="color: ${template.styles.faqBackgroundImage ? 'white' : template.styles.textColor};">${template.faq.title}</h2>
                ${template.faq.subtitle ? `<p class="text-xl" style="color: ${template.styles.faqBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">${template.faq.subtitle}</p>` : ''}
            </div>
            
            <div class="mb-12" style="max-width: 48rem; margin: 0 auto;">
                ${template.faq.questions.map((faq: any, index: number) => `
                    <div class="accordion-item">
                        <button class="accordion-header" onclick="toggleAccordion(${index})" style="color: ${template.styles.textColor};">
                            ${faq.question}
                            <span id="icon-${index}">+</span>
                        </button>
                        <div id="content-${index}" class="accordion-content" style="display: none; color: ${template.styles.textColor};">
                            ${faq.answer}
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="flex gap-2 justify-center flex-wrap">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                    ${template.faq.button1Icon ? `<i class="ri-${template.faq.button1Icon}"></i>` : ''}
                    ${template.faq.button1Text}
                </a>
                <a href="#final-cta" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                    ${template.faq.button2Icon ? `<i class="ri-${template.faq.button2Icon}"></i>` : ''}
                    ${template.faq.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section id="final-cta" class="final-cta">
        ${template.styles.finalCtaBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center">
                ${template.finalCta.badge ? `<div class="badge" style="color: ${template.styles.finalCtaBackgroundImage ? 'white' : template.styles.accentColor}; border-color: ${template.styles.finalCtaBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.accentColor};">${template.finalCta.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-6" style="color: ${template.styles.finalCtaBackgroundImage ? 'white' : template.styles.textColor};">${template.finalCta.title}</h2>
                <p class="text-lg mb-8" style="color: ${template.styles.finalCtaBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.9; max-width: 48rem; margin: 0 auto 2rem;">${template.finalCta.description}</p>
                <div class="flex gap-2 justify-center flex-wrap">
                    <a href="#contact" class="btn" style="background-color: ${template.styles.accentColor}; color: white;">
                        ${template.finalCta.button1Icon ? `<i class="ri-${template.finalCta.button1Icon}"></i>` : ''}
                        ${template.finalCta.button1Text}
                    </a>
                    <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                        ${template.finalCta.button2Icon ? `<i class="ri-${template.finalCta.button2Icon}"></i>` : ''}
                        ${template.finalCta.button2Text}
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        ${template.styles.contactBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold mb-4" style="color: ${template.styles.contactBackgroundImage ? 'white' : template.styles.textColor};">${template.contact.title}</h2>
                ${template.contact.subtitle ? `<p class="text-xl" style="color: ${template.styles.contactBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">${template.contact.subtitle}</p>` : ''}
            </div>
            
            <div style="max-width: 32rem; margin: 0 auto;">
                <form class="card">
                    ${template.contact.fields ? template.contact.fields.map((field: any) => `
                        <div class="mb-4">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: ${template.styles.textColor};">${field.placeholder}</label>
                            ${field.type === 'textarea' ? 
                                `<textarea placeholder="${field.placeholder}" ${field.required ? 'required' : ''} style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-family: inherit;"></textarea>` :
                                `<input type="${field.type}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''} style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px;">`
                            }
                        </div>
                    `).join('') : `
                        <div class="mb-4">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: ${template.styles.textColor};">שם מלא</label>
                            <input type="text" placeholder="שם מלא" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px;">
                        </div>
                        <div class="mb-4">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: ${template.styles.textColor};">אימייל</label>
                            <input type="email" placeholder="אימייל" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px;">
                        </div>
                        <div class="mb-4">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: ${template.styles.textColor};">הודעה</label>
                            <textarea placeholder="הודעה" rows="4" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-family: inherit;"></textarea>
                        </div>
                    `}
                    <button type="submit" class="btn" style="background-color: ${template.styles.primaryColor}; color: white; width: 100%;">
                        ${template.contact.buttonText}
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        ${template.styles.footerBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center">
                <h3 class="text-xl font-bold mb-2" style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.textColor};">${template.hero?.title || 'העסק שלנו'}</h3>
                ${template.footer.description ? `<p class="mb-4" style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">${template.footer.description}</p>` : ''}
                
                ${template.footer.contactInfo ? `
                    <div class="flex gap-4 justify-center flex-wrap mb-4">
                        <span style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">📧 info.Leadgrid@gmail.com</span>
                    </div>
                ` : ''}
                
                ${template.footer.socialMedia && template.footer.socialMedia.length > 0 ? `
                    <div class="flex gap-3 justify-center mb-4">
                        ${template.footer.socialMedia.map((social: any) => `
                            <a href="${social.href}" style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.primaryColor}; font-size: 1.5rem;">
                                <i class="ri-${social.icon}"></i>
                            </a>
                        `).join('')}
                    </div>
                ` : ''}
                
                <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 1rem; margin-top: 2rem;">
                    <p style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.6; font-size: 0.875rem;">
                        &copy; ${new Date().getFullYear()} ${template.formData?.businessName || template.businessInfo?.companyName || template.hero?.title || 'העסק שלנו'}. כל הזכויות שמורות.
                    </p>
                    <p style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.5; font-size: 0.75rem; margin-top: 0.5rem;">
                        נוצר עם LeadGrid
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <script>
        function toggleAccordion(index) {
            const content = document.getElementById('content-' + index);
            const icon = document.getElementById('icon-' + index);
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                icon.textContent = '-';
            } else {
                content.style.display = 'none';
                icon.textContent = '+';
            }
        }
    </script>
</body>
</html>`;
};