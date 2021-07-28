require([
    'jquery',
    'slick',
    'domReady!',
    'accordion'
], function ($) {
    // slick services
    if ($(window).width() < 768) {
        $(".services-content").addClass("services-slide");
    } else {
        $(".services-content").removeClass("services-slide");
    }

    // accodion footer middle 
    if ($(window).width() < 480) {
        $('.footer-middle-content').addClass('accordion-footer');
        $('.accordion-footer').accordion();

    } else {
        $('.footer-middle-content').removeClass('accordion-footer');
    }

    // slick product best seller
    $(".widget-product-grid").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                dots: true,
                                infinite: true
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                dots: true,
                                infinite: true
                            }
                        }

                        
                    ]
    });

    // slick product instagram
    $(".instagram-content").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                dots: false,
                                infinite: true
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                dots: false,
                                infinite: true
                            }
                        }
                    ]
    });

    $(".services-slide").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".search").click(function() {
        $("#search").addClass("show");
        $(".search").addClass("active");
    });

});
