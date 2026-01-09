import Navbar from "../../Components/Navbar/Navbar.jsx";
import style from "./HomePage.module.css";
// import HeroImage from "../../assets/heroImage.JPG";
// import HeroImage from "../../assets/IMG_20231003_093856.JPG";
import HeroImage from "../../assets/demo2.JPG"
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        exit={{ opacity: 0 }}
        className={style.hero_component}
      >
        <div className={style.left_side}>
          <motion.p
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "3.5",
              delay: 0.5,
            }}
            className={style.upper_text_style}
          >
            Hello I'm Guddu
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "3.5",
              delay: 0.5,
            }}
            className={style.bottom_text_style}
          >
            &lt;Software Developer/&gt;
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "1",
              delay: "1.5",
            }}
            className={style.detail_text}
          >
            <span>Hi👋 </span>
            <bold> I’m Guddu Kumar,</bold> a Frontend Developer (React.js) skilled in building modern, responsive web applications. Experienced in React.js, JavaScript (ES6+), HTML, CSS, REST API integration, and reusable component design. I’ve worked on e-commerce platforms, dashboards, and data-driven apps, following clean code practices. Focused on creating user-centric, scalable applications with maintainable code. Skilled at problem-solving, debugging, and collaborating in agile teams.

          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: "-7vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{ delay: 2.5, stiffness: 40, duration: 0.7 }}
            className={style.download_btn}
          >
            <a
              className="link_under_button"
              target="_blank"
              href="https://drive.google.com/file/d/18Mk27OjIwbBf__hdR_Nxk_zP-tZIbgat/view?usp=drive_link"
            >
            
              Resume 🡻
            </a>
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, stiffness: 40, duration: 1 }}
          className={style.right_section}
        >
          <div className={style.img_section}>
            <img src={HeroImage} alt="Shivam" className={style.hero_image} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomePage;
