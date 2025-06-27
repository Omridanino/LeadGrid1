
export interface DesignVariation {
  id: number;
  name: string;
  className: string;
  backgroundElements: string[];
  animationStyle: string;
  colorScheme: string;
  uniqueFeatures: string[];
}

export const liquidGlassVariations: DesignVariation[] = [
  {
    id: 1,
    name: "נוזלי קלאסי",
    className: "liquid-classic",
    backgroundElements: ["liquid-orb-floating", "liquid-waves-gentle"],
    animationStyle: "liquid-flow-smooth",
    colorScheme: "blue-cyan-gradient",
    uniqueFeatures: ["floating-bubbles", "gentle-pulse"]
  },
  {
    id: 2,
    name: "נוזלי אנרגטי",
    className: "liquid-energetic",
    backgroundElements: ["liquid-explosions", "liquid-sparks"],
    animationStyle: "liquid-flow-intense",
    colorScheme: "electric-purple-gradient",
    uniqueFeatures: ["energy-bursts", "rapid-pulse"]
  },
  {
    id: 3,
    name: "נוזלי מיסטי",
    className: "liquid-mystic",
    backgroundElements: ["liquid-fog", "liquid-crystals"],
    animationStyle: "liquid-flow-ethereal",
    colorScheme: "mystic-teal-gradient",
    uniqueFeatures: ["floating-crystals", "ethereal-glow"]
  },
  {
    id: 4,
    name: "נוזלי אוקיינוס",
    className: "liquid-ocean",
    backgroundElements: ["liquid-waves-ocean", "liquid-depth"],
    animationStyle: "liquid-flow-oceanic",
    colorScheme: "ocean-deep-gradient",
    uniqueFeatures: ["ocean-depths", "tidal-waves"]
  },
  {
    id: 5,
    name: "נוזלי לבה",
    className: "liquid-lava",
    backgroundElements: ["liquid-lava-flow", "liquid-fire"],
    animationStyle: "liquid-flow-volcanic",
    colorScheme: "lava-red-gradient",
    uniqueFeatures: ["lava-bubbles", "fire-effects"]
  },
  {
    id: 6,
    name: "נוזלי גלקטי",
    className: "liquid-galactic",
    backgroundElements: ["liquid-stars", "liquid-nebula"],
    animationStyle: "liquid-flow-cosmic",
    colorScheme: "galaxy-purple-gradient",
    uniqueFeatures: ["star-field", "nebula-clouds"]
  },
  {
    id: 7,
    name: "נוזלי ניאון",
    className: "liquid-neon",
    backgroundElements: ["liquid-neon-lines", "liquid-cyber"],
    animationStyle: "liquid-flow-cyberpunk",
    colorScheme: "neon-pink-gradient",
    uniqueFeatures: ["neon-trails", "cyber-effects"]
  },
  {
    id: 8,
    name: "נוזלי קריסטל",
    className: "liquid-crystal",
    backgroundElements: ["liquid-prisms", "liquid-reflections"],
    animationStyle: "liquid-flow-prismatic",
    colorScheme: "crystal-rainbow-gradient",
    uniqueFeatures: ["prismatic-effects", "rainbow-reflections"]
  },
  {
    id: 9,
    name: "נוזלי זהב",
    className: "liquid-gold",
    backgroundElements: ["liquid-gold-drops", "liquid-shimmer"],
    animationStyle: "liquid-flow-luxury",
    colorScheme: "gold-platinum-gradient",
    uniqueFeatures: ["gold-particles", "luxury-shimmer"]
  },
  {
    id: 10,
    name: "נוזלי רוח",
    className: "liquid-wind",
    backgroundElements: ["liquid-air-currents", "liquid-wisps"],
    animationStyle: "liquid-flow-airy",
    colorScheme: "wind-silver-gradient",
    uniqueFeatures: ["air-streams", "floating-wisps"]
  },
  {
    id: 11,
    name: "נוזלי קרח",
    className: "liquid-ice",
    backgroundElements: ["liquid-ice-crystals", "liquid-frost"],
    animationStyle: "liquid-flow-frozen",
    colorScheme: "ice-blue-gradient",
    uniqueFeatures: ["ice-formations", "frost-patterns"]
  },
  {
    id: 12,
    name: "נוזלי אור",
    className: "liquid-light",
    backgroundElements: ["liquid-light-beams", "liquid-photons"],
    animationStyle: "liquid-flow-luminous",
    colorScheme: "light-white-gradient",
    uniqueFeatures: ["light-rays", "photon-effects"]
  },
  {
    id: 13,
    name: "נוזלי צל",
    className: "liquid-shadow",
    backgroundElements: ["liquid-shadows", "liquid-darkness"],
    animationStyle: "liquid-flow-shadowy",
    colorScheme: "shadow-black-gradient",
    uniqueFeatures: ["shadow-play", "dark-energy"]
  },
  {
    id: 14,
    name: "נוזלי פרח",
    className: "liquid-floral",
    backgroundElements: ["liquid-petals", "liquid-bloom"],
    animationStyle: "liquid-flow-organic",
    colorScheme: "floral-spring-gradient",
    uniqueFeatures: ["flower-petals", "organic-growth"]
  },
  {
    id: 15,
    name: "נוזלי דיגיטלי",
    className: "liquid-digital",
    backgroundElements: ["liquid-pixels", "liquid-data"],
    animationStyle: "liquid-flow-digital",
    colorScheme: "digital-matrix-gradient",
    uniqueFeatures: ["pixel-effects", "data-streams"]
  }
];

