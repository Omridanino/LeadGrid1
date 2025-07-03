
import { TemplateData } from '@/types/template';

export class RealPublishingService {
  static async publishSite(template: TemplateData): Promise<string> {
    try {
      // Generate HTML content from template
      const htmlContent = this.generateHTMLFromTemplate(template);
      
      // Create a blob URL that can be opened in browser
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      return url;
    } catch (error) {
      console.error('Publishing failed:', error);
      throw new Error('פרסום נכשל - נסה שוב');
    }
  }

  private static generateHTMLFromTemplate(template: TemplateData): string {
    return `
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.hero.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            margin: 0;
            padding: 0;
        }
        .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .hero-section { 
            background: ${template.styles.heroBackground || '#000000'};
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
        }
        .btn-primary {
            background: ${template.styles.primaryColor || '#3b82f6'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            text-decoration: none;
            display: inline-block;
            margin: 0.5rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        .btn-secondary {
            background: transparent;
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            text-decoration: none;
            display: inline-block;
            margin: 0.5rem;
            transition: all 0.3s ease;
            border: 2px solid white;
            cursor: pointer;
        }
        .btn-secondary:hover {
            background: white;
            color: ${template.styles.primaryColor || '#3b82f6'};
        }
        .section {
            padding: 4rem 2rem;
            text-align: center;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .feature-card {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            margin: 1rem;
            flex: 1;
            min-width: 250px;
        }
        .features-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            margin-top: 3rem;
        }
        .contact-form {
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
        .testimonial-card {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            margin: 1rem auto;
            max-width: 600px;
        }
        .stars {
            color: #fbbf24;
            font-size: 1.2rem;
            margin: 0.5rem 0;
        }
        @media (max-width: 768px) {
            .hero-section h1 { font-size: 2.5rem; }
            .features-grid { flex-direction: column; align-items: center; }
            .feature-card { min-width: auto; width: 100%; max-width: 400px; }
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <h1 style="font-size: 3.5rem; font-weight: bold; margin-bottom: 1.5rem;">${template.hero.title}</h1>
            <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">${template.hero.subtitle}</p>
            ${template.hero.description ? `<p style="font-size: 1.1rem; margin-bottom: 3rem; opacity: 0.8;">${template.hero.description}</p>` : ''}
            <div>
                <a href="#contact" class="btn-primary">${template.hero.button1Text}</a>
                <a href="#about" class="btn-secondary">${template.hero.button2Text}</a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section" style="background-color: #f8fafc;">
        <div class="container">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 2rem; color: #1f2937;">${template.about?.title || 'אודותינו'}</h2>
            <p style="font-size: 1.125rem; color: #4b5563; max-width: 800px; margin: 0 auto;">${template.about?.description || 'אנחנו מספקים שירותים מקצועיים ואיכותיים ללקוחותינו.'}</p>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section">
        <div class="container">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 3rem; color: #1f2937;">${template.features?.title || 'השירותים שלנו'}</h2>
            <div class="features-grid">
                ${template.features?.items?.map(item => `
                    <div class="feature-card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">${item.title}</h3>
                        <p style="color: #6b7280;">${item.description}</p>
                    </div>
                `).join('') || `
                    <div class="feature-card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">שירות איכותי</h3>
                        <p style="color: #6b7280;">אנחנו מספקים שירות ברמה הגבוהה ביותר</p>
                    </div>
                    <div class="feature-card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">מחירים הוגנים</h3>
                        <p style="color: #6b7280;">מחירים תחרותיים וללא הפתעות</p>
                    </div>
                    <div class="feature-card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937;">זמינות 24/7</h3>
                        <p style="color: #6b7280;">אנחנו כאן בשבילך בכל שעה</p>
                    </div>
                `}
            </div>
        </div>
    </section>

    ${template.testimonials?.testimonials?.length ? `
    <!-- Testimonials Section -->
    <section id="testimonials" class="section" style="background-color: #f8fafc;">
        <div class="container">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 3rem; color: #1f2937;">${template.testimonials.title}</h2>
            ${template.testimonials.testimonials.map(testimonial => `
                <div class="testimonial-card">
                    <div class="stars">${'★'.repeat(testimonial.rating || 5)}</div>
                    <p style="font-size: 1.125rem; color: #4b5563; margin: 1rem 0; font-style: italic;">"${testimonial.content}"</p>
                    <div style="margin-top: 1rem;">
                        <strong style="color: #1f2937;">${testimonial.name}</strong>
                        <span style="color: #6b7280; margin-right: 0.5rem;">- ${testimonial.role}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    </section>
    ` : ''}

    <!-- Contact Section -->
    <section id="contact" class="section" style="background-color: #1f2937; color: white;">
        <div class="container">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 2rem;">${template.contact?.title || 'צור קשר'}</h2>
            <p style="font-size: 1.125rem; margin-bottom: 3rem; opacity: 0.9;">${template.contact?.subtitle || 'נשמח לשמוע ממך ולעזור לך'}</p>
            <div class="contact-form">
                <form onsubmit="handleSubmit(event)">
                    <input type="text" placeholder="שם מלא" class="form-input" required>
                    <input type="email" placeholder="אימייל" class="form-input" required>
                    <input type="tel" placeholder="טלפון" class="form-input">
                    <textarea placeholder="הודעה" rows="4" class="form-input" required></textarea>
                    <button type="submit" class="btn-primary" style="width: 100%; margin-top: 1rem;">${template.contact?.buttonText || 'שלח הודעה'}</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer style="background-color: #000; color: white; padding: 2rem; text-align: center;">
        <p>&copy; 2024 ${template.footer?.companyName || template.hero.title}. כל הזכויות שמורות.</p>
        <p style="font-size: 0.875rem; margin-top: 0.5rem; opacity: 0.7;">נבנה עם LEADGRID</p>
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
            alert('תודה על פנייתך! נחזור אליך בהקדם.');
            event.target.reset();
        }

        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.feature-card, .testimonial-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                });
            });
        });
    </script>
</body>
</html>`;
  }
}
