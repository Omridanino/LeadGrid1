
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, MessageCircle, Send, Bot, User, Sparkles } from "lucide-react";

interface ChatMessage {
  type: "bot" | "user";
  message: string;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { 
      type: "bot", 
      message: "שלום! 👋 אני הבוט החכם של LeadGrid. אני כאן כדי לעזור לך ליצור את דף הנחיתה המושלם לעסק שלך.\n\nאני יכול לעזור לך עם:\n• בחירת העיצוב הטוב ביותר לתחום שלך\n• כתיבת תוכן שממיר מבקרים ללקוחות\n• אופטימיזציה למנועי חיפוש\n• אסטרטגיית שיווק דיגיטלי\n• חיבור לכלי שיווק מתקדמים\n\nמה מעניין אותך הכי הרבה?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const getIntelligentResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("עזרה") || lowerMessage.includes("לא יודע") || lowerMessage.includes("איך")) {
      return "אל תדאג, אני כאן בדיוק בשביל זה! 🎯\n\nהדרך הכי טובה להתחיל היא עם השאלון הקצר שלנו. זה לוקח רק 2-3 דקות ואני אכין לך דף נחיתה מקצועי שמותאם בדיוק לעסק שלך.\n\nהשאלון כולל:\n• פרטים על העסק שלך\n• הקהל שאתה מכוון אליו\n• המטרות שלך\n• העיצוב שמתאים לך\n\nאחרי זה אתה מקבל דף מוכן תוך דקה עם אפשרות לערוך ולהתאים אותו בדיוק כמו שאתה רוצה. רוצה שנתחיל?";
    }
    
    if (lowerMessage.includes("מחיר") || lowerMessage.includes("עלות") || lowerMessage.includes("כסף") || lowerMessage.includes("תשלום")) {
      return "המחירים שלנו מתחילים ממחיר סמלי מאוד! 💰\n\n🆓 תוכל להתחיל חינם:\n• ליצור דף נחיתה\n• לראות איך הוא נראה\n• להוריד את הקוד\n\n💎 חבילות מתקדמות כוללות:\n• רכישת דומיין (₪99/שנה)\n• הוסטינג מהיר ומאובטח\n• אנליטיקס מתקדם\n• תמיכה 24/7\n• חיבור לכלי שיווק\n\nהכי טוב שתנסה קודם חינם ותראה כמה זה מדהים! אחרי זה נוכל לדבר על שדרוג.";
    }
    
    if (lowerMessage.includes("זמן") || lowerMessage.includes("כמה זמן") || lowerMessage.includes("מהיר") || lowerMessage.includes("דקות")) {
      return "זה הכי מהיר שיש! ⚡\n\n⏱️ התהליך כולו:\n• השאלון: 2-3 דקות\n• יצירת הדף: פחות מ-60 שניות\n• עיצוב והתאמות: כמה שאתה רוצה\n\nהבינה המלאכותית שלנו עובדת במהירות הבזק ויוצרת לך דף מקצועי שנראה כאילו צוות של מעצבים עבד עליו שבועות.\n\nאחרי שהדף מוכן, אתה יכול:\n• לערוך את העיצוב בזמן אמת\n• להוסיף תמונות\n• לשנות צבעים וגופנים\n• להוריד את הקוד\n• לחבר דומיין\n\nהכל תוך דקות ספורות!";
    }
    
    if (lowerMessage.includes("וורדפרס") || lowerMessage.includes("wordpress") || lowerMessage.includes("אתר קיים")) {
      return "בטח! יש לנו אינטגרציה מושלמת עם וורדפרס! 🔗\n\n✅ מה שאתה מקבל:\n• קוד HTML מוכן להעתקה\n• הוראות התקנה צעד אחר צעד\n• תמיכה טכנית אם צריך עזרה\n• התאמה מושלמת לעברית ו-RTL\n\n📋 התהליך פשוט:\n1. יוצר את הדף אצלנו\n2. מעתיק את הקוד\n3. מדביק בוורדפרס\n4. פרסום!\n\nהדף יעבוד מושלם באתר שלך וישמור על כל העיצוב והפונקציונליות. רוצה שאראה לך איך זה עובד?";
    }
    
