
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
      alert('נדרש אימות WordPress.com לפני יצירת אתר');
      return;
    }

    onSubmit(formData);
  };

  const handleAuthenticate = () => {
    try {
      RealWordPressService.initiateWordPressAuth();
    } catch (error) {
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
                    <Button
                      onClick={handleAuthenticate}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      התחבר עכשיו
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Only show form if authenticated */}
          {isAuthenticated && (
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
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isLoading ? (
                    <>
                      <Rocket className="w-4 h-4 ml-2 animate-spin" />
                      יוצר אתר WordPress.com אמיתי...
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
                  <strong>חשוב:</strong> נדרש אימות WordPress.com כדי ליצור אתרים אמיתיים.
                  לחץ על "התחבר עכשיו" למעלה כדי להתחיל.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
