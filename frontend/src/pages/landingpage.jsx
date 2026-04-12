// import { Navbar } from '../components/shared/Navbar'
// import { Footer } from '../components/shared/Footer'
import { HeroSection } from '@/components/HeroSection';
import { TestimonialsSection } from "@/components/TestimonialSection";
import { ShareSection } from "@/components/ShareSection";
import { ShareFeature } from "@/components/ShareFeature";
import { ArticleSection } from "@/components/ArticleSection";
import FAQ  from "@/components/FAQ"

const landingpage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <HeroSection />
        <TestimonialsSection />
        <ShareSection />
        <ShareFeature />
        <ArticleSection />
        <FAQ />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default landingpage;