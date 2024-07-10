import React from 'react';
import ProjectCard from './ProjectCard';



const projects = [
  {
      id: 1,
      title: "React Portfolio Website",
      description: "A personal portfolio website built using React.js.",
      image: "/projectsimg.jpeg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
  },
  {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication and product management.",
      image: "/projectsimg.jpeg",
      tag: ["All", "Web", "E-commerce"],
      gitUrl: "/",
      previewUrl: "/"
  },
  {
      id: 3,
      title: "Mobile Banking App",
      description: "A mobile banking application developed with React Native.",
      image: "/projectsimg.jpeg",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/"
  },
  {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard application that displays current weather conditions.",
      image: "/projectsimg.jpeg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
  },
  {
      id: 5,
      title: "Task Management Tool",
      description: "A task management tool to help users organize and track their tasks.",
      image: "/projectsimg.jpeg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
  },
  {
      id: 6,
      title: "Fitness Tracker",
      description: "A fitness tracker app that logs workouts and tracks progress.",
      image: "/projectsimg.jpeg",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/"
  }
];


function Projects() {
  return (
    <div>
      <h2 className='text-center text-4xl font-bold mt-4 mb-8 md:mb-12'>My projects</h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {projects.map((project) => <ProjectCard key={project.id} 
                                                  title={project.title} 
                                                  description={project.description}
                                                  imgUrl={project.image}/>)}</div>
    </div>
  )
}

export default Projects