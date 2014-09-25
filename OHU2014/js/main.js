$(document).ready(function(){

	//CERITA
	$(function(){
	var cerita = false;
	$("#cerita").transition({padding: '10% 0% 2%'});
    $("#sleft").transition({margin:'50% auto auto',width:'24%', opacity:0});
	$("#sright").transition({margin:'50% auto auto',width:'24%',opacity:0});
	$('#cerita').waypoint(function() {
		if(!cerita){
	//		hasil1 = "true";
			cerita = true;
			$("#cerita").transition({padding: '10% 15% 2%'});
		  	$("#sleft").transition({margin:'2% auto auto 0', width:'43%',opacity:1}, 1000);
			$("#sright").transition({margin:'2% auto auto',width:'53%',opacity:1}, 1000);
		}
		else{
	//		hasil1 = "false";
			cerita = false;
			$("#cerita").transition({padding: '10% 0% 2%'});
     		$("#sleft").transition({margin:'50% auto auto',width:'24%', opacity:0},1000);
			$("#sright").transition({margin:'50% auto auto',width:'24%',opacity:0},1000);
		}
	}, { offset: '50%' });

	// NEGARA
	var negara = false;
	$("#istana").find("img").transition({opacity:0, scale:0,rotate: '-360deg' });
	$("#istana").transition({opacity:0});
	$('#home').waypoint(function() {
		if(!negara){
	//		hasil2 = "true";
			negara = true;
			$("#istana1").find("img").transition({opacity:1, scale:1, rotate:'360deg'},1000);
			$("#istana2").find("img").transition({opacity:1, scale:1, rotate:'360deg', delay:'800'},1000);
			$("#istana3").find("img").transition({opacity:1, scale:1, rotate:'360deg', delay:'1600'},1000);
		  	$("#istana").transition({opacity:1}, 3000);
		}
		else{
	//		hasil2 = "false";
			negara = false;
     		$("#istana").transition({opacity:0}, 500).find("img").transition({opacity:0, scale:0,rotate: '-360deg' },500);
		}
	}, { offset: '80%' });
 	
 	// KONTAK
	var kontak = false;
	$("#kontak").find("ul").transition({margin: '50% auto auto'});
	$('#kontak').waypoint(function() {
		if(!kontak){
//			hasil5 = "true";
			kontak = true;
		  	$("#kontak").find("ul").transition({margin: '0px auto auto'}, 2000);
		}
		else{
//			hasil5 = "false";
			kontak = false;
     		$("#kontak").find("ul").transition({margin: '50% auto auto'}, 2000);
		}
	}, { offset: '150%' });
});


	
	$(function(){
		document.getElementById('cssmenu').style.position="relative";
		$(window).scroll(function() {
			if (document.body.scrollTop > document.getElementById('cssmenu').offsetTop )
				{
					document.getElementById('cssmenu').style.position="fixed";
				}
			if (document.body.scrollTop < document.getElementById('navi').offsetTop )
				{
					document.getElementById('cssmenu').style.position="relative";
				}
		});
	});

	$(function(){
		$("#timeline li").hover(
			function(){
				$(this).siblings('li').transition({opacity: '0'}, 1000);
			},
			function(){
				$(this).siblings('li').transition({opacity: '1'}, 1000);
	  	});	
	});

	$(function(){
		$("#kontak li").hover(
			function(){
				$(this).siblings('li').find('img').transition({scale: '0.5'}, 1000);
			},
			function(){
				$(this).siblings('li').find('img').transition({scale: '1'}, 1000);
	  	});	
	});

});




