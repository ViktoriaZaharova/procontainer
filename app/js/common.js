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


$('.completed-projects-slider').slick({
    slidesToShow: 3,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.recommended-articles-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.btn-burger').on('click', function () {
   $('header .navbar').fadeToggle();
});

$('.btn-close-navbar').on('click', function () {
    $('header .navbar').fadeToggle();
});

$('.btn-filter').on('click', function () {
   $('.sidebar').fadeToggle();
});

$('.btn-close-sidebar').on('click', function () {
    $('.sidebar').fadeOut();
});


$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});


