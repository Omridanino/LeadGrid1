import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContentElementsEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  onColorsChange: (newColors: any) => void;
  formData: any;
}

const ContentElementsEditor = ({ content, onContentChange, onColorsChange, formData }: ContentElementsEditorProps) => {
  const [heroTitle, setHeroTitle] = useState(content?.heroSection?.title || '');
  const [heroSubtitle, setHeroSubtitle] = useState(content?.heroSection?.subtitle || '');
  const [heroButtonText, setHeroButtonText] = useState(content?.heroSection?.button?.text || '');
  const [heroBackgroundColor, setHeroBackgroundColor] = useState(content?.heroSection?.backgroundColor || '#ffffff');
  const [heroBackgroundImage, setHeroBackgroundImage] = useState(content?.heroSection?.backgroundImage || '');
  const [emotionalTitle, setEmotionalTitle] = useState(content?.emotionalSection?.title || '');
  const [emotionalSubtitle, setEmotionalSubtitle] = useState(content?.emotionalSection?.subtitle || '');
  const [emotionalText, setEmotionalText] = useState(content?.emotionalSection?.text || '');
  const [emotionalBadge, setEmotionalBadge] = useState(content?.emotionalSection?.badge || '');
  const [emotionalBackgroundColor, setEmotionalBackgroundColor] = useState(content?.emotionalSection?.backgroundColor || '#1e1e2e');

  useEffect(() => {
    setHeroTitle(content?.heroSection?.title || '');
    setHeroSubtitle(content?.heroSection?.subtitle || '');
    setHeroButtonText(content?.heroSection?.button?.text || '');
    setHeroBackgroundColor(content?.heroSection?.backgroundColor || '#ffffff');
    setHeroBackgroundImage(content?.heroSection?.backgroundImage || '');
    setEmotionalTitle(content?.emotionalSection?.title || '');
    setEmotionalSubtitle(content?.emotionalSection?.subtitle || '');
    setEmotionalText(content?.emotionalSection?.text || '');
    setEmotionalBadge(content?.emotionalSection?.badge || '');
    setEmotionalBackgroundColor(content?.emotionalSection?.backgroundColor || '#1e1e2e');
  }, [content]);

  const updateContent = (newContent: any) => {
    onContentChange(newContent);
  };

  const handleHeroTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setHeroTitle(newTitle);
    updateContent({
      ...content,
      heroSection: {
        ...content.heroSection,
        title: newTitle
      }
    });
  };

  const handleHeroSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSubtitle = e.target.value;
    setHeroSubtitle(newSubtitle);
    updateContent({
      ...content,
      heroSection: {
        ...content.heroSection,
        subtitle: newSubtitle
      }
    });
  };

  const handleHeroButtonTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newButtonText = e.target.value;
    setHeroButtonText(newButtonText);
    updateContent({
      ...content,
      heroSection: {
        ...content.heroSection,
        button: {
          ...content.heroSection.button,
          text: newButtonText
        }
      }
    });
  };

  const handleHeroBackgroundColorChange = (color: any) => {
    setHeroBackgroundColor(color.hex);
    updateContent({
      ...content,
      heroSection: {
        ...content.heroSection,
        backgroundColor: color.hex
      }
    });
  };

  const handleHeroBackgroundImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBackgroundImage = e.target.value;
    setHeroBackgroundImage(newBackgroundImage);
    updateContent({
      ...content,
      heroSection: {
        ...content.heroSection,
        backgroundImage: newBackgroundImage
      }
    });
  };

  const handleEmotionalTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setEmotionalTitle(newTitle);
    updateContent({
      ...content,
      emotionalSection: {
        ...content.emotionalSection,
        title: newTitle
      }
    });
  };

  const handleEmotionalSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSubtitle = e.target.value;
    setEmotionalSubtitle(newSubtitle);
    updateContent({
      ...content,
      emotionalSection: {
        ...content.emotionalSection,
        subtitle: newSubtitle
      }
    });
  };

  const handleEmotionalTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setEmotionalText(newText);
    updateContent({
      ...content,
      emotionalSection: {
        ...content.emotionalSection,
        text: newText
      }
    });
  };

  const handleEmotionalBadgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBadge = e.target.value;
    setEmotionalBadge(newBadge);
    updateContent({
      ...content,
      emotionalSection: {
        ...content.emotionalSection,
        badge: newBadge
      }
    });
  };

  const handleEmotionalBackgroundColorChange = (color: any) => {
    setEmotionalBackgroundColor(color.hex);
    updateContent({
      ...content,
      emotionalSection: {
        ...content.emotionalSection,
        backgroundColor: color.hex
      }
    });
  };

  const copyHeroBackgroundToEmotional = () => {
    if (!content) return;

    // Get the current hero section background
    const heroSection = content.heroSection || {};
    const heroBackground = heroSection.background;
    const heroBackgroundColor = heroSection.backgroundColor;
    const heroBackgroundImage = heroSection.backgroundImage;

    // Determine what background style to copy
    let backgroundToCopy = '';
    if (heroBackgroundImage) {
      backgroundToCopy = heroBackgroundImage;
    } else if (heroBackground) {
      backgroundToCopy = heroBackground;
    } else if (heroBackgroundColor) {
      backgroundToCopy = heroBackgroundColor;
    }

    // Update the emotional section with the hero's background
    const updatedContent = {
      ...content,
      emotionalSection: {
        ...content.emotionalSection,
        backgroundColor: backgroundToCopy || heroBackgroundColor || '#1e1e2e'
      }
    };

    onContentChange(updatedContent);
    
    // Show success message
    console.log('Hero background copied to Emotional Section:', backgroundToCopy);
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gray-900 rounded-lg p-4">
        <h2 className="text-white font-semibold mb-4">הגדרות Hero Section</h2>
        <div className="space-y-4">
          <div>
            <Label className="text-gray-400">כותרת:</Label>
            <Input type="text" value={heroTitle} onChange={handleHeroTitleChange} className="bg-gray-800 text-white" />
          </div>
          <div>
            <Label className="text-gray-400">כותרת משנית:</Label>
            <Input type="text" value={heroSubtitle} onChange={handleHeroSubtitleChange} className="bg-gray-800 text-white" />
          </div>
          <div>
            <Label className="text-gray-400">טקסט כפתור:</Label>
            <Input type="text" value={heroButtonText} onChange={handleHeroButtonTextChange} className="bg-gray-800 text-white" />
          </div>
          <div>
            <Label className="text-gray-400">צבע רקע:</Label>
            <SketchPicker color={heroBackgroundColor} onChange={handleHeroBackgroundColorChange} />
          </div>
          <div>
            <Label className="text-gray-400">תמונת רקע (URL):</Label>
            <Input type="text" value={heroBackgroundImage} onChange={handleHeroBackgroundImageChange} className="bg-gray-800 text-white" />
          </div>
        </div>
      </div>

      {/* Emotional Section */}
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">פסקת רגש</h3>
          <Button
            onClick={copyHeroBackgroundToEmotional}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
          >
            העתק רקע הירו
          </Button>
        </div>
        <div className="space-y-4">
          <div>
            <Label className="text-gray-400">כותרת:</Label>
            <Input type="text" value={emotionalTitle} onChange={handleEmotionalTitleChange} className="bg-gray-800 text-white" />
          </div>
          <div>
            <Label className="text-gray-400">כותרת משנית:</Label>
            <Input type="text" value={emotionalSubtitle} onChange={handleEmotionalSubtitleChange} className="bg-gray-800 text-white" />
          </div>
          <div>
            <Label className="text-gray-400">טקסט:</Label>
            <Textarea value={emotionalText} onChange={handleEmotionalTextChange} className="bg-gray-800 text-white" />
          </div>
          <div>
            <Label className="text-gray-400">באדג' (תג):</Label>
            <Input type="text" value={emotionalBadge} onChange={handleEmotionalBadgeChange} className="bg-gray-800 text-white" />
          </div>
          <div>
            <Label className="text-gray-400">צבע רקע:</Label>
            <SketchPicker color={emotionalBackgroundColor} onChange={handleEmotionalBackgroundColorChange} />
          </div>
        </div>
      </div>

      {/* Add more sections here as needed */}
    </div>
  );
};

export default ContentElementsEditor;
