
import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, colors: ColorScheme, formData: any, heroImageUrl: string): string => {
  const businessName = formData?.businessName || 'העסק שלי';
  const businessType = formData?.businessType || 'שירותים עסקיים';
  const selectedElements = formData?.selectedElements || [];
  
  // This function now mirrors EXACTLY what FullScreenPreview renders
  const generateCompleteHTML = () => {
    const heroStyle = formData.heroStyle || '3d';
    
    return `
    <div class="w-full h-full style-${heroStyle}" style="overflow-y: auto; overflow-x: hidden; scroll-behavior: smooth; position: relative;">
      
      <!-- Hero Section - Exact match with HeroSection component -->
      ${generateHeroSection()}
      
      <!-- Navigation - Exact match with NavigationSection component -->
      ${generateNavigation()}
      
      <!-- Content Sections - Exact match with ContentSections component -->
      ${generateContentSections()}
      
      <!-- Footer Section - Exact match with FullScreenPreview footer -->
      ${generateFooter()}
      
    </div>
    `;
  };

  // Generate hero section matching HeroSection component exactly
  const generateHeroSection = () => {
    const heroStyle = formData.heroStyle || '3d';
    
    return `
    <section id="hero" class="section-hero min-h-screen relative flex items-center justify-center overflow-hidden style-${heroStyle}">
      ${getHeroBackground(heroStyle)}
      
      <div class="container-hero relative z-10 max-w-6xl mx-auto px-4 w-full">
        ${getHeroContent(heroStyle)}
      </div>
    </section>
    `;
  };

  const getHeroBackground = (style: string) => {
    switch (style) {
      case 'glass':
        return `
        <div class="liquid-background absolute inset-0 overflow-hidden">
          <div class="liquid-orb liquid-orb-1 absolute w-72 h-72 top-[10%] left-[10%] rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/10 blur-sm animate-float"></div>
          <div class="liquid-orb liquid-orb-2 absolute w-48 h-48 top-[60%] right-[20%] rounded-full bg-gradient-to-br from-purple-400/30 to-purple-600/10 blur-sm animate-float-delayed"></div>
          <div class="liquid-orb liquid-orb-3 absolute w-36 h-36 bottom-[20%] left-[30%] rounded-full bg-gradient-to-br from-cyan-400/30 to-cyan-600/10 blur-sm animate-float-slow"></div>
        </div>
        <div class="liquid-waves absolute inset-0 overflow-hidden">
          <div class="liquid-wave absolute w-[200%] h-[200%] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-wave"></div>
        </div>
        `;
      case 'geometric':
        return `
        <div class="geometric-background absolute inset-0 overflow-hidden">
          <div class="geometric-shape absolute w-48 h-48 top-[10%] left-[10%] bg-white/10 clip-triangle animate-float"></div>
          <div class="geometric-shape absolute w-32 h-32 top-[50%] right-[10%] bg-white/10 clip-triangle animate-float-delayed"></div>
          <div class="geometric-shape absolute w-24 h-24 bottom-[10%] left-[30%] bg-white/10 clip-triangle animate-float-slow"></div>
        </div>
        `;
      case 'metal':
        return `<div class="metal-background absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-black/30"></div>`;
      case 'image':
        return `
        <div class="image-overlay absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70"></div>
        <div class="absolute inset-0 bg-cover bg-center bg-fixed" style="background-image: url(${heroImageUrl})"></div>
        `;
      default:
        return `
        <div class="floating-elements absolute inset-0 overflow-hidden">
          <div class="floating-element absolute w-24 h-24 top-[20%] left-[20%] bg-white/10 rounded-full animate-float"></div>
          <div class="floating-element absolute w-16 h-16 top-[60%] right-[30%] bg-white/10 rounded-full animate-float-delayed"></div>
          <div class="floating-element absolute w-20 h-20 bottom-[30%] left-[40%] bg-white/10 rounded-full animate-float-slow"></div>
        </div>
        `;
    }
  };

  const getHeroContent = (style: string) => {
    const badges = getBadges(style);
    const title = content?.headline || businessName;
    const subtitle = content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience || 'לקוחות שלנו'}`;
    const cta = content?.cta || 'בואו נתחיל לעבוד יחד';
    
    return `
    <div class="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
      <div class="text-center lg:text-right">
        ${badges}
        
        <h1 class="text-5xl md:text-7xl font-black text-white mb-8 animate-slide-up ${getHeroTitleClass(style)}">
          ${title}
        </h1>

        <div class="${getHeroSubtitleClass(style)} mb-12 animate-slide-up delay-200">
          <p class="text-xl md:text-2xl text-white leading-relaxed ${getHeroTextClass(style)}">
            ${subtitle}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16 animate-slide-up delay-300">
          <button class="${getHeroPrimaryButtonClass(style)}">
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            ${cta}
          </button>
          <button class="${getHeroSecondaryButtonClass(style)}">
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            למד עוד
          </button>
        </div>

        ${getHeroStats(style)}
      </div>

      <div class="hidden lg:block animate-scale-in delay-300">
        ${getHeroVisual(style)}
      </div>
    </div>
    `;
  };

  const getBadges = (style: string) => {
    const badgeClass = getHeroBadgeClass(style);
    return `
    <div class="flex items-center justify-center lg:justify-start gap-4 mb-8 animate-slide-up">
      <div class="${badgeClass}">
        <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <span class="text-sm font-medium">דירוג 5 כוכבים</span>
      </div>
      <div class="${badgeClass}">
        <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span class="text-sm font-medium">מומחה מוסמך</span>
      </div>
    </div>
    `;
  };

  const getHeroStats = (style: string) => {
    const cardClass = getHeroStatCardClass(style);
    return `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto lg:mx-0 animate-scale-in delay-400">
      <div class="${cardClass}">
        <div class="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
        <div class="text-gray-300 text-sm">לקוחות מרוצים</div>
      </div>
      <div class="${cardClass}">
        <div class="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
        <div class="text-gray-300 text-sm">שביעות רצון</div>
      </div>
      <div class="${cardClass}">
        <div class="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
        <div class="text-gray-300 text-sm">שנות ניסיון</div>
      </div>
      <div class="${cardClass}">
        <div class="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
        <div class="text-gray-300 text-sm">זמינות</div>
      </div>
    </div>
    `;
  };

  const getHeroVisual = (style: string) => {
    if (style === 'glass') {
      return `
      <div class="liquid-showcase-container relative w-80 h-80 mx-auto">
        <div class="liquid-showcase-rings absolute inset-0">
          <div class="liquid-ring absolute inset-0 border border-blue-500/30 rounded-full animate-spin-slow"></div>
          <div class="liquid-ring absolute inset-[20%] border border-purple-500/30 rounded-full animate-spin-reverse"></div>
          <div class="liquid-ring absolute inset-[40%] border border-cyan-500/30 rounded-full animate-spin-slow"></div>
        </div>
        <div class="liquid-center-element absolute inset-[35%] bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full flex items-center justify-center">
          <svg class="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
      </div>
      `;
    }
    
    return `
    <div class="hero-visual-container relative w-80 h-80 mx-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center">
      <svg class="w-24 h-24 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    </div>
    `;
  };

  // Generate navigation matching NavigationSection component exactly
  const generateNavigation = () => {
    return `
    <nav class="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="text-xl font-bold text-white">${businessName}</div>
          <div class="hidden md:flex space-x-8 space-x-reverse">
            <a href="#hero" class="text-white hover:text-blue-400 transition-colors cursor-pointer">בית</a>
            <a href="#about" class="text-white hover:text-blue-400 transition-colors cursor-pointer">אודות</a>
            <a href="#services" class="text-white hover:text-blue-400 transition-colors cursor-pointer">שירותים</a>
            <a href="#contact" class="text-white hover:text-blue-400 transition-colors cursor-pointer">צור קשר</a>
          </div>
        </div>
      </div>
    </nav>
    `;
  };

  // Generate content sections matching ContentSections component exactly
  const generateContentSections = () => {
    return `
    ${generateAboutSection()}
    ${generateFeaturesSection()}
    ${generateWhyChooseUsSection()}
    ${generateTestimonialsSection()}
    ${generateFAQSection()}
    ${generateContactSection()}
    `;
  };

  const generateAboutSection = () => {
    const aboutTitle = content?.sections?.emotionalSection?.title || content?.aboutTitle || "השירות שמשנה את המשחק";
    const aboutContent = content?.sections?.emotionalSection?.content || content?.aboutContent || `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${businessType}.`;
    
    return `
    <section id="about" class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-8 animate-slide-up">
            ${aboutTitle}
          </h2>
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto animate-slide-up delay-100">
            <p class="text-xl text-white leading-relaxed">
              ${aboutContent}
            </p>
          </div>
        </div>
      </div>
    </section>
    `;
  };

  const generateFeaturesSection = () => {
    const features = content?.sections?.features || content?.features || [
      { title: "שירות מקצועי", description: "אנו מציעים שירות ברמה הגבוהה ביותר", icon: "🔥" },
      { title: "זמינות תמידית", description: "אנחנו כאן בשבילכם 24/7", icon: "⭐" },
      { title: "מחירים הוגנים", description: "מחירים תחרותיים ללא פשרות על איכות", icon: "💎" }
    ];

    const featuresTitle = content?.featuresTitle || 'השירותים שלנו';

    return `
    <section id="services" class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-white animate-slide-up">${featuresTitle}</h2>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${features.map((feature: any, index: number) => `
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center animate-slide-up" style="animation-delay: ${index * 0.2}s">
                <div class="text-4xl mb-6">${feature.icon || '🔥'}</div>
                <h3 class="text-xl font-bold text-white mb-4">${feature.title}</h3>
                <p class="text-gray-300 leading-relaxed">${feature.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
    `;
  };

  const generateWhyChooseUsSection = () => {
    const whyChooseUs = content?.sections?.whyChooseUs || content?.whyChooseUs || [
      { title: "ניסיון עשיר", description: "שנים של ניסיון בתחום", icon: "✅" },
      { title: "צוות מקצועי", description: "אנשי מקצוע מיומנים ומנוסים", icon: "✅" }
    ];

    const whyChooseTitle = content?.whyChooseTitle || 'למה לבחור בנו?';

    return `
    <section class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-white animate-slide-up">${whyChooseTitle}</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            ${whyChooseUs.map((reason: any, index: number) => `
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 animate-slide-up" style="animation-delay: ${index * 0.2}s">
                <div class="flex items-center gap-4 mb-4">
                  <div class="text-2xl">${reason.icon || '✅'}</div>
                  <h3 class="text-xl font-bold text-white">${reason.title}</h3>
                </div>
                <p class="text-gray-300 leading-relaxed">${reason.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
    `;
  };

  const generateTestimonialsSection = () => {
    const testimonials = content?.sections?.testimonials || content?.testimonials || [
      { name: "יוסי כהן", role: "לקוח מרוצה", content: "שירות מעולה ומקצועי! ממליץ בחום על השירותים." },
      { name: "רחל לוי", role: "לקוחה קבועה", content: "התמחות גבוהה וזמינות מלאה. בדיוק מה שחיפשתי." },
      { name: "דוד אברהם", role: "בעל עסק", content: "עזרו לי להגשים את החלום שלי. תודה רבה!" }
    ];

    const testimonialsTitle = content?.testimonialsTitle || 'מה אומרים עלינו';

    return `
    <section class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-white animate-slide-up">${testimonialsTitle}</h2>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${testimonials.map((testimonial: any, index: number) => `
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 animate-slide-up" style="animation-delay: ${index * 0.2}s">
                <div class="flex gap-1 mb-4">
                  ${Array(5).fill(0).map(() => `
                    <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>
                  `).join('')}
                </div>
                <p class="text-white mb-6 leading-relaxed">"${testimonial.content}"</p>
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    ${testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div class="font-semibold text-white">${testimonial.name}</div>
                    <div class="text-sm text-gray-400">${testimonial.role}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
    `;
  };

  const generateFAQSection = () => {
    const faq = content?.sections?.faq || content?.faq || [
      { question: "איך אפשר ליצור קשר?", answer: "ניתן ליצור קשר דרך הטלפון או האימייל המופיעים באתר." },
      { question: "מה שעות הפעילות?", answer: "אנחנו זמינים 24/7 לשירותכם." },
      { question: "האם יש אחריות על השירות?", answer: "כן, אנו נותנים אחריות מלאה על כל השירותים שלנו." }
    ];

    const faqTitle = content?.faqTitle || 'שאלות נפוצות';

    return `
    <section class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-white animate-slide-up">${faqTitle}</h2>
          </div>
          <div class="space-y-4">
            ${faq.map((faqItem: any, index: number) => `
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 animate-slide-up" style="animation-delay: ${index * 0.1}s">
                <h3 class="text-lg font-bold text-white mb-3">${faqItem.question}</h3>
                <p class="text-gray-300 leading-relaxed">${faqItem.answer}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
    `;
  };

  const generateContactSection = () => {
    const contactTitle = content?.contactTitle || 'מוכנים להתחיל?';
    const contactSubtitle = content?.contactSubtitle || 'בואו ניצור יחד משהו מרהיב שיקדם את העסק שלכם';
    const primaryCta = content?.primaryCta || 'צור קשר עכשיו';
    const secondaryCta = content?.secondaryCta || 'קבל הצעת מחיר';

    return `
    <section id="contact" class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto text-center">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-black text-white mb-8 animate-slide-up">
              ${contactTitle}
            </h2>
            
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8 animate-slide-up delay-100">
              <p class="text-xl text-white leading-relaxed">
                ${contactSubtitle}
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8 animate-slide-up delay-200">
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center justify-center gap-3">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-white font-medium">${formData?.contactInfo?.split('\n')[0]?.replace('טלפון: ', '') || '050-1234567'}</span>
              </div>
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center justify-center gap-3">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-white font-medium">${formData?.contactInfo?.split('\n')[1]?.replace('אימייל: ', '') || 'info@business.co.il'}</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-300">
              <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                ${primaryCta}
              </button>
              <button class="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105">
                ${secondaryCta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  };

  // Generate footer matching FullScreenPreview footer exactly
  const generateFooter = () => {
    return `
    <footer class="bg-black/50 backdrop-blur-md py-16 text-center">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-2xl font-bold text-white mb-4">
            ${businessName}
          </h3>
          <p class="text-gray-400 mb-8">
            © 2024 כל הזכויות שמורות. ${businessType} מקצועית ואמינה.
          </p>
          <div class="flex justify-center gap-8 text-gray-400">
            <span>טלפון: ${formData?.contactInfo?.split('\n')[0]?.replace('טלפון: ', '') || '050-1234567'}</span>
            <span>אימייל: ${formData?.contactInfo?.split('\n')[1]?.replace('אימייל: ', '') || 'info@business.co.il'}</span>
          </div>
        </div>
      </div>
    </footer>
    `;
  };

  // Style helper functions
  const getHeroBadgeClass = (style: string) => {
    switch (style) {
      case 'glass': return 'bg-green-500/10 backdrop-blur-md border border-green-500/20 rounded-full px-4 py-2 flex items-center gap-2 text-white';
      case 'geometric': return 'bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2 flex items-center gap-2 text-white';
      case 'metal': return 'bg-gradient-to-r from-yellow-400 to-yellow-600 border border-yellow-600 rounded-full px-4 py-2 flex items-center gap-2 text-black';
      case 'image': return 'bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-white';
      default: return 'bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2 flex items-center gap-2 text-white';
    }
  };

  const getHeroTitleClass = (style: string) => {
    switch (style) {
      case 'glass': return 'liquid-title-glow';
      case 'metal': return 'bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent';
      default: return '';
    }
  };

  const getHeroSubtitleClass = (style: string) => {
    switch (style) {
      case 'glass': return 'bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8';
      case 'geometric': return 'bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8';
      case 'metal': return 'bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-md border border-yellow-500/30 rounded-2xl p-8';
      case 'image': return 'bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8';
      default: return 'bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8';
    }
  };

  const getHeroTextClass = (style: string) => {
    switch (style) {
      case 'glass': return 'liquid-text-glow';
      default: return '';
    }
  };

  const getHeroPrimaryButtonClass = (style: string) => {
    switch (style) {
      case 'glass': return 'bg-blue-500/10 backdrop-blur-md border border-blue-500/20 text-white px-8 py-4 rounded-2xl flex items-center gap-2 font-semibold transition-all duration-300 hover:bg-blue-500/20 hover:scale-105 shadow-lg hover:shadow-blue-500/20';
      case 'geometric': return 'bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-none clip-path-geometric flex items-center gap-2 font-semibold transition-all duration-300 hover:scale-105 shadow-lg';
      case 'metal': return 'bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-2xl flex items-center gap-2 font-semibold transition-all duration-300 hover:scale-105 shadow-lg border border-gray-600';
      case 'image': return 'bg-black/30 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-2xl flex items-center gap-2 font-semibold transition-all duration-300 hover:bg-black/50 hover:scale-105 shadow-lg';
      default: return 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl flex items-center gap-2 font-semibold transition-all duration-300 hover:scale-105 shadow-lg';
    }
  };

  const getHeroSecondaryButtonClass = (style: string) => {
    const baseClass = 'bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl flex items-center gap-2 font-semibold transition-all duration-300 hover:scale-105';
    return baseClass;
  };

  const getHeroStatCardClass = (style: string) => {
    switch (style) {
      case 'glass': return 'bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-2xl p-6 text-center';
      case 'geometric': return 'bg-white/10 backdrop-blur-md border border-white/10 rounded-none clip-path-geometric p-6 text-center';
      case 'metal': return 'bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-md border border-yellow-500/30 rounded-2xl p-6 text-center';
      case 'image': return 'bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center';
      default: return 'bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center';
    }
  };

  // Generate complete HTML with all necessary CSS and JavaScript
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName} - ${businessType}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        ${getCompleteCSS()}
    </style>
</head>
<body class="bg-black text-white font-sans antialiased">
    ${generateCompleteHTML()}
    
    <script>
        // Smooth scrolling for navigation links
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

        // Add scroll-based animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.animate-slide-up, .animate-scale-in').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });

        // Button hover effects
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    </script>
</body>
</html>`;
};

// Complete CSS that mirrors PreviewStyles and FullScreenPreview exactly
const getCompleteCSS = () => {
  return `
    /* Base Reset and Typography */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
      background: #000;
      color: #fff;
      overflow-x: hidden;
      line-height: 1.6;
    }

    /* Hero Section Styles */
    .section-hero {
      background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0.9) 70%);
      position: relative;
    }

    .style-glass .section-hero {
      background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0.9) 70%);
    }

    .style-geometric .section-hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .style-metal .section-hero {
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
    }

    .style-image .section-hero {
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }

    /* Animation Keyframes */
    @keyframes float {
      0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
      25% { transform: translateY(-20px) translateX(10px) scale(1.05); }
      50% { transform: translateY(10px) translateX(-15px) scale(0.95); }
      75% { transform: translateY(-10px) translateX(5px) scale(1.02); }
    }

    @keyframes float-delayed {
      0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
      25% { transform: translateY(-15px) translateX(-10px) scale(1.03); }
      50% { transform: translateY(15px) translateX(10px) scale(0.97); }
      75% { transform: translateY(-5px) translateX(-5px) scale(1.01); }
    }

    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
      25% { transform: translateY(-10px) translateX(5px) scale(1.02); }
      50% { transform: translateY(5px) translateX(-10px) scale(0.98); }
      75% { transform: translateY(-15px) translateX(8px) scale(1.01); }
    }

    @keyframes wave {
      0% { transform: translateX(-100%) translateY(-100%) rotate(0deg); }
      100% { transform: translateX(100%) translateY(100%) rotate(360deg); }
    }

    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes spin-reverse {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }

    @keyframes slide-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scale-in {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* Animation Classes */
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
    .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
    .animate-wave { animation: wave 15s linear infinite; }
    .animate-spin-slow { animation: spin-slow 20s linear infinite; }
    .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
    .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
    .animate-scale-in { animation: scale-in 0.8s ease-out forwards; }

    /* Delay Classes */
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }

    /* Glass Effects */
    .liquid-title-glow {
      text-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
    }

    .liquid-text-glow {
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
    }

    /* Geometric Clip Paths */
    .clip-triangle {
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .clip-path-geometric {
      clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%);
    }

    /* Container Styles */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .container-hero {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      width: 100%;
    }

    /* Section Styles */
    .section-content {
      position: relative;
    }

    /* Typography */
    .text-5xl { font-size: 3rem; line-height: 1.1; }
    .text-4xl { font-size: 2.25rem; line-height: 1.2; }
    .text-3xl { font-size: 1.875rem; line-height: 1.25; }
    .text-2xl { font-size: 1.5rem; line-height: 1.3; }
    .text-xl { font-size: 1.25rem; line-height: 1.4; }
    .text-lg { font-size: 1.125rem; line-height: 1.5; }
    .text-sm { font-size: 0.875rem; line-height: 1.5; }

    .font-black { font-weight: 900; }
    .font-bold { font-weight: 700; }
    .font-semibold { font-weight: 600; }
    .font-medium { font-weight: 500; }

    .leading-relaxed { line-height: 1.625; }

    /* Colors */
    .text-white { color: #fff; }
    .text-gray-300 { color: #d1d5db; }
    .text-gray-400 { color: #9ca3af; }
    .text-blue-400 { color: #60a5fa; }
    .text-green-400 { color: #4ade80; }
    .text-yellow-400 { color: #facc15; }

    /* Layout */
    .min-h-screen { min-height: 100vh; }
    .h-16 { height: 4rem; }
    .w-5 { width: 1.25rem; }
    .h-5 { height: 1.25rem; }
    .w-12 { width: 3rem; }
    .h-12 { height: 3rem; }

    /* Flexbox */
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .justify-between { justify-content: space-between; }
    .gap-1 { gap: 0.25rem; }
    .gap-2 { gap: 0.5rem; }
    .gap-3 { gap: 0.75rem; }
    .gap-4 { gap: 1rem; }
    .gap-6 { gap: 1.5rem; }
    .gap-8 { gap: 2rem; }
    .gap-12 { gap: 3rem; }

    /* Grid */
    .grid { display: grid; }
    .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }

    /* Spacing */
    .p-6 { padding: 1.5rem; }
    .p-8 { padding: 2rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .px-8 { padding-left: 2rem; padding-right: 2rem; }
    .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
    .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
    .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
    .mb-3 { margin-bottom: 0.75rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-16 { margin-bottom: 4rem; }
    .ml-2 { margin-left: 0.5rem; }

    /* Positioning */
    .relative { position: relative; }
    .absolute { position: absolute; }
    .sticky { position: sticky; }
    .top-0 { top: 0; }
    .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
    .z-10 { z-index: 10; }
    .z-50 { z-index: 50; }

    /* Sizing */
    .max-w-2xl { max-width: 42rem; }
    .max-w-4xl { max-width: 56rem; }
    .max-w-6xl { max-width: 72rem; }
    .mx-auto { margin-left: auto; margin-right: auto; }

    /* Borders */
    .rounded-2xl { border-radius: 1rem; }
    .rounded-3xl { border-radius: 1.5rem; }
    .rounded-full { border-radius: 9999px; }
    .border { border-width: 1px; }
    .border-b { border-bottom-width: 1px; }

    /* Effects */
    .backdrop-blur-md { backdrop-filter: blur(12px); }
    .backdrop-blur-lg { backdrop-filter: blur(16px); }
    .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
    .overflow-hidden { overflow: hidden; }

    /* Transitions */
    .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
    .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 300ms; }
    .duration-300 { transition-duration: 300ms; }

    /* Hover Effects */
    .hover\\:text-blue-400:hover { color: #60a5fa; }
    .hover\\:bg-white\\/20:hover { background-color: rgba(255, 255, 255, 0.2); }
    .hover\\:scale-105:hover { transform: scale(1.05); }

    /* Text Alignment */
    .text-center { text-align: center; }

    /* Display */
    .hidden { display: none; }
    .block { display: block; }

    /* Background Colors and Gradients */
    .bg-black { background-color: #000; }
    .bg-black\\/80 { background-color: rgba(0, 0, 0, 0.8); }
    .bg-black\\/50 { background-color: rgba(0, 0, 0, 0.5); }
    .bg-white\\/10 { background-color: rgba(255, 255, 255, 0.1); }
    .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
    .from-blue-600 { --tw-gradient-from: #2563eb; --tw-gradient-to: rgba(37, 99, 235, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
    .to-purple-600 { --tw-gradient-to: #9333ea; }

    /* Navigation Specific */
    .space-x-8 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(2rem * var(--tw-space-x-reverse)); margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse))); }
    .space-x-reverse > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }

    /* Responsive Design */
    @media (min-width: 768px) {
      .md\\:text-7xl { font-size: 4.5rem; line-height: 1.1; }
      .md\\:text-5xl { font-size: 3rem; line-height: 1.1; }
      .md\\:text-2xl { font-size: 1.5rem; line-height: 1.3; }
      .md\\:flex { display: flex; }
      .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
      .md\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
    }

    @media (min-width: 1024px) {
      .lg\\:block { display: block; }
      .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
      .lg\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
      .lg\\:text-right { text-align: right; }
      .lg\\:justify-start { justify-content: flex-start; }
      .lg\\:mx-0 { margin-left: 0; margin-right: 0; }
    }

    @media (min-width: 640px) {
      .sm\\:flex-row { flex-direction: row; }
    }

    /* Button Cursor */
    button { cursor: pointer; }
    a { cursor: pointer; }

    /* SVG Fill */
    .fill-current { fill: currentColor; }

    /* Backdrop Blur Fix for older browsers */
    @supports not (backdrop-filter: blur(12px)) {
      .backdrop-blur-md { background-color: rgba(0, 0, 0, 0.8); }
      .backdrop-blur-lg { background-color: rgba(0, 0, 0, 0.9); }
    }
  `;
};
