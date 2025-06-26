
import { ColorScheme } from "@/components/ColorEditor";

// Generate the same CSS that's used in PreviewStyles component
const generatePreviewStyles = () => {
  return `
    <style>
      /* Base styles for all hero styles */
      .style-3d {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        position: relative;
        overflow: hidden;
      }
      
      .style-3d::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%);
        animation: float 6s ease-in-out infinite;
      }
      
      .style-geometric {
        background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
        position: relative;
        overflow: hidden;
      }
      
      .style-geometric::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: 
          linear-gradient(45deg, rgba(255,255,255,.1) 25%, transparent 25%), 
          linear-gradient(-45deg, rgba(255,255,255,.1) 25%, transparent 25%), 
          linear-gradient(45deg, transparent 75%, rgba(255,255,255,.1) 75%), 
          linear-gradient(-45deg, transparent 75%, rgba(255,255,255,.1) 75%);
        background-size: 60px 60px;
        background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
        animation: geometricMove 20s linear infinite;
      }
      
      .style-glass {
        background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.1);
        position: relative;
        overflow: hidden;
      }
      
      .style-glass::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 50%);
        animation: glassShine 8s ease-in-out infinite;
      }
      
      .style-metal {
        background: linear-gradient(135deg, #434343 0%, #000000 100%);
        position: relative;
        overflow: hidden;
      }
      
      .style-metal::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
        animation: metalSweep 3s ease-in-out infinite;
      }
      
      .style-image {
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        position: relative;
        overflow: hidden;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(1deg); }
        66% { transform: translateY(5px) rotate(-1deg); }
      }
      
      @keyframes geometricMove {
        0% { background-position: 0 0, 0 30px, 30px -30px, -30px 0px; }
        100% { background-position: 60px 60px, 60px 90px, 90px 30px, 30px 60px; }
      }
      
      @keyframes glassShine {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
      
      @keyframes metalSweep {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      /* Responsive design */
      @media (max-width: 768px) {
        .container {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        .hero-title {
          font-size: 2.5rem !important;
          line-height: 1.2;
        }
        
        .hero-subtitle {
          font-size: 1.125rem !important;
        }
        
        .grid-cols-1 {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        
        .md\\:grid-cols-2 {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        
        .md\\:grid-cols-3 {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
      }
      
      /* Hover effects and transitions */
      .hover\\:scale-105:hover {
        transform: scale(1.05);
      }
      
      .hover\\:bg-opacity-90:hover {
        background-color: rgba(var(--bg-color), 0.9);
      }
      
      .transition-all {
        transition: all 0.3s ease;
      }
      
      .transition-transform {
        transition: transform 0.3s ease;
      }
      
      /* Utility classes */
      .backdrop-blur-sm {
        backdrop-filter: blur(4px);
      }
      
      .backdrop-blur-md {
        backdrop-filter: blur(12px);
      }
      
      .backdrop-blur-lg {
        backdrop-filter: blur(16px);
      }
      
      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }
      
      /* Container utility */
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
    </style>
  `;
};

