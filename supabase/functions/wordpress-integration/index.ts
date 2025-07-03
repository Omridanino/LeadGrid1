import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
}

interface WordPressConnection {
  siteUrl: string;
  username: string;
  password: string;
}

interface LandingPageData {
  title: string;
  content: string;
  styles: any;
  formData: any;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const action = url.searchParams.get('action');

    console.log('WordPress Integration function called with action:', action);

    switch (action) {
      case 'test-connection':
        return await handleTestConnection(req);
      
      case 'add-landing-page':
        return await handleAddLandingPage(req);
      
      default:
        return new Response(
          JSON.stringify({ 
            error: 'Invalid action parameter. Expected: test-connection or add-landing-page',
            success: false 
          }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    console.error('WordPress Integration error:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        success: false
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

async function handleTestConnection(req: Request) {
  try {
    const { siteUrl, username, password } = await req.json();
    
    console.log('Testing connection to WordPress site:', siteUrl);
    
    // נסה להתחבר ל-WordPress REST API
    const apiUrl = `${siteUrl.replace(/\/$/, '')}/wp-json/wp/v2/users/me`;
    
    const auth = btoa(`${username}:${password}`);
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('WordPress connection failed:', response.status, errorText);
      
      if (response.status === 401) {
        throw new Error('שם המשתמש או הסיסמה שגויים');
      } else if (response.status === 404) {
        throw new Error('לא ניתן למצוא את ה-REST API. בדוק שהכתובת נכונה');
      } else {
        throw new Error(`שגיאה בחיבור לאתר: ${response.status}`);
      }
    }
    
    const userData = await response.json();
    console.log('WordPress connection successful for user:', userData.name);
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'חיבור לאתר WordPress הצליח!',
        userData: {
          name: userData.name,
          email: userData.email,
          roles: userData.roles
        }
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Connection test failed:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'שגיאה בבדיקת החיבור'
      }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

async function handleAddLandingPage(req: Request) {
  try {
    const { connection, landingPageData } = await req.json();
    const { siteUrl, username, password } = connection;
    
    console.log('Adding landing page to WordPress site:', siteUrl);
    
    // יצירת תוכן HTML לדף הנחיתה
    const pageContent = generateLandingPageHTML(landingPageData);
    
    // הוספת הדף ל-WordPress
    const apiUrl = `${siteUrl.replace(/\/$/, '')}/wp-json/wp/v2/pages`;
    const auth = btoa(`${username}:${password}`);
    
    const pageData = {
      title: landingPageData.title || 'דף נחיתה חדש',
      content: pageContent,
      status: 'publish',
      slug: 'landing-page-' + Date.now()
    };
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pageData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to create page:', response.status, errorText);
      throw new Error(`שגיאה ביצירת הדף: ${response.status}`);
    }
    
    const createdPage = await response.json();
    console.log('Landing page created successfully:', createdPage.link);
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'דף הנחיתה נוסף בהצלחה!',
        pageUrl: createdPage.link,
        editUrl: `${siteUrl.replace(/\/$/, '')}/wp-admin/post.php?post=${createdPage.id}&action=edit`
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Failed to add landing page:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'שגיאה בהוספת דף הנחיתה'
      }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

function generateLandingPageHTML(data: LandingPageData): string {
  const { formData, generatedContent, styles } = data;
  
  // יצירת HTML מותאם אישית על בסיס הנתונים שנוצרו
  let html = `
    <style>
      .leadgrid-landing-page {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      .hero-section {
        background: linear-gradient(135deg, ${styles?.primaryColor || '#1e40af'}, ${styles?.secondaryColor || '#7c3aed'});
        color: white;
        padding: 80px 20px;
        text-align: center;
        margin-bottom: 40px;
      }
      .hero-title {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      .hero-subtitle {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
      .cta-button {
        background: rgba(255,255,255,0.2);
        color: white;
        padding: 16px 32px;
        border: 2px solid white;
        border-radius: 8px;
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        margin: 0 10px;
        transition: all 0.3s;
      }
      .cta-button:hover {
        background: white;
        color: ${styles?.primaryColor || '#1e40af'};
      }
      .features-section {
        padding: 60px 20px;
        background: #f9fafb;
        margin: 40px 0;
      }
      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      .feature-card {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      .feature-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      .feature-title {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${styles?.primaryColor || '#1e40af'};
        margin-bottom: 1rem;
      }
      .contact-section {
        background: linear-gradient(135deg, ${styles?.primaryColor || '#1e40af'}, ${styles?.secondaryColor || '#7c3aed'});
        color: white;
        padding: 60px 20px;
        text-align: center;
        margin: 40px 0;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
    </style>
    
    <div class="leadgrid-landing-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <h1 class="hero-title">${generatedContent?.hero?.title || formData?.businessName || 'ברוכים הבאים'}</h1>
          <p class="hero-subtitle">${generatedContent?.hero?.subtitle || formData?.businessDescription || 'פתרונות מתקדמים לעסק שלך'}</p>
          <div>
            <a href="#contact" class="cta-button">${generatedContent?.hero?.button1Text || 'צור קשר'}</a>
            <a href="#features" class="cta-button">${generatedContent?.hero?.button2Text || 'למד עוד'}</a>
          </div>
        </div>
      </section>
  `;
  
  // הוספת חלק התכונות אם קיים
  if (generatedContent?.features?.items?.length > 0) {
    html += `
      <section id="features" class="features-section">
        <div class="container">
          <h2 style="text-align: center; font-size: 2.5rem; color: ${styles?.primaryColor || '#1e40af'}; margin-bottom: 3rem;">${generatedContent.features.title || 'השירותים שלנו'}</h2>
          <div class="features-grid">
    `;
    
    generatedContent.features.items.forEach((feature: any) => {
      html += `
        <div class="feature-card">
          <div class="feature-icon">${feature.icon || '⭐'}</div>
          <h3 class="feature-title">${feature.title}</h3>
          <p>${feature.description}</p>
        </div>
      `;
    });
    
    html += `
          </div>
        </div>
      </section>
    `;
  }
  
  // הוספת חלק אודות אם קיים
  if (generatedContent?.about) {
    html += `
      <section class="container" style="padding: 60px 20px; text-align: center;">
        <h2 style="font-size: 2.5rem; color: ${styles?.primaryColor || '#1e40af'}; margin-bottom: 2rem;">${generatedContent.about.title || 'אודותינו'}</h2>
        <p style="font-size: 1.2rem; color: #6b7280; max-width: 800px; margin: 0 auto;">${generatedContent.about.description}</p>
      </section>
    `;
  }
  
  // הוספת חלק צור קשר
  html += `
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">צור קשר</h2>
        <p style="font-size: 1.2rem; margin-bottom: 2rem;">נשמח לשמוע מכם ולעזור לכם</p>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
          ${formData?.email ? `<p style="font-size: 1.1rem;">📧 ${formData.email}</p>` : ''}
          ${formData?.phone ? `<p style="font-size: 1.1rem;">📞 ${formData.phone}</p>` : ''}
          ${formData?.businessName ? `<p style="font-size: 1.1rem;">🏢 ${formData.businessName}</p>` : ''}
        </div>
      </div>
    </section>
    
    <footer style="background: #1f2937; color: white; padding: 40px 20px; text-align: center;">
      <div class="container">
        <p>© ${new Date().getFullYear()} ${formData?.businessName || 'העסק שלנו'}. כל הזכויות שמורות.</p>
        <p style="color: #6b7280; font-size: 0.9rem; margin-top: 10px;">נוצר עם LeadGrid</p>
      </div>
    </footer>
    </div>
  `;
  
  return html;
}