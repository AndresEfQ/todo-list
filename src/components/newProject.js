import $ from 'jquery';
import addPorject from '../logic/addProject';
import '../styles/globals.css';
import '../styles/newProject.css';

export default function newProject() {
  $(() => {
    function cancelNewProject() {
      $('.new-project').remove();
    }

    function addNewProject() {
      if (!$('#name').val()) {
        alert('Please choose a project name');
        return;
      }
      addPorject($('#name').val());
      $('.new-project').remove();
    }

    const cancelButton = $('<button type="button" id="cancel">Cancel</button>');
    cancelButton.on('click', cancelNewProject);

    const addButton = $('<button type="button" id="add">Add</button>');
    addButton.on('click', addNewProject);

    const newProjectElement = $(
      `<div class="new-project">
        <div class="new-project__header">
          Add project
        </div>
        <form action="#" method="GET" id="new-project-form">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
        </form>
        <div className="new-project__footer">
        </div>
      </div>`,
    );

    newProjectElement.append(
      $($('<div class="new-project__footer"></div>')).append(cancelButton, addButton),
    );

    $('#content').append(newProjectElement);
  });
}
