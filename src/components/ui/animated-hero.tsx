
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnimatedHeroProps {
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

function AnimatedHero({
  title,
  subtitle,
  primaryCta = {
    text: "בואו נתחיל",
    onClick: () => {},
  },
  secondaryCta = {
    text: "הצגת המוצר", 
    onClick: () => {},
  },
}: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["מדהים", "חדש", "נהדר", "יפה", "חכם"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20">
              קרא את מאמר ההשקה שלנו <ArrowLeft className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular text-white">
              <span>זה משהו</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((titleWord, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {titleWord}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-300 max-w-2xl text-center">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button 
              onClick={secondaryCta.onClick}
              size="lg" 
              className="gap-4 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20" 
              variant="outline"
            >
              קפיצה לשיחה <PhoneCall className="w-4 h-4" />
            </Button>
            <Button 
              onClick={primaryCta.onClick}
              size="lg" 
              className="gap-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              {primaryCta.text} <ArrowLeft className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
