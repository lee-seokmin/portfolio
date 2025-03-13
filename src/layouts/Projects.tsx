import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const [category, setCategory] = useState("All");

  return (
    <section id="projects" className="h-screen flex flex-col justify-center items-center text-white px-6 snap-start bg-black/60 backdrop-blur-lg">
      <div className="max-w-6xl w-full max-h-[85vh] h-full flex flex-col gap-5">
        <div className="flex">
          <ul className="flex space-x-4">
            {["All", "Website", "Application", "AI", "System"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer p-2 hover:bg-gray-500/50 rounded-md transition-colors duration-200 ${
                  category === item ? "text-blue-400" : "text-white"
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto'>
          <ProjectCard Category={category} />
        </div>
      </div>
    </section>
  );
}
