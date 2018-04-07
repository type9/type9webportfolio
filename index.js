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

	//Subpage Display
	$(".slidebutton").click(function() {
		$(this).css('color' , '#1a1a1a');
		var s = $(this).text();
		console.log(s);
		if(s != "^") {
			$(this).siblings().css('color', '#990000');
			$("#" + s + "page").siblings().animate({width: "0%"}, 150, "linear");
			$("#" + s + "page").siblings().hide();
			$("#" + s + "page").show();
			$("#" + s + "page").animate({width: "100%"}, 150, "linear");
		}
	});

	//Nav bar extend
	$(".backbutton").click(function() {
		$("#defaultnav").animate({paddingLeft: "5%", width: "100%"}, 200, "linear");
		$(".navbutton").animate({marginLeft: "9%"}, 200, "linear");
		$(".navbutton").show();
		$(this).hide();
		$(this).parent().hide();
		$(this).siblings().hide();
		$(".subpage").animate({width: "0%"}, 150, "linear");
		$(".slidebutton").css('color', '#990000');
	});

});