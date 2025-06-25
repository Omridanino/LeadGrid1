
import { ColorScheme } from "@/components/ColorEditor";

interface FormData {
  businessName: string;
  businessType: string;
  contactInfo: string;
  heroStyle: string;
}

interface Content {
  badge: string;
  headline: string;
  subheadline: string;
  cta: string;
  stats: Record<string, string>;
  featuresTitle: string;
  features: string[];
  aboutTitle: string;
  aboutText: string;
  emotional: {
    title: string;
    content: string;
  };
  customElements?: any[];
  testimonials: any[];
  faq: any[];
  contactTitle: string;
  heroImage?: string;
}

export const generateHtmlFile = (
  content: Content,
  currentColors: ColorScheme,
  formData: FormData,
  getHeroImageUrl: () => string
) => {
  console.log('🛠️ Generating HTML file that matches preview exactly...');
  
  const currentHeroImage = getHeroImageUrl();
  const useImageBackground = formData.heroStyle === 'image' || content.heroImage;
  
  // Generate custom elements HTML
  const generateCustomElementsHtml = () => {
    if (!content.customElements || content.customElements.length === 0) {
      return '';
    }

    return content.customElements.map((element: any) => {
      switch (element.type) {
        case 'title':
          const titleTag = element.content.size || 'h2';
          return `
        <section style="padding: 3rem 1rem; background: ${currentColors.background};">
          <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <${titleTag} style="color: ${currentColors.text}; font-weight: bold; margin-bottom: 1rem; font-size: ${titleTag === 'h1' ? '2.5rem' : titleTag === 'h2' ? '2rem' : '1.5rem'};">${element.content.text}</${titleTag}>
          </div>
        </section>`;
        
        case 'text':
          return `
        <section style="padding: 2rem 1rem; background: ${currentColors.background};">
          <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <p style="color: ${currentColors.text}; line-height: 1.6; font-size: 1.1rem;">${element.content.text}</p>
          </div>
        </section>`;
        
        case 'image':
          return `
        <section style="padding: 2rem 1rem; background: ${currentColors.background};">
          <div style="text-align: center; max-width: 800px; margin: 0 auto;">
            <img src="${element.content.url}" alt="${element.content.alt}" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1rem;">
            ${element.content.caption ? `<p style="color: ${currentColors.text}; font-style: italic; margin-top: 0.5rem;">${element.content.caption}</p>` : ''}
          </div>
        </section>`;
        
        case 'testimonial':
          return `
        <section style="padding: 3rem 1rem; background: ${currentColors.background};">
          <div style="max-width: 600px; margin: 0 auto;">
            <div style="background: rgba(255,255,255,0.05); border: 1px solid ${currentColors.primary}40; padding: 2rem; border-radius: 12px; text-align: center;">
              <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                ${'★'.repeat(element.content.rating).split('').map(() => '<span style="color: #fbbf24; font-size: 1.25rem;">★</span>').join('')}
              </div>
              <p style="color: ${currentColors.text}; margin-bottom: 1.5rem; line-height: 1.5; font-size: 1.1rem; font-style: italic;">"${element.content.content}"</p>
              <div>
                <div style="font-weight: bold; color: ${currentColors.primary}; font-size: 1.1rem;">${element.content.name}</div>
                <div style="color: #9ca3af; font-size: 0.875rem; margin-top: 0.25rem;">${element.content.role}</div>
              </div>
            </div>
          </div>
        </section>`;
        
        case 'faq':
          return `
        <section style="padding: 2rem 1rem; background: ${currentColors.background};">
          <div style="max-width: 800px; margin: 0 auto;">
            <div style="background: rgba(255,255,255,0.05); border: 1px solid ${currentColors.secondary}40; padding: 1.5rem; border-radius: 12px;">
              <h3 style="color: ${currentColors.secondary}; font-weight: bold; margin-bottom: 0.75rem; font-size: 1.2rem;">${element.content.question}</h3>
              <p style="color: ${currentColors.text}; line-height: 1.5;">${element.content.answer}</p>
            </div>
          </div>
        </section>`;
        
        case 'blog':
          return `
        <section style="padding: 3rem 1rem; background: ${currentColors.background};">
          <div style="max-width: 800px; margin: 0 auto;">
            <h2 style="color: ${currentColors.text}; font-weight: bold; margin-bottom: 1rem; font-size: 2rem; text-align: center;">${element.content.title}</h2>
            <p style="color: ${currentColors.secondary}; margin-bottom: 2rem; font-size: 1.1rem; font-style: italic; text-align: center;">${element.content.excerpt}</p>
            <div style="color: ${currentColors.text}; line-height: 1.6; white-space: pre-line; text-align: right;">${element.content.content}</div>
          </div>
        </section>`;
        
        default:
          return '';
      }
    }).join('\n');
  };

  const htmlContent = `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.businessName}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: ${currentColors.background};
            color: ${currentColors.text};
            direction: rtl;
        }
        
        .hero-section {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 3rem 1rem;
            position: relative;
            ${useImageBackground 
              ? `background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${currentHeroImage}'); background-size: cover; background-position: center;`
              : `background: linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%);`
            }
        }
        
        .badge {
            background: rgba(255,255,255,0.2);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 12px 24px;
            border-radius: 50px;
            display: inline-block;
            margin-bottom: 2rem;
            font-size: 1rem;
            backdrop-filter: blur(10px);
        }
        
        .hero-title {
            font-size: clamp(2rem, 5vw, 4rem);
            font-weight: bold;
            margin-bottom: 1.5rem;
            line-height: 1.2;
            color: ${currentColors.headlineColor || '#ffffff'};
        }
        
        .hero-subtitle {
            font-size: clamp(1rem, 2.5vw, 1.25rem);
            margin-bottom: 3rem;
            max-width: 600px;
            line-height: 1.6;
            color: ${currentColors.subheadlineColor || 'rgba(255,255,255,0.9)'};
        }
        
        .cta-button {
            background: ${currentColors.accent};
            color: white;
            padding: 18px 40px;
            border: none;
            border-radius: 50px;
            font-size: 1.25rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 4rem;
            max-width: 800px;
            width: 100%;
        }
        
        .stat-card {
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(15px);
            padding: 1.5rem;
            border-radius: 15px;
            border: 1px solid rgba(255,255,255,0.2);
            text-align: center;
        }
        
        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: white;
            margin-bottom: 0.5rem;
        }
        
        .section {
            padding: 4rem 1rem;
            background: ${currentColors.background};
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 3rem;
            color: ${currentColors.text};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }
        
        .feature-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid ${currentColors.primary}40;
            padding: 2rem;
            border-radius: 15px;
            transition: all 0.3s ease;
            display: flex;
            align-items: flex-start;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
            border-color: ${currentColors.primary}80;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .feature-icon {
            width: 40px;
            height: 40px;
            background: ${currentColors.primary};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 1rem;
            margin-top: 0.25rem;
            flex-shrink: 0;
        }
        
        .feature-text {
            color: ${currentColors.featuresTextColor || currentColors.text};
            line-height: 1.6;
            font-size: 1rem;
        }
        
        .about-section, .emotional-section {
            text-align: center;
        }
        
        .content-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid ${currentColors.primary}40;
            padding: 2.5rem;
            border-radius: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .testimonial-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid ${currentColors.primary}40;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
        }
        
        .stars {
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;
        }
        
        .star {
            color: #fbbf24;
            font-size: 1.25rem;
        }
        
        .testimonial-content {
            color: ${currentColors.text};
            margin-bottom: 1.5rem;
            line-height: 1.5;
            font-style: italic;
        }
        
        .testimonial-name {
            font-weight: bold;
            color: ${currentColors.primary};
        }
        
        .testimonial-role {
            color: #9ca3af;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }
        
        .faq-container {
            max-width: 800px;
            margin: 0 auto;
            display: grid;
            gap: 1.5rem;
        }
        
        .faq-item {
            background: rgba(255,255,255,0.05);
            border: 1px solid ${currentColors.secondary}40;
            padding: 2rem;
            border-radius: 15px;
        }
        
        .faq-question {
            color: ${currentColors.secondary};
            font-weight: bold;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }
        
        .faq-answer {
            color: ${currentColors.text};
            line-height: 1.6;
        }
        
        .contact-section {
            background: rgba(255,255,255,0.05);
            border: 1px solid ${currentColors.primary}40;
            padding: 3rem;
            border-radius: 20px;
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .contact-info {
            background: rgba(0,0,0,0.3);
            padding: 2rem;
            border-radius: 15px;
            margin-bottom: 2rem;
            color: ${currentColors.contactTextColor || currentColors.text};
            line-height: 1.8;
            white-space: pre-line;
        }
        
        @media (max-width: 768px) {
            .hero-section { padding: 2rem 1rem; min-height: 80vh; }
            .section { padding: 2rem 1rem; }
            .features-grid { grid-template-columns: 1fr; }
            .testimonials-grid { grid-template-columns: 1fr; }
            .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
            .section-title { font-size: 2rem; }
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="badge">${content.badge}</div>
        <h1 class="hero-title">${content.headline}</h1>
        <p class="hero-subtitle">${content.subheadline}</p>
        <a href="#contact" class="cta-button">${content.cta}</a>
        
        <div class="stats-grid">
            ${Object.entries(content.stats).map(([key, value]) => `
                <div class="stat-card">
                    <div class="stat-number">${value}</div>
                </div>
            `).join('')}
        </div>
    </section>
    
    <!-- Features Section -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">
                <span style="color: ${currentColors.accent};">⭐</span>
                ${content.featuresTitle}
            </h2>
            <div class="features-grid">
                ${content.features.map((feature: string) => `
                    <div class="feature-card">
                        <div class="feature-icon">
                            <span style="color: white; font-weight: bold;">✓</span>
                        </div>
                        <div class="feature-text">${feature}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">
                <span style="color: ${currentColors.secondary};">👥</span>
                ${content.aboutTitle}
            </h2>
            <div class="about-section">
                <div class="content-card">
                    <p style="color: ${currentColors.aboutTextColor || currentColors.text}; line-height: 1.6; font-size: 1.1rem;">${content.aboutText}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Emotional Section -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">
                <span style="color: ${currentColors.accent};">❤️</span>
                ${content.emotional.title}
            </h2>
            <div class="emotional-section">
                <div class="content-card">
                    <p style="color: ${currentColors.text}; line-height: 1.6; font-size: 1.1rem;">${content.emotional.content}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Custom Elements -->
    ${generateCustomElementsHtml()}

    <!-- Testimonials Section -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">
                <span style="color: ${currentColors.primary};">💬</span>
                מה אומרים עלינו
            </h2>
            <div class="testimonials-grid">
                ${content.testimonials.map((testimonial: any) => `
                    <div class="testimonial-card">
                        <div class="stars">
                            ${'★'.repeat(testimonial.rating).split('').map(() => '<span class="star">★</span>').join('')}
                        </div>
                        <p class="testimonial-content">"${testimonial.content}"</p>
                        <div class="testimonial-name">${testimonial.name}</div>
                        <div class="testimonial-role">${testimonial.role}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">
                <span style="color: ${currentColors.secondary};">❓</span>
                שאלות נפוצות
            </h2>
            <div class="faq-container">
                ${content.faq.map((item: any) => `
                    <div class="faq-item">
                        <div class="faq-question">${item.question}</div>
                        <div class="faq-answer">${item.answer}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section class="section" id="contact">
        <div class="container">
            <div class="contact-section">
                <h2 style="color: ${currentColors.contactColor || currentColors.text}; font-size: 2rem; font-weight: bold; margin-bottom: 2rem; display: flex; align-items: center; justify-content: center;">
                    <span style="color: ${currentColors.accent}; margin-left: 1rem;">💬</span>
                    ${content.contactTitle}
                </h2>
                <div class="contact-info">${formData.contactInfo}</div>
                <a href="tel:${formData.contactInfo.match(/\d{2,3}-?\d{7,8}/)?.[0] || ''}" class="cta-button">
                    ${content.cta}
                </a>
            </div>
        </div>
    </section>
    
    <script>
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Add hover effects
        document.querySelectorAll('.feature-card, .testimonial-card, .faq-item').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        console.log('✅ Landing page loaded successfully!');
    </script>
</body>
</html>`;

  console.log('✅ HTML generation completed with exact preview match!');
  return htmlContent;
};
