
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Home, Zap } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                LeadGrid
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Home className="w-4 h-4" />
                דף הבית
              </Link>
              
              <Link 
                to="/api-settings" 
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/api-settings' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Settings className="w-4 h-4" />
                הגדרות API
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link to="/" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                יצירת דף חדש
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
