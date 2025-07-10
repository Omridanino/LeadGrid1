
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Plus, Play, Pause, StopCircle, TrendingUp, Users, Target } from 'lucide-react';
import { TemplateData, ABTest } from '@/types/template';

interface ABTestManagerProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const ABTestManager = ({ template, onUpdate }: ABTestManagerProps) => {
  const [tests, setTests] = useState<ABTest[]>(template.abTests || []);
  const [newTestName, setNewTestName] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('click');

  const createNewTest = () => {
    if (!newTestName.trim()) return;

    const newTest: ABTest = {
      id: `test-${Date.now()}`,
      name: newTestName,
      status: 'draft',
      startDate: new Date().toISOString(),
      variants: [
        {
          id: 'original',
          name: 'גרסה מקורית',
          traffic: 50,
          conversions: 0,
          visitors: 0,
          changes: {}
        },
        {
          id: 'variant-1',
          name: 'גרסה חדשה',
          traffic: 50,
          conversions: 0,
          visitors: 0,
          changes: {}
        }
      ],
      goal: {
        type: selectedGoal as 'click' | 'form_submit' | 'page_view' | 'custom',
        target: selectedGoal === 'click' ? 'button' : selectedGoal === 'form_submit' ? 'form' : 'page',
        description: getGoalDescription(selectedGoal)
      }
    };

    const updatedTests = [...tests, newTest];
    setTests(updatedTests);
    setNewTestName('');
    
    onUpdate({
      abtesting: updatedTests
    });
  };

  const getGoalDescription = (goalType: string) => {
    switch (goalType) {
      case 'click': return 'מדידת קליקים על כפתורים';
      case 'form_submit': return 'מדידת הגשת טפסים';
      case 'page_view': return 'מדידת צפיות בדף';
      default: return 'מטרה מותאמת אישית';
    }
  };

  const updateTestStatus = (testId: string, status: ABTest['status']) => {
    const updatedTests = tests.map(test =>
      test.id === testId ? { ...test, status } : test
    );
    setTests(updatedTests);
    onUpdate({
      abtesting: updatedTests
    });
  };

  const getStatusBadge = (status: ABTest['status']) => {
    switch (status) {
      case 'running':
        return <Badge className="bg-green-600 text-white">פעיל</Badge>;
      case 'paused':
        return <Badge className="bg-yellow-600 text-white">מושהה</Badge>;
      case 'completed':
        return <Badge className="bg-blue-600 text-white">הושלם</Badge>;
      default:
        return <Badge variant="secondary">טיוטה</Badge>;
    }
  };

  const calculateConversionRate = (conversions: number, visitors: number): string => {
    if (visitors === 0) return '0.00';
    return ((conversions / visitors) * 100).toFixed(2);
  };

  const getWinningVariant = (test: ABTest) => {
    const rates = test.variants.map(v => ({
      id: v.id,
      rate: parseFloat(calculateConversionRate(v.conversions, v.visitors))
    }));
    
    return rates.reduce((prev, current) => 
      prev.rate > current.rate ? prev : current
    );
  };

