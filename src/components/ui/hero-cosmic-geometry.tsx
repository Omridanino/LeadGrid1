
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroCosmicGeometryProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroCosmicGeometry = ({ formData, currentColors, content }: HeroCosmicGeometryProps) => {
  const getTextStyle = (colorKey: string) => {
    const colorValue = content?.colors?.[colorKey];
    if (colorValue) {
      if (colorValue.includes('gradient')) {
        return { 
          background: colorValue,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        };
      }
      return { color: colorValue };
    }
    return { 
      background: 'linear-gradient(45deg, #ffeaa7, #fab1a0, #fd79a8, #a29bfe)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    };
  };

  const getBadgeStyle = () => {
    const badgeColor = content?.colors?.badge;
    if (badgeColor) {
      if (badgeColor.includes('gradient')) {
        return { 
          background: badgeColor,
          color: '#ffffff',
          border: 'none'
        };
      }
      return { 
        backgroundColor: badgeColor,
        color: '#ffffff',
        border: 'none'
      };
    }
    return { 
      background: 'rgba(255, 234, 167, 0.2)',
      color: '#ffeaa7',
      border: '1px solid rgba(255, 234, 167, 0.3)'
    };
  };

  const renderAdvancedButton = (button: any, index: number) => {
    const buttonText = button?.text || content?.cta || 'חקור הקוסמוס';
    const buttonColor = button?.color;
    
    const getButtonStyle = () => {
      if (buttonColor) {
        if (buttonColor.includes('gradient')) {
          return { 
            background: buttonColor,
            color: '#ffffff',
            border: 'none'
          };
        }
        return { 
          backgroundColor: buttonColor,
          color: '#ffffff',
          border: 'none'
        };
      }
      return { 
        background: 'linear-gradient(45deg, #ffeaa7, #fd79a8)',
        color: '#2d3748',
        border: 'none'
      };
    };

    return (
      <motion.button
        key={index}
        className="group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg"
        style={{
          ...getButtonStyle(),
          boxShadow: '0 8px 32px rgba(255, 234, 167, 0.4), 0 0 20px rgba(253, 121, 168, 0.3)'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.button>
    );
  };

  const geometricShapes = [
    { type: 'pentagon', size: 120, x: 20, y: 30 },
    { type: 'hexagon', size: 90, x: 80, y: 20 },
    { type: 'octagon', size: 100, x: 15, y: 70 },
    { type: 'dodecagon', size: 110, x: 85, y: 60 },
    { type: 'triangle', size: 80, x: 50, y: 15 },
    { type: 'circle', size: 70, x: 60, y: 80 },
  ];

  const createPath = (type: string, size: number) => {
    const radius = size / 2;
    switch (type) {
      case 'pentagon':
        return `M${radius},0 L${radius * Math.cos(-Math.PI/10)},${radius * Math.sin(-Math.PI/10)} L${radius * Math.cos(3*Math.PI/10)},${radius * Math.sin(3*Math.PI/10)} L${radius * Math.cos(7*Math.PI/10)},${radius * Math.sin(7*Math.PI/10)} L${radius * Math.cos(11*Math.PI/10)},${radius * Math.sin(11*Math.PI/10)} Z`;
      case 'hexagon':
        return `M${radius},0 L${radius/2},${radius*Math.sqrt(3)/2} L${-radius/2},${radius*Math.sqrt(3)/2} L${-radius},0 L${-radius/2},${-radius*Math.sqrt(3)/2} L${radius/2},${-radius*Math.sqrt(3)/2} Z`;
      case 'octagon':
        const a = radius * Math.sqrt(2) / (1 + Math.sqrt(2));
        return `M${radius},${a} L${a},${radius} L${-a},${radius} L${-radius},${a} L${-radius},${-a} L${-a},${-radius} L${a},${-radius} L${radius},${-a} Z`;
      case 'triangle':
        return `M${radius},0 L${-radius/2},${radius*Math.sqrt(3)/2} L${-radius/2},${-radius*Math.sqrt(3)/2} Z`;
      default:
        return `M${radius},0 A${radius},${radius} 0 1,1 ${radius-0.1},0 Z`;
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div className="absolute inset-0">
        {/* Cosmic background with stars */}
        {Array.from({ length: 100 }, (_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Geometric constellation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {geometricShapes.map((shape, index) => (
            <g key={index}>
              <motion.path
                d={createPath(shape.type, shape.size)}
                fill="none"
                stroke={`hsl(${(index * 60) % 360}, 70%, 60%)`}
                strokeWidth="2"
                style={{
                  transform: `translate(${shape.x}%, ${shape.y}%)`,
                  filter: `drop-shadow(0 0 10px hsl(${(index * 60) % 360}, 70%, 60%))`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  rotate: {
                    duration: 20 + index * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 8,
                    repeat: Infinity,
                    delay: index * 0.5,
                  },
                  opacity: {
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3,
                  },
                }}
              />
              
              {/* Connection lines between shapes */}
              {index < geometricShapes.length - 1 && (
                <motion.line
                  x1={`${shape.x}%`}
                  y1={`${shape.y}%`}
                  x2={`${geometricShapes[index + 1].x}%`}
                  y2={`${geometricShapes[index + 1].y}%`}
                  stroke="rgba(255, 234, 167, 0.3)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index * 0.8
                  }}
                />
              )}
            </g>
          ))}
        </svg>
        
        {/* Cosmic nebula effects */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={`nebula-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              background: `radial-gradient(circle, 
                hsl(${Math.random() * 360}, 70%, 50%, 0.1) 0%, 
                hsl(${Math.random() * 360}, 60%, 60%, 0.05) 50%, 
                transparent 100%)`,
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-8 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {content?.badge && (
            <motion.div
              className="inline-block mb-8 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
              style={getBadgeStyle()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-4 h-4 inline mr-2" />
              {content.badge}
            </motion.div>
          )}
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            style={{
              ...getTextStyle('headline'),
              filter: 'drop-shadow(0 0 30px rgba(255, 234, 167, 0.8))',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content?.headline || formData?.businessName || 'גיאומטריה קוסמית'}
          </motion.h1>
          
          <motion.p
            className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto text-yellow-100"
            style={getTextStyle('subheadline')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content?.subheadline || content?.description || 'מסע קוסמי דרך יקום של צורות גיאומטריות מקודשות שמחברות בין מדע לאמנות ברמוניה מושלמת'}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
              renderAdvancedButton(button, index)
            ) || (
              <motion.button
                className="group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg"
                style={{
                  background: 'linear-gradient(45deg, #ffeaa7, #fd79a8)',
                  color: '#2d3748',
                  border: 'none',
                  boxShadow: '0 8px 32px rgba(255, 234, 167, 0.4), 0 0 20px rgba(253, 121, 168, 0.3)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content?.cta || 'חקור הקוסמוס'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
