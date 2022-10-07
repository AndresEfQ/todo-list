import app from "../app";
import "../styles/globals.css";
import "../styles/newTask.css";
import $ from "jquery";

export default function newTask() {
  $(function () {
    console.log('new task');

    function cancelNewTask() {
      $('.new-task').remove();
    }

    function handleAddTask() {
      const currentProject = app().findSelectedProject();
      console.log(currentProject);
      const taskArgs = {
        title: $('#title').val(),
        description: $('#description').val(),
        dueDate: $('#dueDate').val()
      }
      currentProject.handleAddTask(taskArgs);
      $('.new-task').remove();
      console.log(currentProject.tasks)
    }

    const cancelButton = $('<button type="button" id="cancel">Cancel</button>');
    cancelButton.on('click', cancelNewTask);

    const addButton = $('<button type="button" id="add">Add Task</button>');
    addButton.on('click', handleAddTask);

    const newTaskElement = $(
      `<div class="new-task">
        <form action="#" method="GET" id="new-task-form">
          <label for="title">Title</label>
          <input type="text" id="title" name="name" />
          <label for="description">Description</label>
          <textarea id="description" name="description" rows="5" cols="33"></textarea>
          <label for="dueDate">Due Date</label>
          <input type="date" id="dueDate" name="dueDate" />
        </form>
        <div className="new-task__footer">
        </div>
      </div>`
    );

    newTaskElement.append(
      $($('<div class="new-task__footer"></div>')).append(cancelButton, addButton)
    );

    $('#content').append(newTaskElement);
  });
}