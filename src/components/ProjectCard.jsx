import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-black">
      <img className="w-full rounded-md mb-4" src={project.src} alt={project.title} />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>
      <a className="text-white font-bold bg-gray-700 hover:bg-gray-800 py-2 px-4 rounded" href={project.url} target="_blank" rel="noreferrer">
        View Code
      </a>
    </div>
  );
};

export default ProjectCard;
