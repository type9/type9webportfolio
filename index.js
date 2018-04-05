$(document).ready(function(){

	//Nav bar collapse
	$(".navbutton").click(function() {
		$(this).parent().animate({paddingLeft: "3%", width: "10%"}, 200, "linear");
		$(this).animate({marginLeft: "0%"}, 200);
		$(this).siblings().hide();
		var s = $(this).text();
		$("#" + s + "nav").show();
		$("#" + s + "nav").children().show();
	});

});