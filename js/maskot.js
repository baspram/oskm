$(document).ready(function(){
		$("#sleft img").hover(
		  function(){
		  	document.getElementById('isi').innerHTML = " Oska memiliki rasa ingin tahu dan budi pekerti luhur yang harus menjadi cerminan bagi para mahasiswa baru peserta OSKM ITB 2014. Oska membantu para mahasiswa baru agar mempunyai softskill yang baik serta menambah pengetahuan dari rasa ingin tahu.";	  	
		  	$("#des p").show("4000");
		  },
		  function(){
		  	$("#des p").hide("4000");
		  });	

	  $("#sright img").hover(
		  function(){
		  	document.getElementById('isi').innerHTML = " Rafka mencirikan semangat, kepercayaan diri dan pengetahuan. Sifat-sifat yang harus dimiliki mahasiswa untuk menghadapi globalisasi, contohnya AFTA. Para mahasiswa pun diharapkan menjadi generasi yang siap bersaing di dalam pasar bebas." ;
		  	$("#des p").show("4000");
		  },
		  function(){
		  	$("#des p").hide("4000");
		  });
});