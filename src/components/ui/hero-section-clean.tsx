import * as React from "react"
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface HeroSectionCleanProps {
  formData: any;
  currentColors: any;
  content?: any;
}

export const HeroSectionClean = ({ formData, currentColors, content }: HeroSectionCleanProps) => {
    const [menuState, setMenuState] = React.useState(false)
    
    const businessName = content?.headline || formData?.businessName || "שם העסק"
    const businessStory = content?.subheadline || formData?.businessStory || "הסיפור שלנו מתחיל כאן"
    const mainServices = content?.description || formData?.mainServices || "השירותים המובילים שלנו"
    const badgeText = content?.badge || "חדש"
    
    // Enhanced styling functions that use content values with dynamic colors
    const getTextStyleClasses = (style: string, defaultColor?: string) => {
      // Use dynamic colors from content if available
      if (content?.accentColor) {
        const colorMap: Record<string, string> = {
          blue: "text-blue-400",
          purple: "text-purple-400", 
          green: "text-green-400",
          red: "text-red-400",
          orange: "text-orange-400",
          pink: "text-pink-400",
          cyan: "text-cyan-400",
          yellow: "text-yellow-400",
          gold: "text-yellow-400",
          silver: "text-gray-300"
        };
        
        if (style === 'dynamic-accent') {
          return colorMap[content.accentColor] || "text-blue-400";
        }
      }
      
      if (!style || style === 'default') return defaultColor || "text-gray-900 dark:text-white";
      
      switch (style) {
        case "black-text": return "text-black";
        case "white-text": return "text-white";
        case "gold-text": return "text-yellow-400";
        case "silver-text": return "text-gray-300";
        case "blue-text": return "text-blue-400";
        case "green-text": return "text-green-400";
        case "red-text": return "text-red-400";
        case "purple-text": return "text-purple-400";
        case "pink-text": return "text-pink-400";
        case "cyan-text": return "text-cyan-400";
        case "gradient-gold-text": return "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent";
        case "gradient-purple-text": return "bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent";
        case "gradient-blue-text": return "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";
        case "gradient-green-text": return "bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent";
        case "gradient-red-text": return "bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent";
        case "gradient-cyan-text": return "bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent";
        case "gradient-rainbow-text": return "bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent";
        default: return defaultColor || "text-gray-900 dark:text-white";
      }
    };

    const getBadgeStyleClasses = (style: string) => {
      // Use dynamic colors
      if (content?.accentColor && (!style || style === 'default')) {
        const colorMap: Record<string, string> = {
          blue: "bg-blue-600 text-white",
          purple: "bg-purple-600 text-white",
          green: "bg-green-600 text-white", 
          red: "bg-red-600 text-white",
          orange: "bg-orange-600 text-white",
          pink: "bg-pink-600 text-white",
          cyan: "bg-cyan-600 text-white",
          yellow: "bg-yellow-600 text-white",
          gold: "bg-yellow-600 text-white",
          silver: "bg-gray-600 text-white"
        };
        return colorMap[content.accentColor] || "bg-blue-600 text-white";
      }
      
      if (!style || style === 'default') return "bg-blue-600 text-white";
      
      switch (style) {
        case "black-on-white": return "bg-white text-black border border-black";
        case "white-on-black": return "bg-black text-white border border-white";
        case "gradient-gold-black": return "bg-gradient-to-r from-yellow-400 to-black text-white border-0";
        case "gradient-gold-white": return "bg-gradient-to-r from-yellow-400 to-white text-black border-0";
        case "gradient-purple-tech": return "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-0";
        case "gradient-blue-ocean": return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0";
        case "gradient-green-nature": return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0";
        case "gradient-red-fire": return "bg-gradient-to-r from-red-500 to-orange-500 text-white border-0";
        case "gradient-pink-sunset": return "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0";
        case "neon-blue": return "bg-blue-600 text-white border-2 border-blue-400 shadow-lg shadow-blue-400/50";
        case "neon-green": return "bg-green-600 text-white border-2 border-green-400 shadow-lg shadow-green-400/50";
        case "neon-purple": return "bg-purple-600 text-white border-2 border-purple-400 shadow-lg shadow-purple-400/50";
        case "neon-pink": return "bg-pink-600 text-white border-2 border-pink-400 shadow-lg shadow-pink-400/50";
        case "glass-dark": return "bg-black/20 text-white border border-white/30 backdrop-blur-sm";
        case "glass-light": return "bg-white/20 text-black border border-black/30 backdrop-blur-sm";
        default: return "bg-blue-600 text-white";
      }
    };

    const getButtonStyleClasses = (style: string) => {
      // Use dynamic colors for default buttons
      if (content?.accentColor && (!style || style === 'default')) {
        const colorMap: Record<string, string> = {
          blue: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
          purple: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white",
          green: "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white",
          red: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white",
          orange: "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white",
          pink: "bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white",
          cyan: "bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white",
          yellow: "bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white",
          gold: "bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white",
          silver: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white"
        };
        return colorMap[content.accentColor] || "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white";
      }
      
      if (!style || style === 'default') return "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white";
      
      switch (style) {
        case "black-on-white": return "bg-white text-black border border-black hover:bg-gray-100";
        case "white-on-black": return "bg-black text-white border border-white hover:bg-gray-900";
        case "gradient-gold-black": return "bg-gradient-to-r from-yellow-400 to-black text-white border-0 hover:from-yellow-500 hover:to-gray-900";
        case "gradient-gold-white": return "bg-gradient-to-r from-yellow-400 to-white text-black border-0 hover:from-yellow-500 hover:to-gray-100";
        case "gradient-purple-tech": return "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-0 hover:from-purple-700 hover:to-blue-600";
        case "gradient-blue-ocean": return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:from-blue-600 hover:to-cyan-600";
        case "gradient-green-nature": return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 hover:from-green-600 hover:to-emerald-600";
        case "gradient-red-fire": return "bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 hover:from-red-600 hover:to-orange-600";
        case "gradient-pink-sunset": return "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 hover:from-pink-600 hover:to-rose-600";
        case "neon-blue": return "bg-blue-600 text-white border-2 border-blue-400 shadow-lg shadow-blue-400/50 hover:bg-blue-700";
        case "neon-green": return "bg-green-600 text-white border-2 border-green-400 shadow-lg shadow-green-400/50 hover:bg-green-700";
        case "neon-purple": return "bg-purple-600 text-white border-2 border-purple-400 shadow-lg shadow-purple-400/50 hover:bg-purple-700";
        case "neon-pink": return "bg-pink-600 text-white border-2 border-pink-400 shadow-lg shadow-pink-400/50 hover:bg-pink-700";
        case "glass-dark": return "bg-black/20 text-white border border-white/30 backdrop-blur-sm hover:bg-black/30";
        case "glass-light": return "bg-white/20 text-black border border-black/30 backdrop-blur-sm hover:bg-white/30";
        default: return "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white";
      }
    };

    const getBackgroundClasses = (style: string) => {
      // Use dynamic colors for backgrounds
      if (content?.accentColor && (!style || style === 'default')) {
        const colorMap: Record<string, string> = {
          blue: "bg-gradient-to-br from-blue-950 to-blue-900 text-white",
          purple: "bg-gradient-to-br from-purple-950 to-purple-900 text-white",
          green: "bg-gradient-to-br from-green-950 to-green-900 text-white",
          red: "bg-gradient-to-br from-red-950 to-red-900 text-white",
          orange: "bg-gradient-to-br from-orange-950 to-orange-900 text-white",
          pink: "bg-gradient-to-br from-pink-950 to-pink-900 text-white",
          cyan: "bg-gradient-to-br from-cyan-950 to-cyan-900 text-white",
          yellow: "bg-gradient-to-br from-yellow-950 to-yellow-900 text-white",
          gold: "bg-gradient-to-br from-yellow-950 to-yellow-900 text-white",
          silver: "bg-gradient-to-br from-gray-950 to-gray-900 text-white"
        };
        return colorMap[content.accentColor] || "bg-white text-gray-900";
      }
      
      if (!style || style === 'default') return "bg-white text-gray-900";
      
      switch (style) {
        case "dark": return "bg-gray-900 text-white";
        case "light": return "bg-white text-gray-900";
        case "gradient-blue": return "bg-gradient-to-br from-blue-900 to-blue-600 text-white";
        case "gradient-purple": return "bg-gradient-to-br from-purple-900 to-purple-600 text-white";
        case "gradient-green": return "bg-gradient-to-br from-green-900 to-green-600 text-white";
        case "gradient-orange": return "bg-gradient-to-br from-orange-900 to-orange-600 text-white";
        case "gradient-pink": return "bg-gradient-to-br from-pink-900 to-pink-600 text-white";
        case "tech-dark": return "bg-gray-950 text-white";
        case "minimal-light": return "bg-gray-50 text-gray-900";
        default: return "bg-white text-gray-900";
      }
    };
    
    return (
        <div className={`min-h-screen ${getBackgroundClasses(content?.backgroundStyle)}`} dir="rtl">
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className={`group fixed z-20 w-full border-b border-dashed backdrop-blur ${content?.backgroundStyle === 'light' || content?.backgroundStyle === 'minimal-light' ? 'bg-white/90' : 'bg-gray-900/90'}`}>
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <div className="flex items-center space-x-2 space-x-reverse">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getBadgeStyleClasses(content?.badgeStyle)}`}>
                                        <span className="text-white font-bold text-sm">{businessName.charAt(0)}</span>
                                    </div>
                                    <span className={`font-semibold text-lg ${getTextStyleClasses(content?.headlineStyle)}`}>{businessName}</span>
                                </div>

                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'סגור תפריט' : 'פתח תפריט'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className={`group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 ${getTextStyleClasses(content?.headlineStyle)}`} />
                                    <X className={`group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 ${getTextStyleClasses(content?.headlineStyle)}`} />
                                </button>
                            </div>

                            <div className={`group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:p-0 lg:shadow-none ${content?.backgroundStyle === 'light' || content?.backgroundStyle === 'minimal-light' ? 'bg-white' : 'bg-gray-900'}`}>
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                        <li>
                                            <a href="#services" className={`block duration-150 hover:opacity-80 ${getTextStyleClasses(content?.descriptionStyle)}`}>
                                                <span>שירותים</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#about" className={`block duration-150 hover:opacity-80 ${getTextStyleClasses(content?.descriptionStyle)}`}>
                                                <span>אודות</span>
                                            </a>  
                                        </li>
                                        <li>
                                            <a href="#contact" className={`block duration-150 hover:opacity-80 ${getTextStyleClasses(content?.descriptionStyle)}`}>
                                                <span>צור קשר</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className={getButtonStyleClasses('white-on-black')}>
                                        <span>התחבר</span>
                                    </Button>
                                    <Button 
                                        size="sm"
                                        className={getButtonStyleClasses(content?.buttons?.[0]?.style)}>
                                        <span>הירשם</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute right-0 top-0 rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(220,70%,85%,.08)_0,hsla(220,70%,55%,.02)_50%,hsla(220,70%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute right-0 top-0 w-56 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(220,70%,85%,.06)_0,hsla(220,70%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section className="overflow-hidden">
                    <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-32">
                        <div className="relative z-10 mx-auto max-w-3xl text-center">
                            {badgeText && (
                                <div className="mb-6 flex justify-center">
                                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getBadgeStyleClasses(content?.badgeStyle)} ${content?.badgeTextStyle && content.badgeTextStyle !== 'default' ? getTextStyleClasses(content.badgeTextStyle) : ''}`}>
                                        {badgeText}
                                    </span>
                                </div>
                            )}
                            
                            <h1 className={`text-balance text-4xl font-bold md:text-5xl lg:text-6xl mb-6 ${getTextStyleClasses(content?.headlineStyle)}`}>
                                {businessName}
                            </h1>
                            <p className={`mx-auto my-8 max-w-2xl text-xl leading-relaxed ${getTextStyleClasses(content?.subheadlineStyle)}`}>
                                {businessStory}
                            </p>
                            {mainServices && (
                                <p className={`mx-auto my-6 max-w-2xl text-lg leading-relaxed ${getTextStyleClasses(content?.descriptionStyle)}`}>
                                    {mainServices}
                                </p>
                            )}

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                                {content?.buttons && content.buttons.length > 0 ? (
                                    content.buttons.map((button: any, index: number) => (
                                        button.visible !== false && (
                                            <button
                                                key={index}
                                                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${getButtonStyleClasses(button.style)} ${button.textStyle && button.textStyle !== 'default' ? getTextStyleClasses(button.textStyle) : ''}`}
                                            >
                                                {button.text || `כפתור ${index + 1}`}
                                            </button>
                                        )
                                    ))
                                ) : (
                                    <>
                                        <Button size="lg" className={getButtonStyleClasses(content?.buttons?.[0]?.style)}>
                                            <span>התחל עכשיו</span>
                                        </Button>
                                        <Button variant="outline" size="lg" className={getButtonStyleClasses('white-on-black')}>
                                            <span>למד עוד</span>
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                        <div className="[perspective:1200px] [mask-image:linear-gradient(to_left,black_50%,transparent_100%)] -ml-16 pr-16 lg:-ml-56 lg:pr-56">
                            <div className="[transform:rotateX(20deg)]">
                                <div className="lg:h-[44rem] relative -skew-x-[0.36rad]">
                                    <div className={`rounded-2xl z-[2] relative border shadow-2xl p-8 backdrop-blur-sm ${content?.backgroundStyle === 'dark' || content?.backgroundStyle === 'tech-dark' ? 'bg-gradient-to-br from-gray-900 to-black border-gray-700' : 'bg-gradient-to-br from-gray-50 to-white border-gray-200'}`}>
                                        <div className="space-y-4">
                                            <div className={`h-4 rounded w-3/4 ${content?.backgroundStyle === 'dark' || content?.backgroundStyle === 'tech-dark' ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                                            <div className={`h-4 rounded w-1/2 ${content?.backgroundStyle === 'dark' || content?.backgroundStyle === 'tech-dark' ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                                            <div className={`h-32 rounded-lg ${content?.backgroundStyle === 'dark' || content?.backgroundStyle === 'tech-dark' ? 'bg-gradient-to-br from-purple-800 to-pink-800' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}></div>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className={`h-20 rounded ${content?.backgroundStyle === 'dark' || content?.backgroundStyle === 'tech-dark' ? 'bg-gray-800' : 'bg-gray-100'}`}></div>
                                                <div className={`h-20 rounded ${content?.backgroundStyle === 'dark' || content?.backgroundStyle === 'tech-dark' ? 'bg-gray-800' : 'bg-gray-100'}`}></div>
                                                <div className={`h-20 rounded ${content?.backgroundStyle === 'dark' || content?.backgroundStyle === 'tech-dark' ? 'bg-gray-800' : 'bg-gray-100'}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
