import styles from "../../app.module.css";

function NepPage() {
  return (
    <>
      <div className={styles.containerNEP2}>
        <h2 id={styles.text}>NEP Compliance</h2>
      </div>
      <div className={styles.flex2}>
        <p id={styles.text2}>
          The National Education Policy 2020 (NEP 2020) is a game changer for
          India education system. It stresses a transition away from rote
          learning and toward a more holistic and skill-based approach, giving
          graduates the capabilities they need to prosper in the dynamic labor
          market of the twenty-first century. <br /> <br /> NEP 2020 key
          elements for ensuring holistic individual development include learning
          outcome-based education, a focus on critical thinking and problem
          solving, multidisciplinary learning, multiple entry-exit points,
          value-based development, and more. Our industry-integrated
          undergraduate and postgraduate programs in sectors like as management,
          healthcare, and information technology are painstakingly crafted to
          meet NEP criteria. NSVE is in the forefront of integrating past
          learning to professional growth through formal education, in
          accordance with the standards of the National Credit Framework (NCrF)
          and the National Higher Education Qualification Framework.
        </p>
        <img
          id={styles.img3}
          height="350px"
          src="https://vtu.ac.in/wp-content/uploads/2022/12/NEP2020.png"
          alt=""
        />
      </div>

      <div className={styles.containerNep}>
        <div className={styles.cardNep}>
          <img
            alt="Icon representing vocational skills"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/o6IIgm00Je1NSK0FneYAFgXDkjTeYFSC1XG3zLsVOv9qLU0nA.jpg"
            width="50"
          />
          <div>
            <h3>Integration of Vocational Skills</h3>
            <p>
              Curriculum aligned to industry skills through on job learning at
              internship, apprenticeships.
            </p>
          </div>
        </div>
        <div className={styles.cardNep}>
          <img
            alt="Icon representing multidisciplinary learning"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/6H2CcfJzdnyNTqUco80cskiTfDeQqkoVsnJfRbQqGLPmXooPB.jpg"
            width="50"
          />
          <div>
            <h3>Multidisciplinary Learning</h3>
            <p>
              Skill Electives (Skill Drill) and Professional Minor Electives
              along with Major to explore and develop competencies in diverse
              domains.
            </p>
          </div>
        </div>
        <div className={styles.cardNep}>
          <img
            alt="Icon representing holistic development"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/OEfbzgGXqNyONy5feU1lMvOvPlfr8ELmca9RgTAPgDLeuQRfE.jpg"
            width="50"
          />
          <div>
            <h3>Holistic Development</h3>
            <p>
              Emphasis on Communication skills, Life skills, Value based
              courses, and Technology for the all-around growth.
            </p>
          </div>
        </div>
        <div className={styles.cardNep}>
          <img
            alt="Icon representing multiple entry/exit"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/lsOjqFjuar6QFho3FmfXlj146YdDBJsn7FZIU5SildL7CF9JA.jpg"
            width="50"
          />
          <div>
            <h3>Multiple Entry/Exit</h3>
            <p>
              Opportunities for early joiners at the workforce for an exit and
              re-entry at the relevant semester to continue to the next level.
            </p>
          </div>
        </div>
        <div className={styles.cardNep}>
          <img
            alt="Icon representing outcome-based education"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/OGvm40arZuLuE57io9Yh7c2GyocQFeTsP1cYwKBxi4fzFK6TA.jpg"
            width="50"
          />
          <div>
            <h3>Outcome-Based Education</h3>
            <p>
              With focus on outcomes at Programme, Course, and Topic level for a
              productive learning mapped assessment.
            </p>
          </div>
        </div>
        <div className={styles.cardNep}>
          <img
            alt="Icon representing continuous assessment"
            height="20"
            src="https://storage.googleapis.com/a1aa/image/4nhDsSYzMDZFHJiEJ1FijdVVpQuwJ5qG4Ol1X2McnDJeCF9JA.jpg"
            width="50"
          />
          <div>
            <h3>Continuous Assessment</h3>
            <p>
              Technology is extensively integrated into teaching and learning to
              overcome language barriers and enhance educational planning and
              management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NepPage;
