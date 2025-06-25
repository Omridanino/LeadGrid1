
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQSection = () => {
  const faqItems = [
    {
      question: "כמה זמן לוקח ליצור דף נחיתה?",
      answer: "עם LeadGrid, אתה יכול ליצור דף נחיתה מקצועי תוך 5-15 דקות בלבד!"
    },
    {
      question: "האם אני צריך ידע טכני?",
      answer: "בכלל לא! המערכת מתוכננת להיות פשוטה וידידותית למשתמש. פשוט עוני על כמה שאלות והמערכת תעשה את השאר."
    },
    {
      question: "איך מתחברים ל-WordPress?",
      answer: "החיבור ל-WordPress קל ומהיר. פשוט תלחץ על כפתור החיבור, תזין את פרטי האתר שלך, והכל יסונכרן אוטומטית."
    },
    {
      question: "מה כלול במחיר?",
      answer: "המחיר כולל את כל הכלים: יצירת דפים אוטומטית, צ'אטבוט AI, תבניות ללא הגבלה, ותמיכה 24/7."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-white">שאלות נפוצות</h3>
          <p className="text-xl text-gray-300">כל מה שרציתם לדעת על LeadGrid</p>
        </div>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-right text-lg text-white">{item.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-right">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
