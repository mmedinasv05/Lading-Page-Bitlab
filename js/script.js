$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.container-menu').addClass('menu-scroll');
            $('.container-menu-courses').addClass('menu-scroll-courses');
            $("#logo-bitlab2").attr("src", "./img/logo-fullcolor.svg");
            $("#logo-bitlab3").attr("src", "./img/logo-fullcolor.svg");
            $("#logo-bitlab").attr("src", "./img/logo-fullcolor.svg");
            $('.U-menu-bar').addClass('menu-scroll');
            $('.U-menu-bar-courses').addClass('menu-scroll-courses');
        }
        else{
            $('.container-menu').removeClass('menu-scroll');
            $('.container-menu-courses').removeClass('menu-scroll-courses');
            $("#logo-bitlab2").attr("src", "./img/logo-white.svg");
            $("#logo-bitlab3").attr("src", "./img/logo-fullcolor.svg");
            $('.U-menu-bar').removeClass('menu-scroll');
            $('.U-menu-bar-courses').removeClass('menu-scroll-courses');
            $("#logo-bitlab").attr("src", "./img/logo-white.svg");
        }
    })


    $('#show-menu').click(function(){
        $('.div-item').css('top','0%');
        $('.div-item').css('transition', 'top 0.3s ease-in-out');
    })

    $('#hidden-menu').click(function(){
        $('.div-item').css('top','-100%');
    })
    
    $('#show-menu-courses').click(function(){
        $('.div-item-courses').css('top','0%');
        $('.div-item-courses').css('transition', 'top 0.3s ease-in-out');
    })

    $('#hidden-menu-courses').click(function(){
        $('.div-item-courses').css('top','-100%');
    })
})
