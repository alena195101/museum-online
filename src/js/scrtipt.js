document.addEventListener("DOMContentLoaded", ready );
window.onresize = function(event) {
    ready();
};

function ready() {
	var window_weight = $(window).width();
	if (window_weight <= 1000) {
		$( ".row" ).removeClass( "row-cols-3" );
		$( ".row" ).addClass( "row-cols-2" );
	}
}

