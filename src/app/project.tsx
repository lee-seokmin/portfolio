"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../css/projectview.module.css";
import Img from "../../public/DSC_0986.jpg"

const CardRendering = (IsSkeleton: boolean) => {
    const result = [];

    for(let i = 0; i < 4; i++) {
        result.push(
            <div className={styles.Card}>
                <div className={`${styles.CardImgHolder} ${IsSkeleton ? styles.SkeletonActive : ""}`}>
                    {
                        IsSkeleton == false ? (
                            <Image src={Img} 
                                layout='fill'
                                objectFit='cover'
                                alt={""}
                                className={styles.CardImg} 
                            />
                        ) : ""
                    }
                </div>
                <div className={styles.CardInfo}>
                    <span className={`${styles.CardTitle} ${IsSkeleton ? styles.SkeletonActive : ""}`}>
                        {
                            IsSkeleton == false ? "PhotoFrame" : ""
                        }
                    </span>
                    <span className={`${styles.CardCategory} ${IsSkeleton ? styles.SkeletonActive : ""}`}>
                        {
                            IsSkeleton == false ? "Web development" : ""
                        }
                    </span>
                </div>
            </div>
        )
    }
    return result;
}

export default function Project({ IsSkeleton }: {IsSkeleton: boolean}) {
    return (
        <div className={styles.wrap}>
            <div className={styles.Category}>
                <li className={styles.CategoryLi}>
                    All
                </li>
                <li className={styles.CategoryLi}>
                    Web development
                </li>
                <li className={styles.CategoryLi}>
                    Application
                </li>
                <li className={styles.CategoryLi}>
                    AI
                </li>
            </div>
            <div className={styles.Body}>
                {CardRendering(IsSkeleton)}
            </div>
        </div>
    );
}