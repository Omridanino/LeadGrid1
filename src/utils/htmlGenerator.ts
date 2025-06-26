import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, currentColors: ColorScheme, formData: any, heroImage?: string) => {
  const finalHeroImage = formData.heroStyle === 'image' && heroImage ? heroImage : null;
  
  const shouldShowSection = (sectionId: string) => {
    if (!formData.selectedElements || formData.selectedElements.length === 0) {
      return true; // Show all sections if none selected
    }
    return formData.selectedElements.includes(sectionId);
  };

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
        width: 10rem;
        height: 10rem;
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
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        background: linear-gradient(135deg, ${currentColors.secondary}60, ${currentColors.accent}60);
        animation: pulse 4s ease-in-out infinite;
        filter: blur(6px);
        transform: perspective(800px) rotateX(-30deg) rotateY(60deg);
      }

      .glassmorphism-card {
        position: relative;
        padding: 1.5rem;
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
        min-height: 500px;
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
        padding: 0.5rem 1.25rem;
        margin-bottom: 1rem;
        background: rgba(255,255,255,0.2);
        color: white;
        border: 2px solid rgba(255,255,255,0.3);
        border-radius: 1rem;
        backdrop-filter: blur(10px);
        transform: perspective(300px) rotateX(10deg);
        animation: pulse 2s infinite;
        font-size: 0.9rem;
      }

      .hero h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        color: ${currentColors.headlineColor || 'white'};
        text-shadow: 0 10px 30px rgba(0,0,0,0.8);
        transform: perspective(800px) rotateX(5deg);
      }

      .hero p {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        color: ${currentColors.subheadlineColor || 'rgba(255,255,255,0.9)'};
        text-shadow: 0 5px 15px rgba(0,0,0,0.6);
        transform: perspective(600px) rotateX(3deg);
      }

      .cta-button {
        display: inline-block;
        padding: 1rem 2rem;
        background: linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary}, ${currentColors.secondary});
        color: white;
        text-decoration: none;
        border-radius: 0.75rem;
        font-weight: bold;
        font-size: 1.1rem;
        box-shadow: 0 15px 40px ${currentColors.accent}60;
        transform: perspective(500px) rotateX(8deg);
        transition: all 0.3s ease;
      }

      .cta-button:hover {
        transform: perspective(500px) rotateX(8deg) scale(1.1);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }

      .stat-card {
        padding: 1rem;
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
        font-size: 1.75rem;
        font-weight: bold;
        color: white;
        text-shadow: 0 5px 15px rgba(0,0,0,0.5);
      }

      .stat-label {
        font-size: 1rem;
        color: white;
        font-weight: 600;
        text-shadow: 0 3px 8px rgba(0,0,0,0.3);
      }

      /* Section Styles */
      .section {
        padding: 4rem 1rem;
        position: relative;
      }

      .section h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
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

      /* Features Grid */
      .features-grid, .why-choose-grid, .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }

      .feature-item, .why-choose-item, .service-item {
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
        margin: 0 auto 1.5rem;
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

      .feature-item h3, .why-choose-item h3, .service-item h3 {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: ${currentColors.text};
      }

      .feature-item p, .why-choose-item p, .service-item p {
        color: ${currentColors.text};
        line-height: 1.6;
        margin-bottom: 0.5rem;
      }

      .service-price {
        font-size: 1.25rem;
        font-weight: bold;
        color: ${currentColors.accent};
        margin-top: 1rem;
      }

      /* Testimonials */
      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }

      .testimonial-card {
        position: relative;
      }

      .testimonial-header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }

      .testimonial-avatar {
        width: 3rem;
        height: 3rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary});
        color: white;
        font-size: 1.25rem;
        margin-left: 0.75rem;
        transform: perspective(300px) rotateX(15deg);
      }

      .testimonial-info h4 {
        font-weight: bold;
        color: ${currentColors.primary};
        font-size: 1.1rem;
      }

      .testimonial-info p {
        color: #9ca3af;
        font-size: 0.875rem;
      }

      .testimonial-content {
        margin-bottom: 1rem;
        font-size: 1rem;
        color: ${currentColors.text};
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        line-height: 1.6;
      }

      .stars {
        display: flex;
      }

      .star {
        color: #fbbf24;
        font-size: 1.1rem;
      }

      /* FAQ */
      .faq-grid {
        display: grid;
        gap: 1rem;
        margin-top: 2rem;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }

      .faq-item h3 {
        font-weight: bold;
        margin-bottom: 0.75rem;
        color: ${currentColors.secondary};
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        font-size: 1.1rem;
      }

      .faq-item p {
        color: ${currentColors.text};
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        font-size: 1rem;
        line-height: 1.6;
      }

      /* Contact */
      .contact-content {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
      }

      .contact-info {
        padding: 1.5rem;
        border-radius: 0.75rem;
        background: rgba(0,0,0,0.3);
        backdrop-filter: blur(10px);
        margin-bottom: 2rem;
        white-space: pre-line;
        color: ${currentColors.contactTextColor || currentColors.text};
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        font-size: 1.1rem;
        line-height: 1.6;
      }

      .cta-section {
        text-align: center;
        margin: 3rem 0;
      }

      .cta-section p {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        color: ${currentColors.text};
      }

      @media (min-width: 768px) {
        .hero h1 { font-size: 3rem; }
        .hero p { font-size: 1.5rem; }
        .section h2 { font-size: 2.5rem; }
        .stats-grid { grid-template-columns: repeat(4, 1fr); }
        .features-grid { grid-template-columns: repeat(3, 1fr); }
        .services-grid { grid-template-columns: repeat(3, 1fr); }
      }
    </style>
  `;

  const generateStorytellingStyles = () => `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Inter', sans-serif;
        line-height: 1.7;
        color: #2c3e50;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        overflow-x: hidden;
      }

      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding: 4rem 2rem;
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #4a6741 100%);
        color: white;
        text-align: center;
        position: relative;
      }

      .hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="g"><stop offset="0%" stop-color="rgba(255,255,255,0.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs><circle cx="20" cy="20" r="15" fill="url(%23g)"/><circle cx="80" cy="70" r="20" fill="url(%23g)"/></svg>') no-repeat;
        background-size: cover;
        opacity: 0.3;
      }

      .hero-content {
        max-width: 1000px;
        margin: 0 auto;
        z-index: 10;
        position: relative;
      }

      .badge {
        display: inline-block;
        padding: 1rem 2.5rem;
        background: rgba(255,255,255,0.15);
        border: 2px solid rgba(255,255,255,0.3);
        border-radius: 50px;
        margin-bottom: 3rem;
        font-size: 1.1rem;
        font-weight: 500;
        backdrop-filter: blur(20px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      }

      .hero h1 {
        font-family: 'Playfair Display', serif;
        font-size: 4.5rem;
        font-weight: 300;
        margin-bottom: 2.5rem;
        line-height: 1.1;
        text-shadow: 0 4px 20px rgba(0,0,0,0.3);
      }

      .hero p {
        font-size: 1.8rem;
        margin-bottom: 3.5rem;
        opacity: 0.95;
        line-height: 1.6;
        font-weight: 300;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }

      .cta-button {
        display: inline-block;
        padding: 1.5rem 3rem;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-size: 1.3rem;
        font-weight: 600;
        transition: all 0.4s ease;
        box-shadow: 0 10px 30px rgba(231,76,60,0.4);
        position: relative;
        overflow: hidden;
      }

      .cta-button::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%);
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .cta-button:hover::before {
        opacity: 1;
      }

      .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(231,76,60,0.6);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2.5rem;
        margin-top: 5rem;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
      }

      .stat-card {
        text-align: center;
        padding: 2.5rem;
        background: rgba(255,255,255,0.1);
        border-radius: 25px;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.2);
        transition: all 0.3s ease;
      }

      .stat-card:hover {
        transform: translateY(-10px);
        background: rgba(255,255,255,0.15);
      }

      .stat-number {
        font-size: 3.5rem;
        font-weight: 700;
        display: block;
        margin-bottom: 0.5rem;
      }

      .stat-label {
        font-size: 1.2rem;
        opacity: 0.9;
        font-weight: 400;
      }

      .section {
        padding: 8rem 2rem;
        position: relative;
      }

      .section:nth-child(even) {
        background: linear-gradient(135deg, #ecf0f1 0%, #bdc3c7 100%);
      }

      .section h2 {
        font-family: 'Playfair Display', serif;
        font-size: 3.5rem;
        font-weight: 400;
        text-align: center;
        margin-bottom: 4rem;
        color: #2c3e50;
        position: relative;
      }

      .section h2::after {
        content: '';
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: linear-gradient(135deg, #e74c3c, #f39c12);
        border-radius: 2px;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .story-content, .values-content {
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
      }

      .story-content p, .values-content p {
        font-size: 1.4rem;
        line-height: 1.8;
        margin-bottom: 3rem;
        color: #34495e;
        font-weight: 300;
      }

      .story-quote {
        background: white;
        padding: 4rem;
        border-radius: 30px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        margin: 4rem 0;
        position: relative;
      }

      .story-quote::before {
        content: '"';
        position: absolute;
        top: -30px;
        left: 40px;
        font-size: 8rem;
        color: #e74c3c;
        font-family: 'Playfair Display', serif;
        line-height: 1;
      }

      .story-quote p {
        font-size: 1.6rem;
        font-style: italic;
        color: #7f8c8d;
        margin-top: 2rem;
      }

      .values-grid, .why-choose-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 3rem;
        margin-top: 4rem;
      }

      .value-item, .why-choose-item {
        text-align: center;
        padding: 4rem 2rem;
        background: white;
        border-radius: 30px;
        box-shadow: 0 15px 50px rgba(0,0,0,0.08);
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
      }

      .value-item::before, .why-choose-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(135deg, #e74c3c, #f39c12);
      }

      .value-item:hover, .why-choose-item:hover {
        transform: translateY(-15px);
        box-shadow: 0 25px 80px rgba(0,0,0,0.15);
      }

      .icon-container {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: linear-gradient(135deg, #e74c3c, #f39c12);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 2.5rem;
        box-shadow: 0 10px 30px rgba(231,76,60,0.3);
      }

      .icon-container i {
        font-size: 3rem;
        color: white;
      }

      .value-item h3, .why-choose-item h3 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        color: #2c3e50;
        font-weight: 600;
      }

      .value-item p, .why-choose-item p {
        color: #7f8c8d;
        line-height: 1.6;
        font-size: 1.2rem;
        font-weight: 400;
      }

      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 3rem;
        margin-top: 4rem;
      }

      .testimonial-card {
        background: white;
        padding: 4rem;
        border-radius: 30px;
        box-shadow: 0 15px 50px rgba(0,0,0,0.08);
        position: relative;
        transition: all 0.3s ease;
      }

      .testimonial-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 80px rgba(0,0,0,0.15);
      }

      .testimonial-header {
        display: flex;
        align-items: center;
        margin-bottom: 2.5rem;
      }

      .testimonial-avatar {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background: linear-gradient(135deg, #e74c3c, #f39c12);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2.5rem;
        margin-left: 1.5rem;
        box-shadow: 0 8px 25px rgba(231,76,60,0.3);
      }

      .contact-section {
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        color: white;
        text-align: center;
      }

      .contact-section h2 {
        color: white;
      }

      @media (max-width: 768px) {
        .hero h1 { font-size: 3rem; }
        .hero p { font-size: 1.4rem; }
        .stats-grid { grid-template-columns: repeat(2, 1fr); }
        .section h2 { font-size: 2.5rem; }
      }
    </style>
  `;

  const generateMinimalStyles = () => `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.5;
        color: #1a202c;
        background: #ffffff;
        font-weight: 400;
      }

      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding: 3rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        position: relative;
      }

      .hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%);
        background-size: 20px 20px;
        animation: slide 20s linear infinite;
      }

      @keyframes slide {
        0% { background-position: 0 0; }
        100% { background-position: 100px 100px; }
      }

      .hero-content {
        max-width: 900px;
        margin: 0 auto;
        z-index: 10;
        position: relative;
      }

      .badge {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 6px;
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 3rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        backdrop-filter: blur(10px);
      }

      .hero h1 {
        font-size: 5rem;
        font-weight: 800;
        margin-bottom: 2rem;
        line-height: 0.9;
        letter-spacing: -0.02em;
      }

      .hero p {
        font-size: 1.5rem;
        margin-bottom: 4rem;
        opacity: 0.9;
        font-weight: 300;
        line-height: 1.4;
        max-width: 700px;
      }

      .cta-button {
        display: inline-block;
        padding: 1.25rem 2.5rem;
        background: #000;
        color: white;
        text-decoration: none;
        border-radius: 0;
        font-weight: 700;
        transition: all 0.2s ease;
        border: 2px solid #000;
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .cta-button:hover {
        background: transparent;
        color: #000;
        background: white;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 4rem;
        margin-top: 6rem;
        padding-top: 4rem;
        border-top: 1px solid rgba(255,255,255,0.2);
      }

      .stat-card {
        text-align: center;
      }

      .stat-number {
        font-size: 3rem;
        font-weight: 900;
        display: block;
        margin-bottom: 0.5rem;
      }

      .stat-label {
        font-size: 0.875rem;
        opacity: 0.8;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .section {
        padding: 10rem 3rem;
      }

      .section:nth-child(even) {
        background: #f8fafc;
      }

      .section h2 {
        font-size: 4rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 6rem;
        color: #1a202c;
        letter-spacing: -0.02em;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .problem-grid, .solution-grid, .benefits-grid, .pricing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 0;
        margin-top: 4rem;
      }

      .problem-item, .solution-item, .benefit-item, .pricing-item {
        background: white;
        padding: 4rem;
        border: 1px solid #e2e8f0;
        text-align: left;
        transition: all 0.2s ease;
        position: relative;
      }

      .problem-item:hover, .solution-item:hover, .benefit-item:hover {
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        z-index: 10;
      }

      .icon-container {
        width: 80px;
        height: 80px;
        background: #667eea;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        border-radius: 0;
      }

      .icon-container i {
        font-size: 2rem;
        color: white;
      }

      .problem-item h3, .solution-item h3, .benefit-item h3 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: #1a202c;
        font-weight: 700;
      }

      .problem-item p, .solution-item p, .benefit-item p {
        color: #4a5568;
        line-height: 1.6;
        font-weight: 400;
        font-size: 1.1rem;
      }

      .pricing-item {
        position: relative;
        text-align: center;
        transition: all 0.3s ease;
      }

      .pricing-popular {
        border: 2px solid #667eea;
        transform: scale(1.05);
        z-index: 10;
      }

      .pricing-popular::before {
        content: 'הכי פופולרי';
        position: absolute;
        top: -1rem;
        left: 50%;
        transform: translateX(-50%);
        background: #667eea;
        color: white;
        padding: 0.5rem 1.5rem;
        font-size: 0.875rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .pricing-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        color: #1a202c;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .pricing-price {
        font-size: 4rem;
        font-weight: 900;
        color: #667eea;
        margin-bottom: 2rem;
        line-height: 1;
      }

      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 0;
        margin-top: 4rem;
      }

      .testimonial-card {
        background: white;
        padding: 4rem;
        border: 1px solid #e2e8f0;
        transition: all 0.2s ease;
        position: relative;
      }

      .testimonial-card:hover {
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        z-index: 10;
      }

      .contact-section {
        background: #1a202c;
        color: white;
      }

      .contact-section h2 {
        color: white;
      }

      @media (max-width: 768px) {
        .hero h1 { font-size: 3.5rem; }
        .section h2 { font-size: 2.5rem; }
        .stats-grid { grid-template-columns: repeat(2, 1fr); }
        .pricing-grid { grid-template-columns: 1fr; }
      }
    </style>
  `;

  const renderContentByStyle = () => {
    const sections = [];
    
    // Always include hero
    sections.push(renderHeroContent());
    
    // Add sections based on selected elements
    if (shouldShowSection('why-choose') && content.whyChooseUs) {
      sections.push(renderWhyChooseContent());
    }
    
    if (shouldShowSection('story') && formData.designStyle === 'storytelling') {
      sections.push(renderStoryContent());
    }
    
    if (shouldShowSection('values') && formData.designStyle === 'storytelling') {
      sections.push(renderValuesContent());
    }
    
    if (shouldShowSection('problem-solution') && formData.designStyle === 'minimal') {
      sections.push(renderProblemSolutionContent());
    }
    
    if (shouldShowSection('pricing') && formData.designStyle === 'minimal') {
      sections.push(renderPricingContent());
    }
    
    if (shouldShowSection('about')) {
      sections.push(renderAboutContent());
    }
    
    if (shouldShowSection('services')) {
      sections.push(renderServicesContent());
    }
    
    if (shouldShowSection('testimonials')) {
      sections.push(renderTestimonialsContent());
    }
    
    if (shouldShowSection('faq')) {
      sections.push(renderFAQContent());
    }
    
    if (shouldShowSection('contact')) {
      sections.push(renderContactContent());
    }
    
    return sections.join('');
  };

  const renderHeroContent = () => `
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
  `;

  const renderWhyChooseContent = () => `
    <div class="section">
      <div class="container">
        <h2>${content.whyChooseUs.title}</h2>
        <div class="why-choose-grid">
          ${content.whyChooseUs.items.map(item => `
            <div class="why-choose-item">
              <div class="icon-container">
                <i class="ri-${item.icon}"></i>
              </div>
              <h3>יתרון מוביל</h3>
              <p>${item.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  const renderStoryContent = () => `
    <div class="section">
      <div class="container">
        <h2>💗 איך הכל התחיל</h2>
        <div class="story-content">
          <p>"הכל התחיל מרגע של השראה. ראינו צורך אמיתי בשוק, משהו שחסר ויכול לעשות הבדל אמיתי בחיי האנשים. החלטנו שלא נתפשר על איכות ושלא נוותר על החלום שלנו להיות הטובים ביותר במה שאנחנו עושים."</p>
          <div class="story-quote">
            <p>"המטרה שלנו היא פשוטה: לתת לכל לקוח חוויה שהוא לא ישכח ושירות שהוא יספר עליו לחברים שלו."</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const renderValuesContent = () => `
    <div class="section">
      <div class="container">
        <h2>🛡️ הערכים שמנחים אותנו</h2>
        <div class="values-grid">
          <div class="value-item">
            <div class="icon-container">
              <i class="ri-hand-heart-fill"></i>
            </div>
            <h3>יחס אישי</h3>
            <p>כל לקוח מקבל יחס אישי ומותאם במיוחד עבורו</p>
          </div>
          <div class="value-item">
            <div class="icon-container">
              <i class="ri-shield-check-fill"></i>
            </div>
            <h3>אמינות</h3>
            <p>אנחנו עומדים במילה שלנו ומקפידים על איכות ללא פשרות</p>
          </div>
          <div class="value-item">
            <div class="icon-container">
              <i class="ri-lightbulb-flash-fill"></i>
            </div>
            <h3>חדשנות</h3>
            <p>תמיד מחפשים דרכים חדשות ויצירתיות לשפר את השירות</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const renderProblemSolutionContent = () => `
    <div class="section">
      <div class="container">
        <h2>📈 הבעיה</h2>
        <div class="problem-content">
          <p>חברות רבות מתמודדות עם אתגרים דומים: חוסר יעילות, עלויות גבוהות, וקושי למצוא פתרונות מותאמים.</p>
        </div>
        <div class="problem-grid">
          <div class="problem-item">
            <div class="icon-container">
              <i class="ri-time-fill"></i>
            </div>
            <h3>חוסר יעילות</h3>
            <p>תהליכים איטיים ולא אופטימליים</p>
          </div>
          <div class="problem-item">
            <div class="icon-container">
              <i class="ri-money-dollar-circle-fill"></i>
            </div>
            <h3>עלויות גבוהות</h3>
            <p>השקעות מיותרות ללא תשואה ברורה</p>
          </div>
          <div class="problem-item">
            <div class="icon-container">
              <i class="ri-puzzle-fill"></i>
            </div>
            <h3>פתרונות לא מותאמים</h3>
            <p>פתרונות גנריים שלא עונים על הצרכים הספציפיים</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>פתרון</h2>
        <div class="solution-content">
          <p>${content.aboutText}</p>
        </div>
        <div class="solution-grid">
          <div class="solution-item">
            <div class="icon-container">
              <i class="ri-speed-fill"></i>
            </div>
            <h3>מהירות</h3>
            <p>תוצאות מהירות ויעילות מקסימלית</p>
          </div>
          <div class="solution-item">
            <div class="icon-container">
              <i class="ri-target-fill"></i>
            </div>
            <h3>דיוק</h3>
            <p>פתרונות מדויקים ומותאמים אישית</p>
          </div>
          <div class="solution-item">
            <div class="icon-container">
              <i class="ri-award-fill"></i>
            </div>
            <h3>איכות</h3>
            <p>רמת איכות גבוהה ללא פשרות</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const renderPricingContent = () => `
    <div class="section">
      <div class="container">
        <h2>🕐 מחירים</h2>
        <div class="pricing-grid">
          <div class="pricing-item">
            <h3 class="pricing-title">בסיסי</h3>
            <div class="pricing-price">₪299</div>
            <ul class="pricing-features">
              <li>שירות בסיסי</li>
              <li>תמיכה במייל</li>
              <li>גישה למערכת</li>
            </ul>
            <button class="pricing-button">בחר תוכנית</button>
          </div>
          <div class="pricing-item pricing-popular">
            <h3 class="pricing-title">מתקדם</h3>
            <div class="pricing-price">₪599</div>
            <ul class="pricing-features">
              <li>כל התכונות הבסיסיות</li>
              <li>תמיכה טלפונית</li>
              <li>דוחות מפורטים</li>
              <li>אינטגרציות</li>
            </ul>
            <button class="pricing-button">בחר תוכנית</button>
          </div>
          <div class="pricing-item">
            <h3 class="pricing-title">מקצועי</h3>
            <div class="pricing-price">₪999</div>
            <ul class="pricing-features">
              <li>כל התכונות המתקדמות</li>
              <li>ייעוץ אישי</li>
              <li>התאמה אישית</li>
              <li>תמיכה 24/7</li>
            </ul>
            <button class="pricing-button">בחר תוכנית</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const renderAboutContent = () => `
    <div class="section">
      <div class="container">
        <h2>👥 ${content.aboutTitle}</h2>
        <div class="about-content">
          <p style="font-size: 1.25rem; color: ${currentColors.aboutTextColor || currentColors.text}; line-height: 1.8; margin-bottom: 2rem; text-align: center; max-width: 1000px; margin-left: auto; margin-right: auto;">${content.aboutText}</p>
        </div>
      </div>
    </div>
  `;

  const renderServicesContent = () => `
    <div class="section">
      <div class="container">
        <h2>🎯 השירותים שלנו</h2>
        <div class="services-grid">
          <div class="service-item">
            <div class="icon-container">
              <i class="ri-tools-fill"></i>
            </div>
            <h3>פתרונות מקצועיים</h3>
            <p>שירותים מקצועיים המותאמים לצרכים שלכם</p>
            <div class="service-price">החל מ₪199</div>
          </div>
          <div class="service-item">
            <div class="icon-container">
              <i class="ri-team-fill"></i>
            </div>
            <h3>ייעוץ אישי</h3>
            <p>ליווי צמוד ויעוץ מקצועי לאורך כל הדרך</p>
            <div class="service-price">החל מ₪299</div>
          </div>
          <div class="service-item">
            <div class="icon-container">
              <i class="ri-rocket-2-fill"></i>
            </div>
            <h3>פתרון מהיר</h3>
            <p>תוצאות מהירות ויעילות ללא פשרות</p>
            <div class="service-price">החל מ₪399</div>
          </div>
        </div>
      </div>
    </div>
  `;

  const renderTestimonialsContent = () => `
    <div class="section">
      <div class="container">
        <h2>💭 מה אומרים עלינו</h2>
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
              <div class="testimonial-content">"${testimonial.content}"</div>
              <div class="stars">
                ${'★'.repeat(testimonial.rating)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  const renderFAQContent = () => `
    <div class="section">
      <div class="container">
        <h2>❓ שאלות נפוצות</h2>
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
  `;

  const renderContactContent = () => `
    <div class="section contact-section" id="contact">
      <div class="container">
        <div class="contact-content">
          <h2>💬 ${content.contactTitle}</h2>
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
