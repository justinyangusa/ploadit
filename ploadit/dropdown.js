$(document).ready(function(){
	$(".dropable").hover(function(){
		$("#dropdown").css("visibility","visible");
	$ }, function(){
		$("#dropdown").css("visibility","hidden");
	});
});
/*
$(document).ready(function(){
	$(".dropable").mouseenter(function(){
		$("#dropdown").slideDown("medium");
	});
	$(".dropable").mouseleave(function(){
		$("#dropdown").slideUp("medium");
	});
});*/