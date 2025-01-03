import styles from "../../app.module.css";

function NewsLetterPage() {
  return (
    <div>
      <div className={styles.containerNewsLetter}>
        <h2 className="absolute bottom-10 left-10 md:left-10 text-5xl font-bold text-center text-white">
          News Letter
        </h2>
      </div>
      <div className={`${styles.card} m-20`}>
        <img
          id={styles.cardImg}
          alt="Group of people standing together, one holding a document"
          height="200"
          src="../public/images/experts/img29.jpg"
          width="300"
        />
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>Newsletter December24</div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetterPage;
