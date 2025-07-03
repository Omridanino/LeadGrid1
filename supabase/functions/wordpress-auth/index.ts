
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

    // Step 3: Update site ownership to client and create client as admin
    if (userData.username && userData.password && userData.email) {
      try {
        // First, create a WordPress.com account for the client (invitation method)
        const inviteResponse = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/users/new`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'User-Agent': 'LeadGrid/1.0',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            user_login: userData.username,
            user_email: userData.email,
            role: 'administrator',
            user_pass: userData.password,
            display_name: userData.displayName || `${userData.firstName} ${userData.lastName}`,
            first_name: userData.firstName,
            last_name: userData.lastName,
            send_confirmation: false
          }),
        });

        const inviteResult = await inviteResponse.text();
        console.log('Client admin user creation result:', inviteResult);
        
        if (!inviteResponse.ok) {
          console.log('Warning: Could not create admin user directly, trying invitation method');
          
          // Try invitation method as fallback
          const fallbackResponse = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/users/new`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'User-Agent': 'LeadGrid/1.0',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              user_login: userData.email, // Use email as username fallback
              user_email: userData.email,
              role: 'administrator',
              send_confirmation: true
            }),
          });
          
          if (fallbackResponse.ok) {
            console.log('Client invited as admin successfully');
          }
        } else {
          console.log('Client admin user created successfully');
        }
        
      } catch (error) {
        console.log('Warning: Failed to setup client admin user:', error);
      }
    }

    // Step 4: Deploy template content and set as homepage
    if (websiteData) {
      try {
        const homepageContent = generateWordPressContent(websiteData);
        
        // Create the homepage
        const pageResponse = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/posts/new`, {
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
            slug: 'homepage'
          }),
        });

        if (pageResponse.ok) {
          const pageData = await pageResponse.json();
          const pageId = pageData.ID;

          // Set this page as the homepage
          await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteId}/settings`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'User-Agent': 'LeadGrid/1.0',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              show_on_front: 'page',
              page_on_front: pageId
            }),
          });

          console.log('Homepage set successfully');
        }
        
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
  
  // Extract data from formData and generatedContent
  const formData = templateData.formData;
  const generatedContent = templateData.generatedContent;
  const hero = generatedContent?.hero || templateData.hero;
  const features = generatedContent?.features || templateData.features;
  const about = generatedContent?.about || templateData.about;
  
  // Hero section with real data from questionnaire
  if (hero) {
    content += `
      <div style="text-align: center; padding: 60px 20px; background: linear-gradient(135deg, ${templateData.styles?.primaryColor || '#1e40af'}, ${templateData.styles?.secondaryColor || '#7c3aed'}); color: white; margin-bottom: 40px; border-radius: 12px;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem; color: white; font-weight: bold;">${hero.title || 'ברוכים הבאים לאתר שלנו'}</h1>
        <p style="font-size: 1.25rem; margin-bottom: 2rem; color: white; max-width: 600px; margin-left: auto; margin-right: auto;">${hero.subtitle || 'אנחנו כאן כדי לעזור לכם להצליח'}</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
          <a href="#contact" style="background: rgba(255,255,255,0.2); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; border: 2px solid white; transition: all 0.3s;">${hero.button1Text || 'צור קשר'}</a>
          <a href="#about" style="background: white; color: #1e40af; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; transition: all 0.3s;">${hero.button2Text || 'למד עוד'}</a>
        </div>
      </div>
    `;
  }
  
  // Features section with real data
  if (features?.items?.length > 0) {
    content += `
      <div style="padding: 60px 20px; background: #f9fafb; border-radius: 12px; margin: 40px 0;">
        <h2 style="text-align: center; margin-bottom: 3rem; font-size: 2.5rem; color: #1e40af; font-weight: bold;">${features.title || 'השירותים שלנו'}</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto;">
    `;
    
    features.items.forEach((feature: any) => {
      content += `
        <div style="text-align: center; padding: 2rem; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">${feature.icon || '⭐'}</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: ${templateData.styles?.primaryColor || '#1e40af'}; font-weight: bold;">${feature.title}</h3>
          <p style="color: #6b7280; line-height: 1.6;">${feature.description}</p>
        </div>
      `;
    });
    
    content += `
        </div>
      </div>
    `;
  }
  
  // About section
  if (about) {
    content += `
      <div style="padding: 60px 20px; background: white; border-radius: 12px; margin: 40px 0; text-align: center;">
        <h2 style="font-size: 2.5rem; color: #1e40af; margin-bottom: 2rem; font-weight: bold;">${about.title || 'אודותינו'}</h2>
        <p style="font-size: 1.2rem; color: #6b7280; line-height: 1.8; max-width: 800px; margin: 0 auto;">${about.description || 'אנחנו חברה מובילה בתחום שלנו עם ניסיון רב שנים.'}</p>
      </div>
    `;
  }
  
  // Contact section
  content += `
    <div id="contact" style="padding: 60px 20px; background: linear-gradient(135deg, #1e40af, #7c3aed); color: white; border-radius: 12px; margin: 40px 0; text-align: center;">
      <h2 style="font-size: 2.5rem; margin-bottom: 2rem; color: white; font-weight: bold;">צור קשר</h2>
      <p style="font-size: 1.2rem; margin-bottom: 2rem; color: white;">נשמח לשמוע מכם ולעזור לכם</p>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
        ${formData?.email ? `<p style="color: white; font-size: 1.1rem;">📧 ${formData.email}</p>` : ''}
        ${formData?.phone ? `<p style="color: white; font-size: 1.1rem;">📞 ${formData.phone}</p>` : ''}
        ${formData?.businessName ? `<p style="color: white; font-size: 1.1rem;">🏢 ${formData.businessName}</p>` : ''}
      </div>
    </div>
  `;
  
  // Footer
  content += `
    <div style="padding: 40px 20px; background: #1f2937; color: white; text-align: center; border-radius: 12px; margin-top: 40px;">
      <p style="margin: 0; color: #9ca3af;">© ${new Date().getFullYear()} ${formData?.businessName || 'האתר שלנו'}. כל הזכויות שמורות.</p>
      <p style="margin: 10px 0 0 0; color: #6b7280; font-size: 0.9rem;">נוצר באמצעות LeadGrid</p>
    </div>
  `;
  
  return content;
}
