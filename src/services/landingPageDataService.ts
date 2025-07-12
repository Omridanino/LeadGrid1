// Service for unified landing page data extraction and formatting
export interface LandingPageData {
  template: any;
  content: {
    hero: any;
    features: any;
    about: any;
    services: any;
    testimonials: any;
    pricing: any;
    faq: any;
    contact: any;
  };
  styles: any;
  colors: any;
  isPremium: boolean;
}

export const extractLandingPageData = (formData: any): LandingPageData | null => {
  if (!formData?.selectedTemplate) {
    return null;
  }

  const template = formData.selectedTemplate;
  const isPremium = template.category?.includes('פרימיום') || template.id?.includes('-pro');

  return {
    template,
    isPremium,
    content: {
      hero: {
        title: template.hero?.title || 'כותרת ראשית',
        subtitle: template.hero?.subtitle || 'תת כותרת שמסבירה על השירות או המוצר שלכם',
        description: template.hero?.description || 'תיאור קצר ומעניין על מה שאתם מציעים',
        badge: template.hero?.badge || '',
        button1Text: template.hero?.button1Text || 'התחל עכשיו',
        button2Text: template.hero?.button2Text || 'למד עוד',
        button1Icon: template.hero?.button1Icon || '',
        button2Icon: template.hero?.button2Icon || '',
        image: template.hero?.image || ''
      },
      features: {
        title: template.features?.title || 'התכונות שלנו',
        subtitle: template.features?.subtitle || 'גלה את היתרונות הייחודיים שלנו',
        badge: template.features?.badge || '',
        items: template.features?.items || [
          { title: 'תכונה 1', description: 'תיאור התכונה הראשונה', icon: 'star-line' },
          { title: 'תכונה 2', description: 'תיאור התכונה השנייה', icon: 'heart-line' },
          { title: 'תכונה 3', description: 'תיאור התכונה השלישית', icon: 'shield-line' }
        ]
      },
      about: {
        title: template.about?.title || 'אודותינו',
        description: template.about?.description || 'אנחנו חברה מובילה בתחום',
        badge: template.about?.badge || '',
        button1Text: template.about?.button1Text || 'צור קשר',
        button2Text: template.about?.button2Text || 'קרא עוד',
        button1Icon: template.about?.button1Icon || '',
        button2Icon: template.about?.button2Icon || '',
        stats: template.about?.stats || [
          { number: '24/7', label: 'תמיכה' },
          { number: '+5', label: 'שנות ניסיון' },
          { number: '+100', label: 'לקוחות מרוצים' }
        ]
      },
      services: {
        title: template.services?.title || 'השירותים שלנו',
        subtitle: template.services?.subtitle || 'פתרונות מקצועיים עבור העסק שלך',
        items: template.services?.items || [
          { 
            title: 'שירות 1', 
            description: 'תיאור השירות הראשון',
            price: '₪999',
            features: ['תכונה 1', 'תכונה 2', 'תכונה 3']
          },
          { 
            title: 'שירות 2', 
            description: 'תיאור השירות השני',
            price: '₪1,999',
            features: ['תכונה 1', 'תכונה 2', 'תכונה 3', 'תכונה 4']
          }
        ]
      },
      testimonials: {
        title: template.testimonials?.title || 'מה הלקוחות המרוצים שלנו אומרים עלינו',
        subtitle: template.testimonials?.subtitle || 'הצלחות אמיתיות של לקוחות אמיתיים - המלצות כנות ומפורטות',
        badge: template.testimonials?.badge || '',
        button1Text: template.testimonials?.button1Text || 'צור קשר עכשיו',
        button2Text: template.testimonials?.button2Text || 'קרא עוד',
        button1Icon: template.testimonials?.button1Icon || '',
        button2Icon: template.testimonials?.button2Icon || '',
        items: template.testimonials?.items || [
          {
            name: 'דני כהן',
            role: 'מנהל פיתוח עסקי',
            content: 'שירות מעולה וצוות מקצועי. המליץ בחום!',
            rating: 5,
            image: '/placeholder.svg'
          },
          {
            name: 'רונית לוי',
            role: 'יזמת ומנכ"לית',
            content: 'עבודה מדויקת ותוצאות מעבר לציפיות. ממליצה בחום!',
            rating: 5,
            image: '/placeholder.svg'
          },
          {
            name: 'אלון רוזנברג',
            role: 'סמנכ"ל שיווק',
            content: 'ליווי מקצועי לאורך כל הדרך. שירות יוצא מן הכלל!',
            rating: 5,
            image: '/placeholder.svg'
          }
        ]
      },
      pricing: {
        title: template.pricing?.title || 'מחירונים',
        subtitle: template.pricing?.subtitle || 'בחר את החבילה המתאימה לך',
        badge: template.pricing?.badge || '',
        button1Text: template.pricing?.button1Text || 'צור קשר',
        button2Text: template.pricing?.button2Text || 'למד עוד',
        button1Icon: template.pricing?.button1Icon || '',
        button2Icon: template.pricing?.button2Icon || '',
        plans: template.pricing?.plans || [
          {
            name: 'חבילה בסיסית',
            price: '₪299',
            period: 'לחודש',
            features: ['תכונה 1', 'תכונה 2', 'תכונה 3'],
            buttonText: 'התחל עכשיו',
            recommended: false
          },
          {
            name: 'חבילה מתקדמת',
            price: '₪599',
            period: 'לחודש',
            features: ['כל התכונות הבסיסיות', 'תכונה מתקדמת 1', 'תכונה מתקדמת 2', 'תמיכה מועדפת'],
            buttonText: 'בחר חבילה',
            recommended: true
          },
          {
            name: 'חבילה פרימיום',
            price: '₪999',
            period: 'לחודש',
            features: ['כל התכונות המתקדמות', 'ליווי אישי', 'גישה לבטא', 'תמיכה 24/7'],
            buttonText: 'פנה אלינו',
            recommended: false
          }
        ]
      },
      faq: {
        title: template.faq?.title || 'שאלות נפוצות',
        badge: template.faq?.badge || '',
        button1Text: template.faq?.button1Text || 'יש לכם שאלה נוספת?',
        button2Text: template.faq?.button2Text || 'צור קשר',
        button1Icon: template.faq?.button1Icon || '',
        button2Icon: template.faq?.button2Icon || '',
        questions: template.faq?.questions || [
          {
            question: 'איך אני יכול להתחיל?',
            answer: 'פשוט לחץ על הכפתור "התחל עכשיו" ואנחנו נדריך אותך שלב אחר שלב.'
          },
          {
            question: 'כמה זמן לוקח התהליך?',
            answer: 'בדרך כלל התהליך לוקח בין שבוע לשבועיים, תלוי במורכבות הפרויקט.'
          },
          {
            question: 'האם יש תמיכה טכנית?',
            answer: 'כן, אנחנו מספקים תמיכה טכנית מלאה לכל הלקוחות שלנו.'
          },
          {
            question: 'מה קורה אם אני לא מרוצה?',
            answer: 'אנחנו מציעים אחריות מלאה והחזר כספי בתוך 30 יום.'
          },
          {
            question: 'האם אפשר לקבל הדגמה?',
            answer: 'בהחלט! פנה אלינו לתיאום הדגמה אישית של המערכת.'
          }
        ]
      },
      contact: {
        title: template.contact?.title || 'צור קשר',
        subtitle: template.contact?.subtitle || 'נשמח לשמוע ממך ולעזור בכל שאלה',
        buttonText: template.contact?.buttonText || 'שלח הודעה',
        phone: template.contact?.phone || '050-123-4567',
        email: template.contact?.email || 'info@example.com',
        address: template.contact?.address || 'תל אביב, ישראל',
        methods: [
          {
            icon: 'phone-line',
            title: 'טלפון',
            value: template.contact?.phone || '050-123-4567',
            description: 'זמינים בימים א׳-ה׳ 9:00-18:00'
          },
          {
            icon: 'mail-line',
            title: 'אימייל',
            value: template.contact?.email || 'info@example.com',
            description: 'נענה תוך 24 שעות'
          },
          {
            icon: 'map-pin-line',
            title: 'כתובת',
            value: template.contact?.address || 'תל אביב, ישראל',
            description: 'בתיאום מראש'
          }
        ]
      }
    },
    styles: template.styles || {},
    colors: {
      primary: template.styles?.primaryColor || '#3b82f6',
      secondary: template.styles?.secondaryColor || '#6b7280',
      accent: template.styles?.accentColor || '#f59e0b',
      background: template.styles?.backgroundColor || '#ffffff',
      text: template.styles?.textColor || '#1f2937'
    }
  };
};

