
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Building, 
  MapPin,
  Globe,
  Info,
  CheckCircle
} from 'lucide-react';

interface WordPressUser {
  username: string;
  email: string;
  password: string;
  displayName: string;
  firstName: string;
  lastName: string;
  phone: string;
  company?: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  websiteTitle: string;
  websiteDescription: string;
}

interface WordPressRegistrationFormProps {
  onSubmit: (userData: WordPressUser) => void;
  isLoading?: boolean;
  selectedDomain: string;
}

export const WordPressRegistrationForm = ({ 
  onSubmit, 
  isLoading = false,
  selectedDomain 
}: WordPressRegistrationFormProps) => {
  const [formData, setFormData] = useState<WordPressUser>({
    username: '',
    email: '',
    password: '',
    displayName: '',
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    country: 'ישראל',
    zipCode: '',
    websiteTitle: '',
    websiteDescription: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Required fields validation
    if (!formData.username.trim()) newErrors.username = 'שם משתמש נדרש';
    if (!formData.email.trim()) newErrors.email = 'אימיל נדרש';
    if (!formData.password.trim()) newErrors.password = 'סיסמה נדרשת';
    if (!formData.firstName.trim()) newErrors.firstName = 'שם פרטי נדרש';
    if (!formData.lastName.trim()) newErrors.lastName = 'שם משפחה נדרש';
    if (!formData.phone.trim()) newErrors.phone = 'טלפון נדרש';
    if (!formData.websiteTitle.trim()) newErrors.websiteTitle = 'כותרת האתר נדרשת';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'כתובת אימיל לא תקינה';
    }

    // Username validation (WordPress requirements)
    if (formData.username && formData.username.length < 3) {
      newErrors.username = 'שם המשתמש חייב להיות לפחות 3 תווים';
    }

    // Password validation
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'הסיסמה חייבת להיות לפחות 6 תווים';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData(prev => ({ ...prev, password }));
  };

  const suggestUsername = () => {
    if (formData.firstName && formData.lastName) {
      const suggested = `${formData.firstName.toLowerCase()}${formData.lastName.toLowerCase()}`;
      setFormData(prev => ({ ...prev, username: suggested }));
    } else if (formData.email) {
      const suggested = formData.email.split('@')[0];
      setFormData(prev => ({ ...prev, username: suggested }));
    }
  };

  return (
    <div className="space-y-6" dir="rtl">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Globe className="w-5 h-5" />
            הרשמה לאתר וורדפרס - {selectedDomain}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="bg-blue-900/20 border-blue-700/30 mb-6">
            <Info className="w-4 h-4" />
            <AlertDescription className="text-blue-200">
              אנחנו ניצור עבורך אתר וורדפרס אמיתי עם המשתמש שלך. 
              תקבל גישה מלאה לניהול האתר ולוח הבקרה של וורדפרס.
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* WordPress User Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-300">שם משתמש וורדפרס *</Label>
                <div className="flex gap-2">
                  <Input
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="username"
                  />
                  <Button
                    type="button"
                    onClick={suggestUsername}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={!formData.firstName || !formData.lastName}
                  >
                    הצע
                  </Button>
                </div>
                {errors.username && <p className="text-red-400 text-sm mt-1">{errors.username}</p>}
              </div>

              <div>
                <Label className="text-gray-300">סיסמה *</Label>
                <div className="flex gap-2">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="סיסמה חזקה"
                  />
                  <Button
                    type="button"
                    onClick={generatePassword}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Lock className="w-4 h-4" />
                  </Button>
                </div>
                {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-300">שם פרטי *</Label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    firstName: e.target.value,
                    displayName: `${e.target.value} ${prev.lastName}`.trim()
                  }))}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="השם הפרטי שלך"
                />
                {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <Label className="text-gray-300">שם משפחה *</Label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    lastName: e.target.value,
                    displayName: `${prev.firstName} ${e.target.value}`.trim()
                  }))}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="שם המשפחה שלך"
                />
                {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-300">אימיל *</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label className="text-gray-300">טלפון *</Label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="050-1234567"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Website Details */}
            <div>
              <Label className="text-gray-300">כותרת האתר *</Label>
              <Input
                value={formData.websiteTitle}
                onChange={(e) => setFormData(prev => ({ ...prev, websiteTitle: e.target.value }))}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="השם של האתר שלך"
              />
              {errors.websiteTitle && <p className="text-red-400 text-sm mt-1">{errors.websiteTitle}</p>}
            </div>

            <div>
              <Label className="text-gray-300">תיאור האתר</Label>
              <Textarea
                value={formData.websiteDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, websiteDescription: e.target.value }))}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="תיאור קצר של האתר שלך..."
                rows={3}
              />
            </div>

            {/* Additional Details */}
            <div>
              <Label className="text-gray-300">חברה (אופציונלי)</Label>
              <Input
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="שם החברה"
              />
            </div>

            <div>
              <Label className="text-gray-300">כתובת</Label>
              <Input
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="רחוב, מספר בית"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-gray-300">עיר</Label>
                <Input
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="תל אביב"
                />
              </div>
              <div>
                <Label className="text-gray-300">מדינה</Label>
                <Input
                  value={formData.country}
                  onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label className="text-gray-300">מיקוד</Label>
                <Input
                  value={formData.zipCode}
                  onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="12345"
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-8 py-3"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    יוצר אתר וורדפרס...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    צור אתר וורדפרס אמיתי
                  </div>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
