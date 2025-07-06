
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Github, Key, ExternalLink, Info } from 'lucide-react';
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
            <div className="text-sm text-gray-300 mb-2">איך ליצור טוקן GitHub:</div>
            <ol className="text-xs text-gray-400 space-y-1">
              <li>1. כנס ל-GitHub Settings</li>
              <li>2. Developer settings → Personal access tokens</li>
              <li>3. Generate new token (classic)</li>
              <li>4. בחר הרשאות: repo, user, workflow</li>
              <li>5. העתק את הטוקן שנוצר</li>
            </ol>
            <Button
              variant="link"
              className="text-blue-400 p-0 h-auto mt-2"
              onClick={() => window.open('https://github.com/settings/tokens', '_blank')}
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              פתח GitHub Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
