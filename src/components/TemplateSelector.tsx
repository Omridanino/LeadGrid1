
import { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  CheckCircle, 
  ExternalLink,
  Globe,
  Sparkles,
  Edit,
  Eye,
  Copy,
  Crown,
  Star
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { templates } from '@/data/templates';
import TemplateEditor from './ModernTemplateEditor';
import GlassIcon from "@/components/ui/glass-icon";

interface TemplateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

const TemplateSelector = ({ isOpen, onClose, initialCategory }: TemplateSelectorProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
  const [editingTemplate, setEditingTemplate] = useState<TemplateData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || '');

  const handleTemplateSelect = (template: TemplateData) => {
    setSelectedTemplate(template);
    setEditingTemplate(template);
  };

  const handleEditTemplate = () => {
    if (selectedTemplate) {
      setIsEditing(true);
    }
  };

  const handleTemplateChange = (updatedTemplate: TemplateData) => {
    setEditingTemplate(updatedTemplate);
  };

  const handlePublishSuccess = (url: string) => {
    setPublishedUrl(url);
    setShowSuccess(true);
    setIsEditing(false);
  };

  const openSite = () => {
    if (publishedUrl) {
      window.open(publishedUrl, '_blank');
    }
  };

  const copyUrl = () => {
    if (publishedUrl) {
      navigator.clipboard.writeText(publishedUrl);
      alert('הכתובת הועתקה!');
    }
  };

  if (!isOpen) return null;

  // Show success screen
  if (showSuccess && publishedUrl) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
        {/* Background effects matching main site */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                'radial-gradient(ellipse_at_top,rgba(255,215,0,0.1),transparent_70%)',
                'radial-gradient(ellipse_at_bottom,rgba(255,215,0,0.05),transparent_70%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 w-full max-w-2xl p-8 shadow-2xl">
          <div className="text-center space-y-6">
            <div className="mx-auto flex justify-center mb-6">
              <GlassIcon 
                icon={CheckCircle} 
                size="xl" 
                variant="gold"
              />
            </div>
            
            <div>
              <h3 className="text-white text-3xl font-bold mb-3">🎉 האתר שלך מוכן!</h3>
              <p className="text-gray-300 text-lg">האתר שלך זמין לצפייה עכשיו</p>
            </div>

            <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-yellow-400/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-right flex-1">
                    <div className="text-white font-semibold mb-1">האתר שלך:</div>
                    <div className="text-yellow-400 text-sm break-all">{publishedUrl}</div>
                    <div className="text-green-400 text-xs mt-1 font-medium">✅ זמין לצפייה עכשיו!</div>
                  </div>
                  <div className="flex gap-2 mr-4">
                    <Button
                      size="sm"
                      onClick={copyUrl}
                      className="bg-yellow-400/15 backdrop-blur-xl border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/25"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={openSite}
                      className="bg-yellow-400/15 backdrop-blur-xl border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/25"
                    >
                      <ExternalLink className="w-4 h-4 ml-1" />
                      פתח
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 backdrop-blur-xl">
                <CardContent className="p-4">
                  <h4 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                    <div className="flex justify-center">
                      <GlassIcon 
                        icon={Globe} 
                        size="sm" 
                        variant="gold"
                      />
                    </div>
                    מה עכשיו?
                  </h4>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>• שתף את הקישור עם חברים</p>
                    <p>• הוסף לכרטיס ביקור</p>
                    <p>• שתף ברשתות החברתיות</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 backdrop-blur-xl">
                <CardContent className="p-4">
                  <h4 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                    <div className="flex justify-center">
                      <GlassIcon 
                        icon={Star} 
                        size="sm" 
                        variant="gold"
                      />
                    </div>
                    מה קיבלת?
                  </h4>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>• אתר מקצועי וזמין 24/7</p>
                    <p>• מהירות טעינה מעולה</p>
                    <p>• זמינות גבוהה ואמינה</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={onClose}
              className="bg-yellow-400/15 backdrop-blur-xl border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/25 px-8 py-3 rounded-xl shadow-2xl hover:shadow-yellow-400/30 transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              סיום
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Show template editor
  if (isEditing && editingTemplate) {
    return (
      <TemplateEditor
        template={editingTemplate}
        onTemplateChange={handleTemplateChange}
        onClose={() => setIsEditing(false)}
        onPublishSuccess={handlePublishSuccess}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      {/* Background effects matching main site */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'radial-gradient(ellipse_at_top,rgba(255,215,0,0.1),transparent_70%)',
              'radial-gradient(ellipse_at_bottom,rgba(255,215,0,0.05),transparent_70%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Minimal floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-700/50 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex justify-center">
                <GlassIcon 
                  icon={Sparkles} 
                  size="md" 
                  variant="gold"
                />
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold">בחר תבנית לאתר שלך</h2>
                <p className="text-yellow-400 text-sm mt-1">תבניות מקצועיות מוכנות לעריכה!</p>
              </div>
            </div>
            <Button
              onClick={onClose}
              size="sm"
              className="bg-yellow-400/15 backdrop-blur-xl border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/25 rounded-xl"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <div className="p-6 h-full overflow-y-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-6 mb-6">
                <Badge className="bg-yellow-400/15 backdrop-blur-xl border border-yellow-400/30 text-yellow-400 px-4 py-2 flex items-center gap-2">
                  <div className="flex justify-center">
                    <GlassIcon 
                      icon={Crown} 
                      size="sm" 
                      variant="gold"
                    />
                  </div>
                  {templates.length} תבניות זמינות
                </Badge>
                <Badge className="bg-yellow-400/15 backdrop-blur-xl border border-yellow-400/30 text-yellow-400 px-4 py-2 flex items-center gap-2">
                  <div className="flex justify-center">
                    <GlassIcon 
                      icon={Edit} 
                      size="sm" 
                      variant="gold"
                    />
                  </div>
                  מוכן לעריכה
                </Badge>
              </div>
              <p className="text-gray-300 text-lg">בחר תבנית שמתאימה לעסק שלך ותוכל לערוך אותה לפי הצרכים שלך</p>
            </div>

            {/* Templates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {templates
                .filter(template => !selectedCategory || template.category === selectedCategory)
                .map((template) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-300 h-full ${
                      selectedTemplate?.id === template.id 
                        ? 'ring-2 ring-yellow-400 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border-yellow-400/40' 
                        : 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-gray-700/50 hover:border-yellow-400/30 backdrop-blur-xl'
                    }`}
                    onClick={() => handleTemplateSelect(template)}
                  >
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="mb-4 flex justify-center">
                          <Badge className="bg-yellow-400/15 backdrop-blur-xl border border-yellow-400/30 text-yellow-400 px-3 py-1">
                            {template.category}
                          </Badge>
                        </div>
                        
                        <h3 className="text-white font-bold text-lg mb-2">
                          {template.name}
                        </h3>
                        
                        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-4 rounded-lg mb-4 border border-gray-700/30">
                          <h4 className="text-yellow-400 font-semibold text-sm mb-2">
                            {template.hero.title}
                          </h4>
                          <p className="text-gray-300 text-xs mb-3">
                            {template.hero.subtitle}
                          </p>
                          <div className="flex gap-2 justify-center">
                            <div className="px-3 py-1 bg-yellow-400/15 backdrop-blur-xl border border-yellow-400/30 text-yellow-400 text-xs rounded">
                              {template.hero.button1Text}
                            </div>
                            <div className="px-3 py-1 bg-gray-700/50 backdrop-blur-xl border border-gray-600/30 text-gray-300 text-xs rounded">
                              {template.hero.button2Text}
                            </div>
                          </div>
                        </div>

                        {selectedTemplate?.id === template.id && (
                          <div className="text-yellow-400 text-sm font-medium flex items-center justify-center gap-2">
                            <div className="flex justify-center">
                              <GlassIcon 
                                icon={CheckCircle} 
                                size="sm" 
                                variant="gold"
                              />
                            </div>
                            נבחר
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Action Button */}
            {selectedTemplate && (
              <div className="text-center space-y-4">
                <Button
                  onClick={handleEditTemplate}
                  className="bg-yellow-400/15 backdrop-blur-xl border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/25 px-12 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-yellow-400/30 transform hover:scale-105 transition-all duration-300"
                >
                  התחל לערוך את התבנית
                </Button>
                <p className="text-gray-400 text-sm">
                  תוכל לערוך את התבנית ולהתאים אותה לצרכים שלך לפני הפרסום
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
