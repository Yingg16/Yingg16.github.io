$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        } 
        if(this.scroll >500){
            $('.scrollup').addClass("show");
        }else{
            $('.scrollup').removeClass("show");
        }
    });

    // slide-up script
    $('.scrollup').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    }); 

    //owl carousel script
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
          0:{
              items: 1,
            },                           
        }
    });

});