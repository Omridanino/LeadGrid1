
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TemplateData } from '@/types/template';
import { TemplatePreview } from './TemplatePreview';
import { Save, Eye, Edit } from 'lucide-react';

interface TemplateEditorProps {
  template: TemplateData;
  onSave: (updatedTemplate: TemplateData) => void;
}

export const TemplateEditor = ({ template, onSave }: TemplateEditorProps) => {
  const [editingTemplate, setEditingTemplate] = useState<TemplateData>(template);
  const [showPreview, setShowPreview] = useState(false);

  const handleSave = () => {
    onSave(editingTemplate);
  };

  const updateHero = (field: keyof typeof editingTemplate.hero, value: string) => {
    setEditingTemplate({
      ...editingTemplate,
      hero: {
        ...editingTemplate.hero,
        [field]: value
      }
    });
  };

  if (showPreview) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Button
            onClick={() => setShowPreview(false)}
            variant="outline"
            className="border-border text-foreground hover:bg-accent"
          >
            <Edit className="w-4 h-4 ml-2" />
            חזור לעריכה
          </Button>
          <Button
            onClick={handleSave}
            variant="success"
          >
            <Save className="w-4 h-4 ml-2" />
            שמור ופרסם
          </Button>
        </div>
        <div className="bg-white rounded-lg overflow-hidden">
          <TemplatePreview template={editingTemplate} />
        </div>
      </div>
    );
  }

  return (
      <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-foreground">עריכת התבנית שלך</h3>
        <div className="flex gap-2">
          <Button
            onClick={() => setShowPreview(true)}
            variant="outline"
            className="border-border text-foreground hover:bg-accent"
          >
            <Eye className="w-4 h-4 ml-2" />
            תצוגה מקדימה
          </Button>
          <Button
            onClick={handleSave}
            variant="success"
          >
            <Save className="w-4 h-4 ml-2" />
            שמור ופרסם
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hero Section Editor */}
        <Card className="bg-surface-elevated border-border">
          <CardHeader>
            <CardTitle className="text-foreground">קטע הפתיחה (Hero)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                כותרת ראשית
              </label>
              <Input
                value={editingTemplate.hero.title}
                onChange={(e) => updateHero('title', e.target.value)}
                className="bg-surface-subtle border-border text-foreground"
                placeholder="הכותרת הראשית שלך"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                כותרת משנה
              </label>
              <Input
                value={editingTemplate.hero.subtitle}
                onChange={(e) => updateHero('subtitle', e.target.value)}
                className="bg-surface-subtle border-border text-foreground"
                placeholder="כותרת המשנה שלך"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                תיאור
              </label>
              <Textarea
                value={editingTemplate.hero.description}
                onChange={(e) => updateHero('description', e.target.value)}
                className="bg-surface-subtle border-border text-foreground"
                placeholder="תיאור קצר על השירות או המוצר שלך"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  כפתור ראשי
                </label>
                <Input
                  value={editingTemplate.hero.button1Text}
                  onChange={(e) => updateHero('button1Text', e.target.value)}
                  className="bg-surface-subtle border-border text-foreground"
                  placeholder="טקסט הכפתור הראשי"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  כפתור משני
                </label>
                <Input
                  value={editingTemplate.hero.button2Text}
                  onChange={(e) => updateHero('button2Text', e.target.value)}
                  className="bg-surface-subtle border-border text-foreground"
                  placeholder="טקסט הכפתור המשני"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mini Preview */}
        <Card className="bg-surface-elevated border-border">
          <CardHeader>
            <CardTitle className="text-foreground">תצוגה מקדימה</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-surface-overlay p-4 rounded-lg">
              <h4 className="text-foreground font-bold text-lg mb-2">
                {editingTemplate.hero.title}
              </h4>
              <p className="text-muted-foreground mb-3">
                {editingTemplate.hero.subtitle}
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                {editingTemplate.hero.description}
              </p>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-brand-primary text-white text-xs rounded">
                  {editingTemplate.hero.button1Text}
                </div>
                <div className="px-3 py-1 bg-brand-secondary text-white text-xs rounded">
                  {editingTemplate.hero.button2Text}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
