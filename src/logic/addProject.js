import addTask from "./addTask.js"; 
import removeTask from "./removeTask.js";

let projects = []

export default function addProject (projectName) {

  function project (name) {
    tasks = [];
    return {
      name, tasks, addTask, removeTask
    }
  }

  projects.push(project(projectName));
}