
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

    /* 3D Effects */
    .effect-3d-float {
      animation: float3d 6s ease-in-out infinite;
      transform-style: preserve-3d;
    }
    
    @keyframes float3d {
      0%, 100% { transform: translateY(0px) rotateX(0deg); }
      50% { transform: translateY(-20px) rotateX(5deg); }
    }
    
    .effect-3d-rotate {
      animation: rotate3d 20s linear infinite;
      transform-style: preserve-3d;
    }
    
    @keyframes rotate3d {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(360deg); }
    }
    
    .effect-3d-tilt {
      transition: transform 0.3s ease;
    }
    
    .effect-3d-tilt:hover {
      transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
    }

    /* Glass Effects */
    .glass-morphism {
      backdrop-filter: blur(20px);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
    
    .glass-card {
      backdrop-filter: blur(16px);
      background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
      border: 1px solid rgba(255,255,255,0.18);
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    
    .glass-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.15);
    }
    
    .glass-text {
      color: rgba(255,255,255,0.9);
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    /* Geometric Patterns */
    .geometric-pattern-1 {
      background-image: 
        linear-gradient(45deg, transparent 35%, rgba(255,255,255,0.1) 35%, rgba(255,255,255,0.1) 65%, transparent 65%),
        linear-gradient(-45deg, transparent 35%, rgba(255,255,255,0.1) 35%, rgba(255,255,255,0.1) 65%, transparent 65%);
      background-size: 20px 20px;
    }
    
    .geometric-pattern-2 {
      background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
      background-size: 20px 20px;
    }
    
    .geometric-shape {
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      transition: clip-path 0.3s ease;
    }
    
    .geometric-shape:hover {
      clip-path: polygon(50% 0%, 0% 75%, 100% 75%);
    }

    /* Creative Artistic Effects */
    .brush-stroke {
      position: relative;
      overflow: hidden;
    }
    
    .brush-stroke::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s ease;
    }
    
    .brush-stroke:hover::before {
      left: 100%;
    }
    
    .paint-splash {
      position: relative;
    }
    
    .paint-splash::after {
      content: '';
      position: absolute;
      top: 10px;
      right: 10px;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, currentColor 30%, transparent 30%);
      opacity: 0.6;
      animation: splash 2s ease-in-out infinite;
    }
    
    @keyframes splash {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.2); opacity: 0.8; }
    }

    /* Enhanced Buttons */
    .btn-3d {
      transform: perspective(1px) translateZ(0);
      transition: transform 0.3s ease;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
    .btn-3d:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    }
    
    .btn-glass {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.2);
      transition: all 0.3s ease;
    }
    
    .btn-glass:hover {
      background: rgba(255,255,255,0.2);
      transform: translateY(-1px);
    }
    
    .btn-geometric {
      clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
      transition: clip-path 0.3s ease;
    }
    
    .btn-geometric:hover {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    /* Advanced Animations */
    .parallax-element {
      will-change: transform;
      transition: transform 0.1s ease-out;
    }
    
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
      transition: transform 0.5s ease;
    }
    
    .scale-on-scroll.in-view {
      transform: scale(1);
    }

    /* Responsive Text Scaling */
    @media (max-width: 768px) {
      .template-text h1 { font-size: clamp(1.8rem, 5vw, 3rem); }
      .template-text h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); }
      .template-text h3 { font-size: clamp(1.2rem, 3vw, 2rem); }
      .template-text p { font-size: clamp(0.9rem, 2.5vw, 1.1rem); }
    }
    
    /* High Contrast Mode */
    @media (prefers-contrast: high) {
      .template-text {
        text-shadow: none;
        font-weight: 600;
      }
      
      .glass-card {
        background: rgba(255,255,255,0.9);
        color: #000;
      }
    }
    
    /* Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
      .effect-3d-float,
      .effect-3d-rotate,
      .parallax-element {
        animation: none;
        transform: none;
      }
    }
  `}</style>
);
