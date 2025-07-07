
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Globe, 
  Shield, 
  CheckCircle, 
  Loader2,
  Server,
  Database,
  Github,
  Code,
  Clock,
  ExternalLink
} from 'lucide-react';

interface PublishingProgressProps {
  progress: number;
  isPublishing: boolean;
}

export const PublishingProgress = ({ progress, isPublishing }: PublishingProgressProps) => {
  const getProgressMessage = () => {
    if (progress <= 20) return 'מכין את קבצי האתר...';
    if (progress <= 40) return 'יוצר את תוכן האתר...';
    if (progress <= 60) return 'יוצר repository ב-GitHub...';
    if (progress <= 80) return 'מפרסם ב-GitHub Pages...';
    if (progress < 100) return 'מפעיל את האתר...';
    return 'האתר שלך חי באינטרנט! 🎉';
  };

  const getProgressSteps = () => {
    return [
      { name: 'הכנת קבצי האתר', icon: Code, completed: progress > 20 },
      { name: 'יצירת repository', icon: Github, completed: progress > 40 },
      { name: 'פרסום ב-GitHub Pages', icon: Globe, completed: progress > 60 },
      { name: 'הפעלת האתר', icon: CheckCircle, completed: progress === 100 },
    ];
  };

  const getDetailedProgress = () => {
    return [
      { step: 'יצירת קבצי HTML, CSS, JS', completed: progress > 15 },
      { step: 'יצירת GitHub repository', completed: progress > 35 },
      { step: 'העלאת קבצים ל-GitHub', completed: progress > 55 },
      { step: 'הפעלת GitHub Pages', completed: progress > 75 },
      { step: 'כתובת אתר זמינה', completed: progress > 90 },
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
          מפרסם את האתר שלך באמת
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

      {/* Wait Notice for 100% */}
      {progress === 100 && (
        <Card className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border-yellow-700/50">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-6 h-6 text-yellow-400" />
                <h4 className="text-yellow-300 font-bold text-lg">⏳ חכה 5 דקות!</h4>
              </div>
              <div className="text-yellow-200 space-y-2">
                <p className="font-medium">GitHub Pages צריך כמה דקות להפעיל את האתר</p>
                <p className="text-sm">זה רגיל! אל תיכנס לאתר עדיין - חכה 5 דקות ואז תנסה</p>
              </div>
              <div className="bg-yellow-900/30 p-3 rounded-lg">
                <p className="text-yellow-300 text-sm font-medium">
                  💡 בזמן הזה תוכל לראות ב-GitHub שהאתר נוצר ו-Pages מופעל
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Progress Steps */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h4 className="text-white font-medium mb-4">שלבי הפרסום האמיתי:</h4>
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
          <div className="text-center space-y-2">
            <h4 className="text-blue-300 font-medium mb-2">🚀 מה קורה מאחורי הקלעים?</h4>
            <p className="text-blue-200 text-sm">
              אנחנו יוצרים repository חדש ב-GitHub, מעלים את קבצי האתר, ומפעילים GitHub Pages - האתר שלך יהיה זמין באמת לכל העולם!
            </p>
            <div className="bg-blue-900/30 p-3 rounded-lg mt-3">
              <p className="text-blue-300 text-sm font-medium">
                🌐 בונוס: ב-GitHub יש לך גם אפשרות לרכוש דומיין אמיתי ולחבר אותו לאתר!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {progress === 100 && (
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 rounded-lg border border-green-600/30">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">
              האתר באוויר עם GitHub Pages - באמת וללא עלות!
            </span>
          </div>

          {/* Domain Purchase Option */}
          <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-700/50 max-w-md mx-auto">
            <CardContent className="p-4">
              <div className="text-center space-y-3">
                <Globe className="w-8 h-8 text-purple-400 mx-auto" />
                <h5 className="text-purple-200 font-semibold">רוצה דומיין אמיתי?</h5>
                <p className="text-purple-300 text-sm">
                  ב-GitHub יש לך אפשרות לרכוש דומיין (.com, .co.il וכו') ולחבר אותו לאתר שלך
                </p>
                <Button
                  onClick={() => window.open('https://github.com/settings/pages', '_blank')}
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-700 mt-2"
                >
                  <ExternalLink className="w-4 h-4 ml-1" />
                  רכישת דומיין ב-GitHub
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Wait Reminder */}
          <Card className="bg-gradient-to-r from-orange-900/40 to-red-900/40 border-orange-700/50 max-w-lg mx-auto">
            <CardContent className="p-4">
              <div className="text-center space-y-2">
                <Clock className="w-6 h-6 text-orange-400 mx-auto" />
                <h5 className="text-orange-200 font-semibold">תזכורת חשובה</h5>
                <p className="text-orange-300 text-sm">
                  האתר יהיה מוכן בעוד כ-5 דקות. GitHub Pages צריך זמן להפעיל את האתר
                </p>
                <p className="text-orange-400 text-xs font-medium">
                  אל תדאג אם תקבל שגיאה 404 בהתחלה - זה נורמלי!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
