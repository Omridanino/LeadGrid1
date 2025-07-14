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
אתה מומחה בעברית ליצירת דפי נחיתה מקצועיים עם כתיבה אנושית ומושכת. 
צור דף נחיתה מושלם וייחודי עבור:

עסק: ${formData.businessName || 'עסק מקצועי'}
תחום: ${formData.industry || formData.businessType || 'שירותים מקצועיים'}
יעד: ${formData.goals || 'הגדלת מכירות ומציאת לקוחות חדשים'}
קהל יעד: ${formData.targetAudience || 'בעלי עסקים ולקוחות פרטיים'}
תיאור: ${formData.businessDescription || 'עסק מקצועי המציע שירותים איכותיים'}

כללים לכתיבה:
1. כתוב בשפה פשוטה וברורה, אנושית ומעניינת
2. השתמש בביטויים חמים ואישיים
3. כתוב פסקאות מפורטות של 2-3 שורות לפחות
4. הוסף פרטים קונקרטיים וייחודיים לכל תחום
5. השתמש בקריאות לפעולה חזקות ומשכנעות
6. כל תיאור צריך להיות מפורט ואינפורמטיבי
7. הימנע מטקסט גנרי - כל תוכן צריך להרגיש ייחודי
8. השתמש בסטטיסטיקות ונתונים משכנעים

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
   "emotional": {
     "title": "כותרת רגשית",
     "content": "פסקה שיוצרת קשר רגשי עם הקהל יעד, מדברת על כאבים וחלומות",
     "quote": "ציטוט מעורר השראה",
     "author": "מקור הציטוט"
   },
   "process": {
     "badge": "איך אנחנו עובדים",
     "title": "תהליך העבודה שלנו",
     "subtitle": "כך נוביל אתכם להצלחה בשלבים מדויקים ומותאמים אישית",
     "steps": [
       {
         "title": "היכרות וייעוץ ראשוני",
         "description": "פגישה מקצועית להבנת הצרכים והמטרות שלכם",
         "duration": "שבוע 1"
       },
       {
         "title": "תכנון ואסטרטגיה",
         "description": "פיתוח תוכנית עבודה מפורטת ומותאמת אישית",
         "duration": "שבוע 2-3"
       },
       {
         "title": "ביצוע והטמעה",
         "description": "יישום הפתרון בצורה מקצועית ויעילה",
         "duration": "שבוע 4-8"
       },
       {
         "title": "מעקב ותמיכה",
         "description": "ליווי מתמשך להבטחת הצלחה מלאה",
         "duration": "מתמשך"
       }
     ]
   },
  "whatWeGive": {
    "badge": "השירותים שלנו",
    "title": "מה אנחנו נותנים לכם",
    "subtitle": "הפתרונות המקצועיים שאנחנו מספקים",
    "services": [
      {
        "title": "שירות ראשי 1",
        "description": "תיאור מפורט של השירות",
        "icon": "tools"
      },
      {
        "title": "שירות ראשי 2",
        "description": "תיאור מפורט של השירות",
        "icon": "briefcase-fill"
      },
      {
        "title": "שירות ראשי 3",
        "description": "תיאור מפורט של השירות",
        "icon": "lightbulb-fill"
      }
    ],
    "image": "תיאור תמונה רלוונטית לשירותים"
  },
  "gallery": {
    "badge": "הגלריה שלנו",
    "title": "עבודות שביצענו",
    "subtitle": "דוגמאות מפרויקטים שלנו",
    "images": [
      {
        "src": "תיאור תמונה של פרויקט 1",
        "alt": "פרויקט 1",
        "caption": "תיאור קצר של הפרויקט"
      },
      {
        "src": "תיאור תמונה של פרויקט 2", 
        "alt": "פרויקט 2",
        "caption": "תיאור קצר של הפרויקט"
      },
      {
        "src": "תיאור תמונה של פרויקט 3",
        "alt": "פרויקט 3", 
        "caption": "תיאור קצר של הפרויקט"
      }
    ]
  },
  "whyUs": {
    "badge": "למה אנחנו?",
    "title": "למה לבחור בנו",
    "subtitle": "הסיבות שיגרמו לכם לעבוד איתנו ולא עם אחרים",
    "items": [
      {
        "title": "ניסיון מוכח",
        "description": "שנות ניסיון רבות בתחום עם תוצאות מוכחות ולקוחות מרוצים",
        "icon": "award",
        "stats": "5+ שנים"
      },
      {
        "title": "שירות אישי", 
        "description": "ליווי מלא ואישי לכל לקוח, עם התאמה מדויקת לצרכים הייחודיים",
        "icon": "users",
        "stats": "זמינות 24/7"
      },
      {
        "title": "איכות מעולה",
        "description": "רמה גבוהה של איכות ומקצועיות בכל שירות עם אחריות מלאה",
        "icon": "shield-check",
        "stats": "100% אחריות"
      },
      {
        "title": "מחירים הוגנים",
        "description": "מחירים תחרותיים ושקופים ללא עלויות נסתרות",
        "icon": "dollar-sign",
        "stats": "ללא עלויות נסתרות"
      }
    ]
  },
   "benefits": {
     "badge": "היתרונות שלנו",
     "title": "מה תרווחו מעבודה איתנו",
     "subtitle": "היתרונות הייחודיים שתקבלו כשתבחרו בשירותים שלנו",
     "items": [
       {
         "title": "יתרון ראשי 1",
         "description": "תיאור מפורט של היתרון הראשון שהלקוח יקבל",
         "icon": "trending-up"
       },
       {
         "title": "יתרון ראשי 2", 
         "description": "תיאור מפורט של היתרון השני שהלקוח יקבל",
         "icon": "shield"
       },
       {
         "title": "יתרון ראשי 3",
         "description": "תיאור מפורט של היתרון השלישי שהלקוח יקבל", 
         "icon": "star"
       }
     ]
   },
   "faq": {
     "badge": "שאלות נפוצות",
     "title": "שאלות ותשובות",
     "subtitle": "כאן תמצאו תשובות לשאלות הנפוצות ביותר מלקוחותינו",
     "items": [
       {
         "question": "כמה זמן לוקח התהליך?",
         "answer": "תשובה מפורטת על משך הזמן של התהליך ומה כלול בו"
       },
       {
         "question": "מה כלול במחיר?",
         "answer": "תשובה מפורטת על מה שכלול במחיר והאם יש עלויות נוספות"
       },
       {
         "question": "איך נוכל ליצור קשר?",
         "answer": "תשובה מפורטת על דרכי יצירת הקשר והזמנים בהם זמינים"
       },
       {
         "question": "האם יש אחריות על השירות?",
         "answer": "תשובה מפורטת על האחריות הניתנת ותנאיה"
       }
     ]
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
  },
  "heading": {
    "title": "כותרת ראשית",
    "subtitle": "כותרת משנה",
    "size": "large",
    "badge": "תווית אופציונלית"
  },
  "cta": {
    "badge": "הצטרפו אלינו",
    "title": "מוכנים להתחיל?",
    "subtitle": "בואו נתחיל לעבוד יחד ונביא את העסק שלכם לשלב הבא",
    "description": "אנחנו כאן לעזור לכם להגשים את המטרות שלכם. פשוט השאירו פרטים ונחזור אליכם בהקדם",
    "button1Text": "קבל הצעת מחיר",
    "button2Text": "התחל עכשיו",
    "features": [
      "ייעוץ ללא עלות",
      "תגובה תוך 24 שעות",
      "הצעת מחיר מותאמת אישית"
    ]
  },
   "socialBar": {
     "platforms": [
       {"name": "Facebook", "icon": "facebook", "url": "#", "label": "עמוד הפייסבוק"},
       {"name": "Instagram", "icon": "instagram", "url": "#", "label": "האינסטגרם"},
       {"name": "LinkedIn", "icon": "linkedin", "url": "#", "label": "הלינקדאין"},
       {"name": "WhatsApp", "icon": "whatsapp", "url": "#", "label": "וואטסאפ"}
     ]
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
            content: 'אתה מומחה ישראלי ליצירת תוכן שיווקי מקצועי ואנושי. כתוב תמיד בצורה מפורטת, אישית ומשכנעת. השתמש בשפה חמה וקרובה. הוסף פרטים ייחודיים ודוגמאות קונקרטיות. התוכן צריך להרגיש כמו שנכתב על ידי בן אדם מקצועי ולא בוט. החזר תמיד JSON תקף בלבד עם תוכן עשיר ומפורט.' 
          },
          { role: 'user', content: prompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.7,
        max_tokens: 6000
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
    console.error('New key exists:', !!Deno.env.get('New key'));
    console.error('Environment variables available:', Object.keys(Deno.env.toObject()));
    
    return new Response(JSON.stringify({ 
      error: 'Failed to generate content', 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});