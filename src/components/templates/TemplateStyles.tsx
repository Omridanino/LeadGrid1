
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
    
    /* === BASIC CATEGORY ADVANCED EFFECTS === */
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
        rgba(59, 130, 246, 0.1) 0%,
        rgba(147, 51, 234, 0.1) 50%,
        rgba(236, 72, 153, 0.1) 100%
      );
      border-radius: 50%;
      animation: gentleFloat 8s ease-in-out infinite;
      filter: blur(1px);
    }
    
    .basic-floating-elements::before {
      width: 200px;
      height: 200px;
      top: 10%;
      right: 15%;
      animation-delay: 0s;
    }
    
    .basic-floating-elements::after {
      width: 150px;
      height: 150px;
      bottom: 15%;
      left: 10%;
      animation-delay: 4s;
    }
    
    @keyframes gentleFloat {
      0%, 100% { 
        transform: translateY(0px) rotate(0deg) scale(1);
        opacity: 0.4;
      }
      33% { 
        transform: translateY(-30px) rotate(5deg) scale(1.1);
        opacity: 0.7;
      }
      66% { 
        transform: translateY(-15px) rotate(-3deg) scale(0.9);
        opacity: 0.5;
      }
    }
    
    /* === 3D CATEGORY MEGA EFFECTS === */
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
        rgba(59, 130, 246, 0.4) 0%,
        rgba(147, 51, 234, 0.3) 50%,
        rgba(236, 72, 153, 0.4) 100%
      );
      border-radius: 20px;
      animation: mega3DFloat 12s ease-in-out infinite;
      transform-style: preserve-3d;
      box-shadow: 
        0 20px 40px rgba(59, 130, 246, 0.3),
        0 0 60px rgba(147, 51, 234, 0.2),
        inset 0 0 30px rgba(255, 255, 255, 0.1);
    }
    
    .floating-3d-elements::before {
      width: 250px;
      height: 180px;
      top: 20%;
      right: 10%;
      animation-delay: 0s;
    }
    
    .floating-3d-elements::after {
      width: 180px;
      height: 140px;
      bottom: 20%;
      left: 8%;
      animation-delay: 6s;
    }
    
    @keyframes mega3DFloat {
      0%, 100% { 
        transform: translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
        filter: brightness(1) saturate(1);
      }
      25% { 
        transform: translateY(-40px) rotateX(15deg) rotateY(15deg) rotateZ(5deg) scale(1.15);
        filter: brightness(1.2) saturate(1.3);
      }
      50% { 
        transform: translateY(-20px) rotateX(-10deg) rotateY(-10deg) rotateZ(-3deg) scale(0.85);
        filter: brightness(0.9) saturate(0.8);
      }
      75% { 
        transform: translateY(-30px) rotateX(8deg) rotateY(12deg) rotateZ(2deg) scale(1.05);
        filter: brightness(1.1) saturate(1.1);
      }
    }
    
    .holographic-grid {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
        linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px);
      background-size: 60px 60px;
      animation: holoGridShift 10s ease-in-out infinite;
      z-index: 0;
      filter: blur(0.5px);
    }
    
    @keyframes holoGridShift {
      0%, 100% { 
        opacity: 0.3; 
        transform: translate(0, 0) scale(1);
        filter: hue-rotate(0deg);
      }
      50% { 
        opacity: 0.8; 
        transform: translate(30px, 30px) scale(1.1);
        filter: hue-rotate(90deg);
      }
    }
    
    /* === GLASS MORPHISM MEGA EFFECTS === */
    .glass-morphism-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.15) 0%, transparent 60%),
        radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
        radial-gradient(ellipse at center, rgba(147, 51, 234, 0.08) 0%, transparent 70%);
      backdrop-filter: blur(20px) saturate(200%) brightness(1.1);
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
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.15) 30%,
        rgba(59, 130, 246, 0.1) 60%,
        transparent 80%
      );
      backdrop-filter: blur(15px) saturate(180%);
      animation: glassOrbFloat 15s ease-in-out infinite;
      box-shadow: 
        0 8px 32px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    }
    
    .glass-orbs::before {
      width: 300px;
      height: 300px;
      top: 10%;
      right: 10%;
      animation-delay: 0s;
    }
    
    .glass-orbs::after {
      width: 220px;
      height: 220px;
      bottom: 15%;
      left: 8%;
      animation-delay: 7.5s;
    }
    
    @keyframes glassOrbFloat {
      0%, 100% { 
        transform: translateY(0px) scale(1) rotate(0deg);
        opacity: 0.6;
        filter: blur(15px);
      }
      33% { 
        transform: translateY(-50px) scale(1.2) rotate(120deg);
        opacity: 0.9;
        filter: blur(10px);
      }
      66% { 
        transform: translateY(-25px) scale(0.8) rotate(240deg);
        opacity: 0.7;
        filter: blur(20px);
      }
    }
    
    /* === COSMIC/GEOMETRIC MEGA EFFECTS === */
    .cosmic-geometry {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 70%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 70% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
      animation: cosmicPulse 20s ease-in-out infinite;
      z-index: 0;
    }
    
    @keyframes cosmicPulse {
      0%, 100% { 
        filter: brightness(1) contrast(1) hue-rotate(0deg);
        transform: scale(1);
      }
      25% { 
        filter: brightness(1.3) contrast(1.2) hue-rotate(90deg);
        transform: scale(1.05);
      }
      50% { 
        filter: brightness(0.8) contrast(0.9) hue-rotate(180deg);
        transform: scale(0.95);
      }
      75% { 
        filter: brightness(1.1) contrast(1.1) hue-rotate(270deg);
        transform: scale(1.02);
      }
    }
    
    .space-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(3px 3px at 25px 35px, rgba(255, 255, 255, 0.6), transparent),
        radial-gradient(2px 2px at 50px 80px, rgba(59, 130, 246, 0.5), transparent),
        radial-gradient(1px 1px at 120px 50px, rgba(147, 51, 234, 0.4), transparent),
        radial-gradient(2px 2px at 180px 100px, rgba(236, 72, 153, 0.5), transparent),
        radial-gradient(1px 1px at 220px 30px, rgba(16, 185, 129, 0.3), transparent);
      background-repeat: repeat;
      background-size: 300px 150px;
      animation: particleStorm 25s linear infinite;
      z-index: 1;
    }
    
    @keyframes particleStorm {
      0% { 
        transform: translateX(0px) translateY(0px) rotate(0deg);
        filter: brightness(1);
      }
      50% { 
        transform: translateX(-150px) translateY(-75px) rotate(180deg);
        filter: brightness(1.5);
      }
      100% { 
        transform: translateX(-300px) translateY(-150px) rotate(360deg);
        filter: brightness(1);
      }
    }
    
    /* === CREATIVE/ARTISTIC MEGA EFFECTS === */
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
        rgba(236, 72, 153, 0.5) 0%,
        rgba(147, 51, 234, 0.4) 30%,
        rgba(59, 130, 246, 0.3) 60%,
        transparent 80%
      );
      border-radius: 60% 40% 80% 30% / 50% 70% 40% 60%;
      animation: artisticMorph 12s ease-in-out infinite;
      filter: blur(2px) saturate(150%);
    }
    
    .artistic-splashes::before {
      width: 280px;
      height: 200px;
      top: 15%;
      right: 12%;
      animation-delay: 0s;
    }
    
    .artistic-splashes::after {
      width: 220px;
      height: 160px;
      bottom: 18%;
      left: 10%;
      animation-delay: 6s;
    }
    
    @keyframes artisticMorph {
      0%, 100% { 
        transform: scale(1) rotate(0deg) skew(0deg);
        border-radius: 60% 40% 80% 30% / 50% 70% 40% 60%;
        opacity: 0.6;
        filter: blur(2px) saturate(150%) hue-rotate(0deg);
      }
      25% { 
        transform: scale(1.3) rotate(90deg) skew(10deg);
        border-radius: 40% 80% 30% 60% / 70% 40% 60% 50%;
        opacity: 0.9;
        filter: blur(1px) saturate(200%) hue-rotate(90deg);
      }
      50% { 
        transform: scale(0.8) rotate(180deg) skew(-5deg);
        border-radius: 80% 30% 60% 40% / 40% 60% 50% 70%;
        opacity: 0.7;
        filter: blur(3px) saturate(100%) hue-rotate(180deg);
      }
      75% { 
        transform: scale(1.1) rotate(270deg) skew(15deg);
        border-radius: 30% 60% 40% 80% / 60% 50% 70% 40%;
        opacity: 0.8;
        filter: blur(1.5px) saturate(175%) hue-rotate(270deg);
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
        rgba(59, 130, 246, 0.3) 15%,
        rgba(147, 51, 234, 0.4) 40%,
        rgba(236, 72, 153, 0.3) 65%,
        rgba(16, 185, 129, 0.2) 85%,
        transparent 100%
      );
      animation: creativeBrushStroke 18s ease-in-out infinite;
      filter: blur(1px) saturate(120%);
    }
    
    .creative-brushes::before {
      width: 400px;
      height: 40px;
      top: 30%;
      left: -50px;
      transform: rotate(-15deg);
      animation-delay: 0s;
    }
    
    .creative-brushes::after {
      width: 350px;
      height: 30px;
      bottom: 40%;
      right: -50px;
      transform: rotate(12deg);
      animation-delay: 9s;
    }
    
    @keyframes creativeBrushStroke {
      0%, 100% { 
        transform: translateX(0px) rotate(-15deg) scaleX(1);
        opacity: 0.4;
        filter: blur(1px) saturate(120%) hue-rotate(0deg);
      }
      33% { 
        transform: translateX(100px) rotate(-10deg) scaleX(1.2);
        opacity: 0.8;
        filter: blur(0.5px) saturate(150%) hue-rotate(120deg);
      }
      66% { 
        transform: translateX(200px) rotate(-20deg) scaleX(0.8);
        opacity: 0.6;
        filter: blur(2px) saturate(100%) hue-rotate(240deg);
      }
    }
    
    /* === PREMIUM BUTTON STYLES === */
    .btn-style-1 {
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(30, 64, 175, 0.4);
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
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.6s ease;
    }
    
    .btn-style-1:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(30, 64, 175, 0.6);
    }
    
    .btn-style-1:hover::before {
      left: 100%;
    }
    
    .btn-style-2 {
      background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
      position: relative;
    }
    
    .btn-style-2:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(124, 58, 237, 0.6);
      background: linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #a78bfa 100%);
    }
    
    .btn-style-3 {
      background: linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #5eead4 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(13, 148, 136, 0.4);
    }
    
    .btn-style-3:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(13, 148, 136, 0.6);
    }
    
    .btn-style-4 {
      background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #6b7280 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(31, 41, 55, 0.4);
    }
    
    .btn-style-4:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(31, 41, 55, 0.6);
    }
    
    .btn-style-5 {
      background: linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(217, 119, 6, 0.4);
    }
    
    .btn-style-5:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(217, 119, 6, 0.6);
    }
    
    .btn-style-6 {
      background: linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #4ade80 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(22, 163, 74, 0.4);
    }
    
    .btn-style-6:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(22, 163, 74, 0.6);
    }
    
    .btn-style-7 {
      background: linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(234, 88, 12, 0.4);
    }
    
    .btn-style-7:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(234, 88, 12, 0.6);
    }
    
    .btn-style-8 {
      background: linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #818cf8 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
    }
    
    .btn-style-8:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(79, 70, 229, 0.6);
    }
    
    .btn-style-9 {
      background: linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #67e8f9 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(8, 145, 178, 0.4);
    }
    
    .btn-style-9:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(8, 145, 178, 0.6);
    }
    
    .btn-style-10 {
      background: linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
    }
    
    .btn-style-10:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(220, 38, 38, 0.6);
    }
    
    .btn-style-11 {
      background: linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #fb7185 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(225, 29, 72, 0.4);
    }
    
    .btn-style-11:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(225, 29, 72, 0.6);
    }
    
    .btn-style-12 {
      background: linear-gradient(135deg, #a16207 0%, #d97706 50%, #f59e0b 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(161, 98, 7, 0.4);
    }
    
    .btn-style-12:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(161, 98, 7, 0.6);
    }
    
    .btn-style-13 {
      background: linear-gradient(135deg, #6b21a8 0%, #9333ea 50%, #c084fc 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(107, 33, 168, 0.4);
    }
    
    .btn-style-13:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(107, 33, 168, 0.6);
    }
    
    .btn-style-14 {
      background: linear-gradient(135deg, #9333ea 0%, #c084fc 50%, #e879f9 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4);
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
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.8s ease;
    }
    
    .btn-style-14:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(147, 51, 234, 0.6);
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
        width: 120px;
        height: 120px;
      }
      
      .creative-brushes::before,
      .creative-brushes::after {
        width: 250px;
        height: 25px;
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
        width: 80px;
        height: 80px;
      }
      
      .creative-brushes::before,
      .creative-brushes::after {
        width: 180px;
        height: 20px;
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
        filter: contrast(2) brightness(1.5);
      }
    }
  `}</style>
);
