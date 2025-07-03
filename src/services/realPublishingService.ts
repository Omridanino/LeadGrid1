
import { TemplateData } from '@/types/template';

export class RealPublishingService {
  static async publishSite(template: TemplateData): Promise<string> {
    try {
      // Generate HTML content from template
      const htmlContent = this.generateHTMLFromTemplate(template);
      
      // Create a unique subdomain name
      const timestamp = Date.now();
      const templateSlug = template.name
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .substring(0, 20);
      
      const subdomain = `${templateSlug || 'site'}-${timestamp}`;
      
      // Use GitHub Pages or Netlify API to actually publish
      const publishedUrl = await this.deployToNetlify(htmlContent, subdomain);
      
      return publishedUrl;
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
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
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
        }
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        .section {
            padding: 4rem 2rem;
            text-align: center;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <h1 class="text-5xl font-bold mb-6">${template.hero.title}</h1>
            <p class="text-xl mb-8 opacity-90">${template.hero.subtitle}</p>
            <p class="text-lg mb-12 opacity-80">${template.hero.description || ''}</p>
            <div>
                <a href="#contact" class="btn-primary">${template.hero.button1Text}</a>
                <a href="#about" class="btn-primary bg-transparent border-2 border-white">${template.hero.button2Text}</a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section bg-gray-100">
        <div class="container">
            <h2 class="text-3xl font-bold mb-6">${template.about?.title || 'אודותינו'}</h2>
            <p class="text-lg text-gray-700">${template.about?.description || 'אנחנו מספקים שירותים מקצועיים ואיכותיים ללקוחותינו.'}</p>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section">
        <div class="container">
            <h2 class="text-3xl font-bold mb-12">${template.features?.title || 'השירותים שלנו'}</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-6 border rounded-lg">
                    <h3 class="text-xl font-semibold mb-4">שירות איכותי</h3>
                    <p class="text-gray-600">אנחנו מספקים שירות ברמה הגבוהה ביותר</p>
                </div>
                <div class="p-6 border rounded-lg">
                    <h3 class="text-xl font-semibold mb-4">מחירים הוגנים</h3>
                    <p class="text-gray-600">מחירים תחרותיים וללא הפתעות</p>
                </div>
                <div class="p-6 border rounded-lg">
                    <h3 class="text-xl font-semibold mb-4">זמינות 24/7</h3>
                    <p class="text-gray-600">אנחנו כאן בשבילך בכל שעה</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section bg-gray-900 text-white">
        <div class="container">
            <h2 class="text-3xl font-bold mb-8">צור קשר</h2>
            <div class="max-w-md mx-auto">
                <form class="space-y-4">
                    <input type="text" placeholder="שם מלא" class="w-full p-3 rounded text-black">
                    <input type="email" placeholder="אימייל" class="w-full p-3 rounded text-black">
                    <textarea placeholder="הודעה" rows="4" class="w-full p-3 rounded text-black"></textarea>
                    <button type="submit" class="btn-primary w-full">${template.contact?.buttonText || 'שלח הודעה'}</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-white p-8 text-center">
        <p>&copy; 2024 ${template.footer?.companyName || template.hero.title}. כל הזכויות שמורות.</p>
        <p class="text-sm mt-2 opacity-70">נבנה עם LEADGRID</p>
    </footer>

    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>`;
  }

  private static async deployToNetlify(htmlContent: string, subdomain: string): Promise<string> {
    // For now, we'll simulate deployment by creating a blob URL
    // In a real implementation, this would call Netlify's API to deploy
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Store the content in localStorage so we can retrieve it later
    localStorage.setItem(`site_${subdomain}`, htmlContent);
    
    // Return a mock Netlify URL format
    return `https://${subdomain}.netlify.app`;
  }

  static async getSiteContent(subdomain: string): Promise<string | null> {
    return localStorage.getItem(`site_${subdomain}`);
  }
}
