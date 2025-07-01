
import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
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
    const { domain, registrar, customerInfo } = await req.json()
    
    console.log('Purchasing domain:', domain, 'via', registrar)

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get API credentials
    const namecheapApiKey = Deno.env.get('NAMECHEAP_API_KEY')
    const namecheapUser = Deno.env.get('NAMECHEAP_USER')

    let orderId = `order_${Date.now()}`
    let success = false

    if (namecheapApiKey && namecheapUser && registrar === 'namecheap') {
      // Real Namecheap domain purchase
      try {
        const purchaseUrl = `https://api.namecheap.com/xml.response?ApiUser=${namecheapUser}&ApiKey=${namecheapApiKey}&UserName=${namecheapUser}&Command=namecheap.domains.create&ClientIp=127.0.0.1&DomainName=${domain}&Years=1&FirstName=${customerInfo.firstName}&LastName=${customerInfo.lastName}&Address1=${customerInfo.address.street}&City=${customerInfo.address.city}&StateProvince=Other&PostalCode=${customerInfo.address.postalCode}&Country=${customerInfo.address.country}&Phone=${customerInfo.phone}&EmailAddress=${customerInfo.email}`
        
        const response = await fetch(purchaseUrl)
        const xmlText = await response.text()
        
        // Parse XML response for order ID
        const orderIdMatch = xmlText.match(/OrderID="(\d+)"/)
        if (orderIdMatch) {
          orderId = orderIdMatch[1]
          success = true
        }
        
        console.log('Namecheap response:', xmlText)
        
      } catch (error) {
        console.error('Namecheap purchase error:', error)
        throw new Error('Domain purchase failed')
      }
    } else {
      // Demo mode - simulate successful purchase
      console.log('Demo mode: Simulating domain purchase')
      success = true
    }

    // Store order in database
    const { error: dbError } = await supabaseClient
      .from('domain_orders')
      .insert({
        order_id: orderId,
        domain,
        registrar,
        customer_info: customerInfo,
        status: success ? 'completed' : 'failed',
        created_at: new Date().toISOString()
      })

    if (dbError) {
      console.error('Database error:', dbError)
    }

    return new Response(
      JSON.stringify({ 
        success, 
        orderId: success ? orderId : undefined,
        error: success ? undefined : 'Purchase failed'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Domain purchase error:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
