import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Share2, Facebook, Instagram, Twitter } from 'lucide-react';
import { TemplateData, SocialBarSection } from '@/types/template';

interface SocialBarEditorProps {
  template: TemplateData;
  onUpdate: (updates: Partial<SocialBarSection>) => void;
  onStyleUpdate?: (updates: any) => void;
}

export const SocialBarEditor = ({ template, onUpdate }: SocialBarEditorProps) => {
  const socialData = template.socialBar || {
    title: 'עקבו אחרינו',
    socialLinks: [],
    alignment: 'center' as const,
    showLabels: true
  };

  const [newLink, setNewLink] = useState({ platform: 'facebook' as const, url: '', label: '' });

  const platforms = [
    { value: 'facebook', label: 'Facebook', icon: Facebook },
    { value: 'instagram', label: 'Instagram', icon: Instagram },
    { value: 'twitter', label: 'Twitter', icon: Twitter }
  ];

  const handleAddLink = () => {
    if (newLink.url) {
      onUpdate({
        ...socialData,
        socialLinks: [...(socialData.socialLinks || []), newLink]
      });
      setNewLink({ platform: 'facebook' as const, url: '', label: '' });
    }
  };

  const handleRemoveLink = (index: number) => {
    onUpdate({
      ...socialData,
      socialLinks: socialData.socialLinks.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            רשתות חברתיות
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-200">כותרת</Label>
            <Input
              value={socialData.title || ''}
              onChange={(e) => onUpdate({ ...socialData, title: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="כותרת הרשתות החברתיות"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-slate-200">קישור חדש</Label>
            <Select 
              value={newLink.platform} 
              onValueChange={(value) => setNewLink({ ...newLink, platform: value as any })}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {platforms.map(platform => (
                  <SelectItem key={platform.value} value={platform.value}>
                    {platform.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="https://facebook.com/yourpage"
            />
            <Button onClick={handleAddLink} className="w-full bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              הוסף קישור
            </Button>
          </div>

          {socialData.socialLinks && socialData.socialLinks.length > 0 && (
            <div>
              <Label className="text-slate-200">קישורים קיימים</Label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {socialData.socialLinks.map((link, index) => {
                  const platform = platforms.find(p => p.value === link.platform);
                  const Icon = platform?.icon || Share2;
                  return (
                    <div key={index} className="flex items-center justify-between bg-slate-700/30 p-3 rounded">
                      <div className="flex items-center gap-2 flex-1">
                        <Icon className="w-4 h-4 text-slate-300" />
                        <div>
                          <p className="text-white text-sm font-medium">{platform?.label}</p>
                          <p className="text-slate-300 text-xs truncate max-w-32">{link.url}</p>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleRemoveLink(index)}
                        size="sm"
                        className="bg-red-600 hover:bg-red-700 text-white p-1 h-auto"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};