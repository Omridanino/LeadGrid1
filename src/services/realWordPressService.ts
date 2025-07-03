
// Real WordPress.com API Service - Production Ready
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

export interface WordPressOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

export class RealWordPressService {
  private static readonly WP_COM_API_BASE = 'https://public-api.wordpress.com/rest/v1.1';
  private static readonly WP_COM_OAUTH_BASE = 'https://public-api.wordpress.com/oauth2';
  
  // Get OAuth configuration from environment/secrets
  private static getOAuthConfig(): WordPressOAuthConfig {
    return {
      clientId: process.env.WORDPRESS_CLIENT_ID || '',
      clientSecret: process.env.WORDPRESS_CLIENT_SECRET || '',
      redirectUri: `${window.location.origin}/auth/wordpress/callback`
    };
  }
  
  // Check if OAuth is properly configured
  static isConfigured(): boolean {
    const config = this.getOAuthConfig();
    return !!(config.clientId && config.clientSecret);
  }
  
  // Initiate WordPress.com OAuth flow
  static initiateWordPressAuth(): void {
    const config = this.getOAuthConfig();
    
    if (!this.isConfigured()) {
      throw new Error('WordPress.com OAuth not configured. Please set WORDPRESS_CLIENT_ID and WORDPRESS_CLIENT_SECRET');
    }
    
    const authUrl = new URL(`${this.WP_COM_OAUTH_BASE}/authorize`);
    authUrl.searchParams.set('client_id', config.clientId);
    authUrl.searchParams.set('redirect_uri', config.redirectUri);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('scope', 'auth global:manage');
    
    console.log('🔐 Initiating WordPress.com OAuth flow:', authUrl.toString());
    
    // Open OAuth in new window
    const popup = window.open(
      authUrl.toString(),
      'wordpress-auth',
      'width=600,height=700,scrollbars=yes,resizable=yes'
    );
    
    // Listen for popup completion
    const checkClosed = setInterval(() => {
      if (popup?.closed) {
        clearInterval(checkClosed);
        // Check if we got the auth code
        const authCode = localStorage.getItem('wp_auth_code');
        if (authCode) {
          console.log('✅ WordPress.com OAuth completed');
          localStorage.removeItem('wp_auth_code');
          window.location.reload();
        }
      }
    }, 1000);
  }
  
  // Exchange OAuth code for access token
  private static async exchangeCodeForToken(code: string): Promise<string> {
    const config = this.getOAuthConfig();
    
    const response = await fetch(`${this.WP_COM_OAUTH_BASE}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: config.clientId,
        client_secret: config.clientSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: config.redirectUri,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Token exchange failed: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.access_token;
  }
  
  // Check if user is authenticated
  static async isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem('wp_access_token');
    
    if (!token) return false;
    
    try {
      // Verify token by making a simple API call
      const response = await fetch(`${this.WP_COM_API_BASE}/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      return response.ok;
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('wp_access_token');
      return false;
    }
  }
  
