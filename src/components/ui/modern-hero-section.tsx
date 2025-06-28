
'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Typewriter } from '@/components/ui/typewriter'
import { cn } from '@/lib/utils'
import { motion, useScroll } from 'framer-motion'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

interface ModernHeroSectionProps {
  onStartQuestionnaire?: () => void;
}

export function ModernHeroSection({ onStartQuestionnaire }: ModernHeroSectionProps) {
    return (
        <>
            <ModernHeroHeader onStartQuestionnaire={onStartQuestionnaire} />
            <main className="overflow-hidden">
                <section>
                    <div className="relative pt-24">
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"></div>
                        <div className="mx-auto max-w-5xl px-6">
                            <div className="sm:mx-auto lg:mr-auto">
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                >
                                    <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 text-white" dir="rtl">
                                        יצירת דפי נחיתה חכמים עם 
                                        <br />
                                        <Typewriter
                                          text={[
                                            "בינה מלאכותית",
                                            "עיצוב מתקדם",
                                            "טכנולוגיה מהירה",
                                            "פתרונות דיגיטליים"
                                          ]}
                                          className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                                          speed={80}
                                          waitTime={2000}
                                          deleteSpeed={50}
                                        />
                                    </h1>
                                    <p className="mt-8 max-w-2xl text-pretty text-lg text-gray-300" dir="rtl">
                                        בנה דפי נחיתה מקצועיים שמכניסים כסף בתוך דקות. עיצוב מתקדם, תוכן מושך ואנליטיקס מפורט - הכל במקום אחד.
                                    </p>
                                    <div className="mt-12 flex items-center gap-2" dir="rtl">
                                        <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                                            <Button
                                                size="lg"
                                                className="rounded-xl px-5 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                                                onClick={onStartQuestionnaire}
                                            >
                                                <span className="text-nowrap">בוא נתחיל</span>
                                            </Button>
                                        </div>
                                        <Button
                                            size="lg"
                                            variant="ghost"
                                            className="h-[42px] rounded-xl px-5 text-base text-gray-300 hover:text-white"
                                        >
                                            <span className="text-nowrap">איך זה עובד?</span>
                                        </Button>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>
                        
                        {/* Features Preview */}
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 1.2,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative mt-16 px-6">
                                <div className="mx-auto max-w-6xl">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-2xl border border-blue-600/20 hover:border-blue-500/40 transition-all duration-300 group">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl mb-4 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-white text-xl">🎨</span>
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2 text-white text-center">עיצוב שקורע עיניים</h3>
                                            <p className="text-gray-300 text-sm text-center">תבניות עיצוב שגורמות ללקוחות להישאר ולקנות</p>
                                        </div>
                                        
                                        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-600/20 hover:border-purple-500/40 transition-all duration-300 group">
                                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl mb-4 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-white text-xl">⚡</span>
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2 text-white text-center">מהירות אור</h3>
                                            <p className="text-gray-300 text-sm text-center">דפים שנטענים כל כך מהר שגוגל יתאהב בהם</p>
                                        </div>
                                        
                                        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-2xl border border-cyan-600/20 hover:border-cyan-500/40 transition-all duration-300 group">
                                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-xl mb-4 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-white text-xl">🚀</span>
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2 text-white text-center">המרות שמשגעות</h3>
                                            <p className="text-gray-300 text-sm text-center">נתונים בזמן אמת שמראים איך הדף הופך לכסף</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'יצירת דף', href: '#create' },
    { name: 'תכונות', href: '#features' },
    { name: 'מחירים', href: '#pricing' },
    { name: 'אודות', href: '#about' },
]

export const ModernHeroHeader = ({ onStartQuestionnaire }: { onStartQuestionnaire?: () => void }) => {
    const [menuState, setMenuState] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const { scrollYProgress } = useScroll()

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className={cn('group fixed z-20 w-full border-b transition-colors duration-150 border-gray-800', scrolled && 'bg-black/50 backdrop-blur-3xl')}>
                <div className="mx-auto max-w-5xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <div className="flex items-center space-x-2">
                                <Logo />
                            </div>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm" dir="rtl">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-300 hover:text-white block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-black/95 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-800 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base" dir="rtl">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-300 hover:text-white block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit" dir="rtl">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800">
                                    <span>התחברות</span>
                                </Button>
                                <Button
                                    size="sm"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                    onClick={onStartQuestionnaire}>
                                    <span>יצירת דף</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('h-8 w-auto flex items-center', className)}>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LeadGrid
            </span>
        </div>
    )
}
