// Simple HTML Generator - Creates exact HTML from current page data
export const generatePageHTML = (templateData: any) => {
  // Extract data from the template
  const title = templateData?.hero?.title || 'ברוכים הבאים';
  const subtitle = templateData?.hero?.subtitle || 'פתרונות מתקדמים לעסק שלך';
  const button1Text = templateData?.hero?.button1Text || 'צור קשר';
  const button2Text = templateData?.hero?.button2Text || 'למד עוד';
  
  // Get colors from template styles
  const primaryColor = templateData?.styles?.primaryColor || '#1e40af';
  const secondaryColor = templateData?.styles?.secondaryColor || '#7c3aed';
  const backgroundColor = templateData?.styles?.backgroundColor || '#ffffff';
  const textColor = templateData?.styles?.textColor || '#000000';
  
  // Generate clean, responsive HTML
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: ${textColor};
            background-color: ${backgroundColor};
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});
            color: white;
            padding: 100px 0;
            text-align: center;
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
        
        .hero h1 {
            font-size: 4rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }
        
        .hero p {
            font-size: 1.5rem;
            margin-bottom: 3rem;
            opacity: 0.9;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn {
            display: inline-block;
            padding: 1rem 2rem;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            text-decoration: none;
            border-radius: 10px;
            border: 2px solid white;
            font-weight: bold;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }
        
        .btn:hover {
            background: white;
            color: ${primaryColor};
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .btn-primary {
            background: white;
            color: ${primaryColor};
        }
        
        .btn-primary:hover {
            background: rgba(255, 255, 255, 0.9);
            transform: translateY(-2px);
        }
        
        /* Features Section */
        .features {
            padding: 100px 0;
            background: #f8fafc;
        }
        
        .features h2 {
            text-align: center;
            font-size: 3rem;
            margin-bottom: 3rem;
            color: ${primaryColor};
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .feature-card {
            background: white;
            padding: 2.5rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
        }
        
        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: ${primaryColor};
        }
        
        .feature-card p {
            color: #6b7280;
            line-height: 1.6;
        }
        
        /* Contact Section */
        .contact {
            padding: 100px 0;
            background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});
            color: white;
            text-align: center;
        }
        
        .contact h2 {
            font-size: 3rem;
            margin-bottom: 2rem;
        }
        
        .contact p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 3rem;
            flex-wrap: wrap;
            margin-top: 2rem;
        }
        
        .contact-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 1.5rem;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Footer */
        .footer {
            background: #1f2937;
            color: white;
            padding: 60px 0 40px;
            text-align: center;
        }
        
        .footer p {
            margin-bottom: 1rem;
        }
        
        .footer .credit {
            color: #6b7280;
            font-size: 0.9rem;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.2rem;
            }
            
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .btn {
                width: 100%;
                max-width: 300px;
            }
            
            .features h2,
            .contact h2 {
                font-size: 2rem;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
            
            .contact-info {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>${title}</h1>
            <p>${subtitle}</p>
            <div class="hero-buttons">
                <a href="#contact" class="btn btn-primary">${button1Text}</a>
                <a href="#features" class="btn">${button2Text}</a>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
        <div class="container">
            <h2>השירותים שלנו</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">⭐</div>
                    <h3>איכות מובטחת</h3>
                    <p>אנו מתחייבים לספק שירות ברמה הגבוהה ביותר עם תוצאות מעולות</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🚀</div>
                    <h3>ביצוע מהיר</h3>
                    <p>פתרונות מהירים ויעילים שיעזרו לכם להגיע למטרות שלכם בזמן קצר</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <h3>פתרונות מותאמים</h3>
                    <p>כל פתרון מותאם אישית לצרכים הספציפיים של העסק שלכם</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>צור קשר</h2>
            <p>נשמח לשמוע מכם ולעזור לכם להגשים את החלומות שלכם</p>
            <div class="contact-info">
                <div class="contact-item">
                    <h4>📧 אימייל</h4>
                    <p>info@example.com</p>
                </div>
                <div class="contact-item">
                    <h4>📞 טלפון</h4>
                    <p>050-123-4567</p>
                </div>
                <div class="contact-item">
                    <h4>📍 כתובת</h4>
                    <p>תל אביב, ישראל</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; ${new Date().getFullYear()} ${title}. כל הזכויות שמורות.</p>
            <p class="credit">נוצר עם LeadGrid</p>
        </div>
    </footer>
</body>
</html>`;
};