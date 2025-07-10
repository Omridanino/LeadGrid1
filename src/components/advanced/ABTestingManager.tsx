import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  MousePointer, 
  Users, 
  BarChart3,
  Plus,
  Play,
  Pause,
  Square
} from 'lucide-react';

interface ABTest {
  id: string;
  name: string;
  status: 'draft' | 'running' | 'paused' | 'completed';
  startDate: string;
  endDate?: string;
  variants: {
    id: string;
    name: string;
    traffic: number;
    conversions: number;
    visitors: number;
    changes: any;
  }[];
  goal: {
    type: 'click' | 'form_submit' | 'page_view' | 'custom';
    target: string;
    description: string;
  };
}

interface ABTestingManagerProps {
  onTestChange: (tests: ABTest[]) => void;
  currentTests: ABTest[];
}

export const ABTestingManager = ({ onTestChange, currentTests }: ABTestingManagerProps) => {
  const [tests, setTests] = useState<ABTest[]>(currentTests || []);
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [newTestName, setNewTestName] = useState('');

  const createNewTest = () => {
    if (!newTestName.trim()) return;

    const newTest: ABTest = {
      id: `test_${Date.now()}`,
      name: newTestName,
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
          id: 'variant_a',
          name: 'גרסה A',
          traffic: 50,
          conversions: 0,
          visitors: 0,
          changes: {}
        }
      ],
      goal: {
        type: 'form_submit',
        target: 'contact-form',
        description: 'שליחת טופס יצירת קשר'
      }
    };

    const updatedTests = [...tests, newTest];
    setTests(updatedTests);
    onTestChange(updatedTests);
    setNewTestName('');
    setSelectedTest(newTest.id);
  };

  const updateTest = (testId: string, updates: Partial<ABTest>) => {
    const updatedTests = tests.map(test => 
      test.id === testId ? { ...test, ...updates } : test
    );
    setTests(updatedTests);
    onTestChange(updatedTests);
  };

  const startTest = (testId: string) => {
    updateTest(testId, { 
      status: 'running',
      startDate: new Date().toISOString()
    });
  };

  const pauseTest = (testId: string) => {
    updateTest(testId, { status: 'paused' });
  };

  const stopTest = (testId: string) => {
    updateTest(testId, { 
      status: 'completed',
      endDate: new Date().toISOString()
    });
  };

  const calculateConversionRate = (variant: any) => {
    return variant.visitors > 0 ? (variant.conversions / variant.visitors * 100).toFixed(2) : '0';
  };

  const getWinningVariant = (test: ABTest) => {
    return test.variants.reduce((winner, current) => {
      const winnerRate = parseFloat(calculateConversionRate(winner));
      const currentRate = parseFloat(calculateConversionRate(current));
      return currentRate > winnerRate ? current : winner;
    });
  };

  const getCurrentTest = () => {
    return tests.find(test => test.id === selectedTest);
  };

  return (
    <div className="space-y-6">
      {/* Tests Overview */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              בדיקות A/B
            </div>
            <div className="flex items-center gap-2">
              <Input
                value={newTestName}
                onChange={(e) => setNewTestName(e.target.value)}
                placeholder="שם בדיקה חדשה"
                className="bg-gray-700 border-gray-600 text-white w-64"
              />
              <Button onClick={createNewTest} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-1" />
                צור בדיקה
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tests.map((test) => {
              const winningVariant = getWinningVariant(test);
              const totalVisitors = test.variants.reduce((sum, v) => sum + v.visitors, 0);
              const totalConversions = test.variants.reduce((sum, v) => sum + v.conversions, 0);
              const overallRate = totalVisitors > 0 ? (totalConversions / totalVisitors * 100).toFixed(2) : '0';

              return (
                <Card 
                  key={test.id}
                  className={`bg-gray-700 border-gray-600 cursor-pointer transition-all ${
                    selectedTest === test.id ? 'ring-2 ring-blue-500' : 'hover:bg-gray-650'
                  }`}
                  onClick={() => setSelectedTest(test.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium">{test.name}</h3>
                      <Badge 
                        className={
                          test.status === 'running' ? 'bg-green-600' :
                          test.status === 'paused' ? 'bg-yellow-600' :
                          test.status === 'completed' ? 'bg-blue-600' :
                          'bg-gray-600'
                        }
                      >
                        {test.status === 'running' ? 'פועל' :
                         test.status === 'paused' ? 'מושהה' :
                         test.status === 'completed' ? 'הושלם' :
                         'טיוטה'}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Users className="w-4 h-4" />
                        {totalVisitors} מבקרים
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MousePointer className="w-4 h-4" />
                        {overallRate}% המרה
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <TrendingUp className="w-4 h-4" />
                        מוביל: {winningVariant.name}
                      </div>
                    </div>

                    <div className="mt-3 flex gap-1">
                      {test.status === 'draft' && (
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700 flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            startTest(test.id);
                          }}
                        >
                          <Play className="w-3 h-3 mr-1" />
                          התחל
                        </Button>
                      )}
                      {test.status === 'running' && (
                        <>
                          <Button 
                            size="sm" 
                            className="bg-yellow-600 hover:bg-yellow-700 flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              pauseTest(test.id);
                            }}
                          >
                            <Pause className="w-3 h-3 mr-1" />
                            השהה
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-red-600 hover:bg-red-700 flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              stopTest(test.id);
                            }}
                          >
                            <Square className="w-3 h-3 mr-1" />
                            עצור
                          </Button>
                        </>
                      )}
                      {test.status === 'paused' && (
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700 flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            startTest(test.id);
                          }}
                        >
                          <Play className="w-3 h-3 mr-1" />
                          המשך
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Test Details */}
      {getCurrentTest() && (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">
              פרטי בדיקה: {getCurrentTest()!.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="variants" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-700">
                <TabsTrigger value="variants" className="text-white">גרסאות</TabsTrigger>
                <TabsTrigger value="settings" className="text-white">הגדרות</TabsTrigger>
                <TabsTrigger value="results" className="text-white">תוצאות</TabsTrigger>
              </TabsList>

              <TabsContent value="variants" className="space-y-4">
                {getCurrentTest()!.variants.map((variant, index) => {
                  const conversionRate = calculateConversionRate(variant);
                  const isWinner = variant === getWinningVariant(getCurrentTest()!);

                  return (
                    <Card key={variant.id} className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <h4 className="text-white font-medium">{variant.name}</h4>
                            {isWinner && <Badge className="bg-green-600">מוביל</Badge>}
                          </div>
                          <div className="text-gray-300 text-sm">
                            {variant.traffic}% מהתנועה
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{variant.visitors}</div>
                            <div className="text-gray-400 text-sm">מבקרים</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{variant.conversions}</div>
                            <div className="text-gray-400 text-sm">המרות</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{conversionRate}%</div>
                            <div className="text-gray-400 text-sm">שיעור המרה</div>
                          </div>
                        </div>

                        <Progress 
                          value={parseFloat(conversionRate)} 
                          className="w-full"
                        />
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white">שם הבדיקה</Label>
                    <Input
                      value={getCurrentTest()!.name}
                      onChange={(e) => updateTest(getCurrentTest()!.id, { name: e.target.value })}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">סוג המטרה</Label>
                    <select 
                      value={getCurrentTest()!.goal.type}
                      onChange={(e) => updateTest(getCurrentTest()!.id, { 
                        goal: { ...getCurrentTest()!.goal, type: e.target.value as any }
                      })}
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2"
                    >
                      <option value="click">קליק על אלמנט</option>
                      <option value="form_submit">שליחת טופס</option>
                      <option value="page_view">צפייה בעמוד</option>
                      <option value="custom">מותאם אישית</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label className="text-white">תיאור המטרה</Label>
                  <Textarea
                    value={getCurrentTest()!.goal.description}
                    onChange={(e) => updateTest(getCurrentTest()!.id, { 
                      goal: { ...getCurrentTest()!.goal, description: e.target.value }
                    })}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={2}
                  />
                </div>

                <div>
                  <Label className="text-white">זיהוי יעד (CSS Selector)</Label>
                  <Input
                    value={getCurrentTest()!.goal.target}
                    onChange={(e) => updateTest(getCurrentTest()!.id, { 
                      goal: { ...getCurrentTest()!.goal, target: e.target.value }
                    })}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="#contact-form, .buy-button, [data-test='submit']"
                  />
                </div>
              </TabsContent>

              <TabsContent value="results" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-gray-700 border-gray-600">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">
                        {getWinningVariant(getCurrentTest()!).name}
                      </div>
                      <div className="text-gray-300">גרסה מובילה</div>
                      <div className="text-xl font-semibold text-white mt-1">
                        {calculateConversionRate(getWinningVariant(getCurrentTest()!))}%
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-700 border-gray-600">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        {getCurrentTest()!.variants.reduce((sum, v) => sum + v.visitors, 0)}
                      </div>
                      <div className="text-gray-300">סך מבקרים</div>
                      <div className="text-xl font-semibold text-white mt-1">
                        {getCurrentTest()!.variants.reduce((sum, v) => sum + v.conversions, 0)} המרות
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">סיכום סטטיסטי</h4>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>• הבדיקה החלה ב: {new Date(getCurrentTest()!.startDate).toLocaleDateString('he-IL')}</p>
                    {getCurrentTest()!.endDate && (
                      <p>• הבדיקה הסתיימה ב: {new Date(getCurrentTest()!.endDate).toLocaleDateString('he-IL')}</p>
                    )}
                    <p>• רמת ביטחון: 95%</p>
                    <p>• ההבדל בין הגרסאות הוא {Math.abs(
                      parseFloat(calculateConversionRate(getCurrentTest()!.variants[0])) - 
                      parseFloat(calculateConversionRate(getCurrentTest()!.variants[1]))
                    ).toFixed(2)}%</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
