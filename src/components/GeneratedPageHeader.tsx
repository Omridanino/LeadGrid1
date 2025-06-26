
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Download } from "lucide-react";

interface GeneratedPageHeaderProps {
  onNavigateBack: () => void;
  onDownloadCode: () => void;
  onPreviewFullScreen: () => void;
}

const GeneratedPageHeader = ({ onNavigateBack, onDownloadCode, onPreviewFullScreen }: GeneratedPageHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 bg-gray-900 border-b border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            onClick={onNavigateBack}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            חזור לעמוד הראשי
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={onPreviewFullScreen}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Eye className="w-4 h-4 ml-2" />
            הצג את דף הנחיתה
          </Button>
          <Button
            onClick={onDownloadCode}
            className="bg-green-600 hover:bg-green-700"
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
