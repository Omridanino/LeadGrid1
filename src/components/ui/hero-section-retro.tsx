
import * as React from "react"
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

interface HeroSectionRetroProps {
  formData: any;
  currentColors: any;
  content?: any;
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  )
}

export const HeroSectionRetro = ({ formData, currentColors, content }: HeroSectionRetroProps) => {
    // Use content values first, then formData, then defaults
    const businessName = content?.headline || formData?.businessName || "שם העסק"
    const businessStory = content?.subheadline || formData?.businessStory || "בונים מוצרים לכולם"
    const subtitle = content?.description || formData?.businessTitle || "עיצוב הפרויקטים שלכם מהר יותר עם הערכת UI הגדולה ב-Figma"
    const description = formData?.mainServices || "אנחנו מתמחים בפתרונות מקצועיים לעסקים המחפשים חדשנות וטכנולוגיה מתקדמת"
    const badgeText = content?.badge || ""
    
    // Enhanced styling functions with ALL new colors
    const getTextStyleClasses = (style: string) => {
      console.log('HeroSectionRetro - getTextStyleClasses called with:', style);
      
      if (!style || style === 'default') return "text-gray-600 dark:text-gray-400";
      
      switch (style) {
        // Basic colors
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
        
        // Gradient colors
        case "gradient-gold-text":
        case "גרדיאנט זהב":
          return "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent";
        case "gradient-purple-text":
        case "גרדיאנט סגול":
          return "bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent";
        case "gradient-blue-text":
        case "גרדיאנט כחול":
          return "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";
        case "gradient-green-text":
        case "גרדיאנט ירוק":
          return "bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent";
        case "gradient-red-text":
        case "גרדיאנט אדום":
          return "bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent";
        case "gradient-cyan-text":
        case "גרדיאנט ציאן":
          return "bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent";
        case "gradient-rainbow-text":
        case "גרדיאנט קשת":
          return "bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent";
        case "gradient-blue-ocean":
        case "גרדיאנט כחול אוקיינוס":
          return "bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent";
        case "gradient-green-nature":
        case "גרדיאנט ירוק טבע":
          return "bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent";
        case "gradient-red-fire":
        case "גרדיאנט אדום אש":
          return "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent";
        case "gradient-pink-sunset":
        case "גרדיאנט ורוד שקיעה":
          return "bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent";
        case "gradient-gold-black":
        case "גרדיאנט זהב שחור":
          return "bg-gradient-to-r from-yellow-400 to-black bg-clip-text text-transparent";
        case "gradient-gold-white":
        case "גרדיאנט זהב לבן":
          return "bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent";
        case "gradient-purple-tech":
        case "גרדיאנט סגול טכנולוגי":
          return "bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent";
        
        // Neon colors
        case "neon-blue":
        case "נאון כחול":
          return "text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]";
        case "neon-green":
        case "נאון ירוק":
          return "text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]";
        case "neon-purple":
        case "נאון סגול":
          return "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]";
        case "neon-pink":
        case "נאון ורוד":
          return "text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]";
        
        default: 
          console.log('HeroSectionRetro - Unknown text style, using default:', style);
          return "text-gray-600 dark:text-gray-400";
      }
    };

    const getBadgeStyleClasses = (style: string) => {
      console.log('HeroSectionRetro - getBadgeStyleClasses called with:', style);
      
      if (!style || style === 'default') return "bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5";
      
      switch (style) {
        case "black-on-white":
        case "שחור על לבן":
          return "bg-white text-black border border-black";
        case "white-on-black":
        case "לבן על שחור":
          return "bg-black text-white border border-white";
        case "gradient-gold-black":
        case "גרדיאנט זהב-שחור":
          return "bg-gradient-to-r from-yellow-400 to-black text-white border-0";
        case "gradient-gold-white":
        case "גרדיאנט זהב-לבן":
          return "bg-gradient-to-r from-yellow-400 to-white text-black border-0";
        case "gradient-purple-tech":
        case "גרדיאנט סגול טכנולוגי":
          return "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-0";
        case "gradient-blue-ocean":
        case "גרדיאנט כחול אוקיינוס":
          return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0";
        case "gradient-green-nature":
        case "גרדיאנט ירוק טבע":
          return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0";
        case "gradient-red-fire":
        case "גרדיאנט אדום אש":
          return "bg-gradient-to-r from-red-500 to-orange-500 text-white border-0";
        case "gradient-pink-sunset":
        case "גרדיאנט ורוד שקיעה":
          return "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0";
        case "neon-blue":
        case "נאון כחול":
          return "bg-blue-600 text-white border-2 border-blue-400 shadow-lg shadow-blue-400/50";
        case "neon-green":
        case "נאון ירוק":
          return "bg-green-600 text-white border-2 border-green-400 shadow-lg shadow-green-400/50";
        case "neon-purple":
        case "נאון סגול":
          return "bg-purple-600 text-white border-2 border-purple-400 shadow-lg shadow-purple-400/50";
        case "neon-pink":
        case "נאון ורוד":
          return "bg-pink-600 text-white border-2 border-pink-400 shadow-lg shadow-pink-400/50";
        case "glass-dark":
        case "זכוכית כהה":
          return "bg-black/20 text-white border border-white/30 backdrop-blur-sm";
        case "glass-light":
        case "זכוכית בהירה":
          return "bg-white/20 text-black border border-black/30 backdrop-blur-sm";
        default: 
          console.log('HeroSectionRetro - Unknown badge style, using default:', style);
          return "bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5";
      }
    };

    const getBackgroundClasses = (style: string) => {
      console.log('HeroSectionRetro - getBackgroundClasses called with:', style);
      
      if (!style || style === 'default') return "";
      
      switch (style) {
        case "dark":
          return "bg-gray-950";
        case "light":
          return "bg-white";
        case "gradient-blue":
          return "bg-gradient-to-br from-blue-950 to-blue-900";
        case "gradient-purple":
          return "bg-gradient-to-br from-purple-950 to-purple-900";
        case "gradient-green":
          return "bg-gradient-to-br from-green-950 to-green-900";
        case "gradient-orange":
          return "bg-gradient-to-br from-orange-950 to-orange-900";
        case "gradient-pink":
          return "bg-gradient-to-br from-pink-950 to-pink-900";
        case "tech-dark":
          return "bg-black";
        case "minimal-light":
          return "bg-gray-100";
        default: 
          console.log('HeroSectionRetro - Unknown background style, using default:', style);
          return "";
      }
    };

    const getButtonStyleClasses = (style: string) => {
      console.log('HeroSectionRetro - getButtonStyleClasses called with:', style);
      
      if (!style || style === 'default') return "bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30";
      
      switch (style) {
        case "black-on-white":
        case "שחור על לבן":
          return "bg-white text-black border border-black hover:bg-gray-100";
        case "white-on-black":
        case "לבן על שחור":
          return "bg-black text-white border border-white hover:bg-gray-900";
        case "gradient-gold-black":
        case "גרדיאנט זהב-שחור":
          return "bg-gradient-to-r from-yellow-400 to-black text-white border-0 hover:from-yellow-500 hover:to-gray-900";
        case "gradient-gold-white":
        case "גרדיאנט זהב-לבן":
          return "bg-gradient-to-r from-yellow-400 to-white text-black border-0 hover:from-yellow-500 hover:to-gray-100";
        case "gradient-purple-tech":
        case "גרדיאנט סגול טכנולוגי":
          return "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-0 hover:from-purple-700 hover:to-blue-600";
        case "gradient-blue-ocean":
        case "גרדיאנט כחול אוקיינוס":
          return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:from-blue-600 hover:to-cyan-600";
        case "gradient-green-nature":
        case "גרדיאנט ירוק טבע":
          return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 hover:from-green-600 hover:to-emerald-600";
        case "gradient-red-fire":
        case "גרדיאנט אדום אש":
          return "bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 hover:from-red-600 hover:to-orange-600";
        case "gradient-pink-sunset":
        case "גרדיאנט ורוד שקיעה":
          return "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 hover:from-pink-600 hover:to-rose-600";
        case "neon-blue":
        case "נאון כחול":
          return "bg-blue-600 text-white border-2 border-blue-400 shadow-lg shadow-blue-400/50 hover:bg-blue-700";
        case "neon-green":
        case "נאון ירוק":
          return "bg-green-600 text-white border-2 border-green-400 shadow-lg shadow-green-400/50 hover:bg-green-700";
        case "neon-purple":
        case "נאון סגול":
          return "bg-purple-600 text-white border-2 border-purple-400 shadow-lg shadow-purple-400/50 hover:bg-purple-700";
        case "neon-pink":
        case "נאון ורוד":
          return "bg-pink-600 text-white border-2 border-pink-400 shadow-lg shadow-pink-400/50 hover:bg-pink-700";
        case "glass-dark":
        case "זכוכית כהה":
          return "bg-black/20 text-white border border-white/30 backdrop-blur-sm hover:bg-black/30";
        case "glass-light":
        case "זכוכית בהירה":
          return "bg-white/20 text-black border border-black/30 backdrop-blur-sm hover:bg-white/30";
        default: 
          console.log('HeroSectionRetro - Unknown button style, using default:', style);
          return "bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30";
      }
    };
    
    return (
        <div className={`relative ${getBackgroundClasses(content?.backgroundStyle)}`} dir="rtl">
            <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            <section className="relative max-w-full mx-auto z-1">
                <RetroGrid />
                <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
                    <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
                        {badgeText && (
                            <h1 className={`text-sm group font-geist mx-auto px-5 py-2 rounded-3xl w-fit ${getBadgeStyleClasses(content?.badgeStyle)} ${getTextStyleClasses(content?.badgeTextStyle)}`}>
                                {badgeText}
                                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                            </h1>
                        )}
                        <h2 className={`text-4xl tracking-tighter font-geist mx-auto md:text-6xl ${getTextStyleClasses(content?.headlineStyle) || 'bg-clip-text text-transparent bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]'}`}>
                            {businessName}
                            <br />
                            <span className={`${getTextStyleClasses(content?.subheadlineStyle) || 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200'}`}>
                                {businessStory}
                            </span>
                        </h2>
                        {subtitle && (
                            <h3 className={`text-xl md:text-2xl ${getTextStyleClasses(content?.descriptionStyle) || 'text-purple-400'}`}>
                                {subtitle}
                            </h3>
                        )}
                        <p className={`max-w-2xl mx-auto ${getTextStyleClasses(content?.descriptionStyle) || 'text-gray-600 dark:text-gray-300'}`}>
                            {description}
                        </p>
                        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                                    <a
                                        href="#"
                                        className={`inline-flex rounded-full text-center group items-center w-full justify-center transition-all sm:w-auto py-4 px-10 ${getButtonStyleClasses(content?.buttons?.[0]?.style)} ${content?.buttons?.[0]?.textStyle && content.buttons[0].textStyle !== 'default' ? getTextStyleClasses(content.buttons[0].textStyle) : ''}`}
                                    >
                                        {content?.buttons?.[0]?.text || "התחל עכשיו"}
                                    </a>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="mt-32 mx-10 relative z-10">
                        <div className="w-full shadow-lg rounded-lg border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black p-8">
                            <div className="space-y-4">
                                <div className="h-4 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 rounded w-3/4"></div>
                                <div className="h-4 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 rounded w-1/2"></div>
                                <div className="h-32 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-lg"></div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-20 bg-purple-100 dark:bg-purple-800 rounded"></div>
                                    <div className="h-20 bg-pink-100 dark:bg-pink-800 rounded"></div>
                                    <div className="h-20 bg-purple-100 dark:bg-purple-800 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
