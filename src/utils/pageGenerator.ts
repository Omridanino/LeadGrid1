// Complete HTML Generator - Creates exact HTML from template preview with premium support
export const generatePageHTML = (templateData: any) => {
  const template = templateData;
  const isPremium = template.category.includes('פרימיום');
  
  // Premium text colors for content (exact match to TemplatePreview)
  const getPremiumTextColor = (templateId: string) => {
    switch (templateId) {
      case 'tech-consultant-pro':
        return 'white';
      case 'neon-academy-pro':
        return '#00f5ff';
      case 'blockchain-tech-pro':
        return '#bfdbfe';
      case 'creative-3d-pro':
        return '#374151';
      case 'authkit-tech-pro':
        return '#bfdbfe';
      case 'nft-future-pro':
        return '#e879f9';
      default:
        return 'white';
    }
  };

  // Generate styling for each section based on template styles
  const getSectionStyle = (bgColor: string, bgImage?: string) => {
    let style = `background-color: ${bgColor};`;
    if (bgImage) {
      style += `background-image: url(${bgImage}); background-size: cover; background-position: center; background-repeat: no-repeat;`;
    }
    return style;
  };

  // Premium section backgrounds (exact match to PremiumSection components)
  const getPremiumSectionBackground = (templateId: string, sectionType: string) => {
    switch (templateId) {
      case 'tech-consultant-pro':
        return sectionType === 'hero' ? 'background: linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(55, 65, 81) 50%, rgb(0, 0, 0) 100%);' :
               sectionType === 'features' ? 'background: linear-gradient(to bottom, rgb(30, 41, 59) 0%, rgb(55, 65, 81) 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(to bottom, rgb(55, 65, 81) 0%, rgb(30, 41, 59) 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(to bottom, rgb(30, 41, 59) 0%, rgb(0, 0, 0) 100%);' :
               'background: linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 100%);';
      
      case 'neon-academy-pro':
        return sectionType === 'hero' ? 'background: linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(124, 58, 237) 50%, rgb(0, 0, 0) 100%);' :
               sectionType === 'features' ? 'background: linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgb(88, 28, 135) 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(to bottom, rgb(88, 28, 135) 0%, rgb(0, 0, 0) 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgb(88, 28, 135) 100%);' :
               'background: linear-gradient(135deg, rgb(124, 58, 237) 0%, rgb(0, 0, 0) 100%);';
      
      case 'blockchain-tech-pro':
        return sectionType === 'hero' ? 'background: linear-gradient(135deg, rgb(30, 27, 75) 0%, rgb(30, 64, 175) 50%, rgb(124, 45, 18) 100%);' :
               sectionType === 'features' ? 'background: linear-gradient(to bottom, rgb(30, 27, 75) 0%, rgb(30, 64, 175) 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(to bottom, rgb(30, 64, 175) 0%, rgb(30, 27, 75) 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(to bottom, rgb(30, 27, 75) 0%, rgb(88, 28, 135) 100%);' :
               'background: linear-gradient(135deg, rgb(49, 46, 129) 0%, rgb(30, 64, 175) 100%);';
      
      case 'creative-3d-pro':
        return sectionType === 'hero' ? 'background: linear-gradient(135deg, rgb(254, 215, 170) 0%, rgb(252, 165, 165) 50%, rgb(192, 132, 252) 100%);' :
               sectionType === 'features' ? 'background: linear-gradient(to bottom, rgb(254, 215, 170) 0%, rgb(252, 165, 165) 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(to bottom, rgb(252, 165, 165) 0%, rgb(192, 132, 252) 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(to bottom, rgb(192, 132, 252) 0%, rgb(254, 215, 170) 100%);' :
               'background: linear-gradient(135deg, rgb(253, 186, 116) 0%, rgb(251, 113, 133) 100%);';
      
      case 'authkit-tech-pro':
        return sectionType === 'hero' ? 'background: linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(30, 64, 175) 100%);' :
               sectionType === 'features' ? 'background: linear-gradient(to bottom, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(to bottom, rgb(30, 41, 59) 0%, rgb(30, 64, 175) 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(to bottom, rgb(30, 64, 175) 0%, rgb(15, 23, 42) 100%);' :
               'background: linear-gradient(135deg, rgb(51, 65, 85) 0%, rgb(30, 64, 175) 100%);';
      
      case 'nft-future-pro':
        return sectionType === 'hero' ? 'background: linear-gradient(135deg, rgb(88, 28, 135) 0%, rgb(190, 24, 93) 50%, rgb(30, 64, 175) 100%);' :
               sectionType === 'features' ? 'background: linear-gradient(to bottom, rgb(88, 28, 135) 0%, rgb(190, 24, 93) 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(to bottom, rgb(190, 24, 93) 0%, rgb(30, 64, 175) 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(to bottom, rgb(30, 64, 175) 0%, rgb(88, 28, 135) 100%);' :
               'background: linear-gradient(135deg, rgb(124, 45, 18) 0%, rgb(190, 24, 93) 100%);';
      
      default:
        return 'background: linear-gradient(135deg, rgb(55, 65, 81) 0%, rgb(30, 64, 175) 100%);';
    }
  };

  // Premium styles for different templates
  const getPremiumStyles = () => {
    if (!isPremium) return '';
    
    switch (template.id) {
      case 'tech-consultant-pro':
        return `
        /* Glassmorphism Effects */
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }`;
        
      case 'neon-academy-pro':
        return `
        /* Neon Effects */
        .neon-text {
          color: #00f5ff !important;
          text-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff;
        }
        
        .neon-glow {
          box-shadow: 0 0 20px #00f5ff, 0 0 40px #00f5ff;
        }
        
        .cyberpunk-grid {
          background-image: 
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: grid-glow 4s ease-in-out infinite alternate;
        }
        
        @keyframes grid-glow {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }`;
        
      case 'blockchain-tech-pro':
        return `
        /* Blockchain Effects */
        .particle-network {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%);
        }
        
        .crypto-glow {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
        }`;
        
      case 'nft-future-pro':
        return `
        /* Holographic Effects */
        .holographic {
          background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff);
          background-size: 200% 200%;
          animation: holographic 3s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        @keyframes holographic {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        
        .card-3d:hover {
          transform: rotateY(15deg) rotateX(10deg) scale(1.05);
        }`;
        
      case 'creative-3d-pro':
        return `
        /* Clay Morphism */
        .clay-button {
          border-radius: 25px;
          box-shadow: 
            8px 8px 16px rgba(163, 177, 198, 0.6),
            -8px -8px 16px rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }
        
        .clay-button:hover {
          box-shadow: 
            4px 4px 8px rgba(163, 177, 198, 0.6),
            -4px -4px 8px rgba(255, 255, 255, 0.8);
        }
        
        .morphing-shape {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morph 8s ease-in-out infinite;
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }`;
        
      case 'authkit-tech-pro':
        return `
        /* Matrix Effects */
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .matrix-char {
          position: absolute;
          color: #0f0;
          font-family: monospace;
          font-size: 14px;
          animation: matrix-fall 3s linear infinite;
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        .tech-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }`;
        
      default:
        return `
        /* Default Premium Effects */
        .premium-glow {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }`;
    }
  };

  // Generate complete HTML with all sections
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.hero.title}</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: ${template.styles.textColor};
            background-color: ${template.styles.backgroundColor};
            overflow-x: hidden;
        }
        
        .container {
            max-width: ${isPremium ? '1792px' : '1200px'};
            margin: 0 auto;
            padding: 0 1.5rem;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1.1rem;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            z-index: 10;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            margin-bottom: 1rem;
            backdrop-filter: blur(10px);
        }
        
        .card {
            background: ${isPremium ? 'rgba(255,255,255,0.1)' : 'white'};
            ${isPremium ? 'backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);' : ''}
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: ${isPremium ? '0 20px 40px rgba(0,0,0,0.2)' : '0 8px 25px rgba(0,0,0,0.15)'};
        }
        
        .star {
            color: #fbbf24;
            font-size: 1.2rem;
        }

        ${getPremiumStyles()}
        
        /* Section Backgrounds - Exact match to TemplatePreview */
        .hero { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'hero') : getSectionStyle(template.styles.heroBackground, template.styles.heroBackgroundImage)}
            padding: 5rem 1rem;
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        
        .emotional { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'emotional') : getSectionStyle(template.styles.emotionalBackground, template.styles.emotionalBackgroundImage)}
            padding: 4rem 1rem;
            position: relative;
            overflow: hidden;
        }
        
        .features { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'features') : getSectionStyle(template.styles.featuresBackground, template.styles.featuresBackgroundImage)}
            padding: ${isPremium ? '5rem 1rem' : '4rem 1rem'};
            position: relative;
            overflow: hidden;
        }
        
        .testimonials { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'testimonials') : getSectionStyle(template.styles.testimonialsBackground, template.styles.testimonialsBackgroundImage)}
            padding: 4rem 1rem;
            position: relative;
            overflow: hidden;
        }
        
        .about { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'about') : getSectionStyle(template.styles.aboutBackground, template.styles.aboutBackgroundImage)}
            padding: 4rem 1rem;
            position: relative;
            overflow: hidden;
        }
        
        .pricing { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'pricing') : getSectionStyle(template.styles.pricingBackground, template.styles.pricingBackgroundImage)}
            padding: ${isPremium ? '5rem 1rem' : '4rem 1rem'};
            position: relative;
            overflow: hidden;
        }
        
        .faq { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'faq') : getSectionStyle(template.styles.faqBackground, template.styles.faqBackgroundImage)}
            padding: 4rem 1rem;
            position: relative;
            overflow: hidden;
        }
        
        .final-cta { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'final-cta') : getSectionStyle(template.styles.finalCtaBackground, template.styles.finalCtaBackgroundImage)}
            padding: 4rem 1rem;
            position: relative;
            overflow: hidden;
        }
        
        .contact { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'contact') : getSectionStyle(template.styles.contactBackground, template.styles.contactBackgroundImage)}
            padding: 4rem 1rem;
            position: relative;
            overflow: hidden;
        }
        
        .footer { 
            ${isPremium ? 'background-color: ' + template.styles.primaryColor + ';' : getSectionStyle(template.styles.footerBackground, template.styles.footerBackgroundImage)}
            padding: 2rem 1rem;
            position: relative;
            overflow: hidden;
            text-align: center;
        }
        
        /* Background overlay for sections with images */
        .bg-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.4);
            z-index: 1;
        }
        
        .content {
            position: relative;
            z-index: 2;
        }
        
        /* Stars in testimonials - horizontal layout */
        .stars-row {
            display: flex;
            flex-direction: row;
            gap: 0.25rem;
            margin-bottom: 1rem;
        }
        
        /* Grid layouts */
        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; }
        
        /* Text alignments */
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        
        /* Flex utilities */
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-wrap { flex-wrap: wrap; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .gap-1 { gap: 0.5rem; }
        .gap-2 { gap: 1rem; }
        .gap-3 { gap: 1.5rem; }
        .gap-4 { gap: 2rem; }
        
        /* Spacing */
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 1rem; }
        .mb-4 { margin-bottom: 1.5rem; }
        .mb-6 { margin-bottom: 2rem; }
        .mb-8 { margin-bottom: 3rem; }
        .mb-12 { margin-bottom: 4rem; }
        
        /* Typography */
        .text-4xl { font-size: 2.5rem; }
        .text-3xl { font-size: 2rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-xl { font-size: 1.25rem; }
        .text-lg { font-size: 1.125rem; }
        .text-sm { font-size: 0.875rem; }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        
        /* Colors based on template */
        .text-primary { color: ${template.styles.primaryColor}; }
        .text-secondary { color: ${template.styles.secondaryColor}; }
        .text-accent { color: ${template.styles.accentColor}; }
        .text-white { color: white; }
        .bg-primary { background-color: ${template.styles.primaryColor}; }
        .bg-secondary { background-color: ${template.styles.secondaryColor}; }
        .bg-accent { background-color: ${template.styles.accentColor}; }
        
        /* Feature icons */
        .feature-icon {
            width: 4rem;
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: ${template.styles.primaryColor}20;
            border: 2px solid ${template.styles.primaryColor};
            color: ${template.styles.primaryColor};
            font-size: 1.5rem;
            margin: 0 auto 1rem;
            ${isPremium ? 'box-shadow: 0 0 20px ' + template.styles.primaryColor + '30;' : ''}
        }
        
        /* Accordion styles */
        .accordion-item {
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            margin-bottom: 1rem;
            overflow: hidden;
            ${isPremium ? 'backdrop-filter: blur(10px); background: rgba(255,255,255,0.1);' : ''}
        }
        
        .accordion-header {
            background: ${isPremium ? 'rgba(255,255,255,0.1)' : '#f9fafb'};
            padding: 1rem;
            cursor: pointer;
            font-weight: 600;
            border: none;
            width: 100%;
            text-align: right;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};
        }
        
        .accordion-content {
            padding: 1rem;
            background: ${isPremium ? 'rgba(255,255,255,0.05)' : 'white'};
            color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};
        }
        
        /* Mobile card grid fixes */
        @media (max-width: 768px) {
            .text-4xl { font-size: 2rem; }
            .text-3xl { font-size: 1.5rem; }
            
            /* Equal height cards on mobile */
            .grid-2, .grid-3, .grid-4 { 
                grid-template-columns: 1fr; 
                gap: 1.5rem;
            }
            
            .card {
                min-height: 300px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            
            /* Pricing cards equal height */
            .pricing .card {
                min-height: 400px;
            }
            
            /* Testimonial cards equal height */
            .testimonials .card {
                min-height: 250px;
            }
            
            /* Feature cards equal height */
            .features .card {
                min-height: 200px;
            }
            
            .flex { 
                flex-direction: column; 
                align-items: center;
                gap: 1rem;
            }
            .flex .btn {
                width: 100%;
                max-width: 280px;
                text-align: center;
                justify-content: center;
            }
            .hero { padding: 3rem 0; min-height: auto; }
            .container { padding: 0 1.5rem; }
            .text-center { text-align: center; }
            
            /* Center all content blocks in mobile */
            .content > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
        }
    </style>
</head>
<body>

    <!-- Hero Section -->
    <section class="hero">
        ${template.styles.heroBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center">
                ${template.hero.badge ? `<div class="badge" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.accentColor)}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : (template.styles.heroBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.accentColor)};">${template.hero.badge}</div>` : ''}
                <h1 class="text-4xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; ${isPremium && template.id === 'neon-academy-pro' ? 'color: #ff00ff !important; text-shadow: 0 0 30px #ff00ff;' : ''} ${isPremium && (template.id === 'blockchain-tech-pro' || template.id === 'nft-future-pro') ? 'background: linear-gradient(45deg, #60a5fa, #a78bfa, #22d3ee); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;' : ''}">${template.hero.title}</h1>
                <h2 class="text-xl mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.9;">${template.hero.subtitle}</h2>
                <p class="text-lg mb-8" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.8; max-width: 48rem; margin: 0 auto 2rem;">${template.hero.description}</p>
                <div class="flex gap-2 justify-center flex-wrap">
                    <a href="#contact" class="btn" style="background-color: ${template.styles.accentColor}; color: white;">
                        ${template.hero.button1Icon ? `<i class="ri-${template.hero.button1Icon}"></i>` : ''}
                        ${template.hero.button1Text}
                    </a>
                    <a href="#features" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                        ${template.hero.button2Icon ? `<i class="ri-${template.hero.button2Icon}"></i>` : ''}
                        ${template.hero.button2Text}
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Emotional Section -->
    ${template.emotional ? `
    <section class="emotional">
        ${template.styles.emotionalBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center">
                ${template.emotional.badge ? `<div class="badge" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.emotionalBackgroundImage ? 'white' : template.styles.accentColor)}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : (template.styles.emotionalBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.accentColor)};">${template.emotional.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.emotionalBackgroundImage ? 'white' : template.styles.textColor)};">${template.emotional.title}</h2>
                <p class="text-lg" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.emotionalBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.9; max-width: 48rem; margin: 0 auto;">${template.emotional.description}</p>
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Features Section -->
    <section class="features">
        ${template.styles.featuresBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-12">
                ${template.features.badge ? `<div class="badge" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.featuresBackgroundImage ? 'white' : template.styles.primaryColor)}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : (template.styles.featuresBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor)};">${template.features.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.featuresBackgroundImage ? 'white' : template.styles.textColor)};">${template.features.title}</h2>
                ${template.features.subtitle ? `<p class="text-xl" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.featuresBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.8;">${template.features.subtitle}</p>` : ''}
            </div>
            
            <div class="grid-3 mb-12">
                ${template.features.items.map((feature: any) => `
                    <div class="card">
                        <div class="feature-icon">
                            <i class="ri-${feature.icon}"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${feature.title}</h3>
                        <p style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor}; opacity: 0.8;">${feature.description}</p>
                    </div>
                `).join('')}
            </div>

            <div class="flex gap-2 justify-center flex-wrap">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                    ${template.features.button1Icon ? `<i class="ri-${template.features.button1Icon}"></i>` : ''}
                    ${template.features.button1Text}
                </a>
                <a href="#testimonials" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                    ${template.features.button2Icon ? `<i class="ri-${template.features.button2Icon}"></i>` : ''}
                    ${template.features.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials">
        ${template.styles.testimonialsBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-12">
                ${template.testimonials.badge ? `<div class="badge" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.testimonialsBackgroundImage ? 'white' : template.styles.primaryColor)}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : (template.styles.testimonialsBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor)};">${template.testimonials.badge}</div>` : ''}
                <h2 class="text-3xl font-bold" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.testimonialsBackgroundImage ? 'white' : template.styles.textColor)};">${template.testimonials.title}</h2>
            </div>
            
            <div class="grid-3 mb-12">
                ${template.testimonials.testimonials.map((testimonial: any) => `
                    <div class="card">
                        <div class="stars-row">
                            ${Array(testimonial.rating).fill(0).map(() => '<span class="star">★</span>').join('')}
                        </div>
                        <p class="mb-4" style="font-style: italic; color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor}; opacity: 0.9;">"${testimonial.content}"</p>
                        <div>
                            <p class="font-bold" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${testimonial.name}</p>
                            <p class="text-sm" style="opacity: 0.8; color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${testimonial.role}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="flex gap-2 justify-center flex-wrap">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                    ${template.testimonials.button1Icon ? `<i class="ri-${template.testimonials.button1Icon}"></i>` : ''}
                    ${template.testimonials.button1Text}
                </a>
                <a href="#about" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                    ${template.testimonials.button2Icon ? `<i class="ri-${template.testimonials.button2Icon}"></i>` : ''}
                    ${template.testimonials.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        ${template.styles.aboutBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-12">
                ${template.about.badge ? `<div class="badge" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.aboutBackgroundImage ? 'white' : template.styles.secondaryColor)}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : (template.styles.aboutBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.secondaryColor)};">${template.about.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.aboutBackgroundImage ? 'white' : template.styles.textColor)};">${template.about.title}</h2>
                <p class="text-lg" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.aboutBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.9; max-width: 64rem; margin: 0 auto;">${template.about.description}</p>
            </div>
            
            ${template.about.stats && template.about.stats.length > 0 ? `
                <div class="grid-3 text-center mb-12">
                    ${template.about.stats.map((stat: any) => `
                        <div>
                            <div class="text-4xl font-bold mb-2" style="color: ${template.styles.primaryColor};">${stat.number}</div>
                            <div class="text-lg" style="opacity: 0.8; color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${stat.label}</div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            <div class="flex gap-2 justify-center flex-wrap">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                    ${template.about.button1Icon ? `<i class="ri-${template.about.button1Icon}"></i>` : ''}
                    ${template.about.button1Text}
                </a>
                <a href="#pricing" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                    ${template.about.button2Icon ? `<i class="ri-${template.about.button2Icon}"></i>` : ''}
                    ${template.about.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
        ${template.styles.pricingBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-12">
                ${template.pricing.badge ? `<div class="badge" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.pricingBackgroundImage ? 'white' : template.styles.primaryColor)}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : (template.styles.pricingBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor)};">${template.pricing.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.pricingBackgroundImage ? 'white' : template.styles.textColor)};">${template.pricing.title}</h2>
                ${template.pricing.subtitle ? `<p class="text-xl" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.pricingBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.8;">${template.pricing.subtitle}</p>` : ''}
            </div>
            
            <div class="grid-3 mb-12">
                ${template.pricing.plans.map((plan: any) => `
                    <div class="card text-center ${plan.recommended ? 'border: 2px solid ' + template.styles.primaryColor + '; transform: scale(1.05);' : ''}">
                        <h3 class="text-2xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${plan.name}</h3>
                        <div class="mb-6">
                            <span class="text-4xl font-bold" style="color: ${template.styles.primaryColor};">${plan.price}</span>
                            <span style="opacity: 0.6; color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">/${plan.period}</span>
                        </div>
                        <ul class="text-right mb-6" style="list-style: none; padding: 0;">
                            ${plan.features.map((feature: string) => `
                                <li class="flex items-center gap-2 mb-2" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">
                                    <span style="color: ${template.styles.primaryColor};">✓</span>
                                    ${feature}
                                </li>
                            `).join('')}
                        </ul>
                        <a href="#contact" class="btn" style="background-color: ${plan.recommended ? template.styles.primaryColor : template.styles.secondaryColor}; color: white; width: 100%;">${plan.buttonText}</a>
                    </div>
                `).join('')}
            </div>

            <div class="flex gap-2 justify-center flex-wrap">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                    ${template.pricing.button1Icon ? `<i class="ri-${template.pricing.button1Icon}"></i>` : ''}
                    ${template.pricing.button1Text}
                </a>
                <a href="#faq" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                    ${template.pricing.button2Icon ? `<i class="ri-${template.pricing.button2Icon}"></i>` : ''}
                    ${template.pricing.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq">
        ${template.styles.faqBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-12">
                ${template.faq.badge ? `<div class="badge" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.faqBackgroundImage ? 'white' : template.styles.primaryColor)}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : (template.styles.faqBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor)};">${template.faq.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.faqBackgroundImage ? 'white' : template.styles.textColor)};">${template.faq.title}</h2>
                ${template.faq.subtitle ? `<p class="text-xl" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.faqBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.8;">${template.faq.subtitle}</p>` : ''}
            </div>
            
            <div class="mb-12" style="max-width: 48rem; margin: 0 auto;">
                ${template.faq.questions.map((faq: any, index: number) => `
                    <div class="accordion-item">
                        <button class="accordion-header" onclick="toggleAccordion(${index})">
                            ${faq.question}
                            <span id="icon-${index}">+</span>
                        </button>
                        <div id="content-${index}" class="accordion-content" style="display: none;">
                            ${faq.answer}
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="flex gap-2 justify-center flex-wrap">
                <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                    ${template.faq.button1Icon ? `<i class="ri-${template.faq.button1Icon}"></i>` : ''}
                    ${template.faq.button1Text}
                </a>
                <a href="#final-cta" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                    ${template.faq.button2Icon ? `<i class="ri-${template.faq.button2Icon}"></i>` : ''}
                    ${template.faq.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section id="final-cta" class="final-cta">
        ${template.styles.finalCtaBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center">
                ${template.finalCta.badge ? `<div class="badge" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.finalCtaBackgroundImage ? 'white' : template.styles.accentColor)}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : (template.styles.finalCtaBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.accentColor)};">${template.finalCta.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.finalCtaBackgroundImage ? 'white' : template.styles.textColor)};">${template.finalCta.title}</h2>
                <p class="text-lg mb-8" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.finalCtaBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.9; max-width: 48rem; margin: 0 auto 2rem;">${template.finalCta.description}</p>
                <div class="flex gap-2 justify-center flex-wrap">
                    <a href="#contact" class="btn" style="background-color: ${template.styles.accentColor}; color: white;">
                        ${template.finalCta.button1Icon ? `<i class="ri-${template.finalCta.button1Icon}"></i>` : ''}
                        ${template.finalCta.button1Text}
                    </a>
                    <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                        ${template.finalCta.button2Icon ? `<i class="ri-${template.finalCta.button2Icon}"></i>` : ''}
                        ${template.finalCta.button2Text}
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        ${template.styles.contactBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center">
                <h2 class="text-3xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.contactBackgroundImage ? 'white' : template.styles.textColor)};">${template.contact.title}</h2>
                ${template.contact.subtitle ? `<p class="text-xl mb-8" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.contactBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.8;">${template.contact.subtitle}</p>` : ''}
                <div class="card" style="max-width: 32rem; margin: 0 auto;">
                    <form style="display: flex; flex-direction: column; gap: 1rem;">
                        <input type="text" placeholder="שם מלא" style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 8px; text-align: right; font-size: 1rem; ${isPremium ? 'background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); color: ' + getPremiumTextColor(template.id) + ';' : ''}" />
                        <input type="email" placeholder="אימייל" style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 8px; text-align: right; font-size: 1rem; ${isPremium ? 'background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); color: ' + getPremiumTextColor(template.id) + ';' : ''}" />
                        <input type="tel" placeholder="טלפון" style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 8px; text-align: right; font-size: 1rem; ${isPremium ? 'background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); color: ' + getPremiumTextColor(template.id) + ';' : ''}" />
                        <textarea placeholder="הודעה" rows="4" style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 8px; text-align: right; font-size: 1rem; resize: vertical; ${isPremium ? 'background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); color: ' + getPremiumTextColor(template.id) + ';' : ''}"></textarea>
                        <button type="submit" class="btn" style="background-color: ${template.styles.primaryColor}; color: white; width: 100%;">${template.contact.buttonText}</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container content">
            <div class="text-center">
                <p style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">&copy; 2024 ${template.footer.companyName}. כל הזכויות שמורות.</p>
            </div>
        </div>
    </footer>

    <script>
        function toggleAccordion(index) {
            const content = document.getElementById('content-' + index);
            const icon = document.getElementById('icon-' + index);
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                icon.textContent = '-';
            } else {
                content.style.display = 'none';
                icon.textContent = '+';
            }
        }
    </script>
</body>
</html>`;
};