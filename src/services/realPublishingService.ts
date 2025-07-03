import { TemplateData } from '@/types/template';

export class RealPublishingService {
  static async publishSite(template: TemplateData): Promise<string> {
    try {
      // Generate HTML content from template
      const htmlContent = this.generateHTMLFromTemplate(template);
      
      // Create a more user-friendly filename
      const siteName = template.hero.title.replace(/[^a-zA-Z0-9\u0590-\u05FF]/g, '-').toLowerCase();
      const timestamp = Date.now().toString().slice(-6); // Last 6 digits for uniqueness
      const filename = `${siteName}-${timestamp}.html`;
      
      // Create a blob URL with a better name
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      // Try to create a more user-friendly URL by using the filename
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      
      return url;
    } catch (error) {
      console.error('Publishing failed:', error);
      throw new Error('פרסום נכשל - נסה שוב');
    }
  }

  private static getIconSvg(iconName: string): string {
    // Map of common icon names to their SVG paths
    const iconMap: { [key: string]: string } = {
      'phone': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
      'mail': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m4 4 7.07 17 2.51-7.39L21 11.07z"></path></svg>',
      'user': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      'home': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="9,22 9,12 15,12 15,22"></polyline></svg>',
      'star': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>',
      'heart': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
      'rocket': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.5-2 4.5-2 4.5s3-0.5 4.5-2c0.08-0.11 0.17-0.23 0.25-0.36l-2.39-2.39c-0.13 0.08-0.25 0.17-0.36 0.25z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>',
      'arrow-right': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12,5 19,12 12,19"></polyline></svg>',
      'check': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>',
      'play': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5,3 19,12 5,21"></polygon></svg>',
      'download': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7,10 12,15 17,10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
    };
    
    return iconMap[iconName] || '';
  }

  private static generateHTMLFromTemplate(template: TemplateData): string {
    const { styles } = template;
    
    // Helper function to get background style (color or image)
    const getBackgroundStyle = (color: string, image?: string): string => {
      if (image) {
        return `background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${image}') center/cover no-repeat;`;
      }
      return `background: ${color};`;
    };

    // Helper function to create button with icon
    const createButtonWithIcon = (text: string, iconName?: string, isPrimary: boolean = true) => {
      const iconSvg = iconName ? this.getIconSvg(iconName) : '';
      const buttonClass = isPrimary ? 'btn-primary' : 'btn-secondary';
      return `<a href="#contact" class="${buttonClass}">${iconSvg}${text}</a>`;
    };
    
    return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.hero.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6;
            color: ${styles.textColor};
            background-color: ${styles.backgroundColor};
        }
        
        .hero-section { 
            ${getBackgroundStyle(styles.heroBackground, styles.heroBackgroundImage)}
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
            position: relative;
            overflow: hidden;
        }
        
