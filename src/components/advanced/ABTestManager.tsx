
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Plus, Play, Pause, TrendingUp, Users, MousePointer } from 'lucide-react';
import { TemplateData, ABTest } from '@/types/template';

interface ABTestManagerProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const ABTestManager = ({ template, onUpdate }: ABTestManagerProps) => {
  const [abTests, setAbTests] = useState<ABTest[]>(template.abTests || []);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newTest, setNewTest] = useState({
    name: '',
    goal: { type: 'click', target: '', description: '' }
  });

  const handleCreateTest = () => {
    const test: ABTest = {
      id: Math.random().toString(36).substr(2, 9),
      name: newTest.name,
      status: 'draft',
      startDate: new Date().toISOString(),
      variants: [
        {
          id: 'original',
          name: 'מקורי',
          traffic: 50,
          conversions: 0,
          visitors: 0,
          changes: {}
        },
        {
          id: 'variant-a',
          name: 'וריאציה A',
          traffic: 50,
          conversions: 0,
          visitors: 0,
          changes: {}
        }
      ],
      goal: newTest.goal as any
    };

    const updatedTests = [...abTests, test];
    setAbTests(updatedTests);
    onUpdate({ abTests: updatedTests });
    setShowCreateDialog(false);
    setNewTest({ name: '', goal: { type: 'click', target: '', description: '' } });
  };

  const toggleTestStatus = (testId: string) => {
    const updatedTests = abTests.map(test => {
      if (test.id === testId) {
        return {
          ...test,
          status: test.status === 'running' ? 'paused' : 'running' as any
        };
      }
      return test;
    });
    setAbTests(updatedTests);
    onUpdate({ abTests: updatedTests });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-600';
      case 'paused': return 'bg-yellow-600';
      case 'completed': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'running': return 'פעיל';
      case 'paused': return 'מושהה';
      case 'completed': return 'הושלם';
      default: return 'טיוטה';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-indigo-400" />
          <h3 className="text-white text-lg font-bold">ניהול A/B Testing</h3>
        </div>
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="w-4 h-4 mr-1" />
              בדיקה חדשה
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-800 border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-white">יצירת A/B Test חדש</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label className="text-slate-300">שם הבדיקה</Label>
                <Input
                  value={newTest.name}
                  onChange={(e) => setNewTest(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="לדוגמא: בדיקת כפתור CTA"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <Label className="text-slate-300">סוג המטרה</Label>
                <Select 
                  value={newTest.goal.type} 
                  onValueChange={(value) => setNewTest(prev => ({ 
                    ...prev, 
                    goal: { ...prev.goal, type: value }
                  }))}
                >
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="click">לחיצה על כפתור</SelectItem>
                    <SelectItem value="form_submit">שליחת טופס</SelectItem>
                    <SelectItem value="page_view">צפייה בדף</SelectItem>
                    <SelectItem value="custom">מותאם אישית</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-slate-300">תיאור המטרה</Label>
                <Input
                  value={newTest.goal.description}
                  onChange={(e) => setNewTest(prev => ({ 
                    ...prev, 
                    goal: { ...prev.goal, description: e.target.value }
                  }))}
                  placeholder="תאר את המטרה של הבדיקה"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <Button onClick={handleCreateTest} className="w-full bg-indigo-600 hover:bg-indigo-700">
                צור בדיקה
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {abTests.length === 0 ? (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-8 text-center">
            <BarChart3 className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h4 className="text-white font-medium mb-2">אין בדיקות A/B פעילות</h4>
            <p className="text-slate-400 text-sm mb-4">התחל לבדוק וריאציות שונות של הדף שלך כדי לשפר המרות</p>
            <Button 
              onClick={() => setShowCreateDialog(true)}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="w-4 h-4 mr-1" />
              צור בדיקה ראשונה
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {abTests.map((test) => (
            <Card key={test.id} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-white">{test.name}</CardTitle>
                    <Badge className={getStatusColor(test.status)}>
                      {getStatusText(test.status)}
                    </Badge>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => toggleTestStatus(test.id)}
                    variant={test.status === 'running' ? 'destructive' : 'default'}
                  >
                    {test.status === 'running' ? (
                      <>
                        <Pause className="w-4 h-4 mr-1" />
                        השהה
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-1" />
                        הפעל
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-slate-400">
                  מטרה: {test.goal.description || 'לא הוגדר תיאור'}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {test.variants.map((variant) => {
                    const conversionRate = variant.visitors > 0 
                      ? ((variant.conversions / variant.visitors) * 100).toFixed(1)
                      : '0.0';
                    
                    return (
                      <div key={variant.id} className="bg-slate-700/50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="text-white font-medium">{variant.name}</h5>
                          <Badge variant="outline">{variant.traffic}% תנועה</Badge>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-300">{variant.visitors} מבקרים</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm">
                            <MousePointer className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-300">{variant.conversions} המרות</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm">
                            <TrendingUp className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-300">{conversionRate}% שיעור המרה</span>
                          </div>
                          
                          <Progress value={parseFloat(conversionRate)} className="w-full" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
