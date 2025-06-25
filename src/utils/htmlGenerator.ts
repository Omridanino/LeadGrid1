
export const generateHtmlFile = (content: any, colors: any, formData: any, getHeroImageUrl: () => string) => {
  const heroImageUrl = getHeroImageUrl();
  
  // Generate creative elements HTML
  const generateCreativeElementsHTML = () => {
    if (!content.creativeElements || !Array.isArray(content.creativeElements)) {
      return '';
    }

    return content.creativeElements.map(element => {
      switch (element.type) {
        case 'serviceCards':
          return `
            <section class="py-20 bg-gray-900">
              <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center text-white mb-16">השירותים שלנו</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  ${element.content.map(card => `
                    <div class="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                      <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: ${colors.primary}">
                        <span class="text-white text-xl">${card.icon}</span>
                      </div>
                      <h3 class="text-xl font-bold text-white mb-3">${card.title}</h3>
                      <p class="text-gray-300">${card.desc}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </section>
          `;

        case 'timeline':
          return `
            <section class="py-20 bg-gray-800">
              <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center text-white mb-16">התהליך שלנו</h2>
                <div class="relative max-w-4xl mx-auto">
                  <div class="absolute right-8 top-0 bottom-0 w-1 bg-gradient-to-b" style="background: linear-gradient(to bottom, ${colors.secondary}, ${colors.primary})"></div>
                  ${element.content.map((step, index) => `
                    <div class="flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}">
                      <div class="flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}">
                        <div class="bg-gray-700 rounded-xl p-6">
                          <div class="text-2xl font-bold mb-2" style="color: ${step.color}">${step.step}</div>
                          <h3 class="text-xl font-bold text-white mb-3">${step.title}</h3>
                          <p class="text-gray-300">${step.desc}</p>
                        </div>
                      </div>
                      <div class="w-8 h-8 rounded-full border-4 border-white z-10 relative flex items-center justify-center" style="background-color: ${step.color}">
                        <span class="text-white text-sm font-bold">${step.step}</span>
                      </div>
                      <div class="flex-1"></div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </section>
          `;

        case 'pricing':
          return `
            <section class="py-20 bg-gray-900">
              <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center text-white mb-16">התכניות שלנו</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  ${element.content.map(plan => `
                    <div class="bg-gray-800 rounded-xl p-8 relative ${plan.highlighted ? 'ring-4 transform scale-105' : ''}" style="ring-color: ${plan.highlighted ? colors.accent : 'transparent'}">
                      ${plan.highlighted ? `<div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white text-sm font-bold" style="background-color: ${colors.accent}">הכי פופולרי</div>` : ''}
                      <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: ${colors.primary}">
                        <span class="text-white text-xl">${plan.icon || '💼'}</span>
                      </div>
                      <h3 class="text-2xl font-bold text-white mb-4">${plan.name}</h3>
                      <div class="text-4xl font-bold mb-2" style="color: ${colors.primary}">${plan.price}</div>
                      <div class="text-gray-400 mb-6">${plan.period}</div>
                      <ul class="space-y-3 mb-8">
                        ${plan.features.map(feature => `
                          <li class="flex items-center text-gray-300">
                            <span class="ml-2" style="color: ${colors.accent}">✓</span>
                            ${feature}
                          </li>
                        `).join('')}
                      </ul>
                      <button class="w-full py-3 px-6 rounded-xl font-semibold text-white transition-colors" style="background-color: ${plan.highlighted ? colors.accent : colors.primary}">
                        ${plan.buttonText}
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            </section>
          `;

        case 'floatingFeatures':
          return `
            <section class="py-20 bg-gray-800 relative overflow-hidden">
              <div class="container mx-auto px-4 relative z-10">
                <h2 class="text-4xl font-bold text-center text-white mb-16">היתרונות שלנו</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                  ${element.content.map(feature => `
                    <div class="rounded-xl p-6 text-white transform hover:scale-105 transition-transform" style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary})">
                      <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                        <span class="text-white text-xl">⚡</span>
                      </div>
                      <h3 class="text-xl font-bold mb-3">${feature.title}</h3>
                      <p>${feature.desc}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </section>
          `;

        case '3dElements':
          return `
            <section class="py-20 bg-gray-900 relative overflow-hidden">
              <div class="container mx-auto px-4 relative z-10">
                <h2 class="text-4xl font-bold text-center text-white mb-16">יתרונות העסק שלנו</h2>
                <div class="relative min-h-96">
                  <div class="absolute top-20 right-10 p-4 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse" style="background-color: ${colors.primary}; animation-delay: 0s; animation-duration: 3s;">
                    <div class="text-2xl mb-2">📊</div>
                    <div class="text-white font-bold text-sm">ניתוח נתונים</div>
                  </div>
                  <div class="absolute top-40 left-20 p-4 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse" style="background-color: ${colors.secondary}; animation-delay: 0.5s; animation-duration: 3s;">
                    <div class="text-2xl mb-2">🎯</div>
                    <div class="text-white font-bold text-sm">יעדים ברורים</div>
                  </div>
                  <div class="absolute bottom-32 right-16 p-4 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse" style="background-color: ${colors.accent}; animation-delay: 1s; animation-duration: 3s;">
                    <div class="text-2xl mb-2">💡</div>
                    <div class="text-white font-bold text-sm">רעיונות חדשניים</div>
                  </div>
                  <div class="absolute bottom-20 left-10 p-4 rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse" style="background-color: ${colors.primary}; animation-delay: 1.5s; animation-duration: 3s;">
                    <div class="text-2xl mb-2">🚀</div>
                    <div class="text-white font-bold text-sm">צמיחה מהירה</div>
                  </div>
                  <div class="text-center">
                    <p class="text-lg text-white">העסק שלנו מתמחה ב${formData.businessType} ומספק שירות ברמה הגבוהה ביותר</p>
                  </div>
                </div>
              </div>
            </section>
          `;

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
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap');
        body { font-family: 'Heebo', sans-serif; }
        :root {
            --primary: ${colors.primary};
            --secondary: ${colors.secondary};
            --accent: ${colors.accent};
            --background: ${colors.background};
            --text: ${colors.text};
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        .animate-pulse {
            animation: pulse 3s infinite;
        }
    </style>
</head>
<body class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden" 
             style="background: ${formData.heroStyle === 'gradient' 
               ? `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` 
               : formData.heroStyle === 'image' 
                 ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${heroImageUrl}') center/cover` 
                 : colors.background};">
        <div class="container mx-auto px-4 text-center relative z-10">
            <div class="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <span class="text-sm font-medium">${content.badge}</span>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight" style="color: ${colors.headlineColor};">
                ${content.headline}
            </h1>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" style="color: ${colors.subheadlineColor};">
                ${content.subheadline}
            </p>
            <button class="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors">
                ${content.cta}
            </button>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gray-800">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                ${Object.entries(content.stats).map(([key, value]) => `
                    <div class="text-center p-6 rounded-2xl hover:scale-105 transition-transform" style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary})">
                        <div class="text-3xl md:text-4xl font-bold text-white mb-2">${value}</div>
                        <div class="text-white font-semibold text-lg">${key}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-900">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16" style="color: ${colors.featuresColor};">
                ${content.featuresTitle}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${content.features.map(feature => `
                    <div class="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: ${colors.primary}">
                            <span class="text-white text-xl">✓</span>
                        </div>
                        <p class="text-gray-300">${feature}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    ${generateCreativeElementsHTML()}

    <!-- About Section -->
    <section class="py-20 bg-gray-800">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8" style="color: ${colors.aboutColor};">
                    ${content.aboutTitle}
                </h2>
                <p class="text-xl leading-relaxed" style="color: ${colors.aboutTextColor};">
                    ${content.aboutText}
                </p>
            </div>
        </div>
    </section>

    <!-- Emotional Section -->
    ${content.emotional ? `
    <section class="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-8 text-white">
                ${content.emotional.title}
            </h2>
            <p class="text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
                ${content.emotional.content}
            </p>
        </div>
    </section>
    ` : ''}

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-900">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center text-white mb-16">מה אומרים עלינו</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${content.testimonials.map(testimonial => `
                    <div class="bg-gray-800 rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl" style="background-color: ${colors.primary}">
                                ${testimonial.image}
                            </div>
                            <div class="mr-4">
                                <div class="font-semibold text-white">${testimonial.name}</div>
                                <div class="text-gray-400 text-sm">${testimonial.role}</div>
                            </div>
                        </div>
                        <p class="text-gray-300 mb-4">"${testimonial.content}"</p>
                        <div class="flex text-yellow-400">
                            ${'★'.repeat(testimonial.rating)}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-800">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center text-white mb-16">שאלות נפוצות</h2>
            <div class="max-w-3xl mx-auto space-y-6">
                ${content.faq.map(item => `
                    <div class="bg-gray-700 rounded-xl p-6">
                        <h3 class="text-xl font-semibold text-white mb-3">${item.question}</h3>
                        <p class="text-gray-300">${item.answer}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-gray-900">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-8" style="color: ${colors.contactColor};">
                ${content.contactTitle}
            </h2>
            <div class="text-xl mb-8" style="color: ${colors.contactTextColor};">
                ${formData.contactInfo.split('\n').map(line => `<div>${line}</div>`).join('')}
            </div>
            <button class="px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all" style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary})">
                צור קשר עכשיו
            </button>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 py-8">
        <div class="container mx-auto px-4 text-center">
            <p class="text-gray-400">© 2024 ${formData.businessName}. כל הזכויות שמורות.</p>
        </div>
    </footer>
</body>
</html>`;
};
