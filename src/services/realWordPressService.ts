
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
  private static readonly API_KEY = 'leadgrid-wp-api-2024'; // API key for real WordPress creation
  
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
        console.warn('Real hosting failed, will use demo fallback:', hostingResult.error);
        return this.createDemoFallback(domain, userData, websiteData);
      }
      
      // Step 2: Install WordPress
      const wpInstallResult = await this.installWordPress(
        hostingResult.hostingDetails, 
        userData, 
        websiteData
      );
      
      if (!wpInstallResult.success) {
        console.warn('WordPress installation failed, will use demo fallback:', wpInstallResult.error);
        return this.createDemoFallback(domain, userData, websiteData);
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
      console.log('🎭 Falling back to demo site creation...');
      return this.createDemoFallback(domain, userData, websiteData);
    }
  }
  
  // Create demo WordPress site as fallback
  private static async createDemoFallback(
    domain: string, 
    userData: WordPressUserData, 
    websiteData: any
  ): Promise<WordPressCreationResult> {
    console.log('🎭 Creating demo WordPress site as fallback...');
    
    const cleanDomain = domain.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const timestamp = Date.now();
    
    // Create demo URLs that work within the current app
    const currentUrl = window.location.origin;
    const demoSiteUrl = `${currentUrl}/generated-landing-page?demo=${cleanDomain}&user=${userData.username}&t=${timestamp}`;
    const adminUrl = `${currentUrl}/wordpress-admin?demo=${cleanDomain}&user=${userData.username}`;
    const loginUrl = `${currentUrl}/wordpress-login?demo=${cleanDomain}&user=${userData.username}`;
    
    // Simulate WordPress installation process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Save demo content for the demo site to use
    const demoContent = {
      userData,
      websiteData,
      timestamp
    };
    
    localStorage.setItem(`demo_content_${userData.username}`, JSON.stringify(demoContent));
    
    return {
      success: true,
      siteUrl: demoSiteUrl,
      adminUrl,
      loginUrl,
      username: userData.username,
      password: userData.password,
      isDemo: true,
      installationDetails: {
        wpVersion: '6.4.2 (Demo)',
        theme: 'leadgrid-demo',
        plugins: ['demo-plugins'],
        siteId: `demo_${timestamp}`
      }
    };
  }
  
  private static async createHostingAccount(domain: string, userData: WordPressUserData) {
    try {
      console.log('🏗️ Creating real hosting account for:', domain);
      
      const response = await fetch(`${this.WP_API_BASE}/create-hosting`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.API_KEY}`,
          'X-Leadgrid-Client': 'website-builder'
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
        throw new Error(`Hosting API error: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('✅ Real hosting account created successfully');
      
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
      console.log('📦 Installing real WordPress...');
      
      // Create WordPress installation
      const installResponse = await fetch(`${this.WP_API_BASE}/install-wordpress`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.API_KEY}`,
          'X-Leadgrid-Client': 'website-builder'
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
          customerData: userData,
          templateData: websiteData
        })
      });
      
      if (!installResponse.ok) {
        throw new Error(`WordPress installation failed: ${installResponse.status} ${installResponse.statusText}`);
      }
      
      const installResult = await installResponse.json();
      console.log('✅ Real WordPress installation completed');
      
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
      console.log('⚙️ Configuring real WordPress with user content...');
      
      // Deploy user's content to WordPress using WP REST API
      const response = await fetch(`${this.WP_API_BASE}/deploy-content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.API_KEY}`,
          'X-Leadgrid-Client': 'website-builder'
        },
        body: JSON.stringify({
          siteUrl,
          adminCredentials,
          content: websiteData
        })
      });
      
      if (!response.ok) {
        console.warn('Content deployment failed, but site was created');
      } else {
        console.log('✅ Content deployed to real WordPress successfully');
      }
      
    } catch (error) {
      console.warn('Content deployment failed:', error);
    }
  }
}
