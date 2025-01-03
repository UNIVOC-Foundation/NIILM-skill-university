import styles from "../../app.module.css";

function NewsPage() {
  return (
    <>
      <div className={styles.containerNews}>
        <h2 className="absolute bottom-10 left-10 md:left-10 text-5xl font-bold text-center text-white">
          News
        </h2>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            id={styles.cardimg}
            alt="Group of people standing together, one holding a document"
            height="200"
            src="../public/images/experts/img24.jpeg"
            width="300"
          />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              NIILM University organizes Blood donation camp
            </div>
            <div className={styles.cardDate}>
              <i className="fas fa-calendar-alt"></i>
              Sep 2, 2024
            </div>
            <div className={styles.cardDescription}>
              NIILM University successfully hosted a Blood Donation Camp to
              promote the noble cause of saving lives. The event witnessed
              enthusiastic participation from students, faculty, and staff...
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            id={styles.cardImg}
            alt="Group of people standing together, one holding a document"
            height="200"
            src="../public/images/experts/img25.jpg"
            width="300"
          />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Grand Convocation Ceremony at NIILM University
            </div>
            <div className={styles.cardDate}>
              <i className="fas fa-calendar-alt"></i>
              Sep 2, 2024
            </div>
            <div className={styles.cardDescription}>
              NIILM University recently celebrated its Convocation Ceremony, a
              momentous occasion marking the academic achievements of its
              graduating students...
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            id={styles.cardImg}
            alt="Group of people standing together, one holding a document"
            height="200"
            src="../public/images/experts/img26.jpg"
            width="300"
          />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Orientation Program at NIILM University
            </div>
            <div className={styles.cardDate}>
              <i className="fas fa-calendar-alt"></i>
              Sep 2, 2024
            </div>
            <div className={styles.cardDescription}>
              NIILM University recently organized a vibrant Orientation Program
              to welcome its new batch of students for the academic year...
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            id={styles.cardImg}
            alt="Group of people standing together, one holding a document"
            height="200"
            src="../public/images/experts/img27.jpg"
            width="300"
          />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              NIILM University Hosts Inspiring Marathon Event
            </div>
            <div className={styles.cardDate}>
              <i className="fas fa-calendar-alt"></i>
              Sep 2, 2024
            </div>
            <div className={styles.cardDescription}>
              NIILM University recently organized an exciting Marathon, bringing
              together students, faculty, staff, and community members to
              promote fitness, unity, and a spirit of determination...
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            id={styles.cardImg}
            alt="Group of people standing together, one holding a document"
            height="200"
            src="../public/images/experts/img28.jpg"
            width="300"
          />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              World Water Day Celebration at NIILM University
            </div>
            <div className={styles.cardDate}>
              <i className="fas fa-calendar-alt"></i>
              Sep 2, 2024
            </div>
            <div className={styles.cardDescription}>
              NIILM University proudly celebrated World Water Day, emphasizing
              the importance of water conservation and sustainable management of
              this precious resource...
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            id={styles.cardImg}
            alt="Group of people standing together, one holding a document"
            height="200"
            src="../public/images/experts/img30.jpg"
            width="300"
          />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              IEEE Conference at NIILM University
            </div>
            <div className={styles.cardDate}>
              <i className="fas fa-calendar-alt"></i>
              Sep 2, 2024
            </div>
            <div className={styles.cardDescription}>
              NIILM University recently hosted a prestigious IEEE Conference,
              bringing together researchers, academicians, industry experts, and
              students to exchange knowledge and explore advancements in
              science, technology, and innovation...
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            id={styles.cardImg}
            alt="Group of people standing together, one holding a document"
            height="200"
            src="../public/images/experts/img31.jpg"
            width="300"
          />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Colorful Holi Celebration at NIILM University
            </div>
            <div className={styles.cardDate}>
              <i className="fas fa-calendar-alt"></i>
              Sep 2, 2024
            </div>
            <div className={styles.cardDescription}>
              NIILM University recently came alive with vibrant colors and
              joyous festivities during its Holi Celebration, bringing together
              students, faculty, and staff for a day of fun, unity, and cultural
              pride...
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img
            id={styles.cardImg}
            alt="Group of people standing together, one holding a document"
            height="200"
            src="../public/images/experts/img29.jpg"
            width="300"
          />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Talent Hunt at NIILM University
            </div>
            <div className={styles.cardDate}>
              <i className="fas fa-calendar-alt"></i>
              Sep 2, 2024
            </div>
            <div className={styles.cardDescription}>
              NIILM University recently organized an exciting Talent Hunt event,
              providing students with a platform to showcase their unique
              abilities and creative skills...
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsPage;