export const geometricVariations: DesignVariation[] = [
  {
    id: 1,
    name: "גיאומטרי תלת מימדי",
    className: "geometric-3d",
    backgroundElements: ["geometric-cubes", "geometric-pyramids"],
    animationStyle: "geometric-rotation-3d",
    colorScheme: "neon-multi-gradient",
    uniqueFeatures: ["3d-shapes", "depth-illusion"]
  },
  {
    id: 2,
    name: "גיאומטרי קליידוסקופ",
    className: "geometric-kaleidoscope",
    backgroundElements: ["geometric-mirrors", "geometric-fractals"],
    animationStyle: "geometric-kaleidoscope-spin",
    colorScheme: "rainbow-symmetric-gradient",
    uniqueFeatures: ["mirror-effects", "fractal-patterns"]
  },
  {
    id: 3,
    name: "גיאומטרי מינימלי",
    className: "geometric-minimal",
    backgroundElements: ["geometric-lines-clean", "geometric-dots"],
    animationStyle: "geometric-clean-motion",
    colorScheme: "monochrome-accent-gradient",
    uniqueFeatures: ["clean-lines", "minimal-elegance"]
  },
  {
    id: 4,
    name: "גיאומטרי אורגני",
    className: "geometric-organic",
    backgroundElements: ["geometric-nature", "geometric-flow"],
    animationStyle: "geometric-natural-flow",
    colorScheme: "nature-earth-gradient",
    uniqueFeatures: ["organic-shapes", "natural-flow"]
  },
  {
    id: 5,
    name: "גיאומטרי קיברנטי",
    className: "geometric-cyber",
    backgroundElements: ["geometric-grid", "geometric-circuit"],
    animationStyle: "geometric-cyber-pulse",
    colorScheme: "cyber-neon-gradient",
    uniqueFeatures: ["circuit-patterns", "cyber-grid"]
  },
  {
    id: 6,
    name: "גיאומטרי קריסטל",
    className: "geometric-crystal",
    backgroundElements: ["geometric-diamonds", "geometric-prisms"],
    animationStyle: "geometric-crystal-shine",
    colorScheme: "crystal-refraction-gradient",
    uniqueFeatures: ["crystal-facets", "light-refraction"]
  },
  {
    id: 7,
    name: "גיאומטרי מתכתי",
    className: "geometric-metallic",
    backgroundElements: ["geometric-metal", "geometric-steel"],
    animationStyle: "geometric-metal-reflection",
    colorScheme: "metallic-chrome-gradient",
    uniqueFeatures: ["metal-shine", "steel-reflections"]
  },
  {
    id: 8,
    name: "גיאומטרי פסיכדלי",
    className: "geometric-psychedelic",
    backgroundElements: ["geometric-spiral", "geometric-hypnotic"],
    animationStyle: "geometric-hypnotic-spin",
    colorScheme: "psychedelic-vivid-gradient",
    uniqueFeatures: ["hypnotic-patterns", "vivid-colors"]
  },
  {
    id: 9,
    name: "גיאומטרי אסטרונומי",
    className: "geometric-astronomical",
    backgroundElements: ["geometric-planets", "geometric-orbits"],
    animationStyle: "geometric-orbital-motion",
    colorScheme: "space-cosmic-gradient",
    uniqueFeatures: ["planetary-motion", "cosmic-patterns"]
  },
  {
    id: 10,
    name: "גיאומטרי אבסטרקטי",
    className: "geometric-abstract",
    backgroundElements: ["geometric-chaos", "geometric-random"],
    animationStyle: "geometric-abstract-chaos",
    colorScheme: "abstract-wild-gradient",
    uniqueFeatures: ["chaotic-beauty", "random-patterns"]
  },
  {
    id: 11,
    name: "גיאומטרי ארט דקו",
    className: "geometric-artdeco",
    backgroundElements: ["geometric-deco", "geometric-vintage"],
    animationStyle: "geometric-deco-elegance",
    colorScheme: "artdeco-gold-gradient",
    uniqueFeatures: ["deco-patterns", "vintage-elegance"]
  },
  {
    id: 12,
    name: "גיאומטרי טכנולוגי",
    className: "geometric-tech",
    backgroundElements: ["geometric-hexagons", "geometric-network"],
    animationStyle: "geometric-tech-pulse",
    colorScheme: "tech-blue-gradient",
    uniqueFeatures: ["tech-patterns", "network-nodes"]
  },
  {
    id: 13,
    name: "גיאומטרי מיסטי",
    className: "geometric-mystical",
    backgroundElements: ["geometric-sacred", "geometric-symbols"],
    animationStyle: "geometric-mystical-glow",
    colorScheme: "mystical-purple-gradient",
    uniqueFeatures: ["sacred-geometry", "mystical-symbols"]
  },
  {
    id: 14,
    name: "גיאומטרי דינמי",
    className: "geometric-dynamic",
    backgroundElements: ["geometric-waves", "geometric-energy"],
    animationStyle: "geometric-dynamic-flow",
    colorScheme: "dynamic-energy-gradient",
    uniqueFeatures: ["energy-waves", "dynamic-motion"]
  },
  {
    id: 15,
    name: "גיאומטרי חלל",
    className: "geometric-space",
    backgroundElements: ["geometric-void", "geometric-infinity"],
    animationStyle: "geometric-space-drift",
    colorScheme: "space-void-gradient",
    uniqueFeatures: ["infinite-space", "void-effects"]
  }
];

