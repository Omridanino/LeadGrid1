
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  CheckCircle, 
  Sparkles, 
  Rocket,
  Star,
  ArrowLeft
} from 'lucide-react';

interface LeadgridServiceProps {
  onProceedToPayment: () => void;
  onGoBack: () => void;
}

export const LeadgridService = ({ onProceedToPayment, onGoBack }: LeadgridServiceProps) => {
  const [selectedService, setSelectedService] = useState<'landing' | 'premium'>('landing');

  const services = [
    {
      id: 'landing' as const,
      name: 'דף נחיתה בסיסי',
      price: 119.90,
      originalPrice: 199,
      features: [
        'עיצוב מותאם אישית לעסק שלך',
        'טופס לידים מתקדם',
        'אופטימיזציה למובייל',
        'טעינה מהירה',
        'כפתורי קריאה לפעולה',
        'אנליטיקס בסיסי',
        'תמיכה טכנית'
      ],
      popular: true,
      description: 'תבנית בסיסית ומקצועית לקבלת לידים'
    },
    {
      id: 'premium' as const,
      name: 'דף נחיתה פרימיום',
      price: 139.90,
      originalPrice: 249,
      features: [
        'כל מה שכלול בתבנית הבסיסית',
        'עיצובים מתקדמים ואנימציות',
        'טופס לידים עם שדות מותאמים',
        'אינטגרציה עם CRM',
        'A/B Testing מתקדם',
        'אנליטיקס מפורט',
        'תמיכה VIP 24/7',
        'אופטימיזציה להמרות'
      ],
      popular: false,
      description: 'תבנית מתקדמת עם כל הפיצ\'רים המתקדמים'
    }
  ];

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              שירות LeadGrid
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            הפתרון המושלם לבניית דף נחיתה שמביא תוצאות אמיתיות
          </p>
        </div>

        {/* Service Selection */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white text-2xl">בחר את השירות שלך</CardTitle>
                <Badge className="bg-green-600 text-white">מבצע מיוחד!</Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div 
                    key={service.id}
                    className={`
                      relative p-6 rounded-lg border-2 cursor-pointer transition-all
                      ${selectedService === service.id 
                        ? 'border-blue-500 bg-blue-900/20' 
                        : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                      }
                    `}
                    onClick={() => setSelectedService(service.id)}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 right-6">
                        <Badge className="bg-yellow-500 text-black font-semibold">
                          <Star className="w-4 h-4 mr-1" />
                          הכי פופולרי
                        </Badge>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                        <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                      </div>
                      
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-green-400">₪{service.price}</span>
                          <span className="text-sm text-gray-400">/חודש</span>
                        </div>
                        <div className="text-sm text-gray-500 line-through">₪{service.originalPrice}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {selectedService === service.id && (
                      <div className="mt-4 p-4 bg-blue-900/30 rounded-lg border border-blue-600/50">
                        <div className="flex items-center gap-2 text-blue-300">
                          <Zap className="w-5 h-5" />
                          <span className="font-medium">נבחר - מוכן להמשיך!</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Price Summary */}
          {selectedServiceData && (
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mt-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold text-lg">סיכום הזמנה</h4>
                    <p className="text-gray-400 text-sm">{selectedServiceData.name}</p>
                  </div>
                  
                  <div className="text-left">
                    <div className="text-2xl font-bold text-green-400">
                      ₪{selectedServiceData.price}/חודש
                    </div>
                    <div className="text-sm text-gray-400">
                      חיסכון של ₪{selectedServiceData.originalPrice - selectedServiceData.price}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <div className="text-yellow-300 font-medium">מבצע מיוחד - חודש ראשון חינם!</div>
                      <div className="text-yellow-200 text-sm mt-1">
                        תשלם רק מהחודש השני, וגם אז תוכל לבטל בכל עת
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={onGoBack}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              חזור
            </Button>
            
            <Button
              onClick={onProceedToPayment}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              size="lg"
            >
              <Rocket className="w-5 h-5 ml-2" />
              המשך לתשלום - ₪{selectedServiceData?.price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
