import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { leadershipData } from "../data/leadershippage/leadershipData";

const LeadershipPage = () => {
  return (
    <>
     
      {/* leadership page starts here */}
      <div className="relative w-screen md:h-[50vh] lg:h-[75vh]">
       
        <img
          src="https://www.msu.edu.in/frontend_assets/images/leadership-cover.png"
          alt="#leadership"
          className="bg-cover w-full h-full"
        />
        <div className="absolute inset-0 md:h-[50vh] lg:h-[75vh] bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute inset-x-0 bottom-4  p-8">
          <h2 className="text-5xl font-extrabold text-white">Leadership</h2>
        </div>
      </div>

      {/* Leadership content start here  */}
      <div className="mt-12 flex justify-center items-center md:px-14  lg:px-20 gap-4">
        <p className=" p-20 text-[17px] font-medium  leading-10 ">
          The founding of NIILM School of Vocational Education was the result of
          innovative leadership and teamwork. The goal of this universitys
          educational philosophy is to develop and support action leaders. NSVE
          priorities include conducting skill gap analyses, designing and
          integrating qualification packs, operationalizing apprenticeship
          programs, improving its understanding of the learning scenario to
          enable better alignment between industry needs and youth aspirations,
          and tackling a number of educational challenges. Success has been
          paved by the University governance, which has consistently
          strengthened academic and industry support. With the support of a
          strong leadership group, we have adopted a progressive philosophy that
          aims to write a new chapter in the history of education. The
          industrial and academic support for success was progressively expanded
          by this university governance. The university capable leadership has a
          forward-thinking ideology to create a pivotal history in education.
        </p>
      </div>
     
      
    </>
  );
};

export default LeadershipPage;