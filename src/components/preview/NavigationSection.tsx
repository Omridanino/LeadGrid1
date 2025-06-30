
import { Home, User, Briefcase, MessageSquare } from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

interface NavigationSectionProps {
  formData?: {
    navigationStyle?: string;
  } | null;
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const NavigationSection = ({ formData, activeSection, onNavigate }: NavigationSectionProps) => {
  // Handle null or undefined formData
  if (!formData || formData.navigationStyle !== 'dock') {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <Dock>
        <DockItem>
          <DockIcon>
            <Home className="w-6 h-6" />
          </DockIcon>
          <DockLabel>בית</DockLabel>
        </DockItem>
        <DockItem>
          <DockIcon>
            <User className="w-6 h-6" />
          </DockIcon>
          <DockLabel>אודות</DockLabel>
        </DockItem>
        <DockItem>
          <DockIcon>
            <Briefcase className="w-6 h-6" />
          </DockIcon>
          <DockLabel>שירותים</DockLabel>
        </DockItem>
        <DockItem>
          <DockIcon>
            <MessageSquare className="w-6 h-6" />
          </DockIcon>
          <DockLabel>צור קשר</DockLabel>
        </DockItem>
      </Dock>
    </div>
  );
};
