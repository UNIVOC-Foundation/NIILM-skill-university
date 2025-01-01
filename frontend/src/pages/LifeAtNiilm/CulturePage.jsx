import styles from "../../app.module.css";

function CulturePage() {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url("https://wimbledonvillage.com/wp-content/uploads/2023/09/Art-Culture-banner-image-person-in-gallery-viewing-paintings.jpg")`,
          backgroundSize: "cover",
          height: "400px",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <h2 className="absolute bottom-10 left-5 md:left-10 text-5xl font-bold text-center text-white">
          Culture
        </h2>
      </div>

      <section id={styles.imgGallery2}>
        <div className="flex flex-col p-[20px] md:flex-row">
          <div className="p-[30px] leading-10">
            At NIILM School of Vocational Education, our vibrant culture is the
            heartbeat of campus life, pulsating with energy and diversity. As a
            melting pot of cultures, traditions, and ideologies, our university
            is a microcosm of the nation, where students from all corners come
            together to learn, grow, and celebrate the rich tapestry of human
            experience. From the colorful festivities of cultural showcases to
            the insightful discussions in our multicultural forums, there is an
            undeniable sense of unity and camaraderie that permeates every
            aspect of campus life. <br /> Our commitment to fostering an
            inclusive environment extends beyond mere tolerance – it is about
            embracing and honoring the unique backgrounds and perspectives that
            each individual brings to the table. Through immersive cultural
            experiences, such as art exhibitions, music concerts, dance
            performances, and culinary events, students have the opportunity to
            explore, appreciate, and learn from the diverse cultures that
            coexist within our community. <br /> It is in these moments of
            cultural exchange and understanding that lifelong friendships are
            forged, and global citizens are born. Here, culture is not just
            something we celebrate – it is the essence of who we are, guiding us
            as we strive to create a more interconnected and compassionate
            world.
          </div>
          <div className={styles.imgCont}>
            <img src="/images/experts/img13.png" alt="" />
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
              id={styles.bigImg}
              alt="Group of people playing tug of war"
              height="200"
              src="/images/experts/IMG_9099.JPG"
              width="500"
            />
          </div>
          <div className={`${styles.galleryItem} ${styles.medium}`}>
            <img
              alt="Group of people playing a team sport"
              height="400"
              src="/images/experts/img14.png"
              width="600"
            />
          </div>
          <div className={`${styles.galleryItem} ${styles.small}`}>
            <img
              alt="Two people playing soccer with an audience in the background"
              height="400"
              src="/images/experts/img15.png"
              width="600"
            />
          </div>
          <div className={`${styles.galleryItem} ${styles.medium}`}>
            <img
              alt="Group of people playing volleyball"
              height="400"
              src="/images/experts/img16.png"
              width="600"
            />
          </div>
          <div className={`${styles.galleryItem} ${styles.small}`}>
            <img
              alt="Group of people smiling and posing for a photo"
              height="400"
              src="/images/experts/img17.png"
              width="600"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default CulturePage;
