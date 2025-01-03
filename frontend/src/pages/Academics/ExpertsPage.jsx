import styles from "../../app.module.css";

const ExpertsPage = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className="absolute bottom-10 left-10 md:left-10 text-5xl font-bold text-center text-white">Experts and Mentors</h2>
      </div>
      <p className="p-[30px] leading-10">
        Faculty at NSVE act as facilitators, directing students into academic
        programs that are relevant to the business. Our emphasis on practical
        skills gives students a competitive advantage in their chosen areas. Our
        skilled faculty bridges the educational and real-world gap through
        interactive workshops and industrial collaborations. We promote hands-on
        experiences and industry relationships to provide students with the
        skills that employers desire.
      </p>
      <center>
        <br />
        <iframe
          id={styles.vdo}
          width="1160"
          height="515"
          src="https://www.youtube.com/embed/PmRZjkkwMUQ?si=LcyTBwRZ5cJ82cdS"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </center>
      <br />
      <br />
      <center></center>
      <br />
      <br />
    </>
  );
};

export default ExpertsPage;
