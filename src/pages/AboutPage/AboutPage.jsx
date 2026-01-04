import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"My Journey"} />


          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"Sep 2024 - Present"}
                  timeline_title={"Web Developer"}
                  location={"Aarvi Decor And Furnishing Private Limited, Noida, U.P. 201303"}
                  details={
                    `Built responsive web apps with modern tech and optimized performance to ensure seamless user experience.`
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"Jan 2024 - Sep 2024"}
                  timeline_title={"Software Developer"}
                  location={"Qspiders Software Solutions Pvt. Ltd. Noida, U.P."}
                  details={
                    "Built responsive web apps with clean code and modern technologies."
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"Jan 2023 - Jul 2023"}
                  timeline_title={"Java Programmer"}
                  location={"Friends Union for Energising Lives (FUEL), Mohali, PB"}
                  details={
                    "Developed Java applications using OOP, backend logic, and APIs."
                  }
                />
              </div>
             
            </div>
          </div>


          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2020 - 2024"}
                  timeline_title={"Bachelor of Technology, 𝑒𝒸𝑒"}
                  location={"I.K. GUJRAL PUNJAB TECHNICAL UNIVERSITY, Main Campus Kapurthala Punjab 144603"}
                  details={"Pursued the B.Tech Degree from IKG-PTU with 7.4 CGPA"}
                  // img={
                  //   "https://www.gpkotdwar.org.in/images/gallery/l8THHpO6.jpg"
                  // }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2017 - 2019"}
                  timeline_title={"INTERMEDIATE"}
                  location={"SENIOR SECONDARY HIGH SCHOOL Fatuha, Patna, Bihar, 803201"}
                  details={
                    "Completed my Degree from State Board(BSEB) with 70.2%."
                  }
                />
              </div>
              <div className= {`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2016 - 2017"}
                  timeline_title={"MATRICULATION "}
                  location={"HIGH SCHOOL Fatuha, Patna, Bihar, 803201"}
                  details={
                    "Completed my High School Degree from State Board(BSEB) with 68.6%."
                  }
                />
              </div>
              {/* <div className= {`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2022 - 2025"}
                  timeline_title={"Bachelors in Computer Applications"}
                  location={"University Of Mysore"}
                  details={
                    "Currently completing my Bachelors Degree in Computer Applications (Online) from Mysore University"
                  }
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq25wBcbXkIUAg1yyYvwNMT--QIk76V1QFkI0rIdt5Kw&s"
                  }
                />
              </div> */}
            </div>
          </div>

          {/*  */}
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
