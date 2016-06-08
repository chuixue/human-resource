// JavaScript Document
/*

var root = "human-resource";
var href = window.document.location.href, run_type = href.substr(0, 4), 
	ls = href.split(root);
//if("file" == run_type);

if(ls.length == 0)alert("Error: The web folder changed, so change the value of 'root' paramter in file js/head.js " + 
		"with the name of parent folder of 'index.html'");
var path = ls[ls.length-1].split("/");
path.shift();
path.pop();
var tm_path = "";
path.forEach(function(){ tm_path += "../"; });
*/
var tm_path = "";

$.ajaxSetup({ cache:false });
$.ajaxSetup({ async: false });  
var IsReady=0;
$("<div></div>").load(tm_path + "head.html",function(){
	document.write(this.innerHTML.match(/<xmp>([\s\S]*?)<\/xmp>/)[1]);
	IsReady=1;
});
$.ajaxSetup({ async: true });