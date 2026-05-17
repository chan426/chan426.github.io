$(document).ready(function(){

//ヘッダースクロールエフェクト
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $(".nav").addClass("nav--active");
    } else{
        $(".nav").removeClass("nav--active");
    }
});

$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $(".page-top").addClass("pagetop--active");
    } else{
        $(".page-top").removeClass("pagetop--active");
    }
});


  /*
  背景色が伸びてテキストを表示
  */
  // 動きのきっかけの起点となるアニメーションの名前を定義
  function BgFadeAnime(){

    // 背景色が伸びて出現（左から右）
$(".bgLRextendTrigger").each(function(){
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >=elemPos - windowHeight){
        $(this).addClass("bgLRextend");
    } else{
        $(this).removeClass("bgLRextend");
    }
});

// 文字列を囲う子要素
$(".bgappearTrigger").each(function(){
    var elemPos = $(this).offset().top -50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass("bgappear");
    } else {
        $(this).removeClass("bgappear");
    }
});
}

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


//About Fade in
 $(window).scroll(function(){
    $(".wrapper").each(function(){
        var elemPos = $(this).offset().top + 100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >=elemPos - windowHeight){
            $(this).addClass("wrapper-active");
        }
    });
 });

//Trainer タブ
    $(".tab").click(function(){
        let tabId = $(this).data("tab");

        $(".tab").removeClass("active");
        $(this).addClass("active");

        $(".content").removeClass("active");
        $("#tab-" + tabId).addClass("active");
    });

//Trainer Fadein
 $(window).scroll(function(){
    $(".trainer-img").each(function(){
        var elemPos = $(this).offset().top + 100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >=elemPos - windowHeight){
            $(this).addClass("trainer-active");
        }
    });
 });

//スライドショー    
 const swiper = new Swiper(".swiper",{
        pagination:{
            el: ".swiper-pagination"
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        }
    });    

//FAQ　アコーディオン
    $(".accordion-header").click(function(){
       
         if ($(this).next(".accordion-content").is(":hidden")) {        
                    $(this).next(".accordion-content").slideDown(); 
                    $(this).addClass("open");      
        } 
          else {
             $(this).next(".accordion-content").slideUp();
             $(this).removeClass("open");
        }
    });

//スクロールしてトップに戻る
$(".page-top").on("click", function(){
    $("body,html").animate({
        scrollTop:0
    });
});
   
});

