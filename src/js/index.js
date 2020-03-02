 
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
   