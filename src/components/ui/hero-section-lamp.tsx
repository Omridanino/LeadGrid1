
import { motion } from "framer-motion";
import { getColorStyle, getBackgroundStyle } from "@/utils/colorUtils";

interface HeroSectionLampProps {
  content?: any;
  currentColors?: any;
  formData?: any;
  heroImage?: string;
}

const HeroSectionLamp = ({ content, currentColors, formData, heroImage }: HeroSectionLampProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0.0, 0.2, 1] // Using cubic-bezier array instead of string
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Lamp Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-purple-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        {content?.badge && (
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <span 
              className="px-4 py-2 rounded-full text-sm font-medium border border-gray-600"
              style={{
                ...getBackgroundStyle(content.badgeStyle),
                ...getColorStyle(content.badgeTextStyle)
              }}
            >
              {content.badge}
            </span>
          </motion.div>
        )}

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={getColorStyle(content?.headlineStyle)}
        >
          {content?.headline || formData?.businessName || 'כותרת ראשית מדהימה'}
        </motion.h1>

        {/* Subheadline */}
        {content?.subheadline && (
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed"
            style={getColorStyle(content.subheadlineStyle)}
          >
            {content.subheadline}
          </motion.h2>
        )}

        {/* Description */}
        {content?.description && (
          <motion.p
            variants={itemVariants}
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={getColorStyle(content.descriptionStyle)}
          >
            {content.description}
          </motion.p>
        )}

        {/* Buttons */}
        {content?.buttons && content.buttons.length > 0 && (
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {content.buttons.map((button: any, index: number) => {
              if (button.visible === false) return null;
              
              return (
                <motion.button
                  key={index}
                  className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    ...getBackgroundStyle(button.style),
                    ...getColorStyle(button.textStyle)
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button.text}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </motion.div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default HeroSectionLamp;
