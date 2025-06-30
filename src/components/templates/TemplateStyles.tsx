
export const TemplateStyles = () => (
  <style>{`
    /* === REVOLUTIONARY 3D EFFECTS - NEXT LEVEL === */
    .floating-elements-3d {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }
    
    .floating-elements-3d::before,
    .floating-elements-3d::after {
      content: '';
      position: absolute;
      background: linear-gradient(45deg, 
        rgba(59, 130, 246, 0.4) 0%,
        rgba(147, 51, 234, 0.3) 50%,
        rgba(236, 72, 153, 0.2) 100%
      );
      border-radius: 20px;
      animation: float3D 8s ease-in-out infinite;
      filter: blur(1px);
    }
    
    .floating-elements-3d::before {
      width: 200px;
      height: 200px;
      top: 20%;
      right: 15%;
      animation-delay: 0s;
      transform-style: preserve-3d;
    }
    
    .floating-elements-3d::after {
      width: 150px;
      height: 150px;
      bottom: 30%;
      left: 10%;
      animation-delay: 4s;
      transform-style: preserve-3d;
    }
    
    @keyframes float3D {
      0%, 100% { 
        transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1);
      }
      33% { 
        transform: translateY(-30px) rotateX(15deg) rotateY(15deg) scale(1.1);
      }
      66% { 
        transform: translateY(-20px) rotateX(-10deg) rotateY(-10deg) scale(0.9);
      }
    }
    
    .holographic-grid {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: gridPulse 4s ease-in-out infinite;
      z-index: -2;
    }
    
    @keyframes gridPulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.6; }
    }
    
    .quantum-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    
    .quantum-particles::before,
    .quantum-particles::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent);
      border-radius: 50%;
      animation: quantumFloat 6s ease-in-out infinite;
    }
    
    .quantum-particles::before {
      top: 25%;
      left: 20%;
      animation-delay: 0s;
    }
    
    .quantum-particles::after {
      top: 70%;
      right: 25%;
      animation-delay: 3s;
    }
    
    @keyframes quantumFloat {
      0%, 100% { 
        transform: translateY(0px) scale(1);
        opacity: 0.4;
      }
      50% { 
        transform: translateY(-50px) scale(1.5);
        opacity: 1;
      }
    }

    /* === REVOLUTIONARY GLASS MORPHISM === */
    .glass-morphism-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
      backdrop-filter: blur(20px) saturate(200%);
      z-index: -2;
    }
    
    .glass-orbs {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }
    
    .glass-orbs::before,
    .glass-orbs::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, 
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 70%
      );
      backdrop-filter: blur(10px);
      animation: orbFloat 10s ease-in-out infinite;
    }
    
    .glass-orbs::before {
      width: 300px;
      height: 300px;
      top: 10%;
      right: 10%;
      animation-delay: 0s;
    }
    
    .glass-orbs::after {
      width: 200px;
      height: 200px;
      bottom: 20%;
      left: 15%;
      animation-delay: 5s;
    }
    
    @keyframes orbFloat {
      0%, 100% { 
        transform: translateY(0px) scale(1);
        opacity: 0.6;
      }
      50% { 
        transform: translateY(-40px) scale(1.2);
        opacity: 1;
      }
    }
    
    .frosted-layers {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%);
      background-size: 60px 60px;
      animation: frostShift 8s ease-in-out infinite;
      z-index: -2;
    }
    
    @keyframes frostShift {
      0%, 100% { background-position: 0 0, 0 0, 30px 30px, 30px 30px; }
      50% { background-position: 30px 30px, 30px 30px, 0 0, 0 0; }
    }

    /* === COSMIC SPACE THEME === */
    .cosmic-geometry {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
      z-index: -2;
    }
    
    .space-nebula {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(3px 3px at 30px 50px, rgba(255, 255, 255, 0.5), transparent),
        radial-gradient(2px 2px at 80px 30px, rgba(59, 130, 246, 0.4), transparent),
        radial-gradient(1px 1px at 120px 80px, rgba(147, 51, 234, 0.3), transparent),
        radial-gradient(2px 2px at 200px 60px, rgba(236, 72, 153, 0.4), transparent);
      background-repeat: repeat;
      background-size: 250px 150px;
      animation: nebulaShift 20s linear infinite;
      z-index: -1;
    }
    
    @keyframes nebulaShift {
      0% { transform: translateX(0px) translateY(0px); }
      100% { transform: translateX(-250px) translateY(-150px); }
    }
    
    .stellar-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    
    .stellar-particles::before,
    .stellar-particles::after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(59, 130, 246, 0.4));
      border-radius: 50%;
      animation: stellarTwinkle 4s ease-in-out infinite;
    }
    
    .stellar-particles::before {
      top: 30%;
      left: 70%;
      animation-delay: 0s;
    }
    
    .stellar-particles::after {
      top: 60%;
      left: 30%;
      animation-delay: 2s;
    }
    
    @keyframes stellarTwinkle {
      0%, 100% { 
        opacity: 0.3;
        transform: scale(1);
      }
      50% { 
        opacity: 1;
        transform: scale(1.5);
      }
    }

    /* === ARTISTIC CREATIVE EFFECTS === */
    .artistic-splashes {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    
    .artistic-splashes::before,
    .artistic-splashes::after {
      content: '';
      position: absolute;
      background: radial-gradient(ellipse, 
        rgba(236, 72, 153, 0.4) 0%,
        rgba(147, 51, 234, 0.3) 50%,
        transparent 70%
      );
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      animation: splashMorph 8s ease-in-out infinite;
      filter: blur(2px);
    }
    
    .artistic-splashes::before {
      width: 250px;
      height: 180px;
      top: 15%;
      right: 20%;
      animation-delay: 0s;
    }
    
    .artistic-splashes::after {
      width: 200px;
      height: 150px;
      bottom: 25%;
      left: 15%;
      animation-delay: 4s;
    }
    
    @keyframes splashMorph {
      0%, 100% { 
        transform: scale(1) rotate(0deg);
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        opacity: 0.6;
      }
      50% { 
        transform: scale(1.3) rotate(180deg);
        border-radius: 30% 70% 60% 40% / 50% 60% 30% 60%;
        opacity: 0.9;
      }
    }
    
    .creative-brushes {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -2;
    }
    
    .creative-brushes::before {
      content: '';
      position: absolute;
      width: 400px;
      height: 40px;
      background: linear-gradient(90deg,
        transparent 0%,
        rgba(59, 130, 246, 0.3) 20%,
        rgba(147, 51, 234, 0.5) 50%,
        rgba(236, 72, 153, 0.3) 80%,
        transparent 100%
      );
      top: 40%;
      left: -50px;
      transform: rotate(-15deg);
      animation: brushStroke 6s ease-in-out infinite;
      filter: blur(1px);
    }
    
    @keyframes brushStroke {
      0%, 100% { 
        transform: rotate(-15deg) translateX(0px);
        opacity: 0.4;
      }
      50% { 
        transform: rotate(-12deg) translateX(100px);
        opacity: 0.8;
      }
    }
    
    .paint-drops {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    
    .paint-drops::before,
    .paint-drops::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      animation: dropFall 5s ease-in-out infinite;
    }
    
    .paint-drops::before {
      width: 12px;
      height: 12px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.3));
      top: 10%;
      left: 60%;
      animation-delay: 0s;
    }
    
    .paint-drops::after {
      width: 8px;
      height: 8px;
      background: radial-gradient(circle, rgba(236, 72, 153, 0.8), rgba(236, 72, 153, 0.3));
      top: 15%;
      left: 40%;
      animation-delay: 2.5s;
    }
    
    @keyframes dropFall {
      0% { 
        transform: translateY(0px) scale(1);
        opacity: 0.8;
      }
      100% { 
        transform: translateY(200px) scale(1.5);
        opacity: 0;
      }
    }

    /* === PREMIUM BUTTON STYLES === */
    /* 3D Button Effects */
    .btn-3d-crystal {
      position: relative;
      overflow: hidden;
      transform-style: preserve-3d;
    }
    
    .btn-3d-crystal::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.6s ease;
    }
    
    .btn-3d-crystal:hover::before {
      left: 100%;
    }
    
    .btn-3d-neon {
      box-shadow: 
        0 0 20px rgba(34, 197, 94, 0.4),
        0 0 40px rgba(34, 197, 94, 0.2),
        0 8px 20px rgba(0, 0, 0, 0.3);
    }
    
    .btn-3d-neon:hover {
      box-shadow: 
        0 0 30px rgba(34, 197, 94, 0.6),
        0 0 60px rgba(34, 197, 94, 0.4),
        0 12px 30px rgba(0, 0, 0, 0.4);
    }
    
    .btn-3d-hologram {
      background: linear-gradient(45deg, 
        rgba(236, 72, 153, 0.8) 0%,
        rgba(147, 51, 234, 0.6) 25%,
        rgba(59, 130, 246, 0.8) 50%,
        rgba(147, 51, 234, 0.6) 75%,
        rgba(236, 72, 153, 0.8) 100%
      );
      background-size: 400% 400%;
      animation: hologramShift 3s ease-in-out infinite;
    }
    
    @keyframes hologramShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    /* Glass Button Effects */
    .btn-glass-frost {
      backdrop-filter: blur(20px) saturate(200%);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .btn-glass-crystal {
      backdrop-filter: blur(20px) saturate(200%);
      border: 1px solid rgba(59, 130, 246, 0.3);
      box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
    }
    
    .btn-glass-aurora {
      backdrop-filter: blur(20px) saturate(200%);
      background: linear-gradient(135deg, 
        rgba(147, 51, 234, 0.2) 0%,
        rgba(236, 72, 153, 0.1) 100%
      );
      border: 1px solid rgba(147, 51, 234, 0.3);
    }

    /* Geometric Button Effects */
    .clip-polygon-hex {
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }
    
    .clip-polygon-diamond {
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }
    
    .clip-polygon-arrow {
      clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
    }
    
    .clip-polygon-triangle {
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    
    .clip-polygon-star {
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }

    /* Creative Button Effects */
    .creative-brush-effect::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.3), 
        transparent
      );
      transform: skewX(-20deg);
      transition: left 0.8s ease;
    }
    
    .creative-brush-effect:hover::before {
      left: 100%;
    }
    
    .creative-splash-effect {
      position: relative;
      overflow: hidden;
    }
    
    .creative-splash-effect::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
      transition: all 0.6s ease;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
    
    .creative-splash-effect:hover::after {
      width: 300px;
      height: 300px;
    }

    /* === RESPONSIVE DESIGN === */
    @media (max-width: 1024px) {
      .floating-elements-3d::before,
      .floating-elements-3d::after {
        width: 150px;
        height: 150px;
      }
      
      .glass-orbs::before {
        width: 200px;
        height: 200px;
      }
      
      .glass-orbs::after {
        width: 150px;
        height: 150px;
      }
      
      .artistic-splashes::before,
      .artistic-splashes::after {
        width: 180px;
        height: 120px;
      }
    }
    
    @media (max-width: 768px) {
      .floating-elements-3d::before,
      .floating-elements-3d::after {
        width: 100px;
        height: 100px;
      }
      
      .glass-orbs::before,
      .glass-orbs::after {
        width: 120px;
        height: 120px;
      }
      
      .artistic-splashes::before,
      .artistic-splashes::after {
        width: 120px;
        height: 80px;
      }
      
      .creative-brushes::before {
        width: 250px;
        height: 25px;
      }
    }
    
    /* === ACCESSIBILITY === */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
    
    @media (prefers-contrast: high) {
      .floating-elements-3d::before,
      .floating-elements-3d::after,
      .glass-orbs::before,
      .glass-orbs::after,
      .artistic-splashes::before,
      .artistic-splashes::after {
        filter: contrast(2) brightness(1.5);
      }
    }
  `}</style>
);
