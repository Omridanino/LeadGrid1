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
    const { formData, selectedElements } = await req.json();
    
    // הסקשנים הקבועים שיופיעו בכל דף
    const fixedElements = selectedElements || ['hero', 'emotional', 'services', 'whyUs', 'pricing', 'competitive', 'faq', 'contact'];
    
    console.log('Generating landing page for:', formData);
    console.log('Selected elements:', fixedElements);

    const prompt = `
אתה מומחה בעברית ליצירת דפי נחיתה מקצועיים. צור דף נחיתה מושלם עבור:

עסק: ${formData.businessName}
תחום: ${formData.industry || formData.businessType}
יעד: ${formData.goals}
קהל יעד: ${formData.targetAudience}
תיאור: ${formData.businessDescription}
נקודות כאב לקוחות: ${formData.customerPain || ''}
סיפורי הצלחה: ${formData.successStories || ''}
דחיפות: ${formData.urgency || ''}

צור תוכן מלא ומפורט שכולל JSON עם המבנה הבא (כולל רק הסקשנים הנבחרים):

{
  ${fixedElements.includes('hero') ? `"hero": {
    "badge": "באדג' מעורר עניין",
    "title": "כותרת חזקה שתופסת תשומת לב",
    "subtitle": "תת-כותרת מסבירה",
    "description": "תיאור קצר ומשכנע",
    "button1Text": "כפתור פעולה ראשי",
    "button2Text": "כפתור פעולה משני"
  },` : ''}
  ${fixedElements.includes('emotional') ? `"emotional": {
    "title": "כותרת רגשית חזקה",
    "subtitle": "תת-כותרת שיוצרת חיבור",
    "description": "תיאור רגשי שמדבר ללב הלקוח",
    "button1Text": "כפתור קריאה לפעולה",
    "button2Text": "כפתור משני"
  },` : ''}
  ${fixedElements.includes('services') ? `"services": {
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
  },` : ''}
  ${fixedElements.includes('whyUs') ? `"whyUs": {
    "title": "למה דווקא אנחנו?",
    "subtitle": "מה מייחד אותנו מהמתחרים",
    "reasons": [
      {
        "title": "יתרון 1",
        "description": "תיאור מפורט של היתרון",
        "icon": "star"
      },
      {
        "title": "יתרון 2",
        "description": "תיאור מפורט של היתרון",
        "icon": "heart"
      },
      {
        "title": "יתרון 3",
        "description": "תיאור מפורט של היתרון",
        "icon": "shield"
      }
    ]
  },` : ''}
  ${fixedElements.includes('pricing') ? `"pricing": {
    "title": "מחירים וחבילות",
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
  },` : ''}
  ${fixedElements.includes('competitive') ? `"competitive": {
    "title": "היתרון התחרותי שלנו",
    "subtitle": "מה מייחד אותנו במיוחד",
    "advantages": [
      {
        "title": "יתרון תחרותי 1",
        "description": "הסבר מפורט על היתרון הזה",
        "icon": "trophy"
      },
      {
        "title": "יתרון תחרותי 2",
        "description": "הסבר מפורט על היתרון הזה",
        "icon": "target"
      },
      {
        "title": "יתרון תחרותי 3",
        "description": "הסבר מפורט על היתרון הזה",
        "icon": "zap"
      }
    ]
  },` : ''}
  ${fixedElements.includes('faq') ? `"faq": {
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
      },
      {
        "question": "שאלה 4?",
        "answer": "תשובה מפורטת לשאלה"
      },
      {
        "question": "שאלה 5?",
        "answer": "תשובה מפורטת לשאלה"
      }
    ]
  },` : ''}
  ${fixedElements.includes('contact') ? `"contact": {
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
  }` : ''}
}

התוכן צריך להיות מקצועי, משכנע ומותאם לתחום הפעילות. וודא שה-JSON תקין ללא פסיקים מיותרים.`;

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