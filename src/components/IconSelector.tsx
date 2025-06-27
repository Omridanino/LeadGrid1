
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Palette } from "lucide-react";

interface IconSelectorProps {
  selectedIcon: string;
  onIconSelect: (icon: string) => void;
  triggerClassName?: string;
}

const IconSelector = ({ selectedIcon, onIconSelect, triggerClassName }: IconSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Liquid Glass Icon Component
  const LiquidGlassIconButton = ({ icon, isSelected, onClick }: { icon: string, isSelected: boolean, onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`relative group p-3 rounded-lg border transition-all flex items-center justify-center overflow-hidden ${
        isSelected 
          ? 'border-purple-400' 
          : 'border-gray-600 hover:border-purple-400'
      }`}
      style={{
        background: isSelected 
          ? `linear-gradient(135deg, 
              rgba(156, 64, 255, 0.3) 0%,
              rgba(107, 115, 255, 0.2) 50%,
              rgba(255, 107, 157, 0.3) 100%)`
          : `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.05) 0%,
              rgba(255, 255, 255, 0.02) 50%,
              rgba(255, 255, 255, 0.05) 100%)`,
        backdropFilter: 'blur(10px)',
        boxShadow: isSelected
          ? `inset 0 1px 0 rgba(255, 255, 255, 0.2),
             0 8px 25px rgba(107, 115, 255, 0.3),
             0 0 15px rgba(156, 64, 255, 0.2)`
          : `inset 0 1px 0 rgba(255, 255, 255, 0.1),
             0 4px 15px rgba(0, 0, 0, 0.2)`,
      }}
      title={icon}
    >
      {/* Reflection effect */}
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.15) 0%,
            transparent 30%,
            transparent 70%,
            rgba(255, 255, 255, 0.05) 100%)`,
        }}
      />
      
      {/* Shine effect on hover */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(45deg, 
            transparent 30%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 70%)`,
          transform: 'translateX(-100%)',
        }}
      />
      
      <i 
        className={`ri-${icon} text-xl text-white relative z-10`}
        style={{
          filter: isSelected 
            ? 'drop-shadow(0 0 8px rgba(156, 64, 255, 0.8))'
            : 'drop-shadow(0 0 4px rgba(107, 115, 255, 0.3))',
        }}
      />
    </button>
  );

  const iconCategories = {
    'עסקים מתקדמים': [
      'briefcase-line', 'building-line', 'office-building-line', 'store-line', 
      'bank-line', 'money-dollar-circle-line', 'coins-line', 'trophy-line'
    ],
    'טכנולוגיה וחדשנות': [
      'computer-line', 'smartphone-line', 'code-line', 'code-box-line',
      'rocket-line', 'settings-line', 'shield-check-line', 'wifi-line'
    ],
    'שירותים מקצועיים': [
      'customer-service-line', 'headphone-line', 'team-line', 'user-line',
      'user-settings-line', 'user-star-line', 'handshake-line', 'thumb-up-line'
    ],
    'תקשורת דיגיטלית': [
      'mail-line', 'phone-line', 'message-line', 'chat-line',
      'video-line', 'megaphone-line', 'notification-line', 'send-plane-line'
    ],
    'ניהול ותהליכים': [
      'time-line', 'timer-line', 'calendar-line', 'clock-line',
      'speed-line', 'play-circle-line', 'refresh-line', 'check-double-line'
    ],
    'עיצוב ויצירתיות': [
      'palette-line', 'paint-brush-line', 'image-line', 'camera-line',
      'edit-line', 'pencil-line', 'scissors-line', 'magic-line'
    ],
    'בריאות ורווחה': [
      'heart-line', 'health-book-line', 'medicine-bottle-line', 'hospital-line',
      'stethoscope-line', 'first-aid-kit-line', 'mental-health-line', 'shield-cross-line'
    ],
    'חינוך והכשרה': [
      'book-line', 'graduation-cap-line', 'school-line', 'pencil-ruler-line',
      'lightbulb-line', 'mind-map', 'presentation-line', 'file-text-line'
    ],
    'אמנות ובידור': [
      'music-line', 'film-line', 'camera-2-line', 'mic-line',
      'gamepad-line', 'tv-line', 'headphone-line', 'radio-line'
    ],
    'ספורט ואורח חיים': [
      'run-line', 'football-line', 'basketball-line', 'bike-line',
      'swimming-line', 'trophy-line', 'medal-line', 'boxing-line'
    ],
    'קולינריה ואירוח': [
      'restaurant-line', 'cake-line', 'drink-line', 'wine-line',
      'pizza-line', 'cup-line', 'bowl-line', 'knife-line'
    ],
    'תחבורה ולוגיסטיקה': [
      'car-line', 'bus-line', 'plane-line', 'ship-line',
      'train-line', 'bike-line', 'taxi-line', 'gas-station-line'
    ]
  };

  const allIcons = Object.values(iconCategories).flat();

  const filteredIcons = searchTerm 
    ? allIcons.filter(icon => icon.includes(searchTerm.toLowerCase()))
    : allIcons;

  const handleIconSelect = (icon: string) => {
    onIconSelect(icon);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className={`gap-2 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 ${triggerClassName}`}
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.05) 0%,
              rgba(255, 255, 255, 0.02) 100%)`,
            boxShadow: `
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 4px 15px rgba(0, 0, 0, 0.2)
            `,
          }}
        >
          <i className={`ri-${selectedIcon || 'palette-line'} text-lg`}></i>
          בחר אייקון מקצועי
        </Button>
      </DialogTrigger>
      <DialogContent 
        className="max-w-4xl max-h-[80vh] overflow-y-auto border-gray-700 text-white"
        style={{
          background: `linear-gradient(135deg, 
            rgba(17, 24, 39, 0.95) 0%,
            rgba(31, 41, 55, 0.95) 100%)`,
          backdropFilter: 'blur(20px)',
          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 25px 50px rgba(0, 0, 0, 0.5)
          `,
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-purple-400 flex items-center gap-2">
            <div className="w-6 h-6">
              <div 
                className="w-full h-full rounded-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(156, 64, 255, 0.3) 0%,
                    rgba(107, 115, 255, 0.2) 100%)`,
                  backdropFilter: 'blur(10px)',
                  boxShadow: `0 0 15px rgba(156, 64, 255, 0.3)`,
                }}
              >
                <Palette className="w-4 h-4 text-white" />
              </div>
            </div>
            בחירת אייקון מקצועי
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="חפש אייקון..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 border-gray-600 text-white"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.05) 0%,
                  rgba(255, 255, 255, 0.02) 100%)`,
                backdropFilter: 'blur(10px)',
              }}
            />
          </div>

          {/* Icon Grid */}
          {searchTerm ? (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">תוצאות חיפוש</h3>
              <div className="grid grid-cols-8 gap-3">
                {filteredIcons.map((icon) => (
                  <LiquidGlassIconButton
                    key={icon}
                    icon={icon}
                    isSelected={selectedIcon === icon}
                    onClick={() => handleIconSelect(icon)}
                  />
                ))}
              </div>
            </div>
          ) : (
            Object.entries(iconCategories).map(([category, icons]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-4 text-white">{category}</h3>
                <div className="grid grid-cols-8 gap-3">
                  {icons.map((icon) => (
                    <LiquidGlassIconButton
                      key={icon}
                      icon={icon}
                      isSelected={selectedIcon === icon}
                      onClick={() => handleIconSelect(icon)}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default IconSelector;
