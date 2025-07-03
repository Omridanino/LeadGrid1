
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
          
          {/* WordPress Account Setup Instructions */}
          <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-700/50">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">📝 הוראות ליצירת אתר WordPress</h4>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                      <p className="font-medium">יש לך כבר חשבון WordPress.com? מעולה!</p>
                      <p className="text-sm text-gray-400">פשוט התחבר לחשבון שלך ב-WordPress.com</p>
                      <Button 
                        onClick={() => window.open('https://wordpress.com/log-in', '_blank')}
                        size="sm" 
                        className="mt-2 bg-blue-600 hover:bg-blue-700"
                      >
                        התחבר ל-WordPress.com
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                      <p className="font-medium">בחר דומיין לאתר שלך</p>
                      <p className="text-sm text-gray-400">תוכל לבחור דומיין חינם (example.wordpress.com) או קנות דומיין מותאם</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                      <p className="font-medium">התאם את האתר שלך</p>
                      <p className="text-sm text-gray-400">השתמש בכלי העריכה של WordPress להוספת התוכן והעיצוב שלך</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <div>
                      <p className="font-medium">האתר שלך מוכן!</p>
                      <p className="text-sm text-gray-400">האתר יהיה זמין מיד ותוכל לשתף אותו עם לקוחות</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-4 mt-4">
                  <h5 className="text-green-400 font-medium mb-2">💡 יתרונות של הדרך הזו:</h5>
                  <ul className="text-green-300 text-sm space-y-1">
                    <li>• אתר WordPress אמיתי ומלא</li>
                    <li>• שליטה מלאה על האתר</li>
                    <li>• אין צורך באימותים מורכבים</li>
                    <li>• תמיכה מלאה של WordPress.com</li>
                    <li>• אפשרות לשדרוג לתכניות בתשלום</li>
                  </ul>
                </div>
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
              <div className="space-y-4 pt-6">
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => window.open('https://wordpress.com/start', '_blank')}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Globe className="w-4 h-4 ml-2" />
                    צור אתר WordPress אמיתי
                  </Button>
                  
                  <Button
                    type="button"
                    onClick={() => {
                      // יצירת אתר דמו פשוט
                      const demoSiteUrl = `${window.location.origin}/demo-wordpress-site?siteId=demo_${Date.now()}`;
                      window.open(demoSiteUrl, '_blank');
                    }}
                    variant="outline"
                    className="flex-1 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                  >
                    <CheckCircle className="w-4 h-4 ml-2" />
                    ראה דמו לדוגמה
                  </Button>
                </div>
                
                <Button
                  type="button"
                  onClick={onCancel}
                  variant="outline"
                  className="w-full border-gray-600 text-white hover:bg-gray-700"
                >
                  חזור
                </Button>
              </div>
            </form>
          )}

        </CardContent>
      </Card>
    </div>
  );
};
