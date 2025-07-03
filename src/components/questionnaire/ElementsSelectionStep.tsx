
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { elementOptions } from "@/constants/questionnaireElements";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

interface ElementsSelectionStepProps {
  formData: {
    selectedElements: string[];
  };
  updateFormData: (field: string, value: string[]) => void;
}

export const ElementsSelectionStep = ({ formData, updateFormData }: ElementsSelectionStepProps) => {
  useEffect(() => {
    const recommendedElements = elementOptions
      .filter(element => element.recommended)
      .map(element => element.id);
    
    if (formData.selectedElements.length === 0) {
      updateFormData('selectedElements', recommendedElements);
    }
  }, []);

  const handleElementToggle = (elementId: string) => {
    const currentElements = formData.selectedElements;
    const isSelected = currentElements.includes(elementId);
    
    if (isSelected) {
      updateFormData('selectedElements', currentElements.filter(id => id !== elementId));
    } else {
      updateFormData('selectedElements', [...currentElements, elementId]);
    }
  };

  const recommendedElements = elementOptions.filter(el => el.recommended);
  const additionalElements = elementOptions.filter(el => !el.recommended);

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-white font-semibold text-lg">בחירת אלמנטים לדף הנחיתה</Label>
        <p className="text-gray-400 text-sm mt-1">האלמנטים המומלצים נבחרו כבר עבורכם, ניתן להוסיף עוד</p>
      </div>
      
      {/* Recommended Elements */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-medium">אלמנטים מומלצים</h3>
          <Badge variant="secondary" className="bg-green-600 text-white">מומלץ</Badge>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {recommendedElements.map((element) => (
            <div 
              key={element.id}
              className={`flex items-start space-x-3 space-x-reverse p-4 rounded-lg border cursor-pointer transition-all hover:scale-[1.02] ${
                formData.selectedElements.includes(element.id)
                  ? 'border-green-500 bg-green-900/20 shadow-green-500/20 shadow-lg'
                  : 'border-gray-600 bg-gray-800/50 hover:border-gray-500 hover:bg-gray-700/50'
              }`}
              onClick={() => handleElementToggle(element.id)}
            >
              <Checkbox
                checked={formData.selectedElements.includes(element.id)}
                onChange={() => {}}
                className="mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-white font-medium">{element.label}</h4>
                  <Badge variant="outline" className="text-xs border-green-500 text-green-400">מומלץ</Badge>
                </div>
                <p className="text-gray-400 text-sm mt-1">{element.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Elements */}
      <div className="space-y-4">
        <h3 className="text-white font-medium">אלמנטים נוספים</h3>
        
        <div className="grid grid-cols-1 gap-3">
          {additionalElements.map((element) => (
            <div 
              key={element.id}
              className={`flex items-start space-x-3 space-x-reverse p-4 rounded-lg border cursor-pointer transition-all hover:scale-[1.02] ${
                formData.selectedElements.includes(element.id)
                  ? 'border-purple-500 bg-purple-900/20 shadow-purple-500/20 shadow-lg'
                  : 'border-gray-600 bg-gray-800/50 hover:border-gray-500 hover:bg-gray-700/50'
              }`}
              onClick={() => handleElementToggle(element.id)}
            >
              <Checkbox
                checked={formData.selectedElements.includes(element.id)}
                onChange={() => {}}
                className="mt-1 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
              />
              <div className="flex-1">
                <h4 className="text-white font-medium">{element.label}</h4>
                <p className="text-gray-400 text-sm mt-1">{element.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
        <p className="text-gray-300">
          נבחרו {formData.selectedElements.length} אלמנטים
        </p>
        <p className="text-blue-400 text-sm mt-1">
          האלמנטים המומלצים יבטיחו דף נחיתה מושלם לעסק שלכם
        </p>
      </div>
    </div>
  );
};
