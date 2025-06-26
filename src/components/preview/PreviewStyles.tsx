
export const PreviewStyles = () => (
  <style>{`
    /* Professional Typography System */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

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
      
      /* Premium Gradients */
      --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      --gradient-geometric: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24);
      --gradient-glass: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
      --gradient-metal: linear-gradient(135deg, #c9aa7c 0%, #f4e4bc 25%, #c9aa7c 50%, #8b7355 75%, #f4e4bc 100%);
      --gradient-liquid: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
      
      /* Advanced Shadows */
      --shadow-soft: 0 2px 4px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.06);
      --shadow-medium: 0 4px 8px rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.08);
      --shadow-large: 0 8px 16px rgba(0,0,0,0.06), 0 20px 40px rgba(0,0,0,0.1);
      --shadow-glass: 0 8px 32px rgba(31, 38, 135, 0.37);
      --shadow-metal: 0 12px 48px rgba(198, 170, 124, 0.25);
      
      /* Blur Effects */
      --blur-xs: blur(2px);
      --blur-sm: blur(4px);
      --blur-md: blur(8px);
      --blur-lg: blur(16px);
      --blur-xl: blur(24px);
    }

    /* Typography Excellence */
    .typography-hero {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.04em;
      background: var(--gradient-hero);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 200%;
      animation: gradientFlow 8s ease infinite;
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

    .typography-body {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      letter-spacing: -0.005em;
    }

    /* Advanced Animations */
    @keyframes gradientFlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes float3D {
      0%, 100% { 
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px);
      }
      25% { 
        transform: perspective(1000px) rotateX(5deg) rotateY(10deg) translateY(-10px) translateZ(20px);
      }
      50% { 
        transform: perspective(1000px) rotateX(0deg) rotateY(20deg) translateY(-20px) translateZ(40px);
      }
      75% { 
        transform: perspective(1000px) rotateX(-5deg) rotateY(10deg) translateY(-10px) translateZ(20px);
      }
    }

    @keyframes geometricPulse {
      0%, 100% { 
        transform: scale(1) rotate(0deg);
        opacity: 0.8;
      }
      50% { 
        transform: scale(1.1) rotate(180deg);
        opacity: 1;
      }
    }

    @keyframes liquidShimmer {
      0% { 
        background-position: -200% 0;
        transform: translateX(-100%);
      }
      100% { 
        background-position: 200% 0;
        transform: translateX(100%);
      }
    }

    @keyframes metalGlow {
      0%, 100% { 
        box-shadow: 0 0 20px rgba(198, 170, 124, 0.3);
      }
      50% { 
        box-shadow: 0 0 40px rgba(198, 170, 124, 0.6);
      }
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
      background: var(--gradient-hero);
      background-size: 200% 200%;
      color: white;
      box-shadow: var(--shadow-large);
      animation: gradientFlow 8s ease infinite;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.15), 0 20px 40px rgba(102, 126, 234, 0.3);
    }

    .btn-glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: var(--blur-lg);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      box-shadow: var(--shadow-glass);
    }

    .btn-glass:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
      box-shadow: 0 16px 32px rgba(31, 38, 135, 0.5);
    }

    .btn-metal {
      background: var(--gradient-metal);
      background-size: 200% 200%;
      color: #2d1810;
      box-shadow: var(--shadow-metal);
      animation: gradientFlow 6s ease infinite, metalGlow 4s ease infinite;
    }

    .btn-metal:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 32px rgba(198, 170, 124, 0.4);
    }

    .btn-geometric {
      background: var(--gradient-geometric);
      background-size: 400% 400%;
      color: white;
      clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
      animation: gradientFlow 4s ease infinite;
    }

    .btn-geometric:hover {
      transform: translateY(-2px) scale(1.02);
      animation-duration: 2s;
    }

    /* Glass Morphism System */
    .glass-card {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: var(--blur-xl);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 1.5rem;
      box-shadow: var(--shadow-glass);
      position: relative;
      overflow: hidden;
    }

    .glass-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    }

    .glass-card:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(31, 38, 135, 0.5);
    }

    .glass-intense {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: var(--blur-xl);
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 2rem;
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 20px 40px rgba(31, 38, 135, 0.4);
    }

    /* Metallic System */
    .metal-card {
      background: var(--gradient-metal);
      background-size: 200% 200%;
      border-radius: 1.5rem;
      box-shadow: var(--shadow-metal);
      position: relative;
      overflow: hidden;
      animation: gradientFlow 8s ease infinite;
    }

    .metal-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
    }

    .metal-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(198, 170, 124, 0.5);
      animation-duration: 4s;
    }

    .metal-text {
      background: var(--gradient-metal);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 200%;
      animation: gradientFlow 6s ease infinite;
    }

    /* Geometric Design System */
    .geometric-hero {
      position: relative;
      background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%);
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
        radial-gradient(circle at 20% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(69, 183, 209, 0.1) 0%, transparent 50%);
      animation: geometricPulse 12s ease infinite;
    }

    .geometric-shape {
      position: absolute;
      background: var(--gradient-geometric);
      border-radius: 50%;
      filter: blur(1px);
      animation: float3D 8s ease-in-out infinite;
    }

    .geometric-shape:nth-child(1) {
      width: 300px;
      height: 300px;
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    .geometric-shape:nth-child(2) {
      width: 200px;
      height: 200px;
      top: 60%;
      right: 15%;
      animation-delay: 2s;
    }

    .geometric-shape:nth-child(3) {
      width: 150px;
      height: 150px;
      bottom: 20%;
      left: 20%;
      animation-delay: 4s;
    }

    .geometric-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      position: relative;
    }

    .geometric-card {
      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
      border: 1px solid rgba(255,255,255,0.1);
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
      padding: 2rem;
      transition: all 0.3s ease;
    }

    .geometric-card:hover {
      transform: translateY(-10px) scale(1.02);
      background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%);
    }

    /* 3D Background System */
    .hero-3d {
      position: relative;
      background: 
        radial-gradient(ellipse at center top, rgba(59, 130, 246, 0.15) 0%, transparent 70%),
        radial-gradient(ellipse at center bottom, rgba(147, 51, 234, 0.15) 0%, transparent 70%),
        linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
      overflow: hidden;
    }

    .floating-element {
      position: absolute;
      background: var(--gradient-liquid);
      border-radius: 50%;
      filter: blur(2px);
      opacity: 0.6;
      animation: float3D 12s ease-in-out infinite;
    }

    .floating-element:nth-child(1) {
      width: 400px;
      height: 400px;
      top: -200px;
      left: -200px;
      animation-delay: 0s;
    }

    .floating-element:nth-child(2) {
      width: 300px;
      height: 300px;
      top: 50%;
      right: -150px;
      animation-delay: 4s;
    }

    .floating-element:nth-child(3) {
      width: 250px;
      height: 250px;
      bottom: -125px;
      left: 30%;
      animation-delay: 8s;
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

    .section-compact {
      padding: 6rem 0;
    }

    /* Icon System */
    .icon-premium {
      width: 4rem;
      height: 4rem;
      background: var(--gradient-hero);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      box-shadow: var(--shadow-medium);
      transition: all 0.3s ease;
    }

    .icon-premium:hover {
      transform: translateY(-4px) scale(1.1);
      box-shadow: var(--shadow-large);
    }

    .icon-glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: var(--blur-md);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .icon-metal {
      background: var(--gradient-metal);
      animation: metalGlow 4s ease infinite;
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
      
      .geometric-shape {
        display: none;
      }
      
      .floating-element {
        opacity: 0.3;
      }
    }

    @media (max-width: 480px) {
      .grid-professional {
        gap: 1.5rem;
      }
      
      .glass-card,
      .metal-card,
      .geometric-card {
        padding: 1.5rem;
      }
      
      .btn-base {
        padding: 0.75rem 1.25rem;
        font-size: 0.875rem;
      }
    }

    /* High DPI Displays */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      .glass-card {
        backdrop-filter: var(--blur-lg);
      }
      
      .btn-glass {
        backdrop-filter: var(--blur-md);
      }
    }

    /* Dark Mode Optimization */
    @media (prefers-color-scheme: dark) {
      .glass-card {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.08);
      }
      
      .geometric-card {
        background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%);
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

    /* Print Styles */
    @media print {
      .floating-element,
      .geometric-shape {
        display: none;
      }
      
      .glass-card,
      .metal-card {
        background: white;
        border: 1px solid #ccc;
      }
    }
  `}</style>
);
