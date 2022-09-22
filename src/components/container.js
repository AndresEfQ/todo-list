import $ from "jquery";
import aside from "./aside.js";
import main from "./main.js";
import "../styles/container.css";

export default function container() {
  $(function () {
    const container = $('<div class="container"></div>');
    aside();
    main();
    $('#content').append(container);
  });
}