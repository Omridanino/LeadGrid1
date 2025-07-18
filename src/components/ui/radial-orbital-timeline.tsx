
"use client";
/**
 * Part of this file is based on code from 21st.dev (jatin-yadav05), licensed under the MIT License.
 * Copyright (c) 2024 21st.dev
 */

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const isMobile = useIsMobile();

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    // Responsive radius - smaller for mobile
    const radius = isMobile ? 120 : 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-black border-white";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center overflow-hidden relative"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Center circle with gradient matching the button - responsive sizing */}
          <div 
            className={`absolute ${isMobile ? 'w-12 h-12' : 'w-20 h-20'} rounded-full animate-pulse flex items-center justify-center z-10`}
            style={{
              background: `linear-gradient(135deg, 
                #6B73FF 0%, 
                #9C40FF 50%, 
                #FF6B9D 100%)`,
              boxShadow: `
                0 0 30px rgba(107, 115, 255, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `,
            }}
          >
            <div className={`absolute ${isMobile ? 'w-16 h-16' : 'w-24 h-24'} rounded-full border border-white/20 animate-ping opacity-70`}></div>
            <div
              className={`absolute ${isMobile ? 'w-20 h-20' : 'w-28 h-28'} rounded-full border border-white/10 animate-ping opacity-50`}
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className={`${isMobile ? 'w-6 h-6' : 'w-10 h-10'} rounded-full bg-white/80 backdrop-blur-md`}></div>
          </div>

          {/* Orbital path with gradient glow - responsive sizing */}
          <div 
            className={`absolute ${isMobile ? 'w-60 h-60' : 'w-96 h-96'} rounded-full border`}
            style={{
              borderColor: 'rgba(107, 115, 255, 0.3)',
              boxShadow: `
                inset 0 0 20px rgba(107, 115, 255, 0.1),
                0 0 40px rgba(107, 115, 255, 0.1)
              `,
            }}
          ></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer group"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`
                  ${isMobile ? 'w-8 h-8' : 'w-12 h-12'} rounded-full flex items-center justify-center
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : "group-hover:scale-110"}
                  border-2 
                  ${
                    isExpanded
                      ? "text-white shadow-lg shadow-purple-500/30"
                      : isRelated
                      ? "text-white animate-pulse"
                      : "text-white group-hover:text-white"
                  }
                `}
                  style={{
                    background: isExpanded 
                      ? `linear-gradient(135deg, #6B73FF 0%, #9C40FF 50%, #FF6B9D 100%)`
                      : isRelated
                      ? `linear-gradient(135deg, rgba(107,115,255,0.8) 0%, rgba(156,64,255,0.8) 50%, rgba(255,107,157,0.8) 100%)`
                      : "rgba(0, 0, 0, 0.8)",
                    borderColor: isExpanded || isRelated 
                      ? "rgba(255, 255, 255, 0.8)"
                      : "rgba(255, 255, 255, 0.4)",
                    boxShadow: isExpanded 
                      ? `
                        0 0 30px rgba(107, 115, 255, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2)
                      `
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isExpanded && !isRelated) {
                      e.currentTarget.style.background = `linear-gradient(135deg, #6B73FF 0%, #9C40FF 50%, #FF6B9D 100%)`;
                      e.currentTarget.style.boxShadow = `
                        0 0 20px rgba(107, 115, 255, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2)
                      `;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isExpanded && !isRelated) {
                      e.currentTarget.style.background = "rgba(0, 0, 0, 0.8)";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  <Icon size={isMobile ? 12 : 18} />
                </div>

                <div
                  className={`
                  absolute ${isMobile ? 'top-10' : 'top-14'} left-1/2 -translate-x-1/2 whitespace-nowrap
                  ${isMobile ? 'text-xs' : 'text-xs'} font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-125" : "text-white/70 group-hover:text-white"}
                `}
                >
                  {isMobile ? item.date : item.title}
                </div>

                {isExpanded && (
                  <Card className={`absolute ${isMobile ? 'top-16 w-72 -left-36' : 'top-24 w-64 left-1/2 -translate-x-1/2'} bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible`}>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 text-xs ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "הושלם"
                            : item.status === "in-progress"
                            ? "בתהליך"
                            : "ממתין"}
                        </Badge>
                        <span className="text-xs font-mono text-white/50">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className={`${isMobile ? 'text-sm' : 'text-sm'} mt-2`}>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className={`${isMobile ? 'text-xs' : 'text-xs'} text-white/80`}>
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center">
                            <Zap size={10} className="mr-1" />
                            רמת אפקטיביות
                          </span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full"
                            style={{ 
                              width: `${item.energy}%`,
                              background: `linear-gradient(135deg, #6B73FF 0%, #9C40FF 50%, #FF6B9D 100%)`
                            }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2">
                            <Link size={10} className="text-white/70 mr-1" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                              חלקים קשורים
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={8}
                                    className="ml-1 text-white/60"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
