
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-white">צור קשר</h3>
          <p className="text-xl text-gray-300">יש שאלות? אנחנו כאן לעזור לך 24/7</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold mb-6 text-white">שלח לנו הודעה</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">שם מלא</label>
                    <Input 
                      type="text" 
                      placeholder="השם שלך"
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">אימייל</label>
                    <Input 
                      type="email" 
                      placeholder="example@email.com"
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">נושא</label>
                  <Input 
                    type="text" 
                    placeholder="איך נוכל לעזור?"
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">הודעה</label>
                  <Textarea 
                    placeholder="ספר לנו על הפרויקט שלך..."
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3">
                  <Send className="w-5 h-5 ml-2" />
                  שלח הודעה
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-600/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">אימייל</h5>
                    <p className="text-gray-300">support@leadgrid.co.il</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-600/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">טלפון</h5>
                    <p className="text-gray-300">03-1234567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-600/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">כתובת</h5>
                    <p className="text-gray-300">תל אביב, ישראל</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-6 rounded-xl border border-green-600/20">
              <h5 className="font-semibold text-white mb-3">זמני פעילות</h5>
              <div className="space-y-2 text-gray-300">
                <p>ראשון - חמישי: 8:00 - 20:00</p>
                <p>שישי: 8:00 - 14:00</p>
                <p>שבת: סגור</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
