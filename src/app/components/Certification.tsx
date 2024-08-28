import styles from "../../css/resumeview.module.css";

import Certifications from "../../../public/json/Certifications.json";

export default function CertificationRendering() {
    const result: JSX.Element[] = [];

    Certifications.map((data, index) => {
        result.unshift(
            <div className={styles.Certification}>
                <span>-</span>
                <span className={`${styles.CertificationName} ${styles.InfoName}`}>{data['Name']}</span>
                <span className={`${styles.CertificationDate} ${styles.InfoDate}`}>{data['Date']} {data['State']}</span>
            </div>
        )
    })
    return result;
}