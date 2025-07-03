
// LEADGRID Domain Registration & Hosting Service
export interface DomainAvailabilityResult {
  domain: string;
  available: boolean;
  price: number;
  currency: string;
  registrar: 'namecheap' | 'godaddy' | 'leadgrid';
  renewable: boolean;
}

export interface HostingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  features: string[];
  storage: string;
  bandwidth: string;
  email: number;
  ssl: boolean;
  backup: boolean;
  support: string;
  recommended?: boolean;
}

export interface DomainPurchaseRequest {
  domain: string;
  plan: HostingPlan;
  customer: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
  billing: {
    address: string;
    city: string;
    country: string;
    zipCode: string;
  };
  payment: {
    method: 'credit_card' | 'paypal' | 'bank_transfer';
    years: number;
    autoRenew: boolean;
    whoisPrivacy: boolean;
  };
}

export interface PurchaseResult {
  success: boolean;
  orderId?: string;
  domain?: string;
  siteUrl?: string;
  error?: string;
  nextSteps?: string[];
}

export class LeadgridDomainService {
  private static readonly API_BASE = 'https://api.leadgrid.co.il';
  private static readonly NAMECHEAP_API_KEY = process.env.NAMECHEAP_API_KEY;
  private static readonly GODADDY_API_KEY = process.env.GODADDY_API_KEY;

  // Hebrew TLD prices
  private static readonly TLD_PRICES = {
    '.com': { price: 65, hebrew: 'דוט-קום' },
    '.co.il': { price: 35, hebrew: 'דוט-קו-איל' },
    '.net': { price: 45, hebrew: 'דוט-נט' },
    '.org': { price: 40, hebrew: 'דוט-אורג' },
    '.info': { price: 30, hebrew: 'דוט-אינפו' },
    '.biz': { price: 35, hebrew: 'דוט-ביז' },
    '.me': { price: 55, hebrew: 'דוט-מי' },
    '.online': { price: 25, hebrew: 'דוט-אונליין' }
  };

  // LEADGRID Hosting Plans
  static getHostingPlans(): HostingPlan[] {
    return [
      {
        id: 'starter',
        name: 'התחלה',
        price: 89,
        currency: 'ILS',
        features: [
          'דומיין חינם לשנה ראשונה',
          'SSL מאובטח',
          'גיבוי יומי אוטומטי',
          'תמיכה טכנית בעברית',
          'כלי בניית אתרים מתקדם',
          'אנליטיקס בסיסי'
        ],
        storage: '10GB SSD',
        bandwidth: '100GB',
        email: 5,
        ssl: true,
        backup: true,
        support: 'תמיכה בשעות העבודה'
      },
      {
        id: 'professional',
        name: 'מקצועי',
        price: 189,
        currency: 'ILS',
        features: [
          'דומיין חינם לשנה ראשונה',
          'SSL פרימיום',
          'גיבוי יומי + שבועי',
          'CDN גלובלי למהירות מקסימלית',
          'כלי SEO מתקדמים',
          'אנליטיקס מפורט',
          'תמיכה עדיפות גבוהה',
          'אפליקציית ניהול נייד'
        ],
        storage: '50GB SSD',
        bandwidth: '500GB',
        email: 25,
        ssl: true,
        backup: true,
        support: 'תמיכה 24/7',
        recommended: true
      },
      {
        id: 'enterprise',
        name: 'ארגוני',
        price: 399,
        currency: 'ILS',
        features: [
          'דומיין חינם לשנה ראשונה',
          'SSL Enterprise',
          'גיבוי מתמיד + שחזור מהיר',
          'CDN פרימיום',
          'כלי שיווק ו-CRM מובנים',
          'דוחות מתקדמים',
          'תמיכה VIP ייעודית',
          'שירותי פיתוח מותאמים',
          'הדרכה אישית'
        ],
        storage: '200GB SSD',
        bandwidth: 'ללא הגבלה',
        email: -1, // Unlimited
        ssl: true,
        backup: true,
        support: 'תמיכה VIP 24/7'
      }
    ];
  }

