import { ColorScheme } from "./ColorEditor";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage?: string;
  elements?: string[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements = [] }: LandingPagePreviewProps) => {
  if (!content) {
    return (
      <div className="w-full h-96 bg-gray-900 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">טוען תצוגה מקדימה...</p>
      </div>
    );
  }

  const finalHeroImage = formData.heroStyle === 'image' && heroImage ? heroImage : null;

  return (
    <div className="w-full bg-black text-white overflow-hidden rounded-lg" dir="rtl">
      <style>{`
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, ${currentColors.primary}80, ${currentColors.secondary}60, ${currentColors.accent}40);
          filter: blur(1px);
          animation: float 6s ease-in-out infinite;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        .floating-orb:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 15%;
          left: 8%;
          animation-delay: 0s;
        }

        .floating-orb:nth-child(2) {
          width: 120px;
          height: 120px;
          top: 55%;
          right: 12%;
          animation-delay: -2s;
        }

        .floating-orb:nth-child(3) {
          width: 60px;
          height: 60px;
          top: 75%;
          left: 65%;
          animation-delay: -4s;
        }

        .floating-orb:nth-child(4) {
          width: 100px;
          height: 100px;
          top: 25%;
          right: 55%;
          animation-delay: -1s;
        }

        .floating-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: ${currentColors.accent};
          border-radius: 50%;
          animation: particleFloat 8s linear infinite;
          opacity: 0.7;
        }

        .floating-particle:nth-child(5) {
          top: 30%;
          left: 20%;
          animation-delay: -1s;
        }

        .floating-particle:nth-child(6) {
          top: 60%;
          right: 30%;
          animation-delay: -3s;
        }

        .floating-particle:nth-child(7) {
          top: 80%;
          left: 40%;
          animation-delay: -5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-40px) translateX(20px) rotate(90deg) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-80px) translateX(-15px) rotate(180deg) scale(1.2);
            opacity: 1;
          }
          75% {
            transform: translateY(-30px) translateX(-35px) rotate(270deg) scale(1.05);
            opacity: 0.7;
          }
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }

        .glassmorphism-bg::before {
          content: '';
          position: absolute;
          top: 3rem;
          left: 3rem;
          width: 12rem;
          height: 12rem;
          border-radius: 50%;
          background: conic-gradient(from 45deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent}, ${currentColors.primary});
          animation: spin 25s linear infinite, pulse 5s ease-in-out infinite, drift 15s ease-in-out infinite;
          filter: blur(10px);
          transform: perspective(1200px) rotateX(45deg) rotateY(45deg);
        }

        .glassmorphism-bg::after {
          content: '';
          position: absolute;
          bottom: 3rem;
          right: 3rem;
          width: 10rem;
          height: 10rem;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          background: linear-gradient(135deg, ${currentColors.secondary}70, ${currentColors.accent}50);
          animation: morph 10s ease-in-out infinite, float 8s ease-in-out infinite, drift 20s ease-in-out infinite;
          filter: blur(8px);
          transform: perspective(1000px) rotateX(-30deg) rotateY(60deg);
        }

        @keyframes spin {
          from { transform: perspective(1200px) rotateX(45deg) rotateY(45deg) rotate(0deg); }
          to { transform: perspective(1200px) rotateX(45deg) rotateY(45deg) rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.15); }
        }

        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(20px) translateY(-15px); }
          50% { transform: translateX(-15px) translateY(-25px); }
          75% { transform: translateX(-10px) translateY(10px); }
        }

        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }

        .glassmorphism-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05));
          border: 2px solid ${currentColors.primary}50;
          backdrop-filter: blur(25px);
          box-shadow: 
            0 25px 80px rgba(0,0,0,0.4), 
            inset 0 3px 0 rgba(255,255,255,0.25),
            0 0 0 1px rgba(255,255,255,0.1);
          transform: perspective(1000px) rotateX(8deg) rotateY(3deg);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1);
          animation: cardFloat 4s ease-in-out infinite;
        }

        @keyframes cardFloat {
          0%, 100% { transform: perspective(1000px) rotateX(8deg) rotateY(3deg) translateY(0px); }
          50% { transform: perspective(1000px) rotateX(8deg) rotateY(3deg) translateY(-8px); }
        }

        .glassmorphism-card:hover {
          transform: perspective(1000px) rotateX(8deg) rotateY(3deg) scale(1.08) translateY(-15px);
          box-shadow: 
            0 35px 100px rgba(0,0,0,0.5), 
            inset 0 3px 0 rgba(255,255,255,0.35),
            0 0 40px ${currentColors.primary}40;
        }

        .badge {
          background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1));
          border: 2px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(10px);
          transform: perspective(300px) rotateX(10deg);
          animation: badgeFloat 3s ease-in-out infinite;
        }

        @keyframes badgeFloat {
          0%, 100% { transform: perspective(300px) rotateX(10deg) translateY(0); }
          50% { transform: perspective(300px) rotateX(10deg) translateY(-5px); }
        }

        .icon-container {
          background: linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent});
          box-shadow: 
            0 15px 30px ${currentColors.primary}60, 
            inset 0 2px 0 rgba(255,255,255,0.4);
          transform: perspective(400px) rotateX(20deg) rotateY(10deg);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
          animation: iconFloat 2s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% { transform: perspective(400px) rotateX(20deg) rotateY(10deg) translateY(0); }
          50% { transform: perspective(400px) rotateX(20deg) rotateY(10deg) translateY(-8px); }
        }

        .icon-container:hover {
          transform: perspective(400px) rotateX(20deg) rotateY(10deg) scale(1.2) rotate(8deg) translateY(-10px);
          box-shadow: 
            0 20px 40px ${currentColors.primary}70, 
            inset 0 2px 0 rgba(255,255,255,0.5),
            0 0 25px ${currentColors.accent}50;
        }

        .cta-button {
          background: linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary}, ${currentColors.secondary});
          box-shadow: 
            0 15px 40px ${currentColors.accent}60,
            0 0 20px ${currentColors.primary}40;
          transform: perspective(400px) rotateX(6deg);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
          animation: buttonGlow 2s ease-in-out infinite;
        }

        .cta-button:hover {
          transform: perspective(400px) rotateX(6deg) scale(1.1) translateY(-3px);
          box-shadow: 
            0 20px 50px ${currentColors.accent}70,
            0 0 30px ${currentColors.primary}50;
        }

        @keyframes buttonGlow {
          0%, 100% { box-shadow: 0 15px 40px ${currentColors.accent}60, 0 0 20px ${currentColors.primary}40; }
          50% { box-shadow: 0 18px 45px ${currentColors.accent}70, 0 0 25px ${currentColors.primary}50; }
        }

        .stat-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1));
          backdrop-filter: blur(15px);
          border: 2px solid ${currentColors.primary}40;
          transform: perspective(500px) rotateX(8deg) rotateY(3deg);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          animation: statFloat 3s ease-in-out infinite;
        }

        @keyframes statFloat {
          0%, 100% { transform: perspective(500px) rotateX(8deg) rotateY(3deg) translateY(0); }
          50% { transform: perspective(500px) rotateX(8deg) rotateY(3deg) translateY(-8px); }
        }

        .stat-card:hover {
          transform: perspective(500px) rotateX(8deg) rotateY(3deg) scale(1.1) translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.25);
        }
      `}</style>

      {/* Enhanced Floating Elements */}
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center text-center p-8 overflow-hidden"
               style={{
                 background: finalHeroImage 
                   ? `radial-gradient(circle at 30% 70%, ${currentColors.primary}40 0%, transparent 50%), radial-gradient(circle at 70% 30%, ${currentColors.secondary}30 0%, transparent 50%), linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('${finalHeroImage}')` 
                   : `radial-gradient(circle at 30% 70%, ${currentColors.primary} 0%, transparent 50%), radial-gradient(circle at 70% 30%, ${currentColors.secondary} 0%, transparent 50%), linear-gradient(135deg, ${currentColors.background} 0%, ${currentColors.accent}20 100%)`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        
        <div className="glassmorphism-bg absolute inset-0 opacity-8"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="badge inline-block px-6 py-3 mb-6 text-white rounded-full font-semibold text-sm">
            {content.badge}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg"
              style={{ 
                color: currentColors.headlineColor || 'white',
                background: `linear-gradient(135deg, ${currentColors.headlineColor || 'white'}, ${currentColors.primary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            {content.headline}
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed"
             style={{ color: currentColors.subheadlineColor || 'rgba(255,255,255,0.9)' }}>
            {content.subheadline}
          </p>
          
          <a href="#contact" className="cta-button inline-block px-8 py-4 text-white font-bold rounded-lg text-lg transition-all duration-300">
            {content.cta}
          </a>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
            {Object.entries(content.stats).map(([key, value]) => (
              <div key={key} className="stat-card p-4 rounded-xl text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{String(value)}</div>
                <div className="text-sm text-white opacity-80">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 px-8">
        <div className="glassmorphism-bg absolute inset-0 opacity-5"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: currentColors.text }}>
            ⚡ התכונות המרכזיות שלנו
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "מהירות במתן שירות", desc: "זמן תגובה מהיר ושירות יעיל" },
              { icon: "🛡️", title: "אמינות וביטחון", desc: "שירות אמין עם רמת ביטחון גבוהה" },
              { icon: "🎧", title: "תמיכה 24/7", desc: "זמינים עבורכם בכל שעות היום" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="glassmorphism-card p-6 rounded-2xl">
                  <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: currentColors.text }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: currentColors.text }} className="opacity-80">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {content.whyChooseUs && elements.includes('whyChooseUs') && (
        <section className="relative py-16 px-8">
          <div className="glassmorphism-bg absolute inset-0 opacity-5"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{ color: currentColors.text }}>
              🏆 {content.whyChooseUs.title}
            </h2>
            <p className="text-center text-lg mb-12 opacity-80" style={{ color: currentColors.text }}>
              הסיבות המובילות לבחור בנו מבין כל האפשרויות
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.whyChooseUs.items.map((item: any, idx: number) => (
                <div key={idx} className="glassmorphism-card p-6 rounded-2xl flex items-center text-right">
                  <div className="icon-container w-12 h-12 rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ color: currentColors.primary }}>
                      יתרון מוביל
                    </h3>
                    <p style={{ color: currentColors.text }} className="opacity-80">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl mb-6" style={{ color: currentColors.text }}>
                מוכנים להתחיל את המסע איתנו?
              </p>
              <a href="#contact" className="cta-button inline-block px-8 py-4 text-white font-bold rounded-lg text-lg">
                בואו נתחיל עכשיו ✨
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {elements.includes('services') && (
        <section className="relative py-16 px-8">
          <div className="glassmorphism-bg absolute inset-0 opacity-5"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: currentColors.text }}>
              🎯 השירותים שלנו
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🔧", title: "פתרונות מקצועיים", desc: "שירותים מקצועיים המותאמים לצרכים שלכם", price: "החל מ₪199" },
                { icon: "👥", title: "ייעוץ אישי", desc: "ליווי צמוד ויעוץ מקצועי לאורך כל הדרך", price: "החל מ₪299" },
                { icon: "🚀", title: "פתרון מהיר", desc: "תוצאות מהירות ויעילות ללא פשרות", price: "החל מ₪399" }
              ].map((service, idx) => (
                <div key={idx} className="text-center">
                  <div className="glassmorphism-card p-6 rounded-2xl">
                    <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: currentColors.text }}>
                      {service.title}
                    </h3>
                    <p style={{ color: currentColors.text }} className="opacity-80 mb-4">
                      {service.desc}
                    </p>
                    <div className="text-lg font-bold" style={{ color: currentColors.accent }}>
                      {service.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {elements.includes('about') && (
        <section className="relative py-16 px-8">
          <div className="glassmorphism-bg absolute inset-0 opacity-5"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: currentColors.text }}>
              👥 {content.aboutTitle}
            </h2>
            <div className="glassmorphism-card p-8 rounded-2xl">
              <p className="text-lg leading-relaxed mb-6" 
                 style={{ color: currentColors.aboutTextColor || currentColors.text }}>
                {content.aboutText}
              </p>
              <a href="#about" className="cta-button inline-block px-8 py-4 text-white font-bold rounded-lg text-lg">
                למד עוד עלינו
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {elements.includes('testimonials') && (
        <section className="relative py-16 px-8">
          <div className="glassmorphism-bg absolute inset-0 opacity-5"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: currentColors.text }}>
              💭 מה אומרים עלינו
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {content.testimonials.map((testimonial: any, idx: number) => (
                <div key={idx} className="glassmorphism-card p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center ml-3"
                         style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
                      <span className="text-lg">{testimonial.image}</span>
                    </div>
                    <div>
                      <h4 className="font-bold" style={{ color: currentColors.primary }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm opacity-70" style={{ color: currentColors.text }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 italic" style={{ color: currentColors.text }}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex">
                    {'★'.repeat(testimonial.rating).split('').map((star, i) => (
                      <span key={i} className="text-yellow-400 text-lg">{star}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {elements.includes('faq') && (
        <section className="relative py-16 px-8">
          <div className="glassmorphism-bg absolute inset-0 opacity-5"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: currentColors.text }}>
              ❓ שאלות נפוצות
            </h2>
            
            <div className="space-y-6">
              {content.faq.map((item: any, idx: number) => (
                <div key={idx} className="glassmorphism-card p-6 rounded-2xl">
                  <h3 className="font-bold mb-3 text-lg" style={{ color: currentColors.secondary }}>
                    {item.question}
                  </h3>
                  <p style={{ color: currentColors.text }} className="opacity-80 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="relative py-16 px-8">
        <div className="glassmorphism-bg absolute inset-0 opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="glassmorphism-card p-8 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: currentColors.text }}>
              💬 {content.contactTitle}
            </h2>
            <div className="mb-8 whitespace-pre-line text-lg leading-relaxed"
                 style={{ color: currentColors.contactTextColor || currentColors.text }}>
              {formData.contactInfo}
            </div>
            <a href="#contact" className="cta-button inline-block px-8 py-4 text-white font-bold rounded-lg text-lg">
              {content.cta}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPagePreview;
