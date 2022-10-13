import $ from 'jquery';
import app from '../app';
import addTask from '../logic/addTask';
import renderCurrentProject from '../DOMfunctions/renderCurrentProject';
import '../styles/globals.css';
import '../styles/newTask.css';

export default function newTask() {
  $(() => {
    function cancelNewTask() {
      $('.new-task').remove();
    }

    function handleAddTask() {
      if (!$('#title').val() || !$('#dueDate').val()) {
        alert('Please complete at least the task title and due date');
        return;
      }
      const currentProject = app().findSelectedProject();
      const taskArgs = {
        project: currentProject,
        title: $('#title').val(),
        description: $('#description').val(),
        dueDate: $('#dueDate').val(),
      };
      addTask(taskArgs);
      renderCurrentProject(currentProject);
      app().saveToLocal();
      $('.new-task').remove();
    }

    const cancelButton = $('<button type="button" id="cancel">Cancel</button>')
      .on('click', cancelNewTask);

    const addButton = $('<button type="button" id="add">Add Task</button>')
      .on('click', handleAddTask);

    const newTaskElement = $(
      `<div class="new-task">
        <form action="#" method="GET" id="new-task-form">
          <label for="title">Title</label>
          <input type="text" id="title" name="name" />
          <label for="description">Description</label>
          <textarea id="description" name="description" rows="5" cols="33"></textarea>
          <label for="dueDate">Due Date</label>
          <input type="datetime-local" id="dueDate" name="dueDate" />
        </form>
        <div className="new-task__footer">
        </div>
      </div>`,
    );

    newTaskElement.append(
      $($('<div class="new-task__footer"></div>')).append(cancelButton, addButton),
    );

    $('#content').append(newTaskElement);
  });
}
