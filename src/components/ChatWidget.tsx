
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, MessageCircle, Send, Bot, User, Sparkles } from "lucide-react";

interface ChatMessage {
  type: "bot" | "user";
  message: string;
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWidget = ({ isOpen, onClose }: ChatWidgetProps) => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { 
      type: "bot", 
      message: "שלום! 👋 אני הבוט החכם של LeadGrid. אני כאן כדי לעזור לך ליצור את דף הנחיתה המושלם לעסק שלך.\n\nאני יכול לעזור לך עם:\n• בחירת העיצוב הטוב ביותר לתחום שלך\n• כתיבת תוכן שממיר מבקרים ללקוחות\n• אופטימיזציה למנועי חיפוש\n• אסטרטגיית שיווק דיגיטלי\n• חיבור לכלי שיווק מתקדמים\n\nמה מעניין אותך הכי הרבה?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    console.log("ChatWidget isOpen changed:", isOpen);
  }, [isOpen]);

  const getIntelligentResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("עזרה") || lowerMessage.includes("לא יודע") || lowerMessage.includes("איך")) {
      return "אל תדאג, אני כאן בדיוק בשביל זה! 🎯\n\nהדרך הכי טובה להתחיל היא עם השאלון הקצר שלנו. זה לוקח רק 2-3 דקות ואני אכין לך דף נחיתה מקצועי שמותאם בדיוק לעסק שלך.\n\nהשאלון כולל:\n• פרטים על העסק שלך\n• הקהל שאתה מכוון אליו\n• המטרות שלך\n• העיצוב שמתאים לך\n\nאחרי זה אתה מקבל דף מוכן תוך דקה עם אפשרות לערוך ולהתאים אותו בדיוק כמו שאתה רוצה. רוצה שנתחיל?";
    }
    
    if (lowerMessage.includes("מחיר") || lowerMessage.includes("עלות") || lowerMessage.includes("כסף") || lowerMessage.includes("תשלום")) {
      return "המחירים שלנו מתחילים ממחיר סמלי מאוד! 💰\n\n🆓 תוכל להתחיל חינם:\n• ליצור דף נחיתה\n• לראות איך הוא נראה\n• להוריד את הקוד\n\n💎 חבילות מתקדמות כוללות:\n• רכישת דומיין (₪99/שנה)\n• הוסטינג מהיר ומאובטח\n• אנליטיקס מתקדם\n• תמיכה 24/7\n• חיבור לכלי שיווק\n\nהכי טוב שתנסה קודם חינם ותראה כמה זה מדהים! אחרי זה נוכל לדבר על שדרוג.";
    }
    
    // תשובות כלליות חכמות
    const smartResponses = [
      "מעניין מאוד! 🤔\n\nיש לי כמה שאלות שיעזרו לי להבין טוב יותר איך לעזור לך:\n• איזה סוג עסק יש לך?\n• מי הקהל שאתה מכוון אליו?\n• מה המטרה העיקרית של הדף?\n\nככל שאני אבין יותר על הצרכים שלך, כך אוכל לתת לך עצות מדויקות יותר. אגב, השאלון שלנו כולל בדיוק את השאלות האלה ועוד כמה שיעזרו ליצור לך דף מושלם!",
      
      "אני רואה שאתה מתעניין בנושא! 💡\n\nתאמין לי, אני עזרתי לאלפי עסקים ליצור דפי נחיתה מוצלחים. המפתח הוא להבין מה באמת חשוב ללקוחות שלך ולתת להם את זה בצורה הכי ברורה ונוחה.\n\nהבינה המלאכותית שלנו לוקחת את המידע שאתה נותן לה ויוצרת דף שמתאים בדיוק לתחום שלך ולקהל שלך.\n\nרוצה שנתחיל? יש לי הרגשה שאתה תהיה ממש מופתע מהתוצאה!",
      
      "שאלה מעולה! 🎯\n\nאחד הדברים שהכי גאה בהם במערכת שלנו זה שהיא לא רק יוצרת דף יפה, אלא דף שבאמת עובד. כל רכיב בדף מתוכנן כדי להוביל את המבקר לעשות פעולה - להתקשר, למלא טופס, לקנות, מה שחשוב לעסק שלך.\n\nהחלק הכי מגניב הוא שאחרי שהדף מוכן, אתה יכול לערוך אותו בזמן אמת, לראות איך השינויים נראים, ולהתאים הכל בדיוק כמו שאתה רוצה.\n\nמה דעתך שנתחיל ביצירת דף לעסק שלך?"
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md h-[80vh] bg-gray-800 rounded-2xl shadow-2xl border border-gray-600 flex flex-col overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center ml-3">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">LeadGrid AI</h4>
                <p className="text-sm text-blue-100 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full ml-1 animate-pulse"></div>
                  מומחה לדפי נחיתה
                </p>
              </div>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-900" dir="rtl">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[85%] ${msg.type === 'bot' 
                ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-100 rounded-2xl rounded-br-md border border-blue-500/30' 
                : 'bg-gray-700 text-gray-100 rounded-2xl rounded-bl-md'
              } p-4 shadow-lg backdrop-blur-sm`}>
                <div className="flex items-start gap-3">
                  {msg.type === 'bot' && (
                    <Sparkles className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  )}
                  {msg.type === 'user' && (
                    <User className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed whitespace-pre-line">{msg.message}</p>
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
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-100 rounded-2xl rounded-br-md p-4 max-w-[85%] border border-blue-500/30">
                <div className="flex items-center gap-3">
                  <Bot className="w-4 h-4 text-blue-400" />
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
        
        <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-700 bg-gray-800 rounded-b-2xl">
          <div className="flex gap-3">
            <Input
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="שאל אותי כל שאלה..."
              className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 rounded-xl"
              dir="rtl"
              disabled={isTyping}
            />
            <Button 
              type="submit" 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 rounded-xl"
              disabled={isTyping || !chatMessage.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;
