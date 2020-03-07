 
window.onload=function(){
    $(".listUl").mouseover(function(){
       
            $(this)
            // .stop()
            // .finish()
            .next()
            .finish()
            .slideDown(500)
            // .finish()
    })
    
    $(".listUl").mouseleave(function(){
        $(this)
        .stop(1000)
        .next()
        .finish()
        .slideUp(500)

    })
 
    $(".listJQ").mouseover(function(){
        $(this)
        .finish()
        .show()
    })
    $(".listJQ").mouseleave(function(){
        $(this)
        .finish()
        .slideUp()
    })


}

// window.onload=function(){
//     $("banUL > li").mouseover(function(){
//         $(this)
//         .children("div")
//         .finish()
//         .show()
//     })

// }


$(function(){
    $('.banUL li').mouseover(function(){
        $(this)
        .children($('div'))
        .stop()
        .show()
        .parent()
        .siblings()
        .find($('div'))
        .stop()
        .hide()
    })
    $('.banUL li').mouseleave(function(){
        $(this)
        .find($('div'))
        .stop()
        .hide()
        .parent()
        .siblings()
        .find($('div'))
        .stop()
        .show()
    })
    $('.banUL').mouseleave(function(){
        $(this)
        
        .find($('div'))
        .finish()
        .hide()
    })
})
//----------------
$(function(){
    $('.RboxUL li').mouseover(function(){
        
        $(this)
        .children($('div'))
        .stop()
        .show()
        .parent()
        .siblings()
        .find($('div'))
        .stop()
        .hide()
    })
    $('.RboxUL').mouseleave(function(){
        $(this)
        
        .find($('div'))
        .finish()
        .hide()
    })
})
//-----------------
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >=500){
            $('.Rtop').fadeIn()
        }else{
            $('.Rtop').fadeOut()
        }
    })
    dianji()
})
function dianji(){
    $('.RboxUL > .Rtop').click(function(){
        $('html').animate({
            scrollTop:0
        },500)
    })
}


$(function(){
    $('.content2').on('click','li',function(){
        window.location.href='./list.html'
    })
})


$(function(){
     function getCookie(name) {
          var strCookie = document.cookie;
           var arrCookie = strCookie.split("; ");
           for (var i = 0; i < arrCookie.length; i++) {
                  var arr = arrCookie[i].split("=");
             if (arr[0] == name)
                  return arr[1];
               }
               return "";
              }
        
        
         var islogin = getCookie("userName");
         if(islogin!==''){
            $(".loginbf").hide();
            $(".loginaf").show();
         }else{
             $(".loginbf").show();
              $(".loginaf").hide();
             }
       
})