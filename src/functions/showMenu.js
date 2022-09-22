import $ from "jquery";

export default function toogleMenu() {
  $(function () {
    $('.menu').on('click', handleClick);
    
    function handleClick () {
      const root = $(':root');
      /* console.log(root[0].style); */
      $(':root')[0].style.setProperty('--aside-width', '0');
      $('aside')[0].style.setProperty('visibility', 'hidden');
    }
  });
} 