import $ from "jquery";
import showMain from "../DOMfunctions/showMain.js";
import renderCurrentProject from "../DOMfunctions/renderCurrentProject.js";
import "../styles/globals.css";
import "../styles/main.css";

export default function main () {
  $(function () {
    let mainElement = $(`<main class="toggleable"></main>`);
    const defaultProject = JSON.parse(localStorage.getItem("projects"))[0] 
    || {
          name: "Add new projects in the left menu",
          tasks: []
       };

    renderCurrentProject(defaultProject, mainElement);
    mainElement.on('click', showMain)
    $('.container').append(mainElement);

  });
  $('input[checkbox]').on('change', console.log('checked'));
}