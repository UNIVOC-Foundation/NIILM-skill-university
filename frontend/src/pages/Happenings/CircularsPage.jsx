import styles from "../../app.module.css";

function CircularsPage() {
  return (
    <>
      <div className={styles.containerCirculars}>
        <h2 className="absolute bottom-10 left-10 md:left-10 text-5xl font-bold text-center text-white">
          Circulars and Notices
        </h2>
      </div>
      <center>
        <h2 className="p-10 text-2xl font-serif">
          <em>Nothing to show yet </em>
        </h2>
      </center>
    </>
  );
}

export default CircularsPage;
