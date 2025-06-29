
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Heart } from "lucide-react";

interface EmotionalSectionEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
}

const EmotionalSectionEditor = ({ content, onContentChange }: EmotionalSectionEditorProps) => {
  const emotionalContent = content?.emotional || {
    badge: 'הסיפור שלנו',
    headline: 'הרגש שמניע אותנו קדימה',
    description: 'כל מה שאנחנו עושים נובע מהלב - מהרצון העמוק לעזור, ליצור ולהשפיע. זה מה שמבדיל אותנו ומה שמניע אותנו להיות הטובים ביותר.',
    buttons: [],
    colors: {
      badge: '',
      headline: '',
      subheadline: '',
    }
  };

  const updateEmotionalContent = (field: string, value: any) => {
    const newEmotionalContent = { ...emotionalContent, [field]: value };
    onContentChange({
      ...content,
      emotional: newEmotionalContent
    });
  };

  const updateEmotionalColors = (colorField: string, value: string) => {
    const newColors = { ...emotionalContent.colors, [colorField]: value };
    updateEmotionalContent('colors', newColors);
  };

  const addButton = () => {
    const newButtons = [...(emotionalContent.buttons || []), {
      text: 'כפתור חדש',
      color: '',
      visible: true
    }];
    updateEmotionalContent('buttons', newButtons);
  };

  const updateButton = (index: number, field: string, value: any) => {
    const newButtons = [...(emotionalContent.buttons || [])];
    newButtons[index] = { ...newButtons[index], [field]: value };
    updateEmotionalContent('buttons', newButtons);
  };

  const removeButton = (index: number) => {
    const newButtons = emotionalContent.buttons.filter((_: any, i: number) => i !== index);
    updateEmotionalContent('buttons', newButtons);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-5 h-5" />
          פסקת רגש
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="content">תוכן</TabsTrigger>
            <TabsTrigger value="colors">צבעים</TabsTrigger>
            <TabsTrigger value="buttons">כפתורים</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-4">
            <div>
              <Label htmlFor="emotional-badge">תג (Badge)</Label>
              <Input
                id="emotional-badge"
                value={emotionalContent.badge}
                onChange={(e) => updateEmotionalContent('badge', e.target.value)}
                placeholder="הסיפור שלנו"
              />
            </div>

            <div>
              <Label htmlFor="emotional-headline">כותרת</Label>
              <Input
                id="emotional-headline"
                value={emotionalContent.headline}
                onChange={(e) => updateEmotionalContent('headline', e.target.value)}
                placeholder="הרגש שמניע אותנו קדימה"
              />
            </div>

            <div>
              <Label htmlFor="emotional-description">תיאור</Label>
              <Textarea
                id="emotional-description"
                value={emotionalContent.description}
                onChange={(e) => updateEmotionalContent('description', e.target.value)}
                placeholder="כל מה שאנחנו עושים נובע מהלב..."
                rows={4}
              />
            </div>
          </TabsContent>

          <TabsContent value="colors" className="space-y-4">
            <div>
              <Label htmlFor="emotional-badge-color">צבע תג</Label>
              <Input
                id="emotional-badge-color"
                type="text"
                value={emotionalContent.colors?.badge || ''}
                onChange={(e) => updateEmotionalColors('badge', e.target.value)}
                placeholder="linear-gradient(45deg, #667eea, #764ba2) או #3b82f6"
              />
            </div>

            <div>
              <Label htmlFor="emotional-headline-color">צבע כותרת</Label>
              <Input
                id="emotional-headline-color"
                type="text"
                value={emotionalContent.colors?.headline || ''}
                onChange={(e) => updateEmotionalColors('headline', e.target.value)}
                placeholder="linear-gradient(45deg, #667eea, #764ba2) או #ffffff"
              />
            </div>

            <div>
              <Label htmlFor="emotional-subheadline-color">צבע תיאור</Label>
              <Input
                id="emotional-subheadline-color"
                type="text"
                value={emotionalContent.colors?.subheadline || ''}
                onChange={(e) => updateEmotionalColors('subheadline', e.target.value)}
                placeholder="linear-gradient(45deg, #667eea, #764ba2) או #e5e7eb"
              />
            </div>
          </TabsContent>

          <TabsContent value="buttons" className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>כפתורים</Label>
              <Button onClick={addButton} size="sm">
                <Plus className="w-4 h-4 mr-1" />
                הוסף כפתור
              </Button>
            </div>

            {emotionalContent.buttons?.map((button: any, index: number) => (
              <Card key={index} className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>כפתור {index + 1}</Label>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeButton(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div>
                    <Label>טקסט כפתור</Label>
                    <Input
                      value={button.text}
                      onChange={(e) => updateButton(index, 'text', e.target.value)}
                      placeholder="טקסט הכפתור"
                    />
                  </div>

                  <div>
                    <Label>צבע כפתור</Label>
                    <Input
                      value={button.color || ''}
                      onChange={(e) => updateButton(index, 'color', e.target.value)}
                      placeholder="linear-gradient(45deg, #667eea, #764ba2) או #3b82f6"
                    />
                  </div>
                </div>
              </Card>
            ))}

            {(!emotionalContent.buttons || emotionalContent.buttons.length === 0) && (
              <p className="text-gray-500 text-center py-4">אין כפתורים. לחץ על "הוסף כפתור" כדי להוסיף.</p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EmotionalSectionEditor;
