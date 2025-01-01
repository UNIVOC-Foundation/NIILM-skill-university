import styles from "../../app.module.css";

function SedgPage() {
  return (
    <>
      <div
        className={styles.containerSEDG}
        style={{
          background: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url("../public/images/experts/img3.png")`,
          backgroundSize: "cover",
          height: "400px",
          position: "relative",
        }}
      >
        <h2 className="absolute bottom-10 left-0 md:left-10 text-4xl md:text-5xl font-bold text-center text-white">
          Socio-Economically
          <br />
          Disadvantaged groups
        </h2>
      </div>
    </>
  );
}

export default SedgPage;
