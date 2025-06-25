
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

// Generate dynamic stats based on business type
const generateDynamicStats = (businessType: string, businessName: string) => {
  const type = businessType.toLowerCase();
  
  if (type.includes('קפה') || type.includes('בית קפה')) {
    return {
      "לקוחות מרוצים": "1,200+",
      "שנות ניסיון": "8",
      "כוסות קפה ביום": "400+",
      "שביעות רצון": "99%"
    };
  } else if (type.includes('מסעדה') || type.includes('אוכל')) {
    return {
      "לקוחות מרוצים": "3,500+",
      "שנות ניסיון": "12",
      "מנות מוכנות": "50,000+",
      "דירוג ממוצע": "4.9★"
    };
  } else if (type.includes('טכנולוגי') || type.includes('תוכנה') || type.includes('פיתוח')) {
    return {
      "פרויקטים מוצלחים": "180+",
      "שנות ניסיון": "7",
      "לקוחות עסקיים": "85+",
      "שביעות רצון": "98%"
    };
  } else if (type.includes('יועץ') || type.includes('ייעוץ')) {
    return {
      "לקוחות מרוצים": "450+",
      "שנות ניסיון": "15",
      "פרויקטי ייעוץ": "280+",
      "שיפור ממוצע": "65%"
    };
  } else if (type.includes('רפואה') || type.includes('בריאות')) {
    return {
      "מטופלים מרוצים": "2,800+",
      "שנות ניסיון": "20",
      "טיפולים מוצלחים": "15,000+",
      "שביעות רצון": "97%"
    };
  } else if (type.includes('חנות') || type.includes('אופנה') || type.includes('קמעונאות')) {
    return {
      "לקוחות מרוצים": "5,200+",
      "שנות ניסיון": "10",
      "מוצרים במלאי": "1,500+",
      "החזרות מרוצות": "96%"
    };
  } else if (type.includes('חינוך') || type.includes('הוראה')) {
    return {
      "תלמידים מרוצים": "850+",
      "שנות ניסיון": "18",
      "קורסים מוצלחים": "120+",
      "הצלחה בבחינות": "94%"
    };
  } else if (type.includes('שירותים עסקיים')) {
    return {
      "לקוחות עסקיים": "320+",
      "שנות ניסיון": "11",
      "פרויקטים מוצלחים": "650+",
      "שביעות רצון": "96%"
    };
  }
  
  // Default stats
  return {
    "לקוחות מרוצים": "2,500+",
    "שנות ניסיון": "10",
    "פרויקטים מוצלחים": "500+",
    "שביעות רצון": "98%"
  };
};

