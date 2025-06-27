
import { AdvancedPreviewStyles } from './AdvancedPreviewStyles';

export const PreviewStyles = () => (
  <>
    <AdvancedPreviewStyles />
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
        
        /* Liquid Glass Colors */
        --liquid-blue-400: #60a5fa;
        --liquid-blue-500: #3b82f6;
        --liquid-blue-600: #2563eb;
        --liquid-cyan-400: #22d3ee;
        --liquid-cyan-500: #06b6d4;
        --liquid-purple-400: #c084fc;
        --liquid-purple-500: #a855f7;
        
        /* Cinematic Image Colors */
        --cinematic-gold: #d4af37;
        --cinematic-silver: #c0c0c0;
        --cinematic-bronze: #cd7f32;
        --cinematic-deep: #1a1a2e;
        
        /* Unique Style Gradients */
        --gradient-3d: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #000000 100%);
        --gradient-geometric: linear-gradient(45deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #f9ca24 75%, #ff6b6b 100%);
        --gradient-liquid-glass: radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.8) 0%, rgba(34, 211, 238, 0.6) 25%, rgba(168, 85, 247, 0.8) 50%, rgba(59, 130, 246, 0.9) 100%);
        --gradient-metal: linear-gradient(135deg, #2c1810 0%, #8b7355 25%, #c9aa7c 50%, #f4e4bc 75%, #8b7355 100%);
        --gradient-image-depth: linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(212, 175, 55, 0.1) 25%, rgba(192, 192, 192, 0.1) 50%, rgba(26, 26, 46, 0.95) 100%);
        
        /* Advanced Shadows */
        --shadow-3d: 0 25px 50px rgba(0,0,0,0.8), 0 12px 25px rgba(59, 130, 246, 0.3);
        --shadow-geometric: 0 0 0 1px rgba(255, 107, 107, 0.3), 0 15px 35px rgba(255, 107, 107, 0.2);
        --shadow-liquid-glass: 0 20px 40px rgba(59, 130, 246, 0.6), 0 8px 32px rgba(34, 211, 238, 0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        --shadow-metal: 0 12px 24px rgba(139, 115, 85, 0.4), inset 0 1px 0 rgba(244, 228, 188, 0.3);
        --shadow-image-depth: 0 30px 60px rgba(26, 26, 46, 0.8), 0 15px 30px rgba(212, 175, 55, 0.3);
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

      .typography-liquid {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        line-height: 1.4;
        letter-spacing: -0.01em;
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

      /* === LIQUID GLASS STYLE === */
      .style-glass, .bg-liquid-glass {
        background: var(--gradient-liquid-glass);
        background-size: 300% 300%;
        animation: liquidFlow 20s ease infinite;
        position: relative;
        overflow: hidden;
      }

      .liquid-glass-hero {
        background: var(--gradient-liquid-glass);
        background-size: 400% 400%;
        animation: liquidFlow 25s ease infinite;
        position: relative;
        overflow: hidden;
        min-height: 100vh;
        display: flex;
        align-items: center;
      }

      .bg-liquid-glass-alt {
        background: radial-gradient(circle at 70% 20%, rgba(168, 85, 247, 0.7) 0%, rgba(59, 130, 246, 0.8) 50%, rgba(34, 211, 238, 0.6) 100%);
        background-size: 350% 350%;
        animation: liquidFlow 18s ease infinite;
      }

      .bg-liquid-glass-final {
        background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.9) 0%, rgba(168, 85, 247, 0.8) 30%, rgba(34, 211, 238, 0.7) 60%, rgba(59, 130, 246, 0.9) 100%);
        background-size: 400% 400%;
        animation: liquidFlow 22s ease infinite;
      }

      /* Liquid Background Elements */
      .liquid-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
      }

      .liquid-orb {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(59, 130, 246, 0.6));
        backdrop-filter: blur(20px);
        animation: liquidFloat 15s ease-in-out infinite;
      }

      .liquid-orb-hero-1 {
        width: 300px;
        height: 300px;
        top: 10%;
        left: 10%;
        animation-delay: 0s;
      }

      .liquid-orb-hero-2 {
        width: 200px;
        height: 200px;
        top: 60%;
        right: 20%;
        animation-delay: 5s;
      }

      .liquid-orb-hero-3 {
        width: 150px;
        height: 150px;
        top: 20%;
        right: 40%;
        animation-delay: 10s;
      }

      .liquid-orb-hero-4 {
        width: 100px;
        height: 100px;
        bottom: 20%;
        left: 30%;
        animation-delay: 15s;
      }

      .liquid-orb-1, .liquid-orb-2, .liquid-orb-3 {
        width: 200px;
        height: 200px;
        animation-delay: 0s, 8s, 16s;
      }

      .liquid-orb-1 { top: 20%; left: 80%; }
      .liquid-orb-2 { top: 70%; left: 10%; }
      .liquid-orb-3 { top: 40%; right: 15%; }

      /* Liquid Waves */
      .liquid-waves {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .liquid-wave {
        position: absolute;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%);
        border-radius: 50%;
        animation: liquidWave 20s ease-in-out infinite;
      }

      .liquid-wave-1 {
        top: -50%;
        left: -50%;
        animation-delay: 0s;
      }

      .liquid-wave-2 {
        top: -50%;
        right: -50%;
        animation-delay: 7s;
      }

      .liquid-wave-3 {
        bottom: -50%;
        left: -50%;
        animation-delay: 14s;
      }

      /* Liquid Hero Grid */
      .liquid-hero-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      @media (max-width: 1024px) {
        .liquid-hero-grid {
          grid-template-columns: 1fr;
          gap: 3rem;
          text-align: center;
        }
      }

      /* Liquid Components */
      .liquid-status-orb {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        background: rgba(255,255,255,0.15);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 50px;
        padding: 0.75rem 1.5rem;
        margin-bottom: 2rem;
        position: relative;
        overflow: hidden;
      }

      .liquid-pulse {
        position: absolute;
        top: 50%;
        right: 1rem;
        width: 8px;
        height: 8px;
        background: #10b981;
        border-radius: 50%;
        animation: liquidPulse 2s ease-in-out infinite;
      }

      .liquid-title-glow {
        background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #c084fc 100%);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: liquidFlow 8s ease infinite;
        text-shadow: 0 0 40px rgba(96, 165, 250, 0.5);
      }

      .liquid-text-glow {
        text-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
      }

      .liquid-subtitle-flow {
        position: relative;
      }

      .liquid-text-orb {
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(24px);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 2rem;
        padding: 2rem 3rem;
        position: relative;
        overflow: hidden;
      }

      .liquid-text-orb::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
      }

      .liquid-actions-flow {
        display: flex;
        gap: 1.5rem;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
      }

      @media (max-width: 768px) {
        .liquid-actions-flow {
          justify-content: center;
          flex-direction: column;
        }
      }

      .liquid-features-constellation {
        display: flex;
        gap: 2rem;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
      }

      .liquid-feature-orb {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 1rem;
        padding: 1rem;
        min-width: 120px;
        transition: all 0.3s ease;
      }

      .liquid-feature-orb:hover {
        background: rgba(255,255,255,0.15);
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
      }

      .liquid-feature-glow {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.2), rgba(59, 130, 246, 0.4));
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(8px);
      }

      /* Liquid Visual Showcase */
      .liquid-visual-flow {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .liquid-showcase-orb {
        position: relative;
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .liquid-showcase-rings {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .liquid-ring {
        position: absolute;
        border: 2px solid rgba(255,255,255,0.2);
        border-radius: 50%;
        animation: liquidRing 10s linear infinite;
      }

      .liquid-ring-1 {
        width: 100%;
        height: 100%;
        animation-delay: 0s;
      }

      .liquid-ring-2 {
        width: 80%;
        height: 80%;
        top: 10%;
        left: 10%;
        animation-delay: 3s;
      }

      .liquid-ring-3 {
        width: 60%;
        height: 60%;
        top: 20%;
        left: 20%;
        animation-delay: 6s;
      }

      .liquid-center-orb {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(59, 130, 246, 0.8));
        backdrop-filter: blur(20px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        animation: liquidFloat 8s ease-in-out infinite;
      }

      /* Liquid Stats Bubbles */
      .liquid-stats-bubbles {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .liquid-stat-bubble {
        position: absolute;
        animation: liquidStatFloat 12s ease-in-out infinite;
      }

      .liquid-bubble-top-left {
        top: 10%;
        left: 10%;
        animation-delay: 0s;
      }

      .liquid-bubble-top-right {
        top: 10%;
        right: 10%;
        animation-delay: 3s;
      }

      .liquid-bubble-bottom-left {
        bottom: 10%;
        left: 10%;
        animation-delay: 6s;
      }

      .liquid-bubble-bottom-right {
        bottom: 10%;
        right: 10%;
        animation-delay: 9s;
      }

      .liquid-stat-glow {
        background: rgba(255,255,255,0.12);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 1rem;
        padding: 1rem;
        text-align: center;
        min-width: 80px;
      }

      /* Liquid Cards and Components */
      .card-liquid-glass {
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(24px);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 1.5rem;
        box-shadow: var(--shadow-liquid-glass);
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }

      .card-liquid-glass:hover {
        background: rgba(255,255,255,0.15);
        transform: translateY(-8px);
        box-shadow: 0 25px 50px rgba(59, 130, 246, 0.7), 0 12px 25px rgba(34, 211, 238, 0.5);
      }

      .btn-liquid-glass {
        background: rgba(255,255,255,0.15);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.25);
        color: white;
        box-shadow: var(--shadow-liquid-glass);
        position: relative;
        overflow: hidden;
      }

      .btn-liquid-glass::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        transition: left 0.5s ease;
      }

      .btn-liquid-glass:hover::before {
        left: 100%;
      }

      .btn-liquid-glass:hover {
        background: rgba(255,255,255,0.2);
        transform: translateY(-2px);
        box-shadow: 0 20px 40px rgba(59, 130, 246, 0.6);
      }

      .icon-liquid-glass {
        background: radial-gradient(circle, rgba(255,255,255,0.2), rgba(59, 130, 246, 0.4));
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 1rem;
        box-shadow: var(--shadow-liquid-glass);
      }

      /* === IMAGE DEPTH STYLE === */
      .bg-image-depth {
        background: var(--gradient-image-depth);
        position: relative;
        overflow: hidden;
      }

      .bg-image-depth-alt {
        background: linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(212, 175, 55, 0.2) 25%, rgba(192, 192, 192, 0.15) 50%, rgba(26, 26, 46, 0.9) 100%);
      }

      .bg-image-depth-finale {
        background: radial-gradient(circle at 50% 50%, rgba(26, 26, 46, 0.95) 0%, rgba(212, 175, 55, 0.3) 30%, rgba(192, 192, 192, 0.2) 60%, rgba(26, 26, 46, 0.95) 100%);
      }

      .card-image-depth {
        background: rgba(26, 26, 46, 0.8);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(212, 175, 55, 0.3);
        border-radius: 1rem;
        box-shadow: var(--shadow-image-depth);
        position: relative;
        transform: perspective(1000px) rotateX(5deg);
        transition: all 0.3s ease;
      }

      .card-image-depth:hover {
        background: rgba(26, 26, 46, 0.9);
        transform: perspective(1000px) rotateX(0deg) translateY(-10px);
        box-shadow: 0 40px 80px rgba(26, 26, 46, 0.9), 0 20px 40px rgba(212, 175, 55, 0.4);
      }

      .btn-image-depth {
        background: linear-gradient(135deg, rgba(212, 175, 55, 0.9) 0%, rgba(192, 192, 192, 0.8) 100%);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(212, 175, 55, 0.5);
        color: rgba(26, 26, 46, 0.9);
        font-weight: bold;
        box-shadow: var(--shadow-image-depth);
        transform: perspective(500px) rotateX(5deg);
      }

      .btn-image-depth:hover {
        background: linear-gradient(135deg, rgba(212, 175, 55, 1) 0%, rgba(192, 192, 192, 0.9) 100%);
        transform: perspective(500px) rotateX(0deg) translateY(-3px);
        box-shadow: 0 20px 40px rgba(212, 175, 55, 0.5);
      }

      .icon-image-depth {
        background: linear-gradient(135deg, rgba(212, 175, 55, 0.8) 0%, rgba(192, 192, 192, 0.6) 100%);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(212, 175, 55, 0.4);
        border-radius: 1rem;
        box-shadow: var(--shadow-image-depth);
        transform: perspective(300px) rotateX(5deg);
      }

      .cinematic-glow {
        text-shadow: 0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(192, 192, 192, 0.3);
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
        box-shadow: var(--shadow-liquid-glass);
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
        box-shadow: var(--shadow-image-depth);
      }

      /* Animations */
      @keyframes liquidFlow {
        0%, 100% { background-position: 0% 50%; }
        25% { background-position: 100% 25%; }
        50% { background-position: 50% 100%; }
        75% { background-position: 25% 0%; }
      }

      @keyframes liquidFloat {
        0%, 100% { 
          transform: translateY(0px) rotate(0deg);
        }
        25% { 
          transform: translateY(-20px) rotate(90deg);
        }
        50% { 
          transform: translateY(-30px) rotate(180deg);
        }
        75% { 
          transform: translateY(-10px) rotate(270deg);
        }
      }

      @keyframes liquidWave {
        0%, 100% { 
          transform: translateX(0) translateY(0) rotate(0deg);
          opacity: 0.3;
        }
        50% { 
          transform: translateX(50px) translateY(-30px) rotate(180deg);
          opacity: 0.1;
        }
      }

      @keyframes liquidRing {
        0% { 
          transform: rotate(0deg) scale(1);
          opacity: 0.8;
        }
        50% { 
          transform: rotate(180deg) scale(1.1);
          opacity: 0.4;
        }
        100% { 
          transform: rotate(360deg) scale(1);
          opacity: 0.8;
        }
      }

      @keyframes liquidStatFloat {
        0%, 100% { 
          transform: translateY(0px);
        }
        50% { 
          transform: translateY(-15px);
        }
      }

      @keyframes liquidPulse {
        0%, 100% { 
          opacity: 1;
          transform: scale(1);
        }
        50% { 
          opacity: 0.5;
          transform: scale(1.2);
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

        .liquid-hero-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .liquid-features-constellation {
          justify-content: center;
        }

        .liquid-actions-flow {
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
        .card-liquid-glass {
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
  </>
);
