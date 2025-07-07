
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Github, Key, ExternalLink, Info, CheckCircle } from 'lucide-react';
import { RealPublishingService } from '@/services/realPublishingService';

interface GitHubTokenFormProps {
  onTokenSaved: () => void;
  onSkip: () => void;
}

export const GitHubTokenForm = ({ onTokenSaved, onSkip }: GitHubTokenFormProps) => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveToken = async () => {
    if (!token.trim()) return;
    
    setIsLoading(true);
    try {
      // Test the token by making a simple API call
      const response = await fetch('https://api.github.com/user', {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (response.ok) {
        RealPublishingService.setGitHubToken(token);
        onTokenSaved();
      } else {
        alert('טוקן GitHub לא תקין. אנא בדוק ונסה שוב.');
      }
    } catch (error) {
      alert('שגיאה בבדיקת הטוקן. אנא נסה שוב.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <Github className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">חיבור ל-GitHub</h3>
        <p className="text-gray-400">להפעלת פרסום אמיתי, נדרש טוקן GitHub</p>
      </div>

      <Alert className="bg-blue-900/20 border-blue-700/50">
        <Info className="w-4 h-4" />
        <AlertDescription className="text-blue-200">
          עם טוקן GitHub, האתר יפורסם באמת ב-GitHub Pages. ללא טוקן, תקבל סימולציה של הפרסום.
        </AlertDescription>
      </Alert>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Key className="w-5 h-5" />
            הזנת טוקן GitHub
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white">Personal Access Token</Label>
            <Input
              type="password"
              placeholder="ghp_xxxxxxxxxxxx"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
            <div className="text-sm text-gray-400">
              הטוקן נשמר מקומית בדפדפן שלך בלבד
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleSaveToken}
              disabled={!token.trim() || isLoading}
              className="bg-green-600 hover:bg-green-700 flex-1"
            >
              {isLoading ? 'בודק...' : 'שמור טוקן'}
            </Button>
            <Button
              onClick={onSkip}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              דלג
            </Button>
          </div>

          <div className="border-t border-gray-600 pt-4">
            <div className="text-sm text-gray-300 mb-4 font-semibold">איך ליצור טוקן GitHub - שלבים מדויקים:</div>
            
            <div className="space-y-4">
              <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-600/30">
                <div className="flex items-center gap-2 text-yellow-300 font-semibold mb-2">
                  <CheckCircle className="w-4 h-4" />
                  שלב 1: בחר טוקן קלאסי
                </div>
                <div className="text-yellow-200 text-sm space-y-1">
                  <p>• כנס ל-GitHub Settings → Developer settings</p>
                  <p>• Personal access tokens → <strong>Tokens (classic)</strong></p>
                  <p>• לחץ "Generate new token" → <strong>Generate new token (classic)</strong></p>
                </div>
              </div>

              <div className="bg-red-900/20 p-4 rounded-lg border border-red-600/30">
                <div className="flex items-center gap-2 text-red-300 font-semibold mb-2">
                  <CheckCircle className="w-4 h-4" />
                  שלב 2: סמן את כל ההרשאות
                </div>
                <div className="text-red-200 text-sm space-y-1">
                  <p>• <strong>סמן את כל התיבות!</strong> כולל:</p>
                  <p>• ✅ repo (כל התת-אפשרויות)</p>
                  <p>• ✅ workflow</p>
                  <p>• ✅ user</p>
                  <p>• ✅ admin:repo_hook</p>
                  <p className="font-semibold text-red-300">בלי זה הפרסום לא יעבד!</p>
                </div>
              </div>

              <div className="bg-green-900/20 p-4 rounded-lg border border-green-600/30">
                <div className="flex items-center gap-2 text-green-300 font-semibold mb-2">
                  <CheckCircle className="w-4 h-4" />
                  שלב 3: העתק את הטוקן
                </div>
                <div className="text-green-200 text-sm">
                  <p>• לחץ "Generate token"</p>
                  <p>• העתק את הטוקן מיד (לא תוכל לראות אותו שוב!)</p>
                  <p>• הדבק אותו כאן למעלה</p>
                </div>
              </div>
            </div>

            <Button
              variant="link"
              className="text-blue-400 p-0 h-auto mt-4"
              onClick={() => window.open('https://github.com/settings/tokens', '_blank')}
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              פתח GitHub Settings עכשיו
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
