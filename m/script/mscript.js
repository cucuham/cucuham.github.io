$(document).ready(function(){
navbar();
});
function navbar(){
    $(window).scroll(function(){
        var scroll=$("html,body").scrollTop();
        if(scroll>300){
            $(".fadetitle1").stop().animate({"opacity":1},500);
        }else{
            $(".fadetitle1").stop().animate({"opacity":0},300);
        }
        if(scroll>1350){
            $(".fadetitle2").stop().animate({"opacity":1},500);
        }else{
            $(".fadetitle2").stop().animate({"opacity":0},300);
        }
        if(scroll>2500){
            $(".fadetitle3").stop().animate({"opacity":1},500);
        }else{
            $(".fadetitle3").stop().animate({"opacity":0},300);
        }
        if(scroll>4650){
            $(".fadetitle4").stop().animate({"opacity":1},500);
        }else{
            $(".fadetitle4").stop().animate({"opacity":0},300);
        }
    });
}

setInterval(function(){
    $(".fa-mouse-pointer").toggle();
  }, 250);