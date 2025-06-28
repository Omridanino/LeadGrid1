
import { AdvancedPreviewStyles } from "./AdvancedPreviewStyles";
import { Advanced3DAnimations } from "./Advanced3DAnimations";

export const PreviewStyles = () => (
  <>
    <AdvancedPreviewStyles />
    <Advanced3DAnimations />
    <style>{`
      /* Core Styles */
      .style-3d {
        position: relative;
        background: linear-gradient(135deg, #000000 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #000000 100%);
        min-height: 100vh;
        overflow-x: hidden;
      }

      .style-3d-section {
        background: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(75,0,130,0.3) 50%, rgba(0,0,0,0.95) 100%);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }

      .style-geometric {
        background: linear-gradient(45deg, #1a1a2e 0%, #16213e 25%, #0f0f23 50%, #e94560 75%, #0f0f23 100%);
      }

      .style-glass {
        background: linear-gradient(135deg, rgba(30,58,138,0.8) 0%, rgba(91,33,182,0.6) 50%, rgba(30,58,138,0.8) 100%);
        backdrop-filter: blur(40px);
      }

      .style-metal {
        background: linear-gradient(135deg, #2d3748 0%, #4a5568 25%, #718096 50%, #a0aec0 75%, #2d3748 100%);
      }

      .style-image {
        background: linear-gradient(135deg, rgba(88,28,135,0.9) 0%, rgba(124,58,237,0.7) 50%, rgba(88,28,135,0.9) 100%);
      }

      /* Glass Effects */
      .glass-card {
        background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.2);
        box-shadow: 
          0 8px 32px rgba(0,0,0,0.3),
          inset 0 1px 0 rgba(255,255,255,0.2);
      }

      /* Animations */
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
        50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      .animate-pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .style-3d-section {
          padding: 3rem 0;
        }
      }
    `}</style>
  </>
);
