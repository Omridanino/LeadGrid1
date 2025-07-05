import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, List, Star } from 'lucide-react';
import { TemplateData, ListSection } from '@/types/template';

interface ListEditorProps {
  template: TemplateData;
  onUpdate: (updates: Partial<ListSection>) => void;
  onStyleUpdate?: (updates: any) => void;
}

export const ListEditor = ({ template, onUpdate }: ListEditorProps) => {
  const listData = template.list || {
    title: 'הרשימה שלנו',
    items: [],
    listType: 'unordered' as const
  };

  const [newItem, setNewItem] = useState({ title: '', description: '', icon: '', link: '' });

  const handleAddItem = () => {
    if (newItem.title) {
      onUpdate({
        ...listData,
        items: [...listData.items, newItem]
      });
      setNewItem({ title: '', description: '', icon: '', link: '' });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <List className="w-5 h-5" />
            עריכת רשימה
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-200">כותרת הרשימה</Label>
            <Input
              value={listData.title || ''}
              onChange={(e) => onUpdate({ ...listData, title: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="כותרת הרשימה"
            />
          </div>

          <div>
            <Label className="text-slate-200">סוג רשימה</Label>
            <Select 
              value={listData.listType} 
              onValueChange={(value) => onUpdate({ ...listData, listType: value as any })}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ordered">ממוספרת</SelectItem>
                <SelectItem value="unordered">לא ממוספרת</SelectItem>
                <SelectItem value="icon">עם אייקונים</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-200">פריט חדש</Label>
            <Input
              value={newItem.title}
              onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="כותרת הפריט"
            />
            <Button onClick={handleAddItem} className="w-full bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              הוסף פריט
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};