
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, HelpCircle } from "lucide-react";
import EditPopup from "./EditPopup";

interface FAQEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
}

const FAQEditor = ({ content, onContentChange }: FAQEditorProps) => {
  const [localContent, setLocalContent] = useState(content);

  const updateFAQ = (index: number, field: string, value: string) => {
    const newFAQ = [...(localContent.faq || [])];
    newFAQ[index] = { ...newFAQ[index], [field]: value };
    setLocalContent({ ...localContent, faq: newFAQ });
  };

  const addFAQ = () => {
    const newItem = {
      question: "שאלה חדשה?",
      answer: "תשובה מפורטת ומועילה כאן..."
    };
    const newFAQ = [...(localContent.faq || []), newItem];
    setLocalContent({ ...localContent, faq: newFAQ });
  };

  const removeFAQ = (index: number) => {
    const newFAQ = (localContent.faq || []).filter((_: any, i: number) => i !== index);
    setLocalContent({ ...localContent, faq: newFAQ });
  };

  const handleSave = () => {
    onContentChange(localContent);
  };

  return (
    <EditPopup
      title="עריכת שאלות נפוצות"
      triggerText="שאלות נפוצות"
      icon={HelpCircle}
      onSave={handleSave}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-white font-semibold text-right block mb-3">רשימת שאלות ותשובות</Label>
          <div className="space-y-4">
            {(localContent.faq || []).map((item: any, index: number) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-3">
                  <Button
                    onClick={() => removeFAQ(index)}
                    variant="destructive"
                    size="sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <h4 className="text-white font-medium">שאלה #{index + 1}</h4>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <Label className="text-gray-300 text-sm text-right block mb-1">השאלה</Label>
                    <Input
                      value={item.question || ''}
                      onChange={(e) => updateFAQ(index, 'question', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white text-right"
                      placeholder="הכנס שאלה..."
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300 text-sm text-right block mb-1">התשובה</Label>
                    <Textarea
                      value={item.answer || ''}
                      onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white text-right"
                      rows={4}
                      placeholder="הכנס תשובה מפורטת..."
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <Button
              onClick={addFAQ}
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 rounded-xl"
            >
              <Plus className="w-4 h-4 ml-2" />
              הוסף שאלה חדשה
            </Button>
          </div>
        </div>
      </div>
    </EditPopup>
  );
};

export default FAQEditor;
