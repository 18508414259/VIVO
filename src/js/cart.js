var cartList = JSON.parse(localStorage.getItem('cartList'))

// console.log(cartList)
if (!cartList) {
      alert('您的购物车为空, 快去选购把')
    } else {
      // 3. 渲染页面
      bindHtml()

      // 4. 添加各种事件
      bindEvent()
    }
    function bindHtml(){

        let selectAll =cartList .every(item=>{
          return item.isSelect === true
        })
      let str=`
      <div class="centop">
        <ul >
            <li>
                <input class="selectAll" type="checkbox" ${ selectAll ? 'checked' : '' } >全选                
            </li>
            <li>商品名称</li>
            <li>价格(元)</li>
            <li>数量</li>
            
            <li>小计(元)</li>
            <li>操作</li>
        </ul> 
      </div>
      `
      cartList.forEach(item=>{
        str+=`
        <ul class="centerZ">
        <li class="sel">
            <input data-id=${ item.id } class="selectOne" type="checkbox" ${ item.isSelect ? 'checked' : '' }>
        </li>
        <li class="info">
            <img src="${item.img}" alt="">
        </li>
        <li class="txt">
            <p>${item.name}</p>
        </li>
        <li class="pr">
            <p class="price">${item.pires}</p>
        </li>
        <li class="number">
            <button class="sub" data-id=${ item.id }>-</button>
            <input class="int2" type="text" value="${item.number}">
            <button class="add" data-id=${ item.id }>+</button>
        </li>
        <li class="xj">
            <p class="xiaoji">￥${ item.xiaoji.toFixed(2)}</p>
        </li>
        <li class="del" data-id=${item.id}>删除</li>
        </ul>   
        `
      })
      let selectArr = cartList.filter(item => item.isSelect)
      let selectNumber = 0
      // 选中商品总价
      let selectPrice = 0
      selectArr.forEach(item => {
        selectNumber += item.number
        selectPrice += item.xiaoji
      })
      
str +=`
      <div class="bottom">
            <p>选择的数量<span>${ selectNumber }</span></p>
            <p>总价：<span>￥${ selectPrice.toFixed(2) }</span></p>
            <button class="paly" ${ selectArr.length ? '' : 'disabled'}>支付</button>
      </div>
      
      
      
      
      
      `
      
  $('.center').html(str)
    }

    function bindEvent(){

      
  //全选按钮的事件
      $('.center').on('change','.selectAll',function(){

        console.log(this.checked)
        cartList.forEach(item=>{
          item.isSelect=this.checked
        })
        //重新渲染页面
        bindHtml()

        //重新储存
        localStorage.setItem('cartList', JSON.stringify(cartList))
      })

  //单选按钮的事件
    $('.center').on('change','.selectOne',function(){
      // 你要知道你点击的是哪一个数据的单选按钮
      console.log($(this).data('id'))
      const id=$(this).data('id')
       // 找到数组中 id 一样的那一条数据改变一下 isSelect 属性
       cartList.forEach(item => {
        if (item.id === id) {
          item.isSelect = !item.isSelect
        }
      })

      bindHtml()

      // 重新存储
      
      localStorage.setItem('cartList', JSON.stringify(cartList))

    })    
//减少
    $('.center').on('click','.sub',function(){
      console.log(this)
      const id = $(this).data('id')

      // 循环数组, 把 id 对应的这个数据的 number 和 小计修改了
      cartList.forEach(item => {
        if (item.id === id) {
          // 当 item.number === 1 的时候, 不需要 --
          item.number > 1 ? item.number-- : ''
          item.xiaoji = item.pires * item.number
        }
      })

      // 从新渲染一遍页面
      bindHtml()

      // 在从新存储一遍 localStorage
      localStorage.setItem('cartList', JSON.stringify(cartList))
    })

//增加
    $('.center').on('click', '.add', function () {
      // 拿到自己身上存储的 id
      const id = $(this).data('id')

      // 循环数组找到一个id 对应的数据
      cartList.forEach(item => {
        if (item.id === id) {
          item.number++
          item.xiaoji = item.number * item.pires
        }
      })

      // 从新渲染页面
      bindHtml()

      // 在从新存储一遍 localStorage
      localStorage.setItem('cartList', JSON.stringify(cartList))
    })

    $('.center').on('click', '.del', function () {
      // 拿到自己身上的 id
      var id = $(this).data('id')

      // console.log('把数组中 id 为 : ' + id + ' 的数去去掉, 从新渲染页面, 从新存储到 lcoalStorage')
      // cartList.forEach(item=>{
      //   item.id=''
      // // })
       cartList = cartList.filter(item=> item.id != id)

      localStorage.setItem('cartList',JSON.stringify(cartList));

      bindHtml()
    })



    }