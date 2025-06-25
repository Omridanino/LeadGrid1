
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

  const iconCategories = {
    'עסקים': [
      'briefcase-line', 'building-line', 'office-building-line', 'store-line', 
      'bank-line', 'money-dollar-circle-line', 'coins-line', 'trophy-line'
    ],
    'טכנולוגיה': [
      'computer-line', 'smartphone-line', 'code-line', 'code-box-line',
      'rocket-line', 'settings-line', 'shield-check-line', 'wifi-line'
    ],
    'שירותים': [
      'customer-service-line', 'headphone-line', 'team-line', 'user-line',
      'user-settings-line', 'user-star-line', 'handshake-line', 'thumb-up-line'
    ],
    'תקשורת': [
      'mail-line', 'phone-line', 'message-line', 'chat-line',
      'video-line', 'megaphone-line', 'notification-line', 'send-plane-line'
    ],
    'זמן ותהליכים': [
      'time-line', 'timer-line', 'calendar-line', 'clock-line',
      'speed-line', 'play-circle-line', 'refresh-line', 'check-double-line'
    ],
    'עיצוב ויצירה': [
      'palette-line', 'paint-brush-line', 'image-line', 'camera-line',
      'edit-line', 'pencil-line', 'scissors-line', 'magic-line'
    ],
    'בריאות ורפואה': [
      'heart-line', 'health-book-line', 'medicine-bottle-line', 'hospital-line',
      'stethoscope-line', 'first-aid-kit-line', 'mental-health-line', 'shield-cross-line'
    ],
    'חינוך והוראה': [
      'book-line', 'graduation-cap-line', 'school-line', 'pencil-ruler-line',
      'lightbulb-line', 'mind-map', 'presentation-line', 'file-text-line'
    ],
    'אמנות ובידור': [
      'music-line', 'film-line', 'camera-2-line', 'mic-line',
      'gamepad-line', 'tv-line', 'headphone-line', 'radio-line'
    ],
    'ספורט וכושר': [
      'run-line', 'football-line', 'basketball-line', 'bike-line',
      'swimming-line', 'trophy-line', 'medal-line', 'boxing-line'
    ],
    'מסעדות ואוכל': [
      'restaurant-line', 'cake-line', 'drink-line', 'wine-line',
      'pizza-line', 'cup-line', 'bowl-line', 'knife-line'
    ],
    'תחבורה ונסיעות': [
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
          className={`gap-2 ${triggerClassName}`}
        >
          <i className={`ri-${selectedIcon || 'palette-line'} text-lg`}></i>
          בחר אייקון
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-purple-400 flex items-center gap-2">
            <Palette className="w-6 h-6" />
            בחירת אייקון
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
              className="pr-10 bg-gray-800 border-gray-600 text-white"
            />
          </div>

          {/* Icon Grid */}
          {searchTerm ? (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">תוצאות חיפוש</h3>
              <div className="grid grid-cols-8 gap-3">
                {filteredIcons.map((icon) => (
                  <button
                    key={icon}
                    onClick={() => handleIconSelect(icon)}
                    className={`p-3 rounded-lg border transition-all hover:bg-purple-600 flex items-center justify-center ${
                      selectedIcon === icon 
                        ? 'bg-purple-600 border-purple-400' 
                        : 'bg-gray-800 border-gray-600 hover:border-purple-400'
                    }`}
                    title={icon}
                  >
                    <i className={`ri-${icon} text-xl text-white`}></i>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            Object.entries(iconCategories).map(([category, icons]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-4 text-white">{category}</h3>
                <div className="grid grid-cols-8 gap-3">
                  {icons.map((icon) => (
                    <button
                      key={icon}
                      onClick={() => handleIconSelect(icon)}
                      className={`p-3 rounded-lg border transition-all hover:bg-purple-600 flex items-center justify-center ${
                        selectedIcon === icon 
                          ? 'bg-purple-600 border-purple-400' 
                          : 'bg-gray-800 border-gray-600 hover:border-purple-400'
                      }`}
                      title={icon}
                    >
                      <i className={`ri-${icon} text-xl text-white`}></i>
                    </button>
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
