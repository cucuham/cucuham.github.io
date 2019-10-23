$(document).ready(function(){
    cf();
    gnb();
    bottle();
    setInterval(bottle,1500);
    gray();
    g_on();
    test();
    news();
    news_popup();
    news_like();
});


function test(){
    $("#step1").click(function(){
        $("#mainSt").css("height","1700px");
        $("#sectionS1").css("height","1700px");
        $(".step_img").css("display","none");
        $("#step1_img").css("display","block");
        $("#step_detail").slideDown();
    });
    $("#step2").click(function(){
        $("#mainSt").css("height","1700px");
        $("#sectionS1").css("height","1700px");
        $(".step_img").css("display","none");
        $("#step2_img").css("display","block");
        $("#step_detail").slideDown();
    });
    $("#step3").click(function(){
        $("#mainSt").css("height","1700px");
        $("#sectionS1").css("height","1700px");
        $(".step_img").css("display","none");
        $("#step3_img").css("display","block");
        $("#step_detail").slideDown();
    });
    $("#step5").click(function(){
        $("#mainSt").css("height","1700px");
        $("#sectionS1").css("height","1700px");
        $(".step_img").css("display","none");
        $("#step5_img").css("display","block");
        $("#step_detail").slideDown();
    });
    $("#step6").click(function(){
        $("#mainSt").css("height","1700px");
        $("#sectionS1").css("height","1700px");
        $(".step_img").css("display","none");
        $("#step6_img").css("display","block");
        $("#step_detail").slideDown();
    });
    $("#step7").click(function(){
        $("#mainSt").css("height","1700px");
        $("#sectionS1").css("height","1700px");
        $(".step_img").css("display","none");
        $("#step7_img").css("display","block");
        $("#step_detail").slideDown();
    });
    $("#step8").click(function(){
        $("#mainSt").css("height","1700px");
        $("#sectionS1").css("height","1700px");
        $(".step_img").css("display","none");
        $("#step8_img").css("display","block");
        $("#step_detail").slideDown();
    });
}
/* 갤러리 */
function g_on(){
    $("#poto1").click(function(){
        $("#gallery_p").show();
        $("#poto1D").show();
    });
    $("#poto2").click(function(){
        $("#gallery_p").show();
        $("#poto2D").show();
    });
    $("#poto3").click(function(){
        $("#gallery_p").show();
        $("#poto3D").show();
    });
    $("#poto4").click(function(){
        $("#gallery_p").show();
        $("#poto4D").show();
    });
    $("#poto5").click(function(){
        $("#gallery_p").show();
        $("#poto5D").show();
    });
    $("#poto6").click(function(){
        $("#gallery_p").show();
        $("#poto6D").show();
    });
    $(".fa-window-close").click(function(){
        $("#gallery_p").hide();
        $("#gallery_p>div").hide();
    });
}
function cf(){
    $("#cf_thumbnail>ul>li").click(function(){
        // alert($(this).index());
        var num = Number($(this).index()+1);
        console.log(num);
        $("iframe").removeClass("on");
        $("#cf"+num).addClass("on");
        $("#cf_thumbnail>ul>li>a>div>img").removeClass("borderRed");
        $(this).children("a").children("div").children("img").addClass("borderRed");
    });
}
function gnb(){
    $("#mainH").hover(function(){
        $("#logo").css("background","#fff").css("transition","all 0.3s");
        $("#gnb>ul>li>a").css("color","#bf1920").css("transition","all 0.3s");
        $("#mallW").children("img").attr("src","images/mall_R.png");
    }
    ,function(){
        $("#logo").css("background","#bf1920").css("transition","all 0.3s");
        $("#gnb>ul>li>a").css("color","#fff").css("transition","all 0.3s");
        $("#mallW").children("img").attr("src","images/mall_W.png");
    });

    $("#logo").mouseover(function(){
        $("#logo").css("background","#fff").css("transition","all 0.3s");
        $("#gnb>ul>li>a").css("color","#bf1920").css("transition","all 0.3s");
        $("#mallW").children("img").attr("src","images/mall_R.png");
    });
    
    $("#mallW").hover(function(){
        $(this).children("img").attr("src","images/mall_R.png");
    },function(){
        $(this).children("img").attr("src","images/mall_W.png");
    });
}

