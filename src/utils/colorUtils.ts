
export const getColorStyle = (colorValue: string) => {
  if (!colorValue) return {};
  
  if (colorValue.startsWith('solid:')) {
    const color = colorValue.replace('solid:', '');
    return { color };
  }
  
  if (colorValue.startsWith('gradient:')) {
    const colors = colorValue.replace('gradient:', '').split('-');
    if (colors.length === 2) {
      return {
        background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      };
    }
  }
  
  return {};
};

export const getBackgroundStyle = (colorValue: string) => {
  if (!colorValue) return {};
  
  if (colorValue.startsWith('solid:')) {
    const color = colorValue.replace('solid:', '');
    return { backgroundColor: color };
  }
  
  if (colorValue.startsWith('gradient:')) {
    const colors = colorValue.replace('gradient:', '').split('-');
    if (colors.length === 2) {
      return {
        background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
      };
    }
  }
  
  return {};
};
