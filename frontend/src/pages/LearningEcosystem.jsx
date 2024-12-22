import React from 'react';

const LearningEcosystem = () => {
  return (
    <section>
      {/* Header Section */}
      <div className="relative w-full">
        <div className="relative h-80 overflow-hidden md:h-[28rem]">
          <div className="absolute w-full h-full transition-opacity duration-700 ease-in-out">
            {/* Background Image */}
            <img
              src="/images/bg-new.png"
              alt="Background"
              className="absolute w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            {/* Text Overlay */}
            <h1 className="w-full md:w-1/2 absolute bottom-4 left-4 md:bottom-16 md:left-24 uppercase text-3xl md:text-6xl text-white font-bold">
              Learning EcoSystem
            </h1>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-20 md:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-4/5 mx-auto">
          {/* Text Content */}
          <div className="text-lg tracking-wide mx-12">
            <p className="leading-10 text-lg md:text-xl">
              NIILM Skills University revolutionizes traditional pedagogy by
              integrating real-world industry experience directly into the
              curriculum. Through the pioneering Industry as Campus approach,
              students embark on a year-long immersive journey within
              workplaces, earning course credits while gaining practical
              insights and skills. This Earn while You Learn model enables
              students to actively participate in day-to-day operations, honing
              their professional competencies under supervisor guidance.
              Engaging in real-time industry projects and assessments aligns
              their learning with industry standards, fostering outcome-based
              education. This innovative framework fosters confident,
              industry-ready professionals, breaking the mold of conventional
              higher education and propelling students toward successful
              careers.
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full h-full mt-4 md:mt-0">
            <img
              className="object-cover md:rounded-tl-[12rem] w-full h-full"
              src="/images/campus/campus-1.jpg"
              alt="Campus"
            />
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div
        className="w-full h-auto text-black pt-2 pb-8"
        style={{
          backgroundImage: `url("/images/event-banner.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Hover Image Section */}
        <div className="relative group">
          <img
            src="https://www.msu.edu.in/frontend_assets/images/B.png"
            alt="Hover Section"
            className="w-full"
          />
          
        </div>
      </div>
    </section>
  );
};

export default LearningEcosystem;


