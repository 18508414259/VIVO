"use strict";function dianji(){$(".RboxUL > .Rtop").click(function(){$("html").animate({scrollTop:0},500)})}window.onload=function(){$(".listUl").mouseover(function(){$(this).next().finish().slideDown(500)}),$(".listUl").mouseleave(function(){$(this).stop(1e3).next().finish().slideUp(500)}),$(".listJQ").mouseover(function(){$(this).finish().show()}),$(".listJQ").mouseleave(function(){$(this).finish().slideUp()})},$(function(){$(".banUL li").mouseover(function(){$(this).children($("div")).stop().show().parent().siblings().find($("div")).stop().hide()}),$(".banUL li").mouseleave(function(){$(this).find($("div")).stop().hide().parent().siblings().find($("div")).stop().show()}),$(".banUL").mouseleave(function(){$(this).find($("div")).finish().hide()})}),$(function(){$(".RboxUL li").mouseover(function(){$(this).children($("div")).stop().show().parent().siblings().find($("div")).stop().hide()}),$(".RboxUL").mouseleave(function(){$(this).find($("div")).finish().hide()})}),$(function(){$(window).scroll(function(){500<=$(window).scrollTop()?$(".Rtop").fadeIn():$(".Rtop").fadeOut()}),dianji()}),$(function(){$(".content2").on("click","li",function(){window.location.href="./list.html"})}),$(function(){""!==function(i){for(var n=document.cookie.split("; "),o=0;o<n.length;o++){var t=n[o].split("=");if(t[0]==i)return t[1]}return""}("userName")?($(".loginbf").hide(),$(".loginaf").show()):($(".loginbf").show(),$(".loginaf").hide())});