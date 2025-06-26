
export const PreviewStyles = () => (
  <style>{`
    /* Professional Typography System */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

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
      
      /* Unique Style Gradients */
      --gradient-3d: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #000000 100%);
      --gradient-geometric: linear-gradient(45deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #f9ca24 75%, #ff6b6b 100%);
      --gradient-glass: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.9) 100%);
      --gradient-metal: linear-gradient(135deg, #2c1810 0%, #8b7355 25%, #c9aa7c 50%, #f4e4bc 75%, #8b7355 100%);
      --gradient-image: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%);
      
      /* Advanced Shadows */
      --shadow-3d: 0 25px 50px rgba(0,0,0,0.8), 0 12px 25px rgba(59, 130, 246, 0.3);
      --shadow-geometric: 0 0 0 1px rgba(255, 107, 107, 0.3), 0 15px 35px rgba(255, 107, 107, 0.2);
      --shadow-glass: 0 8px 32px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(255,255,255,0.1);
      --shadow-metal: 0 12px 24px rgba(139, 115, 85, 0.4), inset 0 1px 0 rgba(244, 228, 188, 0.3);
      --shadow-image: 0 20px 40px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2);
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

    .typography-body {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      letter-spacing: -0.005em;
    }

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

    /* === GLASS STYLE === */
    .style-glass {
      background: var(--gradient-glass);
      position: relative;
      overflow: hidden;
    }

    .style-glass::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
      backdrop-filter: blur(1px);
    }

    .bg-glass {
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%);
      backdrop-filter: blur(20px);
    }

    .card-glass {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 1.5rem;
      box-shadow: var(--shadow-glass);
      position: relative;
      overflow: hidden;
    }

    .card-glass::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    }

    .card-glass:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(15, 23, 42, 0.6), 0 0 0 1px rgba(255,255,255,0.2);
    }

    .btn-glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      box-shadow: var(--shadow-glass);
    }

    .btn-glass:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
      box-shadow: 0 16px 32px rgba(15, 23, 42, 0.5);
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

    /* === IMAGE STYLE === */
    .style-image {
      position: relative;
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    }

    .style-image::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-image);
    }

    .bg-image {
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(2px);
    }

    .card-image {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 1rem;
      box-shadow: var(--shadow-image);
    }

    .card-image:hover {
      background: rgba(0, 0, 0, 0.7);
      transform: translateY(-5px);
      box-shadow: 0 25px 50px rgba(0,0,0,0.4);
    }

    .btn-image {
      background: rgba(59, 130, 246, 0.9);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(59, 130, 246, 0.5);
      color: white;
      box-shadow: var(--shadow-image);
    }

    .btn-image:hover {
      background: rgba(59, 130, 246, 1);
      transform: translateY(-2px);
      box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
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
    }

    @media (max-width: 480px) {
      .grid-professional {
        gap: 1.5rem;
      }
      
      .card-3d,
      .card-glass,
      .card-metal,
      .card-geometric,
      .card-image {
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
