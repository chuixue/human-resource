// JavaScript Document
$.ajaxSetup({ async: false });  
$("<div></div>").load("../tail.html",function(){
	document.write(this.innerHTML.match(/<xmp>([\s\S]*?)<\/xmp>/)[1]);
	IsReady=2;
});

$.ajaxSetup({ async: true });