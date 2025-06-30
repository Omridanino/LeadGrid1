
export const TemplateStyles = () => (
  <style>{`
    /* === BASE ENHANCED TYPOGRAPHY === */
    .template-text {
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      letter-spacing: -0.025em;
    }
    
    .template-text-dark {
      text-shadow: 0 2px 8px rgba(0,0,0,0.6);
      color: rgba(255,255,255,0.95);
    }
    
    .template-text-light {
      text-shadow: 0 1px 3px rgba(0,0,0,0.1);
      color: rgba(0,0,0,0.9);
    }

    /* === PREMIUM 3D EFFECTS - LEADGRID LEVEL === */
    .effect-3d-float {
      animation: float3dPremium 8s ease-in-out infinite;
      transform-style: preserve-3d;
      position: relative;
      background: linear-gradient(135deg, 
        rgba(15, 23, 42, 0.95) 0%,
        rgba(30, 41, 59, 0.9) 25%,
        rgba(51, 65, 85, 0.85) 50%,
        rgba(30, 41, 59, 0.9) 75%,
        rgba(15, 23, 42, 0.95) 100%
      );
      backdrop-filter: blur(20px);
      border: 1px solid rgba(148, 163, 184, 0.2);
      box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(148, 163, 184, 0.05),
        inset 0 1px 0 rgba(148, 163, 184, 0.1);
    }
    
    .effect-3d-float::before {
      content: '';
      position: absolute;
      top: -20%;
      right: -10%;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, 
        rgba(34, 197, 94, 0.4) 0%,
        rgba(16, 185, 129, 0.3) 30%,
        rgba(6, 182, 212, 0.2) 60%,
        transparent 100%
      );
      border-radius: 50%;
      animation: orbitFloat3D 20s linear infinite;
      z-index: -1;
      filter: blur(40px);
    }
    
    .effect-3d-float::after {
      content: '';
      position: absolute;
      bottom: -15%;
      left: -15%;
      width: 250px;
      height: 250px;
      background: radial-gradient(circle, 
        rgba(168, 85, 247, 0.5) 0%,
        rgba(139, 92, 246, 0.4) 40%,
        rgba(124, 58, 237, 0.3) 70%,
        transparent 100%
      );
      border-radius: 50%;
      animation: orbitFloat3D 25s linear infinite reverse;
      z-index: -1;
      filter: blur(50px);
    }
    
    @keyframes float3dPremium {
      0%, 100% { 
        transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1);
        filter: brightness(1);
      }
      25% { 
        transform: translateY(-20px) rotateX(5deg) rotateY(-2deg) scale(1.02);
        filter: brightness(1.1);
      }
      50% { 
        transform: translateY(-30px) rotateX(-2deg) rotateY(3deg) scale(1.05);
        filter: brightness(1.2);
      }
      75% { 
        transform: translateY(-15px) rotateX(3deg) rotateY(-1deg) scale(1.02);
        filter: brightness(1.1);
      }
    }
    
    @keyframes orbitFloat3D {
      0% { 
        transform: rotate(0deg) translateX(100px) rotate(0deg);
        opacity: 0.3;
      }
      50% { 
        opacity: 0.8;
      }
      100% { 
        transform: rotate(360deg) translateX(100px) rotate(-360deg);
        opacity: 0.3;
      }
    }
    
    .floating-cubes {
      position: absolute;
      top: 20%;
      right: 15%;
      width: 120px;
      height: 120px;
      background: linear-gradient(45deg, 
        rgba(34, 197, 94, 0.8) 0%,
        rgba(16, 185, 129, 0.6) 50%,
        rgba(6, 182, 212, 0.4) 100%
      );
      transform-style: preserve-3d;
      animation: cube3dAdvanced 15s ease-in-out infinite;
      z-index: -1;
      filter: drop-shadow(0 10px 20px rgba(34, 197, 94, 0.3));
    }
    
    @keyframes cube3dAdvanced {
      0%, 100% { 
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
      }
      25% { 
        transform: rotateX(90deg) rotateY(45deg) rotateZ(0deg) scale(1.2);
      }
      50% { 
        transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) scale(0.8);
      }
      75% { 
        transform: rotateX(270deg) rotateY(135deg) rotateZ(90deg) scale(1.1);
      }
    }

    /* === SPECTACULAR GLASS MORPHISM - NEXT LEVEL === */
    .spectacular-glass {
      position: relative;
      background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.2) 25%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        rgba(255, 255, 255, 0.3) 100%
      );
      backdrop-filter: blur(40px) saturate(200%) contrast(120%);
      border: 2px solid;
      border-image: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.8)
      ) 1;
      box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.6),
        inset 0 -1px 0 rgba(255, 255, 255, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.05);
      border-radius: 24px;
      overflow: hidden;
      animation: glassShimmer 4s ease-in-out infinite;
    }
    
    @keyframes glassShimmer {
      0%, 100% { 
        box-shadow: 
          0 30px 60px rgba(0, 0, 0, 0.12),
          inset 0 1px 0 rgba(255, 255, 255, 0.6),
          0 0 40px rgba(59, 130, 246, 0.1);
      }
      50% { 
        box-shadow: 
          0 35px 70px rgba(0, 0, 0, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.8),
          0 0 60px rgba(147, 51, 234, 0.2);
      }
    }
    
    .spectacular-glass::before {
      content: '';
      position: absolute;
      top: 0;
      left: -200%;
      width: 200%;
      height: 100%;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.6) 40%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.6) 60%,
        transparent 100%
      );
      animation: glassWave 6s ease-in-out infinite;
      z-index: 1;
      pointer-events: none;
    }
    
    @keyframes glassWave {
      0% { left: -200%; }
      100% { left: 200%; }
    }
    
    .glass-bubbles {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }
    
    .glass-bubble {
      position: absolute;
      background: radial-gradient(circle, 
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.4) 40%,
        rgba(59, 130, 246, 0.2) 70%,
        transparent 100%
      );
      border-radius: 50%;
      animation: bubbleAdvanced 8s ease-in-out infinite;
      filter: blur(1px);
    }
    
    .glass-bubble:nth-child(1) {
      width: 80px;
      height: 80px;
      top: 15%;
      right: 20%;
      animation-delay: 0s;
    }
    
    .glass-bubble:nth-child(2) {
      width: 120px;
      height: 120px;
      bottom: 25%;
      left: 15%;
      animation-delay: 2.5s;
    }
    
    .glass-bubble:nth-child(3) {
      width: 60px;
      height: 60px;
      top: 60%;
      right: 30%;
      animation-delay: 5s;
    }
    
    @keyframes bubbleAdvanced {
      0%, 100% { 
        transform: translateY(0px) scale(1) rotate(0deg);
        opacity: 0.4;
      }
      33% { 
        transform: translateY(-40px) scale(1.3) rotate(120deg);
        opacity: 0.8;
      }
      66% { 
        transform: translateY(-20px) scale(0.9) rotate(240deg);
        opacity: 0.6;
      }
    }

    /* === COSMIC SPACE THEME - LEADGRID QUALITY === */
    .cosmic-space {
      position: relative;
      background: 
        radial-gradient(ellipse at top, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at bottom, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
        linear-gradient(135deg, 
          rgba(15, 23, 42, 0.98) 0%,
          rgba(30, 41, 59, 0.95) 25%,
          rgba(51, 65, 85, 0.92) 50%,
          rgba(30, 41, 59, 0.95) 75%,
          rgba(15, 23, 42, 0.98) 100%
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
        radial-gradient(3px 3px at 30px 50px, rgba(255, 255, 255, 0.9), transparent),
        radial-gradient(2px 2px at 80px 30px, rgba(59, 130, 246, 0.8), transparent),
        radial-gradient(1px 1px at 120px 80px, rgba(168, 85, 247, 0.6), transparent),
        radial-gradient(2px 2px at 200px 60px, rgba(34, 211, 238, 0.7), transparent),
        radial-gradient(1px 1px at 160px 120px, rgba(236, 72, 153, 0.5), transparent),
        radial-gradient(2px 2px at 50px 150px, rgba(34, 197, 94, 0.4), transparent);
      background-repeat: repeat;
      background-size: 300px 200px;
      animation: cosmicStars 30s linear infinite;
      pointer-events: none;
      opacity: 0.8;
    }
    
    @keyframes cosmicStars {
      0% { transform: translateY(0px) translateX(0px); }
      100% { transform: translateY(-200px) translateX(-50px); }
    }
    
    .cosmic-planet {
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: 
        radial-gradient(circle at 35% 35%, 
          rgba(59, 130, 246, 0.9) 0%,
          rgba(37, 99, 235, 0.8) 25%,
          rgba(29, 78, 216, 0.7) 50%,
          rgba(30, 58, 138, 0.8) 75%,
          rgba(15, 23, 42, 0.9) 100%
        );
      box-shadow: 
        0 0 60px rgba(59, 130, 246, 0.4),
        inset -30px -30px 60px rgba(0, 0, 0, 0.4),
        inset 20px 20px 40px rgba(59, 130, 246, 0.2);
      animation: planetFloat 30s ease-in-out infinite;
      top: 15%;
      right: 8%;
      z-index: 0;
    }
    
    .cosmic-planet::before {
      content: '';
      position: absolute;
      top: 20%;
      left: 25%;
      width: 30%;
      height: 30%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
      border-radius: 50%;
      filter: blur(10px);
    }
    
    @keyframes planetFloat {
      0%, 100% { 
        transform: rotate(0deg) translateX(0px) rotate(0deg) scale(1);
        filter: brightness(1) hue-rotate(0deg);
      }
      50% { 
        transform: rotate(180deg) translateX(60px) rotate(-180deg) scale(1.1);
        filter: brightness(1.2) hue-rotate(30deg);
      }
    }
    
    .cosmic-rings {
      position: absolute;
      width: 300px;
      height: 300px;
      top: 45%;
      left: 10%;
      z-index: 0;
    }
    
    .cosmic-rings::before,
    .cosmic-rings::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      border: 3px solid;
      animation: ringsOrbit 20s linear infinite;
    }
    
    .cosmic-rings::before {
      width: 100%;
      height: 100%;
      border-color: rgba(34, 211, 238, 0.4);
      animation-duration: 20s;
    }
    
    .cosmic-rings::after {
      width: 70%;
      height: 70%;
      top: 15%;
      left: 15%;
      border-color: rgba(236, 72, 153, 0.5);
      animation-duration: 15s;
      animation-direction: reverse;
    }
    
    @keyframes ringsOrbit {
      0% { 
        transform: rotate(0deg) scale(1);
        opacity: 0.4;
      }
      50% { 
        transform: rotate(180deg) scale(1.1);
        opacity: 0.8;
      }
      100% { 
        transform: rotate(360deg) scale(1);
        opacity: 0.4;
      }
    }

    /* === PREMIUM ARTISTIC CREATIVE EFFECTS === */
    .artistic-paint {
      position: relative;
      background: 
        radial-gradient(ellipse at top left, rgba(249, 115, 22, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at top right, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at bottom, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
        linear-gradient(135deg, 
          rgba(254, 252, 232, 0.95) 0%,
          rgba(254, 249, 195, 0.9) 25%,
          rgba(253, 230, 138, 0.85) 50%,
          rgba(254, 240, 138, 0.9) 75%,
          rgba(254, 252, 232, 0.95) 100%
        );
      overflow: hidden;
    }
    
    .paint-splash {
      position: absolute;
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      animation: paintFlow 12s ease-in-out infinite;
      filter: blur(2px);
      mix-blend-mode: multiply;
    }
    
    .paint-splash:nth-child(1) {
      background: 
        radial-gradient(ellipse at center,
          rgba(236, 72, 153, 0.7) 0%,
          rgba(236, 72, 153, 0.4) 50%,
          transparent 80%
        );
      width: 200px;
      height: 150px;
      top: 10%;
      right: 15%;
      animation-delay: 0s;
    }
    
    .paint-splash:nth-child(2) {
      background: 
        radial-gradient(ellipse at center,
          rgba(34, 197, 94, 0.6) 0%,
          rgba(34, 197, 94, 0.3) 50%,
          transparent 80%
        );
      width: 180px;
      height: 120px;
      bottom: 20%;
      left: 20%;
      animation-delay: 4s;
    }
    
    .paint-splash:nth-child(3) {
      background: 
        radial-gradient(ellipse at center,
          rgba(249, 115, 22, 0.8) 0%,
          rgba(249, 115, 22, 0.4) 50%,
          transparent 80%
        );
      width: 160px;
      height: 200px;
      top: 50%;
      right: 25%;
      animation-delay: 8s;
    }
    
    @keyframes paintFlow {
      0%, 100% { 
        transform: scale(1) rotate(0deg) skew(0deg, 0deg);
        opacity: 0.6;
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      }
      25% { 
        transform: scale(1.3) rotate(90deg) skew(10deg, 5deg);
        opacity: 0.9;
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
      }
      50% { 
        transform: scale(0.8) rotate(180deg) skew(-5deg, 10deg);
        opacity: 0.4;
        border-radius: 80% 20% 60% 40% / 20% 80% 40% 60%;
      }
      75% { 
        transform: scale(1.2) rotate(270deg) skew(5deg, -10deg);
        opacity: 0.8;
        border-radius: 40% 80% 20% 60% / 70% 30% 80% 20%;
      }
    }
    
    .brush-stroke {
      position: absolute;
      width: 300px;
      height: 30px;
      background: linear-gradient(90deg,
        transparent 0%,
        rgba(168, 85, 247, 0.3) 10%,
        rgba(168, 85, 247, 0.8) 30%,
        rgba(168, 85, 247, 0.9) 50%,
        rgba(168, 85, 247, 0.8) 70%,
        rgba(168, 85, 247, 0.3) 90%,
        transparent 100%
      );
      transform: rotate(-12deg);
      animation: brushAnimation 8s ease-in-out infinite;
      top: 35%;
      left: 5%;
      filter: blur(1px);
      mix-blend-mode: multiply;
    }
    
    @keyframes brushAnimation {
      0%, 100% { 
        transform: rotate(-12deg) translateX(0px) scaleX(1);
        opacity: 0.6;
      }
      25% { 
        transform: rotate(-8deg) translateX(80px) scaleX(1.3);
        opacity: 0.9;
      }
      50% { 
        transform: rotate(-15deg) translateX(40px) scaleX(0.8);
        opacity: 0.4;
      }
      75% { 
        transform: rotate(-10deg) translateX(120px) scaleX(1.1);
        opacity: 0.7;
      }
    }
    
    .creative-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .particle {
      position: absolute;
      border-radius: 50%;
      animation: particleOrbit 6s ease-in-out infinite;
      filter: blur(0.5px);
    }
    
    .particle:nth-child(1) {
      width: 8px;
      height: 8px;
      background: radial-gradient(circle, rgba(236, 72, 153, 0.9), rgba(236, 72, 153, 0.3));
      top: 20%;
      left: 25%;
      animation-delay: 0s;
    }
    
    .particle:nth-child(2) {
      width: 12px;
      height: 12px;
      background: radial-gradient(circle, rgba(34, 197, 94, 0.8), rgba(34, 197, 94, 0.2));
      top: 60%;
      right: 30%;
      animation-delay: 1.5s;
    }
    
    .particle:nth-child(3) {
      width: 6px;
      height: 6px;
      background: radial-gradient(circle, rgba(249, 115, 22, 0.9), rgba(249, 115, 22, 0.4));
      bottom: 30%;
      left: 35%;
      animation-delay: 3s;
    }
    
    .particle:nth-child(4) {
      width: 10px;
      height: 10px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.3));
      top: 40%;
      right: 20%;
      animation-delay: 4.5s;
    }
    
    @keyframes particleOrbit {
      0%, 100% { 
        transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
        opacity: 0.5;
      }
      25% { 
        transform: translateY(-50px) translateX(30px) scale(1.5) rotate(90deg);
        opacity: 1;
      }
      50% { 
        transform: translateY(-30px) translateX(-20px) scale(1.2) rotate(180deg);
        opacity: 0.8;
      }
      75% { 
        transform: translateY(-40px) translateX(40px) scale(0.8) rotate(270deg);
        opacity: 0.6;
      }
    }

    /* === PREMIUM BUTTONS - LEADGRID LEVEL === */
    .btn-3d {
      position: relative;
      transform-style: preserve-3d;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background: linear-gradient(135deg, 
        rgba(34, 197, 94, 0.9) 0%,
        rgba(16, 185, 129, 0.8) 50%,
        rgba(6, 182, 212, 0.7) 100%
      );
      box-shadow: 
        0 8px 25px rgba(34, 197, 94, 0.3),
        0 4px 10px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(34, 197, 94, 0.4);
    }
    
    .btn-3d::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), transparent);
      border-radius: inherit;
      transition: opacity 0.3s ease;
      opacity: 0;
    }
    
    .btn-3d:hover {
      transform: translateY(-8px) scale(1.05) rotateX(10deg);
      box-shadow: 
        0 20px 40px rgba(34, 197, 94, 0.4),
        0 8px 16px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }
    
    .btn-3d:hover::before {
      opacity: 1;
    }
    
    .btn-glass {
      background: linear-gradient(135deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.1) 100%
      );
      backdrop-filter: blur(20px) saturate(200%);
      border: 2px solid rgba(255, 255, 255, 0.3);
      box-shadow: 
        0 15px 35px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
      transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
      position: relative;
      overflow: hidden;
    }
    
    .btn-glass::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.6s ease;
    }
    
    .btn-glass:hover {
      background: linear-gradient(135deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.2) 100%
      );
      transform: translateY(-5px) scale(1.02);
      box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    }
    
    .btn-glass:hover::before {
      left: 100%;
    }
    
    .btn-cosmic {
      background: linear-gradient(135deg, 
        rgba(59, 130, 246, 0.9) 0%,
        rgba(147, 51, 234, 0.8) 50%,
        rgba(236, 72, 153, 0.7) 100%
      );
      border: 2px solid rgba(59, 130, 246, 0.5);
      box-shadow: 
        0 0 30px rgba(59, 130, 246, 0.4),
        0 8px 20px rgba(0, 0, 0, 0.2);
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      position: relative;
      overflow: hidden;
    }
    
    .btn-cosmic::after {
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
    
    .btn-cosmic:hover {
      box-shadow: 
        0 0 50px rgba(59, 130, 246, 0.6),
        0 0 100px rgba(147, 51, 234, 0.4),
        0 12px 30px rgba(0, 0, 0, 0.3);
      transform: translateY(-6px) scale(1.05);
    }
    
    .btn-cosmic:hover::after {
      width: 300px;
      height: 300px;
    }
    
    .btn-artistic {
      background: linear-gradient(135deg, 
        rgba(249, 115, 22, 0.8) 0%,
        rgba(236, 72, 153, 0.7) 50%,
        rgba(168, 85, 247, 0.6) 100%
      );
      border: 3px solid;
      border-image: linear-gradient(45deg, 
        rgba(249, 115, 22, 0.8),
        rgba(236, 72, 153, 0.6),
        rgba(168, 85, 247, 0.4)
      ) 1;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
      filter: drop-shadow(0 8px 20px rgba(249, 115, 22, 0.3));
    }
    
    .btn-artistic::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, 
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      transition: left 0.8s ease;
      transform: skewX(-20deg);
    }
    
    .btn-artistic:hover {
      transform: translateY(-4px) scale(1.03);
      filter: drop-shadow(0 15px 35px rgba(249, 115, 22, 0.4));
    }
    
    .btn-artistic:hover::before {
      left: 100%;
    }

    /* === ADVANCED ANIMATIONS === */
    .fade-in-up {
      opacity: 0;
      transform: translateY(40px);
      animation: fadeInUpPremium 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }
    
    @keyframes fadeInUpPremium {
      0% {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    .scale-on-scroll {
      transform: scale(0.8) translateY(20px);
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .scale-on-scroll.in-view {
      transform: scale(1) translateY(0);
      opacity: 1;
    }

    /* === RESPONSIVE OPTIMIZATIONS === */
    @media (max-width: 1024px) {
      .floating-cubes {
        width: 80px;
        height: 80px;
      }
      
      .cosmic-planet {
        width: 120px;
        height: 120px;
      }
      
      .cosmic-rings {
        width: 200px;
        height: 200px;
      }
      
      .paint-splash {
        width: 120px !important;
        height: 100px !important;
      }
      
      .brush-stroke {
        width: 200px;
        height: 20px;
      }
    }
    
    @media (max-width: 768px) {
      .template-text h1 { 
        font-size: clamp(2.5rem, 8vw, 4rem); 
        line-height: 1.2;
      }
      .template-text h2 { 
        font-size: clamp(2rem, 6vw, 3rem); 
        line-height: 1.3;
      }
      .template-text p { 
        font-size: clamp(1rem, 4vw, 1.25rem); 
        line-height: 1.6;
      }
      
      .effect-3d-float::before,
      .effect-3d-float::after {
        width: 150px;
        height: 150px;
      }
      
      .glass-bubble {
        width: 40px !important;
        height: 40px !important;
      }
      
      .particle {
        width: 4px !important;
        height: 4px !important;
      }
    }
    
    /* === ACCESSIBILITY === */
    @media (prefers-reduced-motion: reduce) {
      .effect-3d-float,
      .floating-cubes,
      .cosmic-planet,
      .cosmic-rings,
      .paint-splash,
      .brush-stroke,
      .particle,
      .glass-bubble {
        animation: none !important;
        transform: none !important;
      }
      
      .btn-3d:hover,
      .btn-glass:hover,
      .btn-cosmic:hover,
      .btn-artistic:hover {
        transform: none !important;
      }
    }
    
    @media (prefers-contrast: high) {
      .template-text {
        text-shadow: none;
        font-weight: 600;
      }
      
      .spectacular-glass,
      .cosmic-space,
      .artistic-paint {
        border: 3px solid currentColor;
      }
      
      .btn-3d,
      .btn-glass,
      .btn-cosmic,
      .btn-artistic {
        border: 2px solid currentColor;
        box-shadow: none;
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
    
    .reduce-motion {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  `}</style>
);
