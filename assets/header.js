$(".search").each(function () {
    $(this).on("click", function () {
        $(".formsearch").toggleClass("active");
    });
});

$(".search-close").on("click", function () {
    $(".formsearch").toggleClass("active");
});
$(window).scroll(function () {
    var header = $('.header-wrapper');
    var links = $('.header li a');
    if ($(this).scrollTop() > 100) {
        header.css('background-color', '#FFF');
        links.css('color', '#1c1b1b')
    } else {
        header.css('background-color', 'transparent');
        links.css('color', 'white');
    }
});

// var swiperheaderight = new Swiper(".dropdown-content-results", {
//     slidesPerView: 2,
//     spaceBetween: 10,
//     direction: 'horizontal',
//     // freeMode:true,
//     hashNavigation: {
//         watchState: true,
//     },
//     breakpoints: {
//         1200: {
//             slidesPerView: 4,
//             direction: 'vertical',
//         },
//         768: {
//             slidesPerView: 3,
//             direction: 'horizontal',
//         },
//         576: {
//             slidesPerView: 2,
//             direction: 'horizontal',
//         }
//     },
//     loop: false
// });