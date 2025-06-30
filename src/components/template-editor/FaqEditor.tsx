import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { TemplateData } from '@/types/template';
import { BackgroundSelector } from './BackgroundSelector';
import { ColorPicker } from './ColorPicker';

interface FaqEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
  onStyleUpdate: (styleUpdates: any) => void;
}

export const FaqEditor = ({ template, onUpdate, onStyleUpdate }: FaqEditorProps) => {
  const updateQuestions = (newQuestions: any[]) => {
    onUpdate({ questions: newQuestions });
  };

  return (
    <div className="space-y-6">
      {/* Content Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">תוכן</h3>
        
        <div>
          <Label className="text-white text-sm font-medium">תג</Label>
          <Input
            value={template.faq.badge || ''}
            onChange={(e) => onUpdate({ badge: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="תג..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">כותרת</Label>
          <Input
            value={template.faq.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="כותרת שאלות..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">שאלות ותשובות</Label>
          <div className="space-y-3">
            {template.faq.questions.map((qa, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      value={qa.question}
                      onChange={(e) => {
                        const newQuestions = [...template.faq.questions];
                        newQuestions[index] = { ...qa, question: e.target.value };
                        updateQuestions(newQuestions);
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-right flex-1"
                      placeholder="שאלה"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const newQuestions = template.faq.questions.filter((_, i) => i !== index);
                        updateQuestions(newQuestions);
                      }}
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Textarea
                    value={qa.answer}
                    onChange={(e) => {
                      const newQuestions = [...template.faq.questions];
                      newQuestions[index] = { ...qa, answer: e.target.value };
                      updateQuestions(newQuestions);
                    }}
                    className="bg-gray-700 border-gray-600 text-white text-right"
                    rows={3}
                    placeholder="תשובה"
                  />
                </CardContent>
              </Card>
            ))}
            <Button
              onClick={() => {
                const newQuestions = [...template.faq.questions, {
                  question: 'שאלה חדשה?',
                  answer: 'תשובה מפורטת...'
                }];
                updateQuestions(newQuestions);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 ml-1" />
              הוסף שאלה
            </Button>
          </div>
        </div>
      </div>

      {/* Colors and Background Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">עיצוב רקע</h3>
        
        <BackgroundSelector
          label="רקע הסקשן"
          colorValue={template.styles.faqBackground}
          imageValue={template.styles.faqBackgroundImage}
          onColorChange={(value) => onStyleUpdate({ faqBackground: value })}
          onImageChange={(value) => onStyleUpdate({ faqBackgroundImage: value })}
        />
        
        <ColorPicker
          label="צבע כותרת"
          value={template.styles.textColor}
          onChange={(value) => onStyleUpdate({ textColor: value })}
        />
        
        <ColorPicker
          label="צבע כפתור ראשי"
          value={template.styles.primaryColor}
          onChange={(value) => onStyleUpdate({ primaryColor: value })}
        />
        
        <ColorPicker
          label="צבע כפתור משני"
          value={template.styles.secondaryColor}
          onChange={(value) => onStyleUpdate({ secondaryColor: value })}
        />
      </div>
    </div>
  );
};
