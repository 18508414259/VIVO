"use strict";var info=JSON.parse(localStorage.getItem("detail_info"));function bindHtml(){$(".detRIT .Pone").text(info.name),$(".detRIT .prise").text("￥"+info.pires)}info||(alert("数据不存在"),window.location.href="./list.html"),bindHtml(),$(".addCart").click(function(){var i=JSON.parse(localStorage.getItem("cartList"))||[],e=i.some(function(i){return i.id===info.id});if(console.log(e),e){for(var t=null,n=0;n<i.length;n++)if(i[n].id===info.id){t=i[n];break}t.number++,t.xiaoji=t.number*t.pires}else info.number=1,info.xiaoji=info.pires,info.isSelect=!1,i.push(info);localStorage.setItem("cartList",JSON.stringify(i))});