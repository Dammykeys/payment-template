(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.fixed-action-btn');
//   var instances = M.FloatingActionButton.init(elems, options);
// });


//Service Worker
if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(reg => {
    }).catch(swErr => {
      console.log(`Service Worker Installation Error: ${swErr}}`)
    });
  });
}