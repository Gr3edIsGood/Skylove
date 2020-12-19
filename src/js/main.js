import '../sass/style.sass';
import '../index.html';
import $ from 'jquery';




$(document).ready(function(){
    $('.address__popup').slideUp()


    $(".tabs__main--item").not(":first").hide();
    $(".tabs__main .tabs__main--title").click(function() {
        $(".tabs__main .tabs__main--title").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__main--item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


    $(".tabs__side--item").not(":first").hide();
    $(".tabs__side .tabs__side--title").click(function() {
        $(".tabs__side .tabs__side--title").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__side--item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


    $(".likes__item").hover(function(){
        $('.likes__popup').show();
    },function(){
        $('.likes__popup').show();
    });
    $('.likes__popup').mouseleave(function (){
        $('.likes__popup').hide('slow');
    });


    $("#profile__pop").hover(function(){
        $('.profile__popup').show();
    },function(){
        $('.profile__popup').show();
    });
    $('.profile__popup').mouseleave(function (){
        $('.profile__popup').hide('slow');
    });



    $(".burger").hover(function(){
        $('.burger__menu').show();
    },function(){
        $('.burger__menu').show();
    });
    $('.burger__menu').mouseleave(function (){
        $('.burger__menu').hide('slow');
    });
    $('.burger__hide').click(function (){
        $('.burger__menu').hide('slow');
    })




    $(".address__items").hover(function(){
        $('.address__popup').show();
    },function(){
        $('.address__popup').show();
    });
    $('.address__item--btn').click(function (){
        $('.address__popup').slideUp('slow');
    })
    $('.address__popup').mouseleave(function (){
        $('.address__popup').slideUp('slow');
    });

    $("#follow").hover(function(){
        $('.follow__popup').show();
    },function(){
        $('.follow__popup').show();
    });
    $('.follow__popup').mouseleave(function (){
        $('.follow__popup').hide('slow');
    });



    $('.btn__up--wrapper').on('click', function() {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    })

})


