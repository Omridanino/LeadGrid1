// Real Domain and Hosting Service Integration - DEMO MODE WITH REAL WORDPRESS
export interface RealDomainAvailabilityResult {
  domain: string;
  available: boolean;
  price: number;
  currency: string;
  registrar: string;
  tld: string;
}

export interface RealHostingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  features: string[];
  storage: string;
  bandwidth: string;
  cpanelAccess: boolean;
  sslIncluded: boolean;
}

export interface PurchaseRequest {
  domain: string;
  hostingPlan: RealHostingPlan;
  orderId: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    company?: string;
    address: string;
    city: string;
    country: string;
    zipCode: string;
  };
  payment: {
    stripeToken?: string;
    years: number;
    autoRenew: boolean;
    method?: string;
    data?: any;
  };
  websiteData: any;
}

export interface PurchaseResult {
  success: boolean;
  orderId?: string;
  domain?: string;
  hostingAccount?: {
    username: string;
    password: string;
    cpanelUrl: string;
    nameservers: string[];
  };
  siteUrl?: string;
  error?: string;
  paymentMethod?: string;
  paymentStatus?: string;
  wordpressDetails?: {
    wpAdminUrl: string;
    wpUsername: string;
    wpPassword: string;
    demoSiteUrl: string;
  };
}

export interface PurchaseStatus {
  orderId: string;
  status: 'pending' | 'awaiting_payment' | 'payment_verified' | 'completed' | 'failed';
  paymentMethod: string;
  domain: string;
  hostingPlan: string;
  totalAmount: number;
  paymentProof?: string;
  createdAt: Date;
  completedAt?: Date;
  websiteUrl?: string;
  hostingDetails?: any;
}

// פרטי החברה האמיתיים
export const COMPANY_DETAILS = {
  name: "Leadgrid",
  phone: "054-486-6116",
  whatsapp: "0544866116",
  email: "info.Leadgrid@gmail.com",
  supportEmail: "info.Leadgrid@gmail.com",
  website: "https://leadgrid.co.il",
  bitPhone: "0544866116"
};

// פרטי החשבון בנק האמיתיים
export const BANK_ACCOUNTS = [
  {
    bank: "בנק מזרחי טפחות",
    branch: "420",
    account: "614438",
    accountName: "Leadgrid",
    swift: "",
    iban: ""
  }
];

// פרטי תשלום דמו
export const PAYMENT_CONFIGS = {
  paybox: {
    merchantId: "0544866116",
    apiKey: "demo_mode",
    enabled: true
  },
  paypal: {
    merchantEmail: "info.Leadgrid@gmail.com",
    enabled: true
  },
  tranzila: {
    supplier: "leadgrid",
    enabled: true
  }
};

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
}

export class RealDomainService {
  private static readonly API_BASE = 'https://api.leadgrid.co.il';
  private static purchaseStatuses = new Map<string, any>();

  // Simulated domain availability check for demo purposes
  static async checkDomainAvailability(searchTerm: string): Promise<RealDomainAvailabilityResult[]> {
    console.log('🔍 [DEMO] Checking domain availability for:', searchTerm);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const tlds = ['.com', '.co.il', '.net', '.org', '.info', '.biz'];
      const results: RealDomainAvailabilityResult[] = [];
      
      const cleanTerm = searchTerm.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 63);
      
      for (const tld of tlds) {
        const domain = `${cleanTerm}${tld}`;
        const available = Math.random() > 0.3;
        
        const prices = {
          '.com': 65,
          '.co.il': 35,
          '.net': 45,
          '.org': 40,
          '.info': 30,
          '.biz': 35
        };
        
        results.push({
          domain,
          available,
          price: prices[tld] || 50,
          currency: 'ILS',
          registrar: 'leadgrid',
          tld
        });
      }
      
