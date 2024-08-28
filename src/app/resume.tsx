"use client";

import styles from "../css/resumeview.module.css";
import CertificationRendering from "./components/Certification";
import StudyListRendering from "./components/StudyList";

export default function Resume() {
    return (
        <div className={styles.wrap}>
            <div className={styles.Profile}>
                <span className={styles.ProfileName}>
                    이석민
                </span>
                <span className={styles.ProfileJob}>
                    Full Stack Developer
                </span>
            </div>

            <div className={styles.Info}>
                <div className={styles.InfoTitle}>
                    <span>🏫 Education</span>
                </div>
                <div className={styles.School}>
                    <span>-</span>
                    <span className={`${styles.SchoolName} ${styles.InfoName}`}>경기대학교</span>
                    <span className={`${styles.SchoolPeriod} ${styles.InfoDate}`}>2023.03 ~</span>
                </div>
                <div className={styles.School}>
                    <span>-</span>
                    <span className={`${styles.SchoolName} ${styles.InfoName}`}>울산고등학교</span>
                    <span className={`${styles.SchoolPeriod} ${styles.InfoDate}`}>2020.03 ~ 2023.02</span>
                </div>
            </div>

            <div className={styles.Info}>
                <div className={styles.InfoTitle}>
                    <span>🪪 Certification</span>
                </div>
                {
                    CertificationRendering()
                }
            </div>
            
            <div className={styles.Info}>
                <div className={styles.InfoTitle}>
                    <span>💻 Tech Skills</span>
                </div>
                <div className={styles.TechStack}>
                    <span>-</span>
                    <span className={styles.Tech}>Programming Languages</span>
                    <span className={styles.TechType}>Python, JavaScript, TypeScript, HTML5, CSS, SwiftUI</span>
                </div>
                <div className={styles.TechStack}>
                    <span>-</span>
                    <span className={styles.Tech}>Framework/ Library</span>
                    <span className={styles.TechType}>React, Node.js, Next.js, JQuery, Tensorflow, Pytorch, FastAPI, Flask</span>
                </div>
                <div className={styles.TechStack}>
                    <span>-</span>
                    <span className={styles.Tech}>Server</span>
                    <span className={styles.TechType}>MySQL, Apache</span>
                </div>
                <div className={styles.TechStack}>
                    <span>-</span>
                    <span className={styles.Tech}>Environment</span>
                    <span className={styles.TechType}>MacOS, Ubuntu, AWS</span>
                </div>
            </div>

            <div className={styles.Info}>
                <div className={styles.InfoTitle}>
                    <span>📚 Study</span>
                </div>
                {
                    StudyListRendering()
                }
            </div>
        </div>
    )
}