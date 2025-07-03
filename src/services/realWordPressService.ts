
// Real WordPress.com API Service - Using WordPress.com OAuth
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
  // WordPress.com OAuth Configuration
  private static readonly WP_CLIENT_ID = '120329';
  private static readonly WP_CLIENT_SECRET = 'imbzp7yTZvC3uRrwUW51f3ndO81dVJXlqN39Pi4qNyz3G3HkxWpDteo8hwGJGxkh';
  private static readonly WP_REDIRECT_URI = 'https://leadgrid.design/auth/wordpress/callback';
  private static readonly WP_API_BASE = 'https://public-api.wordpress.com';
  
  // Create REAL WordPress.com site - FORCE REAL CREATION
  static async createRealWordPressSite(
    domain: string, 
    userData: WordPressUserData, 
    websiteData: any
  ): Promise<WordPressCreationResult> {
    try {
      console.log('🚀 Creating REAL WordPress.com site:', domain);
      
      // Step 1: FORCE authentication check
      const authToken = await this.getWordPressAuthToken();
      if (!authToken) {
        console.error('❌ WordPress.com authentication REQUIRED - redirecting to auth');
        
        // Instead of falling back to demo, FORCE authentication
        this.initiateWordPressAuth();
        
        throw new Error('WordPress.com authentication required. Please authenticate first.');
      }
      
      console.log('✅ WordPress.com authentication confirmed');
      
      // Step 2: Create new WordPress.com site
      const siteResult = await this.createWordPressSite(authToken, userData, domain);
      if (!siteResult.success) {
        console.error('❌ WordPress.com site creation failed:', siteResult.error);
        throw new Error(`WordPress.com site creation failed: ${siteResult.error}`);
      }
      
      console.log('✅ WordPress.com site created successfully');
      
      // Step 3: Configure the site with user's content
      await this.configureWordPressSite(authToken, siteResult.siteId, websiteData);
      
      console.log('✅ WordPress.com site configured with user content');
      
      return {
        success: true,
        siteUrl: siteResult.siteUrl,
        adminUrl: `${siteResult.siteUrl}/wp-admin`,
        loginUrl: `${siteResult.siteUrl}/wp-login.php`,
        username: userData.username,
        password: userData.password,
        isDemo: false, // This is a REAL WordPress.com site
        installationDetails: {
          wpVersion: '6.4.2',
          theme: 'twentytwentyfour',
          plugins: ['jetpack'],
          siteId: siteResult.siteId
        }
      };
      
    } catch (error) {
      console.error('❌ Real WordPress.com creation failed:', error);
      
      // NO FALLBACK TO DEMO - throw the error
      throw new Error(`Failed to create WordPress.com site: ${error.message}`);
    }
  }
  
  // Initiate WordPress.com OAuth flow
  static initiateWordPressAuth(): void {
    const authUrl = new URL(`${this.WP_API_BASE}/oauth2/authorize`);
    authUrl.searchParams.append('client_id', this.WP_CLIENT_ID);
    authUrl.searchParams.append('redirect_uri', this.WP_REDIRECT_URI);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('scope', 'sites auth');
    
    console.log('🔐 Redirecting to WordPress.com OAuth:', authUrl.toString());
    window.location.href = authUrl.toString();
  }
  
  // Get access token from authorization code
  static async exchangeCodeForToken(authCode: string): Promise<string | null> {
    try {
      console.log('🔄 Exchanging authorization code for access token...');
      
      const response = await fetch(`${this.WP_API_BASE}/oauth2/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: this.WP_CLIENT_ID,
          client_secret: this.WP_CLIENT_SECRET,
          redirect_uri: this.WP_REDIRECT_URI,
          grant_type: 'authorization_code',
          code: authCode
        })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Token exchange failed:', errorText);
        throw new Error(`Token exchange failed: ${response.statusText}`);
      }
      
      const data = await response.json();
      const accessToken = data.access_token;
      
      if (!accessToken) {
        throw new Error('No access token received');
      }
      
      // Store token for later use
      localStorage.setItem('wp_access_token', accessToken);
      console.log('✅ WordPress.com access token obtained and stored');
      
      // Also store the token expiry if provided
      if (data.expires_in) {
        const expiryTime = Date.now() + (data.expires_in * 1000);
        localStorage.setItem('wp_token_expiry', expiryTime.toString());
      }
      
      return accessToken;
      
    } catch (error) {
      console.error('Failed to exchange code for token:', error);
      return null;
    }
  }
  
  // Get stored or request new auth token
  private static async getWordPressAuthToken(): Promise<string | null> {
    // Check if we have a stored token
    const storedToken = localStorage.getItem('wp_access_token');
    const tokenExpiry = localStorage.getItem('wp_token_expiry');
    
    if (storedToken) {
      // Check if token is expired
      if (tokenExpiry && Date.now() > parseInt(tokenExpiry)) {
        console.log('🔄 WordPress.com token expired, removing...');
        localStorage.removeItem('wp_access_token');
        localStorage.removeItem('wp_token_expiry');
        return null;
      }
      
      // Verify token is still valid
      const isValid = await this.verifyToken(storedToken);
      if (isValid) {
        console.log('✅ WordPress.com token is valid');
        return storedToken;
      } else {
        console.log('❌ WordPress.com token is invalid, removing...');
        localStorage.removeItem('wp_access_token');
        localStorage.removeItem('wp_token_expiry');
      }
    }
    
    // Need to authenticate
    console.log('🔐 WordPress.com authentication required');
    return null;
  }
  
  // Verify if token is still valid
  private static async verifyToken(token: string): Promise<boolean> {
    try {
      console.log('🔍 Verifying WordPress.com token...');
      
      const response = await fetch(`${this.WP_API_BASE}/rest/v1.1/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const isValid = response.ok;
      console.log(`🔍 Token verification result: ${isValid ? 'VALID' : 'INVALID'}`);
      
      return isValid;
    } catch (error) {
      console.error('Token verification failed:', error);
      return false;
    }
  }
  
  // Create new WordPress.com site
  private static async createWordPressSite(
    token: string, 
    userData: WordPressUserData, 
    domain: string
  ): Promise<{success: boolean, siteUrl?: string, siteId?: string, error?: string}> {
    try {
      console.log('🏗️ Creating WordPress.com site with domain:', domain);
      
      const response = await fetch(`${this.WP_API_BASE}/rest/v1.1/sites/new`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          blog_name: domain.replace(/[^a-z0-9]/gi, '').toLowerCase(),
          blog_title: userData.websiteTitle,
          lang_id: 'he',
          public: 1,
          validate: false
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('WordPress.com API error:', errorData);
        throw new Error(`WordPress.com API error: ${errorData.message || response.statusText}`);
      }
      
      const result = await response.json();
      console.log('✅ WordPress.com site created:', result);
      
      return {
        success: true,
        siteUrl: result.blog_details.url,
        siteId: result.blog_details.blogid.toString()
      };
      
    } catch (error) {
      console.error('WordPress.com site creation failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
  
  // Configure WordPress site with user's content
  private static async configureWordPressSite(token: string, siteId: string, websiteData: any): Promise<void> {
    try {
      console.log('⚙️ Configuring WordPress.com site with user content...');
      
      // Create homepage content
      if (websiteData?.content?.hero) {
        await this.createWordPressPage(token, siteId, {
          title: 'דף הבית',
          content: this.generatePageContent(websiteData),
          status: 'publish',
          type: 'page'
        });
      }
      
      // Create about page if exists
      if (websiteData?.content?.about) {
        await this.createWordPressPage(token, siteId, {
          title: 'אודות',
          content: websiteData.content.about.description || 'תוכן אודות',
          status: 'publish',
          type: 'page'
        });
      }
      
      // Create contact page if exists
      if (websiteData?.content?.contact) {
        await this.createWordPressPage(token, siteId, {
          title: 'צור קשר',
          content: `<p>ניתן ליצור איתנו קשר:</p>
            <p>טלפון: ${websiteData.content.contact.phone || 'לא צוין'}</p>
            <p>אימייל: ${websiteData.content.contact.email || 'לא צוין'}</p>`,
          status: 'publish',
          type: 'page'
        });
      }
      
      console.log('✅ WordPress.com site configuration completed');
      
    } catch (error) {
      console.warn('WordPress.com site configuration failed:', error);
    }
  }
  
  // Create page in WordPress
  private static async createWordPressPage(token: string, siteId: string, pageData: any): Promise<void> {
    try {
      const response = await fetch(`${this.WP_API_BASE}/rest/v1.1/sites/${siteId}/posts/new`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pageData)
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`✅ Created WordPress page: ${pageData.title}`, result);
      } else {
        const error = await response.json();
        console.warn(`Failed to create WordPress page: ${pageData.title}`, error);
      }
    } catch (error) {
      console.warn(`Failed to create WordPress page: ${pageData.title}`, error);
    }
  }
  
  // Generate HTML content from website data
  private static generatePageContent(websiteData: any): string {
    let content = '';
    
    if (websiteData?.content?.hero) {
      content += `<h1>${websiteData.content.hero.headline || 'ברוכים הבאים'}</h1>`;
      content += `<p>${websiteData.content.hero.subheadline || 'תיאור האתר'}</p>`;
    }
    
    if (websiteData?.content?.features?.length > 0) {
      content += '<h2>השירותים שלנו</h2>';
      websiteData.content.features.forEach((feature: any) => {
        content += `<h3>${feature.title}</h3>`;
        content += `<p>${feature.description}</p>`;
      });
    }
    
    return content || '<p>תוכן האתר</p>';
  }
  
  // Check if user is authenticated
  static async isAuthenticated(): Promise<boolean> {
    const token = await this.getWordPressAuthToken();
    return !!token;
  }
}