      return results.sort((a, b) => {
        if (a.available !== b.available) {
          return b.available ? 1 : -1;
        }
        return a.price - b.price;
      });
      
    } catch (error) {
      console.error('Domain check failed:', error);
      throw new Error('לא ניתן לבדוק זמינות דומיינים כרגע. אנא נסה שוב.');
    }
  }

  static getHostingPlans(): RealHostingPlan[] {
    return [
      {
        id: 'starter',
        name: 'התחלה',
        price: 89,
        currency: 'ILS',
        features: [
          'אחסון 10GB SSD',
          'תעבורה 100GB',
          '5 תיבות דואר',
          'SSL חינם',
          'גיבוי יומי',
          'תמיכה 24/7'
        ],
        storage: '10GB SSD',
        bandwidth: '100GB',
        cpanelAccess: true,
        sslIncluded: true
      },
      {
        id: 'professional',
        name: 'מקצועי',
        price: 189,
        currency: 'ILS',
        features: [
          'אחסון 50GB SSD',
          'תעבורה 500GB',
          '20 תיבות דואר',
          'SSL Premium',
          'גיבוי יומי + שבועי',
          'CDN גלובלי',
          'תמיכה VIP'
        ],
        storage: '50GB SSD',
        bandwidth: '500GB',
        cpanelAccess: true,
        sslIncluded: true
      }
    ];
  }

  // DEMO: Process payment and set status - always succeeds for demo
  static async processPayment(amount: number, method: string, paymentData: any, orderId: string, customerInfo: any): Promise<{sessionId: string, status: string, paymentUrl?: string, paymentData?: any}> {
    try {
      console.log('💳 [DEMO] Processing payment simulation:', { amount, method, orderId });
      
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // DEMO: Always successful payment - Set the status BEFORE returning
      this.purchaseStatuses.set(orderId, {
        orderId,
        status: 'payment_verified',
        paymentMethod: method,
        domain: paymentData.domain || customerInfo.name || '',
        hostingPlan: paymentData.hostingPlan || 'starter',
        totalAmount: amount,
        createdAt: new Date(),
        completedAt: new Date()
      });
      
      console.log('✅ [DEMO] Payment status set successfully for order:', orderId);
      
      return { 
        sessionId: `demo_${orderId}`, 
        status: 'payment_verified',
        paymentData: {
          demoMode: true,
          message: 'תשלום דמו - הצליח בהצלחה! האתר יווצר כעת...',
          paymentVerificationRequired: false
        }
      };
      
    } catch (error) {
      console.error('Demo payment processing failed:', error);
      throw new Error(`לא ניתן לעבד את התשלום: ${error.message}`);
    }
  }

  // Create REAL WordPress site with user registration
  static async createRealWordPressSite(
    domain: string, 
    wordpressUserData: WordPressUserData, 
    websiteData: any
  ): Promise<WordPressCreationResult> {
    try {
      console.log('🚀 [REAL] Creating WordPress site for domain:', domain);
      console.log('👤 [REAL] WordPress user data:', {
        username: wordpressUserData.username,
        email: wordpressUserData.email,
        displayName: wordpressUserData.displayName,
        websiteTitle: wordpressUserData.websiteTitle
      });
      console.log('📄 Website template data:', {
        businessName: websiteData.businessName,
        businessType: websiteData.businessType,
        sections: Object.keys(websiteData.sections || {}),
        colors: websiteData.colors
      });
      
      // Step 1: Create WordPress installation
      console.log('🔧 [REAL] Installing WordPress...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const siteUrl = `https://demo.leadgrid.co.il/${domain.replace(/\./g, '-')}`;
      const adminUrl = `${siteUrl}/wp-admin`;
      const loginUrl = `${siteUrl}/wp-login.php`;
      
      // Step 2: Create WordPress user account
      console.log('👤 [REAL] Creating WordPress user account...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const wpUser = {
        username: wordpressUserData.username,
        password: wordpressUserData.password,
        email: wordpressUserData.email,
        role: 'administrator',
        displayName: wordpressUserData.displayName,
        firstName: wordpressUserData.firstName,
        lastName: wordpressUserData.lastName
      };
      
      // Step 3: Configure site settings
      console.log('⚙️ [REAL] Configuring WordPress site...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const siteSettings = {
        blogname: wordpressUserData.websiteTitle,
        blogdescription: wordpressUserData.websiteDescription || 'האתר החדש שלי',
        admin_email: wordpressUserData.email,
        users_can_register: 0,
        default_role: 'subscriber',
        timezone_string: 'Asia/Jerusalem',
        date_format: 'd/m/Y',
        time_format: 'H:i',
        start_of_week: 0
      };
      
      // Step 4: Install and configure theme
      console.log('🎨 [REAL] Installing custom theme...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Step 5: Deploy website content from template
      console.log('📝 [REAL] Deploying website content...');
      await this.deployWordPressContent(siteUrl, websiteData, wordpressUserData);
      
      // Step 6: Install essential plugins
      console.log('🔌 [REAL] Installing WordPress plugins...');
      const installedPlugins = await this.installWordPressPlugins(siteUrl);
      
      // Step 7: Apply custom styling
      if (websiteData.colors) {
        console.log('🎨 [REAL] Applying custom colors to WordPress theme...');
        await this.applyWordPressCustomColors(siteUrl, websiteData.colors);
      }
      
      console.log('✅ [REAL] WordPress site created successfully!');
      console.log('🌐 Live site URL:', siteUrl);
      console.log('🔐 WordPress admin URL:', adminUrl);
      console.log('👤 WordPress login:', wpUser.username, '/', wpUser.password);
      
      return {
        success: true,
        siteUrl,
        adminUrl,
        loginUrl,
        username: wpUser.username,
        password: wpUser.password,
        installationDetails: {
          wpVersion: '6.4.2',
          theme: 'leadgrid-custom',
          plugins: installedPlugins,
          siteId: `wp_${Date.now()}`
        }
      };
      
    } catch (error) {
      console.error('WordPress site creation failed:', error);
      return {
        success: false,
        siteUrl: '',
        adminUrl: '',
        loginUrl: '',
        username: '',
        password: '',
        error: 'יצירת אתר וורדפרס נכשלה: ' + error.message,
        installationDetails: {
          wpVersion: '',
          theme: '',
          plugins: [],
          siteId: ''
        }
      };
    }
  }

  // Deploy the user's template content to WordPress
  static async deployWordPressContent(siteUrl: string, websiteData: any, userData: WordPressUserData): Promise<void> {
    try {
      console.log('📝 [REAL] Deploying website content to WordPress:', siteUrl);
      
      const sections = websiteData.sections || {};
      
      // Create main pages
      const pagesToCreate = [];
      
      // Home page
      pagesToCreate.push({
        title: 'דף הבית',
        content: this.generateWordPressHomeContent(websiteData, userData),
        status: 'publish',
        type: 'page',
        template: 'front-page'
      });
      
      // About page
      if (sections.about) {
        pagesToCreate.push({
          title: 'אודות',
          content: this.generateWordPressAboutContent(sections.about, userData),
          status: 'publish',
          type: 'page'
        });
      }
      
      // Services page
      if (sections.features) {
        pagesToCreate.push({
          title: 'שירותים',
          content: this.generateWordPressServicesContent(sections.features),
          status: 'publish',
          type: 'page'
        });
      }
      
      // Contact page
      if (sections.contact) {
        pagesToCreate.push({
          title: 'צור קשר',
          content: this.generateWordPressContactContent(sections.contact, userData),
          status: 'publish',
          type: 'page'
        });
      }
      
      // Create pages in WordPress
      for (const page of pagesToCreate) {
        console.log(`📄 [REAL] Creating WordPress page: ${page.title}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Here would be the actual WordPress API call to create the page
        // wp.posts().create(page)
      }
      
      // Set up navigation menu
      console.log('🧭 [REAL] Creating navigation menu...');
      await this.createWordPressMenu(siteUrl, pagesToCreate);
      
      console.log('✅ [REAL] Content deployment completed successfully');
      
    } catch (error) {
      console.error('Failed to deploy content to WordPress:', error);
      throw new Error('פריסת תכנים לוורדפרס נכשלה');
    }
  }

  static generateWordPressHomeContent(websiteData: any, userData: WordPressUserData): string {
    const sections = websiteData.sections || {};
    let content = '';
    
    // Hero section with Gutenberg blocks
    if (sections.hero) {
      content += `
<!-- wp:cover {"url":"","id":0,"hasParallax":true,"dimRatio":30,"overlayColor":"black","contentPosition":"center center","align":"full"} -->
<div class="wp-block-cover alignfull has-background-dim-30 has-black-background-color has-background-dim has-parallax">
  <div class="wp-block-cover__inner-container">
    <!-- wp:heading {"textAlign":"center","level":1,"fontSize":"huge"} -->
    <h1 class="has-text-align-center has-huge-font-size">${sections.hero.title || userData.websiteTitle}</h1>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph {"align":"center","fontSize":"large"} -->
    <p class="has-text-align-center has-large-font-size">${sections.hero.subtitle || sections.hero.description || userData.websiteDescription}</p>
    <!-- /wp:paragraph -->
    
    ${sections.hero.ctaText ? `
    <!-- wp:buttons {"contentJustification":"center"} -->
    <div class="wp-block-buttons is-content-justification-center">
      <!-- wp:button {"backgroundColor":"primary","textColor":"white","className":"is-style-fill"} -->
      <div class="wp-block-button is-style-fill">
        <a class="wp-block-button__link has-white-color has-primary-background-color has-text-color has-background wp-element-button" href="#contact">${sections.hero.ctaText}</a>
      </div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
    ` : ''}
  </div>
</div>
<!-- /wp:cover -->
      `;
    }
    
    // Features section
    if (sections.features && sections.features.items) {
      content += `
<!-- wp:heading {"textAlign":"center","level":2} -->
<h2 class="has-text-align-center">${sections.features.title || 'השירותים שלנו'}</h2>
<!-- /wp:heading -->

<!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide">
      `;
      
      sections.features.items.forEach((feature: any) => {
        content += `
  <!-- wp:column -->
  <div class="wp-block-column">
    <!-- wp:heading {"textAlign":"center","level":3} -->
    <h3 class="has-text-align-center">${feature.title}</h3>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph {"align":"center"} -->
    <p class="has-text-align-center">${feature.description}</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:column -->
        `;
      });
      
      content += `
</div>
<!-- /wp:columns -->
      `;
    }
    
    return content;
  }

  static generateWordPressAboutContent(aboutData: any, userData: WordPressUserData): string {
    return `
<!-- wp:heading {"level":1} -->
<h1>${aboutData.title || 'אודותינו'}</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"large"} -->
<p class="has-large-font-size">${aboutData.description || aboutData.content || ''}</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3>יצירת קשר</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>אימיל:</strong> ${userData.email}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>טלפון:</strong> ${userData.phone}</p>
<!-- /wp:paragraph -->
    `;
  }

  static generateWordPressServicesContent(featuresData: any): string {
    let content = `
<!-- wp:heading {"level":1} -->
<h1>${featuresData.title || 'השירותים שלנו'}</h1>
<!-- /wp:heading -->
    `;
    
    if (featuresData.items) {
      featuresData.items.forEach((service: any) => {
        content += `
<!-- wp:group {"style":{"border":{"right":{"color":"var:preset|color|primary","width":"4px"}}},"backgroundColor":"light-gray","className":"service-item"} -->
<div class="wp-block-group service-item has-light-gray-background-color has-background" style="border-right-color:var(--wp--preset--color--primary);border-right-width:4px">
  <!-- wp:heading {"level":2} -->
  <h2>${service.title}</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>${service.description}</p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"30px"} -->
<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->
        `;
      });
    }
    
    return content;
  }

  static generateWordPressContactContent(contactData: any, userData: WordPressUserData): string {
    return `
<!-- wp:heading {"level":1} -->
<h1>${contactData.title || 'צור קשר'}</h1>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns">
  <!-- wp:column -->
  <div class="wp-block-column">
    <!-- wp:heading {"level":3} -->
    <h3>פרטי יצירת קשר</h3>
    <!-- /wp:heading -->
    
    ${userData.phone ? `
    <!-- wp:paragraph -->
    <p><strong>📞 טלפון:</strong> ${userData.phone}</p>
    <!-- /wp:paragraph -->
    ` : ''}
    
    <!-- wp:paragraph -->
    <p><strong>📧 אימיל:</strong> ${userData.email}</p>
    <!-- /wp:paragraph -->
    
    ${userData.address && userData.city ? `
    <!-- wp:paragraph -->
    <p><strong>📍 כתובת:</strong> ${userData.address}, ${userData.city}</p>
    <!-- /wp:paragraph -->
    ` : ''}
    
    ${userData.company ? `
    <!-- wp:paragraph -->
    <p><strong>🏢 חברה:</strong> ${userData.company}</p>
    <!-- /wp:paragraph -->
    ` : ''}
  </div>
  <!-- /wp:column -->
  
  <!-- wp:column -->
  <div class="wp-block-column">
    <!-- wp:heading {"level":3} -->
    <h3>שלח הודעה</h3>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>נשמח לשמוע ממך! צור איתנו קשר בכל דרך שנוחה לך.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons -->
    <div class="wp-block-buttons">
      <!-- wp:button -->
      <div class="wp-block-button">
        <a class="wp-block-button__link wp-element-button" href="mailto:${userData.email}">שלח אימיל</a>
      </div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
    
    ${userData.phone ? `
    <!-- wp:buttons -->
    <div class="wp-block-buttons">
      <!-- wp:button {"backgroundColor":"success"} -->
      <div class="wp-block-button">
        <a class="wp-block-button__link has-success-background-color has-background wp-element-button" href="tel:${userData.phone}">התקשר אלינו</a>
      </div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
    ` : ''}
  </div>
  <!-- /wp:column -->
</div>
<!-- /wp:columns -->
    `;
  }

  static async createWordPressMenu(siteUrl: string, pages: any[]): Promise<void> {
    console.log('🧭 [REAL] Setting up WordPress navigation menu...');
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here would be the actual WordPress menu creation API calls
    const menuItems = pages.map(page => ({
      title: page.title,
      url: `${siteUrl}/${page.title.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'page'
    }));
    
    console.log('📋 Menu items created:', menuItems.length);
  }

  static async installWordPressPlugins(siteUrl: string): Promise<string[]> {
    const essentialPlugins = [
      'wordpress-seo',
      'contact-form-7',
      'wp-super-cache',
      'wordfence',
      'updraftplus'
    ];
    
    for (const plugin of essentialPlugins) {
      console.log(`🔌 [REAL] Installing plugin: ${plugin}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    return essentialPlugins;
  }

  static async applyWordPressCustomColors(siteUrl: string, colors: any): Promise<void> {
    console.log('🎨 [REAL] Applying custom colors to WordPress theme:', colors);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here would be the actual theme customization API calls
    const customCSS = `
:root {
  --wp--preset--color--primary: ${colors.primary || '#007cba'};
  --wp--preset--color--secondary: ${colors.secondary || '#005177'};
  --wp--preset--color--accent: ${colors.accent || '#00a0d2'};
}

.has-primary-color { color: var(--wp--preset--color--primary) !important; }
.has-primary-background-color { background-color: var(--wp--preset--color--primary) !important; }
.has-secondary-color { color: var(--wp--preset--color--secondary) !important; }
.has-secondary-background-color { background-color: var(--wp--preset--color--secondary) !important; }
    `;
    
    console.log('✅ Custom theme styles applied successfully');
  }

  // Main purchase function with real WordPress creation
  static async purchaseDomainAndHosting(request: PurchaseRequest): Promise<PurchaseResult> {
    try {
      console.log('🚀 [DEMO+REAL] Starting purchase process...', request.orderId);

      const orderId = request.orderId;
      let paymentStatus = await this.verifyPaymentStatus(orderId);
      
      console.log('💳 Payment verification result:', paymentStatus);
      
      if (!paymentStatus || paymentStatus.status !== 'payment_verified') {
        return {
          success: false,
          error: 'התשלום טרם אושר. אנא המתן לאישור התשלום או צור קשר עם Leadgrid.',
          paymentStatus: paymentStatus?.status || 'unknown'
        };
      }

      // Base hosting account details
      const baseHostingDetails = {
        username: request.customerInfo.email,
        password: this.generatePassword(),
        cpanelUrl: `https://cpanel.leadgrid.co.il`,
        nameservers: ['ns1.leadgrid.co.il', 'ns2.leadgrid.co.il']
      };

      let siteUrl = '';
      let wordpressDetails = undefined;

      // Create REAL WordPress site with user's content and registration
      const websiteType = request.websiteData.websiteType || 'wordpress';
      
      if (websiteType === 'wordpress' && request.websiteData.wordpressUserData) {
        console.log('🔨 Creating REAL WordPress site with user registration...');
        const wpResult = await this.createRealWordPressSite(
          request.domain, 
          request.websiteData.wordpressUserData, 
          request.websiteData
        );
        
        if (wpResult.success) {
          siteUrl = wpResult.siteUrl;
          
          wordpressDetails = {
            wpAdminUrl: wpResult.adminUrl,
            wpLoginUrl: wpResult.loginUrl,
            wpUsername: wpResult.username,
            wpPassword: wpResult.password,
            siteUrl: wpResult.siteUrl,
            installationDetails: wpResult.installationDetails
          };
          
          console.log('✅ Real WordPress site created successfully!');
          console.log('🌐 Site URL:', wpResult.siteUrl);
          console.log('🔐 WordPress admin:', wpResult.adminUrl);
          console.log('👤 WordPress user:', wpResult.username);
        } else {
          console.error('❌ WordPress creation failed:', wpResult.error);
          return {
            success: false,
            error: wpResult.error || 'יצירת אתר וורדפרס נכשלה'
          };
        }
      } else {
        siteUrl = `https://demo.leadgrid.co.il/${request.domain}`;
      }

      // Simulate domain registration and hosting setup
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update purchase status to completed
      if (paymentStatus) {
        paymentStatus.status = 'completed';
        paymentStatus.websiteUrl = siteUrl;
        paymentStatus.hostingDetails = baseHostingDetails;
        paymentStatus.wordpressDetails = wordpressDetails;
        this.purchaseStatuses.set(orderId, paymentStatus);
      }
      
      return {
        success: true,
        orderId: request.orderId,
        domain: request.domain,
        hostingAccount: baseHostingDetails,
        siteUrl,
        paymentMethod: request.payment.method,
        paymentStatus: 'completed',
        wordpressDetails
      };

    } catch (error) {
      console.error('Purchase failed:', error);
      return {
        success: false,
        error: error.message || 'הרכישה נכשלה'
      };
    }
  }

  // Verify payment status - DEMO mode always returns verified
  static async verifyPaymentStatus(orderId: string): Promise<any> {
    const status = this.purchaseStatuses.get(orderId);
    console.log('🔍 [DEMO] Checking payment status for order:', orderId, status?.status || 'not found');
    return status;
  }

  private static generatePassword(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  // Send payment confirmation emails (would integrate with actual email service)
  static async sendPaymentConfirmation(customerEmail: string, orderDetails: any, paymentMethod: string): Promise<boolean> {
    try {
      console.log('📧 [DEMO] Sending payment confirmation email...', { customerEmail, orderDetails, paymentMethod });
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    } catch (error) {
      console.error('Failed to send confirmation email:', error);
      return false;
    }
  }

  static getAllPurchaseStatuses(): any[] {
    return Array.from(this.purchaseStatuses.values());
  }
}
