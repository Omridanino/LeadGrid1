
export const TemplateStyles = () => (
  <style>{`
    /* === GLOBAL TEMPLATE STYLES === */
    .template-section {
      position: relative;
      overflow: hidden;
    }
    
    .template-content {
      position: relative;
      z-index: 10;
    }

    /* === BASIC CATEGORY PREMIUM EFFECTS === */
    .basic-floating-elements {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .basic-floating-elements::before,
    .basic-floating-elements::after {
      content: '';
      position: absolute;
      background: linear-gradient(135deg, 
        rgba(59, 130, 246, 0.15) 0%,
        rgba(147, 51, 234, 0.12) 50%,
        rgba(236, 72, 153, 0.15) 100%
      );
      border-radius: 50%;
      animation: premiumBasicFloat 12s ease-in-out infinite;
      filter: blur(1px);
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
    }
    
    .basic-floating-elements::before {
      width: 280px;
      height: 280px;
      top: 8%;
      right: 12%;
      animation-delay: 0s;
    }
    
    .basic-floating-elements::after {
      width: 220px;
      height: 220px;
      bottom: 12%;
      left: 8%;
      animation-delay: 6s;
    }
    
    @keyframes premiumBasicFloat {
      0%, 100% { 
        transform: translateY(0px) rotate(0deg) scale(1);
        opacity: 0.6;
        filter: blur(1px) saturate(120%);
      }
      25% { 
        transform: translateY(-40px) rotate(90deg) scale(1.15);
        opacity: 0.9;
        filter: blur(0.5px) saturate(150%);
      }
      50% { 
        transform: translateY(-20px) rotate(180deg) scale(0.85);
        opacity: 0.7;
        filter: blur(2px) saturate(100%);
      }
      75% { 
        transform: translateY(-30px) rotate(270deg) scale(1.05);
        opacity: 0.8;
        filter: blur(1px) saturate(130%);
      }
    }

    /* === 3D CATEGORY ULTRA TECH EFFECTS === */
    .floating-3d-elements {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .floating-3d-elements::before,
    .floating-3d-elements::after {
      content: '';
      position: absolute;
      background: linear-gradient(45deg, 
        rgba(0, 255, 255, 0.6) 0%,
        rgba(147, 51, 234, 0.5) 25%,
        rgba(59, 130, 246, 0.6) 50%,
        rgba(236, 72, 153, 0.5) 75%,
        rgba(0, 255, 255, 0.6) 100%
      );
      border-radius: 25px;
      animation: ultra3DFloat 15s ease-in-out infinite;
      transform-style: preserve-3d;
      box-shadow: 
        0 25px 50px rgba(0, 255, 255, 0.4),
        0 0 80px rgba(147, 51, 234, 0.3),
        inset 0 0 40px rgba(255, 255, 255, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .floating-3d-elements::before {
      width: 320px;
      height: 200px;
      top: 15%;
      right: 8%;
      animation-delay: 0s;
      clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    }
    
    .floating-3d-elements::after {
      width: 280px;
      height: 160px;
      bottom: 15%;
      left: 6%;
      animation-delay: 7.5s;
      clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 70% 100%, 30% 100%, 0% 70%);
    }
    
    @keyframes ultra3DFloat {
      0%, 100% { 
        transform: translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
        filter: brightness(1) saturate(1) hue-rotate(0deg) drop-shadow(0 10px 20px rgba(0,255,255,0.3));
      }
      20% { 
        transform: translateY(-50px) rotateX(20deg) rotateY(20deg) rotateZ(8deg) scale(1.25);
        filter: brightness(1.4) saturate(1.5) hue-rotate(90deg) drop-shadow(0 20px 40px rgba(147,51,234,0.4));
      }
      40% { 
        transform: translateY(-30px) rotateX(-15deg) rotateY(-15deg) rotateZ(-5deg) scale(0.75);
        filter: brightness(0.8) saturate(0.7) hue-rotate(180deg) drop-shadow(0 15px 30px rgba(59,130,246,0.3));
      }
      60% { 
        transform: translateY(-40px) rotateX(12deg) rotateY(18deg) rotateZ(6deg) scale(1.1);
        filter: brightness(1.2) saturate(1.3) hue-rotate(270deg) drop-shadow(0 25px 50px rgba(236,72,153,0.4));
      }
      80% { 
        transform: translateY(-20px) rotateX(-8deg) rotateY(-10deg) rotateZ(-3deg) scale(0.9);
        filter: brightness(1.1) saturate(1.1) hue-rotate(180deg) drop-shadow(0 18px 35px rgba(0,255,255,0.3));
      }
    }
    
    .holographic-grid {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px),
        linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px);
      background-size: 80px 80px;
      animation: ultraHoloGridShift 12s ease-in-out infinite;
      z-index: 0;
      filter: blur(0.3px);
    }
    
    @keyframes ultraHoloGridShift {
      0%, 100% { 
        opacity: 0.4; 
        transform: translate(0, 0) scale(1) rotate(0deg);
        filter: hue-rotate(0deg) brightness(1);
      }
      25% { 
        opacity: 0.9; 
        transform: translate(40px, 40px) scale(1.15) rotate(5deg);
        filter: hue-rotate(90deg) brightness(1.3);
      }
      50% { 
        opacity: 0.6; 
        transform: translate(20px, 60px) scale(0.85) rotate(-3deg);
        filter: hue-rotate(180deg) brightness(0.8);
      }
      75% { 
        opacity: 0.8; 
        transform: translate(60px, 20px) scale(1.05) rotate(2deg);
        filter: hue-rotate(270deg) brightness(1.1);
      }
    }

    /* === GLASS MORPHISM ULTRA EFFECTS === */
    .glass-morphism-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.25) 0%, transparent 70%),
        radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.25) 0%, transparent 70%),
        radial-gradient(ellipse at center, rgba(147, 51, 234, 0.15) 0%, transparent 80%),
        radial-gradient(ellipse at top right, rgba(236, 72, 153, 0.2) 0%, transparent 60%);
      backdrop-filter: blur(25px) saturate(250%) brightness(1.2) contrast(120%);
      z-index: 0;
    }
    
    .glass-orbs {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .glass-orbs::before,
    .glass-orbs::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, 
        rgba(255, 255, 255, 0.6) 0%,
        rgba(255, 255, 255, 0.25) 20%,
        rgba(59, 130, 246, 0.2) 40%,
        rgba(147, 51, 234, 0.15) 60%,
        rgba(236, 72, 153, 0.1) 80%,
        transparent 90%
      );
      backdrop-filter: blur(20px) saturate(200%) brightness(150%);
      animation: ultraGlassOrbFloat 18s ease-in-out infinite;
      box-shadow: 
        0 12px 40px rgba(255, 255, 255, 0.2),
        inset 0 2px 0 rgba(255, 255, 255, 0.4),
        inset 0 -2px 0 rgba(0, 0, 0, 0.1),
        0 0 60px rgba(59, 130, 246, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .glass-orbs::before {
      width: 380px;
      height: 380px;
      top: 5%;
      right: 5%;
      animation-delay: 0s;
    }
    
    .glass-orbs::after {
      width: 280px;
      height: 280px;
      bottom: 10%;
      left: 5%;
      animation-delay: 9s;
    }
    
    @keyframes ultraGlassOrbFloat {
      0%, 100% { 
        transform: translateY(0px) scale(1) rotate(0deg);
        opacity: 0.7;
        filter: blur(20px) saturate(200%) hue-rotate(0deg);
      }
      25% { 
        transform: translateY(-60px) scale(1.3) rotate(90deg);
        opacity: 1;
        filter: blur(15px) saturate(250%) hue-rotate(90deg);
      }
      50% { 
        transform: translateY(-30px) scale(0.7) rotate(180deg);
        opacity: 0.8;
        filter: blur(25px) saturate(150%) hue-rotate(180deg);
      }
      75% { 
        transform: translateY(-45px) scale(1.1) rotate(270deg);
        opacity: 0.9;
        filter: blur(18px) saturate(220%) hue-rotate(270deg);
      }
    }

    /* === GEOMETRIC COSMIC ULTRA EFFECTS === */
    .cosmic-geometry {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(ellipse at 15% 25%, rgba(239, 68, 68, 0.3) 0%, transparent 60%),
        radial-gradient(ellipse at 85% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 60%),
        radial-gradient(ellipse at 35% 85%, rgba(236, 72, 153, 0.25) 0%, transparent 60%),
        radial-gradient(ellipse at 75% 15%, rgba(59, 130, 246, 0.2) 0%, transparent 60%),
        radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
      animation: ultraCosmicPulse 25s ease-in-out infinite;
      z-index: 0;
    }
    
    @keyframes ultraCosmicPulse {
      0%, 100% { 
        filter: brightness(1) contrast(1) hue-rotate(0deg) saturate(120%);
        transform: scale(1) rotate(0deg);
      }
      20% { 
        filter: brightness(1.4) contrast(1.3) hue-rotate(72deg) saturate(150%);
        transform: scale(1.08) rotate(5deg);
      }
      40% { 
        filter: brightness(0.7) contrast(0.8) hue-rotate(144deg) saturate(80%);
        transform: scale(0.92) rotate(-3deg);
      }
      60% { 
        filter: brightness(1.2) contrast(1.2) hue-rotate(216deg) saturate(140%);
        transform: scale(1.05) rotate(2deg);
      }
      80% { 
        filter: brightness(0.9) contrast(0.9) hue-rotate(288deg) saturate(100%);
        transform: scale(0.97) rotate(-1deg);
      }
    }
    
    .space-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(4px 4px at 30px 40px, rgba(239, 68, 68, 0.8), transparent),
        radial-gradient(3px 3px at 60px 90px, rgba(59, 130, 246, 0.7), transparent),
        radial-gradient(2px 2px at 140px 60px, rgba(147, 51, 234, 0.6), transparent),
        radial-gradient(3px 3px at 200px 120px, rgba(236, 72, 153, 0.7), transparent),
        radial-gradient(2px 2px at 260px 40px, rgba(16, 185, 129, 0.5), transparent),
        radial-gradient(4px 4px at 320px 100px, rgba(251, 191, 36, 0.6), transparent);
      background-repeat: repeat;
      background-size: 400px 200px;
      animation: ultraParticleStorm 30s linear infinite;
      z-index: 1;
    }
    
    @keyframes ultraParticleStorm {
      0% { 
        transform: translateX(0px) translateY(0px) rotate(0deg);
        filter: brightness(1) hue-rotate(0deg);
      }
      33% { 
        transform: translateX(-133px) translateY(-67px) rotate(120deg);
        filter: brightness(1.5) hue-rotate(120deg);
      }
      66% { 
        transform: translateX(-266px) translateY(-133px) rotate(240deg);
        filter: brightness(0.8) hue-rotate(240deg);
      }
      100% { 
        transform: translateX(-400px) translateY(-200px) rotate(360deg);
        filter: brightness(1) hue-rotate(360deg);
      }
    }

    /* === CREATIVE ARTISTIC ULTRA EFFECTS === */
    .artistic-splashes {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    
    .artistic-splashes::before,
    .artistic-splashes::after {
      content: '';
      position: absolute;
      background: radial-gradient(ellipse, 
        rgba(236, 72, 153, 0.7) 0%,
        rgba(147, 51, 234, 0.6) 20%,
        rgba(59, 130, 246, 0.5) 40%,
        rgba(16, 185, 129, 0.4) 60%,
        rgba(251, 191, 36, 0.3) 80%,
        transparent 90%
      );
      border-radius: 60% 40% 80% 30% / 50% 70% 40% 60%;
      animation: ultraArtisticMorph 16s ease-in-out infinite;
      filter: blur(3px) saturate(180%) contrast(120%);
    }
    
    .artistic-splashes::before {
      width: 360px;
      height: 240px;
      top: 10%;
      right: 8%;
      animation-delay: 0s;
    }
    
    .artistic-splashes::after {
      width: 280px;
      height: 200px;
      bottom: 12%;
      left: 6%;
      animation-delay: 8s;
    }
    
    @keyframes ultraArtisticMorph {
      0%, 100% { 
        transform: scale(1) rotate(0deg) skew(0deg);
        border-radius: 60% 40% 80% 30% / 50% 70% 40% 60%;
        opacity: 0.7;
        filter: blur(3px) saturate(180%) hue-rotate(0deg) contrast(120%);
      }
      20% { 
        transform: scale(1.4) rotate(72deg) skew(15deg);
        border-radius: 40% 80% 30% 60% / 70% 40% 60% 50%;
        opacity: 1;
        filter: blur(2px) saturate(220%) hue-rotate(72deg) contrast(140%);
      }
      40% { 
        transform: scale(0.7) rotate(144deg) skew(-8deg);
        border-radius: 80% 30% 60% 40% / 40% 60% 50% 70%;
        opacity: 0.8;
        filter: blur(4px) saturate(120%) hue-rotate(144deg) contrast(100%);
      }
      60% { 
        transform: scale(1.2) rotate(216deg) skew(20deg);
        border-radius: 30% 60% 40% 80% / 60% 50% 70% 40%;
        opacity: 0.9;
        filter: blur(2.5px) saturate(200%) hue-rotate(216deg) contrast(130%);
      }
      80% { 
        transform: scale(0.9) rotate(288deg) skew(-5deg);
        border-radius: 50% 70% 60% 40% / 80% 30% 40% 60%;
        opacity: 0.8;
        filter: blur(3.5px) saturate(160%) hue-rotate(288deg) contrast(110%);
      }
    }
    
    .creative-brushes {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    
    .creative-brushes::before,
    .creative-brushes::after {
      content: '';
      position: absolute;
      background: linear-gradient(90deg,
        transparent 0%,
        rgba(236, 72, 153, 0.4) 10%,
        rgba(147, 51, 234, 0.5) 25%,
        rgba(59, 130, 246, 0.4) 40%,
        rgba(16, 185, 129, 0.3) 55%,
        rgba(251, 191, 36, 0.4) 70%,
        rgba(239, 68, 68, 0.3) 85%,
        transparent 100%
      );
      animation: ultraCreativeBrushStroke 22s ease-in-out infinite;
      filter: blur(2px) saturate(150%) contrast(120%);
    }
    
    .creative-brushes::before {
      width: 500px;
      height: 50px;
      top: 25%;
      left: -100px;
      transform: rotate(-18deg);
      animation-delay: 0s;
    }
    
    .creative-brushes::after {
      width: 420px;
      height: 40px;
      bottom: 35%;
      right: -100px;
      transform: rotate(15deg);
      animation-delay: 11s;
    }
    
    @keyframes ultraCreativeBrushStroke {
      0%, 100% { 
        transform: translateX(0px) rotate(-18deg) scaleX(1);
        opacity: 0.5;
        filter: blur(2px) saturate(150%) hue-rotate(0deg) contrast(120%);
      }
      25% { 
        transform: translateX(125px) rotate(-15deg) scaleX(1.3);
        opacity: 0.9;
        filter: blur(1px) saturate(200%) hue-rotate(90deg) contrast(140%);
      }
      50% { 
        transform: translateX(250px) rotate(-22deg) scaleX(0.7);
        opacity: 0.7;
        filter: blur(3px) saturate(120%) hue-rotate(180deg) contrast(100%);
      }
      75% { 
        transform: translateX(375px) rotate(-12deg) scaleX(1.1);
        opacity: 0.8;
        filter: blur(1.5px) saturate(180%) hue-rotate(270deg) contrast(130%);
      }
    }

    /* === ULTRA PREMIUM BUTTON STYLES === */
    .btn-style-1 {
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 30%, #60a5fa 70%, #93c5fd 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 
        0 8px 25px rgba(30, 64, 175, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      position: relative;
      overflow: hidden;
    }
    
    .btn-style-1::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
      transition: left 0.7s ease;
    }
    
    .btn-style-1:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 
        0 15px 35px rgba(30, 64, 175, 0.7),
        0 0 0 1px rgba(255, 255, 255, 0.2),
        0 0 30px rgba(59, 130, 246, 0.6);
      background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 30%, #3b82f6 70%, #60a5fa 100%);
    }
    
    .btn-style-1:hover::before {
      left: 100%;
    }

    .btn-style-2 {
      background: linear-gradient(135deg, #7c3aed 0%, #a855f7 30%, #c084fc 70%, #ddd6fe 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 
        0 8px 25px rgba(124, 58, 237, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      position: relative;
      overflow: hidden;
    }
    
    .btn-style-2:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 
        0 15px 35px rgba(124, 58, 237, 0.7),
        0 0 30px rgba(168, 85, 247, 0.6);
      background: linear-gradient(135deg, #6d28d9 0%, #8b5cf6 30%, #a78bfa 70%, #c4b5fd 100%);
    }

    /* Continue with all 14 button styles... */
    .btn-style-3 {
      background: linear-gradient(135deg, #0d9488 0%, #14b8a6 30%, #5eead4 70%, #99f6e4 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(13, 148, 136, 0.5);
    }
    
    .btn-style-3:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(13, 148, 136, 0.7);
    }

    .btn-style-4 {
      background: linear-gradient(135deg, #1f2937 0%, #374151 30%, #6b7280 70%, #9ca3af 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(31, 41, 55, 0.5);
    }
    
    .btn-style-4:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(31, 41, 55, 0.7);
    }

    .btn-style-5 {
      background: linear-gradient(135deg, #d97706 0%, #f59e0b 30%, #fbbf24 70%, #fde047 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(217, 119, 6, 0.5);
    }
    
    .btn-style-5:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(217, 119, 6, 0.7);
    }

    .btn-style-6 {
      background: linear-gradient(135deg, #16a34a 0%, #22c55e 30%, #4ade80 70%, #86efac 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(22, 163, 74, 0.5);
    }
    
    .btn-style-6:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(22, 163, 74, 0.7);
    }

    .btn-style-7 {
      background: linear-gradient(135deg, #ea580c 0%, #f97316 30%, #fb923c 70%, #fdba74 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(234, 88, 12, 0.5);
    }
    
    .btn-style-7:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(234, 88, 12, 0.7);
    }

    .btn-style-8 {
      background: linear-gradient(135deg, #4f46e5 0%, #6366f1 30%, #818cf8 70%, #a5b4fc 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(79, 70, 229, 0.5);
    }
    
    .btn-style-8:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(79, 70, 229, 0.7);
    }

    .btn-style-9 {
      background: linear-gradient(135deg, #0891b2 0%, #06b6d4 30%, #67e8f9 70%, #a5f3fc 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(8, 145, 178, 0.5);
    }
    
    .btn-style-9:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(8, 145, 178, 0.7);
    }

    .btn-style-10 {
      background: linear-gradient(135deg, #dc2626 0%, #ef4444 30%, #f87171 70%, #fca5a5 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(220, 38, 38, 0.5);
    }
    
    .btn-style-10:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(220, 38, 38, 0.7);
    }

    .btn-style-11 {
      background: linear-gradient(135deg, #e11d48 0%, #f43f5e 30%, #fb7185 70%, #fda4af 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(225, 29, 72, 0.5);
    }
    
    .btn-style-11:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(225, 29, 72, 0.7);
    }

    .btn-style-12 {
      background: linear-gradient(135deg, #a16207 0%, #d97706 30%, #f59e0b 70%, #fbbf24 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(161, 98, 7, 0.5);
    }
    
    .btn-style-12:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(161, 98, 7, 0.7);
    }

    .btn-style-13 {
      background: linear-gradient(135deg, #6b21a8 0%, #9333ea 30%, #c084fc 70%, #e879f9 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(107, 33, 168, 0.5);
    }
    
    .btn-style-13:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(107, 33, 168, 0.7);
    }

    .btn-style-14 {
      background: linear-gradient(135deg, #9333ea 0%, #c084fc 30%, #e879f9 70%, #f0abfc 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 8px 25px rgba(147, 51, 234, 0.5);
      position: relative;
      overflow: hidden;
    }
    
    .btn-style-14::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.8s ease;
    }
    
    .btn-style-14:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 15px 35px rgba(147, 51, 234, 0.7);
    }
    
    .btn-style-14:hover::before {
      left: 100%;
    }

    /* === RESPONSIVE DESIGN === */
    @media (max-width: 1024px) {
      .floating-3d-elements::before,
      .floating-3d-elements::after,
      .glass-orbs::before,
      .glass-orbs::after,
      .artistic-splashes::before,
      .artistic-splashes::after,
      .basic-floating-elements::before,
      .basic-floating-elements::after {
        width: 150px;
        height: 150px;
      }
      
      .creative-brushes::before,
      .creative-brushes::after {
        width: 300px;
        height: 30px;
      }
    }
    
    @media (max-width: 768px) {
      .floating-3d-elements::before,
      .floating-3d-elements::after,
      .glass-orbs::before,
      .glass-orbs::after,
      .artistic-splashes::before,
      .artistic-splashes::after,
      .basic-floating-elements::before,
      .basic-floating-elements::after {
        width: 100px;
        height: 100px;
      }
      
      .creative-brushes::before,
      .creative-brushes::after {
        width: 200px;
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
      .floating-3d-elements::before,
      .floating-3d-elements::after,
      .glass-orbs::before,
      .glass-orbs::after,
      .artistic-splashes::before,
      .artistic-splashes::after,
      .basic-floating-elements::before,
      .basic-floating-elements::after {
        filter: contrast(2.5) brightness(1.8);
      }
    }
  `}</style>
);
