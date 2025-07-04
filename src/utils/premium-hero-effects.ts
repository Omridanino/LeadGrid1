// Premium hero effects for different templates
export const getPremiumHeroEffects = (templateId: string): string => {
  switch (templateId) {
    case 'tech-consultant-pro':
      return `
        <!-- Floating glass panels -->
        ${Array.from({length: 6}, (_, i) => `
            <div class="absolute backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl" style="
                width: ${80 + i * 20}px; 
                height: ${60 + i * 15}px; 
                left: ${10 + i * 15}%; 
                top: ${15 + (i % 3) * 25}%; 
                transform: rotate(${i * 30}deg);
                animation: float ${15 + i * 2}s infinite ease-in-out;
                animation-delay: ${i * 2}s;
                opacity: 0.1;
            "></div>
        `).join('')}`;
        
    case 'neon-academy-pro':
      return `
        <!-- Neon city skyline -->
        <div class="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/50 to-transparent">
            ${Array.from({length: 20}, (_, i) => `
                <div class="absolute bg-purple-600 opacity-30" style="
                    width: ${20 + Math.random() * 30}px;
                    height: ${100 + Math.random() * 100}px;
                    left: ${i * 5}%;
                    bottom: 0;
                    animation: neonGlow 3s infinite ease-in-out;
                    animation-delay: ${i * 0.1}s;
                "></div>
            `).join('')}
        </div>`;
        
    case 'blockchain-tech-pro':
      return `
        <!-- Particle network -->
        <div class="absolute inset-0 opacity-30">
            ${Array.from({length: 50}, (_, i) => `
                <div class="absolute w-1 h-1 bg-blue-400 rounded-full" style="
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: particles 4s infinite ease-in-out;
                    animation-delay: ${i * 0.1}s;
                "></div>
            `).join('')}
        </div>`;
        
    case 'creative-3d-pro':
      return `
        <!-- 3D clay shapes -->
        ${Array.from({length: 8}, (_, i) => `
            <div class="absolute rounded-full opacity-80" style="
                width: ${60 + i * 10}px;
                height: ${60 + i * 10}px;
                background: linear-gradient(135deg, ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#f38ba8', '#a8e6cf'][i]}, ${['#ff8e8e', '#6eddd6', '#67c3d7', '#a8d4ba', '#fed85d', '#ffb3f5', '#f5a3c7', '#b8ebd5'][i]});
                left: ${5 + i * 11}%;
                top: ${10 + (i % 4) * 20}%;
                box-shadow: 0 ${10 + i * 2}px ${20 + i * 3}px rgba(0,0,0,0.1);
                animation: float3d ${8 + i}s infinite ease-in-out;
                animation-delay: ${i * 0.5}s;
            "></div>
        `).join('')}`;
        
    case 'authkit-tech-pro':
      return `
        <!-- Matrix rain effect -->
        <div class="absolute inset-0 opacity-20">
            ${Array.from({length: 50}, (_, i) => `
                <div class="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent" style="
                    left: ${i * 2}%;
                    animation: matrixRain 3s infinite linear;
                    animation-delay: ${i * 0.3}s;
                "></div>
            `).join('')}
        </div>`;
        
    default:
      return '';
  }
};