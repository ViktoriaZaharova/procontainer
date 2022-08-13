$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    arrows: false,
});

$(function () {
    // hidden list > 5
    $('.sidebar-box > .list-checkbox').each(function () {
        if ($(this).find('li').length > 10) {
            $(this).find('li').slice(10).hide();
            $(this).parents('.sidebar-box').append('<a href="#" class="load-more-link">Еще <span>5</span></a>');
        }

    });

    // hidden list > 5

    // show list all
    $('.load-more-link').on('click', function (e) {
        e.preventDefault();
        $(this).prev('.list-checkbox').find('li:hidden').slice(0, 5).slideDown();

        var onBlock = $(this).prev('.list-checkbox').find('li:hidden').length;
        if(onBlock <= 0) {
            $(this).hide();
        }
    });

    // show list all


});