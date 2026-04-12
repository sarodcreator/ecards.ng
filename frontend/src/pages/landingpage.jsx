// import { Navbar } from '../components/shared/Navbar'
// import { Footer } from '../components/shared/Footer'
import { HeroSection } from '@/components/HeroSection';
import { TestimonialSection } from "@/components/TestimonialSection";
import { ShareSection } from "@/components/ShareSectionn";
import { ShareFeature } from "@/componentsShareFeature";
import { ArticleSection } from "@/components/ArticleSection";

const landingpage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <HeroSection />
        <TestimonialSection />
        <ShareSection />
        <ShareFeature />
        <ArticleSection />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default landingpage;