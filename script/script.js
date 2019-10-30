$(document).ready(function () {
    nav();
    navbar();
    about();
    skill();
    portf();
    con();
    menubar();
    $("#p_menu>a").click(function () {
        $(window).scrollTop(ranges[$(this).index()][0]);
        setActive(this);
    });
});

function menubar(){
    $(".fa-bars").click(function(){
        $("#m_gnb>ul").stop().slideDown();
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
        }else{
            $("#i_nav").css("background","none");
        }
        if(scroll>200){
            $(".fadetitle1").stop().animate({"opacity":1},500);
        }else{
            $(".fadetitle1").stop().animate({"opacity":0},300);
        }
        if(scroll>1000){
            $(".fadetitle2").stop().animate({"opacity":1},500);
        }else{
            $(".fadetitle2").stop().animate({"opacity":0},300);
        }
        if(scroll>1800){
            $(".fadetitle3").stop().animate({"opacity":1},500);
        }else{
            $(".fadetitle3").stop().animate({"opacity":0},300);
        }
        if(scroll>2600){
            $(".fadetitle4").stop().animate({"opacity":1},500);
        }else{
            $(".fadetitle4").stop().animate({"opacity":0},300);
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

function setActive(elem) {
    $(elem).parent().find('a').removeClass('active');
    $(elem).addClass('active');
}

var ranges = [
    [0, 1000],
    [1001, 2000],
    [2001, 3000],
    [3001, 4000],
    [4001, 9999]
];

$(window).on('scroll', function () {
    var pos = $(window).scrollTop();
    $.each(ranges, function (i, range) {
        if (pos >= range[0] && pos <= range[1]) {
            setActive($("#p_menu>a").eq(i)[0]);
            return;
        }
    });
});
