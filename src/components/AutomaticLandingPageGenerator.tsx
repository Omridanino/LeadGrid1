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
        styles: {},
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

  // Template editor functionality removed
  if (isEditing && generatedTemplate) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-card rounded-lg border w-full max-w-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">עורך התבניות זמנית לא זמין</h3>
          <Button onClick={() => setIsEditing(false)}>חזור</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-card rounded-lg border w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-foreground text-2xl font-bold">🚀 מחולל דפי נחיתה אוטומטי</h2>
              <p className="text-primary text-sm mt-1">יוצר דף נחיתה מותאם אישית לעסק שלך!</p>
            </div>
            <Button onClick={onClose} size="sm" variant="outline">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">בחר את החבילה שלך</h3>
                <p className="text-muted-foreground">כל חבילה כוללת עיצובים שונים ויחודיים</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card 
                  className={`cursor-pointer transition-all ${formData.packageType === 'basic' ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => handleInputChange('packageType', 'basic')}
                >
                  <CardContent className="p-6 text-center">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">דף נחיתה בסיסי</h4>
                    <Badge className="mb-4">35 עיצובים שונים</Badge>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✓ תוכן מותאם אישית</li>
                      <li>✓ עיצוב מקצועי</li>
                      <li>✓ ניתן לעריכה מלאה</li>
                      <li>✓ אופטימזציה לנייד</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card 
                  className={`cursor-pointer transition-all ${formData.packageType === 'premium' ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => handleInputChange('packageType', 'premium')}
                >
                  <CardContent className="p-6 text-center">
                    <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">דף נחיתה פרימיום</h4>
                    <Badge className="mb-4 bg-yellow-500">25 עיצובים מתקדמים</Badge>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✓ אפקטים מתקדמים</li>
                      <li>✓ אנימציות מיוחדות</li>
                      <li>✓ עיצוב פרימיום</li>
                      <li>✓ אלמנטים אינטראקטיביים</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button onClick={() => setStep(2)} className="px-8 py-3">
                  המשך
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">ספר לנו על העסק שלך</h3>
                <p className="text-muted-foreground">המידע יעזור לנו ליצור תוכן מותאם אישית</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">שם העסק *</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    placeholder="לדוגמה: טכנולוגיות מתקדמות בע&quot;מ"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType">סוג העסק</Label>
                  <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="בחר סוג עסק" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">תחום הפעילות *</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="בחר תחום" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetAudience">קהל היעד</Label>
                  <Input
                    id="targetAudience"
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    placeholder="לדוגמה: חברות הייטק, עסקים קטנים"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessDescription">תיאור העסק</Label>
                <Textarea
                  id="businessDescription"
                  value={formData.businessDescription}
                  onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                  placeholder="תאר בקצרה את העסק שלך, מה אתם עושים ומה מייחד אתכם..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">מטרות הדף</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => handleInputChange('goals', e.target.value)}
                  placeholder="מה אתם רוצים להשיג מהדף? (לדוגמה: לידים, מכירות, הרשמות)"
                  rows={2}
                />
              </div>

              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => setStep(1)}>
                  חזור
                </Button>
                <Button 
                  onClick={handleGenerate}
                  disabled={!formData.businessName || !formData.industry || isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                      יוצר דף נחיתה...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4 mr-2" />
                      צור דף נחיתה
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {step === 3 && generatedTemplate && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">🎉 הדף שלך מוכן!</h3>
                <p className="text-muted-foreground">הדף נוצר בהתאם לפרטים שמסרת</p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <Badge className="text-lg px-4 py-2">
                      {generatedTemplate.category}
                    </Badge>
                    
                    <h4 className="text-xl font-bold">{generatedTemplate.name}</h4>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">{generatedTemplate.hero.title}</h5>
                      <p className="text-sm text-muted-foreground mb-3">{generatedTemplate.hero.subtitle}</p>
                      <div className="flex gap-2 justify-center">
                        <div className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded">
                          {generatedTemplate.hero.button1Text}
                        </div>
                        <div className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                          {generatedTemplate.hero.button2Text}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>סגנון עיצוב:</strong><br/>
                        {formData.packageType === 'premium' ? 'פרימיום מתקדם' : 'בסיסי מקצועי'}
                      </div>
                      <div>
                        <strong>תחום:</strong><br/>
                        {formData.industry}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={resetGenerator}>
                  צור דף חדש
                </Button>
                <Button onClick={handleEditTemplate} className="px-8">
                  <Edit className="w-4 h-4 mr-2" />
                  ערוך ופרסם
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AutomaticLandingPageGenerator;