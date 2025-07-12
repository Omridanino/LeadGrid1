import { FormData } from './questionnaireUtils';
import { elementOptions } from '@/constants/questionnaireElements';

export const generateDynamicPageHTML = (formData: FormData, content: any) => {
  const selectedElements = formData.selectedElements;
  
  // יצירת מפה של הסקשנים
  const sectionMap = {
    hero: generateHeroSection,
    emotional: generateEmotionalSection,
    whyUs: generateWhyUsSection,
    whatWeGive: generateWhatWeGiveSection,
    services: generateServicesSection,
    gallery: generateGallerySection,
    process: generateProcessSection,
    about: generateAboutSection,
    stats: generateStatsSection,
    team: generateTeamSection,
    achievements: generateAchievementsSection,
    'app-showcase': generateAppShowcaseSection,
    partners: generatePartnersSection,
    news: generateNewsSection,
    competitive: generateCompetitiveSection,
    'before-after': generateBeforeAfterSection,
    testimonials: generateTestimonialsSection,
    contact: generateContactSection,
    'final-cta': generateFinalCtaSection
  };

  // יצירת הסקשנים בהתאם לבחירת המשתמש
  const sectionsHTML = selectedElements
    .map(elementId => {
      const generator = sectionMap[elementId as keyof typeof sectionMap];
      if (generator) {
        return generator(formData, content);
      }
      return '';
    })
    .filter(Boolean)
    .join('');

  // יצירת HTML מלא
  return `
<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.businessName || 'דף נחיתה'}</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <style>
        ${getPageStyles(formData)}
    </style>
</head>
<body>
    ${sectionsHTML}
    
    <script>
        ${getPageScripts()}
    </script>
</body>
</html>`;
};

// פונקציות יצירת סקשנים
function generateHeroSection(formData: FormData, content: any) {
  return `
    <section id="hero" class="hero-section">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">${content.hero?.title || formData.businessName}</h1>
                <h2 class="hero-subtitle">${content.hero?.subtitle || 'פתרונות מקצועיים ואמינים'}</h2>
                <p class="hero-description">${content.hero?.description || content.hero?.description || 'שירותים מקצועיים ברמה הגבוהה ביותר'}</p>
                <div class="hero-buttons">
                    <a href="#contact" class="btn btn-primary">${content.hero?.button1Text || 'התחל עכשיו'}</a>
                    <a href="#about" class="btn btn-secondary">${content.hero?.button2Text || 'למד עוד'}</a>
                </div>
            </div>
        </div>
    </section>`;
}

function generateEmotionalSection(formData: FormData, content: any) {
  return `
    <section id="emotional" class="emotional-section">
        <div class="container">
            <h2 class="section-title">${content.emotional?.title || `למה ${formData.businessName}?`}</h2>
            <p class="section-description">${content.emotional?.description || `אנחנו מתמחים ב${formData.businessType} ומספקים פתרונות מותאמים אישית`}</p>
            <div class="emotional-buttons">
                <a href="#features" class="btn btn-primary">${content.emotional?.button1Text || 'גלה למה'}</a>
                <a href="#contact" class="btn btn-secondary">${content.emotional?.button2Text || 'צור קשר'}</a>
            </div>
        </div>
    </section>`;
}

function generateWhyUsSection(formData: FormData, content: any) {
  return `
    <section id="why-us" class="why-us-section">
        <div class="container">
            <h2 class="section-title">למה לבחור בנו</h2>
            <div class="advantages-grid">
                ${content.features?.items?.map((item: any) => `
                    <div class="advantage-card">
                        <div class="advantage-icon">
                            <i class="ri-${item.icon || 'star-line'}"></i>
                        </div>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `).join('') || generateDefaultAdvantages(formData)}
            </div>
        </div>
    </section>`;
}

function generateWhatWeGiveSection(formData: FormData, content: any) {
  return `
    <section id="what-we-give" class="services-section">
        <div class="container">
            <h2 class="section-title">מה אנחנו נותנים</h2>
            <p class="section-description">${formData.mainServices || 'השירותים והפתרונות שלנו'}</p>
            <div class="services-grid">
                ${generateServiceCards(formData, content)}
            </div>
        </div>
    </section>`;
}

function generateServicesSection(formData: FormData, content: any) {
  return `
    <section id="services" class="services-section">
        <div class="container">
            <h2 class="section-title">השירותים שלנו</h2>
            <div class="services-grid">
                ${generateServiceCards(formData, content)}
            </div>
        </div>
    </section>`;
}

