
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Timer, Clock, MousePointer } from 'lucide-react';

interface PopupTimerEditorProps {
  onUpdate: (updates: any) => void;
  currentData: any;
}

export const PopupTimerEditor = ({ onUpdate, currentData }: PopupTimerEditorProps) => {
  const [popupData, setPopupData] = useState({
    exitIntent: currentData?.exitIntent || false,
    timeDelay: currentData?.timeDelay || 5,
    scrollTrigger: currentData?.scrollTrigger || 50,
    popupContent: currentData?.popupContent || '',
    popupTitle: currentData?.popupTitle || '',
    countdown: currentData?.countdown || false,
    countdownEndDate: currentData?.countdownEndDate || '',
    ...currentData
  });

  useEffect(() => {
    onUpdate(popupData);
  }, [popupData, onUpdate]);

  const handleInputChange = (field: string, value: any) => {
    setPopupData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Timer className="w-5 h-5" />
            פופ-אפים וטיימרים
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="exit-intent" className="text-white">Exit Intent Popup</Label>
              <p className="text-sm text-gray-400">פופ-אפ שיופיע כשהמשתמש עומד לעזוב</p>
            </div>
            <Switch
              id="exit-intent"
              checked={popupData.exitIntent}
              onCheckedChange={(checked) => handleInputChange('exitIntent', checked)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time-delay" className="text-white flex items-center gap-2">
              <Clock className="w-4 h-4" />
              עיכוב זמן (שניות)
            </Label>
            <Input
              id="time-delay"
              type="number"
              value={popupData.timeDelay}
              onChange={(e) => handleInputChange('timeDelay', parseInt(e.target.value))}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="scroll-trigger" className="text-white flex items-center gap-2">
              <MousePointer className="w-4 h-4" />
              טריגר גלילה (%)
            </Label>
            <Input
              id="scroll-trigger"
              type="number"
              value={popupData.scrollTrigger}
              onChange={(e) => handleInputChange('scrollTrigger', parseInt(e.target.value))}
              placeholder="50"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-title" className="text-white">כותרת הפופ-אפ</Label>
            <Input
              id="popup-title"
              value={popupData.popupTitle}
              onChange={(e) => handleInputChange('popupTitle', e.target.value)}
              placeholder="כותרת מושכת"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-content" className="text-white">תוכן הפופ-אפ</Label>
            <Textarea
              id="popup-content"
              value={popupData.popupContent}
              onChange={(e) => handleInputChange('popupContent', e.target.value)}
              placeholder="הודעה מעודדת פעולה..."
              className="bg-gray-700 border-gray-600 text-white"
              rows={3}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="countdown" className="text-white">טיימר ספירה לאחור</Label>
              <p className="text-sm text-gray-400">הצג ספירה לאחור למבצע</p>
            </div>
            <Switch
              id="countdown"
              checked={popupData.countdown}
              onCheckedChange={(checked) => handleInputChange('countdown', checked)}
            />
          </div>

          {popupData.countdown && (
            <div className="space-y-2">
              <Label htmlFor="countdown-date" className="text-white">תאריך סיום המבצע</Label>
              <Input
                id="countdown-date"
                type="datetime-local"
                value={popupData.countdownEndDate}
                onChange={(e) => handleInputChange('countdownEndDate', e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
