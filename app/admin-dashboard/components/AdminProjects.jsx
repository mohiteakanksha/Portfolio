"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 📦 Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });
        const data = await res.json();
        setProjects(data.projects || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleAddProject = () => {
    router.push("/admin-dashboard/add-project");
  };

  const handleEdit = (id) => {
    router.push(`/admin-dashboard/add-project?id=${id}`);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;

    await fetch("/api/projects", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    setProjects((prev) => prev.filter((p) => p._id !== id));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <button
          onClick={handleAddProject}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          + Add New Project
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
