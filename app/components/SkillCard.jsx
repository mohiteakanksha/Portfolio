"use client";

export default function SkillCard({ title, color, skills }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition">
      {/* Top Colored Line */}
      <div
        className="h-1 w-12 rounded-full mb-4"
        style={{ background: color }}
      ></div>

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-5 text-gray-900">
        {title}
      </h2>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-1 bg-purple-100 text-gray-800 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
