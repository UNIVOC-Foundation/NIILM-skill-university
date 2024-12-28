
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { recognitionData } from "../data/recognitionpage/recognitionData";
const RecognitionPage = () => {
    const handleclick = (link) => {
      window.open(link, "_blank");
    };
  
    return (
      <>
        <Navbar/>
        <br />
        <div className="">
          
          <img
            src="/images/bg-new.png"
            alt="Recognition"
            className="cont-recog w-full object-cover"
          />
          {/* for Gradient overlay */}
        
          {/*for Text overlay */}
          <div className="absolute bottom-0 w-full text-white p-4">
            <h2 className="text-5xl pb-14  pl-4 font-extrabold mb-5">Recognitions</h2>
          </div>
        </div>
        <div className=" whyNiilm flex flex-wrap items-center justify-center gap-6 p-4 mb-20  ">
          {recognitionData.map((item, index) => {
            const { text, link, image } = item;
            return (
              <div
                key={index}
                className=" bg-white p-4 h-[50vh] w-[60vh] border-gray-400 rounded-md mb-20"
              >
                <div className="box-1 pt-5 text-center pb-12 relative ">
                  {/* Image with gradient overlay */}
                  <div className="relative w-full h-full">
                    <img
                      src={image}
                      alt={text}
                      className="object-cover border px-4 mb-12 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b mix-blend-multiply from-gray-200 via-transparent to-gray-200"></div>
                  </div>
                  {/* Text positioned at the bottom */}
                  <p
                    className=" cursor-pointer mt-6 text-center font-bold px-4 mb-12 "
                    onClick={() => handleclick(link)}
                  >
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <Footer/>
      </>
    );
  };
  
  export default RecognitionPage;