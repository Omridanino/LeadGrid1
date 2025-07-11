import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { businessName, industry, targetAudience, businessDescription, goals } = await req.json();

    const prompt = `אתה קופיירייטר מקצועי ומנוסה. צור תוכן לדף נחיתה עבור:
    
    שם העסק: ${businessName}
    תחום: ${industry}
    קהל יעד: ${targetAudience}
    תיאור העסק: ${businessDescription}
    מטרות: ${goals}

    צור תוכן שכולל:
    1. כותרת ראשית מושכת (hero title)
    2. תת-כותרת משלימה (subtitle)
    3. 4 יתרונות מפורטים עם אייקונים מתאימים
    4. 2 עדויות לקוחות מציאותיות
    5. מחירון עם שתי חבילות
    6. שאלות נפוצות (FAQ)

    התוכן צריך להיות:
    - מקצועי אך נגיש
    - ממוקד בתועלות ללקוח
    - משכנע ומניע לפעולה
    - בעברית שוטפת וטבעית
    - ספציפי לתחום הפעילות

    החזר JSON מובנה עם כל החלקים.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('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')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          { role: 'system', content: 'אתה קופיירייטר מקצועי המתמחה ביצירת תוכן שיווקי מקצועי בעברית.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 2000,
        temperature: 0.7
      }),
    });

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;

    return new Response(JSON.stringify({ content: generatedContent }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});