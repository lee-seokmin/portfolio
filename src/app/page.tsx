"use client"; 

import Image from "next/image";
import styles from "../css/page.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Home() {
  const [Screen, SetScreen] = useState("About");

  return (
    <div className={styles.wrap}>
      <div className={`${styles.LeftSideBox} ${styles.Box}`}>
        <div className={styles.LeftSideBoxWrap}>
          <div className={styles.Profile}>
            <div className={styles.ProfileImgHolder}>
              
            </div>
            <div className={styles.ProfileNameHolder}>
              
            </div>
          </div>
          <div className={styles.ProfileInfo}>
            <div className={`${styles.EmailBox} ${styles.InfoBox}`}>
              <div className={styles.IconHolder}>
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </div>
              <div className={styles.InfoDetail}>
                <span className={styles.InfoName}>EMAIL</span>
                <span className={styles.Info}></span>
              </div>
            </div>

            <div className={`${styles.GithubBox} ${styles.InfoBox}`}>
              <div className={styles.IconHolder}>
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </div>
              <div className={styles.InfoDetail}>
                <span className={styles.InfoName}>GITHUB</span>
                <span className={styles.Info}></span>
              </div>
            </div>

            <div className={`${styles.PhoneBox} ${styles.InfoBox}`}>
              <div className={styles.IconHolder}>
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </div>
              <div className={styles.InfoDetail}>
                <span className={styles.InfoName}>INSTAGRAM</span>
                <span className={styles.Info}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.RightSideBox} ${styles.Box}`}>
        <div className={styles.Header}>
          <div className={styles.HeaderTitleHolder}>
            <div className={styles.HeaderTitle}>
              {Screen}
            </div>
          </div>
          <div className={styles.HeaderNav}>
            <li className={`${styles.NavLi} ${Screen == "About" ? styles.NavActive: styles.NavDisabled}`} onClick={() => SetScreen("About")}>
              About
            </li>
            <li className={`${styles.NavLi} ${Screen == "Resume" ? styles.NavActive: styles.NavDisabled}`} onClick={() => SetScreen("Resume")}>
              Resume
            </li>
            <li className={`${styles.NavLi} ${Screen == "Project" ? styles.NavActive: styles.NavDisabled}`} onClick={() => SetScreen("Project")}>
              Project
            </li>
            <li className={`${styles.NavLi} ${Screen == "Contact" ? styles.NavActive: styles.NavDisabled}`} onClick={() => SetScreen("Contact")}>
              Contact
            </li>
          </div>
        </div>

        <div className={styles.Body}>
          
        </div>
      </div>
    </div>
  );
}
