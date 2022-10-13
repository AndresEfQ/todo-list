import '../styles/globals.css';
import '../styles/footer.css';
import $ from 'jquery';
import github from '../assets/icons/github.png';

export default function footer() {
  $(() => {
    const $footer = $(
      `<footer>
        Copyright © 2022<a href="https://github.com/AndresEfQ">AndresEfQ<img src=${github} alt="github"></a>
      </footer>`,
    );
    $('#content').append($footer);
  });
}
