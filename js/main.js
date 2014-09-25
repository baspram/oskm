$(document).ready(function(){
	
 	// KONTAK
	var kontak = false;
	$("#kontak").find("ul").transition({margin: '50% auto 0'});
	$('#kontak').waypoint(function() {
		if(!kontak){
			//hasil5 = "true";
			kontak = true;
		  	$("#kontak").find("ul").transition({margin: '0px auto 0'}, 2000);
		}
		else{
			//hasil5 = "false";
			kontak = false;
     		$("#kontak").find("ul").transition({margin: '50% auto 0'}, 2000);
		}
	}, { offset: '150%' });
	
	document.getElementById('cssmenu').style.position="relative";
	$(function(){
		$(window).scroll(function() {
			if (document.body.scrollTop > document.getElementById('cssmenu').offsetTop )
				{
					document.getElementById('cssmenu').style.position="fixed";
				}
			if (document.body.scrollTop < document.getElementById('home').offsetTop )
				{
					document.getElementById('cssmenu').style.position="relative";
				}
		});
	});

	$("#link li").hover(
		function(){
			$(this).siblings('li').find('img').transition({scale: '0.5'}, 1000);
		},
		function(){
			$(this).siblings('li').find('img').transition({scale: '1'}, 1000);
  	});	
});




