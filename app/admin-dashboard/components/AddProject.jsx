"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProject() {
  const params = useSearchParams();
  const router = useRouter();

  const [title, setTitle] = useState(params.get("title") || "");
  const [image, setImage] = useState(params.get("image") || "");
  const [tags, setTags] = useState(params.get("tags") || "");
  const [desc, setDesc] = useState(params.get("desc") || "");
  const [featured, setFeatured] = useState(params.get("featured") === "true");
  const [codeLink, setCodeLink] = useState(params.get("codeLink") || "");
  const [liveLink, setLiveLink] = useState(params.get("liveLink") || "");
  const [message, setMessage] = useState("");

  const isEditing = params.get("title") !== null;

  // Handle selecting image from gallery
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImage(reader.result); // base64 image preview
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = {
      title,
      image,
      tags: tags.split(",").map((t) => t.trim()),
      desc,
      featured,
      codeLink,
      liveLink,
    };

    try {
      const res = await fetch("/api/projects", {
        method: isEditing ? "PUT" : "POST", // use PUT if editing
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(isEditing ? "Project updated!" : "Project added!");
        if (!isEditing) {
          setTitle("");
          setImage("");
          setTags("");
          setDesc("");
          setFeatured(false);
          setCodeLink("");
          setLiveLink("");
        }
        // Redirect to projects page if needed
        // router.push("/admin-dashboard");
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to save project");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow rounded-xl">
      <h1 className="text-3xl font-bold mb-5">
        {isEditing ? "Edit Project" : "Add New Project"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          className="w-full border px-3 py-2 rounded"
          required
        />

        {/* Image Picker */}
        <div>
          <label className="block mb-2 font-medium">Project Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer"
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-3 w-full h-60 object-cover rounded-md border"
            />
          )}
        </div>

        {/* Tags */}
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma separated)"
          className="w-full border px-3 py-2 rounded"
        />

        {/* Description */}
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="w-full border px-3 py-2 rounded"
        />

        {/* Code & Live Links */}
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

        {/* Featured Checkbox */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="w-4 h-4"
          />
          Featured Project
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full"
        >
          {isEditing ? "Update Project" : "Add Project"}
        </button>

        {message && <p className="mt-2 text-center text-green-600">{message}</p>}
      </form>
    </div>
  );
}