    if (lowerMessage.includes("דומיין") || lowerMessage.includes("כתובת") || lowerMessage.includes("www")) {
      return "אנחנו דואגים גם לזה! 🌐\n\n🎯 שירותי הדומיין שלנו:\n• חיפוש דומיינים זמינים\n• רכישה ישירה דרך המערכת\n• הפניית DNS אוטומטית\n• SSL מובנה (אבטחת HTTPS)\n• תמיכה טכנית 24/7\n\n💡 מחירים:\n• .co.il - ₪99/שנה\n• .com - ₪120/שנה\n• .net/.org - ₪110/שנה\n\nברגע שתיצור את הדף, המערכת תציע לך דומיינים זמינים שמתאימים לעסק שלך. הכל מתחבר אוטומטית!\n\nרוצה שנתחיל ביצירת הדף ונראה איזה דומיינים זמינים?";
    }
    
    if (lowerMessage.includes("עיצוב") || lowerMessage.includes("צבעים") || lowerMessage.includes("יפה") || lowerMessage.includes("ברנד")) {
      return "העיצוב זה מה שאנחנו הכי טובים בו! 🎨\n\n✨ מה שמייחד אותנו:\n• בינה מלאכותית שמבינה את התחום שלך\n• עיצובים מותאמי אישית\n• צבעים שמתאימים לברנד שלך\n• טיפוגרפיה מקצועית\n• אייקונים וגרפיקות מותאמות\n\n🎯 אפשרויות העיצוב:\n• מינימליסטי ונקי\n• עשיר וצבעוני\n• קורפורטיבי ומקצועי\n• יצירתי ובולט\n• ועוד עשרות סגנונות\n\n⚡ עורך העיצוב שלנו מאפשר:\n• שינוי צבעים בזמן אמת\n• החלפת גופנים\n• הוספת תמונות\n• עיצוב כפתורים\n• התאמת רווחים\n\nהכל ללא צורך בידע טכני!";
    }
    
    if (lowerMessage.includes("תוצאות") || lowerMessage.includes("המרות") || lowerMessage.includes("לקוחות") || lowerMessage.includes("מכירות")) {
      return "זה מה שהכי חשוב - תוצאות אמיתיות! 📈\n\n🏆 הלקוחות שלנו מדווחים על:\n• עלייה של 250%-400% בהמרות\n• יותר פניות איכותיות\n• זמן טעינה מהיר יותר\n• מראה מקצועי שבונה אמון\n\n🎯 איך אנחנו משיגים את זה:\n• תוכן שכתוב בצורה שמוכרת\n• עיצוב שמוביל לפעולה\n• אופטימיזציה למובייל\n• טכנולוגיית SEO מובנית\n• כפתורי קריאה לפעולה אפקטיביים\n\n📊 כלים למעקב:\n• אנליטיקס מתקדם\n• מעקב אחר המרות\n• דוחות ביצועים\n• A/B testing\n\nהסוד הוא שאנחנו לא רק יוצרים דף יפה, אלא דף שמייצר תוצאות!";
    }
    
    if (lowerMessage.includes("תחום") || lowerMessage.includes("עסק") || lowerMessage.includes("תחומים")) {
      return "אנחנו עובדים עם כל סוגי העסקים! 🚀\n\n🏢 תחומים פופולריים:\n• עורכי דין ויועצים\n• רופאים ומטפלים\n• חברות הייטק\n• סטארטאפים\n• עסקים קטנים ובינוניים\n• מסעדות ובתי עסק\n• שירותי יופי ובריאות\n• חינוך והדרכות\n• נדל\"ן ושירותים פיננסיים\n\n🎯 לכל תחום יש:\n• תבניות מותאמות\n• תוכן רלוונטי\n• צבעי ברנד מתאימים\n• גישה שיווקית נכונה\n• קריאות לפעולה אפקטיביות\n\nהבינה המלאכותית שלנו מכירה את הדקויות של כל תחום ויוצרת דף שמתאים בדיוק למה שהלקוחות שלך מחפשים!\n\nאיזה תחום מעניין אותך?";
    }
    
