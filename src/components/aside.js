import $ from "jquery";
import inboxIcon from "../assets/icons/envelope-open-text.png";
import todayIcon from "../assets/icons/calendar-check.png";
import upcomingIcon from "../assets/icons/calendar.png";
import add from "../assets/icons/plus.png";
import remove from "../assets/icons/trash.png";
import newProject from "./newProject.js";
import projectsArray from "../app.js";
import "../styles/aside.css";

export default function aside() {
  $(function () {
    const asideElement = $(
      `<aside class="toggleable"></aside>`
    );
    const inbox = $(
      `<div id='inbox'>
        <img src=${inboxIcon} alt="inbox" />
        <p>Inbox</p>
        <span>3</span>
      </div>`
    );
    const today = $(
      `<div id='today'>
        <img src=${todayIcon} alt="today" />
        <p>today</p>
        <span>3</span>
      </div>`
    );
    const upcoming = $(
      `<div id='upcoming'>
        <img src=${upcomingIcon} alt="upcoming" />
        <p>upcoming</p>
        <span>3</span>
      </div>`
    );
    const addProject = $(
      `<button>
      <img src=${add} alt="add" />
      </button>`
      );
    addProject.on('click', newProject);
    const projectsTitle = $(`<div id="projects-title"><strong>Projects</strong></div>`);
    projectsTitle.append(addProject);
    const projectsDiv = $(
      `<div id='projects'></div>`
    );
   /*  projectsDiv.append($(`<div><strong>Projects</strong></div>`).append(addProject)); */

    /* const sampleProject = $(
      `<div>
        Sample Project
        <button>
            <img src=${remove} alt="add" />
          </button>
      </div>`
    );
    projectsDiv.append(sampleProject); */

    asideElement.append(inbox, today, upcoming, projectsTitle, projectsDiv);
    $('.container').append(asideElement);
  });
}