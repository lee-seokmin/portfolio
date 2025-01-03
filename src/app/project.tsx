"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../css/projectview.module.css";
import CardRendering from "./components/ProjectCard";

export default function Project({ IsSkeleton }: {IsSkeleton: boolean}) {
    const [Category, SetCategory] = useState("All");

    return (
        <div className={styles.wrap}>
            <div className={styles.Category}>
                <li className={`${styles.CategoryLi} ${Category == "All" ? styles.CategoryActive : ""}`} onClick={() => SetCategory("All")}>
                    All
                </li>
                <li className={`${styles.CategoryLi} ${Category == "Website" ? styles.CategoryActive : ""}`} onClick={() => SetCategory("Website")}>
                    Website
                </li>
                <li className={`${styles.CategoryLi} ${Category == "Application" ? styles.CategoryActive : ""}`} onClick={() => SetCategory("Application")}>
                    Application
                </li>
                <li className={`${styles.CategoryLi} ${Category == "AI" ? styles.CategoryActive : ""}`} onClick={() => SetCategory("AI")}>
                    AI
                </li>
                <li className={`${styles.CategoryLi} ${Category == "System" ? styles.CategoryActive : ""}`} onClick={() => SetCategory("System")}>
                    System
                </li>
            </div>
            <div className={styles.Body}>
                {
                    CardRendering(IsSkeleton, Category)
                }
            </div>
        </div>
    );
}