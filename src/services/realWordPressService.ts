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
  private static readonly EDGE_FUNCTION_URL = 'https://crkgabcjxkdpnhipvugu.supabase.co/functions/v1/wordpress-auth';
  
  // Real WordPress.com API credentials
  private static getOAuthConfig(): WordPressOAuthConfig {
    return {
      clientId: '120329',
      clientSecret: 'imbzp7yTZvC3uRrwUW51f3ndO81dVJXlqN39Pi4qNyz3G3HkxWpDteo8hwGJGxkh',
      redirectUri: 'https://leadgrid.design/auth/wordpress/callback'
    };
  }
  
  // Check if OAuth is properly configured
  static isConfigured(): boolean {
    const config = this.getOAuthConfig();
    return !!(config.clientId && config.clientSecret);
  }
  
  // Initiate WordPress.com OAuth flow using Edge Function
  static async initiateWordPressAuth(): Promise<void> {
    try {
      console.log('🔐 Getting WordPress.com OAuth URL from Edge Function...');
      
      const response = await fetch(`${this.EDGE_FUNCTION_URL}?action=get-auth-url`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get auth URL: ${response.status}`);
      }
      
      const { authUrl } = await response.json();
      console.log('🔗 Redirecting to WordPress.com OAuth:', authUrl);
      
      // Open OAuth in current window
      window.location.href = authUrl;
    } catch (error) {
      console.error('❌ Failed to initiate WordPress.com OAuth:', error);
      throw new Error(`OAuth initiation failed: ${error.message}`);
    }
  }
  
  // Exchange OAuth code for access token using Edge Function
  private static async exchangeCodeForToken(code: string): Promise<string> {
    try {
      console.log('🔄 Exchanging code for token via Edge Function...');
      
      const response = await fetch(`${this.EDGE_FUNCTION_URL}?action=exchange-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Token exchange failed:', errorText);
        throw new Error(`Token exchange failed: ${response.status} ${errorText}`);
      }
      
      const { accessToken } = await response.json();
      console.log('✅ Token received successfully');
      return accessToken;
    } catch (error) {
      console.error('❌ Token exchange error:', error);
      throw error;
    }
  }
  
  // Check if user is authenticated using Edge Function
  static async isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem('wp_access_token');
    
    if (!token) {
      console.log('❌ No access token found');
      return false;
    }
    
    try {
      console.log('🔍 Verifying WordPress.com authentication via Edge Function...');
      
      const response = await fetch(`${this.EDGE_FUNCTION_URL}?action=verify-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      
      if (!response.ok) {
        console.log('❌ Token verification request failed:', response.status);
        localStorage.removeItem('wp_access_token');
        return false;
      }
      
      const { valid, user } = await response.json();
      
      if (valid && user) {
        console.log('✅ Authentication verified for user:', user.display_name);
        return true;
      } else {
        console.log('❌ Token verification failed');
        localStorage.removeItem('wp_access_token');
        return false;
      }
    } catch (error) {
      console.error('❌ Token verification error:', error);
      localStorage.removeItem('wp_access_token');
      return false;
    }
  }
  
  // Create WordPress.com site using Edge Function
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
      
      console.log('🚀 Creating real WordPress.com site via Edge Function with domain:', domain);
      
      const response = await fetch(`${this.EDGE_FUNCTION_URL}?action=create-site`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          domain,
          userData,
          websiteData
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('❌ Site creation failed:', errorData);
        throw new Error(`Site creation failed: ${response.status} ${errorData}`);
      }
      
      const result = await response.json();
      console.log('✅ WordPress.com site created successfully:', result);
      
      return result;
      
    } catch (error) {
      console.error('❌ WordPress.com site creation failed:', error);
      throw new Error(`Failed to create WordPress.com site: ${error.message}`);
    }
  }
  
  // Handle OAuth callback
  static async handleOAuthCallback(code: string): Promise<boolean> {
    try {
      console.log('🔄 Processing WordPress.com OAuth callback via Edge Function...');
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
