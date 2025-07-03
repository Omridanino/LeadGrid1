
// LEADGRID Domain Registration & Hosting Service
// Third-party service connecting to Israeli domain registrars with profit margins

export interface DomainAvailabilityResult {
  domain: string;
  available: boolean;
  ourPrice: number;        // LEADGRID price (with margin)
  costPrice: number;       // Registrar cost price
  currency: string;
  registrar: 'isoc' | 'namecheap' | 'godaddy';
  renewable: boolean;
  profit: number;          // Our profit margin
}

export interface HostingPlan {
  id: string;
  name: string;
  ourPrice: number;        // LEADGRID price
  costPrice: number;       // Our hosting costs
  currency: string;
  features: string[];
  storage: string;
  bandwidth: string;
  email: number;
  ssl: boolean;
  backup: boolean;
  support: string;
  profit: number;          // Our profit margin
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
    method: 'credit_card' | 'paypal' | 'bit' | 'bank_transfer';
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
  invoiceUrl?: string;    // Receipt URL
  error?: string;
  nextSteps?: string[];
  totalPaid?: number;
  leadgridProfit?: number; // Our total profit from this sale
}

export class LeadgridDomainService {
  private static readonly API_BASE = 'https://api.leadgrid.co.il';
  
  // Israeli registrar connections
  private static readonly ISOC_API_KEY = process.env.ISOC_API_KEY;
  private static readonly NAMECHEAP_API_KEY = process.env.NAMECHEAP_API_KEY;
  
  // TLD prices with our profit margins
  private static readonly TLD_PRICES = {
    '.co.il': { 
      ourPrice: 49,      // What we charge
      costPrice: 25,     // What we pay to ISOC
      profit: 24,        // Our profit
      registrar: 'isoc',
      hebrew: 'דוט-קו-איל' 
    },
    '.com': { 
      ourPrice: 79,      // What we charge
      costPrice: 45,     // What we pay to registrar
      profit: 34,        // Our profit
      registrar: 'namecheap',
      hebrew: 'דוט-קום' 
    },
    '.net': { 
      ourPrice: 69, 
      costPrice: 40, 
      profit: 29, 
      registrar: 'namecheap',
      hebrew: 'דוט-נט' 
    },
    '.org': { 
      ourPrice: 65, 
      costPrice: 35, 
      profit: 30, 
      registrar: 'namecheap',
      hebrew: 'דוט-אורג' 
    },
    '.info': { 
      ourPrice: 55, 
      costPrice: 25, 
      profit: 30, 
      registrar: 'namecheap',
      hebrew: 'דוט-אינפו' 
    },
    '.biz': { 
      ourPrice: 59, 
      costPrice: 30, 
      profit: 29, 
      registrar: 'namecheap',
      hebrew: 'דוט-ביז' 
    }
  };

