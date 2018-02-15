$( ".button-mobile svg" ).click(function() {
	$(this).toggleClass("open");
	$(".header__logo").toggleClass("open");
	$(".header").toggleClass("opened");
	$(".header__city").slideToggle(300);
	$(".head-menu").slideToggle(300);
	$(".header__search").slideToggle(300);
});

$( ".header__city p" ).click(function() {
	$(this).toggleClass("open");
	$(".header__city-list").slideToggle(300);
	if ($(window).width() <= '767'){
        $(".head-menu").slideToggle(300);
		$(".header__search").slideToggle(300);;
    }
	
});