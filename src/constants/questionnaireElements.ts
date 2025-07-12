
// סקשנים קבועים שיופיעו בכל דף נחיתה
export const fixedElements = [
  { id: "hero", label: "סקשן הירו", description: "כותרת ראשית עם אנימציות מתקדמות" },
  { id: "emotional", label: "פסקת רגש", description: "יצירת חיבור רגשי עם הלקוחות" },
  { id: "services", label: "השירותים שלנו", description: "פירוט מלא של כל השירותים" },
  { id: "whyUs", label: "למה דווקא אנחנו", description: "הצגת היתרונות הייחודיים שלכם" },
  { id: "pricing", label: "מחירים וחבילות", description: "מחירון שקוף וחבילות מותאמות" },
  { id: "competitive", label: "היתרון שלנו", description: "מה מייחד אותנו מהמתחרים" },
  { id: "faq", label: "שאלות נפוצות", description: "תשובות לשאלות הכי חשובות" },
  { id: "contact", label: "צור קשר", description: "טופס יצירת קשר מתקדם" }
];

// רשימת הסקשנים הקבועים כמערך פשוט
export const fixedElementIds = fixedElements.map(element => element.id);

// רשימה ישנה לתאימות (deprecated)
export const elementOptions = [
  // 6 מומלצים - מסומנים כבר
  { id: "hero", label: "סקשן הירו מתקדם", description: "כותרת ראשית עם אנימציות תלת-מימדיות", recommended: true },
  { id: "emotional", label: "פסקת רגש של התחום", description: "יצירת חיבור רגשי עם הלקוחות", recommended: true },
  { id: "whyUs", label: "למה לבחור בנו", description: "הצגת היתרונות הייחודיים שלכם", recommended: true },
  { id: "whatWeGive", label: "מה אנחנו נותנים", description: "התמחויות והשירותים המרכזיים", recommended: true },
  { id: "testimonials", label: "ביקורות לקוחות", description: "המלצות אמיתיות ומוכחות", recommended: true },
  { id: "contact", label: "צור קשר מתקדם", description: "טופס יצירת קשר עם עיצוב תלת-מימדי", recommended: true },
  
  // אלמנטים נוספים
  { id: "gallery", label: "גלריית תמונות דינמית", description: "הצגת עבודות וגלריה עם אפקטים תלת-מימדיים", recommended: false },
  { id: "process", label: "תהליך השירות", description: "הסבר שלב אחר שלב על התהליך שלכם", recommended: false },
  { id: "about", label: "קצת עלינו", description: "סיפור העסק והחזון שלכם", recommended: false },
  { id: "blog", label: "בלוג ומאמרים", description: "מאמרים וטיפים רלוונטיים לתחום", recommended: false },
  { id: "services", label: "השירותים שלנו", description: "פירוט מלא של כל השירותים", recommended: false },
  { id: "faq", label: "שאלות נפוצות", description: "תשובות לשאלות הכי חשובות", recommended: false },
  { id: "pricing", label: "מחירים וחבילות", description: "מחירון שקוף וחבילות מותאמות", recommended: false },
  { id: "partners", label: "לקוחות ושותפים", description: "לוגואים ולקוחות מרכזיים", recommended: false },
  { id: "competitive", label: "היתרון התחרותי", description: "מה מייחד אותנו מהמתחרים", recommended: false },
  { id: "final-cta", label: "קריאה לפעולה אחרונה", description: "עידוד אחרון לפנייה או רכישה", recommended: false }
];
