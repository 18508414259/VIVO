$(".btn1").click(function(){
    var username=$('.INP1').val()
    var password=$(".INP2").val()

    $.ajax({
        url: '/cjw',
        type: 'post',
        data: {
            username: username,
            password: password
        },
        success: function (res) {
            let a = JSON.parse(res)
            console.log(a)
            if (a.code == 1) {
                    layer.msg("登录成功")
                    window.location = "./index.html"
                    var data=new Date();
                    data.setTime(data.getTime()+60*1000*60*24)//24小时
                   
                    document.cookie="username="+username+";expires="+data
                    document.cookie="password="+password+";expires="+data
                    
            }
            if (a.code ==2) {
                layer.msg('请先注册!');
            }

        }



    })

    
})