  // LEADGRID Hosting Plans with profit margins
  static getHostingPlans(): HostingPlan[] {
    return [
      {
        id: 'starter',
        name: 'התחלה',
        ourPrice: 89,
        costPrice: 35,      // Our hosting costs
        profit: 54,         // Our profit
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
        ourPrice: 189,
        costPrice: 75,      // Our hosting costs
        profit: 114,        // Our profit
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
        ourPrice: 399,
        costPrice: 150,     // Our hosting costs
        profit: 249,        // Our profit
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

  // Check domain availability with profit calculations
  static async checkDomainAvailability(searchTerm: string): Promise<DomainAvailabilityResult[]> {
    const results: DomainAvailabilityResult[] = [];
    
    for (const [tld, info] of Object.entries(this.TLD_PRICES)) {
      const domain = `${searchTerm.toLowerCase().replace(/\s+/g, '')}${tld}`;
      
      try {
        // Simulate API call to Israeli registrars
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
        
        const available = Math.random() > 0.3; // 70% availability rate
        
        results.push({
          domain,
          available,
          ourPrice: info.ourPrice,
          costPrice: info.costPrice,
          profit: info.profit,
          currency: 'ILS',
          registrar: info.registrar as any,
          renewable: true
        });
      } catch (error) {
        console.error(`Error checking ${domain}:`, error);
        results.push({
          domain,
          available: false,
          ourPrice: info.ourPrice,
          costPrice: info.costPrice,
          profit: 0,
          currency: 'ILS',
          registrar: info.registrar as any,
          renewable: false
        });
      }
    }
    
    return results.sort((a, b) => {
      // Sort by availability first, then by price
      if (a.available !== b.available) {
        return b.available ? 1 : -1;
      }
      return a.ourPrice - b.ourPrice;
    });
  }

  // Purchase domain and hosting with full profit tracking
  static async purchaseDomainAndHosting(request: DomainPurchaseRequest): Promise<PurchaseResult> {
    try {
      console.log('Starting LEADGRID domain purchase process...', request);
      
      // Calculate total profits
      const domainTld = request.domain.substring(request.domain.lastIndexOf('.'));
      const domainProfit = this.TLD_PRICES[domainTld]?.profit || 0;
      const hostingProfit = request.plan.profit;
      const privacyProfit = request.payment.whoisPrivacy ? 10 : 0; // ₪15 charge, ₪5 cost, ₪10 profit
      const totalProfit = (domainProfit + hostingProfit + privacyProfit) * request.payment.years;
      
      const totalPrice = this.calculateTotalPrice(request);
      
      // Step 1: Validate payment with Israeli payment processors
      const paymentValid = await this.validateIsraeliPayment(request.payment);
      if (!paymentValid) {
        throw new Error('תשלום לא תקין. אנא בדוק את פרטي התשלום');
      }

      // Step 2: Purchase domain from Israeli registrar
      const domainPurchased = await this.purchaseFromRegistrar(request.domain, request.customer);
      if (!domainPurchased.success) {
        throw new Error('שגיאה ברכישת הדומיין. אנא נסה שוב');
      }

      // Step 3: Setup hosting account on our servers
      const hostingAccount = await this.setupLeadgridHosting(request);
      
      // Step 4: Configure DNS and SSL
      await this.configureDNSAndSSL(request.domain);
      
      // Step 5: Deploy website
      const siteUrl = await this.deploySite(request.domain, hostingAccount.accountId);
      
      // Step 6: Generate Israeli invoice/receipt
      const invoiceUrl = await this.generateIsraeliInvoice(request, totalPrice, totalProfit);
      
      // Step 7: Send welcome email in Hebrew
      await this.sendWelcomeEmail(request.customer.email, {
        domain: request.domain,
        siteUrl,
        accountId: hostingAccount.accountId,
        invoiceUrl
      });

      // Step 8: Record transaction in our CRM
      await this.recordTransaction(request, totalPrice, totalProfit);

      return {
        success: true,
        orderId: `LG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        domain: request.domain,
        siteUrl,
        invoiceUrl,
        totalPaid: totalPrice,
        leadgridProfit: totalProfit,
        nextSteps: [
          `האתר שלך פעיל וזמין בכתובת: ${siteUrl}`,
          'קבלה וחשבונית נשלחו למייל שלך',
          'פרטי הגישה לפאנל הניהול נשלחו במייל נפרד',
          'ניתן לערוך את האתר בכל עת דרך הפאנל',
          `הדומיין יחודש אוטומטית ב-${request.payment.autoRenew ? 'כן' : 'לא'}`,
          'תמיכה טכנית זמינה 24/7 בעברית'
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

  private static calculateTotalPrice(request: DomainPurchaseRequest): number {
    const domainTld = request.domain.substring(request.domain.lastIndexOf('.'));
    const domainPrice = this.TLD_PRICES[domainTld]?.ourPrice || 0;
    const hostingPrice = request.plan.ourPrice;
    const privacyPrice = request.payment.whoisPrivacy ? 15 : 0;
    return (domainPrice + hostingPrice + privacyPrice) * request.payment.years;
  }

  private static async validateIsraeliPayment(payment: any): Promise<boolean> {
    // Integrate with Israeli payment processors (Tranzila, etc.)
    await new Promise(resolve => setTimeout(resolve, 2000));
    return Math.random() > 0.05; // 95% success rate
  }

  private static async purchaseFromRegistrar(domain: string, customer: any): Promise<{ success: boolean }> {
    // Purchase from ISOC (.co.il) or international registrars
    await new Promise(resolve => setTimeout(resolve, 3000));
    return { success: Math.random() > 0.1 }; // 90% success rate
  }

  private static async setupLeadgridHosting(request: DomainPurchaseRequest): Promise<{ accountId: string }> {
    // Setup hosting on our infrastructure
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
      accountId: `LEADGRID_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  private static async configureDNSAndSSL(domain: string): Promise<void> {
    // Configure DNS and SSL on our servers
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(`DNS and SSL configured for ${domain} on LEADGRID servers`);
  }

  private static async deploySite(domain: string, accountId: string): Promise<string> {
    // Deploy the generated website
    await new Promise(resolve => setTimeout(resolve, 3000));
    return `https://${domain}`;
  }

  private static async generateIsraeliInvoice(request: any, total: number, profit: number): Promise<string> {
    // Generate proper Israeli invoice with VAT
    await new Promise(resolve => setTimeout(resolve, 1000));
    const invoiceId = `INV_${Date.now()}`;
    return `https://invoices.leadgrid.co.il/${invoiceId}`;
  }

  private static async sendWelcomeEmail(email: string, details: any): Promise<void> {
    // Send Hebrew welcome email with all details
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(`Hebrew welcome email sent to ${email}`, details);
  }

  private static async recordTransaction(request: any, total: number, profit: number): Promise<void> {
    // Record in our CRM/accounting system
    await new Promise(resolve => setTimeout(resolve, 300));
    console.log(`Transaction recorded: Total ₪${total}, Profit ₪${profit}`);
  }

  // Get domain suggestions based on business
  static getDomainSuggestions(businessName: string, businessType: string): string[] {
    const cleanName = businessName.toLowerCase().replace(/\s+/g, '');
    const suggestions = [
      cleanName,
      `${cleanName}il`,
      `${cleanName}israel`,
      `${cleanName}pro`,
      `${cleanName}center`
    ];

    // Add business type specific suggestions
    if (businessType.includes('משפט')) {
      suggestions.push(`${cleanName}law`, `${cleanName}legal`);
    } else if (businessType.includes('רפואה')) {
      suggestions.push(`${cleanName}clinic`, `${cleanName}health`);
    } else if (businessType.includes('חינוך')) {
      suggestions.push(`${cleanName}academy`, `${cleanName}edu`);
    }

    return suggestions.slice(0, 6);
  }
}
