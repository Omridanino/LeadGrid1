
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Search, Sparkles, Zap, Eye, Download, Filter, Palette, Building, Leaf, Cpu, Star, Heart } from "lucide-react";
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
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { 
      id: "all", 
      name: "כל התבניות", 
      color: "bg-gradient-to-r from-purple-500 to-pink-500", 
      icon: <Sparkles className="w-4 h-4" />,
      description: "כל 70 התבניות הפרימיום"
    },
    { 
      id: "minimal", 
      name: "מינימלי ומודרני", 
      color: "bg-gradient-to-r from-gray-400 to-gray-600", 
      icon: <Sparkles className="w-4 h-4" />,
      description: "פשטות וניקיון"
    },
    { 
      id: "colorful", 
      name: "נועז וצבעוני", 
      color: "bg-gradient-to-r from-pink-500 to-red-500", 
      icon: <Palette className="w-4 h-4" />,
      description: "צבעים חזקים ואנרגיה"
    },
    { 
      id: "artistic", 
      name: "אמנותי וניסיוני", 
      color: "bg-gradient-to-r from-purple-600 to-indigo-600", 
      icon: <Zap className="w-4 h-4" />,
      description: "יצירתיות ללא גבולות"
    },
    { 
      id: "corporate", 
      name: "עסקי ואלגנטי", 
      color: "bg-gradient-to-r from-blue-500 to-blue-700", 
      icon: <Building className="w-4 h-4" />,
      description: "מקצועיות ואמינות"
    },
    { 
      id: "organic", 
      name: "אורגני ורך", 
      color: "bg-gradient-to-r from-green-500 to-emerald-500", 
      icon: <Leaf className="w-4 h-4" />,
      description: "טבעיות ושלווה"
    },
    { 
      id: "tech", 
      name: "טכנולוגי ועתידני", 
      color: "bg-gradient-to-r from-cyan-500 to-blue-600", 
      icon: <Cpu className="w-4 h-4" />,
      description: "חדשנות ועתיד"
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.hero.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.hero.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTemplateSelect = (template: any) => {
    toast({
      title: "🎉 תבנית נבחרה בהצלחה!",
      description: `התבנית "${template.name}" נבחרה. כעת תועבר לעריכה המתקדמת`,
      duration: 3000,
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
      duration: 2000,
    });
  };

  const toggleFavorite = (templateId: number) => {
    setFavorites(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    );
  };

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return templates.length;
    return templates.filter(t => t.category === categoryId).length;
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="w-[95vw] max-w-7xl max-h-[90vh] overflow-y-auto border-0 p-0 bg-transparent shadow-none">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border border-gray-700">
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative p-8">
              <DialogHeader className="pb-8 text-center">
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-lg animate-pulse">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-2">
                      70 תבניות נחיתה פרימיום 🚀
                    </DialogTitle>
                    <p className="text-gray-400 text-xl">בחר מתוך 6 סגנונות עיצוב מתקדמים • כל תבנית עם 10 סקשנים מלאים ✨</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                    onClick={handleQuestionnaireOpen}
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-10 py-4 rounded-full shadow-xl text-xl font-bold transform hover:scale-105 transition-all duration-300"
                  >
                    <Zap className="w-6 h-6 ml-2" />
                    🎯 מצא את העיצוב המושלם עבורי
                  </Button>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">
                      או דפדף בכל התבניות למטה ↓
                    </div>
                    <div className="text-xs text-gray-500">
                      כל תבנית כוללת: Hero • סיפור רגשי • יתרונות • המלצות • אודות • מחירים • FAQ • CTA • צור קשר • Footer
                    </div>
                  </div>
                </div>
              </DialogHeader>

              {/* Search and Filter */}
              <div className="mb-10 space-y-6">
                <div className="relative max-w-lg mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <Input
                    placeholder="חפש תבנית לפי שם, תיאור או מילות מפתח..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-14 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 h-14 text-lg backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500 rounded-2xl"
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className={`
                        ${selectedCategory === category.id 
                          ? `${category.color} text-white shadow-xl shadow-purple-500/25 scale-105` 
                          : "bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500"
                        } 
                        px-6 py-3 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center gap-3 text-base font-semibold
                      `}
                    >
                      {category.icon}
                      <div className="text-center">
                        <div>{category.name}</div>
                        <Badge variant="secondary" className="mt-1 bg-white/20 text-xs">
                          {getCategoryCount(category.id)} תבניות
                        </Badge>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Templates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredTemplates.map((template) => (
                  <Card key={template.id} className="group bg-gray-800/30 border-gray-600 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      {/* Template Preview */}
                      <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden relative">
                        {template.hero.image && (
                          <img
                            src={`https://images.unsplash.com/${template.hero.image}?w=400&h=240&fit=crop`}
                            alt={template.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                        
                        {/* Overlay Controls */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                          <Button
                            onClick={() => handlePreview(template)}
                            size="sm"
                            className="bg-white/90 text-gray-900 hover:bg-white"
                          >
                            <Eye className="w-4 h-4 ml-1" />
                            תצוגה מקדימה
                          </Button>
                          <Button
                            onClick={() => handleTemplateSelect(template)}
                            size="sm"
                            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                          >
                            <Download className="w-4 h-4 ml-1" />
                            בחר תבנית
                          </Button>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge className={`text-white text-xs font-semibold ${categories.find(c => c.id === template.category)?.color || 'bg-gray-500'}`}>
                            {categories.find(c => c.id === template.category)?.name || template.category}
                          </Badge>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(template.id)}
                          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                          <Heart className={`w-4 h-4 ${favorites.includes(template.id) ? 'fill-red-500 text-red-500' : ''}`} />
                        </button>
                      </div>
                      
                      {/* Template Info */}
                      <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-bold text-white text-xl mb-2">{template.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                              {template.hero.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Template Features */}
                        <div className="space-y-2">
                          <div className="text-xs text-gray-500 font-semibold">כולל:</div>
                          <div className="flex flex-wrap gap-1">
                            {['Hero', 'Story', 'Features', 'Testimonials', 'About', 'Pricing', 'FAQ', 'CTA', 'Contact', 'Footer'].map((section) => (
                              <Badge key={section} variant="outline" className="text-xs border-gray-600 text-gray-400">
                                {section}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-2">
                          <Button
                            onClick={() => handlePreview(template)}
                            size="sm"
                            variant="outline"
                            className="flex-1 bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50 hover:text-white hover:border-gray-500"
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

              {/* No Results State */}
              {filteredTemplates.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">לא נמצאו תבניות מתאימות</h3>
                  <p className="text-gray-400 mb-6">נסה לשנות את מילות החיפוש או לבחור קטגוריה אחרת</p>
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  >
                    איפוס החיפוש
                  </Button>
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
          <DialogContent className="w-[95vw] max-w-6xl max-h-[90vh] overflow-y-auto border-0 p-0 bg-black rounded-2xl">
            <div className="relative">
              <div className="absolute top-4 right-4 z-50 flex gap-3">
                <Button
                  onClick={() => setPreviewTemplate(null)}
                  size="sm"
                  variant="outline"
                  className="bg-black/80 border-gray-600 text-white hover:bg-gray-800"
                >
                  סגור תצוגה
                </Button>
                <Button
                  onClick={() => handleTemplateSelect(previewTemplate)}
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                >
                  <Download className="w-4 h-4 ml-1" />
                  בחר תבנית זו
                </Button>
              </div>
              
              {/* Full Template Preview */}
              <div 
                className="w-full min-h-screen"
                style={{ 
                  background: previewTemplate.styles.heroBackground,
                  color: previewTemplate.styles.textColor
                }}
              >
                {/* Hero Section Preview */}
                <div className="relative py-20 px-8">
                  <div className="max-w-6xl mx-auto text-center">
                    {previewTemplate.hero.badge && (
                      <Badge className="mb-6 text-lg px-4 py-2" style={{ backgroundColor: previewTemplate.styles.primaryColor }}>
                        {previewTemplate.hero.badge}
                      </Badge>
                    )}
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                      {previewTemplate.hero.title}
                    </h1>
                    <h2 className="text-xl md:text-3xl mb-8 opacity-80 font-medium">
                      {previewTemplate.hero.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl mb-10 opacity-70 max-w-4xl mx-auto leading-relaxed">
                      {previewTemplate.hero.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Button 
                        style={{ backgroundColor: previewTemplate.styles.primaryColor }}
                        className="text-white px-10 py-4 text-lg font-semibold shadow-lg"
                      >
                        {previewTemplate.hero.button1Text}
                      </Button>
                      <Button 
                        variant="outline"
                        style={{ 
                          borderColor: previewTemplate.styles.secondaryColor,
                          color: previewTemplate.styles.secondaryColor
                        }}
                        className="px-10 py-4 text-lg font-semibold"
                      >
                        {previewTemplate.hero.button2Text}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Features Section Preview */}
                <div 
                  className="py-20 px-8"
                  style={{ background: previewTemplate.styles.featuresBackground }}
                >
                  <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">
                      {previewTemplate.features.title}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {previewTemplate.features.items.map((item: any, index: number) => (
                        <div key={index} className="text-center p-6">
                          <div className="text-4xl mb-4">{item.icon}</div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="opacity-70">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Note about full template */}
                <div className="py-12 px-8 text-center bg-gray-900">
                  <p className="text-gray-400">
                    🚀 זוהי תצוגה מקדימה קצרה • התבנית המלאה כוללת 10 סקשנים: Hero, סיפור רגשי, יתרונות, המלצות, אודות, מחירים, FAQ, CTA סופי, צור קשר ו-Footer
                  </p>
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
