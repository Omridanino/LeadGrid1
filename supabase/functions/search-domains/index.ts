
import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface DomainSearchResult {
  name: string
  available: boolean
  price: number
  currency: string
  premium: boolean
  registrar: string
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { keyword } = await req.json()
    
    if (!keyword) {
      throw new Error('Keyword is required')
    }

    console.log('Searching domains for:', keyword)

    // Integration with Namecheap API
    const namecheapApiKey = Deno.env.get('NAMECHEAP_API_KEY')
    const namecheapUser = Deno.env.get('NAMECHEAP_USER')
    
    let domains: DomainSearchResult[] = []

    if (namecheapApiKey && namecheapUser) {
      // Real Namecheap API call
      const extensions = ['com', 'co.il', 'net', 'org', 'shop', 'online']
      
      for (const ext of extensions) {
        const domainName = `${keyword}.${ext}`
        
        try {
          const checkUrl = `https://api.namecheap.com/xml.response?ApiUser=${namecheapUser}&ApiKey=${namecheapApiKey}&UserName=${namecheapUser}&Command=namecheap.domains.check&ClientIp=127.0.0.1&DomainList=${domainName}`
          
          const response = await fetch(checkUrl)
          const xmlText = await response.text()
          
          // Parse XML response (simplified)
          const available = xmlText.includes('Available="true"')
          const price = ext === 'com' ? 45 : ext === 'co.il' ? 35 : 40
          
          domains.push({
            name: domainName,
            available,
            price,
            currency: 'ILS',
            premium: ext === 'shop' || ext === 'online',
            registrar: 'namecheap'
          })
        } catch (error) {
          console.error(`Error checking ${domainName}:`, error)
        }
      }
    } else {
      // Fallback to mock data for demo
      console.log('Using mock data - no API keys configured')
      const extensions = ['com', 'co.il', 'net', 'org', 'shop', 'online']
      
      domains = extensions.map(ext => ({
        name: `${keyword}.${ext}`,
        available: Math.random() > 0.3,
        price: ext === 'com' ? 45 : ext === 'co.il' ? 35 : 40,
        currency: 'ILS',
        premium: ext === 'shop' || ext === 'online',
        registrar: 'namecheap'
      }))
    }

    return new Response(
      JSON.stringify({ domains }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Domain search error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
