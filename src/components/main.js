import $ from "jquery";
import "../styles/globals.css";
import "../styles/main.css";
import options from "../assets/icons/menu-dots.png";
import settings from "../assets/icons/settings-sliders.png";

export default function main () {
  $(document).ready(function () {
    const sampleProject = $(
      `<div id="current-project">
        <div id="project-header">
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
            <div class="todo-content">
              <h4>Investigar TODO</h4>
              <p>Una task con una descripción muy larga que no quepa en la vista general del proyecto para saber como se debería comportar y de esta forma copiar el comportamiento en mi propia aplicación de TODO para el proyecto Odin</p>
              <input type="date" />
            </div>
          </div>
        </div>`
    );
    const mainDiv = $(`<main></main>`);
    sampleProject.append(sampleTask);
    mainDiv.append(sampleProject);
    $('#content').append(mainDiv);
  });
}