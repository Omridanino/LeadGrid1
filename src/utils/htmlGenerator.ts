
import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (
  content: any,
  colors: ColorScheme,
  formData: any,
  heroImageUrl?: string
): string => {
  const businessName = formData?.businessName || content?.headline || "העסק שלי";
  const subheadline = content?.subheadline || `השירותים המקצועיים ביותר ל${formData?.targetAudience || "לקוחות"}`;
  const ctaText = content?.cta || "בואו נתחיל לעבוד יחד";

  const getBusinessImage = (businessType: string) => {
    const businessImages = {
      'עורך דין': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop',
      'רופא': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop',
      'מעצב גרפי': 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&h=1080&fit=crop',
      'יועץ עסקי': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop',
      'מורה פרטי': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop',
      'מאמן כושר': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
      'צלם': 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&h=1080&fit=crop',
      'נהג': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop',
      'מספר': 'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=1920&h=1080&fit=crop',
      'default': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop'
    };

    return businessImages[businessType as keyof typeof businessImages] || businessImages.default;
  };

  const getStyleClass = () => {
    switch (formData?.heroStyle) {
      case 'geometric':
        return 'style-geometric';
      case 'glass':
        return 'style-glass';
      case 'metal':
        return 'style-metal';
      case 'image':
        return 'style-image';
      default:
        return 'style-3d';
    }
  };

  const getHeroBackground = () => {
    if (formData?.heroStyle === 'image') {
      const imageUrl = heroImageUrl || getBusinessImage(formData.businessType);
      return `background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('${imageUrl}'); background-size: cover; background-position: center; background-attachment: fixed;`;
    }
    return '';
  };

  // Import the exact same CSS from PreviewStyles component
  const getCSSStyles = () => `
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

    html {
      scroll-behavior: smooth;
      overflow-x: hidden;
      height: 100%;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
      direction: rtl;
      overflow-x: hidden;
      min-height: 100vh;
      height: auto;
      overflow-y: auto;
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
      overflow-x: hidden;
      width: 100%;
      min-height: 100vh;
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
      overflow-x: hidden;
      width: 100%;
      min-height: 100vh;
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
      overflow-x: hidden;
      width: 100%;
      min-height: 100vh;
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
      overflow-x: hidden;
      width: 100%;
      min-height: 100vh;
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
      width: 100%;
      overflow-x: hidden;
      min-height: 100vh;
      ${getHeroBackground()}
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

    /* Professional Grid System */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .grid {
      display: grid;
      gap: 1.5rem;
    }

    .grid-cols-1 { grid-template-columns: 1fr; }
    .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

    /* Section Spacing */
    .section-hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 4rem 0;
      position: relative;
    }

    .section-standard {
      padding: 4rem 0;
      position: relative;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .container { padding: 0 1rem; }
      .section-hero { min-height: 80vh; padding: 2rem 0; }
      .section-standard { padding: 3rem 0; }
      .grid-cols-2, .grid-cols-3, .grid-cols-4 { grid-template-columns: 1fr; }
      .text-4xl { font-size: 2rem; }
      .text-5xl { font-size: 2.5rem; }
    }

    /* Utility Classes */
    .text-center { text-align: center; }
    .text-white { color: white; }
    .text-gray-300 { color: #d1d5db; }
    .text-gray-400 { color: #9ca3af; }
    .text-yellow-400 { color: #facc15; }
    .text-blue-400 { color: #60a5fa; }
    .text-lg { font-size: 1.125rem; }
    .text-xl { font-size: 1.25rem; }
    .text-2xl { font-size: 1.5rem; }
    .text-3xl { font-size: 1.875rem; }
    .text-4xl { font-size: 2.25rem; }
    .text-5xl { font-size: 3rem; }
    .font-bold { font-weight: bold; }
    .font-black { font-weight: 900; }
    .mb-3 { margin-bottom: 0.75rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-12 { margin-bottom: 3rem; }
    .max-w-3xl { max-width: 48rem; }
    .max-w-4xl { max-width: 56rem; }
    .max-w-6xl { max-width: 72rem; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .leading-relaxed { line-height: 1.625; }
    .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .p-6 { padding: 1.5rem; }
    .p-8 { padding: 2rem; }

    /* Icon Classes */
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

    .animate-slide-up {
      animation: slideInUp 0.8s ease-out;
    }

    .animate-scale-in {
      animation: scaleIn 0.6s ease-out;
    }

    .animate-delay-1 { animation-delay: 0.2s; }
    .animate-delay-2 { animation-delay: 0.4s; }
    .animate-delay-3 { animation-delay: 0.6s; }
    .animate-delay-4 { animation-delay: 0.8s; }

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
  `;

  // Generate all sections using the exact same structure as ContentSections component
  const generateAllSections = () => {
    const styleClass = formData?.heroStyle || '3d';
    const typographyClass = formData?.heroStyle === 'metal' ? 'luxury' : 'modern';

    return `
    <!-- Value Proposition Section -->
    <section class="section-standard">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="typography-${typographyClass} text-4xl text-5xl font-black mb-8 text-white animate-slide-up">
            ${content?.sections?.emotionalSection?.title || "השירות שמשנה את המשחק"}
          </h2>
          <div class="card-${styleClass} p-8 animate-slide-up animate-delay-1">
            <p class="typography-body text-lg text-xl leading-relaxed text-white">
              ${content?.sections?.emotionalSection?.content || `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${formData?.businessType || 'שירותים עסקיים'}.`}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section-standard">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="typography-${typographyClass} text-4xl text-5xl font-black mb-6 text-white">
            ${content?.sections?.whyUs?.title || "למה כדאי לבחור דווקא בנו?"}
          </h2>
          <p class="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
            הסיבות שעושות אותנו לבחירה הטובה ביותר עבורכם
          </p>
        </div>
        
        <div class="grid grid-cols-2 grid-cols-4 gap-6">
          ${(content?.sections?.whyUs?.reasons || [
            { title: "שירות מקצועי ברמה הגבוהה", description: "צוות מנוסה עם מומחיות מוכחת ושנות ניסיון רבות" },
            { title: "זמינות ומהירות בשירות", description: "מענה מהיר ויעיל לכל פנייה תוך זמן קצר" },
            { title: "יחס אישי ומסור", description: "טיפול אישי בכל לקוח ופרויקט - אתם חשובים לנו" },
            { title: "מחירים הוגנים ושקופים", description: "תמחור ברור ללא הפתעות או עלויות נסתרות" }
          ]).map((reason, index) => `
            <div class="card-${styleClass} p-6 text-center animate-scale-in animate-delay-${index + 1}">
              <div class="icon-${styleClass} mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <img src="https://img.icons8.com/3d-fluency/94/trophy.png" alt="trophy" style="width: 32px; height: 32px;" />
              </div>
              <h3 class="typography-${typographyClass} text-lg font-bold mb-3 text-white">
                ${reason.title}
              </h3>
              <p class="typography-body text-gray-300 leading-relaxed text-sm">
                ${reason.description}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-standard">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="typography-${typographyClass} text-4xl text-5xl font-black mb-6 text-white">
            ${content?.sections?.whatWeGive?.title || "מה אתם מקבלים מאיתנו"}
          </h2>
          <p class="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
            השירותים המקצועיים שלנו מותאמים בדיוק לצרכים שלכם
          </p>
        </div>
        
        <div class="grid grid-cols-2 gap-6">
          ${(content?.sections?.whatWeGive?.services || [
            { title: "שירות מותאם אישית", description: "פתרונות מותאמים בדיוק לצרכים הייחודיים שלכם" },
            { title: "איכות ללא פשרות", description: "רמת שירות גבוהה ועקבית בכל שלב מהתהליך" },
            { title: "ליווי מלא", description: "תמיכה צמודה לאורך כל התהליך מההתחלה ועד הסוף" },
            { title: "תוצאות מוכחות", description: "הישגים קונקרטיים ומדידים שאתם יכולים לראות" }
          ]).map((service, index) => `
            <div class="card-${styleClass} p-6 animate-slide-up animate-delay-${index + 1}">
              <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
                <div class="icon-${styleClass} w-8 h-8 flex items-center justify-center">
                  <img src="https://img.icons8.com/3d-fluency/94/checkmark.png" alt="check" style="width: 24px; height: 24px;" />
                </div>
                <div>
                  <h3 class="typography-${typographyClass} text-lg font-bold text-white mb-2">
                    ${service.title}
                  </h3>
                  <p class="typography-body text-gray-300 leading-relaxed text-sm">
                    ${service.description}
                  </p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-standard">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="typography-${typographyClass} text-4xl text-5xl font-black mb-6 text-white">
            <img src="https://img.icons8.com/3d-fluency/94/laptop.png" alt="process" style="width: 40px; height: 40px; display: inline-block; margin-left: 12px;" />
            תהליך העבודה שלנו
          </h2>
          <p class="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
            תהליך מובנה ומקצועי שמבטיח תוצאות מעולות
          </p>
        </div>
        
        <div class="grid grid-cols-2 grid-cols-4 gap-6">
          ${[
            { step: 1, title: "ניתוח צרכים", desc: "בדיקה מעמיקה של הדרישות והמטרות שלכם", icon: "https://img.icons8.com/3d-fluency/94/bullseye.png" },
            { step: 2, title: "תכנון אסטרטגי", desc: "עיצוב תוכנית עבודה מותאמת אישית", icon: "https://img.icons8.com/3d-fluency/94/idea.png" },
            { step: 3, title: "ביצוע מקצועי", desc: "יישום הפתרון ברמה הגבוהה ביותר", icon: "https://img.icons8.com/3d-fluency/94/gear.png" },
            { step: 4, title: "מעקב ותמיכה", desc: "ליווי מתמשך ושיפורים נוספים", icon: "https://img.icons8.com/3d-fluency/94/rocket.png" }
          ].map((process, index) => `
            <div class="card-${styleClass} text-center p-6 animate-scale-in animate-delay-${index + 1}">
              <div style="position: relative; margin-bottom: 1.5rem;">
                <div class="icon-${styleClass} mx-auto w-12 h-12 flex items-center justify-center">
                  <img src="${process.icon}" alt="${process.title}" style="width: 24px; height: 24px;" />
                </div>
                <div style="position: absolute; top: -0.5rem; right: -0.5rem; width: 1.5rem; height: 1.5rem; background: #facc15; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: black; font-weight: bold; font-size: 0.75rem;">
                  ${process.step}
                </div>
              </div>
              <h3 class="typography-${typographyClass} text-lg font-bold mb-3 text-white">
                ${process.title}
              </h3>
              <p class="typography-body text-gray-300 leading-relaxed text-sm">
                ${process.desc}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section-standard">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="typography-${typographyClass} text-4xl text-5xl font-black mb-6 text-white">
            מה הלקוחות שלנו אומרים
          </h2>
          <p class="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
            עדויות אמיתיות מלקוחות מרוצים
          </p>
        </div>
        
        <div class="grid grid-cols-3 gap-6">
          ${(content?.sections?.testimonials || [
            { name: "דני כהן", role: "מנהל עסק", content: `השירות של ${businessName} פשוט מעולה! הצוות המקצועי והיחס האישי עשו את כל ההבדל.` },
            { name: "שרה לוי", role: "יזמת", content: `עבדנו עם ${businessName} על מספר פרויקטים והתוצאות תמיד מעולות. מקצועיות ברמה אחרת!` },
            { name: "מיכל רוזן", role: "בעלת חנות", content: "הליווי והתמיכה שקיבלתי היו פשוט מדהימים. השירות החרג מכל הציפיות!" }
          ]).map((testimonial, index) => `
            <div class="card-${styleClass} p-6 animate-scale-in animate-delay-${index + 1}">
              <div style="margin-bottom: 1rem;">
                ${[...Array(5)].map(() => '<img src="https://img.icons8.com/3d-fluency/94/star.png" alt="star" style="width: 16px; height: 16px; display: inline-block;" />').join('')}
              </div>
              
              <img src="https://img.icons8.com/3d-fluency/94/quote-left.png" alt="quote" style="width: 24px; height: 24px; margin-bottom: 12px; display: block;" />
              
              <p class="typography-body leading-relaxed text-white mb-4 text-sm" style="font-style: italic;">
                "${testimonial.content}"
              </p>
              
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="width: 2.5rem; height: 2.5rem; border-radius: 50%; background: linear-gradient(45deg, #3b82f6, #8b5cf6); display: flex; align-items: center; justify-content: center;">
                  <img src="https://img.icons8.com/3d-fluency/94/user.png" alt="user" style="width: 20px; height: 20px;" />
                </div>
                <div>
                  <p class="typography-${typographyClass} font-bold text-white text-sm">
                    ${testimonial.name}
                  </p>
                  ${testimonial.role ? `
                    <p class="typography-body text-xs text-gray-400">
                      ${testimonial.role}
                    </p>
                  ` : ''}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-standard">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="typography-${typographyClass} text-4xl text-5xl font-black mb-6 text-white">
            שאלות נפוצות
          </h2>
          <p class="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
            תשובות לשאלות הנפוצות ביותר
          </p>
        </div>
        
        <div class="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          ${[
            { question: "כמה זמן לוקח התהליך?", answer: "התהליך נע בין שבוע לחודש, תלוי במורכבות הפרויקט והדרישות הספציפיות שלכם." },
            { question: "איך הגישה שלכם שונה?", answer: "אנחנו מתמחים בפתרונות מותאמים אישית ובליווי צמוד לאורך כל התהליך." },
            { question: "מה כלול במחיר?", answer: "המחיר כולל את כל השירותים הבסיסיים, ליווי מלא ותמיכה לאחר הפרויקט." },
            { question: "איך מתחילים?", answer: "פשוט צרו קשר איתנו לייעוץ ראשוני חינמי ובחינת האפשרויות המתאימות לכם." }
          ].map((faq, index) => `
            <div class="card-${styleClass} p-6 animate-slide-up animate-delay-${index + 1}">
              <h3 class="typography-${typographyClass} text-lg font-bold mb-3 text-white">
                ${faq.question}
              </h3>
              <p class="typography-body text-gray-300 leading-relaxed text-sm">
                ${faq.answer}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Enhanced CTA Section -->
    <section class="section-standard" style="position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0), rgba(0,0,0,0.2));"></div>
      
      <div class="container mx-auto max-w-6xl text-center" style="position: relative; z-index: 10;">
        <div class="max-w-4xl mx-auto">
          <h2 class="typography-${typographyClass} text-4xl text-5xl font-black mb-8 text-white animate-slide-up">
            ${content?.contactTitle || 'מוכנים להתחיל?'}
          </h2>
          
          <div class="card-${styleClass} p-6 mb-8 animate-slide-up animate-delay-1">
            <p class="typography-body text-lg text-xl text-white leading-relaxed">
              בואו ניצור יחד משהו מדהים שיקדם את העסק שלכם
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 animate-slide-up animate-delay-2">
            <div class="card-${styleClass} p-4">
              <div style="display: flex; align-items: center; gap: 0.75rem; justify-content: center;">
                <img src="https://img.icons8.com/3d-fluency/94/phone.png" alt="phone" style="width: 20px; height: 20px;" />
                <span class="typography-body text-white font-medium">050-1234567</span>
              </div>
            </div>
            <div class="card-${styleClass} p-4">
              <div style="display: flex; align-items: center; gap: 0.75rem; justify-content: center;">
                <img src="https://img.icons8.com/3d-fluency/94/email.png" alt="email" style="width: 20px; height: 20px;" />
                <span class="typography-body text-white font-medium">info@business.co.il</span>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center; margin-bottom: 2rem;" class="animate-slide-up animate-delay-3">
            <a href="tel:0501234567" class="btn-base btn-${styleClass}">
              <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
              צור קשר עכשיו
            </a>
            <a href="#" class="btn-base btn-${styleClass}">
              <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
              קבל הצעת מחיר
            </a>
          </div>

          <!-- Enhanced Trust Badges -->
          <div class="grid grid-cols-3 gap-4 max-w-3xl mx-auto animate-slide-up animate-delay-4">
            ${[
              { icon: 'https://img.icons8.com/3d-fluency/94/security-checked.png', title: 'מוגן ומאובטח', desc: 'ביטחון מלא' },
              { icon: 'https://img.icons8.com/3d-fluency/94/clock.png', title: 'מענה מהיר', desc: 'תוך 24 שעות' },
              { icon: 'https://img.icons8.com/3d-fluency/94/heart.png', title: 'ללא התחייבות', desc: 'ייעוץ חינם' }
            ].map((badge, index) => `
              <div class="card-${styleClass} p-4 text-center">
                <div class="icon-${styleClass} mx-auto mb-2 w-8 h-8 flex items-center justify-center">
                  <img src="${badge.icon}" alt="${badge.title}" style="width: 20px; height: 20px;" />
                </div>
                <h3 class="typography-${typographyClass} font-semibold text-white mb-1 text-sm">
                  ${badge.title}
                </h3>
                <p class="typography-body text-gray-300 text-xs">
                  ${badge.desc}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="section-standard" style="background: rgba(0,0,0,0.5); backdrop-filter: blur(16px);">
      <div class="container mx-auto max-w-4xl text-center">
        <h3 class="text-2xl font-bold text-white mb-4">${businessName}</h3>
        <p class="text-gray-400 mb-8">© 2024 כל הזכויות שמורות. בניית אתרים מקצועית ואמינה.</p>
        <div style="display: flex; justify-content: center; gap: 2rem; color: #9ca3af;">
          <span>טלפון: 050-1234567</span>
          <span>אימייל: info@business.co.il</span>
        </div>
      </div>
    </footer>`;
  };

  return `
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName}</title>
    <style>
        ${getCSSStyles()}
    </style>
</head>
<body class="${getStyleClass()}" style="position: relative; overflow-y: auto; overflow-x: hidden;">
    <!-- Hero Section -->
    <section class="section-hero">
        <div class="container text-center" style="position: relative; z-index: 2;">
            <h1 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'hero'} text-5xl font-black mb-8 text-white">${businessName}</h1>
            <div class="card-${formData?.heroStyle || '3d'} p-8 mb-12">
                <p class="typography-body text-lg text-xl text-white leading-relaxed">${subheadline}</p>
            </div>
            <a href="#contact" class="btn-base btn-${formData?.heroStyle || '3d'}">
                <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
                ${ctaText}
            </a>
        </div>
    </section>

    ${generateAllSections()}
</body>
</html>`;
};
