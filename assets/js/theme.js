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
});

var smoothscroll = require("smoothscroll-polyfill");

smoothscroll.polyfill();
