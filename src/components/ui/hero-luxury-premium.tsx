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
               background: 'linear-gradient(135deg, hsl(0, 0%, 1%) 0%, hsl(0, 0%, 6%) 20%, hsl(45, 25%, 4%) 50%, hsl(38, 30%, 6%) 80%, hsl(0, 0%, 2%) 100%)'
             }}>
      
      {/* יוקרתי - חלקיקי זהב נוצצים מתקדמים */}
      <div className="absolute inset-0">
        {Array.from({length: 50}, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
              background: `linear-gradient(135deg, hsl(45, 100%, 80%), hsl(38, 100%, 65%), hsl(45, 95%, 75%))`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `luxuryFloat ${6 + Math.random() * 8}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 4}s`,
              boxShadow: `0 0 ${10 + Math.random() * 20}px rgba(255, 215, 0, 0.6), 0 0 ${5 + Math.random() * 10}px rgba(255, 193, 7, 0.4)`,
              opacity: '0.8'
            }}
          />
        ))}
      </div>

      {/* יוקרתי - צורות גיאומטריות זהב מתקדמות */}
      <div className="absolute inset-0">
        {Array.from({length: 8}, (_, i) => (
          <div
            key={i}
            className="absolute border-2 opacity-40"
            style={{
              width: `${120 + i * 25}px`,
              height: `${120 + i * 25}px`,
              left: `${8 + i * 12}%`,
              top: `${12 + (i % 4) * 20}%`,
              borderColor: 'rgba(255, 215, 0, 0.6)',
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20px' : '0%',
              transform: `rotate(${i * 35}deg)`,
              animation: `luxurySpin ${25 + i * 8}s linear infinite`,
              background: `linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 193, 7, 0.05), transparent)`,
              boxShadow: `0 0 30px rgba(255, 215, 0, 0.2), inset 0 0 20px rgba(255, 215, 0, 0.1)`
            }}
          />
        ))}
      </div>

      {/* יוקרתי - אפקטי זוהר מתקדמים */}
      <div className="absolute inset-0">
        {Array.from({length: 12}, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${30 + i * 8}px`,
              height: `${30 + i * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, rgba(255, 193, 7, 0.2) 50%, transparent 100%)`,
              animation: `luxuryGlow ${8 + i * 2}s infinite ease-in-out`,
              animationDelay: `${i * 0.5}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* יוקרתי - רקע טקסטורה מתקדמת */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 60% 20%, rgba(255, 235, 59, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))
        `
      }} />

      {/* יוקרתי - זוהר מרכזי */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, rgba(255, 193, 7, 0.2) 40%, transparent 100%)',
          animation: 'luxuryPulse 4s infinite ease-in-out',
          filter: 'blur(2px)'
        }} />
      </div>

      {/* תוכן */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {badge && (
          <div 
            className="inline-flex items-center rounded-full border-2 px-6 py-3 text-sm font-bold mb-8 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 193, 7, 0.1))',
              borderColor: 'rgba(255, 215, 0, 0.5)',
              color: 'hsl(45, 100%, 75%)',
              boxShadow: '0 8px 32px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              textShadow: '0 2px 10px rgba(255, 215, 0, 0.5)'
            }}
          >
            <span className="mr-2">✨</span>
            {badge}
          </div>
        )}
        
        <h1 
          className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          style={{
            background: 'linear-gradient(135deg, hsl(45, 100%, 75%), hsl(38, 100%, 60%), hsl(45, 95%, 70%), hsl(45, 100%, 80%))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(255, 215, 0, 0.5), 0 0 80px rgba(255, 193, 7, 0.3)',
            fontFamily: '"Playfair Display", "Frank Ruhl Libre", serif',
            filter: 'drop-shadow(0 4px 20px rgba(255, 215, 0, 0.4))'
          }}
        >
          {title}
        </h1>
        
        <h2 
          className="text-3xl md:text-4xl mb-10 font-light"
          style={{
            background: 'linear-gradient(135deg, hsl(0, 0%, 92%), hsl(45, 30%, 85%))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: '"Playfair Display", "Frank Ruhl Libre", serif',
            textShadow: '0 2px 10px rgba(255, 215, 0, 0.2)'
          }}
        >
          {subtitle}
        </h2>
        
        <p 
          className="text-xl md:text-2xl mb-14 max-w-4xl mx-auto leading-relaxed"
          style={{
            color: 'hsl(0, 0%, 78%)',
            opacity: 0.95,
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
          }}
        >
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-500 hover:scale-110 transform"
            style={{
              background: 'linear-gradient(135deg, hsl(45, 100%, 70%), hsl(38, 100%, 55%), hsl(45, 95%, 65%))',
              color: 'hsl(0, 0%, 8%)',
              boxShadow: '0 12px 40px rgba(255, 215, 0, 0.5), 0 4px 20px rgba(255, 193, 7, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3)',
              border: '2px solid rgba(255, 215, 0, 0.6)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
            }}
          >
            {button1Icon && <i className={`ri-${button1Icon} text-2xl`} />}
            <span>{button1Text}</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a 
            href="#features" 
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-500 hover:scale-110 transform backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 215, 0, 0.1))',
              color: 'hsl(0, 0%, 95%)',
              border: '2px solid rgba(255, 215, 0, 0.5)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}
          >
            {button2Icon && <i className={`ri-${button2Icon} text-2xl`} />}
            <span>{button2Text}</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      {/* יוקרתי - עמעום תחתון מתקדם */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      
      <style>{`
        @keyframes luxuryFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg);
            opacity: 0.8;
          }
          33% { 
            transform: translateY(-25px) scale(1.2) rotate(120deg);
            opacity: 1;
          }
          66% { 
            transform: translateY(-15px) scale(1.1) rotate(240deg);
            opacity: 0.9;
          }
        }
        
        @keyframes luxurySpin {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          to { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes luxuryGlow {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.4);
          }
        }
        
        @keyframes luxuryPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.2;
          }
          50% { 
            transform: scale(1.2);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroLuxuryPremium;