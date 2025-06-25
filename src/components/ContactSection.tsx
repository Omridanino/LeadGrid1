
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "ההודעה נשלחה בהצלחה!",
      description: "נחזור אליך בהקדם האפשרי.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-6 text-white">מוכנים להתחיל?</h3>
          <p className="text-xl text-blue-100">צרו קשר איתנו עכשיו ותקבלו דף נחיתה מושלם תוך דקות</p>
        </div>
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-8">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">שם מלא</label>
                  <Input className="bg-white/20 border-white/30 text-white placeholder:text-white/70" placeholder="השם שלך" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">אימייל</label>
                  <Input type="email" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">על איזה עסק מדובר?</label>
                <Input className="bg-white/20 border-white/30 text-white placeholder:text-white/70" placeholder="תיאור קצר של העסק" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">ספר לנו על המטרות שלך</label>
                <Textarea className="bg-white/20 border-white/30 text-white placeholder:text-white/70" placeholder="מה אתה רוצה להשיג עם דף הנחיתה?" rows={4} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                <Send className="w-5 h-5 ml-2" />
                שלח בקשה ותקבל דף נחיתה מותאם
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
