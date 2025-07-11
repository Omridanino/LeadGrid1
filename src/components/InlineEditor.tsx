import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Edit3, 
  Check, 
  X, 
  Type, 
  Palette, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  Save,
  Undo,
  Redo,
  Settings
} from 'lucide-react';
import { ColorPicker } from '@/components/ui/color-picker';
import { toast } from 'sonner';

interface InlineEditorProps {
  element: HTMLElement;
  elementType: 'text' | 'heading' | 'button' | 'card' | 'section';
  content: any;
  onUpdate: (updates: any) => void;
  onClose: () => void;
}

export const InlineEditor: React.FC<InlineEditorProps> = ({
  element,
  elementType,
  content,
  onUpdate,
  onClose
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [editStyles, setEditStyles] = useState({
    color: '#000000',
    fontSize: '16px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb'
  });
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // תפיסת הערכים הנוכחיים של האלמנט
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      setEditValue(element.textContent || '');
      setEditStyles({
        color: computedStyle.color || '#000000',
        fontSize: computedStyle.fontSize || '16px',
        textAlign: computedStyle.textAlign as any || 'center',
        backgroundColor: computedStyle.backgroundColor || '#ffffff',
        borderColor: computedStyle.borderColor || '#e5e7eb'
      });
    }
  }, [element]);

  const handleSave = () => {
    const updates = {
      text: editValue,
      styles: editStyles
    };
    
    onUpdate(updates);
    setIsEditing(false);
    toast.success('השינויים נשמרו בהצלחה');
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (element) {
      setEditValue(element.textContent || '');
    }
  };

  const getEditorPosition = () => {
    if (!element) return { top: 0, left: 0 };
    
    const rect = element.getBoundingClientRect();
    return {
      top: rect.bottom + window.scrollY + 10,
      left: rect.left + window.scrollX
    };
  };

  const position = getEditorPosition();

  return (
    <>
      {/* כפתור עריכה צף */}
      {!isEditing && (
        <div
          className="absolute z-50 p-1"
          style={{
            top: position.top - 40,
            left: position.left
          }}
        >
          <Button
            size="sm"
            variant="default"
            onClick={() => setIsEditing(true)}
            className="shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Edit3 className="h-3 w-3 mr-1" />
            ערוך
          </Button>
        </div>
      )}

      {/* פאנל עריכה */}
      {isEditing && (
        <Card
          ref={editorRef}
          className="fixed z-50 w-80 shadow-2xl border-2 border-primary/20 bg-background/95 backdrop-blur-sm"
          style={{
            top: position.top,
            left: position.left,
            maxHeight: '400px',
            overflow: 'auto'
          }}
        >
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                <span className="text-sm font-medium">עריכת {elementType}</span>
              </div>
              <div className="flex gap-1">
                <Button size="sm" variant="outline" onClick={handleCancel}>
                  <X className="h-3 w-3" />
                </Button>
                <Button size="sm" onClick={handleSave}>
                  <Check className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* עריכת טקסט */}
            <div className="space-y-2">
              <label className="text-xs font-medium">תוכן</label>
              {elementType === 'text' || elementType === 'button' ? (
                <Input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  placeholder="הכנס טקסט..."
                  className="text-sm"
                />
              ) : (
                <Textarea
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  placeholder="הכנס טקסט..."
                  rows={3}
                  className="text-sm"
                />
              )}
            </div>

            {/* עיצוב */}
            <div className="grid grid-cols-2 gap-3">
              {/* צבע טקסט */}
              <div className="space-y-1">
                <label className="text-xs font-medium">צבע טקסט</label>
                <ColorPicker
                  color={editStyles.color}
                  onChange={(color) => setEditStyles(prev => ({ ...prev, color }))}
                />
              </div>

              {/* יישור */}
              <div className="space-y-1">
                <label className="text-xs font-medium">יישור</label>
                <Select
                  value={editStyles.textAlign}
                  onValueChange={(value) => setEditStyles(prev => ({ ...prev, textAlign: value }))}
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="right">
                      <div className="flex items-center gap-2">
                        <AlignRight className="h-3 w-3" />
                        ימין
                      </div>
                    </SelectItem>
                    <SelectItem value="center">
                      <div className="flex items-center gap-2">
                        <AlignCenter className="h-3 w-3" />
                        מרכז
                      </div>
                    </SelectItem>
                    <SelectItem value="left">
                      <div className="flex items-center gap-2">
                        <AlignLeft className="h-3 w-3" />
                        שמאל
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* צבע רקע */}
              {(elementType === 'card' || elementType === 'section' || elementType === 'button') && (
                <div className="space-y-1">
                  <label className="text-xs font-medium">צבע רקע</label>
                  <ColorPicker
                    color={editStyles.backgroundColor}
                    onChange={(color) => setEditStyles(prev => ({ ...prev, backgroundColor: color }))}
                  />
                </div>
              )}

              {/* גודל פונט */}
              <div className="space-y-1">
                <label className="text-xs font-medium">גודל פונט</label>
                <Select
                  value={editStyles.fontSize}
                  onValueChange={(value) => setEditStyles(prev => ({ ...prev, fontSize: value }))}
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12px">קטן</SelectItem>
                    <SelectItem value="14px">רגיל</SelectItem>
                    <SelectItem value="16px">בינוני</SelectItem>
                    <SelectItem value="20px">גדול</SelectItem>
                    <SelectItem value="24px">ענק</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* כפתורי פעולה */}
            <div className="flex justify-between pt-2 border-t">
              <Button size="sm" variant="outline" onClick={handleCancel}>
                <X className="h-3 w-3 mr-1" />
                ביטול
              </Button>
              <Button size="sm" onClick={handleSave}>
                <Save className="h-3 w-3 mr-1" />
                שמור
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default InlineEditor;