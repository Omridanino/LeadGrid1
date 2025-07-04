// Complete HTML Generator - Creates exact HTML from template preview with premium support
export const generatePageHTML = (templateData: any) => {
  const template = templateData;
  const isPremium = template.category.includes('פרימיום');
  
  // Generate styling for each section based on template styles
  const getSectionStyle = (bgColor: string, bgImage?: string) => {
    let style = `background-color: ${bgColor};`;
    if (bgImage) {
      style += `background-image: url(${bgImage}); background-size: cover; background-position: center; background-repeat: no-repeat;`;
    }
    return style;
  };

  // Premium styles for different templates with exact match to preview
  const getPremiumStyles = () => {
    if (!isPremium) return '';
    
    switch (template.id) {
      case 'tech-consultant-pro':
        return `
        /* Glassmorphism Effects - Exact Match */
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        .hero, .features, .pricing, .testimonials {
          color: white !important;
        }
        
        .hero h1, .hero h2, .hero p,
        .features h2, .features h3, .features p,
        .pricing h2, .pricing h3, .pricing p,
        .testimonials h2, .testimonials h3, .testimonials p {
          color: white !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }`;
        
      case 'neon-academy-pro':
        return `
        /* Neon Effects - Exact Match */
        .neon-text {
          color: #00f5ff !important;
          text-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff;
        }
        
        .neon-glow {
          box-shadow: 0 0 20px #00f5ff, 0 0 40px #00f5ff;
        }
        
        .hero, .features, .pricing, .testimonials {
          color: #00f5ff !important;
        }
        
        .hero h1 {
          color: #ff00ff !important;
          text-shadow: 0 0 30px #ff00ff;
        }
        
        .hero h2, .hero p,
        .features h2, .features h3, .features p,
        .pricing h2, .pricing h3, .pricing p,
        .testimonials h2, .testimonials h3, .testimonials p {
          color: #00f5ff !important;
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
        /* Blockchain Effects - Exact Match */
        .particle-network {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%);
        }
        
        .hero, .features, .pricing, .testimonials {
          color: #bfdbfe !important;
        }
        
        .hero h1 {
          background: linear-gradient(45deg, #60a5fa, #a78bfa, #22d3ee);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero h2, .hero p,
        .features h2, .features h3, .features p,
        .pricing h2, .pricing h3, .pricing p,
        .testimonials h2, .testimonials h3, .testimonials p {
          color: #bfdbfe !important;
        }
        
        .crypto-glow {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
        }`;
        
      case 'nft-future-pro':
        return `
        /* Holographic Effects - Exact Match */
        .holographic {
          background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff);
          background-size: 200% 200%;
          animation: holographic 3s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero, .features, .pricing, .testimonials {
          color: #e879f9 !important;
        }
        
        .hero h1 {
          background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff);
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
        /* Clay Morphism - Exact Match */
        .clay-button {
          border-radius: 25px;
          box-shadow: 
            8px 8px 16px rgba(163, 177, 198, 0.6),
            -8px -8px 16px rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }
        
        .hero, .features, .pricing, .testimonials {
          color: #374151 !important;
        }
        
        .hero h1, .hero h2, .hero p,
        .features h2, .features h3, .features p,
        .pricing h2, .pricing h3, .pricing p,
        .testimonials h2, .testimonials h3, .testimonials p {
          color: #374151 !important;
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
        /* Matrix Effects - Exact Match */
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .hero, .features, .pricing, .testimonials {
          color: #bfdbfe !important;
        }
        
        .hero h1 {
          color: white !important;
          text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          font-family: monospace;
        }
        
        .hero h2, .hero p,
        .features h2, .features h3, .features p,
        .pricing h2, .pricing h3, .pricing p,
        .testimonials h2, .testimonials h3, .testimonials p {
          color: #bfdbfe !important;
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

  // Premium hero backgrounds
  const getPremiumHeroBackground = (templateId: string) => {
    switch (templateId) {
      case 'tech-consultant-pro':
        return 'background: linear-gradient(135deg, #0f172a 0%, #374151 50%, #000000 100%);';
      case 'neon-academy-pro':
        return 'background: linear-gradient(135deg, #000000 0%, #7c3aed 50%, #000000 100%);';
      case 'blockchain-tech-pro':
        return 'background: linear-gradient(135deg, #1e1b4b 0%, #1e40af 50%, #7c2d12 100%);';
      case 'creative-3d-pro':
        return 'background: linear-gradient(135deg, #fed7aa 0%, #fca5a5 50%, #c084fc 100%);';
      case 'authkit-tech-pro':
        return 'background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e40af 100%);';
      case 'nft-future-pro':
        return 'background: linear-gradient(135deg, #581c87 0%, #be185d 50%, #1e40af 100%);';
      default:
        return 'background: linear-gradient(135deg, #374151 0%, #1e40af 50%, #581c87 100%);';
    }
  };

  // Premium section backgrounds
  const getPremiumSectionBackground = (templateId: string, sectionType: string) => {
    switch (templateId) {
      case 'tech-consultant-pro':
        return sectionType === 'features' ? 'background: linear-gradient(135deg, #1f2937 0%, #374151 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(135deg, #374151 0%, #1f2937 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(135deg, #1f2937 0%, #000000 100%);' :
               'background: linear-gradient(135deg, #0f172a 0%, #1f2937 100%);';
      
      case 'neon-academy-pro':
        return sectionType === 'features' ? 'background: linear-gradient(135deg, #000000 0%, #581c87 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(135deg, #581c87 0%, #000000 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(135deg, #000000 0%, #581c87 100%);' :
               'background: linear-gradient(135deg, #7c3aed 0%, #000000 100%);';
      
      case 'blockchain-tech-pro':
        return sectionType === 'features' ? 'background: linear-gradient(135deg, #1e1b4b 0%, #1e40af 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(135deg, #1e40af 0%, #1e1b4b 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(135deg, #1e1b4b 0%, #581c87 100%);' :
               'background: linear-gradient(135deg, #312e81 0%, #1e40af 100%);';
      
      case 'creative-3d-pro':
        return sectionType === 'features' ? 'background: linear-gradient(135deg, #fed7aa 0%, #fca5a5 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(135deg, #fca5a5 0%, #c084fc 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(135deg, #c084fc 0%, #fed7aa 100%);' :
               'background: linear-gradient(135deg, #fdba74 0%, #fb7185 100%);';
      
      case 'authkit-tech-pro':
        return sectionType === 'features' ? 'background: linear-gradient(135deg, #0f172a 0%, #1e40af 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(135deg, #1e293b 0%, #1e40af 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(135deg, #1e40af 0%, #0f172a 100%);' :
               'background: linear-gradient(135deg, #334155 0%, #1e40af 100%);';
      
      case 'nft-future-pro':
        return sectionType === 'features' ? 'background: linear-gradient(135deg, #581c87 0%, #be185d 100%);' :
               sectionType === 'pricing' ? 'background: linear-gradient(135deg, #be185d 0%, #1e40af 100%);' :
               sectionType === 'testimonials' ? 'background: linear-gradient(135deg, #1e40af 0%, #581c87 100%);' :
               'background: linear-gradient(135deg, #7c2d12 0%, #be185d 100%);';
      
      default:
        return 'background: linear-gradient(135deg, #374151 0%, #1e40af 100%);';
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
            ${isPremium ? 'overflow-x: hidden;' : ''}
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
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
            ${isPremium ? 'position: relative; z-index: 10;' : ''}
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: ${isPremium ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.1)'};
            border: 1px solid ${isPremium ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.3)'};
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
        
        /* Add premium floating shapes to cards */
        ${isPremium ? `
        .card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
            transform: rotate(45deg);
            transition: all 0.5s;
            opacity: 0;
        }
        
        .card:hover::before {
            opacity: 1;
            transform: rotate(45deg) translate(50%, 50%);
        }` : ''}
        
        .star {
            color: #fbbf24;
            font-size: 1.2rem;
        }

        ${getPremiumStyles()}
        
        /* Section Backgrounds */
        .hero { 
            ${isPremium ? getPremiumHeroBackground(template.id) : getSectionStyle(template.styles.heroBackground, template.styles.heroBackgroundImage)}
            padding: 5rem 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        
        .emotional { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'emotional') : getSectionStyle(template.styles.emotionalBackground, template.styles.emotionalBackgroundImage)}
            padding: 4rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .features { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'features') : getSectionStyle(template.styles.featuresBackground, template.styles.featuresBackgroundImage)}
            padding: 4rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .testimonials { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'testimonials') : getSectionStyle(template.styles.testimonialsBackground, template.styles.testimonialsBackgroundImage)}
            padding: 4rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .about { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'about') : getSectionStyle(template.styles.aboutBackground, template.styles.aboutBackgroundImage)}
            padding: 4rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .pricing { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'pricing') : getSectionStyle(template.styles.pricingBackground, template.styles.pricingBackgroundImage)}
            padding: 4rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .faq { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'faq') : getSectionStyle(template.styles.faqBackground, template.styles.faqBackgroundImage)}
            padding: 4rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .final-cta { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'final-cta') : getSectionStyle(template.styles.finalCtaBackground, template.styles.finalCtaBackgroundImage)}
            padding: 4rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .contact { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'contact') : getSectionStyle(template.styles.contactBackground, template.styles.contactBackgroundImage)}
            padding: 4rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .footer { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'footer') : getSectionStyle(template.styles.footerBackground, template.styles.footerBackgroundImage)}
            padding: 3rem 0;
            position: relative;
            overflow: hidden;
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
        
        /* Premium Background Effects with Animations */
        ${isPremium && template.id === 'tech-consultant-pro' ? `
        .hero::before, .features::before, .pricing::before, .testimonials::before, .faq::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 20px 20px;
            opacity: 0.3;
            pointer-events: none;
            z-index: 1;
            animation: float 15s ease-in-out infinite;
        }
        
        /* Add glassmorphism floating panels */
        .hero::after, .features::after, .pricing::after, .testimonials::after {
            content: '';
            position: absolute;
            width: 100px;
            height: 60px;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            top: 20%;
            left: 10%;
            animation: float 8s ease-in-out infinite;
            pointer-events: none;
            z-index: 1;
        }` : ''}
        
        ${isPremium && template.id === 'neon-academy-pro' ? `
        .hero::before, .features::before, .pricing::before, .testimonials::before, .faq::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
            animation: grid-glow 4s ease-in-out infinite alternate;
            pointer-events: none;
            z-index: 1;
        }
        
        /* Add cyberpunk city silhouette */
        .hero::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100px;
            background: linear-gradient(to top, rgba(0, 245, 255, 0.2), transparent);
            background-image: 
                linear-gradient(90deg, 
                    transparent 0%, transparent 5%, rgba(0, 245, 255, 0.3) 5%, rgba(0, 245, 255, 0.3) 7%, transparent 7%,
                    transparent 12%, rgba(0, 245, 255, 0.2) 12%, rgba(0, 245, 255, 0.2) 15%, transparent 15%,
                    transparent 20%, rgba(0, 245, 255, 0.4) 20%, rgba(0, 245, 255, 0.4) 22%, transparent 22%
                );
            animation: pulse 3s ease-in-out infinite;
            pointer-events: none;
            z-index: 1;
        }` : ''}
        
        @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }
        
        ${isPremium && template.id === 'blockchain-tech-pro' ? `
        .hero::after, .features::after, .pricing::after, .testimonials::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%);
            pointer-events: none;
            z-index: 1;
        }` : ''}
        
        ${isPremium && template.id === 'creative-3d-pro' ? `
        .hero::before, .features::before, .pricing::before, .testimonials::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="10" fill="rgba(255,107,107,0.1)"/><circle cx="75" cy="25" r="8" fill="rgba(78,205,196,0.1)"/><circle cx="50" cy="75" r="12" fill="rgba(69,183,209,0.1)"/></svg>');
            background-size: 200px 200px;
            animation: float 15s ease-in-out infinite;
            pointer-events: none;
            z-index: 1;
        }` : ''}
        
        ${isPremium && template.id === 'authkit-tech-pro' ? `
        .hero::before, .features::before, .pricing::before, .testimonials::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: repeating-linear-gradient(
                90deg,
                transparent,
                transparent 98px,
                rgba(59, 130, 246, 0.03) 100px
            );
            pointer-events: none;
            z-index: 1;
        }` : ''}
        
        /* FAQ Section Premium Color Overrides */
        ${isPremium && template.id === 'tech-consultant-pro' ? `
        .faq .accordion-header, .faq .accordion-content {
          color: white !important;
        }` : ''}
        
        ${isPremium && template.id === 'neon-academy-pro' ? `
        .faq .accordion-header, .faq .accordion-content {
          color: #00f5ff !important;
        }` : ''}
        
        ${isPremium && template.id === 'blockchain-tech-pro' ? `
        .faq .accordion-header, .faq .accordion-content {
          color: #bfdbfe !important;
        }` : ''}
        
        ${isPremium && template.id === 'creative-3d-pro' ? `
        .faq .accordion-header, .faq .accordion-content {
          color: #374151 !important;
        }` : ''}
        
        ${isPremium && template.id === 'authkit-tech-pro' ? `
        .faq .accordion-header, .faq .accordion-content {
          color: #bfdbfe !important;
        }` : ''}
        
        ${isPremium && template.id === 'nft-future-pro' ? `
        .faq .accordion-header, .faq .accordion-content {
          color: #e879f9 !important;
        }` : ''}
        
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
            ${isPremium ? 'color: white;' : ''}
        }
        
        .accordion-content {
            padding: 1rem;
            background: ${isPremium ? 'rgba(255,255,255,0.05)' : 'white'};
            ${isPremium ? 'color: white;' : ''}
        }
        
        /* Stars in testimonials - horizontal layout */
        .stars-row {
            display: flex;
            flex-direction: row;
            gap: 0.25rem;
            margin-bottom: 1rem;
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
                ${template.hero.badge ? `<div class="badge" style="color: ${template.styles.heroBackgroundImage ? 'white' : template.styles.accentColor}; border-color: ${template.styles.heroBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.accentColor};">${template.hero.badge}</div>` : ''}
                <h1 class="text-4xl font-bold mb-4" style="color: ${template.styles.heroBackgroundImage ? 'white' : template.styles.textColor};">${template.hero.title}</h1>
                <h2 class="text-xl mb-6" style="color: ${template.styles.heroBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.9;">${template.hero.subtitle}</h2>
                <p class="text-lg mb-8" style="color: ${template.styles.heroBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8; max-width: 48rem; margin: 0 auto 2rem;">${template.hero.description}</p>
                <div class="flex gap-2 justify-center flex-wrap">
                    <a href="#contact" class="btn" style="background-color: ${template.styles.accentColor}; color: white;">
                        ${template.hero.button1Icon ? `<i class="ri-${template.hero.button1Icon}"></i>` : ''}
                        ${template.hero.button1Text}
                    </a>
                    <a href="#features" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                        ${template.hero.button2Icon ? `<i class="ri-${template.hero.button2Icon}"></i>` : ''}
                        ${template.hero.button2Text}
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Emotional Section -->
    <section class="emotional">
        ${template.styles.emotionalBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center">
                ${template.emotional.badge ? `<div class="badge" style="color: ${template.styles.emotionalBackgroundImage ? 'white' : template.styles.primaryColor}; border-color: ${template.styles.emotionalBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.emotional.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-6" style="color: ${template.styles.emotionalBackgroundImage ? 'white' : template.styles.textColor};">${template.emotional.title}</h2>
                <p class="text-lg mb-8" style="color: ${template.styles.emotionalBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.9; max-width: 64rem; margin: 0 auto 2rem;">${template.emotional.description}</p>
                <div class="flex gap-2 justify-center flex-wrap">
                    <a href="#contact" class="btn" style="background-color: ${template.styles.primaryColor}; color: white;">
                        ${template.emotional.button1Icon ? `<i class="ri-${template.emotional.button1Icon}"></i>` : ''}
                        ${template.emotional.button1Text}
                    </a>
                    <a href="#features" class="btn" style="background-color: ${template.styles.secondaryColor}; color: white;">
                        ${template.emotional.button2Icon ? `<i class="ri-${template.emotional.button2Icon}"></i>` : ''}
                        ${template.emotional.button2Text}
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
        ${template.styles.featuresBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center mb-12">
                ${template.features.badge ? `<div class="badge" style="color: ${template.styles.featuresBackgroundImage ? 'white' : template.styles.primaryColor}; border-color: ${template.styles.featuresBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.features.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-4" style="color: ${template.styles.featuresBackgroundImage ? 'white' : template.styles.textColor};">${template.features.title}</h2>
                ${template.features.subtitle ? `<p class="text-xl" style="color: ${template.styles.featuresBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">${template.features.subtitle}</p>` : ''}
            </div>
            
            <div class="grid-4 mb-12">
                ${template.features.items.map((item: any) => `
                    <div class="card text-center">
                        <div class="feature-icon">
                            <i class="ri-${item.icon === 'user-heart-line' ? 'heart-3-line' : item.icon === 'monitor-line' ? 'computer-line' : item.icon === 'film-line' ? 'film-line' : item.icon}"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2" style="color: ${template.styles.textColor};">${item.title}</h3>
                        <p style="color: ${template.styles.textColor}; opacity: 0.8;">${item.description}</p>
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
                ${template.testimonials.badge ? `<div class="badge" style="color: ${template.styles.testimonialsBackgroundImage ? 'white' : template.styles.primaryColor}; border-color: ${template.styles.testimonialsBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.testimonials.badge}</div>` : ''}
                <h2 class="text-3xl font-bold" style="color: ${template.styles.testimonialsBackgroundImage ? 'white' : template.styles.textColor};">${template.testimonials.title}</h2>
            </div>
            
            <div class="grid-3 mb-12">
                ${template.testimonials.testimonials.map((testimonial: any) => `
                    <div class="card">
                        <div class="stars-row">
                            ${Array(testimonial.rating).fill(0).map(() => '<span class="star">★</span>').join('')}
                        </div>
                        <p class="mb-4" style="font-style: italic;">"${testimonial.content}"</p>
                        <div>
                            <p class="font-bold">${testimonial.name}</p>
                            <p class="text-sm" style="opacity: 0.8;">${testimonial.role}</p>
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
                ${template.about.badge ? `<div class="badge" style="color: ${template.styles.aboutBackgroundImage ? 'white' : template.styles.secondaryColor}; border-color: ${template.styles.aboutBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.secondaryColor};">${template.about.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-6" style="color: ${template.styles.aboutBackgroundImage ? 'white' : template.styles.textColor};">${template.about.title}</h2>
                <p class="text-lg" style="color: ${template.styles.aboutBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.9; max-width: 64rem; margin: 0 auto;">${template.about.description}</p>
            </div>
            
            ${template.about.stats && template.about.stats.length > 0 ? `
                <div class="grid-3 text-center mb-12">
                    ${template.about.stats.map((stat: any) => `
                        <div>
                            <div class="text-4xl font-bold mb-2" style="color: ${template.styles.primaryColor};">${stat.number}</div>
                            <div class="text-lg" style="opacity: 0.8;">${stat.label}</div>
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
                ${template.pricing.badge ? `<div class="badge" style="color: ${template.styles.pricingBackgroundImage ? 'white' : template.styles.primaryColor}; border-color: ${template.styles.pricingBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.pricing.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-4" style="color: ${template.styles.pricingBackgroundImage ? 'white' : template.styles.textColor};">${template.pricing.title}</h2>
                ${template.pricing.subtitle ? `<p class="text-xl" style="color: ${template.styles.pricingBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">${template.pricing.subtitle}</p>` : ''}
            </div>
            
                <div class="grid-3 mb-12">
                ${template.pricing.plans.map((plan: any) => `
                    <div class="card text-center ${plan.recommended ? 'border: 2px solid ' + template.styles.primaryColor + '; transform: scale(1.05);' : ''}">
                        <h3 class="text-2xl font-bold mb-4">${plan.name}</h3>
                        <div class="mb-6">
                            <span class="text-4xl font-bold" style="color: ${template.styles.primaryColor};">${plan.price}</span>
                            <span style="opacity: 0.6;">/${plan.period}</span>
                        </div>
                        <ul class="text-right mb-6" style="list-style: none; padding: 0;">
                            ${plan.features.map((feature: string) => `
                                <li class="flex items-center gap-2 mb-2">
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
                ${template.faq.badge ? `<div class="badge" style="color: ${template.styles.faqBackgroundImage ? 'white' : template.styles.primaryColor}; border-color: ${template.styles.faqBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.faq.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-4" style="color: ${template.styles.faqBackgroundImage ? 'white' : template.styles.textColor};">${template.faq.title}</h2>
                ${template.faq.subtitle ? `<p class="text-xl" style="color: ${template.styles.faqBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">${template.faq.subtitle}</p>` : ''}
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
                ${template.finalCta.badge ? `<div class="badge" style="color: ${template.styles.finalCtaBackgroundImage ? 'white' : template.styles.accentColor}; border-color: ${template.styles.finalCtaBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.accentColor};">${template.finalCta.badge}</div>` : ''}
                <h2 class="text-3xl font-bold mb-6" style="color: ${template.styles.finalCtaBackgroundImage ? 'white' : template.styles.textColor};">${template.finalCta.title}</h2>
                <p class="text-lg mb-8" style="color: ${template.styles.finalCtaBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.9; max-width: 48rem; margin: 0 auto 2rem;">${template.finalCta.description}</p>
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
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold mb-4" style="color: ${template.styles.contactBackgroundImage ? 'white' : template.styles.textColor};">${template.contact.title}</h2>
                ${template.contact.subtitle ? `<p class="text-xl" style="color: ${template.styles.contactBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">${template.contact.subtitle}</p>` : ''}
            </div>
            
            <div style="max-width: 32rem; margin: 0 auto;">
                <form class="card">
                    ${template.contact.fields ? template.contact.fields.map((field: any) => `
                        <div class="mb-4">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: ${template.styles.textColor};">${field.placeholder}</label>
                            ${field.type === 'textarea' ? 
                                `<textarea placeholder="${field.placeholder}" ${field.required ? 'required' : ''} style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-family: inherit;"></textarea>` :
                                `<input type="${field.type}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''} style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px;">`
                            }
                        </div>
                    `).join('') : `
                        <div class="mb-4">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: ${template.styles.textColor};">שם מלא</label>
                            <input type="text" placeholder="שם מלא" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px;">
                        </div>
                        <div class="mb-4">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: ${template.styles.textColor};">אימייל</label>
                            <input type="email" placeholder="אימייל" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px;">
                        </div>
                        <div class="mb-4">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: ${template.styles.textColor};">הודעה</label>
                            <textarea placeholder="הודעה" rows="4" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-family: inherit;"></textarea>
                        </div>
                    `}
                    <button type="submit" class="btn" style="background-color: ${template.styles.primaryColor}; color: white; width: 100%;">
                        ${template.contact.buttonText}
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        ${template.styles.footerBackgroundImage ? '<div class="bg-overlay"></div>' : ''}
        <div class="container content">
            <div class="text-center">
                <h3 class="text-xl font-bold mb-2" style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.textColor};">${template.hero?.title || 'העסק שלנו'}</h3>
                ${template.footer.description ? `<p class="mb-4" style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">${template.footer.description}</p>` : ''}
                
                ${template.footer.contactInfo ? `
                    <div class="flex gap-4 justify-center flex-wrap mb-4">
                        <span style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.8;">📧 info.Leadgrid@gmail.com</span>
                    </div>
                ` : ''}
                
                ${template.footer.socialMedia && template.footer.socialMedia.length > 0 ? `
                    <div class="flex gap-3 justify-center mb-4">
                        ${template.footer.socialMedia.map((social: any) => `
                            <a href="${social.href}" style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.primaryColor}; font-size: 1.5rem;">
                                <i class="ri-${social.icon}"></i>
                            </a>
                        `).join('')}
                    </div>
                ` : ''}
                
                <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 1rem; margin-top: 2rem;">
                    <p style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.6; font-size: 0.875rem;">
                        &copy; ${new Date().getFullYear()} ${template.formData?.businessName || template.businessInfo?.companyName || template.hero?.title || 'העסק שלנו'}. כל הזכויות שמורות.
                    </p>
                    <p style="color: ${template.styles.footerBackgroundImage ? 'white' : template.styles.textColor}; opacity: 0.5; font-size: 0.75rem; margin-top: 0.5rem;">
                        נוצר עם LeadGrid
                    </p>
                </div>
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