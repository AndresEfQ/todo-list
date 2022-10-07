import addTask from "./addTask.js"; 
import removeTask from "./removeTask.js";
import app from "../app.js";

export default function addProject (projectName) {

  function project (name) {
    let isSelected = true;
    let tasks = [];

    const handleAddTask = function (title, description, dueDate) {
      tasks.push(addTask({title, description, dueDate}));
    };

    const removeTask = function () {
      removeTask();
    };

    return {
      name, 
      isSelected, 
      tasks, 
      handleAddTask, 
      removeTask,
    }
  }

  app().addProject(project(projectName));
}