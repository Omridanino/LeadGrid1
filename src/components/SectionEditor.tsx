
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Users, Heart, Star, Clock, DollarSign, Award, Map, Video, Mail, Image, Briefcase } from "lucide-react";
import HeroEditor from "./HeroEditor";
import FeaturesEditor from "./FeaturesEditor";
import TestimonialsEditor from "./TestimonialsEditor";
import FAQEditor from "./FAQEditor";
import EditPopup from "./EditPopup";
import IconSelector from "./IconSelector";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Trash2, Plus } from "lucide-react";

interface SectionEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  formData: any;
  onFormDataChange: (newFormData: any) => void;
}

const SectionEditor = ({ content, onContentChange, formData, onFormDataChange }: SectionEditorProps) => {
  const [localAbout, setLocalAbout] = useState({
    aboutTitle: content.aboutTitle || '',
    aboutText: content.aboutText || ''
  });

  const [localEmotional, setLocalEmotional] = useState({
    title: content.emotional?.title || '',
    content: content.emotional?.content || ''
  });

  const [localPricing, setLocalPricing] = useState(
    content.creativeElements?.find(el => el.type === 'pricing')?.content || []
  );

  const [localTeam, setLocalTeam] = useState(
    content.creativeElements?.find(el => el.type === 'teamSection')?.content || {}
  );

  const [localPortfolio, setLocalPortfolio] = useState(
    content.creativeElements?.find(el => el.type === 'portfolio')?.content || {}
  );

  const [localServiceCards, setLocalServiceCards] = useState(
    content.creativeElements?.find(el => el.type === 'serviceCards')?.content || []
  );

  const [localTimeline, setLocalTimeline] = useState(
    content.creativeElements?.find(el => el.type === 'timeline')?.content || []
  );

  const handleAboutSave = () => {
    onContentChange({
      ...content,
      aboutTitle: localAbout.aboutTitle,
      aboutText: localAbout.aboutText
    });
  };

  const handleEmotionalSave = () => {
    onContentChange({
      ...content,
      emotional: {
        title: localEmotional.title,
        content: localEmotional.content
      }
    });
  };

  const handlePricingSave = () => {
    const updatedElements = content.creativeElements?.map(el => 
      el.type === 'pricing' ? { ...el, content: localPricing } : el
    ) || [];
    
    onContentChange({
      ...content,
      creativeElements: updatedElements
    });
  };

  const handleTeamSave = () => {
    const updatedElements = content.creativeElements?.map(el => 
      el.type === 'teamSection' ? { ...el, content: localTeam } : el
    ) || [];
    
    onContentChange({
      ...content,
      creativeElements: updatedElements
    });
  };

  const handlePortfolioSave = () => {
    const updatedElements = content.creativeElements?.map(el => 
      el.type === 'portfolio' ? { ...el, content: localPortfolio } : el
    ) || [];
    
    onContentChange({
      ...content,
      creativeElements: updatedElements
    });
  };

  const handleServiceCardsSave = () => {
    const updatedElements = content.creativeElements?.map(el => 
      el.type === 'serviceCards' ? { ...el, content: localServiceCards } : el
    ) || [];
    
    onContentChange({
      ...content,
      creativeElements: updatedElements
    });
  };

  const handleTimelineSave = () => {
    const updatedElements = content.creativeElements?.map(el => 
      el.type === 'timeline' ? { ...el, content: localTimeline } : el
    ) || [];
    
    onContentChange({
      ...content,
      creativeElements: updatedElements
    });
  };

  const addPricingPlan = () => {
    setLocalPricing([...localPricing, {
      name: "תכנית חדשה",
      price: "₪99",
      period: "לחודש",
      features: ["תכונה 1", "תכונה 2"],
      highlighted: false,
      buttonText: "בחר תכנית",
      icon: "price-tag-3-line"
    }]);
  };

  const removePricingPlan = (index: number) => {
    setLocalPricing(localPricing.filter((_, i) => i !== index));
  };

  const addTeamMember = () => {
    const newMembers = [...(localTeam.members || []), {
      name: "חבר צוות חדש",
      role: "תפקיד",
      experience: "שנות ניסיון",
      icon: "user-line"
    }];
    setLocalTeam({ ...localTeam, members: newMembers });
  };

  const removeTeamMember = (index: number) => {
    const newMembers = localTeam.members?.filter((_, i) => i !== index) || [];
    setLocalTeam({ ...localTeam, members: newMembers });
  };

  const addPortfolioProject = () => {
    const newProjects = [...(localPortfolio.projects || []), {
      title: "פרויקט חדש",
      category: "קטגוריה",
      description: "תיאור הפרויקט",
      result: "תוצאה",
      icon: "briefcase-line"
    }];
    setLocalPortfolio({ ...localPortfolio, projects: newProjects });
  };

  const removePortfolioProject = (index: number) => {
    const newProjects = localPortfolio.projects?.filter((_, i) => i !== index) || [];
    setLocalPortfolio({ ...localPortfolio, projects: newProjects });
  };

  const addServiceCard = () => {
    setLocalServiceCards([...localServiceCards, {
      icon: "star-line",
      title: "שירות חדש",
      desc: "תיאור השירות"
    }]);
  };

  const removeServiceCard = (index: number) => {
    setLocalServiceCards(localServiceCards.filter((_, i) => i !== index));
  };

  const addTimelineStep = () => {
    setLocalTimeline([...localTimeline, {
      step: String(localTimeline.length + 1).padStart(2, '0'),
      title: "שלב חדש",
      desc: "תיאור השלב",
      color: "#3b82f6",
      icon: "check-line"
    }]);
  };

  const removeTimelineStep = (index: number) => {
    setLocalTimeline(localTimeline.filter((_, i) => i !== index));
  };

  const hasElement = (type: string) => {
    return content.creativeElements?.some(el => el.type === type);
  };

  return (
    <div className="space-y-4">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Edit className="w-5 h-5 text-green-500" />
            עריכת סקשנים של הדף
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 text-sm mb-6">
            לחץ על כל סקשן כדי לערוך את התוכן שלו בפופאפ נוח ומתקדם
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <HeroEditor content={content} onContentChange={onContentChange} />
            
            <FeaturesEditor content={content} onContentChange={onContentChange} />
            
            {/* Service Cards Editor */}
            {hasElement('serviceCards') && (
              <EditPopup
                title="עריכת כרטיסי שירותים"
                triggerText="כרטיסי שירותים"
                icon={Briefcase}
                onSave={handleServiceCardsSave}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Button onClick={addServiceCard} className="bg-green-600 hover:bg-green-700">
                      <Plus className="w-4 h-4 ml-2" />
                      הוסף כרטיס
                    </Button>
                  </div>
                  {localServiceCards.map((card, index) => (
                    <div key={index} className="p-4 border border-gray-600 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="text-white font-semibold">כרטיס {index + 1}</h4>
                        <Button 
                          onClick={() => removeServiceCard(index)}
                          variant="destructive"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <Label className="text-white">אייקון</Label>
                          <IconSelector
                            selectedIcon={card.icon}
                            onIconSelect={(icon) => {
                              const newCards = [...localServiceCards];
                              newCards[index].icon = icon;
                              setLocalServiceCards(newCards);
                            }}
                            triggerClassName="w-full bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">כותרת</Label>
                          <Input
                            value={card.title}
                            onChange={(e) => {
                              const newCards = [...localServiceCards];
                              newCards[index].title = e.target.value;
                              setLocalServiceCards(newCards);
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">תיאור</Label>
                          <Textarea
                            value={card.desc}
                            onChange={(e) => {
                              const newCards = [...localServiceCards];
                              newCards[index].desc = e.target.value;
                              setLocalServiceCards(newCards);
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </EditPopup>
            )}

            {/* Timeline Editor */}
            {hasElement('timeline') && (
              <EditPopup
                title="עריכת טיימליין תהליכים"
                triggerText="טיימליין תהליכים"
                icon={Clock}
                onSave={handleTimelineSave}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Button onClick={addTimelineStep} className="bg-green-600 hover:bg-green-700">
                      <Plus className="w-4 h-4 ml-2" />
                      הוסף שלב
                    </Button>
                  </div>
                  {localTimeline.map((step, index) => (
                    <div key={index} className="p-4 border border-gray-600 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="text-white font-semibold">שלב {step.step}</h4>
                        <Button 
                          onClick={() => removeTimelineStep(index)}
                          variant="destructive"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <Label className="text-white">אייקון</Label>
                          <IconSelector
                            selectedIcon={step.icon || 'check-line'}
                            onIconSelect={(icon) => {
                              const newTimeline = [...localTimeline];
                              newTimeline[index].icon = icon;
                              setLocalTimeline(newTimeline);
                            }}
                            triggerClassName="w-full bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">כותרת</Label>
                          <Input
                            value={step.title}
                            onChange={(e) => {
                              const newTimeline = [...localTimeline];
                              newTimeline[index].title = e.target.value;
                              setLocalTimeline(newTimeline);
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">תיאור</Label>
                          <Textarea
                            value={step.desc}
                            onChange={(e) => {
                              const newTimeline = [...localTimeline];
                              newTimeline[index].desc = e.target.value;
                              setLocalTimeline(newTimeline);
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">צבע</Label>
                          <Input
                            type="color"
                            value={step.color}
                            onChange={(e) => {
                              const newTimeline = [...localTimeline];
                              newTimeline[index].color = e.target.value;
                              setLocalTimeline(newTimeline);
                            }}
                            className="bg-gray-800 border-gray-600"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </EditPopup>
            )}

            {/* Pricing Editor */}
            {hasElement('pricing') && (
              <EditPopup
                title="עריכת טבלת מחירים"
                triggerText="טבלת מחירים"
                icon={DollarSign}
                onSave={handlePricingSave}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Button onClick={addPricingPlan} className="bg-green-600 hover:bg-green-700">
                      <Plus className="w-4 h-4 ml-2" />
                      הוסף תכנית
                    </Button>
                  </div>
                  {localPricing.map((plan, index) => (
                    <div key={index} className="p-4 border border-gray-600 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="text-white font-semibold">{plan.name}</h4>
                        <Button 
                          onClick={() => removePricingPlan(index)}
                          variant="destructive"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label className="text-white">אייקון</Label>
                          <IconSelector
                            selectedIcon={plan.icon || 'price-tag-3-line'}
                            onIconSelect={(icon) => {
                              const newPricing = [...localPricing];
                              newPricing[index].icon = icon;
                              setLocalPricing(newPricing);
                            }}
                            triggerClassName="w-full bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">שם התכנית</Label>
                          <Input
                            value={plan.name}
                            onChange={(e) => {
                              const newPricing = [...localPricing];
                              newPricing[index].name = e.target.value;
                              setLocalPricing(newPricing);
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">מחיר</Label>
                          <Input
                            value={plan.price}
                            onChange={(e) => {
                              const newPricing = [...localPricing];
                              newPricing[index].price = e.target.value;
                              setLocalPricing(newPricing);
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">תקופת תשלום</Label>
                          <Input
                            value={plan.period}
                            onChange={(e) => {
                              const newPricing = [...localPricing];
                              newPricing[index].period = e.target.value;
                              setLocalPricing(newPricing);
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-white">תכונות (כל שורה = תכונה)</Label>
                        <Textarea
                          value={plan.features.join('\n')}
                          onChange={(e) => {
                            const newPricing = [...localPricing];
                            newPricing[index].features = e.target.value.split('\n').filter(f => f.trim());
                            setLocalPricing(newPricing);
                          }}
                          className="bg-gray-800 border-gray-600 text-white"
                          rows={4}
                        />
                      </div>
                      <div>
                        <Label className="text-white">טקסט הכפתור</Label>
                        <Input
                          value={plan.buttonText}
                          onChange={(e) => {
                            const newPricing = [...localPricing];
                            newPricing[index].buttonText = e.target.value;
                            setLocalPricing(newPricing);
                          }}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </EditPopup>
            )}

            {/* Team Editor */}
            {hasElement('teamSection') && (
              <EditPopup
                title="עריכת הצוות"
                triggerText="הצוות שלנו"
                icon={Users}
                onSave={handleTeamSave}
              >
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">כותרת הסקשן</Label>
                    <Input
                      value={localTeam.title || ''}
                      onChange={(e) => setLocalTeam({ ...localTeam, title: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">תת כותרת</Label>
                    <Input
                      value={localTeam.subtitle || ''}
                      onChange={(e) => setLocalTeam({ ...localTeam, subtitle: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <Button onClick={addTeamMember} className="bg-green-600 hover:bg-green-700">
                      <Plus className="w-4 h-4 ml-2" />
                      הוסף חבר צוות
                    </Button>
                  </div>
                  {localTeam.members?.map((member, index) => (
                    <div key={index} className="p-4 border border-gray-600 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="text-white font-semibold">{member.name}</h4>
                        <Button 
                          onClick={() => removeTeamMember(index)}
                          variant="destructive"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label className="text-white">אייקון</Label>
                          <IconSelector
                            selectedIcon={member.icon || 'user-line'}
                            onIconSelect={(icon) => {
                              const newMembers = [...localTeam.members];
                              newMembers[index].icon = icon;
                              setLocalTeam({ ...localTeam, members: newMembers });
                            }}
                            triggerClassName="w-full bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">שם</Label>
                          <Input
                            value={member.name}
                            onChange={(e) => {
                              const newMembers = [...localTeam.members];
                              newMembers[index].name = e.target.value;
                              setLocalTeam({ ...localTeam, members: newMembers });
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">תפקיד</Label>
                          <Input
                            value={member.role}
                            onChange={(e) => {
                              const newMembers = [...localTeam.members];
                              newMembers[index].role = e.target.value;
                              setLocalTeam({ ...localTeam, members: newMembers });
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">ניסיון</Label>
                          <Input
                            value={member.experience}
                            onChange={(e) => {
                              const newMembers = [...localTeam.members];
                              newMembers[index].experience = e.target.value;
                              setLocalTeam({ ...localTeam, members: newMembers });
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </EditPopup>
            )}

            {/* Portfolio Editor */}
            {hasElement('portfolio') && (
              <EditPopup
                title="עריכת תיק עבודות"
                triggerText="תיק עבודות"
                icon={Award}
                onSave={handlePortfolioSave}
              >
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">כותרת הסקשן</Label>
                    <Input
                      value={localPortfolio.title || ''}
                      onChange={(e) => setLocalPortfolio({ ...localPortfolio, title: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">תת כותרת</Label>
                    <Input
                      value={localPortfolio.subtitle || ''}
                      onChange={(e) => setLocalPortfolio({ ...localPortfolio, subtitle: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <Button onClick={addPortfolioProject} className="bg-green-600 hover:bg-green-700">
                      <Plus className="w-4 h-4 ml-2" />
                      הוסף פרויקט
                    </Button>
                  </div>
                  {localPortfolio.projects?.map((project, index) => (
                    <div key={index} className="p-4 border border-gray-600 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="text-white font-semibold">{project.title}</h4>
                        <Button 
                          onClick={() => removePortfolioProject(index)}
                          variant="destructive"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label className="text-white">אייקון</Label>
                          <IconSelector
                            selectedIcon={project.icon || 'briefcase-line'}
                            onIconSelect={(icon) => {
                              const newProjects = [...localPortfolio.projects];
                              newProjects[index].icon = icon;
                              setLocalPortfolio({ ...localPortfolio, projects: newProjects });
                            }}
                            triggerClassName="w-full bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">שם הפרויקט</Label>
                          <Input
                            value={project.title}
                            onChange={(e) => {
                              const newProjects = [...localPortfolio.projects];
                              newProjects[index].title = e.target.value;
                              setLocalPortfolio({ ...localPortfolio, projects: newProjects });
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">קטגוריה</Label>
                          <Input
                            value={project.category}
                            onChange={(e) => {
                              const newProjects = [...localPortfolio.projects];
                              newProjects[index].category = e.target.value;
                              setLocalPortfolio({ ...localPortfolio, projects: newProjects });
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white">תוצאה</Label>
                          <Input
                            value={project.result}
                            onChange={(e) => {
                              const newProjects = [...localPortfolio.projects];
                              newProjects[index].result = e.target.value;
                              setLocalPortfolio({ ...localPortfolio, projects: newProjects });
                            }}
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-white">תיאור הפרויקט</Label>
                        <Textarea
                          value={project.description}
                          onChange={(e) => {
                            const newProjects = [...localPortfolio.projects];
                            newProjects[index].description = e.target.value;
                            setLocalPortfolio({ ...localPortfolio, projects: newProjects });
                          }}
                          className="bg-gray-800 border-gray-600 text-white"
                          rows={3}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </EditPopup>
            )}
            
            <EditPopup
              title="עריכת סקשן אודותינו"
              triggerText="סקשן אודותינו"
              icon={Users}
              onSave={handleAboutSave}
            >
              <div className="space-y-4">
                <div>
                  <Label className="text-white font-semibold text-right block mb-2">כותרת הסקשן</Label>
                  <Input
                    value={localAbout.aboutTitle}
                    onChange={(e) => setLocalAbout({ ...localAbout, aboutTitle: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white text-right"
                    placeholder="הכנס כותרת לסקשן..."
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold text-right block mb-2">תוכן הסקשן</Label>
                  <Textarea
                    value={localAbout.aboutText}
                    onChange={(e) => setLocalAbout({ ...localAbout, aboutText: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white text-right"
                    rows={6}
                    placeholder="הכנס תוכן מפורט על העסק..."
                  />
                </div>
              </div>
            </EditPopup>

            <EditPopup
              title="עריכת סקשן רגשי"
              triggerText="סקשן רגשי"
              icon={Heart}
              onSave={handleEmotionalSave}
            >
              <div className="space-y-4">
                <div>
                  <Label className="text-white font-semibold text-right block mb-2">כותרת הסקשן</Label>
                  <Input
                    value={localEmotional.title}
                    onChange={(e) => setLocalEmotional({ ...localEmotional, title: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white text-right"
                    placeholder="הכנס כותרת רגשית..."
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold text-right block mb-2">תוכן הסקשן</Label>
                  <Textarea
                    value={localEmotional.content}
                    onChange={(e) => setLocalEmotional({ ...localEmotional, content: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white text-right"
                    rows={6}
                    placeholder="הכנס תוכן רגשי ומעורר השראה..."
                  />
                </div>
              </div>
            </EditPopup>
            
            <TestimonialsEditor content={content} onContentChange={onContentChange} />
            
            <FAQEditor content={content} onContentChange={onContentChange} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SectionEditor;
