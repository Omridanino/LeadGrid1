import { getPremiumTextColor } from './premium-colors';

// Generate Features section HTML
export const generateFeaturesSection = (template: any, isPremium: boolean): string => {
  return `
    <!-- Features Section -->
    <section class="features">
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16">
                ${template.features.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.primaryColor}; border-color: ${isPremium ? 'rgba(255,255,255,0.3)' : template.styles.primaryColor};">${template.features.badge}</div>` : ''}
                <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor};">${template.features.title}</h2>
                ${template.features.subtitle ? `<p class="text-xl" style="color: ${isPremium ? getPremiumTextColor(template.id) : template.styles.textColor}; opacity: 0.8;">${template.features.subtitle}</p>` : ''}
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                ${template.features.items.map((feature: any) => {
                  if (isPremium) {
                    return `
                      <div class="relative group perspective-1000">
                        <div class="relative transform-gpu transition-all duration-300 preserve-3d group-hover:rotateY-5">
                          <!-- Floating background with glass effect -->
                          <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"></div>
                          
                          <!-- Glow effect -->
                          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                          
                          <!-- Content -->
                          <div class="relative z-10 p-8 space-y-4">
                            <!-- Floating icon -->
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                              <i class="ri-${feature.icon} text-2xl text-white"></i>
                            </div>
                            
                            <!-- Title -->
                            <h3 class="text-xl font-bold text-white bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                              ${feature.title}
                            </h3>
                            
                            <!-- Description -->
                            <p class="text-blue-100/80 leading-relaxed">
                              ${feature.description}
                            </p>
                            
                            <!-- Floating particles -->
                            <div class="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                            <div class="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse delay-500"></div>
                          </div>
                        </div>
                      </div>`;
                  } else {
                    return `
                      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                        <div class="text-4xl mb-4" style="color: ${template.styles.primaryColor};">
                          <i class="ri-${feature.icon}"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2" style="color: ${template.styles.textColor};">${feature.title}</h3>
                        <p style="color: ${template.styles.textColor}; opacity: 0.8;">${feature.description}</p>
                      </div>`;
                  }
                }).join('')}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.primaryColor};">
                    ${template.features.button1Icon ? `<i class="ri-${template.features.button1Icon}"></i>` : ''}
                    ${template.features.button1Text}
                </a>
                <a href="#testimonials" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                    ${template.features.button2Icon ? `<i class="ri-${template.features.button2Icon}"></i>` : ''}
                    ${template.features.button2Text}
                </a>
            </div>
        </div>
    </section>`;
};

// Generate Testimonials section HTML
export const generateTestimonialsSection = (template: any, isPremium: boolean): string => {
  return `
    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials">
        ${isPremium ? `
        <!-- Animated background particles -->
        <div class="absolute inset-0">
            ${Array.from({length: 20}, (_, i) => `
                <div class="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse" style="left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation-delay: ${i * 0.2}s;"></div>
            `).join('')}
        </div>
        ` : ''}
        
        <div class="max-w-6xl mx-auto px-6 relative z-10">
            ${isPremium ? `
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                ${template.testimonials.title}
            </h2>
            
            <!-- Premium testimonials grid - all same size -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                ${template.testimonials.testimonials.map((testimonial: any) => `
                    <div class="relative group">
                        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"></div>
                        
                        <!-- Glow effect -->
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                        
                        <!-- Content -->
                        <div class="relative z-10 p-8 space-y-6">
                            <!-- Quote icon -->
                            <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                                <i class="ri-double-quotes-l text-xl text-white"></i>
                            </div>
                            
                            <!-- Rating -->
                            <div class="flex gap-1">
                                ${Array(testimonial.rating).fill(0).map(() => `<span style="color: #fbbf24; font-size: 1.25rem;">★</span>`).join('')}
                            </div>
                            
                            <!-- Content -->
                            <p class="text-blue-100/90 leading-relaxed italic">
                                "${testimonial.content}"
                            </p>
                            
                            <!-- Author info -->
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                    ${testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 class="font-bold text-white">
                                        ${testimonial.name}
                                    </h4>
                                    <p class="text-blue-200/70 text-sm">
                                        ${testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            ` : `
            <div class="text-center mb-12">
                ${template.testimonials.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${template.styles.primaryColor}; border-color: ${template.styles.primaryColor};">${template.testimonials.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold" style="color: ${template.styles.textColor};">${template.testimonials.title}</h2>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 mb-12">
                ${template.testimonials.testimonials.map((testimonial: any) => `
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                        <div class="flex mb-4">
                            ${Array(testimonial.rating).fill(0).map(() => '<span style="color: #fbbf24; font-size: 1.25rem;">★</span>').join('')}
                        </div>
                        <p class="mb-4 italic" style="color: ${template.styles.textColor}; opacity: 0.9;">"${testimonial.content}"</p>
                        <div>
                            <p class="font-bold" style="color: ${template.styles.textColor};">${testimonial.name}</p>
                            <p class="text-sm opacity-70" style="color: ${template.styles.textColor};">${testimonial.role}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            `}

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.primaryColor};">
                    ${template.testimonials.button1Icon ? `<i class="ri-${template.testimonials.button1Icon}"></i>` : ''}
                    ${template.testimonials.button1Text}
                </a>
                <a href="#about" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                    ${template.testimonials.button2Icon ? `<i class="ri-${template.testimonials.button2Icon}"></i>` : ''}
                    ${template.testimonials.button2Text}
                </a>
            </div>
        </div>
    </section>`;
};

// Generate Pricing section HTML
export const generatePricingSection = (template: any, isPremium: boolean): string => {
  return `
    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            ${isPremium ? `
            <!-- Animated liquid background -->
            <div class="absolute inset-0 opacity-30">
                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
                    <defs>
                        <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color: #3b82f6; stop-opacity: 0.3;" />
                            <stop offset="50%" style="stop-color: #8b5cf6; stop-opacity: 0.2;" />
                            <stop offset="100%" style="stop-color: #06b6d4; stop-opacity: 0.3;" />
                        </linearGradient>
                    </defs>
                    <path d="M0,300 Q250,200 500,300 T1000,300 L1000,1000 L0,1000 Z" fill="url(#liquidGradient)" />
                </svg>
            </div>
            
            <div class="text-center mb-16">
                ${template.pricing.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${getPremiumTextColor(template.id)}; border-color: rgba(255,255,255,0.3);">${template.pricing.badge}</div>` : ''}
                <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">${template.pricing.title}</h2>
                ${template.pricing.subtitle ? `<p class="text-xl text-blue-100/70 max-w-2xl mx-auto">${template.pricing.subtitle}</p>` : ''}
            </div>
            ` : `
            <div class="text-center mb-12">
                ${template.pricing.badge ? `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4" style="color: ${template.styles.primaryColor}; border-color: ${template.styles.primaryColor};">${template.pricing.badge}</div>` : ''}
                <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: ${template.styles.textColor};">${template.pricing.title}</h2>
                ${template.pricing.subtitle ? `<p class="text-xl opacity-80" style="color: ${template.styles.textColor};">${template.pricing.subtitle}</p>` : ''}
            </div>
            `}
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                ${template.pricing.plans.map((plan: any, index: number) => `
                    <div class="relative group perspective-1000 ${plan.recommended ? 'lg:scale-105' : ''}">
                        ${plan.recommended ? `
                            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                <div class="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                                    <span style="color: currentColor;">★</span>
                                    מומלץ
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="relative transform-gpu transition-all duration-500 preserve-3d group-hover:rotateY-5">
                            <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"></div>
                            
                            ${plan.recommended ? '<div class="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl blur-sm"></div>' : ''}
                            
                            <div class="relative z-10 p-8 space-y-6">
                                <h3 class="text-2xl font-bold text-white text-center">${plan.name}</h3>
                                
                                <div class="text-center">
                                    <div class="text-4xl md:text-5xl font-bold text-white mb-2">${plan.price}</div>
                                    <div class="text-blue-200/70">${plan.period}</div>
                                </div>
                                
                                <ul class="space-y-3">
                                    ${plan.features.map((feature: string) => `
                                        <li class="flex items-center gap-3 text-blue-100/80">
                                            <span style="color: #4ade80; font-size: 1.25rem;">✓</span>
                                            ${feature}
                                        </li>
                                    `).join('')}
                                </ul>
                                
                                <a href="#contact" class="w-full py-3 font-medium rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center text-center" style="background: ${plan.recommended ? 'linear-gradient(to right, #fbbf24, #f97316)' : 'linear-gradient(to right, #3b82f6, #8b5cf6)'}; color: ${plan.recommended ? '#111827' : '#ffffff'};">
                                    ${plan.buttonText}
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.primaryColor};">
                    ${template.pricing.button1Icon ? `<i class="ri-${template.pricing.button1Icon}"></i>` : ''}
                    ${template.pricing.button1Text}
                </a>
                <a href="#faq" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-11 px-8 text-white" style="background-color: ${template.styles.secondaryColor};">
                    ${template.pricing.button2Icon ? `<i class="ri-${template.pricing.button2Icon}"></i>` : ''}
                    ${template.pricing.button2Text}
                </a>
            </div>
        </div>
    </section>`;
};
