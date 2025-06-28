
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star } from "lucide-react";

interface BeamsBackgroundProps {
    className?: string;
    title: string;
    description: string;
    primaryCta?: {
      text: string;
      onClick: () => void;
    };
    secondaryCta?: {
      text: string;
      onClick: () => void;
    };
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    speed: number;
    opacity: number;
    hue: number;
}

function createBeam(width: number, height: number): Beam {
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.12 + Math.random() * 0.16,
        hue: 190 + Math.random() * 70,
    };
}

export function BeamsBackground({
    className,
    title,
    description,
    primaryCta = {
      text: "בואו נתחיל",
      onClick: () => {},
    },
    secondaryCta = {
      text: "חקרו עוד",
      onClick: () => {},
    },
}: BeamsBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            beamsRef.current = Array.from({ length: 30 }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function animate() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(35px)";

            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;

                if (beam.y + beam.length < -100) {
                    beam.y = canvas.height + 100;
                    beam.x = Math.random() * canvas.width;
                }

                const gradient = ctx.createLinearGradient(0, beam.y, 0, beam.y + beam.length);
                gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
                gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${beam.opacity * 0.5})`);
                gradient.addColorStop(0.5, `hsla(${beam.hue}, 85%, 65%, ${beam.opacity})`);
                gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${beam.opacity * 0.5})`);
                gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

                ctx.fillStyle = gradient;
                ctx.fillRect(beam.x - beam.width / 2, beam.y, beam.width, beam.length);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div
            className={cn(
                "relative min-h-screen w-full overflow-hidden bg-neutral-950 flex items-center justify-center",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ filter: "blur(15px)" }}
            />

            <motion.div
                className="absolute inset-0 bg-neutral-950/5"
                animate={{
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(50px)",
                }}
            />

            <div className="relative z-10 flex h-screen w-full items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
                    <motion.div
                        className="inline-flex items-center gap-2 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 text-white/70"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Star className="w-4 h-4" />
                        <span className="text-sm">זרימה דיגיטלית מתקדמת</span>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {title}
                    </motion.h1>
                    
                    <motion.p
                        className="text-lg md:text-2xl lg:text-3xl text-white/70 tracking-tighter max-w-2xl leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {description}
                    </motion.p>
                    
                    <motion.div 
                        className="flex gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Button 
                            onClick={primaryCta.onClick}
                            className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition transform hover:scale-105"
                        >
                            <ArrowLeft className="w-5 h-5 ml-2" />
                            {primaryCta.text}
                        </Button>
                        <Button 
                            onClick={secondaryCta.onClick}
                            variant="outline"
                            className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition backdrop-blur-sm"
                        >
                            {secondaryCta.text}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
