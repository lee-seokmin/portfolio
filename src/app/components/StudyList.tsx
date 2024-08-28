import styles from "../../css/resumeview.module.css";

import Studys from "../../../public/json/studys.json";

export default function StudyListRendering() {
    const result: JSX.Element[] = [];

    Studys.map((data, index) => {
        result.unshift(
            <div className={styles.Study} key={index}>
                <div className={styles.StudyName}>
                    <span>{data['StudyName']}</span>
                </div>
                <div className={styles.StudyPeriod}>
                    <span>{data['StudyPeriod']}</span>
                </div>
                <div className={styles.StudyDescLi}>
                    {
                        data['StudyDesc'].map((desc, idx) => {{
                            return (
                                <div className={styles.StudyDesc}>
                                    <span>·</span>
                                    <span>{desc}</span>
                                </div>
                            )
                        }})
                    }
                </div>
            </div>
        )
    })

    return result;
}