"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(null); // null = checking auth

  // Check admin authentication via API
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin-auth-check");
        const data = await res.json();
        if (!data.isAdmin) {
          router.push("/x7h9-admin-secret-login");
        } else {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error(err);
        router.push("/x7h9-admin-secret-login");
      }
    };
    checkAuth();
  }, [router]);

  // Fetch projects after authentication
  useEffect(() => {
    if (!isAdmin) return;
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data.projects);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [isAdmin]);

  const handleAddProject = () => {
    router.push("/admin-dashboard/AddProject");
  };

  const handleEdit = (project) => {
    router.push(
      `/admin-dashboard/AddProject?` +
        `id=${project._id}` +
        `&title=${encodeURIComponent(project.title)}` +
        `&image=${encodeURIComponent(project.image)}` +
        `&tags=${encodeURIComponent(project.tags.join(","))}` +
        `&desc=${encodeURIComponent(project.desc)}`
    );
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      await fetch("/api/projects", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      setProjects(projects.filter((p) => p._id !== id));
      alert("Project deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  if (isAdmin === null || loading) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <button
          onClick={handleAddProject}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          + Add New Project
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            image={project.image}
            tags={project.tags}
            desc={project.desc}
            onEdit={() => handleEdit(project)}
            onDelete={() => handleDelete(project._id)}
          />
        ))}
      </div>
    </div>
  );
}
