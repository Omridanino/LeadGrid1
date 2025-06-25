
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Type, MessageSquare, Image, FileText, HelpCircle, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PageElement {
  id: string;
  type: 'title' | 'text' | 'image' | 'testimonial' | 'faq' | 'blog';
  content: any;
  order: number;
}

interface PageElementsEditorProps {
  elements: PageElement[];
  onElementsChange: (elements: PageElement[]) => void;
}

const PageElementsEditor = ({ elements, onElementsChange }: PageElementsEditorProps) => {
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
        return { text: 'כותרת חדשה', size: 'h2' };
      case 'text':
        return { text: 'טקסט חדש כאן...' };
      case 'image':
        return { url: '', alt: 'תיאור התמונה', caption: '' };
      case 'testimonial':
        return { name: 'שם הלקוח', role: 'תפקיד', content: 'ביקורת מעולה!', rating: 5 };
      case 'faq':
        return { question: 'שאלה חדשה?', answer: 'תשובה מפורטת כאן...' };
      case 'blog':
        return { title: 'כותרת הבלוג', excerpt: 'תקציר קצר...', content: 'תוכן הבלוג המלא...' };
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
      blog: 'בלוג'
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
          </>
        )}

        {element.type === 'text' && (
          <Textarea
            value={element.content.text}
            onChange={(e) => updateElement(element.id, { ...element.content, text: e.target.value })}
            placeholder="טקסט"
            className="bg-gray-600 text-white"
            rows={4}
          />
        )}

        {element.type === 'image' && (
          <>
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
