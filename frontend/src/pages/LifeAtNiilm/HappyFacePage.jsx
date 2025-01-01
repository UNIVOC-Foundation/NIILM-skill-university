import styles from "../../app.module.css";

function HappyFacePage() {
  return (
    <>
      <div className={styles.containerHappy}>
        <h2 className="absolute bottom-10 left-5 md:left-10 text-5xl font-bold text-center text-white">
          Happy Faces
        </h2>
      </div>

      <section id={styles.imgGallery2}>
        <div className='flex flex-col p-[20px] md:flex-row'>
          <div className="p-[30px] leading-10">
            Welcome to NIILM School of Vocational Education where the vibrant
            spirit of campus life comes alive! Our students thrive in a
            nurturing environment, brimming with opportunities for personal
            growth and fulfillment. <br /> From engaging in extracurricular
            activities to supportive peer networks, every aspect of campus
            living is tailored to ensure our students lead joyful, balanced
            lives. With state-of-the-art facilities, inspiring faculty
            mentorship, and a dynamic student community, happiness permeates
            every corner of our campus. Explore this section to witness
            firsthand the smiles, camaraderie, and zest for life that define the
            NSVE experience. <br />
            Every student is different in their interests, passions, and
            aspirations. Therefore, we believe in empowering you to design your
            own educational journey tailored to your individual needs and goals.
            From a diverse array of options, students have the freedom to
            customize a curriculum that aligns with your career ambitions and
            personal interests, fostering purposeful progression.
          </div>
          <div className={styles.imgCont}>
            <img src="/images/experts/img5.jpg" alt="" />
          </div>
        </div>
      </section>

      <section id={styles.imgGallery}>
        <center>
          <h1 id={styles.text3}>Gallery</h1>
        </center>
        <br />
        <div className={styles.gallery}>
          <div className={`${styles.galleryItem} ${styles.large}`}>
            <img
              id={styles.image1}
              className="object-cover"
              alt="Group of people playing tug of war"
              height="200"
              src="/images/_DSC0077.JPG"
              width="800"
            />
          </div>
          <div className={`${styles.galleryItem} ${styles.medium}`}>
            <img
              alt="Group of people playing a team sport"
              height="300"
              src="/images/IMG_9938.png"
              width="600"
            />
          </div>
          <div className={`${styles.galleryItem} ${styles.small}`}>
            <img
              alt="Two people playing soccer with an audience in the background"
              height="400"
              src="/images/experts/IMG6.png"
              width="600"
            />
          </div>
          <div className={`${styles.galleryItem} ${styles.medium}`}>
            <img
              alt="Group of people playing volleyball"
              height="400"
              src="/images/experts/image2.png"
              width="600"
            />
          </div>
          <div className={`${styles.galleryItem} ${styles.small}`}>
            <img
              id="image3"
              alt="Group of people smiling and posing for a photo"
              height="751px"
              src="/images/experts/image.png"
              width="788px"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HappyFacePage;
