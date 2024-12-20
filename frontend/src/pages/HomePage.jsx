import AcademicSection from "../components/homepage/academic/AcademicSection";
import AdmissionSection from "../components/homepage/admission/AdmissionSection";
import CampusSection from "../components/homepage/campus/CampusSection";
import CollabPartnerSection from "../components/homepage/collab-partner/CollabPartnerSection";
import WhyChooseSection from "../components/homepage/why-choose/WhyChooseSection";
import SocialSection from "../components/homepage/social/SocialSection";

import HomeGallerySection from "../components/homepage/home-gallery/HomeGallerySection";
import Layoutgrid from "../components/homepage/layout-grid/LayoutGridSection";
import HeroGallerySection from "../components/homepage/hero-gallery/HeroGallerySection";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="w-full h-auto">
      <HeroGallerySection />

      <div className="flex flex-col md:flex-row items-center justify-between my-12">
        <div className="flex-1">
          <img
            src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/we-are-new-age-_-industry-led_mewxev.webp"
            alt="Presentation"
          />
        </div>
        <div className="flex-1 space-y-4 md:mx-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            We are New Age & Industry-Led!
          </h1>
          <p className="text-gray-600 text-lg mt-4 leading-10">
            Medhavi Skills University is India first Skills University to offer
            Industry Immersive degree programmes within the holistic development
            framework of NEP2020. Our outcome focused skill-integrated model of
            higher education backed by leading industry and sectoral partners in
            India and the world, assures employability with a global outlook and
            holistic development. Our flexible academic framework, maverick
            mentors and progressive pedagogies intrinsically focus on
            application and professional practice alongside the conceptual
            understanding. Our meticulously crafted courses are tailored to
            empower students with the requisite skills and knowledge essential
            for thriving in an ever-evolving global workplace.
          </p>
          <Link to="" className="flex items-center my-4">
            <span className="text-2xl font-bold">WHO WE ARE</span>
            <button className="mx-4 font-bold w-8 h-8 rounded-full text-white bg-redTheme">
              →
            </button>
          </Link>
        </div>
      </div>

      <HomeGallerySection />

      <div className="flex flex-col md:flex-row items-center justify-between my-12">
        <div className="flex-1 space-y-4 md:mx-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            Learning with Industry Leading in Skills
          </h1>
          <p className="text-gray-600 text-lg mt-4 leading-10">
            21st Century Industry and Workspace is changing at a faster and
            unexpected way. Disruptive Technologies have dramatically
            transformed the way the work used to work. Specially, the last
            decade has been highly impactful in accelerating this transformation
            due to the evolution of technologies like High-Speed Internet,
            Mobile Technology, IoT, Cloud Technology, Big Data, Artificial
            Intelligence etc. The inquisitiveness of human mind and the path
            breaking innovations have started to redefine the Workspace and the
            Social behavior e.g.; Chatbots handling the customer service
            seamlessly, Robots synchronously participating in the large-scale
            Manufacturing, Ecommerce dominating the retail space, Artificial
            Intelligence redefining the role of human functionality etc.
          </p>
          <Link to="" className="flex items-center my-4">
            <span className="text-2xl font-bold text-redTheme">READ MORE</span>
          </Link>
        </div>
        <div className="flex-1">
          <img
            src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/we-are-new-age-_-industry-led_mewxev.webp"
            alt="Presentation"
          />
        </div>
      </div>

      <Layoutgrid />

      <AcademicSection />

      <WhyChooseSection />

      <CampusSection />

      <CollabPartnerSection />

      <SocialSection />

      <AdmissionSection />
    </main>
  );
};

export default HomePage;
