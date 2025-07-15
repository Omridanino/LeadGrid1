// Design Theme Types and Data
export interface DesignTheme {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
  isDefault?: boolean;
  styles: {
    // Base colors
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    
    // Section-specific colors
    heroBackground: string;
    heroText: string;
    featuresBackground: string;
    featuresText: string;
    
    // Typography
    fontFamily: string;
    headingFont?: string;
    
    // Layout
    borderRadius: string;
    spacing: string;
    
    // Effects
    glassMorphism?: boolean;
    gradient?: string;
    shadows?: string;
    animations?: string;
  };
  components: {
    hero: 'glass' | 'minimal' | 'gradient' | 'premium' | 'friendly' | 'luxury' | 'brutalist' | 'cyberpunk' | 'organic';
    buttons: 'glass' | 'minimal' | 'gradient' | 'premium' | 'friendly' | 'luxury' | 'brutalist' | 'cyberpunk' | 'organic';
    cards: 'glass' | 'minimal' | 'gradient' | 'premium' | 'friendly' | 'luxury' | 'brutalist' | 'cyberpunk' | 'organic';
    sections: 'glass' | 'minimal' | 'gradient' | 'premium' | 'friendly' | 'luxury' | 'brutalist' | 'cyberpunk' | 'organic';
  };
}

