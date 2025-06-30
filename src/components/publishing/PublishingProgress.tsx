
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Globe, 
  Shield, 
  CheckCircle, 
  Loader2,
  Zap,
  Settings
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
      if (progress <= 40) return 'מגדיר דומיין אוטומטי...';
      if (progress <= 60) return 'מפרסם את האתר לאוויר...';
      if (progress <= 80) return 'מגדיר אבטחת SSL...';
      return 'האתר חי באינטרנט! 🎉';
    } else {
      if (progress <= 25) return 'בונה את האתר...';
      if (progress <= 50) return 'מגדיר את הדומיין...';
      if (progress <= 75) return 'מתקין אינטגרציות...';
      return 'מפרסם לאוויר...';
    }
  };

  const getProgressSteps = () => {
    if (isExpressMode) {
      return [
        { name: 'הכנת האתר', icon: Rocket, completed: progress > 20 },
        { name: 'דומיין אוטומטי', icon: Globe, completed: progress > 40 },
        { name: 'פרסום לאוויר', icon: Zap, completed: progress > 60 },
        { name: 'הגדרת SSL', icon: Shield, completed: progress > 80 },
      ];
    } else {
      return [
        { name: 'בניית האתר', icon: Rocket, completed: progress > 25 },
        { name: 'הגדרת דומיין', icon: Globe, completed: progress > 50 },
        { name: 'התקנת אינטגרציות', icon: Settings, completed: progress > 75 },
        { name: 'פרסום לאוויר', icon: CheckCircle, completed: progress === 100 },
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
              <span className="text-yellow-300 text-sm font-medium">מצב אקספרס פעיל</span>
            </div>
          </div>
        )}
      </div>

      {/* Progress Steps */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="space-y-4">
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

      {/* Fun Facts */}
      <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-700/30">
        <CardContent className="p-4">
          <div className="text-center">
            <h4 className="text-blue-300 font-medium mb-2">💡 ידעת?</h4>
            <p className="text-blue-200 text-sm">
              {isExpressMode 
                ? 'באקספרס, האתר שלך יהיה מוכן תוך פחות מדקה!'
                : 'האתר שלך יכלול אבטחת SSL חינם ושירות CDN מהיר בכל העולם'
              }
            </p>
          </div>
        </CardContent>
      </Card>
      
      {progress === 100 && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 rounded-lg border border-green-600/30">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">הפרסום הושלם בהצלחה!</span>
          </div>
        </div>
      )}
    </div>
  );
};
