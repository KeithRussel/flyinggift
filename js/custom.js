$('carouselExampleIndicators a').click(function(){
  $(this).toggleClass('active');
//  return false;
});

$('.carousel').each(function() {
    var carousel = $(this),
        carouselId = '#' + $(this).attr('id');

    $(carousel).find('a[class^="carousel-control"]').each(function() {
        $(this).click(function(event) {
            event.preventDefault();
            $(carouselId).carousel($(this).attr('data-slide'));
        });
    });
});

(function($) {
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 1000,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
//			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			$('input#minVal').val( "$" + ui.values[ 0 ]);
			$('input#maxVal').val( "$" + ui.values[ 1 ]);
		}
	});
//$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//" - $" + $( "#slider-range" ).slider( "values", 1 ) );
} )(jQuery);


$('input[type=checkbox]').on('change', function() {
  var div = $(this).closest('.form-check');
  $(this).is(":checked") ? div.addClass("light-blue-bold") : div.removeClass("light-blue-bold");
});