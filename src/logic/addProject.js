/* import addTask from "./addTask.js"; 
import removeTask from "./removeTask.js"; */
import app from "../app.js";

export default function addProject (projectName) {

  function project (name) {
    let isSelected = true;
    let tasks = [];
    return {
      name, isSelected, tasks/* , addTask, removeTask */
    }
  }

  app().addProject(project(projectName));
}