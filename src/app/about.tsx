"use client";

import { useState } from "react";
import styles from "../css/aboutview.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <div className={styles.wrap}>
            <div className={styles.AboutmeHolder}>
                <p>
                    Hi Everyone, I am <span className={styles.Blue}>Lee Seok Min</span> from <span className={styles.Blue}>Ulsan, Republic of Korea</span>.
                    <br />
                    I am currently a College Student in <span className={styles.Blue}>Kyonggi Univ.</span>, Suwon.
                </p>
                <FontAwesomeIcon icon={faTerminal} size="6x" />
            </div>

            <div className={styles.SkillBox}>
                
            </div>
        </div>
    )
}