function generateGallerySection(formData: FormData, content: any) {
  return `
    <section id="gallery" class="gallery-section">
        <div class="container">
            <h2 class="section-title">גלריה</h2>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400" alt="פרויקט 1" />
                    <div class="gallery-overlay">
                        <h3>פרויקט מוצלח</h3>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400" alt="פרויקט 2" />
                    <div class="gallery-overlay">
                        <h3>עבודה מקצועית</h3>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1600880292629-c2485db08b0c?w=400" alt="פרויקט 3" />
                    <div class="gallery-overlay">
                        <h3>תוצאות מרשימות</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
}

function generateProcessSection(formData: FormData, content: any) {
  return `
    <section id="process" class="process-section">
        <div class="container">
            <h2 class="section-title">תהליך השירות</h2>
            <div class="process-steps">
                <div class="process-step">
                    <div class="step-number">1</div>
                    <h3>יצירת קשר</h3>
                    <p>נתחיל בשיחה לבירור הצרכים שלכם</p>
                </div>
                <div class="process-step">
                    <div class="step-number">2</div>
                    <h3>תכנון</h3>
                    <p>נתכנן פתרון מותאם אישית</p>
                </div>
                <div class="process-step">
                    <div class="step-number">3</div>
                    <h3>ביצוע</h3>
                    <p>נבצע את הפרויקט באיכות גבוהה</p>
                </div>
                <div class="process-step">
                    <div class="step-number">4</div>
                    <h3>מסירה</h3>
                    <p>נמסור את התוצר הסופי ונלווה אתכם</p>
                </div>
            </div>
        </div>
    </section>`;
}

function generateAboutSection(formData: FormData, content: any) {
  return `
    <section id="about" class="about-section">
        <div class="container">
            <h2 class="section-title">קצת עלינו</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>${formData.businessStory || content.about?.description || 'אנחנו עסק מקצועי המתמחה במתן שירותים איכותיים'}</p>
                    <div class="about-values">
                        <h3>הערכים שלנו:</h3>
                        <p>${formData.businessValues || 'מקצועיות, אמינות ושירות אישי'}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
}

function generateStatsSection(formData: FormData, content: any) {
  return `
    <section id="stats" class="stats-section">
        <div class="container">
            <h2 class="section-title">המספרים שלנו</h2>
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">100+</div>
                    <div class="stat-label">לקוחות מרוצים</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">5</div>
                    <div class="stat-label">שנות ניסיון</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">זמינות</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">99%</div>
                    <div class="stat-label">שביעות רצון</div>
                </div>
            </div>
        </div>
    </section>`;
}

function generateTeamSection(formData: FormData, content: any) {
  return `
    <section id="team" class="team-section">
        <div class="container">
            <h2 class="section-title">הצוות שלנו</h2>
            <div class="team-grid">
                <div class="team-member">
                    <div class="member-avatar">
                        <i class="ri-user-line"></i>
                    </div>
                    <h3>מנהל הפרויקט</h3>
                    <p>מוביל את הצוות ומבטיח הצלחת הפרויקט</p>
                </div>
                <div class="team-member">
                    <div class="member-avatar">
                        <i class="ri-user-line"></i>
                    </div>
                    <h3>מומחה טכני</h3>
                    <p>אחראי על הביצוע הטכני והאיכות</p>
                </div>
                <div class="team-member">
                    <div class="member-avatar">
                        <i class="ri-user-line"></i>
                    </div>
                    <h3>יועץ לקוחות</h3>
                    <p>מלווה את הלקוחות לאורך כל הדרך</p>
                </div>
            </div>
        </div>
    </section>`;
}

function generateAchievementsSection(formData: FormData, content: any) {
  return `
    <section id="achievements" class="achievements-section">
        <div class="container">
            <h2 class="section-title">הישגים ופרסים</h2>
            <div class="achievements-grid">
                <div class="achievement-item">
                    <div class="achievement-icon">
                        <i class="ri-trophy-line"></i>
                    </div>
                    <h3>פרס מצוינות</h3>
                    <p>הוענק לנו על איכות השירות</p>
                </div>
                <div class="achievement-item">
                    <div class="achievement-icon">
                        <i class="ri-medal-line"></i>
                    </div>
                    <h3>הסמכה מקצועית</h3>
                    <p>מוסמכים על ידי הרשויות המוכרות</p>
                </div>
                <div class="achievement-item">
                    <div class="achievement-icon">
                        <i class="ri-star-line"></i>
                    </div>
                    <h3>דירוג גבוה</h3>
                    <p>5 כוכבים מלקוחותינו</p>
                </div>
            </div>
        </div>
    </section>`;
}

