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
				$("a[href='homeOHU.html']").attr('href', '#negeri');
				$("a[href='mtimeline.html']").attr('href', '#timeline');
				$("a[href='morganigram.html']").attr('href', '#organigram');
				$("a[href='mkontak.html']").attr('href', '#kontak');
			}
			if(x <= 800){
				$("a[href='#negeri']").attr('href', 'homeOHU.html');
				$("a[href='#timeline']").attr('href', 'mtimeline.html');
				$("a[href='#organigram']").attr('href', 'morganigram.html');
				$("a[href='#kontak']").attr('href', 'mkontak.html');
			}
		});

	$(function(){
		$(window).resize(function(){
			var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
			if (x > 800) {
				$("a[href='homeOHU.html']").attr('href', '#negeri');
				$("a[href='mtimeline.html']").attr('href', '#timeline');
				$("a[href='morganigram.html']").attr('href', '#organigram');
				$("a[href='mkontak.html']").attr('href', '#kontak');
			}
			if(x <= 800){
				$("a[href='#negeri']").attr('href', 'homeOHU.html');
				$("a[href='#timeline']").attr('href', 'mtimeline.html');
				$("a[href='#organigram']").attr('href', 'morganigram.html');
				$("a[href='#kontak']").attr('href', 'mkontak.html');
			}
		});
	});

});
