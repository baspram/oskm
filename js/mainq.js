$(document).ready(function(){
	$(function(){
		$(window).scroll(function() {
			var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
		     document.getElementById('counter').innerHTML = 
		     "Top = " + ($(window).scrollTop())  
		     + "<br> Width = " +  x
		     + "<br> Heigth = " +  y
		     + "<br> home = " + (document.getElementById('home').offsetTop)
		     + "<br> navbar = " + (document.getElementById('navbar').offsetTop)
		     + "<br> coba = " + (document.getElementById('header').offsetTop + $("#header").height()/2)
		     + "<br> INI MOBILE CUY"
		});
	});
	//$(function(){
		/*$("#cerita").css({padding: '8% 15%'});
		$("#sleft").css({margin:'2% auto auto', width:'100%',opacity:1});
		$("#sright").css({margin:'2% auto auto',width:'100%',opacity:1});
		$("#istana1").find("img").css({opacity:1});
		$("#istana2").find("img").css({opacity:1});
		$("#istana3").find("img").css({opacity:1});
	  	$("#istana").css({opacity:1});
	  	$("#kontak").find("ul").css({margin: '0px auto auto'});
	  	document.getElementById('navbar').style.position="fixed";
	  	$(".scroll").remove();
	//});*/
});