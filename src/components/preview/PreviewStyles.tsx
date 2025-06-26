
export const PreviewStyles = () => (
  <style>{`
    /* Enhanced Gradient Animations */
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes gradientShift {
      0% { background-position: 0% 0%; }
      50% { background-position: 100% 100%; }
      100% { background-position: 0% 0%; }
    }
    
    /* Floating Animation */
    .floating-animation {
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-20px) scale(1.05); }
    }
    
    /* Advanced Glow Effects */
    .tech-glow {
      box-shadow: 
        0 0 20px rgba(59, 130, 246, 0.4),
        0 0 40px rgba(59, 130, 246, 0.2),
        0 0 80px rgba(59, 130, 246, 0.1);
      animation: pulse-glow 3s ease-in-out infinite;
    }
    
    @keyframes pulse-glow {
      0%, 100% { 
        box-shadow: 
          0 0 20px rgba(59, 130, 246, 0.4),
          0 0 40px rgba(59, 130, 246, 0.2),
          0 0 80px rgba(59, 130, 246, 0.1);
      }
      50% { 
        box-shadow: 
          0 0 30px rgba(59, 130, 246, 0.6),
          0 0 60px rgba(59, 130, 246, 0.4),
          0 0 120px rgba(59, 130, 246, 0.2);
      }
    }
    
    /* Enhanced Title Effects */
    .tech-title {
      background: linear-gradient(45deg, #00f5ff, #0066ff, #00ccff, #ffffff);
      background-size: 300% 300%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: tech-gradient 4s ease infinite;
      filter: drop-shadow(0 0 20px rgba(0, 245, 255, 0.5));
    }
    
    @keyframes tech-gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    /* Matrix Background */
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
      background-size: 60px 60px;
      animation: matrix-move 25s linear infinite;
      pointer-events: none;
    }
    
    @keyframes matrix-move {
      0% { transform: translate(0, 0); }
      100% { transform: translate(60px, 60px); }
    }
    
    /* Glass Morphism Enhanced */
    .glass-morphism {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(25px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 
        0 8px 32px 0 rgba(31, 38, 135, 0.37),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    
    .glass-text {
      background: linear-gradient(135deg, 
        rgba(255,255,255,1) 0%, 
        rgba(255,255,255,0.8) 50%,
        rgba(255,255,255,0.9) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 15px rgba(255,255,255,0.6));
    }
    
    .glass-subtitle {
      backdrop-filter: blur(15px);
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 25px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }
    
    /* Metal Texture Enhanced */
    .metal-texture {
      background: 
        linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 25%, #1a1a1a 50%, #2a2a2a 75%, #3a3a3a 100%),
        radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 50%);
      position: relative;
      box-shadow: 
        inset 0 1px 0 rgba(255,255,255,0.1),
        inset 0 -1px 0 rgba(0,0,0,0.5);
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
          transparent 3px,
          rgba(255,255,255,0.05) 3px,
          rgba(255,255,255,0.05) 6px
        );
      pointer-events: none;
    }
    
    .metal-text {
      background: linear-gradient(145deg, #c0c0c0 0%, #ffd700 30%, #c0c0c0 60%, #ffd700 100%);
      background-size: 300% 300%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 
        0 1px 0 rgba(255,255,255,0.4),
        0 2px 0 rgba(0,0,0,0.8),
        0 3px 8px rgba(0,0,0,0.9);
      animation: metal-shine 5s ease-in-out infinite;
    }
    
    @keyframes metal-shine {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    /* Card Styles Enhanced */
    .glass-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(25px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 8px 32px 0 rgba(31, 38, 135, 0.37),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }
    
    .glass-card:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-5px);
      box-shadow: 
        0 20px 40px 0 rgba(31, 38, 135, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    
    .metal-card {
      background: linear-gradient(145deg, #3a3a3a, #2a2a2a, #1a1a1a);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 
        inset 0 1px 0 rgba(255,255,255,0.1),
        inset 0 -1px 0 rgba(0,0,0,0.5),
        0 8px 25px rgba(0,0,0,0.4);
      transition: all 0.3s ease;
    }
    
    .metal-card:hover {
      background: linear-gradient(145deg, #4a4a4a, #3a3a3a, #2a2a2a);
      transform: translateY(-5px);
      box-shadow: 
        inset 0 1px 0 rgba(255,255,255,0.2),
        inset 0 -1px 0 rgba(0,0,0,0.7),
        0 15px 35px rgba(0,0,0,0.6);
    }
    
    .geometric-card {
      background: linear-gradient(135deg, 
        rgba(59, 130, 246, 0.15) 0%, 
        rgba(147, 51, 234, 0.15) 50%,
        rgba(239, 68, 68, 0.15) 100%);
      border: 1px solid rgba(59, 130, 246, 0.3);
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    
    .geometric-card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: conic-gradient(
        from 0deg, 
        transparent, 
        rgba(59, 130, 246, 0.2), 
        transparent 120deg,
        rgba(147, 51, 234, 0.2),
        transparent 240deg
      );
      animation: rotate 25s linear infinite;
      pointer-events: none;
    }
    
    .geometric-card:hover {
      transform: translateY(-5px);
      background: linear-gradient(135deg, 
        rgba(59, 130, 246, 0.25) 0%, 
        rgba(147, 51, 234, 0.25) 50%,
        rgba(239, 68, 68, 0.25) 100%);
      box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
    }
    
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* Geometric Hero Enhancements */
    .geometric-hero {
      background: radial-gradient(ellipse at top, 
        rgba(59, 130, 246, 0.3) 0%,
        rgba(147, 51, 234, 0.2) 50%,
        rgba(15, 23, 42, 1) 100%);
      position: relative;
      overflow: hidden;
    }
    
    .geometric-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.05) 0%, transparent 50%);
      animation: float 8s ease-in-out infinite;
    }
    
    /* Button Enhancements */
    .enhanced-button {
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    
    .enhanced-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    
    .enhanced-button:hover::before {
      left: 100%;
    }
    
    .enhanced-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    }
  `}</style>
);
