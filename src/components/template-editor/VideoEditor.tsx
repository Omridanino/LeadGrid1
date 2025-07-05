import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Video, Youtube, Play } from 'lucide-react';
import { TemplateData, VideoSection } from '@/types/template';

interface VideoEditorProps {
  template: TemplateData;
  onUpdate: (updates: Partial<VideoSection>) => void;
  onStyleUpdate?: (updates: any) => void;
}

export const VideoEditor = ({ template, onUpdate }: VideoEditorProps) => {
  const videoData = template.video || {
    title: 'צפה בוידאו שלנו',
    subtitle: 'למידע נוסף על השירותים שלנו',
    videoUrl: '',
    videoType: 'youtube' as const,
    autoplay: false,
    controls: true
  };

  const getVideoId = (url: string, type: string) => {
    if (type === 'youtube') {
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
      return match ? match[1] : '';
    } else if (type === 'vimeo') {
      const match = url.match(/vimeo\.com\/(\d+)/);
      return match ? match[1] : '';
    }
    return '';
  };

  const getEmbedUrl = (url: string, type: string) => {
    const videoId = getVideoId(url, type);
    if (!videoId) return '';
    
    if (type === 'youtube') {
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (type === 'vimeo') {
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  const videoTypeOptions = [
    { value: 'youtube', label: 'YouTube', icon: Youtube },
    { value: 'vimeo', label: 'Vimeo', icon: Video },
    { value: 'direct', label: 'קישור ישיר', icon: Play }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Video className="w-5 h-5" />
            הגדרות וידאו
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-200">תווית (Badge)</Label>
            <Input
              value={videoData.badge || ''}
              onChange={(e) => onUpdate({ ...videoData, badge: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="תווית קטנה מעל הכותרת"
            />
          </div>

          <div>
            <Label className="text-slate-200">כותרת</Label>
            <Input
              value={videoData.title || ''}
              onChange={(e) => onUpdate({ ...videoData, title: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="כותרת הוידאו"
            />
          </div>

          <div>
            <Label className="text-slate-200">תיאור</Label>
            <Textarea
              value={videoData.subtitle || ''}
              onChange={(e) => onUpdate({ ...videoData, subtitle: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="תיאור הוידאו"
              rows={3}
            />
          </div>

          <div>
            <Label className="text-slate-200">סוג הוידאו</Label>
            <Select 
              value={videoData.videoType} 
              onValueChange={(value) => onUpdate({ ...videoData, videoType: value as any })}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {videoTypeOptions.map(option => {
                  const Icon = option.icon;
                  return (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        {option.label}
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-slate-200">
              {videoData.videoType === 'youtube' ? 'קישור YouTube' :
               videoData.videoType === 'vimeo' ? 'קישור Vimeo' :
               'קישור ישיר לוידאו'}
            </Label>
            <Input
              value={videoData.videoUrl}
              onChange={(e) => onUpdate({ ...videoData, videoUrl: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder={
                videoData.videoType === 'youtube' ? 'https://www.youtube.com/watch?v=...' :
                videoData.videoType === 'vimeo' ? 'https://vimeo.com/...' :
                'https://example.com/video.mp4'
              }
            />
          </div>

          <div>
            <Label className="text-slate-200">תמונה מייצגת (Thumbnail)</Label>
            <Input
              value={videoData.thumbnail || ''}
              onChange={(e) => onUpdate({ ...videoData, thumbnail: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="קישור לתמונה מייצגת (אופציונלי)"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="autoplay"
                checked={videoData.autoplay || false}
                onCheckedChange={(checked) => onUpdate({ ...videoData, autoplay: !!checked })}
              />
              <Label htmlFor="autoplay" className="text-slate-200">
                ניגון אוטומטי
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="controls"
                checked={videoData.controls !== false}
                onCheckedChange={(checked) => onUpdate({ ...videoData, controls: !!checked })}
              />
              <Label htmlFor="controls" className="text-slate-200">
                הצג כפתורי בקרה
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview */}
      {videoData.videoUrl && (
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">תצוגה מקדימה</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              {videoData.badge && (
                <div className="inline-block px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                  {videoData.badge}
                </div>
              )}
              {videoData.title && (
                <h3 className="text-2xl font-bold text-white">
                  {videoData.title}
                </h3>
              )}
              {videoData.subtitle && (
                <p className="text-slate-300">
                  {videoData.subtitle}
                </p>
              )}
              <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden">
                {videoData.videoType === 'direct' ? (
                  <video 
                    controls={videoData.controls}
                    autoPlay={videoData.autoplay}
                    poster={videoData.thumbnail}
                    className="w-full h-full"
                  >
                    <source src={videoData.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <iframe
                    src={getEmbedUrl(videoData.videoUrl, videoData.videoType)}
                    className="w-full h-full"
                    allowFullScreen
                    title="Video Preview"
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};