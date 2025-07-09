
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
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

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

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
    const leadgridYearlyPrice = 130 * 12; // ₪130 לחודש שירות LeadGrid
    
    const totalAmount = (domainPrice * years) + hostingYearlyPrice + leadgridYearlyPrice;

    console.log('💰 חישוב מחיר:', {
      domain: domainPrice * years,
      hosting: hostingYearlyPrice,
      leadgrid: leadgridYearlyPrice,
      total: totalAmount
    });

    // Create Stripe customer if doesn't exist
    let stripeCustomer;
    const existingCustomers = await stripe.customers.list({
      email: customerInfo.email,
      limit: 1
    });

    if (existingCustomers.data.length > 0) {
      stripeCustomer = existingCustomers.data[0];
    } else {
      stripeCustomer = await stripe.customers.create({
        email: customerInfo.email,
        name: `${customerInfo.firstName} ${customerInfo.lastName}`,
        phone: customerInfo.phone,
        address: {
          line1: customerInfo.address,
          city: customerInfo.city,
          country: customerInfo.country,
          postal_code: customerInfo.zipCode
        }
      });
    }

    // Create payment intent for immediate charge
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount * 100, // Convert to agorot
      currency: 'ils',
      customer: stripeCustomer.id,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        domain,
        hostingPlan,
        years: years.toString(),
        orderType: 'domain_hosting_purchase'
      }
    });

    console.log('💳 Payment Intent נוצר:', paymentIntent.id);

    return new Response(JSON.stringify({
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
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
