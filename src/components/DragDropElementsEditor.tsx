import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Image, 
  Type, 
  AlignLeft, 
  Video, 
  LayoutGrid, 
  List, 
  Code, 
  Share2,
  Plus,
  GripVertical,
  Trash2
} from 'lucide-react';
import { TemplateData } from '@/types/template';

interface DragDropElementsEditorProps {
  template: TemplateData;
  onTemplateChange: (template: TemplateData) => void;
}

interface ElementType {
  id: string;
  name: string;
  icon: any;
  color: string;
}

const availableElements: ElementType[] = [
  { id: 'gallery', name: 'גלריית תמונות', icon: Image, color: 'text-indigo-400' },
  { id: 'heading', name: 'כותרת', icon: Type, color: 'text-slate-400' },
  { id: 'text', name: 'טקסט', icon: AlignLeft, color: 'text-slate-300' },
  { id: 'video', name: 'וידאו', icon: Video, color: 'text-red-400' },
  { id: 'slider', name: 'סליידר', icon: LayoutGrid, color: 'text-blue-300' },
  { id: 'list', name: 'רשימה', icon: List, color: 'text-green-300' },
  { id: 'embed', name: 'קוד HTML', icon: Code, color: 'text-orange-300' },
  { id: 'socialBar', name: 'רשתות חברתיות', icon: Share2, color: 'text-purple-300' },
];

export const DragDropElementsEditor = ({ template, onTemplateChange }: DragDropElementsEditorProps) => {
  const [draggedElement, setDraggedElement] = useState<string | null>(null);
  const [pageElements, setPageElements] = useState<string[]>((template as any).pageElements || []);

  const getDefaultElementData = (elementId: string) => {
    const defaults = {
      gallery: {
        title: 'גלריית תמונות',
        subtitle: 'תמונות מהעבודות שלנו',
        images: [],
        layout: 'grid' as const,
        columns: 3
      },
      heading: {
        title: 'כותרת חדשה',
        subtitle: 'תת כותרת',
        alignment: 'center' as const,
        size: 'large' as const
      },
      text: {
        title: 'כותרת הטקסט',
        content: 'הכנס כאן את התוכן שלך...',
        alignment: 'center' as const,
        textSize: 'medium' as const
      },
      video: {
        title: 'סרטון מדהים',
        subtitle: 'צפו בסרטון שלנו',
        videoUrl: '',
        videoType: 'youtube' as const,
        controls: true
      },
      slider: {
        title: 'הסליידר שלנו',
        subtitle: 'גלשו בין האפשרויות',
        slides: [
          {
            title: 'סליידר ראשון',
            description: 'תיאור הסליידר הראשון',
            buttonText: 'לחץ כאן'
          }
        ],
        autoplay: true,
        duration: 5000
      },
      list: {
        title: 'הרשימה שלנו',
        items: [
          {
            title: 'פריט ראשון',
            description: 'תיאור הפריט הראשון'
          }
        ],
        listType: 'unordered' as const
      },
      embed: {
        title: 'תוכן משובץ',
        htmlCode: '<p>הכנס כאן קוד HTML</p>',
        height: 400
      },
      socialBar: {
        title: 'עקבו אחרינו',
        socialLinks: [
          {
            platform: 'facebook' as const,
            url: 'https://facebook.com',
            label: 'Facebook'
          }
        ],
        alignment: 'center' as const,
        showLabels: true
      }
    };

    return defaults[elementId as keyof typeof defaults];
  };

  const handleAddElement = (elementId: string) => {
    const newElements = [...pageElements, `${elementId}_${Date.now()}`];
    const elementData = getDefaultElementData(elementId);
    
    const updatedTemplate = {
      ...template,
      pageElements: newElements,
      [elementId]: elementData
    };
    
    setPageElements(newElements);
    onTemplateChange(updatedTemplate);
  };

  const handleRemoveElement = (elementKey: string) => {
    const newElements = pageElements.filter(el => el !== elementKey);
    const updatedTemplate = {
      ...template,
      pageElements: newElements
    };
    
    setPageElements(newElements);
    onTemplateChange(updatedTemplate);
  };

  const handleDragStart = (e: React.DragEvent, elementKey: string) => {
    setDraggedElement(elementKey);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    
    if (!draggedElement) return;
    
    const draggedIndex = pageElements.indexOf(draggedElement);
    if (draggedIndex === -1) return;
    
    const newElements = [...pageElements];
    newElements.splice(draggedIndex, 1);
    newElements.splice(targetIndex, 0, draggedElement);
    
    const updatedTemplate = {
      ...template,
      pageElements: newElements
    };
    
    setPageElements(newElements);
    onTemplateChange(updatedTemplate);
    setDraggedElement(null);
  };

  const getElementInfo = (elementKey: string) => {
    const elementType = elementKey.split('_')[0];
    return availableElements.find(el => el.id === elementType);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardContent className="p-4">
          <h3 className="text-white font-medium mb-4">אלמנטים זמינים</h3>
          <div className="grid grid-cols-2 gap-2">
            {availableElements.map((element) => {
              const Icon = element.icon;
              return (
                <Button
                  key={element.id}
                  onClick={() => handleAddElement(element.id)}
                  className="bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/30 text-white p-3 h-auto flex flex-col items-center gap-2"
                >
                  <Icon className={`w-5 h-5 ${element.color}`} />
                  <span className="text-xs">{element.name}</span>
                  <Plus className="w-3 h-3" />
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardContent className="p-4">
          <h3 className="text-white font-medium mb-4">סדר האלמנטים בדף</h3>
          <ScrollArea className="h-64">
            <div className="space-y-2">
              {pageElements.map((elementKey, index) => {
                const elementInfo = getElementInfo(elementKey);
                if (!elementInfo) return null;
                
                const Icon = elementInfo.icon;
                
                return (
                  <div
                    key={elementKey}
                    draggable
                    onDragStart={(e) => handleDragStart(e, elementKey)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                    className="bg-slate-700/50 border border-slate-600/30 rounded-lg p-3 flex items-center gap-3 cursor-move hover:bg-slate-600/50 transition-colors"
                  >
                    <GripVertical className="w-4 h-4 text-slate-400" />
                    <Icon className={`w-4 h-4 ${elementInfo.color}`} />
                    <span className="flex-1 text-white text-sm">{elementInfo.name}</span>
                    <Button
                      size="sm"
                      onClick={() => handleRemoveElement(elementKey)}
                      className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 w-7 h-7 p-0"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                );
              })}
              
              {pageElements.length === 0 && (
                <div className="text-center py-8 text-slate-400">
                  <LayoutGrid className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">אין אלמנטים בדף</p>
                  <p className="text-xs mt-1">הוסף אלמנטים מהרשימה למעלה</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};