  // Generate some demo data for existing tests
  const addDemoData = (testId: string) => {
    const updatedTests = tests.map(test => {
      if (test.id === testId) {
        return {
          ...test,
          variants: test.variants.map(variant => ({
            ...variant,
            visitors: Math.floor(Math.random() * 1000) + 100,
            conversions: Math.floor(Math.random() * 50) + 5
          }))
        };
      }
      return test;
    });
    setTests(updatedTests);
    onUpdate({
      abtesting: updatedTests
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-5 h-5 text-indigo-400" />
        <h3 className="text-white text-lg font-bold">מנהל A/B Testing</h3>
      </div>

      {/* Create New Test */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Plus className="w-4 h-4" />
            יצירת בדיקה חדשה
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="text-slate-300">שם הבדיקה</Label>
              <Input
                value={newTestName}
                onChange={(e) => setNewTestName(e.target.value)}
                placeholder="למשל: בדיקת כפתור CTA"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label className="text-slate-300">מטרת הבדיקה</Label>
              <Select value={selectedGoal} onValueChange={setSelectedGoal}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="click">קליקים על כפתורים</SelectItem>
                  <SelectItem value="form_submit">הגשת טפסים</SelectItem>
                  <SelectItem value="page_view">צפיות בדף</SelectItem>
                  <SelectItem value="custom">מטרה מותאמת</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button 
            onClick={createNewTest}
            className="bg-indigo-600 hover:bg-indigo-700"
            disabled={!newTestName.trim()}
          >
            <Plus className="w-4 h-4 mr-1" />
            צור בדיקה חדשה
          </Button>
        </CardContent>
      </Card>

      {/* Tests Overview */}
      {tests.length > 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">סקירת בדיקות</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-indigo-900/20 border border-indigo-700/30 rounded-lg">
                <div className="text-indigo-200 font-bold text-2xl">{tests.length}</div>
                <div className="text-indigo-300 text-sm">סך הכל בדיקות</div>
              </div>
              <div className="text-center p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                <div className="text-green-200 font-bold text-2xl">
                  {tests.filter(t => t.status === 'running').length}
                </div>
                <div className="text-green-300 text-sm">בדיקות פעילות</div>
              </div>
              <div className="text-center p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
                <div className="text-blue-200 font-bold text-2xl">
                  {tests.filter(t => t.status === 'completed').length}
                </div>
                <div className="text-blue-300 text-sm">בדיקות שהושלמו</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Individual Tests */}
      {tests.map((test) => (
        <Card key={test.id} className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <Target className="w-4 h-4" />
                {test.name}
              </CardTitle>
              <div className="flex items-center gap-2">
                {getStatusBadge(test.status)}
                <div className="flex gap-1">
                  {test.status === 'draft' && (
                    <Button
                      size="sm"
                      onClick={() => updateTestStatus(test.id, 'running')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Play className="w-3 h-3" />
                    </Button>
                  )}
                  {test.status === 'running' && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => updateTestStatus(test.id, 'paused')}
                        className="bg-yellow-600 hover:bg-yellow-700"
                      >
                        <Pause className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => updateTestStatus(test.id, 'completed')}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <StopCircle className="w-3 h-3" />
                      </Button>
                    </>
                  )}
                  {test.status === 'paused' && (
                    <Button
                      size="sm"
                      onClick={() => updateTestStatus(test.id, 'running')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Play className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                <Target className="w-3 h-3" />
                <span>מטרה: {test.goal.description}</span>
              </div>
              {test.status === 'draft' && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => addDemoData(test.id)}
                  className="mb-4"
                >
                  הוסף נתוני דמו לבדיקה
                </Button>
              )}
            </div>

            <Tabs defaultValue="results" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-700">
                <TabsTrigger value="results" className="text-white">תוצאות</TabsTrigger>
                <TabsTrigger value="settings" className="text-white">הגדרות</TabsTrigger>
              </TabsList>

              <TabsContent value="results" className="space-y-4">
                {test.status === 'completed' && (
                  <div className="p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 font-semibold">גרסה מנצחת</span>
                    </div>
                    <p className="text-green-200 text-sm">
                      {test.variants.find(v => v.id === getWinningVariant(test).id)?.name} 
                      {' '}עם שיעור המרה של {getWinningVariant(test).rate.toFixed(2)}%
                    </p>
                  </div>
                )}

                <div className="grid gap-4">
                  {test.variants.map((variant) => {
                    const conversionRate = calculateConversionRate(variant.conversions, variant.visitors);
                    return (
                      <Card key={variant.id} className="bg-slate-700/50 border-slate-600">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-white font-medium">{variant.name}</h4>
                            <Badge variant="outline" className="text-slate-300">
                              {variant.traffic}% תנועה
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 mb-3">
                            <div className="text-center">
                              <div className="text-white font-bold">{variant.visitors}</div>
                              <div className="text-slate-400 text-xs">מבקרים</div>
                            </div>
                            <div className="text-center">
                              <div className="text-white font-bold">{variant.conversions}</div>
                              <div className="text-slate-400 text-xs">המרות</div>
                            </div>
                            <div className="text-center">
                              <div className="text-white font-bold">
                                {conversionRate}%
                              </div>
                              <div className="text-slate-400 text-xs">שיעור המרה</div>
                            </div>
                          </div>
                          
                          <Progress 
                            value={parseFloat(conversionRate)} 
                            className="h-2"
                          />
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-slate-300">חלוקת תנועה</Label>
                    <div className="space-y-2 mt-2">
                      {test.variants.map((variant) => (
                        <div key={variant.id} className="flex items-center justify-between">
                          <span className="text-slate-300 text-sm">{variant.name}</span>
                          <span className="text-white">{variant.traffic}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-slate-300">מידע כללי</Label>
                    <div className="space-y-2 mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">תאריך התחלה:</span>
                        <span className="text-white">
                          {new Date(test.startDate).toLocaleDateString('he-IL')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">סטטוס:</span>
                        <span className="text-white">{getStatusBadge(test.status)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      ))}

      {tests.length === 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="text-center py-12">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              אין בדיקות A/B עדיין
            </h3>
            <p className="text-gray-400 mb-4">
              צור את הבדיקה הראשונה שלך כדי להתחיל לאופטמז את הדף
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
