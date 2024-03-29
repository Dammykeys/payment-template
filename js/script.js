//Sidenav Button
(function ($) {
    $(function () {
        $('.sidenav').sidenav();
        $('.parallax').parallax();
    }); // end of document ready
})(jQuery); // end of jQuery name space


//Floating action button
$(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton();
});


//Back to top Scroll button
window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 300);
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}


//Preloader 
window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preloader-hidden");
    preloader.addEventListener("transitionend", () => {
        document.body.removeChild(preloader);
    })
});


//Modal
$(document).ready(function () {
    $('.modal').modal();
});


//Collapsible list
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, true);
});