function generateAppShowcaseSection(formData: FormData, content: any) {
  return `
    <section id="app-showcase" class="app-showcase-section">
        <div class="container">
            <h2 class="section-title">הצגת האפליקציה</h2>
            <div class="app-showcase-content">
                <div class="app-preview">
                    <div class="phone-mockup">
                        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300" alt="אפליקציה" />
                    </div>
                </div>
                <div class="app-features">
                    <h3>תכונות מתקדמות</h3>
                    <ul>
                        <li>ממשק קל לשימוש</li>
                        <li>ביצועים מהירים</li>
                        <li>אבטחה מתקדמת</li>
                        <li>תמיכה 24/7</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>`;
}

function generatePartnersSection(formData: FormData, content: any) {
  return `
    <section id="partners" class="partners-section">
        <div class="container">
            <h2 class="section-title">השותפים שלנו</h2>
            <div class="partners-grid">
                <div class="partner-logo">
                    <img src="https://via.placeholder.com/150x80/333/fff?text=Partner+1" alt="שותף 1" />
                </div>
                <div class="partner-logo">
                    <img src="https://via.placeholder.com/150x80/333/fff?text=Partner+2" alt="שותף 2" />
                </div>
                <div class="partner-logo">
                    <img src="https://via.placeholder.com/150x80/333/fff?text=Partner+3" alt="שותף 3" />
                </div>
                <div class="partner-logo">
                    <img src="https://via.placeholder.com/150x80/333/fff?text=Partner+4" alt="שותף 4" />
                </div>
            </div>
        </div>
    </section>`;
}

function generateNewsSection(formData: FormData, content: any) {
  return `
    <section id="news" class="news-section">
        <div class="container">
            <h2 class="section-title">חדשות ועדכונים</h2>
            <div class="news-grid">
                <article class="news-item">
                    <div class="news-date">15.01.2024</div>
                    <h3>השקת שירות חדש</h3>
                    <p>אנו שמחים להודיע על השקת שירות חדש שישפר את החיים שלכם</p>
                    <a href="#" class="news-link">קרא עוד</a>
                </article>
                <article class="news-item">
                    <div class="news-date">10.01.2024</div>
                    <h3>הרחבת הצוות</h3>
                    <p>צוות המומחים שלנו מתרחב כדי לתת שירות טוב יותר</p>
                    <a href="#" class="news-link">קרא עוד</a>
                </article>
                <article class="news-item">
                    <div class="news-date">05.01.2024</div>
                    <h3>עדכון מערכות</h3>
                    <p>שיפרנו את המערכות שלנו לחוויית משתמש טובה יותר</p>
                    <a href="#" class="news-link">קרא עוד</a>
                </article>
            </div>
        </div>
    </section>`;
}

function generateCompetitiveSection(formData: FormData, content: any) {
  return `
    <section id="competitive" class="competitive-section">
        <div class="container">
            <h2 class="section-title">יתרונות תחרותיים</h2>
            <div class="competitive-content">
                <div class="competitive-item">
                    <div class="competitive-icon">
                        <i class="ri-speed-up-line"></i>
                    </div>
                    <h3>מהירות ביצוע</h3>
                    <p>אנחנו מבצעים פרויקטים מהר יותר מהמתחרים</p>
                </div>
                <div class="competitive-item">
                    <div class="competitive-icon">
                        <i class="ri-money-dollar-circle-line"></i>
                    </div>
                    <h3>מחירים תחרותיים</h3>
                    <p>יחס מחיר-ערך הטוב ביותר בשוק</p>
                </div>
                <div class="competitive-item">
                    <div class="competitive-icon">
                        <i class="ri-customer-service-2-line"></i>
                    </div>
                    <h3>שירות אישי</h3>
                    <p>כל לקוח מקבל טיפול אישי ומותאם</p>
                </div>
            </div>
        </div>
    </section>`;
}

function generateBeforeAfterSection(formData: FormData, content: any) {
  return `
    <section id="before-after" class="before-after-section">
        <div class="container">
            <h2 class="section-title">לפני ואחרי</h2>
            <div class="before-after-grid">
                <div class="before-after-item">
                    <div class="before-after-images">
                        <div class="before-image">
                            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300" alt="לפני" />
                            <div class="image-label">לפני</div>
                        </div>
                        <div class="after-image">
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300" alt="אחרי" />
                            <div class="image-label">אחרי</div>
                        </div>
                    </div>
                    <h3>פרויקט מוצלח</h3>
                    <p>שיפור משמעותי בביצועים ובמראה</p>
                </div>
            </div>
        </div>
    </section>`;
}

