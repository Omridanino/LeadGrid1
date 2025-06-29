import * as React from "react"
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface HeroSectionLampProps {
  formData: any;
  currentColors: any;
  content?: any;
}

export const HeroSectionLamp = ({ formData, currentColors, content }: HeroSectionLampProps) => {
    const [menuState, setMenuState] = React.useState(false)
    
    // Use content values first, then formData, then defaults
    const businessName = content?.headline || formData?.businessName || "שם העסק"
    const businessStory = content?.subheadline || formData?.businessStory || "בונים פתרונות בדרך הנכונה"
    const mainServices = content?.description || formData?.mainServices || "טכנולוגיה מתקדמת עם עיצוב מרהיב ותוכן איכותי שיקדם את העסק שלכם קדימה"
    const badgeText = content?.badge || ""
    
    // Enhanced styling functions that use content values
    const getTextStyleClasses = (style: string) => {
      if (!style || style === 'default') return "text-slate-300";
      
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
        default: return "text-slate-300";
      }
    };

    const getBadgeStyleClasses = (style: string) => {
      if (!style || style === 'default') return "bg-cyan-500 text-white";
      
      switch (style) {
        case "black-on-white": return "bg-white text-black border border-black";
        case "white-on-black": return "bg-black text-white border border-white";
        case "gradient-gold-black": return "bg-gradient-to-r from-yellow-400 to-black text-white border-0";
        case "gradient-gold-white": return "bg-gradient-to-r from-yellow-400 to-white text-black border-0";
        case "gradient-purple-tech": return "bg-gradient-to-r from-purple-600 to-white text-white border-0";
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
        default: return "bg-cyan-500 text-white";
      }
    };

    const getButtonStyleClasses = (style: string) => {
      if (!style || style === 'default') return "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700";
      
      switch (style) {
        case "black-on-white": return "bg-white text-black border border-black hover:bg-gray-100";
        case "white-on-black": return "bg-black text-white border border-white hover:bg-gray-900";
        case "gradient-gold-black": return "bg-gradient-to-r from-yellow-400 to-black text-white border-0 hover:from-yellow-500 hover:to-gray-900";
        case "gradient-gold-white": return "bg-gradient-to-r from-yellow-400 to-white text-black border-0 hover:from-yellow-500 hover:to-gray-100";
        case "gradient-purple-tech": return "bg-gradient-to-r from-purple-600 to-white text-white border-0 hover:from-purple-700 hover:to-gray-100";
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
        default: return "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700";
      }
    };

    const getBackgroundClasses = (style: string) => {
      if (!style || style === 'default') return "bg-slate-950";
      
      switch (style) {
        case "dark": return "bg-gray-950";
        case "light": return "bg-gray-100";
        case "gradient-blue": return "bg-gradient-to-br from-blue-950 to-blue-900";
        case "gradient-purple": return "bg-gradient-to-br from-purple-950 to-purple-900";
        case "gradient-green": return "bg-gradient-to-br from-green-950 to-green-900";
        case "gradient-orange": return "bg-gradient-to-br from-orange-950 to-orange-900";
        case "gradient-pink": return "bg-gradient-to-br from-pink-950 to-pink-900";
        case "tech-dark": return "bg-black";
        case "minimal-light": return "bg-white";
        default: return "bg-slate-950";
      }
    };
    
    return (
        <div className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden ${getBackgroundClasses(content?.backgroundStyle)} w-full rounded-md z-0`} dir="rtl">
            <header className="absolute top-0 w-full z-30">
                <nav
                    data-state={menuState && 'active'}
                    className="group fixed z-20 w-full border-b border-dashed bg-slate-950/80 backdrop-blur">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <div className="flex items-center space-x-2 space-x-reverse">
                                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">{businessName.charAt(0)}</span>
                                    </div>
                                    <span className="font-semibold text-lg text-white">{businessName}</span>
                                </div>

                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'סגור תפריט' : 'פתח תפריט'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                                    <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                                </button>
                            </div>

                            <div className="bg-slate-950 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-slate-800 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                        <li>
                                            <a href="#services" className="text-slate-400 hover:text-white block duration-150">
                                                <span>שירותים</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#about" className="text-slate-400 hover:text-white block duration-150">
                                                <span>אודות</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#contact" className="text-slate-400 hover:text-white block duration-150">
                                                <span>צור קשר</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:border-slate-700 lg:pl-6">
                                    <Button variant="outline" size="sm" className="border-slate-600 text-white hover:bg-slate-800">
                                        <span>התחבר</span>
                                    </Button>
                                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                                        <span>הירשם</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Lamp Effect */}
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
                <div
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </div>
                <div
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
                <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div>
                <div className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"></div>
                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
            </div>

            {/* Content */}
            <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5 text-center">
                {badgeText && (
                    <div className="mb-6 flex justify-center">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getBadgeStyleClasses(content?.badgeStyle)} ${getTextStyleClasses(content?.badgeTextStyle)}`}>
                            {badgeText}
                        </span>
                    </div>
                )}
                
                <h1 className={`mt-8 py-4 text-center text-4xl font-medium tracking-tight md:text-7xl ${getTextStyleClasses(content?.headlineStyle)}`}>
                    {businessStory}
                </h1>
                <p className={`mt-8 max-w-2xl text-lg leading-relaxed ${getTextStyleClasses(content?.subheadlineStyle)}`}>
                    {mainServices}
                </p>
                {content?.description && (
                    <p className={`mt-6 max-w-2xl text-base leading-relaxed ${getTextStyleClasses(content?.descriptionStyle)}`}>
                        {content.description}
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
                            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                                <span>התחל עכשיו</span>
                            </Button>
                            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                                <span>למד עוד</span>
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
