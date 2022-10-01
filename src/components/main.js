import $ from "jquery";
import options from "../assets/icons/menu-dots.png";
import settings from "../assets/icons/settings-sliders.png";
import showMain from "../DOMfunctions/showMain.js";
import addProject from "../logic/addProject.js";
import renderCurrentProject from "../DOMfunctions/renderCurrentProject.js";
import "../styles/globals.css";
import "../styles/main.css";

export default function main () {
  $(function () {
    let mainElement = $(`<main class="toggleable"></main>`);
    const defaultProject = JSON.parse(localStorage.getItem("inbox")) 
    || {
          name: "Inbox",
          tasks: [
            {
              title: "Sample task",
              description: "Sample description",
              dueDate: "today"
            }
          ]
       };

    renderCurrentProject(defaultProject, mainElement);
    mainElement.on('click', showMain)
    $('.container').append(mainElement);

    if (!(localStorage.getItem("inbox"))) {
      localStorage.setItem('inbox', JSON.stringify(defaultProject));
    }
  });

}