
import { useEffect } from 'react';

export const PreviewStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Enhanced Liquid Glass Styles */
      .liquid-left-visual {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 600px;
      }

      .liquid-mega-orb {
        position: relative;
        width: 400px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .liquid-mega-rings {
        position: absolute;
        inset: 0;
      }

      .liquid-mega-ring {
        position: absolute;
        border-radius: 50%;
        border: 2px solid rgba(59, 130, 246, 0.3);
        animation: liquid-ring-pulse 4s ease-in-out infinite;
      }

      .liquid-mega-ring-1 {
        width: 100%;
        height: 100%;
        animation-delay: 0s;
      }

      .liquid-mega-ring-2 {
        width: 80%;
        height: 80%;
        top: 10%;
        left: 10%;
        animation-delay: 1s;
      }

      .liquid-mega-ring-3 {
        width: 60%;
        height: 60%;
        top: 20%;
        left: 20%;
        animation-delay: 2s;
      }

      .liquid-mega-ring-4 {
        width: 40%;
        height: 40%;
        top: 30%;
        left: 30%;
        animation-delay: 3s;
      }

      .liquid-core-orb {
        position: relative;
        width: 120px;
        height: 120px;
        background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(20px);
        border: 2px solid rgba(59, 130, 246, 0.3);
      }

      .liquid-core-pulse {
        position: absolute;
        inset: -20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
        animation: liquid-core-pulse 2s ease-in-out infinite;
      }

      .liquid-float-elements {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      .liquid-float-orb {
        position: absolute;
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: liquid-float 6s ease-in-out infinite;
      }

      .liquid-float-1 {
        top: 20%;
        right: 10%;
        animation-delay: 0s;
      }

      .liquid-float-2 {
        bottom: 30%;
        left: 15%;
        animation-delay: 2s;
      }

      .liquid-float-3 {
        top: 60%;
        right: 20%;
        animation-delay: 4s;
      }

      /* Enhanced Glass Section Styles */
      .glass-title-enhanced {
        text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        position: relative;
      }

      .glass-title-enhanced::before {
        content: '';
        position: absolute;
        inset: -10px;
        background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
        border-radius: 20px;
        z-index: -1;
        filter: blur(20px);
      }

      .liquid-glass-panel-enhanced {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 30px;
        position: relative;
        overflow: hidden;
      }

      .liquid-glass-panel-enhanced::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        animation: glass-shimmer 3s ease-in-out infinite;
      }

      .floating-subtitle-enhanced {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 1rem 2rem;
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .liquid-morph-card-enhanced {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 25px;
        padding: 2rem;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }

      .liquid-morph-card-enhanced:hover {
        transform: translateY(-10px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(59, 130, 246, 0.3);
      }

      .liquid-icon-orb-enhanced {
        width: 80px;
        height: 80px;
        background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        position: relative;
      }

      .liquid-icon-orb-enhanced::before {
        content: '';
        position: absolute;
        inset: -5px;
        border-radius: 50%;
        background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
        animation: liquid-orb-pulse 2s ease-in-out infinite;
      }

      .liquid-ripple-enhanced {
        position: absolute;
        inset: 0;
        border-radius: 25px;
        background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .liquid-morph-card-enhanced:hover .liquid-ripple-enhanced {
        opacity: 1;
        animation: liquid-ripple-expand 1s ease-out;
      }

      /* Enhanced 3D Image Styles */
      .bg-image-depth-redesigned {
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
        position: relative;
      }

      .immersive-depth-layers {
        position: absolute;
        inset: 0;
        overflow: hidden;
      }

      .depth-layer-redesigned {
        position: absolute;
        background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(59, 130, 246, 0.1) 0%, transparent 50%);
        border-radius: 50%;
        animation: depth-float 8s ease-in-out infinite;
      }

      .depth-layer-1 {
        width: 300px;
        height: 300px;
        top: 10%;
        left: 10%;
        --x: 30%;
        --y: 40%;
        animation-delay: 0s;
      }

      .depth-layer-2 {
        width: 200px;
        height: 200px;
        top: 60%;
        right: 20%;
        --x: 70%;
        --y: 60%;
        animation-delay: 2s;
      }

      .depth-layer-3 {
        width: 150px;
        height: 150px;
        bottom: 20%;
        left: 30%;
        --x: 20%;
        --y: 80%;
        animation-delay: 4s;
      }

      .depth-layer-4 {
        width: 250px;
        height: 250px;
        top: 30%;
        right: 40%;
        --x: 60%;
        --y: 30%;
        animation-delay: 6s;
      }

      .immersive-grid-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        min-height: 600px;
      }

      .immersive-content-flow {
        z-index: 10;
      }

      .modern-badge-3d {
        background: linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(59, 130, 246, 0.2));
        backdrop-filter: blur(15px);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 50px;
        padding: 1rem 2rem;
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        transform: perspective(1000px) rotateX(5deg);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      }

      .modern-title-3d {
        transform: perspective(1000px) rotateX(2deg);
        text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        position: relative;
      }

      .modern-title-3d::after {
        content: '';
        position: absolute;
        inset: -20px;
        background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
        filter: blur(30px);
        z-index: -1;
        border-radius: 20px;
      }

      .immersive-content-panel {
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 2rem;
        transform: perspective(1000px) rotateX(3deg);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
      }

      .immersive-3d-showcase {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .showcase-depth-frame {
        width: 300px;
        height: 300px;
        position: relative;
        transform: perspective(1000px) rotateY(-15deg) rotateX(10deg);
      }

      .depth-orb-center {
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(59, 130, 246, 0.3));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        backdrop-filter: blur(20px);
        border: 2px solid rgba(59, 130, 246, 0.3);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
      }

      .orb-rings-3d {
        position: absolute;
        inset: -30px;
      }

      .ring-3d {
        position: absolute;
        border-radius: 50%;
        border: 2px solid rgba(59, 130, 246, 0.2);
        animation: ring-3d-rotate 10s linear infinite;
      }

      .ring-3d-1 {
        width: 100%;
        height: 100%;
        animation-delay: 0s;
      }

      .ring-3d-2 {
        width: 120%;
        height: 120%;
        top: -10%;
        left: -10%;
        animation-delay: 3s;
        animation-direction: reverse;
      }

      .ring-3d-3 {
        width: 140%;
        height: 140%;
        top: -20%;
        left: -20%;
        animation-delay: 6s;
      }

      .modern-depth-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .modern-depth-card-redesigned {
        position: relative;
        transform: perspective(1000px) rotateX(5deg);
        transition: all 0.3s ease;
      }

      .modern-depth-card-redesigned:hover {
        transform: perspective(1000px) rotateX(0deg) translateY(-10px);
      }

      .depth-card-layers {
        position: relative;
      }

      .card-depth-shadow {
        position: absolute;
        inset: 10px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 20px;
        filter: blur(20px);
        z-index: 0;
      }

      .card-content-layer {
        position: relative;
        background: linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(59, 130, 246, 0.2));
        backdrop-filter: blur(15px);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 20px;
        padding: 2rem;
        z-index: 1;
      }

      .modern-icon-frame-3d {
        width: 80px;
        height: 80px;
        background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        transform: perspective(500px) rotateX(15deg);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
      }

      /* Enhanced Geometric Clean Styles */
      .bg-geometric-clean {
        background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
        position: relative;
      }

      .geometric-clean-shapes {
        position: absolute;
        inset: 0;
        overflow: hidden;
      }

      .clean-shape {
        position: absolute;
        background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
        animation: clean-shape-float 12s ease-in-out infinite;
      }

      .clean-shape-1 {
        width: 100px;
        height: 100px;
        top: 20%;
        left: 10%;
        border-radius: 20px;
        animation-delay: 0s;
      }

      .clean-shape-2 {
        width: 60px;
        height: 60px;
        bottom: 30%;
        right: 15%;
        border-radius: 50%;
        animation-delay: 4s;
      }

      .clean-shape-3 {
        width: 80px;
        height: 80px;
        top: 60%;
        left: 60%;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        animation-delay: 8s;
      }

      .clean-badge {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50px;
        padding: 1rem 2rem;
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
      }

      .geometric-clean-glow {
        text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
      }

      .clean-content-panel {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
      }

      .clean-grid-layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
      }

      .clean-reason-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 2rem;
        transition: all 0.3s ease;
      }

      .clean-reason-card:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(59, 130, 246, 0.3);
      }

      .clean-icon-container {
        width: 60px;
        height: 60px;
        background: rgba(59, 130, 246, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
      }

      /* Enhanced Metallic Styles with Proper Contrast */
      .bg-metal-enhanced {
        background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #333333 100%);
        position: relative;
      }

      .bg-metal-enhanced-alt {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
        position: relative;
      }

      .metallic-ambiance {
        position: absolute;
        inset: 0;
        overflow: hidden;
      }

      .metal-particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: #fbbf24;
        border-radius: 50%;
        animation: metal-particle-float 8s ease-in-out infinite;
      }

      .metal-particle-1 {
        top: 20%;
        left: 20%;
        animation-delay: 0s;
      }

      .metal-particle-2 {
        top: 60%;
        right: 30%;
        animation-delay: 3s;
      }

      .metal-particle-3 {
        bottom: 30%;
        left: 60%;
        animation-delay: 6s;
      }

      .luxury-badge-enhanced {
        background: linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(251, 191, 36, 0.2));
        backdrop-filter: blur(15px);
        border: 1px solid rgba(251, 191, 36, 0.3);
        border-radius: 50px;
        padding: 1rem 2rem;
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
      }

      .metallic-glow {
        text-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
      }

      .luxury-content-panel-enhanced {
        background: linear-gradient(45deg, rgba(248, 250, 252, 0.95), rgba(226, 232, 240, 0.95));
        backdrop-filter: blur(10px);
        border: 1px solid rgba(251, 191, 36, 0.3);
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }

      .luxury-grid-enhanced {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
      }

      .luxury-reason-card-enhanced {
        background: linear-gradient(45deg, rgba(248, 250, 252, 0.95), rgba(226, 232, 240, 0.95));
        backdrop-filter: blur(10px);
        border: 1px solid rgba(251, 191, 36, 0.3);
        border-radius: 15px;
        padding: 2rem;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }

      .luxury-reason-card-enhanced:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
        border-color: rgba(251, 191, 36, 0.5);
      }

      .luxury-icon-frame-enhanced {
        width: 70px;
        height: 70px;
        background: linear-gradient(45deg, rgba(251, 191, 36, 0.3), rgba(217, 119, 6, 0.3));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      }

      .luxury-subtitle-enhanced {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 1rem 2rem;
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      /* Enhanced 3D Effects for Image Style */
      .parallax-layer {
        position: absolute;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        animation: parallax-float 10s ease-in-out infinite;
      }

      .parallax-layer-1 {
        width: 200px;
        height: 200px;
        top: 20%;
        left: 10%;
        animation-delay: 0s;
      }

      .parallax-layer-2 {
        width: 150px;
        height: 150px;
        bottom: 30%;
        right: 20%;
        animation-delay: 3s;
      }

      .parallax-layer-3 {
        width: 100px;
        height: 100px;
        top: 60%;
        left: 70%;
        animation-delay: 6s;
      }

      .transform-3d {
        transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
        transition: transform 0.3s ease;
      }

      .transform-3d:hover {
        transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05);
      }

      .depth-card {
        transform: perspective(800px) rotateX(5deg);
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
      }

      .depth-card:hover {
        transform: perspective(800px) rotateX(0deg) translateZ(20px);
      }

      /* Enhanced Metallic Ring Effect */
      .metallic-rings {
        position: absolute;
        width: 200px;
        height: 200px;
      }

      .metallic-ring {
        position: absolute;
        border-radius: 50%;
        border: 3px solid rgba(251, 191, 36, 0.3);
        animation: metallic-ring-rotate 8s linear infinite;
      }

      .metallic-ring-1 {
        width: 100%;
        height: 100%;
      }

      .metallic-ring-2 {
        width: 80%;
        height: 80%;
        top: 10%;
        left: 10%;
        animation-delay: 2s;
        animation-direction: reverse;
      }

      .metallic-ring-3 {
        width: 60%;
        height: 60%;
        top: 20%;
        left: 20%;
        animation-delay: 4s;
      }

      .metallic-core {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, rgba(251, 191, 36, 0.3), rgba(217, 119, 6, 0.3));
        border-radius: 50%;
        padding: 2rem;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(251, 191, 36, 0.5);
      }

      /* Animations */
      @keyframes liquid-ring-pulse {
        0%, 100% { 
          transform: scale(1); 
          opacity: 0.3; 
        }
        50% { 
          transform: scale(1.1); 
          opacity: 0.6; 
        }
      }

      @keyframes liquid-core-pulse {
        0%, 100% { 
          opacity: 0.3; 
          transform: scale(1); 
        }
        50% { 
          opacity: 0.6; 
          transform: scale(1.2); 
        }
      }

      @keyframes liquid-float {
        0%, 100% { 
          transform: translateY(0px) rotate(0deg); 
        }
        33% { 
          transform: translateY(-20px) rotate(120deg); 
        }
        66% { 
          transform: translateY(10px) rotate(240deg); 
        }
      }

      @keyframes glass-shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
      }

      @keyframes liquid-orb-pulse {
        0%, 100% { 
          opacity: 0.3; 
          transform: scale(1); 
        }
        50% { 
          opacity: 0.6; 
          transform: scale(1.1); 
        }
      }

      @keyframes liquid-ripple-expand {
        0% { 
          transform: scale(0); 
          opacity: 1; 
        }
        100% { 
          transform: scale(2); 
          opacity: 0; 
        }
      }

      @keyframes depth-float {
        0%, 100% { 
          transform: translateY(0px) translateX(0px); 
        }
        25% { 
          transform: translateY(-30px) translateX(20px); 
        }
        50% { 
          transform: translateY(0px) translateX(40px); 
        }
        75% { 
          transform: translateY(30px) translateX(20px); 
        }
      }

      @keyframes ring-3d-rotate {
        0% { transform: rotateZ(0deg); }
        100% { transform: rotateZ(360deg); }
      }

      @keyframes clean-shape-float {
        0%, 100% { 
          transform: translateY(0px) rotate(0deg); 
        }
        33% { 
          transform: translateY(-20px) rotate(5deg); 
        }
        66% { 
          transform: translateY(20px) rotate(-5deg); 
        }
      }

      @keyframes metal-particle-float {
        0%, 100% { 
          transform: translateY(0px); 
          opacity: 0.3; 
        }
        50% { 
          transform: translateY(-30px); 
          opacity: 1; 
        }
      }

      @keyframes metallic-ring-rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes parallax-float {
        0%, 100% { 
          transform: translateY(0px) translateX(0px) scale(1); 
        }
        33% { 
          transform: translateY(-40px) translateX(20px) scale(1.1); 
        }
        66% { 
          transform: translateY(20px) translateX(-20px) scale(0.9); 
        }
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .liquid-mega-orb {
          width: 250px;
          height: 250px;
        }
        
        .immersive-grid-layout {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .showcase-depth-frame {
          width: 200px;
          height: 200px;
        }
        
        .liquid-float-orb {
          width: 40px;
          height: 40px;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};
