
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Search, Sparkles, Zap, Eye, Download, Filter, Palette, Building, Leaf, Cpu } from "lucide-react";
import { templates } from "@/data/templates";
import StyleQuestionnaire from "./StyleQuestionnaire";

interface TemplateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const TemplateSelector = ({ isOpen, onClose }: TemplateSelectorProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [previewTemplate, setPreviewTemplate] = useState<any>(null);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  const categories = [
    { id: "all", name: "הכל", color: "bg-gradient-to-r from-purple-500 to-pink-500", icon: <Sparkles className="w-4 h-4" /> },
    { id: "minimal", name: "מינימלי", color: "bg-gradient-to-r from-gray-400 to-gray-600", icon: <Sparkles className="w-4 h-4" /> },
    { id: "colorful", name: "צבעוני", color: "bg-gradient-to-r from-pink-500 to-red-500", icon: <Palette className="w-4 h-4" /> },
    { id: "artistic", name: "אמנותי", color: "bg-gradient-to-r from-purple-600 to-indigo-600", icon: <Zap className="w-4 h-4" /> },
    { id: "corporate", name: "עסקי", color: "bg-gradient-to-r from-blue-500 to-blue-700", icon: <Building className="w-4 h-4" /> },
    { id: "organic", name: "אורגני", color: "bg-gradient-to-r from-green-500 to-emerald-500", icon: <Leaf className="w-4 h-4" /> },
    { id: "tech", name: "טכנולוגי", color: "bg-gradient-to-r from-cyan-500 to-blue-600", icon: <Cpu className="w-4 h-4" /> }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTemplateSelect = (template: any) => {
    toast({
      title: "🎉 תבנית נבחרה בהצלחה!",
      description: `התבנית "${template.name}" נבחרה. כעת תועבר לעריכה`,
    });

    navigate('/generated-landing-page', { 
      state: { 
        selectedTemplate: template,
        formData: {
          businessName: "העסק שלי",
          businessType: "עסק דיגיטלי",
          selectedTemplate: template
        }
      } 
    });
    
    onClose();
  };

  const handlePreview = (template: any) => {
    setPreviewTemplate(template);
  };

  const handleQuestionnaireOpen = () => {
    setShowQuestionnaire(true);
  };

  const handleStyleSelect = (styleId: string) => {
    setSelectedCategory(styleId);
    setShowQuestionnaire(false);
    toast({
      title: "✨ מצוין!",
      description: `נבחרו תבניות בסגנון ${categories.find(c => c.id === styleId)?.name}`,
    });
  };

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return templates.length;
    return templates.filter(t => t.category === categoryId).length;
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="w-[95vw] max-w-7xl max-h-[90vh] overflow-y-auto border-0 p-0 bg-transparent shadow-none">
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl border border-gray-800">
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative p-6">
              <DialogHeader className="pb-6 text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                      70 תבניות נחיתה מקצועיות
                    </DialogTitle>
                    <p className="text-gray-400 text-lg mt-2">בחר מתוך 6 סגנונות עיצוב מתקדמים ✨</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    onClick={handleQuestionnaireOpen}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold"
                  >
                    <Zap className="w-5 h-5 ml-2" />
                    מצא את העיצוב המתאים לי
                  </Button>
                  <div className="text-sm text-gray-400">
                    או דפדף בכל התבניות למטה ↓
                  </div>
                </div>
              </DialogHeader>

              {/* Search and Filter */}
              <div className="mb-8 space-y-4">
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="חפש תבנית..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 h-12 text-lg backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className={`
                        ${selectedCategory === category.id 
                          ? `${category.color} text-white shadow-lg shadow-purple-500/25` 
                          : "bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50"
                        } 
                        px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center gap-2
                      `}
                    >
                      {category.icon}
                      {category.name}
                      <Badge variant="secondary" className="mr-1 bg-white/20 text-xs">
                        {getCategoryCount(category.id)}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Templates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTemplates.map((template) => (
                  <Card key={template.id} className="group bg-gray-800/30 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                        {/* Template preview image */}
                        {template.hero.image && (
                          <img
                            src={`https://images.unsplash.com/${template.hero.image}?w=300&h=200&fit=crop`}
                            alt={template.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                              <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs text-gray-300 font-medium">{template.category.toUpperCase()}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-white text-lg">{template.name}</h3>
                          <Badge className={`text-white text-xs ${categories.find(c => c.id === template.category)?.color || 'bg-gray-500'}`}>
                            {categories.find(c => c.id === template.category)?.name || template.category}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-400 text-sm">
                          {template.hero.description.substring(0, 80)}...
                        </p>
                        
                        <div className="flex gap-2 pt-2">
                          <Button
                            onClick={() => handlePreview(template)}
                            size="sm"
                            variant="outline"
                            className="flex-1 bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50 hover:text-white"
                          >
                            <Eye className="w-4 h-4 ml-1" />
                            תצוגה
                          </Button>
                          <Button
                            onClick={() => handleTemplateSelect(template)}
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg"
                          >
                            <Download className="w-4 h-4 ml-1" />
                            בחר
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredTemplates.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">לא נמצאו תבניות</h3>
                  <p className="text-gray-400">נסה לשנות את החיפוש או הקטגוריה</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Style Questionnaire */}
      <StyleQuestionnaire
        isOpen={showQuestionnaire}
        onClose={() => setShowQuestionnaire(false)}
        onStyleSelect={handleStyleSelect}
      />

      {/* Template Preview Modal */}
      {previewTemplate && (
        <Dialog open={!!previewTemplate} onOpenChange={() => setPreviewTemplate(null)}>
          <DialogContent className="w-[95vw] max-w-6xl max-h-[90vh] overflow-y-auto border-0 p-0 bg-black">
            <div className="relative">
              <div className="absolute top-4 right-4 z-50 flex gap-2">
                <Button
                  onClick={() => setPreviewTemplate(null)}
                  size="sm"
                  variant="outline"
                  className="bg-black/80 border-gray-600 text-white hover:bg-gray-800"
                >
                  סגור
                </Button>
                <Button
                  onClick={() => handleTemplateSelect(previewTemplate)}
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                >
                  <Download className="w-4 h-4 ml-1" />
                  בחר תבנית
                </Button>
              </div>
              {/* Template preview with actual styling */}
              <div 
                className="w-full min-h-screen p-8"
                style={{ 
                  background: previewTemplate.styles.heroBackground,
                  color: previewTemplate.styles.textColor
                }}
              >
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-6">
                    <Badge className="mb-4" style={{ backgroundColor: previewTemplate.styles.primaryColor }}>
                      {previewTemplate.hero.badge}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      {previewTemplate.hero.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl mb-6 opacity-80">
                      {previewTemplate.hero.subtitle}
                    </h2>
                    <p className="text-lg mb-8 opacity-70 max-w-2xl mx-auto">
                      {previewTemplate.hero.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        style={{ backgroundColor: previewTemplate.styles.primaryColor }}
                        className="text-white px-8 py-3"
                      >
                        {previewTemplate.hero.button1Text}
                      </Button>
                      <Button 
                        variant="outline"
                        style={{ 
                          borderColor: previewTemplate.styles.secondaryColor,
                          color: previewTemplate.styles.secondaryColor
                        }}
                        className="px-8 py-3"
                      >
                        {previewTemplate.hero.button2Text}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default TemplateSelector;
