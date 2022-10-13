import $ from 'jquery';

export default function showMain() {
  $(() => {
    if (!$('.toggleable').hasClass('hidden-menu') && $(window).width() < 750) {
      $('.toggleable').addClass('hidden-menu');
    }
  });
}
