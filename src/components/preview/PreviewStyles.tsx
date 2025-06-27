
export const PreviewStyles = () => (
  <style>{`
    /* Professional Typography System */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

    :root {
      /* Professional Color System */
      --primary-50: #eff6ff;
      --primary-100: #dbeafe;
      --primary-500: #3b82f6;
      --primary-600: #2563eb;
      --primary-700: #1d4ed8;
      --primary-900: #1e3a8a;
      
      --accent-400: #34d399;
      --accent-500: #10b981;
      --accent-600: #059669;
      
      --purple-400: #a78bfa;
      --purple-500: #8b5cf6;
      --purple-600: #7c3aed;
      
      --gold-400: #fbbf24;
      --gold-500: #f59e0b;
      --gold-600: #d97706;
      
      /* Glassmorphism Colors */
      --glass-blue-400: #60a5fa;
      --glass-blue-500: #3b82f6;
      --glass-blue-600: #2563eb;
      --glass-cyan-400: #22d3ee;
      --glass-cyan-500: #06b6d4;
      --glass-purple-400: #c084fc;
      --glass-purple-500: #a855f7;
      
      /* Cinematic 3D Colors */
      --cinematic-gold: #d4af37;
      --cinematic-silver: #c0c0c0;
      --cinematic-bronze: #cd7f32;
      --cinematic-deep: #1a1a2e;
      --cinematic-amber: #f59e0b;
      
      /* Style Gradients */
      --gradient-3d: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #000000 100%);
      --gradient-geometric: linear-gradient(45deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #f9ca24 75%, #ff6b6b 100%);
      --gradient-metal: linear-gradient(135deg, #2c1810 0%, #8b7355 25%, #c9aa7c 50%, #f4e4bc 75%, #8b7355 100%);
      
      /* Glassmorphism Gradients */
      --gradient-glassmorphism: linear-gradient(135deg, rgba(17, 25, 40, 0.85) 0%, rgba(30, 41, 59, 0.85) 25%, rgba(15, 23, 42, 0.9) 50%, rgba(17, 25, 40, 0.85) 100%);
      --gradient-glassmorphism-alt: linear-gradient(45deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(17, 25, 40, 0.9) 100%);
      --gradient-glassmorphism-deep: linear-gradient(135deg, rgba(17, 25, 40, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%);
      --gradient-glassmorphism-final: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(17, 25, 40, 0.95) 100%);
      
      /* Cinematic 3D Gradients */
      --gradient-cinematic-3d: linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(20, 20, 35, 0.9) 25%, rgba(15, 15, 25, 0.95) 50%, rgba(10, 10, 20, 0.98) 100%);
      --gradient-cinematic-3d-alt: linear-gradient(45deg, rgba(15, 15, 25, 0.95) 0%, rgba(25, 25, 45, 0.9) 50%, rgba(20, 20, 35, 0.95) 100%);
      --gradient-cinematic-3d-deep: linear-gradient(135deg, rgba(10, 10, 20, 0.98) 0%, rgba(15, 15, 25, 0.95) 100%);
      --gradient-cinematic-3d-final: linear-gradient(135deg, rgba(20, 20, 35, 0.95) 0%, rgba(10, 10, 20, 0.98) 100%);
      
      /* Advanced Shadows */
      --shadow-3d: 0 25px 50px rgba(0,0,0,0.8), 0 12px 25px rgba(59, 130, 246, 0.3);
      --shadow-geometric: 0 0 0 1px rgba(255, 107, 107, 0.3), 0 15px 35px rgba(255, 107, 107, 0.2);
      --shadow-metal: 0 12px 24px rgba(139, 115, 85, 0.4), inset 0 1px 0 rgba(244, 228, 188, 0.3);
      --shadow-glassmorphism: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      --shadow-cinematic-3d: 0 30px 60px rgba(0, 0, 0, 0.8), 0 15px 30px rgba(212, 175, 55, 0.3), 0 5px 15px rgba(212, 175, 55, 0.5);
    }

    /* Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
      direction: rtl;
    }

    /* Typography Excellence */
    .typography-hero {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.04em;
    }

    .typography-luxury {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    .typography-modern {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: -0.01em;
    }

    .typography-tech {
      font-family: 'Orbitron', monospace;
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: 0.02em;
    }

    .typography-cinematic {
      font-family: 'Playfair Display', serif;
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: -0.02em;
    }

    .typography-body {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      letter-spacing: -0.005em;
    }

    /* === GLASSMORPHISM STYLE === */
    .style-glass, .bg-glassmorphism-gradient, .bg-glassmorphism-gradient-alt, .bg-glassmorphism-gradient-deep, .bg-glassmorphism-gradient-final {
      background: var(--gradient-glassmorphism);
      position: relative;
      overflow: hidden;
    }

    .bg-glassmorphism-gradient-alt {
      background: var(--gradient-glassmorphism-alt);
    }

    .bg-glassmorphism-gradient-deep {
      background: var(--gradient-glassmorphism-deep);
    }

    .bg-glassmorphism-gradient-final {
      background: var(--gradient-glassmorphism-final);
    }

    /* Glassmorphism Hero */
    .glassmorphism-hero {
      background: var(--gradient-glassmorphism);
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .glassmorphism-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .glass-gradient-orb {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.4), rgba(168, 85, 247, 0.3));
      filter: blur(40px);
      animation: glassFloat 20s ease-in-out infinite;
    }

    .glass-orb-1 {
      width: 400px;
      height: 400px;
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    .glass-orb-2 {
      width: 300px;
      height: 300px;
      top: 50%;
      right: 15%;
      animation-delay: 7s;
    }

    .glass-orb-3 {
      width: 250px;
      height: 250px;
      bottom: 20%;
      left: 40%;
      animation-delay: 14s;
    }

    .glassmorphism-grid {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 4rem;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    @media (max-width: 1024px) {
      .glassmorphism-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
      }
    }

    /* Glass Status Panel */
    .glass-status-panel {
      display: inline-flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50px;
      padding: 0.75rem 1.5rem;
      margin-bottom: 2rem;
    }

    .glass-status-indicator {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .glass-pulse-dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      animation: glassPulse 2s infinite;
    }

    /* Glass Main Panel */
    .glass-main-panel {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 2rem;
      padding: 3rem;
      position: relative;
      overflow: hidden;
    }

    .glass-main-panel::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    }

    .glass-text-glow {
      text-shadow: 0 0 30px rgba(96, 165, 250, 0.5);
    }

    .glass-subtitle-panel {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 1rem;
      padding: 1.5rem;
    }

    .glass-actions-panel {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .glass-features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    .glass-feature-card {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 1rem;
      padding: 1.5rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .glass-feature-card:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-5px);
      box-shadow: var(--shadow-glassmorphism);
    }

    .glass-icon-wrapper {
      width: 3rem;
      height: 3rem;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(96, 165, 250, 0.4));
      backdrop-filter: blur(8px);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      color: #60a5fa;
    }

    /* Glass Stats */
    .glassmorphism-stats {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 2rem;
      padding: 2rem;
    }

    .glass-stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .glass-stat-card {
      text-align: center;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
    }

    /* Glass Sections Components */
    .glassmorphism-about-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    @media (max-width: 768px) {
      .glassmorphism-about-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .glass-about-panel {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 2rem;
      padding: 3rem;
      position: relative;
      overflow: hidden;
    }

    .glass-section-header h2 {
      background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #c084fc 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: glassTextFlow 8s ease infinite;
    }

    .glass-underline {
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, #60a5fa, #c084fc);
      border-radius: 2px;
      margin-top: 1rem;
    }

    .glass-underline-center {
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, #60a5fa, #c084fc);
      border-radius: 2px;
      margin: 1rem auto 0;
    }

    .glass-content-panel {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1.5rem;
      padding: 2rem;
    }

    .glass-about-stats {
      position: relative;
    }

    .glass-stats-floating {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .glass-stat-floating-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 1.5rem;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
      animation: glassFloat 8s ease-in-out infinite;
    }

    .glass-stat-floating-card:nth-child(2) {
      animation-delay: 2s;
    }

    .glass-stat-floating-card:nth-child(3) {
      animation-delay: 4s;
    }

    .glass-stat-floating-card:hover {
      transform: translateY(-10px) scale(1.05);
      box-shadow: var(--shadow-glassmorphism);
    }

    .glass-stat-icon {
      width: 4rem;
      height: 4rem;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(96, 165, 250, 0.4));
      backdrop-filter: blur(12px);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
    }

    /* Glass Services */
    .glass-services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .glass-service-card {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 2rem;
      padding: 2.5rem;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .glass-service-card:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-10px);
      box-shadow: var(--shadow-glassmorphism);
    }

    .glass-service-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .glass-service-icon {
      width: 4rem;
      height: 4rem;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(96, 165, 250, 0.4));
      backdrop-filter: blur(12px);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }

    .glass-service-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .glass-service-card:hover .glass-service-glow {
      opacity: 1;
    }

    /* Glass Testimonials */
    .glass-testimonials-floating {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .glass-testimonial-bubble {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 2rem;
      padding: 2.5rem;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .glass-testimonial-bubble:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-8px) scale(1.02);
      box-shadow: var(--shadow-glassmorphism);
    }

    .glass-testimonial-content {
      position: relative;
      z-index: 2;
    }

    .glass-stars-row {
      display: flex;
      gap: 0.25rem;
      margin-bottom: 1rem;
    }

    .glass-testimonial-author {
      text-align: center;
    }

    .glass-testimonial-glow {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.8), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .glass-testimonial-bubble:hover .glass-testimonial-glow {
      opacity: 1;
    }

    /* Glass Contact */
    .glass-contact-master-panel {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 3rem;
      padding: 4rem;
      position: relative;
      overflow: hidden;
    }

    .glass-contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    @media (max-width: 768px) {
      .glass-contact-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .glass-contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .glass-contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 1.5rem;
    }

    .glass-contact-icon {
      width: 3rem;
      height: 3rem;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(96, 165, 250, 0.4));
      backdrop-filter: blur(8px);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .glass-contact-form {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 2rem;
      padding: 3rem;
    }

    .glass-form-panel {
      position: relative;
    }

    .glass-form-grid {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .glass-input-group {
      position: relative;
    }

    .glass-input, .glass-textarea {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 1rem;
      padding: 1rem 1.5rem;
      color: white;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .glass-input::placeholder, .glass-textarea::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    .glass-input:focus, .glass-textarea:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(96, 165, 250, 0.5);
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
    }

    /* Glass Buttons */
    .btn-glassmorphism {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: white;
      box-shadow: var(--shadow-glassmorphism);
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .btn-glassmorphism::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.5s ease;
    }

    .btn-glassmorphism:hover::before {
      left: 100%;
    }

    .btn-glassmorphism:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 20px 40px rgba(96, 165, 250, 0.4);
    }

    /* === CINEMATIC 3D STYLE === */
    .style-image, .bg-cinematic-3d-gradient, .bg-cinematic-3d-gradient-alt, .bg-cinematic-3d-gradient-deep, .bg-cinematic-3d-gradient-final {
      background: var(--gradient-cinematic-3d);
      position: relative;
      overflow: hidden;
    }

    .bg-cinematic-3d-gradient-alt {
      background: var(--gradient-cinematic-3d-alt);
    }

    .bg-cinematic-3d-gradient-deep {
      background: var(--gradient-cinematic-3d-deep);
    }

    .bg-cinematic-3d-gradient-final {
      background: var(--gradient-cinematic-3d-final);
    }

    /* Cinematic 3D Hero */
    .cinematic-3d-hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      perspective: 1000px;
    }

    .cinematic-bg-layer-1 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      filter: blur(2px) brightness(0.3);
      transform: scale(1.1);
    }

    .cinematic-bg-layer-2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(26, 26, 46, 0.8) 50%, rgba(212, 175, 55, 0.1) 100%);
    }

    .cinematic-bg-layer-3 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 20, 0.6) 100%);
    }

    .cinematic-3d-elements {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .floating-3d-cube {
      position: absolute;
      width: 100px;
      height: 100px;
      background: linear-gradient(45deg, rgba(212, 175, 55, 0.3), rgba(192, 192, 192, 0.2));
      transform-style: preserve-3d;
      animation: cinematic3DFloat 15s linear infinite;
    }

    .floating-cube-1 {
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }

    .floating-cube-2 {
      top: 60%;
      right: 15%;
      animation-delay: 7s;
    }

    .floating-3d-sphere {
      position: absolute;
      width: 80px;
      height: 80px;
      background: radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.4), rgba(192, 192, 192, 0.2));
      border-radius: 50%;
      filter: blur(1px);
      animation: cinematic3DSphere 12s ease-in-out infinite;
    }

    .floating-sphere-1 {
      top: 30%;
      right: 30%;
      animation-delay: 3s;
    }

    .floating-sphere-2 {
      bottom: 25%;
      left: 20%;
      animation-delay: 9s;
    }

    .cinematic-depth-layers {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .depth-layer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
    }

    .depth-layer-back {
      transform: translateZ(-100px) scale(1.1);
      opacity: 0.3;
    }

    .depth-layer-mid {
      transform: translateZ(-50px) scale(1.05);
      opacity: 0.5;
    }

    .depth-layer-front {
      transform: translateZ(0px);
      opacity: 0.7;
    }

    .cinematic-3d-grid {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 4rem;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    @media (max-width: 1024px) {
      .cinematic-3d-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
      }
    }

    .cinematic-content-panel {
      transform: perspective(800px) rotateY(-5deg);
      transition: transform 0.3s ease;
    }

    .cinematic-content-panel:hover {
      transform: perspective(800px) rotateY(0deg) translateZ(20px);
    }

    .cinematic-3d-badge {
      display: inline-block;
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(192, 192, 192, 0.1));
      backdrop-filter: blur(8px);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 50px;
      padding: 0.75rem 1.5rem;
      margin-bottom: 2rem;
      transform: perspective(500px) rotateX(10deg);
    }

    .badge-3d-inner {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .cinematic-3d-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 800;
      line-height: 1.1;
      color: white;
      margin-bottom: 2rem;
      background: linear-gradient(135deg, #ffffff 0%, #d4af37 50%, #c0c0c0 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: cinematicTextFlow 8s ease infinite;
      text-shadow: 0 0 40px rgba(212, 175, 55, 0.5);
      transform: perspective(600px) rotateX(5deg);
    }

    .cinematic-content-3d-panel {
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(26, 26, 46, 0.8));
      backdrop-filter: blur(12px);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 2rem;
      padding: 2.5rem;
      transform: perspective(600px) rotateX(5deg);
      box-shadow: var(--shadow-cinematic-3d);
    }

    .cinematic-3d-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .cinematic-3d-stats-cube {
      width: 300px;
      height: 300px;
      position: relative;
      transform-style: preserve-3d;
      animation: cinematicStatsCube 20s linear infinite;
      margin: 2rem auto;
    }

    .stats-cube-face {
      position: absolute;
      width: 300px;
      height: 300px;
      background: rgba(26, 26, 46, 0.9);
      border: 2px solid rgba(212, 175, 55, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(8px);
    }

    .stats-face-1 {
      transform: translateZ(150px);
    }

    .stats-face-2 {
      transform: rotateY(90deg) translateZ(150px);
    }

    .stats-face-3 {
      transform: rotateY(180deg) translateZ(150px);
    }

    .stats-face-4 {
      transform: rotateY(-90deg) translateZ(150px);
    }

    .stat-3d-item {
      text-align: center;
      padding: 2rem;
    }

    .cinematic-3d-features {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      margin-top: 3rem;
    }

    @media (max-width: 768px) {
      .cinematic-3d-features {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
    }

    .feature-3d-pyramid {
      position: relative;
      height: 120px;
      transform-style: preserve-3d;
      animation: cinematicFeaturePyramid 8s ease-in-out infinite;
    }

    .feature-3d-pyramid:nth-child(2) { animation-delay: 2s; }
    .feature-3d-pyramid:nth-child(3) { animation-delay: 4s; }
    .feature-3d-pyramid:nth-child(4) { animation-delay: 6s; }

    .pyramid-top {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.8), rgba(192, 192, 192, 0.6));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-cinematic-3d);
    }

    .pyramid-base {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40px;
      background: rgba(26, 26, 46, 0.8);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(8px);
    }

    /* Cinematic 3D Sections */
    .cinematic-3d-parallax-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
      transform: translateZ(-200px) scale(2);
      opacity: 0.3;
    }

    .cinematic-3d-about-stage {
      transform-style: preserve-3d;
      perspective: 1000px;
    }

    .cinematic-3d-title-block {
      text-align: center;
      margin-bottom: 4rem;
      transform: perspective(600px) rotateX(10deg);
    }

    .cinematic-3d-title-block.text-center {
      text-align: center;
    }

    .cinematic-3d-heading {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.5rem, 6vw, 4rem);
      font-weight: 800;
      color: white;
      background: linear-gradient(135deg, #ffffff 0%, #d4af37 50%, #c0c0c0 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: cinematicTextFlow 8s ease infinite;
      text-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
    }

    .cinematic-3d-line, .cinematic-3d-line-center {
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, #d4af37, #c0c0c0);
      border-radius: 2px;
      margin-top: 1rem;
      box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
    }

    .cinematic-3d-line-center {
      margin: 1rem auto 0;
    }

    .cinematic-about-depth-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    @media (max-width: 768px) {
      .cinematic-about-depth-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .cinematic-content-layer {
      transform: perspective(800px) rotateY(-5deg) translateZ(50px);
    }

    .cinematic-3d-content-panel {
      background: linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(212, 175, 55, 0.1));
      backdrop-filter: blur(16px);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 2rem;
      padding: 3rem;
      box-shadow: var(--shadow-cinematic-3d);
      transform: perspective(600px) rotateX(5deg);
    }

    .cinematic-stats-3d-pyramid {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transform: perspective(800px) rotateY(5deg);
    }

    .cinematic-stat-3d-cube {
      width: 150px;
      height: 150px;
      position: relative;
      transform-style: preserve-3d;
      animation: cinematicStatFloat 8s ease-in-out infinite;
      margin: 0 auto;
    }

    .cinematic-stat-3d-cube:nth-child(2) { animation-delay: 2s; }
    .cinematic-stat-3d-cube:nth-child(3) { animation-delay: 4s; }

    .cube-face {
      position: absolute;
      width: 150px;
      height: 150px;
      background: rgba(26, 26, 46, 0.9);
      border: 1px solid rgba(212, 175, 55, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(8px);
    }

    .cube-front {
      transform: translateZ(75px);
    }

    .cube-top {
      transform: rotateX(90deg) translateZ(75px);
    }

    .cube-right {
      transform: rotateY(90deg) translateZ(75px);
    }

    .cinematic-stat-icon {
      filter: drop-shadow(0 0 10px currentColor);
    }

    /* Cinematic Services */
    .cinematic-3d-depth-layers {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .depth-layer-services-1 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
      transform: translateZ(-100px) scale(1.2);
    }

    .depth-layer-services-2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(192, 192, 192, 0.02) 0%, transparent 50%);
      transform: translateZ(-50px) scale(1.1);
    }

    .cinematic-services-3d-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      perspective: 1000px;
    }

    .cinematic-service-3d-card {
      position: relative;
      width: 100%;
      height: 300px;
      transform-style: preserve-3d;
      transition: transform 0.8s ease;
      cursor: pointer;
    }

    .cinematic-service-3d-card:hover {
      transform: rotateY(180deg);
    }

    .service-3d-face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      backdrop-filter: blur(12px);
      border: 1px solid rgba(212, 175, 55, 0.3);
      box-shadow: var(--shadow-cinematic-3d);
    }

    .service-3d-front {
      background: linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(212, 175, 55, 0.1));
    }

    .service-3d-back {
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(26, 26, 46, 0.9));
      transform: rotateY(180deg);
    }

    .cinematic-service-icon {
      filter: drop-shadow(0 0 20px currentColor);
      margin-bottom: 1rem;
    }

    .cinematic-3d-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.8), transparent);
      border-radius: 2rem 2rem 0 0;
    }

    /* Cinematic Testimonials */
    .cinematic-3d-testimonials-space {
      perspective: 1000px;
      transform-style: preserve-3d;
    }

    .cinematic-testimonials-3d-orbit {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      transform-style: preserve-3d;
    }

    .cinematic-testimonial-3d-sphere {
      position: relative;
      background: radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.2), rgba(26, 26, 46, 0.9));
      backdrop-filter: blur(16px);
      border: 1px solid rgba(212, 175, 55, 0.4);
      border-radius: 50%;
      padding: 3rem;
      transform: perspective(600px) rotateX(5deg);
      box-shadow: var(--shadow-cinematic-3d);
      transition: all 0.3s ease;
      animation: cinematic3DSphere 12s ease-in-out infinite;
    }

    .cinematic-testimonial-3d-sphere:nth-child(2) {
      animation-delay: 4s;
    }

    .cinematic-testimonial-3d-sphere:hover {
      transform: perspective(600px) rotateX(0deg) translateZ(30px);
    }

    .testimonial-3d-inner {
      text-align: center;
    }

    .cinematic-stars-3d {
      display: flex;
      justify-content: center;
      gap: 0.25rem;
      margin-bottom: 1rem;
      filter: drop-shadow(0 0 10px #f59e0b);
    }

    .cinematic-testimonial-glow {
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      height: 3px;
      background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.8), transparent);
      border-radius: 50px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .cinematic-testimonial-3d-sphere:hover .cinematic-testimonial-glow {
      opacity: 1;
    }

    /* Cinematic Contact */
    .cinematic-3d-contact-environment {
      perspective: 1200px;
      transform-style: preserve-3d;
    }

    .cinematic-contact-3d-stage {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
      transform-style: preserve-3d;
    }

    @media (max-width: 768px) {
      .cinematic-contact-3d-stage {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .cinematic-contact-info-3d {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transform: perspective(800px) rotateY(-10deg) translateZ(30px);
    }

    .cinematic-contact-3d-item {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      background: linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(212, 175, 55, 0.1));
      backdrop-filter: blur(12px);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 1.5rem;
      padding: 2rem;
      transform: perspective(500px) rotateX(5deg);
      box-shadow: var(--shadow-cinematic-3d);
      transition: transform 0.3s ease;
    }

    .cinematic-contact-3d-item:hover {
      transform: perspective(500px) rotateX(0deg) translateZ(20px);
    }

    .contact-3d-icon-sphere {
      width: 4rem;
      height: 4rem;
      background: radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.8), rgba(192, 192, 192, 0.4));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 15px currentColor);
      animation: cinematic3DSphere 8s ease-in-out infinite;
    }

    .contact-3d-info {
      flex: 1;
    }

    .cinematic-form-3d-panel {
      transform: perspective(800px) rotateY(10deg) translateZ(30px);
    }

    .form-3d-interface {
      background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(212, 175, 55, 0.1));
      backdrop-filter: blur(16px);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 2rem;
      padding: 3rem;
      box-shadow: var(--shadow-cinematic-3d);
    }

    .cinematic-3d-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-3d-field {
      position: relative;
      transform: perspective(400px) rotateX(2deg);
    }

    .cinematic-3d-input, .cinematic-3d-textarea {
      width: 100%;
      background: rgba(26, 26, 46, 0.8);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 1rem;
      padding: 1rem 1.5rem;
      color: white;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .cinematic-3d-input::placeholder, .cinematic-3d-textarea::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    .cinematic-3d-input:focus, .cinematic-3d-textarea:focus {
      outline: none;
      background: rgba(26, 26, 46, 0.9);
      border-color: rgba(212, 175, 55, 0.6);
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
    }

    /* Cinematic Buttons */
    .btn-cinematic-3d {
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.9), rgba(192, 192, 192, 0.7));
      backdrop-filter: blur(8px);
      border: 1px solid rgba(212, 175, 55, 0.5);
      color: rgba(26, 26, 46, 0.9);
      font-weight: bold;
      box-shadow: var(--shadow-cinematic-3d);
      transform: perspective(500px) rotateX(5deg);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .btn-cinematic-3d::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.5s ease;
    }

    .btn-cinematic-3d:hover::before {
      left: 100%;
    }

    .btn-cinematic-3d:hover {
      background: linear-gradient(135deg, rgba(212, 175, 55, 1), rgba(192, 192, 192, 0.8));
      transform: perspective(500px) rotateX(0deg) translateY(-3px);
      box-shadow: 0 25px 50px rgba(212, 175, 55, 0.4);
    }

    /* ... keep existing code (3D, geometric, metal styles) the same ... */

    /* === 3D STYLE === */
    .style-3d {
      background: var(--gradient-3d);
      position: relative;
      overflow: hidden;
    }

    .style-3d::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
      animation: float3D 20s ease-in-out infinite;
    }

    .bg-3d {
      background: var(--gradient-3d);
    }

    .card-3d {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 1rem;
      box-shadow: var(--shadow-3d);
      transform: perspective(1000px) rotateX(2deg) rotateY(-2deg);
      transition: all 0.3s ease;
    }

    .card-3d:hover {
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-10px);
      box-shadow: 0 30px 60px rgba(0,0,0,0.9), 0 15px 30px rgba(59, 130, 246, 0.4);
    }

    .btn-3d {
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      color: white;
      border: 1px solid rgba(59, 130, 246, 0.5);
      box-shadow: var(--shadow-3d);
      transform: perspective(500px) rotateX(10deg);
    }

    .btn-3d:hover {
      transform: perspective(500px) rotateX(0deg) translateY(-5px);
      box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4);
    }

    /* === GEOMETRIC STYLE === */
    .style-geometric {
      background: linear-gradient(45deg, #1a1a2e 0%, #16213e 25%, #0f0f23 50%, #e94560 75%, #0f0f23 100%);
      background-size: 400% 400%;
      animation: geometricFlow 15s ease infinite;
      position: relative;
      overflow: hidden;
    }

    .style-geometric::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(30deg, rgba(255, 107, 107, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 107, 107, 0.1) 87.5%),
        linear-gradient(150deg, rgba(78, 205, 196, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(78, 205, 196, 0.1) 87.5%),
        linear-gradient(90deg, rgba(69, 183, 209, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(69, 183, 209, 0.1) 87.5%);
      background-size: 80px 80px;
      animation: geometricMove 30s linear infinite;
    }

    .bg-geometric {
      background: linear-gradient(135deg, #e94560 0%, #ff6b6b 25%, #4ecdc4 50%, #45b7d1 75%, #f9ca24 100%);
      background-size: 300% 300%;
      animation: geometricFlow 8s ease infinite;
    }

    .card-geometric {
      background: linear-gradient(135deg, rgba(233, 69, 96, 0.2) 0%, rgba(78, 205, 196, 0.2) 100%);
      border: 2px solid;
      border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24) 1;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
      box-shadow: var(--shadow-geometric);
      transition: all 0.3s ease;
    }

    .card-geometric:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.5), var(--shadow-geometric);
    }

    .btn-geometric {
      background: var(--gradient-geometric);
      background-size: 200% 200%;
      color: white;
      font-weight: bold;
      clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
      animation: geometricFlow 4s ease infinite;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .btn-geometric:hover {
      animation-duration: 2s;
      transform: translateY(-3px) scale(1.05);
    }

    /* === METAL STYLE === */
    .style-metal {
      background: var(--gradient-metal);
      position: relative;
      overflow: hidden;
    }

    .style-metal::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 30% 30%, rgba(244, 228, 188, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(201, 170, 124, 0.1) 0%, transparent 50%);
    }

    .bg-metal {
      background: linear-gradient(135deg, #2c1810 0%, #8b7355 25%, #c9aa7c 50%, #f4e4bc 75%, #8b7355 100%);
      background-size: 200% 200%;
      animation: metalFlow 8s ease infinite;
    }

    .card-metal {
      background: linear-gradient(135deg, #c9aa7c 0%, #f4e4bc 25%, #c9aa7c 50%, #8b7355 75%, #f4e4bc 100%);
      background-size: 200% 200%;
      border-radius: 1.5rem;
      box-shadow: var(--shadow-metal);
      position: relative;
      overflow: hidden;
      animation: metalFlow 12s ease infinite;
    }

    .card-metal::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(244, 228, 188, 0.8), transparent);
    }

    .card-metal:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(139, 115, 85, 0.6), inset 0 1px 0 rgba(244, 228, 188, 0.5);
      animation-duration: 6s;
    }

    .btn-metal {
      background: var(--gradient-metal);
      background-size: 200% 200%;
      color: #2d1810;
      font-weight: bold;
      box-shadow: var(--shadow-metal);
      animation: metalFlow 8s ease infinite;
    }

    .btn-metal:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 32px rgba(139, 115, 85, 0.5);
      animation-duration: 4s;
    }

    .text-metal {
      background: var(--gradient-metal);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: metalFlow 8s ease infinite;
    }

    /* Professional Button System */
    .btn-base {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.5;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      border: none;
      overflow: hidden;
      text-decoration: none;
    }

    .btn-primary {
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      color: white;
      box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(59, 130, 246, 0.4);
    }

    /* Professional Grid System */
    .container-hero {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .grid-professional {
      display: grid;
      gap: 3rem;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }

    .grid-testimonials {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    /* Section Spacing */
    .section-hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 4rem 0;
    }

    .section-standard {
      padding: 8rem 0;
    }

    /* Icon System */
    .icon-premium {
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      transition: all 0.3s ease;
    }

    .icon-premium:hover {
      transform: translateY(-4px) scale(1.1);
    }

    .icon-3d {
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      box-shadow: var(--shadow-3d);
      transform: perspective(500px) rotateX(10deg);
    }

    .icon-geometric {
      background: var(--gradient-geometric);
      background-size: 200% 200%;
      animation: geometricFlow 6s ease infinite;
      clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
    }

    .icon-glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: var(--shadow-glass);
    }

    .icon-metal {
      background: var(--gradient-metal);
      background-size: 200% 200%;
      animation: metalFlow 8s ease infinite;
      box-shadow: var(--shadow-metal);
    }

    .icon-image {
      background: rgba(59, 130, 246, 0.8);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(59, 130, 246, 0.5);
      box-shadow: var(--shadow-image);
    }

    /* Animations */
    @keyframes glassFloat {
      0%, 100% { 
        transform: translateY(0px) translateX(0px);
      }
      25% { 
        transform: translateY(-20px) translateX(10px);
      }
      50% { 
        transform: translateY(-30px) translateX(-10px);
      }
      75% { 
        transform: translateY(-10px) translateX(5px);
      }
    }

    @keyframes glassPulse {
      0%, 100% { 
        opacity: 1;
        transform: scale(1);
      }
      50% { 
        opacity: 0.7;
        transform: scale(1.1);
      }
    }

    @keyframes glassTextFlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes cinematic3DFloat {
      0%, 100% { 
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(0px);
      }
      25% { 
        transform: perspective(1000px) rotateX(90deg) rotateY(45deg) rotateZ(45deg) translateY(-20px);
      }
      50% { 
        transform: perspective(1000px) rotateX(180deg) rotateY(90deg) rotateZ(90deg) translateY(-40px);
      }
      75% { 
        transform: perspective(1000px) rotateX(270deg) rotateY(135deg) rotateZ(135deg) translateY(-20px);
      }
    }

    @keyframes cinematic3DSphere {
      0%, 100% { 
        transform: translateY(0px) scale(1) rotateZ(0deg);
      }
      25% { 
        transform: translateY(-15px) scale(1.05) rotateZ(90deg);
      }
      50% { 
        transform: translateY(-25px) scale(1.1) rotateZ(180deg);
      }
      75% { 
        transform: translateY(-10px) scale(1.05) rotateZ(270deg);
      }
    }

    @keyframes cinematicTextFlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes cinematicStatsCube {
      0% { 
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
      }
      100% { 
        transform: perspective(1000px) rotateX(360deg) rotateY(360deg);
      }
    }

    @keyframes cinematicFeaturePyramid {
      0%, 100% { 
        transform: translateY(0px) rotateZ(0deg);
      }
      50% { 
        transform: translateY(-10px) rotateZ(180deg);
      }
    }

    @keyframes cinematicStatFloat {
      0%, 100% { 
        transform: perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px);
      }
      50% { 
        transform: perspective(600px) rotateX(20deg) rotateY(20deg) translateY(-15px);
      }
    }

    @keyframes float3D {
      0%, 100% { 
        transform: translateY(0px) rotateX(0deg) rotateY(0deg);
      }
      25% { 
        transform: translateY(-20px) rotateX(5deg) rotateY(10deg);
      }
      50% { 
        transform: translateY(-40px) rotateX(0deg) rotateY(20deg);
      }
      75% { 
        transform: translateY(-20px) rotateX(-5deg) rotateY(10deg);
      }
    }

    @keyframes geometricFlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes geometricMove {
      0% { transform: translateX(0) translateY(0); }
      100% { transform: translateX(80px) translateY(80px); }
    }

    @keyframes metalFlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(60px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* Animation Classes */
    .animate-slide-up {
      animation: slideInUp 0.8s ease-out;
    }

    .animate-scale-in {
      animation: scaleIn 0.6s ease-out;
    }

    .animate-float {
      animation: float3D 8s ease-in-out infinite;
    }

    .animate-delay-1 { animation-delay: 0.2s; }
    .animate-delay-2 { animation-delay: 0.4s; }
    .animate-delay-3 { animation-delay: 0.6s; }
    .animate-delay-4 { animation-delay: 0.8s; }
    .animate-delay-5 { animation-delay: 1.0s; }

    /* Responsive Design */
    @media (max-width: 768px) {
      .container-hero {
        padding: 0 1rem;
      }
      
      .grid-professional {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .section-hero {
        min-height: 80vh;
        padding: 2rem 0;
      }
      
      .section-standard {
        padding: 4rem 0;
      }
      
      .btn-base {
        padding: 0.875rem 1.5rem;
        font-size: 0.9rem;
      }
      
      .typography-hero {
        font-size: 2.5rem;
      }

      .glassmorphism-grid, .cinematic-3d-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .glass-features-grid {
        grid-template-columns: 1fr;
      }

      .glass-actions-panel, .cinematic-3d-actions {
        justify-content: center;
        flex-direction: column;
      }
    }

    @media (max-width: 480px) {
      .grid-professional {
        gap: 1.5rem;
      }
      
      .card-3d,
      .card-glass,
      .card-metal,
      .card-geometric,
      .card-image,
      .glass-main-panel,
      .cinematic-3d-content-panel {
        padding: 1.5rem;
      }
      
      .btn-base {
        padding: 0.75rem 1.25rem;
        font-size: 0.875rem;
      }
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }

    /* Focus States */
    .btn-base:focus-visible {
      outline: 2px solid rgba(59, 130, 246, 0.6);
      outline-offset: 2px;
    }
  `}</style>
);
