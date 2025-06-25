
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-2xl font-bold">LeadGrid</h4>
          </div>
          <p className="text-gray-400 mb-6">העתיד של דפי הנחיתה - מותאם, חכם ויעיל</p>
          <p className="text-gray-500 text-sm">© 2024 LeadGrid. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
