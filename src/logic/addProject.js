import remove from "../assets/icons/trash.png";
import addTask from "./addTask.js"; 
import removeTask from "./removeTask.js";
import projectsArray from "../app.js";
import $ from "jquery";

export default function addProject (projectName) {

  function project (name) {
    let tasks = [];
    return {
      name, tasks, addTask, removeTask
    }
  }

  projectsArray().push(project(projectName));
  console.log(projectsArray());

  $('#projects').html('');

  projectsArray().forEach(element => {
    const project = $(
      `<div class="project">
      ${element.name}
      <button>
      <img src=${remove} alt="remove" />
      </button>
      </div>`
    );
    console.log(project[0]);
    $('#projects').append(project[0]);
  });
}