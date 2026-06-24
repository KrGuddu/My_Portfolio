import styles from "./Skills.module.css";

function SkillCard({ skill, isActive }) {
  const Icon = skill.icon;

  return (
    <div
      className={`${styles.skillCard} ${
        isActive ? styles.active : styles.inactive
      }`}
      role="listitem"
      aria-label={skill.name}
    >
      <span
        className={styles.glow}
        style={{
          "--skill-color": skill.color,
        }}
      />

      <div className={styles.iconWrapper}>
        <Icon
          className={styles.skillIcon}
          style={{
            color: skill.color,
          }}
        />
      </div>

      <h4 className={styles.skillName}>{skill.name}</h4>
    </div>
  );
}

export default SkillCard;
