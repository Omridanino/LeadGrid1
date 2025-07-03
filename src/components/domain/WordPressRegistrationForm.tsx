
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Globe, User, Mail, Phone, Building, MapPin, CreditCard, Key, CheckCircle, AlertCircle } from 'lucide-react';
import { RealWordPressService } from '@/services/realWordPressService';

interface WordPressRegistrationFormProps {
  onSubmit: (userData: any) => void;
  onCancel: () => void;
  selectedDomain: string;
  isLoading?: boolean;
}

export const WordPressRegistrationForm = ({ onSubmit, onCancel, selectedDomain, isLoading }: WordPressRegistrationFormProps) => {
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

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Check if user is authenticated with WordPress.com
  const checkWordPressAuth = async () => {
    setIsCheckingAuth(true);
    try {
      const authenticated = await RealWordPressService.isAuthenticated();
      setIsAuthenticated(authenticated);
      
      if (authenticated) {
        console.log('✅ WordPress.com authentication confirmed');
      } else {
        console.log('❌ WordPress.com authentication required');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
    }
    setIsCheckingAuth(false);
  };

  // Check auth status on component mount
  useEffect(() => {
    checkWordPressAuth();
    
    // Listen for auth code from popup
    const handleStorageChange = () => {
      const authCode = localStorage.getItem('wp_auth_code');
      if (authCode) {
        localStorage.removeItem('wp_auth_code');
        // Recheck authentication
        setTimeout(() => {
          checkWordPressAuth();
        }, 1000);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically
    const interval = setInterval(() => {
      if (!isAuthenticated) {
        checkWordPressAuth();
      }
    }, 2000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [isAuthenticated]);

  const authenticateWithWordPress = () => {
    console.log('🔐 Starting WordPress.com authentication...');
    RealWordPressService.initiateWordPressAuth();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      alert('יש להתחבר ל-WordPress.com קודם כדי ליצור אתר אמיתי');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('הסיסמאות אינן תואמות');
      return;
    }

    onSubmit(formData);
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
            מלא את הפרטים כדי ליצור אתר וורדפרס אמיתי ב-WordPress.com
          </p>
          <Badge className="bg-blue-600 text-white">
            דומיין: {selectedDomain}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-6">
          
          {/* WordPress.com Authentication Status */}
          <Card className={`${
            isAuthenticated 
              ? 'bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-700/50'
              : 'bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-700/50'
          }`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Key className={`w-5 h-5 ${isAuthenticated ? 'text-green-400' : 'text-orange-400'}`} />
                  <div>
                    <h4 className="text-white font-semibold">
                      {isCheckingAuth 
                        ? 'בודק אימות WordPress.com...'
                        : isAuthenticated 
                          ? 'מחובר ל-WordPress.com ✓' 
                          : 'נדרש אימות WordPress.com'
                      }
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {isAuthenticated 
                        ? 'יכול ליצור אתרי WordPress.com אמיתיים' 
                        : 'יש להתחבר כדי ליצור אתרים אמיתיים'
                      }
                    </p>
                  </div>
                </div>
                {!isAuthenticated && !isCheckingAuth && (
                  <Button
                    onClick={authenticateWithWordPress}
                    className="bg-blue-600 hover:bg-blue-700"
                    size="sm"
                  >
                    התחבר עכשיו
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

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

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" />
                פרטי יצירת קשר
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-gray-300">טלפון</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="05X-XXX-XXXX"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-gray-300">חברה</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="שם החברה"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address" className="text-gray-300">כתובת</Label>
                <Input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="רחוב ומספר בית"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city" className="text-gray-300">עיר</Label>
                  <Input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="תל אביב"
                  />
                </div>
                
                <div>
                  <Label htmlFor="country" className="text-gray-300">מדינה</Label>
                  <Input
                    id="country"
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="zipCode" className="text-gray-300">מיקוד</Label>
                  <Input
                    id="zipCode"
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="12345"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button
                type="submit"
                disabled={isLoading || !isAuthenticated}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                {isLoading ? (
                  <>
                    <CreditCard className="w-4 h-4 ml-2 animate-spin" />
                    יוצר אתר WordPress.com...
                  </>
                ) : !isAuthenticated ? (
                  <>
                    <AlertCircle className="w-4 h-4 ml-2" />
                    נדרש אימות WordPress.com
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

            {!isAuthenticated && !isCheckingAuth && (
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  💡 יש להתחבר ל-WordPress.com קודם כדי ליצור אתר אמיתי
                </p>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