export const generateHtmlFile = (
  content: Content,
  currentColors: ColorScheme,
  formData: FormData,
  getHeroImageUrl: () => string
) => {
  console.log('🛠️ Generating precise HTML that matches every element in the preview...');
  
  const currentHeroImage = getHeroImageUrl();
  const useImageBackground = formData.heroStyle === 'image' || content.heroImage;
  
  // Use dynamic stats based on business type
  const dynamicStats = generateDynamicStats(formData.businessType, formData.businessName);
  
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
    <title>${formData.businessName} - ${content.headline}</title>
    <meta name="description" content="${content.subheadline}">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Heebo', sans-serif;
            background: ${currentColors.background};
            color: ${currentColors.text};
            direction: rtl;
            line-height: 1.6;
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
            font-weight: 500;
        }
        
        .hero-title {
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            font-weight: 900;
            margin-bottom: 1.5rem;
            line-height: 1.1;
            color: ${currentColors.headlineColor || '#ffffff'};
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero-subtitle {
            font-size: clamp(1.1rem, 2.5vw, 1.4rem);
            margin-bottom: 3rem;
            max-width: 650px;
            line-height: 1.7;
            color: ${currentColors.subheadlineColor || 'rgba(255,255,255,0.95)'};
            font-weight: 400;
        }
        
        .cta-button {
            background: ${currentColors.accent};
            color: white;
            padding: 20px 45px;
            border: none;
            border-radius: 50px;
            font-size: 1.3rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            border: 2px solid transparent;
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 45px rgba(0,0,0,0.4);
            filter: brightness(1.1);
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 2rem;
            margin-top: 4rem;
            max-width: 900px;
            width: 100%;
        }
        
        .stat-card {
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(15px);
            padding: 2rem 1.5rem;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.25);
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-5px);
        }
        
        .stat-number {
            font-size: 2.2rem;
            font-weight: 900;
            color: white;
            margin-bottom: 0.5rem;
            display: block;
        }
        
        .stat-label {
            font-size: 1rem;
            color: rgba(255,255,255,0.9);
            font-weight: 500;
        }
        
        .section {
            padding: 5rem 1rem;
            background: ${currentColors.background};
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .section-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 3.5rem;
            color: ${currentColors.text};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: 2.5rem;
        }
        
        .feature-card {
            background: rgba(255,255,255,0.08);
            border: 1px solid ${currentColors.primary}40;
            padding: 2.5rem;
            border-radius: 20px;
            transition: all 0.3s ease;
            display: flex;
            align-items: flex-start;
            hover: transform translateY(-5px);
        }
        
        .feature-card:hover {
            transform: translateY(-8px);
            border-color: ${currentColors.primary}80;
            box-shadow: 0 15px 40px rgba(0,0,0,0.25);
            background: rgba(255,255,255,0.12);
        }
        
        .feature-icon {
            width: 50px;
            height: 50px;
            background: ${currentColors.primary};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 1.5rem;
            margin-top: 0.25rem;
            flex-shrink: 0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .feature-text {
            color: ${currentColors.featuresTextColor || currentColors.text};
            line-height: 1.7;
            font-size: 1.1rem;
            font-weight: 400;
        }
        
        .about-section, .emotional-section {
            text-align: center;
        }
        
        .content-card {
            background: rgba(255,255,255,0.08);
            border: 1px solid ${currentColors.primary}50;
            padding: 3rem;
            border-radius: 25px;
            max-width: 850px;
            margin: 0 auto;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
        }
        
        .testimonial-card {
            background: rgba(255,255,255,0.08);
            border: 1px solid ${currentColors.primary}40;
            padding: 2.5rem;
            border-radius: 20px;
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        
        .stars {
            display: flex;
            justify-content: center;
            margin-bottom: 1.5rem;
        }
        
        .star {
            color: #fbbf24;
            font-size: 1.4rem;
            margin: 0 2px;
        }
        
        .testimonial-content {
            color: ${currentColors.text};
            margin-bottom: 2rem;
            line-height: 1.6;
            font-style: italic;
            font-size: 1.1rem;
        }
        
        .testimonial-name {
            font-weight: 700;
            color: ${currentColors.primary};
            font-size: 1.1rem;
        }
        
        .testimonial-role {
            color: #9ca3af;
            font-size: 0.95rem;
            margin-top: 0.5rem;
        }
        
        .faq-container {
            max-width: 850px;
            margin: 0 auto;
            display: grid;
            gap: 2rem;
        }
        
        .faq-item {
            background: rgba(255,255,255,0.08);
            border: 1px solid ${currentColors.secondary}40;
            padding: 2.5rem;
            border-radius: 20px;
            transition: all 0.3s ease;
        }
        
        .faq-item:hover {
            background: rgba(255,255,255,0.12);
            border-color: ${currentColors.secondary}60;
        }
        
        .faq-question {
            color: ${currentColors.secondary};
            font-weight: 700;
            margin-bottom: 1.2rem;
            font-size: 1.2rem;
        }
        
        .faq-answer {
            color: ${currentColors.text};
            line-height: 1.7;
            font-size: 1.05rem;
        }
        
        .contact-section {
            background: rgba(255,255,255,0.08);
            border: 1px solid ${currentColors.primary}50;
            padding: 4rem;
            border-radius: 25px;
            text-align: center;
            max-width: 650px;
            margin: 0 auto;
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        
        .contact-info {
            background: rgba(0,0,0,0.4);
            padding: 2.5rem;
            border-radius: 20px;
            margin-bottom: 2.5rem;
            color: ${currentColors.contactTextColor || currentColors.text};
            line-height: 1.8;
            white-space: pre-line;
            font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
            .hero-section { padding: 2rem 1rem; min-height: 85vh; }
            .section { padding: 3rem 1rem; }
            .features-grid { grid-template-columns: 1fr; }
            .testimonials-grid { grid-template-columns: 1fr; }
            .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
            .section-title { font-size: 2.2rem; }
            .feature-card, .content-card, .contact-section { padding: 2rem; }
        }
        
        @media (max-width: 480px) {
            .stats-grid { grid-template-columns: 1fr; }
            .hero-title { font-size: 2.2rem; }
            .hero-subtitle { font-size: 1.1rem; }
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
            ${Object.entries(dynamicStats).map(([key, value]) => `
                <div class="stat-card">
                    <span class="stat-number">${value}</span>
                    <div class="stat-label">${key}</div>
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
                            <span style="color: white; font-weight: bold; font-size: 1.2rem;">✓</span>
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
                    <p style="color: ${currentColors.aboutTextColor || currentColors.text}; line-height: 1.7; font-size: 1.2rem;">${content.aboutText}</p>
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
                    <p style="color: ${currentColors.text}; line-height: 1.7; font-size: 1.2rem;">${content.emotional.content}</p>
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
                <h2 style="color: ${currentColors.contactColor || currentColors.text}; font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; display: flex; align-items: center; justify-content: center;">
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

        // Enhanced hover effects
        document.querySelectorAll('.feature-card, .testimonial-card, .faq-item, .stat-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = this.classList.contains('stat-card') ? 'translateY(-5px)' : 'translateY(-8px)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Phone number click tracking
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', function() {
                console.log('Phone call initiated: ' + this.href);
            });
        });

        console.log('✅ ${formData.businessName} landing page loaded successfully!');
        console.log('📊 Business type: ${formData.businessType}');
        console.log('🎨 Colors applied:', {
            primary: '${currentColors.primary}',
            secondary: '${currentColors.secondary}',
            accent: '${currentColors.accent}'
        });
    </script>
</body>
</html>`;

  console.log('✅ Dynamic HTML generation completed with business-specific content!');
  console.log('📊 Generated stats:', dynamicStats);
  return htmlContent;
};
