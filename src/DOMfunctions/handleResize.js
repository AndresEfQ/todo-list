import $ from 'jquery';

export default function handleResize() {
  if ($(window).width() < 750) {
    $('.toggleable').addClass('hidden-menu');
  }
}
