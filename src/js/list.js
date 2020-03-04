 
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



$(function(){
    $.ajax({
        url:"../lib/list.json",
        dataType:'json',
        success:function(res){
            // console.log(res)
            var str='';
            res.forEach(item=>{
                str+=`
                <li>
                <img src="${ item.img }">
                <h5>${item.name}</h4>
                <p>${item.sale}</p>
                <span>&yen;${item.pires}</span>
                </li>
                `
            })
            $('.Bul').html(str)
        }
    })
})


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