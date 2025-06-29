import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeroSectionLampProps {
  formData: any;
  currentColors: any;
  content?: any;
}

export const HeroSectionLamp: React.FC<HeroSectionLampProps> = ({
  formData,
  currentColors,
  content,
}) => {
  const [menuState, setMenuState] = React.useState(false);

  // Use content values first, then formData, then defaults
  const businessName = content?.headline || formData?.businessName || "שם העסק";
  const businessStory = content?.subheadline || formData?.businessStory || "בונים פתרונות בדרכך הנכונה";
  const mainServices =
    content?.description ||
    formData?.mainServices ||
    "טכנולוגיה מתקדמת עם עיצוב מרהיב ותוכן איכותי שיקדם את העסק שלכם קדימה";
  const badgeText = content?.badge || "";

  // פונקציה להחלת סגנון טקסט
  const getTextStyleClasses = (style: string) => {
    if (!style || style === "default") return "text-slate-300";
    if (style.startsWith("custom-")) {
      const color = style.replace("custom-", "");
      if (color.startsWith("gradient-")) {
        const gradientParts = color.replace("gradient-", "").split("-");
        if (gradientParts.length >= 2) {
          return `bg-gradient-to-r from-[${gradientParts[0]}] to-[${gradientParts[1]}] bg-clip-text text-transparent`;
        }
      } else if (color.startsWith("#")) {
        return `text-[${color}]`;
      }
    }
    switch (style) {
      case "black-text":
      case "שחור":
        return "text-black";
      case "white-text":
      case "לבן":
        return "text-white";
      case "gold-text":
      case "זהב":
        return "text-yellow-400";
      case "silver-text":
      case "כסף":
        return "text-gray-300";
      case "blue-text":
      case "כחול":
        return "text-blue-400";
      case "green-text":
      case "ירוק":
        return "text-green-400";
      case "red-text":
      case "אדום":
        return "text-red-400";
      case "purple-text":
      case "סגול":
        return "text-purple-400";
      case "pink-text":
      case "ורוד":
        return "text-pink-400";
      case "cyan-text":
      case "ציאן":
        return "text-cyan-400";
      // Gradients
      case "gradient-gold-text":
      case "גרדיאנט זהב":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent";
      case "gradient-blue-text":
        return "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";
      case "gradient-purple-text":
        return "bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent";
      default:
        return "text-slate-300";
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center p-12">
      <div className="flex flex-row items-center">
        <Button onClick={() => setMenuState(!menuState)}>
          {menuState ? <X /> : <Menu />}
        </Button>
        {badgeText && <span className="ml-2 badge bg-yellow-200 text-yellow-700">{badgeText}</span>}
      </div>
      <h1 className={cn("text-4xl font-bold mt-4", getTextStyleClasses(content?.headlineColor))}>
        {businessName}
      </h1>
      <h2 className={cn("text-xl mt-2", getTextStyleClasses(content?.subheadlineColor))}>
        {businessStory}
      </h2>
      <p className={cn("mt-4 max-w-2xl mx-auto", getTextStyleClasses(content?.descriptionColor))}>
        {mainServices}
      </p>
    </div>
  );
};