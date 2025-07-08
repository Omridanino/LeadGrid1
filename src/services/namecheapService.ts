
// Namecheap API Service - Real Domain Registration
export interface NamecheapDomainResult {
  domain: string;
  available: boolean;
  price: number;
  currency: string;
  registrar: string;
  suggestions?: string[];
}

export interface NamecheapHostingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  features: string[];
  storage: string;
  bandwidth: string;
  popular?: boolean;
}

export interface DomainPurchaseData {
  domain: string;
  years: number;
  whoisPrivacy: boolean;
  autoRenew: boolean;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    zipCode: string;
  };
}

export interface PurchaseResult {
  success: boolean;
  orderId?: string;
  domain?: string;
  message?: string;
  error?: string;
  siteUrl?: string;
  status?: 'pending' | 'processing' | 'completed' | 'failed';
}

export class NamecheapService {
  private static readonly SANDBOX_URL = 'https://api.sandbox.namecheap.com/xml.response';
  private static readonly PRODUCTION_URL = 'https://api.namecheap.com/xml.response';

  // מחירי דומיינים עם רווח של ₪55 (עגולים למעלה)
  static getDomainPricing() {
    return {
      '.com': { wholesale: 12, retail: 70, profit: 55 }, // $12 ≈ ₪44 + ₪55 = ₪70
      '.co.il': { wholesale: 20, retail: 80, profit: 55 }, // $20 ≈ ₪74 + ₪55 = ₪80  
      '.net': { wholesale: 14, retail: 75, profit: 55 }, // $14 ≈ ₪52 + ₪55 = ₪75
      '.org': { wholesale: 16, retail: 80, profit: 55 }, // $16 ≈ ₪59 + ₪55 = ₪80
      '.io': { wholesale: 45, retail: 220, profit: 55 }, // $45 ≈ ₪166 + ₪55 = ₪220
      '.info': { wholesale: 18, retail: 85, profit: 55 }, // $18 ≈ ₪66 + ₪55 = ₪85
      '.biz': { wholesale: 16, retail: 80, profit: 55 } // $16 ≈ ₪59 + ₪55 = ₪80
    };
  }

  // תוכניות אחסון עם רווח של ₪55 לחודש (עגולים למעלה)
  static getHostingPlans(): NamecheapHostingPlan[] {
    return [
      {
        id: 'basic',
        name: 'בסיסי',
        originalPrice: 8, // $8/חודש ≈ ₪30
        price: 90, // ₪30 + ₪55 רווח = ₪90
        features: ['SSL חינם', 'גיבוי שבועי', 'תמיכה בעברית', 'cPanel קל לשימוש'],
        storage: '20GB SSD',
        bandwidth: '500GB',
        popular: false
      },
      {
        id: 'professional',
        name: 'מקצועי',
        originalPrice: 12, // $12/חודש ≈ ₪44
        price: 100, // ₪44 + ₪55 רווח = ₪100
        features: ['SSL חינם', 'CDN מהיר', 'גיבוי יומי', 'תמיכה מועדפת', 'הגנה מפני malware'],
        storage: '40GB SSD',
        bandwidth: 'ללא הגבלה',
        popular: true
      },
      {
        id: 'business',
        name: 'עסקי',
        originalPrice: 18, // $18/חודש ≈ ₪66
        price: 125, // ₪66 + ₪55 רווח = ₪125
        features: ['SSL חינם', 'CDN גלובלי', 'גיבוי יומי', 'תמיכה VIP', 'הגנה מפני DDoS', 'IP ייעודי'],
        storage: '100GB SSD',
        bandwidth: 'ללא הגבלה',
        popular: false
      }
    ];
  }