  // Check domain availability across multiple TLDs
  static async checkDomainAvailability(searchTerm: string): Promise<DomainAvailabilityResult[]> {
    const results: DomainAvailabilityResult[] = [];
    
    for (const [tld, info] of Object.entries(this.TLD_PRICES)) {
      const domain = `${searchTerm.toLowerCase().replace(/\s+/g, '')}${tld}`;
      
      try {
        // Simulate API call to registrar
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
        
        const available = Math.random() > 0.3; // 70% availability rate
        
        results.push({
          domain,
          available,
          price: info.price,
          currency: 'ILS',
          registrar: 'leadgrid',
          renewable: true
        });
      } catch (error) {
        console.error(`Error checking ${domain}:`, error);
        results.push({
          domain,
          available: false,
          price: info.price,
          currency: 'ILS',
          registrar: 'leadgrid',
          renewable: false
        });
      }
    }
    
    return results.sort((a, b) => {
      // Sort by availability first, then by price
      if (a.available !== b.available) {
        return b.available ? 1 : -1;
      }
      return a.price - b.price;
    });
  }

  // Purchase domain and hosting
  static async purchaseDomainAndHosting(request: DomainPurchaseRequest): Promise<PurchaseResult> {
    try {
      console.log('Starting LEADGRID domain purchase process...', request);
      
      // Step 1: Validate payment
      const paymentValid = await this.validatePayment(request.payment);
      if (!paymentValid) {
        throw new Error('תשלום לא תקין. אנא בדוק את פרטי התשלום');
      }

      // Step 2: Reserve domain
      const domainReserved = await this.reserveDomain(request.domain);
      if (!domainReserved) {
        throw new Error('הדומיין כבר לא זמין. אנא בחר דומיין אחר');
      }

      // Step 3: Setup hosting account
      const hostingAccount = await this.setupHostingAccount(request);
      
      // Step 4: Configure DNS and SSL
      await this.configureDNSAndSSL(request.domain);
      
      // Step 5: Deploy site
      const siteUrl = await this.deploySite(request.domain, hostingAccount.accountId);
      
      // Step 6: Send welcome email
      await this.sendWelcomeEmail(request.customer.email, {
        domain: request.domain,
        siteUrl,
        accountId: hostingAccount.accountId
      });

      return {
        success: true,
        orderId: `LG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        domain: request.domain,
        siteUrl,
        nextSteps: [
          'האתר שלך פעיל וזמין בכתובת: ' + siteUrl,
          'פרטי הגישה נשלחו לאימייל שלך',
          'ניתן לערוך את האתר דרך הפאנל הניהול',
          'הדומיין יחודש אוטומטיות מדי שנה'
        ]
      };
    } catch (error) {
      console.error('Domain purchase failed:', error);
      return {
        success: false,
        error: error.message || 'שגיאה בעיבוד ההזמנה. אנא נסה שוב או צור קשר עמנו'
      };
    }
  }

  private static async validatePayment(payment: any): Promise<boolean> {
    // Simulate payment validation
    await new Promise(resolve => setTimeout(resolve, 2000));
    return Math.random() > 0.05; // 95% success rate
  }

  private static async reserveDomain(domain: string): Promise<boolean> {
    // Simulate domain reservation
    await new Promise(resolve => setTimeout(resolve, 1500));
    return Math.random() > 0.1; // 90% success rate
  }

  private static async setupHostingAccount(request: DomainPurchaseRequest): Promise<{ accountId: string }> {
    // Simulate hosting account creation
    await new Promise(resolve => setTimeout(resolve, 3000));
    return {
      accountId: `HOST_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  private static async configureDNSAndSSL(domain: string): Promise<void> {
    // Simulate DNS and SSL configuration
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`DNS and SSL configured for ${domain}`);
  }

  private static async deploySite(domain: string, accountId: string): Promise<string> {
    // Simulate site deployment
    await new Promise(resolve => setTimeout(resolve, 4000));
    return `https://${domain}`;
  }

  private static async sendWelcomeEmail(email: string, details: any): Promise<void> {
    // Simulate welcome email
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(`Welcome email sent to ${email}`, details);
  }

  // Get domain suggestions based on business type
  static getDomainSuggestions(businessName: string, businessType: string): string[] {
    const cleanName = businessName.toLowerCase().replace(/\s+/g, '');
    const suggestions = [
      cleanName,
      `${cleanName}il`,
      `${cleanName}pro`,
      `${cleanName}hub`,
      `${cleanName}center`,
      `get${cleanName}`,
      `${cleanName}online`,
      `${cleanName}store`
    ];

    // Add business type specific suggestions
    if (businessType.includes('משפט')) {
      suggestions.push(`${cleanName}law`, `${cleanName}legal`);
    } else if (businessType.includes('רפואה')) {
      suggestions.push(`${cleanName}health`, `${cleanName}clinic`);
    } else if (businessType.includes('חינוך')) {
      suggestions.push(`${cleanName}edu`, `${cleanName}academy`);
    }

    return suggestions.slice(0, 8);
  }
}
