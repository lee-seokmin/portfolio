"use client"; 

import Image from "next/image";
import styles from "../css/page.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

import Project from "./project";
import About from "./about";
import Resume from "./resume";

export default function Home() {
  const [Screen, SetScreen] = useState("About");
  const [IsSkeleton, SetIsSkeleton] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={`${styles.LeftSideBox} ${styles.Box}`}>
        <div className={styles.LeftSideBoxWrap}>
          <div className={styles.Profile}>
            <div className={`${styles.ProfileImgHolder} ${IsSkeleton ? styles.SkeletonActive : ""}`}>
              {
                IsSkeleton ? ""
                :
                <Image
                  src={'/profile.jpg'}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{objectFit:"cover"}}
                />
              }
            </div>
            <div className={styles.ProfileNameHolder}>
              <span className={styles.ProfileName}>이석민</span>
              <span className={styles.ProfileEnName}>LEE SEOK MIN</span>
            </div>
          </div>
          <div className={styles.ProfileInfo}>
            <div className={`${styles.EmailBox} ${styles.InfoBox}`}>
              <div className={styles.IconHolder}>
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </div>
              <div className={styles.InfoDetail}>
                <span className={styles.InfoName}>EMAIL</span>
                <span className={`${styles.Info} ${IsSkeleton ? styles.SkeletonActive : ""}`}>
                  {
                    IsSkeleton ? "" : "dltjrals13@naver.com"
                  }
                </span>
              </div>
            </div>

            <div className={`${styles.GithubBox} ${styles.InfoBox}`}>
              <div className={styles.IconHolder}>
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </div>
              <div className={styles.InfoDetail}>
                <span className={styles.InfoName}>GITHUB</span>
                <span className={`${styles.Info} ${IsSkeleton ? styles.SkeletonActive : ""}`}>
                  {
                    IsSkeleton ? "" : 
                    <a href="https://github.com/seokmin12" target="_blank">
                      @seokmin12
                    </a>
                  }
                </span>
              </div>
            </div>

            <div className={`${styles.PhoneBox} ${styles.InfoBox}`}>
              <div className={styles.IconHolder}>
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </div>
              <div className={styles.InfoDetail}>
                <span className={styles.InfoName}>INSTAGRAM</span>
                <span className={`${styles.Info} ${IsSkeleton ? styles.SkeletonActive : ""}`}>
                  {
                    IsSkeleton ? "" : 
                    <a href="https://instagram.com/lee_seokmin__/" target="_blank">
                      @lee_seokmin__
                    </a>
                  }
                </span>
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
            <li className={`${styles.NavLi} ${Screen == "About" ? styles.NavActive: ""}`} onClick={() => SetScreen("About")}>
              About
            </li>
            <li className={`${styles.NavLi} ${Screen == "Resume" ? styles.NavActive: ""}`} onClick={() => SetScreen("Resume")}>
              Resume
            </li>
            <li className={`${styles.NavLi} ${Screen == "Project" ? styles.NavActive: ""}`} onClick={() => SetScreen("Project")}>
              Project
            </li>
          </div>
        </div>

        <div className={styles.Body}>
          {
            Screen == "About" ? 
              <About /> 
              :
              ""
          }
          {
            Screen == "Resume" ?
            <Resume />
            :
            ""
          }
          {
            Screen == "Project" ?
              <Project IsSkeleton={IsSkeleton} />
            :
            ""
          }
        </div>
      </div>
    </div>
  );
}
