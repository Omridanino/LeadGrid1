
import { TemplateData } from '@/types/template';

export const templates: TemplateData[] = [
  // ===== BASIC TEMPLATES - בסיסי ₪89.90 =====
  {
    id: 'basic-business',
    name: 'עסק בסיסי',
    category: 'basic',
    hero: {
      title: 'העסק שלכם מתחיל כאן',
      subtitle: 'פתרונות פשוטים ויעילים',
      description: 'התחילו את המסע שלכם עם הכלים הנכונים',
      button1Text: 'התחילו עכשיו',
      button2Text: 'קראו עוד'
    },
    emotional: {
      title: 'הזמן שלכם הגיע',
      description: 'כל חלום מתחיל בצעד ראשון',
      button1Text: 'התחילו היום',
      button2Text: 'למדו עוד'
    },
    features: {
      title: 'מה אתם מקבלים',
      items: [
        { title: 'פשוט ונוח', description: 'קל לשימוש', icon: 'check-circle' },
        { title: 'מהיר', description: 'תוצאות מהירות', icon: 'zap' },
        { title: 'אמין', description: 'תמיכה מקצועית', icon: 'shield' }
      ],
      button1Text: 'התחילו',
      button2Text: 'צרו קשר'
    },
    testimonials: {
      title: 'מה אומרים עלינו',
      testimonials: [
        { name: 'יוסי כהן', role: 'בעל עסק', content: 'שירות מעולה', rating: 5 }
      ],
      button1Text: 'קראו עוד',
      button2Text: 'הצטרפו'
    },
    about: {
      title: 'מי אנחנו',
      description: 'אנחנו כאן בשבילכם',
      button1Text: 'קראו עוד',
      button2Text: 'צרו קשר'
    },
    pricing: {
      title: 'מחירים פשוטים',
      plans: [
        { name: 'בסיסי', price: '₪299', period: 'חודש', features: ['תכונה 1', 'תכונה 2'], buttonText: 'בחרו' }
      ],
      button1Text: 'השוו',
      button2Text: 'יעוץ'
    },
    faq: {
      title: 'שאלות נפוצות',
      questions: [
        { question: 'איך מתחילים?', answer: 'פשוט לחצו על התחל' }
      ],
      button1Text: 'עזרה',
      button2Text: 'תמיכה'
    },
    finalCta: {
      title: 'מוכנים להתחיל?',
      description: 'הצטרפו אלינו עוד היום',
      button1Text: 'התחילו עכשיו',
      button2Text: 'צרו קשר'
    },
    contact: {
      title: 'צרו קשר',
      buttonText: 'שלחו הודעה'
    },
    footer: {
      companyName: 'החברה שלכם'
    },
    styles: {
      backgroundColor: '#1a1a1a',
      heroBackground: '#2a2a2a',
      emotionalBackground: '#1f1f1f',
      featuresBackground: '#2a2a2a',
      testimonialsBackground: '#1f1f1f',
      aboutBackground: '#2a2a2a',
      pricingBackground: '#1f1f1f',
      faqBackground: '#2a2a2a',
      finalCtaBackground: '#1f1f1f',
      contactBackground: '#2a2a2a',
      footerBackground: '#1a1a1a',
      textColor: '#ffffff',
      primaryColor: '#FFD700',
      secondaryColor: '#FFA500',
      accentColor: '#FFED4E'
    }
  },

  // ===== EXCLUSIVE TEMPLATES - אקסלוסיביות ₪149.90 =====
  {
    id: 'exclusive-tech-titan',
    name: 'Tech Titan Exclusive',
    category: 'exclusive',
    hero: {
      title: 'המהפכה הטכנולוגית הבאה',
      subtitle: 'פתרונות AI מתקדמים לעסקים חכמים',
      description: 'הצטרפו לעתיד הבינה המלאכותית עם הפלטformה המתקדמת ביותר בעולם',
      button1Text: 'התחילו עכשיו',
      button2Text: 'צפו בדמו'
    },
    emotional: {
      title: 'עתיד הטכנולוגיה כאן',
      description: 'בינה מלאכותית שתשנה את העולם',
      button1Text: 'גלו עוד',
      button2Text: 'התחילו היום'
    },
    about: {
      title: 'מי אנחנו',
      description: 'מובילים בתחום הבינה המלאכותית',
      button1Text: 'הסיפור שלנו',
      button2Text: 'הצוות'
    },
    features: {
      title: 'התכונות שלנו',
      items: [
        { title: 'AI מתקדם', description: 'בינה מלאכותית ברמה חדשה', icon: 'brain-line' },
        { title: 'אבטחה מקסימלית', description: 'נתונים מוגנים ברמה גבוהה', icon: 'shield-line' }
      ],
      button1Text: 'כל התכונות',
      button2Text: 'התחילו'
    },
    testimonials: {
      title: 'לקוחות מרוצים',
      testimonials: [
        { name: 'דני כהן', role: 'מנכ"ל', content: 'פתרונות מדהימים', rating: 5 }
      ],
      button1Text: 'עוד עדויות',
      button2Text: 'הצטרפו'
    },
    pricing: {
      title: 'מחירים',
      plans: [
        { name: 'בסיסי', price: '₪299', period: 'חודש', features: ['תכונה 1'], buttonText: 'בחרו' }
      ],
      button1Text: 'השוו',
      button2Text: 'יעוץ'
    },
    faq: {
      title: 'שאלות נפוצות',
      questions: [
        { question: 'איך זה עובד?', answer: 'זה פשוט' }
      ],
      button1Text: 'עוד שאלות',
      button2Text: 'צרו קשר'
    },
    finalCta: {
      title: 'התחילו היום',
      description: 'אל תחכו יותר',
      button1Text: 'התחילו',
      button2Text: 'למדו עוד'
    },
    contact: {
      title: 'צרו קשר',
      subtitle: 'נשמח לעזור',
      buttonText: 'שלחו הודעה'
    },
    footer: {
      companyName: 'Tech Titan'
    },
    styles: {
      backgroundColor: '#000000',
      heroBackground: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
      emotionalBackground: 'linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold-light)) 100%)',
      featuresBackground: '#111111',
      testimonialsBackground: '#000000',
      aboutBackground: '#1a1a1a',
      pricingBackground: '#111111',
      faqBackground: '#000000',
      finalCtaBackground: 'linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--silver)) 100%)',
      contactBackground: '#1a1a1a',
      footerBackground: '#000000',
      textColor: 'hsl(var(--foreground))',
      primaryColor: 'hsl(var(--gold))',
      secondaryColor: 'hsl(var(--silver))',
      accentColor: 'hsl(var(--gold-light))'
    },
    effects: {
      hero: 'holographic',
      features: 'cosmic-geometry'
    }
  },

  // ===== PREMIUM TEMPLATES - פרימיום ₪119.90 =====
  // Premium Template 1 - Tech Consulting (inspired by first image)
  {
    id: 'tech-consultant-pro',
    name: 'Tech Consultant Pro',
    category: 'premium',
    hero: {
      title: 'ייעוץ מקצועי לאפליקציות ותוכנה',
      subtitle: 'המומחים המובילים בפיתוח ופריסת פתרונות טכנולוגיים',
      description: 'אנחנו מתמחים בקידוד ופתרונות פריסה מתקדמים שיקחו את הפרויקט שלכם לרמה הבאה',
      button1Text: 'בואו נתחיל',
      button2Text: 'צפה במקרי בוחן'
    },
    emotional: {
      title: 'פשוט הטוב ביותר עבור הפרויקט שלך',
      description: 'הצטרפו לחברות הטכנולוגיה המובילות שבחרו בנו כשותפים לפיתוח',
      button1Text: 'גלה איך',
      button2Text: 'קבל ייעוץ חינם'
    },
    about: {
      title: 'הדברים שאנחנו עושים עבורכם',
      description: 'פיתוח מותאם אישית, אינטגרציות מתקדמות וליווי מקצועי לאורך כל הדרך',
      button1Text: 'כל השירותים',
      button2Text: 'פגוש את הצוות'
    },
    features: {
      title: 'הפתרונות שלנו',
      items: [
        { title: 'קוד כללי', description: 'פיתוח מותאם לכל פלטפורמה', icon: 'code-line' },
        { title: 'מערכות קוד', description: 'ארכיטקטורה מתקדמת ויציבה', icon: 'database-line' },
        { title: 'DevOps', description: 'פריסה אוטומטית ומתקדמת', icon: 'server-line' },
        { title: 'ייעוץ אג\'יל', description: 'מתודולוגיות עבודה מתקדמות', icon: 'refresh-line' }
      ],
      button1Text: 'למד עוד',
      button2Text: 'התחל פרויקט'
    },
    testimonials: {
      title: 'אל תקח רק את המילה שלי על זה',
      testimonials: [
        { name: 'יוסי כהן', role: 'CTO סטארט-אפ', content: 'הצוות הזה פשוט יוצא מן הכלל, פתרו לנו בעיות מורכבות תוך זמן קצר', rating: 5 },
        { name: 'שרה לוי', role: 'מנהלת מוצר', content: 'ליווי מקצועי ופתרונות יצירתיים שהובילו להצלחה גדולה', rating: 5 }
      ],
      button1Text: 'עוד עדויות',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      title: 'תהליך מוכח להצלחה',
      plans: [
        { 
          name: 'פרויקט בסיסי', 
          price: '₪15,000', 
          period: 'פרויקט',
          features: ['ייעוץ ותכנון', 'פיתוח MVP', 'בדיקות איכות', 'פריסה בסיסית'],
          buttonText: 'צור קשר'
        },
        { 
          name: 'פרויקט מתקדם', 
          price: '₪35,000', 
          period: 'פרויקט',
          features: ['ייעוץ מתקדם', 'פיתוח מלא', 'אינטגרציות', 'DevOps מלא', 'תמיכה 6 חודשים'],
          buttonText: 'בחר תוכנית',
          recommended: true
        }
      ],
      button1Text: 'השווה תוכניות',
      button2Text: 'בקש הצעת מחיר'
    },
    contact: {
      title: 'צור איתנו קשר',
      subtitle: 'מוכנים להתחיל את הפרויקט הבא שלכם?',
      buttonText: 'שלח הודעה'
    },
    faq: {
      title: 'שאלות נפוצות',
      questions: [
        { question: 'כמה זמן לוקח פרויקט ממוצע?', answer: 'פרויקט ממוצע לוקח בין 3-6 חודשים, תלוי במורכבות ובדרישות הלקוח' },
        { question: 'איך מתבצע התשלום?', answer: 'התשלום מתבצע בשלבים לפי אבני דרך בפרויקט, עם מקדמה של 30%' }
      ],
      button1Text: 'שאלות נוספות',
      button2Text: 'דבר איתנו'
    },
    finalCta: {
      title: 'מוכנים לקחת את הפרויקט שלכם לרמה הבאה?',
      description: 'הצטרפו לעשרות לקוחות מרוצים שבחרו בפתרונות הטכנולוגיים שלנו',
      button1Text: 'בואו נתחיל',
      button2Text: 'קבל הצעת מחיר'
    },
    footer: {
      companyName: 'Tech Consultant Pro'
    },
    styles: {
      backgroundColor: '#0a0a0a',
      heroBackground: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b2e 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ff6b6b 0%, #ffa8a8 100%)',
      featuresBackground: '#111111',
      testimonialsBackground: '#0a0a0a',
      aboutBackground: '#1a1a1a',
      pricingBackground: '#111111',
      faqBackground: '#0a0a0a',
      finalCtaBackground: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
      contactBackground: '#1a1a1a',
      footerBackground: '#000000',
      textColor: '#ffffff',
      primaryColor: '#ff6b6b',
      secondaryColor: '#ff8e8e',
      accentColor: '#ffa8a8'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'morphing-shapes',
      features: 'neon-grid-portal',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'cosmic-geometry',
      faq: 'glass-refraction',
      finalCta: 'liquid-metal',
      contact: 'minimal-tech'
    }
  },

  // Premium Template 2 - Neon Education (inspired by second image)
  {
    id: 'neon-academy-pro',
    name: 'Neon Academy Pro',
    category: 'premium',
    hero: {
      title: 'גלה את הכוח שמחבא בתוכך',
      subtitle: 'קורסים דיגיטליים מתקדמים שישנו את הקריירה שלך לעד',
      description: 'הצטרף לאלפי תלמידים שכבר שדרגו את הכישורים שלהם והגיעו לרמות חדשות של הצלחה מקצועית',
      button1Text: 'התחל להתפתח',
      button2Text: 'צפה בתוכנית הלימודים'
    },
    emotional: {
      title: 'מה שאתה תלמד כאן',
      description: 'כישורים מתקדמים, כלים מקצועיים ידע שיקח אותך הרבה קדימה בקריירה',
      button1Text: 'רוצה להשתתף',
      button2Text: 'למד עוד'
    },
    about: {
      title: 'המסע שלך מתחיל כאן',
      description: 'אנחנו מספקים חוויית למידה דיגיטלית מהפכנית עם מנטורים מקצועיים ותוכן מעודכן',
      button1Text: 'הסיפור שלנו',
      button2Text: 'פגוש את המרצים'
    },
    features: {
      title: 'למה הקורס הזה שונה',
      items: [
        { title: 'למידה אינטראקטיבית', description: 'תרגול מעשי על פרויקטים אמיתיים', icon: 'play-circle-line' },
        { title: 'מנטורים מקצועיים', description: 'ליווי אישי של מומחים בתחום', icon: 'user-star-line' },
        { title: 'תעודת הסמכה', description: 'תעודה מוכרת בתעשייה', icon: 'award-line' },
        { title: 'קהילת בוגרים', description: 'רשת מקצועית חזקה לקידום קריירה', icon: 'team-line' }
      ],
      button1Text: 'כל היתרונות',
      button2Text: 'הירשם עכשיו'
    },
    testimonials: {
      title: 'סיפורי הצלחה של הבוגרים',
      testimonials: [
        { name: 'מיכל רוזן', role: 'מפתחת Full Stack', content: 'הקורס שינה לי את החיים! מתכנתת מתחילה לתפקיד בכיר בחברת הייטק', rating: 5 },
        { name: 'דני שלום', role: 'UX Designer', content: 'התוכן המעשי והמנטורינג האישי עזרו לי לעשות מעבר קריירה מוצלח', rating: 5 }
      ],
      button1Text: 'עוד סיפורים',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      title: 'תוכניות הלימוד שלנו',
      plans: [
        { 
          name: 'תוכנית בסיסית', 
          price: '₪1,200', 
          period: 'חודש',
          features: ['גישה לכל הקורסים', 'מנטורינג קבוצתי', 'פרויקטים מעשיים', 'תעודת סיום'],
          buttonText: 'התחל עכשיו'
        },
        { 
          name: 'תוכנית פרימיום', 
          price: '₪2,400', 
          period: 'חודש',
          features: ['כל התכנים', 'מנטור אישי', 'פרויקט גמר', 'תעודת הסמכה', 'שיבוץ עבודה'],
          buttonText: 'בחר תוכנית',
          recommended: true
        }
      ],
      button1Text: 'השווה תוכניות',
      button2Text: 'יעוץ אישי'
    },
    contact: {
      title: 'יש שאלות? בואו נדבר',
      subtitle: 'הצוות שלנו כאן כדי לעזור לך למצוא את התוכנית המתאימה',
      buttonText: 'צור קשר'
    },
    faq: {
      title: 'שאלות נפוצות',
      questions: [
        { question: 'האם צריך ידע קודם?', answer: 'לא! הקורסים מתחילים מהבסיס ומתקדמים בהדרגה לרמות מתקדמות' },
        { question: 'כמה זמן לוקח הקורס?', answer: 'הקורס נמשך 6 חודשים עם אפשרות להאריך בהתאם לקצב האישי' }
      ],
      button1Text: 'עוד שאלות',
      button2Text: 'דבר עם יועץ'
    },
    finalCta: {
      title: 'הזמן שלך הגיע',
      description: 'אל תחכה יותר - התחל את המסע שלך לקריירה חדשה כבר היום',
      button1Text: 'הירשם עכשיו',
      button2Text: 'שמור מקום'
    },
    footer: {
      companyName: 'Neon Academy Pro'
    },
    styles: {
      backgroundColor: '#0a0f1c',
      heroBackground: 'linear-gradient(135deg, #0a0f1c 0%, #1a2b3d 100%)',
      emotionalBackground: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
      featuresBackground: '#111827',
      testimonialsBackground: '#0a0f1c',
      aboutBackground: '#1a2b3d',
      pricingBackground: '#111827',
      faqBackground: '#0a0f1c',
      finalCtaBackground: 'linear-gradient(135deg, #00d4ff 0%, #00b3e6 100%)',
      contactBackground: '#1a2b3d',
      footerBackground: '#000000',
      textColor: '#ffffff',
      primaryColor: '#00d4ff',
      secondaryColor: '#0099cc',
      accentColor: '#33ddff'
    },
    effects: {
      hero: 'neon-grid-portal',
      emotional: 'digital-waves',
      features: 'holographic',
      testimonials: 'neon-grid-portal',
      about: 'quantum-bubbles',
      pricing: 'digital-waves',
      faq: 'holographic',
      finalCta: 'liquid-metal',
      contact: 'neon-grid-portal'
    }
  },

  // Premium Template 3 - Blockchain Tech (inspired by third image)
  {
    id: 'blockchain-tech-pro',
    name: 'Blockchain Tech Pro',
    category: 'premium',
    hero: {
      title: 'משחררים את הכוח של הבלוקצ\'יין',
      subtitle: 'טכנולוגיה מתקדמת שמשנה תעשיות עם פתרונות מאובטחים ומבוזרים',
      description: 'פלטפורמה חדשנית המציעה פתרונות בלוקצ\'יין מתקדמים לעסקים המחפשים חדשנות וביטחון',
      button1Text: 'התחל עם הבלוקצ\'יין',
      button2Text: 'גלה איך זה עובד'
    },
    emotional: {
      title: 'למה בלוקצ\'יין?',
      description: 'הבלוקצ\'יין מגדיר מחדש את הכללים בעולם הדיגיטלי - זה למה זה חשוב',
      button1Text: 'למד עוד',
      button2Text: 'התחל מסע'
    },
    about: {
      title: 'למה הבלוקצ\'יין חשוב',
      description: 'הבלוקצ\'יין מהפכה את האופן בו אנחנו מטפלים בנתונים, עסקאות ואמון באמצעות מערכות מבוזרות',
      button1Text: 'קרא עוד',
      button2Text: 'הטכנולוגיה שלנו'
    },
    features: {
      title: 'היתרונות שלנו',
      items: [
        { title: 'ביזור מלא', description: 'אין ישות אחת שמשלטת במערכת', icon: 'share-line' },
        { title: 'אבטחה מקסימלית', description: 'הצפנה מתקדמה עמידה בפני חדירות', icon: 'shield-line' },
        { title: 'שקיפות מלאה', description: 'עסקאות פומביות ונגישות לכולם', icon: 'eye-line' },
        { title: 'יעילות גבוהה', description: 'תהליכים חסכוניים ומהירים', icon: 'flashlight-line' }
      ],
      button1Text: 'כל היתרונות',
      button2Text: 'נסה עכשיו'
    },
    testimonials: {
      title: 'לקוחות מרוצים',
      testimonials: [
        { name: 'אבי טכנולוגיות', role: 'CTO חברת פינטק', content: 'הפתרון הבלוקצ\'יין שלהם שדרג לנו את האבטחה וההתנהלות העסקית', rating: 5 },
        { name: 'שרה דיגיטל', role: 'מנהלת מוצר', content: 'יישום מהיר ויעיל שחסך לנו זמן רב ועלויות גבוהות', rating: 5 }
      ],
      button1Text: 'עוד עדויות',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      title: 'תוכניות המחיר שלנו',
      plans: [
        { 
          name: 'תוכנית מתחילים', 
          price: '₪199', 
          period: 'חודש',
          features: ['גישה לרשת הבלוקצ\'יין', 'מדריכים בסיסיים', 'תמיכה טכנית'],
          buttonText: 'התחל עכשיו'
        },
        { 
          name: 'תוכנית מתקדמת', 
          price: '₪349', 
          period: 'חודש',
          features: ['כל התוכן למתחילים', 'ידע מתקדם בבלוקצ\'יין', 'פיתוח חוזים חכמים'],
          buttonText: 'בחר תוכנית',
          recommended: true
        },
        { 
          name: 'תוכנית מקצועית', 
          price: '₪495', 
          period: 'חודש',
          features: ['כל התוכן', 'כלים מתקדמים ותובנות', 'ייעוץ אישי'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'השווה תוכניות',
      button2Text: 'יעוץ מותאם'
    },
    contact: {
      title: 'צור איתנו קשר',
      subtitle: 'מוכנים להתחיל את המסע שלכם בעולם הבלוקצ\'יין?',
      buttonText: 'בואו נתחיל'
    },
    faq: {
      title: 'שאלות נפוצות',
      questions: [
        { question: 'מה זה בלוקצ\'יין?', answer: 'בלוקצ\'יין היא מסד נתונים מבוזר המאפשר שמירה מאובטחת של מידע ללא צורך בגורם מתווך' },
        { question: 'האם זה בטוח?', answer: 'כן, הבלוקצ\'יין משתמש בהצפנה מתקדמת וביזור שהופכים אותו לאחד הפתרונות הבטוחים ביותר' }
      ],
      button1Text: 'מדריך למתחילים',
      button2Text: 'תמיכה טכנית'
    },
    finalCta: {
      title: 'התחל את העתיד היום',
      description: 'הצטרף לחברות המובילות שכבר מנצלות את הכוח של הבלוקצ\'יין',
      button1Text: 'התחל עכשיו',
      button2Text: 'קבל הדגמה'
    },
    footer: {
      companyName: 'Blockchain Tech Pro'
    },
    styles: {
      backgroundColor: '#0a0a0f',
      heroBackground: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
      emotionalBackground: 'linear-gradient(135deg, #00b4d8 0%, #0077b6 100%)',
      featuresBackground: '#111122',
      testimonialsBackground: '#0a0a0f',
      aboutBackground: '#1a1a2e',
      pricingBackground: '#111122',
      faqBackground: '#0a0a0f',
      finalCtaBackground: 'linear-gradient(135deg, #00b4d8 0%, #0096c7 100%)',
      contactBackground: '#1a1a2e',
      footerBackground: '#000000',
      textColor: '#ffffff',
      primaryColor: '#00b4d8',
      secondaryColor: '#0077b6',
      accentColor: '#48cae4'
    },
    effects: {
      hero: 'cosmic-geometry',
      emotional: 'quantum-bubbles',
      features: 'crystal-matrix',
      testimonials: 'digital-waves',
      about: 'holographic',
      pricing: 'neon-grid-portal',
      faq: 'cosmic-geometry',
      finalCta: 'liquid-metal',
      contact: 'quantum-bubbles'
    }
  },
  {
    id: 'cyber-flow',
    name: 'CyberFlow',
    category: 'טכנולוגיה',
    hero: {
      title: 'העתיד של הטכנולוגיה כאן',
      subtitle: 'חוויה דיגיטלית מהפכנית שתשנה את הדרך בה אתם עובדים',
      description: 'פלטפורמת הסייבר המתקדמת ביותר לעסקים המחפשים לחדש ולהוביל בתחום הטכנולוגיה',
      button1Text: 'גלה עכשיו',
      button2Text: 'צפה בדמו'
    },
    emotional: {
      title: 'היכנס לעידן הסייבר החדש',
      description: 'טכנולוגיה שתשנה את העתיד ותוביל אותך לחדשנות ללא גבולות',
      button1Text: 'התחל מסע',
      button2Text: 'למד עוד'
    },
    about: {
      title: 'החזון שלנו',
      description: 'אנחנו יוצרים את העתיד הדיגיטלי עם פתרונות מתקדמים המבוססים על טכנולוגיות פורצות דרך',
      button1Text: 'קרא עוד',
      button2Text: 'הצוות שלנו'
    },
    features: {
      title: 'תכונות מתקדמות',
      items: [
        { title: 'בינה מלאכותית', description: 'טכנולוגיית AI מתקדמת', icon: 'brain-line' },
        { title: 'אוטומציה מלאה', description: 'תהליכים אוטומטיים חכמים', icon: 'settings-line' },
        { title: 'ניתוח נתונים', description: 'תובנות עמוקות מהנתונים שלך', icon: 'bar-chart-line' }
      ],
      button1Text: 'גלה יכולות',
      button2Text: 'נסה עכשיו'
    },
    testimonials: {
      title: 'לקוחות מרוצים',
      testimonials: [
        { name: 'שרה לוי', role: 'מנהלת פיתוח', content: 'טכנולוגיה מהפכנית שחסכה לנו זמן רב והגדילה את היעילות', rating: 5 }
      ],
      button1Text: 'עוד סיפורים',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      title: 'תוכניות מחיר',
      plans: [
        { 
          name: 'פרו', 
          price: '₪199', 
          period: 'חודש',
          features: ['AI מתקדם', 'אוטומציה', 'תמיכה VIP'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'השווה מחירים',
      button2Text: 'יצירת קשר'
    },
    contact: {
      title: 'בואו נתחבר',
      subtitle: 'מוכנים להיכנס לעידן הסייבר החדש?',
      buttonText: 'יצירת קשר'
    },
    faq: {
      title: 'שאלות ותשובות',
      questions: [
        { question: 'מה זה CyberFlow?', answer: 'פלטפורמה מתקדמת לאוטומציה וניהול עסקים בעידן הדיגיטלי' }
      ],
      button1Text: 'עוד שאלות',
      button2Text: 'תמיכה'
    },
    finalCta: {
      title: 'הצטרף למהפכה',
      description: 'הזמן להיכנס לעידן החדש של הטכנולוגיה',
      button1Text: 'התחל מסע',
      button2Text: 'קבל ייעוץ'
    },
    footer: {
      companyName: 'CyberFlow'
    },
    styles: {
      backgroundColor: '#0f0f23',
      heroBackground: '#1a1a2e',
      emotionalBackground: '#8b5cf6',
      featuresBackground: '#16213e',
      testimonialsBackground: '#0f0f23',
      aboutBackground: '#1a1a2e',
      pricingBackground: '#16213e',
      faqBackground: '#0f0f23',
      finalCtaBackground: '#7c3aed',
      contactBackground: '#1a1a2e',
      footerBackground: '#0a0a14',
      textColor: '#ffffff',
      primaryColor: '#8B5CF6',
      secondaryColor: '#7C3AED',
      accentColor: '#a78bfa'
    }
  },
  {
    id: 'quantum-edge',
    name: 'Quantum Edge',
    category: 'מדעי',
    hero: {
      title: 'מחשוב קוונטי לעסק שלך',
      subtitle: 'פתרונות מחשוב מתקדמים המבוססים על טכנולוגיה קוונטית',
      description: 'פריצת דרך בתחום המחשוב הקוונטי המביאה יכולות חישוב חדשות לעסק שלך',
      button1Text: 'חקור עכשיו',
      button2Text: 'המחקר שלנו'
    },
    emotional: {
      title: 'כנס לעידן הקוונטי',
      description: 'טכנולוגיית העתיד כבר כאן - מחשוב קוונטי שיפתח בפניך אפשרויות חדשות',
      button1Text: 'גלה עוד',
      button2Text: 'התחל מחקר'
    },
    about: {
      title: 'מי אנחנו',
      description: 'חברה מובילה בתחום המחשוב הקוונטי ופתרונות עסקיים מתקדמים המבוססים על עקרונות הפיזיקה הקוונטית',
      button1Text: 'הסיפור שלנו',
      button2Text: 'הצוות המדעי'
    },
    features: {
      title: 'יכולות קוונטיות',
      items: [
        { title: 'מחשוב קוונטי', description: 'עוצמת חישוב שלא הכרתם', icon: 'cpu-line' },
        { title: 'אלגוריתמים מתקדמים', description: 'פתרונות מתמטיים מהפכניים', icon: 'function-line' },
        { title: 'הצפנה קוונטית', description: 'אבטחה ברמה הגבוהה ביותר', icon: 'shield-line' }
      ],
      button1Text: 'מדע וטכנולוגיה',
      button2Text: 'התחל עכשיו'
    },
    testimonials: {
      title: 'מה המדענים אומרים',
      testimonials: [
        { name: 'פרופ\' יוסי כהן', role: 'חוקר בכיר', content: 'פריצת דרך בתחום המחשוב הקוונטי שמובילה לחדשנות מדעית', rating: 5 }
      ],
      button1Text: 'מחקרים נוספים',
      button2Text: 'הצטרף למחקר'
    },
    pricing: {
      title: 'חבילות מחקר',
      plans: [
        { 
          name: 'אקדמי', 
          price: '₪499', 
          period: 'חודש',
          features: ['גישה למעבדות', 'תמיכת מחקר', 'פרסומים'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'תוכניות מחקר',
      button2Text: 'ייעוץ אקדמי'
    },
    contact: {
      title: 'צור קשר מדעי',
      subtitle: 'מעוניין בשיתוף מחקרי או יישום עסקי?',
      buttonText: 'פנה אלינו'
    },
    faq: {
      title: 'שאלות מדעיות',
      questions: [
        { question: 'מה זה מחשוב קוונטי?', answer: 'טכנולוגיה מתקדמת המבוססת על עקרונות הפיזיקה הקוונטית המאפשרת חישובים מורכבים' }
      ],
      button1Text: 'מדריך מדעי',
      button2Text: 'שאל מומחה'
    },
    finalCta: {
      title: 'כנס לעידן הקוונטי',
      description: 'הצטרף למהפכת המחשוב הקוונטי וקח חלק בעיצוב העתיד',
      button1Text: 'התחל מחקר',
      button2Text: 'קבל ייעוץ'
    },
    footer: {
      companyName: 'Quantum Edge'
    },
    styles: {
      backgroundColor: '#ffffff',
      heroBackground: '#ecfdf5',
      emotionalBackground: '#10b981',
      featuresBackground: '#f0fdf4',
      testimonialsBackground: '#ffffff',
      aboutBackground: '#ecfdf5',
      pricingBackground: '#f0fdf4',
      faqBackground: '#ffffff',
      finalCtaBackground: '#059669',
      contactBackground: '#ecfdf5',
      footerBackground: '#064e3b',
      textColor: '#064e3b',
      primaryColor: '#10B981',
      secondaryColor: '#059669',
      accentColor: '#34d399'
    }
  },
  {
    id: 'digital-genesis',
    name: 'Digital Genesis',
    category: 'יצירתי',
    hero: {
      title: 'בראשית הדיגיטל החדש',
      subtitle: 'יוצרים חוויות דיגיטליות מהפכניות שמגדירות מחדש את המציאות',
      description: 'סטודיו דיגיטלי יצירתי המתמחה ביצירת חוויות ויזואליות מדהימות ופתרונות עיצוב חדשניים',
      button1Text: 'צור עכשיו',
      button2Text: 'הגלריה שלנו'
    },
    emotional: {
      title: 'הגשם את החזון היצירתי שלך',
      description: 'עיצוב שמדבר, יוצר ומשפיע - נביא את הרעיונות שלך לחיים בצורה מדהימה',
      button1Text: 'התחל ליצור',
      button2Text: 'השראה'
    },
    about: {
      title: 'הסיפור שלנו',
      description: 'סטודיו דיגיטלי המתמחה ביצירת חוויות ויזואליות מדהימות ופתרונות עיצוב שמשאירים רושם',
      button1Text: 'הסיפור המלא',
      button2Text: 'היוצרים'
    },
    features: {
      title: 'כוחות יצירתיים',
      items: [
        { title: 'עיצוב חדשני', description: 'עיצובים שמדברים לנשמה', icon: 'palette-line' },
        { title: 'אנימציה מתקדמת', description: 'תנועה שמחיה את הרעיונות', icon: 'play-circle-line' },
        { title: 'חוויית משתמש', description: 'ממשקים אינטואיטיביים ויפים', icon: 'user-line' }
      ],
      button1Text: 'הפורטפוליו',
      button2Text: 'התחל פרויקט'
    },
    testimonials: {
      title: 'יצירות מוערכות',
      testimonials: [
        { name: 'מיכל רוזן', role: 'מנהלת אמנותית', content: 'יצירה דיגיטלית שמבטאת את החזון שלנו בצורה מושלמת ומעבירה את המסר בדיוק', rating: 5 }
      ],
      button1Text: 'עוד יצירות',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      title: 'חבילות יצירה',
      plans: [
        { 
          name: 'יוצר', 
          price: '₪299', 
          period: 'פרויקט',
          features: ['עיצוב מותאם', 'אנימציות', 'תמיכה יצירתית'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'חבילות מותאמות',
      button2Text: 'ייעוץ יצירתי'
    },
    contact: {
      title: 'בואו ניצור ביחד',
      subtitle: 'מוכנים להפוך את הרעיון שלכם למציאות דיגיטלית מדהימה?',
      buttonText: 'בואו ניצור'
    },
    faq: {
      title: 'שאלות יצירתיות',
      questions: [
        { question: 'איך מתחיל תהליך יצירה?', answer: 'אנחנו מתחילים בשיחה על החזון שלכם ובונים משם את הפרויקט צעד אחר צעד' }
      ],
      button1Text: 'תהליך היצירה',
      button2Text: 'שאל אותנו'
    },
    finalCta: {
      title: 'הגשם את החלום',
      description: 'הזמן להפוך את הרעיונות שלך למציאות דיגיטלית מרהיבה',
      button1Text: 'בוא ניצור',
      button2Text: 'קבל הצעה'
    },
    footer: {
      companyName: 'Digital Genesis'
    },
    styles: {
      backgroundColor: '#fffbeb',
      heroBackground: '#fef3c7',
      emotionalBackground: '#f59e0b',
      featuresBackground: '#fef9e7',
      testimonialsBackground: '#fffbeb',
      aboutBackground: '#fef3c7',
      pricingBackground: '#fef9e7',
      faqBackground: '#fffbeb',
      finalCtaBackground: '#d97706',
      contactBackground: '#fef3c7',
      footerBackground: '#92400e',
      textColor: '#92400e',
      primaryColor: '#F59E0B',
      secondaryColor: '#D97706',
      accentColor: '#fbbf24'
    }
  },
  {
    id: 'phoenix-rise',
    name: 'Phoenix Rise',
    category: 'עסקי',
    hero: {
      title: 'קום וזרח כמו עוף החול',
      subtitle: 'פתרונות עסקיים שמעצימים חברות לצמוח ולהצליח בעידן הדיגיטלי',
      description: 'חברת ייעוץ עסקי המתמחה בהתחדשות עסקית ומובילה חברות לשיאים חדשים של הצלחה',
      button1Text: 'קום וזרח',
      button2Text: 'סיפורי הצלחה'
    },
    emotional: {
      title: 'הזמן שלך לקום ולזרוח',
      description: 'כל עסק יכול לקום מחדש ולהגיע לגבהים חדשים - בואו נעזור לכם במסע ההתחדשות',
      button1Text: 'התחל מסע',
      button2Text: 'ייעוץ חינם'
    },
    about: {
      title: 'המסע שלנו',
      description: 'אנחנו עוזרים לעסקים לקום מחדש ולהגיע לגבהים חדשים באמצעות אסטרטגיות מתקדמות וליווי מקצועי',
      button1Text: 'הדרך שלנו',
      button2Text: 'הצוות'
    },
    features: {
      title: 'כנפי הצמיחה',
      items: [
        { title: 'אסטרטגיה עסקית', description: 'תוכניות מותאמות לצמיחה', icon: 'target-line' },
        { title: 'טרנספורמציה דיגיטלית', description: 'מעבר חלק לעידן הדיגיטלי', icon: 'refresh-line' },
        { title: 'ליווי מקצועי', description: 'תמיכה בכל שלב של המסע', icon: 'handshake-line' }
      ],
      button1Text: 'שירותים',
      button2Text: 'התחל עכשיו'
    },
    testimonials: {
      title: 'סיפורי התחדשות',
      testimonials: [
        { name: 'אבי גולד', role: 'מנכ"ל', content: 'החברה שלנו קמה לתחייה והגיעה לשיאים חדשים בזכות הליווי המקצועי', rating: 5 }
      ],
      button1Text: 'עוד סיפורים',
      button2Text: 'הצטרף למסע'
    },
    pricing: {
      title: 'תוכניות שינוי',
      plans: [
        { 
          name: 'התחדשות', 
          price: '₪599', 
          period: 'חודש',
          features: ['ייעוץ אסטרטגי', 'ליווי צמוד', 'דוחות התקדמות'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'תוכניות מותאמות',
      button2Text: 'ייעוץ אישי'
    },
    contact: {
      title: 'בוא נתחיל מסע',
      subtitle: 'מוכנים להתחדש ולהגיע לגבהים חדשים?',
      buttonText: 'התחל מסע'
    },
    faq: {
      title: 'שאלות על התחדשות',
      questions: [
        { question: 'כמה זמן לוקח תהליך השינוי?', answer: 'כל עסק הוא ייחודי, אבל בדרך כלל רואים תוצאות תוך 3-6 חודשים' }
      ],
      button1Text: 'מדריך התחדשות',
      button2Text: 'שאל יועץ'
    },
    finalCta: {
      title: 'זמן לקום ולזרוח',
      description: 'הצטרף לעסקים שכבר קמו וזרחו איתנו - הזמן שלך הגיע',
      button1Text: 'התחל מסע',
      button2Text: 'קבל ייעוץ'
    },
    footer: {
      companyName: 'Phoenix Rise'
    },
    styles: {
      backgroundColor: '#fef2f2',
      heroBackground: '#fee2e2',
      emotionalBackground: '#ef4444',
      featuresBackground: '#fef7f7',
      testimonialsBackground: '#fef2f2',
      aboutBackground: '#fee2e2',
      pricingBackground: '#fef7f7',
      faqBackground: '#fef2f2',
      finalCtaBackground: '#dc2626',
      contactBackground: '#fee2e2',
      footerBackground: '#7f1d1d',
      textColor: '#7f1d1d',
      primaryColor: '#EF4444',
      secondaryColor: '#DC2626',
      accentColor: '#f87171'
    }
  },
  {
    id: 'stellar-stream',
    name: 'Stellar Stream',
    category: 'מדיה',
    hero: {
      title: 'זרם התוכן הכוכבי שלך',
      subtitle: 'פלטפורמת סטרימינג ותוכן מתקדמת שמביאה את הכוכבים אליך הביתה',
      description: 'פלטפורמת סטרימינג מתקדמת המציעה תוכן איכותי, חוויית צפייה מושלמת וטכנולוגיה חדשנית',
      button1Text: 'צפה עכשיו',
      button2Text: 'התוכן שלנו'
    },
    emotional: {
      title: 'הכוכבים מחכים לך',
      description: 'חוויית סטרימינג שתשנה את הדרך בה אתה צופה בתוכן - איכות, נוחות וחדשנות',
      button1Text: 'התחל לצפות',
      button2Text: 'גלה תוכן'
    },
    about: {
      title: 'הסטודיו שלנו',
      description: 'אנחנו יוצרים ומפיצים תוכן איכותי לכל המשפחה עם הטכנולוגיה המתקדמת ביותר בתחום הסטרימינג',
      button1Text: 'הסיפור שלנו',
      button2Text: 'הצוות'
    },
    features: {
      title: 'תכונות הזרמה',
      items: [
        { title: 'איכות 4K', description: 'חוויית צפייה בחדות מקסימלית', icon: 'monitor-line' },
        { title: 'תוכן מקורי', description: 'סדרות וסרטים בלעדיים', icon: 'film-line' },
        { title: 'צפייה אישית', description: 'המלצות מותאמות אישית', icon: 'user-heart-line' }
      ],
      button1Text: 'כל התכונות',
      button2Text: 'התחל לצפות'
    },
    testimonials: {
      title: 'צופים מרוצים',
      testimonials: [
        { name: 'רונית ברק', role: 'צופה קבועה', content: 'התוכן הכי טוב ברשת, איכות מעולה וחוויה מדהימה שמשפרת כל ערב', rating: 5 }
      ],
      button1Text: 'עוד ביקורות',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      title: 'מנויים',
      plans: [
        { 
          name: 'פרימיום', 
          price: '₪39', 
          period: 'חודש',
          features: ['תוכן בלעדי', '4K באיכות', 'ללא פרסומות'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'השווה מנויים',
      button2Text: 'מנוי משפחתי'
    },
    contact: {
      title: 'צור איתנו קשר',
      subtitle: 'יש לך שאלות או רוצה לדעת עוד על התוכן שלנו?',
      buttonText: 'צור קשר'
    },
    faq: {
      title: 'שאלות צפייה',
      questions: [
        { question: 'איך אני מתחיל לצפות?', answer: 'פשוט הירשם, בחר תוכנית ותתחיל לצפות מיד בכל המכשירים' }
      ],
      button1Text: 'מדריך למתחילים',
      button2Text: 'תמיכה טכנית'
    },
    finalCta: {
      title: 'התחל לצפות היום',
      description: 'הצטרף למיליוני צופים שכבר נהנים מהתוכן הכוכבי שלנו',
      button1Text: 'הירשם עכשיו',
      button2Text: 'צפייה חינם'
    },
    footer: {
      companyName: 'Stellar Stream'
    },
    styles: {
      backgroundColor: '#0f0f23',
      heroBackground: '#1e1b4b',
      emotionalBackground: '#8b5cf6',
      featuresBackground: '#312e81',
      testimonialsBackground: '#0f0f23',
      aboutBackground: '#1e1b4b',
      pricingBackground: '#312e81',
      faqBackground: '#0f0f23',
      finalCtaBackground: '#7c3aed',
      contactBackground: '#1e1b4b',
      footerBackground: '#0a0a0f',
      textColor: '#ffffff',
      primaryColor: '#8B5CF6',
      secondaryColor: '#7C3AED',
      accentColor: '#a78bfa'
    }
  },

  // Premium Template 4 - NFT Futuristic (inspired by fourth image)
  {
    id: 'nft-future-pro',
    name: 'NFT Future Pro',
    category: 'premium',
    hero: {
      title: 'אסוף את דור העתיד של NFTs היום',
      subtitle: 'הפלטפורמה המובילה לנכסים דיגיטליים שתוכל באמת להחזיק לעצמך',
      description: 'חווה את עתיד הקולקטיבים הדיגיטליים עם טכנולוגיה מתקדמת ועיצובים מהפכניים',
      button1Text: 'התחבר עכשיו',
      button2Text: 'גלה את האוסף'
    },
    emotional: {
      title: 'אוספי NFT באיכות מעולה',
      description: 'החוויה הכי מתקדמת בעולם הNFT עם אמנות דיגיטלית ייחודית ופלטפורמה טכנולוגית מובילה',
      button1Text: 'עוד אודותינו',
      button2Text: 'למד עוד'
    },
    about: {
      title: 'פתרונות מלאים לה-NFT שלך',
      description: 'אנחנו מציעים חוויה שלמה לאספנים ויוצרים בעולם הNFT המתפתח',
      button1Text: 'המומחיות שלנו',
      button2Text: 'הצוות'
    },
    features: {
      title: 'היכולות שלנו',
      items: [
        { title: 'אוסף ענק', description: 'אלפי NFTs ייחודיים באיכות גבוהה', icon: 'image-line' },
        { title: 'איכות מעולה', description: 'יצירות אמנות ברמה הגבוהה ביותר', icon: 'award-line' },
        { title: 'משאב עליון', description: 'כלים מתקדמים לניהול והשקעה', icon: 'bar-chart-line' },
        { title: 'קהילה גדולה', description: 'רשת של אספנים ויוצרים פעילים', icon: 'team-line' }
      ],
      button1Text: 'כל המידע',
      button2Text: 'רכוש עכשיו'
    },
    testimonials: {
      title: 'הפך לשחקן ב-Cyfonii עכשיו',
      testimonials: [
        { name: 'אלכס כהן', role: 'אספן NFT', content: 'הפלטפורמה הכי מתקדמת שראיתי, אוסף מדהים ותמיכה מעולה', rating: 5 },
        { name: 'מיה לוי', role: 'אמנית דיגיטלית', content: 'המקום המושלם להציג ולמכור את היצירות שלי לקהל רחב', rating: 5 }
      ],
      button1Text: 'עוד עדויות',
      button2Text: 'הצטרף עכשיו'
    },
    pricing: {
      title: 'תוכניות החברות',
      plans: [
        { 
          name: 'אספן מתחיל', 
          price: '₪0', 
          period: 'חודש',
          features: ['גישה לקטלוג', 'רכישות בסיסיות', 'ארנק דיגיטלי'],
          buttonText: 'הצטרף חינם'
        },
        { 
          name: 'אספן פרימיום', 
          price: '₪149', 
          period: 'חודש',
          features: ['כל התכנים', 'גישה מוקדמת', 'ייעוץ השקעות', 'אירועים בלעדיים'],
          buttonText: 'שדרג עכשיו',
          recommended: true
        }
      ],
      button1Text: 'השווה תוכניות',
      button2Text: 'יעוץ אישי'
    },
    contact: {
      title: 'צור איתנו קשר',
      subtitle: 'מוכנים להיכנס לעולם הNFT המתקדם?',
      buttonText: 'דבר איתנו'
    },
    faq: {
      title: 'שאלות נפוצות',
      questions: [
        { question: 'מה זה NFT?', answer: 'NFT הוא נכס דיגיטלי ייחודי שמאומת על הבלוקצ\'יין ומעניק בעלות בלעדית על תוכן דיגיטלי' },
        { question: 'איך קונים NFT?', answer: 'התהליך פשוט - פתח ארנק דיגיטלי, רכוש קריפטו ובחר את הNFT שמעניין אותך' }
      ],
      button1Text: 'מדריך למתחילים',
      button2Text: 'תמיכה'
    },
    finalCta: {
      title: 'התחל את המסע הדיגיטלי שלך',
      description: 'הצטרף לאלפי אספנים שכבר מגלים את העתיד של האמנות הדיגיטלית',
      button1Text: 'רכוש NFT ראשון',
      button2Text: 'גלה את האוסף'
    },
    footer: {
      companyName: 'NFT Future Pro'
    },
    styles: {
      backgroundColor: '#0a0a1f',
      heroBackground: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%)',
      emotionalBackground: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
      featuresBackground: '#1e1b4b',
      testimonialsBackground: '#0a0a1f',
      aboutBackground: '#312e81',
      pricingBackground: '#1e1b4b',
      faqBackground: '#0a0a1f',
      finalCtaBackground: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      contactBackground: '#312e81',
      footerBackground: '#000000',
      textColor: '#ffffff',
      primaryColor: '#8b5cf6',
      secondaryColor: '#7c3aed',
      accentColor: '#a78bfa'
    },
    effects: {
      hero: 'holographic',
      emotional: 'morphing-shapes',
      features: 'neon-grid-portal',
      testimonials: 'quantum-bubbles',
      about: 'liquid-metal',
      pricing: 'cosmic-geometry',
      faq: 'holographic',
      finalCta: 'digital-waves',
      contact: 'morphing-shapes'
    }
  },

  // Premium Template 5 - 3D Creative Agency (inspired by fifth image)
  {
    id: 'creative-3d-pro',
    name: 'Creative 3D Pro',
    category: 'premium',
    hero: {
      title: 'סוכנות עיצוב Web3',
      subtitle: 'נתונים טובים יותר מובילים לביצועים טובים יותר',
      description: 'מודלים ביצועיים מובילים לפיתוח מהיר יותר עם ניסיון שלא תשכחו',
      button1Text: 'התחל עכשיו',
      button2Text: 'הפורטפוליו שלנו'
    },
    emotional: {
      title: 'השירותים שלנו',
      description: 'מתמחים בפתרונות עיצוב מתקדמים לעידן הדיגיטלי החדש',
      button1Text: 'למד עוד',
      button2Text: 'פגוש את הצוות'
    },
    about: {
      title: 'עיצוב UI/UX',
      description: 'למידה מעשית ופרויקטים חדשניים, חסוך זמן R&D. קורס מעולה, ביקורת מעולה שבועית. הערכות מקצועיות של עיצוב UX שלך',
      button1Text: 'הסיפור שלנו',
      button2Text: 'הפרויקטים שלנו'
    },
    features: {
      title: 'הסטטיסטיקות שלנו',
      items: [
        { title: '5M+ לקוחות', description: 'מיליוני לקוחות מרוצים ברחבי העולם', icon: 'user-line' },
        { title: '450M+ כיסוי', description: 'הגעה לאוכלוסיות רחבות וגלובליות', icon: 'global-line' },
        { title: '22% רווח', description: 'גידול עקבי ברווחיות הלקוחות', icon: 'trending-up-line' },
        { title: '8.03% ריבית', description: 'תשואות מעולות על השקעות', icon: 'money-dollar-line' }
      ],
      button1Text: 'כל הנתונים',
      button2Text: 'בקש הצעה'
    },
    testimonials: {
      title: 'הלקוחות המרוצים שלנו',
      testimonials: [
        { name: 'רונן דיגיטל', role: 'מנכ"ל סטארט-אפ', content: 'העיצוב שיצרו לנו הוא פשוט מושלם, שדרג את כל חוויית המשתמש', rating: 5 },
        { name: 'לינה קריאייטיב', role: 'מנהלת שיווק', content: 'צוות מקצועי ויצירתי שהביא לנו תוצאות מעל הציפיות', rating: 5 }
      ],
      button1Text: 'עוד פרויקטים',
      button2Text: 'עבוד איתנו'
    },
    pricing: {
      title: 'חבילות העיצוב שלנו',
      plans: [
        { 
          name: 'עיצוב בסיסי', 
          price: '₪5,000', 
          period: 'פרויקט',
          features: ['UI/UX Design', 'עיצוב ממשק משתמש', 'עיצוב אפליקציות מובייל', 'עיצוב desktop'],
          buttonText: 'התחל פרויקט'
        },
        { 
          name: 'עיצוב מתקדם', 
          price: '₪12,000', 
          period: 'פרויקט',
          features: ['כל התכנים הבסיסיים', 'אנימציות ואינטראקציות', 'מערכת עיצוב שלמה', 'ייעוץ UX מתקדם'],
          buttonText: 'בחר תוכנית',
          recommended: true
        }
      ],
      button1Text: 'השווה חבילות',
      button2Text: 'ייעוץ מותאם'
    },
    contact: {
      title: 'בואו ניצור ביחד',
      subtitle: 'מוכנים להפוך את החזון שלכם למציאות עיצובית מדהימה?',
      buttonText: 'צור קשר'
    },
    faq: {
      title: 'שאלות נפוצות',
      questions: [
        { question: 'כמה זמן לוקח פרויקט עיצוב?', answer: 'פרויקט עיצוב ממוצע לוקח בין 4-8 שבועות, תלוי במורכבות ובהיקף הפרויקט' },
        { question: 'האם אתם עובדים עם חברות קטנות?', answer: 'בהחלט! אנחנו עובדים עם חברות בכל הגדלים, מסטארט-אפים ועד תאגידים' }
      ],
      button1Text: 'עוד שאלות',
      button2Text: 'יעוץ חינם'
    },
    finalCta: {
      title: 'מוכנים לעיצוב מהפכני?',
      description: 'הצטרפו לחברות מובילות שבחרו בנו ליצירת חוויות עיצוב מדהימות',
      button1Text: 'התחל פרויקט',
      button2Text: 'קבל הצעה'
    },
    footer: {
      companyName: 'Creative 3D Pro'
    },
    styles: {
      backgroundColor: '#0a0a0a',
      heroBackground: 'linear-gradient(135deg, #1a1a1a 0%, #2a1810 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      featuresBackground: '#111111',
      testimonialsBackground: '#0a0a0a',
      aboutBackground: '#1a1a1a',
      pricingBackground: '#111111',
      faqBackground: '#0a0a0a',
      finalCtaBackground: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
      contactBackground: '#1a1a1a',
      footerBackground: '#000000',
      textColor: '#ffffff',
      primaryColor: '#ff6b35',
      secondaryColor: '#f7931e',
      accentColor: '#ffb380'
    },
    effects: {
      hero: 'liquid-metal',
      emotional: 'morphing-shapes',
      features: 'isometric-illustration',
      testimonials: 'glass-refraction',
      about: 'cosmic-geometry',
      pricing: 'neon-grid-portal',
      faq: 'minimal-tech',
      finalCta: 'digital-waves',
      contact: 'holographic'
    }
  },

  // Premium Template 6 - Dark Tech Grid (inspired by sixth image)
  {
    id: 'authkit-tech-pro',
    name: 'AuthKit Tech Pro',
    category: 'premium',
    hero: {
      title: 'מציגים AuthKit',
      subtitle: 'תיבת הלוגין הטובה בעולם, מופעלת על ידי טכנולוגיה מתקדמת',
      description: 'פלטפורמה טכנולוגית מתקדמת לאימות ואבטחה דיגיטלית ברמה הגבוהה ביותר',
      button1Text: 'התחל עכשיו',
      button2Text: 'צפה בתיעוד'
    },
    emotional: {
      title: 'כל מה שאתה צריך. סוללות כלולות',
      description: 'פתרון שלם ומלא לכל הצרכים הטכנולוגיים שלך עם תמיכה מקצועית',
      button1Text: 'גלה עוד',
      button2Text: 'דוגמאות שימוש'
    },
    about: {
      title: 'התכונות המתקדמות שלנו',
      description: 'מערכת אימות מושלמת עם כל הכלים הדרושים לפיתוח מהיר ובטוח',
      button1Text: 'המפרט הטכני',
      button2Text: 'התיעוד המלא'
    },
    features: {
      title: 'היכולות הטכניות',
      items: [
        { title: 'כניסה יחידה', description: 'מערכת SSO מתקדמת ומאובטחת', icon: 'fingerprint-line' },
        { title: 'ניהול סיסמאות', description: 'פתרון מתקדם לניהול סיסמאות', icon: 'lock-password-line' },
        { title: 'אימות דו-שלבי', description: 'אבטחה מרבית עם MFA', icon: 'shield-check-line' },
        { title: 'כניסה חברתית', description: 'אינטגרציה עם פלטפורמות גדולות', icon: 'share-line' },
        { title: 'זיהוי ביומטרי', description: 'טכנולוגיית זיהוי מתקדמת', icon: 'fingerprint-2-line' },
        { title: 'קישור קסם', description: 'כניסה ללא סיסמה בקליק אחד', icon: 'magic-line' }
      ],
      button1Text: 'כל התכונות',
      button2Text: 'התחל אינטגרציה'
    },
    testimonials: {
      title: 'מפתחים מרוצים',
      testimonials: [
        { name: 'אור טכנולוגיות', role: 'Lead Developer', content: 'מערכת האימות הכי טובה ופשוטה לשימוש שעבדתי איתה אי פעם', rating: 5 },
        { name: 'רונן פרוטוקול', role: 'Security Engineer', content: 'רמת האבטחה והקלות בהטמעה פשוט מעולים', rating: 5 }
      ],
      button1Text: 'עוד ביקורות',
      button2Text: 'הצטרף לקהילה'
    },
    pricing: {
      title: 'תוכניות המחיר שלנו',
      plans: [
        { 
          name: 'מפתח', 
          price: '₪0', 
          period: 'חודש',
          features: ['עד 1,000 משתמשים', 'אימות בסיסי', 'תיעוד מלא', 'תמיכה קהילתית'],
          buttonText: 'התחל חינם'
        },
        { 
          name: 'מקצועי', 
          price: '₪99', 
          period: 'חודש',
          features: ['עד 10,000 משתמשים', 'כל התכונות', 'תמיכה מקצועית', 'SLA מובטח'],
          buttonText: 'בחר תוכנית',
          recommended: true
        },
        { 
          name: 'ארגוני', 
          price: '₪299', 
          period: 'חודש',
          features: ['משתמשים ללא הגבלה', 'תכונות מתקדמות', 'תמיכה 24/7', 'התאמה אישית'],
          buttonText: 'צור קשר'
        }
      ],
      button1Text: 'השווה תוכניות',
      button2Text: 'דבר עם מומחה'
    },
    contact: {
      title: 'צור איתנו קשר',
      subtitle: 'מוכנים להתחיל עם מערכת האימות המתקדמת ביותר?',
      buttonText: 'התחל עכשיו'
    },
    faq: {
      title: 'שאלות נפוצות',
      questions: [
        { question: 'כמה זמן לוקחת ההטמעה?', answer: 'הטמעה בסיסית לוקחת כמה דקות בלבד, עם כל התכונות המתקדמות תוך שעות' },
        { question: 'האם זה בטוח?', answer: 'המערכת עומדת בכל תקני האבטחה הבינלאומיים ועוברת ביקורות אבטחה קבועות' }
      ],
      button1Text: 'מדריך מפתחים',
      button2Text: 'תמיכה טכנית'
    },
    finalCta: {
      title: 'מוכן לשדרג את מערכת האימות?',
      description: 'הצטרף לאלפי מפתחים שכבר משתמשים בפתרון הטכנולוגי המתקדם ביותר',
      button1Text: 'התחל עכשיו',
      button2Text: 'הזמן דמו'
    },
    footer: {
      companyName: 'AuthKit Tech Pro'
    },
    styles: {
      backgroundColor: '#050814',
      heroBackground: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      emotionalBackground: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      featuresBackground: '#0f172a',
      testimonialsBackground: '#050814',
      aboutBackground: '#1e293b',
      pricingBackground: '#0f172a',
      faqBackground: '#050814',
      finalCtaBackground: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      contactBackground: '#1e293b',
      footerBackground: '#000000',
      textColor: '#ffffff',
      primaryColor: '#3b82f6',
      secondaryColor: '#1d4ed8',
      accentColor: '#60a5fa'
    },
    effects: {
      hero: 'crystal-matrix',
      emotional: 'neon-grid-portal',
      features: 'minimal-tech',
      testimonials: 'cosmic-geometry',
      about: 'quantum-bubbles',
      pricing: 'glass-refraction',
      faq: 'digital-waves',
      finalCta: 'holographic',
      contact: 'crystal-matrix'
    }
  }
];
