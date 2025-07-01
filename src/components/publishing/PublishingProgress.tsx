
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Globe, 
  Shield, 
  CheckCircle, 
  Loader2,
  Zap,
  Settings,
  Server,
  Lock,
  Database
} from 'lucide-react';

interface PublishingProgressProps {
  progress: number;
  isPublishing: boolean;
  isExpressMode: boolean;
}

export const PublishingProgress = ({ progress, isPublishing, isExpressMode }: PublishingProgressProps) => {
  const getProgressMessage = () => {
    if (isExpressMode) {
      if (progress <= 20) return 'מכין את האתר לפרסום...';
      if (progress <= 40) return 'מגדיר דומיין זמני חינם...';
      if (progress <= 60) return 'מפרסם את האתר לאוויר...';
      if (progress <= 80) return 'מתקין תעודת SSL ואבטחה... עוד רגע וזה מוכן!';
      return 'האתר שלך באוויר עם SSL מאובטח! 🎉';
    } else {
      if (progress <= 25) return 'מעבד את התשלום... זה ייקח מספר שניות.';
      if (progress <= 50) return 'רוכש ומגדיר את הדומיין המותאם...';
      if (progress <= 75) return 'מפרסם את האתר שלך ומתקין SSL... זה יכול להימשך עד 60 שניות.';
      return 'בודקים את כל החיבורים והאבטחה... עוד רגע וזה מוכן!';
    }
  };

  const getProgressSteps = () => {
    if (isExpressMode) {
      return [
        { name: 'הכנת האתר', icon: Rocket, completed: progress > 20 },
        { name: 'דומיין זמני חינם', icon: Globe, completed: progress > 40 },
        { name: 'פרסום לאוויר', icon: Zap, completed: progress > 60 },
        { name: 'SSL ואבטחה', icon: Shield, completed: progress > 80 },
      ];
    } else {
      return [
        { name: 'עיבוד תשלום', icon: Database, completed: progress > 25 },
        { name: 'רכישת דומיין', icon: Globe, completed: progress > 50 },
        { name: 'אחסון ו-SSL', icon: Server, completed: progress > 75 },
        { name: 'בדיקות אבטחה', icon: CheckCircle, completed: progress === 100 },
      ];
    }
  };

  const getDetailedProgress = () => {
    if (isExpressMode) {
      return [
        { step: 'הכנת קבצי האתר', completed: progress > 10 },
        { step: 'הגדרת דומיין זמני', completed: progress > 30 },
        { step: 'העלאת קבצים לאחסון', completed: progress > 50 },
        { step: 'הפעלת SSL', completed: progress > 70 },
        { step: 'בדיקת קישוריות', completed: progress > 90 },
      ];
    } else {
      return [
        { step: 'עיבוד תשלום בכרטיס', completed: progress > 15 },
        { step: 'רכישת דומיין אצל הרשם', completed: progress > 35 },
        { step: 'הגדרת DNS', completed: progress > 55 },
        { step: 'התקנת SSL', completed: progress > 75 },
        { step: 'הפעלת CDN', completed: progress > 90 },
      ];
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          {isPublishing ? (
            <Loader2 className="w-10 h-10 text-white animate-spin" />
          ) : (
            <Rocket className="w-10 h-10 text-white" />
          )}
        </div>
        
        <h3 className="text-white text-xl font-semibold mb-2">
          {isExpressMode ? 'מפרסם באקספרס! ⚡' : 'מפרסם את האתר שלך'}
        </h3>
        <p className="text-gray-400">
          {getProgressMessage()}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-4">
        <Progress value={progress} className="h-3 bg-gray-700" />
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">התקדמות</span>
          <span className="text-white font-medium">{progress}%</span>
        </div>
        
        {isExpressMode && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/30">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">מצב אקספרס פעיל - 60 שניות</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Progress Steps */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h4 className="text-white font-medium mb-4">שלבי הפרסום:</h4>
            {getProgressSteps().map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${step.completed ? 'bg-green-600' : 'bg-gray-600'}
                  `}>
                    <Icon className={`w-4 h-4 ${step.completed ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <span className={`${step.completed ? 'text-green-400' : 'text-gray-400'}`}>
                    {step.name}
                  </span>
                  {step.completed && (
                    <CheckCircle className="w-4 h-4 text-green-400 mr-auto" />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Progress */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="space-y-3">
            <h4 className="text-white font-medium mb-4">פרטי התהליך:</h4>
            {getDetailedProgress().map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <div className={`
                  w-2 h-2 rounded-full
                  ${item.completed ? 'bg-green-400' : 'bg-gray-600'}
                `} />
                <span className={`${item.completed ? 'text-green-300' : 'text-gray-400'}`}>
                  {item.step}
                </span>
                {item.completed && (
                  <CheckCircle className="w-3 h-3 text-green-400 mr-auto" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technical Info */}
      <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-700/30">
        <CardContent className="p-4">
          <div className="text-center">
            <h4 className="text-blue-300 font-medium mb-2">💡 מה קורה מאחורי הקלעים?</h4>
            <p className="text-blue-200 text-sm">
              {isExpressMode 
                ? 'אנחנו מגדירים עבורך אחסון מהיר, דומיין זמני חינם, תעודת SSL מאובטחת ו-CDN עולמי - הכל אוטומטי!'
                : 'אנחנו רוכשים עבורך את הדומיין, מגדירים DNS, מתקינים SSL פרימיום, מפעילים CDN ומגדירים גיבויים אוטומטיים'
              }
            </p>
          </div>
        </CardContent>
      </Card>
      
      {progress === 100 && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 rounded-lg border border-green-600/30">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">
              {isExpressMode ? 'האתר באוויר עם SSL מאובטח תוך 60 שניות!' : 'הפרסום הושלם בהצלחה עם כל התכונות הפרימיום!'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
