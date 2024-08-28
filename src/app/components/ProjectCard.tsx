import Image from "next/image";

import styles from "../../css/projectview.module.css";
import Projects from "../../../public/json/projects.json";

export default function CardRendering(IsSkeleton: boolean, Category: string) {
    const result: JSX.Element[] = [];

    Projects.map((data, index) => {
        if(data['Category'] == Category || Category == "All") {
            result.push(
                <div className={styles.Card}>
                    <a href={data['URL']}>
                        <div className={`${styles.CardImgHolder} ${IsSkeleton ? styles.SkeletonActive : ""}`} title={data['State']}>
                            {
                                IsSkeleton == false ? (
                                    <Image src={data['Image']} 
                                        layout='fill'
                                        objectFit='cover'
                                        alt={""}
                                        className={styles.CardImg} 
                                    />
                                ) : ""
                            }
                        </div>
                    </a>
                    <div className={styles.CardInfo}>
                        <span className={`${styles.CardTitle} ${IsSkeleton ? styles.SkeletonActive : ""}`}>
                            {
                                IsSkeleton == false ? data['ProjectName'] : ""
                            }
                        </span>
                        <span className={`${styles.CardCategory} ${IsSkeleton ? styles.SkeletonActive : ""}`}>
                            {
                                IsSkeleton == false ? data['Category'] : ""
                            }
                        </span>
                    </div>
                </div>
            )
        }
    })
    
    return result;
}