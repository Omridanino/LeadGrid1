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
    const { formData } = await req.json();
    
    console.log('Generating landing page for:', formData);

    const prompt = `
אתה מומחה בעברית ליצירת דפי נחיתה מקצועיים. צור דף נחיתה מושלם עבור:

עסק: ${formData.businessName}
תחום: ${formData.industry || formData.businessType}
יעד: ${formData.goals}
קהל יעד: ${formData.targetAudience}
תיאור: ${formData.businessDescription}

צור תוכן מלא ומפורט שכולל JSON עם המבנה הבא:

{
  "hero": {
    "badge": "באדג' מעורר עניין",
    "title": "כותרת חזקה שתופסת תשומת לב",
    "subtitle": "תת-כותרת מסבירה",
    "description": "תיאור קצר ומשכנע",
    "button1Text": "כפתור פעולה ראשי",
    "button2Text": "כפתור פעולה משני"
  },
  "features": {
    "title": "כותרת סקשן התכונות",
    "subtitle": "תת-כותרת",
    "items": [
      {
        "title": "תכונה 1",
        "description": "תיאור מפורט",
        "icon": "star"
      }
    ]
  },
  "testimonials": {
    "title": "כותרת המלצות",
    "testimonials": [
      {
        "name": "שם הלקוח",
        "role": "תפקיד",
        "content": "תוכן ההמלצה",
        "rating": 5
      }
    ]
  },
  "pricing": {
    "title": "כותרת מחירים",
    "plans": [
      {
        "name": "שם החבילה",
        "price": "מחיר",
        "features": ["תכונה 1", "תכונה 2"]
      }
    ]
  }
}

התוכן צריך להיות מקצועי, משכנע ומותאם לתחום הפעילות.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { 
            role: 'system', 
            content: 'אתה מומחה ישראלי ליצירת תוכן שיווקי מקצועי. תיצור תוכן בעברית תקנית ברמה גבוהה ביותר. החזר תמיד JSON תקף בלבד.' 
          },
          { role: 'user', content: prompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.8,
        max_tokens: 4000
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedContent = JSON.parse(data.choices[0].message.content);

    return new Response(JSON.stringify({ content: generatedContent }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in generate-landing-content function:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to generate content', 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});