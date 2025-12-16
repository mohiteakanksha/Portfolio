
"use client";
export const dynamic = "force-dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddProject() {
  const params = useSearchParams();
  const id = params.get("id");
  const isEditing = Boolean(id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [desc, setDesc] = useState("");
  const [codeLink, setCodeLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 Load project when editing
  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json();

        setTitle(data.title || "");
        setImage(data.image || "");
        setTags(data.tags?.join(", ") || "");
        setDesc(data.desc || "");
        setCodeLink(data.codeLink || "");
        setLiveLink(data.liveLink || "");
      } catch (err) {
        console.error("Edit load error:", err);
      }
    };

    fetchProject();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const projectData = {
      title,
      image,
      tags: tags.split(",").map((t) => t.trim()),
      desc,
      codeLink,
      liveLink,
    };

    try {
      const res = await fetch(
        isEditing ? `/api/projects/${id}` : "/api/projects",
        {
          method: isEditing ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(projectData),
        }
      );

      setMessage(
        res.ok
          ? isEditing
            ? "Project updated!"
            : "Project added!"
          : "Something went wrong"
      );
    } catch {
      setMessage("Failed to save project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow rounded-xl">
      <h1 className="text-3xl font-bold mb-5">
        {isEditing ? "Edit Project" : "Add New Project"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input type="file" accept="image/*" onChange={handleImageChange} />

        {image && (
          <img
            src={image}
            className="w-full h-48 object-cover rounded border"
            alt="Preview"
          />
        )}

        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma separated)"
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="w-full border px-3 py-2 rounded"
        />

        <input
          value={codeLink}
          onChange={(e) => setCodeLink(e.target.value)}
          placeholder="GitHub Code Link"
          className="w-full border px-3 py-2 rounded"
        />

        <input
          value={liveLink}
          onChange={(e) => setLiveLink(e.target.value)}
          placeholder="Live Website Link"
          className="w-full border px-3 py-2 rounded"
        />

        <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">
          {loading ? "Saving..." : isEditing ? "Update Project" : "Add Project"}
        </button>

        {message && <p className="text-green-600 text-center">{message}</p>}
      </form>
    </div>
  );
}
