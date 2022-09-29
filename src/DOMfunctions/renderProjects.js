import remove from "../assets/icons/trash.png";
import app from "../app.js";
import $ from "jquery";

function handleRemove(elementName) {
  if (confirm(`Are you sure you want to remove the project ${elementName}?`)) {
    app().removeProject(elementName);
  }
}

export default function renderProjects(array) {
  $(function () {
    console.log('rendering');
    $('#projects').html('');
  
    array.forEach(element => {
      const elementName = element.name
      const project = $(
        `<div class="project" data-project>
        ${elementName}
        </div>`
      );
      const removeProject = $(
        `<button>
        <img src=${remove} alt="remove" />
        </button>`)
      .data('data-project', elementName)
      .on('click', () => {handleRemove(elementName)});
      project.append(removeProject);
      $('#projects').append(project);
    });
  })
}