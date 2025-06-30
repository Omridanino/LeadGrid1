
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Search, Sparkles, Zap, Eye, Download, Filter } from "lucide-react";
import { templates } from "@/data/templates";

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

  const categories = [
    { id: "all", name: "הכל", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { id: "basic", name: "בסיסי", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { id: "3d", name: "תלת מימד", color: "bg-gradient-to-r from-purple-600 to-indigo-600" },
    { id: "glass", name: "זכוכית", color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
    { id: "geometric", name: "גיאומטרי", color: "bg-gradient-to-r from-orange-500 to-red-500" },
    { id: "creative", name: "יצירתי", color: "bg-gradient-to-r from-pink-500 to-rose-500" }
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
                      בנו את דף הנחיתה ב-5 דקות
                    </DialogTitle>
                    <p className="text-gray-400 text-lg mt-2">בחרו תבנית ותתחילו לערוך מיד - 100 עיצובים מרהיבים ✨</p>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-full px-6 py-3 border border-purple-500/30 backdrop-blur-sm">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-semibold text-white">100 תבניות מקצועיות • עריכה מיידית • ללא קידוד 🚀</span>
                </div>
              </DialogHeader>

              {/* Search and Filter */}
              <div className="mb-8 space-y-4">
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="חפשו תבנית..."
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
                        px-6 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105
                      `}
                    >
                      <Filter className="w-4 h-4 ml-2" />
                      {category.name}
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
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                        <div className="relative z-10 text-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                            <Sparkles className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-xs text-gray-300 font-medium">{template.category.toUpperCase()}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-white text-lg">{template.name}</h3>
                          <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs">
                            {template.category}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-400 text-sm">
                          {template.hero.description.substring(0, 100)}...
                        </p>
                        
                        <div className="flex gap-2 pt-2">
                          <Button
                            onClick={() => handlePreview(template)}
                            size="sm"
                            variant="outline"
                            className="flex-1 bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50 hover:text-white"
                          >
                            <Eye className="w-4 h-4 ml-1" />
                            תצוגה מקדימה
                          </Button>
                          <Button
                            onClick={() => handleTemplateSelect(template)}
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg"
                          >
                            <Download className="w-4 h-4 ml-1" />
                            בחר תבנית
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
                  <p className="text-gray-400">נסו לשנות את החיפוש או הקטגוריה</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
              {/* Placeholder for template preview */}
              <div className="w-full h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center text-white">
                  <Sparkles className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                  <h2 className="text-2xl font-bold mb-2">{previewTemplate.name}</h2>
                  <p className="text-gray-400">תצוגה מקדימה של התבנית</p>
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
