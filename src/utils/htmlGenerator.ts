
import { getHeroImageUrl } from "./heroImageUtils";

const renderServiceCards = (serviceCards: any, colors: any) => {
  return `
    <div class="p-8" style="background-color: ${colors.background};">
      <h2 class="text-3xl font-bold mb-8 text-center" style="color: ${colors.text};">
        <i class="ri-target-line text-2xl ml-3" style="color: ${colors.accent};"></i>
        השירותים שלנו
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        ${serviceCards.map((service: any) => `
          <div class="group p-6 rounded-2xl border hover:scale-105 transition-all duration-300"
               style="background-color: rgba(255,255,255,0.05); border-color: ${colors.primary}40;">
            <div class="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-2xl"
                 style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});">
              ${service.icon}
            </div>
            <h3 class="font-bold mb-2" style="color: ${colors.primary};">${service.title}</h3>
            <p class="text-sm" style="color: ${colors.text};">${service.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

const renderTimeline = (timelineSteps: any, colors: any) => {
  return `
    <div class="p-8" style="background-color: ${colors.background};">
      <h2 class="text-3xl font-bold mb-12 text-center" style="color: ${colors.text};">
        <i class="ri-calendar-line text-2xl ml-3" style="color: ${colors.secondary};"></i>
        התהליך שלנו
      </h2>
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <div class="absolute right-8 top-0 bottom-0 w-0.5" style="background: linear-gradient(to bottom, ${colors.primary}, ${colors.secondary});"></div>
          ${timelineSteps.map((step: any) => `
            <div class="relative flex items-center mb-12">
              <div class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg z-10"
                   style="background-color: ${step.color};">
                ${step.step}
              </div>
              <div class="mr-8">
                <h3 class="text-xl font-bold mb-2" style="color: ${step.color};">${step.title}</h3>
                <p style="color: ${colors.text};">${step.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
};

const renderPricing = (plans: any, colors: any) => {
  return `
    <div class="p-8" style="background-color: ${colors.background};">
      <h2 class="text-3xl font-bold mb-12 text-center" style="color: ${colors.text};">
        <i class="ri-award-line text-2xl ml-3" style="color: ${colors.accent};"></i>
        התכניות שלנו
      </h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        ${plans.map((plan: any) => `
          <div class="p-8 rounded-2xl border relative ${plan.highlighted ? 'scale-105 shadow-2xl' : ''}"
               style="background-color: ${plan.highlighted ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)'};
                      border-color: ${plan.highlighted ? colors.accent : `${colors.primary}40`};">
            ${plan.highlighted ? `
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white text-sm font-bold"
                   style="background-color: ${colors.accent};">
                הכי פופולרי
              </div>
            ` : ''}
            <h3 class="text-2xl font-bold mb-4" style="color: ${colors.primary};">${plan.name}</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold" style="color: ${colors.text};">${plan.price}</span>
              <span class="text-gray-400">/${plan.period}</span>
            </div>
            <ul class="space-y-3 mb-8">
              ${plan.features.map((feature: string) => `
                <li class="flex items-center">
                  <i class="ri-check-line text-lg ml-2" style="color: ${colors.accent};"></i>
                  <span style="color: ${colors.text};">${feature}</span>
                </li>
              `).join('')}
            </ul>
            <button class="w-full rounded-xl font-bold"
                    style="background-color: ${plan.highlighted ? colors.accent : colors.primary}; color: white; border: none;">
              ${plan.buttonText}
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

const renderEmotional = (emotional: any, colors: any) => {
  return `
    <div class="p-8" style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});">
      <h2 class="text-3xl font-bold mb-8 text-center flex items-center justify-center text-white">
        <i class="ri-heart-line text-2xl ml-3"></i>
        ${emotional.title}
      </h2>
      <div class="p-8 rounded-xl max-w-4xl mx-auto">
        <p class="text-lg leading-relaxed text-center text-gray-200">
          ${emotional.content}
        </p>
      </div>
    </div>
  `;
};

const renderWhyChooseUs = (whyChoose: any, colors: any) => {
  return `
    <div class="p-12 relative overflow-hidden" style="background-color: ${colors.background};">
      <!-- Background Animation Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-32 h-32 rounded-full animate-pulse"
             style="background: radial-gradient(circle, ${colors.primary}, transparent);"></div>
        <div class="absolute bottom-20 right-20 w-24 h-24 rounded-full animate-pulse"
             style="background: radial-gradient(circle, ${colors.secondary}, transparent); animation-delay: 0.3s;"></div>
        <div class="absolute top-1/2 left-1/2 w-40 h-40 rounded-full animate-pulse"
             style="background: radial-gradient(circle, ${colors.accent}, transparent); animation-delay: 0.7s;"></div>
      </div>

      <div class="relative z-10">
        <h2 class="text-4xl font-bold mb-4 text-center" style="color: ${colors.text};">
          <i class="ri-award-line text-3xl ml-3" style="color: ${colors.accent};"></i>
          ${whyChoose.title}
        </h2>
        <p class="text-center text-lg mb-12 opacity-80" style="color: ${colors.text};">
          הסיבות המובילות לבחור בנו מבין כל האפשרויות
        </p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          ${whyChoose.items.map((item: any) => `
            <div class="group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer"
                 style="background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
                        border: 1px solid ${colors.primary}30;
                        backdrop-filter: blur(10px);
                        box-shadow: 0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1);">
              
              <!-- 3D Icon Container -->
              <div class="relative mb-6">
                <div class="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 relative"
                     style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
                            box-shadow: 0 10px 25px ${colors.primary}40, inset 0 1px 0 rgba(255,255,255,0.2);">
                  
                  <!-- 3D Effect Shadow -->
                  <div class="absolute inset-0 rounded-2xl transform translate-y-1 -z-10"
                       style="background: linear-gradient(135deg, ${colors.primary}80, ${colors.secondary}80);
                              filter: blur(4px);"></div>
                  
                  <!-- Icon -->
                  <i class="ri-${item.icon} text-3xl text-white group-hover:scale-110 transition-transform duration-300"
                     style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);"></i>
                  
                  <!-- Shine Effect -->
                  <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style="background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);"></div>
                </div>

                <!-- Floating Particles -->
                <div class="absolute -top-2 -right-2 w-3 h-3 rounded-full opacity-60 animate-pulse" 
                     style="background-color: ${colors.accent};"></div>
                <div class="absolute -bottom-1 -left-1 w-2 h-2 rounded-full opacity-40 animate-pulse" 
                     style="background-color: ${colors.secondary}; animation-delay: 0.5s;"></div>
              </div>
              
              <!-- Content -->
              <div class="text-center relative">
                <p class="text-lg leading-relaxed font-medium group-hover:text-opacity-90 transition-all duration-300"
                   style="color: ${colors.text}; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
                  ${item.text}
                </p>
                
                <!-- Hover Glow Effect -->
                <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"
                     style="background: radial-gradient(circle at center, ${colors.primary}, transparent 70%);"></div>
              </div>

              <!-- Border Glow -->
              <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"
                   style="background: linear-gradient(145deg, ${colors.primary}20, ${colors.secondary}20);
                          filter: blur(1px);"></div>
            </div>
          `).join('')}
        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-12">
          <p class="text-lg mb-6 opacity-80" style="color: ${colors.text};">
            מוכנים להתחיל את המסע איתנו?
          </p>
          <button class="px-12 py-4 text-lg font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
                  style="background: linear-gradient(135deg, ${colors.accent}, ${colors.primary});
                         color: white;
                         box-shadow: 0 10px 30px ${colors.accent}40;">
            בואו נתחיל עכשיו ✨
          </button>
        </div>
      </div>
    </div>
  `;
};

export const generateHtmlFile = (content: any, colors: any, formData: any, heroImage?: string) => {
  const finalHeroImage = formData.heroStyle === 'image' ? getHeroImageUrl(content, heroImage || '', formData) : null;
  
  const renderCreativeElements = (content: any, colors: any) => {
    if (!content.creativeElements || content.creativeElements.length === 0) {
      return '';
    }

    return content.creativeElements.map((element: any) => {
      switch (element.type) {
        case 'whychoose':
          return renderWhyChooseUs(element.content, colors);
        case 'serviceCards':
          return renderServiceCards(element.content, colors);
        case 'timeline':
          return renderTimeline(element.content, colors);
        case 'pricing':
          return renderPricing(element.content, colors);
        case 'emotional':
          return renderEmotional(element.content, colors);
        default:
          return '';
      }
    }).join('');
  };

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${content.headline}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet">
    <style>
        body { 
            background-color: ${colors.background}; 
            color: ${colors.text}; 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .gradient-bg {
            background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%);
        }
        .hero-bg {
            ${finalHeroImage 
              ? `background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${finalHeroImage}'); background-size: cover; background-position: center;`
              : `background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%);`
            }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <div class="hero-bg p-12 text-center relative overflow-hidden min-h-screen flex flex-col justify-center">
        <div class="relative z-10">
            <div class="inline-block mb-6 text-lg px-4 py-2 border rounded-full" 
                 style="background-color: rgba(255,255,255,0.2); color: white; border-color: rgba(255,255,255,0.3);">
                ${content.badge}
            </div>
            
            <h1 class="text-4xl md:text-6xl font-bold mb-6" style="color: ${colors.headlineColor || 'white'};">
                ${content.headline}
            </h1>
            
            <p class="text-xl mb-8 max-w-2xl mx-auto leading-relaxed" 
               style="color: ${colors.subheadlineColor || 'rgba(255,255,255,0.9)'};">
                ${content.subheadline}
            </p>
            
            <button class="text-xl px-10 py-4 rounded-xl font-bold mb-8 hover:scale-105 transition-transform shadow-2xl" 
                    style="background-color: ${colors.accent}; color: white; border: none;">
                ${content.cta}
            </button>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-4xl mx-auto">
                ${Object.entries(content.stats).map(([key, value]) => `
                    <div class="p-6 rounded-2xl hover:scale-105 transition-transform shadow-lg"
                         style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});">
                        <div class="text-3xl md:text-4xl font-bold text-white mb-2">${value}</div>
                        <div class="text-white font-semibold text-lg">${key}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
    
    ${renderCreativeElements(content, colors)}

    <!-- About Section -->
    <div class="p-8" style="background-color: ${colors.background};">
        <h2 class="text-3xl font-bold mb-8 text-center flex items-center justify-center" 
            style="color: ${colors.aboutColor || colors.text};">
            <i class="ri-team-line text-2xl ml-3" style="color: ${colors.secondary};"></i>
            ${content.aboutTitle}
        </h2>
        <div class="p-8 rounded-xl border max-w-4xl mx-auto" 
             style="background-color: rgba(255,255,255,0.05); border-color: ${colors.secondary}40;">
            <p class="text-lg leading-relaxed text-center" 
               style="color: ${colors.aboutTextColor || colors.text};">
                ${content.aboutText}
            </p>
        </div>
    </div>

    <!-- Testimonials Section -->
    <div class="p-8" style="background-color: ${colors.background};">
        <h2 class="text-3xl font-bold mb-8 text-center flex items-center justify-center" 
            style="color: ${colors.text};">
            <i class="ri-chat-quote-line text-2xl ml-3" style="color: ${colors.primary};"></i>
            מה אומרים עלינו
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
            ${content.testimonials.map((testimonial: any) => `
                <div class="p-6 rounded-xl border hover:scale-105 transition-transform" 
                     style="background-color: rgba(255,255,255,0.05); border-color: ${colors.primary}40;">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl"
                             style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});">
                            ${testimonial.image}
                        </div>
                        <div class="mr-4">
                            <div class="font-semibold" style="color: ${colors.primary};">${testimonial.name}</div>
                            <div class="text-gray-400 text-sm">${testimonial.role}</div>
                        </div>
                    </div>
                    <p class="mb-4 text-sm leading-relaxed" style="color: ${colors.text};">
                        "${testimonial.content}"
                    </p>
                    <div class="flex">
                        ${Array(testimonial.rating).fill('').map(() => 
                            '<i class="ri-star-fill text-yellow-400"></i>'
                        ).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    </div>

    <!-- FAQ Section -->
    <div class="p-8" style="background-color: ${colors.background};">
        <h2 class="text-3xl font-bold mb-8 text-center flex items-center justify-center" 
            style="color: ${colors.text};">
            <i class="ri-question-line text-2xl ml-3" style="color: ${colors.secondary};"></i>
            שאלות נפוצות
        </h2>
        <div class="max-w-4xl mx-auto space-y-4">
            ${content.faq.map((item: any) => `
                <div class="p-6 rounded-xl border hover:scale-105 transition-transform" 
                     style="background-color: rgba(255,255,255,0.05); border-color: ${colors.secondary}40;">
                    <h3 class="font-semibold mb-3 text-lg" style="color: ${colors.secondary};">
                        ${item.question}
                    </h3>
                    <p class="leading-relaxed" style="color: ${colors.text};">
                        ${item.answer}
                    </p>
                </div>
            `).join('')}
        </div>
    </div>
    
    <!-- Contact Section -->
    <div class="p-8" style="background-color: ${colors.background};">
        <div class="p-8 rounded-2xl border text-center max-w-4xl mx-auto" 
             style="background-color: rgba(255,255,255,0.05); border-color: ${colors.primary}40;">
            <h2 class="text-2xl font-bold mb-6 flex items-center justify-center" 
                style="color: ${colors.contactColor || colors.text};">
                <i class="ri-message-3-line text-xl ml-3" style="color: ${colors.accent};"></i>
                ${content.contactTitle}
            </h2>
            <div class="p-6 rounded-xl mb-6" style="background-color: rgba(0,0,0,0.2);">
                <div class="whitespace-pre-line leading-relaxed" 
                     style="color: ${colors.contactTextColor || colors.text};">
                    ${formData.contactInfo}
                </div>
            </div>
            <button class="text-xl px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform" 
                    style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}); color: white; border: none;">
                ${content.cta}
            </button>
        </div>
    </div>
</body>
</html>`;
};
