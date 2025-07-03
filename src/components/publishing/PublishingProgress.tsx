
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Globe, 
  Shield, 
  CheckCircle, 
  Loader2,
  Server,
  Database
} from 'lucide-react';

interface PublishingProgressProps {
  progress: number;
  isPublishing: boolean;
}

export const PublishingProgress = ({ progress, isPublishing }: PublishingProgressProps) => {
  const getProgressMessage = () => {
    if (progress <= 25) return 'מכין את קבצי האתר...';
    if (progress <= 50) return 'מעלה לאחסון חינם ב-Netlify...';
    if (progress <= 75) return 'מגדיר SSL מאובטח וכתובת אתר...';
    return 'האתר שלך חי באינטרנט! 🎉';
  };

  const getProgressSteps = () => {
    return [
      { name: 'הכנת קבצי האתר', icon: Rocket, completed: progress > 25 },
      { name: 'העלאה לאחסון', icon: Globe, completed: progress > 50 },
      { name: 'הגדרת SSL', icon: Shield, completed: progress > 75 },
      { name: 'פרסום מוכן', icon: CheckCircle, completed: progress === 100 },
    ];
  };

  const getDetailedProgress = () => {
    return [
      { step: 'יצירת קבצי HTML, CSS, JS', completed: progress > 15 },
      { step: 'חיבור ל-Netlify', completed: progress > 35 },
      { step: 'העלאת קבצים', completed: progress > 55 },
      { step: 'הפעלת SSL חינם', completed: progress > 75 },
      { step: 'כתובת אתר מוכנה', completed: progress > 90 },
    ];
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
          מפרסם את האתר שלך
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
              אנחנו מעלים את האתר שלך לאחסון חינם ב-Netlify, מגדירים SSL מאובטח ונותנים לך כתובת אתר קבועה - הכל חינם לחלוטין!
            </p>
          </div>
        </CardContent>
      </Card>
      
      {progress === 100 && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 rounded-lg border border-green-600/30">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">
              האתר באוויר עם SSL מאובטח - חינם לחלוטין!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