// Generate clean HTML without external dependencies
export const generateCleanHTML = (pageData: LandingPageData): string => {
  if (!pageData) return '';

  const { content, styles, isPremium } = pageData;
  
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${content.hero.title}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            direction: rtl;
            line-height: 1.6;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section { padding: 60px 0; }
        .hero { background: ${isPremium ? 'linear-gradient(135deg, #1e293b, #3b82f6)' : styles.heroBackground || '#3b82f6'}; color: white; min-height: 100vh; display: flex; align-items: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero h2 { font-size: 1.5rem; margin-bottom: 1rem; opacity: 0.9; }
        .hero p { font-size: 1.125rem; margin-bottom: 2rem; opacity: 0.8; }
        .btn { display: inline-block; padding: 12px 24px; margin: 8px; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.3s; }
        .btn-primary { background: white; color: #3b82f6; }
        .btn-secondary { background: transparent; color: white; border: 2px solid white; }
        .features { background: #f8fafc; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .feature-card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
        .testimonials { background: ${isPremium ? 'linear-gradient(135deg, #1e293b, #374151)' : '#1f2937'}; color: white; }
        .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .testimonial-card { background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 12px; backdrop-filter: blur(10px); }
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .pricing-card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; position: relative; }
        .pricing-card.recommended { border: 3px solid #3b82f6; transform: scale(1.05); }
        .faq-item { background: white; margin-bottom: 1rem; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .faq-question { padding: 1.5rem; font-weight: 600; cursor: pointer; }
        .faq-answer { padding: 0 1.5rem 1.5rem; color: #6b7280; }
        .contact-form { max-width: 500px; margin: 0 auto; background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 12px; }
        .form-group { margin-bottom: 1rem; }
        .form-input { width: 100%; padding: 12px; border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; background: rgba(255,255,255,0.1); color: white; }
        .contact-methods { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-top: 3rem; text-align: center; }
        h2 { font-size: 2.5rem; margin-bottom: 1rem; text-align: center; }
        h3 { font-size: 1.5rem; margin-bottom: 1rem; }
        .text-center { text-align: center; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="text-center">
                ${content.hero.badge ? `<div class="badge">${content.hero.badge}</div>` : ''}
                <h1>${content.hero.title}</h1>
                <h2>${content.hero.subtitle}</h2>
                <p>${content.hero.description}</p>
                <div>
                    <a href="#contact" class="btn btn-primary">${content.hero.button1Text}</a>
                    <a href="#about" class="btn btn-secondary">${content.hero.button2Text}</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="section features">
        <div class="container">
            <h2>${content.features.title}</h2>
            <p class="text-center mb-8">${content.features.subtitle}</p>
            <div class="features-grid">
                ${content.features.items.map((item: any) => `
                    <div class="feature-card">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section testimonials">
        <div class="container">
            <h2>${content.testimonials.title}</h2>
            <p class="text-center mb-8">${content.testimonials.subtitle}</p>
            <div class="testimonials-grid">
                ${content.testimonials.items.map((item: any) => `
                    <div class="testimonial-card">
                        <div class="mb-4">${'★'.repeat(item.rating)}</div>
                        <p class="mb-4">"${item.content}"</p>
                        <div>
                            <strong>${item.name}</strong><br>
                            <small>${item.role}</small>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section class="section">
        <div class="container">
            <h2>${content.pricing.title}</h2>
            <p class="text-center mb-8">${content.pricing.subtitle}</p>
            <div class="pricing-grid">
                ${content.pricing.plans.map((plan: any) => `
                    <div class="pricing-card ${plan.recommended ? 'recommended' : ''}">
                        ${plan.recommended ? '<div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #3b82f6; color: white; padding: 5px 15px; border-radius: 15px; font-size: 14px;">מומלץ</div>' : ''}
                        <h3>${plan.name}</h3>
                        <div style="font-size: 2.5rem; font-weight: bold; margin: 1rem 0;">${plan.price}</div>
                        <div style="color: #6b7280; margin-bottom: 2rem;">${plan.period}</div>
                        <ul style="text-align: right; margin-bottom: 2rem;">
                            ${plan.features.map((feature: string) => `<li style="margin-bottom: 0.5rem;">✓ ${feature}</li>`).join('')}
                        </ul>
                        <a href="#contact" class="btn btn-primary" style="width: 100%;">${plan.buttonText}</a>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="section" style="background: #f8fafc;">
        <div class="container">
            <h2>${content.faq.title}</h2>
            <div style="max-width: 800px; margin: 3rem auto;">
                ${content.faq.questions.map((qa: any) => `
                    <div class="faq-item">
                        <div class="faq-question">${qa.question}</div>
                        <div class="faq-answer">${qa.answer}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section" style="background: ${isPremium ? 'linear-gradient(135deg, #1e293b, #374151)' : '#1f2937'}; color: white;">
        <div class="container">
            <h2>${content.contact.title}</h2>
            <p class="text-center mb-8">${content.contact.subtitle}</p>
            
            <div class="contact-form">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-input" placeholder="שם מלא" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-input" placeholder="אימייל" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" class="form-input" placeholder="טלפון" required>
                    </div>
                    <div class="form-group">
                        <textarea class="form-input" rows="4" placeholder="הודעה" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">${content.contact.buttonText}</button>
                </form>
            </div>

            <div class="contact-methods">
                ${content.contact.methods.map((method: any) => `
                    <div>
                        <h3>${method.title}</h3>
                        <p>${method.value}</p>
                        <small>${method.description}</small>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
</body>
</html>`;
};