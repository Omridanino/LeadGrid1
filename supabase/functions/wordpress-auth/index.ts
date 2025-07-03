
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface WordPressOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const action = url.searchParams.get('action');

    const config: WordPressOAuthConfig = {
      clientId: '120329',
      clientSecret: Deno.env.get('WORDPRESS_CLIENT_SECRET') || 'imbzp7yTZvC3uRrwUW51f3ndO81dVJXlqN39Pi4qNyz3G3HkxWpDteo8hwGJGxkh',
      redirectUri: 'https://leadgrid.design/auth/wordpress/callback'
    };

    console.log('WordPress Auth Function called with action:', action);

    switch (action) {
      case 'get-auth-url':
        return handleGetAuthUrl(config);
      
      case 'exchange-token':
        return await handleTokenExchange(req, config);
      
      case 'verify-token':
        return await handleTokenVerification(req);
      
      case 'create-site':
        return await handleCreateSite(req);
      
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    console.error('WordPress Auth Function error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function handleGetAuthUrl(config: WordPressOAuthConfig) {
  const authUrl = new URL('https://public-api.wordpress.com/oauth2/authorize');
  authUrl.searchParams.set('client_id', config.clientId);
  authUrl.searchParams.set('redirect_uri', config.redirectUri);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', 'auth global:manage');

  console.log('Generated auth URL:', authUrl.toString());

  return new Response(
    JSON.stringify({ authUrl: authUrl.toString() }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}

async function handleTokenExchange(req: Request, config: WordPressOAuthConfig) {
  const { code } = await req.json();
  
  console.log('Exchanging code for token:', code);

  const tokenResponse = await fetch('https://public-api.wordpress.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: config.redirectUri,
    }),
  });

  if (!tokenResponse.ok) {
    const errorText = await tokenResponse.text();
    console.error('Token exchange failed:', errorText);
    throw new Error(`Token exchange failed: ${tokenResponse.status} ${errorText}`);
  }

  const tokenData = await tokenResponse.json();
  console.log('Token received successfully');

  return new Response(
    JSON.stringify({ accessToken: tokenData.access_token }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}

async function handleTokenVerification(req: Request) {
  const { token } = await req.json();

  console.log('Verifying WordPress.com token');

  const response = await fetch('https://public-api.wordpress.com/rest/v1.1/me', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const userData = await response.json();
    console.log('Token verified for user:', userData.display_name);
    
    return new Response(
      JSON.stringify({ valid: true, user: userData }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } else {
    console.log('Token verification failed:', response.status);
    
    return new Response(
      JSON.stringify({ valid: false }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

async function handleCreateSite(req: Request) {
  const { token, domain, userData, websiteData } = await req.json();

  console.log('Creating WordPress.com site with domain:', domain);

  // Step 1: Create the site
  const sitePayload = {
    blog_name: domain,
    blog_title: userData.websiteTitle,
    lang_id: 40, // Hebrew
    public: 1,
    validate: false,
    find_available_url: true
  };

  const siteResponse = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/new', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sitePayload),
  });

  if (!siteResponse.ok) {
    const errorData = await siteResponse.text();
    console.error('Site creation failed:', errorData);
    throw new Error(`Site creation failed: ${siteResponse.status} ${errorData}`);
  }

  const siteData = await siteResponse.json();
  console.log('WordPress.com site created:', siteData);

  const siteUrl = siteData.blog_details?.url || `https://${domain}.wordpress.com`;
  const siteId = siteData.blog_details?.blogid || siteData.blog_id;

  // Step 2: Configure site settings
  try {
    await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/settings`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blogdescription: userData.websiteDescription,
        blog_public: 1,
        default_comment_status: 'open',
        default_ping_status: 'open',
      }),
    });
    console.log('Site settings configured successfully');
  } catch (error) {
    console.log('Warning: Failed to configure site settings:', error);
  }

  // Step 3: Deploy template content
  if (websiteData) {
    try {
      const homepageContent = generateWordPressContent(websiteData);
      
      await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/posts/new`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'page',
          title: websiteData.hero?.title || 'דף הבית',
          content: homepageContent,
          status: 'publish',
        }),
      });
      console.log('Template content deployed successfully');
    } catch (error) {
      console.log('Warning: Failed to deploy template content:', error);
    }
  }

  return new Response(
    JSON.stringify({
      success: true,
      siteUrl: siteUrl,
      adminUrl: `${siteUrl}/wp-admin`,
      loginUrl: `${siteUrl}/wp-login.php`,
      username: userData.username,
      password: userData.password,
      isDemo: false,
      installationDetails: {
        wpVersion: 'Latest WordPress.com',
        theme: 'Twenty Twenty-Four',
        plugins: ['Jetpack', 'Akismet'],
        siteId: siteId.toString()
      }
    }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}

function generateWordPressContent(templateData: any): string {
  let content = '';
  
  // Hero section
  if (templateData.hero) {
    content += `
      <div style="text-align: center; padding: 60px 20px; background: linear-gradient(135deg, ${templateData.styles?.primaryColor || '#1e40af'}, ${templateData.styles?.secondaryColor || '#7c3aed'}); color: white; margin-bottom: 40px;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem; color: white;">${templateData.hero.title}</h1>
        <p style="font-size: 1.25rem; margin-bottom: 2rem; color: white;">${templateData.hero.subtitle}</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="#contact" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; border: 2px solid white;">${templateData.hero.button1Text || 'צור קשר'}</a>
          <a href="#about" style="background: white; color: #1e40af; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">${templateData.hero.button2Text || 'למד עוד'}</a>
        </div>
      </div>
    `;
  }
  
  // Features section
  if (templateData.features?.items?.length > 0) {
    content += `
      <div style="padding: 60px 20px; background: #f9fafb;">
        <h2 style="text-align: center; margin-bottom: 3rem; font-size: 2.5rem; color: #1e40af;">${templateData.features.title}</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto;">
    `;
    
    templateData.features.items.forEach((feature: any) => {
      content += `
        <div style="text-align: center; padding: 2rem; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: ${templateData.styles?.primaryColor || '#1e40af'};">${feature.title}</h3>
          <p style="color: #6b7280; line-height: 1.6;">${feature.description}</p>
        </div>
      `;
    });
    
    content += `
        </div>
      </div>
    `;
  }
  
  return content;
}