// Design Themes Data
export const designThemes: DesignTheme[] = [
  // 1. Current Design (Glass) - Default
  {
    id: 'liquid-glass',
    name: 'זכוכית נוזלית',
    description: 'עיצוב טכנולוגי מתקדם עם אפקטי זכוכית וגרדיאנטים סגולים',
    thumbnail: '/design-previews/liquid-glass.png',
    category: 'טכנולוגי',
    isDefault: true,
    styles: {
      primary: 'hsl(262, 83%, 58%)',
      secondary: 'hsl(240, 4%, 16%)',
      accent: 'hsl(262, 83%, 58%)',
      background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,64,175,0.95) 50%, rgba(88,28,135,0.95) 100%)',
      text: 'hsl(0, 0%, 100%)',
      
      heroBackground: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,64,175,0.95) 50%, rgba(88,28,135,0.95) 100%)',
      heroText: 'hsl(0, 0%, 100%)',
      featuresBackground: 'linear-gradient(to bottom, rgba(15,23,42,0.9), rgba(30,64,175,0.9))',
      featuresText: 'hsl(0, 0%, 100%)',
      
      fontFamily: '"Inter", "Heebo", sans-serif',
      headingFont: '"Inter", "Heebo", sans-serif',
      
      borderRadius: '12px',
      spacing: '1.5rem',
      
      glassMorphism: true,
      gradient: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      shadows: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      animations: 'smooth'
    },
    components: {
      hero: 'glass',
      buttons: 'glass',
      cards: 'glass',
      sections: 'glass'
    }
  },

  // 2. Luxury Premium - יוקרתי עם אלכסונים זהובים ודמויות
  {
    id: 'luxury-premium',
    name: 'יוקרה פרימיום',
    description: 'עיצוב יוקרתי עם קווים אלכסוניים, זהב ודמויות אלגנטיות',
    thumbnail: '/design-previews/luxury-premium.png',
    category: 'יוקרה',
    styles: {
      primary: 'hsl(45, 100%, 50%)', // זהב
      secondary: 'hsl(0, 0%, 8%)', // שחור עמוק  
      accent: 'hsl(16, 100%, 66%)', // נחושת
      background: 'linear-gradient(135deg, hsl(0, 0%, 2%) 0%, hsl(45, 10%, 8%) 50%, hsl(0, 0%, 5%) 100%)',
      text: 'hsl(45, 50%, 85%)',
      
      heroBackground: 'linear-gradient(45deg, hsl(0, 0%, 2%) 0%, hsl(45, 20%, 10%) 40%, hsl(0, 0%, 8%) 100%)',
      heroText: 'hsl(45, 80%, 90%)',
      featuresBackground: 'linear-gradient(-45deg, hsl(0, 0%, 3%) 0%, hsl(45, 15%, 6%) 100%)',
      featuresText: 'hsl(45, 60%, 80%)',
      
      fontFamily: '"Playfair Display", "Frank Ruhl Libre", serif',
      headingFont: '"Cinzel", "Playfair Display", serif',
      
      borderRadius: '0px', // קווים חדים
      spacing: '4rem', // ריווחים גדולים
      
      gradient: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,138,101,0.1))',
      shadows: '0 20px 60px 0 rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255,215,0,0.1)',
      animations: 'sophisticated' // אנימציות מתוחכמות
    },
    components: {
      hero: 'luxury', // היירו יהיה עם קווים אלכסוניים ודמויות
      buttons: 'luxury', // כפתורים זהובים עם אפקטים
      cards: 'luxury', // כרטיסים עם מסגרות זהב
      sections: 'luxury' // סקשנים עם רקעים אלכסוניים
    }
  },

  // 3. Brutalist Mono - ברוטליסטי מונוכרום עם טיפוגרפיה ענקית
  {
    id: 'brutalist-mono',
    name: 'ברוטליסט מונו',
    description: 'עיצוב ברוטליסטי עם טיפוגרפיה ענקית, גרידים קשיחים ומינימליזם קיצוני',
    thumbnail: '/design-previews/brutalist-mono.png',
    category: 'ברוטליסטי',
    styles: {
      primary: 'hsl(0, 0%, 0%)', // שחור טהור
      secondary: 'hsl(0, 0%, 20%)', // אפור כהה
      accent: 'hsl(0, 0%, 100%)', // לבן טהור
      background: 'hsl(0, 0%, 98%)', // לבן כמעט
      text: 'hsl(0, 0%, 5%)',
      
      heroBackground: 'hsl(0, 0%, 100%)',
      heroText: 'hsl(0, 0%, 0%)',
      featuresBackground: 'hsl(0, 0%, 95%)',
      featuresText: 'hsl(0, 0%, 10%)',
      
      fontFamily: '"Roboto Mono", "Courier New", monospace',
      headingFont: '"Arial Black", "Helvetica", sans-serif',
      
      borderRadius: '0px', // ללא עיגולים בכלל
      spacing: '5rem', // ריווחים ענקיים
      
      gradient: 'none', // ללא גרדיאנטים
      shadows: 'none', // ללא צללים
      animations: 'harsh' // אנימציות קשות וחדות
    },
    components: {
      hero: 'brutalist', // היירו עם טיפוגרפיה ענקית ובלוקים
      buttons: 'brutalist', // כפתורים מרובעים וקשיחים
      cards: 'brutalist', // כרטיסים בלוקיים ללא עיגולים
      sections: 'brutalist' // סקשנים בגריד קשיח
    }
  },

  // 4. Cyberpunk Neon - סייברפאנק עם ניונים וגליצ'ים
  {
    id: 'cyberpunk-neon',
    name: 'סייברפאנק ניאון',
    description: 'עיצוב עתידני עם אפקטי ניאון, גליצ\'ים ואסתטיקה סייברפאנק',
    thumbnail: '/design-previews/cyberpunk-neon.png',
    category: 'עתידני',
    styles: {
      primary: 'hsl(300, 100%, 70%)', // מגנטה ניאון
      secondary: 'hsl(180, 100%, 50%)', // ציאן ניאון
      accent: 'hsl(60, 100%, 50%)', // צהוב ניאון
      background: 'linear-gradient(135deg, hsl(240, 100%, 5%) 0%, hsl(300, 50%, 3%) 50%, hsl(240, 100%, 2%) 100%)',
      text: 'hsl(120, 100%, 75%)',
      
      heroBackground: 'radial-gradient(circle at 30% 70%, hsl(300, 100%, 20%) 0%, hsl(240, 100%, 5%) 50%, hsl(180, 100%, 10%) 100%)',
      heroText: 'hsl(300, 100%, 90%)',
      featuresBackground: 'linear-gradient(45deg, hsl(240, 100%, 3%) 0%, hsl(300, 80%, 5%) 100%)',
      featuresText: 'hsl(180, 100%, 80%)',
      
      fontFamily: '"Orbitron", "Roboto Mono", monospace',
      headingFont: '"Exo 2", "Orbitron", sans-serif',
      
      borderRadius: '2px', // עיגולים מינימליים
      spacing: '2rem',
      
      gradient: 'linear-gradient(135deg, rgba(255,0,255,0.2), rgba(0,255,255,0.1))',
      shadows: '0 0 30px rgba(255,0,255,0.5), 0 0 60px rgba(0,255,255,0.3), inset 0 0 20px rgba(255,255,0,0.1)',
      animations: 'glitch' // אנימציות גליצ'
    },
    components: {
      hero: 'cyberpunk', // היירו עם אפקטי ניאון וגליצ'ים
      buttons: 'cyberpunk', // כפתורים עם ניאון וזוהר
      cards: 'cyberpunk', // כרטיסים עם מסגרות ניאון
      sections: 'cyberpunk' // סקשנים עם רקעים טכנולוגיים
    }
  },

  // 5. Organic Nature - אורגני טבעי עם איורים ועקומות
  {
    id: 'organic-nature',
    name: 'אורגני טבעי',
    description: 'עיצוב אורגני עם עקומות טבעיות, איורים ורקעים מצוירים',
    thumbnail: '/design-previews/organic-nature.png',
    category: 'טבעי',
    styles: {
      primary: 'hsl(140, 60%, 45%)', // ירוק יער
      secondary: 'hsl(25, 75%, 60%)', // חום חם
      accent: 'hsl(200, 70%, 50%)', // כחול שמיים
      background: 'radial-gradient(ellipse at center, hsl(45, 40%, 95%) 0%, hsl(120, 20%, 92%) 100%)',
      text: 'hsl(140, 30%, 20%)',
      
      heroBackground: 'linear-gradient(135deg, hsl(45, 60%, 92%) 0%, hsl(120, 40%, 88%) 50%, hsl(200, 30%, 90%) 100%)',
      heroText: 'hsl(140, 50%, 15%)',
      featuresBackground: 'radial-gradient(circle at 80% 20%, hsl(45, 50%, 94%) 0%, hsl(120, 30%, 90%) 100%)',
      featuresText: 'hsl(140, 40%, 25%)',
      
      fontFamily: '"Poppins", "Assistant", sans-serif',
      headingFont: '"Comfortaa", "Varela Round", sans-serif',
      
      borderRadius: '25px', // עיגולים אורגניים
      spacing: '2.5rem',
      
      gradient: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(59,130,246,0.05))',
      shadows: '0 10px 40px 0 rgba(34, 197, 94, 0.15), 0 4px 20px 0 rgba(139, 69, 19, 0.1)',
      animations: 'organic' // אנימציות זורמות ואורגניות
    },
    components: {
      hero: 'organic', // היירו עם איורים טבעיים ועקומות
      buttons: 'organic', // כפתורים עגולים ורכים
      cards: 'organic', // כרטיסים עם צורות אורגניות
      sections: 'organic' // סקשנים עם רקעים מצוירים
    }
  }
];

// Helper functions
export const getThemeById = (id: string): DesignTheme | undefined => {
  return designThemes.find(theme => theme.id === id);
};

export const getDefaultTheme = (): DesignTheme => {
  return designThemes.find(theme => theme.isDefault) || designThemes[0];
};

export const getThemesByCategory = (category: string): DesignTheme[] => {
  return designThemes.filter(theme => theme.category === category);
};