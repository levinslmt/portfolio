import React from "react";
import Card from "../ui/Card"; 
import { ProjectList } from "../datas/ProjectCard";
const Projects = () => {
  return (
    <section id="Projects" className="w-full scroll-mt-24">
      <div className="">
        <h2 className="font-mono text-sm mb-2 text-gray-500 uppercase tracking-[0.3em]">
          Work
        </h2>
        <h3 className="text-4xl font-semibold mb-10">Selected Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ProjectList.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
