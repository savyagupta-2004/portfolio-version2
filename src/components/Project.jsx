import React from "react";

const Project = ({ title, description, href, image, tags, github }) => {
  return (
    <div className="relative flex flex-col rounded-2xl overflow-hidden shadow-lg border border-neutral-700 backdrop-blur-sm bg-black/40 hover:bg-black/60 transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover opacity-90"
      />

      <div className="flex flex-col justify-between p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="text-xs px-2 py-1 rounded-full bg-purple-700/30 border border-purple-500 text-purple-300"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>

        <div className="flex gap-4 mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-black transition-all shadow-lg shadow-purple-500/30"
            >
              GitHub
            </a>
          )}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm border border-green-500 text-green-300 hover:bg-green-500 hover:text-black transition-all shadow-lg shadow-green-500/30"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
