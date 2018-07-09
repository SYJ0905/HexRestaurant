$(document).ready(function() {

	$('.jq-menu-mobile').click(function(e) {
		/* Act on the event */
		e.preventDefault();
		$('.jq-sidebar').stop().slideToggle();
	});	

});