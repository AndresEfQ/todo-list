import $ from 'jquery';
import add from '../assets/icons/plus.png';
import newProject from './newProject';
import '../styles/aside.css';
import renderProjects from '../DOMfunctions/renderProjects';

export default function aside() {
  $(() => {
    // HTML structure
    const asideElement = $(
      '<aside class="toggleable"></aside>',
    );

    // Add the event listener to add new project
    const projectsTitle = $(
      '<div class="project" id="projects-title"><strong>Projects</strong></div>',
    )
      .append($($(`<button class="add-project"><img src=${add} alt="add" /></button>`))
        .on('click', newProject));

    const projectsDiv = $('<div id=\'projects\'></div>');

    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    renderProjects(projects);

    asideElement.append(projectsTitle, projectsDiv);
    $('.container').append(asideElement);
  });
}
