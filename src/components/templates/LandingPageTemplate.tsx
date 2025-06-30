
import { TemplateData } from "@/types/template";
import { HeroTemplateSection } from "./sections/HeroTemplateSection";
import { EmotionalTemplateSection } from "./sections/EmotionalTemplateSection";
import { TestimonialsTemplateSection } from "./sections/TestimonialsTemplateSection";
import { AboutTemplateSection } from "./sections/AboutTemplateSection";
import { GalleryTemplateSection } from "./sections/GalleryTemplateSection";
import { ProcessTemplateSection } from "./sections/ProcessTemplateSection";
import { WhyUsTemplateSection } from "./sections/WhyUsTemplateSection";
import { ContactTemplateSection } from "./sections/ContactTemplateSection";

interface LandingPageTemplateProps {
  template: TemplateData;
}

export const LandingPageTemplate = ({ template }: LandingPageTemplateProps) => {
  const { styles } = template;

  return (
    <div className="min-h-screen" style={{ color: styles.textColor }}>
      {/* Hero Section */}
      <HeroTemplateSection
        {...template.hero}
        className={styles.heroBackground}
        designStyle={template.category}
      />

      {/* Emotional Section */}
      <EmotionalTemplateSection
        {...template.emotional}
        className={styles.emotionalBackground}
      />

      {/* Testimonials Section */}
      <TestimonialsTemplateSection
        {...template.testimonials}
        className={styles.testimonialsBackground}
      />

      {/* About Section */}
      <AboutTemplateSection
        {...template.about}
        className={styles.aboutBackground}
      />

      {/* Gallery Section */}
      <GalleryTemplateSection
        {...template.gallery}
        className={styles.galleryBackground}
      />

      {/* Process Section (Optional) */}
      {template.process && (
        <ProcessTemplateSection
          {...template.process}
          className={styles.processBackground}
        />
      )}

      {/* Why Us Section */}
      <WhyUsTemplateSection
        {...template.whyUs}
        className={styles.whyUsBackground}
      />

      {/* Contact Section */}
      <ContactTemplateSection
        {...template.contact}
        className={styles.contactBackground}
      />
    </div>
  );
};
