"use client";

import { useState, useEffect } from "react";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function Projects() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        if (data.projects) setProjectList(data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="Projects" className="py-20 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center mb-4">
        Featured <span className="text-purple-600">Projects</span>
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        A selection of my recent work showcasing various technologies and approaches.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectList.map((project) => (
          <FeaturedProjectCard key={project._id} {...project} />
        ))}
      </div>
    </section>
  );
}
