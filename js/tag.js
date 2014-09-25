$(document).ready(function(){
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $("html, body").animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	

  	$(function(){
		var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
			if (x > 800) {
				$("a[href='../../OHU2014/page/mhome.html']").attr('href', '../../OHU2014/page/homeOHU.html');
			}
			if(x <= 800){
				$("a[href='../../OHU2014/page/homeOHU.html']").attr('href', '../../OHU2014/page/mhome.html');
			}
		});
  	$(function(){
		$(window).resize(function(){
			var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
			if (x > 800) {
				$("a[href='../../OHU2014/page/mhome.html']").attr('href', '../../OHU2014/page/homeOHU.html');
			}
			if(x <= 800){
				$("a[href='../../OHU2014/page/homeOHU.html']").attr('href', '../../OHU2014/page/mhome.html');
			}
		});
	});
	  	
});
