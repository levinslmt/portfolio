import React from "react";

const Card = ({ title, description, image, tags, githubLink, liveLink }) => {
  return (
    <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-black transition-all duration-300 flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden border-b border-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover  transition-all duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold uppercase tracking-tight">{title}</h3>
        
        <p className="mt-3 text-gray-600 font-mono text-sm leading-relaxed grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[12px] font-mono border border-gray-400 px-2 py-1 rounded uppercase tracking-widest text-gray-900"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-4 mt-6 pt-6 border-t border-gray-100">
          <a
            href={githubLink}
            className="flex items-center gap-2 text-sm font-mono hover:underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            Code
          </a>
          <a
            href={liveLink}
            className="flex items-center gap-2 text-sm font-mono hover:underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;