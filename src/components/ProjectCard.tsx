import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectsData from '../../public/json/projects.json';

interface ProjectItem {
  id: number;
  ProjectName: string;
  Category: string;
  Image: string;
  URL: string;
  State: string;
}

interface ProjectCardProps {
  Category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ Category }) => {
  const projects: ProjectItem[] = ProjectsData;
  const filteredProjects = Category === "All" ? projects : projects.filter(project => project.Category === Category);

  return (
    <>
      {filteredProjects.map((project) => (
        <div key={project.id} className="rounded-md flex flex-col group relative">
          <Link href={project.URL} target={project.State == "View More" ? "_blank" : ""}>
            <div className="relative aspect-3/2 overflow-hidden rounded-md">
              <Image 
                src={project.Image} 
                alt={project.ProjectName} 
                fill 
                className="object-cover rounded-md group-hover:scale-125 transition-transform duration-300" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 ">
                <span className="text-white text-lg rounded-md">
                  {project.State}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold">{project.ProjectName}</h3>
              <p className="text-base text-gray-300/70">{project.Category}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default ProjectCard;
