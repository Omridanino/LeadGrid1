
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, X, Zap, Sparkles, Eye, Cpu, Grid3X3, Layers } from "lucide-react";
import { templates } from '@/data/templates';
import TemplateEditor from "./ModernTemplateEditor";

interface StyleQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

const StyleQuestionnaire = ({ isOpen, onClose }: StyleQuestionnaireProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showTemplateEditor, setShowTemplateEditor] = useState(false);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setShowTemplateEditor(true);
  };

  const handleTemplateChange = (updatedTemplate) => {
    setSelectedTemplate(updatedTemplate);
  };

  const handleCloseEditor = () => {
    setShowTemplateEditor(false);
    onClose();
  };

  if (!isOpen) return null;

  if (showTemplateEditor && selectedTemplate) {
    return (
      <TemplateEditor
        template={selectedTemplate}
        onTemplateChange={handleTemplateChange}
        onClose={handleCloseEditor}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-sm flex items-center justify-center p-4"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-7xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto border border-gray-700/50"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 p-8 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute top-8 right-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-1/2 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <Grid3X3 className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  בחר תבנית מתקדמת
                </h2>
                <p className="text-blue-100 text-lg">
                  תבניות מקצועיות עם טכנולוגיה מתקדמת לעסק שלך
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl w-12 h-12 flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative mt-6 flex items-center gap-6">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              <Zap className="w-4 h-4 ml-2" />
              {templates.length} תבניות זמינות
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              <Sparkles className="w-4 h-4 ml-2" />
              עיצוב רספונסיבי
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              <Cpu className="w-4 h-4 ml-2" />
              טכנולוגיה מתקדמת
            </Badge>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer group"
                onClick={() => handleTemplateSelect(template)}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-800">
                  {/* Template Preview */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black p-6 border-b border-gray-700/50">
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-blue-600/80 backdrop-blur-sm text-white text-xs border-blue-500/30">
                        {template.category}
                      </Badge>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      
                      <h4 className="text-white font-bold text-sm mb-2 truncate">
                        {template.hero.title}
                      </h4>
                      <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                        {template.hero.subtitle}
                      </p>
                      
                      <div className="flex gap-1">
                        <div className="px-2 py-1 bg-blue-600/80 text-white text-xs rounded-md">
                          {template.hero.button1Text}
                        </div>
                        <div className="px-2 py-1 bg-gray-600/80 text-white text-xs rounded-md">
                          {template.hero.button2Text}
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                        {template.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Layers className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-xs">מתקדם</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                      <Eye className="w-4 h-4 ml-2" />
                      בחר ועצב תבנית
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Cpu className="w-6 h-6 text-blue-400" />
              <h4 className="text-xl font-bold text-white">
                טכנולוגיה מתקדמת
              </h4>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              כל התבניות שלנו בנויות עם הטכנולוגיות החדישות ביותר וכוללות עורך מתקדם לעיצוב מותאם אישית
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>עיצוב רספונסיבי</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>אופטימיזציה למהירות</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>SEO מתקדם</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StyleQuestionnaire;
