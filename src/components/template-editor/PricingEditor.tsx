import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { TemplateData } from '@/types/template';
import { ColorPicker } from './ColorPicker';

interface PricingEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
  onStyleUpdate: (styleUpdates: any) => void;
}

export const PricingEditor = ({ template, onUpdate, onStyleUpdate }: PricingEditorProps) => {
  const updatePlans = (newPlans: any[]) => {
    onUpdate({ plans: newPlans });
  };

  return (
    <div className="space-y-6">
      {/* Content Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">תוכן</h3>
        
        <div>
          <Label className="text-white text-sm font-medium">תג</Label>
          <Input
            value={template.pricing.badge || ''}
            onChange={(e) => onUpdate({ badge: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="תג..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">כותרת</Label>
          <Input
            value={template.pricing.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="כותרת מחירים..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">תת כותרת</Label>
          <Input
            value={template.pricing.subtitle || ''}
            onChange={(e) => onUpdate({ subtitle: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="תת כותרת..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">חבילות מחירים</Label>
          <div className="space-y-3">
            {template.pricing.plans.map((plan, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      value={plan.name}
                      onChange={(e) => {
                        const newPlans = [...template.pricing.plans];
                        newPlans[index] = { ...plan, name: e.target.value };
                        updatePlans(newPlans);
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-right flex-1"
                      placeholder="שם החבילה"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const newPlans = template.pricing.plans.filter((_, i) => i !== index);
                        updatePlans(newPlans);
                      }}
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      value={plan.price}
                      onChange={(e) => {
                        const newPlans = [...template.pricing.plans];
                        newPlans[index] = { ...plan, price: e.target.value };
                        updatePlans(newPlans);
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-center"
                      placeholder="₪299"
                    />
                    <Input
                      value={plan.period}
                      onChange={(e) => {
                        const newPlans = [...template.pricing.plans];
                        newPlans[index] = { ...plan, period: e.target.value };
                        updatePlans(newPlans);
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-center"
                      placeholder="לחודש"
                    />
                  </div>
                  <Input
                    value={plan.buttonText}
                    onChange={(e) => {
                      const newPlans = [...template.pricing.plans];
                      newPlans[index] = { ...plan, buttonText: e.target.value };
                      updatePlans(newPlans);
                    }}
                    className="bg-gray-700 border-gray-600 text-white text-right"
                    placeholder="טקסט כפתור"
                  />
                  <Textarea
                    value={plan.features.join('\n')}
                    onChange={(e) => {
                      const newPlans = [...template.pricing.plans];
                      newPlans[index] = { ...plan, features: e.target.value.split('\n').filter(f => f.trim()) };
                      updatePlans(newPlans);
                    }}
                    className="bg-gray-700 border-gray-600 text-white text-right"
                    rows={3}
                    placeholder="תכונה 1&#10;תכונה 2&#10;תכונה 3"
                  />
                </CardContent>
              </Card>
            ))}
            <Button
              onClick={() => {
                const newPlans = [...template.pricing.plans, {
                  name: 'חבילה חדשה',
                  price: '₪199',
                  period: 'לחודש',
                  features: ['תכונה 1', 'תכונה 2'],
                  recommended: false,
                  buttonText: 'בחר חבילה'
                }];
                updatePlans(newPlans);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 ml-1" />
              הוסף חבילה
            </Button>
          </div>
        </div>
      </div>

      {/* Colors Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">צבעים</h3>
        
        <ColorPicker
          label="רקע הסקשן"
          value={template.styles.pricingBackground}
          onChange={(value) => onStyleUpdate({ pricingBackground: value })}
        />
        
        <ColorPicker
          label="צבע כותרת"
          value={template.styles.textColor}
          onChange={(value) => onStyleUpdate({ textColor: value })}
        />
        
        <ColorPicker
          label="צבע מחיר"
          value={template.styles.primaryColor}
          onChange={(value) => onStyleUpdate({ primaryColor: value })}
        />
        
        <ColorPicker
          label="צבע כפתור"
          value={template.styles.primaryColor}
          onChange={(value) => onStyleUpdate({ primaryColor: value })}
        />
      </div>
    </div>
  );
};
