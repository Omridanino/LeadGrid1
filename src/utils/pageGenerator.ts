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

  // Premium styles for different templates (exact match to components)
  const getPremiumStyles = () => {
    if (!isPremium) return '';
    
    switch (template.id) {
      case 'tech-consultant-pro':
        return `
        /* Tech Consultant Effects */
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2)) !important;
          border: 2px solid rgba(59, 130, 246, 0.5) !important;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3) !important;
        }`;
        
      case 'neon-academy-pro':
        return `
        /* Neon Academy Effects */
        .neon-text {
          color: #00f5ff !important;
          text-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff !important;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(0, 245, 255, 0.1) !important;
          border: 1px solid rgba(0, 245, 255, 0.3);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.2);
        }
        
        .cyberpunk-grid::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: grid-glow 4s ease-in-out infinite alternate;
        }
        
        @keyframes grid-glow {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(147, 51, 234, 0.2)) !important;
          border: 2px solid #00f5ff !important;
          box-shadow: 0 0 20px #00f5ff !important;
        }`;
        
      case 'blockchain-tech-pro':
        return `
        /* Blockchain Effects */
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(59, 130, 246, 0.1) !important;
          border: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
        }
        
        .particle-network::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%);
        }
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2)) !important;
          border: 2px solid rgba(59, 130, 246, 0.5) !important;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4) !important;
        }`;
        
      case 'nft-future-pro':
        return `
        /* NFT Future Effects */
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(147, 51, 234, 0.1) !important;
          border: 1px solid rgba(147, 51, 234, 0.3);
          box-shadow: 0 0 30px rgba(147, 51, 234, 0.2);
        }
        
        .holographic {
          background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff) !important;
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
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2)) !important;
          border: 2px solid rgba(147, 51, 234, 0.5) !important;
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.4) !important;
        }`;
        
      case 'creative-3d-pro':
        return `
        /* Creative 3D Effects */
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.2) !important;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          box-shadow: 
            8px 8px 16px rgba(163, 177, 198, 0.3),
            -8px -8px 16px rgba(255, 255, 255, 0.5);
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
        }
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(251, 113, 133, 0.3), rgba(192, 132, 252, 0.3)) !important;
          border: 2px solid rgba(251, 113, 133, 0.5) !important;
          box-shadow: 0 0 15px rgba(251, 113, 133, 0.3) !important;
        }`;
        
      case 'authkit-tech-pro':
        return `
        /* AuthKit Effects */
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(30, 64, 175, 0.1) !important;
          border: 1px solid rgba(30, 64, 175, 0.3);
          box-shadow: 0 0 20px rgba(30, 64, 175, 0.2);
        }
        
        .tech-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        .feature-icon {
          background: linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2)) !important;
          border: 2px solid rgba(59, 130, 246, 0.5) !important;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4) !important;
        }`;
        
      default:
        return `
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }`;
    }
  };

  // Generate complete HTML with exact Tailwind classes and styling
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.hero.title}</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: ["class"],
        theme: {
          extend: {
            colors: {
              border: 'hsl(240 5.9% 90%)',
              input: 'hsl(240 5.9% 90%)', 
              ring: 'hsl(240 5.9% 10%)',
              background: 'hsl(0 0% 100%)',
              foreground: 'hsl(240 10% 3.9%)',
              primary: {
                DEFAULT: 'hsl(240 9% 98%)',
                foreground: 'hsl(240 5.9% 10%)'
              },
              secondary: {
                DEFAULT: 'hsl(240 4.8% 95.9%)',
                foreground: 'hsl(240 5.9% 10%)'
              },
              muted: {
                DEFAULT: 'hsl(240 4.8% 95.9%)',
                foreground: 'hsl(240 3.8% 46.1%)'
              },
              accent: {
                DEFAULT: 'hsl(240 4.8% 95.9%)',
                foreground: 'hsl(240 5.9% 10%)'
              },
              card: {
                DEFAULT: 'hsl(0 0% 100%)',
                foreground: 'hsl(240 10% 3.9%)'
              }
            },
            borderRadius: {
              lg: '0.75rem',
              md: '0.5rem',
              sm: '0.25rem'
            }
          }
        }
      }
    </script>
    <style>
        body {
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
            direction: rtl;
        }
        
        /* Premium Effects */
        ${getPremiumStyles()}
        
        /* Premium sections use exact component styling */
        .hero { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'hero') : 'background-color: ' + template.styles.heroBackground + ';'}
            padding: 5rem 1.5rem;
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        
        .emotional { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'emotional') : 'background-color: ' + template.styles.emotionalBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .features { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'features') : 'background-color: ' + template.styles.featuresBackground + ';'}
            padding: 5rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .testimonials { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'testimonials') : 'background-color: ' + template.styles.testimonialsBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .about { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'about') : 'background-color: ' + template.styles.aboutBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .pricing { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'pricing') : 'background-color: ' + template.styles.pricingBackground + ';'}
            padding: 5rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .faq { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'faq') : 'background-color: ' + template.styles.faqBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .final-cta { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'final-cta') : 'background-color: ' + template.styles.finalCtaBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .contact { 
            ${isPremium ? getPremiumSectionBackground(template.id, 'contact') : 'background-color: ' + template.styles.contactBackground + ';'}
            padding: 4rem 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .footer { 
            ${isPremium ? 'background-color: ' + template.styles.primaryColor + ';' : 'background-color: ' + template.styles.footerBackground + ';'}
            padding: 2rem 1.5rem;
            text-align: center;
        }
    </style>
</head>
<body class="bg-background text-foreground">

    <!-- Hero Section -->
    <section class="hero">
        ${template.styles.heroBackgroundImage ? '<div class="absolute inset-0 bg-black/40 z-0"></div>' : ''}
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center">
                ${template.hero.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.accentColor)}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : (template.styles.heroBackgroundImage ? 'rgba(255,255,255,0.3)' : template.styles.accentColor)};">${template.hero.badge}</div>` : ''}
                <h1 class="text-4xl md:text-6xl font-bold mb-4 ${isPremium && template.id === 'neon-academy-pro' ? 'neon-text' : ''}" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; ${isPremium && (template.id === 'blockchain-tech-pro' || template.id === 'nft-future-pro') ? 'background: linear-gradient(45deg, #60a5fa, #a78bfa, #22d3ee); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;' : ''}">${template.hero.title}</h1>
                <h2 class="text-xl md:text-2xl mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.9;">${template.hero.subtitle}</h2>
                <p class="text-lg mb-8 max-w-4xl mx-auto" style="color: ${isPremium ? getPremiumTextColor(template.id) : (template.styles.heroBackgroundImage ? 'white' : template.styles.textColor)}; opacity: 0.8;">${template.hero.description}</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.accentColor}; ${isPremium ? 'backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);' : ''}">
                        ${template.hero.button1Icon ? `<i class="ri-${template.hero.button1Icon}"></i>` : ''}
                        ${template.hero.button1Text}
                    </a>
                    <a href="#features" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor}; ${isPremium ? 'backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);' : ''}">
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
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center">
                ${template.emotional.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.accentColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.accentColor};">${template.emotional.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.emotional.title}</h2>
                <p class="text-lg max-w-4xl mx-auto opacity-90" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.emotional.description}</p>
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Features Section -->
    <section class="features">
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16">
                ${template.features.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.primaryColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.features.badge}</div>` : ''}
                <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.features.title}</h2>
                ${template.features.subtitle ? `<p class="text-xl" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor}; opacity: 0.8;">${template.features.subtitle}</p>` : ''}
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                ${template.features.items.map((feature: any) => `
                  <div class="relative group perspective-1000">
                    <div class="relative transform-gpu transition-all duration-300 preserve-3d group-hover:rotateY-5">
                      <!-- Floating background with glass effect -->
                      <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"></div>
                      
                      <!-- Glow effect -->
                      <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      
                      <!-- Content -->
                      <div class="relative z-10 p-8 space-y-4">
                        <!-- Floating icon -->
                        <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                          <i class="ri-${feature.icon} text-2xl text-white"></i>
                        </div>
                        
                        <!-- Title -->
                        <h3 class="text-xl font-bold text-white bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                          ${feature.title}
                        </h3>
                        
                        <!-- Description -->
                        <p class="text-blue-100/80 leading-relaxed">
                          ${feature.description}
                        </p>
                        
                        <!-- Floating particles -->
                        <div class="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                        <div class="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse delay-500"></div>
                      </div>
                    </div>
                  </div>
                `).join('')}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.primaryColor};">
                    ${template.features.button1Icon ? `<i class="ri-${template.features.button1Icon}"></i>` : ''}
                    ${template.features.button1Text}
                </a>
                <a href="#testimonials" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                    ${template.features.button2Icon ? `<i class="ri-${template.features.button2Icon}"></i>` : ''}
                    ${template.features.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials">
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center mb-12">
                ${template.testimonials.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.primaryColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.testimonials.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.testimonials.title}</h2>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 mb-12">
                ${template.testimonials.testimonials.map((testimonial: any) => `
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 ${isPremium ? 'bg-white/10 backdrop-blur-sm border-white/20' : ''}">
                        <div class="flex mb-4">
                            ${Array(testimonial.rating).fill(0).map(() => '<span style="color: #fbbf24; font-size: 1.25rem;">★</span>').join('')}
                        </div>
                        <p class="mb-4 italic" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor}; opacity: 0.9;">"${testimonial.content}"</p>
                        <div>
                            <p class="font-bold" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${testimonial.name}</p>
                            <p class="text-sm opacity-70" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${testimonial.role}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.primaryColor};">
                    ${template.testimonials.button1Icon ? `<i class="ri-${template.testimonials.button1Icon}"></i>` : ''}
                    ${template.testimonials.button1Text}
                </a>
                <a href="#about" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                    ${template.testimonials.button2Icon ? `<i class="ri-${template.testimonials.button2Icon}"></i>` : ''}
                    ${template.testimonials.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center mb-12">
                ${template.about.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.secondaryColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.secondaryColor};">${template.about.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.about.title}</h2>
                <p class="text-lg max-w-4xl mx-auto opacity-90" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.about.description}</p>
            </div>
            
            ${template.about.stats && template.about.stats.length > 0 ? `
                <div class="grid md:grid-cols-3 gap-8 text-center mb-12">
                    ${template.about.stats.map((stat: any) => `
                        <div>
                            <div class="text-4xl font-bold mb-2" style="color: ${template.styles.primaryColor};">${stat.number}</div>
                            <div class="text-lg opacity-80" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${stat.label}</div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.primaryColor};">
                    ${template.about.button1Icon ? `<i class="ri-${template.about.button1Icon}"></i>` : ''}
                    ${template.about.button1Text}
                </a>
                <a href="#pricing" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                    ${template.about.button2Icon ? `<i class="ri-${template.about.button2Icon}"></i>` : ''}
                    ${template.about.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center mb-12">
                ${template.pricing.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.primaryColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.pricing.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.pricing.title}</h2>
                ${template.pricing.subtitle ? `<p class="text-xl opacity-80" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.pricing.subtitle}</p>` : ''}
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 mb-12">
                ${template.pricing.plans.map((plan: any) => `
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center ${isPremium ? 'bg-white/10 backdrop-blur-sm border-white/20' : ''} ${plan.recommended ? 'ring-2 ring-blue-500 scale-105' : ''}">
                        <h3 class="text-2xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${plan.name}</h3>
                        <div class="mb-6">
                            <span class="text-4xl font-bold" style="color: ${template.styles.primaryColor};">${plan.price}</span>
                            <span class="text-gray-600">/${plan.period}</span>
                        </div>
                        <ul class="space-y-2 mb-6 text-right">
                            ${plan.features.map((feature: string) => `
                                <li class="flex items-center gap-2" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">
                                    <span style="color: ${template.styles.primaryColor};">✓</span>
                                    ${feature}
                                </li>
                            `).join('')}
                        </ul>
                        <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 w-full text-white" style="background-color: ${template.styles.primaryColor};">${plan.buttonText}</a>
                    </div>
                `).join('')}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.primaryColor};">
                    ${template.pricing.button1Icon ? `<i class="ri-${template.pricing.button1Icon}"></i>` : ''}
                    ${template.pricing.button1Text}
                </a>
                <a href="#faq" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                    ${template.pricing.button2Icon ? `<i class="ri-${template.pricing.button2Icon}"></i>` : ''}
                    ${template.pricing.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq">
        <div class="max-w-4xl mx-auto px-4 relative z-10">
            <div class="text-center mb-12">
                ${template.faq.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.primaryColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.faq.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.faq.title}</h2>
            </div>
            
            <div class="space-y-4 mb-12">
                ${template.faq.questions.map((qa: any, index: number) => `
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 ${isPremium ? 'bg-white/10 backdrop-blur-sm border-white/20' : ''}">
                        <h3 class="text-lg font-bold mb-2 text-right" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${qa.question}</h3>
                        <p class="opacity-80 text-right" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${qa.answer}</p>
                    </div>
                `).join('')}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.primaryColor};">
                    ${template.faq.button1Icon ? `<i class="ri-${template.faq.button1Icon}"></i>` : ''}
                    ${template.faq.button1Text}
                </a>
                <a href="#final-cta" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                    ${template.faq.button2Icon ? `<i class="ri-${template.faq.button2Icon}"></i>` : ''}
                    ${template.faq.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section id="final-cta" class="final-cta">
        <div class="max-w-4xl mx-auto text-center px-4 relative z-10">
            ${template.finalCta.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.accentColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.accentColor};">${template.finalCta.badge}</div>` : ''}
            <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.finalCta.title}</h2>
            <p class="text-lg mb-8 opacity-90" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.finalCta.description}</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.accentColor};">
                    ${template.finalCta.button1Icon ? `<i class="ri-${template.finalCta.button1Icon}"></i>` : ''}
                    ${template.finalCta.button1Text}
                </a>
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                    ${template.finalCta.button2Icon ? `<i class="ri-${template.finalCta.button2Icon}"></i>` : ''}
                    ${template.finalCta.button2Text}
                </a>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="max-w-4xl mx-auto text-center px-4 relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.contact.title}</h2>
            ${template.contact.subtitle ? `<p class="text-xl mb-8 opacity-80" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.contact.subtitle}</p>` : ''}
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-8 max-w-md mx-auto ${isPremium ? 'bg-white/10 backdrop-blur-sm border-white/20' : ''}">
                <form class="space-y-4">
                    <input type="text" placeholder="שם מלא" class="w-full px-3 py-2 border border-input rounded-md text-right ${isPremium ? 'bg-white/10 border-white/20 text-white placeholder:text-white/70' : ''}" />
                    <input type="email" placeholder="אימייל" class="w-full px-3 py-2 border border-input rounded-md text-right ${isPremium ? 'bg-white/10 border-white/20 text-white placeholder:text-white/70' : ''}" />
                    <input type="tel" placeholder="טלפון" class="w-full px-3 py-2 border border-input rounded-md text-right ${isPremium ? 'bg-white/10 border-white/20 text-white placeholder:text-white/70' : ''}" />
                    <textarea placeholder="הודעה" rows="4" class="w-full px-3 py-2 border border-input rounded-md text-right ${isPremium ? 'bg-white/10 border-white/20 text-white placeholder:text-white/70' : ''}"></textarea>
                    <button type="submit" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 w-full text-white" style="background-color: ${template.styles.primaryColor};">
                        ${template.contact.buttonText}
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="text-center">
            <p style="color: ${isPremium ? getPremiumTextColor(template.id) : '#ffffff'};">&copy; 2024 ${template.footer.companyName}. כל הזכויות שמורות.</p>
        </div>
    </footer>

</body>
</html>`;
};