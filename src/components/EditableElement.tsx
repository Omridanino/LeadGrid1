import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit3, Check, X, Move, Copy, Trash2 } from 'lucide-react';
import { ColorPicker } from '@/components/ui/color-picker';
import { toast } from 'sonner';

interface EditableElementProps {
  children: React.ReactNode;
  elementId: string;
  elementType: 'text' | 'heading' | 'button' | 'card' | 'image';
  content?: string;
  editable?: boolean;
  onUpdate?: (id: string, updates: any) => void;
  onDelete?: (id: string) => void;
  onDuplicate?: (id: string) => void;
  className?: string;
}

export const EditableElement: React.FC<EditableElementProps> = ({
  children,
  elementId,
  elementType,
  content = '',
  editable = true,
  onUpdate,
  onDelete,
  onDuplicate,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [editValue, setEditValue] = useState(content);
  const [editStyles, setEditStyles] = useState({
    color: '#000000',
    backgroundColor: '#ffffff',
    fontSize: '16px',
    fontWeight: 'normal',
    textAlign: 'center' as const
  });
  
  const elementRef = useRef<HTMLDivElement>(null);
  const [showToolbar, setShowToolbar] = useState(false);

  useEffect(() => {
    if (elementRef.current) {
      const computedStyle = window.getComputedStyle(elementRef.current);
      setEditStyles({
        color: computedStyle.color || '#000000',
        backgroundColor: computedStyle.backgroundColor || '#ffffff',
        fontSize: computedStyle.fontSize || '16px',
        fontWeight: computedStyle.fontWeight || 'normal',
        textAlign: (computedStyle.textAlign as any) || 'center'
      });
    }
  }, []);

  const handleEdit = () => {
    if (!editable) return;
    setIsEditing(true);
    setEditValue(content);
  };

  const handleSave = () => {
    if (onUpdate) {
      onUpdate(elementId, {
        content: editValue,
        styles: editStyles
      });
    }
    setIsEditing(false);
    setIsSelected(false);
    toast.success('האלמנט עודכן בהצלחה');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue(content);
    setIsSelected(false);
  };

  const handleDelete = () => {
    if (onDelete && window.confirm('האם אתה בטוח שברצונך למחוק אלמנט זה?')) {
      onDelete(elementId);
      toast.success('האלמנט נמחק');
    }
  };

  const handleDuplicate = () => {
    if (onDuplicate) {
      onDuplicate(elementId);
      toast.success('האלמנט שוכפל');
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!editable) return;
    e.stopPropagation();
    setIsSelected(!isSelected);
    setShowToolbar(!showToolbar);
  };

  return (
    <div
      ref={elementRef}
      className={`relative group transition-all duration-200 ${
        isSelected ? 'ring-2 ring-primary ring-offset-2' : ''
      } ${isHovered && editable ? 'bg-primary/5' : ''} ${className}`}
      onMouseEnter={() => editable && setIsHovered(true)}
      onMouseLeave={() => editable && setIsHovered(false)}
      onClick={handleClick}
      style={isEditing ? editStyles : undefined}
    >
      {/* כפתור עריכה מהיר */}
      {isHovered && !isEditing && editable && (
        <div className="absolute -top-2 -right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="default"
            className="h-6 w-6 p-0 rounded-full shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              handleEdit();
            }}
          >
            <Edit3 className="h-3 w-3" />
          </Button>
        </div>
      )}

      {/* תוכן האלמנט */}
      {isEditing ? (
        <div className="space-y-2 p-2 bg-background border rounded-lg shadow-lg">
          {elementType === 'text' || elementType === 'button' ? (
            <Input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder="הכנס טקסט..."
              className="text-sm"
              autoFocus
            />
          ) : (
            <Textarea
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder="הכנס טקסט..."
              rows={3}
              className="text-sm"
              autoFocus
            />
          )}
          
          {/* כלי עיצוב מהיר */}
          <div className="flex gap-2 items-center">
            <ColorPicker
              color={editStyles.color}
              onChange={(color) => setEditStyles(prev => ({ ...prev, color }))}
              className="w-20"
            />
            <Button size="sm" variant="outline" onClick={handleCancel}>
              <X className="h-3 w-3" />
            </Button>
            <Button size="sm" onClick={handleSave}>
              <Check className="h-3 w-3" />
            </Button>
          </div>
        </div>
      ) : (
        <>
          {children}
          
          {/* סרגל כלים */}
          {showToolbar && editable && (
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <Card className="shadow-lg">
                <CardContent className="p-1 flex items-center gap-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 px-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit();
                    }}
                  >
                    <Edit3 className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 px-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDuplicate();
                    }}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 px-2 text-destructive hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete();
                    }}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </>
      )}

      {/* תצוגת סוג האלמנט */}
      {isSelected && (
        <div className="absolute -top-6 right-0 z-10">
          <Badge variant="secondary" className="text-xs">
            {elementType}
          </Badge>
        </div>
      )}
    </div>
  );
};

export default EditableElement;