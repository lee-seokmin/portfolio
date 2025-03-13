"use client";

import Link from "next/link";
import { MouseEvent } from "react";

export default function NavBar() {
  // Function to handle smooth scrolling with proper TypeScript types
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-zinc-800/90 backdrop-blur-lg rounded-full px-3 py-2 z-50 shadow-lg shadow-black/[0.03] border border-zinc-700 hover:px-6 hover:py-3 transition-all duration-300">
      <ul className="flex justify-center items-center gap-4 md:gap-6 hover:gap-10 transition-all duration-300">
        {['About', 'Resume', 'Projects', 'Contact'].map((item) => (
          <li key={item} className="flex items-center">
            <Link 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              className="relative px-2 py-1 text-sm md:text-sm text-zinc-300 hover:text-blue-400 transition-all duration-300 rounded-full hover:bg-zinc-700/50 hover:px-3 hover:py-1.5 md:hover:px-4 md:hover:py-2"
            >
              <span className="relative">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}