
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, MapPin, Users, Target } from "lucide-react";
import ChatWidget from "./ChatWidget";
import { useState } from "react";

const ContactSection = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    console.log("Opening chat widget");
    setIsChatOpen(true);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@leadgrid.co.il";
  };

  const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: `url("${backgroundPattern}")` }}
        ></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-blue-200/30">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">בואו נתחיל</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight px-4">
              מוכנים להתחיל?
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                בואו ניצור יחד משהו מדהים
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              צרו קשר עכשיו ותגלו איך LeadGrid יכול לשנות את העסק שלכם
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* צ'אט ישיר */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100/50 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-6 text-center md:text-right">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mx-auto md:mx-0">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">צ'אט ישיר עם מומחה</h3>
                      <p className="text-gray-600">זמין 24/7 לעזרה מיידית</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8 text-center md:text-right">
                    <div className="flex items-center gap-3 text-gray-700 justify-center md:justify-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>תשובות מיידיות לכל שאלה</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 justify-center md:justify-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>ייעוץ מקצועי ללא עלות</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 justify-center md:justify-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>הדרכה בעברית</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleChatClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 ml-2" />
                    פתחו צ'אט
                  </Button>
                </div>
              </div>

              {/* מייל מהיר */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100/50 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-6 text-center md:text-right">
                    <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg mx-auto md:mx-0">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">מייל מהיר ואישי</h3>
                      <p className="text-gray-600">קבלו הצעה מותאמת תוך 24 שעות</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8 text-center md:text-right">
                    <div className="flex items-center gap-3 text-gray-700 justify-center md:justify-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>הצעת מחיר מפורטת</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 justify-center md:justify-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>ניתוח צרכים אישי</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 justify-center md:justify-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>המלצות מותאמות</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleEmailClick}
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5 ml-2" />
                    שלחו מייל
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default ContactSection;
