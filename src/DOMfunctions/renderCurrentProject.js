import options from "../assets/icons/menu-dots.png";
import settings from "../assets/icons/settings-sliders.png";
import $ from "jquery";

export default function renderCurrentProject(project) {

  let projectElement = $(
    `<div id="current_project">
      <div id="project_header">
        <h2 id="projectTitle">Sample Project</h2>
        <button type="button"><img src=${options} alt="options" /></button>
        <button type="button"><img src=${settings} alt="settings" /></button>
      </div>
      <div class="tasks"></div>
    </div>`
  );

  $('main').append(projectElement);

  project.tasks.forEach((task) => {
    let taskElement = $(
      `<div class="todos">
        <div class="todo">
          <input type="checkbox" />
          <div class="todo_content">
            <h4>${task.title}</h4>
            <p>${task.description}</p>
            <span>${task.dueDate}</span>
          </div>
        </div>
      </div>`
    );
    $('.tasks').append(taskElement);
  })
}

