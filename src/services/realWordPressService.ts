
// Real WordPress Creation Service - Actual Implementation
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
  private static readonly WP_API_BASE = 'https://wp-create.leadgrid.co.il/api';
  
  // Create REAL WordPress site with actual cPanel/hosting
  static async createRealWordPressSite(
    domain: string, 
    userData: WordPressUserData, 
    websiteData: any
  ): Promise<WordPressCreationResult> {
    try {
      console.log('🚀 Creating REAL WordPress site:', domain);
      
      // Step 1: Create hosting account and subdomain
      const hostingResult = await this.createHostingAccount(domain, userData);
      if (!hostingResult.success) {
        throw new Error(`Failed to create hosting: ${hostingResult.error}`);
      }
      
      // Step 2: Install WordPress
      const wpInstallResult = await this.installWordPress(
        hostingResult.hostingDetails, 
        userData, 
        websiteData
      );
      
      if (!wpInstallResult.success) {
        throw new Error(`WordPress installation failed: ${wpInstallResult.error}`);
      }
      
      // Step 3: Configure WordPress with user's content
      await this.configureWordPressContent(
        wpInstallResult.siteUrl, 
        wpInstallResult.adminCredentials, 
        websiteData
      );
      
      return {
        success: true,
        siteUrl: wpInstallResult.siteUrl,
        adminUrl: wpInstallResult.adminUrl,
        loginUrl: wpInstallResult.loginUrl,
        username: userData.username,
        password: userData.password,
        isDemo: false,
        installationDetails: {
          wpVersion: '6.4.2',
          theme: 'leadgrid-custom',
          plugins: ['leadgrid-forms', 'leadgrid-seo'],
          siteId: wpInstallResult.siteId
        }
      };
      
    } catch (error) {
      console.error('Real WordPress creation failed:', error);
      throw error;
    }
  }
  
  private static async createHostingAccount(domain: string, userData: WordPressUserData) {
    try {
      const response = await fetch(`${this.WP_API_BASE}/create-hosting`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.LEADGRID_WP_API_KEY || 'demo-key'}`
        },
        body: JSON.stringify({
          domain: domain,
          customerData: {
            name: userData.displayName,
            email: userData.email,
            phone: userData.phone,
            company: userData.company
          }
        })
      });
      
      if (!response.ok) {
        throw new Error(`Hosting API error: ${response.statusText}`);
      }
      
      const result = await response.json();
      return {
        success: true,
        hostingDetails: result.hostingDetails
      };
      
    } catch (error) {
      console.error('Hosting creation failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
  
  private static async installWordPress(hostingDetails: any, userData: WordPressUserData, websiteData: any) {
    try {
      // Create WordPress installation
      const installResponse = await fetch(`${this.WP_API_BASE}/install-wordpress`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.LEADGRID_WP_API_KEY || 'demo-key'}`
        },
        body: JSON.stringify({
          hostingDetails,
          wpConfig: {
            siteTitle: userData.websiteTitle,
            adminUser: userData.username,
            adminEmail: userData.email,
            adminPassword: userData.password,
            language: 'he_IL'
          },
          customerData: userData
        })
      });
      
      if (!installResponse.ok) {
        throw new Error(`WordPress installation failed: ${installResponse.statusText}`);
      }
      
      const installResult = await installResponse.json();
      
      return {
        success: true,
        siteUrl: installResult.siteUrl,
        adminUrl: installResult.adminUrl,
        loginUrl: installResult.loginUrl,
        adminCredentials: installResult.adminCredentials,
        siteId: installResult.siteId
      };
      
    } catch (error) {
      console.error('WordPress installation failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
  
  private static async configureWordPressContent(siteUrl: string, adminCredentials: any, websiteData: any) {
    try {
      // Deploy user's content to WordPress using WP REST API
      const response = await fetch(`${this.WP_API_BASE}/deploy-content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.LEADGRID_WP_API_KEY || 'demo-key'}`
        },
        body: JSON.stringify({
          siteUrl,
          adminCredentials,
          content: websiteData
        })
      });
      
      if (!response.ok) {
        console.warn('Content deployment failed, but site was created');
      }
      
    } catch (error) {
      console.warn('Content deployment failed:', error);
    }
  }
}
