
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Users, Heart, Star, Clock, DollarSign, Award, Map, Video, Mail, Image, Briefcase } from "lucide-react";
import HeroEditor from "./HeroEditor";
import TestimonialsEditor from "./TestimonialsEditor";
import EditPopup from "./EditPopup";
import IconSelector from "./IconSelector";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Trash2, Plus } from "lucide-react";

interface SectionEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  formData: any;
  onFormDataChange: (newFormData: any) => void;
}

const SectionEditor = ({ content, onContentChange, formData, onFormDataChange }: SectionEditorProps) => {
  const [localAbout, setLocalAbout] = useState({
    aboutTitle: content.aboutTitle || '',
    aboutText: content.aboutText || ''
  });

  const [localEmotional, setLocalEmotional] = useState({
    title: content.emotional?.title || '',
    content: content.emotional?.content || ''
  });

  const handleAboutSave = () => {
    onContentChange({
      ...content,
      aboutTitle: localAbout.aboutTitle,
      aboutText: localAbout.aboutText
    });
  };

  const handleEmotionalSave = () => {
    onContentChange({
      ...content,
      emotional: {
        title: localEmotional.title,
        content: localEmotional.content
      }
    });
  };

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
          <p className="text-gray-300 text-sm mb-6">
            לחץ על כל סקשן כדי לערוך את התוכן שלו בפופאפ נוח ומתקדם
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <HeroEditor content={content} onContentChange={onContentChange} />
            
            <EditPopup
              title="עריכת סקשן אודותינו"
              triggerText="סקשן אודותינו"
              icon={Users}
              onSave={handleAboutSave}
            >
              <div className="space-y-4">
                <div>
                  <Label className="text-white font-semibold text-right block mb-2">כותרת הסקשן</Label>
                  <Input
                    value={localAbout.aboutTitle}
                    onChange={(e) => setLocalAbout({ ...localAbout, aboutTitle: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white text-right"
                    placeholder="הכנס כותרת לסקשן..."
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold text-right block mb-2">תוכן הסקשן</Label>
                  <Textarea
                    value={localAbout.aboutText}
                    onChange={(e) => setLocalAbout({ ...localAbout, aboutText: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white text-right"
                    rows={6}
                    placeholder="הכנס תוכן מפורט על העסק..."
                  />
                </div>
              </div>
            </EditPopup>

            <EditPopup
              title="עריכת סקשן רגשי"
              triggerText="סקשן רגשי"
              icon={Heart}
              onSave={handleEmotionalSave}
            >
              <div className="space-y-4">
                <div>
                  <Label className="text-white font-semibold text-right block mb-2">כותרת הסקשן</Label>
                  <Input
                    value={localEmotional.title}
                    onChange={(e) => setLocalEmotional({ ...localEmotional, title: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white text-right"
                    placeholder="הכנס כותרת רגשית..."
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold text-right block mb-2">תוכן הסקשן</Label>
                  <Textarea
                    value={localEmotional.content}
                    onChange={(e) => setLocalEmotional({ ...localEmotional, content: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white text-right"
                    rows={6}
                    placeholder="הכנס תוכן רגשי ומעורר השראה..."
                  />
                </div>
              </div>
            </EditPopup>
            
            <TestimonialsEditor content={content} onContentChange={onContentChange} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SectionEditor;
