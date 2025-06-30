
export const TemplateStyles = () => (
  <style>{`
    /* Enhanced Typography & Readability */
    .template-text {
      text-shadow: 0 1px 3px rgba(0,0,0,0.3);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .template-text-dark {
      text-shadow: 0 1px 3px rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.95);
    }
    
    .template-text-light {
      text-shadow: 0 1px 2px rgba(0,0,0,0.1);
      color: rgba(0,0,0,0.9);
    }

    /* === SPECTACULAR 3D EFFECTS WITH FLOATING ELEMENTS === */
    .effect-3d-float {
      animation: float3d 6s ease-in-out infinite;
      transform-style: preserve-3d;
      position: relative;
    }
    
    .effect-3d-float::before {
      content: '';
      position: absolute;
      top: 10%;
      right: 10%;
      width: 100px;
      height: 100px;
      background: linear-gradient(45deg, rgba(139, 92, 246, 0.6), rgba(236, 72, 153, 0.4));
      border-radius: 50%;
      animation: float3dElement1 8s ease-in-out infinite;
      z-index: -1;
    }
    
    .effect-3d-float::after {
      content: '';
      position: absolute;
      bottom: 20%;
      left: 15%;
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(34, 211, 238, 0.3));
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      animation: float3dElement2 10s ease-in-out infinite reverse;
      z-index: -1;
    }
    
    @keyframes float3d {
      0%, 100% { transform: translateY(0px) rotateX(0deg) perspective(1000px); }
      50% { transform: translateY(-30px) rotateX(10deg) perspective(1000px); }
    }
    
    @keyframes float3dElement1 {
      0%, 100% { 
        transform: translateY(0px) translateX(0px) rotateZ(0deg) scale(1);
        opacity: 0.6;
      }
      33% { 
        transform: translateY(-50px) translateX(30px) rotateZ(120deg) scale(1.2);
        opacity: 0.8;
      }
      66% { 
        transform: translateY(20px) translateX(-20px) rotateZ(240deg) scale(0.9);
        opacity: 0.4;
      }
    }
    
    @keyframes float3dElement2 {
      0%, 100% { 
        transform: translateY(0px) translateX(0px) rotateY(0deg) scale(1);
        opacity: 0.5;
      }
      50% { 
        transform: translateY(-40px) translateX(25px) rotateY(180deg) scale(1.3);
        opacity: 0.7;
      }
    }
    
    .floating-cubes {
      position: absolute;
      top: 30%;
      right: 20%;
      width: 60px;
      height: 60px;
      background: linear-gradient(45deg, rgba(168, 85, 247, 0.7), rgba(59, 130, 246, 0.5));
      transform: rotateX(45deg) rotateY(45deg);
      animation: cube3dRotate 12s linear infinite;
      z-index: -1;
    }
    
    @keyframes cube3dRotate {
      0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
      100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
    }

    /* === SPECTACULAR GLASS MORPHISM REDESIGN === */
    .spectacular-glass {
      position: relative;
      background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.1) 25%,
        rgba(255, 255, 255, 0.05) 50%,
        rgba(255, 255, 255, 0.1) 75%,
        rgba(255, 255, 255, 0.2) 100%
      );
      backdrop-filter: blur(30px) saturate(200%);
      border: 2px solid rgba(255, 255, 255, 0.3);
      box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      overflow: hidden;
    }
    
    .spectacular-glass::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.3) 50%, 
        transparent 100%
      );
      animation: glassShine 3s ease-in-out infinite;
      z-index: 1;
    }
    
    @keyframes glassShine {
      0% { left: -100%; }
      100% { left: 100%; }
    }
    
    .glass-bubbles {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }
    
    .glass-bubble {
      position: absolute;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 70%, transparent 100%);
      border-radius: 50%;
      animation: bubbleFloat 6s ease-in-out infinite;
    }
    
    .glass-bubble:nth-child(1) {
      width: 60px;
      height: 60px;
      top: 20%;
      right: 15%;
      animation-delay: 0s;
    }
    
    .glass-bubble:nth-child(2) {
      width: 40px;
      height: 40px;
      bottom: 30%;
      left: 20%;
      animation-delay: 2s;
    }
    
    .glass-bubble:nth-child(3) {
      width: 80px;
      height: 80px;
      top: 60%;
      right: 30%;
      animation-delay: 4s;
    }
    
    @keyframes bubbleFloat {
      0%, 100% { 
        transform: translateY(0px) scale(1);
        opacity: 0.3;
      }
      50% { 
        transform: translateY(-40px) scale(1.2);
        opacity: 0.7;
      }
    }

    /* === COSMIC/SPACE THEME (REPLACING GEOMETRIC) === */
    .cosmic-space {
      position: relative;
      background: radial-gradient(ellipse at center, 
        rgba(30, 27, 75, 0.9) 0%,
        rgba(15, 15, 35, 0.95) 30%,
        rgba(5, 5, 15, 0.98) 70%,
        rgba(0, 0, 0, 1) 100%
      );
      overflow: hidden;
    }
    
    .cosmic-space::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.8), transparent),
        radial-gradient(2px 2px at 40px 70px, rgba(139, 92, 246, 0.6), transparent),
        radial-gradient(1px 1px at 90px 40px, rgba(59, 130, 246, 0.4), transparent),
        radial-gradient(1px 1px at 130px 80px, rgba(236, 72, 153, 0.5), transparent),
        radial-gradient(2px 2px at 160px 30px, rgba(34, 211, 238, 0.3), transparent);
      background-repeat: repeat;
      background-size: 200px 100px;
      animation: starsMove 20s linear infinite;
      pointer-events: none;
    }
    
    @keyframes starsMove {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-100px); }
    }
    
    .cosmic-planet {
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, 
        rgba(139, 92, 246, 0.8) 0%,
        rgba(79, 70, 229, 0.6) 40%,
        rgba(30, 27, 75, 0.8) 100%
      );
      box-shadow: 
        0 0 40px rgba(139, 92, 246, 0.3),
        inset -20px -20px 40px rgba(0, 0, 0, 0.3);
      animation: planetOrbit 25s linear infinite;
      top: 20%;
      right: 10%;
    }
    
    @keyframes planetOrbit {
      0% { transform: rotate(0deg) translateX(0px) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
    }
    
    .cosmic-rings {
      position: absolute;
      width: 200px;
      height: 200px;
      border: 3px solid rgba(34, 211, 238, 0.3);
      border-radius: 50%;
      top: 50%;
      left: 15%;
      animation: ringsRotate 15s linear infinite;
    }
    
    .cosmic-rings::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 150px;
      border: 2px solid rgba(236, 72, 153, 0.4);
      border-radius: 50%;
      animation: ringsRotate 10s linear infinite reverse;
    }
    
    @keyframes ringsRotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* === ENHANCED CREATIVE ARTISTIC EFFECTS === */
    .artistic-paint {
      position: relative;
      background: linear-gradient(45deg,
        rgba(236, 72, 153, 0.1) 0%,
        rgba(139, 92, 246, 0.15) 25%,
        rgba(34, 197, 94, 0.1) 50%,
        rgba(251, 146, 60, 0.12) 75%,
        rgba(59, 130, 246, 0.1) 100%
      );
      overflow: hidden;
    }
    
    .paint-splash {
      position: absolute;
      background: radial-gradient(ellipse at center,
        rgba(236, 72, 153, 0.6) 0%,
        rgba(236, 72, 153, 0.3) 40%,
        transparent 70%
      );
      width: 150px;
      height: 100px;
      border-radius: 50% 20% 40% 30%;
      animation: paintDrip 8s ease-in-out infinite;
      top: 10%;
      right: 20%;
    }
    
    .paint-splash:nth-child(2) {
      background: radial-gradient(ellipse at center,
        rgba(34, 197, 94, 0.5) 0%,
        rgba(34, 197, 94, 0.2) 40%,
        transparent 70%
      );
      width: 120px;
      height: 80px;
      bottom: 20%;
      left: 25%;
      animation-delay: 2s;
    }
    
    .paint-splash:nth-child(3) {
      background: radial-gradient(ellipse at center,
        rgba(251, 146, 60, 0.6) 0%,
        rgba(251, 146, 60, 0.3) 40%,
        transparent 70%
      );
      width: 100px;
      height: 120px;
      top: 60%;
      right: 15%;
      animation-delay: 4s;
    }
    
    @keyframes paintDrip {
      0%, 100% { 
        transform: scale(1) rotate(0deg);
        opacity: 0.6;
      }
      25% { 
        transform: scale(1.2) rotate(10deg);
        opacity: 0.8;
      }
      50% { 
        transform: scale(0.9) rotate(-5deg);
        opacity: 0.4;
      }
      75% { 
        transform: scale(1.1) rotate(15deg);
        opacity: 0.7;
      }
    }
    
    .brush-stroke {
      position: absolute;
      width: 200px;
      height: 20px;
      background: linear-gradient(90deg,
        transparent 0%,
        rgba(139, 92, 246, 0.4) 20%,
        rgba(139, 92, 246, 0.6) 50%,
        rgba(139, 92, 246, 0.3) 80%,
        transparent 100%
      );
      transform: rotate(-15deg);
      animation: brushMove 6s ease-in-out infinite;
      top: 40%;
      left: 10%;
    }
    
    @keyframes brushMove {
      0%, 100% { 
        transform: rotate(-15deg) translateX(0px);
        opacity: 0.5;
      }
      50% { 
        transform: rotate(-10deg) translateX(50px);
        opacity: 0.8;
      }
    }
    
    .creative-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      animation: particleFloat 4s ease-in-out infinite;
    }
    
    .particle:nth-child(1) {
      background: rgba(236, 72, 153, 0.8);
      top: 25%;
      left: 30%;
      animation-delay: 0s;
    }
    
    .particle:nth-child(2) {
      background: rgba(34, 197, 94, 0.7);
      top: 45%;
      right: 25%;
      animation-delay: 1s;
    }
    
    .particle:nth-child(3) {
      background: rgba(251, 146, 60, 0.6);
      bottom: 35%;
      left: 40%;
      animation-delay: 2s;
    }
    
    .particle:nth-child(4) {
      background: rgba(59, 130, 246, 0.8);
      top: 70%;
      right: 35%;
      animation-delay: 3s;
    }
    
    @keyframes particleFloat {
      0%, 100% { 
        transform: translateY(0px) scale(1);
        opacity: 0.4;
      }
      50% { 
        transform: translateY(-30px) scale(1.5);
        opacity: 1;
      }
    }

    /* === ENHANCED BUTTONS === */
    .btn-3d {
      transform: perspective(1px) translateZ(0);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .btn-3d:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 20px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.15);
    }
    
    .btn-glass {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(15px) saturate(180%);
      border: 1px solid rgba(255,255,255,0.2);
      transition: all 0.3s ease;
    }
    
    .btn-glass:hover {
      background: rgba(255,255,255,0.2);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }
    
    .btn-cosmic {
      background: linear-gradient(45deg, rgba(139, 92, 246, 0.8), rgba(59, 130, 246, 0.6));
      border: 1px solid rgba(139, 92, 246, 0.4);
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
      transition: all 0.3s ease;
    }
    
    .btn-cosmic:hover {
      box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
      transform: translateY(-2px) scale(1.05);
    }
    
    .btn-artistic {
      background: linear-gradient(45deg, rgba(236, 72, 153, 0.7), rgba(34, 197, 94, 0.5));
      border: 2px solid rgba(236, 72, 153, 0.3);
      position: relative;
      overflow: hidden;
    }
    
    .btn-artistic::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.5s ease;
    }
    
    .btn-artistic:hover::before {
      left: 100%;
    }

    /* === ADVANCED ANIMATIONS === */
    .fade-in-up {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .scale-on-scroll {
      transform: scale(0.9);
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .scale-on-scroll.in-view {
      transform: scale(1);
    }

    /* === RESPONSIVE ENHANCEMENTS === */
    @media (max-width: 768px) {
      .template-text h1 { font-size: clamp(2rem, 6vw, 3.5rem); }
      .template-text h2 { font-size: clamp(1.8rem, 5vw, 3rem); }
      .template-text h3 { font-size: clamp(1.5rem, 4vw, 2.5rem); }
      .template-text p { font-size: clamp(1rem, 3vw, 1.2rem); }
      
      .floating-cubes, .cosmic-planet {
        width: 80px;
        height: 80px;
      }
      
      .cosmic-rings {
        width: 150px;
        height: 150px;
      }
      
      .paint-splash {
        width: 100px;
        height: 70px;
      }
    }
    
    /* === HIGH CONTRAST & ACCESSIBILITY === */
    @media (prefers-contrast: high) {
      .template-text {
        text-shadow: none;
        font-weight: 600;
      }
      
      .spectacular-glass, .cosmic-space, .artistic-paint {
        background: rgba(255,255,255,0.95);
        color: #000;
        border: 2px solid #000;
      }
    }
    
    /* === REDUCED MOTION === */
    @media (prefers-reduced-motion: reduce) {
      .effect-3d-float,
      .floating-cubes,
      .cosmic-planet,
      .cosmic-rings,
      .paint-splash,
      .brush-stroke,
      .particle {
        animation: none;
        transform: none;
      }
    }
    
    /* === PERFORMANCE OPTIMIZATIONS === */
    .template-section {
      contain: layout style paint;
      will-change: transform;
    }
    
    .gpu-accelerated {
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
  `}</style>
);
