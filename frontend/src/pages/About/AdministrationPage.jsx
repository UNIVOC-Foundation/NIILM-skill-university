import RegistrarsOffice from "../../components/About/RegistrarsOffice";

const AdministrationPage = () => {
  return (
    <div>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.msu.edu.in/frontend_assets/images/banner/AWARDS/COLLARABRATION.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl lg:text-5xl text-white font-bold mb-2">
            Administration
          </h1>
        </div>
      </div>
      <RegistrarsOffice />
    </div>
  );
};

export default AdministrationPage;
