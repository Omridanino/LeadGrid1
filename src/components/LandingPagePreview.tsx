
import { ColorScheme } from "./ColorEditor";
import { FormData } from "@/utils/questionnaireUtils";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: FormData;
  heroImage?: string;
  elements: any[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements }: LandingPagePreviewProps) => {
  const finalHeroImage = formData.heroStyle === 'image' && heroImage ? heroImage : null;
  
  const shouldShowSection = (sectionId: string) => {
    if (!formData.selectedElements || formData.selectedElements.length === 0) {
      return true; // Show all sections if none selected
    }
    return formData.selectedElements.includes(sectionId);
  };

  const get3DStyles = () => ({
    background: `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%)`,
    color: currentColors.text,
    fontFamily: "'Inter', sans-serif"
  });

  const renderHeroSection = () => (
    <div className="relative min-h-screen flex items-center justify-center text-center px-8 py-20" 
         style={{
           background: finalHeroImage 
             ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${finalHeroImage}')` 
             : `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%)`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      
      {/* רקע אנימציה תלת מימדי */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white animate-pulse blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-white animate-bounce blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white animate-ping blur-md"></div>
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* באדג' מעולה */}
        <div className="inline-block mb-8">
          <span className="px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-full text-lg font-semibold backdrop-blur-lg shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
            ✨ {content.badge}
          </span>
        </div>

        {/* כותרת ראשית מרשימה */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-white drop-shadow-2xl transform hover:scale-105 transition-all duration-500">
          {content.headline}
        </h1>

        {/* תת כותרת */}
        <p className="text-2xl md:text-3xl mb-12 leading-relaxed text-white/95 font-light max-w-4xl mx-auto drop-shadow-lg">
          {content.subheadline}
        </p>

        {/* כפתור קריאה לפעולה מרשים */}
        <div className="mb-16">
          <a href="#contact" className="inline-block px-16 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-2xl font-bold text-2xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transform hover:-translate-y-2 animate-pulse">
            🚀 {content.cta}
          </a>
        </div>
        
        {/* סטטיסטיקות מרשימות */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(content.stats).map(([key, value]) => (
            <div key={key} className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transform hover:scale-110 transition-all duration-300 hover:bg-white/20">
              <div className="text-5xl md:text-6xl font-black mb-4 text-white drop-shadow-lg animate-bounce">
                {String(value)}
              </div>
              <div className="text-xl font-bold text-white/90 uppercase tracking-wide">
                {key}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* אפקט פרלקס */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );

  const renderWhyChooseSection = () => (
    <div className="py-24 px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
      {/* רקע אנימציה */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-white drop-shadow-2xl">
          🌟 {content.whyChooseUs.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {content.whyChooseUs.items.map((item: any, index: number) => (
            <div key={index} className="group transform hover:scale-110 transition-all duration-500">
              <div className="p-10 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 hover:border-white/40 hover:shadow-purple-500/30 transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:animate-bounce">
                  {item.icon === 'star-line' ? '⭐' : 
                   item.icon === 'award-line' ? '🏆' : 
                   item.icon === 'headphone-line' ? '🎧' : 
                   item.icon === 'price-tag-line' ? '💎' : '✨'}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                  {item.title || 'יתרון מוביל'}
                </h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="py-24 px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-12 text-white drop-shadow-2xl">
          👑 {content.aboutTitle}
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl leading-relaxed text-white/90 bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20">
            {content.aboutText}
          </p>
        </div>
      </div>
    </div>
  );

  const renderServicesSection = () => (
    <div className="py-24 px-8 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-white drop-shadow-2xl">
          🎯 השירותים המיוחדים שלנו
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'פתרונות מקצועיים', desc: 'שירותים מקצועיים המותאמים במיוחד לצרכים שלכם', price: '₪199', icon: '🛠️' },
            { title: 'ייעוץ אישי', desc: 'ליווי צמוד ויעוץ מקצועי לאורך כל הדרך', price: '₪299', icon: '👥' },
            { title: 'פתרון מהיר', desc: 'תוצאות מהירות ויעילות ללא פשרות באיכות', price: '₪399', icon: '🚀' }
          ].map((service, index) => (
            <div key={index} className="group transform hover:scale-105 transition-all duration-500">
              <div className="p-12 bg-gradient-to-br from-white/15 to-white/5 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 hover:border-white/40 hover:shadow-cyan-500/30 transition-all duration-300 h-full">
                <div className="text-6xl mb-6 group-hover:animate-spin transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="text-3xl font-black text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  החל מ{service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTestimonialsSection = () => (
    <div className="py-24 px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-white drop-shadow-2xl">
          💭 מה הלקוחות שלנו אומרים
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.testimonials.map((testimonial: any, index: number) => (
            <div key={index} className="group transform hover:scale-105 hover:-translate-y-4 transition-all duration-500">
              <div className="p-10 bg-gradient-to-br from-white/15 to-white/5 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 hover:border-white/40 hover:shadow-yellow-500/30 transition-all duration-300 h-full">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg group-hover:animate-bounce">
                    {testimonial.image}
                  </div>
                  <div className="mr-4 text-right">
                    <h4 className="font-bold text-xl text-white group-hover:text-yellow-300 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 text-lg">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-white/90 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex justify-center text-3xl">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFAQSection = () => (
    <div className="py-24 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-center text-white drop-shadow-2xl">
          ❓ שאלות נפוצות
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {content.faq.map((item: any, index: number) => (
            <div key={index} className="group transform hover:scale-102 transition-all duration-300">
              <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 hover:border-white/40 hover:shadow-blue-500/20 transition-all duration-300 p-10">
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors">
                  {item.question}
                </h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="py-24 px-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-12 text-white drop-shadow-2xl">
          💬 {content.contactTitle}
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 mb-12">
            <div className="text-2xl text-white/90 leading-relaxed whitespace-pre-line font-medium">
              {formData.contactInfo}
            </div>
          </div>
          <a href="#contact" className="inline-block px-16 py-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white rounded-2xl font-bold text-2xl transition-all duration-300 shadow-2xl hover:shadow-green-500/50 hover:scale-110 transform hover:-translate-y-2">
            🎉 {content.cta}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={get3DStyles()}>
      {renderHeroSection()}
      
      {shouldShowSection('why-choose') && renderWhyChooseSection()}
      {shouldShowSection('about') && renderAboutSection()}
      {shouldShowSection('services') && renderServicesSection()}
      {shouldShowSection('testimonials') && renderTestimonialsSection()}
      {shouldShowSection('faq') && renderFAQSection()}
      {shouldShowSection('contact') && renderContactSection()}
    </div>
  );
};

export default LandingPagePreview;
