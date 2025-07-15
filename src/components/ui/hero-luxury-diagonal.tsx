import React from 'react';
import { motion } from 'framer-motion';

interface HeroLuxuryDiagonalProps {
  formData: any;
  currentColors: any;
  content: any;
}

export const HeroLuxuryDiagonal: React.FC<HeroLuxuryDiagonalProps> = ({
  formData,
  currentColors,
  content
}) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950/20 to-slate-900">
      {/* רקע אלכסוני זהוב */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-amber-500/10 to-transparent skew-x-12 origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-amber-600/5 to-transparent -skew-x-12 origin-bottom-left"></div>
        
        {/* דפוסים גיאומטריים */}
        <svg className="absolute top-20 right-10 w-32 h-32 text-amber-400/20" fill="currentColor">
          <polygon points="0,0 64,0 32,32" />
        </svg>
        <svg className="absolute bottom-20 left-20 w-40 h-40 text-amber-300/10" fill="currentColor">
          <rect x="0" y="0" width="20" height="20" />
          <rect x="20" y="20" width="20" height="20" />
        </svg>
      </div>

      {/* תוכן ראשי */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* תוכן טקסטואלי */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* תווית זהובה */}
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-6 py-2 text-sm font-bold tracking-wider font-cinzel uppercase">
                {content?.badge || 'פרימיום'}
              </span>
            </motion.div>

            {/* כותרת ראשית */}
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold text-amber-100 leading-none font-cinzel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                {content?.title || formData.businessName || 'העסק שלך'}
              </span>
            </motion.h1>

            {/* תת כותרת */}
            <motion.p 
              className="text-xl lg:text-2xl text-amber-100/80 leading-relaxed font-playfair max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {content?.subtitle || 'השירות המקצועי והיוקרתי ביותר בתחום'}
            </motion.p>

            {/* כפתורי פעולה */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button 
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold text-lg font-cinzel tracking-wide overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{content?.ctaButton || 'התחל עכשיו'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.button 
                className="group px-8 py-4 border-2 border-amber-400 text-amber-300 font-bold text-lg font-cinzel tracking-wide bg-transparent hover:bg-amber-400/10 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {content?.secondaryButton || 'למד עוד'}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* צד חזותי */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* מסגרת זהובה אלכסונית */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 skew-y-3 scale-105 blur-sm"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-12 -skew-y-2 border border-amber-400/30">
                
                {/* תוכן המסגרת */}
                <div className="skew-y-2 space-y-8">
                  {/* סטטיסטיקות יוקרתיות */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-amber-400 font-cinzel">100+</div>
                      <div className="text-amber-200/70 font-playfair">לקוחות מרוצים</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-amber-400 font-cinzel">5★</div>
                      <div className="text-amber-200/70 font-playfair">דירוג מושלם</div>
                    </div>
                  </div>
                  
                  {/* אייקון מרכזי */}
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                  </div>

                  {/* ציטוט מוזהב */}
                  <blockquote className="text-center text-amber-100/90 italic font-playfair text-lg">
                    "השירות המקצועי והמדויק ביותר שחוויתי"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* אלמנטים דקורטיביים */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 opacity-60"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-500 opacity-40"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>

      {/* חלקיקים זהובים מרחפים */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};