
import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import Stripe from 'https://esm.sh/stripe@14.21.0'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { domain, price, customerInfo } = await req.json()
    
    console.log('Creating payment for domain:', domain, 'price:', price)

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // Initialize Supabase
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Create or get customer
    const customers = await stripe.customers.list({ 
      email: customerInfo.email, 
      limit: 1 
    })
    
    let customerId
    if (customers.data.length > 0) {
      customerId = customers.data[0].id
    } else {
      const customer = await stripe.customers.create({
        email: customerInfo.email,
        name: `${customerInfo.firstName} ${customerInfo.lastName}`,
        phone: customerInfo.phone,
        address: {
          line1: customerInfo.address,
          city: customerInfo.city,
          country: customerInfo.country,
          postal_code: customerInfo.postalCode
        }
      })
      customerId = customer.id
    }

    // Create payment session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          price_data: {
            currency: 'ils',
            product_data: {
              name: `דומיין ${domain}`,
              description: 'רכישת דומיין לשנה אחת כולל SSL חינם'
            },
            unit_amount: price * 100, // Convert to agorot
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/payment-success?domain=${domain}`,
      cancel_url: `${req.headers.get('origin')}/payment-canceled`,
      metadata: {
        domain,
        customerInfo: JSON.stringify(customerInfo)
      }
    })

    // Store payment intent in database
    const { error: dbError } = await supabaseClient
      .from('domain_payments')
      .insert({
        session_id: session.id,
        domain,
        price,
        customer_info: customerInfo,
        status: 'pending',
        created_at: new Date().toISOString()
      })

    if (dbError) {
      console.error('Database error:', dbError)
    }

    return new Response(
      JSON.stringify({ url: session.url }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Payment creation error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
