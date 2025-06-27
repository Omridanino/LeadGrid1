
export const AdvancedPreviewStyles = () => (
  <style>{`
    /* === LIQUID GLASS VARIATIONS === */
    
    /* Liquid Classic */
    .liquid-classic {
      background: radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.8) 0%, rgba(34, 211, 238, 0.6) 50%, rgba(168, 85, 247, 0.7) 100%);
    }
    .liquid-orb-floating {
      background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4), rgba(34, 211, 238, 0.6));
      animation: liquidFloatGentle 12s ease-in-out infinite;
    }
    
    /* Liquid Energetic */
    .liquid-energetic {
      background: radial-gradient(circle at 20% 60%, rgba(147, 51, 234, 0.9) 0%, rgba(236, 72, 153, 0.8) 50%, rgba(59, 130, 246, 0.7) 100%);
    }
    .liquid-explosions {
      background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.8), rgba(147, 51, 234, 0.9));
      animation: liquidExplode 8s ease-in-out infinite;
    }
    
    /* Liquid Mystic */
    .liquid-mystic {
      background: radial-gradient(circle at 40% 20%, rgba(20, 184, 166, 0.8) 0%, rgba(79, 70, 229, 0.7) 50%, rgba(139, 92, 246, 0.8) 100%);
    }
    .liquid-fog {
      background: radial-gradient(circle at 60% 40%, rgba(20, 184, 166, 0.5), rgba(79, 70, 229, 0.6));
      animation: liquidMysticFlow 15s ease-in-out infinite;
    }
    
    /* Liquid Ocean */
    .liquid-ocean {
      background: radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.9) 0%, rgba(59, 130, 246, 0.8) 30%, rgba(30, 64, 175, 0.9) 100%);
    }
    .liquid-waves-ocean {
      background: linear-gradient(45deg, rgba(6, 182, 212, 0.6), rgba(30, 64, 175, 0.7));
      animation: liquidOceanWave 10s ease-in-out infinite;
    }
    
    /* Liquid Lava */
    .liquid-lava {
      background: radial-gradient(circle at 30% 70%, rgba(239, 68, 68, 0.9) 0%, rgba(251, 146, 60, 0.8) 50%, rgba(220, 38, 38, 0.9) 100%);
    }
    .liquid-lava-flow {
      background: radial-gradient(circle at 40% 60%, rgba(251, 146, 60, 0.8), rgba(220, 38, 38, 0.9));
      animation: liquidLavaFlow 7s ease-in-out infinite;
    }
    
    /* Liquid Galactic */
    .liquid-galactic {
      background: radial-gradient(circle at 60% 30%, rgba(139, 92, 246, 0.9) 0%, rgba(79, 70, 229, 0.8) 40%, rgba(30, 27, 75, 0.9) 100%);
    }
    .liquid-stars {
      background: radial-gradient(circle at 70% 20%, rgba(139, 92, 246, 0.7), rgba(79, 70, 229, 0.8));
      animation: liquidGalacticSpin 20s linear infinite;
    }
    
    /* Liquid Neon */
    .liquid-neon {
      background: radial-gradient(circle at 40% 50%, rgba(236, 72, 153, 0.9) 0%, rgba(168, 85, 247, 0.8) 50%, rgba(34, 211, 238, 0.9) 100%);
    }
    .liquid-neon-lines {
      background: linear-gradient(45deg, rgba(236, 72, 153, 0.8), rgba(34, 211, 238, 0.8));
      animation: liquidNeonPulse 5s ease-in-out infinite;
    }
    
    /* Liquid Crystal */
    .liquid-crystal {
      background: conic-gradient(from 45deg, rgba(59, 130, 246, 0.8), rgba(168, 85, 247, 0.8), rgba(34, 211, 238, 0.8), rgba(236, 72, 153, 0.8), rgba(59, 130, 246, 0.8));
    }
    .liquid-prisms {
      background: conic-gradient(from 90deg, rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.7), rgba(34, 211, 238, 0.6));
      animation: liquidPrismaticSpin 12s linear infinite;
    }
    
    /* Liquid Gold */
    .liquid-gold {
      background: radial-gradient(circle at 50% 40%, rgba(245, 158, 11, 0.9) 0%, rgba(217, 119, 6, 0.8) 50%, rgba(180, 83, 9, 0.9) 100%);
    }
    .liquid-gold-drops {
      background: radial-gradient(circle at 30% 50%, rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 0.9));
      animation: liquidGoldShimmer 8s ease-in-out infinite;
    }
    
    /* Liquid Wind */
    .liquid-wind {
      background: radial-gradient(circle at 70% 30%, rgba(203, 213, 225, 0.8) 0%, rgba(148, 163, 184, 0.7) 50%, rgba(100, 116, 139, 0.8) 100%);
    }
    .liquid-air-currents {
      background: linear-gradient(60deg, rgba(203, 213, 225, 0.6), rgba(148, 163, 184, 0.7));
      animation: liquidWindFlow 14s ease-in-out infinite;
    }
    
    /* Liquid Ice */
    .liquid-ice {
      background: radial-gradient(circle at 40% 60%, rgba(219, 234, 254, 0.9) 0%, rgba(147, 197, 253, 0.8) 50%, rgba(59, 130, 246, 0.9) 100%);
    }
    .liquid-ice-crystals {
      background: radial-gradient(circle at 50% 30%, rgba(219, 234, 254, 0.7), rgba(147, 197, 253, 0.8));
      animation: liquidIceFreeze 16s ease-in-out infinite;
    }
    
    /* Liquid Light */
    .liquid-light {
      background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.9) 0%, rgba(249, 250, 251, 0.8) 50%, rgba(243, 244, 246, 0.9) 100%);
    }
    .liquid-light-beams {
      background: linear-gradient(45deg, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.9));
      animation: liquidLightRays 6s ease-in-out infinite;
    }
    
    /* Liquid Shadow */
    .liquid-shadow {
      background: radial-gradient(circle at 30% 70%, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.9) 50%, rgba(55, 65, 81, 0.95) 100%);
    }
    .liquid-shadows {
      background: radial-gradient(circle at 60% 40%, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.9));
      animation: liquidShadowDance 18s ease-in-out infinite;
    }
    
    /* Liquid Floral */
    .liquid-floral {
      background: radial-gradient(circle at 40% 30%, rgba(34, 197, 94, 0.8) 0%, rgba(168, 85, 247, 0.7) 50%, rgba(236, 72, 153, 0.8) 100%);
    }
    .liquid-petals {
      background: radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.6), rgba(168, 85, 247, 0.7));
      animation: liquidFloralBloom 12s ease-in-out infinite;
    }
    
    /* Liquid Digital */
    .liquid-digital {
      background: radial-gradient(circle at 60% 40%, rgba(34, 211, 238, 0.9) 0%, rgba(59, 130, 246, 0.8) 50%, rgba(147, 51, 234, 0.9) 100%);
    }
    .liquid-pixels {
      background: linear-gradient(90deg, rgba(34, 211, 238, 0.7), rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.7));
      animation: liquidDigitalFlow 4s linear infinite;
    }

    /* === GEOMETRIC VARIATIONS === */
    
    /* Geometric 3D */
    .geometric-3d {
      background: linear-gradient(45deg, #1a1a2e 0%, #16213e 25%, #0f0f23 50%, #e94560 75%, #0f0f23 100%);
      transform-style: preserve-3d;
    }
    .geometric-cubes {
      width: 100px;
      height: 100px;
      background: linear-gradient(45deg, rgba(233, 69, 96, 0.8), rgba(78, 205, 196, 0.8));
      transform: rotateX(45deg) rotateY(45deg);
      animation: geometric3DSpin 15s linear infinite;
    }
    
    /* Geometric Kaleidoscope */
    .geometric-kaleidoscope {
      background: conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #ff6b6b);
    }
    .geometric-mirrors {
      background: conic-gradient(from 45deg, rgba(255, 107, 107, 0.8), rgba(78, 205, 196, 0.8), rgba(69, 183, 209, 0.8));
      animation: geometricKaleidoscopeSpin 8s linear infinite;
    }
    
    /* Geometric Minimal */
    .geometric-minimal {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
    }
    .geometric-lines-clean {
      background: linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: geometricMinimalMove 20s linear infinite;
    }
    
    /* Geometric Organic */
    .geometric-organic {
      background: radial-gradient(ellipse at 30% 70%, rgba(34, 197, 94, 0.8), rgba(22, 163, 74, 0.9), rgba(21, 128, 61, 0.8));
    }
    .geometric-nature {
      background: radial-gradient(ellipse at 60% 30%, rgba(34, 197, 94, 0.6), rgba(22, 163, 74, 0.7));
      animation: geometricOrganicGrow 12s ease-in-out infinite;
    }
    
    /* Geometric Cyber */
    .geometric-cyber {
      background: linear-gradient(45deg, #0f172a 0%, #1e293b 25%, #334155 50%, #06b6d4 75%, #0f172a 100%);
    }
    .geometric-grid {
      background-image: 
        linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px);
      background-size: 30px 30px;
      animation: geometricCyberPulse 6s ease-in-out infinite;
    }
    
    /* Geometric Crystal */
    .geometric-crystal {
      background: conic-gradient(from 30deg, rgba(219, 234, 254, 0.9), rgba(147, 197, 253, 0.8), rgba(59, 130, 246, 0.9));
    }
    .geometric-diamonds {
      background: conic-gradient(from 60deg, rgba(219, 234, 254, 0.7), rgba(147, 197, 253, 0.8));
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      animation: geometricCrystalShine 10s ease-in-out infinite;
    }
    
    /* Geometric Metallic */
    .geometric-metallic {
      background: linear-gradient(135deg, #374151 0%, #6b7280 25%, #9ca3af 50%, #d1d5db 75%, #374151 100%);
    }
    .geometric-metal {
      background: linear-gradient(45deg, rgba(55, 65, 81, 0.8), rgba(156, 163, 175, 0.8));
      animation: geometricMetalReflect 8s ease-in-out infinite;
    }
    
    /* Geometric Psychedelic */
    .geometric-psychedelic {
      background: conic-gradient(from 0deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607, #ff006e);
    }
    .geometric-spiral {
      background: conic-gradient(from 90deg, rgba(255, 0, 110, 0.8), rgba(131, 56, 236, 0.8), rgba(58, 134, 255, 0.8));
      animation: geometricPsychedelicSpin 4s linear infinite;
    }
    
    /* Geometric Astronomical */
    .geometric-astronomical {
      background: radial-gradient(circle at 40% 40%, rgba(30, 27, 75, 0.9) 0%, rgba(79, 70, 229, 0.8) 40%, rgba(139, 92, 246, 0.9) 100%);
    }
    .geometric-planets {
      background: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.8), rgba(79, 70, 229, 0.9));
      animation: geometricOrbitalMotion 25s linear infinite;
    }
    
    /* Geometric Abstract */
    .geometric-abstract {
      background: linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
    }
    .geometric-chaos {
      background: linear-gradient(60deg, rgba(102, 126, 234, 0.7), rgba(245, 87, 108, 0.8));
      animation: geometricAbstractChaos 6s ease-in-out infinite;
    }
    
    /* === ANIMATIONS === */
    
    @keyframes liquidFloatGentle {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(180deg); }
    }
    
    @keyframes liquidExplode {
      0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
      25% { transform: scale(1.5) rotate(90deg); opacity: 0.4; }
      50% { transform: scale(0.8) rotate(180deg); opacity: 1; }
      75% { transform: scale(1.2) rotate(270deg); opacity: 0.6; }
    }
    
    @keyframes liquidMysticFlow {
      0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 0.7; }
      33% { transform: translateX(50px) translateY(-30px) rotate(120deg); opacity: 0.4; }
      66% { transform: translateX(-30px) translateY(40px) rotate(240deg); opacity: 0.8; }
    }
    
    @keyframes liquidOceanWave {
      0%, 100% { transform: translateY(0px) scaleX(1); }
      25% { transform: translateY(-20px) scaleX(1.1); }
      50% { transform: translateY(10px) scaleX(0.9); }
      75% { transform: translateY(-15px) scaleX(1.05); }
    }
    
    @keyframes liquidLavaFlow {
      0%, 100% { transform: translateY(0px) scaleY(1); }
      50% { transform: translateY(20px) scaleY(1.3); }
    }
    
    @keyframes liquidGalacticSpin {
      0% { transform: rotate(0deg) scale(1); }
      100% { transform: rotate(360deg) scale(1.1); }
    }
    
    @keyframes liquidNeonPulse {
      0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 20px rgba(236, 72, 153, 0.6); }
      50% { transform: scale(1.1); opacity: 0.8; box-shadow: 0 0 40px rgba(236, 72, 153, 0.9); }
    }
    
    @keyframes liquidPrismaticSpin {
      0% { transform: rotate(0deg); filter: hue-rotate(0deg); }
      100% { transform: rotate(360deg); filter: hue-rotate(360deg); }
    }
    
    @keyframes liquidGoldShimmer {
      0%, 100% { transform: translateX(0px); opacity: 0.8; }
      50% { transform: translateX(30px); opacity: 1; }
    }
    
    @keyframes liquidWindFlow {
      0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
      25% { transform: translateX(40px) translateY(-20px) rotate(90deg); }
      50% { transform: translateX(20px) translateY(30px) rotate(180deg); }
      75% { transform: translateX(-20px) translateY(-10px) rotate(270deg); }
    }
    
    @keyframes liquidIceFreeze {
      0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
      50% { transform: scale(1.1) rotate(180deg); opacity: 0.7; }
    }
    
    @keyframes liquidLightRays {
      0%, 100% { transform: translateX(0px) rotate(0deg); opacity: 0.8; }
      50% { transform: translateX(50px) rotate(180deg); opacity: 1; }
    }
    
    @keyframes liquidShadowDance {
      0%, 100% { transform: translateY(0px) scaleX(1); opacity: 0.6; }
      50% { transform: translateY(-40px) scaleX(1.2); opacity: 0.9; }
    }
    
    @keyframes liquidFloralBloom {
      0%, 100% { transform: scale(1) rotate(0deg); }
      25% { transform: scale(1.2) rotate(90deg); }
      50% { transform: scale(0.9) rotate(180deg); }
      75% { transform: scale(1.1) rotate(270deg); }
    }
    
    @keyframes liquidDigitalFlow {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes geometric3DSpin {
      0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
      100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
    }
    
    @keyframes geometricKaleidoscopeSpin {
      0% { transform: rotate(0deg) scale(1); }
      100% { transform: rotate(360deg) scale(1.1); }
    }
    
    @keyframes geometricMinimalMove {
      0% { transform: translateX(0px); }
      100% { transform: translateX(50px); }
    }
    
    @keyframes geometricOrganicGrow {
      0%, 100% { transform: scale(1) rotate(0deg); }
      50% { transform: scale(1.3) rotate(180deg); }
    }
    
    @keyframes geometricCyberPulse {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    
    @keyframes geometricCrystalShine {
      0%, 100% { transform: rotate(0deg) scale(1); filter: brightness(1); }
      50% { transform: rotate(180deg) scale(1.1); filter: brightness(1.5); }
    }
    
    @keyframes geometricMetalReflect {
      0%, 100% { transform: scaleX(1); filter: brightness(1); }
      50% { transform: scaleX(1.1); filter: brightness(1.3); }
    }
    
    @keyframes geometricPsychedelicSpin {
      0% { transform: rotate(0deg); filter: hue-rotate(0deg); }
      100% { transform: rotate(360deg); filter: hue-rotate(360deg); }
    }
    
    @keyframes geometricOrbitalMotion {
      0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
    }
    
    @keyframes geometricAbstractChaos {
      0%, 100% { transform: rotate(0deg) scale(1) skewX(0deg); }
      25% { transform: rotate(90deg) scale(1.1) skewX(10deg); }
      50% { transform: rotate(180deg) scale(0.9) skewX(-10deg); }
      75% { transform: rotate(270deg) scale(1.05) skewX(5deg); }
    }

    /* Color Schemes */
    .blue-cyan-gradient { background: linear-gradient(135deg, #3b82f6, #06b6d4); }
    .electric-purple-gradient { background: linear-gradient(135deg, #8b5cf6, #ec4899); }
    .mystic-teal-gradient { background: linear-gradient(135deg, #14b8a6, #6366f1); }
    .ocean-deep-gradient { background: linear-gradient(135deg, #0ea5e9, #1e40af); }
    .lava-red-gradient { background: linear-gradient(135deg, #ef4444, #dc2626); }
    .galaxy-purple-gradient { background: linear-gradient(135deg, #8b5cf6, #4f46e5); }
    .neon-pink-gradient { background: linear-gradient(135deg, #ec4899, #06b6d4); }
    .crystal-rainbow-gradient { background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4); }
    .gold-platinum-gradient { background: linear-gradient(135deg, #f59e0b, #e5e7eb); }
    .wind-silver-gradient { background: linear-gradient(135deg, #e5e7eb, #9ca3af); }
    .ice-blue-gradient { background: linear-gradient(135deg, #dbeafe, #3b82f6); }
    .light-white-gradient { background: linear-gradient(135deg, #ffffff, #f3f4f6); }
    .shadow-black-gradient { background: linear-gradient(135deg, #111827, #374151); }
    .floral-spring-gradient { background: linear-gradient(135deg, #22c55e, #a855f7); }
    .digital-matrix-gradient { background: linear-gradient(135deg, #06b6d4, #8b5cf6); }
    
    /* Responsive Adjustments */
    @media (max-width: 768px) {
      .liquid-orb, .geometric-shape {
        width: 80px;
        height: 80px;
      }
      
      .geometric-cubes {
        width: 60px;
        height: 60px;
      }
      
      .liquid-hero-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
  `}</style>
);
