
import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, currentColors: ColorScheme, formData: any, heroImage?: string) => {
  const finalHeroImage = formData.heroStyle === 'image' && heroImage ? heroImage : null;
  
  const getStylesByDesignStyle = () => {
    switch (formData.designStyle) {
      case 'storytelling':
        return generateStorytellingStyles();
      case 'minimal':
        return generateMinimalStyles();
      default: // '3d'
        return generate3DStyles();
    }
  };

  const generate3DStyles = () => `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: ${currentColors.text};
        background: ${currentColors.background};
        overflow-x: hidden;
      }

      /* 3D Glassmorphism Styles */
      .glassmorphism-section {
        position: relative;
        overflow: hidden;
      }

      .glassmorphism-bg {
        position: absolute;
        inset: 0;
        opacity: 0.05;
      }

      .glassmorphism-bg::before {
        content: '';
        position: absolute;
        top: 4rem;
        left: 4rem;
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        background: conic-gradient(from 45deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent}, ${currentColors.primary});
        animation: spin 30s linear infinite;
        filter: blur(8px);
        transform: perspective(1000px) rotateX(45deg) rotateY(45deg);
      }

      .glassmorphism-bg::after {
        content: '';
        position: absolute;
        bottom: 4rem;
        right: 4rem;
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        background: linear-gradient(135deg, ${currentColors.secondary}60, ${currentColors.accent}60);
        animation: pulse 4s ease-in-out infinite;
        filter: blur(6px);
        transform: perspective(800px) rotateX(-30deg) rotateY(60deg);
      }

      .glassmorphism-card {
        position: relative;
        padding: 1rem;
        border-radius: 1rem;
        background: linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
        border: 2px solid ${currentColors.primary}40;
        backdrop-filter: blur(20px);
        box-shadow: 0 20px 60px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2);
        transform: perspective(1000px) rotateX(5deg) rotateY(2deg);
        transition: all 0.7s ease;
      }

      .glassmorphism-card:hover {
        transform: perspective(1000px) rotateX(5deg) rotateY(2deg) scale(1.05);
      }

      @keyframes spin {
        from { transform: perspective(1000px) rotateX(45deg) rotateY(45deg) rotate(0deg); }
        to { transform: perspective(1000px) rotateX(45deg) rotateY(45deg) rotate(360deg); }
      }

      @keyframes pulse {
        0%, 100% { opacity: 0.05; }
        50% { opacity: 0.15; }
      }

      /* Hero Section */
      .hero {
        min-height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 3rem 1rem;
        background: ${finalHeroImage 
          ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${finalHeroImage}')` 
          : `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%)`};
        background-size: cover;
        background-position: center;
        position: relative;
      }

      .hero-content {
        max-width: 800px;
        z-index: 10;
        position: relative;
      }

      .badge {
        display: inline-block;
        padding: 0.375rem 1rem;
        margin-bottom: 0.75rem;
        background: rgba(255,255,255,0.2);
        color: white;
        border: 2px solid rgba(255,255,255,0.3);
        border-radius: 1rem;
        backdrop-filter: blur(10px);
        transform: perspective(300px) rotateX(10deg);
        animation: pulse 2s infinite;
      }

      .hero h1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: ${currentColors.headlineColor || 'white'};
        text-shadow: 0 10px 30px rgba(0,0,0,0.8);
        transform: perspective(800px) rotateX(5deg);
      }

      .hero p {
        font-size: 1rem;
        margin-bottom: 1.25rem;
        color: ${currentColors.subheadlineColor || 'rgba(255,255,255,0.9)'};
        text-shadow: 0 5px 15px rgba(0,0,0,0.6);
        transform: perspective(600px) rotateX(3deg);
      }

      .cta-button {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background: linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary}, ${currentColors.secondary});
        color: white;
        text-decoration: none;
        border-radius: 0.75rem;
        font-weight: bold;
        box-shadow: 0 15px 40px ${currentColors.accent}60;
        transform: perspective(500px) rotateX(8deg);
        transition: all 0.3s ease;
      }

      .cta-button:hover {
        transform: perspective(500px) rotateX(8deg) scale(1.1);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 0.75rem;
        margin-top: 1rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      .stat-card {
        padding: 0.75rem;
        border-radius: 1rem;
        background: linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
        backdrop-filter: blur(15px);
        border: 2px solid ${currentColors.primary}40;
        transform: perspective(600px) rotateX(10deg) rotateY(5deg);
        transition: all 0.3s ease;
      }

      .stat-card:hover {
        transform: perspective(600px) rotateX(10deg) rotateY(5deg) scale(1.1);
      }

      .stat-number {
        font-size: 1.25rem;
        font-weight: bold;
        color: white;
        text-shadow: 0 5px 15px rgba(0,0,0,0.5);
      }

      .stat-label {
        font-size: 0.875rem;
        color: white;
        font-weight: 600;
        text-shadow: 0 3px 8px rgba(0,0,0,0.3);
      }

      /* Section Styles */
      .section {
        padding: 3rem 1rem;
        position: relative;
      }

      .section h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        text-align: center;
        color: ${currentColors.text};
        text-shadow: 0 8px 16px rgba(0,0,0,0.5);
        transform: perspective(1000px) rotateX(10deg);
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }

      /* Why Choose Us Grid */
      .why-choose-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
      }

      .why-choose-item {
        text-align: center;
        position: relative;
      }

      .icon-container {
        width: 4rem;
        height: 4rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        background: linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary} 50%, ${currentColors.accent});
        box-shadow: 0 20px 40px ${currentColors.primary}60, inset 0 4px 0 rgba(255,255,255,0.4);
        transform: perspective(500px) rotateX(25deg) rotateY(15deg);
        transition: all 0.3s ease;
      }

      .icon-container:hover {
        transform: perspective(500px) rotateX(25deg) rotateY(15deg) scale(1.25) rotate(12deg);
      }

      .icon-container i {
        font-size: 1.5rem;
        color: white;
        text-shadow: 0 6px 12px rgba(0,0,0,0.6);
        transform: perspective(200px) rotateX(-15deg);
      }

      /* Testimonials */
      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
      }

      .testimonial-card {
        position: relative;
      }

      .testimonial-header {
        display: flex;
        align-items: center;
        margin-bottom: 0.75rem;
      }

      .testimonial-avatar {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary});
        color: white;
        font-size: 1.125rem;
        margin-left: 0.5rem;
        transform: perspective(300px) rotateX(15deg);
      }

      .testimonial-info h4 {
        font-weight: bold;
        color: ${currentColors.primary};
        font-size: 1rem;
      }

      .testimonial-info p {
        color: #9ca3af;
        font-size: 0.75rem;
      }

      .testimonial-content {
        margin-bottom: 0.75rem;
        font-size: 0.875rem;
        color: ${currentColors.text};
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
      }

      .stars {
        display: flex;
      }

      .star {
        color: #fbbf24;
        font-size: 1rem;
      }

      /* FAQ */
      .faq-grid {
        display: grid;
        gap: 0.75rem;
        margin-top: 2rem;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }

      .faq-item h3 {
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: ${currentColors.secondary};
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        font-size: 1rem;
      }

      .faq-item p {
        color: ${currentColors.text};
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        font-size: 0.875rem;
      }

      /* Contact */
      .contact-content {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
      }

      .contact-info {
        padding: 1rem;
        border-radius: 0.75rem;
        background: rgba(0,0,0,0.3);
        backdrop-filter: blur(10px);
        margin-bottom: 1rem;
        white-space: pre-line;
        color: ${currentColors.contactTextColor || currentColors.text};
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }

      @media (min-width: 768px) {
        .hero h1 { font-size: 2.5rem; }
        .hero p { font-size: 1.125rem; }
        .section h2 { font-size: 1.875rem; }
        .stats-grid { grid-template-columns: repeat(4, 1fr); }
      }
    </style>
  `;

  const generateStorytellingStyles = () => `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Georgia', serif;
        line-height: 1.8;
        color: #2c3e50;
        background: #f8f9fa;
      }

      .hero {
        min-height: 500px;
        display: flex;
        align-items: center;
        padding: 4rem 2rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        text-align: center;
      }

      .hero-content {
        max-width: 800px;
        margin: 0 auto;
      }

      .badge {
        display: inline-block;
        padding: 0.5rem 1.5rem;
        background: rgba(255,255,255,0.2);
        border-radius: 25px;
        margin-bottom: 1rem;
        font-size: 0.9rem;
      }

      .hero h1 {
        font-size: 3rem;
        font-weight: 300;
        margin-bottom: 1.5rem;
        line-height: 1.2;
      }

      .hero p {
        font-size: 1.3rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }

      .cta-button {
        display: inline-block;
        padding: 1rem 2rem;
        background: #e74c3c;
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      }

      .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .stat-card {
        text-align: center;
        padding: 1.5rem;
        background: rgba(255,255,255,0.1);
        border-radius: 15px;
        backdrop-filter: blur(10px);
      }

      .stat-number {
        font-size: 2.5rem;
        font-weight: bold;
        display: block;
      }

      .stat-label {
        font-size: 1rem;
        opacity: 0.8;
        margin-top: 0.5rem;
      }

      .section {
        padding: 5rem 2rem;
      }

      .section h2 {
        font-size: 2.5rem;
        font-weight: 300;
        text-align: center;
        margin-bottom: 3rem;
        color: #2c3e50;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .why-choose-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 3rem;
        margin-top: 3rem;
      }

      .why-choose-item {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
      }

      .why-choose-item:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      }

      .icon-container {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
      }

      .icon-container i {
        font-size: 2rem;
        color: white;
      }

      .why-choose-item h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: #2c3e50;
      }

      .why-choose-item p {
        color: #7f8c8d;
        line-height: 1.6;
      }

      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .testimonial-card {
        background: white;
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        position: relative;
      }

      .testimonial-card::before {
        content: '"';
        position: absolute;
        top: -10px;
        left: 20px;
        font-size: 4rem;
        color: #e74c3c;
        line-height: 1;
      }

      .testimonial-header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }

      .testimonial-avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        margin-left: 1rem;
      }

      .testimonial-info h4 {
        font-size: 1.1rem;
        color: #2c3e50;
      }

      .testimonial-info p {
        color: #7f8c8d;
        font-size: 0.9rem;
      }

      .testimonial-content {
        font-style: italic;
        color: #34495e;
        line-height: 1.6;
        margin-bottom: 1rem;
      }

      .stars {
        display: flex;
      }

      .star {
        color: #f39c12;
        font-size: 1.2rem;
      }
    </style>
  `;

  const generateMinimalStyles = () => `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.6;
        color: #1a202c;
        background: #ffffff;
      }

      .hero {
        min-height: 80vh;
        display: flex;
        align-items: center;
        padding: 2rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
      }

      .hero-content {
        max-width: 600px;
        margin: 0 auto;
      }

      .badge {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background: rgba(255,255,255,0.2);
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 500;
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .hero h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 1.1;
      }

      .hero p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        font-weight: 300;
      }

      .cta-button {
        display: inline-block;
        padding: 1rem 2rem;
        background: #000;
        color: white;
        text-decoration: none;
        border-radius: 0;
        font-weight: 600;
        transition: all 0.2s ease;
        border: 2px solid #000;
      }

      .cta-button:hover {
        background: transparent;
        color: #000;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(255,255,255,0.2);
      }

      .stat-card {
        text-align: center;
      }

      .stat-number {
        font-size: 2rem;
        font-weight: 700;
        display: block;
      }

      .stat-label {
        font-size: 0.9rem;
        opacity: 0.8;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .section {
        padding: 6rem 2rem;
      }

      .section:nth-child(even) {
        background: #f7fafc;
      }

      .section h2 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 4rem;
        color: #1a202c;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .why-choose-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 3rem;
      }

      .why-choose-item {
        text-align: left;
        padding: 0;
      }

      .icon-container {
        width: 60px;
        height: 60px;
        background: #667eea;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        border-radius: 0;
      }

      .icon-container i {
        font-size: 1.5rem;
        color: white;
      }

      .why-choose-item h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: #1a202c;
        font-weight: 600;
      }

      .why-choose-item p {
        color: #4a5568;
        line-height: 1.6;
        font-weight: 400;
      }

      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
      }

      .testimonial-card {
        background: white;
        padding: 2rem;
        border: 1px solid #e2e8f0;
        transition: all 0.2s ease;
      }

      .testimonial-card:hover {
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }

      .testimonial-header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }

      .testimonial-avatar {
        width: 50px;
        height: 50px;
        background: #667eea;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        margin-left: 1rem;
        border-radius: 0;
      }

      .testimonial-info h4 {
        font-size: 1rem;
        color: #1a202c;
        font-weight: 600;
      }

      .testimonial-info p {
        color: #718096;
        font-size: 0.9rem;
      }

      .testimonial-content {
        color: #4a5568;
        line-height: 1.6;
        margin-bottom: 1rem;
        font-weight: 400;
      }

      .stars {
        display: flex;
      }

      .star {
        color: #f6ad55;
        font-size: 1rem;
      }

      .faq-grid {
        display: grid;
        gap: 1rem;
        max-width: 800px;
        margin: 0 auto;
      }

      .faq-item {
        background: white;
        padding: 2rem;
        border: 1px solid #e2e8f0;
      }

      .faq-item h3 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: #1a202c;
        font-weight: 600;
      }

      .faq-item p {
        color: #4a5568;
        font-weight: 400;
      }

      .contact-content {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
      }

      .contact-info {
        padding: 2rem;
        background: #f7fafc;
        border: 1px solid #e2e8f0;
        margin-bottom: 2rem;
        white-space: pre-line;
        color: #4a5568;
      }

      @media (max-width: 768px) {
        .hero h1 { font-size: 2.5rem; }
        .stats-grid { grid-template-columns: repeat(2, 1fr); }
        .section { padding: 4rem 1rem; }
      }
    </style>
  `;

  const renderContentByStyle = () => {
    switch (formData.designStyle) {
      case 'storytelling':
        return renderStorytellingContent();
      case 'minimal':
        return renderMinimalContent();
      default: // '3d'
        return render3DContent();
    }
  };

  const render3DContent = () => `
    <div class="glassmorphism-section">
      <div class="glassmorphism-bg"></div>
      <div class="hero">
        <div class="hero-content">
          <span class="badge">${content.badge}</span>
          <h1>${content.headline}</h1>
          <p>${content.subheadline}</p>
          <a href="#contact" class="cta-button">${content.cta}</a>
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
    </div>

    ${content.whyChooseUs ? `
    <div class="glassmorphism-section">
      <div class="glassmorphism-bg"></div>
      <div class="section">
        <div class="container">
          <h2>🏆 ${content.whyChooseUs.title}</h2>
          <div class="why-choose-grid">
            ${content.whyChooseUs.items.map(item => `
              <div class="why-choose-item">
                <div class="glassmorphism-card">
                  <div class="icon-container">
                    <i class="ri-${item.icon}"></i>
                  </div>
                  <p>${item.text}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
    ` : ''}

    <div class="glassmorphism-section">
      <div class="glassmorphism-bg"></div>
      <div class="section">
        <div class="container">
          <h2>👥 ${content.aboutTitle}</h2>
          <div class="glassmorphism-card" style="max-width: 800px; margin: 0 auto; padding: 2rem;">
            <p style="font-size: 1.125rem; text-align: center; color: ${currentColors.aboutTextColor || currentColors.text};">${content.aboutText}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="glassmorphism-section">
      <div class="glassmorphism-bg"></div>
      <div class="section">
        <div class="container">
          <h2>💭 מה אומרים עלינו</h2>
          <div class="testimonials-grid">
            ${content.testimonials.map(testimonial => `
              <div class="testimonial-card">
                <div class="glassmorphism-card">
                  <div class="testimonial-header">
                    <div class="testimonial-avatar">${testimonial.image}</div>
                    <div class="testimonial-info">
                      <h4>${testimonial.name}</h4>
                      <p>${testimonial.role}</p>
                    </div>
                  </div>
                  <div class="testimonial-content">"${testimonial.content}"</div>
                  <div class="stars">
                    ${'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="glassmorphism-section">
      <div class="glassmorphism-bg"></div>
      <div class="section">
        <div class="container">
          <h2>❓ שאלות נפוצות</h2>
          <div class="faq-grid">
            ${content.faq.map(item => `
              <div class="faq-item">
                <div class="glassmorphism-card">
                  <h3>${item.question}</h3>
                  <p>${item.answer}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="glassmorphism-section">
      <div class="glassmorphism-bg"></div>
      <div class="section" id="contact">
        <div class="container">
          <div class="contact-content">
            <div class="glassmorphism-card">
              <h2>💬 ${content.contactTitle}</h2>
              <div class="contact-info">${formData.contactInfo}</div>
              <a href="#contact" class="cta-button">${content.cta}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const renderStorytellingContent = () => `
    <div class="hero">
      <div class="hero-content">
        <span class="badge">${content.badge}</span>
        <h1>הסיפור שלנו התחיל כאן</h1>
        <p>מתוך חלום להביא שינוי אמיתי, התחלנו במסע שמטרתו לתת לכם את השירות הטוב ביותר. כל לקוח הוא חלק מהסיפור שלנו.</p>
        <a href="#contact" class="cta-button">בואו נכיר</a>
        <div class="stats-grid">
          ${Object.entries(content.stats).map(([key, value]) => `
            <div class="stat-card">
              <span class="stat-number">${value}</span>
              <span class="stat-label">${key}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    ${content.whyChooseUs ? `
    <div class="section">
      <div class="container">
        <h2>למה אנחנו שונים?</h2>
        <div class="why-choose-grid">
          ${content.whyChooseUs.items.map(item => `
            <div class="why-choose-item">
              <div class="icon-container">
                <i class="ri-${item.icon}"></i>
              </div>
              <h3>הערך שלנו</h3>
              <p>${item.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    ` : ''}

    <div class="section">
      <div class="container">
        <h2>הסיפור מאחורי ${content.aboutTitle}</h2>
        <div style="max-width: 800px; margin: 0 auto; text-align: center; font-size: 1.2rem; line-height: 1.8;">
          <p>${content.aboutText}</p>
          <p style="margin-top: 2rem; font-style: italic;">"אנחנו מאמינים שכל לקוח ראוי לחוויה אישית ומיוחדת שתישמר איתו לתמיד."</p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>הסיפורים של הלקוחות שלנו</h2>
        <div class="testimonials-grid">
          ${content.testimonials.map(testimonial => `
            <div class="testimonial-card">
              <div class="testimonial-header">
                <div class="testimonial-avatar">${testimonial.image}</div>
                <div class="testimonial-info">
                  <h4>${testimonial.name}</h4>
                  <p>${testimonial.role}</p>
                </div>
              </div>
              <div class="testimonial-content">${testimonial.content}</div>
              <div class="stars">
                ${'★'.repeat(testimonial.rating)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="section" id="contact">
      <div class="container">
        <div class="contact-content">
          <h2>בואו נתחיל את הסיפור שלכם</h2>
          <div class="contact-info">${formData.contactInfo}</div>
          <a href="#contact" class="cta-button">התחילו עכשיו</a>
        </div>
      </div>
    </div>
  `;

  const renderMinimalContent = () => `
    <div class="hero">
      <div class="hero-content">
        <span class="badge">${content.badge}</span>
        <h1>${content.headline}</h1>
        <p>${content.subheadline}</p>
        <a href="#contact" class="cta-button">${content.cta}</a>
        <div class="stats-grid">
          ${Object.entries(content.stats).map(([key, value]) => `
            <div class="stat-card">
              <span class="stat-number">${value}</span>
              <span class="stat-label">${key}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    ${content.whyChooseUs ? `
    <div class="section">
      <div class="container">
        <h2>${content.whyChooseUs.title}</h2>
        <div class="why-choose-grid">
          ${content.whyChooseUs.items.map(item => `
            <div class="why-choose-item">
              <div class="icon-container">
                <i class="ri-${item.icon}"></i>
              </div>
              <h3>יתרון תחרותי</h3>
              <p>${item.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    ` : ''}

    <div class="section">
      <div class="container">
        <h2>פתרון</h2>
        <div style="max-width: 600px; margin: 0 auto;">
          <p style="font-size: 1.2rem; text-align: center;">${content.aboutText}</p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>המלצות</h2>
        <div class="testimonials-grid">
          ${content.testimonials.map(testimonial => `
            <div class="testimonial-card">
              <div class="testimonial-header">
                <div class="testimonial-avatar">${testimonial.image}</div>
                <div class="testimonial-info">
                  <h4>${testimonial.name}</h4>
                  <p>${testimonial.role}</p>
                </div>
              </div>
              <div class="testimonial-content">${testimonial.content}</div>
              <div class="stars">
                ${'★'.repeat(testimonial.rating)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>שאלות נפוצות</h2>
        <div class="faq-grid">
          ${content.faq.map(item => `
            <div class="faq-item">
              <h3>${item.question}</h3>
              <p>${item.answer}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="section" id="contact">
      <div class="container">
        <div class="contact-content">
          <h2>יצירת קשר</h2>
          <div class="contact-info">${formData.contactInfo}</div>
          <a href="#contact" class="cta-button">${content.cta}</a>
        </div>
      </div>
    </div>
  `;

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.headline}</title>
  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css" rel="stylesheet">
  ${getStylesByDesignStyle()}
</head>
<body>
  ${renderContentByStyle()}
</body>
</html>`;
};
