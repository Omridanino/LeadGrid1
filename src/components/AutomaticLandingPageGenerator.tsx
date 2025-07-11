import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  X, 
  Sparkles, 
  Wand2, 
  Crown, 
  Zap,
  CheckCircle,
  ArrowRight,
  Edit,
  Eye
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import AdvancedLandingPageGenerator from './AdvancedLandingPageGenerator';

interface AutomaticLandingPageGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BusinessFormData {
  businessName: string;
  businessType: string;
  industry: string;
  targetAudience: string;
  businessDescription: string;
  goals: string;
  packageType: 'basic' | 'premium';
}

const AutomaticLandingPageGenerator = ({ isOpen, onClose }: AutomaticLandingPageGeneratorProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BusinessFormData>({
    businessName: '',
    businessType: '',
    industry: '',
    targetAudience: '',
    businessDescription: '',
    goals: '',
    packageType: 'basic'
  });
  const [generatedTemplate, setGeneratedTemplate] = useState<TemplateData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const industries = [
    'טכנולוגיה וסייבר',
    'בריאות ורפואה',
    'חינוך והכשרה',
    'יעוץ עסקי',
    'שיווק ופרסום',
    'נדל"ן',
    'מזון ומסעדנות',
    'אופנה ויופי',
    'ספורט וכושר',
    'תיירות ונופש',
    'פיננסים וביטוח',
    'משפטים',
    'בניה והנדסה',
    'אמנות ותרבות',
    'אחר'
  ];

  const businessTypes = [
    'סטארט-אפ',
    'חברה קטנה',
    'חברה בינונית',
    'חברה גדולה',
    'עסק משפחתי',
    'פרילנסר',
    'יועץ עצמאי',
    'ארגון ללא כוונת רווח',
    'אחר'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    try {
      // זמנית - יצירת תוכן בסיסי עד שנוסיף את הפונקציות
      const content = {
        hero: {
          title: `${formData.businessName} - המובילים ב${formData.industry}`,
          subtitle: 'פתרונות מקצועיים ואמינים',
          description: formData.businessDescription || 'שירותים מקצועיים ברמה הגבוהה ביותר',
          button1Text: 'התחל עכשיו',
          button2Text: 'למד עוד'
        }
      };
      
      // זמנית - עיצוב בסיסי
      const designVariation = {
        styles: {
          backgroundColor: '240 10% 3.9%',
          heroBackground: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
          emotionalBackground: '#3b82f6',
          featuresBackground: '240 3.7% 15.9%',
          testimonialsBackground: '240 10% 3.9%',
          aboutBackground: '240 3.7% 15.9%',
          pricingBackground: '240 3.7% 15.9%',
          faqBackground: '240 10% 3.9%',
          finalCtaBackground: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
          contactBackground: '240 3.7% 15.9%',
          footerBackground: '0 0% 0%',
          textColor: '#ffffff',
          primaryColor: '217 91% 60%',
          secondaryColor: '224 76% 48%',
          accentColor: '213 94% 68%'
        },
        effects: {
          hero: 'neon-grid-portal',
          emotional: 'digital-waves',
          features: 'holographic',
          testimonials: 'minimal-tech',
          about: 'glass-refraction',
          pricing: 'cosmic-geometry',
          faq: 'quantum-bubbles',
          finalCta: 'liquid-metal',
          contact: 'clean'
        }
      };
      
      // יצירת תבנית מלאה
      const template: TemplateData = {
        id: `auto-${Date.now()}`,
        name: `${formData.businessName} - דף נחיתה`,
        category: formData.packageType === 'premium' ? 'פרימיום' : 'בסיסי',
        hero: {
          title: content.hero.title,
          subtitle: content.hero.subtitle,
          description: content.hero.description,
          button1Text: content.hero.button1Text,
          button2Text: content.hero.button2Text
        },
        emotional: {
          title: `למה ${formData.businessName}?`,
          description: `אנחנו מתמחים ב${formData.industry} ומספקים פתרונות מותאמים אישית`,
          button1Text: 'גלה למה',
          button2Text: 'צור קשר'
        },
        about: {
          title: `הסיפור של ${formData.businessName}`,
          description: `${formData.businessName} מובילה בתחום ה${formData.industry} עם ניסיון רב ומומחיות ייחודית`,
          button1Text: 'קרא עוד',
          button2Text: 'פגוש את הצוות'
        },
        features: {
          title: 'מה מייחד אותנו',
          items: [
            { title: 'שירות מקצועי', description: 'צוות מקצועי ומנוסה', icon: 'star-line' },
            { title: 'איכות גבוהה', description: 'סטנדרטים גבוהים ואמינות', icon: 'award-line' },
            { title: 'תמיכה מלאה', description: 'ליווי מקצועי לאורך כל הדרך', icon: 'customer-service-line' },
            { title: 'מחירים הוגנים', description: 'יחס מחיר-ערך מעולה', icon: 'price-tag-line' }
          ],
          button1Text: 'כל היתרונות',
          button2Text: 'בקש פגישה'
        },
        testimonials: {
          title: 'מה הלקוחות אומרים עלינו',
          testimonials: [
            { name: 'יוסי כהן', role: 'לקוח מרוצה', content: `השירות ב${formData.businessName} פשוט מעולה, ממליץ בחום`, rating: 5 },
            { name: 'מיכל לוי', role: 'בעלת עסק', content: 'ליווי מקצועי ותוצאות מעבר לציפיות', rating: 5 }
          ],
          button1Text: 'עוד המלצות',
          button2Text: 'הצטרף אלינו'
        },
        pricing: {
          title: 'התוכניות שלנו',
          plans: [
            { 
              name: 'חבילה בסיסית', 
              price: '₪299', 
              period: 'חודש',
              features: ['תמיכה בסיסית', 'גישה למערכת', 'דוחות חודשיים'],
              buttonText: 'התחל עכשיו'
            },
            { 
              name: 'חבילה מתקדמת', 
              price: '₪599', 
              period: 'חודש',
              features: ['כל התכנים הבסיסיים', 'תמיכה מתקדמת', 'ייעוץ אישי', 'דוחות שבועיים'],
              buttonText: 'בחר תוכנית',
              recommended: true
            }
          ],
          button1Text: 'השווה תוכניות',
          button2Text: 'קבל הצעת מחיר'
        },
        contact: {
          title: 'בואו נתחיל לעבוד',
          subtitle: `מוכנים להתחיל לעבוד עם ${formData.businessName}?`,
          buttonText: 'צור קשר עכשיו'
        },
        faq: {
          title: 'שאלות נפוצות',
          questions: [
            {
              question: `איך ${formData.businessName} יכולה לעזור לי?`,
              answer: `אנחנו ב${formData.businessName} מתמחים ב${formData.industry} ויכולים לספק פתרונות מותאמים אישית לצרכים שלך`
            },
            {
              question: 'כמה זמן לוקח התהליך?',
              answer: 'זמן הטיפול תלוי בהיקף הפרויקט, אך אנחנו מתחייבים לזמני תגובה מהירים ויעילות מקסימלית'
            }
          ],
          button1Text: 'עוד שאלות',
          button2Text: 'דבר איתנו'
        },
        finalCta: {
          title: `מוכנים להתחיל עם ${formData.businessName}?`,
          description: `הצטרפו לעשרות לקוחות מרוצים שבחרו ב${formData.businessName} כשותף המקצועי שלהם`,
          button1Text: 'בואו נתחיל',
          button2Text: 'קבל ייעוץ חינם'
        },
        footer: {
          companyName: formData.businessName
        },
        styles: {
          backgroundColor: '#ffffff',
          heroBackground: '#f8fafc',
          emotionalBackground: '#ffffff',
          featuresBackground: '#f8fafc',
          testimonialsBackground: '#ffffff',
          aboutBackground: '#f8fafc',
          pricingBackground: '#ffffff',
          faqBackground: '#f8fafc',
          finalCtaBackground: '#ffffff',
          contactBackground: '#f8fafc',
          footerBackground: '#1f2937',
          textColor: '#1f2937',
          primaryColor: '#3b82f6',
          secondaryColor: '#6b7280',
          accentColor: '#f59e0b'
        },
        effects: {}
      };

      setGeneratedTemplate(template);
      setStep(3);
    } catch (error) {
      console.error('שגיאה ביצירת דף הנחיתה:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEditTemplate = () => {
    setIsEditing(true);
  };

  const handleTemplateChange = (updatedTemplate: TemplateData) => {
    setGeneratedTemplate(updatedTemplate);
  };

  const handlePublishSuccess = (url: string) => {
    setPublishedUrl(url);
    setShowSuccess(true);
    setIsEditing(false);
  };

  const resetGenerator = () => {
    setStep(1);
    setFormData({
      businessName: '',
      businessType: '',
      industry: '',
      targetAudience: '',
      businessDescription: '',
      goals: '',
      packageType: 'basic'
    });
    setGeneratedTemplate(null);
    setIsGenerating(false);
    setIsEditing(false);
    setPublishedUrl('');
    setShowSuccess(false);
  };

  if (!isOpen) return null;

  // Success screen
  if (showSuccess && publishedUrl) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
        <div className="bg-card rounded-lg border w-full max-w-2xl p-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <div>
              <h3 className="text-foreground text-2xl font-bold mb-2">🎉 הדף שלך מוכן!</h3>
              <p className="text-muted-foreground">הדף שלך זמין לצפייה עכשיו</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-right flex-1">
                    <div className="text-foreground font-semibold mb-1">הדף שלך:</div>
                    <div className="text-primary text-sm break-all">{publishedUrl}</div>
                    <div className="text-green-400 text-xs mt-1 font-medium">✅ זמין לצפייה עכשיו!</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button onClick={onClose} className="w-full">
              סיום
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AdvancedLandingPageGenerator 
      isOpen={isOpen}
      onClose={onClose}
      formData={formData}
    />
  );
};

export default AutomaticLandingPageGenerator;