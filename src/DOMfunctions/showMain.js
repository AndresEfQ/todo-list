import $ from "jquery";

export default function showMain() {
  $(function () {
    if (!$('.toggleable').hasClass('hidden-menu') && $(window).width() < 750) {
      $('.toggleable').addClass('hidden-menu');
    }
  });
}