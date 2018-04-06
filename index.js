$(document).ready(function(){

	//Nav bar retract
	$(".navbutton").click(function() {
		$(this).parent().animate({paddingLeft: "30px", width: "120px"}, 200, "linear");
		$(this).animate({marginLeft: "0%"}, 200, "linear");
		$(this).siblings().hide();
		var s = $(this).text();
		$("#" + s + "nav").show();
		$("#" + s + "nav").children().show();
	});
	//Nav bar extend
	$(".backbutton").click(function() {
		$("#defaultnav").animate({paddingLeft: "10%", width: "100%"}, 200, "linear");
		$(".navbutton").animate({marginLeft: "9%"}, 200, "linear");
		$(".navbutton").show();
		$(this).hide();
		$(this).parent().hide();
		$(this).siblings().hide();
	});

});