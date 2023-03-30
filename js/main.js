jQuery(function($) {
    "use strict";

    var YoGa = window.YoGa || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    YoGa.comp_slider = function() {
        $(".comp-slider").each(function(){
            // Lấy attr bên html gán vào biến nào đó
            var slidesToShow = parseInt($(this).attr("slideToShow")) || 4,
                slidesToScroll = parseInt($(this).attr("slideToScroll")) || 1,
                arrows = !!parseInt($(this).attr("arrows")),
                dots = !!parseInt($(this).attr("dots"));
            
            var responsive = [];
            if (slidesToShow == 4) {
                responsive = [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    }
                ];
            } else if (slidesToShow == 3) {
                responsive = [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    }
                ];
            } 
            
            $(this).slick({
                slidesToShow: slidesToShow,
                slidesToScroll: slidesToScroll,
                adaptiveHeight: true,
                arrows: arrows,
                dots: dots,
                prevArrow: '<div class="prev"><i class="ion-ios-arrow-back"></i></div>',
                nextArrow: '<div class="next"><i class="ion-ios-arrow-forward"></i></div>',
                responsive: responsive
            });
        });

    }

    YoGa.demoHTML = function() {
        $(".box").mousemove(function(event){
            //console.log(event);
            $(".span1").html("ClientX: " + event.clientX + " ClientY: " + event.clientY);
            $(".span2").html("ScreenX: " + event.screenX + " ScreenY: " + event.screenY);
            $(".span3").html("pageX: " + event.pageX + " pageY: " + (event.pageY ) + " Manh: " + $(document).scrollTop());
            $(".span4").html("offsetX: " + event.offsetX + " offsetY: " + event.offsetY);

            $(".span5").html("offset().left: " + $(this).offset().left + " offset().top: " + $(this).offset().top);
            //$(".span6").html("offsetX: " + event.offsetX + " offsetY: " + event.offsetY);
            //console.log(  );
            //offsetX và offsetY là tọa độ con trỏ chuột cục bộ của element đó
            //Lưu ý các giá trị client, screen và page tính luôn giá trị của transform
        });
        $(".box").mouseout(function(event){
            
        });
    }

    YoGa.comp_video = function() {
        $(".post-block-video .play-btn").click(function(e) {
            var blockImage = $(this).parent(),
                src = blockImage.find('.video').attr('data-src') + "?autoplay=1";

            blockImage.addClass("show-video");
            blockImage.find('iframe').attr('src', src);
            // parent()
            // parents(".block-image") -> tham chiếu tới tất cả thằng cha của play-btn
        });
        $(".post-block-video .stop-btn").click(function(e) {
            var blockImage = $(this).parent(),
                src = blockImage.find('.video').attr('data-src');

            blockImage.removeClass("show-video");
            blockImage.find('iframe').attr('src', src);
        });
    }
    YoGa.comp_audio = function() {
        var mediaElements = document.querySelectorAll('audio'); //HTML Collections
        for (var i = 0, total = mediaElements.length; i < total; i++) {
            new MediaElementPlayer(mediaElements[i], 
                {
                    features: [ 'playpause', 'current', 'progress', 'duration', 'loop', 'volume']
                }
            );
        }
    }
    YoGa.comp_gallery = function() {
        $(".fancy-box").fancybox({
            'overlayShow'   : false,
            'transitionIn'  : 'elastic',
            'transitionOut' : 'elastic'
        });
        var $grid = $('.comp-grid').isotope({
            itemSelector: '.item',
            // layoutMode: 'fitRows',
        });

        var $gridMasonry = $('.comp-grid-masonry').masonry({
            columnWidth: '.grid-sizer',
            itemSelector: '.item',
            percentPosition: true
        });


        // TABS
        $(".filter-tabs li").click(function(e) {
            var dataFilter = $(this).attr('data-filter');
            $(this).parents('.filter-tabs').find('li').removeClass('active');
            $(this).addClass('active');
            // console.log(dataFilter);
            $gridMasonry.isotope({ filter: dataFilter });
        })
    }

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        YoGa.comp_slider();
        YoGa.comp_video();
        YoGa.comp_audio();
        YoGa.comp_gallery();
        // YoGa.demoHTML();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

    $(window).on('resize', function() {
        // YoGa.hover_classes();
    });

});
