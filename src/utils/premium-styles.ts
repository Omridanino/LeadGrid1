// Premium styles generator for different templates
export const getPremiumStyles = (templateId?: string) => {
  switch (templateId) {
    case 'tech-consultant-pro':
      return `
      /* Tech Consultant Effects */
      .glass-effect {
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }
      
      .floating-element {
        animation: float 6s ease-in-out infinite;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      
      .feature-icon {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2)) !important;
        border: 2px solid rgba(59, 130, 246, 0.5) !important;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3) !important;
      }`;
      
    case 'neon-academy-pro':
      return `
      /* Neon Academy Effects */
      .neon-text {
        color: #00f5ff !important;
        text-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff !important;
      }
      
      .glass-effect {
        backdrop-filter: blur(20px);
        background: rgba(0, 245, 255, 0.1) !important;
        border: 1px solid rgba(0, 245, 255, 0.3);
        box-shadow: 0 0 20px rgba(0, 245, 255, 0.2);
      }
      
      .cyberpunk-grid::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: 
          linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px),
          linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px);
        background-size: 40px 40px;
        animation: grid-glow 4s ease-in-out infinite alternate;
      }
      
      @keyframes grid-glow {
        0% { opacity: 0.3; }
        100% { opacity: 0.7; }
      }
      
      .feature-icon {
        background: linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(147, 51, 234, 0.2)) !important;
        border: 2px solid #00f5ff !important;
        box-shadow: 0 0 20px #00f5ff !important;
      }`;
      
    case 'blockchain-tech-pro':
      return `
      /* Blockchain Effects */
      .glass-effect {
        backdrop-filter: blur(20px);
        background: rgba(59, 130, 246, 0.1) !important;
        border: 1px solid rgba(59, 130, 246, 0.3);
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
      }
      
      .particle-network::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%);
      }
      
      .feature-icon {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2)) !important;
        border: 2px solid rgba(59, 130, 246, 0.5) !important;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.4) !important;
      }`;
      
    case 'nft-future-pro':
      return `
      /* NFT Future Effects */
      .glass-effect {
        backdrop-filter: blur(20px);
        background: rgba(147, 51, 234, 0.1) !important;
        border: 1px solid rgba(147, 51, 234, 0.3);
        box-shadow: 0 0 30px rgba(147, 51, 234, 0.2);
      }
      
      .holographic {
        background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff) !important;
        background-size: 200% 200%;
        animation: holographic 3s ease infinite;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      @keyframes holographic {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .feature-icon {
        background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2)) !important;
        border: 2px solid rgba(147, 51, 234, 0.5) !important;
        box-shadow: 0 0 20px rgba(147, 51, 234, 0.4) !important;
      }`;
      
    case 'creative-3d-pro':
      return `
      /* Creative 3D Effects */
      .glass-effect {
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.2) !important;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 25px;
        box-shadow: 
          8px 8px 16px rgba(163, 177, 198, 0.3),
          -8px -8px 16px rgba(255, 255, 255, 0.5);
      }
      
      .morphing-shape {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        animation: morph 8s ease-in-out infinite;
      }
      
      @keyframes morph {
        0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
        50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
        75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
      }
      
      .feature-icon {
        background: linear-gradient(135deg, rgba(251, 113, 133, 0.3), rgba(192, 132, 252, 0.3)) !important;
        border: 2px solid rgba(251, 113, 133, 0.5) !important;
        box-shadow: 0 0 15px rgba(251, 113, 133, 0.3) !important;
      }`;
      
    case 'authkit-tech-pro':
      return `
      /* AuthKit Effects */
      .glass-effect {
        backdrop-filter: blur(20px);
        background: rgba(30, 64, 175, 0.1) !important;
        border: 1px solid rgba(30, 64, 175, 0.3);
        box-shadow: 0 0 20px rgba(30, 64, 175, 0.2);
      }
      
      .tech-glow {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
      }
      
      .feature-icon {
        background: linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(59, 130, 246, 0.2)) !important;
        border: 2px solid rgba(59, 130, 246, 0.5) !important;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.4) !important;
      }`;
      
    default:
      return `
      .glass-effect {
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }`;
  }
};

// Premium animations CSS
export const getPremiumAnimations = () => `
/* Premium Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
  50% { transform: translateY(-20px) rotate(5deg); opacity: 0.3; }
}

@keyframes float3d {
  0%, 100% { transform: translateY(0px) rotateY(0deg) scale(1); }
  50% { transform: translateY(-20px) rotateY(180deg) scale(1.1); }
}

@keyframes neonGlow {
  0%, 100% { box-shadow: 0 0 5px #8b5cf6, 0 0 10px #8b5cf6; }
  50% { box-shadow: 0 0 20px #8b5cf6, 0 0 30px #8b5cf6, 0 0 40px #8b5cf6; }
}

@keyframes particles {
  0% { transform: translateY(0px) scale(1); opacity: 0.3; }
  50% { transform: translateY(-30px) scale(1.2); opacity: 0.7; }
  100% { transform: translateY(0px) scale(1); opacity: 0.3; }
}

@keyframes matrixRain {
  0% { transform: translateY(-100px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(400px); opacity: 0; }
}`;