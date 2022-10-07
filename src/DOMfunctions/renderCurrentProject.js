import options from "../assets/icons/menu-dots.png";
import add from "../assets/icons/plus.png";
import settings from "../assets/icons/settings-sliders.png";
import newTask from "../components/newTask";
import $ from "jquery";

export default function renderCurrentProject(project, element = $('main')) {
  element.html('');
  const projectElement = $(
    `<div id="current_project">
      <div id="project_header">
        <h2 id="projectTitle">${project.name}</h2>
        <button type="button"><img src=${options} alt="options" /></button>
        <button type="button"><img src=${settings} alt="settings" /></button>
      </div>
    </div>`
  );
  const tasks = $(`<div class="tasks"></div>`);
  
  project.tasks.forEach((task) => {
    const taskElement = $(
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
    tasks.append(taskElement);
  });

  const addTask = $(
    `<div class="add_task">
      <img src=${add} alt="add task" />
      <p>Add task</p>
    </div>`
  ).on('click', newTask);

  element.append(projectElement.append(tasks), addTask);
}

