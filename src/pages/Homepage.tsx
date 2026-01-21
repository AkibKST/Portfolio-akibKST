import { HeroSection } from "@/components/modules/homepage/HeroSection";
import { AboutPage } from "./About";
import { FaqSection } from "@/components/modules/homepage/FaqSection";
import { ContactSection } from "@/components/modules/homepage/ContactSection";
import { TestimonialSection } from "@/components/modules/homepage/TestimonialsSection";
import { ServiceSection } from "@/components/modules/homepage/ServiceSection";
import { Helmet } from "react-helmet-async";

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Home - Akib KST Portfolio</title>
        <meta
          name="description"
          content="Welcome to my professional portfolio. Explore my projects, services, and get in touch."
        />
        <meta name="og:title" content="Home - Akib KST Portfolio" />
        <meta
          name="og:description"
          content="Welcome to my professional portfolio. Explore my projects, services, and get in touch."
        />
      </Helmet>
      <div>
        <HeroSection />
        <ServiceSection />
        <FaqSection />
        <AboutPage />
        <TestimonialSection />
        <ContactSection />
      </div>
    </>
  );
}
