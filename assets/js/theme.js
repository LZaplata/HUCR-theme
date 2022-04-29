$(document).ready(function () {
    // headroom on header

    var headroom = new Headroom(document.querySelector("header"));

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


    // claim animation

    function wordsAnimate() {
        $("#claim .words span").delay(2000).animate({
            borderSpacing: -100
        }, {
            duration: 1000,
            step: function (now, fx) {
                $(this).css("-webkit-transform", "translateY(" + now + "%)");
            }
        }).promise().done(function () {
            var wordsSpan = $("#claim .words span");

            wordsSpan.first().clone().appendTo("#claim .words");
            wordsSpan.first().remove();
            wordsSpan.css("-webkit-transform", "translateY(0)");

            wordsAnimate();
        });
    }

    wordsAnimate();
});
