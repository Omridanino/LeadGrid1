
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Globe, User, CheckCircle, Rocket, AlertTriangle } from 'lucide-react';
import { RealWordPressService } from '@/services/realWordPressService';

interface WordPressRegistrationFormProps {
  onSubmit: (userData: any) => void;
  onCancel: () => void;
  selectedDomain: string;
  isLoading?: boolean;
}

export const WordPressRegistrationForm = ({ onSubmit, onCancel, selectedDomain, isLoading }: WordPressRegistrationFormProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    displayName: '',
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    country: 'Israel',
    zipCode: '',
    websiteTitle: '',
    websiteDescription: ''
  });

  useEffect(() => {
    // ניקוי טוקנים ישנים
    localStorage.removeItem('wp_access_token');
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const authenticated = await RealWordPressService.isAuthenticated();
      setIsAuthenticated(authenticated);
    } catch (error) {
      console.error('Authentication check failed:', error);
      setIsAuthenticated(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('הסיסמאות אינן תואמות');
      return;
    }

    if (!isAuthenticated) {
      alert('נדרש אימות WordPress.com לפני יצירת אתר. אנא לחץ על "התחבר עכשיו" קודם.');
      return;
    }

    onSubmit(formData);
  };

  const handleAuthenticate = () => {
    try {
      console.log('🔗 מתחיל אימות WordPress.com...');
      
      // נשתמש ב-Edge Function רק לקבלת ה-URL
      fetch('https://crkgabcjxkdpnhipvugu.supabase.co/functions/v1/wordpress-auth?action=get-auth-url')
        .then(response => response.json())
        .then(data => {
          if (data.authUrl) {
            console.log('🔗 פותח חלון אימות WordPress.com...');
            // פתיחה בטאב חדש
            window.open(data.authUrl, '_blank');
            // הצגת הוראות למשתמש
            alert('נפתח טאב חדש לאימות WordPress.com. אחרי ההתחברות, חזור לכאן ולחץ על "בדוק אימות" למטה.');
          }
        })
        .catch(error => {
          console.error('❌ שגיאה בקבלת URL אימות:', error);
          alert('שגיאה בתהליך האימות. נסה שוב.');
        });
      
    } catch (error) {
      console.error('❌ Authentication failed:', error);
      alert(`שגיאה באימות: ${error.message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6" dir="rtl">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-white text-2xl flex items-center justify-center gap-2">
            <Globe className="w-6 h-6" />
            יצירת אתר WordPress.com אמיתי
          </CardTitle>
          <p className="text-gray-300">
            צור אתר WordPress.com אמיתי ופונקציונלי מלא
          </p>
          <Badge className="bg-blue-600 text-white">
            דומיין: {selectedDomain}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-6">
          
          {/* Authentication Status */}
          <Card className={`${isAuthenticated ? 'bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-700/50' : 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-700/50'}`}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                {isAuthenticated ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <div>
                      <h4 className="text-white font-semibold">מחובר ל-WordPress.com ✓</h4>
                      <p className="text-gray-300 text-sm">
                        מוכן ליצירת אתרי WordPress.com אמיתיים
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">נדרש אימות WordPress.com</h4>
                      <p className="text-gray-300 text-sm">
                        התחבר ל-WordPress.com כדי ליצור אתרים אמיתיים
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={handleAuthenticate}
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        התחבר עכשיו
                      </Button>
                      <Button
                        onClick={() => {
                          console.log('🔄 בודק אימות...');
                          checkAuthentication();
                        }}
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-white hover:bg-gray-700"
                      >
                        בדוק אימות
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Show form always but disable submit until authenticated */}
          {true && (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Basic User Info */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <User className="w-5 h-5" />
                  פרטים אישיים
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="username" className="text-gray-300">שם משתמש *</Label>
                    <Input
                      id="username"
                      type="text"
                      value={formData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="username123"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300">אימייל *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="user@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password" className="text-gray-300">סיסמה *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="סיסמה חזקה"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="confirmPassword" className="text-gray-300">אימות סיסמה *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="אימות סיסמה"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">שם פרטי</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">שם משפחה</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Website Details */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  פרטי האתר
                </h3>
                
                <div>
                  <Label htmlFor="websiteTitle" className="text-gray-300">כותרת האתר *</Label>
                  <Input
                    id="websiteTitle"
                    type="text"
                    value={formData.websiteTitle}
                    onChange={(e) => handleInputChange('websiteTitle', e.target.value)}
                    required
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="שם האתר שלי"
                  />
                </div>
                
                <div>
                  <Label htmlFor="websiteDescription" className="text-gray-300">תיאור האתר</Label>
                  <Textarea
                    id="websiteDescription"
                    value={formData.websiteDescription}
                    onChange={(e) => handleInputChange('websiteDescription', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="תיאור קצר על האתר..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <Button
                  type="submit"
                  disabled={isLoading || !isAuthenticated}
                  className={`flex-1 ${isAuthenticated ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-500 cursor-not-allowed'} text-white`}
                >
                  {isLoading ? (
                    <>
                      <Rocket className="w-4 h-4 ml-2 animate-spin" />
                      יוצר אתר WordPress.com אמיתי...
                    </>
                  ) : !isAuthenticated ? (
                    <>
                      <AlertTriangle className="w-4 h-4 ml-2" />
                      נדרש אימות WordPress.com קודם
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 ml-2" />
                      צור אתר WordPress.com אמיתי
                    </>
                  )}
                </Button>
                
                <Button
                  type="button"
                  onClick={onCancel}
                  disabled={isLoading}
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700"
                >
                  ביטול
                </Button>
              </div>
            </form>
          )}

          {/* Instructions for non-authenticated state */}
          {!isAuthenticated && (
            <div className="text-center py-8">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-right">
                  <strong>הוראות:</strong><br/>
                  1. לחץ על "התחבר עכשיו" - יפתח טאב חדש<br/>
                  2. התחבר ל-WordPress.com בטאב החדש<br/>
                  3. אחרי ההתחברות, העתק את כל ה-URL מהדפדפן<br/>
                  4. הדבק אותו כאן ולחץ "אמת":
                  <div className="mt-3 flex gap-2">
                    <Input
                      placeholder="הדבק כאן את ה-URL עם קוד האימות..."
                      onChange={(e) => {
                        const url = e.target.value;
                        const match = url.match(/code=([^&]+)/);
                        if (match) {
                          const code = match[1];
                          console.log('🔑 נמצא קוד אימות:', code);
                          RealWordPressService.handleOAuthCallback(code).then(success => {
                            if (success) {
                              checkAuthentication();
                              alert('אימות הושלם בהצלחה!');
                            } else {
                              alert('שגיאה בעיבוד הקוד');
                            }
                          });
                        }
                      }}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                    <Button size="sm" onClick={() => alert('הדבק את ה-URL בשדה ולחץ Enter')}>
                      אמת
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
