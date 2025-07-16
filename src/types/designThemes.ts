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
    hero: 'glass' | 'minimal' | 'gradient' | 'premium' | 'friendly' | 'luxury-premium';
    buttons: 'glass' | 'minimal' | 'gradient' | 'premium' | 'friendly' | 'luxury-premium';
    cards: 'glass' | 'minimal' | 'gradient' | 'premium' | 'friendly' | 'luxury-premium';
    sections: 'glass' | 'minimal' | 'gradient' | 'premium' | 'friendly' | 'luxury-premium';
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

  // 2. Luxury Premium
  {
    id: 'luxury-premium',
    name: 'יוקרה פרימיום',
    description: 'עיצוב יוקרתי מתקדם עם זהב נוצץ, צללים עמוקים ואפקטים אלגנטיים',
    thumbnail: '/design-previews/luxury-premium.png',
    category: 'יוקרה',
    styles: {
      primary: 'linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 90%, 65%))', // זהב נוצץ גרדיאנט
      secondary: 'linear-gradient(135deg, hsl(0, 0%, 98%), hsl(45, 30%, 92%))', // לבן זהבהב
      accent: 'linear-gradient(135deg, hsl(45, 100%, 75%), hsl(38, 100%, 60%), hsl(45, 95%, 70%))', // זהב בהיר נוצץ
      background: 'linear-gradient(135deg, hsl(0, 0%, 2%) 0%, hsl(0, 0%, 8%) 30%, hsl(45, 20%, 5%) 70%, hsl(0, 0%, 3%) 100%)', // שחור עמוק יוקרתי
      text: 'hsl(0, 0%, 95%)',
      
      heroBackground: 'linear-gradient(135deg, hsl(0, 0%, 1%) 0%, hsl(0, 0%, 6%) 20%, hsl(45, 25%, 4%) 50%, hsl(38, 30%, 6%) 80%, hsl(0, 0%, 2%) 100%)',
      heroText: 'hsl(0, 0%, 98%)',
      featuresBackground: 'linear-gradient(135deg, hsl(0, 0%, 3%) 0%, hsl(45, 15%, 8%) 50%, hsl(0, 0%, 5%) 100%)',
      featuresText: 'hsl(0, 0%, 92%)',
      
      fontFamily: '"Playfair Display", "Frank Ruhl Libre", serif',
      headingFont: '"Playfair Display", "Frank Ruhl Libre", serif',
      
      borderRadius: '12px',
      spacing: '2.5rem',
      
      gradient: 'linear-gradient(135deg, rgba(255,215,0,0.3), rgba(255,193,7,0.2), rgba(255,235,59,0.15))',
      shadows: '0 12px 40px rgba(255, 215, 0, 0.4), 0 4px 20px rgba(255, 193, 7, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
      animations: 'luxury-premium'
    },
    components: {
      hero: 'luxury-premium',
      buttons: 'luxury-premium',
      cards: 'luxury-premium',
      sections: 'luxury-premium'
    }
  },

  // 3. Hyper Minimalistic
  {
    id: 'hyper-minimal',
    name: 'מינימליסטי היפר',
    description: 'עיצוב נקי ומינימלי עם המון חלל ריק וטיפוגרפיה חדה',
    thumbnail: '/design-previews/hyper-minimal.png',
    category: 'מינימליסטי',
    styles: {
      primary: 'hsl(0, 0%, 9%)', // שחור כמעט
      secondary: 'hsl(0, 0%, 96%)', // לבן כמעט
      accent: 'hsl(0, 0%, 50%)', // אפור בינוני
      background: 'hsl(0, 0%, 100%)', // לבן טהור
      text: 'hsl(0, 0%, 9%)',
      
      heroBackground: 'hsl(0, 0%, 100%)',
      heroText: 'hsl(0, 0%, 9%)',
      featuresBackground: 'hsl(0, 0%, 98%)',
      featuresText: 'hsl(0, 0%, 15%)',
      
      fontFamily: '"Inter", "Heebo", sans-serif',
      headingFont: '"Inter", "Heebo", sans-serif',
      
      borderRadius: '2px',
      spacing: '3rem',
      
      shadows: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      animations: 'subtle'
    },
    components: {
      hero: 'minimal',
      buttons: 'minimal',
      cards: 'minimal',
      sections: 'minimal'
    }
  },

  // 4. Futuristic Tech Gradient
  {
    id: 'futuristic-gradient',
    name: 'עתידני גרדיאנט',
    description: 'עיצוב עתידני עם גרדיאנטים דינמיים ואנימציות מתקדמות',
    thumbnail: '/design-previews/futuristic-gradient.png',
    category: 'עתידני',
    styles: {
      primary: 'hsl(271, 91%, 65%)', // סגול-ורוד
      secondary: 'hsl(193, 95%, 68%)', // טורקיז
      accent: 'hsl(158, 64%, 52%)', // ירוק
      background: 'linear-gradient(135deg, hsl(240, 10%, 3.9%) 0%, hsl(240, 5.9%, 10%) 50%, hsl(240, 10%, 3.9%) 100%)',
      text: 'hsl(0, 0%, 98%)',
      
      heroBackground: 'linear-gradient(135deg, hsl(271, 91%, 65%) 0%, hsl(193, 95%, 68%) 50%, hsl(158, 64%, 52%) 100%)',
      heroText: 'hsl(0, 0%, 98%)',
      featuresBackground: 'linear-gradient(45deg, hsl(240, 10%, 3.9%), hsl(240, 5.9%, 10%))',
      featuresText: 'hsl(0, 0%, 95%)',
      
      fontFamily: '"Inter", "Heebo", sans-serif',
      headingFont: '"Inter", "Heebo", sans-serif',
      
      borderRadius: '8px',
      spacing: '1.5rem',
      
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
      shadows: '0 0 50px rgba(139, 92, 246, 0.3)',
      animations: 'dynamic'
    },
    components: {
      hero: 'gradient',
      buttons: 'gradient',
      cards: 'gradient',
      sections: 'gradient'
    }
  },

  // 5. Friendly Human Storytelling
  {
    id: 'friendly-human',
    name: 'אנושי ידידותי',
    description: 'עיצוב חם ואישי עם צבעים פסטליים ותחושה מזמינה',
    thumbnail: '/design-previews/friendly-human.png',
    category: 'ידידותי',
    styles: {
      primary: 'hsl(340, 82%, 52%)', // ורוד בהיר
      secondary: 'hsl(200, 18%, 46%)', // כחול-אפור
      accent: 'hsl(158, 64%, 52%)', // תכלת
      background: 'hsl(0, 0%, 100%)', // לבן
      text: 'hsl(224, 71%, 4%)',
      
      heroBackground: 'linear-gradient(135deg, hsl(13, 100%, 96%) 0%, hsl(340, 100%, 95%) 50%, hsl(200, 100%, 95%) 100%)',
      heroText: 'hsl(224, 71%, 4%)',
      featuresBackground: 'hsl(60, 9%, 98%)',
      featuresText: 'hsl(224, 71%, 4%)',
      
      fontFamily: '"Inter", "Heebo", sans-serif',
      headingFont: '"Inter", "Heebo", sans-serif',
      
      borderRadius: '16px',
      spacing: '1.5rem',
      
      gradient: 'linear-gradient(135deg, rgba(251, 113, 133, 0.1), rgba(147, 197, 253, 0.1))',
      shadows: '0 4px 16px 0 rgba(251, 113, 133, 0.1)',
      animations: 'gentle'
    },
    components: {
      hero: 'friendly',
      buttons: 'friendly',
      cards: 'friendly',
      sections: 'friendly'
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