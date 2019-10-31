$(document).ready(function () {
    nav();
    navbar();
    about();
    skill();
    portf();
    con();
    topBtn();
});

function topBtn(){
    $("#top_btn").click(function(){
        $("html,body").animate({scrollTop:0});
    });
}

function about(){
    $("#gnb>li:nth-child(1)").click(function(){
        $("html,body").animate({scrollTop:801});
    });
}
function skill(){
    $("#gnb>li:nth-child(2)").click(function(){
        $("html,body").animate({scrollTop:1651});
    });
}
function portf(){
    $("#gnb>li:nth-child(3)").click(function(){
        $("html,body").animate({scrollTop:2501});
    });
}
function con(){
    $("#gnb>li:nth-child(4)").click(function(){
        $("html,body").animate({scrollTop:3351});
    });
}

function navbar(){
    $(window).scroll(function(){
        var scroll=$("html,body").scrollTop();
        if(scroll>50){
            $("#i_nav").css("background","#000");
            $("#top_btn").css("display","block");
        }else{
            $("#i_nav").css("background","none");
            $("#top_btn").css("display","none");
        }
        if(scroll>600){
            $(".fadetitle1").stop().animate({"opacity":1},500);
            $("#gnb>li:nth-child(1)").addClass("whereis");
            $("#gnb>li:nth-child(1)").siblings().removeClass("whereis");
        }else{
            $(".fadetitle1").stop().animate({"opacity":0},300);
            $("#gnb>li:nth-child(1)").removeClass("whereis");
        }
        if(scroll>1450){
            $(".fadetitle2").stop().animate({"opacity":1},500);
            $("#gnb>li:nth-child(2)").addClass("whereis");
            $("#gnb>li:nth-child(2)").siblings().removeClass("whereis");
        }else{
            $(".fadetitle2").stop().animate({"opacity":0},300);
            $("#gnb>li:nth-child(2)").removeClass("whereis");
        }
        if(scroll>2300){
            $(".fadetitle3").stop().animate({"opacity":1},500);
            $("#gnb>li:nth-child(3)").addClass("whereis");
            $("#gnb>li:nth-child(3)").siblings().removeClass("whereis");
        }else{
            $(".fadetitle3").stop().animate({"opacity":0},300);
            $("#gnb>li:nth-child(3)").removeClass("whereis");
        }
        if(scroll>3150){
            $(".fadetitle4").stop().animate({"opacity":1},500);
            $("#gnb>li:nth-child(4)").addClass("whereis");
            $("#gnb>li:nth-child(4)").siblings().removeClass("whereis");
        }else{
            $(".fadetitle4").stop().animate({"opacity":0},300);
            $("#gnb>li:nth-child(4)").removeClass("whereis");
        }
    });
}

function nav() {
    $("#gnb>li>a").children(".en").hover(function () {
        $(this).stop().animate({
            "opacity": 0
        }, 200);
        $(this).siblings().stop().animate({
            "opacity": 1
        }, 200);
    }, function () {
        $(this).stop().animate({
            "opacity": 1
        }, 200);
        $(this).siblings().stop().animate({
            "opacity": 0
        }, 200);
    });
}

setInterval(function(){
    $(".fa-mouse-pointer").toggle();
  }, 250);
