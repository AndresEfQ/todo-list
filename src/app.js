import render from "./DOMfunctions/renderProjects.js";

let projectsArray = JSON.parse(localStorage.getItem('projects')) || [];

function saveToLocal() {
  localStorage.setItem('projects', JSON.stringify(projectsArray));
}

function addProject(project) {
  projectsArray.push(project);
  saveToLocal();
  render(projectsArray);
}

function removeProject (projectName) {
  projectsArray = projectsArray.filter((project) => {
    return project.name !== projectName
  })
  saveToLocal();
  render(projectsArray);
} 

export default function app() {
  return {
    addProject,
    removeProject
  };
}