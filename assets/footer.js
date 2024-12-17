$('.accordion').each(function (index) {
    $(this).click(function () {
        $('.panel').eq(index).toggleClass('showpanel');
        $(this).toggleClass('active');
    });
});
