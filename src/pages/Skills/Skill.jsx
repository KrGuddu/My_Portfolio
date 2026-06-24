import { useState } from "react";
import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";
import Navbar from "../../Components/Navbar/Navbar";
import { categories, skills, getCategoryCount } from "./skillsData";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("");

  const handleEnter = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleLeave = () => {
    setActiveCategory("");
  };

  const handleClick = (categoryId) => {
    setActiveCategory((prev) => (prev === categoryId ? "" : categoryId));
  };

  const isSkillActive = (skill) => {
    if (!activeCategory) return true;

    return skill.category.includes(activeCategory);
  };

  return (
    <>
      <Navbar />
      <section id="skills" className={styles.skillsSection}>
        {/* ================= Heading ================= */}

        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>
            My <span>Skills</span>
          </h2>

          <p className={styles.subHeading}>
            Explore my technology stack by hovering or clicking on a category.
          </p>
        </div>

        {/* ================= Categories ================= */}
        <div className={styles.categoryContainer}>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`${styles.categoryButton} ${
                activeCategory === category.id ? styles.categoryActive : ""
              }`}
              onMouseEnter={() => handleEnter(category.id)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(category.id)}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryLabel}>{category.label}</span>

              <span className={styles.categoryCount}>
                {getCategoryCount(category.id)}
              </span>
            </button>
          ))}
        </div>

        {/* ================= Skills Grid ================= */}
        <div className={styles.skillsGrid} role="list">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              isActive={isSkillActive(skill)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
