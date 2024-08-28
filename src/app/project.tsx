"use client";

import Image from "next/image";
import { JSX, useState } from "react";
import styles from "../css/projectview.module.css";
import Projects from "../../public/projects.json";

const CardRendering = (IsSkeleton: boolean, Category: string) => {
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

export default function Project({ IsSkeleton }: {IsSkeleton: boolean}) {
    const [Category, SetCategory] = useState("All");

    return (
        <div className={styles.wrap}>
            <div className={styles.Category}>
                <li className={`${styles.CategoryLi} ${Category == "All" ? styles.CategoryActive : ""}`} onClick={() => SetCategory("All")}>
                    All
                </li>
                <li className={`${styles.CategoryLi} ${Category == "Web development" ? styles.CategoryActive : ""}`} onClick={() => SetCategory("Web development")}>
                    Web development
                </li>
                <li className={`${styles.CategoryLi} ${Category == "Application" ? styles.CategoryActive : ""}`} onClick={() => SetCategory("Application")}>
                    Application
                </li>
                <li className={`${styles.CategoryLi} ${Category == "AI" ? styles.CategoryActive : ""}`} onClick={() => SetCategory("AI")}>
                    AI
                </li>
            </div>
            <div className={styles.Body}>
                {CardRendering(IsSkeleton, Category)}
            </div>
        </div>
    );
}