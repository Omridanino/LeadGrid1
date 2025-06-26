
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

interface GeneratedPageHeaderProps {
  onNavigateBack: () => void;
  onDownloadCode: () => void;
}

const GeneratedPageHeader = ({ onNavigateBack, onDownloadCode }: GeneratedPageHeaderProps) => {
  return (
    <header className="bg-gray-900 border-b border-gray-700 px-4 py-3 sticky top-0 z-40">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Button
            onClick={onNavigateBack}
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <ArrowRight className="w-4 h-4 ml-2 rotate-180" />
            חזור לשאלון
          </Button>
          <h1 className="text-xl font-bold text-white">
            הדף שלכם מוכן!
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            onClick={onDownloadCode}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Download className="w-4 h-4 ml-2" />
            הורד קוד HTML
          </Button>
        </div>
      </div>
    </header>
  );
};

export default GeneratedPageHeader;
