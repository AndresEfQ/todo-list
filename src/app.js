import render from './DOMfunctions/renderProjects';
import renderCurrentProject from './DOMfunctions/renderCurrentProject';

let projectsArray = JSON.parse(localStorage.getItem('projects')) || [];

function saveToLocal() {
  localStorage.setItem('projects', JSON.stringify(projectsArray));
}

function addProject(project) {
  projectsArray.forEach((element) => {
    element.isSelected = false;
  });
  projectsArray.push(project);
  saveToLocal();
  render(projectsArray);
}

function removeProject(projectName) {
  projectsArray = projectsArray.filter((project) => project.name !== projectName);
  saveToLocal();
  render(projectsArray);
}

function selectProject(projectName) {
  const currentProject = projectsArray.find((project) => project.name === projectName);
  if (currentProject) {
    projectsArray.forEach((element) => {
      element.isSelected = false;
    });
    currentProject.isSelected = true;
    return currentProject;
  }
  return projectsArray.find((project) => project.isSelected === true);
}

function findSelectedProject() {
  return projectsArray.find((project) => project.isSelected === true);
}

function completeTask(projectName, taskTitle) {
  const currentProject = projectsArray.find((project) => project.name === projectName);
  const currentTask = currentProject.tasks.find((task) => task.title === taskTitle);
  currentTask.isCompleted = true;
  alert(`${taskTitle} completed`);
  renderCurrentProject(currentProject);
  saveToLocal();
}

export default function app() {
  return {
    addProject,
    saveToLocal,
    removeProject,
    selectProject,
    findSelectedProject,
    completeTask,
  };
}
