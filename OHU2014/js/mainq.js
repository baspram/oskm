$(document).ready(function(){
	$("a[href='#negeri']").attr('href', '#samsakka');
	$("a[href='#timeline']").attr('href', '#defile');
	$(function(){
		$(window).resize(function(){
			var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
			if (x > 800) {
				$("a[href='#samsakka']").attr('href', '#negeri');
				$("a[href='#defile']").attr('href', '#timeline');
			}
			if(x <= 800){
				$("a[href='#negeri']").attr('href', '#samsakka');
				$("a[href='#timeline']").attr('href', '#defile');
			}
		});
	});
});