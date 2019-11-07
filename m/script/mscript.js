$(document).ready(function(){
    fTitle();
});


function fTitle(){
    $(window).scroll(function(){
        var scroll=$("html,body").scrollTop();
        if(scroll>600){
            $(".fadetitle1").stop().animate({"opacity":1},300);
        }else{
            $(".fadetitle1").stop().animate({"opacity":0},100);
        }
        if(scroll>1450){
            $(".fadetitle2").stop().animate({"opacity":1},300);
        }else{
            $(".fadetitle2").stop().animate({"opacity":0},100);
        }
        if(scroll>2300){
            $(".fadetitle3").stop().animate({"opacity":1},300);
        }else{
            $(".fadetitle3").stop().animate({"opacity":0},100);
        }
        if(scroll>3150){
            $(".fadetitle4").stop().animate({"opacity":1},300);
        }else{
            $(".fadetitle4").stop().animate({"opacity":0},100);
        }
    });
}