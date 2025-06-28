
import * as React from "react"
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X, Zap } from 'lucide-react'

interface HeroSectionLampProps {
  formData: any;
  currentColors: any;
  content?: any;
}

export const HeroSectionLamp = ({ formData, currentColors, content }: HeroSectionLampProps) => {
    const [menuState, setMenuState] = React.useState(false)
    
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
          return "bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent";
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
          return "bg-gradient-to-r from-cyan-500 to-blue-600 text-white";
      }
    };
    
    const businessName = content?.headline || formData?.businessName || "שם העסק"
    const businessStory = content?.subheadline || formData?.businessStory || "בונים פתרונות בדרך הנכונה"
    const mainServices = content?.description || formData?.mainServices || "טכנולוגיה מתקדמת עם עיצוב מרהיב ותוכן איכותי שיקדם את העסק שלכם קדימה"
    
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0" dir="rtl">
            <header className="absolute top-0 w-full z-30">
                <nav
                    data-state={menuState && 'active'}
                    className="group fixed z-20 w-full border-b border-dashed bg-slate-950/80 backdrop-blur">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <div className="flex items-center space-x-2 space-x-reverse">
                                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">{(formData?.businessName || businessName).charAt(0)}</span>
                                    </div>
                                    <span className="font-semibold text-lg text-white">{formData?.businessName || businessName}</span>
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
                {content?.badge && (
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm ${getButtonStyleClasses(content.badgeStyle || 'white-on-black')}`}>
                        <Zap className="w-4 h-4" />
                        <span>{content.badge}</span>
                    </div>
                )}
                
                <h1 className={`mt-8 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ${content?.headlineStyle ? getTextStyleClasses(content.headlineStyle) : 'bg-gradient-to-br from-slate-300 to-slate-500'}`}>
                    {businessStory}
                </h1>
                
                <p className={`mt-8 max-w-2xl text-lg leading-relaxed ${content?.subheadlineStyle ? getTextStyleClasses(content.subheadlineStyle) : 'text-slate-400'}`}>
                    {mainServices}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                    {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                        <button 
                            key={index}
                            className={`px-8 py-4 rounded-lg font-bold transition ${getButtonStyleClasses(button.style || 'white-on-black')}`}
                        >
                            {button.text}
                        </button>
                    )) || (
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
