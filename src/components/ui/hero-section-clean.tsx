
import * as React from "react"
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface HeroSectionCleanProps {
  formData: any;
  currentColors: any;
}

export const HeroSectionClean = ({ formData, currentColors }: HeroSectionCleanProps) => {
    const [menuState, setMenuState] = React.useState(false)
    
    const businessName = formData?.businessName || "שם העסק"
    const businessStory = formData?.businessStory || "הסיפור שלנו מתחיל כאן"
    const mainServices = formData?.mainServices || "השירותים המובילים שלנו"
    
    return (
        <div className="min-h-screen bg-white text-gray-900" dir="rtl">
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="group fixed z-20 w-full border-b border-dashed bg-white/90 backdrop-blur">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <div className="flex items-center space-x-2 space-x-reverse">
                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
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

                            <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                        <li>
                                            <a href="#services" className="text-gray-600 hover:text-gray-900 block duration-150">
                                                <span>שירותים</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#about" className="text-gray-600 hover:text-gray-900 block duration-150">
                                                <span>אודות</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#contact" className="text-gray-600 hover:text-gray-900 block duration-150">
                                                <span>צור קשר</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                                    <Button
                                        variant="outline"
                                        size="sm">
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

            <main>
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute right-0 top-0 rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(220,70%,85%,.08)_0,hsla(220,70%,55%,.02)_50%,hsla(220,70%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute right-0 top-0 w-56 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(220,70%,85%,.06)_0,hsla(220,70%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section className="overflow-hidden bg-white">
                    <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-32">
                        <div className="relative z-10 mx-auto max-w-3xl text-center">
                            <h1 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl text-gray-900 mb-6">
                                {businessStory}
                            </h1>
                            <p className="mx-auto my-8 max-w-2xl text-xl text-gray-600 leading-relaxed">
                                {mainServices}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                    <span>התחל עכשיו</span>
                                </Button>
                                <Button variant="outline" size="lg">
                                    <span>למד עוד</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                        <div className="[perspective:1200px] [mask-image:linear-gradient(to_left,black_50%,transparent_100%)] -ml-16 pr-16 lg:-ml-56 lg:pr-56">
                            <div className="[transform:rotateX(20deg)]">
                                <div className="lg:h-[44rem] relative -skew-x-[0.36rad]">
                                    <div className="rounded-2xl z-[2] relative border bg-gradient-to-br from-gray-50 to-white shadow-2xl p-8 backdrop-blur-sm">
                                        <div className="space-y-4">
                                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                            <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg"></div>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-20 bg-gray-100 rounded"></div>
                                                <div className="h-20 bg-gray-100 rounded"></div>
                                                <div className="h-20 bg-gray-100 rounded"></div>
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
