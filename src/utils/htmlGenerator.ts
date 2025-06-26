
import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, currentColors: ColorScheme, formData: any, heroImage?: string) => {
  const finalHeroImage = formData.heroStyle === 'image' && heroImage ? heroImage : null;
  
  const shouldShowSection = (sectionId: string) => {
    if (!formData.selectedElements || formData.selectedElements.length === 0) {
      return true; // Show all sections if none selected
    }
    return formData.selectedElements.includes(sectionId);
  };

  const generate3DStyles = () => `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.6;
        color: ${currentColors.text};
        background: ${currentColors.background};
        overflow-x: hidden;
        scroll-behavior: smooth;
      }

      /* Enhanced 3D Effects */
      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 5rem 2rem;
        background: ${finalHeroImage 
          ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${finalHeroImage}')` 
          : `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%)`};
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        position: relative;
        overflow: hidden;
      }

      .hero::before {
        content: '';
        position: absolute;
        top: 5rem;
        left: 5rem;
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        background: rgba(255,255,255,0.1);
        animation: float 6s ease-in-out infinite;
        filter: blur(20px);
      }

      .hero::after {
        content: '';
        position: absolute;
        bottom: 8rem;
        right: 8rem;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        background: rgba(255,255,255,0.15);
        animation: bounce-slow 4s ease-in-out infinite;
        filter: blur(15px);
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px) scale(1); opacity: 0.1; }
        50% { transform: translateY(-20px) scale(1.1); opacity: 0.2; }
      }

      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }

      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.3); }
        50% { box-shadow: 0 0 40px rgba(255,255,255,0.6); }
      }

      @keyframes scale-hover {
        0% { transform: scale(1); }
        100% { transform: scale(1.05); }
      }

      .hero-content {
        max-width: 1200px;
        z-index: 10;
        position: relative;
      }

      .badge {
        display: inline-block;
        padding: 1rem 2rem;
        background: rgba(255,255,255,0.2);
        color: white;
        border: 2px solid rgba(255,255,255,0.3);
        border-radius: 50px;
        backdrop-filter: blur(20px);
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 2rem;
        animation: pulse-glow 3s infinite;
        transition: all 0.3s ease;
      }

      .badge:hover {
        transform: scale(1.05);
        background: rgba(255,255,255,0.3);
      }

      .hero h1 {
        font-size: 4rem;
        font-weight: 900;
        margin-bottom: 2rem;
        color: white;
        text-shadow: 0 10px 30px rgba(0,0,0,0.8);
        line-height: 1.1;
        transition: all 0.3s ease;
      }

      .hero h1:hover {
        transform: scale(1.02);
        text-shadow: 0 15px 40px rgba(0,0,0,0.9);
      }

      .hero p {
        font-size: 1.5rem;
        margin-bottom: 3rem;
        color: rgba(255,255,255,0.95);
        text-shadow: 0 5px 15px rgba(0,0,0,0.6);
        font-weight: 300;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }

      .cta-button {
        display: inline-block;
        padding: 1.5rem 3rem;
        background: linear-gradient(135deg, #8b5cf6, #ec4899, #ef4444);
        color: white;
        text-decoration: none;
        border-radius: 1rem;
        font-weight: 700;
        font-size: 1.3rem;
        box-shadow: 0 20px 40px rgba(139,92,246,0.4);
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
      }

      .cta-button::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #ec4899, #ef4444, #f59e0b);
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .cta-button:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 30px 60px rgba(139,92,246,0.6);
      }

      .cta-button:hover::before {
        opacity: 1;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-top: 4rem;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
      }

      .stat-card {
        padding: 2rem;
        border-radius: 2rem;
        background: linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
        backdrop-filter: blur(20px);
        border: 2px solid rgba(255,255,255,0.2);
        transition: all 0.4s ease;
        text-align: center;
      }

      .stat-card:hover {
        transform: translateY(-10px) scale(1.05);
        background: linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1));
        border-color: rgba(255,255,255,0.4);
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      }

      .stat-number {
        font-size: 3rem;
        font-weight: 900;
        color: white;
        text-shadow: 0 5px 15px rgba(0,0,0,0.5);
        display: block;
        margin-bottom: 0.5rem;
        animation: bounce-slow 2s infinite;
      }

      .stat-label {
        font-size: 1.1rem;
        color: white;
        font-weight: 600;
        text-shadow: 0 3px 8px rgba(0,0,0,0.3);
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      /* Section Styles */
      .section {
        padding: 6rem 2rem;
        position: relative;
        overflow: hidden;
      }

      .section:nth-child(even) {
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      }

      .section:nth-child(odd) {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      }

      .section::before {
        content: '';
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 16rem;
        height: 16rem;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        animation: float 8s ease-in-out infinite;
        filter: blur(30px);
      }

      .section::after {
        content: '';
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
        animation: bounce-slow 6s ease-in-out infinite;
        filter: blur(20px);
      }

      .section h2 {
        font-size: 3.5rem;
        font-weight: 900;
        margin-bottom: 4rem;
        text-align: center;
        color: white;
        text-shadow: 0 8px 16px rgba(0,0,0,0.5);
        position: relative;
        z-index: 10;
      }

      .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 1rem;
        position: relative;
        z-index: 10;
      }

      /* Grid Layouts */
      .features-grid, .why-choose-grid, .services-grid, .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .feature-item, .why-choose-item, .service-item, .testimonial-card {
        background: linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
        border-radius: 2rem;
        padding: 3rem;
        backdrop-filter: blur(20px);
        border: 2px solid rgba(255,255,255,0.2);
        transition: all 0.4s ease;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .feature-item::before, .why-choose-item::before, .service-item::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(145deg, rgba(255,255,255,0.1), transparent);
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .feature-item:hover, .why-choose-item:hover, .service-item:hover, .testimonial-card:hover {
        transform: translateY(-15px) scale(1.03);
        border-color: rgba(255,255,255,0.4);
        box-shadow: 0 25px 50px rgba(0,0,0,0.3);
      }

      .feature-item:hover::before, .why-choose-item:hover::before, .service-item:hover::before {
        opacity: 1;
      }

      .icon-container {
        width: 6rem;
        height: 6rem;
        border-radius: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 2rem;
        background: linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent});
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        transition: all 0.4s ease;
        font-size: 3rem;
      }

      .icon-container:hover {
        transform: scale(1.2) rotate(12deg);
        box-shadow: 0 30px 60px rgba(0,0,0,0.4);
      }

      .feature-item h3, .why-choose-item h3, .service-item h3 {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: white;
        transition: all 0.3s ease;
      }

      .feature-item:hover h3, .why-choose-item:hover h3, .service-item:hover h3 {
        color: #fbbf24;
        transform: scale(1.05);
      }

      .feature-item p, .why-choose-item p, .service-item p {
        color: rgba(255,255,255,0.9);
        line-height: 1.7;
        font-size: 1.1rem;
        margin-bottom: 1rem;
      }

      .service-price {
        font-size: 1.5rem;
        font-weight: 900;
        color: #10b981;
        margin-top: 1.5rem;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }

      /* Testimonials */
      .testimonial-header {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
      }

      .testimonial-avatar {
        width: 4rem;
        height: 4rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #fbbf24, #f59e0b);
        color: white;
        font-size: 1.5rem;
        margin-left: 1rem;
        transition: all 0.3s ease;
      }

      .testimonial-card:hover .testimonial-avatar {
        transform: scale(1.1) rotate(5deg);
        animation: bounce-slow 1s infinite;
      }

      .testimonial-info h4 {
        font-weight: 700;
        color: white;
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
      }

      .testimonial-info p {
        color: rgba(255,255,255,0.7);
        font-size: 1rem;
      }

      .testimonial-content {
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
        color: rgba(255,255,255,0.9);
        font-style: italic;
        line-height: 1.6;
      }

      .stars {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        color: #fbbf24;
      }

      /* FAQ */
      .faq-grid {
        display: grid;
        gap: 2rem;
        margin-top: 3rem;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
      }

      .faq-item {
        background: linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
        border-radius: 2rem;
        padding: 3rem;
        backdrop-filter: blur(20px);
        border: 2px solid rgba(255,255,255,0.2);
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
      }

      .faq-item::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(145deg, rgba(255,255,255,0.1), transparent);
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .faq-item:hover {
        transform: scale(1.02);
        border-color: rgba(255,255,255,0.4);
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      }

      .faq-item:hover::before {
        opacity: 1;
      }

      .faq-item h3 {
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: #60a5fa;
        font-size: 1.4rem;
        transition: all 0.3s ease;
      }

      .faq-item:hover h3 {
        color: #93c5fd;
        transform: scale(1.02);
      }

      .faq-item p {
        color: rgba(255,255,255,0.9);
        font-size: 1.1rem;
        line-height: 1.7;
      }

      /* Contact */
      .contact-content {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
      }

      .contact-info {
        padding: 3rem;
        border-radius: 2rem;
        background: linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
        backdrop-filter: blur(20px);
        border: 2px solid rgba(255,255,255,0.2);
        margin-bottom: 3rem;
        white-space: pre-line;
        color: white;
        font-size: 1.3rem;
        line-height: 1.8;
        font-weight: 500;
        transition: all 0.4s ease;
      }

      .contact-info:hover {
        transform: scale(1.02);
        border-color: rgba(255,255,255,0.4);
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      }

      /* Responsive */
      @media (max-width: 768px) {
        .hero h1 { font-size: 2.5rem; }
        .hero p { font-size: 1.2rem; }
        .section h2 { font-size: 2.5rem; }
        .stats-grid { grid-template-columns: repeat(2, 1fr); }
        .features-grid, .why-choose-grid, .services-grid, .testimonials-grid { 
          grid-template-columns: 1fr; 
        }
        .cta-button { padding: 1rem 2rem; font-size: 1.1rem; }
        .section { padding: 4rem 1rem; }
      }

      @media (min-width: 1200px) {
        .hero h1 { font-size: 5rem; }
        .section h2 { font-size: 4rem; }
        .stats-grid { grid-template-columns: repeat(4, 1fr); }
      }
    </style>
  `;

  const renderContentSections = () => {
    const sections = [];
    
    // Always include hero
    sections.push(`
      <div class="hero">
        <div class="hero-content">
          <span class="badge">✨ ${content.badge}</span>
          <h1>${content.headline}</h1>
          <p>${content.subheadline}</p>
          <a href="#contact" class="cta-button">🚀 ${content.cta}</a>
          <div class="stats-grid">
            ${Object.entries(content.stats).map(([key, value]) => `
              <div class="stat-card">
                <div class="stat-number">${value}</div>
                <div class="stat-label">${key}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `);
    
    // Add sections based on selected elements
    if (shouldShowSection('why-choose') && content.whyChooseUs) {
      sections.push(`
        <div class="section">
          <div class="container">
            <h2>🌟 ${content.whyChooseUs.title}</h2>
            <div class="why-choose-grid">
              ${content.whyChooseUs.items.map((item: any) => `
                <div class="why-choose-item">
                  <div class="icon-container">
                    ${item.icon === 'star-line' ? '⭐' : 
                      item.icon === 'award-line' ? '🏆' : 
                      item.icon === 'headphone-line' ? '🎧' : 
                      item.icon === 'price-tag-line' ? '💎' : '✨'}
                  </div>
                  <h3>${item.title || 'יתרון מוביל'}</h3>
                  <p>${item.text}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `);
    }
    
    if (shouldShowSection('about')) {
      sections.push(`
        <div class="section">
          <div class="container">
            <h2>👑 ${content.aboutTitle}</h2>
            <div class="contact-content">
              <div class="contact-info">${content.aboutText}</div>
            </div>
          </div>
        </div>
      `);
    }
    
    if (shouldShowSection('services')) {
      sections.push(`
        <div class="section">
          <div class="container">
            <h2>🎯 השירותים המיוחדים שלנו</h2>
            <div class="services-grid">
              <div class="service-item">
                <div class="icon-container">🛠️</div>
                <h3>פתרונות מקצועיים</h3>
                <p>שירותים מקצועיים המותאמים במיוחד לצרכים שלכם</p>
                <div class="service-price">החל מ₪199</div>
              </div>
              <div class="service-item">
                <div class="icon-container">👥</div>
                <h3>ייעוץ אישי</h3>
                <p>ליווי צמוד ויעוץ מקצועי לאורך כל הדרך</p>
                <div class="service-price">החל מ₪299</div>
              </div>
              <div class="service-item">
                <div class="icon-container">🚀</div>
                <h3>פתרון מהיר</h3>
                <p>תוצאות מהירות ויעילות ללא פשרות באיכות</p>
                <div class="service-price">החל מ₪399</div>
              </div>
            </div>
          </div>
        </div>
      `);
    }
    
    if (shouldShowSection('testimonials')) {
      sections.push(`
        <div class="section">
          <div class="container">
            <h2>💭 מה הלקוחות שלנו אומרים</h2>
            <div class="testimonials-grid">
              ${content.testimonials.map((testimonial: any) => `
                <div class="testimonial-card">
                  <div class="testimonial-header">
                    <div class="testimonial-avatar">${testimonial.image}</div>
                    <div class="testimonial-info">
                      <h4>${testimonial.name}</h4>
                      <p>${testimonial.role}</p>
                    </div>
                  </div>
                  <div class="testimonial-content">"${testimonial.content}"</div>
                  <div class="stars">${'⭐'.repeat(testimonial.rating)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `);
    }
    
    if (shouldShowSection('faq')) {
      sections.push(`
        <div class="section">
          <div class="container">
            <h2>❓ שאלות נפוצות</h2>
            <div class="faq-grid">
              ${content.faq.map((item: any) => `
                <div class="faq-item">
                  <h3>${item.question}</h3>
                  <p>${item.answer}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `);
    }
    
    if (shouldShowSection('contact')) {
      sections.push(`
        <div class="section" id="contact">
          <div class="container">
            <div class="contact-content">
              <h2>💬 ${content.contactTitle}</h2>
              <div class="contact-info">${formData.contactInfo}</div>
              <a href="#contact" class="cta-button">🎉 ${content.cta}</a>
            </div>
          </div>
        </div>
      `);
    }
    
    return sections.join('');
  };

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.headline}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  ${generate3DStyles()}
</head>
<body>
  ${renderContentSections()}
</body>
</html>`;
};
