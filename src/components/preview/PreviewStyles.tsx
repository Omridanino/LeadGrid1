
export const PreviewStyles = () => (
  <style>{`
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .floating-animation {
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    .tech-glow {
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1);
      animation: pulse-glow 3s ease-in-out infinite;
    }
    
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1); }
      50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.2); }
    }
    
    .tech-title {
      background: linear-gradient(45deg, #00f5ff, #0066ff, #00ccff);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: tech-gradient 3s ease infinite;
    }
    
    @keyframes tech-gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .matrix-bg {
      position: relative;
      overflow: hidden;
    }
    
    .matrix-bg::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: matrix-move 20s linear infinite;
      pointer-events: none;
    }
    
    @keyframes matrix-move {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    }
    
    /* Glass Morphism Styles */
    .glass-morphism {
      position: relative;
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    }
    
    .glass-text {
      background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 10px rgba(255,255,255,0.5));
    }
    
    .glass-subtitle {
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      padding: 20px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    /* Metal Texture Styles */
    .metal-texture {
      background: 
        linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 25%, #0a0a0a 50%, #1a1a1a 75%, #2a2a2a 100%),
        radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%);
      position: relative;
    }
    
    .metal-texture::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(255,255,255,0.03) 2px,
          rgba(255,255,255,0.03) 4px
        );
      pointer-events: none;
    }
    
    .metal-text {
      background: linear-gradient(145deg, #silver 0%, #gold 50%, #silver 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 
        0 1px 0 rgba(255,255,255,0.3),
        0 2px 0 rgba(0,0,0,0.8),
        0 3px 5px rgba(0,0,0,0.9);
      animation: metal-shine 4s ease-in-out infinite;
    }
    
    @keyframes metal-shine {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    /* Enhanced Card Styles for Different Themes */
    .glass-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    }
    
    .metal-card {
      background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 
        inset 0 1px 0 rgba(255,255,255,0.1),
        inset 0 -1px 0 rgba(0,0,0,0.5),
        0 5px 15px rgba(0,0,0,0.3);
    }
    
    .geometric-card {
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
      border: 1px solid rgba(59, 130, 246, 0.2);
      position: relative;
      overflow: hidden;
    }
    
    .geometric-card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.1), transparent);
      animation: rotate 20s linear infinite;
      pointer-events: none;
    }
    
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}</style>
);
