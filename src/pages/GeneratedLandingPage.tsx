import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Globe, Code, ExternalLink, Check, Palette, FileText, Zap, Star, Users, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GeneratedLandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showDomainPurchase, setShowDomainPurchase] = useState(false);
  const [showWordPressGuide, setShowWordPressGuide] = useState(false);
  
  const formData = location.state?.formData || {
    businessName: "העסק שלי",
    businessType: "שירותים עסקיים",
    targetAudience: "לקוחות פוטנציאליים",
    mainGoal: "הגדלת מכירות",
    keyFeatures: "שירות מקצועי, מהירות, אמינות",
    brandColors: "כחול וכסף",
    contactInfo: "טלפון: 050-1234567\nאימייל: info@business.co.il"
  };

  const generatedContent = {
    headline: `ברוכים הבאים ל${formData.businessName}`,
    subheadline: `הפתרון המושלם ל${formData.targetAudience} בתחום ${formData.businessType}`,
    features: formData.keyFeatures.split(',').map(f => f.trim()),
    cta: `התחל עם ${formData.businessName} עוד היום`,
    aboutText: `${formData.businessName} מתמחה ב${formData.businessType} ומספקת שירותים איכותיים ל${formData.targetAudience}. המטרה שלנו היא ${formData.mainGoal} תוך מתן שירות מעולה.`
  };

  const handleWordPressIntegration = () => {
    setShowWordPressGuide(true);
    toast({
      title: "🔗 מדריך חיבור WordPress",
      description: "מדריך מפורט נפתח עבורך",
    });
  };

  const handleDomainPurchase = () => {
    setShowDomainPurchase(true);
    toast({
      title: "🌐 רכישת דומיין",
      description: "בחר את הדומיין המתאים לעסק שלך",
    });
  };

  const handleDownload = () => {
    const htmlContent = generateHtmlFile();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.businessName.replace(/\s+/g, '_')}_landing_page.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "⬇️ הורדת הדף הושלמה!",
      description: "הדף שלך הורד בהצלחה כקובץ HTML",
    });
  };

  const generateHtmlFile = () => {
    return `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.businessName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .gradient-bg { 
            background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #06b6d4 100%); 
            background-size: 300% 300%;
            animation: gradientShift 6s ease infinite;
        }
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .card-hover { 
            transition: all 0.3s ease; 
            backdrop-filter: blur(10px);
        }
        .card-hover:hover { 
            transform: translateY(-10px) scale(1.02); 
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .floating-animation {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
            from { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
            to { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8); }
        }
    </style>
</head>
<body class="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
    <!-- 3D Background Elements -->
    <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full floating-animation"></div>
        <div class="absolute bottom-40 left-20 w-48 h-48 bg-purple-500/10 rounded-full floating-animation" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/10 rounded-full floating-animation" style="animation-delay: 4s;"></div>
    </div>

    <!-- Header -->
    <header class="gradient-bg py-20 text-center relative z-10">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <div class="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                    <span class="text-blue-200 font-semibold">🚀 הפתרון המתקדם ביותר בשוק</span>
                </div>
                <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">${generatedContent.headline}</h1>
                <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">${generatedContent.subheadline}</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <button class="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 pulse-glow">
                        ${generatedContent.cta}
                    </button>
                    <button class="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                        צפה בדמו
                    </button>
                </div>
                
                <!-- Stats Section -->
                <div class="grid md:grid-cols-3 gap-6 mt-12">
                    <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl card-hover">
                        <div class="text-3xl font-bold text-white mb-2">10,000+</div>
                        <div class="text-blue-200">לקוחות מרוצים</div>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl card-hover">
                        <div class="text-3xl font-bold text-white mb-2">99.9%</div>
                        <div class="text-blue-200">זמינות השירות</div>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl card-hover">
                        <div class="text-3xl font-bold text-white mb-2">24/7</div>
                        <div class="text-blue-200">תמיכה טכנית</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <!-- Features Section -->
    <section class="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative z-10">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-6">למה לבחור בנו?</h2>
                <p class="text-xl text-gray-300">היתרונות שיעשו לך את ההבדל</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${generatedContent.features.map((feature, index) => `
                <div class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl card-hover border border-gray-600/50">
                    <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 flex items-center justify-center text-2xl">
                        ${['✅', '⚡', '🎯', '💎', '🚀', '🔥'][index] || '✨'}
                    </div>
                    <h3 class="text-xl font-semibold mb-4 text-white">${feature}</h3>
                    <p class="text-gray-300">פתרון מתקדם ומקצועי שיעזור לך להשיג את המטרות שלך בצורה הטובה ביותר.</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <!-- About Section -->
    <section class="py-20 bg-gradient-to-r from-gray-900 to-black relative z-10">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold mb-8">אודותינו</h2>
                        <p class="text-lg text-gray-300 mb-8 leading-relaxed">${generatedContent.aboutText}</p>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-reverse space-x-3">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <span class="text-white text-xs">✓</span>
                                </div>
                                <span class="text-gray-300">
