import $ from 'jquery';
import aside from './aside';
import main from './main';
import handleResize from '../DOMfunctions/handleResize';
import '../styles/container.css';

export default function container() {
  $(() => {
    const $container = $('<div class="container toggleable"></div>');
    const shade = $('<div class="shade"></div>');
    $container.append(shade);
    aside();
    main();
    $(window).on('resize', handleResize);
    $('#content').append($container);
  });
}
