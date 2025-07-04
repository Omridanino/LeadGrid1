import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { Check, Star } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
  buttonText: string;
}

interface LiquidPricingProps {
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
  onPlanSelect?: (planIndex: number) => void;
  className?: string;
}

export const LiquidPricing = ({
  title,
  subtitle,
  plans,
  onPlanSelect,
  className = ''
}: LiquidPricingProps) => {
  return (
    <div className={`py-20 relative overflow-hidden ${className}`}>
      {/* Animated liquid background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,300 Q250,200 500,300 T1000,300 L1000,1000 L0,1000 Z"
            fill="url(#liquidGradient)"
            animate={{
              d: [
                "M0,300 Q250,200 500,300 T1000,300 L1000,1000 L0,1000 Z",
                "M0,350 Q250,150 500,350 T1000,350 L1000,1000 L0,1000 Z",
                "M0,300 Q250,200 500,300 T1000,300 L1000,1000 L0,1000 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-blue-100/70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.02
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className={`relative group perspective-1000 ${
                plan.recommended ? 'lg:scale-105' : ''
              }`}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4" />
                    מומלץ
                  </div>
                </motion.div>
              )}
              
              {/* Card background with liquid effect */}
              <div className="relative transform-gpu transition-all duration-500 preserve-3d group-hover:rotateY-5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20" />
                
                {/* Glow effect for recommended plan */}
                {plan.recommended && (
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl blur-sm" />
                )}
                
                {/* Liquid animation overlay */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-lg"
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 space-y-6">
                  {/* Plan name */}
                  <h3 className="text-2xl font-bold text-white text-center">
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {plan.price}
                    </div>
                    <div className="text-blue-200/70">
                      {plan.period}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.3 + index * 0.1 + featureIndex * 0.05 
                        }}
                        className="flex items-center gap-3 text-blue-100/80"
                      >
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button
                    onClick={() => onPlanSelect?.(index)}
                    className={`w-full py-3 font-medium rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg ${
                      plan.recommended
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};