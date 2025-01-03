import styles from "../../app.module.css";

function RndPage() {
  return (
    <>
      <div className={styles.containerRnd}>
        <h2 className="absolute bottom-10 left-10 md:left-10 text-5xl font-bold text-center text-white">Research and Development</h2>
      </div>
      <center>
        <button className="mt-12 bg-[#165d23] text-white border border-white uppercase mx-auto text-lg sm:text-2xl font-bold py-4 px-8 sm:px-12 rounded-tl-full rounded-br-full transition-all duration-500 hover:bg-red-800 hover:rounded-bl-full hover:rounded-tr-full hover:rounded-br-none hover:rounded-tl-none mb-10">
          Download
        </button>
      </center>
    </>
  );
}

export default RndPage;
