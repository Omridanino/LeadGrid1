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
      },
      {
        "title": "תכונה 2", 
        "description": "תיאור מפורט",
        "icon": "heart"
      },
      {
        "title": "תכונה 3",
        "description": "תיאור מפורט", 
        "icon": "shield"
      }
    ]
  },
  "about": {
    "title": "כותרת אודותינו",
    "subtitle": "מי אנחנו ומה המטרה שלנו",
    "description": "תיאור מפורט על החברה והערכים",
    "image": "תיאור תמונה רלוונטית",
    "stats": [
      {"number": "100+", "label": "לקוחות מרוצים"},
      {"number": "5+", "label": "שנות ניסיון"},
      {"number": "24/7", "label": "תמיכה"}
    ]
  },
  "services": {
    "title": "השירותים שלנו",
    "subtitle": "מה אנחנו מציעים",
    "items": [
      {
        "title": "שירות 1",
        "description": "תיאור השירות",
        "price": "החל מ-₪99",
        "features": ["תכונה 1", "תכונה 2"]
      },
      {
        "title": "שירות 2", 
        "description": "תיאור השירות",
        "price": "החל מ-₪199",
        "features": ["תכונה 1", "תכונה 2"]
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
        "rating": 5,
        "image": "תיאור תמונת הלקוח"
      },
      {
        "name": "שם לקוח 2",
        "role": "תפקיד",
        "content": "תוכן ההמלצה",
        "rating": 5,
        "image": "תיאור תמונת הלקוח"
      }
    ]
  },
  "faq": {
    "title": "שאלות נפוצות",
    "subtitle": "תשובות לשאלות הכי חשובות",
    "items": [
      {
        "question": "שאלה 1?",
        "answer": "תשובה מפורטת לשאלה"
      },
      {
        "question": "שאלה 2?", 
        "answer": "תשובה מפורטת לשאלה"
      },
      {
        "question": "שאלה 3?",
        "answer": "תשובה מפורטת לשאלה"
      }
    ]
  },
  "pricing": {
    "title": "כותרת מחירים",
    "subtitle": "בחר את החבילה המתאימה לך",
    "plans": [
      {
        "name": "חבילה בסיסית",
        "price": "₪99/חודש",
        "description": "מושלם למתחילים",
        "features": ["תכונה 1", "תכונה 2", "תכונה 3"],
        "popular": false
      },
      {
        "name": "חבילה מתקדמת",
        "price": "₪199/חודש", 
        "description": "לעסקים גדולים יותר",
        "features": ["כל מה שבחבילה הבסיסית", "תכונה מתקדמת 1", "תכונה מתקדמת 2"],
        "popular": true
      },
      {
        "name": "חבילה פרמיום",
        "price": "₪299/חודש",
        "description": "הפתרון המושלם",
        "features": ["כל מה שבחבילה המתקדמת", "תמיכה 24/7", "ייעוץ אישי"],
        "popular": false
      }
    ]
  },
  "contact": {
    "title": "צרו קשר",
    "subtitle": "נשמח לשמוע מכם",
    "description": "השאירו פרטים ונחזור אליכם בהקדם",
    "form": {
      "nameLabel": "שם מלא",
      "emailLabel": "כתובת מייל", 
      "phoneLabel": "טלפון",
      "messageLabel": "הודעה",
      "submitText": "שלח הודעה"
    },
    "info": {
      "address": "כתובת המשרד",
      "phone": "טלפון ליצירת קשר",
      "email": "כתובת מייל",
      "hours": "שעות פעילות"
    }
  }
}

התוכן צריך להיות מקצועי, משכנע ומותאם לתחום הפעילות.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('New key')}`,
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
    console.error('OPENAI_API_KEY exists:', !!Deno.env.get('OPENAI_API_KEY'));
    
    return new Response(JSON.stringify({ 
      error: 'Failed to generate content', 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});