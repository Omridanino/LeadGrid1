import { Star, Users, Award, Shield, Zap, Clock, Phone, Mail, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';

interface ContentSectionsProps {
  content: any;
  currentColors: any;
  formData: any;
  selectedElements: string[];
}

export const ContentSections = ({ content, currentColors, formData, selectedElements }: ContentSectionsProps) => {
  const getStyleClass = (baseClass: string) => {
    switch (formData.heroStyle) {
      case 'glass':
        return `${baseClass}-glassmorphism`;
      case 'image':
        return `${baseClass}-cinematic-3d`;
      case 'geometric':
        return `${baseClass}-geometric`;
      case 'metal':
        return `${baseClass}-metal`;
      default:
        return `${baseClass}-3d`;
    }
  };

  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    const iconMap = {
      'star': <Star className={className} />,
      'users': <Users className={className} />,
      'award': <Award className={className} />,
      'shield': <Shield className={className} />,
      'zap': <Zap className={className} />,
      'clock': <Clock className={className} />,
      'phone': <Phone className={className} />,
      'mail': <Mail className={className} />,
      'map-pin': <MapPin className={className} />,
      'check-circle': <CheckCircle className={className} />
    };
    return iconMap[iconName as keyof typeof iconMap] || <Star className={className} />;
  };

  // GLASSMORPHISM SECTIONS
  if (formData.heroStyle === 'glass') {
    return (
      <div className="glassmorphism-sections">
        {/* About Section - True Glassmorphism */}
        {selectedElements.includes('about') && (
          <section className="section-standard bg-glassmorphism-gradient">
            <div className="container-hero">
              <div className="glassmorphism-about-grid">
                <div className="glass-about-panel animate-slide-up">
                  <div className="glass-section-header">
                    <h2 className="typography-modern text-4xl md:text-5xl font-bold text-white mb-6">
                      {content?.about?.title || 'אודות'}
                    </h2>
                    <div className="glass-underline"></div>
                  </div>
                  <div className="glass-content-panel">
                    <p className="typography-body text-lg text-white/90 leading-relaxed mb-8">
                      {content?.about?.description || 'תיאור מפורט על העסק והשירותים המוצעים. אנו מתמחים במתן פתרונות מקצועיים ואמינים ללקוחותינו.'}
                    </p>
                  </div>
                </div>
                
                <div className="glass-about-stats animate-scale-in animate-delay-2">
                  <div className="glass-stats-floating">
                    {[
                      { icon: 'award', number: '5+', label: 'שנות ניסיון' },
                      { icon: 'users', number: '300+', label: 'לקוחות מרוצים' },
                      { icon: 'star', number: '4.9', label: 'דירוג ממוצע' }
                    ].map((stat, index) => (
                      <div key={index} className="glass-stat-floating-card">
                        <div className="glass-stat-icon">
                          {renderIcon(stat.icon, "w-8 h-8 text-blue-300")}
                        </div>
                        <div className="typography-modern text-3xl font-bold text-white mb-1">
                          {stat.number}
                        </div>
                        <div className="typography-body text-sm text-white/80">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Services Section - Glass Cards */}
        {selectedElements.includes('services') && (
          <section className="section-standard bg-glassmorphism-gradient-alt">
            <div className="container-hero">
              <div className="glass-section-header text-center mb-16 animate-slide-up">
                <h2 className="typography-modern text-4xl md:text-5xl font-bold text-white mb-6">
                  {content?.services?.title || 'השירותים שלנו'}
                </h2>
                <div className="glass-underline-center"></div>
              </div>

              <div className="glass-services-grid">
                {(content?.services?.items || [
                  { title: 'שירות ראשון', description: 'תיאור השירות הראשון', icon: 'zap' },
                  { title: 'שירות שני', description: 'תיאור השירות השני', icon: 'shield' },
                  { title: 'שירות שלישי', description: 'תיאור השירות השלישי', icon: 'award' }
                ]).map((service: any, index: number) => (
                  <div key={index} className="glass-service-card animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="glass-service-header">
                      <div className="glass-service-icon">
                        {renderIcon(service.icon || 'star', "w-8 h-8 text-blue-300")}
                      </div>
                      <h3 className="typography-modern text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                    </div>
                    <p className="typography-body text-white/80 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="glass-service-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section - Floating Glass */}
        {selectedElements.includes('testimonials') && (
          <section className="section-standard bg-glassmorphism-gradient-deep">
            <div className="container-hero">
              <div className="glass-section-header text-center mb-16 animate-slide-up">
                <h2 className="typography-modern text-4xl md:text-5xl font-bold text-white mb-6">
                  {content?.testimonials?.title || 'מה אומרים עלינו'}
                </h2>
                <div className="glass-underline-center"></div>
              </div>

              <div className="glass-testimonials-floating">
                {(content?.testimonials?.items || [
                  { name: 'לקוח מרוצה', text: 'שירות מעולה ומקצועי', rating: 5 },
                  { name: 'לקוח נוסף', text: 'ממליץ בחום לכולם', rating: 5 }
                ]).map((testimonial: any, index: number) => (
                  <div key={index} className="glass-testimonial-bubble animate-scale-in" style={{animationDelay: `${index * 0.3}s`}}>
                    <div className="glass-testimonial-content">
                      <div className="glass-stars-row">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                      <p className="typography-body text-white/90 leading-relaxed mb-4">
                        "{testimonial.text}"
                      </p>
                      <div className="glass-testimonial-author">
                        <div className="typography-modern font-semibold text-white">
                          {testimonial.name}
                        </div>
                      </div>
                    </div>
                    <div className="glass-testimonial-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section - Glass Panel */}
        {selectedElements.includes('contact') && (
          <section className="section-standard bg-glassmorphism-gradient-final">
            <div className="container-hero">
              <div className="glass-contact-master-panel">
                <div className="glass-section-header text-center mb-12 animate-slide-up">
                  <h2 className="typography-modern text-4xl md:text-5xl font-bold text-white mb-6">
                    {content?.contact?.title || 'צור קשר'}
                  </h2>
                  <div className="glass-underline-center"></div>
                </div>

                <div className="glass-contact-grid">
                  <div className="glass-contact-info animate-slide-up animate-delay-1">
                    {[
                      { icon: 'phone', label: 'טלפון', value: '050-1234567' },
                      { icon: 'mail', label: 'אימייל', value: 'info@business.co.il' },
                      { icon: 'map-pin', label: 'כתובת', value: 'תל אביב, ישראל' }
                    ].map((contact, index) => (
                      <div key={index} className="glass-contact-item">
                        <div className="glass-contact-icon">
                          {renderIcon(contact.icon, "w-6 h-6 text-blue-300")}
                        </div>
                        <div>
                          <div className="typography-modern font-semibold text-white mb-1">
                            {contact.label}
                          </div>
                          <div className="typography-body text-white/80">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="glass-contact-form animate-scale-in animate-delay-2">
                    <div className="glass-form-panel">
                      <h3 className="typography-modern text-xl font-semibold text-white mb-6">
                        שלח הודעה
                      </h3>
                      <form className="glass-form-grid">
                        <div className="glass-input-group">
                          <input type="text" placeholder="שם מלא" className="glass-input" />
                        </div>
                        <div className="glass-input-group">
                          <input type="email" placeholder="אימייל" className="glass-input" />
                        </div>
                        <div className="glass-input-group">
                          <textarea placeholder="הודעה" rows={4} className="glass-textarea"></textarea>
                        </div>
                        <button type="submit" className="btn-base btn-glassmorphism">
                          <ArrowLeft className="w-5 h-5" />
                          שלח הודעה
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  // CINEMATIC 3D SECTIONS
  if (formData.heroStyle === 'image') {
    return (
      <div className="cinematic-3d-sections">
        {/* About Section - 3D Depth */}
        {selectedElements.includes('about') && (
          <section className="section-standard bg-cinematic-3d-gradient">
            <div className="cinematic-3d-parallax-bg"></div>
            <div className="container-hero relative z-10">
              <div className="cinematic-3d-about-stage">
                <div className="cinematic-3d-title-block animate-slide-up">
                  <h2 className="cinematic-3d-heading">
                    {content?.about?.title || 'אודות'}
                  </h2>
                  <div className="cinematic-3d-line"></div>
                </div>
                
                <div className="cinematic-about-depth-grid">
                  <div className="cinematic-content-layer animate-slide-up animate-delay-1">
                    <div className="cinematic-3d-content-panel">
                      <p className="typography-cinematic text-xl text-white leading-relaxed">
                        {content?.about?.description || 'תיאור מפורט על העסק והשירותים המוצעים. אנו מתמחים במתן פתרונות מקצועיים ואמינים ללקוחותינו.'}
                      </p>
                    </div>
                  </div>

                  <div className="cinematic-stats-3d-pyramid animate-scale-in animate-delay-2">
                    {[
                      { icon: 'award', number: '5+', label: 'שנות ניסיון' },
                      { icon: 'users', number: '300+', label: 'לקוחות מרוצים' },
                      { icon: 'star', number: '4.9', label: 'דירוג ממוצע' }
                    ].map((stat, index) => (
                      <div key={index} className="cinematic-stat-3d-cube">
                        <div className="cube-face cube-front">
                          <div className="cinematic-stat-icon text-amber-400">
                            {renderIcon(stat.icon, "w-8 h-8")}
                          </div>
                        </div>
                        <div className="cube-face cube-top">
                          <div className="typography-cinematic text-2xl font-bold text-white">
                            {stat.number}
                          </div>
                        </div>
                        <div className="cube-face cube-right">
                          <div className="typography-body text-sm text-white">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Services Section - 3D Cards */}
        {selectedElements.includes('services') && (
          <section className="section-standard bg-cinematic-3d-gradient-alt">
            <div className="cinematic-3d-depth-layers">
              <div className="depth-layer-services-1"></div>
              <div className="depth-layer-services-2"></div>
            </div>
            <div className="container-hero relative z-10">
              <div className="cinematic-3d-title-block text-center mb-16 animate-slide-up">
                <h2 className="cinematic-3d-heading">
                  {content?.services?.title || 'השירותים שלנו'}
                </h2>
                <div className="cinematic-3d-line-center"></div>
              </div>

              <div className="cinematic-services-3d-gallery">
                {(content?.services?.items || [
                  { title: 'שירות ראשון', description: 'תיאור השירות הראשון', icon: 'zap' },
                  { title: 'שירות שני', description: 'תיאור השירות השני', icon: 'shield' },
                  { title: 'שירות שלישי', description: 'תיאור השירות השלישי', icon: 'award' }
                ]).map((service: any, index: number) => (
                  <div key={index} className="cinematic-service-3d-card animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="service-3d-face service-3d-front">
                      <div className="cinematic-service-icon text-amber-400">
                        {renderIcon(service.icon || 'star', "w-12 h-12")}
                      </div>
                      <h3 className="typography-cinematic text-2xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                    </div>
                    <div className="service-3d-face service-3d-back">
                      <p className="typography-body text-white leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="cinematic-3d-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section - 3D Floating */}
        {selectedElements.includes('testimonials') && (
          <section className="section-standard bg-cinematic-3d-gradient-deep">
            <div className="cinematic-3d-testimonials-space">
              <div className="container-hero">
                <div className="cinematic-3d-title-block text-center mb-16 animate-slide-up">
                  <h2 className="cinematic-3d-heading">
                    {content?.testimonials?.title || 'מה אומרים עלינו'}
                  </h2>
                  <div className="cinematic-3d-line-center"></div>
                </div>

                <div className="cinematic-testimonials-3d-orbit">
                  {(content?.testimonials?.items || [
                    { name: 'לקוח מרוצה', text: 'שירות מעולה ומקצועי', rating: 5 },
                    { name: 'לקוח נוסף', text: 'ממליץ בחום לכולם', rating: 5 }
                  ]).map((testimonial: any, index: number) => (
                    <div key={index} className="cinematic-testimonial-3d-sphere animate-scale-in" style={{animationDelay: `${index * 0.3}s`}}>
                      <div className="testimonial-3d-inner">
                        <div className="cinematic-stars-3d">
                          {[...Array(testimonial.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                          ))}
                        </div>
                        <p className="typography-cinematic text-white leading-relaxed mb-4">
                          "{testimonial.text}"
                        </p>
                        <div className="typography-cinematic font-bold text-amber-400">
                          {testimonial.name}
                        </div>
                      </div>
                      <div className="cinematic-testimonial-glow"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section - 3D Interface */}
        {selectedElements.includes('contact') && (
          <section className="section-standard bg-cinematic-3d-gradient-final">
            <div className="cinematic-3d-contact-environment">
              <div className="container-hero">
                <div className="cinematic-3d-title-block text-center mb-12 animate-slide-up">
                  <h2 className="cinematic-3d-heading">
                    {content?.contact?.title || 'צור קשר'}
                  </h2>
                  <div className="cinematic-3d-line-center"></div>
                </div>

                <div className="cinematic-contact-3d-stage">
                  <div className="cinematic-contact-info-3d animate-slide-up animate-delay-1">
                    {[
                      { icon: 'phone', label: 'טלפון', value: '050-1234567' },
                      { icon: 'mail', label: 'אימייל', value: 'info@business.co.il' },
                      { icon: 'map-pin', label: 'כתובת', value: 'תל אביב, ישראל' }
                    ].map((contact, index) => (
                      <div key={index} className="cinematic-contact-3d-item">
                        <div className="contact-3d-icon-sphere text-amber-400">
                          {renderIcon(contact.icon, "w-8 h-8")}
                        </div>
                        <div className="contact-3d-info">
                          <div className="typography-cinematic font-bold text-white mb-1">
                            {contact.label}
                          </div>
                          <div className="typography-body text-white/80">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="cinematic-form-3d-panel animate-scale-in animate-delay-2">
                    <div className="form-3d-interface">
                      <h3 className="typography-cinematic text-2xl font-bold text-white mb-6">
                        שלח הודעה
                      </h3>
                      <form className="cinematic-3d-form">
                        <div className="form-3d-field">
                          <input type="text" placeholder="שם מלא" className="cinematic-3d-input" />
                        </div>
                        <div className="form-3d-field">
                          <input type="email" placeholder="אימייל" className="cinematic-3d-input" />
                        </div>
                        <div className="form-3d-field">
                          <textarea placeholder="הודעה" rows={4} className="cinematic-3d-textarea"></textarea>
                        </div>
                        <button type="submit" className="btn-base btn-cinematic-3d">
                          <ArrowLeft className="w-5 h-5" />
                          שלח הודעה
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  // Geometric Style
  if (formData.heroStyle === 'geometric') {
    return (
      <div className="geometric-sections">
        {selectedElements.includes('about') && (
          <section className="section-standard bg-geometric">
            <div className="container-hero">
              <div className="text-center mb-16 animate-slide-up">
                <h2 className="typography-modern text-4xl md:text-5xl font-bold text-white mb-6">
                  {content?.about?.title || 'אודות'}
                </h2>
              </div>
              <div className="grid-professional">
                <div className="geometric-card p-8 animate-scale-in">
                  <p className="typography-body text-xl text-white leading-relaxed">
                    {content?.about?.description || 'תיאור מפורט על העסק והשירותים המוצעים.'}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {selectedElements.includes('services') && (
          <section className="section-standard bg-geometric">
            <div className="container-hero">
              <div className="text-center mb-16 animate-slide-up">
                <h2 className="typography-modern text-4xl md:text-5xl font-bold text-white mb-6">
                  {content?.services?.title || 'השירותים שלנו'}
                </h2>
              </div>
              <div className="grid-professional">
                {(content?.services?.items || [
                  { title: 'שירות ראשון', description: 'תיאור השירות הראשון', icon: 'zap' },
                  { title: 'שירות שני', description: 'תיאור השירות השני', icon: 'shield' },
                  { title: 'שירות שלישי', description: 'תיאור השירות השלישי', icon: 'award' }
                ]).map((service: any, index: number) => (
                  <div key={index} className="geometric-card p-8 text-center animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="icon-geometric mx-auto mb-6 text-white">
                      {renderIcon(service.icon || 'star', "w-8 h-8")}
                    </div>
                    <h3 className="typography-modern text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="typography-body text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {selectedElements.includes('testimonials') && (
          <section className="section-standard bg-geometric">
            <div className="container-hero">
              <div className="text-center mb-16 animate-slide-up">
                <h2 className="typography-modern text-4xl md:text-5xl font-bold text-white mb-6">
                  {content?.testimonials?.title || 'מה אומרים עלינו'}
                </h2>
              </div>
              <div className="grid-testimonials">
                {(content?.testimonials?.items || [
                  { name: 'לקוח מרוצה', text: 'שירות מעולה ומקצועי', rating: 5 },
                  { name: 'לקוח נוסף', text: 'ממליץ בחום לכולם', rating: 5 }
                ]).map((testimonial: any, index: number) => (
                  <div key={index} className="geometric-card p-8 animate-scale-in" style={{animationDelay: `${index * 0.3}s`}}>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="typography-body text-white leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="typography-modern font-semibold text-gray-300">
                      {testimonial.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {selectedElements.includes('contact') && (
          <section className="section-standard bg-geometric">
            <div className="container-hero">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="typography-modern text-4xl md:text-5xl font-bold text-white mb-6">
                  {content?.contact?.title || 'צור קשר'}
                </h2>
              </div>
              <div className="geometric-card p-12 max-w-4xl mx-auto animate-scale-in">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    {[
                      { icon: 'phone', label: 'טלפון', value: '050-1234567' },
                      { icon: 'mail', label: 'אימייל', value: 'info@business.co.il' },
                      { icon: 'map-pin', label: 'כתובת', value: 'תל אביב, ישראל' }
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center gap-4 mb-6">
                        <div className="icon-geometric text-white p-3">
                          {renderIcon(contact.icon)}
                        </div>
                        <div>
                          <div className="typography-modern font-semibold text-white mb-1">
                            {contact.label}
                          </div>
                          <div className="typography-body text-gray-300">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="typography-modern text-xl font-semibold text-white mb-6">
                      שלח הודעה
                    </h3>
                    <form className="space-y-4">
                      <input type="text" placeholder="שם מלא" className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60" />
                      <input type="email" placeholder="אימייל" className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60" />
                      <textarea placeholder="הודעה" rows={4} className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"></textarea>
                      <button type="submit" className="btn-base btn-geometric">
                        <ArrowLeft className="w-5 h-5" />
                        שלח הודעה
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  // Metal Style
  if (formData.heroStyle === 'metal') {
    return (
      <div className="metal-sections">
        {selectedElements.includes('about') && (
          <section className="section-standard bg-metal">
            <div className="container-hero">
              <div className="text-center mb-16 animate-slide-up">
                <h2 className="typography-luxury text-4xl md:text-5xl font-bold text-metal mb-6">
                  {content?.about?.title || 'אודות'}
                </h2>
              </div>
              <div className="grid-professional">
                <div className="metal-card p-8 animate-scale-in">
                  <p className="typography-luxury text-xl text-gray-800 leading-relaxed">
                    {content?.about?.description || 'תיאור מפורט על העסק והשירותים המוצעים.'}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {selectedElements.includes('services') && (
          <section className="section-standard bg-metal">
            <div className="container-hero">
              <div className="text-center mb-16 animate-slide-up">
                <h2 className="typography-luxury text-4xl md:text-5xl font-bold text-metal mb-6">
                  {content?.services?.title || 'השירותים שלנו'}
                </h2>
              </div>
              <div className="grid-professional">
                {(content?.services?.items || [
                  { title: 'שירות ראשון', description: 'תיאור השירות הראשון', icon: 'zap' },
                  { title: 'שירות שני', description: 'תיאור השירות השני', icon: 'shield' },
                  { title: 'שירות שלישי', description: 'תיאור השירות השלישי', icon: 'award' }
                ]).map((service: any, index: number) => (
                  <div key={index} className="metal-card p-8 text-center animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="icon-metal mx-auto mb-6 text-gray-700">
                      {renderIcon(service.icon || 'star', "w-8 h-8")}
                    </div>
                    <h3 className="typography-luxury text-xl font-semibold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="typography-body text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {selectedElements.includes('testimonials') && (
          <section className="section-standard bg-metal">
            <div className="container-hero">
              <div className="text-center mb-16 animate-slide-up">
                <h2 className="typography-luxury text-4xl md:text-5xl font-bold text-metal mb-6">
                  {content?.testimonials?.title || 'מה אומרים עלינו'}
                </h2>
              </div>
              <div className="grid-testimonials">
                {(content?.testimonials?.items || [
                  { name: 'לקוח מרוצה', text: 'שירות מעולה ומקצועי', rating: 5 },
                  { name: 'לקוח נוסף', text: 'ממליץ בחום לכולם', rating: 5 }
                ]).map((testimonial: any, index: number) => (
                  <div key={index} className="metal-card p-8 animate-scale-in" style={{animationDelay: `${index * 0.3}s`}}>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-600 fill-current" />
                      ))}
                    </div>
                    <p className="typography-luxury text-gray-800 leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="typography-luxury font-semibold text-gray-700">
                      {testimonial.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {selectedElements.includes('contact') && (
          <section className="section-standard bg-metal">
            <div className="container-hero">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="typography-luxury text-4xl md:text-5xl font-bold text-metal mb-6">
                  {content?.contact?.title || 'צור קשר'}
                </h2>
              </div>
              <div className="metal-card p-12 max-w-4xl mx-auto animate-scale-in">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    {[
                      { icon: 'phone', label: 'טלפון', value: '050-1234567' },
                      { icon: 'mail', label: 'אימייל', value: 'info@business.co.il' },
                      { icon: 'map-pin', label: 'כתובת', value: 'תל אביב, ישראל' }
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center gap-4 mb-6">
                        <div className="icon-metal text-gray-700 p-3">
                          {renderIcon(contact.icon)}
                        </div>
                        <div>
                          <div className="typography-luxury font-semibold text-gray-800 mb-1">
                            {contact.label}
                          </div>
                          <div className="typography-body text-gray-700">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="typography-luxury text-xl font-semibold text-gray-800 mb-6">
                      שלח הודעה
                    </h3>
                    <form className="space-y-4">
                      <input type="text" placeholder="שם מלא" className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800" />
                      <input type="email" placeholder="אימייל" className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800" />
                      <textarea placeholder="הודעה" rows={4} className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800"></textarea>
                      <button type="submit" className="btn-base btn-metal">
                        <ArrowLeft className="w-5 h-5" />
                        שלח הודעה
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  // Default 3D Style
  return (
    <div className="default-sections">
      {selectedElements.includes('about') && (
        <section className="section-standard bg-3d">
          <div className="container-hero">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="typography-hero text-4xl md:text-5xl font-bold text-white mb-6">
                {content?.about?.title || 'אודות'}
              </h2>
            </div>
            <div className="grid-professional">
              <div className="card-3d p-8 animate-scale-in">
                <p className="typography-body text-xl text-white leading-relaxed">
                  {content?.about?.description || 'תיאור מפורט על העסק והשירותים המוצעים.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {selectedElements.includes('services') && (
        <section className="section-standard bg-3d">
          <div className="container-hero">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="typography-hero text-4xl md:text-5xl font-bold text-white mb-6">
                {content?.services?.title || 'השירותים שלנו'}
              </h2>
            </div>
            <div className="grid-professional">
              {(content?.services?.items || [
                { title: 'שירות ראשון', description: 'תיאור השירות הראשון', icon: 'zap' },
                { title: 'שירות שני', description: 'תיאור השירות השני', icon: 'shield' },
                { title: 'שירות שלישי', description: 'תיאור השירות השלישי', icon: 'award' }
              ]).map((service: any, index: number) => (
                <div key={index} className="card-3d p-8 text-center animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="icon-3d mx-auto mb-6 text-white">
                    {renderIcon(service.icon || 'star', "w-8 h-8")}
                  </div>
                  <h3 className="typography-modern text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="typography-body text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedElements.includes('testimonials') && (
        <section className="section-standard bg-3d">
          <div className="container-hero">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="typography-hero text-4xl md:text-5xl font-bold text-white mb-6">
                {content?.testimonials?.title || 'מה אומרים עלינו'}
              </h2>
            </div>
            <div className="grid-testimonials">
              {(content?.testimonials?.items || [
                { name: 'לקוח מרוצה', text: 'שירות מעולה ומקצועי', rating: 5 },
                { name: 'לקוח נוסף', text: 'ממליץ בחום לכולם', rating: 5 }
              ]).map((testimonial: any, index: number) => (
                <div key={index} className="card-3d p-8 animate-scale-in" style={{animationDelay: `${index * 0.3}s`}}>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="typography-body text-white leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="typography-modern font-semibold text-gray-300">
                    {testimonial.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedElements.includes('contact') && (
        <section className="section-standard bg-3d">
          <div className="container-hero">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="typography-hero text-4xl md:text-5xl font-bold text-white mb-6">
                {content?.contact?.title || 'צור קשר'}
              </h2>
            </div>
            <div className="card-3d p-12 max-w-4xl mx-auto animate-scale-in">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  {[
                    { icon: 'phone', label: 'טלפון', value: '050-1234567' },
                    { icon: 'mail', label: 'אימייל', value: 'info@business.co.il' },
                    { icon: 'map-pin', label: 'כתובת', value: 'תל אביב, ישראל' }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 mb-6">
                      <div className="icon-3d text-white p-3">
                        {renderIcon(contact.icon)}
                      </div>
                      <div>
                        <div className="typography-modern font-semibold text-white mb-1">
                          {contact.label}
                        </div>
                        <div className="typography-body text-gray-300">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="typography-modern text-xl font-semibold text-white mb-6">
                    שלח הודעה
                  </h3>
                  <form className="space-y-4">
                    <input type="text" placeholder="שם מלא" className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60" />
                    <input type="email" placeholder="אימייל" className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60" />
                    <textarea placeholder="הודעה" rows={4} className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"></textarea>
                    <button type="submit" className="btn-base btn-3d">
                      <ArrowLeft className="w-5 h-5" />
                      שלח הודעה
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
};