export const metalVariations: DesignVariation[] = [
  {
    id: 1,
    name: "מתכת זהב",
    className: "metal-gold",
    backgroundElements: ["metal-gold-shine", "metal-luxury"],
    animationStyle: "metal-gold-gleam",
    colorScheme: "gold-luxury-gradient",
    uniqueFeatures: ["gold-reflections", "luxury-shine"]
  },
  {
    id: 2,
    name: "מתכת כסף",
    className: "metal-silver",
    backgroundElements: ["metal-silver-mirror", "metal-chrome"],
    animationStyle: "metal-silver-reflection",
    colorScheme: "silver-chrome-gradient",
    uniqueFeatures: ["mirror-finish", "chrome-shine"]
  },
  {
    id: 3,
    name: "מתכת נחושת",
    className: "metal-copper",
    backgroundElements: ["metal-copper-patina", "metal-warm"],
    animationStyle: "metal-copper-warmth",
    colorScheme: "copper-warm-gradient",
    uniqueFeatures: ["patina-effects", "warm-glow"]
  },
  {
    id: 4,
    name: "מתכת פלטינה",
    className: "metal-platinum",
    backgroundElements: ["metal-platinum-pure", "metal-elite"],
    animationStyle: "metal-platinum-elegance",
    colorScheme: "platinum-elite-gradient",
    uniqueFeatures: ["pure-finish", "elite-shine"]
  },
  {
    id: 5,
    name: "מתכת ברונזה",
    className: "metal-bronze",
    backgroundElements: ["metal-bronze-antique", "metal-aged"],
    animationStyle: "metal-bronze-patina",
    colorScheme: "bronze-antique-gradient",
    uniqueFeatures: ["antique-finish", "aged-beauty"]
  },
  {
    id: 6,
    name: "מתכת טיטניום",
    className: "metal-titanium",
    backgroundElements: ["metal-titanium-strong", "metal-industrial"],
    animationStyle: "metal-titanium-strength",
    colorScheme: "titanium-industrial-gradient",
    uniqueFeatures: ["industrial-strength", "modern-finish"]
  },
  {
    id: 7,
    name: "מתכת ברזל",
    className: "metal-iron",
    backgroundElements: ["metal-iron-rust", "metal-raw"],
    animationStyle: "metal-iron-rawness",
    colorScheme: "iron-rust-gradient",
    uniqueFeatures: ["raw-power", "rust-texture"]
  },
  {
    id: 8,
    name: "מתכת אלומיניום",
    className: "metal-aluminum",
    backgroundElements: ["metal-aluminum-sleek", "metal-modern"],
    animationStyle: "metal-aluminum-smooth",
    colorScheme: "aluminum-sleek-gradient",
    uniqueFeatures: ["sleek-finish", "modern-shine"]
  },
  {
    id: 9,
    name: "מתכת נירוסטה",
    className: "metal-steel",
    backgroundElements: ["metal-steel-brushed", "metal-professional"],
    animationStyle: "metal-steel-professional",
    colorScheme: "steel-professional-gradient",
    uniqueFeatures: ["brushed-finish", "professional-look"]
  },
  {
    id: 10,
    name: "מתכת חלודה",
    className: "metal-rusty",
    backgroundElements: ["metal-rust-texture", "metal-weathered"],
    animationStyle: "metal-rust-weathering",
    colorScheme: "rust-weathered-gradient",
    uniqueFeatures: ["weathered-beauty", "rust-patterns"]
  },
  {
    id: 11,
    name: "מתכת מוברשת",
    className: "metal-brushed",
    backgroundElements: ["metal-brush-texture", "metal-textured"],
    animationStyle: "metal-brush-pattern",
    colorScheme: "brushed-texture-gradient",
    uniqueFeatures: ["brush-patterns", "textured-surface"]
  },
  {
    id: 12,
    name: "מתכת פוליש",
    className: "metal-polished",
    backgroundElements: ["metal-polish-mirror", "metal-perfect"],
    animationStyle: "metal-polish-perfection",
    colorScheme: "polished-mirror-gradient",
    uniqueFeatures: ["mirror-polish", "perfect-reflection"]
  },
  {
    id: 13,
    name: "מתכת מט",
    className: "metal-matte",
    backgroundElements: ["metal-matte-subtle", "metal-understated"],
    animationStyle: "metal-matte-elegance",
    colorScheme: "matte-subtle-gradient",
    uniqueFeatures: ["matte-finish", "understated-elegance"]
  },
  {
    id: 14,
    name: "מתכת רדיד",
    className: "metal-foil",
    backgroundElements: ["metal-foil-crinkle", "metal-reflective"],
    animationStyle: "metal-foil-shimmer",
    colorScheme: "foil-reflective-gradient",
    uniqueFeatures: ["foil-texture", "crinkle-effects"]
  },
  {
    id: 15,
    name: "מתכת פנטום",
    className: "metal-phantom",
    backgroundElements: ["metal-phantom-glow", "metal-ethereal"],
    animationStyle: "metal-phantom-mystery",
    colorScheme: "phantom-ethereal-gradient",
    uniqueFeatures: ["ethereal-glow", "phantom-effects"]
  }
];

