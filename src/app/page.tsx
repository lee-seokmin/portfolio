"use client";

import Image from "next/image";
import NavBar from "@/layouts/Nav";
import MainSection from "@/layouts/MainSection";
import About from "@/layouts/About";
import Resume from "@/layouts/Resume";
import Projects from "@/layouts/Projects";

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
        <Projects />


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