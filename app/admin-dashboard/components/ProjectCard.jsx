"use client";

export default function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border w-[300px]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-purple-200 text-purple-700 px-2 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm mb-4">{project.desc}</p>

        <div className="flex justify-between">
          <button
            onClick={() => onEdit(project._id)}
            className="px-4 py-1 bg-blue-500 text-white rounded"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(project._id)}
            className="px-4 py-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