  // בדיקת זמינות דומיין דרך Namecheap API
  static async checkDomainAvailability(domain: string): Promise<NamecheapDomainResult[]> {
    try {
      const apiUser = localStorage.getItem('NAMECHEAP_API_USER');
      const apiKey = localStorage.getItem('NAMECHEAP_API_KEY');
      const useSandbox = localStorage.getItem('NAMECHEAP_SANDBOX') === 'true';

      if (!apiKey || !apiUser) {
        console.log('⚠️ Namecheap API לא מוגדר, משתמש בסימולציה');
        return this.simulateDomainCheck(domain);
      }

      const results: NamecheapDomainResult[] = [];
      const pricing = this.getDomainPricing();
      
      // בדיקת הדומיין הראשי
      const mainDomain = domain.includes('.') ? domain : `${domain}.com`;
      const mainResult = await this.checkSingleDomainAPI(mainDomain, pricing, apiUser, apiKey, useSandbox);
      results.push(mainResult);

      // הצעות חלופיות אם הדומיין תפוס
      if (!mainResult.available) {
        const baseName = domain.split('.')[0];
        const suggestions = [
          `${baseName}.net`,
          `${baseName}.org`, 
          `${baseName}.info`,
          `get${baseName}.com`
        ];

        for (const suggestion of suggestions.slice(0, 3)) {
          const suggestionResult = await this.checkSingleDomainAPI(suggestion, pricing, apiUser, apiKey, useSandbox);
          results.push(suggestionResult);
        }
      }

      return results;
    } catch (error) {
      console.error('❌ בדיקת זמינות דומיין נכשלה:', error);
      return this.simulateDomainCheck(domain);
    }
  }

  private static async checkSingleDomainAPI(
    domain: string, 
    pricing: any, 
    apiUser: string, 
    apiKey: string, 
    useSandbox: boolean
  ): Promise<NamecheapDomainResult> {
    try {
      const apiUrl = useSandbox ? this.SANDBOX_URL : this.PRODUCTION_URL;
      
      const params = new URLSearchParams({
        ApiUser: apiUser,
        ApiKey: apiKey,
        UserName: apiUser,
        Command: 'namecheap.domains.check',
        ClientIp: '127.0.0.1',
        DomainList: domain
      });

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
      });

      const text = await response.text();
      console.log('📋 תגובת Namecheap:', text);
      
      const available = text.includes('Available="true"');
      const extension = '.' + domain.split('.').pop();
      const price = pricing[extension]?.retail || 75;
      
