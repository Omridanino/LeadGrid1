import React from 'react';

interface HeroLuxuryPremiumProps {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  button1Text: string;
  button2Text: string;
  button1Icon?: string;
  button2Icon?: string;
}

export const HeroLuxuryPremium: React.FC<HeroLuxuryPremiumProps> = ({
  title,
  subtitle,
  description,
  badge,
  button1Text,
  button2Text,
  button1Icon,
  button2Icon
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" 
             style={{
               background: 'linear-gradient(135deg, hsl(0, 0%, 3%) 0%, hsl(0, 0%, 8%) 30%, hsl(45, 15%, 6%) 70%, hsl(0, 0%, 5%) 100%)'
             }}>
      
      {/* Luxury Golden Particles */}
      <div className="absolute inset-0">
        {Array.from({length: 30}, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-70"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `linear-gradient(135deg, hsl(45, 100%, 60%), hsl(38, 100%, 45%))`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 12}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
            }}
          />
        ))}
      </div>

      {/* Golden Geometric Shapes */}
      <div className="absolute inset-0">
        {Array.from({length: 6}, (_, i) => (
          <div
            key={i}
            className="absolute border opacity-30"
            style={{
              width: `${100 + i * 20}px`,
              height: `${100 + i * 20}px`,
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
              borderColor: 'rgba(255, 215, 0, 0.4)',
              borderWidth: '1px',
              borderRadius: i % 2 === 0 ? '50%' : '8px',
              transform: `rotate(${i * 45}deg)`,
              animation: `spin ${20 + i * 5}s linear infinite`,
              background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05), transparent)'
            }}
          />
        ))}
      </div>

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {badge && (
          <div 
            className="inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold mb-6 backdrop-blur-sm"
            style={{
              color: 'hsl(45, 100%, 70%)',
              borderColor: 'rgba(255, 215, 0, 0.3)',
              background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 193, 7, 0.05))'
            }}
          >
            {badge}
          </div>
        )}
        
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{
            background: 'linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 100%, 65%))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255, 215, 0, 0.3)',
            fontFamily: '"Playfair Display", "Frank Ruhl Libre", serif'
          }}
        >
          {title}
        </h1>
        
        <h2 
          className="text-2xl md:text-3xl mb-8 font-light"
          style={{
            color: 'hsl(0, 0%, 85%)',
            fontFamily: '"Playfair Display", "Frank Ruhl Libre", serif'
          }}
        >
          {subtitle}
        </h2>
        
        <p 
          className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed"
          style={{
            color: 'hsl(0, 0%, 75%)',
            opacity: 0.9
          }}
        >
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, hsl(45, 100%, 60%), hsl(38, 100%, 45%))',
              color: 'hsl(0, 0%, 10%)',
              boxShadow: '0 8px 32px rgba(255, 215, 0, 0.4)',
              border: '1px solid rgba(255, 215, 0, 0.3)'
            }}
          >
            {button1Icon && <i className={`ri-${button1Icon}`} />}
            {button1Text}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a 
            href="#features" 
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'hsl(0, 0%, 95%)',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            {button2Icon && <i className={`ri-${button2Icon}`} />}
            {button2Text}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
      
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-20px) scale(1.1);
            opacity: 1;
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroLuxuryPremium;