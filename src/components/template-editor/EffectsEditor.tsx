
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import { TemplateData } from '@/types/template';

interface EffectsEditorProps {
  template: TemplateData;
  onUpdate: (section: string, effectType: string | null) => void;
}

const availableEffects = [
  // Basic Effects
  { id: 'fade-in', name: 'הופעה הדרגתית', description: 'אלמנטים מופיעים בהדרגה מלמטה', category: 'בסיסי' },
  { id: 'slide-up', name: 'החלקה מלמטה', description: 'אלמנטים מחליקים מלמטה למעלה', category: 'בסיסי' },
  { id: 'scale-in', name: 'הגדלה הדרגתית', description: 'אלמנטים מתחילים קטנים ומתרחבים', category: 'בסיסי' },
  { id: 'bounce-in', name: 'קפיצה פנימה', description: 'אלמנטים קופצים פנימה עם אפקט אלסטי', category: 'בסיסי' },
  { id: 'slide-right', name: 'החלקה מימין', description: 'אלמנטים מחליקים מצד ימין', category: 'בסיסי' },
  { id: 'flip', name: 'היפוך', description: 'אלמנטים מתהפכים בתלת מימד', category: 'בסיסי' },
  { id: 'zoom-in', name: 'זום פנימה', description: 'אלמנטים מתקרבים עם זום', category: 'בסיסי' },
  { id: 'float', name: 'ריחוף', description: 'אלמנטים מרחפים למעלה ולמטה', category: 'בסיסי' },
  { id: 'tilt', name: 'הטיה עדינה', description: 'אלמנטים מתנדנדים בעדינות', category: 'בסיסי' },
  { id: 'shimmer', name: 'ברק', description: 'אפקט ברק עובר על האלמנטים', category: 'בסיסי' },
  
  // 3D Effects
  { id: 'flip-3d', name: 'היפוך תלת מימדי', description: 'היפוך דרמטי בתלת מימד', category: 'תלת מימד' },
  { id: 'cube-rotate', name: 'סיבוב קוביה', description: 'סיבוב תלת מימדי כמו קוביה', category: 'תלת מימד' },
  { id: 'elastic-bounce', name: 'קפיצה אלסטית', description: 'קפיצה אלסטית מתקדמת', category: 'תלת מימד' },
  
  // Particle Effects
  { id: 'particles', name: 'חלקיקים', description: 'חלקיקים צבעוניים ברקע', category: 'חלקיקים' },
  { id: 'stardust', name: 'אבק כוכבים', description: 'אבק כוכבים מתנועע', category: 'חלקיקים' },
  { id: 'particle-float', name: 'חלקיקים מרחפים', description: 'חלקיקים שמרחפים ברקע', category: 'חלקיקים' },
  
  // Light Effects
  { id: 'aurora', name: 'זוהר צפוני', description: 'אפקט זוהר צפוני צבעוני', category: 'אור' },
  { id: 'light-beam', name: 'קרן אור', description: 'קרני אור שעוברות על הדף', category: 'אור' },
  { id: 'pulse-glow', name: 'זוהר פועם', description: 'זוהר שפועם סביב אלמנטים', category: 'אור' },
  { id: 'holographic', name: 'הולוגרפי', description: 'אפקט הולוגרפי משתנה צבעים', category: 'אור' },
  
  // Morphing Effects
  { id: 'morph', name: 'מורפינג צורות', description: 'צורות שמשתנות ומתמרפות', category: 'מורפינג' },
  { id: 'liquid-distort', name: 'עיוות נוזלי', description: 'עיוות נוזלי של אלמנטים', category: 'מורפינג' },
  
  // Interactive Effects
  { id: 'magnetic-pull', name: 'משיכה מגנטית', description: 'אפקט משיכה מגנטית', category: 'אינטראקטיבי' },
  { id: 'ripple', name: 'גלי מים', description: 'אפקט גלי מים', category: 'אינטראקטיבי' },
  
  // Motion Effects
  { id: 'vortex', name: 'מערבולת', description: 'אפקט מערבולת ספירלי', category: 'תנועה' },
  { id: 'spiral', name: 'ספירלה', description: 'תנועה ספירלית', category: 'תנועה' },
  { id: 'orbital', name: 'מסלול', description: 'תנועה במסלולים', category: 'תנועה' },
  
  // Color Effects
  { id: 'color-breathing', name: 'נשימת צבעים', description: 'צבעים שנושמים ומשתנים', category: 'צבע' },
  { id: 'rainbow-wave', name: 'גל קשת', description: 'גל קשת בענן צבעוני', category: 'צבע' },
  { id: 'gradient-shift', name: 'השתנות גרדיאנט', description: 'גרדיאנט שמשתנה בזמן אמת', category: 'צבע' },
  
  // Glass Effects
  { id: 'glass-morph', name: 'זכוכית מורפית', description: 'אפקט זכוכית מטושטשת משתנה', category: 'זכוכית' }
];