function bottle(){
    var srcL = $("#bottle>img").attr("src");
    var cont_src = "images/bottle1.png";
    var cont_src2 = "images/bottle2.png";
    // console.log(srcL)
    if(srcL == cont_src){
        $("#bottle>img").attr("src",cont_src2);
    }else{
        $("#bottle>img").attr("src",cont_src);
    }
}

function gray(){
    $("#info").hover(function(){
        $("#make").css("-webkit-filter","grayscale(100%)");
        $("#make").css("filter","gray");
    },function(){
        $("#make").css("filter","none");
    });
    $("#make").hover(function(){
        $("#info").css("-webkit-filter","grayscale(100%)");
        $("#info").css("filter","gray");
    },function(){
        $("#info").css("filter","none");
    })
}



/////////////////////////////////////

$(function () {

    function showMenu() {
      $('.subMenu:not(:last), #overlay').addClass('show')
    }
  
    function hideMenu() {
      $('.subMenu:not(:last)').removeClass('show');
      $('.subMenu:last')[0].tog = 0;
      window.setTimeout(function () {
        $('#overlay').removeClass('show');
      }, 300);
    }
  
    $('.subMenu:last').on('click', function () {
      (this.tog ^= 1) ? showMenu(): hideMenu();
    });
    
    $('#overlay').on('click', hideMenu);
  
  });

  ////////////////////////////////


  /* news */

  function news(){
    $("#newsIndex1").click(function(e){
        e.preventDefault();
        $("#newsMain2").css("display","none");
        $("#newsMain3").css("display","none");
        $("#newsMain1").css("display","block");
        $("#newsIndex li a").removeClass("newsIndex_script");
        $(this).children("a").addClass("newsIndex_script");
        
    });
    $("#newsIndex2").click(function(e){
        e.preventDefault();
        $("#newsMain1").css("display","none");
        $("#newsMain3").css("display","none");
        $("#newsMain2").css("display","block");
        $("#newsIndex li a").removeClass("newsIndex_script");
        $(this).children("a").addClass("newsIndex_script");
    });
    $("#newsIndex3").click(function(e){
        e.preventDefault();
        $("#newsMain1").css("display","none");
        $("#newsMain2").css("display","none");
        $("#newsMain3").css("display","block");
        $("#newsIndex li a").removeClass("newsIndex_script");
        $(this).children("a").addClass("newsIndex_script");
    });
}
function news_popup(){
    $("#news_open1").click(function(){
        $("#newsPopup1").show();
        $("body").css("overflow","hidden");
    })
    $(".news_close").click(function(){
        $("#newsPopup1").hide();
        $("body").css("overflow","auto");
    })
    $("#news_open2").click(function(){
        $("#newsPopup2").show();
        $("body").css("overflow","hidden");
    })
    $(".news_close").click(function(){
        $("#newsPopup2").hide();
        $("body").css("overflow","auto");
    })
    $("#news_open3").click(function(){
        $("#newsPopup3").show();
        $("body").css("overflow","hidden");
    })
    $(".news_close").click(function(){
        $("#newsPopup3").hide();
        $("body").css("overflow","auto");
    })
}

function news_like(){
    $("#newsPopup_like1").click(function(e){
        e.preventDefault();
        $("#newsPopup_like1 a i").css("color","#B51F23");
    })
    $("#newsPopup_like2").click(function(e){
        e.preventDefault();
        $("#newsPopup_like2 a i").css("color","#B51F23");
    })
    $("#newsPopup_like3").click(function(e){
        e.preventDefault();
        $("#newsPopup_like3 a i").css("color","#B51F23");
    })
}
