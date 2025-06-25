
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, MessageCircle, Send } from "lucide-react";

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { type: "bot", message: "שלום! אני LeadGrid Bot, כאן כדי לעזור לך ליצור דף נחיתה מושלם. איך אוכל לעזור?" }
  ]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    const newHistory = [
      ...chatHistory,
      { type: "user", message: chatMessage },
      { type: "bot", message: "תודה על ההודעה! אני כאן כדי לעזור לך עם יצירת דף הנחיתה. האם תרצה שאתחיל בניתוח העסק שלך?" }
    ];
    setChatHistory(newHistory);
    setChatMessage("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isChatOpen ? <ArrowLeft className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-24 left-6 w-80 h-96 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 z-50 flex flex-col">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
            <h4 className="font-semibold">LeadGrid Bot</h4>
            <p className="text-sm text-blue-100">כאן כדי לעזור לך!</p>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3" dir="rtl">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`p-3 rounded-lg ${msg.type === 'bot' ? 'bg-blue-600/20 text-blue-100' : 'bg-gray-700 text-gray-100 mr-8'}`}>
                <p className="text-sm">{msg.message}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-700">
            <div className="flex space-x-reverse space-x-2">
              <Input
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="הקלד הודעה..."
                className="flex-1 bg-gray-700 border-gray-600 text-white"
                dir="rtl"
              />
              <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
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
