// Hero generators for different design themes
import { DesignTheme } from '@/types/designThemes';

// Helper functions for premium themes
export const getPremiumAnimatedBackground = (templateId: string, section: string) => {
  return {
    animationType: 'glass',
    background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,64,175,0.95) 50%, rgba(88,28,135,0.95) 100%)'
  };
};

export const generatePremiumBackgroundHTML = (animationType: string) => {
  return `<div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"></div>`;
};

export const getPremiumTextColor = (templateId: string, section?: string, fallback?: string) => {
  return fallback || '#ffffff';
};

// Glass hero (original default)
export const getGlassHeroHTML = (template: any, theme: DesignTheme, isPremium: boolean) => {
  return `
    ${isPremium ? generatePremiumBackgroundHTML('glass') : ''}
    <div class="max-w-7xl mx-auto px-6 pt-20 pb-32 relative z-10">
      ${template.hero?.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-6" style="color: ${theme.styles.primary}; border-color: ${theme.styles.primary};">${template.hero.badge}</div>` : ''}
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style="color: ${theme.styles.heroText};">${template.hero?.title || template.businessName || 'העסק שלך'}</h1>
      <p class="text-xl md:text-2xl mb-8 max-w-3xl" style="color: ${theme.styles.heroText}; opacity: 0.9;">${template.hero?.subtitle || 'השירות המקצועי ביותר בתחום'}</p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${theme.styles.primary};">
          ${template.hero?.ctaButton || 'צור קשר'}
        </a>
      </div>
    </div>
  `;
};

// Luxury hero with diagonal elements
export const getLuxuryHeroHTML = (template: any, theme: DesignTheme, isPremium: boolean) => {
  return `
    <div class="absolute inset-0" style="background: ${theme.styles.heroBackground};">
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-amber-500/10 to-transparent skew-x-12 origin-top-right"></div>
      <div class="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-amber-600/5 to-transparent -skew-x-12 origin-bottom-left"></div>
    </div>
    <div class="max-w-7xl mx-auto px-6 pt-20 pb-32 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
        <div class="space-y-8">
          ${template.hero?.badge ? `<span class="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-6 py-2 text-sm font-bold tracking-wider uppercase" style="font-family: ${theme.styles.headingFont};">${template.hero.badge}</span>` : ''}
          <h1 class="text-6xl lg:text-7xl font-bold leading-none bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent" style="font-family: ${theme.styles.headingFont};">${template.hero?.title || template.businessName || 'העסק היוקרתי'}</h1>
          <p class="text-xl lg:text-2xl text-amber-100/80 leading-relaxed max-w-xl" style="font-family: ${theme.styles.fontFamily};">${template.hero?.subtitle || 'השירות המקצועי והיוקרתי ביותר בתחום'}</p>
          <div class="flex flex-col sm:flex-row gap-6 pt-4">
            <button class="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold text-lg tracking-wide" style="font-family: ${theme.styles.headingFont};">${template.hero?.ctaButton || 'התחל עכשיו'}</button>
          </div>
        </div>
      </div>
    </div>
  `;
};

// Brutalist hero with giant typography
export const getBrutalistHeroHTML = (template: any, theme: DesignTheme, isPremium: boolean) => {
  return `
    <div class="absolute inset-0 opacity-5">
      <div class="w-full h-full" style="background-image: linear-gradient(90deg, black 1px, transparent 1px), linear-gradient(180deg, black 1px, transparent 1px); background-size: 40px 40px;"></div>
    </div>
    <div class="absolute top-20 right-10 w-32 h-32 bg-black"></div>
    <div class="max-w-7xl mx-auto px-8 py-20 relative z-10" style="background: ${theme.styles.heroBackground};">
      <h1 class="text-9xl lg:text-[12rem] xl:text-[14rem] font-black leading-none text-black tracking-tighter" style="font-family: ${theme.styles.headingFont};">${(template.hero?.title || template.businessName || 'BRAND').toUpperCase()}</h1>
      <div class="grid lg:grid-cols-12 gap-8 mb-20">
        <div class="lg:col-span-6 space-y-8">
          <div class="bg-gray-100 p-8 border-4 border-black">
            <p class="text-2xl leading-relaxed text-black" style="font-family: ${theme.styles.fontFamily};">${template.hero?.subtitle || 'UNCOMPROMISING QUALITY. MAXIMUM EFFICIENCY.'}</p>
          </div>
        </div>
        <div class="lg:col-span-3 space-y-6">
          <button class="w-full bg-black text-white p-6 font-black text-lg uppercase tracking-wider" style="font-family: ${theme.styles.fontFamily};">${template.hero?.ctaButton || 'EXECUTE'}</button>
        </div>
      </div>
    </div>
  `;
};

// Cyberpunk hero with neon effects
export const getCyberpunkHeroHTML = (template: any, theme: DesignTheme, isPremium: boolean) => {
  return `
    <div class="absolute inset-0" style="background: ${theme.styles.heroBackground};">
      <div class="absolute inset-0 opacity-30">
        <div class="w-full h-full" style="background-image: linear-gradient(90deg, rgba(255,0,255,0.3) 1px, transparent 1px), linear-gradient(180deg, rgba(0,255,255,0.3) 1px, transparent 1px); background-size: 60px 60px;"></div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
        <div class="space-y-8">
          ${template.hero?.badge ? `<div class="inline-flex items-center gap-2 bg-gradient-to-r from-magenta-500/20 to-cyan-500/20 border border-cyan-400 px-4 py-2 backdrop-blur-sm"><span class="text-cyan-400 text-sm uppercase tracking-wider" style="font-family: ${theme.styles.fontFamily};">${template.hero.badge}</span></div>` : ''}
          <h1 class="text-6xl lg:text-8xl font-black leading-none bg-gradient-to-r from-magenta-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent" style="font-family: ${theme.styles.headingFont}; text-shadow: 0 0 20px rgba(255,0,255,0.5);">${template.hero?.title || template.businessName || 'CYBERTECH'}</h1>
          <p class="text-xl lg:text-2xl text-cyan-100 leading-relaxed max-w-xl" style="font-family: ${theme.styles.fontFamily};">${template.hero?.subtitle || 'העתיד כאן. טכנולוגיה מתקדמת ללא גבולות'}</p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button class="px-8 py-4 bg-gradient-to-r from-magenta-500 to-cyan-500 text-white font-bold uppercase tracking-wider" style="font-family: ${theme.styles.fontFamily};">${template.hero?.ctaButton || 'INITIALIZE'}</button>
          </div>
        </div>
      </div>
    </div>
  `;
};

// Organic hero with flowing elements
export const getOrganicHeroHTML = (template: any, theme: DesignTheme, isPremium: boolean) => {
  return `
    <div class="absolute inset-0" style="background: ${theme.styles.heroBackground};">
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <path d="M0,300 Q300,100 600,300 T1200,300 L1200,800 L0,800 Z" fill="rgba(34, 197, 94, 0.1)" />
        <path d="M0,500 Q400,200 800,500 T1200,500 L1200,800 L0,800 Z" fill="rgba(251, 191, 36, 0.08)" />
      </svg>
    </div>
    <div class="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
        <div class="space-y-8">
          ${template.hero?.badge ? `<div class="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 rounded-full px-6 py-3 backdrop-blur-sm"><span class="text-emerald-700 text-sm" style="font-family: ${theme.styles.fontFamily};">${template.hero.badge}</span></div>` : ''}
          <h1 class="text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-emerald-600 via-blue-600 to-amber-600 bg-clip-text text-transparent" style="font-family: ${theme.styles.headingFont};">${template.hero?.title || template.businessName || 'העסק הטבעי שלך'}</h1>
          <p class="text-xl lg:text-2xl text-emerald-800 leading-relaxed max-w-xl" style="font-family: ${theme.styles.fontFamily};">${template.hero?.subtitle || 'פתרונות טבעיים ואנושיים שיוצרים חיבור אמיתי'}</p>
          <div class="flex flex-col sm:flex-row gap-4 pt-6">
            <button class="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold text-lg rounded-full shadow-lg" style="font-family: ${theme.styles.fontFamily};">${template.hero?.ctaButton || 'בואו נתחיל'}</button>
          </div>
        </div>
      </div>
    </div>
  `;
};

// Main hero generator function
export const getHeroHTML = (template: any, theme: DesignTheme, isPremium: boolean) => {
  const heroType = theme.components.hero;
  
  switch (heroType) {
    case 'luxury':
      return getLuxuryHeroHTML(template, theme, isPremium);
    case 'brutalist':
      return getBrutalistHeroHTML(template, theme, isPremium);
    case 'cyberpunk':
      return getCyberpunkHeroHTML(template, theme, isPremium);
    case 'organic':
      return getOrganicHeroHTML(template, theme, isPremium);
    case 'glass':
    default:
      return getGlassHeroHTML(template, theme, isPremium);
  }
};