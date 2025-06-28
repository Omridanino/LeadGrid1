
export const Advanced3DAnimations = () => (
  <style>{`
    /* אנימציות תלת-ממד מותאמות לביצועים */
    
    @keyframes float3D {
      0%, 100% { 
        transform: translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg);
        opacity: 0.4;
      }
      25% { 
        transform: translateY(-15px) translateZ(10px) rotateX(5deg) rotateY(5deg);
        opacity: 0.6;
      }
      50% { 
        transform: translateY(-8px) translateZ(20px) rotateX(-3deg) rotateY(8deg);
        opacity: 0.5;
      }
      75% { 
        transform: translateY(-20px) translateZ(15px) rotateX(7deg) rotateY(-4deg);
        opacity: 0.7;
      }
    }
    
    @keyframes geometricFloat {
      0%, 100% { 
        transform: rotate(0deg) scale(1) translateY(0px);
        opacity: 0.35;
      }
      33% { 
        transform: rotate(120deg) scale(1.1) translateY(-10px);
        opacity: 0.5;
      }
      66% { 
        transform: rotate(240deg) scale(0.9) translateY(5px);
        opacity: 0.4;
      }
    }
    
    @keyframes sparkle {
      0%, 100% { 
        opacity: 0.3;
        transform: scale(0.8);
      }
      50% { 
        opacity: 0.8;
        transform: scale(1.2);
      }
    }
    
    @keyframes pulseGlow {
      0%, 100% { 
        box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
        opacity: 0.6;
      }
      50% { 
        box-shadow: 0 0 40px rgba(168, 85, 247, 0.6);
        opacity: 0.8;
      }
    }
    
    /* אופטימיזציה לביצועים */
    .style-3d-section * {
      will-change: transform, opacity;
      backface-visibility: hidden;
      transform-style: preserve-3d;
    }
    
    /* אנימציות מופחתות במובייל */
    @media (max-width: 768px) {
      @keyframes float3D {
        0%, 100% { 
          transform: translateY(0px);
          opacity: 0.4;
        }
        50% { 
          transform: translateY(-10px);
          opacity: 0.6;
        }
      }
      
      @keyframes geometricFloat {
        0%, 100% { 
          transform: translateY(0px);
          opacity: 0.35;
        }
        50% { 
          transform: translateY(-8px);
          opacity: 0.5;
        }
      }
    }
    
    /* הפחתת אנימציות למי שמעדיף */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `}</style>
);
