$(document).ready(function(){
			$("#link img").hover(
		  function(){
		  	$(this).transition({opacity: '0.5'});
		  	$(this).siblings(".desc").show("4000");
		  },
		  function(){
		  	$(this).transition({opacity: '1'});
		  	$(this).siblings(".desc").hide("4000");
		  });	
		});