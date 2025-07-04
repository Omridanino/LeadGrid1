// Premium text colors for content (exact match to TemplatePreview)
export const getPremiumTextColor = (templateId: string): string => {
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

// Premium section backgrounds (exact match to PremiumSection components)
export const getPremiumSectionBackground = (templateId: string, sectionType: string): string => {
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