import Image from "next/image";
import styles from "./page.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
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

      </div>
    </div>
  );
}
