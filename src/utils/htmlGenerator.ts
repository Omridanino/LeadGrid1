
import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, colors: ColorScheme, formData: any, heroImageUrl?: string) => {
  const finalHeroImage = formData.heroStyle === 'image' && heroImageUrl ? heroImageUrl : null;
  const isTechy3D = formData.designStyle === '3d';
  
  // Tech background for 3D style
  const techBackground = isTechy3D && content.techBackground ? content.techBackground : null;
  
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.businessName} - ${content.headline}</title>
    <meta name="description" content="${content.subheadline}">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: white;
            background: ${techBackground ? `${techBackground}, 
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)` 
              : 'linear-gradient(to bottom, #111827, #000000, #111827)'};
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }

        .tech-card {
            background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(30,30,30,0.9));
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .tech-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
            pointer-events: none;
        }

        .tech-card:hover {
            transform: translateY(-8px) rotateX(5deg);
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1);
        }

        .tech-button {
            background: linear-gradient(135deg, ${colors.accent}, ${colors.primary});
            border: none;
            transition: all 0.4s ease;
            border-radius: 15px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .tech-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .tech-button:hover::before {
            left: 100%;
        }

        .tech-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.4);
        }

        .tech-form {
            background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(20,20,20,0.95));
            backdrop-filter: blur(20px);
            border: 2px solid rgba(192, 192, 192, 0.1);
            border-radius: 20px;
        }

        .form-field {
            background: rgba(0,0,0,0.6);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            border-radius: 15px;
            color: white;
            padding: 1rem 1.5rem;
            width: 100%;
            font-size: 1.125rem;
        }

        .form-field:focus {
            background: rgba(0,0,0,0.8);
            border-color: rgba(255, 255, 255, 0.5);
            outline: none;
        }

        .form-field::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }

        .stats-card {
            background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(30,30,30,0.9));
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            transition: all 0.4s ease;
            padding: 1.5rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .stats-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
            pointer-events: none;
        }

        .stats-card:hover {
            transform: translateY(-8px);
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .neon-text {
            text-shadow: 
                0 0 10px ${colors.accent}80,
                0 0 20px ${colors.accent}60,
                0 0 30px ${colors.accent}40;
        }

        .floating-animation {
            animation: floating 6s ease-in-out infinite;
        }

        @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.1); }
            50% { box-shadow: 0 0 40px rgba(255,255,255,0.2); }
        }

        .hero-section {
            min-height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: ${finalHeroImage 
                ? `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${finalHeroImage}')` 
                : techBackground ? 'transparent' : `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}10, ${colors.background})`};
            background-size: cover;
            background-position: center;
            padding: 2rem;
        }

        .section {
            padding: 5rem 0;
        }

        .section-title {
            font-size: 3rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 4rem;
            color: ${colors.text};
        }

        .grid {
            display: grid;
            gap: 2rem;
        }

        .grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
        }

        .grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
        }

        .grid-cols-4 {
            grid-template-columns: repeat(4, 1fr);
        }

        .text-center {
            text-align: center;
        }

        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mb-16 { margin-bottom: 4rem; }

        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .p-12 { padding: 3rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }

        /* Enhanced mobile responsiveness */
        @media (max-width: 768px) {
            .hero-section {
                min-height: 70vh !important;
                padding: 2rem 1rem !important;
            }
            
            .hero-title {
                font-size: 2rem !important;
                line-height: 1.2 !important;
                margin-bottom: 1rem !important;
            }
            
            .hero-subtitle {
                font-size: 1.1rem !important;
                margin-bottom: 2rem !important;
            }
            
            .section-title {
                font-size: 1.75rem !important;
            }
            
            .grid-cols-4,
            .grid-cols-3,
            .grid-cols-2 {
                grid-template-columns: 1fr !important;
            }
            
            .stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 0.75rem !important;
            }
            
            .tech-card {
                padding: 1.5rem !important;
            }
            
            .tech-button {
                padding: 0.75rem 1.5rem !important;
                font-size: 1rem !important;
            }
            
            .section {
                padding: 2rem 0 !important;
            }
        }

        @media (max-width: 480px) {
            .hero-title {
                font-size: 1.75rem !important;
            }
            
            .hero-subtitle {
                font-size: 1rem !important;
            }
            
            .section-title {
                font-size: 1.5rem !important;
            }
        }

        .contact-form {
            max-width: 800px;
            margin: 0 auto;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
            .form-grid {
                grid-template-columns: 1fr;
            }
        }

        textarea.form-field {
            resize: vertical;
            min-height: 150px;
        }

        .contact-submit {
            width: 100%;
            padding: 1.5rem 2rem;
            font-size: 1.25rem;
            margin-top: 1rem;
        }

        .action-buttons {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .action-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .share-btn { background: #10b981; }
        .share-btn:hover { background: #059669; transform: scale(1.1); }

        .pdf-btn { background: #dc2626; }
        .pdf-btn:hover { background: #b91c1c; transform: scale(1.1); }
    </style>
</head>
<body>
    <!-- Action Buttons -->
    <div class="action-buttons">
        <button class="action-btn share-btn" onclick="shareContent()" title="שתף דף">📤</button>
        <button class="action-btn pdf-btn" onclick="exportToPDF()" title="ייצא ל-PDF">📄</button>
    </div>

    <!-- Section 1: Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="floating-animation" style="max-width: 1000px; margin: 0 auto;">
                <div class="tech-card pulse-glow" style="display: inline-block; padding: 0.75rem 1.5rem; margin-bottom: 2rem;">
                    ${content.badge}
                </div>
                
                <h1 class="hero-title neon-text" style="font-size: 4rem; font-weight: bold; margin-bottom: 2rem; color: ${colors.headlineColor || 'white'}; text-shadow: 0 0 30px ${colors.accent}, 0 8px 16px rgba(0,0,0,0.5);">
                    ${content.headline}
                </h1>
                
                <p class="hero-subtitle" style="font-size: 1.5rem; margin-bottom: 3rem; opacity: 0.9; max-width: 800px; margin-left: auto; margin-right: auto; color: ${colors.subheadlineColor || 'rgba(255,255,255,0.9)'};">
                    ${content.subheadline}
                </p>
                
                <a href="#contact" class="tech-button" style="padding: 1.25rem 2.5rem; font-size: 1.25rem; margin-bottom: 4rem;">
                    ${content.cta}
                </a>

                <!-- Stats Grid -->
                <div class="grid stats-grid" style="grid-template-columns: repeat(4, 1fr); max-width: 800px; margin: 0 auto;">
                    ${Object.entries(content.stats).map(([key, value], index) => `
                        <div class="stats-card floating-animation" style="animation-delay: ${index * 0.2}s;">
                            <div class="neon-text" style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${value}</div>
                            <div style="font-size: 0.875rem; opacity: 0.8;">${key}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>

    ${isTechy3D && content.sections ? `
    <!-- Section 2: Emotional Section -->
    <section class="section">
        <div class="container">
            <div style="max-width: 1000px; margin: 0 auto; text-align: center;">
                <div class="tech-card floating-animation" style="padding: 3rem;">
                    <div style="font-size: 4rem; margin-bottom: 2rem;">${content.sections.emotionalSection.icon}</div>
                    <h2 class="neon-text" style="font-size: 3rem; font-weight: bold; margin-bottom: 2rem; color: ${colors.text};">
                        ${content.sections.emotionalSection.title}
                    </h2>
                    <p style="font-size: 1.25rem; line-height: 1.8; opacity: 0.9; color: ${colors.text};">
                        ${content.sections.emotionalSection.content}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 3: Why Us -->
    <section class="section">
        <div class="container">
            <h2 class="section-title neon-text" style="color: ${colors.text};">
                ${content.sections.whyUs.title}
            </h2>
            
            <div class="grid grid-cols-2">
                ${content.sections.whyUs.items.map((item: any, idx: number) => `
                    <div class="tech-card floating-animation" style="padding: 2rem; animation-delay: ${idx * 0.1}s;">
                        <div style="font-size: 3rem; margin-bottom: 1.5rem;">${item.icon}</div>
                        <h3 class="neon-text" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: ${colors.text};">
                            ${item.title}
                        </h3>
                        <p style="opacity: 0.8; line-height: 1.6; color: ${colors.text};">
                            ${item.desc}
                        </p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Section 4: What We Give -->
    <section class="section" style="background: linear-gradient(to right, rgba(17, 24, 39, 0.3), rgba(0, 0, 0, 0.5));">
        <div class="container">
            <h2 class="section-title neon-text" style="color: ${colors.text};">
                ${content.sections.whatWeGive.title}
            </h2>
            
            <div class="grid grid-cols-2">
                ${content.sections.whatWeGive.items.map((item: any, idx: number) => `
                    <div class="text-center">
                        <div class="tech-card floating-animation" style="padding: 2rem; animation-delay: ${idx * 0.1}s;">
                            <div style="font-size: 3rem; margin-bottom: 2rem;">${item.icon}</div>
                            <h3 class="neon-text" style="font-size: 1.75rem; font-weight: bold; margin-bottom: 1.5rem; color: ${colors.text};">
                                ${item.title}
                            </h3>
                            <p style="color: ${colors.text}; opacity: 0.8; font-size: 1.125rem; line-height: 1.6;">
                                ${item.desc}
                            </p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Section 5: Testimonials -->
    <section class="section">
        <div class="container">
            <h2 class="section-title neon-text" style="color: ${colors.text};">💭 מה אומרים עלינו</h2>
            
            <div class="grid grid-cols-3">
                ${content.sections.testimonials.map((testimonial: any, idx: number) => `
                    <div class="tech-card floating-animation" style="padding: 2rem; border-radius: 20px; animation-delay: ${idx * 0.1}s;">
                        <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                            <div class="tech-card" style="width: 4rem; height: 4rem; border-radius: 12px; margin-left: 1rem; display: flex; align-items: center; justify-content: center;">
                                <span style="font-size: 1.125rem;">${testimonial.image}</span>
                            </div>
                            <div>
                                <h4 style="font-weight: bold; font-size: 1.25rem; color: ${colors.primary};">
                                    ${testimonial.name}
                                </h4>
                                <p style="font-size: 0.875rem; opacity: 0.7; color: ${colors.text};">
                                    ${testimonial.role}
                                </p>
                            </div>
                        </div>
                        <p style="margin-bottom: 1.5rem; font-style: italic; font-size: 1.125rem; color: ${colors.text};">
                            "${testimonial.content}"
                        </p>
                        <div style="display: flex;">
                            ${'★'.repeat(testimonial.rating).split('').map(() => 
                                '<span style="color: #fbbf24; font-size: 1.25rem;">★</span>'
                            ).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : `
    <!-- Legacy sections for non-tech styles -->
    <section class="section">
        <div class="container">
            <h2 class="section-title neon-text">💎 למה לבחור בנו?</h2>
            
            <div class="grid grid-cols-4">
                <div class="tech-card text-center" style="padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1.5rem;">🎧</div>
                    <h3 class="neon-text" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">תמיכה 24/7</h3>
                    <p style="color: #d1d5db; font-size: 0.875rem;">זמינים עבורכם בכל שעה</p>
                </div>

                <div class="tech-card text-center" style="padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1.5rem;">🏆</div>
                    <h3 class="neon-text" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">ניסיון רב שנים</h3>
                    <p style="color: #d1d5db; font-size: 0.875rem;">מומחיות מוכחת בתחום</p>
                </div>

                <div class="tech-card text-center" style="padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1.5rem;">⭐</div>
                    <h3 class="neon-text" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">שירות מקצועי</h3>
                    <p style="color: #d1d5db; font-size: 0.875rem;">איכות ללא פשרות</p>
                </div>

                <div class="tech-card text-center" style="padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1.5rem;">💰</div>
                    <h3 class="neon-text" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">מחירים הוגנים</h3>
                    <p style="color: #d1d5db; font-size: 0.875rem;">שקיפות מלאה במחירים</p>
                </div>
            </div>
        </div>
    </section>
    `}

    <!-- Section 6: Contact Form -->
    <section id="contact" class="section">
        <div class="container">
            <div class="tech-form contact-form" style="padding: 3rem;">
                <div class="text-center mb-12">
                    <div class="tech-card floating-animation" style="width: 6rem; height: 6rem; margin: 0 auto 2rem; border-radius: 24px; display: flex; align-items: center; justify-content: center;">
                        <span style="font-size: 2.5rem;">💬</span>
                    </div>
                    
                    <h2 class="section-title neon-text" style="color: ${colors.text}; margin-bottom: 1.5rem;">
                        ${isTechy3D && content.sections ? content.sections.contactTitle : content.contactTitle}
                    </h2>
                    <p style="font-size: 1.25rem; color: #d1d5db;">מלא את הפרטים ונחזור אליך בהקדם</p>
                </div>
                
                <form onsubmit="handleSubmit(event)" style="max-width: 600px; margin: 0 auto;">
                    <div class="form-grid">
                        <div>
                            <label style="display: block; font-size: 1.125rem; font-weight: 500; margin-bottom: 0.75rem; color: #d1d5db;">שם מלא *</label>
                            <input type="text" placeholder="השם שלך" class="form-field" required style="height: 3.5rem;">
                        </div>
                        <div>
                            <label style="display: block; font-size: 1.125rem; font-weight: 500; margin-bottom: 0.75rem; color: #d1d5db;">כתובת אימייל *</label>
                            <input type="email" placeholder="example@email.com" class="form-field" required style="height: 3.5rem;">
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; font-size: 1.125rem; font-weight: 500; margin-bottom: 0.75rem; color: #d1d5db;">מספר טלפון</label>
                        <input type="tel" placeholder="050-1234567" class="form-field" style="height: 3.5rem;">
                    </div>
                    
                    <div style="margin-bottom: 2rem;">
                        <label style="display: block; font-size: 1.125rem; font-weight: 500; margin-bottom: 0.75rem; color: #d1d5db;">הודעה *</label>
                        <textarea placeholder="איך נוכל לעזור לך?" class="form-field" required></textarea>
                    </div>
                    
                    <button type="submit" class="tech-button contact-submit">
                        📧 שלח הודעה
                    </button>
                </form>

                <!-- Contact Info Cards -->
                <div class="grid grid-cols-3" style="margin-top: 4rem;">
                    <div class="tech-card text-center floating-animation" style="padding: 2rem;">
                        <div class="tech-card" style="width: 4rem; height: 4rem; margin: 0 auto 1rem; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem;">📞</span>
                        </div>
                        <h4 class="neon-text" style="font-weight: bold; margin-bottom: 0.75rem; font-size: 1.125rem;">טלפון</h4>
                        <p style="color: #d1d5db; font-size: 1.125rem;">050-1234567</p>
                    </div>
                    
                    <div class="tech-card text-center floating-animation" style="padding: 2rem; animation-delay: 0.1s;">
                        <div class="tech-card" style="width: 4rem; height: 4rem; margin: 0 auto 1rem; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem;">📧</span>
                        </div>
                        <h4 class="neon-text" style="font-weight: bold; margin-bottom: 0.75rem; font-size: 1.125rem;">אימייל</h4>
                        <p style="color: #d1d5db; font-size: 1.125rem;">info@business.co.il</p>
                    </div>
                    
                    <div class="tech-card text-center floating-animation" style="padding: 2rem; animation-delay: 0.2s;">
                        <div class="tech-card" style="width: 4rem; height: 4rem; margin: 0 auto 1rem; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem;">📍</span>
                        </div>
                        <h4 class="neon-text" style="font-weight: bold; margin-bottom: 0.75rem; font-size: 1.125rem;">כתובת</h4>
                        <p style="color: #d1d5db; font-size: 1.125rem;">תל אביב, ישראל</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form submission handler
        function handleSubmit(event) {
            event.preventDefault();
            alert('תודה על פנייתך! נחזור אליך בהקדם האפשרי.');
            event.target.reset();
        }

        // Share functionality
        function shareContent() {
            if (navigator.share) {
                navigator.share({
                    title: '${content.headline}',
                    text: '${content.subheadline}',
                    url: window.location.href,
                }).then(() => {
                    console.log('Successfully shared');
                }).catch((error) => {
                    console.log('Error sharing:', error);
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('הקישור הועתק ללוח!');
                });
            }
        }

        // Export to PDF functionality
        function exportToPDF() {
            window.print();
        }

        // Add enhanced button animations
        document.querySelectorAll('.tech-button').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.4)';
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                }, 200);
            });
        });

        // Enhanced card hover effects
        document.querySelectorAll('.tech-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) rotateX(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    </script>
</body>
</html>`;
};
