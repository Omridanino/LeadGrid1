interface FormData {
  businessType: string;
}

interface Content {
  heroImage?: string;
}

export const getHeroImageUrl = (
  content: Content,
  heroImage: string,
  formData: FormData
): string => {
  // If user uploaded custom image, use it
  if (content.heroImage && content.heroImage.startsWith('data:')) {
    return content.heroImage;
  }
  if (heroImage && heroImage.startsWith('data:')) {
    return heroImage;
  }
  
  // Otherwise use automatic image based on business type
  const businessType = formData.businessType?.toLowerCase() || '';
  
  if (businessType.includes('קפה') || businessType.includes('בית קפה')) {
    return 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (businessType.includes('מסעדה') || businessType.includes('אוכל')) {
    return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
    return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
    return 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (businessType.includes('רפואה') || businessType.includes('בריאות')) {
    return 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (businessType.includes('חנות') || businessType.includes('אופנה')) {
    return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  return 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
};
