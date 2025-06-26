
import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, colors: ColorScheme, formData: any, heroImageUrl?: string) => {
  const finalHeroImage = formData.heroStyle === 'image' && heroImageUrl ? heroImageUrl : null;
  
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
            background: linear-gradient(to bottom, #111827, #000000, #111827);
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .silver-icon {
            color: rgba(192, 192, 192, 0.8);
            background: linear-gradient(135deg, rgba(192, 192, 192, 0.1), rgba(169, 169, 169, 0.05));
            backdrop-filter: blur(10px);
            border: 1px solid rgba(192, 192, 192, 0.2);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .silver-icon:hover {
            color: rgba(192, 192, 192, 1);
            border-color: rgba(192, 192, 192, 0.4);
            transform: translateY(-2px);
        }

        .tech-card {
            background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(30,30,30,0.9));
            backdrop-filter: blur(15px);
            border: 1px solid rgba(192, 192, 192, 0.2);
            border-radius: 15px;
            transition: all 0.3s ease;
        }

        .tech-card:hover {
            transform: translateY(-3px);
            border-color: rgba(192, 192, 192, 0.4);
        }

        .tech-button {
            background: linear-gradient(135deg, ${colors.accent}, ${colors.primary});
            border: none;
            transition: all 0.3s ease;
            border-radius: 12px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            text-align: center;
        }

        .tech-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .tech-form {
            background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(20,20,20,0.95));
            backdrop-filter: blur(20px);
            border: 2px solid rgba(192, 192, 192, 0.1);
            border-radius: 20px;
        }

        .form-field {
            background: rgba(0,0,0,0.6);
            border: 1px solid rgba(192, 192, 192, 0.2);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            border-radius: 10px;
            color: white;
            padding: 0.75rem 1rem;
            width: 100%;
            font-size: 1rem;
        }

        .form-field:focus {
            background: rgba(0,0,0,0.8);
            border-color: rgba(192, 192, 192, 0.5);
            outline: none;
        }

        .form-field::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }

        .stats-card {
            background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(30,30,30,0.8));
            backdrop-filter: blur(15px);
            border: 1px solid rgba(192, 192, 192, 0.2);
            border-radius: 15px;
            transition: all 0.3s ease;
            padding: 1.5rem;
            text-align: center;
        }

        .stats-card:hover {
            transform: translateY(-3px);
            border-color: rgba(192, 192, 192, 0.4);
        }

        .neon-text {
            text-shadow: 
                0 0 5px ${colors.accent}60,
                0 0 10px ${colors.accent}40;
        }

        .hero-section {
            min-height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: ${finalHeroImage 
                ? `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${finalHeroImage}')` 
                : `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}10, ${colors.background})`};
            background-size: cover;
            background-position: center;
            padding: 2rem;
        }

        .section {
            padding: 3rem 0;
        }

        .section-title {
            font-size: 3rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 3rem;
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
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }

        /* Mobile Responsive Styles */
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
            
            .silver-icon {
                width: 3rem !important;
                height: 3rem !important;
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
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
            .form-grid {
                grid-template-columns: 1fr;
            }
        }

        textarea.form-field {
            resize: vertical;
            min-height: 120px;
        }

        .contact-submit {
            width: 100%;
            padding: 1rem 2rem;
            font-size: 1.25rem;
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="tech-card" style="display: inline-block; padding: 0.75rem 1.5rem; margin-bottom: 2rem;">
                ${content.badge}
            </div>
            
            <h1 class="hero-title neon-text" style="font-size: 4rem; font-weight: bold; margin-bottom: 2rem; color: ${colors.headlineColor || 'white'};">
                ${content.headline}
            </h1>
            
            <p class="hero-subtitle" style="font-size: 1.5rem; margin-bottom: 3rem; opacity: 0.9; color: ${colors.subheadlineColor || 'rgba(255,255,255,0.9)'};">
                ${content.subheadline}
            </p>
            
            <a href="#contact" class="tech-button" style="padding: 1.25rem 2.5rem; font-size: 1.25rem; margin-bottom: 4rem;">
                ${content.cta}
            </a>

            <!-- Stats Grid -->
            <div class="grid stats-grid" style="grid-template-columns: repeat(4, 1fr); max-width: 800px; margin: 0 auto;">
                ${Object.entries(content.stats).map(([key, value]) => `
                    <div class="stats-card">
                        <div class="neon-text" style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">${value}</div>
                        <div style="font-size: 0.875rem; opacity: 0.8;">${key}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Advantages Section -->
    <section class="section">
        <div class="container">
            <h2 class="section-title neon-text">💎 למה לבחור בנו?</h2>
            
            <div class="grid grid-cols-4">
                <div class="tech-card p-8 text-center">
                    <div class="silver-icon" style="width: 5rem; height: 5rem; margin: 0 auto 1.5rem;">
                        <span style="font-size: 2rem;">🎧</span>
                    </div>
                    <h3 class="neon-text" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">תמיכה 24/7</h3>
                    <p style="color: #d1d5db; font-size: 0.875rem;">זמינים עבורכם בכל שעה</p>
                </div>

                <div class="tech-card p-8 text-center">
                    <div class="silver-icon" style="width: 5rem; height: 5rem; margin: 0 auto 1.5rem;">
                        <span style="font-size: 2rem;">🏆</span>
                    </div>
                    <h3 class="neon-text" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">ניסיון רב שנים</h3>
                    <p style="color: #d1d5db; font-size: 0.875rem;">מומחיות מוכחת בתחום</p>
                </div>

                <div class="tech-card p-8 text-center">
                    <div class="silver-icon" style="width: 5rem; height: 5rem; margin: 0 auto 1.5rem;">
                        <span style="font-size: 2rem;">⭐</span>
                    </div>
                    <h3 class="neon-text" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">שירות מקצועי</h3>
                    <p style="color: #d1d5db; font-size: 0.875rem;">איכות ללא פשרות</p>
                </div>

                <div class="tech-card p-8 text-center">
                    <div class="silver-icon" style="width: 5rem; height: 5rem; margin: 0 auto 1.5rem;">
                        <span style="font-size: 2rem;">💰</span>
                    </div>
                    <h3 class="neon-text" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">מחירים הוגנים</h3>
                    <p style="color: #d1d5db; font-size: 0.875rem;">שקיפות מלאה במחירים</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="section" style="background: linear-gradient(to right, rgba(17, 24, 39, 0.3), rgba(0, 0, 0, 0.5));">
        <div class="container">
            <h2 class="section-title neon-text">⚡ השירותים שלנו</h2>
            
            <div class="grid grid-cols-3">
                <div class="text-center">
                    <div class="tech-card p-8">
                        <div class="silver-icon" style="width: 5rem; height: 5rem; margin: 0 auto 2rem;">
                            <span style="font-size: 2rem;">⚡</span>
                        </div>
                        <h3 class="neon-text" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; color: ${colors.text};">
                            מהירות במתן שירות
                        </h3>
                        <p style="color: ${colors.text}; opacity: 0.8; font-size: 1.125rem;">
                            זמן תגובה מהיר ושירות יעיל
                        </p>
                    </div>
                </div>

                <div class="text-center">
                    <div class="tech-card p-8">
                        <div class="silver-icon" style="width: 5rem; height: 5rem; margin: 0 auto 2rem;">
                            <span style="font-size: 2rem;">🛡️</span>
                        </div>
                        <h3 class="neon-text" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; color: ${colors.text};">
                            אמינות וביטחון
                        </h3>
                        <p style="color: ${colors.text}; opacity: 0.8; font-size: 1.125rem;">
                            שירות אמין עם רמת ביטחון גבוהה
                        </p>
                    </div>
                </div>

                <div class="text-center">
                    <div class="tech-card p-8">
                        <div class="silver-icon" style="width: 5rem; height: 5rem; margin: 0 auto 2rem;">
                            <span style="font-size: 2rem;">🎧</span>
                        </div>
                        <h3 class="neon-text" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; color: ${colors.text};">
                            תמיכה מלאה
                        </h3>
                        <p style="color: ${colors.text}; opacity: 0.8; font-size: 1.125rem;">
                            ליווי צמוד לאורך כל הדרך
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" class="section">
        <div class="container">
            <div class="tech-form contact-form" style="padding: 3rem;">
                <div class="text-center mb-12">
                    <div class="silver-icon" style="width: 6rem; height: 6rem; margin: 0 auto 2rem;">
                        <span style="font-size: 2.5rem;">💬</span>
                    </div>
                    
                    <h2 class="section-title neon-text" style="color: ${colors.text}; margin-bottom: 1.5rem;">
                        בואו נתחיל לעבוד יחד
                    </h2>
                    <p style="font-size: 1.25rem; color: #d1d5db;">מלא את הפרטים ונחזור אליך בהקדם</p>
                </div>
                
                <form onsubmit="handleSubmit(event)">
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
                    <div class="tech-card p-6 text-center">
                        <div class="silver-icon" style="width: 4rem; height: 4rem; margin: 0 auto 1rem;">
                            <span style="font-size: 1.5rem;">📞</span>
                        </div>
                        <h4 class="neon-text" style="font-weight: bold; margin-bottom: 0.75rem; font-size: 1.125rem;">טלפון</h4>
                        <p style="color: #d1d5db; font-size: 1.125rem;">050-1234567</p>
                    </div>
                    
                    <div class="tech-card p-6 text-center">
                        <div class="silver-icon" style="width: 4rem; height: 4rem; margin: 0 auto 1rem;">
                            <span style="font-size: 1.5rem;">📧</span>
                        </div>
                        <h4 class="neon-text" style="font-weight: bold; margin-bottom: 0.75rem; font-size: 1.125rem;">אימייל</h4>
                        <p style="color: #d1d5db; font-size: 1.125rem;">info@business.co.il</p>
                    </div>
                    
                    <div class="tech-card p-6 text-center">
                        <div class="silver-icon" style="width: 4rem; height: 4rem; margin: 0 auto 1rem;">
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

        // Add loading animation to buttons
        document.querySelectorAll('.tech-button').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                }, 200);
            });
        });
    </script>
</body>
</html>`;
};