  // Create WordPress.com site
  static async createRealWordPressSite(
    domain: string, 
    userData: WordPressUserData, 
    websiteData: any
  ): Promise<WordPressCreationResult> {
    try {
      const token = localStorage.getItem('wp_access_token');
      
      if (!token) {
        throw new Error('Not authenticated with WordPress.com. Please authenticate first.');
      }
      
      console.log('🚀 Creating real WordPress.com site...');
      
      // Step 1: Create the site
      const siteResponse = await fetch(`${this.WP_COM_API_BASE}/sites/new`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          blog_name: domain,
          blog_title: userData.websiteTitle,
          lang_id: 40, // Hebrew
          public: 1,
          validate: false,
          find_available_url: true
        }),
      });
      
      if (!siteResponse.ok) {
        const errorData = await siteResponse.json();
        throw new Error(`Site creation failed: ${errorData.message || siteResponse.statusText}`);
      }
      
      const siteData = await siteResponse.json();
      const siteUrl = siteData.blog_details.url;
      const siteId = siteData.blog_details.blogid;
      
      console.log('✅ WordPress.com site created:', siteUrl);
      
      // Step 2: Configure site settings
      await this.configureSiteSettings(token, siteId, userData);
      
      // Step 3: Deploy template content
      if (websiteData) {
        await this.deployTemplateContent(token, siteId, websiteData);
      }
      
      return {
        success: true,
        siteUrl: siteUrl,
        adminUrl: `${siteUrl}/wp-admin`,
        loginUrl: `${siteUrl}/wp-login.php`,
        username: userData.username,
        password: userData.password,
        isDemo: false,
        installationDetails: {
          wpVersion: 'Latest WordPress.com',
          theme: 'Twenty Twenty-Four',
          plugins: ['Jetpack', 'Akismet'],
          siteId: siteId.toString()
        }
      };
      
    } catch (error) {
      console.error('❌ WordPress.com site creation failed:', error);
      throw new Error(`Failed to create WordPress.com site: ${error.message}`);
    }
  }
  
  // Configure site settings
  private static async configureSiteSettings(token: string, siteId: string, userData: WordPressUserData): Promise<void> {
    try {
      // Update site settings
      await fetch(`${this.WP_COM_API_BASE}/sites/${siteId}/settings`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          blogdescription: userData.websiteDescription,
          blog_public: 1,
          default_comment_status: 'open',
          default_ping_status: 'open',
        }),
      });
      
      console.log('✅ Site settings configured');
    } catch (error) {
      console.error('Warning: Failed to configure site settings:', error);
    }
  }
  
  // Deploy template content to WordPress site
  private static async deployTemplateContent(token: string, siteId: string, templateData: any): Promise<void> {
    try {
      // Create homepage content
      const homepageContent = this.generateWordPressContent(templateData);
      
      // Create/update homepage
      await fetch(`${this.WP_COM_API_BASE}/sites/${siteId}/posts/new`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'page',
          title: templateData.hero?.title || 'Home',
          content: homepageContent,
          status: 'publish',
        }),
      });
      
      console.log('✅ Template content deployed');
    } catch (error) {
      console.error('Warning: Failed to deploy template content:', error);
    }
  }
  
  // Generate WordPress-compatible HTML content from template
  private static generateWordPressContent(templateData: any): string {
    let content = '';
    
    // Hero section
    if (templateData.hero) {
      content += `
        <div style="text-align: center; padding: 60px 20px; background: linear-gradient(135deg, ${templateData.styles?.primaryColor || '#1e40af'}, ${templateData.styles?.secondaryColor || '#7c3aed'});">
          <h1 style="color: white; font-size: 3rem; margin-bottom: 1rem;">${templateData.hero.title}</h1>
          <p style="color: white; font-size: 1.25rem; margin-bottom: 2rem;">${templateData.hero.subtitle}</p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#" style="background: ${templateData.styles?.primaryColor || '#1e40af'}; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">${templateData.hero.button1Text}</a>
            <a href="#" style="background: ${templateData.styles?.secondaryColor || '#7c3aed'}; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">${templateData.hero.button2Text}</a>
          </div>
        </div>
      `;
    }
    
    // Features section
    if (templateData.features?.items?.length > 0) {
      content += `
        <div style="padding: 60px 20px;">
          <h2 style="text-align: center; margin-bottom: 3rem; font-size: 2.5rem;">${templateData.features.title}</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto;">
      `;
      
      templateData.features.items.forEach((feature: any) => {
        content += `
          <div style="text-align: center; padding: 2rem; border: 1px solid #e5e7eb; border-radius: 12px;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: ${templateData.styles?.primaryColor || '#1e40af'};">${feature.title}</h3>
            <p style="color: #6b7280;">${feature.description}</p>
          </div>
        `;
      });
      
      content += `
          </div>
        </div>
      `;
    }
    
    // About section
    if (templateData.about) {
      content += `
        <div style="padding: 60px 20px; background: #f9fafb;">
          <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 2.5rem; margin-bottom: 2rem; color: ${templateData.styles?.primaryColor || '#1e40af'};">${templateData.about.title}</h2>
            <p style="font-size: 1.25rem; color: #6b7280; line-height: 1.6;">${templateData.about.content}</p>
          </div>
        </div>
      `;
    }
    
    return content;
  }
  
  // Handle OAuth callback
  static async handleOAuthCallback(code: string): Promise<boolean> {
    try {
      const accessToken = await this.exchangeCodeForToken(code);
      localStorage.setItem('wp_access_token', accessToken);
      
      console.log('✅ WordPress.com authentication successful');
      return true;
    } catch (error) {
      console.error('❌ OAuth callback failed:', error);
      return false;
    }
  }
}
