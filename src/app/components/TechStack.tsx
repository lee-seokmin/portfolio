import styles from "../../css/aboutview.module.css";

import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript, TbBrandNextjs } from "react-icons/tb";
import { FaSwift, FaPython, FaReact } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";

export default function TechStack() {
    return (
        <>
            <div className={styles.SkillItem}>
                <IoLogoJavascript />
            </div>
            <div className={styles.SkillItem}>
                <TbBrandTypescript />
            </div>
            <div className={styles.SkillItem}>
                <FaSwift />
            </div>
            <div className={styles.SkillItem}>
                <FaPython />
            </div>
            <div className={styles.SkillItem}>
                <FaReact />
            </div>
            <div className={styles.SkillItem}>
                <DiNodejs />
            </div>
            <div className={styles.SkillItem}>
                <SiMysql />
            </div>
            <div className={styles.SkillItem}>
                <TbBrandNextjs />
            </div>
        </>
    )
}