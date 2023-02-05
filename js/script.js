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
