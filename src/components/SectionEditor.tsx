
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Save, X, Plus, Trash2, Star, Heart, HelpCircle, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SectionEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  formData: any;
  onFormDataChange: (newFormData: any) => void;
}

const SectionEditor = ({ content, onContentChange, formData, onFormDataChange }: SectionEditorProps) => {
  const { toast } = useToast();
  const [editingSection, setEditingSection] = useState<string | null>(null);

  const updateContent = (field: string, value: any) => {
    onContentChange({
      ...content,
      [field]: value
    });
  };

  const updateFormData = (field: string, value: string) => {
    onFormDataChange({
      ...formData,
      [field]: value
    });
  };

  const addFeature = () => {
    const newFeature = "תכונה חדשה ומרגשת";
    updateContent('features', [...content.features, newFeature]);
    toast({
      title: "✨ תכונה נוספה!",
      description: "תכונה חדשה נוספה לרשימה"
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...content.features];
    newFeatures[index] = value;
    updateContent('features', newFeatures);
  };

  const removeFeature = (index: number) => {
    const newFeatures = content.features.filter((_: string, i: number) => i !== index);
    updateContent('features', newFeatures);
    toast({
      title: "🗑️ תכונה הוסרה",
      description: "התכונה הוסרה מהרשימה"
    });
  };

  const addTestimonial = () => {
    const newTestimonial = {
      name: "שם הלקוח",
      role: "תפקיד הלקוח", 
      content: "ביקורת מעולה על השירות!",
      rating: 5
    };
    updateContent('testimonials', [...content.testimonials, newTestimonial]);
    toast({
      title: "⭐ ביקורת נוספה!",
      description: "ביקורת חדשה נוספה לרשימה"
    });
  };

  const updateTestimonial = (index: number, field: string, value: any) => {
    const newTestimonials = [...content.testimonials];
    newTestimonials[index] = { ...newTestimonials[index], [field]: value };
    updateContent('testimonials', newTestimonials);
  };

  const removeTestimonial = (index: number) => {
    const newTestimonials = content.testimonials.filter((_: any, i: number) => i !== index);
    updateContent('testimonials', newTestimonials);
    toast({
      title: "🗑️ ביקורת הוסרה",
      description: "הביקורת הוסרה מהרשימה"
    });
  };

  const addFAQ = () => {
    const newFAQ = {
      question: "שאלה חדשה?",
      answer: "תשובה מפורטת ומועילה כאן..."
    };
    updateContent('faq', [...content.faq, newFAQ]);
    toast({
      title: "❓ שאלה נוספה!",
      description: "שאלה חדשה נוספה לרשימה"
    });
  };

  const updateFAQ = (index: number, field: string, value: string) => {
    const newFAQ = [...content.faq];
    newFAQ[index] = { ...newFAQ[index], [field]: value };
    updateContent('faq', newFAQ);
  };

  const removeFAQ = (index: number) => {
    const newFAQ = content.faq.filter((_: any, i: number) => i !== index);
    updateContent('faq', newFAQ);
    toast({
      title: "🗑️ שאלה הוסרה",
      description: "השאלה הוסרה מהרשימה"
    });
  };

  const updateStats = (key: string, value: string) => {
    updateContent('stats', { ...content.stats, [key]: value });
  };

  const renderSectionEditor = (sectionKey: string, sectionTitle: string, icon: any) => {
    const isEditing = editingSection === sectionKey;
    const Icon = icon;

    return (
      <Card key={sectionKey} className="bg-gray-800 border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <Icon className="w-5 h-5 text-purple-500" />
            {sectionTitle}
          </CardTitle>
          <Button
            size="sm"
            variant={isEditing ? "destructive" : "outline"}
            onClick={() => setEditingSection(isEditing ? null : sectionKey)}
          >
            {isEditing ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
          </Button>
        </CardHeader>
        
        {isEditing && (
          <CardContent className="space-y-4">
            {sectionKey === 'hero' && (
              <>
                <div>
                  <Label className="text-white font-semibold">כותרת ראשית</Label>
                  <Input
                    value={content.headline}
                    onChange={(e) => updateContent('headline', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold">כותרת משנה</Label>
                  <Textarea
                    value={content.subheadline}
                    onChange={(e) => updateContent('subheadline', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={3}
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold">כפתור קריאה לפעולה</Label>
                  <Input
                    value={content.cta}
                    onChange={(e) => updateContent('cta', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold">תג מעל הכותרת</Label>
                  <Input
                    value={content.badge}
                    onChange={(e) => updateContent('badge', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold mb-3 block">סטטיסטיקות</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(content.stats).map(([key, value]) => (
                      <div key={key}>
                        <Label className="text-gray-300 text-sm">{key}</Label>
                        <Input
                          value={value as string}
                          onChange={(e) => updateStats(key, e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {sectionKey === 'features' && (
              <>
                <div>
                  <Label className="text-white font-semibold">כותרת הסקשן</Label>
                  <Input
                    value={content.featuresTitle}
                    onChange={(e) => updateContent('featuresTitle', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold mb-3 block">תכונות המוצר/שירות</Label>
                  <div className="space-y-2">
                    {content.features.map((feature: string, index: number) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white flex-1"
                        />
                        <Button
                          onClick={() => removeFeature(index)}
                          variant="destructive"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      onClick={addFeature}
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      הוסף תכונה
                    </Button>
                  </div>
                </div>
              </>
            )}

            {sectionKey === 'about' && (
              <>
                <div>
                  <Label className="text-white font-semibold">כותרת הסקשן</Label>
                  <Input
                    value={content.aboutTitle}
                    onChange={(e) => updateContent('aboutTitle', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold">טקסט אודות</Label>
                  <Textarea
                    value={content.aboutText}
                    onChange={(e) => updateContent('aboutText', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={4}
                  />
                </div>
              </>
            )}

            {sectionKey === 'emotional' && (
              <>
                <div>
                  <Label className="text-white font-semibold">כותרת הסקשן</Label>
                  <Input
                    value={content.emotional.title}
                    onChange={(e) => updateContent('emotional', { ...content.emotional, title: e.target.value })}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold">תוכן הסקשן</Label>
                  <Textarea
                    value={content.emotional.content}
                    onChange={(e) => updateContent('emotional', { ...content.emotional, content: e.target.value })}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={4}
                  />
                </div>
              </>
            )}

            {sectionKey === 'testimonials' && (
              <>
                <div>
                  <Label className="text-white font-semibold mb-3 block">ביקורות לקוחות</Label>
                  <div className="space-y-4">
                    {content.testimonials.map((testimonial: any, index: number) => (
                      <div key={index} className="p-4 bg-gray-700 rounded border">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-white font-medium">ביקורת #{index + 1}</h4>
                          <Button
                            onClick={() => removeTestimonial(index)}
                            variant="destructive"
                            size="sm"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div>
                            <Label className="text-gray-300 text-sm">שם הלקוח</Label>
                            <Input
                              value={testimonial.name}
                              onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
                              className="bg-gray-600 border-gray-500 text-white"
                            />
                          </div>
                          <div>
                            <Label className="text-gray-300 text-sm">תפקיד</Label>
                            <Input
                              value={testimonial.role}
                              onChange={(e) => updateTestimonial(index, 'role', e.target.value)}
                              className="bg-gray-600 border-gray-500 text-white"
                            />
                          </div>
                        </div>
                        <div className="mb-2">
                          <Label className="text-gray-300 text-sm">תוכן הביקורת</Label>
                          <Textarea
                            value={testimonial.content}
                            onChange={(e) => updateTestimonial(index, 'content', e.target.value)}
                            className="bg-gray-600 border-gray-500 text-white"
                            rows={2}
                          />
                        </div>
                        <div>
                          <Label className="text-gray-300 text-sm">דירוג (כוכבים)</Label>
                          <select
                            value={testimonial.rating}
                            onChange={(e) => updateTestimonial(index, 'rating', parseInt(e.target.value))}
                            className="bg-gray-600 text-white p-2 rounded w-full border border-gray-500"
                          >
                            {[1,2,3,4,5].map(num => (
                              <option key={num} value={num}>{num} כוכבים</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    ))}
                    <Button
                      onClick={addTestimonial}
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      הוסף ביקורת
                    </Button>
                  </div>
                </div>
              </>
            )}

            {sectionKey === 'faq' && (
              <>
                <div>
                  <Label className="text-white font-semibold mb-3 block">שאלות נפוצות</Label>
                  <div className="space-y-4">
                    {content.faq.map((item: any, index: number) => (
                      <div key={index} className="p-4 bg-gray-700 rounded border">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-white font-medium">שאלה #{index + 1}</h4>
                          <Button
                            onClick={() => removeFAQ(index)}
                            variant="destructive"
                            size="sm"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <Label className="text-gray-300 text-sm">השאלה</Label>
                            <Input
                              value={item.question}
                              onChange={(e) => updateFAQ(index, 'question', e.target.value)}
                              className="bg-gray-600 border-gray-500 text-white"
                            />
                          </div>
                          <div>
                            <Label className="text-gray-300 text-sm">התשובה</Label>
                            <Textarea
                              value={item.answer}
                              onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
                              className="bg-gray-600 border-gray-500 text-white"
                              rows={3}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button
                      onClick={addFAQ}
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      הוסף שאלה
                    </Button>
                  </div>
                </div>
              </>
            )}

            <div className="flex gap-2 pt-4">
              <Button
                onClick={() => {
                  setEditingSection(null);
                  toast({
                    title: "💾 השינויים נשמרו!",
                    description: "הסקשן עודכן בהצלחה"
                  });
                }}
                className="bg-green-600 hover:bg-green-700"
              >
                <Save className="w-4 h-4 mr-2" />
                שמור שינויים
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
    );
  };

  const sections = [
    { key: 'hero', title: 'סקשן ראשי (Hero)', icon: Star },
    { key: 'features', title: 'תכונות ויתרונות', icon: Star },
    { key: 'about', title: 'אודותינו', icon: Users },
    { key: 'emotional', title: 'סקשן רגשי', icon: Heart },
    { key: 'testimonials', title: 'ביקורות לקוחות', icon: Star },
    { key: 'faq', title: 'שאלות נפוצות', icon: HelpCircle }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Edit className="w-5 h-5 text-green-500" />
            עריכת סקשנים של הדף
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 text-sm mb-4">
            לחץ על כפתור העריכה ליד כל סקשן כדי לערוך את התוכן שלו
          </p>
        </CardContent>
      </Card>

      {sections.map(section => 
        renderSectionEditor(section.key, section.title, section.icon)
      )}
    </div>
  );
};

export default SectionEditor;
