
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Globe,
  Shield,
  Server,
  Lock,
  CreditCard,
  Zap,
  Star,
  Crown,
  Gift
} from 'lucide-react';
import { LeadgridDomainWizard } from './domain/LeadgridDomainWizard';
import { TemplateData } from '@/types/template';

interface LaunchSectionProps {
  template: TemplateData;
  onBack: () => void;
  className?: string;
}

export const LaunchSection = ({ template, onBack, className = '' }: LaunchSectionProps) => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const pricingPlans = [
    {
      id: 'basic',
      name: 'בסיסי',
      originalPrice: 169,
      currentPrice: 89,
      savings: 80,
      popular: false,
      features: [
        'דומיין .co.il או .com חינם לשנה',
        'אחסון 10GB SSD מהיר',
        'SSL מתקדם חינם',
        'גיבוי יומי אוטומטי',
        'תמיכה בעברית 24/7',
        'עריכה חיה של האתר'
      ],
      note: 'מושלם להתחלה'
    },
    {
      id: 'professional',
      name: 'מקצועי',
      originalPrice: 289,
      currentPrice: 149,
      savings: 140,
      popular: true,
      features: [
        'דומיין .co.il או .com חינם לשנה',
        'אחסון 50GB SSD מהיר',
        'SSL מתקדם + CDN גלובלי',
        'גיבוי יומי + שחזור מהיר',
        'אנליטיקס מתקדם',
        'תמיכה VIP בעברית 24/7',
        'עריכה חיה ללא הגבלה',
        '5 תיבות דואר מקצועיות'
      ],
      note: 'הכי פופולרי - מומלץ לעסקים'
    },
    {
      id: 'enterprise',
      name: 'אנטרפרייז',
      originalPrice: 489,
      currentPrice: 249,
      savings: 240,
      popular: false,
      features: [
        'דומיין .co.il או .com חינם לשנה',
        'אחסון 200GB SSD מהיר',
        'SSL מתקדם + CDN פרימיום',
        'גיבוי יומי + DR מלא',
        'אנליטיקס + דוחות מתקדמים',
        'תמיכה ייעודית בעברית',
        'עריכה חיה + גישה למפתחים',
        'תיבות דואר ללא הגבלה',
        'אינטגרציות מתקדמות'
      ],
      note: 'לעסקים גדולים עם צרכים מתקדמים'
    }
  ];

  return (
    <>
      <div className={`space-y-8 ${className}`}>
        {/* Header */}
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <Rocket className="w-12 h-12 text-white" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-black" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🎯 הפוך את האתר שלך לאמיתי עם LEADGRID!
          </h2>
          <p className="text-xl text-gray-400 mb-2">
            הפתרון הישראלי המלא - דומיין, אחסון ותמיכה בעברית
          </p>
          <p className="text-sm text-gray-500">
            עריכה וניהול גם אחרי הפרסום + תמיכה טכנית 24/7
          </p>
        </div>

        {/* Template Preview */}
        <Card className="bg-gray-800 border-gray-700 max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              תצוגה מקדימה - {template.name || template.hero.title}
              <Badge className="bg-green-600 text-white text-xs mr-2">מוכן לפרסום</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-white font-semibold text-lg mb-3">{template.hero.title}</h3>
              <p className="text-gray-400 mb-4">{template.hero.subtitle}</p>
              <div className="flex gap-3">
                <div 
                  className="px-4 py-2 text-white text-sm rounded font-medium flex items-center gap-2"
                  style={{ backgroundColor: template.styles.primaryColor }}
                >
                  {template.hero.button1Icon && <i className={`ri-${template.hero.button1Icon}`}></i>}
                  {template.hero.button1Text}
                </div>
                <div 
                  className="px-4 py-2 text-white text-sm rounded flex items-center gap-2"
                  style={{ backgroundColor: template.styles.secondaryColor }}
                >
                  {template.hero.button2Icon && <i className={`ri-${template.hero.button2Icon}`}></i>}
                  {template.hero.button2Text}
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center">
              זו רק תצוגה מקדימה - האתר המלא יכלול את כל הקטעים והתוכן שיצרת
            </p>
          </CardContent>
        </Card>

        {/* Special Launch Offer Banner */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-lg border border-yellow-500/30 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Gift className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-300 font-bold text-2xl">מבצע השקה מיוחד!</span>
              <Gift className="w-6 h-6 text-yellow-400" />
            </div>
            <p className="text-yellow-200 font-medium text-lg mb-2">
              חסוך עד 240₪ - דומיין חינם + אחסון מקצועי
            </p>
            <p className="text-yellow-300 text-sm">
              המבצע בתוקף רק השבוע - אל תפספס!
            </p>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            בחר את החבילה המושלמת עבורך
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`
                  relative bg-gray-800 border-gray-700 transition-all hover:scale-105
                  ${plan.popular ? 'ring-2 ring-blue-500 bg-gradient-to-b from-blue-900/20 to-gray-800' : ''}
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1 flex items-center gap-1">
                      <Crown className="w-4 h-4" />
                      הכי פופולרי
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-white text-xl mb-2">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold text-white">₪{plan.currentPrice}</span>
                      <span className="text-lg text-gray-400 line-through">₪{plan.originalPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                      חסוך ₪{plan.savings}! ({Math.round((plan.savings / plan.originalPrice) * 100)}%)
                    </div>
                    <div className="text-gray-400 text-sm">/שנה</div>
                  </div>
                  <p className="text-blue-300 text-sm font-medium">{plan.note}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => setIsWizardOpen(true)}
                    className={`
                      w-full py-3 font-bold text-lg
                      ${plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                      }
                    `}
                  >
                    {plan.popular && <Crown className="w-5 h-5 ml-2" />}
                    בחר חבילה
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* LEADGRID Features */}
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-700/50 max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-center text-2xl flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              למה LEADGRID? הפתרון הישראלי המלא
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-200">
                  <Globe className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-medium">דומיינים ישראליים</div>
                    <div className="text-sm text-blue-300">.co.il, .com במחירים הטובים</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <Server className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="font-medium">אחסון מקומי</div>
                    <div className="text-sm text-blue-300">שרתים בישראל - מהירות מקסימלית</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-200">
                  <Lock className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="font-medium">SSL פרימיום</div>
                    <div className="text-sm text-blue-300">אבטחה מתקדמת חינם</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="font-medium">תמיכה בעברית</div>
                    <div className="text-sm text-blue-300">24/7 עם צוות ישראלי</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-200">
                  <Zap className="w-6 h-6 text-orange-400" />
                  <div>
                    <div className="font-medium">עריכה חיה</div>
                    <div className="text-sm text-blue-300">שינוי התוכן גם אחרי הפרסום</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <CreditCard className="w-6 h-6 text-pink-400" />
                  <div>
                    <div className="font-medium">תשלום ישראלי</div>
                    <div className="text-sm text-blue-300">כרטיס אשראי, Bit, PayPal</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main CTA */}
        <div className="text-center">
          <Button 
            onClick={() => setIsWizardOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all"
          >
            <Rocket className="w-7 h-7 ml-3" />
            התחל עם LEADGRID עכשיו!
            <ArrowRight className="w-7 h-7 mr-3" />
          </Button>
          <p className="text-gray-400 text-sm mt-3">
            תהליך של 5 דקות בלבד - הכל בעברית ושקוף
          </p>
          <p className="text-yellow-400 text-xs mt-1 font-medium">
            💰 30 יום החזר כספי מלא - בלי שאלות!
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-3xl mx-auto pt-8">
          <Button
            onClick={onBack}
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-700"
          >
            <ArrowLeft className="w-4 h-4 ml-2" />
            חזור לעריכה
          </Button>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              השלב האחרון - האתר שלך עומד להיות חי!
            </p>
          </div>
        </div>
      </div>

      <LeadgridDomainWizard
        template={template}
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onComplete={(result) => {
          console.log('LEADGRID domain purchase completed:', result);
          setIsWizardOpen(false);
        }}
      />
    </>
  );
};
