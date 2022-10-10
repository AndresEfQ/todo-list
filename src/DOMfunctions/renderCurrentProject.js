import add from "../assets/icons/plus.png";
import newTask from "../components/newTask";
import formatDate from "./formatDate";
import app from "../app";
import $ from "jquery";

export default function renderCurrentProject(project, element = $('main')) {
  element.html('');
  const projectElement = $(
    `<div id="current_project">
      <div id="project_header">
        <h2 id="projectTitle">${project.name}</h2>
      </div>
    </div>`
  );
  const tasks = $(`<div class="tasks"></div>`);

  project.tasks.forEach((task) => {
    if (!task.isCompleted) {
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
      ).on('change', () => app().completeTask(project.name, task.title));
      tasks.append(taskElement);
    } 
  });

  const addTask = $(
    `<div class="add_task">
      <img src=${add} alt="add task" />
      <p>Add task</p>
    </div>`
  ).on('click', newTask);

  element.append(projectElement.append(tasks), addTask);
}

