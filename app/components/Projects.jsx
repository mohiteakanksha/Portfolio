"use client";

import FeaturedProjectCard from "./FeaturedProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Task Management App",
      image: "/projects/task-app.png",
      desc:
        "Collaborative task management application with real-time updates, team features, and analytics dashboard.",
      tags: ["TypeScript", "React", "Firebase", "Tailwind"],
      featured: true,
      codeLink: "https://github.com/yourusername/task-app",
      liveLink: "https://task-app-demo.com",
    },
    {
      title: "Mobile UI Showcase",
      image: "/projects/mobile-ui.png",
      desc:
        "A collection of mobile UI concepts designed with modern layouts and smooth UX patterns.",
      tags: ["Figma", "UI/UX", "Prototyping"],
      featured: false,
      codeLink: "https://github.com/yourusername/mobile-ui",
      liveLink: "https://mobile-ui-demo.com",
    },
  ];

  return (
    <section id="Projects"
     className="py-20 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center mb-4">
        Featured <span className="text-purple-600">Projects</span>
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        A selection of my recent work showcasing various technologies and approaches.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectList.map((project, index) => (
          <FeaturedProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
