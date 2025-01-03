import styles from "../../app.module.css";

function AbcPage() {
  return (
    <>
      <div className={styles.containerAbc}>
        <h2 className="absolute bottom-10 left-10 md:left-10 text-5xl font-bold text-center text-white">Academic Bank of Credits</h2>
        <br />
      </div>
      <p className="p-[30px] leading-10">
        The Academic Bank of Credits (ABC) revolutionizes traditional credit
        management by offering a national-level, student-centric, and digitally
        flexible platform. This innovative system empowers students to securely
        store and access their academic credits earned from accredited Higher
        Educational Institutions. Serving as a reliable reference point, ABC
        ensures transparency and convenience for students, faculty, and
        institutions alike. By embracing the ABC framework, students are
        encouraged to adopt a multi-disciplinary educational approach, fostering
        their development into skillful professionals and promoting holistic
        growth.
      </p>
      <center>
        <h1 className="text-3xl font-sans font-bold">
          Steps to create Login in ABC
        </h1>

        <p className="p-[30px] leading-10">
          Step 1: Visit https://www.digilocker.gov.in/ and click on Sign Up
          button for creating a new account. If you have a DigiLocker account,
          click on Sign In as mentioned in Steps 3 and 4.{" "}
        </p>
        <br />
      </center>
      <center>
        <img
          id={styles.imgAbc}
          src="https://www.msu.edu.in/frontend_assets/images/ABC-steps/sttep-1.png"
          alt=""
        />
        <p className="p-[30px] leading-10">
          Step 2: Fill your personal details to create a new account.
        </p>

        <img
          id={styles.imgAbc}
          src="https://www.msu.edu.in/frontend_assets/images/ABC-steps/step-2.jpg"
          alt=""
        />
        <br />
        <br />
        <p>
          Step 3: To Sign in, if you have an account on DigiLocker, please Click
          on Sign In on https://www.digilocker.gov.in/.
        </p>
        <br />
        <br />
      </center>
    </>
  );
}

export default AbcPage;
