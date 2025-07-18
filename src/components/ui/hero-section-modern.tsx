
import * as React from "react"
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react'

interface HeroSectionModernProps {
  formData: any;
  currentColors: any;
  content?: any;
}

export const HeroSectionModern = ({ formData, currentColors, content }: HeroSectionModernProps) => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    
    const businessName = content?.headline || formData?.businessName || "שם העסק"
    const businessStory = content?.subheadline || formData?.businessStory || "פתרונות מודרניים לעתיד הדיגיטלי"
    const mainServices = content?.description || formData?.mainServices || "קומפוננטים מותאמים לבניית אתרים ואפליקציות מודרניות שנראות ומרגישות בדיוק כמו שחלמתם"
    
    // Helper functions for styling
    const getTextStyle = (colorKey: string) => {
      const colorValue = content?.colors?.[colorKey];
      if (colorValue) {
        if (colorValue.includes('gradient')) {
          return { 
            background: colorValue,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          };
        }
        return { color: colorValue };
      }
      return {};
    };

    const getButtonStyle = (buttonColor?: string) => {
      if (buttonColor) {
        if (buttonColor.includes('gradient')) {
          return { 
            background: buttonColor,
            color: '#ffffff',
            border: 'none'
          };
        }
        return { 
          backgroundColor: buttonColor,
          color: '#ffffff',
          border: 'none'
        };
      }
      return {};
    };

    const getBadgeStyle = () => {
      const badgeColor = content?.colors?.badge;
      if (badgeColor) {
        if (badgeColor.includes('gradient')) {
          return { 
            background: badgeColor,
            color: '#ffffff',
            border: 'none'
          };
        }
        return { 
          backgroundColor: badgeColor,
          color: '#ffffff',
          border: 'none'
        };
      }
      return {};
    };
    
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950" dir="rtl">
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="fixed z-20 w-full px-2 group">
                    <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-white/50 dark:bg-gray-950/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
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

                            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                                <ul className="flex gap-8 text-sm">
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

                            <div className="bg-white dark:bg-gray-950 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className={cn(isScrolled && 'lg:hidden')}>
                                        <span>התחבר</span>
                                    </Button>
                                    <Button
                                        size="sm"
                                        className={cn(isScrolled && 'lg:hidden')}>
                                        <span>הירשם</span>
                                    </Button>
                                    <Button
                                        size="sm"
                                        className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                        <span>התחל עכשיו</span>
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
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute right-0 top-0 rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(280,70%,85%,.08)_0,hsla(280,70%,55%,.02)_50%,hsla(280,70%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute right-0 top-0 w-56 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(280,70%,85%,.06)_0,hsla(280,70%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section className="overflow-hidden bg-white dark:bg-gray-950">
                    <div className="relative pt-24 md:pt-36">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center mx-auto">
                                {content?.badge && (
                                  <div className="hover:bg-white dark:hover:bg-gray-950 bg-gray-100 dark:bg-gray-800 group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md transition-all duration-300 mb-8" style={getBadgeStyle()}>
                                      <span className="text-sm">{content.badge}</span>
                                      <span className="block h-4 w-0.5 border-l bg-gray-400"></span>
                                      <div className="bg-white dark:bg-gray-950 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 size-6 overflow-hidden rounded-full duration-500">
                                          <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                              <span className="flex size-6">
                                                  <ArrowRight className="m-auto size-3" />
                                              </span>
                                              <span className="flex size-6">
                                                  <ArrowRight className="m-auto size-3" />
                                              </span>
                                          </div>
                                      </div>
                                  </div>
                                )}
                        
                                <h1 className="mt-8 max-w-4xl mx-auto text-balance text-4xl md:text-6xl lg:text-7xl font-bold mb-8" style={getTextStyle('headline')}>
                                    {businessStory}
                                </h1>
                                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-gray-600 dark:text-gray-300 leading-relaxed" style={getTextStyle('subheadline')}>
                                    {mainServices}
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                                      <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-[14px] border p-0.5">
                                          <Button
                                              size="lg"
                                              className="rounded-xl px-5 text-base"
                                              style={getButtonStyle(button.color)}>
                                              <span>{button.text}</span>
                                          </Button>
                                      </div>
                                    )) || (
                                      <>
                                        <div className="bg-gray-100 dark:bg-gray-800 rounded-[14px] border p-0.5">
                                            <Button
                                                size="lg"
                                                className="rounded-xl px-5 text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                                <span>התחל לבנות</span>
                                            </Button>
                                        </div>
                                        <Button
                                            size="lg"
                                            variant="ghost"
                                            className="rounded-xl px-5">
                                            <span>בקש הדגמה</span>
                                        </Button>
                                      </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                            <div
                                aria-hidden
                                className="bg-gradient-to-b to-white dark:to-gray-950 from-transparent from-35% absolute inset-0 z-10"
                            />
                            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg bg-white dark:bg-gray-950">
                                <div className="aspect-[16/9] relative rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8">
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
                    </div>
                </section>
            </main>
        </div>
    )
}
