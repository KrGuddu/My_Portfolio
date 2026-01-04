import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import teamtrackrIMG from "../../assets/teamtrackrIMG.png";
import marketingIMG from "../../assets/marketingIMG.png";
import travelHookIMG from "../../assets/travelhookIMG.png";
import safecamIMG from "../../assets/safecamIMG.png";
import quizIMG from "../../assets/quizIMG.JPG";
import weatherAppImg from '../../assets/weaht.jpg'
// import shopping-apps from '../../assets/shopping-apps.jpg'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://facevue-8c.netlify.app/"}
              githubLink={"https://github.com/KrGuddu"}
              projectName={"FaceVue (A Face Recognition Apps)"}
              projectDetails={
                "Developed a real-time face recognition web app using React and face-api.js. Integrated webcam access to detect faces, expressions, and landmarks, with image capture and upload functionality with ML processing."
              }
              demoImage={quizIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://shoprevive.netlify.app/"}
              githubLink={"https://github.com/KrGuddu"}
              projectName={"ShopRevive (E-Commerce Website)"}
              projectDetails={
                "Created & designed with ReactJS and CSS, focusing on user authentication, data security, real-time user status, session management, and responsive layouts."
              }
              demoImage={weatherAppImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
              ]}
            />

            <ProjectCard
              previewLink={"https://tastevista.netlify.app/"}
              githubLink={"https://github.com/KrGuddu"}
              projectName={"TasteVista (Restaurant Website)"}
              projectDetails={
                "Create with reactJs with advanced features like Online Ordering and Reservation System with table, Interactive Menu Filters, Customer Reviews, Ratings and many more."
              }
              demoImage={teamtrackrIMG}
              key={"Team Trackr App"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://homenexus.netlify.app/"}
              githubLink={"https://github.com/KrGuddu"}
              projectName={"HomeNexus (Real Estate Website  )"}
              projectDetails={
                "Create using ReactJS,CSS focusing on user authentication, data security, session management, Advanced Search & Filtering by location, price, property."
              }
              demoImage={marketingIMG}
              key={"Marketing Solutions Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
              ]}
            />
            {/* <ProjectCard
              previewLink={"https://travelhook.netlify.app/"}
              githubLink={"https://github.com/KrGuddu"}
              projectName={"Travel Hook Webpage"}
              projectDetails={
                "It is a responsive and Mobile friendly static webpage created using pure HTML, CS and jQuery."
              }
              demoImage={travelHookIMG}
              key={"Travel Hook Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://kaleidoscopic-nougat-c405ab.netlify.app/"}
              githubLink={
                "https://github.com/KrGuddu"
              }
              projectName={"SafeCam Webpage"}
              projectDetails={
                "It is a responsive and Mobile friendly static webpage created using pure HTML, CS and jQuery."
              }
              demoImage={safecamIMG}
              key={"SafeCam Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            /> */}
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;
