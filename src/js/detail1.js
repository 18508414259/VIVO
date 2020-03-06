
    const info =JSON.parse(localStorage.getItem('detail_info'))
    // console.log(info)
    //判断是否存在
    if(!info){
        alert('数据不存在')
        window.location.href='./list.html'
    }

//3渲染页面
    bindHtml()
    function bindHtml(){
        $('.detRIT .Pone').text(info.name)
        $('.detRIT .prise').text('￥'+info.pires)
    }

//4.绑定事件
    $('.addCart').click(()=>{
        //4.2判断是否登陆
        
        //4.3加入到购物车里
        const cartList=JSON.parse(localStorage.getItem('cartList')) || []

        //        false: 表示数组里面没有这个信息
      let exits = cartList.some(item => {
        // 数组里面每一个的 id === 本页面的这条数据的 id
        return item.id === info.id
      })
         console.log(exits)   


        if(exits){
            let data = null
            for (let i = 0; i < cartList.length; i++) {
              if (cartList[i].id === info.id) {
                data = cartList[i]
                break
              }
            }
            // data 就是我找到的这个信息
            data.number++
            data.xiaoji = data.number * data.pires
        }else{
            info.number=1
             // 4-5. 多添加一些信息
            info.xiaoji = info.pires // 因为默认是第一个, 小计就是单价
            info.isSelect = false // 默认不选中

            cartList.push(info)
        }
      
        localStorage.setItem('cartList',JSON.stringify(cartList))
        //   console.log(cartList)
    })