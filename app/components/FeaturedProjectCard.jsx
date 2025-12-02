"use client";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function FeaturedProjectCard({
  title,
  image,
  tags = [],
  desc,
  featured = false,
  codeLink,
  liveLink,
}) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border shadow-md hover:shadow-xl transition relative">
      {/* Featured Badge */}
     

      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-60 object-cover" />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 px-3 py-1 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {codeLink && (
            <a
  href={codeLink}
  target="_blank"
  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md shadow hover:bg-gray-700 transition"
>
  <FaGithub size={18} /> Code
</a>
          )}
          {liveLink && (
            <a
      href={liveLink}
      target="_blank"
      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition"
    >
      <FiExternalLink size={18} /> Live
    </a>
          )}
        </div>
      </div>
    </div>
  );
}
