  
   /*==================================== WOW  =============================================*/
              new WOW().init();
/*==================================== counterUp  =============================================*/
        jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
/*==================================== carousel  =============================================*/
         $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 3,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
              });
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
              })
            })


     /*==================================== scroll_top  =============================================*/
      $(document).ready(function(){
        $(window).scroll(function(){
          if ($(this).scrollTop()>400){
            $(".scroll_top").fadeIn();
          }else{
            $(".scroll_top").fadeOut();
          }
        });
        $(".scroll_top").click(function(){
            $("html, body").animate({scrollTop:0}, 500)
        });
      });