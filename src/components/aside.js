import $ from "jquery";
import inboxIcon from "../assets/icons/envelope-open-text.png";
import todayIcon from "../assets/icons/calendar-check.png";
import upcomingIcon from "../assets/icons/calendar.png";
import add from "../assets/icons/plus.png";
import remove from "../assets/icons/trash.png";
import "../styles/aside.css";

export default function aside() {
  $(document).ready(function () {
    const asideDiv = $(
      `<div id='aside'></div>`
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
    const projects = $(
      `<div id='projects'>
        <div>
          <strong>Projects</strong>
          <button>
            <img src=${add} alt="add" />
          </button>
        </div>
      </div>`
    )
    const sampleProject = $(
      `<div>
        Sample Project
        <button>
            <img src=${remove} alt="add" />
          </button>
      </div>`
    );
    projects.append(sampleProject);
    asideDiv.append(inbox, today, upcoming, projects);
    $('#content').append(asideDiv);
  });
}
