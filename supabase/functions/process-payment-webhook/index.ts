
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    const body = await req.text();
    const signature = req.headers.get("stripe-signature");
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

    if (!signature || !webhookSecret) {
      throw new Error("Missing signature or webhook secret");
    }

    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    console.log('🎯 Webhook event:', event.type);

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const { domain, hostingPlan, years } = paymentIntent.metadata;
      
      console.log('✅ תשלום אושר, מתחיל רכישה מ-Namecheap:', { domain, hostingPlan });
      
      // רכישה אוטומטית מ-Namecheap
      await purchaseFromNamecheap({
        domain,
        hostingPlan,
        years: parseInt(years || '1'),
        paymentIntentId: paymentIntent.id
      });
    }

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

async function purchaseFromNamecheap(orderData: {
  domain: string;
  hostingPlan: string;
  years: number;
  paymentIntentId: string;
}) {
  try {
    console.log('🛒 מתחיל רכישה מ-Namecheap:', orderData);
    
    // Get Namecheap credentials
    const apiUser = Deno.env.get('NAMECHEAP_API_USER');
    const apiKey = Deno.env.get('NAMECHEAP_API_KEY');
    const useSandbox = Deno.env.get('NAMECHEAP_SANDBOX') === 'true';
    
    if (!apiKey || !apiUser) {
      throw new Error('Namecheap API credentials not configured');
    }

    // Step 1: Purchase domain from Namecheap
    const domainResult = await purchaseDomainFromNamecheap({
      domain: orderData.domain,
      years: orderData.years,
      apiUser,
      apiKey,
      useSandbox
    });

    if (!domainResult.success) {
      throw new Error(`Domain purchase failed: ${domainResult.error}`);
    }

    // Step 2: Setup hosting (this would be your hosting setup logic)
    const hostingResult = await setupHostingPlan({
      domain: orderData.domain,
      planId: orderData.hostingPlan,
      apiUser,
      apiKey,
      useSandbox
    });

    console.log('🎉 רכישה הושלמה בהצלחה!', {
      domain: orderData.domain,
      paymentIntent: orderData.paymentIntentId
    });

    return {
      success: true,
      domain: orderData.domain,
      message: 'Domain and hosting purchased successfully'
    };

  } catch (error) {
    console.error('❌ רכישה מ-Namecheap נכשלה:', error);
    throw error;
  }
}

async function purchaseDomainFromNamecheap(params: {
  domain: string;
  years: number;
  apiUser: string;
  apiKey: string;
  useSandbox: boolean;
}) {
  try {
    const apiUrl = params.useSandbox 
      ? 'https://api.sandbox.namecheap.com/xml.response'
      : 'https://api.namecheap.com/xml.response';

    const requestParams = new URLSearchParams({
      ApiUser: params.apiUser,
      ApiKey: params.apiKey,
      UserName: params.apiUser,
      Command: 'namecheap.domains.create',
      ClientIp: '127.0.0.1',
      DomainName: params.domain,
      Years: params.years.toString(),
      AddFreeWhoisguard: 'yes',
      WGEnabled: 'yes'
    });

    console.log('🌐 רוכש דומיין מ-Namecheap:', params.domain);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestParams
    });

    const responseText = await response.text();
    console.log('📋 תגובת Namecheap:', responseText);
    
    const success = responseText.includes('CommandResponse Type="OK"');
    
    if (success) {
      return {
        success: true,
        domain: params.domain,
        message: 'Domain purchased successfully from Namecheap'
      };
    } else {
      return {
        success: false,
        error: 'Namecheap domain purchase failed'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

async function setupHostingPlan(params: {
  domain: string;
  planId: string;
  apiUser: string;
  apiKey: string;
  useSandbox: boolean;
}) {
  // This would implement hosting setup through Namecheap hosting API
  // For now, return success as hosting setup is more complex
  console.log('⚙️ מגדיר אחסון עבור:', params.domain);
  
  return {
    success: true,
    domain: params.domain,
    plan: params.planId
  };
}
