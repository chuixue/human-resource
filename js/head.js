// JavaScript Document
var path = window.document.location.href,
	phead = path;

alert(path);


$.ajaxSetup({ cache:false });
$.ajaxSetup({ async: false });  
var IsReady=0;
$("<div></div>").load("../head.html",function(){
	document.write(this.innerHTML.match(/<xmp>([\s\S]*?)<\/xmp>/)[1]);
	IsReady=1;
});
$j.ajaxSetup({ async: true });