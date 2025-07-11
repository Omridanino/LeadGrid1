import { useState } from "react";
import { ColorScheme } from "@/types/colors";
import { Button } from "@/components/ui/button";
import { Edit3, Palette, Type } from "lucide-react";
import { cn } from "@/lib/utils";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  elements: string[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements }: LandingPagePreviewProps) => {
  const [editMode, setEditMode] = useState(false);
  const [editingElement, setEditingElement] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState({
    headline: formData?.headline || "הכותרת שלכם כאן",
    subheadline: formData?.subheadline || "תת כותרת מסבירה על השירות",
    ctaText: formData?.ctaText || "צור קשר",
    featuresTitle: "השירותים שלנו",
    aboutTitle: "אודותינו",
    aboutText: "כאן תוכלו לכתוב על העסק שלכם, הניסיון שלכם והערכים שלכם. ספרו ללקוחות למה כדאי להם לבחור בכם.",
    contactTitle: "צור קשר",
    contactText: "נשמח לשמוע מכם! צרו איתנו קשר לקבלת ייעוץ או הצעת מחיר."
  });
  const [tempColors, setTempColors] = useState(currentColors);

  // Show loading if formData is not ready
  if (!formData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">טוען את הדף שלך...</p>
        </div>
      </div>
    );
  }

  const handleElementClick = (elementType: string) => {
    if (editMode) {
      setEditingElement(elementType);
    }
  };

  const handleElementEdit = (elementType: string, newValue: string) => {
    setTempContent(prev => ({
      ...prev,
      [elementType]: newValue
    }));
  };

  const EditableElement = ({ 
    type, 
    children, 
    className = "", 
    tag: Tag = "div",
    style
  }: { 
    type: string; 
    children: React.ReactNode; 
    className?: string; 
    tag?: any;
    style?: React.CSSProperties;
  }) => (
    <Tag
      className={cn(
        className,
        editMode && "cursor-pointer hover:bg-white/10 hover:rounded transition-all duration-200 relative group"
      )}
      style={style}
      onClick={() => handleElementClick(type)}
    >
      {children}
      {editMode && (
        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs">
            ✏️
          </div>
        </div>
      )}
    </Tag>
  );

  return (
    <div className="w-full h-full relative overflow-auto">
      {/* Toggle Edit Mode Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          size="sm"
          onClick={() => setEditMode(!editMode)}
          className={cn(
            "transition-all duration-300",
            editMode ? "bg-green-600 hover:bg-green-700" : "bg-primary hover:bg-primary/90"
          )}
        >
          <Edit3 className="w-4 h-4 mr-2" />
          {editMode ? "סיום עריכה" : "עריכת הדף"}
        </Button>
      </div>

      {/* Color Editor */}
      {editingElement === 'colors' && (
        <div className="fixed top-20 right-4 z-50 bg-background border rounded-lg p-4 shadow-lg w-80">
          <h3 className="font-medium mb-3">עריכת צבעים</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-muted-foreground">צבע ראשי</label>
              <input
                type="color"
                value={tempColors.primary}
                onChange={(e) => setTempColors(prev => ({ ...prev, primary: e.target.value }))}
                className="w-full h-8 rounded border"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">צבע משני</label>
              <input
                type="color"
                value={tempColors.secondary}
                onChange={(e) => setTempColors(prev => ({ ...prev, secondary: e.target.value }))}
                className="w-full h-8 rounded border"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">צבע הדגשה</label>
              <input
                type="color"
                value={tempColors.accent}
                onChange={(e) => setTempColors(prev => ({ ...prev, accent: e.target.value }))}
                className="w-full h-8 rounded border"
              />
            </div>
            <Button size="sm" onClick={() => setEditingElement(null)}>
              סגור
            </Button>
          </div>
        </div>
      )}

      {/* Editing Toolbar */}
      {editMode && (
        <div className="fixed top-20 left-4 z-50 bg-background/95 backdrop-blur-sm border rounded-lg p-3 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Edit3 className="w-4 h-4" />
            <span className="text-sm font-medium">מצב עריכה</span>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditingElement('colors')}
              className="justify-start"
            >
              <Palette className="w-3 h-3 mr-2" />
              עריכת צבעים
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditingElement('text')}
              className="justify-start"
            >
              <Type className="w-3 h-3 mr-2" />
              עריכת טקסט
            </Button>
          </div>
        </div>
      )}

      {/* Landing Page Content */}
      <div className="w-full">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center text-center p-8 text-white relative"
          style={{
            background: `linear-gradient(135deg, ${tempColors.primary} 0%, ${tempColors.secondary} 100%)`
          }}
        >
          <div className="max-w-4xl">
            <EditableElement type="headline" tag="h1" className="text-5xl font-bold mb-6">
              {tempContent.headline}
            </EditableElement>
            <EditableElement type="subheadline" tag="p" className="text-xl mb-8 opacity-90">
              {tempContent.subheadline}
            </EditableElement>
            <EditableElement type="ctaText" tag="button" className="bg-accent text-white px-8 py-4 rounded-lg text-lg hover:transform hover:scale-105 transition-all duration-300">
              {tempContent.ctaText}
            </EditableElement>
          </div>
        </section>

        {/* Features Section */}
        {elements.includes('features') && (
          <section className="py-16 px-8" style={{ background: tempColors.featuresColor || '#f8f9fa' }}>
            <div className="max-w-6xl mx-auto text-center">
              <EditableElement type="featuresTitle" tag="h2" className="text-4xl font-bold mb-12" style={{ color: tempColors.featuresTextColor || '#333' }}>
                {tempContent.featuresTitle}
              </EditableElement>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">שירות ראשון</h3>
                  <p className="text-gray-600">תיאור השירות הראשון שלכם</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">שירות שני</h3>
                  <p className="text-gray-600">תיאור השירות השני שלכם</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">שירות שלישי</h3>
                  <p className="text-gray-600">תיאור השירות השלישי שלכם</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {elements.includes('about') && (
          <section className="py-16 px-8" style={{ background: tempColors.aboutColor || '#ffffff' }}>
            <div className="max-w-4xl mx-auto text-center">
              <EditableElement type="aboutTitle" tag="h2" className="text-4xl font-bold mb-8" style={{ color: tempColors.aboutTextColor || '#333' }}>
                {tempContent.aboutTitle}
              </EditableElement>
              <EditableElement type="aboutText" tag="p" className="text-lg leading-relaxed" style={{ color: tempColors.aboutTextColor || '#666' }}>
                {tempContent.aboutText}
              </EditableElement>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {elements.includes('contact') && (
          <section className="py-16 px-8" style={{ background: tempColors.contactColor || '#f8f9fa' }}>
            <div className="max-w-3xl mx-auto text-center">
              <EditableElement type="contactTitle" tag="h2" className="text-4xl font-bold mb-8" style={{ color: tempColors.contactTextColor || '#333' }}>
                {tempContent.contactTitle}
              </EditableElement>
              <EditableElement type="contactText" tag="p" className="text-lg mb-8" style={{ color: tempColors.contactTextColor || '#666' }}>
                {tempContent.contactText}
              </EditableElement>
              <button 
                className="text-white px-8 py-4 rounded-lg text-lg hover:transform hover:scale-105 transition-all duration-300"
                style={{ background: tempColors.accent }}
              >
                שלחו הודעה
              </button>
            </div>
          </section>
        )}
      </div>

      {/* Text Editor Modal */}
      {editingElement && editingElement !== 'colors' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 w-96 max-w-[90vw]">
            <h3 className="font-medium mb-3">עריכת {editingElement}</h3>
            <textarea
              className="w-full h-32 p-3 border rounded-lg resize-none"
              placeholder="הכנס טקסט חדש..."
              value={tempContent[editingElement as keyof typeof tempContent] || ''}
              onChange={(e) => handleElementEdit(editingElement, e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setEditingElement(null)}>
                ביטול
              </Button>
              <Button onClick={() => setEditingElement(null)}>
                שמור
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPagePreview;