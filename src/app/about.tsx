"use client";

import { useState } from "react";
import styles from "../css/aboutview.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

import TechStack from "./components/TechStack";
import TextTypingAni from "./components/TextTypeAni";

export default function About() {
    return (
        <div className={styles.wrap}>
            <div className={styles.Container}>
                <div className={styles.AboutmeHolder}>
                    <span>
                        <TextTypingAni text={'Hi Everyone, I am Lee Seok Min from Ulsan, Republic of Korea.\n I am currently a College Student in Kyonggi Univ., Suwon.'} />
                        <span className={styles.blink}>|</span>
                    </span>
                    <FontAwesomeIcon icon={faTerminal} size="6x" />
                </div>

                <div className={styles.SkillContainer}>
                    <strong className={styles.Skill}>Skills</strong>
                    <div className={styles.SkillBox}>
                            {
                                <TechStack />
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}