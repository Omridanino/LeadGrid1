
// Service for automatic API key generation
export interface ApiCredentials {
  apiKey: string;
  siteId: string;
  created: string;
}

export class ApiKeyService {
  
  static generateApiKey(): string {
    // Generate a secure random API key
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = 'lg_';
    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  
  static generateSiteId(): string {
    // Generate a unique site ID
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 9);
    return `site_${timestamp}_${random}`;
  }
  
  static createCredentials(pageData: any): ApiCredentials {
    const apiKey = this.generateApiKey();
    const siteId = this.generateSiteId();
    const created = new Date().toISOString();
    
    // Store the credentials with page data
    const credentials = {
      apiKey,
      siteId,
      created,
      pageData: {
        title: pageData.hero?.title || 'Untitled Page',
        domain: pageData.businessInfo?.companyName || 'Unknown',
        template: pageData.template?.name || 'Default'
      }
    };
    
    // Save to localStorage for persistence
    const existingKeys = JSON.parse(localStorage.getItem('leadgrid_api_keys') || '[]');
    existingKeys.push(credentials);
    localStorage.setItem('leadgrid_api_keys', JSON.stringify(existingKeys));
    
    // Also save the current active credentials
    localStorage.setItem('leadgrid_current_credentials', JSON.stringify(credentials));
    
    console.log('✅ Generated new API credentials:', { apiKey, siteId });
    
    return { apiKey, siteId, created };
  }
  
  static getCurrentCredentials(): ApiCredentials | null {
    const stored = localStorage.getItem('leadgrid_current_credentials');
    return stored ? JSON.parse(stored) : null;
  }
  
  static getAllCredentials(): any[] {
    const stored = localStorage.getItem('leadgrid_api_keys');
    return stored ? JSON.parse(stored) : [];
  }
}
