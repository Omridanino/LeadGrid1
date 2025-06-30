
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Grid, List, Sparkles, Palette, Zap, Building, Leaf, Cpu, Eye } from "lucide-react";
import { templates } from "@/data/templates";
import { TemplateData } from "@/types/template";
import TemplateEditor from "./TemplateEditor";

interface TemplateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStyle?: string;
}

const TemplateSelector = ({ isOpen, onClose, selectedStyle }: TemplateSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(selectedStyle || "all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const categories = [
    { id: "all", name: "הכל", icon: Grid, count: templates.length },
    { id: "minimal", name: "מינימלי", icon: Sparkles, count: templates.filter(t => t.category === "minimal").length },
    { id: "colorful", name: "צבעוני", icon: Palette, count: templates.filter(t => t.category === "colorful").length },
    { id: "artistic", name: "אמנותי", icon: Zap, count: templates.filter(t => t.category === "artistic").length },
    { id: "corporate", name: "עסקי", icon: Building, count: templates.filter(t => t.category === "corporate").length },
    { id: "organic", name: "אורגני", icon: Leaf, count: templates.filter(t => t.category === "organic").length },
    { id: "tech", name: "טכנולוגי", icon: Cpu, count: templates.filter(t => t.category === "tech").length }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.hero.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTemplateSelect = (template: TemplateData) => {
    setSelectedTemplate(template);
    setIsEditorOpen(true);
  };

  const handleEditorClose = () => {
    setIsEditorOpen(false);
    setSelectedTemplate(null);
  };

  const handleTemplateChange = (updatedTemplate: TemplateData) => {
    setSelectedTemplate(updatedTemplate);
    // Here you can save the template changes to localStorage or state management
    console.log("Template updated:", updatedTemplate);
  };

  useEffect(() => {
    if (selectedStyle && selectedStyle !== "all") {
      setSelectedCategory(selectedStyle);
    }
  }, [selectedStyle]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" dir="rtl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">🎨 בחר את התבנית המושלמת</h2>
                <p className="text-blue-100 text-lg">
                  {filteredTemplates.length} תבניות פרימיום • עיצוב מקצועי לכל עסק
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors text-2xl font-bold bg-white/10 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4 flex-1 w-full sm:w-auto">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="חפש תבניות..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="text-white border-white/30"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="text-white border-white/30"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                    <Badge variant="secondary" className="ml-1">
                      {category.count}
                    </Badge>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Templates Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${searchTerm}-${viewMode}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
                  : "space-y-4"
                }
              >
                {filteredTemplates.map((template) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer"
                  >
                    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                      {/* Template Preview */}
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <div 
                          className="absolute inset-0 p-4 text-white text-xs"
                          style={{ 
                            background: template.styles.heroBackground || template.styles.primaryColor,
                            color: template.styles.textColor 
                          }}
                        >
                          <div className="space-y-2">
                            <div className="text-lg font-bold truncate">
                              {template.hero.title}
                            </div>
                            <div className="text-sm opacity-80 truncate">
                              {template.hero.subtitle}
                            </div>
                            <div className="flex gap-1 mt-2">
                              <div className="h-2 w-8 bg-white/30 rounded"></div>
                              <div className="h-2 w-6 bg-white/20 rounded"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                          <Button
                            size="sm"
                            className="bg-white text-gray-900 hover:bg-gray-100"
                            onClick={() => handleTemplateSelect(template)}
                          >
                            <Eye className="w-4 h-4 ml-1" />
                            תצוגה מקדימה
                          </Button>
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-lg truncate">{template.name}</h3>
                          <Badge 
                            variant="outline" 
                            className="text-xs"
                            style={{ 
                              borderColor: template.styles.primaryColor,
                              color: template.styles.primaryColor 
                            }}
                          >
                            {template.category}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {template.hero.description}
                        </p>
                        
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="flex-1"
                            style={{ backgroundColor: template.styles.primaryColor }}
                            onClick={() => handleTemplateSelect(template)}
                          >
                            בחר תבנית
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleTemplateSelect(template)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">לא נמצאו תבניות</h3>
                <p className="text-gray-500">נסה לשנות את החיפוש או הקטגוריה</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Template Editor */}
      {isEditorOpen && selectedTemplate && (
        <TemplateEditor
          template={selectedTemplate}
          onTemplateChange={handleTemplateChange}
          onClose={handleEditorClose}
        />
      )}
    </>
  );
};

export default TemplateSelector;

