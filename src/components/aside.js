import $ from "jquery";
import inboxIcon from "../assets/icons/envelope-open-text.png";
import todayIcon from "../assets/icons/calendar-check.png";
import upcomingIcon from "../assets/icons/calendar.png";
import add from "../assets/icons/plus.png";
import remove from "../assets/icons/trash.png";
import newProject from "./newProject.js";
import projectsArray from "../app.js";
import "../styles/aside.css";
import renderProjects from "../DOMfunctions/renderProjects";

export default function aside() {
  $(function () {

    // HTML structure
    const asideElement = $(
      `<aside class="toggleable"></aside>`
    );

    // Add the event listener to add new project
    const projectsTitle = $(
      `<div class="project" id="projects-title"><strong>Projects</strong></div>`)
      .append($($(`<button class="add-project"><img src=${add} alt="add" /></button>`))
      .on('click', newProject)
    );

    const projectsDiv = $(`<div id='projects'></div>`);

    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    renderProjects(projects);

    asideElement.append(/* today, upcoming, */ projectsTitle, projectsDiv);
    $('.container').append(asideElement);
  });
}