function generateTestimonialsSection(formData: FormData, content: any) {
  return `
    <section id="testimonials" class="testimonials-section">
        <div class="container">
            <h2 class="section-title">מה הלקוחות אומרים עלינו</h2>
            <div class="testimonials-grid">
                ${content.testimonials?.testimonials?.map((testimonial: any) => `
                    <div class="testimonial-card">
                        <div class="testimonial-stars">
                            ${Array(testimonial.rating || 5).fill(0).map(() => '★').join('')}
                        </div>
                        <p class="testimonial-content">"${testimonial.content}"</p>
                        <div class="testimonial-author">
                            <div class="author-name">${testimonial.name}</div>
                            <div class="author-role">${testimonial.role}</div>
                        </div>
                    </div>
                `).join('') || generateDefaultTestimonials(formData)}
            </div>
        </div>
    </section>`;
}

function generateContactSection(formData: FormData, content: any) {
  return `
    <section id="contact" class="contact-section">
        <div class="container">
            <h2 class="section-title">צור קשר</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>בואו נתחיל לעבוד יחד</h3>
                    <p>מוכנים להתחיל? צרו איתנו קשר עוד היום</p>
                    <div class="contact-details">
                        ${formData.contactInfo ? formData.contactInfo.split('\n').map(line => `<p>${line}</p>`).join('') : `
                            <p>📞 050-1234567</p>
                            <p>📧 info@business.co.il</p>
                            <p>📍 רחוב הדוגמה 123, תל אביב</p>
                        `}
                    </div>
                </div>
                <div class="contact-form">
                    <form>
                        <div class="form-group">
                            <label>שם מלא</label>
                            <input type="text" required>
                        </div>
                        <div class="form-group">
                            <label>טלפון</label>
                            <input type="tel" required>
                        </div>
                        <div class="form-group">
                            <label>אימייל</label>
                            <input type="email" required>
                        </div>
                        <div class="form-group">
                            <label>הודעה</label>
                            <textarea rows="4" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">שלח הודעה</button>
                    </form>
                </div>
            </div>
        </div>
    </section>`;
}

function generateFinalCtaSection(formData: FormData, content: any) {
  return `
    <section id="final-cta" class="final-cta-section">
        <div class="container">
            <div class="cta-content">
                <h2>מוכנים להתחיל עם ${formData.businessName}?</h2>
                <p>הצטרפו לעשרות לקוחות מרוצים שבחרו בנו כשותף המקצועי שלהם</p>
                <div class="cta-buttons">
                    <a href="#contact" class="btn btn-primary btn-large">בואו נתחיל</a>
                    <a href="tel:050-1234567" class="btn btn-secondary btn-large">קבל ייעוץ חינם</a>
                </div>
            </div>
        </div>
    </section>`;
}

// פונקציות עזר
function generateDefaultAdvantages(formData: FormData) {
  return `
    <div class="advantage-card">
        <div class="advantage-icon"><i class="ri-star-line"></i></div>
        <h3>שירות מקצועי</h3>
        <p>צוות מקצועי ומנוסה</p>
    </div>
    <div class="advantage-card">
        <div class="advantage-icon"><i class="ri-award-line"></i></div>
        <h3>איכות גבוהה</h3>
        <p>סטנדרטים גבוהים ואמינות</p>
    </div>
    <div class="advantage-card">
        <div class="advantage-icon"><i class="ri-customer-service-line"></i></div>
        <h3>תמיכה מלאה</h3>
        <p>ליווי מקצועי לאורך כל הדרך</p>
    </div>
  `;
}

function generateServiceCards(formData: FormData, content: any) {
  return `
    <div class="service-card">
        <div class="service-icon"><i class="ri-settings-line"></i></div>
        <h3>שירות בסיסי</h3>
        <p>תיאור השירות הבסיסי שלנו</p>
    </div>
    <div class="service-card">
        <div class="service-icon"><i class="ri-star-line"></i></div>
        <h3>שירות מתקדם</h3>
        <p>פתרונות מתקדמים ומותאמים אישית</p>
    </div>
    <div class="service-card">
        <div class="service-icon"><i class="ri-vip-crown-line"></i></div>
        <h3>שירות פרימיום</h3>
        <p>השירות הטוב ביותר עם כל התוספות</p>
    </div>
  `;
}

