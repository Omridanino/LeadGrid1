
import GeneratedPageHeader from "@/components/GeneratedPageHeader";
import LandingPagePreview from "@/components/LandingPagePreview";
import FullScreenPreview from "@/components/FullScreenPreview";
import OptionsPanel from "@/components/OptionsPanel";
import { Button } from "@/components/ui/button";
import { PanelRightClose, PanelRightOpen, Save, CheckCircle } from "lucide-react";
import { useGeneratedPageState } from "@/hooks/useGeneratedPageState";
import { useGeneratedPageActions } from "@/hooks/useGeneratedPageActions";
import { useState } from "react";

const GeneratedLandingPage = () => {
  const [showFullScreenPreview, setShowFullScreenPreview] = useState(false);
  const state = useGeneratedPageState();
  const actions = useGeneratedPageActions({
    isSaved: state.isSaved,
    setIsSaved: state.setIsSaved,
    setShowAdvancedEditor: state.setShowAdvancedEditor,
    showAdvancedEditor: state.showAdvancedEditor,
    setShowDesignEditor: state.setShowDesignEditor,
    showDesignEditor: state.showDesignEditor,
    setShowWordPressGuide: state.setShowWordPressGuide,
    setGeneratedContent: state.setGeneratedContent,
    generateCreativeContent: state.generateCreativeContent,
    content: state.content,
    currentColors: state.currentColors,
    formData: state.formData,
    heroImage: state.heroImage
  });

  // Convert PageElement[] to string[] for elements prop
  const elementsAsStrings = state.elements?.map(element => 
    typeof element === 'string' ? element : element.type || ''
  ).filter(Boolean) || [];

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <GeneratedPageHeader 
        onNavigateBack={actions.onNavigateBack}
        onDownloadCode={actions.handleDownloadCode}
        onPreviewFullScreen={() => setShowFullScreenPreview(true)}
      />

      {/* Full Screen Preview */}
      <FullScreenPreview
        content={state.content}
        currentColors={state.currentColors}
        formData={state.formData}
        heroImage={state.heroImage}
        isOpen={showFullScreenPreview}
        onClose={() => setShowFullScreenPreview(false)}
      />

      {/* Save Button */}
      <div className="fixed top-20 right-4 z-50">
        <Button
          onClick={actions.handleSaveDesign}
          className={`${state.isSaved ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'} rounded-full p-3`}
          size="sm"
        >
          {state.isSaved ? <CheckCircle className="w-5 h-5" /> : <Save className="w-5 h-5" />}
        </Button>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-4 relative">
          {/* Toggle Button */}
          <Button
            onClick={() => state.setShowSidePanel(!state.showSidePanel)}
            className="fixed top-20 left-4 z-50 bg-purple-600 hover:bg-purple-700 rounded-full p-3"
            size="sm"
          >
            {state.showSidePanel ? <PanelRightClose className="w-5 h-5" /> : <PanelRightOpen className="w-5 h-5" />}
          </Button>

          {/* Main Content */}
          <div className={`transition-all duration-300 ${state.showSidePanel ? 'w-2/3' : 'w-full'}`}>
            <LandingPagePreview 
              content={state.content}
              currentColors={state.currentColors}
              formData={state.formData}
              heroImage={state.heroImage}
              elements={elementsAsStrings}
            />
          </div>

          {/* Side Panel */}
          {state.showSidePanel && (
            <div className="w-1/3 transition-all duration-300">
              <OptionsPanel 
                showDesignEditor={state.showDesignEditor}
                showWordPressGuide={state.showWordPressGuide}
                showAdvancedEditor={state.showAdvancedEditor}
                isSaved={state.isSaved}
                onColorChange={(newColors) => {
                  state.setCurrentColors(newColors);
                  actions.handleColorChange(newColors);
                }}
                onDesignEdit={actions.handleDesignEdit}
                onWordPressIntegration={actions.handleWordPressIntegration}
                onAdvancedEdit={actions.handleAdvancedEdit}
                onSave={actions.handleSaveDesign}
                generateHtmlFile={actions.generateHtmlFile}
                content={state.content}
                onContentChange={state.setGeneratedContent}
                formData={state.formData}
                onFormDataChange={state.setFormData}
                heroImage={state.heroImage}
                onHeroImageChange={state.setHeroImage}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default GeneratedLandingPage;
