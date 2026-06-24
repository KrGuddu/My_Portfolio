import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import teamtrackrIMG from "../../assets/teamtrackrIMG.png";
import marketingIMG from "../../assets/marketingIMG.png";
// import travelHookIMG from "../../assets/travelhookIMG.png";
// import safecamIMG from "../../assets/safecamIMG.png";
import quizIMG from "../../assets/quizIMG.jpg";
// import weatherAppImg from '../../assets/weaht.jpg'
import ecommerce from "../../assets/ecommerce.png";
import WorldImg from "../../assets/WorldImg.png";
import Admin_Dash from "../../assets/Admin_Dash.png";
import devcollabx from "../../assets/devcollabx.png";
import owncartx from "../../assets/owncartx.png";
import flight from "../../assets/flight.png";
import EmpManagement from "../../assets/EmpManagement.png";
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
              previewLink={"https://owncartx.vercel.app"}
              githubLink={"https://github.com/KrGuddu/ownCartX-backend"}
              projectName={"OwnCartX - Ongoing"}
              projectDetails={
                // "Developed AI-powered full-stack eCommerce platform with React and Node.js, featuring secure authentication, Stripe payments, order management, and product recommendations."
                "Built an AI-powered eCommerce platform with React.js and Node.js, secure auth, Stripe payments, order management, and recommendations."
              }
              demoImage={owncartx}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                // "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/redux.svg",
                "https://cdn.simpleicons.org/reactrouter/CA4245",
                "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                "https://cdn.simpleicons.org/express/ffffff",
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                // "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
                "https://cdn.worldvectorlogo.com/logos/postman.svg",
                // "https://cdn.worldvectorlogo.com/logos/google-icon.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://devcollabx-client.onrender.com"}
              githubLink={"https://github.com/KrGuddu/devcollabx-client"}
              projectName={"DevCollabX"}
              projectDetails={
                "DevCollabX is a real-time collaborative code editor where developers can join or create rooms using a unique Room ID and code together instantly."
              }
              demoImage={devcollabx}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                // "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/redux.svg",
                "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                "https://cdn.simpleicons.org/express/ffffff",
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                "https://cdn.simpleicons.org/socketdotio/ffffff",
                // "https://cdn.worldvectorlogo.com/logos/postman.svg",
              ]}
            />

            <ProjectCard
              previewLink={"https://my-admin-dash.netlify.app"}
              githubLink={"https://github.com/KrGuddu/react-admin-dashboard"}
              projectName={"Admin Dashboard"}
              projectDetails={
                // "Admin Dashboard is a scalable web application designed to manage data and users efficiently, featuring interactive analytics, role-based access, and a clean, responsive user interface."
                "Developed a scalable Admin Dashboard featuring analytics, user management, role-based access, and a responsive design."
              }
              demoImage={Admin_Dash}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                // "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/redux.svg",
                "https://cdn.simpleicons.org/reactrouter/CA4245",
                "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
                "https://cdn.simpleicons.org/chartdotjs/FF6384",
                "https://cdn.simpleicons.org/apachespark/E25A1C",
                // "https://cdn.simpleicons.org/github/ffffff",
                "https://cdn.worldvectorlogo.com/logos/netlify.svg",
              ]}
            />

            <ProjectCard
              previewLink={"https://facevue.netlify.app"}
              githubLink={"https://github.com/KrGuddu/react-face-detection-app"}
              projectName={"FaceVue"}
              projectDetails={
                // "Developed real-time face recognition web app using React and face-api.js. Integrated webcam to detect faces, expressions, and landmarks, with image capture and upload functionality."
                "Built a real-time face recognition app using React and face-api.js with webcam detection, landmarks, expressions, and image upload."
              }
              demoImage={quizIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                // "https://cdn.simpleicons.org/tensorflow/FF6F00",
                "https://cdn.simpleicons.org/opencv/5C3EE8",
                "https://cdn.simpleicons.org/webrtc/ffffff",
                "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
                // "https://cdn.simpleicons.org/github/ffffff",
                "https://cdn.worldvectorlogo.com/logos/netlify.svg",
              ]}
            />

            <ProjectCard
              previewLink={"https://github.com/KrGuddu/flight-search-engine"}
              githubLink={"https://github.com/KrGuddu/flight-search-engine"}
              projectName={"Flight Search Engine"}
              projectDetails={
                "Built a responsive flight search engine with real-time booking, filters, and API integration."
              }
              demoImage={flight}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                // "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/redux.svg",
                "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                "https://cdn.simpleicons.org/express/ffffff",
                // "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                "https://cdn.simpleicons.org/socketdotio/ffffff",
                // "https://cdn.worldvectorlogo.com/logos/postman.svg",
              ]}
            />

            <ProjectCard
              previewLink={"https://worldxploree.netlify.app"}
              githubLink={"https://github.com/KrGuddu/react_country"}
              projectName={"WorldXplore"}
              projectDetails={
                "WorldXplore is a modern React-based web app that enables users to explore country data with an intuitive interface, advanced filtering, and responsive design."
              }
              demoImage={WorldImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                // "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/redux.svg",
                "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
                "https://cdn.simpleicons.org/axios/5A29E4",
                "https://cdn.simpleicons.org/openapiinitiative/6BA539",
                "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
                // "https://cdn.simpleicons.org/github/ffffff",
                // "https://cdn.worldvectorlogo.com/logos/netlify.svg",
              ]}
            />

            <ProjectCard
              previewLink={"https://shoprevive.netlify.app"}
              githubLink={"https://github.com/KrGuddu/e-commerce-apps"}
              projectName={"ShopRevive"}
              projectDetails={
                // "Created using ReactJS and CSS, focusing on secure authentication, session management, protected routes, responsive layouts, and a smooth, user-friendly shopping experience."
                "Built a ReactJS eCommerce app with secure auth, session management, protected routes, responsive design, and smooth UX."
              }
              demoImage={ecommerce}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/redux.svg",
                // "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
                // "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
                "https://cdn.simpleicons.org/openapiinitiative/6BA539",
                "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
                // "https://cdn.simpleicons.org/github/ffffff",
                "https://cdn.worldvectorlogo.com/logos/netlify.svg",
              ]}
            />

            <ProjectCard
              previewLink={"https://tastevista.netlify.app/"}
              githubLink={"https://github.com/KrGuddu/restaurant-app"}
              projectName={"TasteVista"}
              projectDetails={
                "TasteVista is a React-based restaurant app featuring online ordering, table reservations, menu filters, customer reviews, ratings, and responsive design."
              }
              // projectDetails={
              //   "Create with reactJs with advanced features like Online Ordering and Reservation System with table, Interactive Menu Filters, Customer Reviews, Ratings and many more."
              //   "Or, Created using ReactJS and CSS, focusing on secure authentication, session management, protected routes, responsive layouts, and a smooth, user-friendly shopping experience."
              // }
              demoImage={teamtrackrIMG}
              key={"Team Trackr App"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/redux.svg",
                // "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
                "https://cdn.simpleicons.org/reactrouter/CA4245",
                "https://cdn.simpleicons.org/openapiinitiative/6BA539",
                "https://cdn.simpleicons.org/googlemaps/4285F4",
                "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
                // "https://cdn.simpleicons.org/github/ffffff",
                "https://cdn.worldvectorlogo.com/logos/netlify.svg",
              ]}
            />

            <ProjectCard
              previewLink={
                "https://github.com/KrGuddu/Employee_Management_Systems"
              }
              githubLink={
                "https://github.com/KrGuddu/Employee_Management_Systems"
              }
              projectName={"Employee Management System"}
              projectDetails={
                "Built MERN-based employee management system with authentication, payroll, attendance, and role-based dashboards."
              }
              demoImage={EmpManagement}
              key={"Marketing Solutions Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/redux.svg",
                // "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
                "https://cdn.simpleicons.org/reactrouter/CA4245",
                "https://cdn.simpleicons.org/openapiinitiative/6BA539",
                "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
                // "https://cdn.simpleicons.org/github/ffffff",
                "https://cdn.worldvectorlogo.com/logos/netlify.svg",
              ]}
            />

            <ProjectCard
              previewLink={"https://homenexus.netlify.app/"}
              githubLink={"https://github.com/KrGuddu"}
              projectName={"HomeNexus"}
              projectDetails={
                "HomeNexus is a React-based real estate web app enabling users to explore property listings with an intuitive interface, responsive design, and smooth navigation."
              }
              demoImage={marketingIMG}
              key={"Marketing Solutions Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/redux.svg",
                // "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
                "https://cdn.simpleicons.org/reactrouter/CA4245",
                "https://cdn.simpleicons.org/openapiinitiative/6BA539",
                "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
                // "https://cdn.simpleicons.org/github/ffffff",
                "https://cdn.worldvectorlogo.com/logos/netlify.svg",
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
