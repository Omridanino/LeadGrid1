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
    
    console.log('Generating landing page for:', formData);
    console.log('Selected elements:', selectedElements);
    
    // הסקשנים הנבחרים או ברירת מחדל
    const sectionsToGenerate = selectedElements || ['hero', 'emotional', 'whyUs', 'whatWeGive', 'testimonials', 'contact'];
    
    // בניית הפרומפט עם המידע הנוסף
    const businessInfo = `
עסק: ${formData.businessName}
תחום: ${formData.industry || formData.businessType}
יעד: ${formData.goals}
קהל יעד: ${formData.targetAudience}
תיאור: ${formData.businessDescription}`;

    const additionalInfo = `
${formData.customerPain ? `בעיות שהעסק פותר: ${formData.customerPain}` : ''}
${formData.successStories ? `סיפורי הצלחה: ${formData.successStories}` : ''}
${formData.urgency ? `סיבות דחיפות: ${formData.urgency}` : ''}
`;

    // בניית מבנה JSON דינמי בהתאם לסקשנים שנבחרו
    const buildJsonStructure = (sections) => {
      const structure = {};
      
      sections.forEach(section => {
        switch(section) {
          case 'hero':
            structure.hero = {
              "badge": "באדג' מעורר עניין",
              "title": "כותרת חזקה שתופסת תשומת לב",
              "subtitle": "תת-כותרת מסבירה", 
              "description": "תיאור קצר ומשכנע",
              "button1Text": "כפתור פעולה ראשי",
              "button2Text": "כפתור פעולה משני"
            };
            break;
          case 'emotional':
            structure.emotional = {
              "title": "כותרת רגשית מחברת",
              "subtitle": "תת-כותרת שמסבירה את הרגש",
              "description": "תיאור רגשי שמחבר את הקורא לתחום",
              "button1Text": "כפתור פעולה",
              "button2Text": "כפתור משני"
            };
            break;
          case 'whyUs':
            structure.whyUs = {
              "title": "למה בדיוק אנחנו?",
              "subtitle": "מה מייחד אותנו מהמתחרים",
              "reasons": [
                {"title": "סיבה 1", "description": "הסבר מפורט"},
                {"title": "סיבה 2", "description": "הסבר מפורט"},
                {"title": "סיבה 3", "description": "הסבר מפורט"}
              ]
            };
            break;
          case 'whatWeGive':
            structure.whatWeGive = {
              "title": "מה אנחנו נותנים",
              "subtitle": "הערך שאנחנו מספקים",
              "benefits": [
                {"title": "יתרון 1", "description": "הסבר מפורט"},
                {"title": "יתרון 2", "description": "הסבר מפורט"},
                {"title": "יתרון 3", "description": "הסבר מפורט"}
              ]
            };
            break;
          case 'features':
            structure.features = {
              "title": "התכונות שלנו",
              "subtitle": "מה שמייחד אותנו",
              "items": [
                {"title": "תכונה 1", "description": "תיאור מפורט", "icon": "star"},
                {"title": "תכונה 2", "description": "תיאור מפורט", "icon": "heart"},
                {"title": "תכונה 3", "description": "תיאור מפורט", "icon": "shield"}
              ]
            };
            break;
          case 'services':
            structure.services = {
              "title": "השירותים שלנו",
              "subtitle": "מה אנחנו מציעים",
              "items": [
                {"title": "שירות 1", "description": "תיאור השירות", "price": "החל מ-₪99", "features": ["תכונה 1", "תכונה 2"]},
                {"title": "שירות 2", "description": "תיאור השירות", "price": "החל מ-₪199", "features": ["תכונה 1", "תכונה 2"]}
              ]
            };
            break;
          case 'about':
            structure.about = {
              "title": "קצת עלינו",
              "subtitle": "מי אנחנו ומה המטרה שלנו",
              "description": "תיאור מפורט על החברה והערכים",
              "stats": [
                {"number": "100+", "label": "לקוחות מרוצים"},
                {"number": "5+", "label": "שנות ניסיון"},
                {"number": "24/7", "label": "תמיכה"}
              ]
            };
            break;
          case 'process':
            structure.process = {
              "title": "התהליך שלנו",
              "subtitle": "איך אנחנו עובדים",
              "steps": [
                {"number": "01", "title": "שלב ראשון", "description": "תיאור השלב"},
                {"number": "02", "title": "שלב שני", "description": "תיאור השלב"},
                {"number": "03", "title": "שלב שלישי", "description": "תיאור השלב"},
                {"number": "04", "title": "שלב רביעי", "description": "תיאור השלב"}
              ]
            };
            break;
          case 'gallery':
            structure.gallery = {
              "title": "גלריית העבודות שלנו",
              "subtitle": "ראו את מה שיצרנו",
              "items": [
                {"title": "פרויקט 1", "description": "תיאור הפרויקט", "category": "קטגוריה"},
                {"title": "פרויקט 2", "description": "תיאור הפרויקט", "category": "קטגוריה"},
                {"title": "פרויקט 3", "description": "תיאור הפרויקט", "category": "קטגוריה"}
              ]
            };
            break;
          case 'stats':
            structure.stats = {
              "title": "המספרים מדברים בעד עצמם",
              "subtitle": "הנתונים שלנו",
              "items": [
                {"number": "1000+", "label": "פרויקטים הושלמו", "description": "תיאור קצר"},
                {"number": "99%", "label": "שביעות רצון", "description": "תיאור קצר"},
                {"number": "24/7", "label": "זמינות", "description": "תיאור קצר"},
                {"number": "10+", "label": "שנות ניסיון", "description": "תיאור קצר"}
              ]
            };
            break;
          case 'team':
            structure.team = {
              "title": "הצוות שלנו",
              "subtitle": "הכירו את האנשים מאחורי הקסם",
              "members": [
                {"name": "שם איש צוות", "role": "תפקיד", "description": "תיאור קצר", "expertise": ["מומחיות 1", "מומחיות 2"]},
                {"name": "שם איש צוות", "role": "תפקיד", "description": "תיאור קצר", "expertise": ["מומחיות 1", "מומחיות 2"]},
                {"name": "שם איש צוות", "role": "תפקיד", "description": "תיאור קצר", "expertise": ["מומחיות 1", "מומחיות 2"]}
              ]
            };
            break;
          case 'achievements':
            structure.achievements = {
              "title": "ההישגים שלנו",
              "subtitle": "מה השגנו עד היום",
              "items": [
                {"title": "הישג 1", "description": "תיאור ההישג", "year": "2024", "icon": "trophy"},
                {"title": "הישג 2", "description": "תיאור ההישג", "year": "2023", "icon": "star"},
                {"title": "הישג 3", "description": "תיאור ההישג", "year": "2022", "icon": "award"}
              ]
            };
            break;
          case 'testimonials':
            structure.testimonials = {
              "title": "מה הלקוחות אומרים עלינו",
              "subtitle": "חוות דעת אמיתיות",
              "testimonials": [
                {"name": "שם הלקוח", "role": "תפקיד", "content": "תוכן ההמלצה", "rating": 5},
                {"name": "שם לקוח 2", "role": "תפקיד", "content": "תוכן ההמלצה", "rating": 5},
                {"name": "שם לקוח 3", "role": "תפקיד", "content": "תוכן ההמלצה", "rating": 5}
              ]
            };
            break;
          case 'pricing':
            structure.pricing = {
              "title": "החבילות שלנו",
              "subtitle": "בחר את החבילה המתאימה לך",
              "plans": [
                {"name": "חבילה בסיסית", "price": "₪99/חודש", "description": "מושלם למתחילים", "features": ["תכונה 1", "תכונה 2", "תכונה 3"], "popular": false},
                {"name": "חבילה מתקדמת", "price": "₪199/חודש", "description": "לעסקים גדולים יותר", "features": ["כל מה שבחבילה הבסיסית", "תכונה מתקדמת 1", "תכונה מתקדמת 2"], "popular": true},
                {"name": "חבילה פרמיום", "price": "₪299/חודש", "description": "הפתרון המושלם", "features": ["כל מה שבחבילה המתקדמת", "תמיכה 24/7", "ייעוץ אישי"], "popular": false}
              ]
            };
            break;
          case 'faq':
            structure.faq = {
              "title": "שאלות נפוצות",
              "subtitle": "תשובות לשאלות הכי חשובות",
              "items": [
                {"question": "שאלה נפוצה 1?", "answer": "תשובה מפורטת לשאלה"},
                {"question": "שאלה נפוצה 2?", "answer": "תשובה מפורטת לשאלה"},
                {"question": "שאלה נפוצה 3?", "answer": "תשובה מפורטת לשאלה"}
              ]
            };
            break;
          case 'contact':
            structure.contact = {
              "title": "צרו קשר",
              "subtitle": "נשמח לשמוע מכם",
              "description": "השאירו פרטים ונחזור אליכם בהקדם",
              "form": {"nameLabel": "שם מלא", "emailLabel": "כתובת מייל", "phoneLabel": "טלפון", "messageLabel": "הודעה", "submitText": "שלח הודעה"},
              "info": {"address": "כתובת המשרד", "phone": "טלפון ליצירת קשר", "email": "כתובת מייל", "hours": "שעות פעילות"}
            };
            break;
          case 'final-cta':
            structure.finalCta = {
              "title": "מוכנים להתחיל?",
              "subtitle": "בואו נעשה את זה ביחד",
              "description": "הגיע הזמן לקחת את הצעד הבא",
              "button1Text": "בואו נתחיל",
              "button2Text": "קבל הצעת מחיר"
            };
            break;
          case 'app-showcase':
            structure.appShowcase = {
              "title": "הכירו את המוצר שלנו",
              "subtitle": "פתרון חדשני ומתקדם",
              "features": [
                {"title": "תכונה מרכזית 1", "description": "תיאור התכונה"},
                {"title": "תכונה מרכזית 2", "description": "תיאור התכונה"},
                {"title": "תכונה מרכזית 3", "description": "תיאור התכונה"}
              ],
              "downloadLinks": {"ios": "קישור App Store", "android": "קישור Google Play"}
            };
            break;
          case 'partners':
            structure.partners = {
              "title": "השותפים שלנו",
              "subtitle": "עובדים עם המובילים בתחום",
              "partners": [
                {"name": "שותף 1", "description": "תיאור השותפות", "logo": "תיאור לוגו"},
                {"name": "שותף 2", "description": "תיאור השותפות", "logo": "תיאור לוגו"},
                {"name": "שותף 3", "description": "תיאור השותפות", "logo": "תיאור לוגו"}
              ]
            };
            break;
          case 'news':
            structure.news = {
              "title": "חדשות ועדכונים",
              "subtitle": "הישארו מעודכנים",
              "articles": [
                {"title": "כותרת מאמר 1", "summary": "תקציר המאמר", "date": "תאריך", "category": "קטגוריה"},
                {"title": "כותרת מאמר 2", "summary": "תקציר המאמר", "date": "תאריך", "category": "קטגוריה"},
                {"title": "כותרת מאמר 3", "summary": "תקציר המאמר", "date": "תאריך", "category": "קטגוריה"}
              ]
            };
            break;
          case 'competitive':
            structure.competitive = {
              "title": "למה אנחנו הטובים ביותר",
              "subtitle": "השוואה עם המתחרים",
              "advantages": [
                {"title": "יתרון תחרותי 1", "description": "מה עושים טוב יותר מהמתחרים", "competitors": "לעומת המתחרים"},
                {"title": "יתרון תחרותי 2", "description": "מה עושים טוב יותר מהמתחרים", "competitors": "לעומת המתחרים"},
                {"title": "יתרון תחרותי 3", "description": "מה עושים טוב יותר מהמתחרים", "competitors": "לעומת המתחרים"}
              ]
            };
            break;
          case 'before-after':
            structure.beforeAfter = {
              "title": "לפני ואחרי",
              "subtitle": "התוצאות שאנחנו מביאים",
              "cases": [
                {"title": "מקרה 1", "before": "המצב לפני", "after": "המצב אחרי", "improvement": "שיפור באחוזים"},
                {"title": "מקרה 2", "before": "המצב לפני", "after": "המצב אחרי", "improvement": "שיפור באחוזים"},
                {"title": "מקרה 3", "before": "המצב לפני", "after": "המצב אחרי", "improvement": "שיפור באחוזים"}
              ]
            };
            break;
        }
      });
      
      return structure;
    };

    const jsonStructure = buildJsonStructure(sectionsToGenerate);

    const prompt = `
אתה מומחה בעברית ליצירת דפי נחיתה מקצועיים. צור דף נחיתה מושלם עבור:

${businessInfo}
${additionalInfo}

צור תוכן מלא ומפורט שכולל JSON עם המבנה הבא (רק עבור הסקשנים שצוינו):

${JSON.stringify(jsonStructure, null, 2)}

הנחיות חשובות:
1. השתמש במידע שסופק על העסק כדי ליצור תוכן מותאם אישית
2. אם יש מידע על בעיות שהעסק פותר, שלב זאת בתוכן
3. אם יש סיפורי הצלחה, השתמש בהם כהשראה להמלצות ותוכן
4. אם יש מידע על דחיפות, שלב זאת בקריאות לפעולה
5. התוכן צריך להיות מקצועי, משכנע ומותאם לתחום הפעילות
6. השתמש בשמות, מחירים וחוקים המתאימים לישראל
7. כל הטקסטים בעברית ברמה גבוהה

החזר רק JSON תקף.`;

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