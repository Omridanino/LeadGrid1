
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

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
    
    console.log('🚀 התחלת רכישה עבור:', { domain, hostingPlan, customerInfo });

    // Calculate pricing
    const domainExtension = '.' + domain.split('.').pop();
    const domainPricing = {
      '.com': 100,
      '.co.il': 110, 
      '.net': 105,
      '.org': 105,
      '.io': 180,
      '.info': 100,
      '.biz': 100
    };
    
    const hostingPricing = {
      'basic': 90,
      'professional': 100,
      'business': 125
    };

    const domainPrice = domainPricing[domainExtension] || 100;
    const hostingMonthlyPrice = hostingPricing[hostingPlan] || 100;
    const hostingYearlyPrice = hostingMonthlyPrice * 12;
    const leadgridYearlyPrice = 130 * 12;
    
    const totalAmount = (domainPrice * years) + hostingYearlyPrice + leadgridYearlyPrice;

    console.log('💰 חישוב מחיר:', {
      domain: domainPrice * years,
      hosting: hostingYearlyPrice,
      leadgrid: leadgridYearlyPrice,
      total: totalAmount
    });

    // Create PayPal order
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

    // Create PayPal order
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
          description: `רכישת דומיין ${domain} + אחסון ${hostingPlan} + שירות LeadGrid`,
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
          brand_name: 'LeadGrid',
          locale: 'he-IL',
          landing_page: 'BILLING',
          user_action: 'PAY_NOW'
        }
      })
    });

    const orderData = await orderResponse.json();
    console.log('💳 PayPal Order נוצר:', orderData.id);

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
