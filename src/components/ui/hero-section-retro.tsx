
import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight, Menu, X } from "lucide-react"
import { Button } from '@/components/ui/button'

interface HeroSectionRetroProps {
  formData: any;
  currentColors: any;
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
        <div className="animate-pulse [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-gray-950" />
    </div>
  )
}

export const HeroSectionRetro = ({ formData, currentColors }: HeroSectionRetroProps) => {
    const [menuState, setMenuState] = React.useState(false)
    
    const businessName = formData?.businessName || "שם העסק"
    const businessStory = formData?.businessStory || "בונים מוצרים לכולם"
    const mainServices = formData?.mainServices || "מעצבים את הפרויקטים שלכם מהר יותר עם הערכה הדיגיטלית הגדולה ביותר"
    
    return (
        <div className="relative min-h-screen bg-white dark:bg-gray-950" dir="rtl">
            <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="group fixed z-20 w-full border-b border-dashed bg-white/90 dark:bg-gray-950/90 backdrop-blur">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <div className="flex items-center space-x-2 space-x-reverse">
                                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">{businessName.charAt(0)}</span>
                                    </div>
                                    <span className="font-semibold text-lg">{businessName}</span>
                                </div>

                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'סגור תפריט' : 'פתח תפריט'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>

                            <div className="bg-white dark:bg-gray-950 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                        <li>
                                            <a href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white block duration-150">
                                                <span>שירותים</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white block duration-150">
                                                <span>אודות</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white block duration-150">
                                                <span>צור קשר</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                                    <Button variant="outline" size="sm">
                                        <span>התחבר</span>
                                    </Button>
                                    <Button size="sm">
                                        <span>הירשם</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="relative max-w-full mx-auto z-1">
                <RetroGrid 
                    angle={65}
                    opacity={0.4}
                    cellSize={50}
                    lightLineColor="#6366f1"
                    darkLineColor="#4f46e5"
                />
                <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
                    <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
                        <h1 className="text-sm text-gray-600 dark:text-gray-400 group font-semibold mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
                            ברוכים הבאים לפלטפורמה שלנו
                            <ChevronRight className="inline w-4 h-4 mr-2 group-hover:-translate-x-1 duration-300" />
                        </h1>
                        <h2 className="text-4xl tracking-tighter font-bold bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                            {businessStory.split(' ').slice(0, -2).join(' ')}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
                                {businessStory.split(' ').slice(-2).join(' ')}
                            </span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                            {mainServices}
                        </p>
                        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                                <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                                    <Button className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10">
                                        התחל עכשיו
                                    </Button>
                                </div>
                            </span>
                        </div>
                    </div>
                    
                    <div className="mt-32 mx-10 relative z-10">
                        <div className="w-full shadow-lg rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
                            <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                                <div className="space-y-4">
                                    <div className="h-4 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 rounded w-3/4"></div>
                                    <div className="h-4 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 rounded w-1/2"></div>
                                    <div className="h-24 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-lg"></div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-16 bg-purple-100 dark:bg-purple-800 rounded"></div>
                                        <div className="h-16 bg-pink-100 dark:bg-pink-800 rounded"></div>
                                        <div className="h-16 bg-purple-100 dark:bg-purple-800 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-900 py-16">
                <div className="m-auto max-w-5xl px-6">
                    <h2 className="text-center text-lg font-medium text-gray-600 dark:text-gray-400 mb-12">החברות המובילות בוטחות בנו</h2>
                    <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                        {[1,2,3,4,5,6,7,8].map((i) => (
                            <div key={i} className="h-6 w-24 bg-gray-300 dark:bg-gray-600 rounded opacity-60"></div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
