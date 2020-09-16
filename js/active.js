$(document).ready(function(){


    $('.advertiser-active').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    

    $('.open-video').magnificPopup({
        type: 'iframe'
        // other options
      });
})