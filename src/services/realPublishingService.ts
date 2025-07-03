
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
            color: #333;
            background-color: #0f0f23;
        }
        
        .hero-section { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
            background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%);
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
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
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
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(79, 70, 229, 0.6);
        }
        
        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            text-decoration: none;
            display: inline-block;
            margin: 0.5rem;
            transition: all 0.3s ease;
            border: 2px solid rgba(255, 255, 255, 0.3);
            cursor: pointer;
            font-weight: 600;
            backdrop-filter: blur(10px);
        }
        
        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }
        
        .section {
            padding: 4rem 2rem;
            text-align: center;
        }
        
        .section-dark {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: white;
        }
        
        .section-light {
            background: #f8fafc;
            color: #1f2937;
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
        
        .card-light {
            background: white;
            border: 1px solid #e5e7eb;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .grid {
            display: grid;
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .grid-auto {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        
        .grid-3 {
            grid-template-columns: repeat(3, 1fr);
        }
        
        .testimonial-stars {
            color: #fbbf24;
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
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 0.5rem;
            font-size: 1rem;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            backdrop-filter: blur(10px);
        }
        
        .form-input::placeholder {
            color: rgba(255, 255, 255, 0.7);
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
        }
        
        .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
        }
        
        @media (max-width: 768px) {
            .hero-section h1 { font-size: 2.5rem !important; }
            .grid-3 { grid-template-columns: 1fr; }
            .section { padding: 2rem 1rem; }
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
            <div style="margin-bottom: 3rem;">
                <a href="#contact" class="btn-primary">${template.hero.button1Text}</a>
                <a href="#about" class="btn-secondary">${template.hero.button2Text}</a>
            </div>
            
            <!-- Stats -->
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">500+</div>
                    <div class="stat-label">לקוחות מרוצים</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">98%</div>
                    <div class="stat-label">שביעות רצון</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">10+</div>
                    <div class="stat-label">שנות ניסיון</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">זמינות</div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section section-light">
        <div class="container">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 2rem;">${template.about?.title || 'אודותינו'}</h2>
            <p style="font-size: 1.125rem; max-width: 800px; margin: 0 auto;">${template.about?.description || 'אנחנו מספקים שירותים מקצועיים ואיכותיים ללקוחותינו.'}</p>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section section-dark">
        <div class="container">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 3rem;">${template.features?.title || 'השירותים שלנו'}</h2>
            <div class="grid grid-auto">
                ${template.features?.items?.map(item => `
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">${item.title}</h3>
                        <p style="opacity: 0.8;">${item.description}</p>
                    </div>
                `).join('') || `
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">שירות איכותי</h3>
                        <p style="opacity: 0.8;">אנחנו מספקים שירות ברמה הגבוהה ביותר</p>
                    </div>
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">מחירים הוגנים</h3>
                        <p style="opacity: 0.8;">מחירים תחרותיים וללא הפתעות</p>
                    </div>
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;">זמינות 24/7</h3>
                        <p style="opacity: 0.8;">אנחנו כאן בשבילך בכל שעה</p>
                    </div>
                `}
            </div>
        </div>
    </section>

    ${template.testimonials?.testimonials?.length ? `
    <!-- Testimonials Section -->
    <section id="testimonials" class="section section-light">
        <div class="container">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 3rem;">${template.testimonials.title}</h2>
            <div class="grid grid-auto">
                ${template.testimonials.testimonials.map(testimonial => `
                    <div class="card card-light">
                        <div class="testimonial-stars">${'★'.repeat(testimonial.rating || 5)}</div>
                        <p style="font-size: 1.125rem; margin: 1rem 0; font-style: italic;">"${testimonial.content}"</p>
                        <div style="margin-top: 1rem;">
                            <strong>${testimonial.name}</strong>
                            <span style="color: #6b7280; margin-right: 0.5rem;">- ${testimonial.role}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Contact Section -->
    <section id="contact" class="section section-dark">
        <div class="container">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 2rem;">${template.contact?.title || 'צור קשר'}</h2>
            <p style="font-size: 1.125rem; margin-bottom: 3rem; opacity: 0.9;">${template.contact?.subtitle || 'נשמח לשמוע ממך ולעזור לך'}</p>
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
    <footer style="background: rgba(0,0,0,0.8); padding: 2rem; text-align: center; color: white;">
        <div class="container">
            <p>&copy; 2024 ${template.hero.title}. כל הזכויות שמורות.</p>
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
            const cards = document.querySelectorAll('.card');
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
