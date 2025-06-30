
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
    
    /* Remove text containers/frames */
    .hero-text-container,
    .text-frame,
    .content-box {
      background: none !important;
      border: none !important;
      box-shadow: none !important;
      backdrop-filter: none !important;
    }
    
    /* === BASIC CATEGORY ENHANCEMENTS === */
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
      border-radius: 20px;
      animation: gentleFloat 6s ease-in-out infinite;
    }
    
    .basic-floating-elements::before {
      width: 120px;
      height: 120px;
      top: 15%;
      right: 10%;
      animation-delay: 0s;
    }
    
    .basic-floating-elements::after {
      width: 80px;
      height: 80px;
      bottom: 20%;
      left: 8%;
      animation-delay: 3s;
    }
    
    @keyframes gentleFloat {
      0%, 100% { 
        transform: translateY(0px) rotate(0deg);
        opacity: 0.6;
      }
      50% { 
        transform: translateY(-20px) rotate(5deg);
        opacity: 0.8;
      }
    }
    
    /* === 3D CATEGORY EFFECTS === */
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
        rgba(59, 130, 246, 0.3) 0%,
        rgba(147, 51, 234, 0.25) 50%,
        rgba(236, 72, 153, 0.2) 100%
      );
      border-radius: 15px;
      animation: float3D 8s ease-in-out infinite;
      transform-style: preserve-3d;
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
    }
    
    .floating-3d-elements::before {
      width: 150px;
      height: 150px;
      top: 20%;
      right: 15%;
      animation-delay: 0s;
    }
    
    .floating-3d-elements::after {
      width: 100px;
      height: 100px;
      bottom: 25%;
      left: 12%;
      animation-delay: 4s;
    }
    
    @keyframes float3D {
      0%, 100% { 
        transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1);
      }
      33% { 
        transform: translateY(-25px) rotateX(10deg) rotateY(10deg) scale(1.05);
      }
      66% { 
        transform: translateY(-15px) rotateX(-5deg) rotateY(-5deg) scale(0.95);
      }
    }
    
    .holographic-grid {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px),
        linear-gradient(rgba(147, 51, 234, 0.08) 1px, transparent 1px);
      background-size: 40px 40px;
      animation: gridShift 6s ease-in-out infinite;
      z-index: 0;
    }
    
    @keyframes gridShift {
      0%, 100% { opacity: 0.4; transform: translate(0, 0); }
      50% { opacity: 0.7; transform: translate(20px, 20px); }
    }
    
    /* === GLASS MORPHISM EFFECTS === */
    .glass-morphism-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.08) 0%, transparent 50%);
      backdrop-filter: blur(10px) saturate(180%);
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
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.08) 40%,
        transparent 70%
      );
      backdrop-filter: blur(8px);
      animation: orbFloat 9s ease-in-out infinite;
    }
    
    .glass-orbs::before {
      width: 200px;
      height: 200px;
      top: 15%;
      right: 12%;
      animation-delay: 0s;
    }
    
    .glass-orbs::after {
      width: 140px;
      height: 140px;
      bottom: 20%;
      left: 10%;
      animation-delay: 4.5s;
    }
    
    @keyframes orbFloat {
      0%, 100% { 
        transform: translateY(0px) scale(1);
        opacity: 0.7;
      }
      50% { 
        transform: translateY(-30px) scale(1.1);
        opacity: 1;
      }
    }
    
    /* === COSMIC/GEOMETRIC EFFECTS === */
    .cosmic-geometry {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 25% 75%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 75% 25%, rgba(236, 72, 153, 0.08) 0%, transparent 50%);
      z-index: 0;
    }
    
    .space-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.4), transparent),
        radial-gradient(2px 2px at 40px 70px, rgba(59, 130, 246, 0.3), transparent),
        radial-gradient(1px 1px at 90px 40px, rgba(147, 51, 234, 0.3), transparent),
        radial-gradient(1px 1px at 130px 80px, rgba(236, 72, 153, 0.3), transparent);
      background-repeat: repeat;
      background-size: 200px 100px;
      animation: particleShift 15s linear infinite;
      z-index: 1;
    }
    
    @keyframes particleShift {
      0% { transform: translateX(0px) translateY(0px); }
      100% { transform: translateX(-200px) translateY(-100px); }
    }
    
    /* === CREATIVE/ARTISTIC EFFECTS === */
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
        rgba(236, 72, 153, 0.3) 0%,
        rgba(147, 51, 234, 0.25) 50%,
        transparent 70%
      );
      border-radius: 50% 40% 60% 30% / 40% 50% 60% 50%;
      animation: splashMorph 7s ease-in-out infinite;
      filter: blur(1px);
    }
    
    .artistic-splashes::before {
      width: 180px;
      height: 120px;
      top: 18%;
      right: 15%;
      animation-delay: 0s;
    }
    
    .artistic-splashes::after {
      width: 140px;
      height: 100px;
      bottom: 22%;
      left: 12%;
      animation-delay: 3.5s;
    }
    
    @keyframes splashMorph {
      0%, 100% { 
        transform: scale(1) rotate(0deg);
        border-radius: 50% 40% 60% 30% / 40% 50% 60% 50%;
        opacity: 0.7;
      }
      50% { 
        transform: scale(1.2) rotate(90deg);
        border-radius: 30% 60% 40% 50% / 60% 30% 50% 40%;
        opacity: 0.9;
      }
    }
    
    .creative-brushes {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    
    .creative-brushes::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 30px;
      background: linear-gradient(90deg,
        transparent 0%,
        rgba(59, 130, 246, 0.2) 20%,
        rgba(147, 51, 234, 0.3) 50%,
        rgba(236, 72, 153, 0.2) 80%,
        transparent 100%
      );
      top: 35%;
      left: -30px;
      transform: rotate(-12deg);
      animation: brushStroke 8s ease-in-out infinite;
      filter: blur(0.5px);
    }
    
    @keyframes brushStroke {
      0%, 100% { 
        transform: rotate(-12deg) translateX(0px);
        opacity: 0.5;
      }
      50% { 
        transform: rotate(-10deg) translateX(60px);
        opacity: 0.8;
      }
    }
    
    /* === BUTTON STYLES BY TEMPLATE === */
    .btn-style-1 {
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    }
    
    .btn-style-1:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
      background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    }
    
    .btn-style-2 {
      background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
    }
    
    .btn-style-2:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
      background: linear-gradient(135deg, #059669 0%, #0891b2 100%);
    }
    
    .btn-style-3 {
      background: linear-gradient(135deg, #1f2937 0%, #6b7280 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(31, 41, 55, 0.3);
    }
    
    .btn-style-3:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(31, 41, 55, 0.4);
      background: linear-gradient(135deg, #111827 0%, #4b5563 100%);
    }
    
    .btn-style-4 {
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
      position: relative;
      overflow: hidden;
    }
    
    .btn-style-4::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.6s ease;
    }
    
    .btn-style-4:hover::before {
      left: 100%;
    }
    
    .btn-style-4:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    }
    
    .btn-style-5 {
      background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);
    }
    
    .btn-style-5:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(217, 119, 6, 0.4);
      background: linear-gradient(135deg, #b45309 0%, #d97706 100%);
    }
    
    .btn-style-6 {
      background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
    }
    
    .btn-style-6:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
      background: linear-gradient(135deg, #6d28d9 0%, #9333ea 100%);
    }
    
    .btn-style-7 {
      background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(22, 163, 74, 0.3);
    }
    
    .btn-style-7:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(22, 163, 74, 0.4);
      background: linear-gradient(135deg, #15803d 0%, #16a34a 100%);
    }
    
    .btn-style-8 {
      background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
    }
    
    .btn-style-8:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
      background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
    }
    
    .btn-style-9 {
      background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(13, 148, 136, 0.3);
    }
    
    .btn-style-9:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(13, 148, 136, 0.4);
      background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%);
    }
    
    .btn-style-10 {
      background: linear-gradient(135deg, #ea580c 0%, #fb923c 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(234, 88, 12, 0.3);
    }
    
    .btn-style-10:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(234, 88, 12, 0.4);
      background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%);
    }
    
    .btn-style-11 {
      background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
    }
    
    .btn-style-11:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
      background: linear-gradient(135deg, #b91c1c 0%, #dc2626 100%);
    }
    
    .btn-style-12 {
      background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);
    }
    
    .btn-style-12:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(217, 119, 6, 0.4);
      background: linear-gradient(135deg, #b45309 0%, #d97706 100%);
    }
    
    .btn-style-13 {
      background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
      border: none;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
    }
    
    .btn-style-13:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
      background: linear-gradient(135deg, #4338ca 0%, #4f46e5 100%);
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
        width: 80px;
        height: 80px;
      }
      
      .creative-brushes::before {
        width: 200px;
        height: 20px;
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
        width: 60px;
        height: 60px;
      }
      
      .creative-brushes::before {
        width: 150px;
        height: 15px;
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
