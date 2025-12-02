export default function ProjectCard({ title, image, tags = [], desc, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition w-full md:w-[300px]">
      
      {/* Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        
        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-purple-200 text-purple-700 px-2 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{desc}</p>

        {/* Buttons */}
        <div className="flex justify-between">
          <button 
            onClick={onEdit} 
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>

          <button 
            onClick={onDelete} 
            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
