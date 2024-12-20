import FeatureSwiperComponent from "../components/swiper/wisepage/FeatureSwiperComponent";
import HeroSwiperComponent from "../components/swiper/wisepage/HeroSwiperComponent";
import { industryPartnersData } from "../data/homepage/collab-partnerData";
import ProgrammesSection from "../components/wisepage/programmes/ProgrammesSection";
import WiseAdvantagesSection from "../components/wisepage/wise-advantages/wiseAdvantagesSection";

const WisePage = () => {
  return (
    <section>
      {/* Header */}
      <div className="w-full">
        <HeroSwiperComponent />
      </div>

      {/* 2nd Section */}
      <div className="py-12">
        <div className="mx-auto w-4/5">
          <h1 className="text-4xl font-bold">What is WISE?</h1>
          <p className="text-xl leading-8 tracking-wide mt-4">
            Work Integrated Skill Based Higher Education (WISE) is an initiative
            of NIILM Skill University. It offers industry/work integrated
            application and practice-based programs to candidates that include
            on the job training or apprenticeship opportunities along with a
            stipend. For students unable to attain professional higher education
            due to financial constraint, WISE can be a powerful instrument.
            Under WISE, NIILM collaborates with industry partners to create a
            curriculum which is curated as per the needs of the industry.
          </p>
        </div>
      </div>

      <div className="bg-redTheme">
        <div className="mx-auto w-4/5">
          <FeatureSwiperComponent />
        </div>
      </div>

      {/* WISE Advantages Section */}
      <div className="py-16">
        <div className="mx-auto w-4/5 flex flex-col">
          <h1 className="text-4xl font-bold">WISE Vantage</h1>
          <WiseAdvantagesSection />
        </div>
      </div>

      {/* Industry Collaborations Section */}
      <div
        className="py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/bg-new.png")`,
        }}
      >
        <div className="w-4/5 mx-auto mb-12">
          <h1 className="text-white text-center text-4xl font-bold mb-8">
            Industry Collaborations
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-5">
            {industryPartnersData.map((item, index) => (
              <div
                key={index}
                className="bg-white flex justify-center p-2 m-4 border-2 border-gray-400 h-32 rounded-xl"
              >
                <img src={item.images} className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Testimonials Section */}
      <div
        className="py-16"
        style={{
          backgroundImage: `url("/images/event-banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-4/5 mx-auto">
          {/* Title */}
          <h1 className="text-4xl text-center font-bold">
            Industry Testimonials
          </h1>

          {/* Social Media Cards */}
          <div className="w-full my-8 flex flex-wrap justify-center gap-4">
            {/* Card 1 */}
            <div className="h-[450px] w-10/12 sm:w-[360px] bg-white rounded-lg border-2 border-gray-300">
              {/* Content inside the card */}
            </div>
            {/* Card 2 */}
            <div className="h-[450px] w-10/12 sm:w-[360px] bg-white rounded-lg border-2 border-gray-300">
              {/* Content inside the card */}
            </div>
          </div>
        </div>
      </div>

      {/* Programmes Section */}
      <div className="my-16">
        <div className="mx-auto w-4/5">
          <ProgrammesSection />
        </div>
      </div>

      {/* Students Speak Section */}
      <div className="py-16">
        <div className="mx-auto w-4/5">
          <h1 className="text-4xl uppercase text-center font-bold">
            Students Speak
          </h1>
          <div className="w-full mt-32 mb-8 flex flex-wrap justify-center gap-4">
            {/* Card 1 */}
            <div className="relative h-[450px] w-10/12 sm:w-[360px] bg-white rounded-lg border-2 border-gray-300 shadow-md">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Student"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="mt-16 text-center px-4">
                <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
                <p className="text-sm text-gray-600">
                  Bachelor of Business Administration
                </p>
                <div className="mt-6">
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    venenatis euismod malesuada.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-[450px] w-10/12 sm:w-[360px] bg-white rounded-lg border-2 border-gray-300 shadow-md">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Student"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="mt-16 text-center px-4">
                <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
                <p className="text-sm text-gray-600">
                  Bachelor of Business Administration
                </p>
                <div className="mt-6">
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    venenatis euismod malesuada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisePage;
