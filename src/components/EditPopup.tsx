
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Plus, Trash2, Save, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EditPopupProps {
  title: string;
  triggerText: string;
  icon?: any;
  children: React.ReactNode;
  onSave?: () => void;
}

const EditPopup = ({ title, triggerText, icon: Icon = Edit, children, onSave }: EditPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    if (onSave) {
      onSave();
    }
    setIsOpen(false);
    toast({
      title: "✅ נשמר בהצלחה!",
      description: `${title} עודכן בהצלחה`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full justify-start bg-gray-800 border-gray-600 text-white hover:bg-gray-700 rounded-xl p-4 h-auto"
        >
          <Icon className="w-5 h-5 ml-2 text-purple-400" />
          <div className="text-right">
            <div className="font-semibold">{triggerText}</div>
            <div className="text-sm text-gray-400">לחץ לעריכה</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-purple-400 flex items-center gap-2">
            <Icon className="w-6 h-6" />
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {children}
          <div className="flex gap-3 pt-4 border-t border-gray-700">
            <Button 
              onClick={handleSave}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-xl"
            >
              <Save className="w-4 h-4 ml-2" />
              שמור שינויים
            </Button>
            <Button 
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 rounded-xl"
            >
              ביטול
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditPopup;
