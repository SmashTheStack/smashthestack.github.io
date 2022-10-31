
$(document).ready(function(){
		$('.fa-bars').click(function(){
			$(this).hide() && $('.fa-times').show();
		});
		$('.fa-times').click(function(){
			$(this).hide() && $('.fa-bars').show();
		});
	});

$(window).on('scroll', function () {
		var menu_area = $('.navbar');
		if ($(window).scrollTop() > 70) {
			menu_area.addClass('sticky_navigation');
			// $('.mainlogo').css("width","auto");
		} else {
			menu_area.removeClass('sticky_navigation');
			// $('.mainlogo').css("width","auto");

		}
	});
//Get the button:
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide') && $('.fa-bars').show() && $('.fa-times').hide();;
})