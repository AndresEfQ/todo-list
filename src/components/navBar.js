import menuIcon from "../assets/icons/align-justify.png";
import homeIcon from "../assets/icons/home.png";
import addTaskIcon from "../assets/icons/plus.png"

const content = document.getElementById('content');

export default function navBar() {

  const nav = document.createElement('nav');
  const menu = document.createElement('img');
  menu.src = menuIcon;
  const home = document.createElement('img');
  home.src = homeIcon;
  const addTask = document.createElement('img');
  addTask.src = addTaskIcon;

  nav.appendChild(menu);
  nav.appendChild(home);
  nav.appendChild(addTask);

  content.appendChild(nav);
}