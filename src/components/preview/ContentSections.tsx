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

  // TRUE GLASSMORPHISM SECTIONS
  if (formData.heroStyle === 'glass') {
    return (
      <div className="glassmorphism-sections">
        {/* About Section - True Glassmorphism */}
        {selectedElements.includes('about') && (
          <section className="section-standard relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-cyan-900/20"></div>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl"></div>
            
            <div className="container-hero relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8 mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    {content?.about?.title || 'אודות'}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
                </div>

                <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-center">
                    {content?.about?.description || 'תיאור מפורט על העסק והשירותים המוצעים. אנו מתמחים במתן פתרונות מקצועיים ואמינים ללקוחותינו.'}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {[
                      { icon: 'award', number: '5+', label: 'שנות ניסיון' },
                      { icon: 'users', number: '300+', label: 'לקוחות מרוצים' },
                      { icon: 'star', number: '4.9', label: 'דירוג ממוצע' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
                          {renderIcon(stat.icon, "w-6 h-6 text-blue-300")}
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                        <div className="text-white/70">{stat.label}</div>
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
          <section className="section-standard relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-indigo-900/20"></div>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl"></div>
            
            <div className="container-hero relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  {content?.services?.title || 'השירותים שלנו'}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {(content?.services?.items || [
                  { title: 'שירות ראשון', description: 'תיאור השירות הראשון', icon: 'zap' },
                  { title: 'שירות שני', description: 'תיאור השירות השני', icon: 'shield' },
                  { title: 'שירות שלישי', description: 'תיאור השירות השלישי', icon: 'award' }
                ]).map((service: any, index: number) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 h-full transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-white/20 mb-6 group-hover:scale-110 group-hover:rotate-y-180 transition-all duration-300">
                        {renderIcon(service.icon || 'star', "w-7 h-7 text-blue-300")}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section - Floating Glass */}
        {selectedElements.includes('testimonials') && (
          <section className="section-standard relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-cyan-900/30 to-blue-900/20"></div>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl"></div>
            
            <div className="container-hero relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  {content?.testimonials?.title || 'מה אומרים עלינו'}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {(content?.testimonials?.items || [
                  { name: 'לקוח מרוצה', text: 'שירות מעולה ומקצועי', rating: 5 },
                  { name: 'לקוח נוסף', text: 'ממליץ בחום לכולם', rating: 5 }
                ]).map((testimonial: any, index: number) => (
                  <div key={index} className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-white/90 leading-relaxed mb-6 text-lg">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-white/20 flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section - Glass Panel */}
        {selectedElements.includes('contact') && (
          <section className="section-standard relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/30 to-purple-900/20"></div>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl"></div>
            
            <div className="container-hero relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8 mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  {content?.contact?.title || 'צור קשר'}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
              </div>

              <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    {[
                      { icon: 'phone', label: 'טלפון', value: '050-1234567' },
                      { icon: 'mail', label: 'אימייל', value: 'info@business.co.il' },
                      { icon: 'map-pin', label: 'כתובת', value: 'תל אביב, ישראל' }
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 mr-4">
                          {renderIcon(contact.icon, "w-6 h-6 text-blue-300")}
                        </div>
                        <div>
                          <div className="font-semibold text-white mb-1">
                            {contact.label}
                          </div>
                          <div className="text-white/80">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6">
                      שלח הודעה
                    </h3>
                    <form className="space-y-4">
                      <input type="text" placeholder="שם מלא" className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-white/60 focus:border-blue-400 focus:outline-none transition-colors" />
                      <input type="email" placeholder="אימייל" className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-white/60 focus:border-blue-400 focus:outline-none transition-colors" />
                      <textarea placeholder="הודעה" rows={4} className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-white/60 focus:border-blue-400 focus:outline-none transition-colors resize-none"></textarea>
                      <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-3">
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

  // CINEMATIC 3D SECTIONS
  if (formData.heroStyle === 'image') {
    return (
      <div className="cinematic-3d-sections">
        {/* About Section - 3D Depth */}
        {selectedElements.includes('about') && (
          <section className="section-standard relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
            </div>
            
            <div className="container-hero relative z-10">
              <div className="text-center mb-16 transform perspective-1000">
                <div className="inline-block transform rotate-x-12 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-y-180 transition-transform duration-500">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight transform hover:scale-105 transition-transform duration-300">
                  {content?.about?.title || 'אודות'}
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto transform skew-x-12"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="transform perspective-1000 rotate-y-12">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-10 shadow-2xl transform hover:rotate-y-0 transition-all duration-500">
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                      {content?.about?.description || 'תיאור מפורט על העסק והשירותים המוצעים. אנו מתמחים במתן פתרונות מקצועיים ואמינים ללקוחותינו.'}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8 transform perspective-1000 -rotate-y-12">
                  {[
                    { icon: 'award', number: '5+', label: 'שנות ניסיון', color: 'from-blue-500 to-cyan-500' },
                    { icon: 'users', number: '300+', label: 'לקוחות מרוצים', color: 'from-purple-500 to-pink-500' },
                    { icon: 'star', number: '4.9', label: 'דירוג ממוצע', color: 'from-amber-500 to-orange-500' },
                    { icon: 'shield', number: '100%', label: 'אמינות', color: 'from-green-500 to-emerald-500' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center transform hover:scale-110 hover:rotate-z-3 transition-all duration-300">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} shadow-2xl mb-4 transform hover:rotate-y-180 transition-transform duration-500`}>
                        {renderIcon(stat.icon, "w-8 h-8 text-white")}
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Services Section - 3D Cards */}
        {selectedElements.includes('services') && (
          <section className="section-standard relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/30 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container-hero relative z-10">
              <div className="text-center mb-20 transform perspective-1000">
                <div className="inline-block transform rotate-x-12 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-y-180 transition-transform duration-500">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight transform hover:scale-105 transition-transform duration-300">
                  {content?.services?.title || 'השירותים שלנו'}
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto transform skew-x-12"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 perspective-1000">
                {(content?.services?.items || [
                  { title: 'שירות ראשון', description: 'תיאור השירות הראשון', icon: 'zap' },
                  { title: 'שירות שני', description: 'תיאור השירות השני', icon: 'shield' },
                  { title: 'שירות שלישי', description: 'תיאור השירות השלישי', icon: 'award' }
                ]).map((service: any, index: number) => (
                  <div key={index} className="group transform hover:scale-105 hover:rotate-x-6 transition-all duration-500">
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 h-full shadow-2xl transform group-hover:translate-z-12 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-amber-400/20 border border-cyan-400/30 mb-6 transform group-hover:scale-110 group-hover:rotate-y-180 transition-all duration-500">
                          {renderIcon(service.icon || 'star', "w-8 h-8 text-cyan-300")}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 transform group-hover:translate-x-2 transition-transform duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed transform group-hover:translate-x-1 transition-transform duration-300 delay-75">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section - 3D Floating */}
        {selectedElements.includes('testimonials') && (
          <section className="section-standard relative overflow-hidden bg-gradient-to-br from-gray-800 via-black to-gray-900">
            <div className="absolute inset-0 opacity-25">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container-hero relative z-10">
              <div className="text-center mb-20 transform perspective-1000">
                <div className="inline-block transform rotate-x-12 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-y-180 transition-transform duration-500">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight transform hover:scale-105 transition-transform duration-300">
                  {content?.testimonials?.title || 'מה אומרים עלינו'}
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto transform skew-x-12"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto perspective-1000">
                {(content?.testimonials?.items || [
                  { name: 'לקוח מרוצה', text: 'שירות מעולה ומקצועי', rating: 5 },
                  { name: 'לקוח נוסף', text: 'ממליץ בחום לכולם', rating: 5 }
                ]).map((testimonial: any, index: number) => (
                  <div key={index} className={`transform hover:scale-105 transition-all duration-500 ${index % 2 === 0 ? 'hover:rotate-y-6' : 'hover:-rotate-y-6'}`}>
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-amber-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          {[...Array(testimonial.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-amber-400 fill-current transform hover:scale-125 transition-transform duration-200" style={{animationDelay: `${i * 0.1}s`}} />
                          ))}
                        </div>
                        <p className="text-gray-200 leading-relaxed mb-8 text-lg">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400/20 to-amber-400/20 border border-purple-400/30 flex items-center justify-center mr-4 transform hover:rotate-y-180 transition-transform duration-500">
                            <Users className="w-7 h-7 text-purple-300" />
                          </div>
                          <div>
                            <div className="font-bold text-white text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-gray-400 text-sm">לקוח מרוצה</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section - 3D Interface */}
        {selectedElements.includes('contact') && (
          <section className="section-standard relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container-hero relative z-10">
              <div className="text-center mb-20 transform perspective-1000">
                <div className="inline-block transform rotate-x-12 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-y-180 transition-transform duration-500">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight transform hover:scale-105 transition-transform duration-300">
                  {content?.contact?.title || 'צור קשר'}
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto transform skew-x-12"></div>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 perspective-1000">
                  <div className="transform hover:rotate-y-6 transition-all duration-500">
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-10 shadow-2xl">
                      <h3 className="text-2xl font-bold text-white mb-8">פרטי התקשרות</h3>
                      <div className="space-y-8">
                        {[
                          { icon: 'phone', label: 'טלפון', value: '050-1234567', color: 'from-green-400 to-emerald-500' },
                          { icon: 'mail', label: 'אימייל', value: 'info@business.co.il', color: 'from-blue-400 to-cyan-500' },
                          { icon: 'map-pin', label: 'כתובת', value: 'תל אביב, ישראל', color: 'from-purple-400 to-pink-500' }
                        ].map((contact, index) => (
                          <div key={index} className="flex items-center group">
                            <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${contact.color} shadow-xl mr-6 transform group-hover:scale-110 group-hover:rotate-y-180 transition-all duration-500`}>
                              {renderIcon(contact.icon, "w-7 h-7 text-white")}
                            </div>
                            <div>
                              <div className="font-bold text-white mb-1 text-lg">
                                {contact.label}
                              </div>
                              <div className="text-gray-300">
                                {contact.value}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="transform hover:-rotate-y-6 transition-all duration-500">
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-10 shadow-2xl">
                      <h3 className="text-2xl font-bold text-white mb-8">שלח הודעה</h3>
                      <form className="space-y-6">
                        <div className="transform hover:translate-x-2 transition-transform duration-300">
                          <input type="text" placeholder="שם מלא" className="w-full p-4 rounded-2xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 focus:scale-105" />
                        </div>
                        <div className="transform hover:translate-x-2 transition-transform duration-300 delay-75">
                          <input type="email" placeholder="אימייל" className="w-full p-4 rounded-2xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 focus:scale-105" />
                        </div>
                        <div className="transform hover:translate-x-2 transition-transform duration-300 delay-150">
                          <textarea placeholder="הודעה" rows={5} className="w-full p-4 rounded-2xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 focus:scale-105 resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-8 rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-2xl">
                          <ArrowLeft className="w-6 h-6" />
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
