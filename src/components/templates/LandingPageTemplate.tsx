
import { TemplateData } from "@/types/template";
import { HeroTemplateSection } from "./sections/HeroTemplateSection";
import { EmotionalTemplateSection } from "./sections/EmotionalTemplateSection";
import { TestimonialsTemplateSection } from "./sections/TestimonialsTemplateSection";
import { AboutTemplateSection } from "./sections/AboutTemplateSection";
import { GalleryTemplateSection } from "./sections/GalleryTemplateSection";
import { ProcessTemplateSection } from "./sections/ProcessTemplateSection";
import { WhyUsTemplateSection } from "./sections/WhyUsTemplateSection";
import { ContactTemplateSection } from "./sections/ContactTemplateSection";
import { TemplateStyles } from "./TemplateStyles";

interface LandingPageTemplateProps {
  template: TemplateData;
}

export const LandingPageTemplate = ({ template }: LandingPageTemplateProps) => {
  const { styles } = template;

  return (
    <>
      <TemplateStyles />
      <div className={`min-h-screen template-text ${styles.backgroundColor}`} style={{ color: styles.textColor }}>
        {/* Hero Section */}
        <HeroTemplateSection
          {...template.hero}
          className={`${styles.heroBackground} template-text-${styles.backgroundColor.includes('black') || styles.backgroundColor.includes('gray-9') ? 'dark' : 'light'}`}
          designStyle={template.category}
        />

        {/* Emotional Section */}
        <EmotionalTemplateSection
          {...template.emotional}
          className={`${styles.emotionalBackground} template-text-${styles.backgroundColor.includes('black') || styles.backgroundColor.includes('gray-9') ? 'dark' : 'light'}`}
        />

        {/* Testimonials Section */}
        <TestimonialsTemplateSection
          {...template.testimonials}
          className={`${styles.testimonialsBackground} template-text-${styles.backgroundColor.includes('black') || styles.backgroundColor.includes('gray-9') ? 'dark' : 'light'}`}
        />

        {/* About Section */}
        <AboutTemplateSection
          {...template.about}
          className={`${styles.aboutBackground} template-text-${styles.backgroundColor.includes('black') || styles.backgroundColor.includes('gray-9') ? 'dark' : 'light'}`}
        />

        {/* Gallery Section */}
        <GalleryTemplateSection
          {...template.gallery}
          className={`${styles.galleryBackground} template-text-${styles.backgroundColor.includes('black') || styles.backgroundColor.includes('gray-9') ? 'dark' : 'light'}`}
        />

        {/* Process Section (Optional) */}
        {template.process && (
          <ProcessTemplateSection
            {...template.process}
            className={`${styles.processBackground} template-text-${styles.backgroundColor.includes('black') || styles.backgroundColor.includes('gray-9') ? 'dark' : 'light'}`}
          />
        )}

        {/* Why Us Section */}
        <WhyUsTemplateSection
          {...template.whyUs}
          className={`${styles.whyUsBackground} template-text-${styles.backgroundColor.includes('black') || styles.backgroundColor.includes('gray-9') ? 'dark' : 'light'}`}
        />

        {/* Contact Section */}
        <ContactTemplateSection
          {...template.contact}
          className={`${styles.contactBackground} template-text-${styles.backgroundColor.includes('black') || styles.backgroundColor.includes('gray-9') ? 'dark' : 'light'}`}
        />
      </div>
    </>
  );
};