export const imageVariations: DesignVariation[] = [
  {
    id: 1,
    name: "תלת מימד קלאסי",
    className: "image-3d-classic",
    backgroundElements: ["image-depth-layers", "image-parallax"],
    animationStyle: "image-3d-depth",
    colorScheme: "cinematic-depth-gradient",
    uniqueFeatures: ["depth-layers", "parallax-effect"]
  },
  {
    id: 2,
    name: "תלת מימד הולוגרפי",
    className: "image-3d-holographic",
    backgroundElements: ["image-hologram", "image-digital"],
    animationStyle: "image-3d-hologram",
    colorScheme: "holographic-rainbow-gradient",
    uniqueFeatures: ["hologram-effect", "digital-distortion"]
  },
  {
    id: 3,
    name: "תלת מימד וינטג'",
    className: "image-3d-vintage",
    backgroundElements: ["image-vintage-film", "image-retro"],
    animationStyle: "image-3d-vintage",
    colorScheme: "vintage-sepia-gradient",
    uniqueFeatures: ["film-grain", "retro-effects"]
  },
  {
    id: 4,
    name: "תלת מימד פוטוריסטי",
    className: "image-3d-futuristic",
    backgroundElements: ["image-future-tech", "image-cyber"],
    animationStyle: "image-3d-future",
    colorScheme: "futuristic-neon-gradient",
    uniqueFeatures: ["tech-overlay", "cyber-effects"]
  },
  {
    id: 5,
    name: "תלת מימד אמנותי",
    className: "image-3d-artistic",
    backgroundElements: ["image-art-brush", "image-canvas"],
    animationStyle: "image-3d-artistic",
    colorScheme: "artistic-palette-gradient",
    uniqueFeatures: ["brush-strokes", "canvas-texture"]
  },
  {
    id: 6,
    name: "תלת מימד טבעי",
    className: "image-3d-natural",
    backgroundElements: ["image-nature-organic", "image-earth"],
    animationStyle: "image-3d-natural",
    colorScheme: "natural-earth-gradient",
    uniqueFeatures: ["organic-overlay", "earth-tones"]
  },
  {
    id: 7,
    name: "תלת מימד מיסטי",
    className: "image-3d-mystical",
    backgroundElements: ["image-mystical-fog", "image-ethereal"],
    animationStyle: "image-3d-mystical",
    colorScheme: "mystical-ethereal-gradient",
    uniqueFeatures: ["fog-effects", "ethereal-glow"]
  },
  {
    id: 8,
    name: "תלת מימד נויר",
    className: "image-3d-noir",
    backgroundElements: ["image-noir-shadows", "image-dramatic"],
    animationStyle: "image-3d-noir",
    colorScheme: "noir-dramatic-gradient",
    uniqueFeatures: ["dramatic-shadows", "noir-atmosphere"]
  },
  {
    id: 9,
    name: "תלת מימד קומיקס",
    className: "image-3d-comic",
    backgroundElements: ["image-comic-pop", "image-vibrant"],
    animationStyle: "image-3d-comic",
    colorScheme: "comic-vibrant-gradient",
    uniqueFeatures: ["pop-art-effects", "vibrant-colors"]
  },
  {
    id: 10,
    name: "תלת מימד מינימלי",
    className: "image-3d-minimal",
    backgroundElements: ["image-minimal-clean", "image-simple"],
    animationStyle: "image-3d-minimal",
    colorScheme: "minimal-clean-gradient",
    uniqueFeatures: ["clean-overlay", "simple-elegance"]
  },
  {
    id: 11,
    name: "תלת מימד גלאם",
    className: "image-3d-glam",
    backgroundElements: ["image-glam-sparkle", "image-luxury"],
    animationStyle: "image-3d-glam",
    colorScheme: "glam-luxury-gradient",
    uniqueFeatures: ["sparkle-overlay", "luxury-shine"]
  },
  {
    id: 12,
    name: "תלת מימד אורבני",
    className: "image-3d-urban",
    backgroundElements: ["image-urban-street", "image-grunge"],
    animationStyle: "image-3d-urban",
    colorScheme: "urban-street-gradient",
    uniqueFeatures: ["street-overlay", "grunge-texture"]
  },
  {
    id: 13,
    name: "תלת מימד אלגנטי",
    className: "image-3d-elegant",
    backgroundElements: ["image-elegant-silk", "image-refined"],
    animationStyle: "image-3d-elegant",
    colorScheme: "elegant-refined-gradient",
    uniqueFeatures: ["silk-texture", "refined-overlay"]
  },
  {
    id: 14,
    name: "תלת מימד אנרגטי",
    className: "image-3d-energetic",
    backgroundElements: ["image-energy-burst", "image-dynamic"],
    animationStyle: "image-3d-energetic",
    colorScheme: "energetic-dynamic-gradient",
    uniqueFeatures: ["energy-overlay", "dynamic-motion"]
  },
  {
    id: 15,
    name: "תלת מימד קסום",
    className: "image-3d-magical",
    backgroundElements: ["image-magic-sparkle", "image-fantasy"],
    animationStyle: "image-3d-magical",
    colorScheme: "magical-fantasy-gradient",
    uniqueFeatures: ["magic-particles", "fantasy-glow"]
  }
];

