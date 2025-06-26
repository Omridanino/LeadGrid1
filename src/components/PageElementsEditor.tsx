
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Type, MessageSquare, Image, FileText, HelpCircle, Star, Upload, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import IconSelector from "@/components/IconSelector";

interface PageElement {
  id: string;
  type: 'title' | 'text' | 'image' | 'testimonial' | 'faq' | 'blog' | 'whychoose';
  content: any;
  order: number;
}

interface PageElementsEditorProps {
  elements: PageElement[];
  onElementsChange: (elements: PageElement[]) => void;
  content: any;
  onContentChange: (content: any) => void;
}

const PageElementsEditor = ({ elements, onElementsChange, content, onContentChange }: PageElementsEditorProps) => {
  const { toast } = useToast();
  const [editingElement, setEditingElement] = useState<string | null>(null);

  const addElement = (type: PageElement['type']) => {
    const newElement: PageElement = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      order: elements.length,
      content: getDefaultContent(type)
    };
    
    onElementsChange([...elements, newElement]);
    toast({
      title: "✨ אלמנט נוסף!",
      description: `אלמנט ${getElementTypeName(type)} נוסף לדף`,
    });
  };

  const getDefaultContent = (type: PageElement['type']) => {
    switch (type) {
      case 'title':
        return { text: 'כותרת חדשה', size: 'h2', icon: '' };
      case 'text':
        return { text: 'טקסט חדש כאן...', icon: '' };
      case 'image':
        return { url: '', alt: 'תיאור התמונה', caption: '' };
      case 'testimonial':
        return { name: 'שם הלקוח', role: 'תפקיד', content: 'ביקורת מעולה!', rating: 5 };
      case 'faq':
        return { question: 'שאלה חדשה?', answer: 'תשובה מפורטת כאן...' };
      case 'blog':
        return { title: 'כותרת הבלוג', excerpt: 'תקציר קצר...', content: 'תוכן הבלוג המלא...' };
      case 'whychoose':
        return { 
          title: 'למה לבחור בנו?',
          items: [
            { text: 'שירות מקצועי ואמין', icon: 'star-line' },
            { text: 'ניסיון רב שנים', icon: 'award-line' },
            { text: 'תמיכה 24/7', icon: 'headphone-line' }
          ]
        };
      default:
        return {};
    }
  };

  const getElementTypeName = (type: PageElement['type']) => {
    const names = {
      title: 'כותרת',
      text: 'טקסט',
      image: 'תמונה',
      testimonial: 'ביקורת',
      faq: 'שאלה נפוצה',
      blog: 'בלוג',
      whychoose: 'למה לבחור בנו'
    };
    return names[type];
  };

  const updateElement = (id: string, newContent: any) => {
    const updated = elements.map(el => 
      el.id === id ? { ...el, content: newContent } : el
    );
    onElementsChange(updated);
  };

  const deleteElement = (id: string) => {
    const filtered = elements.filter(el => el.id !== id);
    onElementsChange(filtered);
    toast({
      title: "🗑️ אלמנט נמחק",
      description: "האלמנט הוסר מהדף",
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, elementId: string) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        const element = elements.find(el => el.id === elementId);
        if (element) {
          updateElement(elementId, { ...element.content, url: imageUrl });
          toast({
            title: "🖼️ תמונה הועלתה!",
            description: "התמונה נוספה לאלמנט בהצלחה"
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addWhyChooseItem = (elementId: string) => {
    const element = elements.find(el => el.id === elementId);
    if (element) {
      const newItems = [...element.content.items, { text: 'סיבה חדשה', icon: 'star-line' }];
      updateElement(elementId, { ...element.content, items: newItems });
    }
  };

  const removeWhyChooseItem = (elementId: string, index: number) => {
    const element = elements.find(el => el.id === elementId);
    if (element) {
      const newItems = element.content.items.filter((_: any, i: number) => i !== index);
      updateElement(elementId, { ...element.content, items: newItems });
    }
  };

  const updateWhyChooseItem = (elementId: string, index: number, field: string, value: string) => {
    const element = elements.find(el => el.id === elementId);
    if (element) {
      const newItems = [...element.content.items];
      newItems[index] = { ...newItems[index], [field]: value };
      updateElement(elementId, { ...element.content, items: newItems });
    }
  };

  const renderElementEditor = (element: PageElement) => {
    const isEditing = editingElement === element.id;

    if (!isEditing) {
      return (
        <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
          <span className="text-white">{getElementTypeName(element.type)}</span>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditingElement(element.id)}
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => deleteElement(element.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-4 bg-gray-700 rounded space-y-3">
        {element.type === 'title' && (
          <>
            <Input
              value={element.content.text}
              onChange={(e) => updateElement(element.id, { ...element.content, text: e.target.value })}
              placeholder="כותרת"
              className="bg-gray-600 text-white"
            />
            <select
              value={element.content.size}
              onChange={(e) => updateElement(element.id, { ...element.content, size: e.target.value })}
              className="bg-gray-600 text-white p-2 rounded w-full"
            >
              <option value="h1">כותרת גדולה (H1)</option>
              <option value="h2">כותרת בינונית (H2)</option>
              <option value="h3">כותרת קטנה (H3)</option>
            </select>
            <div className="space-y-2">
              <Label className="text-white text-sm">בחירת אייקון (אופציונלי):</Label>
              <div className="flex items-center gap-3">
                <IconSelector
                  selectedIcon={element.content.icon || ''}
                  onIconSelect={(icon) => updateElement(element.id, { ...element.content, icon })}
                  triggerClassName="bg-gray-500 border-gray-400 text-white hover:bg-gray-400 min-w-[120px]"
                />
                {element.content.icon && (
                  <div className="flex items-center gap-2 p-2 bg-gray-500 rounded">
                    <i className={`ri-${element.content.icon} text-xl text-white`}></i>
                    <span className="text-sm text-gray-300">{element.content.icon}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {element.type === 'text' && (
          <>
            <Textarea
              value={element.content.text}
              onChange={(e) => updateElement(element.id, { ...element.content, text: e.target.value })}
              placeholder="טקסט"
              className="bg-gray-600 text-white"
              rows={4}
            />
            <div className="space-y-2">
              <Label className="text-white text-sm">בחירת אייקון (אופציונלי):</Label>
              <div className="flex items-center gap-3">
                <IconSelector
                  selectedIcon={element.content.icon || ''}
                  onIconSelect={(icon) => updateElement(element.id, { ...element.content, icon })}
                  triggerClassName="bg-gray-500 border-gray-400 text-white hover:bg-gray-400 min-w-[120px]"
                />
                {element.content.icon && (
                  <div className="flex items-center gap-2 p-2 bg-gray-500 rounded">
                    <i className={`ri-${element.content.icon} text-xl text-white`}></i>
                    <span className="text-sm text-gray-300">{element.content.icon}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {element.type === 'image' && (
          <>
            <div className="space-y-2">
              <Label className="text-white">העלאת תמונה מהמחשב:</Label>
              <div className="flex gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, element.id)}
                  className="bg-gray-600 text-white file:bg-purple-600 file:text-white file:border-0 file:rounded file:px-4 file:py-2"
                />
                <Button
                  onClick={() => {
                    const fileInput = document.querySelector(`input[type="file"]`) as HTMLInputElement;
                    fileInput?.click();
                  }}
                  className="bg-purple-600 hover:bg-purple-700"
                  size="sm"
                >
                  <Upload className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Label className="text-white">או כתובת URL:</Label>
            <Input
              value={element.content.url}
              onChange={(e) => updateElement(element.id, { ...element.content, url: e.target.value })}
              placeholder="כתובת התמונה (URL)"
              className="bg-gray-600 text-white"
            />
            <Input
              value={element.content.alt}
              onChange={(e) => updateElement(element.id, { ...element.content, alt: e.target.value })}
              placeholder="תיאור התמונה"
              className="bg-gray-600 text-white"
            />
            <Input
              value={element.content.caption}
              onChange={(e) => updateElement(element.id, { ...element.content, caption: e.target.value })}
              placeholder="כיתוב התמונה (אופציונלי)"
              className="bg-gray-600 text-white"
            />
            {element.content.url && (
              <div className="mt-2">
                <img 
                  src={element.content.url} 
                  alt="תצוגה מקדימה" 
                  className="w-32 h-20 object-cover rounded border"
                />
              </div>
            )}
          </>
        )}

        {element.type === 'whychoose' && (
          <>
            <Input
              value={element.content.title}
              onChange={(e) => updateElement(element.id, { ...element.content, title: e.target.value })}
              placeholder="כותרת הסקשן"
              className="bg-gray-600 text-white"
            />
            
            <div className="space-y-3">
              <Label className="text-white">פריטים:</Label>
              {element.content.items.map((item: any, index: number) => (
                <div key={index} className="p-4 bg-gray-600 rounded space-y-3 border border-gray-500">
                  <div className="flex gap-2">
                    <Input
                      value={item.text}
                      onChange={(e) => updateWhyChooseItem(element.id, index, 'text', e.target.value)}
                      placeholder="טקסט הפריט"
                      className="bg-gray-500 text-white flex-1"
                    />
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => removeWhyChooseItem(element.id, index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-white text-sm">בחירת אייקון:</Label>
                    <div className="flex items-center gap-3">
                      <IconSelector
                        selectedIcon={item.icon}
                        onIconSelect={(icon) => updateWhyChooseItem(element.id, index, 'icon', icon)}
                        triggerClassName="bg-gray-500 border-gray-400 text-white hover:bg-gray-400 min-w-[120px]"
                      />
                      {item.icon && (
                        <div className="flex items-center gap-2 p-2 bg-gray-500 rounded">
                          <i className={`ri-${item.icon} text-xl text-white`}></i>
                          <span className="text-sm text-gray-300">{item.icon}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">בחר אייקון מהרשימה או הקלד שם אייקון מ-RemixIcon</p>
                  </div>
                </div>
              ))}
              
              <Button
                onClick={() => addWhyChooseItem(element.id)}
                className="bg-green-600 hover:bg-green-700 w-full"
                size="sm"
              >
                <Plus className="w-4 h-4 ml-2" />
                הוסף פריט
              </Button>
            </div>
          </>
        )}

        {element.type === 'testimonial' && (
          <>
            <Input
              value={element.content.name}
              onChange={(e) => updateElement(element.id, { ...element.content, name: e.target.value })}
              placeholder="שם הלקוח"
              className="bg-gray-600 text-white"
            />
            <Input
              value={element.content.role}
              onChange={(e) => updateElement(element.id, { ...element.content, role: e.target.value })}
              placeholder="תפקיד/תואר"
              className="bg-gray-600 text-white"
            />
            <Textarea
              value={element.content.content}
              onChange={(e) => updateElement(element.id, { ...element.content, content: e.target.value })}
              placeholder="תוכן הביקורת"
              className="bg-gray-600 text-white"
              rows={3}
            />
            <select
              value={element.content.rating}
              onChange={(e) => updateElement(element.id, { ...element.content, rating: parseInt(e.target.value) })}
              className="bg-gray-600 text-white p-2 rounded w-full"
            >
              {[1,2,3,4,5].map(num => (
                <option key={num} value={num}>{num} כוכבים</option>
              ))}
            </select>
          </>
        )}

        {element.type === 'faq' && (
          <>
            <Input
              value={element.content.question}
              onChange={(e) => updateElement(element.id, { ...element.content, question: e.target.value })}
              placeholder="השאלה"
              className="bg-gray-600 text-white"
            />
            <Textarea
              value={element.content.answer}
              onChange={(e) => updateElement(element.id, { ...element.content, answer: e.target.value })}
              placeholder="התשובה"
              className="bg-gray-600 text-white"
              rows={3}
            />
          </>
        )}

        {element.type === 'blog' && (
          <>
            <Input
              value={element.content.title}
              onChange={(e) => updateElement(element.id, { ...element.content, title: e.target.value })}
              placeholder="כותרת הבלוג"
              className="bg-gray-600 text-white"
            />
            <Textarea
              value={element.content.excerpt}
              onChange={(e) => updateElement(element.id, { ...element.content, excerpt: e.target.value })}
              placeholder="תקציר קצר"
              className="bg-gray-600 text-white"
              rows={2}
            />
            <Textarea
              value={element.content.content}
              onChange={(e) => updateElement(element.id, { ...element.content, content: e.target.value })}
              placeholder="תוכן הבלוג המלא"
              className="bg-gray-600 text-white"
              rows={6}
            />
          </>
        )}

        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() => setEditingElement(null)}
            className="bg-green-600 hover:bg-green-700"
          >
            שמור
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setEditingElement(null)}
          >
            ביטול
          </Button>
        </div>
      </div>
    );
  };

  const elementTypes = [
    { type: 'title' as const, icon: Type, label: 'כותרת' },
    { type: 'text' as const, icon: FileText, label: 'טקסט' },
    { type: 'image' as const, icon: Image, label: 'תמונה' },
    { type: 'whychoose' as const, icon: Award, label: 'למה לבחור בנו' },
    { type: 'testimonial' as const, icon: MessageSquare, label: 'ביקורת' },
    { type: 'faq' as const, icon: HelpCircle, label: 'שאלה נפוצה' },
    { type: 'blog' as const, icon: Star, label: 'בלוג' },
  ];

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Plus className="w-5 h-5 text-purple-500" />
          עורך אלמנטים מתקדם
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Add Element Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {elementTypes.map(({ type, icon: Icon, label }) => (
            <Button
              key={type}
              onClick={() => addElement(type)}
              className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
              size="sm"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Button>
          ))}
        </div>

        {/* Elements List */}
        <div className="space-y-2">
          <Label className="text-white font-semibold">אלמנטים בדף:</Label>
          {elements.length === 0 ? (
            <p className="text-gray-400 text-sm">אין אלמנטים עדיין. הוסף אלמנטים חדשים מלמעלה.</p>
          ) : (
            elements.map((element) => (
              <div key={element.id}>
                {renderElementEditor(element)}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PageElementsEditor;
