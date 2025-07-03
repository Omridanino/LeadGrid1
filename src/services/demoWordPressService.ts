
// Demo WordPress Service - Simulates real WordPress.com functionality
export interface DemoWordPressResult {
  success: boolean;
  siteUrl: string;
  adminUrl: string;
  loginUrl: string;
  username: string;
  password: string;
  siteId: string;
  isDemo: true;
  installationDetails: {
    wpVersion: string;
    theme: string;
    plugins: string[];
    demoContent: boolean;
  };
}

export class DemoWordPressService {
  
  static async createDemoSite(userData: any, websiteData: any): Promise<DemoWordPressResult> {
    console.log('🎭 Creating fully functional demo WordPress site...');
    
    // Simulate realistic creation time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const timestamp = Date.now();
    const siteId = `demo_site_${timestamp}`;
    const demoSiteName = userData.username || `site${timestamp}`;
    
    // Create realistic demo URLs
    const demoSiteUrl = `https://${demoSiteName}.demo-wordpress.leadgrid.io`;
    const adminUrl = `${demoSiteUrl}/wp-admin`;
    const loginUrl = `${demoSiteUrl}/wp-login.php`;
    
    // Store demo data for later access
    const demoData = {
      siteId,
      userData,
      websiteData,
      createdAt: new Date().toISOString(),
      demoSiteUrl,
      adminUrl,
      loginUrl
    };
    
    localStorage.setItem(`demo_wp_site_${siteId}`, JSON.stringify(demoData));
    
    console.log('✅ Demo WordPress site created successfully!');
    console.log(`🌐 Demo Site URL: ${demoSiteUrl}`);
    console.log(`🔐 Demo Admin: ${adminUrl}`);
    
    return {
      success: true,
      siteUrl: demoSiteUrl,
      adminUrl,
      loginUrl,
      username: userData.username,
      password: userData.password,
      siteId,
      isDemo: true,
      installationDetails: {
        wpVersion: '6.4.2 (Demo Mode)',
        theme: 'leadgrid-professional',
        plugins: ['jetpack-demo', 'yoast-seo-demo', 'contact-form-7-demo'],
        demoContent: true
      }
    };
  }
  
  static getDemoSiteData(siteId: string) {
    // נסה קודם לטעון מהפורמט החדש
    let data = localStorage.getItem(`demo_site_${siteId}`);
    if (data) {
      return JSON.parse(data);
    }
    
    // נסה לטעון מהפורמט הישן
    data = localStorage.getItem(`demo_wp_site_${siteId}`);
    return data ? JSON.parse(data) : null;
  }
  
  static getAllDemoSites() {
    const sites = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('demo_wp_site_')) {
        const data = localStorage.getItem(key);
        if (data) {
          sites.push(JSON.parse(data));
        }
      }
    }
    return sites;
  }
}