    // תשובות כלליות חכמות
    const smartResponses = [
      "מעניין מאוד! 🤔\n\nיש לי כמה שאלות שיעזרו לי להבין טוב יותר איך לעזור לך:\n• איזה סוג עסק יש לך?\n• מי הקהל שאתה מכוון אליו?\n• מה המטרה העיקרית של הדף?\n\nככל שאני אבין יותר על הצרכים שלך, כך אוכל לתת לך עצות מדויקות יותר. אגב, השאלון שלנו כולל בדיוק את השאלות האלה ועוד כמה שיעזרו ליצור לך דף מושלם!",
      
      "אני רואה שאתה מתעניין בנושא! 💡\n\nתאמין לי, אני עזרתי לאלפי עסקים ליצור דפי נחיתה מוצלחים. המפתח הוא להבין מה באמת חשוב ללקוחות שלך ולתת להם את זה בצורה הכי ברורה ונוחה.\n\nהבינה המלאכותית שלנו לוקחת את המידע שאתה נותן לה ויוצרת דף שמתאים בדיוק לתחום שלך ולקהל שלך.\n\nרוצה שנתחיל? יש לי הרגשה שאתה תהיה ממש מופתע מהתוצאה!",
      
      "שאלה מעולה! 🎯\n\nאחד הדברים שהכי גאה בהם במערכת שלנו זה שהיא לא רק יוצרת דף יפה, אלא דף שבאמת עובד. כל רכיב בדף מתוכנן כדי להוביל את המבקר לעשות פעולה - להתקשר, למלא טופס, לקנות, מה שחשוב לעסק שלך.\n\nהחלק הכי מגניב הוא שאחרי שהדף מוכן, אתה יכול לערוך אותו בזמן אמת, לראות איך השינויים נראים, ולהתאים הכל בדיוק כמו שאתה רוצה.\n\nמה דעתך שנתחיל ביצירת דף לעסק שלך?",
      
      "אני אוהב את הגישה שלך! 💪\n\nתאמין לי, בתחום של דפי נחיתה יש הרבה פתרונות, אבל מה שמייחד אותנו זה השילוב של בינה מלאכותית מתקדמת עם הבנה עמוקה של שיווק דיגיטלי.\n\nהמערכת שלנו לא סתם יוצרת דף, היא חושבת על כל פיקסל - מה הצבע שיגרום למבקר ללחוץ על הכפתור, איך לכתוב כותרת שתעצור אותו, איפה למקם את טופס יצירת הקשר.\n\nהכל מבוסס על מחקרים ונתונים מאלפי דפים מוצלחים. רוצה לראות איך זה עובד על העסק שלך?"
    ];
    
    return smartResponses[Math.floor(Math.random() * smartResponses.length)];
  };

  const simulateTyping = async () => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 2000));
    setIsTyping(false);
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    const userMessage = chatMessage.trim();
    
    const newUserMessage: ChatMessage = {
      type: "user",
      message: userMessage,
      timestamp: new Date()
    };
    
    setChatHistory(prev => [...prev, newUserMessage]);
    setChatMessage("");
    
    await simulateTyping();
    
    const botResponse: ChatMessage = {
      type: "bot",
      message: getIntelligentResponse(userMessage),
      timestamp: new Date()
    };
    
    setChatHistory(prev => [...prev, botResponse]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50" data-chat-widget>
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          {isChatOpen ? (
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
          ) : (
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
          )}
        </Button>
        {!isChatOpen && (
          <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">AI</span>
          </div>
        )}
      </div>

      {isChatOpen && (
        <div className="fixed bottom-16 sm:bottom-24 left-4 sm:left-6 w-[calc(100vw-2rem)] sm:w-96 h-[70vh] sm:h-[600px] bg-gray-800 rounded-2xl shadow-2xl border border-gray-600 z-50 flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-t-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center ml-3">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg">LeadGrid AI</h4>
                <p className="text-xs sm:text-sm text-blue-100 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full ml-1 animate-pulse"></div>
                  מומחה לדפי נחיתה
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 sm:space-y-4 bg-gray-900" dir="rtl">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] ${msg.type === 'bot' 
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-100 rounded-2xl rounded-br-md border border-blue-500/30' 
                  : 'bg-gray-700 text-gray-100 rounded-2xl rounded-bl-md'
                } p-3 sm:p-4 shadow-lg backdrop-blur-sm`}>
                  <div className="flex items-start gap-2 sm:gap-3">
                    {msg.type === 'bot' && (
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mt-1 flex-shrink-0" />
                    )}
                    {msg.type === 'user' && (
                      <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">{msg.message}</p>
                      <span className="text-xs opacity-60 mt-2 block">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-100 rounded-2xl rounded-br-md p-3 sm:p-4 max-w-[85%] border border-blue-500/30">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleChatSubmit} className="p-3 sm:p-4 border-t border-gray-700 bg-gray-800 rounded-b-2xl">
            <div className="flex gap-2 sm:gap-3">
              <Input
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="שאל אותי כל שאלה..."
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 rounded-xl text-sm sm:text-base"
                dir="rtl"
                disabled={isTyping}
              />
              <Button 
                type="submit" 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-3 sm:px-4 rounded-xl"
                disabled={isTyping || !chatMessage.trim()}
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
