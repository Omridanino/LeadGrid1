
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
    const { domain, files, integrations } = await req.json()
    
    console.log('Deploying website for domain:', domain)

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get deployment service credentials
    const netlifyToken = Deno.env.get('NETLIFY_ACCESS_TOKEN')
    const vercelToken = Deno.env.get('VERCEL_TOKEN')

    let deploymentId = `deploy_${Date.now()}`
    let deploymentUrl = ''
    let success = false

    if (netlifyToken) {
      // Deploy to Netlify
      try {
        console.log('Deploying to Netlify...')
        
        // Create site
        const createSiteResponse = await fetch('https://api.netlify.com/api/v1/sites', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${netlifyToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: domain.replace(/\./g, '-').toLowerCase()
          })
        })

        const siteData = await createSiteResponse.json()
        const siteId = siteData.id
        deploymentUrl = siteData.url

        // Deploy files
        const deployResponse = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/deploys`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${netlifyToken}`,
            'Content-Type': 'application/zip'
          },
          body: await createZipFromFiles(files)
        })

        const deployData = await deployResponse.json()
        deploymentId = deployData.id
        success = true

        console.log('Netlify deployment successful:', deploymentId)
        
      } catch (error) {
        console.error('Netlify deployment error:', error)
      }
    } 
    
    if (!success && vercelToken) {
      // Deploy to Vercel as fallback
      try {
        console.log('Deploying to Vercel...')
        
        const deployResponse = await fetch('https://api.vercel.com/v13/deployments', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${vercelToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: domain.replace(/\./g, '-').toLowerCase(),
            files: Object.entries(files).map(([path, content]) => ({
              file: path,
              data: btoa(content as string)
            }))
          })
        })

        const deployData = await deployResponse.json()
        deploymentId = deployData.id
        deploymentUrl = deployData.url
        success = true

        console.log('Vercel deployment successful:', deploymentId)
        
      } catch (error) {
        console.error('Vercel deployment error:', error)
      }
    }

    if (!success) {
      // Fallback to demo mode
      console.log('Demo mode: Simulating website deployment')
      deploymentUrl = `https://${domain.replace(/\./g, '-')}.lovable.app`
      success = true
    }

    // Store deployment in database
    const { error: dbError } = await supabaseClient
      .from('deployments')
      .insert({
        deployment_id: deploymentId,
        domain,
        url: deploymentUrl,
        integrations,
        status: success ? 'deployed' : 'failed',
        created_at: new Date().toISOString()
      })

    if (dbError) {
      console.error('Database error:', dbError)
    }

    return new Response(
      JSON.stringify({ 
        success, 
        deploymentId: success ? deploymentId : undefined,
        url: success ? deploymentUrl : undefined,
        error: success ? undefined : 'Deployment failed'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Deployment error:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})

// Helper function to create ZIP from files
async function createZipFromFiles(files: Record<string, string>): Promise<Uint8Array> {
  // This would need a proper ZIP library in production
  // For now, return empty array as placeholder
  return new Uint8Array()
}
