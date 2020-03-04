getList()
function getList(){
    $.ajax({
        url:'../lib/text.json',
        dataType:'json',
        success: function(res){
            console.log(res)
            //1准备一个字符串
            let str = ''
            //2.进行拼接
            res.forEach(function(item){
              
                str+=`  <ul class="ban1UL${item.id}">
                    `
                item.list.forEach(item2=>{
                    str+=`<li>${ item2.name }</li>`
                })
                     str+=    `
                        </ul>
                            `
            })
            $('.banBox_index').html(str)
        }
    })
}
//----------------------------
getList1()
function getList1(){
    $.ajax({
        url:'../lib/text1.json',
        dataType:'json',
        success: function(res){
            console.log(res)
            //1准备一个字符串
            let str = ''
            //2.进行拼接
            res.forEach(function(item){
              
                str+=`  <ul class="ban1UL${item.id}">
                    `
                item.list.forEach(item2=>{
                    str+=`<li>${ item2.name }</li>`
                })
                     str+=    `
                        </ul>
                            `
            })
            $('.banBox_index1').html(str)
        }
    })
}
//-----------------------
getList2()
function getList2(){
    $.ajax({
        url:'../lib/text2.json',
        dataType:'json',
        success: function(res){
            console.log(res)
            //1准备一个字符串
            let str = ''
            //2.进行拼接
            res.forEach(function(item){
              
                str+=`  <ul class="ban1UL${item.id}">
                    `
                item.list.forEach(item2=>{
                    str+=`<li>${ item2.name }</li>`
                })
                     str+=    `
                        </ul>
                            `
            })
            $('.banBox_index2').html(str)
        }
    })
}
//-----------------------
getList3()
function getList3(){
    $.ajax({
        url:'../lib/text3.json',
        dataType:'json',
        success: function(res){
            console.log(res)
            //1准备一个字符串
            let str = ''
            //2.进行拼接
            res.forEach(function(item){
              
                str+=`  <ul class="ban1UL${item.id}">
                    `
                item.list.forEach(item2=>{
                    str+=`<li>${ item2.name }</li>`
                })
                     str+=    `
                        </ul>
                            `
            })
            $('.banBox_index3').html(str)
        }
    })
}
//--
getList4()
function getList4(){
    $.ajax({
        url:'../lib/text4.json',
        dataType:'json',
        success: function(res){
            console.log(res)
            //1准备一个字符串
            let str = ''
            //2.进行拼接
            res.forEach(function(item){
              
                str+=`  <ul class="ban1UL${item.id}">
                    `
                item.list.forEach(item2=>{
                    str+=`<li>${ item2.name }</li>`
                })
                     str+=    `
                        </ul>
                            `
            })
            $('.banBox_index4').html(str)
        }
    })
}
//--
getList5()
function getList5(){
    $.ajax({
        url:'../lib/text5.json',
        dataType:'json',
        success: function(res){
            console.log(res)
            //1准备一个字符串
            let str = ''
            //2.进行拼接
            res.forEach(function(item){
              
                str+=`  <ul class="ban1UL${item.id}">
                    `
                item.list.forEach(item2=>{
                    str+=`<li>${ item2.name }</li>`
                })
                     str+=    `
                        </ul>
                            `
            })
            $('.banBox_index5').html(str)
        }
    })
}
//--
getList6()
function getList6(){
    $.ajax({
        url:'../lib/text6.json',
        dataType:'json',
        success: function(res){
            console.log(res)
            //1准备一个字符串
            let str = ''
            //2.进行拼接
            res.forEach(function(item){
              
                str+=`  <ul class="ban1UL${item.id}">
                    `
                item.list.forEach(item2=>{
                    str+=`<li>${ item2.name }</li>`
                })
                     str+=    `
                        </ul>
                            `
            })
            $('.banBox_index6').html(str)
        }
    })
}
//--


