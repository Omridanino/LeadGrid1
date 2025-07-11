import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Edit3, 
  Save, 
  Undo, 
  Redo, 
  Eye, 
  EyeOff, 
  Settings, 
  Palette,
  Type,
  Layout,
  MousePointer,
  Layers,
  Download,
  Upload
} from 'lucide-react';
import { InlineEditor } from './InlineEditor';
import { generatePageHTML } from '@/utils/pageGenerator';
import { toast } from 'sonner';

interface InlineLandingPageEditorProps {
  content: any;
  currentColors: any;
  formData: any;
  heroImage: string;
  elements: string[];
  onContentUpdate?: (newContent: any) => void;
}

export const InlineLandingPageEditor: React.FC<InlineLandingPageEditorProps> = ({
  content,
  currentColors,
  formData,
  heroImage,
  elements,
  onContentUpdate
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableContent, setEditableContent] = useState(content);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [editHistory, setEditHistory] = useState<any[]>([content]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // סנכרון עם תוכן חיצוני
  useEffect(() => {
    if (content && content !== editableContent) {
      setEditableContent(content);
      setEditHistory([content]);
      setHistoryIndex(0);
    }
  }, [content]);

  // פונקציה לזיהוי אלמנטים הניתנים לעריכה
  const makeElementsEditable = () => {
    if (!iframeRef.current?.contentDocument) return;

    const doc = iframeRef.current.contentDocument;
    
    // הוספת סטיילים לעריכה
    const style = doc.createElement('style');
    style.textContent = `
      .editable-element {
        position: relative;
        outline: 2px dashed transparent;
        transition: all 0.2s ease;
        cursor: pointer;
      }
      .editable-element:hover {
        outline-color: #3b82f6;
        background-color: rgba(59, 130, 246, 0.1);
      }
      .editable-element.selected {
        outline-color: #ef4444;
        background-color: rgba(239, 68, 68, 0.1);
      }
      .edit-overlay {
        position: absolute;
        top: -30px;
        right: 0;
        z-index: 1000;
      }
    `;
    doc.head.appendChild(style);

    // הוספת event listeners לאלמנטים
    const editableSelectors = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'span', 'button', 
      '.card', '.feature-card', '.testimonial-card',
      '[data-editable="true"]'
    ];

    editableSelectors.forEach(selector => {
      const elements = doc.querySelectorAll(selector);
      elements.forEach((element: HTMLElement) => {
        if (!element.classList.contains('editable-element')) {
          element.classList.add('editable-element');
          element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleElementSelect(element);
          });
        }
      });
    });
  };

  const handleElementSelect = (element: HTMLElement) => {
    if (!isEditMode) return;

    // הסרת בחירה קודמת
    if (selectedElement) {
      selectedElement.classList.remove('selected');
    }

    // בחירת אלמנט חדש
    element.classList.add('selected');
    setSelectedElement(element);
    setShowEditor(true);
  };

  const handleElementUpdate = (updates: any) => {
    if (!selectedElement) return;

    // עדכון האלמנט הוויזואלי
    if (updates.text) {
      selectedElement.textContent = updates.text;
    }

    if (updates.styles) {
      Object.keys(updates.styles).forEach(key => {
        selectedElement.style[key as any] = updates.styles[key];
      });
    }

    // עדכון התוכן במצב
    const newContent = { ...editableContent };
    // כאן נוכל להוסיף לוגיקה לעדכון התוכן בהתאם לסוג האלמנט
    updateContentHistory(newContent);
    
    if (onContentUpdate) {
      onContentUpdate(newContent);
    }

    setShowEditor(false);
    setSelectedElement(null);
    toast.success('האלמנט עודכן בהצלחה');
  };

  const updateContentHistory = (newContent: any) => {
    const newHistory = editHistory.slice(0, historyIndex + 1);
    newHistory.push(newContent);
    setEditHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setEditableContent(newContent);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setEditableContent(editHistory[newIndex]);
      if (onContentUpdate) {
        onContentUpdate(editHistory[newIndex]);
      }
      toast.info('פעולה בוטלה');
    }
  };

  const handleRedo = () => {
    if (historyIndex < editHistory.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setEditableContent(editHistory[newIndex]);
      if (onContentUpdate) {
        onContentUpdate(editHistory[newIndex]);
      }
      toast.info('פעולה שוחזרה');
    }
  };

  const handleSave = () => {
    // שמירה מקומית או לשרת
    localStorage.setItem('landingPageContent', JSON.stringify(editableContent));
    toast.success('הדף נשמר בהצלחה');
  };

  const handleDownload = () => {
    if (formData?.selectedTemplate) {
      const htmlContent = generatePageHTML(formData.selectedTemplate);
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${formData.businessName || 'landing-page'}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('הדף הורד בהצלחה');
    }
  };

  // טעינת iframe והפיכת אלמנטים לניתנים לעריכה
  const handleIframeLoad = () => {
    if (isEditMode) {
      setTimeout(() => {
        makeElementsEditable();
      }, 500);
    }
  };

  useEffect(() => {
    if (isEditMode && iframeRef.current) {
      makeElementsEditable();
    }
  }, [isEditMode]);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    setSelectedElement(null);
    setShowEditor(false);
    
    if (!isEditMode) {
      toast.info('מצב עריכה הופעל - לחץ על אלמנטים לעריכה');
    } else {
      toast.info('מצב עריכה כובה');
    }
  };

  if (!formData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-lg">טוען את הדף שלך...</p>
        </div>
      </div>
    );
  }

  const htmlContent = formData?.selectedTemplate ? generatePageHTML(formData.selectedTemplate) : '';

  return (
    <div className="w-full h-full relative">
      {/* סרגל כלים עליון */}
      <div className="absolute top-4 left-4 z-50 flex gap-2">
        <Card className="shadow-lg">
          <CardContent className="p-2 flex items-center gap-2">
            <Button
              size="sm"
              variant={isEditMode ? "default" : "outline"}
              onClick={toggleEditMode}
            >
              {isEditMode ? <EyeOff className="h-4 w-4 mr-1" /> : <Edit3 className="h-4 w-4 mr-1" />}
              {isEditMode ? 'סיום עריכה' : 'עריכה'}
            </Button>
            
            {isEditMode && (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleUndo}
                  disabled={historyIndex <= 0}
                >
                  <Undo className="h-4 w-4" />
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleRedo}
                  disabled={historyIndex >= editHistory.length - 1}
                >
                  <Redo className="h-4 w-4" />
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleSave}
                >
                  <Save className="h-4 w-4 mr-1" />
                  שמור
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDownload}
                >
                  <Download className="h-4 w-4 mr-1" />
                  הורד
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        {isEditMode && (
          <Card className="shadow-lg">
            <CardContent className="p-2">
              <Badge variant="secondary">
                <MousePointer className="h-3 w-3 mr-1" />
                לחץ על אלמנט לעריכה
              </Badge>
            </CardContent>
          </Card>
        )}
      </div>

      {/* תצוגה מקדימה */}
      <div className="w-full h-full">
        {htmlContent ? (
          <iframe
            ref={iframeRef}
            srcDoc={htmlContent}
            className="w-full h-full border-0"
            style={{ minHeight: '100vh' }}
            title="Landing Page Preview"
            onLoad={handleIframeLoad}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <Layout className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-600 mb-2">תצוגה מקדימה של דף הנחיתה</h2>
              <p className="text-gray-500">הדף שלך יוצג כאן לאחר יצירתו</p>
            </div>
          </div>
        )}
      </div>

      {/* עורך אינליין */}
      {showEditor && selectedElement && (
        <InlineEditor
          element={selectedElement}
          elementType="text"
          content={editableContent}
          onUpdate={handleElementUpdate}
          onClose={() => {
            setShowEditor(false);
            setSelectedElement(null);
            if (selectedElement) {
              selectedElement.classList.remove('selected');
            }
          }}
        />
      )}
    </div>
  );
};

export default InlineLandingPageEditor;