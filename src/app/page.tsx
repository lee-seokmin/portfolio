<<<<<<< HEAD
"use client";

import Image from "next/image";
import NavBar from "@/layouts/Nav";
import MainSection from "@/layouts/MainSection";
import About from "@/layouts/About";
import Resume from "@/layouts/Resume";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div className="fixed inset-0">
        <Image
          src="/image/cover.jpg"
          alt="background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation Bar */}
      <NavBar />

      {/* Full Page Scrollable Sections */}
      <div className="relative z-10 h-screen snap-y snap-mandatory overflow-y-scroll">
        {/* Main Section (Hero) */}
        <MainSection />
        {/* About Section */}
        <About />

        {/* Resume Section */}
        <Resume />

        {/* Projects Section */}
        <section id="projects" className="h-screen flex flex-col justify-center items-center text-white px-6 snap-start bg-black/60 backdrop-blur-lg">
          <h2 className="text-5xl font-bold mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-200/80 rounded-lg shadow-md">프로젝트 1</div>
            <div className="p-6 bg-gray-200/80 rounded-lg shadow-md">프로젝트 2</div>
            <div className="p-6 bg-gray-200/80 rounded-lg shadow-md">프로젝트 3</div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="h-screen flex flex-col justify-center items-center text-white px-6 snap-start bg-black/70 backdrop-blur-lg">
          <h2 className="text-5xl font-bold mb-4">Contact</h2>
          <p className="max-w-2xl text-center text-lg">궁금한 점이 있으시면 언제든지 연락주세요.</p>
          <div className="mt-6 flex gap-4">
            <a href="mailto:your.email@example.com" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Email</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition">LinkedIn</a>
          </div>
        </section>
      </div>
    </div>
  );
}
=======
"use client"; 

import Image from "next/image";
import styles from "../css/page.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

import Project from "./project";
import About from "./about";
import Resume from "./resume";

export default function Home() {
  const [Screen, SetScreen] = useState("About");
  const [IsSkeleton, SetIsSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(()=>{ SetIsSkeleton(false) }, 2000);
  })

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
                  src={'/Profile.jpg'}
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
>>>>>>> old-repo/main
