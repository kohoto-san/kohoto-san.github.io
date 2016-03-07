$(document).ready(function() {

	var loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 5600, easingIn : mina.easeinout } );
	loader.show();


    if( $(window).width() > 600 ){
	    $('#fullpage').fullpage({
		    verticalCentered:false,
		    scrollOverflow: true,
		    navigation: true,

	     	onLeave: function(index, nextIndex, direction){
	            $('.section').addClass('transition');
	        },

	        afterLoad: function(anchorLink, index){
	            $('.section').removeClass('transition');
	        }
		});

		var images_list = $('.images-intro img');

		var image_id = 0;
		var image_last_id = $('.images-intro img').length;

		setInterval(function(){
			if(image_id == image_last_id){
				image_id = 0;
				$('.images-intro img').eq(image_last_id-1).hide();
			}
			else{
				$('.images-intro img').eq(image_id-1).hide();
			}

			$('.images-intro img').eq(image_id).show();
			image_id += 1;

		}, 500);

	}

	
	$('.gallery-list').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',

		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',


		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}

	});


	$('.item').on('click',function (e) {
		e.preventDefault();
		var link = $( this ).attr( 'href' );
		
		loader.show();

		setTimeout( function() {
			window.location.href = link;
		}, 1000 );
	});

	// Timeline Start
	if( $(window).width() > 1100 ){
		var col_left = 0;
		var col_right = 70;
		var counter = 0;

		$('.timeline-item').each(function(){

			if( counter == 0 ){
				$(this).addClass('timeline-item-left')
				$(this).css('top', col_left);
				col_left += parseInt( $(this).outerHeight(true) );
				counter = 1;
			}
			else if( counter == 1 ){
				$(this).addClass('timeline-item-right')
				$(this).css('top', col_right);
				col_right += parseInt( $(this).outerHeight(true) );
				counter = 0;
			}

		});

		if(col_left > col_right){
			$('.timeline').css('height', col_left);
		}
		else{
			$('.timeline').css('height', col_right);
		}
	}
	// Timeline END


	$(window).load(function() {
		setTimeout( function() {
			$('.body').css('visibility', 'visible');
			setTimeout( function() {
				loader.hide();
			}, 1000 );
			
		}, 5600 );
	}); // window.load

}); // ready