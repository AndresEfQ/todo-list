/* import addTask from "./addTask.js"; 
import removeTask from "./removeTask.js"; */
import app from "../app.js";

export default function addProject (projectName) {

  function project (name) {
    let tasks = [];
    return {
      name, tasks/* , addTask, removeTask */
    }
  }

  app().addProject(project(projectName));
}