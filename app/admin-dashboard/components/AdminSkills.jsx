"use client";
import { useEffect, useState } from "react";
import { Pencil, Check, X } from "lucide-react";

export default function Skill() {
  const [skills, setSkills] = useState({
    frontend: [],
    backend: [],
    database: [],
    tools: [],
  });

  const [editing, setEditing] = useState({
    frontend: false,
    backend: false,
    database: false,
    tools: false,
  });

  const [newSkill, setNewSkill] = useState({
    frontend: "",
    backend: "",
    database: "",
    tools: "",
  });

  // -----------------------------
  // ✅ LOAD SKILLS FROM DATABASE
  // -----------------------------
  useEffect(() => {
    async function loadSkills() {
      try {
        const res = await fetch("/api/skills");
        const data = await res.json();

        if (data) {
          setSkills({
            frontend: data.frontend || [],
            backend: data.backend || [],
            database: data.database || [],
            tools: data.tools || [],
          });
        }
      } catch (error) {
        console.error("Error loading skills:", error);
      }
    }

    loadSkills();
  }, []);

  // -----------------------------
  // ✅ SAVE ALL CHANGES MANUALLY (SAVE BUTTON)
  // -----------------------------
  const saveSkills = async () => {
    try {
      await fetch("/api/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(skills),
      });

      alert("Skills saved successfully!");
    } catch (error) {
      console.error("Error saving:", error);
    }
  };

  // -----------------------------
  // SAVE IMMEDIATELY AFTER EDIT (auto-save)
  // -----------------------------
  const saveToDatabase = async (updatedSkills) => {
    try {
      await fetch("/api/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSkills),
      });
    } catch (error) {
      console.error("Failed to save skills:", error);
    }
  };

  // -----------------------------
  // ADD SKILL
  // -----------------------------
  const handleAddSkill = (category) => {
    if (newSkill[category].trim() === "") return;

    const updated = {
      ...skills,
      [category]: [...skills[category], newSkill[category].trim()],
    };

    setSkills(updated);
    saveToDatabase(updated);

    setNewSkill({ ...newSkill, [category]: "" });
  };

  // -----------------------------
  // REMOVE SKILL
  // -----------------------------
  const handleRemoveSkill = (category, skillToRemove) => {
    const updated = {
      ...skills,
      [category]: skills[category].filter((s) => s !== skillToRemove),
    };

    setSkills(updated);
    saveToDatabase(updated);
  };

  const categories = [
    { key: "frontend", name: "Frontend", color: "bg-purple-500" },
    { key: "backend", name: "Backend", color: "bg-pink-500" },
    { key: "database", name: "Database", color: "bg-green-500" },
    { key: "tools", name: "Tools & Others", color: "bg-blue-500" },
  ];

  const sectionStyle =
    "flex flex-col gap-4 p-6 bg-white shadow-md rounded-xl w-full relative";

  const badgeStyle =
    "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium";

  const editBtn =
    "absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200";

  return (
    <div className="w-full p-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold">
          Skills <span className="text-purple-600">& Technologies</span>
        </h1>

        {/* ⭐ SAVE BUTTON HERE */}
        <button
          onClick={saveSkills}
          className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700"
        >
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map(({ key, name, color }) => (
          <div key={key} className={sectionStyle}>
            <button
              className={editBtn}
              onClick={() => setEditing({ ...editing, [key]: !editing[key] })}
            >
              <Pencil size={18} />
            </button>

            <div className={`h-1 w-12 rounded-full ${color}`}></div>
            <h2 className="text-2xl font-bold">{name}</h2>

            <div className="flex flex-wrap gap-2 mb-2">
              {skills[key].map((s, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className={badgeStyle}>{s}</span>
                  {editing[key] && (
                    <button
                      onClick={() => handleRemoveSkill(key, s)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {editing[key] && (
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder={`Add new ${name}`}
                  value={newSkill[key]}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, [key]: e.target.value })
                  }
                  className="border rounded px-2 py-1 flex-1"
                />
                <button
                  onClick={() => handleAddSkill(key)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  <Check size={16} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