      return {
        domain,
        available,
        price,
        currency: 'ILS',
        registrar: 'namecheap'
      };
    } catch (error) {
      console.error('❌ Namecheap בדיקה נכשלה:', error);
      return this.simulateDomainCheck(domain)[0];
    }
  }

  // רכישת דומיין דרך Namecheap API
  static async purchaseDomain(purchaseData: DomainPurchaseData): Promise<PurchaseResult> {
    try {
      const apiUser = localStorage.getItem('NAMECHEAP_API_USER');
      const apiKey = localStorage.getItem('NAMECHEAP_API_KEY');
      const useSandbox = localStorage.getItem('NAMECHEAP_SANDBOX') === 'true';

      if (!apiKey || !apiUser) {
        console.log('⚠️ Namecheap API לא מוגדר, משתמש בסימולציה');
        return this.simulateDomainPurchase(purchaseData);
      }

      const apiUrl = useSandbox ? this.SANDBOX_URL : this.PRODUCTION_URL;
      
      const params = new URLSearchParams({
        ApiUser: apiUser,
        ApiKey: apiKey,
        UserName: apiUser,
        Command: 'namecheap.domains.create',
        ClientIp: '127.0.0.1',
        DomainName: purchaseData.domain,
        Years: purchaseData.years.toString(),
        AddFreeWhoisguard: purchaseData.whoisPrivacy ? 'yes' : 'no',
        WGEnabled: purchaseData.whoisPrivacy ? 'yes' : 'no',
        RegistrantFirstName: purchaseData.customerInfo.firstName,
        RegistrantLastName: purchaseData.customerInfo.lastName,
        RegistrantAddress1: purchaseData.customerInfo.address,
        RegistrantCity: purchaseData.customerInfo.city,
        RegistrantStateProvince: 'N/A',
        RegistrantPostalCode: purchaseData.customerInfo.zipCode,
        RegistrantCountry: purchaseData.customerInfo.country,
        RegistrantPhone: purchaseData.customerInfo.phone,
        RegistrantEmailAddress: purchaseData.customerInfo.email
      });

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
      });

      const text = await response.text();
      console.log('📋 תגובת רכישה מ-Namecheap:', text);
      
      const success = text.includes('CommandResponse Type="OK"');
      
      if (success) {
        return {
          success: true,
          orderId: `NC_${Date.now()}`,
          domain: purchaseData.domain,
          message: 'הדומיין נרכש בהצלחה דרך Namecheap!',
          status: 'completed',
          siteUrl: `https://${purchaseData.domain}`
        };
      } else {
        throw new Error('Namecheap רכישה נכשלה');
      }
    } catch (error) {
      console.error('❌ רכישה דרך Namecheap נכשלה:', error);
      return {
        success: false,
        error: `רכישה נכשלה: ${error.message}`,
        status: 'failed'
      };
    }
  }

  // סימולציה לפיתוח
  private static simulateDomainCheck(domain: string): NamecheapDomainResult[] {
    const pricing = this.getDomainPricing();
    const baseName = domain.split('.')[0];
    const extensions = ['.com', '.net', '.org', '.info'];
    
    return extensions.map(ext => {
      const fullDomain = `${baseName}${ext}`;
      const available = Math.random() > 0.3;
      const price = pricing[ext]?.retail || 75;
      
      return {
        domain: fullDomain,
        available,
        price,
        currency: 'ILS',
        registrar: 'demo'
      };
    });
  }

  private static simulateDomainPurchase(purchaseData: DomainPurchaseData): Promise<PurchaseResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (Math.random() > 0.05) {
          resolve({
            success: true,
            orderId: `DEMO_${Date.now()}`,
            domain: purchaseData.domain,
            message: 'הדומיין נרכש בהצלחה (דמו)',
            status: 'completed',
            siteUrl: `https://${purchaseData.domain}`
          });
        } else {
          resolve({
            success: false,
            error: 'רכישה נכשלה (דמו)',
            status: 'failed'
          });
        }
      }, 2000);
    });
  }

  // חישוב מחיר כולל
  static calculateTotalPrice(domain: string, hostingPlanId: string, years: number = 1): number {
    const hostingPlan = this.getHostingPlans().find(p => p.id === hostingPlanId);
    if (!hostingPlan) return 0;

    const extension = '.' + domain.split('.').pop();
    const domainPricing = this.getDomainPricing();
    const domainPrice = domainPricing[extension]?.retail || 75;

    // מחיר כולל: דומיין לשנה + אחסון לשנה
    const hostingYearlyPrice = hostingPlan.price * 12;
    
    return (domainPrice * years) + hostingYearlyPrice;
  }

  // פירוט מחירים ורווחים
  static getPriceBreakdown(domain: string, hostingPlanId: string, years: number = 1) {
    const hostingPlan = this.getHostingPlans().find(p => p.id === hostingPlanId);
    if (!hostingPlan) return null;

    const extension = '.' + domain.split('.').pop();
    const domainPricing = this.getDomainPricing();
    const domainPrice = domainPricing[extension]?.retail || 75;
    const domainProfit = domainPricing[extension]?.profit || 55;
    const hostingYearlyPrice = hostingPlan.price * 12;
    const hostingYearlyProfit = 55 * 12; // ₪55/חודש × 12

    return {
      domain: {
        price: domainPrice * years,
        profit: domainProfit * years,
        description: `דומיין ${domain} (${years} ${years === 1 ? 'שנה' : 'שנים'})`
      },
      hosting: {
        price: hostingYearlyPrice,
        profit: hostingYearlyProfit,
        description: `אחסון ${hostingPlan.name} (12 חודשים)`
      },
      total: (domainPrice * years) + hostingYearlyPrice,
      totalProfit: (domainProfit * years) + hostingYearlyProfit
    };
  }
}
