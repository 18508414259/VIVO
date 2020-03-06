






$('.btn').click(function(){
var username=$('.int1').val()
var password=$(".int2").val()
console.log(username,password)
    $.ajax({
        url:'/lzx',
        dataType:'json',
        type:'post',
        data:{
            username:username,
            password:password
        },
        success:function(res){
            let a = res
        if (a.code == 1) {
            console.log("页面注册成功");
             //注册成功,是否去登录
             layer.confirm("恭喜您,注册成功,是否立即去登录?", {
                 btn: ["是的", "我不要"]
            }, (index) => {
                 layer.close(index);
                 window.location = "./login.html"

             }, (index) => {
                 layer.close(index);
                 // window.location.reload();
                 layer.msg("好的")

             })
         }
         if (a.code ==0) {
             layer.msg('用户名已注册!');
         }
        }

    })
})

