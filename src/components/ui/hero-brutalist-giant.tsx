import React from 'react';
import { motion } from 'framer-motion';

interface HeroBrutalistGiantProps {
  formData: any;
  currentColors: any;
  content: any;
}

export const HeroBrutalistGiant: React.FC<HeroBrutalistGiantProps> = ({
  formData,
  currentColors,
  content
}) => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      
      {/* גריד קשיח ברקע */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(90deg, black 1px, transparent 1px),
            linear-gradient(180deg, black 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* בלוקים גיאומטריים */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-black"></div>
      <div className="absolute bottom-32 left-20 w-24 h-48 bg-gray-800"></div>
      <div className="absolute top-1/2 right-32 w-16 h-16 bg-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        
        {/* תווית מונוכרום */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-black text-white px-6 py-3 font-mono text-sm uppercase tracking-widest">
            [{content?.badge || 'SYSTEM'}]
          </div>
        </motion.div>

        {/* כותרת ענקית */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-9xl lg:text-[12rem] xl:text-[14rem] font-black leading-none text-black tracking-tighter">
            {(content?.title || formData.businessName || 'BRAND').toUpperCase()}
          </h1>
        </motion.div>

        {/* גריד תוכן */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          
          {/* עמודה שמאלית - מספרים */}
          <motion.div 
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="border-t-4 border-black pt-4">
              <div className="text-6xl font-mono font-black text-black">01</div>
              <div className="text-lg font-mono text-gray-700 mt-2">INNOVATION</div>
            </div>
            
            <div className="border-t-4 border-black pt-4">
              <div className="text-6xl font-mono font-black text-black">02</div>
              <div className="text-lg font-mono text-gray-700 mt-2">EXECUTION</div>
            </div>
          </motion.div>

          {/* עמודה מרכזית - תיאור */}
          <motion.div 
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gray-100 p-8 border-4 border-black">
              <p className="text-2xl font-mono leading-relaxed text-black">
                {content?.subtitle || 'UNCOMPROMISING QUALITY. MAXIMUM EFFICIENCY. ZERO TOLERANCE FOR MEDIOCRITY.'}
              </p>
            </div>

            {/* סטטיסטיקות קשיחות */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black text-white p-6 text-center">
                <div className="text-3xl font-mono font-black">100%</div>
                <div className="text-sm font-mono mt-1">SUCCESS</div>
              </div>
              <div className="bg-black text-white p-6 text-center">
                <div className="text-3xl font-mono font-black">24/7</div>
                <div className="text-sm font-mono mt-1">ACTIVE</div>
              </div>
              <div className="bg-black text-white p-6 text-center">
                <div className="text-3xl font-mono font-black">∞</div>
                <div className="text-sm font-mono mt-1">SCALE</div>
              </div>
            </div>
          </motion.div>

          {/* עמודה ימנית - פעולות */}
          <motion.div 
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              className="w-full bg-black text-white p-6 font-mono font-black text-lg uppercase tracking-wider hover:bg-gray-800 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {content?.ctaButton || 'EXECUTE'}
            </motion.button>
            
            <motion.button 
              className="w-full border-4 border-black bg-white text-black p-6 font-mono font-black text-lg uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {content?.secondaryButton || 'ANALYZE'}
            </motion.button>

            {/* קוד בר דקורטיבי */}
            <div className="border-4 border-black p-4 bg-gray-100">
              <div className="space-y-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`h-1 bg-black ${Math.random() > 0.5 ? 'w-full' : 'w-3/4'}`}></div>
                ))}
              </div>
              <div className="text-xs font-mono text-gray-600 mt-2">ID: {Date.now()}</div>
            </div>
          </motion.div>
        </div>

        {/* שורת תחתון */}
        <motion.div 
          className="border-t-4 border-black pt-8 flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="font-mono text-sm text-gray-600 uppercase tracking-wider">
            SYSTEM OPERATIONAL
          </div>
          <div className="font-mono text-sm text-gray-600">
            {new Date().toISOString().split('T')[0]}
          </div>
        </motion.div>
      </div>

      {/* אלמנטים גרפיים נעים */}
      <motion.div 
        className="absolute top-40 left-10 w-4 h-4 bg-black"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 right-40 w-8 h-8 border-4 border-black"
        animate={{ 
          rotate: [0, -90, -180, -270, -360] 
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
};