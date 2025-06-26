
export const PreviewStyles = () => (
  <style>{`
    /* Professional Typography */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

    /* Modern Color Palette */
    :root {
      --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      --gradient-tech: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      --gradient-success: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      --gradient-premium: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      --gradient-dark: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #2d2d2d 100%);
      
      --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
      --shadow-md: 0 4px 8px rgba(0,0,0,0.15);
      --shadow-lg: 0 8px 16px rgba(0,0,0,0.2);
      --shadow-xl: 0 12px 24px rgba(0,0,0,0.25);
      --shadow-2xl: 0 16px 32px rgba(0,0,0,0.3);
      
      --blur-sm: blur(4px);
      --blur-md: blur(8px);
      --blur-lg: blur(16px);
      --blur-xl: blur(24px);
    }

    /* Base Typography */
    .typography-display {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.025em;
    }

    .typography-heading {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    .typography-body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 400;
      line-height: 1.6;
      letter-spacing: -0.01em;
    }

    .typography-mono {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 500;
    }

    /* Advanced Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
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

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    /* Professional Button System */
    .btn-primary {
      background: var(--gradient-primary);
      background-size: 200% 200%;
      animation: gradientShift 3s ease infinite;
      color: white;
      font-weight: 600;
      padding: 16px 32px;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-xl);
    }

    .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.5s;
    }

    .btn-primary:hover::before {
      left: 100%;
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: var(--blur-md);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      font-weight: 600;
      padding: 16px 32px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: var(--shadow-md);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    /* Glass Morphism System */
    .glass-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: var(--blur-lg);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 20px;
      box-shadow: var(--shadow-xl);
      transition: all 0.3s ease;
    }

    .glass-card:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-5px);
      box-shadow: var(--shadow-2xl);
    }

    .glass-card-dark {
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: var(--blur-lg);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      box-shadow: var(--shadow-xl);
    }

    /* Professional Grid System */
    .grid-professional {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }

    @media (min-width: 768px) {
      .grid-professional {
        gap: 3rem;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }
    }

    /* Hero Backgrounds */
    .hero-gradient {
      background: linear-gradient(135deg, 
        #667eea 0%, 
        #764ba2 25%, 
        #f093fb 50%, 
        #f5576c 75%, 
        #4facfe 100%);
      background-size: 400% 400%;
      animation: gradientShift 8s ease infinite;
    }

    .hero-tech {
      background: radial-gradient(ellipse at top, 
        rgba(59, 130, 246, 0.3) 0%,
        rgba(147, 51, 234, 0.2) 50%,
        rgba(15, 23, 42, 1) 100%);
      position: relative;
      overflow: hidden;
    }

    .hero-tech::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%);
      animation: float 8s ease-in-out infinite;
    }

    /* Content Animations */
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out;
    }

    .animate-slide-in-right {
      animation: slideInRight 0.8s ease-out;
    }

    .animate-scale-in {
      animation: scaleIn 0.6s ease-out;
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    /* Section Spacing */
    .section-padding {
      padding: 6rem 1.5rem;
    }

    @media (min-width: 768px) {
      .section-padding {
        padding: 8rem 2rem;
      }
    }

    @media (min-width: 1024px) {
      .section-padding {
        padding: 10rem 3rem;
      }
    }

    /* Professional Icons */
    .icon-wrapper {
      width: 4rem;
      height: 4rem;
      background: var(--gradient-primary);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      box-shadow: var(--shadow-lg);
      transition: all 0.3s ease;
    }

    .icon-wrapper:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-xl);
    }

    /* Testimonial Cards */
    .testimonial-card {
      background: var(--gradient-dark);
      border-radius: 24px;
      padding: 2.5rem;
      position: relative;
      overflow: hidden;
      box-shadow: var(--shadow-xl);
      transition: all 0.3s ease;
    }

    .testimonial-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient-primary);
    }

    .testimonial-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-2xl);
    }

    /* Stats Section */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin: 4rem 0;
    }

    .stat-item {
      text-align: center;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      backdrop-filter: var(--blur-md);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 800;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
    }

    /* Call to Action */
    .cta-section {
      background: var(--gradient-primary);
      padding: 6rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .typography-display {
        font-size: 2.5rem;
      }
      
      .section-padding {
        padding: 4rem 1rem;
      }
      
      .btn-primary, .btn-secondary {
        padding: 14px 24px;
        font-size: 0.9rem;
      }
      
      .glass-card {
        border-radius: 16px;
        padding: 1.5rem;
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
    .btn-primary:focus,
    .btn-secondary:focus {
      outline: 2px solid rgba(255, 255, 255, 0.5);
      outline-offset: 2px;
    }

    /* Professional Spacing System */
    .space-y-professional > * + * {
      margin-top: 2rem;
    }

    .space-y-professional-lg > * + * {
      margin-top: 3rem;
    }

    @media (min-width: 768px) {
      .space-y-professional > * + * {
        margin-top: 3rem;
      }
      
      .space-y-professional-lg > * + * {
        margin-top: 4rem;
      }
    }
  `}</style>
);
