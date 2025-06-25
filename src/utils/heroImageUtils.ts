
export const getHeroImageUrl = (content: any, heroImage: string, formData: any): string => {
  // If user uploaded custom image, use it
  if (heroImage && heroImage.startsWith('data:')) {
    return heroImage;
  }
  
  // Otherwise use automatic image based on business type
  const businessType = formData.businessType?.toLowerCase() || '';
  const businessName = formData.businessName?.toLowerCase() || '';
  const keyFeatures = formData.keyFeatures?.toLowerCase() || '';
  
  // Enhanced business type detection with more specific matching
  
  // Food & Restaurants
  if (businessType.includes('מסעדה') || businessType.includes('אוכל') || businessType.includes('שף') || 
      businessType.includes('קייטרינג') || businessName.includes('מסעדה') || businessName.includes('שף')) {
    return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Coffee & Cafes
  if (businessType.includes('קפה') || businessType.includes('בית קפה') || businessType.includes('קפיטריה') ||
      businessName.includes('קפה') || businessName.includes('קפיטריה')) {
    return 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Technology & Software
  if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה') || businessType.includes('הייטק') ||
      businessType.includes('פיתוח') || businessType.includes('מחשבים') || businessType.includes('IT') ||
      keyFeatures.includes('אפליקציה') || keyFeatures.includes('מערכת')) {
    return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Medical & Health
  if (businessType.includes('רפואה') || businessType.includes('בריאות') || businessType.includes('דוקטור') ||
      businessType.includes('רופא') || businessType.includes('מרפאה') || businessType.includes('קליניקה') ||
      businessType.includes('פיזיותרפיה') || businessType.includes('שיניים')) {
    return 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Legal Services
  if (businessType.includes('עורך דין') || businessType.includes('משרד עורכי דין') || businessType.includes('עו"ד') ||
      businessType.includes('משפטי') || businessName.includes('עו"ד')) {
    return 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Real Estate
  if (businessType.includes('נדלן') || businessType.includes('מתווך') || businessType.includes('השקעות') ||
      businessType.includes('בנייה') || businessType.includes('קבלן')) {
    return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Education & Training
  if (businessType.includes('חינוך') || businessType.includes('לימודים') || businessType.includes('מורה') ||
      businessType.includes('הדרכה') || businessType.includes('קורס') || businessType.includes('אוניברסיטה')) {
    return 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Beauty & Wellness
  if (businessType.includes('יופי') || businessType.includes('קוסמטיקה') || businessType.includes('ספא') ||
      businessType.includes('עיסוי') || businessType.includes('מספרה') || businessType.includes('יוגה')) {
    return 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Fitness & Sports
  if (businessType.includes('כושר') || businessType.includes('ספורט') || businessType.includes('חדר כושר') ||
      businessType.includes('אימון') || businessType.includes('מאמן')) {
    return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Consulting & Business Services
  if (businessType.includes('יועץ') || businessType.includes('ייעוץ') || businessType.includes('שירותים עסקיים') ||
      businessType.includes('ניהול') || businessType.includes('אסטרטגיה') || businessType.includes('פיננסי')) {
    return 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Retail & Fashion
  if (businessType.includes('חנות') || businessType.includes('אופנה') || businessType.includes('בגדים') ||
      businessType.includes('מכירה') || businessType.includes('קמעונאי') || businessType.includes('בוטיק')) {
    return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Photography & Creative
  if (businessType.includes('צילום') || businessType.includes('צלם') || businessType.includes('עיצוב') ||
      businessType.includes('גרפיקה') || businessType.includes('יצירתי') || businessType.includes('אמנות')) {
    return 'https://images.unsplash.com/photo-1542038784456-1ea8e4d40c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Home Services & Construction
  if (businessType.includes('שיפוצים') || businessType.includes('בנייה') || businessType.includes('אינסטלטור') ||
      businessType.includes('חשמלאי') || businessType.includes('צבע') || businessType.includes('נקיון')) {
    return 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Automotive
  if (businessType.includes('רכב') || businessType.includes('מוסך') || businessType.includes('מכוניות') ||
      businessType.includes('אוטו') || businessType.includes('צמיגים')) {
    return 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Travel & Tourism
  if (businessType.includes('נסיעות') || businessType.includes('תיירות') || businessType.includes('טיולים') ||
      businessType.includes('נופש') || businessType.includes('מלון') || businessType.includes('צימר')) {
    return 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Agriculture & Nature
  if (businessType.includes('חקלאות') || businessType.includes('גינון') || businessType.includes('פרחים') ||
      businessType.includes('נוף') || businessType.includes('צמחים')) {
    return 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Default professional business image
  return 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
};
