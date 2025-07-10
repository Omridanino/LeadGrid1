
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
    const { domain, hostingPlan, customerInfo, years = 1 } = await req.json();
    
    console.log('🚀 התחלת רכישה אמיתית עבור:', { domain, hostingPlan, customerInfo });

    // Calculate pricing with new Leadgrid rates
    const domainExtension = '.' + domain.split('.').pop();
    const domainPricing = {
      '.com': 75,
      '.co.il': 80, 
      '.net': 77,
      '.org': 77,
      '.io': 175,
      '.info': 75,
      '.biz': 75
    };
    
    const hostingPricing = {
      'basic': 60,
      'professional': 80,
      'business': 110
    };

    const domainPrice = domainPricing[domainExtension] || 75;
    const hostingMonthlyPrice = hostingPricing[hostingPlan] || 80;
    const hostingYearlyPrice = hostingMonthlyPrice * 12;
    const leadgridYearlyPrice = 109.99 * 12; // ₪109.99 per month
    
    const totalAmount = (domainPrice * years) + hostingYearlyPrice + leadgridYearlyPrice;

    console.log('💰 חישוב מחיר אמיתי:', {
      domain: domainPrice * years,
      hosting: hostingYearlyPrice,
      leadgrid: leadgridYearlyPrice,
      total: totalAmount
    });

    // Create PayPal order with real business details
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

    // Create PayPal order with Leadgrid business details
    const orderResponse = await fetch(`${paypalBaseUrl}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'PayPal-Request-Id': `ORDER_${Date.now()}`
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'ILS',
            value: totalAmount.toString()
          },
          description: `רכישת דומיין ${domain} + אחסון ${hostingPlan} + שירות Leadgrid`,
          payee: {
            merchant_id: paypalClientId // זה יכוון לחשבון PayPal שלך
          },
          custom_id: JSON.stringify({
            domain,
            hostingPlan,
            years,
            customerInfo
          })
        }],
        application_context: {
          return_url: `${req.headers.get("origin") || "http://localhost:5173"}/payment-success`,
          cancel_url: `${req.headers.get("origin") || "http://localhost:5173"}/payment-cancel`,
          brand_name: 'Leadgrid',
          locale: 'he-IL',
          landing_page: 'BILLING',
          user_action: 'PAY_NOW'
        }
      })
    });

    const orderData = await orderResponse.json();
    console.log('💳 PayPal Order נוצר עבור Leadgrid:', orderData.id);

    if (!orderData.id) {
      throw new Error('Failed to create PayPal order');
    }

    const approvalUrl = orderData.links.find(link => link.rel === 'approve')?.href;

    return new Response(JSON.stringify({
      success: true,
      orderId: orderData.id,
      approvalUrl,
      totalAmount,
      breakdown: {
        domain: domainPrice * years,
        hosting: hostingYearlyPrice,
        leadgrid: leadgridYearlyPrice,
        total: totalAmount
      }
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error('❌ שגיאה ביצירת תשלום:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
