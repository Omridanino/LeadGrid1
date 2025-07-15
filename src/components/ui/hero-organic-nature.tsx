import React from 'react';
import { motion } from 'framer-motion';

interface HeroOrganicNatureProps {
  formData: any;
  currentColors: any;
  content: any;
}

export const HeroOrganicNature: React.FC<HeroOrganicNatureProps> = ({
  formData,
  currentColors,
  content
}) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50">
      
      {/* רקע אורגני מצויר */}
      <div className="absolute inset-0">
        {/* עקומות רקע */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="organicGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.05)" />
              <stop offset="100%" stopColor="rgba(251, 191, 36, 0.1)" />
            </linearGradient>
            <linearGradient id="organicGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(251, 191, 36, 0.08)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0.06)" />
            </linearGradient>
          </defs>
          
          {/* צורות אורגניות רקע */}
          <path 
            d="M0,300 Q300,100 600,300 T1200,300 L1200,800 L0,800 Z" 
            fill="url(#organicGradient1)" 
          />
          <path 
            d="M0,500 Q400,200 800,500 T1200,500 L1200,800 L0,800 Z" 
            fill="url(#organicGradient2)" 
          />
        </svg>

        {/* עלים דקורטיביים */}
        <motion.div 
          className="absolute top-20 right-20 text-emerald-300/30 text-6xl"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          🌿
        </motion.div>
        
        <motion.div 
          className="absolute bottom-40 left-10 text-amber-400/40 text-8xl"
          animate={{ 
            rotate: [0, -15, 15, 0],
            y: [0, -10, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          🍃
        </motion.div>

        <motion.div 
          className="absolute top-1/2 left-1/4 text-blue-300/25 text-4xl"
          animate={{ 
            rotate: [0, 20, -20, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          🌸
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* תווית טבעית */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 rounded-full px-6 py-3 backdrop-blur-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-comfortaa text-emerald-700 text-sm">
              {content?.badge || '🌱 טבעי ואורגני'}
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* תוכן טקסטואלי */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            
            {/* כותרת זורמת */}
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold leading-tight font-comfortaa"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-amber-600 bg-clip-text text-transparent">
                {content?.title || formData.businessName || 'העסק הטבעי שלך'}
              </span>
            </motion.h1>

            {/* תת כותרת חמה */}
            <motion.p 
              className="text-xl lg:text-2xl text-emerald-800 leading-relaxed font-poppins max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {content?.subtitle || 'פתרונות טבעיים ואנושיים שיוצרים חיבור אמיתי עם הלקוחות שלך'}
            </motion.p>

            {/* נקודות חוזק טבעיות */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {[
                { icon: '🌱', text: 'צמיחה בריאה ומתמשכת' },
                { icon: '💚', text: 'חיבור אמיתי ואנושי' },
                { icon: '🌈', text: 'שירות צבעוני ומגוון' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <span className="text-lg text-emerald-700 font-poppins">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* כפתורי פעולה אורגניים */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button 
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-comfortaa font-bold text-lg rounded-full shadow-lg hover:shadow-emerald-300/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: '0 10px 40px rgba(34, 197, 94, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  🌟 {content?.ctaButton || 'בואו נתחיל'}
                </span>
              </motion.button>
              
              <motion.button 
                className="group px-8 py-4 border-2 border-emerald-400 text-emerald-600 font-comfortaa font-bold text-lg rounded-full bg-white/80 backdrop-blur-sm hover:bg-emerald-50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  rotate: -1
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  🌺 {content?.secondaryButton || 'גלו עוד'}
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* איור טבעי אינטראקטיבי */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              {/* מסגרת אורגנית */}
              <div className="relative bg-gradient-to-br from-white/90 to-emerald-50/90 backdrop-blur-sm rounded-3xl p-12 border border-emerald-200/50 shadow-2xl">
                
                {/* איור מרכזי */}
                <div className="text-center space-y-8">
                  
                  {/* עץ מונפש */}
                  <motion.div 
                    className="relative flex justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                  >
                    <div className="relative">
                      {/* גזע */}
                      <div className="w-8 h-24 bg-gradient-to-t from-amber-700 to-amber-500 rounded-b-lg mx-auto"></div>
                      
                      {/* עלווה */}
                      <motion.div 
                        className="absolute -top-16 left-1/2 transform -translate-x-1/2"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, -2, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full"></div>
                        <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-full"></div>
                      </motion.div>
                      
                      {/* פירות */}
                      {[1, 2, 3].map((fruit) => (
                        <motion.div
                          key={fruit}
                          className="absolute w-3 h-3 bg-red-400 rounded-full"
                          style={{
                            top: `${-20 + fruit * 5}px`,
                            left: `${10 + fruit * 8}px`,
                          }}
                          animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: fruit * 0.5
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* סטטיסטיקות אורגניות */}
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div 
                      className="text-center space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <div className="text-3xl font-bold text-emerald-600 font-comfortaa">100%</div>
                      <div className="text-sm text-emerald-700 font-poppins">טבעי</div>
                    </motion.div>
                    
                    <motion.div 
                      className="text-center space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="text-3xl font-bold text-blue-600 font-comfortaa">∞</div>
                      <div className="text-sm text-blue-700 font-poppins">אהבה</div>
                    </motion.div>
                  </div>

                  {/* ציטוט חמימני */}
                  <motion.blockquote 
                    className="text-center text-emerald-800 italic font-poppins text-lg border-l-4 border-emerald-300 pl-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    "הטבע הוא המורה הטוב ביותר"
                  </motion.blockquote>
                </div>
              </div>

              {/* פרפרים מעופפים */}
              {[1, 2, 3].map((butterfly) => (
                <motion.div
                  key={butterfly}
                  className="absolute text-2xl"
                  style={{
                    top: `${Math.random() * 300}px`,
                    left: `${Math.random() * 400}px`,
                  }}
                  animate={{
                    x: [0, 50, -30, 20, 0],
                    y: [0, -30, 20, -10, 0],
                    rotate: [0, 10, -5, 15, 0]
                  }}
                  transition={{
                    duration: 8 + butterfly,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🦋
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* חלקיקי אבקה מרחפים */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};