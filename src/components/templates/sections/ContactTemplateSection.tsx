
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactTemplateSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const ContactTemplateSection = ({
  title,
  subtitle,
  className = ""
}: ContactTemplateSectionProps) => {
  return (
    <section className={`py-20 px-8 ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">שלחו לנו הודעה</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">שם פרטי</Label>
                  <Input id="firstName" placeholder="השם הפרטי שלכם" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">שם משפחה</Label>
                  <Input id="lastName" placeholder="שם המשפחה שלכם" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">כתובת אימייל</Label>
                <Input id="email" type="email" placeholder="האימייל שלכם" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">טלפון</Label>
                <Input id="phone" type="tel" placeholder="מספר הטלפון שלכם" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">הודעה</Label>
                <Textarea 
                  id="message" 
                  placeholder="כתבו לנו מה אתם צריכים..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="flex gap-4 justify-center flex-wrap">
                <Button type="submit" size="lg" className="px-8 py-4">
                  שלח הודעה
                </Button>
                <Button type="button" variant="outline" size="lg" className="px-8 py-4">
                  התקשר אלינו
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
