import * as React from "react"
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronRight, Zap } from 'lucide-react'

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
    // Helper function to get text style classes
    const getTextStyleClasses = (elementStyle: string) => {
      switch (elementStyle) {
        case "black-text":
          return "text-black";
        case "white-text":
          return "text-white";
        case "gold-text":
          return "text-yellow-400";
        case "gradient-gold-text":
          return "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent";
        case "gradient-purple-text":
          return "bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent";
        case "gradient-blue-text":
          return "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";
        default:
          return "bg-clip-text text-transparent bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]";
      }
    };

    // Helper function to get button style classes
    const getButtonStyleClasses = (elementStyle: string) => {
      switch (elementStyle) {
        case "black-on-white":
          return "bg-white text-black border border-black";
        case "white-on-black":
          return "bg-black text-white border border-white";
        case "gradient-gold-black":
          return "bg-gradient-to-r from-yellow-400 to-black text-white border-0";
        case "gradient-gold-white":
          return "bg-gradient-to-r from-yellow-400 to-white text-black border-0";
        case "gradient-purple-tech":
          return "bg-gradient-to-r from-purple-600 to-white text-white border-0";
        default:
          return "bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent text-gray-900 dark:text-white border border-input";
      }
    };

    const businessName = content?.headline || formData?.businessName || "שם העסק"
    const businessStory = content?.subheadline || formData?.businessStory || "בונים מוצרים לכולם"
    const subtitle = content?.description || formData?.businessTitle || "עיצוב הפרויקטים שלכם מהר יותר עם הערכת UI הגדולה ב-Figma"
    const description = formData?.mainServices || "אנחנו מתמחים בפתרונות מקצועיים לעסקים המחפשים חדשנות וטכנולוגיה מתקדמת"
    
    return (
        <div className="relative" dir="rtl">
            <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            <section className="relative max-w-full mx-auto z-1">
                <RetroGrid />
                <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
                    <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
                        {content?.badge ? (
                            <div className={`text-sm group font-geist mx-auto px-5 py-2 rounded-3xl w-fit ${getButtonStyleClasses(content.badgeStyle || 'black-on-white')}`}>
                                <Zap className="inline w-4 h-4 ml-2 group-hover:animate-pulse" />
                                {content.badge}
                            </div>
                        ) : (
                            <h1 className="text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
                                {formData?.businessName || businessName}
                                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                            </h1>
                        )}
                        
                        <h2 className={`text-4xl tracking-tighter font-geist mx-auto md:text-6xl ${content?.headlineStyle ? getTextStyleClasses(content.headlineStyle) : 'bg-clip-text text-transparent bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]'}`}>
                            {businessStory}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
                                {" " + subtitle}
                            </span>
                        </h2>
                        
                        <p className={`max-w-2xl mx-auto ${content?.subheadlineStyle ? getTextStyleClasses(content.subheadlineStyle) : 'text-gray-600 dark:text-gray-300'}`}>
                            {description}
                        </p>
                        
                        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                                <span key={index} className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                                        <button className={`inline-flex rounded-full text-center group items-center w-full justify-center transition-all sm:w-auto py-4 px-10 ${getButtonStyleClasses(button.style || 'black-on-white')}`}>
                                            {button.text}
                                        </button>
                                    </div>
                                </span>
                            )) || (
                                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                                        <a
                                            href="#"
                                            className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10"
                                        >
                                            התחל עכשיו
                                        </a>
                                    </div>
                                </span>
                            )}
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
