
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, RefreshCw, Zap } from "lucide-react";

interface GeneratedPageHeaderProps {
  onNavigateBack: () => void;
  onRegenerate: () => void;
  onDownloadCode: () => void;
}

const GeneratedPageHeader = ({ onNavigateBack, onRegenerate, onDownloadCode }: GeneratedPageHeaderProps) => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={onNavigateBack}
            className="text-gray-300 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 ml-2" />
            חזרה לדף הבית
          </Button>
          <h1 className="text-xl font-bold flex items-center">
            <Zap className="w-5 h-5 ml-2 text-blue-400" />
            הדף שלך מוכן!
          </h1>
          <div className="flex gap-2">
            <Button 
              onClick={onRegenerate}
              className="bg-green-600 hover:bg-green-700"
            >
              <RefreshCw className="w-4 h-4 ml-2" />
              צור מחדש
            </Button>
            <Button 
              onClick={onDownloadCode}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Download className="w-4 h-4 ml-2" />
              הורד קוד
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GeneratedPageHeader;
