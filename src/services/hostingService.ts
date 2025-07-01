
import { createClient } from '@supabase/supabase-js';
import { TemplateData } from '@/types/template';

export interface DeploymentConfig {
  domain: string;
  template: TemplateData;
  customContent?: Record<string, any>;
  integrations?: string[];
}

export interface DeploymentResult {
  success: boolean;
  url?: string;
  deploymentId?: string;
  error?: string;
}

export class HostingService {
  private supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  async deployWebsite(config: DeploymentConfig): Promise<DeploymentResult> {
    console.log('Deploying website:', config.domain);
    
    try {
      // Generate static HTML/CSS/JS from template
      const siteFiles = await this.generateSiteFiles(config);
      
      // Deploy to hosting provider
      const { data, error } = await this.supabase.functions.invoke('deploy-website', {
        body: {
          domain: config.domain,
          files: siteFiles,
          integrations: config.integrations
        }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Deployment failed:', error);
      return { success: false, error: error.message };
    }
  }

  async checkDeploymentStatus(deploymentId: string): Promise<{ status: string; url?: string }> {
    try {
      const { data, error } = await this.supabase.functions.invoke('check-deployment', {
        body: { deploymentId }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Deployment status check failed:', error);
      return { status: 'error' };
    }
  }

  async setupSSL(domain: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { data, error } = await this.supabase.functions.invoke('setup-ssl', {
        body: { domain }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('SSL setup failed:', error);
      return { success: false, error: error.message };
    }
  }

  private async generateSiteFiles(config: DeploymentConfig): Promise<Record<string, string>> {
    const { template } = config;
    
    // Generate HTML
    const html = this.generateHTML(template);
    
    // Generate CSS
    const css = this.generateCSS(template);
    
    // Generate JavaScript for integrations
    const js = this.generateJS(config.integrations || []);
    
    return {
      'index.html': html,
      'styles.css': css,
      'script.js': js
    };
  }

  private generateHTML(template: TemplateData): string {
    return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.hero.title}</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="nav-container">
                <h1 class="logo">${template.footer.companyName}</h1>
            </div>
        </nav>
    </header>
    
    <main>
        <section class="hero" style="background-color: ${template.styles.heroBackground}; color: ${template.styles.textColor};">
            <div class="container">
                <h1 class="hero-title">${template.hero.title}</h1>
                <p class="hero-subtitle">${template.hero.subtitle}</p>
                <p class="hero-description">${template.hero.description}</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary">${template.hero.button1Text}</button>
                    <button class="btn btn-secondary">${template.hero.button2Text}</button>
                </div>
            </div>
        </section>
        
        <section class="features" style="background-color: ${template.styles.featuresBackground};">
            <div class="container">
                <h2>${template.features.title}</h2>
                <div class="features-grid">
                    ${template.features.items.map(item => `
                        <div class="feature-item">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        
        <section class="contact" style="background-color: ${template.styles.contactBackground};">
            <div class="container">
                <h2>${template.contact.title}</h2>
                <form class="contact-form">
                    <input type="text" placeholder="שם מלא" required>
                    <input type="email" placeholder="אימייל" required>
                    <textarea placeholder="הודעה" required></textarea>
                    <button type="submit" class="btn btn-primary">${template.contact.buttonText}</button>
                </form>
            </div>
        </section>
    </main>
    
    <footer style="background-color: ${template.styles.footerBackground};">
        <div class="container">
            <p>&copy; 2024 ${template.footer.companyName}. כל הזכויות שמורות.</p>
        </div>
    </footer>
</body>
</html>`;
  }

  private generateCSS(template: TemplateData): string {
    return `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: ${template.styles.textColor};
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.navbar {
    background: ${template.styles.footerBackground};
    padding: 1rem 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
}

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    padding-top: 80px;
}

.hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    opacity: 0.9;
}

.hero-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.8;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.btn-primary {
    background: ${template.styles.primaryColor};
    color: white;
}

.btn-primary:hover {
    background: ${template.styles.accentColor};
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: ${template.styles.primaryColor};
    border: 2px solid ${template.styles.primaryColor};
}

.btn-secondary:hover {
    background: ${template.styles.primaryColor};
    color: white;
}

.features {
    padding: 80px 0;
}

.features h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${template.styles.textColor};
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-item {
    text-align: center;
    padding: 2rem;
    border-radius: 10px;
    background: white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.feature-item:hover {
    transform: translateY(-5px);
}

.feature-item h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${template.styles.primaryColor};
}

.contact {
    padding: 80px 0;
}

.contact h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${template.styles.textColor};
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: ${template.styles.primaryColor};
}

.contact-form textarea {
    min-height: 120px;
    resize: vertical;
}

footer {
    padding: 40px 0;
    text-align: center;
    color: white;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .features h2,
    .contact h2 {
        font-size: 2rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
}
`;
  }

  private generateJS(integrations: string[]): string {
    let js = `
// Site functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully');
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('תודה על פנייתך! נחזור אליך בקרוב.');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
`;

    // Add integration-specific code
    if (integrations.includes('google-analytics')) {
      js += `
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID');
    }
`;
    }

    if (integrations.includes('facebook-pixel')) {
      js += `
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', 'PageView');
    }
`;
    }

    if (integrations.includes('whatsapp')) {
      js += `
    // WhatsApp integration
    const whatsappButton = document.createElement('div');
    whatsappButton.innerHTML = '💬';
    whatsappButton.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#25D366;color:white;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:24px;z-index:1000;';
    whatsappButton.onclick = () => window.open('https://wa.me/972501234567', '_blank');
    document.body.appendChild(whatsappButton);
`;
    }

    js += '\n});';
    return js;
  }
}

export const hostingService = new HostingService();
