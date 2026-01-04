import React from 'react'
import styles from './SkillCard.module.css'
import {motion} from 'framer-motion'

// function SkillCard({skill_name, level}) {
function SkillCard({skill_name}) {

    // The function convert the level number into the total number of the star shown 

    const renderStars = () => {
        if( level > 5) return alert("Error!, Stars can't be greater than 5")
        const stars = [];
        for (let i = 0; i < level; i++) {
          stars.push(<i className={`fa-solid fa-star ${styles.star}`}></i>);
        }
        return stars;
      };


  // return (
  //   <div className={styles.skill_card_component}>
  //       <p className={styles.skill_name}>{skill_name}</p>
  //       {/* <div className={styles.star_section}>
  //           {
  //               renderStars()
  //           }
  //       </div> */}
  //   </div>
  // )
  return (
    <motion.div
      className={styles.skill_card_component}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className={styles.skill_name}>{skill_name}</p>
    </motion.div>
  )
}

export default SkillCard