// Generate the same hero section as HeroSection component
const generateHeroSection = (content: any, currentColors: ColorScheme, formData: any, heroImage: string) => {
  const heroUrl = heroImage || '/placeholder.svg';
  
  return `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      ${heroImage ? `
        <div class="absolute inset-0 z-0">
          <img src="${heroUrl}" alt="Hero Background" class="w-full h-full object-cover opacity-70" />
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ` : ''}
      
      <div class="container mx-auto px-4 relative z-10 text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="hero-title text-4xl md:text-6xl font-bold mb-6" style="color: ${currentColors.headlineColor};">
            ${content?.headline || formData.businessName || 'העסק שלי'}
          </h1>
          
          <p class="hero-subtitle text-xl md:text-2xl mb-8 opacity-90" style="color: ${currentColors.subheadlineColor};">
            ${content?.subheadline || `מספקים שירותי ${formData.businessType} ברמה הגבוהה ביותר`}
          </p>
          
          <div class="flex gap-4 justify-center flex-wrap">
            <button class="px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:bg-opacity-90" 
                    style="background-color: ${currentColors.primary}; color: white;">
              ${content?.cta || 'התחילו עכשיו'}
            </button>
            
            <button class="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all hover:scale-105" 
                    style="border-color: ${currentColors.secondary}; color: ${currentColors.secondary}; background: rgba(255,255,255,0.1); backdrop-filter: blur(4px);">
              למד עוד
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
};

// Generate navigation section
const generateNavigationSection = (formData: any) => {
  if (formData.navigationStyle === 'dock') {
    return `
      <div class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div class="flex items-center gap-2 bg-black bg-opacity-50 backdrop-blur-lg rounded-full p-3">
          <a href="#home" class="p-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </a>
          <a href="#about" class="p-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </a>
          <a href="#services" class="p-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
            </svg>
          </a>
          <a href="#contact" class="p-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </a>
        </div>
      </div>
    `;
  }
  return '';
};

// Generate all content sections exactly as they appear in ContentSections component
const generateAllContentSections = (content: any, currentColors: ColorScheme, formData: any) => {
  const sections = [];
  
  // About/Emotional Section
  sections.push(`
    <section id="about" class="py-20 relative" style="background: rgba(0,0,0,0.3); backdrop-filter: blur(16px);">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-8" style="color: ${currentColors.aboutColor};">
            ${content?.sections?.emotionalSection?.title || 'השירות שמשנה את המשחק'}
          </h2>
          <p class="text-xl leading-relaxed" style="color: ${currentColors.aboutTextColor};">
            ${content?.sections?.emotionalSection?.content || `בעולם שמתפתח במהירות, ${formData.businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר.`}
          </p>
        </div>
      </div>
    </section>
  `);
  
  // Features Section
  sections.push(`
    <section id="features" class="py-20 relative" style="background: rgba(0,0,0,0.2); backdrop-filter: blur(12px);">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-16" style="color: ${currentColors.featuresColor};">
            ${content?.sections?.whatWeGive?.title || 'מה אתם מקבלים מאיתנו'}
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${content?.sections?.whatWeGive?.services?.map((service: any, index: number) => `
              <div class="p-6 rounded-lg backdrop-blur-lg transition-transform hover:scale-105" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">
                <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4" style="background: ${currentColors.primary};">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3" style="color: ${currentColors.featuresColor};">
                  ${service.title}
                </h3>
                <p style="color: ${currentColors.featuresTextColor};">
                  ${service.description}
                </p>
              </div>
            `).join('') || ''}
          </div>
        </div>
      </div>
    </section>
  `);
  
  // Why Choose Us Section
  sections.push(`
    <section id="why-us" class="py-20 relative" style="background: rgba(0,0,0,0.4); backdrop-filter: blur(16px);">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-16" style="color: ${currentColors.featuresColor};">
            ${content?.sections?.whyUs?.title || 'למה כדאי לבחור דווקא בנו?'}
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${content?.sections?.whyUs?.reasons?.map((reason: any, index: number) => `
              <div class="p-8 rounded-lg backdrop-blur-lg transition-transform hover:scale-105" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style="background: ${currentColors.accent};">
                    <span class="text-white font-bold">${index + 1}</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-3" style="color: ${currentColors.featuresColor};">
                      ${reason.title}
                    </h3>
                    <p style="color: ${currentColors.featuresTextColor};">
                      ${reason.description}
                    </p>
                  </div>
                </div>
              </div>
            `).join('') || ''}
          </div>
        </div>
      </div>
    </section>
  `);
  
  // Testimonials Section
  sections.push(`
    <section id="testimonials" class="py-20 relative" style="background: rgba(0,0,0,0.3); backdrop-filter: blur(12px);">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-16" style="color: ${currentColors.featuresColor};">
            מה אומרים עלינו
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${content?.sections?.testimonials?.map((testimonial: any) => `
              <div class="p-6 rounded-lg backdrop-blur-lg transition-transform hover:scale-105" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background: ${currentColors.primary};">
                    <span class="text-white font-bold">${testimonial.name.charAt(0)}</span>
                  </div>
                  <div class="mr-4">
                    <h4 class="font-semibold" style="color: ${currentColors.featuresColor};">${testimonial.name}</h4>
                    <p class="text-sm" style="color: ${currentColors.featuresTextColor};">${testimonial.role}</p>
                  </div>
                </div>
                <p style="color: ${currentColors.featuresTextColor};">
                  "${testimonial.content}"
                </p>
              </div>
            `).join('') || ''}
          </div>
        </div>
      </div>
    </section>
  `);
  
  // FAQ Section
  sections.push(`
    <section id="faq" class="py-20 relative" style="background: rgba(0,0,0,0.2); backdrop-filter: blur(12px);">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-16" style="color: ${currentColors.featuresColor};">
            שאלות נפוצות
          </h2>
          
          <div class="space-y-4">
            ${[
              { q: "כמה זמן לוקח לראות תוצאות?", a: "תוצאות ראשונות ניתן לראות כבר תוך מספר שבועות, אך התוצאות המלאות מגיעות לאחר מספר חודשים." },
              { q: "האם יש אחריות על השירות?", a: "כן, אנחנו נותנים אחריות מלאה על כל השירותים שלנו ומתחייבים לשביעות רצונכם." },
              { q: "איך מתחילים לעבוד איתכם?", a: "פשוט צרו איתנו קשר והגדירו איתנו פגישת ייעוץ ראשונית ללא עלות." }
            ].map((faq, index) => `
              <div class="p-6 rounded-lg backdrop-blur-lg" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">
                <h3 class="text-xl font-semibold mb-3" style="color: ${currentColors.featuresColor};">
                  ${faq.q}
                </h3>
                <p style="color: ${currentColors.featuresTextColor};">
                  ${faq.a}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `);
  
  // Contact Section
  sections.push(`
    <section id="contact" class="py-20 relative" style="background: rgba(0,0,0,0.4); backdrop-filter: blur(16px);">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-8" style="color: ${currentColors.contactColor};">
            ${content?.contactTitle || 'בואו נתחיל לעבוד יחד'}
          </h2>
          
          <p class="text-xl mb-12" style="color: ${currentColors.contactTextColor};">
            מוכנים להתחיל? צרו איתנו קשר עוד היום וקבלו ייעוץ מקצועי ללא עלות
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="p-6 rounded-lg backdrop-blur-lg" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">
              <h3 class="text-xl font-semibold mb-4" style="color: ${currentColors.contactColor};">
                פרטי התקשרות
              </h3>
              <div class="space-y-3 text-right">
                <p style="color: ${currentColors.contactTextColor};">
                  📞 טלפון: 050-1234567
                </p>
                <p style="color: ${currentColors.contactTextColor};">
                  ✉️ אימייל: info@business.co.il
                </p>
                <p style="color: ${currentColors.contactTextColor};">
                  📍 כתובת: תל אביב, ישראל
                </p>
              </div>
            </div>
            
            <div class="p-6 rounded-lg backdrop-blur-lg" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">
              <h3 class="text-xl font-semibold mb-4" style="color: ${currentColors.contactColor};">
                שעות פעילות
              </h3>
              <div class="space-y-3 text-right">
                <p style="color: ${currentColors.contactTextColor};">
                  🕐 ראשון-חמישי: 9:00-18:00
                </p>
                <p style="color: ${currentColors.contactTextColor};">
                  🕐 שישי: 9:00-14:00
                </p>
                <p style="color: ${currentColors.contactTextColor};">
                  🕐 שבת: סגור
                </p>
              </div>
            </div>
          </div>
          
          <button class="px-12 py-4 rounded-lg font-semibold text-xl transition-all hover:scale-105" 
                  style="background-color: ${currentColors.primary}; color: white;">
            ${content?.cta || 'התחילו עכשיו'}
          </button>
        </div>
      </div>
    </section>
  `);
  
  return sections.join('');
};

// Generate footer section
const generateFooter = (formData: any) => {
  return `
    <footer class="py-16 relative" style="background: rgba(0,0,0,0.5); backdrop-filter: blur(16px);">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-2xl font-bold text-white mb-4">
            ${formData.businessName || 'העסק שלי'}
          </h3>
          <p class="text-gray-400 mb-8">
            © 2024 כל הזכויות שמורות. בניית אתרים מקצועית ואמינה.
          </p>
          <div class="flex justify-center gap-8 text-gray-400 flex-wrap">
            <span>טלפון: 050-1234567</span>
            <span>אימייל: info@business.co.il</span>
          </div>
        </div>
      </div>
    </footer>
  `;
};

export const generateHtmlFile = (content: any, currentColors: ColorScheme, formData: any, heroImage: string) => {
  const styleClass = formData.heroStyle === 'geometric' ? 'style-geometric' :
                     formData.heroStyle === 'glass' ? 'style-glass' :
                     formData.heroStyle === 'metal' ? 'style-metal' :
                     formData.heroStyle === 'image' ? 'style-image' : 'style-3d';

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.businessName || 'העסק שלי'}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    ${generatePreviewStyles()}
</head>
<body class="bg-black text-white">
    <div class="w-full min-h-screen ${styleClass}" style="position: relative;">
        ${generateHeroSection(content, currentColors, formData, heroImage)}
        ${generateNavigationSection(formData)}
        ${generateAllContentSections(content, currentColors, formData)}
        ${generateFooter(formData)}
    </div>
    
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
        
        // Button hover effects
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        // Contact form functionality (if needed)
        const contactButtons = document.querySelectorAll('button');
        contactButtons.forEach(button => {
            if (button.textContent.includes('התחילו עכשיו') || button.textContent.includes('צרו קשר')) {
                button.addEventListener('click', function() {
                    alert('תודה על הפנייה! נחזור אליכם בהקדם.');
                });
            }
        });
    </script>
</body>
</html>`;
};
