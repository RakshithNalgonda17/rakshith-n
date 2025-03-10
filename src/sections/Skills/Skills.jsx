import styles from "./SkillsStyles.module.css"
import checkmarkIcon from "../../assets/checkmark-dark.svg"
import SkillList from "../../common/SkillList"

export default function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill="HTML" />
            <SkillList src={checkmarkIcon} skill="CSS" />
            <SkillList src={checkmarkIcon} skill="Javascript" />
            <SkillList src={checkmarkIcon} skill="Node" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill="React" />
            <SkillList src={checkmarkIcon} skill="DBMS" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill="Git" />
            <SkillList src={checkmarkIcon} skill="Bootstrap" />
        </div>
        <hr />
    </section>
  )
}
