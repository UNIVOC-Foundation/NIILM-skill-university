import { useState, useEffect } from "react";
import CurrentInfoSection from "../../components/schoolspage/current-info/CurrentInfoSection";

const SkillingPage = () => {
  const partners = [
    {
      name: "LCBS",
      logos: [
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/lcbs-Black.png",
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/ZICA.png",
      ],
    },
    {
      name: "IGJ",
      logos: [
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/logo-igj-1196116_2.png",
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/raddison-blue.png",
      ],
    },
    {
      name: "OM Logistics Ltd",
      logos: [
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/DSC-Logo.png",
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/OM.png",
      ],
    },
    {
      name: "Westin Hotels & Resorts",
      logos: [
        "https://www.msu.edu.in/frontend_assets/images/indu…y-partners/Holiday_Inn_Express_Blue_Logo.svg_.png",
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/B-4-M-LOGO.png",
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/Westin.jpg",
      ],
    },
    {
      name: "Holiday Inn Express",
      logos: [
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/Crowne_Plaza_logo_logotype.png",
      ],
    },
    {
      name: "NIFD Global",
      logos: [
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/450-x-200-logo.png",
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/skilling-9.png",
      ],
    },
    {
      name: "Holiday Inn",
      logos: [
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/logo-13.jpg",
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/HOLIDAY_INN_EXPRESS.png",
      ],
    },
    {
      name: "Positive Plastics",
      logos: [
        "	https://www.msu.edu.in/frontend_assets/images/industry-partners/holiday-inn.jpg",
        "	https://www.msu.edu.in/frontend_assets/images/industry-partners/d29-min.jpg",
      ],
    },
    {
      name: "IHG Hotels & Resorts",
      logos: [
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/d34.jpg",
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/d16.jpg",
      ],
    },
    {
      name: "Under Water Solutions",
      logos: [
        "	https://www.msu.edu.in/frontend_assets/images/industry-partners/d33-min.jpg",
        "https://www.msu.edu.in/frontend_assets/images/industry-partners/d32-min.jpg",
      ],
    },
  ];

  const [currentLogos, setCurrentLogos] = useState(
    partners.map((partner) => (partner.logos.length > 1 ? 0 : -1)) // Only cycle for partners with multiple logos
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLogos((prevLogos) =>
        prevLogos.map((currentIndex, idx) => {
          const partner = partners[idx];
          if (partner.logos.length > 1) {
            const newIndex = (currentIndex + 1) % partner.logos.length;
            return newIndex;
          }
          return currentIndex;
        })
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="relative w-full">
        <div className="relative h-80 overflow-hidden md:h-[28rem]">
          <div
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out`}
          >
            {/* Image */}
            <img
              src="https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/banner-msu/skilling-msu.webp"
              alt="Student working with technical equipment"
              className="absolute w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            {/* Text */}
            <h1 className="w-full md:w-1/2 absolute bottom-4 left-4 md:bottom-16 md:left-24 uppercase text-3xl md:text-6xl text-white font-bold">
              Skilling
            </h1>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto mt-10 mb-[16rem]">
        <p className="text-gray-800 text-lg leading-relaxed">
          NIILM Skills University has also fostered collaborations with various
          sector experts, ensuring that students receive the best updated
          expertise and skill set required for the industry. Through strategic
          partnerships with renowned institutions, NIILM offers specialized
          programs designed to meet the evolving demands of different sectors.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed">
          By teaming up with sector experts, NIILM Skills University provides
          students with access to industry-relevant curriculum, practical
          training, and mentorship opportunities. These partnerships enrich the
          learning experience, equipping students with the knowledge and skills
          needed to excel in their chosen fields and make meaningful
          contributions to the workforce.
        </p>
      </div>

      <section className="py-16 -mt-52 px-4 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Skilling Partners
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
              >
                <img
                  src={partner.logos[currentLogos[index]]}
                  alt={`${partner.name} logo`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurrentInfoSection />
    </div>
  );
};
export default SkillingPage;
