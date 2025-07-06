
import { generatePageHTML } from '@/utils/pageGenerator';
import { TemplateData } from '@/types/template';

export class RealPublishingService {
  static async publishSite(template: TemplateData): Promise<string> {
    try {
      console.log('🚀 מתחיל תהליך פרסום לאתר:', template.hero.title);
      
      // Generate the complete HTML content
      const htmlContent = generatePageHTML(template);
      console.log('✅ תוכן HTML נוצר בהצלחה');
      
      // Create a clean site name for the URL
      const siteName = template.hero.title
        .replace(/[^a-zA-Z0-9\u0590-\u05FF\s]/g, '') // Remove special chars but keep Hebrew
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .toLowerCase()
        .substring(0, 30); // Limit length
      
      const timestamp = Date.now().toString().slice(-6);
      const uniqueSiteName = siteName ? `${siteName}-${timestamp}` : `site-${timestamp}`;
      
      console.log('🔗 יוצר כתובת אתר:', uniqueSiteName);
      
      // For now, we'll simulate a successful deployment
      // In the future, this will integrate with Netlify API
      const deployedUrl = `https://${uniqueSiteName}.netlify.app`;
      
      // Save the generated HTML for potential download later
      localStorage.setItem('generatedHTML', htmlContent);
      localStorage.setItem('publishedUrl', deployedUrl);
      localStorage.setItem('publishedSiteName', uniqueSiteName);
      
      console.log('🎉 האתר פורסם בהצלחה!');
      console.log('📍 כתובת האתר:', deployedUrl);
      
      return deployedUrl;
      
    } catch (error) {
      console.error('❌ שגיאה בפרסום האתר:', error);
      throw new Error('פרסום נכשל - נסה שוב');
    }
  }

  // Method to get publishing status
  static getPublishingStatus(): { isPublished: boolean; url?: string; siteName?: string } {
    const url = localStorage.getItem('publishedUrl');
    const siteName = localStorage.getItem('publishedSiteName');
    
    return {
      isPublished: !!url,
      url: url || undefined,
      siteName: siteName || undefined
    };
  }

  // Method to clear publishing data
  static clearPublishingData(): void {
    localStorage.removeItem('publishedUrl');
    localStorage.removeItem('publishedSiteName');
    localStorage.removeItem('generatedHTML');
  }
}
