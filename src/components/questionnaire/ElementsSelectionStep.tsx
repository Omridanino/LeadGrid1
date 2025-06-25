
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { elementOptions } from "@/constants/questionnaireElements";

interface ElementsSelectionStepProps {
  formData: {
    selectedElements: string[];
  };
  updateFormData: (field: string, value: string[]) => void;
}

export const ElementsSelectionStep = ({ formData, updateFormData }: ElementsSelectionStepProps) => {
  const handleElementToggle = (elementId: string) => {
    const currentElements = formData.selectedElements;
    const isSelected = currentElements.includes(elementId);
    
    if (isSelected) {
      updateFormData('selectedElements', currentElements.filter(id => id !== elementId));
    } else {
      updateFormData('selectedElements', [...currentElements, elementId]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-white font-semibold text-lg">איזה אלמנטים תרצו לראות בדף שלכם?</Label>
        <p className="text-gray-400 text-sm mt-1">בחרו את האלמנטים שהכי מתאימים לעסק שלכם (ניתן לבחור כמה שרוצים)</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
        {elementOptions.map((element) => (
          <div 
            key={element.id}
            className={`flex items-start space-x-3 space-x-reverse p-4 rounded-lg border cursor-pointer transition-all ${
              formData.selectedElements.includes(element.id)
                ? 'border-purple-500 bg-purple-900/20'
                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
            }`}
            onClick={() => handleElementToggle(element.id)}
          >
            <Checkbox
              checked={formData.selectedElements.includes(element.id)}
              onChange={() => {}}
              className="mt-1"
            />
            <div className="flex-1">
              <h4 className="text-white font-medium">{element.label}</h4>
              <p className="text-gray-400 text-sm mt-1">{element.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center p-4 bg-gray-800 rounded-lg">
        <p className="text-gray-300">
          נבחרו {formData.selectedElements.length} אלמנטים
        </p>
        {formData.selectedElements.length === 0 && (
          <p className="text-yellow-400 text-sm mt-1">
            אם לא תבחרו כלום, נוסיף אלמנטים אקראיים מתאימים לעסק שלכם
          </p>
        )}
      </div>
    </div>
  );
};
