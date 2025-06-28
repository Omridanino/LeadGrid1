
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"

interface HeroWithMockupProps {
  title: string
  description: string
  primaryCta?: {
    text: string
    onClick: () => void
  }
  secondaryCta?: {
    text: string
    onClick: () => void
  }
  className?: string
}

export function HeroWithMockup({
  title,
  description,
  primaryCta = {
    text: "בואו נתחיל",
    onClick: () => {},
  },
  secondaryCta = {
    text: "למד עוד",
    onClick: () => {},
  },
  className,
}: HeroWithMockupProps) {
  return (
    <section
      className={cn(
        "relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white",
        "py-12 px-4 md:py-24 lg:py-32",
        "overflow-hidden min-h-screen flex items-center justify-center",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-gray-900/40" />
      
      <div className="relative mx-auto max-w-[1280px] flex flex-col gap-12 lg:gap-24">
        <div className="relative z-10 flex flex-col items-center gap-6 pt-8 md:pt-16 text-center lg:gap-12">
          <div className="inline-flex items-center gap-2 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8 shadow-lg bg-white/10">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">עיצוב מתקדם ומקצועי</span>
          </div>

          <h1
            className={cn(
              "animate-fade-in",
              "bg-gradient-to-b from-white via-white/90 to-gray-300",
              "bg-clip-text text-transparent",
              "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
              "leading-[1.1] sm:leading-[1.1]",
              "drop-shadow-2xl",
            )}
          >
            {title}
          </h1>

          <p
            className={cn(
              "max-w-[550px] animate-fade-in opacity-0 [animation-delay:150ms]",
              "text-base sm:text-lg md:text-xl",
              "text-gray-300",
              "font-medium leading-relaxed",
            )}
          >
            {description}
          </p>

          <div
            className="relative z-10 flex flex-wrap justify-center gap-4 
            animate-fade-in opacity-0 [animation-delay:300ms]"
          >
            <Button
              onClick={primaryCta.onClick}
              size="lg"
              className={cn(
                "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                "text-white shadow-lg hover:shadow-xl",
                "transition-all duration-300 transform hover:scale-105",
                "px-8 py-4 rounded-xl font-semibold text-lg",
              )}
            >
              <ArrowLeft className="w-5 h-5 ml-2" />
              {primaryCta.text}
            </Button>

            <Button
              onClick={secondaryCta.onClick}
              size="lg"
              variant="ghost"
              className={cn(
                "text-white hover:bg-white/10 border-2 border-white/30",
                "transition-all duration-300 transform hover:scale-105",
                "px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm",
              )}
            >
              <Play className="w-5 h-5 ml-2" />
              {secondaryCta.text}
            </Button>
          </div>

          <div className="relative w-full pt-12 px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                "animate-fade-in opacity-0 [animation-delay:700ms]",
                "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md",
                "border border-white/20 rounded-2xl p-8 shadow-2xl",
                "max-w-4xl mx-auto",
              )}
            >
              <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white/80 font-medium">תצוגה מקדימה של המוצר</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse [animation-delay:1s]" />
      </div>
    </section>
  )
}
