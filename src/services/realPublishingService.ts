import { generatePageHTML } from '@/utils/pageGenerator';
import { TemplateData } from '@/types/template';

export class RealPublishingService {
  static async publishSite(template: TemplateData): Promise<string> {
    try {
      // Use the advanced page generator that includes all premium templates and effects
      const htmlContent = generatePageHTML(template);
      
      // Create a more user-friendly filename
      const siteName = template.hero.title.replace(/[^a-zA-Z0-9\u0590-\u05FF]/g, '-').toLowerCase();
      const timestamp = Date.now().toString().slice(-6); // Last 6 digits for uniqueness
      const filename = `${siteName}-${timestamp}.html`;
      
      // Create a blob URL with a better name
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      // Try to create a more user-friendly URL by using the filename
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      
      return url;
    } catch (error) {
      console.error('Publishing failed:', error);
      throw new Error('פרסום נכשל - נסה שוב');
    }
  }
}