function generateDefaultTestimonials(formData: FormData) {
  return `
    <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-content">"השירות ב${formData.businessName} פשוט מעולה, ממליץ בחום"</p>
        <div class="testimonial-author">
            <div class="author-name">יוסי כהן</div>
            <div class="author-role">לקוח מרוצה</div>
        </div>
    </div>
    <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-content">"ליווי מקצועי ותוצאות מעבר לציפיות"</p>
        <div class="testimonial-author">
            <div class="author-name">מיכל לוי</div>
            <div class="author-role">בעלת עסק</div>
        </div>
    </div>
  `;
}

function getPageStyles(formData: FormData) {
  const primaryColor = formData.brandColors || '#3b82f6';
  
  return `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
        direction: rtl;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .hero-section {
        background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
        color: white;
        text-align: center;
        padding: 100px 20px;
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
    
    .hero-title {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    
    .hero-subtitle {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        opacity: 0.9;
    }
    
    .hero-description {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .hero-buttons, .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .btn {
        padding: 12px 32px;
        border-radius: 8px;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        border: none;
        transition: all 0.3s ease;
    }
    
    .btn-primary {
        background: white;
        color: #3b82f6;
    }
    
    .btn-secondary {
        background: transparent;
        color: white;
        border: 2px solid white;
    }
    
    .btn-large {
        padding: 16px 40px;
        font-size: 1.1rem;
    }
    
    .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    
    section {
        padding: 80px 20px;
    }
    
    .section-title {
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 2rem;
        color: #1f2937;
    }
    
    .section-description {
        font-size: 1.25rem;
        text-align: center;
        margin-bottom: 3rem;
        color: #6b7280;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .emotional-section, .final-cta-section {
        background: #f8fafc;
    }
    
    .advantages-grid, .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .advantage-card, .service-card {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        text-align: center;
        transition: transform 0.3s ease;
    }
    
    .advantage-card:hover, .service-card:hover {
        transform: translateY(-4px);
    }
    
    .advantage-icon, .service-icon {
        width: 60px;
        height: 60px;
        background: ${primaryColor};
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        font-size: 1.5rem;
    }
    
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }
    
    .gallery-item {
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        aspect-ratio: 4/3;
    }
    
    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    
    .gallery-item:hover img {
        transform: scale(1.1);
    }
    
    .gallery-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, rgba(0,0,0,0.8));
        color: white;
        padding: 2rem;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    }
    
    .gallery-item:hover .gallery-overlay {
        transform: translateY(0);
    }
    
    .process-steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
    
    .process-step {
        text-align: center;
        padding: 2rem;
    }
    
    .step-number {
        width: 60px;
        height: 60px;
        background: ${primaryColor};
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        text-align: center;
    }
    
    .stat-number {
        font-size: 3rem;
        font-weight: bold;
        color: ${primaryColor};
        margin-bottom: 0.5rem;
    }
    
    .stat-label {
        font-size: 1.1rem;
        color: #6b7280;
    }
    
    .team-grid, .achievements-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
    
    .team-member, .achievement-item {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .member-avatar, .achievement-icon {
        width: 80px;
        height: 80px;
        background: ${primaryColor};
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        font-size: 2rem;
    }
    
    .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }
    
    .testimonial-card {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .testimonial-stars {
        color: #fbbf24;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
    
    .testimonial-content {
        font-style: italic;
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }
    
    .author-name {
        font-weight: bold;
        margin-bottom: 0.25rem;
    }
    
    .author-role {
        color: #6b7280;
        font-size: 0.9rem;
    }
    
    .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        max-width: 1000px;
        margin: 0 auto;
    }
    
    .contact-form {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #374151;
    }
    
    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: 1rem;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: ${primaryColor};
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .final-cta-section {
        background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
        color: white;
        text-align: center;
    }
    
    .final-cta-section .section-title {
        color: white;
    }
    
    @media (max-width: 768px) {
        .hero-title {
            font-size: 2rem;
        }
        
        .hero-buttons, .cta-buttons {
            flex-direction: column;
            align-items: center;
        }
        
        .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        .advantages-grid, .services-grid {
            grid-template-columns: 1fr;
        }
        
        .process-steps {
            grid-template-columns: 1fr;
        }
    }
  `;
}

function getPageScripts() {
  return `
    // Smooth scrolling for anchor links
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
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('תודה על פנייתך! נחזור אליך בקרוב.');
        });
    }
    
    // Add scroll animations
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
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
  `;
}