
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star, Monitor, FileText, Eye } from 'lucide-react';

interface HeroNeumorphismProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroNeumorphism = ({ formData, currentColors, content }: HeroNeumorphismProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-8 text-gray-800 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content?.headline || 'Neumorphism UI'}
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content?.description || 'ערכת ממשק משתמש בהשראת ניומורפיזם שתעזור לכם ליצור אבטיפוס ולעצב אתרים יפים, יצירתיים ומודרניים.'}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              className="px-8 py-4 bg-gray-200 text-gray-700 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 justify-center hover:scale-105"
              style={{
                boxShadow: `
                  12px 12px 24px rgba(0, 0, 0, 0.1),
                  -12px -12px 24px rgba(255, 255, 255, 0.8),
                  inset 0px 0px 0px rgba(0, 0, 0, 0.1),
                  inset 0px 0px 0px rgba(255, 255, 255, 0.8)
                `,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  inset 6px 6px 12px rgba(0, 0, 0, 0.1),
                  inset -6px -6px 12px rgba(255, 255, 255, 0.8)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  12px 12px 24px rgba(0, 0, 0, 0.1),
                  -12px -12px 24px rgba(255, 255, 255, 0.8)
                `;
              }}
            >
              <Download className="w-5 h-5" />
              {content?.buttons?.[0]?.text || 'הורדה'}
            </button>
            
            <button 
              className="px-6 py-4 bg-gray-200 text-gray-700 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105"
              style={{
                boxShadow: `
                  12px 12px 24px rgba(0, 0, 0, 0.1),
                  -12px -12px 24px rgba(255, 255, 255, 0.8)
                `,
              }}
            >
              <Star className="w-4 h-4" />
              <span>Star</span>
              <span className="bg-gray-300 px-2 py-1 rounded-lg text-sm">21</span>
            </button>
          </motion.div>
          
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-16 h-1 bg-orange-400 mx-auto mb-4 rounded-full" />
            <p className="text-gray-500 text-sm">A Themesberg production</p>
          </motion.div>
          
          {/* Neumorphic Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div 
              className="bg-gray-200 p-8 rounded-3xl text-center transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: `
                  20px 20px 40px rgba(0, 0, 0, 0.1),
                  -20px -20px 40px rgba(255, 255, 255, 0.8)
                `,
              }}
            >
              <div 
                className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  boxShadow: `
                    inset 8px 8px 16px rgba(0, 0, 0, 0.1),
                    inset -8px -8px 16px rgba(255, 255, 255, 0.8)
                  `,
                }}
              >
                <Eye className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">מעל 200 רכיבים</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                רכיבים מעוצבים בקפידה ומעוצבים בהשראת ניומורפיזם
              </p>
            </div>
            
            <div 
              className="bg-gray-200 p-8 rounded-3xl text-center transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: `
                  20px 20px 40px rgba(0, 0, 0, 0.1),
                  -20px -20px 40px rgba(255, 255, 255, 0.8)
                `,
              }}
            >
              <div 
                className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  boxShadow: `
                    inset 8px 8px 16px rgba(0, 0, 0, 0.1),
                    inset -8px -8px 16px rgba(255, 255, 255, 0.8)
                  `,
                }}
              >
                <Monitor className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">10+ סקשנים</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                סרגלי ניווט, כרטיסי תמחור, כותרות ועוד סקשנים רבים לשיפור המגוון בדף
              </p>
            </div>
            
            <div 
              className="bg-gray-200 p-8 rounded-3xl text-center transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: `
                  20px 20px 40px rgba(0, 0, 0, 0.1),
                  -20px -20px 40px rgba(255, 255, 255, 0.8)
                `,
              }}
            >
              <div 
                className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  boxShadow: `
                    inset 8px 8px 16px rgba(0, 0, 0, 0.1),
                    inset -8px -8px 16px rgba(255, 255, 255, 0.8)
                  `,
                }}
              >
                <FileText className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">5 דפי דוגמה</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                הקדשנו זמן ליצור כמה דפי דוגמה כדי להראות לכם איך דפים ניומורפיים יכולים להיראות
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
