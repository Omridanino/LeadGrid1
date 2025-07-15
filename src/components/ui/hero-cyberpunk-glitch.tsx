import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroCyberpunkGlitchProps {
  formData: any;
  currentColors: any;
  content: any;
}

export const HeroCyberpunkGlitch: React.FC<HeroCyberpunkGlitchProps> = ({
  formData,
  currentColors,
  content
}) => {
  const [glitchText, setGlitchText] = useState('');
  const originalText = content?.title || formData.businessName || 'CYBERTECH';

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        const glitched = originalText.split('').map(char => 
          Math.random() > 0.8 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join('');
        setGlitchText(glitched);
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [originalText]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      
      {/* רקע סייברפאנק */}
      <div className="absolute inset-0">
        {/* גריד ניאון */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255,0,255,0.3) 1px, transparent 1px),
                linear-gradient(180deg, rgba(0,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>

        {/* אפקט סיגנל */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{ x: [-200, window.innerWidth + 200] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* חלקיקים דיגיטליים */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* תווית הקר */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-magenta-500/20 to-cyan-500/20 border border-cyan-400 px-4 py-2 backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="font-orbitron text-cyan-400 text-sm uppercase tracking-wider">
              {content?.badge || '[ SYSTEM ONLINE ]'}
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* תוכן טקסטואלי */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            {/* כותרת עם אפקט גליץ' */}
            <motion.h1 
              className="text-6xl lg:text-8xl font-black leading-none font-orbitron"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span 
                className="bg-gradient-to-r from-magenta-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 20px rgba(255,0,255,0.5), 0 0 40px rgba(0,255,255,0.3)',
                }}
              >
                {glitchText || originalText}
              </span>
            </motion.h1>

            {/* תת כותרת עם טיפוגרפיה עתידנית */}
            <motion.p 
              className="text-xl lg:text-2xl text-cyan-100 leading-relaxed font-exo max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-magenta-400">&gt;</span> {content?.subtitle || 'העתיד כאן. טכנולוגיה מתקדמת ללא גבולות'} <span className="text-cyan-400 animate-pulse">_</span>
            </motion.p>

            {/* מטריקס נתונים */}
            <motion.div 
              className="grid grid-cols-3 gap-4 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center border border-magenta-500/30 bg-magenta-500/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-orbitron text-magenta-400">99.9%</div>
                <div className="text-xs text-cyan-300 font-exo">UPTIME</div>
              </div>
              <div className="text-center border border-cyan-500/30 bg-cyan-500/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-orbitron text-cyan-400">∞</div>
                <div className="text-xs text-magenta-300 font-exo">CAPACITY</div>
              </div>
              <div className="text-center border border-yellow-500/30 bg-yellow-500/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-orbitron text-yellow-400">24/7</div>
                <div className="text-xs text-cyan-300 font-exo">ONLINE</div>
              </div>
            </motion.div>

            {/* כפתורי פעולה עתידניים */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button 
                className="group relative px-8 py-4 bg-gradient-to-r from-magenta-500 to-cyan-500 text-white font-orbitron font-bold uppercase tracking-wider overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(255,0,255,0.5)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{content?.ctaButton || 'INITIALIZE'}</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button 
                className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-orbitron font-bold uppercase tracking-wider bg-transparent hover:bg-cyan-400/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(0,255,255,0.5)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {content?.secondaryButton || 'EXPLORE'}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* הולוגרמה עתידנית */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* מסגרת הולוגרפית */}
              <div className="absolute inset-0 border-2 border-cyan-400/50 bg-gradient-to-br from-magenta-500/10 to-cyan-500/10 backdrop-blur-lg skew-y-1 animate-pulse"></div>
              
              <div className="relative p-12">
                {/* מעגלים קונצנטריים */}
                <div className="relative flex items-center justify-center h-80">
                  {[1, 2, 3].map((ring) => (
                    <motion.div
                      key={ring}
                      className={`absolute border border-cyan-400/30 rounded-full`}
                      style={{
                        width: `${ring * 100}px`,
                        height: `${ring * 100}px`,
                      }}
                      animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                      transition={{
                        duration: 10 + ring * 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  ))}
                  
                  {/* קור מרכזי */}
                  <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-magenta-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <motion.div
                      className="text-white text-2xl font-orbitron"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ∆
                    </motion.div>
                  </div>
                </div>

                {/* קוד בינארי זורם */}
                <div className="absolute top-0 right-0 text-xs font-mono text-cyan-400/50 leading-none">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    >
                      {Math.random().toString(2).substr(2, 8)}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* סריקה אמיתית */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
        animate={{ 
          x: [-200, window.innerWidth + 200],
          scaleX: [1, 2, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatDelay: 3
        }}
      />
    </section>
  );
};