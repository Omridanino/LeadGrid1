
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { orderId } = await req.json();
    
    console.log('🎯 PayPal Payment confirmed for Leadgrid:', orderId);

    const paypalClientId = Deno.env.get("PAYPAL_CLIENT_ID");
    const paypalClientSecret = Deno.env.get("PAYPAL_CLIENT_SECRET");
    const paypalMode = Deno.env.get("PAYPAL_MODE") || "sandbox";
    
    if (!paypalClientId || !paypalClientSecret) {
      throw new Error("PayPal credentials not configured");
    }

    const paypalBaseUrl = paypalMode === "Live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";
    
    // Get PayPal access token
    const authResponse = await fetch(`${paypalBaseUrl}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en_US',
        'Authorization': `Basic ${btoa(`${paypalClientId}:${paypalClientSecret}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    });

    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    // Get order details
    const orderResponse = await fetch(`${paypalBaseUrl}/v2/checkout/orders/${orderId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const orderData = await orderResponse.json();
    const customData = JSON.parse(orderData.purchase_units[0].custom_id);
    const { domain, hostingPlan, years } = customData;
    
    console.log('✅ תשלום אושר, מתחיל רכישה אמיתית מ-GoDaddy:', { domain, hostingPlan });
    
    // רכישה אוטומטית אמיתית מ-GoDaddy
    await purchaseFromGoDaddy({
      domain,
      hostingPlan,
      years: parseInt(years || '1'),
      orderId
    });

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error('❌ שגיאה ב-webhook:', error);
    return new Response(JSON.stringify({ 
      error: error.message 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});

async function purchaseFromGoDaddy(orderData: {
  domain: string;
  hostingPlan: string;
  years: number;
  orderId: string;
}) {
  try {
    console.log('🛒 מתחיל רכישה אמיתית מ-GoDaddy:', orderData);
    
    // Get GoDaddy credentials
    const apiKey = Deno.env.get('GODADDY_API_KEY');
    const apiSecret = Deno.env.get('GODADDY_API_SECRET');
    const mode = Deno.env.get('GODADDY_MODE') || 'production';
    
    if (!apiKey || !apiSecret) {
      throw new Error('GoDaddy API credentials not configured');
    }

    const baseUrl = mode === 'production' 
      ? 'https://api.godaddy.com' 
      : 'https://api.ote-godaddy.com';

    // Step 1: Check domain availability
    const availabilityResponse = await fetch(
      `${baseUrl}/v1/domains/available?domain=${orderData.domain}`,
      {
        headers: {
          'Authorization': `sso-key ${apiKey}:${apiSecret}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const availabilityData = await availabilityResponse.json();
    
    if (!availabilityData.available) {
      console.log('⚠️ דומיין לא זמין:', orderData.domain);
      return { success: false, error: 'Domain not available' };
    }

    // Step 2: Purchase domain from GoDaddy with Leadgrid details
    const purchaseResponse = await fetch(`${baseUrl}/v1/domains/purchase`, {
      method: 'POST',
      headers: {
        'Authorization': `sso-key ${apiKey}:${apiSecret}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        domain: orderData.domain,
        period: orderData.years || 1,
        nameServers: ['ns1.leadgrid.co.il', 'ns2.leadgrid.co.il'],
        renewAuto: true,
        privacy: true,
        consent: {
          agreementKeys: ['DNRA'],
          agreedBy: 'Leadgrid',
          agreedAt: new Date().toISOString()
        }
      })
    });

    if (!purchaseResponse.ok) {
      const errorData = await purchaseResponse.text();
      console.error('❌ רכישת דומיין נכשלה:', errorData);
      throw new Error(`GoDaddy domain purchase failed: ${errorData}`);
    }

    const purchaseData = await purchaseResponse.json();
    console.log('🎉 דומיין נרכש בהצלחה מ-GoDaddy עבור Leadgrid!', {
      domain: orderData.domain,
      orderId: purchaseData.orderId
    });

    return {
      success: true,
      domain: orderData.domain,
      message: 'Domain purchased successfully from GoDaddy for Leadgrid'
    };

  } catch (error) {
    console.error('❌ רכישה מ-GoDaddy נכשלה:', error);
    throw error;
  }
}
