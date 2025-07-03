
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
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
    console.log('Request method:', req.method);
    console.log('Request origin:', req.headers.get('origin'));

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
        console.error('Invalid action:', action);
        return new Response(
          JSON.stringify({ 
            error: 'Invalid action parameter. Expected: get-auth-url, exchange-token, verify-token, or create-site',
            success: false 
          }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    console.error('WordPress Auth Function error:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        details: 'Check function logs for more information',
        success: false
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function handleGetAuthUrl(config: WordPressOAuthConfig) {
  try {
    const authUrl = new URL('https://public-api.wordpress.com/oauth2/authorize');
    authUrl.searchParams.set('client_id', config.clientId);
    authUrl.searchParams.set('redirect_uri', config.redirectUri);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('scope', 'auth');

    console.log('Generated auth URL successfully');

    return new Response(
      JSON.stringify({ 
        authUrl: authUrl.toString(),
        success: true 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error generating auth URL:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate auth URL',
        success: false 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

async function handleTokenExchange(req: Request, config: WordPressOAuthConfig) {
  try {
    const requestData = await req.json();
    const { code } = requestData;
    
    if (!code) {
      throw new Error('Authorization code is required');
    }
    
    console.log('Exchanging code for token...');

    const tokenPayload = new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: config.redirectUri,
    });

    console.log('Making token request to WordPress.com...');

    const tokenResponse = await fetch('https://public-api.wordpress.com/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'LeadGrid/1.0',
        'Accept': 'application/json',
      },
      body: tokenPayload,
    });

    const responseText = await tokenResponse.text();
    console.log('WordPress.com token response status:', tokenResponse.status);
    
    if (!tokenResponse.ok) {
      console.error('WordPress.com token response error:', responseText);
      throw new Error(`Token exchange failed: ${tokenResponse.status} - ${responseText}`);
    }

    const tokenData = JSON.parse(responseText);
    
    if (!tokenData.access_token) {
      console.error('No access token in response:', tokenData);
      throw new Error('No access token received from WordPress.com');
    }

    console.log('Token exchange successful');

    return new Response(
      JSON.stringify({ 
        accessToken: tokenData.access_token,
        success: true 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Token exchange error:', error);
    return new Response(
      JSON.stringify({ 
        error: `Token exchange failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        success: false 
      }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

async function handleTokenVerification(req: Request) {
  try {
    const requestData = await req.json();
    const { token } = requestData;

    if (!token) {
      throw new Error('Access token is required');
    }

    console.log('Verifying WordPress.com token...');

    const response = await fetch('https://public-api.wordpress.com/rest/v1.1/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'LeadGrid/1.0',
        'Accept': 'application/json',
      },
    });

    const responseText = await response.text();
    console.log('WordPress.com verification response status:', response.status);

    if (response.ok) {
      const userData = JSON.parse(responseText);
      console.log('Token verified successfully for user:', userData.display_name);
      
      return new Response(
        JSON.stringify({ 
          valid: true, 
          user: userData,
          success: true 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      console.log('Token verification failed:', response.status, responseText);
      
      return new Response(
        JSON.stringify({ 
          valid: false,
          error: responseText,
          success: false 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Token verification error:', error);
    return new Response(
      JSON.stringify({ 
        valid: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        success: false 
      }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

async function handleCreateSite(req: Request) {
  try {
    const requestData = await req.json();
    const { token, domain, userData, websiteData } = requestData;

    if (!token) {
      throw new Error('Access token is required');
    }

    console.log('Creating WordPress.com site with domain:', domain);

    // Step 1: Create the site
    const sitePayload = {
      blog_name: domain,
      blog_title: userData.websiteTitle || 'אתר חדש',
      lang_id: 40, // Hebrew
      public: 1,
      validate: false,
      find_available_url: true
    };

    console.log('Site creation payload:', sitePayload);

    const siteResponse = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/new', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'LeadGrid/1.0',
        'Accept': 'application/json',
      },
      body: JSON.stringify(sitePayload),
    });

    const siteResponseText = await siteResponse.text();
    console.log('WordPress.com site creation response status:', siteResponse.status);
    console.log('WordPress.com site creation response:', siteResponseText);

    if (!siteResponse.ok) {
      throw new Error(`Site creation failed: ${siteResponse.status} - ${siteResponseText}`);
    }

    const siteData = JSON.parse(siteResponseText);
    console.log('WordPress.com site created successfully:', siteData);

    const siteUrl = siteData.blog_details?.url || `https://${domain}.wordpress.com`;
    const siteId = siteData.blog_details?.blogid || siteData.blog_id;

    // Step 2: Configure site settings (optional)
    try {
      await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/settings`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'User-Agent': 'LeadGrid/1.0',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          blogdescription: userData.websiteDescription || 'אתר חדש שנוצר עם LeadGrid',
          blog_public: 1,
          default_comment_status: 'open',
          default_ping_status: 'open',
        }),
      });
      console.log('Site settings configured successfully');
    } catch (error) {
      console.log('Warning: Failed to configure site settings:', error);
    }

    // Step 3: Deploy template content (optional)
    if (websiteData) {
      try {
        const homepageContent = generateWordPressContent(websiteData);
        
        await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/posts/new`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'User-Agent': 'LeadGrid/1.0',
            'Accept': 'application/json',
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
  } catch (error) {
    console.error('Site creation error:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: `Site creation failed: ${error instanceof Error ? error.message : 'Unknown error'}` 
      }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
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
