
import { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Globe, 
  Shield, 
  CheckCircle, 
  Loader2,
  Zap,
  Settings,
  ExternalLink,
  Copy,
  AlertCircle
} from 'lucide-react';
import { hostingService } from '@/services/hostingService';

interface RealPublishingProgressProps {
  domain: string;
  template: any;
  integrations: string[];
  isExpressMode: boolean;
  onComplete: (url: string) => void;
}

export const RealPublishingProgress = ({ 
  domain, 
  template, 
  integrations, 
  isExpressMode, 
  onComplete 
}: RealPublishingProgressProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [deploymentUrl, setDeploymentUrl] = useState('');
  const [error, setError] = useState('');
  const [deploymentId, setDeploymentId] = useState('');

  useEffect(() => {
    startDeployment();
  }, []);

  const startDeployment = async () => {
    try {
      setCurrentStep('מכין את האתר...');
      setProgress(10);
      
      // Generate and deploy website
      const deployResult = await hostingService.deployWebsite({
        domain,
        template,
        integrations
      });

      if (!deployResult.success) {
        throw new Error(deployResult.error || 'פרסום נכשל');
      }

      setDeploymentId(deployResult.deploymentId!);
      setProgress(25);
      setCurrentStep('מפרסם לאוויר...');

      // Monitor deployment progress
      await monitorDeployment(deployResult.deploymentId!);

    } catch (error) {
      console.error('Deployment failed:', error);
      setError(error.message);
    }
  };

  const monitorDeployment = async (deploymentId: string) => {
    const steps = isExpressMode ? [
      { progress: 40, message: 'מגדיר דומיין...' },
      { progress: 60, message: 'מתקין SSL...' },
      { progress: 80, message: 'מגדיר אינטגרציות...' },
      { progress: 100, message: 'האתר חי! 🎉' }
    ] : [
      { progress: 50, message: 'מגדיר DNS...' },
      { progress: 70, message: 'מתקין אינטגרציות...' },
      { progress: 85, message: 'מגדיר SSL...' },
      { progress: 100, message: 'הפרסום הושלם!' }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setProgress(step.progress);
      setCurrentStep(step.message);
      
      // Check deployment status
      const status = await hostingService.checkDeploymentStatus(deploymentId);
      
      if (status.status === 'ready' && status.url) {
        setDeploymentUrl(status.url);
        setIsComplete(true);
        onComplete(status.url);
        break;
      }
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(deploymentUrl);
  };

  const openSite = () => {
    window.open(deploymentUrl, '_blank');
  };

  if (error) {
    return (
      <div className="space-y-6 text-center">
        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto">
          <AlertCircle className="w-10 h-10 text-white" />
        </div>
        
        <div>
          <h3 className="text-white text-xl font-semibold mb-2">שגיאה בפרסום</h3>
          <p className="text-gray-400 mb-4">{error}</p>
          <Button onClick={startDeployment} className="bg-blue-600 hover:bg-blue-700">
            נסה שוב
          </Button>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="space-y-6 text-center">
        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        
        <div>
          <h3 className="text-white text-2xl font-bold mb-2">האתר שלך חי באינטרנט! 🎉</h3>
          <p className="text-gray-400">האתר פורסם בהצלחה ומוכן לקבל מבקרים</p>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">{deploymentUrl}</span>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={copyUrl}
                  className="bg-gray-700 hover:bg-gray-600"
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={openSite}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 text-center">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-white font-medium">SSL מותקן</p>
              <p className="text-gray-400">האתר מאובטח</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium">CDN פעיל</p>
              <p className="text-gray-400">טעינה מהירה</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 text-center">
              <Settings className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-white font-medium">{integrations.length} אינטגרציות</p>
              <p className="text-gray-400">פעילות</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Loader2 className="w-10 h-10 text-white animate-spin" />
        </div>
        
        <h3 className="text-white text-xl font-semibold mb-2">
          {isExpressMode ? 'מפרסם באקספרס! ⚡' : 'מפרסם את האתר שלך'}
        </h3>
        <p className="text-gray-400">{currentStep}</p>
      </div>

      <div className="space-y-4">
        <Progress value={progress} className="h-3 bg-gray-700" />
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">התקדמות פרסום</span>
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

      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-4">
          <div className="text-center">
            <h4 className="text-blue-300 font-medium mb-2">💡 מה קורה עכשיו?</h4>
            <p className="text-blue-200 text-sm">
              {progress < 30 ? 'יוצרים את קבצי האתר שלך' :
               progress < 60 ? 'מעלים את האתר לשרתים מהירים בכל העולם' :
               progress < 90 ? 'מגדירים אבטחה ואינטגרציות' :
               'בודקים שהכל עובד מושלם!'}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