const sections = [
  { id: 'hero', name: 'הירו' },
  { id: 'emotional', name: 'רגש' },
  { id: 'features', name: 'תכונות' },
  { id: 'testimonials', name: 'עדויות' },
  { id: 'about', name: 'אודות' },
  { id: 'pricing', name: 'מחירים' },
  { id: 'faq', name: 'שאלות' },
  { id: 'finalCta', name: 'קריאה לפעולה' },
  { id: 'contact', name: 'יצירת קשר' }
];

const effectCategories = ['הכל', 'בסיסי', 'תלת מימד', 'חלקיקים', 'אור', 'מורפינג', 'אינטראקטיבי', 'תנועה', 'צבע', 'זכוכית'];

export const EffectsEditor = ({ template, onUpdate }: EffectsEditorProps) => {
  const getEffectForSection = (sectionId: string) => {
    return template.effects?.[sectionId] || null;
  };

  const handleEffectToggle = (sectionId: string, enabled: boolean) => {
    if (enabled) {
      // When enabling, set a default effect (first one in the list)
      onUpdate(sectionId, availableEffects[0].id);
    } else {
      // When disabling, remove the effect
      onUpdate(sectionId, null);
    }
  };

  const handleEffectChange = (sectionId: string, effectId: string) => {
    onUpdate(sectionId, effectId);
  };

  const getEffectsByCategory = (category: string) => {
    if (category === 'הכל') return availableEffects;
    return availableEffects.filter(effect => effect.category === category);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
          <h3 className="text-white text-lg font-semibold">עריכת אפקטים מתקדמים</h3>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="bg-gradient-to-r from-blue-800/50 to-purple-800/50 p-4 rounded-lg border border-blue-700/30">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-2">
            <span>✨</span>
            <span className="font-semibold">אפקטים מתקדמים זמינים!</span>
          </div>
          <div className="text-blue-200 text-xs">
            <p>• אפקטי תלת מימד ומורפינג</p>
            <p>• מערכות חלקיקים ואורות</p>
            <p>• אפקטים אינטראקטיביים וצבעוניים</p>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section) => {
            const currentEffect = getEffectForSection(section.id);
            const isEnabled = currentEffect !== null;
            const currentEffectData = availableEffects.find(e => e.id === currentEffect);
            
            return (
              <Card key={section.id} className="bg-gray-800 border-gray-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-base">{section.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      {isEnabled && currentEffectData && (
                        <div className="flex items-center gap-1">
                          <Badge variant="secondary" className="text-xs">
                            {currentEffectData.name}
                          </Badge>
                          <Badge variant="outline" className="text-xs text-blue-400 border-blue-400">
                            {currentEffectData.category}
                          </Badge>
                        </div>
                      )}
                      <Switch
                        checked={isEnabled}
                        onCheckedChange={(checked) => handleEffectToggle(section.id, checked)}
                      />
                    </div>
                  </div>
                </CardHeader>
                
                {isEnabled && (
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <Label className="text-white text-sm">בחר אפקט מתקדם:</Label>
                      <Select
                        value={currentEffect || ''}
                        onValueChange={(value) => handleEffectChange(section.id, value)}
                      >
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="בחר אפקט..." />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 z-[100] max-h-80">
                          {effectCategories.map((category) => {
                            const categoryEffects = getEffectsByCategory(category);
                            if (category === 'הכל' || categoryEffects.length === 0) return null;
                            
                            return (
                              <div key={category}>
                                <div className="px-2 py-1 text-xs font-semibold text-blue-400 bg-gray-700/50">
                                  {category}
                                </div>
                                {categoryEffects.map((effect) => (
                                  <SelectItem 
                                    key={effect.id} 
                                    value={effect.id}
                                    className="text-white hover:bg-gray-700 focus:bg-gray-700 bg-gray-800"
                                  >
                                    <div className="text-right w-full">
                                      <div className="font-medium text-white">{effect.name}</div>
                                      <div className="text-xs text-gray-400">{effect.description}</div>
                                    </div>
                                  </SelectItem>
                                ))}
                              </div>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      
                      {currentEffectData && (
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                          <div className="text-xs text-gray-300">
                            <span className="font-semibold">תיאור:</span> {currentEffectData.description}
                          </div>
                          <div className="text-xs text-blue-400 mt-1">
                            <span className="font-semibold">קטגוריה:</span> {currentEffectData.category}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
