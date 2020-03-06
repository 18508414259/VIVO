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