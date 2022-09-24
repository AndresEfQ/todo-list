import $ from "jquery";
import options from "../assets/icons/menu-dots.png";
import settings from "../assets/icons/settings-sliders.png";
import add from "../assets/icons/plus.png";
import showMain from "../DOMfunctions/showMain.js";
import "../styles/globals.css";
import "../styles/main.css";

export default function main () {
  $(function () {
    const mainElement = $(`<main class="toggleable"></main>`);
    const sampleProject = $(
      `<div id="current_project">
        <div id="project_header">
          <h2 id="projectTitle">Sample Project</h2>
          <button type="button"><img src=${options} alt="options" /></button>
          <button type="button"><img src=${settings} alt="settings" /></button>
        </div>
      </div>`
    );
    const sampleTask = $(
      `<div class="todos">
          <div class="todo">
            <input type="checkbox" />
            <div class="todo_content">
              <h4>Investigar TODO</h4>
              <p>Una task con una descripción muy larga que no quepa en la vista general del proyecto para saber como se debería comportar y de esta forma copiar el comportamiento en mi propia aplicación de TODO para el proyecto Odin</p>
              <span>today</span>
            </div>
          </div>
        </div>`
    );
    const addTask = $(
      `<div class="add_task">
        <img src=${add} alt="add task" />
        <p>Add task</p>
      </div>`
    );
    const task2 = $(
      `<div class="todos">
          <div class="todo">
            <input type="checkbox" />
            <div class="todo_content">
              <h4>Investigar TODO</h4>
              <p>Una task con una descripción muy larga que no quepa en la vista general del proyecto para saber como se debería comportar y de esta forma copiar el comportamiento en mi propia aplicación de TODO para el proyecto Odin</p>
              <input type="date" />
            </div>
          </div>
        </div>`
    );
    const tasks = $(
      '<div class="tasks"></div>'
    )
    tasks.append(sampleTask, task2);
    mainElement.append(sampleProject, tasks, addTask);
    mainElement.on('click', showMain)
    $('.container').append(mainElement);
  });
}