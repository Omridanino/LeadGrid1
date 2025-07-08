
import { useState } from 'react';
import { LeadgridService } from './LeadgridService';
import { DomainHostingSelector } from './DomainHostingSelector';
import { PaymentMethodsWizard } from '../payment/PaymentMethodsWizard';
import { NamecheapHostingPlan } from '@/services/namecheapService';

type FlowStep = 'service' | 'domain-hosting' | 'payment' | 'complete';

interface ServicesFlowProps {
  onComplete: () => void;
  onBack: () => void;
}

export const ServicesFlow = ({ onComplete, onBack }: ServicesFlowProps) => {
  const [currentStep, setCurrentStep] = useState<FlowStep>('service');
  const [selections, setSelections] = useState<{
    domain?: string;
    hosting?: NamecheapHostingPlan;
    totalPrice: number;
  }>({ totalPrice: 0 });

  const handleServiceNext = () => {
    setCurrentStep('domain-hosting');
  };

  const handleDomainHostingContinue = (domainHostingSelections: {
    domain?: string;
    hosting?: NamecheapHostingPlan;
    totalPrice: number;
  }) => {
    setSelections(domainHostingSelections);
    setCurrentStep('payment');
  };

  const handlePaymentComplete = () => {
    setCurrentStep('complete');
    onComplete();
  };

  const goBackToService = () => {
    setCurrentStep('service');
  };

  const goBackToDomainHosting = () => {
    setCurrentStep('domain-hosting');
  };

  // חישוב מחיר כולל
  const leadgridPrice = 119.90;
  const totalPrice = leadgridPrice + selections.totalPrice;

  switch (currentStep) {
    case 'service':
      return (
        <LeadgridService
          onProceedToPayment={handleServiceNext}
          onGoBack={onBack}
        />
      );

    case 'domain-hosting':
      return (
        <DomainHostingSelector
          onContinue={handleDomainHostingContinue}
          onGoBack={goBackToService}
        />
      );

    case 'payment':
      return (
        <PaymentMethodsWizard
          onPaymentComplete={handlePaymentComplete}
          onClose={goBackToDomainHosting}
          totalAmount={totalPrice}
          orderDetails={{
            service: 'דף נחיתה LeadGrid',
            servicePrice: leadgridPrice,
            domain: selections.domain,
            hosting: selections.hosting?.name,
            domainHostingPrice: selections.totalPrice,
            orderId: `LG_${Date.now()}`
          }}
        />
      );

    case 'complete':
      return (
        <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-black text-white flex items-center justify-center" dir="rtl">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-2">ההזמנה הושלמה בהצלחה! 🎉</h2>
              <p className="text-gray-300">
                נתחיל לבנות את דף הנחיתה שלך עוד היום
              </p>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
