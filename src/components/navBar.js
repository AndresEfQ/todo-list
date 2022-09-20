import menuIcon from "../assets/icons/align-justify.png";
import homeIcon from "../assets/icons/home.png";
import addTaskIcon from "../assets/icons/plus.png";
import "../styles/globals.css";
import "../styles/navBar.css";
import $ from "jquery";

export default function navBar() {
  $(document).ready(function () {
    const nav = $('<nav></nav>');
    const menu = $(
      `<button>
        <img src=${menuIcon} alt="menu" />
      </button>`
    );
    const home = $(
      `<button>
        <img src=${homeIcon} alt="home" />
      </button>`
    );
    const addTask = $(
      `<button>
        <img src=${addTaskIcon} alt="add" />
      </button>`
    );
    nav.append(menu, home, addTask);
    $('#content').append(nav);
  });
}