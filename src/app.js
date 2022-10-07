import render from "./DOMfunctions/renderProjects.js";

let projectsArray = JSON.parse(localStorage.getItem('projects')) || [];

function saveToLocal(objectName) {
  localStorage.setItem(objectName, JSON.stringify(projectsArray));
}

function addProject(project) {
  projectsArray.forEach(project => {
    project.isSelected = false;
  });
  projectsArray.push(project);
  saveToLocal('projects');
  render(projectsArray);
}

function removeProject(projectName) {
  projectsArray = projectsArray.filter(project => project.name !== projectName)
  saveToLocal('projects');
  render(projectsArray);
}

function selectProject(projectName) {
  let currentProject = projectsArray.find(project => {
    return project.name == projectName;
  });
  if (currentProject) {
    projectsArray.forEach(project => {
      project.isSelected = false;
    });
    currentProject.isSelected = true;
    return currentProject;
  } else {
    return projectsArray.find(project => project.isSelected == true);
  }
}

function findSelectedProject() {
  return projectsArray.find(project => project.isSelected == true);
}

export default function app() {
  return {
    addProject,
    removeProject,
    selectProject,
    findSelectedProject,
  };
}