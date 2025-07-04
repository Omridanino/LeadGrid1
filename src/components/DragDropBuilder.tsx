
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grip, Type, Image, MousePointer } from "lucide-react";

const DragDropBuilder = () => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [canvasItems, setCanvasItems] = useState<Array<{id: string, type: string, x: number, y: number}>>([]);

  const handleDragStart = (type: string) => {
    setDraggedItem(type);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedItem) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCanvasItems([...canvasItems, {
      id: Math.random().toString(36).substr(2, 9),
      type: draggedItem,
      x,
      y
    }]);
    setDraggedItem(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const tools = [
    { type: "text", icon: Type, label: "טקסט" },
    { type: "image", icon: Image, label: "תמונה" },
    { type: "button", icon: MousePointer, label: "כפתור" },
  ];

  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
      <h3 className="text-white text-xl font-bold mb-4 text-center">בונה דפים חכם - Drag & Drop</h3>
      <div className="grid grid-cols-4 gap-4 h-80">
        {/* Tools Panel */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-white text-sm font-semibold mb-3">כלים</h4>
          <div className="space-y-2">
            {tools.map((tool) => (
              <div
                key={tool.type}
                draggable
                onDragStart={() => handleDragStart(tool.type)}
                className="bg-brand-primary hover:bg-hover-primary text-white p-2 rounded cursor-move flex items-center space-x-reverse space-x-2 transition-colors"
              >
                <tool.icon className="w-4 h-4" />
                <span className="text-xs">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Canvas */}
        <div 
          className="col-span-3 bg-white rounded-lg relative border-2 border-dashed border-gray-300 min-h-full"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {canvasItems.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              גרור כלים לכאן כדי לבנות את הדף
            </div>
          )}
          {canvasItems.map((item) => (
            <div
              key={item.id}
              className="absolute bg-blue-100 border border-blue-300 p-2 rounded text-xs"
              style={{ left: item.x, top: item.y }}
            >
              {item.type === "text" && "טקסט"}
              {item.type === "image" && "תמונה"}
              {item.type === "button" && "כפתור"}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-400 text-sm">זה רק דמו - השאלון יבנה עבורך דף אמיתי!</p>
      </div>
    </div>
  );
};

export default DragDropBuilder;
