
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
      message: "שלום! אני LeadGrid AI, כאן כדי לעזור לך ליצור דף נחיתה מושלם. איך אוכל לעזור?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const botResponses = [
    "זה נשמע מעניין! איך אוכל לעזור לך עם דף הנחיתה?",
    "אני כאן כדי לעזור! תוכל לתאר לי יותר על העסק שלך?",
    "מעולה! בואו נתחיל ליצור משהו מדהים יחד.",
    "אני ממליץ להתחיל עם השאלון שלנו - זה יעזור לי להבין טוב יותר את הצרכים שלך.",
    "יש לי כמה רעיונות! מה אתה אוהב יותר - עיצוב מינימליסטי או עשיר ויצירתי?",
    "האם תרצה שאסביר לך על היתרונות של דף נחיתה מותאם אישית?",
    "אני יכול לעזור לך עם בחירת צבעים, תוכן, ואפילו אסטרטגיית שיווק!",
    "מה הקהל שלך? זה יעזור לי להמליץ על הגישה הטובה ביותר.",
    "דף נחיתה טוב יכול להכפיל את ההמרות שלך! בואו ניצור משהו מיוחד.",
    "יש לי ניסיון עם מגוון תחומים - ספר לי על העסק שלך!"
  ];

  const getRandomResponse = (userMessage: string) => {
    // Simple keyword-based responses
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("עזרה") || lowerMessage.includes("לא יודע")) {
      return "אל תדאג! אני כאן כדי להדריך אותך בכל שלב. בואו נתחיל בשאלון הקצר שלנו - זה יעזור לי להבין בדיוק מה אתה צריך.";
    }
    
    if (lowerMessage.includes("מחיר") || lowerMessage.includes("עלות") || lowerMessage.includes("כסף")) {
      return "המערכת שלנו מתחילה מתוכנית בסיסית וההוצאות תלויות באפשרויות שתבחר. הדבר הטוב ביותר שאני יכול להציע זה לנסות את השאלון - זה חינם לגמרי!";
    }
    
    if (lowerMessage.includes("זמן") || lowerMessage.includes("כמה זמן") || lowerMessage.includes("מהיר")) {
      return "תהליך יצירת הדף לוקח רק כמה דקות! השאלון עצמו הוא 4 שאלות קצרות, והבינה המלאכותית יוצרת את הדף תוך פחות מדקה.";
    }
    
    if (lowerMessage.includes("וורדפרס") || lowerMessage.includes("wordpress")) {
      return "כן! יש לנו אפשרות מעולה לחבר את הדף לוורדפרס. אחרי שתיצור את הדף, תקבל מדריך פשוט לחיבור וגם קובץ HTML מוכן להורדה.";
    }
    
    if (lowerMessage.includes("דומיין") || lowerMessage.includes("כתובת")) {
      return "בטח! אנחנו מציעים גם רכישת דומיין ישירות דרך המערכת. תוכל לראות דומיינים זמינים ולרכוש אחד שמתאים לעסק שלך.";
    }
    
    // Return random response for general messages
    return botResponses[Math.floor(Math.random() * botResponses.length)];
  };

  const simulateTyping = async () => {
    setIsTyping(true);
    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    setIsTyping(false);
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    const userMessage = chatMessage.trim();
    
    // Add user message
    const newUserMessage: ChatMessage = {
      type: "user",
      message: userMessage,
      timestamp: new Date()
    };
    
    setChatHistory(prev => [...prev, newUserMessage]);
    setChatMessage("");
    
    // Simulate bot typing
    await simulateTyping();
    
    // Add bot response
    const botResponse: ChatMessage = {
      type: "bot",
      message: getRandomResponse(userMessage),
      timestamp: new Date()
    };
    
    setChatHistory(prev => [...prev, botResponse]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          {isChatOpen ? (
            <ArrowLeft className="w-6 h-6 transition-transform group-hover:scale-110" />
          ) : (
            <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
          )}
        </Button>
        {!isChatOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">AI</span>
          </div>
        )}
      </div>

      {/* Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-24 left-6 w-96 h-[500px] bg-gray-800 rounded-lg shadow-2xl border border-gray-700 z-50 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center ml-3">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">LeadGrid AI</h4>
                <p className="text-sm text-blue-100 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full ml-1 animate-pulse"></div>
                  פעיל עכשיו
                </p>
              </div>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-900" dir="rtl">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] ${msg.type === 'bot' 
                  ? 'bg-blue-600/20 text-blue-100 rounded-lg rounded-br-none' 
                  : 'bg-gray-700 text-gray-100 rounded-lg rounded-bl-none'
                } p-3 shadow-lg`}>
                  <div className="flex items-start gap-2">
                    {msg.type === 'bot' && (
                      <Sparkles className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    )}
                    {msg.type === 'user' && (
                      <User className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-sm leading-relaxed">{msg.message}</p>
                      <span className="text-xs opacity-60 mt-1 block">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-blue-600/20 text-blue-100 rounded-lg rounded-br-none p-3 max-w-[80%]">
                  <div className="flex items-center gap-2">
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
          
          {/* Chat Input */}
          <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-700 bg-gray-800">
            <div className="flex gap-2">
              <Input
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="הקלד הודעה..."
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                dir="rtl"
                disabled={isTyping}
              />
              <Button 
                type="submit" 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700 px-4"
                disabled={isTyping || !chatMessage.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
