$(document).ready(function(){


//Trainer タブ
    $(".tab").click(function(){
        let tabId = $(this).data("tab");

        $(".tab").removeClass("active");
        $(this).addClass("active");

        $(".content").removeClass("active");
        $("#tab-" + tabId).addClass("active");
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
        $(".accordion-content").slideUp();

         if ($(this).next(".accordion-content").is(":hidden")) {
        
                    $(this).next(".accordion-content").slideDown();
                    $(".accordion-header").removeClass("active");
                    $(this).addClass("active");
        
        } 
        
        else {
             $(this).next(".accordion-content").slideUp();
             $(this).removeClass("active");
        }
    });
   
});

