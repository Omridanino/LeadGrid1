
import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, currentColors: ColorScheme, formData: any, heroImage?: string) => {
  const finalHeroImage = formData.heroStyle === 'image' && heroImage ? heroImage : null;
  
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.headline}</title>
  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: ${currentColors.text};
      background: ${currentColors.background};
      overflow-x: hidden;
    }

    /* Enhanced 3D Floating Elements */
    .floating-orb {
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(135deg, ${currentColors.primary}80, ${currentColors.secondary}60, ${currentColors.accent}40);
      filter: blur(1px);
      animation: float 6s ease-in-out infinite;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    }

    .floating-orb:nth-child(1) {
      width: 80px;
      height: 80px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }

    .floating-orb:nth-child(2) {
      width: 120px;
      height: 120px;
      top: 60%;
      right: 15%;
      animation-delay: -2s;
    }

    .floating-orb:nth-child(3) {
      width: 60px;
      height: 60px;
      top: 80%;
      left: 70%;
      animation-delay: -4s;
    }

    .floating-orb:nth-child(4) {
      width: 100px;
      height: 100px;
      top: 30%;
      right: 60%;
      animation-delay: -1s;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
        opacity: 0.6;
      }
      25% {
        transform: translateY(-30px) translateX(15px) rotate(90deg);
        opacity: 0.8;
      }
      50% {
        transform: translateY(-60px) translateX(-10px) rotate(180deg);
        opacity: 1;
      }
      75% {
        transform: translateY(-20px) translateX(-25px) rotate(270deg);
        opacity: 0.7;
      }
    }

    /* Enhanced Glassmorphism Styles */
    .glassmorphism-section {
      position: relative;
      overflow: hidden;
    }

    .glassmorphism-bg {
      position: absolute;
      inset: 0;
      opacity: 0.1;
    }

    .glassmorphism-bg::before {
      content: '';
      position: absolute;
      top: 4rem;
      left: 4rem;
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
      background: conic-gradient(from 45deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent}, ${currentColors.primary});
      animation: spin 20s linear infinite, pulse 4s ease-in-out infinite;
      filter: blur(12px);
      transform: perspective(1000px) rotateX(45deg) rotateY(45deg);
    }

    .glassmorphism-bg::after {
      content: '';
      position: absolute;
      bottom: 4rem;
      right: 4rem;
      width: 12rem;
      height: 12rem;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      background: linear-gradient(135deg, ${currentColors.secondary}70, ${currentColors.accent}50);
      animation: morph 8s ease-in-out infinite, float 6s ease-in-out infinite;
      filter: blur(8px);
      transform: perspective(800px) rotateX(-30deg) rotateY(60deg);
    }

    .glassmorphism-card {
      position: relative;
      padding: 2rem;
      border-radius: 1.5rem;
      background: linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05));
      border: 2px solid ${currentColors.primary}60;
      backdrop-filter: blur(25px);
      box-shadow: 
        0 25px 80px rgba(0,0,0,0.4), 
        inset 0 3px 0 rgba(255,255,255,0.3),
        0 0 0 1px rgba(255,255,255,0.1);
      transform: perspective(1000px) rotateX(5deg) rotateY(2deg);
      transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1);
    }

    .glassmorphism-card:hover {
      transform: perspective(1000px) rotateX(5deg) rotateY(2deg) scale(1.08) translateY(-10px);
      box-shadow: 
        0 35px 100px rgba(0,0,0,0.5), 
        inset 0 3px 0 rgba(255,255,255,0.4),
        0 0 30px ${currentColors.primary}40;
    }

    @keyframes spin {
      from { transform: perspective(1000px) rotateX(45deg) rotateY(45deg) rotate(0deg); }
      to { transform: perspective(1000px) rotateX(45deg) rotateY(45deg) rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50% { opacity: 0.2; transform: scale(1.1); }
    }

    @keyframes morph {
      0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
      25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
      50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
      75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
    }

    /* Enhanced Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 3rem 1rem;
      background: ${finalHeroImage 
        ? `radial-gradient(circle at 30% 70%, ${currentColors.primary}40 0%, transparent 50%), radial-gradient(circle at 70% 30%, ${currentColors.secondary}30 0%, transparent 50%), linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('${finalHeroImage}')` 
        : `radial-gradient(circle at 30% 70%, ${currentColors.primary} 0%, transparent 50%), radial-gradient(circle at 70% 30%, ${currentColors.secondary} 0%, transparent 50%), linear-gradient(135deg, ${currentColors.background} 0%, ${currentColors.accent}20 100%)`};
      background-size: cover;
      background-position: center;
      position: relative;
    }

    .hero-content {
      max-width: 900px;
      z-index: 10;
      position: relative;
      animation: heroEntrance 1.2s ease-out;
    }

    @keyframes heroEntrance {
      0% {
        opacity: 0;
        transform: translateY(50px) scale(0.9);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .badge {
      display: inline-block;
      padding: 1rem 2rem;
      margin-bottom: 2rem;
      background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
      color: white;
      border: 2px solid rgba(255,255,255,0.4);
      border-radius: 2rem;
      backdrop-filter: blur(15px);
      transform: perspective(500px) rotateX(15deg);
      animation: badgePulse 3s infinite, badgeFloat 4s ease-in-out infinite;
      font-size: 1.1rem;
      font-weight: 600;
      text-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    @keyframes badgePulse {
      0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.3); }
      50% { box-shadow: 0 0 40px rgba(255,255,255,0.6), 0 0 60px ${currentColors.primary}60; }
    }

    @keyframes badgeFloat {
      0%, 100% { transform: perspective(500px) rotateX(15deg) translateY(0); }
      50% { transform: perspective(500px) rotateX(15deg) translateY(-8px); }
    }

    .hero h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 2rem;
      color: ${currentColors.headlineColor || 'white'};
      text-shadow: 0 15px 40px rgba(0,0,0,0.8);
      transform: perspective(800px) rotateX(5deg);
      background: linear-gradient(135deg, ${currentColors.headlineColor || 'white'}, ${currentColors.primary});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: titleShine 3s ease-in-out infinite;
    }

    @keyframes titleShine {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.2); }
    }

    .hero p {
      font-size: 1.4rem;
      margin-bottom: 3rem;
      color: ${currentColors.subheadlineColor || 'rgba(255,255,255,0.9)'};
      text-shadow: 0 8px 20px rgba(0,0,0,0.6);
      transform: perspective(600px) rotateX(3deg);
      line-height: 1.7;
    }

    .cta-button {
      display: inline-block;
      padding: 1.5rem 3rem;
      background: linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary}, ${currentColors.secondary});
      color: white;
      text-decoration: none;
      border-radius: 1rem;
      font-weight: 700;
      font-size: 1.2rem;
      box-shadow: 
        0 20px 60px ${currentColors.accent}70,
        0 0 30px ${currentColors.primary}50;
      transform: perspective(500px) rotateX(8deg);
      transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
      animation: buttonGlow 2s ease-in-out infinite;
      border: 2px solid rgba(255,255,255,0.2);
    }

    .cta-button:hover {
      transform: perspective(500px) rotateX(8deg) scale(1.15) translateY(-5px);
      box-shadow: 
        0 30px 80px ${currentColors.accent}80,
        0 0 50px ${currentColors.primary}70;
    }

    @keyframes buttonGlow {
      0%, 100% { box-shadow: 0 20px 60px ${currentColors.accent}70, 0 0 30px ${currentColors.primary}50; }
      50% { box-shadow: 0 25px 70px ${currentColors.accent}80, 0 0 40px ${currentColors.primary}60; }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 4rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .stat-card {
      padding: 1.5rem;
      border-radius: 1.5rem;
      background: linear-gradient(145deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
      backdrop-filter: blur(20px);
      border: 2px solid ${currentColors.primary}50;
      transform: perspective(600px) rotateX(10deg) rotateY(5deg);
      transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
      animation: statFloat 4s ease-in-out infinite;
    }

    .stat-card:nth-child(2n) {
      animation-delay: -1s;
    }

    .stat-card:nth-child(3n) {
      animation-delay: -2s;
    }

    @keyframes statFloat {
      0%, 100% { transform: perspective(600px) rotateX(10deg) rotateY(5deg) translateY(0); }
      50% { transform: perspective(600px) rotateX(10deg) rotateY(5deg) translateY(-10px); }
    }

    .stat-card:hover {
      transform: perspective(600px) rotateX(10deg) rotateY(5deg) scale(1.15) translateY(-15px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 900;
      color: white;
      text-shadow: 0 8px 20px rgba(0,0,0,0.5);
      display: block;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 1.1rem;
      color: rgba(255,255,255,0.9);
      font-weight: 600;
      text-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    /* Enhanced Section Styles */
    .section {
      padding: 6rem 1rem;
      position: relative;
    }

    .section h2 {
      font-size: 2.8rem;
      font-weight: 800;
      margin-bottom: 3rem;
      text-align: center;
      color: ${currentColors.text};
      text-shadow: 0 12px 24px rgba(0,0,0,0.5);
      transform: perspective(1000px) rotateX(10deg);
      background: linear-gradient(135deg, ${currentColors.text}, ${currentColors.primary});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    /* Enhanced Features Grid */
    .features-grid, .why-choose-grid, .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .feature-item, .why-choose-item, .service-item {
      text-align: center;
      position: relative;
      animation: itemEntrance 0.8s ease-out;
    }

    @keyframes itemEntrance {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .icon-container {
      width: 5rem;
      height: 5rem;
      border-radius: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 2rem;
      background: linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent});
      box-shadow: 
        0 25px 50px ${currentColors.primary}70, 
        inset 0 4px 0 rgba(255,255,255,0.5);
      transform: perspective(500px) rotateX(25deg) rotateY(15deg);
      transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
      animation: iconFloat 3s ease-in-out infinite;
    }

    @keyframes iconFloat {
      0%, 100% { transform: perspective(500px) rotateX(25deg) rotateY(15deg) translateY(0); }
      50% { transform: perspective(500px) rotateX(25deg) rotateY(15deg) translateY(-12px); }
    }

    .icon-container:hover {
      transform: perspective(500px) rotateX(25deg) rotateY(15deg) scale(1.3) rotate(12deg) translateY(-15px);
      box-shadow: 
        0 35px 70px ${currentColors.primary}80, 
        inset 0 4px 0 rgba(255,255,255,0.6),
        0 0 40px ${currentColors.accent}60;
    }

    .icon-container i {
      font-size: 2rem;
      color: white;
      text-shadow: 0 8px 16px rgba(0,0,0,0.6);
      transform: perspective(200px) rotateX(-15deg);
    }

    .feature-item h3, .why-choose-item h3, .service-item h3 {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: ${currentColors.text};
      text-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    .feature-item p, .why-choose-item p, .service-item p {
      color: ${currentColors.text};
      line-height: 1.7;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }

    .service-price {
      font-size: 1.4rem;
      font-weight: 800;
      color: ${currentColors.accent};
      margin-top: 1.5rem;
      text-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    /* Enhanced Testimonials */
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .testimonial-card {
      position: relative;
      animation: testimonialEntrance 1s ease-out;
    }

    @keyframes testimonialEntrance {
      0% {
        opacity: 0;
        transform: rotateY(-20deg) translateZ(-50px);
      }
      100% {
        opacity: 1;
        transform: rotateY(0) translateZ(0);
      }
    }

    .testimonial-header {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .testimonial-avatar {
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary});
      color: white;
      font-size: 1.5rem;
      margin-left: 1rem;
      transform: perspective(300px) rotateX(15deg);
      box-shadow: 0 15px 30px rgba(0,0,0,0.3);
      animation: avatarPulse 2s ease-in-out infinite;
    }

    @keyframes avatarPulse {
      0%, 100% { transform: perspective(300px) rotateX(15deg) scale(1); }
      50% { transform: perspective(300px) rotateX(15deg) scale(1.05); }
    }

    .testimonial-info h4 {
      font-weight: 700;
      color: ${currentColors.primary};
      font-size: 1.2rem;
      margin-bottom: 0.25rem;
    }

    .testimonial-info p {
      color: #9ca3af;
      font-size: 0.95rem;
    }

    .testimonial-content {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      color: ${currentColors.text};
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
      line-height: 1.7;
      font-style: italic;
    }

    .stars {
      display: flex;
      gap: 0.25rem;
    }

    .star {
      color: #fbbf24;
      font-size: 1.3rem;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      animation: starTwinkle 2s ease-in-out infinite;
    }

    .star:nth-child(2n) {
      animation-delay: -0.5s;
    }

    @keyframes starTwinkle {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.1); }
    }

    /* Enhanced FAQ */
    .faq-grid {
      display: grid;
      gap: 1.5rem;
      margin-top: 3rem;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
    }

    .faq-item h3 {
      font-weight: 700;
      margin-bottom: 1rem;
      color: ${currentColors.secondary};
      text-shadow: 0 3px 6px rgba(0,0,0,0.3);
      font-size: 1.2rem;
    }

    .faq-item p {
      color: ${currentColors.text};
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
      font-size: 1.1rem;
      line-height: 1.7;
    }

    /* Enhanced Contact Section */
    .contact-content {
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
    }

    .contact-info {
      padding: 2rem;
      border-radius: 1rem;
      background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(0,0,0,0.2));
      backdrop-filter: blur(15px);
      margin-bottom: 3rem;
      white-space: pre-line;
      color: ${currentColors.contactTextColor || currentColors.text};
      text-shadow: 0 3px 6px rgba(0,0,0,0.3);
      font-size: 1.2rem;
      line-height: 1.8;
      border: 2px solid ${currentColors.primary}40;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .cta-section {
      text-align: center;
      margin: 4rem 0;
    }

    .cta-section p {
      font-size: 1.4rem;
      margin-bottom: 2rem;
      color: ${currentColors.text};
      text-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    /* Responsive Design */
    @media (min-width: 768px) {
      .hero h1 { font-size: 4rem; }
      .hero p { font-size: 1.6rem; }
      .section h2 { font-size: 3.2rem; }
      .stats-grid { grid-template-columns: repeat(4, 1fr); }
      .features-grid { grid-template-columns: repeat(3, 1fr); }
      .services-grid { grid-template-columns: repeat(3, 1fr); }
    }

    @media (max-width: 768px) {
      .hero h1 { font-size: 2.5rem; }
      .hero p { font-size: 1.2rem; }
      .section { padding: 4rem 1rem; }
      .glassmorphism-card { padding: 1.5rem; }
      .icon-container { width: 4rem; height: 4rem; }
      .floating-orb { display: none; }
    }
  </style>
</head>
<body>
  <div class="floating-orb"></div>
  <div class="floating-orb"></div>
  <div class="floating-orb"></div>
  <div class="floating-orb"></div>

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

  <div class="glassmorphism-section">
    <div class="glassmorphism-bg"></div>
    <div class="section">
      <div class="container">
        <h2>⚡ התכונות המרכזיות שלנו</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="glassmorphism-card">
              <div class="icon-container">
                <i class="ri-speed-fill"></i>
              </div>
              <h3>מהירות במתן שירות</h3>
              <p>זמן תגובה מהיר ושירות יעיל</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="glassmorphism-card">
              <div class="icon-container">
                <i class="ri-shield-check-fill"></i>
              </div>
              <h3>אמינות וביטחון</h3>
              <p>שירות אמין עם רמת ביטחון גבוהה</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="glassmorphism-card">
              <div class="icon-container">
                <i class="ri-customer-service-2-fill"></i>
              </div>
              <h3>תמיכה 24/7</h3>
              <p>זמינים עבורכם בכל שעות היום</p>
            </div>
          </div>
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
        <p style="text-align: center; font-size: 1.4rem; margin-bottom: 3rem; color: ${currentColors.text}; text-shadow: 0 4px 8px rgba(0,0,0,0.3);">הסיבות המובילות לבחור בנו מבין כל האפשרויות</p>
        <div class="why-choose-grid">
          ${content.whyChooseUs.items.map(item => `
            <div class="why-choose-item">
              <div class="glassmorphism-card" style="display: flex; align-items: center; text-align: right;">
                <div class="icon-container" style="margin: 0 1rem 0 0; flex-shrink: 0;">
                  <i class="ri-${item.icon}"></i>
                </div>
                <div>
                  <h3 style="color: ${currentColors.primary}; margin-bottom: 0.5rem;">יתרון מוביל</h3>
                  <p style="color: ${currentColors.text}; margin: 0;">${item.text}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="cta-section">
          <p>מוכנים להתחיל את המסע איתנו?</p>
          <a href="#contact" class="cta-button">בואו נתחיל עכשיו ✨</a>
        </div>
      </div>
    </div>
  </div>
  ` : ''}

  <div class="glassmorphism-section">
    <div class="glassmorphism-bg"></div>
    <div class="section">
      <div class="container">
        <h2>🎯 השירותים שלנו</h2>
        <div class="services-grid">
          <div class="service-item">
            <div class="glassmorphism-card">
              <div class="icon-container">
                <i class="ri-tools-fill"></i>
              </div>
              <h3>פתרונות מקצועיים</h3>
              <p>שירותים מקצועיים המותאמים לצרכים שלכם</p>
              <div class="service-price">החל מ₪199</div>
            </div>
          </div>
          <div class="service-item">
            <div class="glassmorphism-card">
              <div class="icon-container">
                <i class="ri-team-fill"></i>
              </div>
              <h3>ייעוץ אישי</h3>
              <p>ליווי צמוד ויעוץ מקצועי לאורך כל הדרך</p>
              <div class="service-price">החל מ₪299</div>
            </div>
          </div>
          <div class="service-item">
            <div class="glassmorphism-card">
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
    </div>
  </div>

  <div class="glassmorphism-section">
    <div class="glassmorphism-bg"></div>
    <div class="section">
      <div class="container">
        <h2>👥 ${content.aboutTitle}</h2>
        <div class="glassmorphism-card" style="max-width: 1000px; margin: 0 auto; padding: 3rem; text-align: center;">
          <p style="font-size: 1.3rem; color: ${currentColors.aboutTextColor || currentColors.text}; line-height: 1.8; margin-bottom: 2rem; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">${content.aboutText}</p>
          <a href="#about" class="cta-button">למד עוד עלינו</a>
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
</body>
</html>`;
};