export const gradientVariations: DesignVariation[] = [
  {
    id: 1,
    name: "תלת מימד קלאסי",
    className: "gradient-3d-classic",
    backgroundElements: ["3d-floating-cubes", "3d-depth-layers"],
    animationStyle: "3d-classic-float",
    colorScheme: "classic-3d-gradient",
    uniqueFeatures: ["floating-elements", "depth-illusion"]
  },
  {
    id: 2,
    name: "תלת מימד ניאון",
    className: "gradient-3d-neon",
    backgroundElements: ["3d-neon-lights", "3d-glow-effects"],
    animationStyle: "3d-neon-pulse",
    colorScheme: "neon-cyberpunk-gradient",
    uniqueFeatures: ["neon-glow", "cyberpunk-vibe"]
  },
  {
    id: 3,
    name: "תלת מימד גלקטי",
    className: "gradient-3d-galactic",
    backgroundElements: ["3d-stars-field", "3d-nebula"],
    animationStyle: "3d-galactic-drift",
    colorScheme: "galactic-space-gradient",
    uniqueFeatures: ["star-field", "space-depth"]
  },
  {
    id: 4,
    name: "תלת מימד אוקיינוס",
    className: "gradient-3d-ocean",
    backgroundElements: ["3d-water-ripples", "3d-underwater"],
    animationStyle: "3d-ocean-flow",
    colorScheme: "ocean-depth-gradient",
    uniqueFeatures: ["water-effects", "underwater-feel"]
  },
  {
    id: 5,
    name: "תלת מימד אש",
    className: "gradient-3d-fire",
    backgroundElements: ["3d-flame-particles", "3d-ember-glow"],
    animationStyle: "3d-fire-dance",
    colorScheme: "fire-ember-gradient",
    uniqueFeatures: ["flame-effects", "ember-particles"]
  },
  {
    id: 6,
    name: "תלת מימד קריסטל",
    className: "gradient-3d-crystal",
    backgroundElements: ["3d-crystal-shards", "3d-prism-light"],
    animationStyle: "3d-crystal-refraction",
    colorScheme: "crystal-prism-gradient",
    uniqueFeatures: ["crystal-reflections", "prism-effects"]
  },
  {
    id: 7,
    name: "תלת מימד ערפל",
    className: "gradient-3d-mist",
    backgroundElements: ["3d-fog-layers", "3d-smoke-wisps"],
    animationStyle: "3d-mist-flow",
    colorScheme: "mist-ethereal-gradient",
    uniqueFeatures: ["fog-layers", "ethereal-wisps"]
  },
  {
    id: 8,
    name: "תלת מימד זהב",
    className: "gradient-3d-gold",
    backgroundElements: ["3d-gold-particles", "3d-luxury-shine"],
    animationStyle: "3d-gold-gleam",
    colorScheme: "gold-luxury-gradient",
    uniqueFeatures: ["gold-particles", "luxury-glow"]
  },
  {
    id: 9,
    name: "תלת מימד צבעוני",
    className: "gradient-3d-rainbow",
    backgroundElements: ["3d-color-explosion", "3d-spectrum"],
    animationStyle: "3d-rainbow-flow",
    colorScheme: "rainbow-spectrum-gradient",
    uniqueFeatures: ["color-burst", "spectrum-effects"]
  },
  {
    id: 10,
    name: "תלת מימד טכנולוגי",
    className: "gradient-3d-tech",
    backgroundElements: ["3d-circuit-lines", "3d-digital-grid"],
    animationStyle: "3d-tech-pulse",
    colorScheme: "tech-digital-gradient",
    uniqueFeatures: ["circuit-patterns", "digital-effects"]
  },
  {
    id: 11,
    name: "תלת מימד קסום",
    className: "gradient-3d-magic",
    backgroundElements: ["3d-magic-sparkles", "3d-enchanted"],
    animationStyle: "3d-magic-twirl",
    colorScheme: "magic-enchanted-gradient",
    uniqueFeatures: ["magic-sparkles", "enchanted-glow"]
  },
  {
    id: 12,
    name: "תלת מימד דרמטי",
    className: "gradient-3d-dramatic",
    backgroundElements: ["3d-shadow-play", "3d-light-rays"],
    animationStyle: "3d-dramatic-contrast",
    colorScheme: "dramatic-contrast-gradient",
    uniqueFeatures: ["shadow-effects", "dramatic-lighting"]
  },
  {
    id: 13,
    name: "תלת מימד רך",
    className: "gradient-3d-soft",
    backgroundElements: ["3d-soft-clouds", "3d-gentle-flow"],
    animationStyle: "3d-soft-drift",
    colorScheme: "soft-gentle-gradient",
    uniqueFeatures: ["soft-textures", "gentle-motion"]
  },
  {
    id: 14,
    name: "תלת מימד אינטנסיבי",
    className: "gradient-3d-intense",
    backgroundElements: ["3d-energy-burst", "3d-power-waves"],
    animationStyle: "3d-intense-energy",
    colorScheme: "intense-energy-gradient",
    uniqueFeatures: ["energy-waves", "power-effects"]
  },
  {
    id: 15,
    name: "תלת מימד חלומי",
    className: "gradient-3d-dreamy",
    backgroundElements: ["3d-dream-bubbles", "3d-surreal"],
    animationStyle: "3d-dreamy-float",
    colorScheme: "dreamy-surreal-gradient",
    uniqueFeatures: ["dream-effects", "surreal-elements"]
  }
];

export const getRandomVariation = (styleType: string): DesignVariation => {
  let variations: DesignVariation[] = [];
  
  switch (styleType) {
    case 'glass':
      variations = liquidGlassVariations;
      break;
    case 'geometric':
      variations = geometricVariations;
      break;
    case 'metal':
      variations = metalVariations;
      break;
    case 'image':
      variations = imageVariations;
      break;
    case 'gradient':
    default:
      variations = gradientVariations;
      break;
  }
  
  const randomIndex = Math.floor(Math.random() * variations.length);
  return variations[randomIndex];
};

export const getAllVariations = () => ({
  liquid: liquidGlassVariations,
  geometric: geometricVariations,
  metal: metalVariations,
  image: imageVariations,
  gradient: gradientVariations
});
