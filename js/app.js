
var action = "click";
var speed = "500";

$(document).ready(function(){
	$('li.question').on(action, function(){
		$(this).next().slideToggle(speed)
			.siblings('li.answer')
				.slideUp();
		var img = $(this).children('img');
		//remove 
		$('img').not(img).removeClass('rotate');
		//toggle rotate class
		img.toggleClass('rotate');

	});

});