
import { TemplateData } from '@/types/template';

export class RealPublishingService {
  static async publishSite(template: TemplateData): Promise<string> {
    try {
      // Generate HTML content from template
      const htmlContent = this.generateHTMLFromTemplate(template);
      
      // Create a blob URL that can be opened in browser
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      return url;
    } catch (error) {
      console.error('Publishing failed:', error);
      throw new Error('פרסום נכשל - נסה שוב');
    }
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
            display: inline-block;
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
            display: inline-block;
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
                <a href="#contact" class="btn-primary">${template.hero.button1Text}</a>
                <a href="#about" class="btn-secondary">${template.hero.button2Text}</a>
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
                <a href="#contact" class="btn-primary">${template.emotional.button1Text}</a>
                <a href="#features" class="btn-secondary">${template.emotional.button2Text}</a>
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
                <a href="#contact" class="btn-primary">${template.features?.button1Text || 'התחל עכשיו'}</a>
                <a href="#about" class="btn-secondary">${template.features?.button2Text || 'למד עוד'}</a>
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
                <a href="#contact" class="btn-primary">${template.testimonials.button1Text}</a>
                <a href="#features" class="btn-secondary">${template.testimonials.button2Text}</a>
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
                <a href="#contact" class="btn-primary">${template.about?.button1Text || 'צור קשר'}</a>
                <a href="#features" class="btn-secondary">${template.about?.button2Text || 'השירותים שלנו'}</a>
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
                <a href="#contact" class="btn-primary">${template.pricing.button1Text}</a>
                <a href="#about" class="btn-secondary">${template.pricing.button2Text}</a>
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
                <a href="#contact" class="btn-primary">${template.faq.button1Text}</a>
                <a href="#about" class="btn-secondary">${template.faq.button2Text}</a>
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
                <a href="#contact" class="btn-primary">${template.finalCta?.button1Text || 'התחל עכשיו'}</a>
                <a href="#about" class="btn-secondary">${template.finalCta?.button2Text || 'למד עוד'}</a>
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
