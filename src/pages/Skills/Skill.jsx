// import React from "react";
// import Navbar from "../../Components/Navbar/Navbar";
// import SkillCard from "../../Components/SkillCard/SkillCard";
// import styles from "./Skills.module.css";
// import { color, motion } from "framer-motion";
// import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
// import MainContainer from "../../Components/MainContainer/MainContainer";
// import Circle from "../../Components/Circle/Circle";

// function Skill() {
//   return (
//     <div>
//       <Navbar />
//       <Circle top={"18rem"} right={"-18rem"} />
//       <MainContainer>
//         <ComponentTitle title={"My Skills"} />

//         <motion.div
//           initial={{ opacity: 0, x: -10 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
//           className={styles.skill_container}
//         ><h1>Frontend</h1>
//           <SkillCard skill_name={"HTML"} level={5} key={"HTML"} />
//           <SkillCard skill_name={"CSS "} level={5} key={"CSS"} />
//           <SkillCard skill_name={"JavaScript"} level={5} key={"JavaScript"} />
//           <SkillCard skill_name={"React.js"} level={3} key={"React.js"} />
//           <SkillCard skill_name={"Redux (Classic & RTK)"} level={3} key={"Redux"} />
//           <SkillCard
//             skill_name={"Git and GitHub"}
//             level={3}
//             key={"Git and GitHub"}
//           />
//           <SkillCard
//             skill_name={"Tailwind CSS"}
//             level={4}
//             key={"Tailwind"}
//           />
//           {/* <SkillCard skill_name={} */}
//         </motion.div>
//       </MainContainer>
//     </div>
//   );
// }

// export default Skill;




// ================================================= chatgpt ===========================================

import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SkillCard from "../../Components/SkillCard/SkillCard";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Circle from "../../Components/Circle/Circle";

function Skill() {
  return (
    <div>
      <Navbar />
      <Circle top={"18rem"} right={"-18rem"} />
      <MainContainer>
        <ComponentTitle title={"My Skills"} />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
          className={styles.skill_container}
        >
          <div className={styles.columns}>

            {/* Frontend */}
            <div className={styles.column}>
              <h2>Frontend</h2>
              {/* <SkillCard skill_name={"HTML5"} level={5} /> */}
              <SkillCard skill_name={"HTML5"} />
              <SkillCard skill_name={"CSS3"} />
              <SkillCard skill_name={"JavaScript"} />
              <SkillCard skill_name={"Reactjs + Vite, ReduxJs"} />
              <SkillCard skill_name={"AngularJs"}  />
              <SkillCard skill_name={"Tailwind CSS, Bootstrap"} />
              <SkillCard skill_name={"BEM, SASS"} />
              <SkillCard skill_name={"Build Tolls (Vite, Webpack, Rollup, Parcel)"} />
              <SkillCard skill_name={"Authentication (Auth0, Jwt, SSO, SA)"} />
              <SkillCard skill_name={"APIs & Data Handling (RESTful APIs, GraphQL )"} />
            </div>

            {/* Backend */}
            <div className={styles.column}>
              <h2>Backend And Database</h2>
              <SkillCard skill_name={"Java8"} />
              <SkillCard skill_name={"Oops"} />
              <SkillCard skill_name={"Exception Handling"} />
              <SkillCard skill_name={"Collection Framwork"} />
              <SkillCard skill_name={"DS & Algorithms"} />
              <SkillCard skill_name={"Advance Java (Servlet, Jsp, Jdbc, Hibernate, Beans)"} />
              <SkillCard skill_name={"Spring Framwork"} />
              <SkillCard skill_name={"Security"} />
              <SkillCard skill_name={"Build Tools(Maven)"} />
              <SkillCard skill_name={"Database (MySQL, RSQL, NoSQL)"} level={4} />
            </div>

            {/* Tools */}
            <div className={styles.column}>
              <h2>Tools</h2>
              <SkillCard skill_name={"Vcs Hosting (Git, Github, Postman)"} />
              <SkillCard skill_name={"Package Managers (npm, yarn)"} />
              <SkillCard skill_name={"Web Security"} />
              <SkillCard skill_name={"Internet"} />
              <SkillCard skill_name={"Aws"}/>
              <SkillCard skill_name={"Figma, UI/UX, Photosho"} />
            </div>

            {/* Theory Subjects */}
            <div className={styles.column}>
              <h2>Theory Subjects</h2>
              <SkillCard skill_name={"Computer Networks"} level={4} />
              <SkillCard skill_name={"Operating Systems"} level={3} />
              <SkillCard skill_name={"Database and management system"} level={3} />
              <SkillCard skill_name={"Signal And System"} level={3} />
              <SkillCard skill_name={"IOT"} level={3} />

            </div>

            {/* Theory Subjects */}
            {/* <div className={styles.column}>
              <h2>Database</h2>
              <SkillCard skill_name={"MySQL"} level={4} />
              <SkillCard skill_name={"MongoDB"} level={3} />
            </div> */}
          </div>
        </motion.div>
      </MainContainer>
    </div>
  );
}

export default Skill;
