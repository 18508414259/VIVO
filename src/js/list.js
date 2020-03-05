 
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



// $(function(){
//     $.ajax({
//         url:"../lib/list.json",
//         dataType:'json',
//         success:function(res){
//             console.log(res)
//             var str='';
//             res.forEach(item=>{
//                 str+=`
//                 <li>
//                 <img src="${ item.img }">
//                 <h5>${item.name}</h4>
//                 <p>${item.sale}</p>
//                 <span>&yen;${item.pires}</span>
//                 </li>
//                 `
//             })
//             $('.Bul').html(str)
//         }
//     })
// })




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

    var arr = []
    //1.请求数据
    getList()
    function getList(){
        $.ajax({
            url:'../lib/list.json',
            data:{
                
            },
            datatype:'json',
            success:function(res){
                // console.log(res)

                //2.渲染分页器
                $('.select').pagination({
                    pageCount: Math.ceil(res.length/12), // 总页数
                    current: 1, // 当前页
                    jump: true,
                    coping: true,
                    // homePage: '首页', // 首页按钮的文本
                    endPage: '末页', // 末页按钮的文本
                    prevContent: '上页',
                    nextContent: '下页',
                    callback: function (api) { // 当你切换页面的时候会触发
                      // api.getCurrent() 获取当前是第几页
                    //   console.log(api.getCurrent())
                    let current = api.getCurrent()

                    // 根据是第几页, 从我的总数组里面筛选出一部分数据
                    //   slice 方法包前不包后
                    var list =res.slice((current-1)*12,current*12)
                    bindHtml(list)
                    }
                  })

                  bindHtml(res.slice(0,12))


                  arr = res
            }
        })
    }
    function bindHtml(list){
        // console.log(list)
        let str='';
        list.forEach(function(item){
            str +=`
            <li data-id="${item.id}">
                <img src="${ item.img }">
                <h5>${item.name}</h4>
                <p>${item.sale}</p>
                <span>&yen;${item.pires}</span>
             </li>
            
            `
        })
        $('.Bul').html(str)
    }
    
    $('.Bul').on('click','li',function(){
        const id=$(this).data('id')
        console.log(id)

        let data={}

        for(let i=0;i<arr.length;i++){
            if(arr[i].id===id){
                data=arr[i]
                break
            }
        }

// console.log(data)
         //    localStorage -> 存储起来的数据不会自动携带
      // 就把我找到的这个数据存储在 localStorage 里面
      //   当你到达 detail 页面的时候, 在拿出来就可以了
      localStorage.setItem('detail_info',JSON.stringify(data))


      //存储好跳转页面

      window.location.href='./detail.html'
    })



   
})