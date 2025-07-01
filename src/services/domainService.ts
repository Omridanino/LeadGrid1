
import { createClient } from '@supabase/supabase-js';

export interface DomainSearchResult {
  name: string;
  available: boolean;
  price: number;
  currency: string;
  premium: boolean;
  registrar: string;
}

export interface DomainPurchaseRequest {
  domain: string;
  registrar: 'namecheap' | 'godaddy';
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      country: string;
      postalCode: string;
    };
  };
}

export class DomainService {
  private supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  async searchDomains(keyword: string): Promise<DomainSearchResult[]> {
    console.log('Searching domains for:', keyword);
    
    try {
      const { data, error } = await this.supabase.functions.invoke('search-domains', {
        body: { keyword }
      });

      if (error) throw error;
      return data.domains;
    } catch (error) {
      console.error('Domain search failed:', error);
      // Fallback to mock data for demo
      return this.getMockDomains(keyword);
    }
  }

  async purchaseDomain(request: DomainPurchaseRequest): Promise<{ success: boolean; orderId?: string; error?: string }> {
    console.log('Purchasing domain:', request.domain);
    
    try {
      const { data, error } = await this.supabase.functions.invoke('purchase-domain', {
        body: request
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Domain purchase failed:', error);
      return { success: false, error: error.message };
    }
  }

  async checkDomainStatus(orderId: string): Promise<{ status: string; domain?: string }> {
    try {
      const { data, error } = await this.supabase.functions.invoke('check-domain-status', {
        body: { orderId }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Domain status check failed:', error);
      return { status: 'error' };
    }
  }

  private getMockDomains(keyword: string): DomainSearchResult[] {
    const extensions = ['.com', '.co.il', '.net', '.org', '.shop', '.online', '.store'];
    return extensions.map(ext => ({
      name: `${keyword}${ext}`,
      available: Math.random() > 0.3,
      price: ext === '.com' ? 45 : ext === '.co.il' ? 35 : 40,
      currency: 'ILS',
      premium: ext === '.shop' || ext === '.store',
      registrar: Math.random() > 0.5 ? 'namecheap' : 'godaddy'
    }));
  }
}

export const domainService = new DomainService();
