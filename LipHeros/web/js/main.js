require([
    'jquery',
    'slick',
    'domReady!'
], function ($) {

    $(".featured-items").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
                         
                       
                       
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                            }
                        }

                        
                    ]
    });
    $(".widget-product-grid").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
                         
                        {
                            breakpoint: 1440,
                            settings: {
                                slidesToShow: 4,
                            }
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                            }
                        }

                        
                    ]
    });
    
});