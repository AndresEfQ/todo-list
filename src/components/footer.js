import "../styles/globals.css";
import "../styles/footer.css";
import github from "../assets/icons/github.png";
import $ from "jquery";

export default function footer() {
  $(function() {
    const footer = $(
      `<footer>
        Copyright © 2022<a href="https://github.com/AndresEfQ">AndresEfQ<img src=${github} alt="github"></a>
      </footer>`
    );
    $('#content').append(footer);
  })
}
