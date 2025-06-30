
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

    /* Enhanced 3D Effects */
    .effect-3d-float {
      animation: float3d 6s ease-in-out infinite;
      transform-style: preserve-3d;
    }
    
    @keyframes float3d {
      0%, 100% { transform: translateY(0px) rotateX(0deg); }
      50% { transform: translateY(-20px) rotateX(5deg); }
    }
    
    .neon-glow {
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1);
    }
    
    .neon-border {
      border-image: linear-gradient(45deg, #8B5CF6, #EC4899) 1;
    }
    
    .holographic-effect {
      background: linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
      animation: hologram 4s ease-in-out infinite;
    }
    
    @keyframes hologram {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    .matrix-rain::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px);
      animation: matrix-fall 20s linear infinite;
      pointer-events: none;
    }
    
    @keyframes matrix-fall {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100vh); }
    }
    
    .cosmic-float {
      animation: cosmic-drift 8s ease-in-out infinite;
    }
    
    @keyframes cosmic-drift {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-15px) rotate(1deg); }
      66% { transform: translateY(10px) rotate(-1deg); }
    }
    
    .metallic-shine {
      background: linear-gradient(45deg, rgba(251, 146, 60, 0.8), rgba(239, 68, 68, 0.6), rgba(251, 191, 36, 0.8));
      animation: metallic-shimmer 3s ease-in-out infinite;
    }
    
    @keyframes metallic-shimmer {
      0%, 100% { filter: brightness(1) contrast(1); }
      50% { filter: brightness(1.2) contrast(1.1); }
    }

    /* Advanced Glass Effects */
    .glass-morphism {
      backdrop-filter: blur(20px) saturate(180%);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
    
    .crystal-glass {
      backdrop-filter: blur(25px) saturate(200%);
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(14, 165, 233, 0.05));
      border: 1px solid rgba(6, 182, 212, 0.2);
      box-shadow: 0 12px 40px rgba(6, 182, 212, 0.15);
    }
    
    .mystical-glass {
      backdrop-filter: blur(30px) saturate(150%);
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(168, 85, 247, 0.08));
      border: 1px solid rgba(139, 92, 246, 0.25);
      box-shadow: 0 15px 45px rgba(139, 92, 246, 0.2);
    }
    
    .dreamy-glass {
      backdrop-filter: blur(22px) saturate(170%);
      background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(244, 63, 94, 0.06));
      border: 1px solid rgba(236, 72, 153, 0.2);
      box-shadow: 0 10px 35px rgba(236, 72, 153, 0.18);
    }

    /* Enhanced Geometric Patterns */
    .hexagon-pattern {
      background-image: radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 2px);
      background-size: 50px 43px;
      position: relative;
    }
    
    .hexagon-pattern::before {
      content: '';
      position: absolute;
      top: 0;
      left: 25px;
      right: 0;
      bottom: 0;
      background-image: radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 2px);
      background-size: 50px 43px;
    }
    
    .triangle-pattern {
      background-image: linear-gradient(45deg, transparent 35%, rgba(255,255,255,0.1) 35%, rgba(255,255,255,0.1) 65%, transparent 65%);
      background-size: 20px 20px;
      animation: triangle-shift 10s linear infinite;
    }
    
    @keyframes triangle-shift {
      0% { background-position: 0 0; }
      100% { background-position: 40px 40px; }
    }
    
    .diamond-pattern {
      background-image: 
        linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 60%),
        linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 60%);
      background-size: 30px 30px;
      animation: diamond-sparkle 6s ease-in-out infinite;
    }
    
    @keyframes diamond-sparkle {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    }

    /* Creative Artistic Effects */
    .watercolor-splash {
      position: relative;
      overflow: hidden;
    }
    
    .watercolor-splash::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
      animation: watercolor-flow 15s ease-in-out infinite;
      pointer-events: none;
    }
    
    @keyframes watercolor-flow {
      0%, 100% { transform: rotate(0deg) scale(1); }
      33% { transform: rotate(120deg) scale(1.1); }
      66% { transform: rotate(240deg) scale(0.9); }
    }
    
    .graffiti-effect {
      position: relative;
    }
    
    .graffiti-effect::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent 70%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0.1) 72%, transparent 72%);
      background-size: 10px 10px;
      animation: graffiti-texture 8s linear infinite;
      pointer-events: none;
    }
    
    @keyframes graffiti-texture {
      0% { background-position: 0 0; }
      100% { background-position: 20px 20px; }
    }
    
    .pastel-dream {
      filter: saturate(0.8) brightness(1.1);
    }
    
    .oil-paint {
      filter: contrast(1.1) saturate(1.2);
      background-blend-mode: multiply;
    }

    /* Enhanced Buttons */
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
    
    .btn-geometric {
      clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
      transition: all 0.3s ease;
    }
    
    .btn-geometric:hover {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      transform: scale(1.05);
    }

    /* Advanced Animations */
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
    
    .parallax-element {
      will-change: transform;
      transition: transform 0.1s ease-out;
    }

    /* Responsive Enhancements */
    @media (max-width: 768px) {
      .template-text h1 { font-size: clamp(2rem, 6vw, 3.5rem); }
      .template-text h2 { font-size: clamp(1.8rem, 5vw, 3rem); }
      .template-text h3 { font-size: clamp(1.5rem, 4vw, 2.5rem); }
      .template-text p { font-size: clamp(1rem, 3vw, 1.2rem); }
      
      .btn-3d:hover {
        transform: translateY(-2px) scale(1.02);
      }
    }
    
    /* High Contrast & Accessibility */
    @media (prefers-contrast: high) {
      .template-text {
        text-shadow: none;
        font-weight: 600;
      }
      
      .glass-morphism, .crystal-glass, .mystical-glass, .dreamy-glass {
        background: rgba(255,255,255,0.95);
        color: #000;
        border: 2px solid #000;
      }
    }
    
    /* Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
      .effect-3d-float,
      .cosmic-float,
      .watercolor-flow,
      .matrix-rain,
      .parallax-element {
        animation: none;
        transform: none;
      }
    }
    
    /* Performance Optimizations */
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
