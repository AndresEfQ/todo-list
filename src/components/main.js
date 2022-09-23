import $ from "jquery";
import "../styles/globals.css";
import "../styles/main.css";
import options from "../assets/icons/menu-dots.png";
import settings from "../assets/icons/settings-sliders.png";
import add from "../assets/icons/plus.png";

export default function main () {
  $(function () {
    const mainElement = $(`<main class="toggleable"></main>`);
/*     const shade = $('<div class="shade toggleable"></div>'); */
    const sampleProject = $(
      `<div id="current_project">
        <div id="project_header">
          <h2 id="projectTitle">Sample Project</h2>
          <img src=${options} alt="options" />
          <img src=${settings} alt="settings" />
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
    $('.container').append(mainElement);
  });
}