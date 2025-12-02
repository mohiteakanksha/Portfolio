"use client";

import { useState, useEffect } from "react";
import SkillCard from "./SkillCard";

export default function Skills() {
  const [skillsData, setSkillsData] = useState({
    frontend: [],
    backend: [],
    database: [],
    tools: [],
  });

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("/api/skills");
        const data = await res.json();
        setSkillsData({
          frontend: data.frontend || [],
          backend: data.backend || [],
          database: data.database || [],
          tools: data.tools || [],
        });
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div id="Skills" className="w-full flex flex-col items-center py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <h1 className="text-5xl font-bold text-center">
        Skills <span className="text-purple-600">& Technologies</span>
      </h1>
      <p className="text-gray-600 mt-4 text-center text-lg">
        Complete Toolkit for Building Modern Digital Experiences
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-16 max-w-6xl w-full">
        <SkillCard title="Frontend" color="#C084FC" skills={skillsData.frontend} />
        <SkillCard title="Backend" color="#F472B6" skills={skillsData.backend} />
        <SkillCard title="Database" color="#34D399" skills={skillsData.database} />
        <SkillCard title="Tools & Others" color="#3B82F6" skills={skillsData.tools} />
      </div>
    </div>
  );
}
