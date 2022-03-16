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
});
