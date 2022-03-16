$(document).ready(function () {
    // headroom on header

    var headroom  = new Headroom(document.querySelector("header"));

    headroom.init();


    // reference slider

    var swiper = new Swiper(".swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    // hide offcanvas on menu link click

    $(".offcanvas .nav li a").click(function () {
        $(".offcanvas button").click();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
