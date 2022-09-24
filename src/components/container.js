import $ from "jquery";
import aside from "./aside.js";
import main from "./main.js";
import handleResize from "../functions/handleResize.js";
import "../styles/container.css";

export default function container() {
  $(function () {
    const container = $('<div class="container toggleable"></div>');
    const shade = $('<div class="shade"></div>');
    container.append(shade);
    aside();
    main();
    $(window).on('resize', handleResize);
    $('#content').append(container);
  });
}