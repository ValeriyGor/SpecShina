

$( ".header__city p" ).click(function() {
	$(this).toggleClass("open");
	$(".header__city-list").slideToggle(300);
});