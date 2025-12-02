"use client";

import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div id="Skills" 
    className="w-full flex flex-col items-center py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      
      {/* Title */}
      <h1 className="text-5xl font-bold text-center">
        Skills <span className="text-purple-600">& Technologies</span>
      </h1>

      <p className="text-gray-600 mt-4 text-center text-lg">
        My toolkit for building modern web applications
      </p>

      {/* 3 Cards */}
      <div className="grid grid-cols-4 gap-10 mt-16 max-w-6xl w-full">




        <SkillCard
          title="Frontend"
          color="#C084FC"
          skills={[
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Vue.js",
            "HTML/CSS",
            "JavaScript",
            "Redux",
          ]}
        />

        <SkillCard
          title="Backend"
          color="#F472B6"
          skills={[
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "GraphQL",
            "REST APIs",
            "Redis",
            "Prisma",
          ]}
        /> 

        <SkillCard
          title="Database"
          color="#34D399"
          skills={[
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "GraphQL",
            "REST APIs",
            "Redis",
            "Prisma",
          ]}
        />

        <SkillCard
          title="Tools & Others"
          color="#3B82F6"
          skills={[
            "Git",
            "Docker",
            "AWS",
            "CI/CD",
            "Jest",
            "Figma",
            "Linux",
            "Vercel",
          ]}
        />
      </div>
    </div>
  );
}
