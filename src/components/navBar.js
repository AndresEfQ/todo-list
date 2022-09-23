import menuIcon from "../assets/icons/menu-burger.png";
import homeIcon from "../assets/icons/home.png";
import addTaskIcon from "../assets/icons/plus.png";
import "../styles/globals.css";
import "../styles/navBar.css";
import $ from "jquery";
import showMenu from "../functions/showMenu.js";

export default function navBar() {
  $(function () {
    const nav = $('<nav></nav>');
    const menu = $(
      `<button class="menu">
        <img src=${menuIcon} alt="menu" />
      </button>`
    );
    menu.on('click', showMenu);
    const home = $(
      `<button class="home">
        <img src=${homeIcon} alt="home" />
      </button>`
    );
    const addTask = $(
      `<button class="add-task">
        <img src=${addTaskIcon} alt="add" />
      </button>`
    );
    nav.append(menu, home, addTask);
    $('#content').append(nav);
  });
}