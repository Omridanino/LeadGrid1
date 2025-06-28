
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Zap } from "lucide-react"

interface GradientHeroProps {
  className?: string;
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    onClick: () => void;
  };
  secondaryCta?: {
    text: string;
    onClick: () => void;
  };
}

const GradientHero = React.forwardRef<HTMLElement, GradientHeroProps>(
  (
    {
      className,
      title,
      subtitle,
      primaryCta = {
        text: "התחילו היום",
        onClick: () => {},
      },
      secondaryCta = {
        text: "גלו עוד",
        onClick: () => {},
      },
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background",
          className,
        )}
        {...props}
      >
        <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
          <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />

          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />

          <motion.div
            initial={{ width: "8rem" }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            whileInView={{ width: "16rem" }}
            className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-primary/60 blur-2xl"
          />

          <motion.div
            initial={{ width: "15rem" }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            whileInView={{ width: "30rem" }}
            className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-primary/60"
          />

          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-primary/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary/60 [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex justify-center flex-1 flex-col px-5 md:px-10 gap-4 -translate-y-20"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-full mb-6 bg-primary/5">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">בינה מלאכותית מתקדמת</span>
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6",
                "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent",
              )}
            >
              {title}
            </h1>
            
            <p
              className={cn(
                "text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8",
              )}
            >
              {subtitle}
            </p>
            
            <div className="flex gap-4">
              <Button
                onClick={primaryCta.onClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 ml-2" />
                {primaryCta.text}
              </Button>
              <Button
                onClick={secondaryCta.onClick}
                variant="outline"
                size="lg"
                className="px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-300"
              >
                {secondaryCta.text}
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    )
  },
)
GradientHero.displayName = "GradientHero"

export { GradientHero }
