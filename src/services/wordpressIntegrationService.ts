// WordPress Integration Service - Real WordPress connection
export interface WordPressConnection {
  siteUrl: string;
  username: string;
  password: string;
}

export interface WordPressIntegrationResult {
  success: boolean;
  message: string;
  pageUrl?: string;
  editUrl?: string;
  error?: string;
}

export class WordPressIntegrationService {
  private static readonly EDGE_FUNCTION_URL = 'https://crkgabcjxkdpnhipvugu.supabase.co/functions/v1/wordpress-integration';
  
  // Test connection to WordPress site
  static async testConnection(connection: WordPressConnection): Promise<WordPressIntegrationResult> {
    try {
      console.log('🔍 Testing connection to WordPress site:', connection.siteUrl);
      
      const response = await fetch(`${this.EDGE_FUNCTION_URL}?action=test-connection`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(connection),
      });
      
      const result = await response.json();
      
      if (!response.ok || !result.success) {
        console.error('❌ Connection test failed:', result);
        return {
          success: false,
          message: result.error || 'שגיאה בבדיקת החיבור',
          error: result.error
        };
      }
      
      console.log('✅ WordPress connection successful');
      return {
        success: true,
        message: result.message
      };
      
    } catch (error) {
      console.error('❌ Connection test error:', error);
      return {
        success: false,
        message: 'שגיאה בחיבור לאתר WordPress',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
  
  // Add landing page to WordPress site
  static async addLandingPage(
    connection: WordPressConnection, 
    landingPageData: any
  ): Promise<WordPressIntegrationResult> {
    try {
      console.log('🚀 Adding landing page to WordPress site:', connection.siteUrl);
      
      const response = await fetch(`${this.EDGE_FUNCTION_URL}?action=add-landing-page`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          connection,
          landingPageData
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok || !result.success) {
        console.error('❌ Failed to add landing page:', result);
        return {
          success: false,
          message: result.error || 'שגיאה בהוספת דף הנחיתה',
          error: result.error
        };
      }
      
      console.log('✅ Landing page added successfully:', result.pageUrl);
      return {
        success: true,
        message: result.message,
        pageUrl: result.pageUrl,
        editUrl: result.editUrl
      };
      
    } catch (error) {
      console.error('❌ Landing page creation error:', error);
      return {
        success: false,
        message: 'שגיאה בהוספת דף הנחיתה לאתר WordPress',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
  
  // Validate WordPress URL format
  static validateWordPressUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
      return false;
    }
  }
  
  // Clean and format WordPress URL
  static formatWordPressUrl(url: string): string {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    return url.replace(/\/$/, ''); // Remove trailing slash
  }
}