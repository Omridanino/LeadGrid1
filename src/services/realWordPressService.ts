
// Real WordPress.com API Service - Using Demo Mode for reliability
import { DemoWordPressService } from './demoWordPressService';

export interface WordPressUserData {
  username: string;
  email: string;
  password: string;
  displayName: string;
  firstName: string;
  lastName: string;
  phone: string;
  company?: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  websiteTitle: string;
  websiteDescription: string;
}

export interface WordPressCreationResult {
  success: boolean;
  siteUrl: string;
  adminUrl: string;
  loginUrl: string;
  username: string;
  password: string;
  error?: string;
  installationDetails: {
    wpVersion: string;
    theme: string;
    plugins: string[];
    siteId: string;
  };
  isDemo: boolean;
}

export class RealWordPressService {
  
  // Create WordPress.com site - Using fully functional demo
  static async createRealWordPressSite(
    domain: string, 
    userData: WordPressUserData, 
    websiteData: any
  ): Promise<WordPressCreationResult> {
    try {
      console.log('🚀 Creating fully functional demo WordPress site...');
      
      // Create demo site using the new demo service
      const demoResult = await DemoWordPressService.createDemoSite(userData, websiteData);
      
      console.log('✅ Demo WordPress site created successfully!');
      console.log(`🌐 Demo Site URL: ${demoResult.siteUrl}`);
      console.log(`🔐 Demo Admin: ${demoResult.adminUrl}`);
      
      return {
        success: true,
        siteUrl: demoResult.siteUrl,
        adminUrl: demoResult.adminUrl,
        loginUrl: demoResult.loginUrl,
        username: userData.username,
        password: userData.password,
        isDemo: true,
        installationDetails: {
          wpVersion: demoResult.installationDetails.wpVersion,
          theme: demoResult.installationDetails.theme,
          plugins: demoResult.installationDetails.plugins,
          siteId: demoResult.siteId
        }
      };
      
    } catch (error) {
      console.error('❌ Demo WordPress creation failed:', error);
      throw new Error(`Failed to create WordPress site: ${error.message}`);
    }
  }
  
  // Check if user is authenticated - Always return true for demo
  static async isAuthenticated(): Promise<boolean> {
    return true; // Demo mode - always authenticated
  }
  
  // Initiate WordPress.com OAuth flow - Disabled for demo
  static initiateWordPressAuth(): void {
    console.log('🎭 WordPress.com authentication disabled in demo mode');
    // Just reload to update the auth status
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}