        .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, ${styles.primaryColor}40 0%, transparent 50%);
            animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
            position: relative;
            z-index: 10;
        }
        
        .btn-primary {
            background: ${styles.primaryColor};
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0.5rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-weight: 600;
            box-shadow: 0 4px 15px ${styles.primaryColor}66;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px ${styles.primaryColor}99;
        }
        
        .btn-secondary {
            background: ${styles.secondaryColor};
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0.5rem;
            transition: all 0.3s ease;
            border: 2px solid ${styles.secondaryColor};
            cursor: pointer;
            font-weight: 600;
        }
        
        .btn-secondary:hover {
            background: transparent;
            color: ${styles.secondaryColor};
            transform: translateY(-2px);
        }

        .section {
            padding: 4rem 2rem;
            text-align: center;
        }
        
        .section-emotional {
            ${getBackgroundStyle(styles.emotionalBackground, styles.emotionalBackgroundImage)}
            color: ${styles.textColor};
        }
        
        .section-features {
            ${getBackgroundStyle(styles.featuresBackground, styles.featuresBackgroundImage)}
            color: ${styles.textColor};
        }
        
        .section-testimonials {
            ${getBackgroundStyle(styles.testimonialsBackground, styles.testimonialsBackgroundImage)}
            color: ${styles.textColor};
        }
        
        .section-about {
            ${getBackgroundStyle(styles.aboutBackground, styles.aboutBackgroundImage)}
            color: ${styles.textColor};
        }
        
        .section-pricing {
            ${getBackgroundStyle(styles.pricingBackground, styles.pricingBackgroundImage)}
            color: ${styles.textColor};
        }
        
        .section-faq {
            ${getBackgroundStyle(styles.faqBackground, styles.faqBackgroundImage)}
            color: ${styles.textColor};
        }
        
        .section-final-cta {
            ${getBackgroundStyle(styles.finalCtaBackground, styles.finalCtaBackgroundImage)}
            color: white;
        }
        
        .section-contact {
            ${getBackgroundStyle(styles.contactBackground, styles.contactBackgroundImage)}
            color: ${styles.textColor};
        }
        
        .card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 1rem;
            padding: 2rem;
            margin: 1rem;
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .grid {
            display: grid;
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .grid-auto {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        
        .testimonial-stars {
            color: ${styles.accentColor};
            font-size: 1.2rem;
            margin: 0.5rem 0;
        }
        
        .form-container {
            max-width: 500px;
            margin: 0 auto;
        }
        
        .form-input {
            width: 100%;
            padding: 1rem;
            margin: 0.5rem 0;
            border: 1px solid #ddd;
            border-radius: 0.5rem;
            font-size: 1rem;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: ${styles.primaryColor};
        }
        
        .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
        }
        
        .pricing-card {
            background: white;
            border: 2px solid #f0f0f0;
            border-radius: 1rem;
            padding: 2rem;
            margin: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        
        .pricing-card:hover {
            transform: translateY(-5px);
            border-color: ${styles.primaryColor};
        }
        
        .pricing-card.recommended {
            border-color: ${styles.primaryColor};
            background: linear-gradient(135deg, ${styles.primaryColor}10 0%, ${styles.primaryColor}05 100%);
        }
        
        .faq-item {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 0.75rem;
            margin: 1rem 0;
            overflow: hidden;
        }
        
        .faq-question {
            background: ${styles.primaryColor}10;
            padding: 1.5rem;
            font-weight: 600;
            cursor: pointer;
            user-select: none;
        }
        
        .faq-answer {
            padding: 1.5rem;
            border-top: 1px solid #e5e7eb;
        }
        
        footer {
            ${getBackgroundStyle(styles.footerBackground, styles.footerBackgroundImage)}
            color: white;
            padding: 2rem;
            text-align: center;
        }
        
        .badge {
            background: ${styles.accentColor};
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
            display: inline-block;
            margin-bottom: 1rem;
        }
        
        @media (max-width: 768px) {
            .hero-section h1 { font-size: 2.5rem !important; }
            .section { padding: 2rem 1rem; }
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            ${template.hero.badge ? `<div class="badge">${template.hero.badge}</div>` : ''}
            <h1 style="font-size: 3.5rem; font-weight: bold; margin-bottom: 1.5rem;">${template.hero.title}</h1>
            <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">${template.hero.subtitle}</p>
            ${template.hero.description ? `<p style="font-size: 1.1rem; margin-bottom: 3rem; opacity: 0.8;">${template.hero.description}</p>` : ''}
            <div style="margin-bottom: 3rem;">
                ${createButtonWithIcon(template.hero.button1Text, template.hero.button1Icon, true)}
                ${createButtonWithIcon(template.hero.button2Text, template.hero.button2Icon, false)}
            </div>
        </div>
    </section>

    <!-- Emotional Section -->
    ${template.emotional?.title ? `
    <section id="emotional" class="section section-emotional">
        <div class="container">
            ${template.emotional.badge ? `<div class="badge">${template.emotional.badge}</div>` : ''}
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 2rem;">${template.emotional.title}</h2>
            <p style="font-size: 1.125rem; max-width: 800px; margin: 0 auto 3rem;">${template.emotional.description}</p>
            <div>
                ${createButtonWithIcon(template.emotional.button1Text, template.emotional.button1Icon, true)}
                ${createButtonWithIcon(template.emotional.button2Text, template.emotional.button2Icon, false)}
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Features Section -->
    <section id="features" class="section section-features">
        <div class="container">
            ${template.features?.badge ? `<div class="badge">${template.features.badge}</div>` : ''}
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 3rem;">${template.features?.title || 'השירותים שלנו'}</h2>
            <div class="grid grid-auto">
                ${template.features?.items?.map(item => `
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: ${styles.primaryColor};">${item.title}</h3>
                        <p style="opacity: 0.8;">${item.description}</p>
                    </div>
                `).join('') || `
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: ${styles.primaryColor};">שירות איכותי</h3>
                        <p style="opacity: 0.8;">אנחנו מספקים שירות ברמה הגבוהה ביותר</p>
                    </div>
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: ${styles.primaryColor};">מחירים הוגנים</h3>
                        <p style="opacity: 0.8;">מחירים תחרותיים וללא הפתעות</p>
                    </div>
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: ${styles.primaryColor};">זמינות 24/7</h3>
                        <p style="opacity: 0.8;">אנחנו כאן בשבילך בכל שעה</p>
                    </div>
                `}
            </div>
            <div style="margin-top: 3rem;">
                ${createButtonWithIcon(template.features?.button1Text || 'התחל עכשיו', template.features?.button1Icon, true)}
                ${createButtonWithIcon(template.features?.button2Text || 'למד עוד', template.features?.button2Icon, false)}
            </div>
        </div>
    </section>

    ${template.testimonials?.testimonials?.length ? `
    <!-- Testimonials Section -->
    <section id="testimonials" class="section section-testimonials">
        <div class="container">
            ${template.testimonials.badge ? `<div class="badge">${template.testimonials.badge}</div>` : ''}
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 3rem;">${template.testimonials.title}</h2>
            <div class="grid grid-auto">
                ${template.testimonials.testimonials.map(testimonial => `
                    <div class="card">
                        <div class="testimonial-stars">${'★'.repeat(testimonial.rating || 5)}</div>
                        <p style="font-size: 1.125rem; margin: 1rem 0; font-style: italic;">"${testimonial.content}"</p>
                        <div style="margin-top: 1rem;">
                            <strong>${testimonial.name}</strong>
                            <span style="color: ${styles.secondaryColor}; margin-right: 0.5rem;">- ${testimonial.role}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div style="margin-top: 3rem;">
                ${createButtonWithIcon(template.testimonials.button1Text, template.testimonials.button1Icon, true)}
                ${createButtonWithIcon(template.testimonials.button2Text, template.testimonials.button2Icon, false)}
            </div>
        </div>
    </section>
    ` : ''}

    <!-- About Section -->
    <section id="about" class="section section-about">
        <div class="container">
            ${template.about?.badge ? `<div class="badge">${template.about.badge}</div>` : ''}
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 2rem;">${template.about?.title || 'אודותינו'}</h2>
            <p style="font-size: 1.125rem; max-width: 800px; margin: 0 auto 3rem;">${template.about?.description || 'אנחנו מספקים שירותים מקצועיים ואיכותיים ללקוחותינו.'}</p>
            ${template.about?.stats?.length ? `
            <div class="stats-grid">
                ${template.about.stats.map(stat => `
                    <div class="stat-item">
                        <div class="stat-number">${stat.number}</div>
                        <div class="stat-label">${stat.label}</div>
                    </div>
                `).join('')}
            </div>
            ` : ''}
            <div>
                ${createButtonWithIcon(template.about?.button1Text || 'צור קשר', template.about?.button1Icon, true)}
                ${createButtonWithIcon(template.about?.button2Text || 'השירותים שלנו', template.about?.button2Icon, false)}
            </div>
        </div>
    </section>

    ${template.pricing?.plans?.length ? `
    <!-- Pricing Section -->
    <section id="pricing" class="section section-pricing">
        <div class="container">
            ${template.pricing.badge ? `<div class="badge">${template.pricing.badge}</div>` : ''}
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 3rem;">${template.pricing.title}</h2>
            <div class="grid grid-auto">
                ${template.pricing.plans.map(plan => `
                    <div class="pricing-card ${plan.recommended ? 'recommended' : ''}">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: ${styles.primaryColor};">${plan.name}</h3>
                        <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: ${styles.primaryColor};">${plan.price}</div>
                        <p style="margin-bottom: 2rem; opacity: 0.8;">${plan.period}</p>
                        <ul style="text-align: right; margin-bottom: 2rem;">
                            ${plan.features.map(feature => `<li style="margin: 0.5rem 0;">✓ ${feature}</li>`).join('')}
                        </ul>
                        <a href="#contact" class="btn-primary" style="width: 100%; text-align: center;">${plan.buttonText}</a>
                    </div>
                `).join('')}
            </div>
            <div style="margin-top: 3rem;">
                ${createButtonWithIcon(template.pricing.button1Text, template.pricing.button1Icon, true)}
                ${createButtonWithIcon(template.pricing.button2Text, template.pricing.button2Icon, false)}
            </div>
        </div>
    </section>
    ` : ''}

    ${template.faq?.questions?.length ? `
    <!-- FAQ Section -->
    <section id="faq" class="section section-faq">
        <div class="container">
            ${template.faq.badge ? `<div class="badge">${template.faq.badge}</div>` : ''}
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 3rem;">${template.faq.title}</h2>
            <div style="max-width: 800px; margin: 0 auto;">
                ${template.faq.questions.map(faq => `
                    <div class="faq-item">
                        <div class="faq-question">${faq.question}</div>
                        <div class="faq-answer">${faq.answer}</div>
                    </div>
                `).join('')}
            </div>
            <div style="margin-top: 3rem;">
                ${createButtonWithIcon(template.faq.button1Text, template.faq.button1Icon, true)}
                ${createButtonWithIcon(template.faq.button2Text, template.faq.button2Icon, false)}
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Final CTA Section -->
    <section id="final-cta" class="section section-final-cta">
        <div class="container">
            ${template.finalCta?.badge ? `<div class="badge">${template.finalCta.badge}</div>` : ''}
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 2rem;">${template.finalCta?.title || 'מוכנים להתחיל?'}</h2>
            <p style="font-size: 1.125rem; margin-bottom: 3rem; opacity: 0.9;">${template.finalCta?.description || 'בואו נתחיל לעבוד יחד עוד היום!'}</p>
            <div>
                ${createButtonWithIcon(template.finalCta?.button1Text || 'התחל עכשיו', template.finalCta?.button1Icon, true)}
                ${createButtonWithIcon(template.finalCta?.button2Text || 'למד עוד', template.finalCta?.button2Icon, false)}
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section section-contact">
        <div class="container">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 2rem;">${template.contact?.title || 'צור קשר'}</h2>
            <p style="font-size: 1.125rem; margin-bottom: 3rem; opacity: 0.9;">נשמח לשמוע ממך ולעזור לך</p>
            <div class="form-container">
                <form onsubmit="handleSubmit(event)">
                    <input type="text" placeholder="שם מלא" class="form-input" required>
                    <input type="email" placeholder="כתובת אימייל" class="form-input" required>
                    <input type="tel" placeholder="מספר טלפון" class="form-input">
                    <textarea placeholder="איך נוכל לעזור לך?" rows="4" class="form-input" required></textarea>
                    <button type="submit" class="btn-primary" style="width: 100%; margin-top: 1rem;">${template.contact?.buttonText || 'שלח הודעה'}</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2024 ${template.footer?.companyName || template.hero.title}. כל הזכויות שמורות.</p>
            <p style="font-size: 0.875rem; margin-top: 0.5rem; opacity: 0.7;">נבנה באמצעות LEADGRID</p>
        </div>
    </footer>

    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Handle form submission
        function handleSubmit(event) {
            event.preventDefault();
            alert('תודה על פנייתך! נחזור אליך בהקדם האפשרי.');
            event.target.reset();
        }

        // Add interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card, .pricing-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Add fade-in animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });

            document.querySelectorAll('.section').forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            });
        });
    </script>
</body>
</html>`;
  }
}
