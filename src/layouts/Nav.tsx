"use client";

import Link from "next/link";
import { MouseEvent, useState, useEffect } from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<string>("");
  
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-zinc-800/90 backdrop-blur-lg rounded-full px-3 py-2 z-50 shadow-lg shadow-black/[0.03] border border-zinc-700 hover:px-6 hover:py-3 transition-all duration-300">
      <ul className="flex justify-center items-center gap-4 md:gap-6 hover:gap-10 transition-all duration-300">
        {["About", "Resume", "Projects", "Contact"].map((item) => {
          const lowerCaseItem = item.toLowerCase();
          const isActive = activeSection === lowerCaseItem;
          return (
            <li key={item} className="flex items-center">
              <Link
                href={`#${lowerCaseItem}`}
                onClick={(e) => handleScroll(e, lowerCaseItem)}
                className={`relative px-2 py-1 text-sm md:text-sm transition-all duration-300 rounded-full hover:bg-zinc-700/50 hover:px-3 hover:py-1.5 md:hover:px-4 md:hover:py-2 ${
                  isActive ? "text-blue-400" : "text-zinc-300 hover:text-blue-400"
                }`}
              >
                <span className="relative">
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      isActive
                        ? "w-full bg-blue-500"
                        : "w-0 bg-blue-500 group-hover:w-full"
                    }`}
                  ></span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
