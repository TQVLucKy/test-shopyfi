$(".search").each(function () {
    $(this).on("click", function () {
        $(".formsearch").toggleClass("active");
    });
    setTimeout(function () {
        $('.dropdown-content-results').slick('setPosition');
    }, 1000);
});

$(".search-close").on("click", function () {
    $(".formsearch").removeClass("active");
});

var header = $('.header-wrapper');
var links = $('.header li a');
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        header.css('background-color', '#FFF');
        header.css('border-bottom', '1px solid #000000');
        links.css('color', '#1c1b1b')
        $('.logo-default').hide();
        $('.logo-sticky').show();
    } else {
        header.css('background-color', 'transparent');
        header.css('border-bottom', 'none');
        links.css('color', '');
        $('.logo-default').show();
        $('.logo-sticky').hide();
    }
});
$(".header").on('mouseenter', function () {
    $('.logo-default').hide();
    $('.logo-sticky').show();
})
$(".header").on('mouseleave', function () {
    if ($(window).scrollTop() < 100) {
    $('.logo-default').show();
    $('.logo-sticky').hide();
}
})

//cart
$('.header-cart').on("click", function () {
    $('#cart').addClass("showcart");
    $('#overlay').toggle();
});
// close cart
$('.drawer-close').on('click', function () {
    $('#cart').removeClass("showcart");
    $('#overlay').hide();
})
$('.side-cart-title, .collapse-container, .close-icon').on("click", function () {
    $('.drawer-main').toggleClass("hidden");
    $('.collapse-container').toggle();
    $('.close-icon').toggle();
    $('.carousel-navigation').toggle();
    if ($('.carousel-navigation').css('display') === 'block') {
        $('.carousel-navigation').css('display', 'flex');
    }
    $('.recommendation-result').toggleClass("show");
});

$('.item-selection').on('click', function () {
    $(this).siblings('.item-selection').removeClass('active');
    $(this).addClass('active');
})
//menu-left
$('#overlay').on('click', function () {
    $('#overlay').hide();
    $('#menu').removeClass('show');
    $('#cart').removeClass("showcart");
})
$('.header-left-mobile').on('click', function () {
    $('#menu').addClass('show');
    $('#overlay').toggle();
})
//slick cart

$('.recommendation-result').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: $('.carousel-prev'),
    nextArrow: $('.carousel-next')
});

