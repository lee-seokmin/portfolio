"use client";

import Image from "next/image";
import NavBar from "@/layouts/Nav";
import MainSection from "@/layouts/MainSection";
import About from "@/layouts/About";
import Resume from "@/layouts/Resume";
import Projects from "@/layouts/Projects";
import Contact from "@/layouts/Contact";

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

      <NavBar />
      <div className="relative z-10 h-screen snap-y snap-mandatory overflow-y-scroll">
        <MainSection />

        <About />

        <Resume />

        <Projects />

        <Contact />
      </div>
    </div>
  );
}