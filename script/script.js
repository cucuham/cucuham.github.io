$(document).ready(function () {
    nav();
    navbar();
    about();
    skill();
    portf();
    con();
    $("#p_menu>a").click(function () {
        $(window).scrollTop(ranges[$(this).index()][0]);
        setActive(this);
    });
});

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
    [3001, 99999999]
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
