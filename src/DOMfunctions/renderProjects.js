import remove from "../assets/icons/trash.png";
import renderCurrentProject from "./renderCurrentProject.js";
import app from "../app.js";
import $ from "jquery";

function handleRemove(projectName) {
  if (confirm(`Are you sure you want to remove the project ${projectName}?`)) {
    app().removeProject(projectName);
  }
}

function handleRenderCurrentProject(projectName) {

}

export default function renderProjects(array) {
  $(function () {
    $('#projects').html('');

    array.forEach(project => {
      const projectName = project.name
      const projectDiv = $(
        `<div class="project">
        ${projectName}
        </div>`
      ).on('click', () => renderCurrentProject(app().selectProject(projectName)));
      const removeProjectDiv = $(
        `<button>
        <img src=${remove} alt="remove" />
        </button>`)
      .data('data-project', projectName)
      .on('click', () => {handleRemove(projectName)});
      projectDiv.append(removeProjectDiv);
      $('#projects').append(projectDiv);
    });
  })
}