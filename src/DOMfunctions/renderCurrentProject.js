import options from "../assets/icons/menu-dots.png";
import add from "../assets/icons/plus.png";
import settings from "../assets/icons/settings-sliders.png";
import newTask from "../components/newTask";
import { format, isSameWeek } from 'date-fns'
import $ from "jquery";
import { parseISO } from "date-fns/esm";

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

  function formatDate(date) {
    const dateObj = parseISO(date);
    if (isSameWeek(new Date(), dateObj)) {
      return format(dateObj, 'EEEE');
    } else {
      return format(dateObj, 'EEEE');
    }
  }

  project.tasks.forEach((task) => {
    const formatedDate = formatDate(task.dueDate);
    const taskElement = $(
      `<div class="todos">
        <div class="todo">
          <input type="checkbox" />
          <div class="todo_content">
            <h4>${task.title}</h4>
            <p>${task.description}</p>
            <span>${formatedDate}</span>
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

