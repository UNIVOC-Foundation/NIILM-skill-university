import styles from "../../app.module.css";

function NssPage() {
  return (
    <>
      <div
        style={{
          height: "400px",
          background: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url("../public/images/experts/img9.png")`,
          backgroundSize: "cover",
          position: "relative",
          backgroundPosition: "center",
        }}
      >
        <h2 className="absolute bottom-10 left-0 md:left-10 text-5xl font-bold text-center text-white">
          National Service Scheme
        </h2>
      </div>
      <h1 className="text-center pt-12" id={styles.text3}>
        National Service Scheme
      </h1>
      <div className="flex flex-col p-[20px] md:flex-row">
        <div className="p-[30px] leading-10">
          Students presenting at the best Skill development university Northeast
          India National Service Scheme (NSS) NSS, or the National Service
          Scheme is a Central Sector Scheme, under the Ministry of Youth Affairs
          & Sports, Government of India. NSS allows students to contribute to
          societal affairs through various activities in the fields of
          environmental conservation, health awareness campaigns, educational
          outreach and more. These initiatives help students to become
          responsible citizens of the country. <br /> They develop a sense of
          civic duty, empathy, enthusiasm to work in a team and leadership
          skills. Through the NSS initiatives as the integral part of the
          curriculum, we aim to nurture individuals who are able to address the
          complex societal challenges and are driven to make tangible
          contributions to their communities. Through these initiatives,
          students create an impact that extends far beyond the confines of the
          classroom.
        </div>
        <div className={styles.imgCont}>
          <img src="https://www.niilmuniversity.ac.in/web/assets/img/Achieved-3.png" />
        </div>
      </div>
      <h1 id={styles.text3} className="text-center py-6">
        Gallery
      </h1>
      <div className={styles.gallery}>
        <div className={`${styles.galleryItem} ${styles.large}`}>
          <img
            id={styles.bigImg}
            className="object-cover"
            alt="Group of people playing tug of war"
            height="200"
            src="/images/experts/_DSC0814.JPG"
            width="600"
          />
        </div>
        <div className={`${styles.galleryItem} ${styles.medium}`}>
          <img
            alt="Group of people playing a team sport"
            height="400"
            src="/images/experts/img10.png"
            width="600"
          />
        </div>
        <div className={`${styles.galleryItem} ${styles.small}`}>
          <img
            alt="Two people playing soccer with an audience in the background"
            height="400"
            src="/images/experts/img11.png"
            width="600"
          />
        </div>
        <div className={`${styles.galleryItem} ${styles.medium}`}>
          <img
            alt="Group of people playing volleyball"
            height="400"
            src="/images/experts/_DSC0836.JPG"
            width="600"
          />
        </div>
        <div className={`${styles.galleryItem} ${styles.small}`}>
          <img
            alt="Group of people smiling and posing for a photo"
            height="400"
            src="/images/experts/IMG12.png"
            width="600"
          />
        </div>
      </div>
    </>
  );
}

export default NssPage;
