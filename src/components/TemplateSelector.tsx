
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Eye, Palette, ArrowLeft } from 'lucide-react';
import { templates } from '@/data/templates';
import { TemplateData } from '@/types/template';

interface TemplateSelectorProps {
  onSelect: (template: TemplateData) => void;
  onBack: () => void;
}

const TemplateSelector = ({ onSelect, onBack }: TemplateSelectorProps) => {
  const handleTemplateSelect = (template: TemplateData) => {
    onSelect(template);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-white text-3xl font-bold mb-2">בחר תבנית</h1>
            <p className="text-gray-300">בחר את התבנית שהכי מתאימה לעסק שלך</p>
          </div>
          <Button
            onClick={onBack}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            <ArrowLeft className="w-4 h-4 ml-2" />
            חזור
          </Button>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="cursor-pointer transition-all bg-gray-800 border-gray-700 hover:bg-gray-700 hover:scale-105"
              onClick={() => handleTemplateSelect(template)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-lg">{template.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-600 text-white text-xs">{template.category}</Badge>
                  </div>
                </div>
                
                {/* Color Palette Display */}
                <div className="flex items-center gap-2 mt-2">
                  <Palette className="w-4 h-4 text-gray-400" />
                  <div className="flex items-center gap-1">
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-white/20 shadow-sm"
                      style={{ backgroundColor: template.styles.primaryColor }}
                      title={`צבע ראשי: ${template.styles.primaryColor}`}
                    ></div>
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-white/20 shadow-sm"
                      style={{ backgroundColor: template.styles.secondaryColor }}
                      title={`צבע משני: ${template.styles.secondaryColor}`}
                    ></div>
                    <span className="text-xs text-gray-400 mr-2">צבעי התבנית</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-medium mb-2">{template.hero.title}</h4>
                  <p className="text-gray-400 text-sm mb-3">{template.hero.subtitle}</p>
                  <div className="flex gap-2">
                    <div 
                      className="px-2 py-1 text-white text-xs rounded"
                      style={{ backgroundColor: template.styles.primaryColor }}
                    >
                      {template.hero.button1Text}
                    </div>
                    <div className="px-2 py-1 bg-gray-600 text-white text-xs rounded">
                      {template.hero.button2Text}
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Eye className="w-4 h-4 ml-2" />
                  בחר ועצב תבנית זו
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
