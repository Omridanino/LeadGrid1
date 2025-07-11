import { useState } from "react";
import { ColorScheme } from "@/types/colors";
import { Button } from "@/components/ui/button";
import { Edit3, Save, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  elements: string[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements }: LandingPagePreviewProps) => {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [pageContent, setPageContent] = useState({
    headline: formData?.headline || "ברוכים הבאים לעסק שלנו",
    subheadline: formData?.subheadline || "אנחנו מספקים שירותים איכותיים ומקצועיים",
    ctaText: formData?.ctaText || "צור קשר עכשיו",
    businessName: formData?.businessName || "העסק שלי",
    featuresTitle: "השירותים שלנו",
    feature1Title: "שירות מקצועי",
    feature1Text: "אנחנו מספקים שירות מקצועי ואמין",
    feature2Title: "זמינות 24/7",
    feature2Text: "אנחנו זמינים עבורכם בכל שעות היום",
    feature3Title: "מחירים הוגנים",
    feature3Text: "מחירים תחרותיים וללא הפתעות",
    aboutTitle: "קצת עלינו",
    aboutText: "אנחנו עסק מוביל בתחום עם ניסיון של שנים רבות. הצוות שלנו מורכב מאנשי מקצוע מנוסים שמתמחים במתן שירות איכותי ללקוחותינו.",
    contactTitle: "צרו קשר",
    contactText: "נשמח לענות על כל שאלה ולספק לכם הצעת מחיר",
  });

  const [colors, setColors] = useState(currentColors);
  const [tempValue, setTempValue] = useState("");

  if (!formData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">טוען את הדף שלכם...</p>
        </div>
      </div>
    );
  }

  const startEdit = (field: string) => {
    setEditingField(field);
    setTempValue(pageContent[field as keyof typeof pageContent] || "");
  };

  const saveEdit = () => {
    if (editingField) {
      setPageContent(prev => ({
        ...prev,
        [editingField]: tempValue
      }));
    }
    setEditingField(null);
    setTempValue("");
  };

  const cancelEdit = () => {
    setEditingField(null);
    setTempValue("");
  };

  const EditableText = ({ 
    field, 
    className = "", 
    tag: Component = "div",
    placeholder = ""
  }: { 
    field: string; 
    className?: string; 
    tag?: any;
    placeholder?: string;
  }) => {
    if (editingField === field) {
      return (
        <div className="relative">
          <textarea
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="w-full p-2 border-2 border-blue-500 rounded bg-white text-black resize-none"
            placeholder={placeholder}
            autoFocus
            rows={tempValue.split('\n').length || 1}
          />
          <div className="flex gap-2 mt-2">
            <Button size="sm" onClick={saveEdit} className="text-xs">
              <Save className="w-3 h-3 mr-1" />
              שמור
            </Button>
            <Button size="sm" variant="outline" onClick={cancelEdit} className="text-xs">
              <X className="w-3 h-3 mr-1" />
              ביטול
            </Button>
          </div>
        </div>
      );
    }

    return (
      <Component
        className={cn(
          className,
          "cursor-pointer hover:bg-white/10 hover:rounded-md transition-all duration-200 relative group p-2"
        )}
        onClick={() => startEdit(field)}
      >
        {pageContent[field as keyof typeof pageContent] || placeholder}
        <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            <Edit3 className="w-3 h-3" />
          </div>
        </div>
      </Component>
    );
  };

  return (
    <div className="w-full h-full overflow-auto bg-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center text-center p-8 text-white relative"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
        }}
      >
        <div className="max-w-4xl z-10">
          <EditableText
            field="headline"
            tag="h1"
            className="text-6xl font-bold mb-6"
            placeholder="הכותרת הראשית שלכם"
          />
          <EditableText
            field="subheadline"
            tag="p"
            className="text-xl mb-8 opacity-90"
            placeholder="תת כותרת מסבירה"
          />
          <EditableText
            field="ctaText"
            tag="button"
            className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
            placeholder="כפתור פעולה"
          />
        </div>
      </section>

      {/* Features Section */}
      {elements.includes('features') && (
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <EditableText
              field="featuresTitle"
              tag="h2"
              className="text-4xl font-bold text-center text-gray-800 mb-16"
              placeholder="כותרת השירותים"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <EditableText
                  field="feature1Title"
                  tag="h3"
                  className="text-xl font-semibold mb-4 text-gray-800"
                  placeholder="כותרת שירות 1"
                />
                <EditableText
                  field="feature1Text"
                  tag="p"
                  className="text-gray-600 leading-relaxed"
                  placeholder="תיאור השירות הראשון"
                />
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <EditableText
                  field="feature2Title"
                  tag="h3"
                  className="text-xl font-semibold mb-4 text-gray-800"
                  placeholder="כותרת שירות 2"
                />
                <EditableText
                  field="feature2Text"
                  tag="p"
                  className="text-gray-600 leading-relaxed"
                  placeholder="תיאור השירות השני"
                />
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <EditableText
                  field="feature3Title"
                  tag="h3"
                  className="text-xl font-semibold mb-4 text-gray-800"
                  placeholder="כותרת שירות 3"
                />
                <EditableText
                  field="feature3Text"
                  tag="p"
                  className="text-gray-600 leading-relaxed"
                  placeholder="תיאור השירות השלישי"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {elements.includes('about') && (
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <EditableText
              field="aboutTitle"
              tag="h2"
              className="text-4xl font-bold text-gray-800 mb-8"
              placeholder="כותרת אודותינו"
            />
            <EditableText
              field="aboutText"
              tag="p"
              className="text-lg text-gray-600 leading-relaxed"
              placeholder="ספרו על העסק שלכם, הניסיון וההישגים"
            />
          </div>
        </section>
      )}

      {/* Contact Section */}
      {elements.includes('contact') && (
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <EditableText
              field="contactTitle"
              tag="h2"
              className="text-4xl font-bold text-gray-800 mb-8"
              placeholder="כותרת צור קשר"
            />
            <EditableText
              field="contactText"
              tag="p"
              className="text-lg text-gray-600 mb-8"
              placeholder="הודעה ללקוחות על יצירת קשר"
            />
            <button 
              className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
              style={{ background: colors.accent }}
            >
              שלחו הודעה
            </button>
          </div>
        </section>
      )}

      {/* Instructions */}
      <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg text-sm max-w-xs">
        <p className="font-semibold mb-2">איך לערוך:</p>
        <p>לחצו על כל טקסט כדי לערוך אותו</p>
      </div>
    </div>
  );
};

export default LandingPagePreview;