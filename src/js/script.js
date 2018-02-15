$( ".button-mobile svg" ).click(function() {
	if ( $(this).hasClass("open") ) {
		$(this).toggleClass("open");
		$(".header__logo").toggleClass("open");
		$(".header").toggleClass("opened");
		$(".header__city").slideUp(300);
		$(".head-menu").slideUp(300);
		$(".header__search").slideUp(300);
		$(".header__city-list").slideUp(300);
		
	}
	else{
		$(this).toggleClass("open");
		$(".header__logo").toggleClass("open");
		$(".header").toggleClass("opened");
		$(".header__city").slideToggle(300);
		$(".head-menu").slideToggle(300);
		$(".header__search").slideToggle(300);
	}
	
});

$( ".header__city p" ).click(function() {
	$(this).toggleClass("open");
	$(".header__city-list").slideToggle(300);
	if ($(window).width() <= '767'){
        $(".head-menu").slideToggle(300);
		$(".header__search").slideToggle(300);;
    }
	
});

