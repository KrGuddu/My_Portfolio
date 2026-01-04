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
            <span>Hi Dear,</span> <span>I’m Guddu Kumar,</span> a passionate and results-driven Full Stack Software Developer specializing in building robust, scalable, and user-friendly web applications using React.js for the frontend and Java (Spring Boot) for the backend. With a strong foundation in both client-side and server-side development, I bring end-to-end development expertise—transforming ideas into fully functional digital products.
            My skill set includes modern frontend technologies like HTML5, CSS3, JavaScript (ES6+), Redux, Tailwind CSS, and responsive design principles, combined with powerful backend technologies such as Java, Spring Boot, REST APIs, MySQL, and Hibernate. I have hands-on experience in version control (Git), build tools (Maven), and deployment on cloud platforms.
            I take pride in writing clean, maintainable code and collaborating closely with cross-functional teams to deliver high-quality software solutions. Whether it's developing dynamic single-page applications or designing secure backend architectures, I aim to create seamless user experiences and efficient systems.
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
              href="https://drive.google.com/file/d/1vhFKhBdTcQDwg0LTJMpHRjvEiXm3jEwA/view?usp=drive_link"
            >
            
              Download CV
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
