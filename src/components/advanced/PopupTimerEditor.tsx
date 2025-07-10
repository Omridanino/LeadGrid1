
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Timer, Zap, Plus, Trash2 } from 'lucide-react';

interface PopupTimerEditorProps {
  onUpdate: (updates: any) => void;
  currentSettings: any;
}

export const PopupTimerEditor = ({ onUpdate, currentSettings }: PopupTimerEditorProps) => {
  const [popups, setPopups] = useState(currentSettings?.popups || []);

  const addPopup = () => {
    const newPopup = {
      id: Date.now(),
      type: 'exit-intent',
      title: 'חכה רגע!',
      message: 'קבל הנחה של 20% לפני שאתה עוזב',
      buttonText: 'קבל הנחה',
      delay: 5000,
      enabled: true
    };
    const updatedPopups = [...popups, newPopup];
    setPopups(updatedPopups);
    onUpdate({ popups: updatedPopups });
  };

  const updatePopup = (id: number, updates: any) => {
    const updatedPopups = popups.map((popup: any) => 
      popup.id === id ? { ...popup, ...updates } : popup
    );
    setPopups(updatedPopups);
    onUpdate({ popups: updatedPopups });
  };

  const removePopup = (id: number) => {
    const updatedPopups = popups.filter((popup: any) => popup.id !== id);
    setPopups(updatedPopups);
    onUpdate({ popups: updatedPopups });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Timer className="w-5 h-5 text-orange-500" />
            פופ-אפים וטיימרים
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={addPopup} className="bg-orange-600 hover:bg-orange-700 w-full">
            <Plus className="w-4 h-4 mr-1" />
            הוסף פופ-אפ חדש
          </Button>

          {popups.map((popup: any) => (
            <Card key={popup.id} className="bg-gray-700 border-gray-600">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={popup.enabled}
                      onCheckedChange={(checked) => updatePopup(popup.id, { enabled: checked })}
                    />
                    <Label className="text-white">פופ-אפ פעיל</Label>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removePopup(popup.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div>
                  <Label className="text-white">סוג פופ-אפ</Label>
                  <Select 
                    value={popup.type} 
                    onValueChange={(value) => updatePopup(popup.id, { type: value })}
                  >
                    <SelectTrigger className="bg-gray-600 border-gray-500 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-600 border-gray-500">
                      <SelectItem value="exit-intent" className="text-white">Exit Intent</SelectItem>
                      <SelectItem value="time-delay" className="text-white">עיכוב זמן</SelectItem>
                      <SelectItem value="scroll-percentage" className="text-white">אחוז גלילה</SelectItem>
                      <SelectItem value="countdown" className="text-white">ספירה לאחור</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white">כותרת</Label>
                  <Input
                    value={popup.title}
                    onChange={(e) => updatePopup(popup.id, { title: e.target.value })}
                    className="bg-gray-600 border-gray-500 text-white"
                  />
                </div>

                <div>
                  <Label className="text-white">הודעה</Label>
                  <Textarea
                    value={popup.message}
                    onChange={(e) => updatePopup(popup.id, { message: e.target.value })}
                    className="bg-gray-600 border-gray-500 text-white"
                    rows={2}
                  />
                </div>

                <div>
                  <Label className="text-white">טקסט כפתור</Label>
                  <Input
                    value={popup.buttonText}
                    onChange={(e) => updatePopup(popup.id, { buttonText: e.target.value })}
                    className="bg-gray-600 border-gray-500 text-white"
                  />
                </div>

                {popup.type === 'time-delay' && (
                  <div>
                    <Label className="text-white">עיכוב (אלפיות שנייה)</Label>
                    <Input
                      type="number"
                      value={popup.delay}
                      onChange={(e) => updatePopup(popup.id, { delay: parseInt(e.target.value) })}
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                )}

                {popup.type === 'scroll-percentage' && (
                  <div>
                    <Label className="text-white">אחוז גלילה (%)</Label>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={popup.scrollPercentage || 50}
                      onChange={(e) => updatePopup(popup.id, { scrollPercentage: parseInt(e.target.value) })}
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
