
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Server, 
  Shield, 
  CheckCircle, 
  Star,
  Zap
} from 'lucide-react';
import { QuestionnaireData } from '../LandingPageQuestionnaire';

interface DomainAndHostingStepProps {
  data: QuestionnaireData;
  onUpdate: (section: keyof QuestionnaireData, data: any) => void;
}

export const DomainAndHostingStep = ({ data, onUpdate }: DomainAndHostingStepProps) => {
  const hostingPlans = [
    {
      id: 'starter',
      name: 'התחלה',
      price: 89,
      features: [
        'דומיין חינם לשנה ראשונה',
        'SSL מאובטח',
        'גיבוי יומי',
        'תמיכה בעברית',
        '10GB אחסון'
      ],
      recommended: false
    },
    {
      id: 'professional',
      name: 'מקצועי',
      price: 189,
      features: [
        'דומיין חינם לשנה ראשונה',
        'SSL פרימיום',
        'גיבוי מתקדם',
        'CDN גלובלי',
        '50GB אחסון',
        'תמיכה 24/7'
      ],
      recommended: true
    },
    {
      id: 'enterprise',
      name: 'ארגוני',
      price: 399,
      features: [
        'דומיין חינם לשנה ראשונה',
        'SSL Enterprise',
        'גיבוי מתמיד',
        'CDN פרימיום',
        '200GB אחסון',
        'תמיכה VIP',
        'כלי CRM מובנים'
      ],
      recommended: false
    }
  ];

  const handleDomainToggle = (wantDomain: boolean) => {
    onUpdate('domain', {
      ...data.domain,
      wantDomain,
      domainName: wantDomain ? data.domain.domainName : undefined,
      hostingPlan: wantDomain ? data.domain.hostingPlan || 'professional' : undefined
    });
  };

  const handleDomainNameChange = (domainName: string) => {
    onUpdate('domain', {
      ...data.domain,
      domainName
    });
  };

  const handlePlanSelect = (planId: string) => {
    onUpdate('domain', {
      ...data.domain,
      hostingPlan: planId
    });
  };

  return (
    <div className="space-y-6">
      {/* Domain Option */}
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-white text-lg font-semibold mb-2">
            רוצה לפרסם את האתר שלך באינטרנט?
          </h3>
          <p className="text-gray-400 text-sm">
            LEADGRID מציעה פתרון מלא לרכישת דומיין ואחסון מקצועי
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card 
            className={`cursor-pointer transition-all ${
              !data.domain.wantDomain 
                ? 'bg-gray-800 border-gray-600' 
                : 'bg-gray-700 border-gray-500'
            }`}
            onClick={() => handleDomainToggle(false)}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">רק יצירת האתר</h4>
              <p className="text-gray-400 text-sm">
                אקבל את קוד האתר ואפרסם אותו בעצמי
              </p>
              <div className="mt-4">
                <div className="text-green-400 font-bold text-xl">חינם</div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`cursor-pointer transition-all ${
              data.domain.wantDomain 
                ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500' 
                : 'bg-gray-800 border-gray-600'
            }`}
            onClick={() => handleDomainToggle(true)}
          >
            <CardContent className="p-6 text-center relative">
              <Badge className="absolute top-2 right-2 bg-yellow-500 text-black">מומלץ</Badge>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">פתרון מלא עם LEADGRID</h4>
              <p className="text-gray-400 text-sm">
                דומיין, אחסון, פרסום ותמיכה מלאה
              </p>
              <div className="mt-4">
                <div className="text-blue-400 font-bold text-xl">החל מ-₪89</div>
                <div className="text-gray-500 text-xs">לשנה</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Domain Selection */}
      {data.domain.wantDomain && (
        <div className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="w-5 h-5" />
                בחירת דומיין
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white mb-2 block">איך תרצה לקרוא לדומיין שלך?</Label>
                <div className="flex gap-2">
                  <Input
                    value={data.domain.domainName || ''}
                    onChange={(e) => handleDomainNameChange(e.target.value)}
                    placeholder={data.businessInfo.businessName || 'שם העסק שלך'}
                    className="bg-gray-700 border-gray-600 text-white flex-1"
                  />
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>.co.il</span>
                    <span>או</span>
                    <span>.com</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-1">
                  נבדוק זמינות ונציע אפשרויות בשלב הרכישה
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Hosting Plans */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Server className="w-5 h-5" />
                תוכניות אחסון
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {hostingPlans.map((plan) => (
                  <Card 
                    key={plan.id}
                    className={`cursor-pointer transition-all relative ${
                      data.domain.hostingPlan === plan.id
                        ? 'bg-blue-900/30 border-blue-500'
                        : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                    }`}
                    onClick={() => handlePlanSelect(plan.id)}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-yellow-500 text-black text-xs">
                          <Star className="w-3 h-3 ml-1" />
                          מומלץ
                        </Badge>
                      </div>
                    )}
                    
                    <CardContent className="p-4 text-center">
                      <h4 className="text-white font-semibold text-lg mb-2">{plan.name}</h4>
                      <div className="text-blue-400 font-bold text-2xl mb-4">₪{plan.price}</div>
                      
                      <div className="space-y-2 text-left">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <div className={`w-4 h-4 rounded-full mx-auto ${
                          data.domain.hostingPlan === plan.id 
                            ? 'bg-blue-500' 
                            : 'border-2 border-gray-500'
                        }`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* LEADGRID Benefits */}
          <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/30">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold">למה LEADGRID?</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>דומיינים במחירים הטובים בישראל</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>אחסון מהיר בשרתים ישראליים</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>תמיכה טכנית מלאה בעברית</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>תשלום בכל אמצעי התשלום הישראליים</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
