import React from 'react';
import ProjectCard from './ProjectCard';
import tic from "../assets/portfolio/tic.jpg";
import ToDo from "../assets/portfolio/ToDo.jpg";
import Gallary from "../assets/portfolio/Gallary.jpg";
const projects = [
  {
    title: '4x4 tic-tac-toe',
    description: 'This is a project about ...',
    src: tic,
    url: 'https://github.com/saikab/4x4-tic-tac-toe'
  },
  {
    title: 'To-do-app using Reducer',
    description: 'This is a project about ...',
    src:ToDo,
    url: 'https://github.com/saikab/to-do-app-using-reducer-hook'
  },
  {
    title: "Saikab's photo gallary",
    description: 'This is a project about ...',
    src:Gallary,
    url: 'https://t766is.csb.app/'
  }
];

const Portfolio = () => {
  return (
    <section className="bg-white text-black py-20" name="portfolio">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
