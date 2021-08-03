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

    // slick service slide main top
    $(".services-slide").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // display search heeader
    $(".search").click(function() {
        $("#search").addClass("show");
        $(".search").addClass("active");
    });

    // sort listing
    $('.sorter-label').click(function(){
        $('.toolbar-sorter').toggleClass('show');
    });

    // more seo text
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("more-btn");
    
    $('#more-btn').click(function () {
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more"; 
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less"; 
            moreText.style.display = "inline";
        }
    });

    // // product-item -slick
    // $(".product-items").slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: ,
    //     slidesToScroll: 1,
    //     responsive: [
    //                     {
    //                         breakpoint: 1024,
    //                         settings: {
    //                             slidesToShow: 2,
    //                             slidesToScroll: 1,
    //                             dots: false,
    //                             infinite: true
    //                         }
    //                     },
    //                     {
    //                         breakpoint: 768,
    //                         settings: {
    //                             slidesToShow: 3,
    //                             slidesToScroll: 1,
    //                             dots: false,
    //                             infinite: true
    //                         }
    //                     }
    //                 ]
    // });

    // question accodion
    $('#question-title1').click(function () {
        $('#question-content__item1').toggleClass('active');
    });

    $('#question-title2').click(function () {
        $('#question-content__item2').toggleClass('active');
    });

    $('#question-title3').click(function () {
        $('#question-content__item3').toggleClass('active');
    });

    $('#question-title4').click(function () {
        $('#question-content__item4').toggleClass('active');
    });

    $('#question-title5').click(function () {
        $('#question-content__item5').toggleClass('active');
    });

    $('#question-title6').click(function () {
        $('#question-content__item6').toggleClass('active');
    });

    $('.author-account').click(function() {
        $('.author-account').toggleClass('active');
    });
});
