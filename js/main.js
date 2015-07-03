$(document).ready(function() {
    $(".jumbotron").css("height", $(window).height() - 50);
    $(".maincontent .col-md-5").css("height", $(".maincontent img").height());
    $(".maincontent .col-md-5").css("line-height", $(".maincontent img").height() + "px");
    if($(window).width() < 800){
    	$(".jumbotron").css("background-size", "auto");
    	$(".maincontent .col-md-5").css("height", "auto");
    	$(".maincontent .col-md-5").css("line-height", "normal");
	}
	else{
		$(".jumbotron").css("background-size", "100% 100%");
    	$(".maincontent .col-md-5").css("height", $(".maincontent img").height());
    	$(".maincontent .col-md-5").css("line-height", $(".maincontent img").height() + "px");
	}
});
$(window).resize(function() {
    $(".jumbotron").css("height", $(window).height());
    $(".maincontent .col-md-5").css("height", $(".maincontent img").height());
    $(".maincontent .col-md-5").css("line-height", $(".maincontent img").height() + "px");
    if($(window).width() < 800){
    	$(".jumbotron").css("background-size", "auto");
    	$(".maincontent .col-md-5").css("height", "auto");
    	$(".maincontent .col-md-5").css("line-height", "normal");
    }
    else{
    	$(".jumbotron").css("background-size", "100% 100%");
    	$(".maincontent .col-md-5").css("height", $(".maincontent img").height());
    	$(".maincontent .col-md-5").css("line-height", $(".maincontent img").height() + "px");
	}
});
function hideloader() {
    $('.loader').addClass('loaded');
}