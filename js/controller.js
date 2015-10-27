
// Keep track of the name of the pressed
var cname = '';

var sDetail = '<h2>Strayhorn</h2><p>Like a brother to the Ellington, the Strayhorn delivers a seemingly basic form with quiet confidence in shape and function. With an air of charm, the Strayhorn offers a splash of sophistication without missing a beat.</p><p>The Strayhorn fits slightly narrow at the forefoot. Consider a half size larger than normal.</p><p>Supple tumbled leather upper with waxed cotton cord laces. Leather lined upper and footbed for breathability on a modern rubber cupsole for maximum comfort.</p>';

var hDetail = '<h2>Hamilton</h2><p>An everyday gentleman’s staple, the Hamilton fuses a blucher moc upper with a sporty, low profile cupsole. With tonal stitching, metal eyelets and soft collar lining details, the Hamilton works effortlessly in any situation.</p><p>The Hamilton fits slightly narrow at the forefoot. Consider a half size larger than normal.</p><p>Supple tumbled leather upper with perforated suede accents and round cotton laces. Leather lined upper and footbed for breathability on a modern rubber cupsole for maximum comfort.</p>';

var eDetail = '<h2>Ellington</h2><p>With a simple yet elegant design, the Ellington defies definition with each step. Delivering sophistication without pretense, the Ellington is a celebration of style and substance.</p><p>The Ellington fits slightly narrow at the forefoot. Consider a half size larger than normal.</p><p>Waxed full grain leather upper with waxed cotton cord laces. Leather lined upper and footbed for breathability on a modern rubber cupsole for maximum comfort.</p>';

$(document).ready(function(){
	$('.img-other').click(function(){
		
		// Ellington Detail Page
		if($(this).attr('src') == 'img/Eshoe4A.png'){
			$('.img-highlight').attr('src', 'img/Eshoe4A.png' );
		}
		else if($(this).attr('src') == 'img/Eshoe4B.png'){
			$('.img-highlight').attr('src', 'img/Eshoe4B.png' );
		}
		else if($(this).attr('src') == 'img/Eshoe4C.png'){
			$('.img-highlight').attr('src', 'img/Eshoe4C.png' );
		}
		
		// Strayhorn Detail Page
		if($(this).attr('src') == 'img/Sshoe4A.png'){
			$('.img-highlight').attr('src', 'img/Sshoe4A.png' );
		}
		else if($(this).attr('src') == 'img/Sshoe4B.png'){
			$('.img-highlight').attr('src', 'img/Sshoe4B.png' );
		}
		else if($(this).attr('src') == 'img/Sshoe4C.png'){
			$('.img-highlight').attr('src', 'img/Sshoe4C.png' );
		}
		
		// Hamilton Detail Page
		if($(this).attr('src') == 'img/Hshoe2A.png'){
			$('.img-highlight').attr('src', 'img/Hshoe2A.png' );
		}
		else if($(this).attr('src') == 'img/Hshoe2B.png'){
			$('.img-highlight').attr('src', 'img/Hshoe2B.png' );
		}
		else if($(this).attr('src') == 'img/Hshoe2C.png'){
			$('.img-highlight').attr('src', 'img/Hshoe2C.png' );
		}
		
	});
	
	$('.feature-img').click(function(){
		var name1 = "";
		var name2 = "";
		
		name1 = $(this).attr('src');
		name2 = $('.collection-feature').attr('src');
		
		if(name2 == 'img/Fall Collection/Fall1A.png'){
			name2 = 'img/Fall Collection/Fall1.png';
		}
		else if(name2 == 'img/Fall Collection/Fall2A.png'){
			name2 = 'img/Fall Collection/Fall2.png';
		}
		else if(name2 == 'img/Fall Collection/Fall3A.png'){
			name2 = 'img/Fall Collection/Fall3.png';
		}
		else if(name2 == 'img/Fall Collection/Fall4A.png'){
			name2 = 'img/Fall Collection/Fall4.png';
		}
		else if(name2 == 'img/Fall Collection/Fall5A.png'){
			name2 = 'img/Fall Collection/Fall5.png';
		}
		
		
		if(name1 == 'img/Fall Collection/Fall1.png'){
			name1 = 'img/Fall Collection/Fall1A.png';
		}
		else if(name1 == 'img/Fall Collection/Fall2.png'){
			name1 = 'img/Fall Collection/Fall2A.png';
		}
		else if(name1 == 'img/Fall Collection/Fall3.png'){
			name1 = 'img/Fall Collection/Fall3A.png';
		}
		else if(name1 == 'img/Fall Collection/Fall4.png'){
			name1 = 'img/Fall Collection/Fall4A.png';
		}
		else if(name1 == 'img/Fall Collection/Fall5.png'){
			name1 = 'img/Fall Collection/Fall5A.png';
		}
		
		// Change the information of the collection
		if(name1 == 'img/Fall Collection/Fall1A.png'){
			$('.collection-detail').html(hDetail);
		}
		else if(name1 == 'img/Fall Collection/Fall3A.png' 
			|| name1 == 'img/Fall Collection/Fall4A.png'){
				$('.collection-detail').html(sDetail);	
		}
		else if(name1 == 'img/Fall Collection/Fall2A.png' 
			|| name1 == 'img/Fall Collection/Fall5A.png'){
				$('.collection-detail').html(eDetail);
		}
		
		$('.collection-feature').attr('src', name1);
		$(this).attr('src', name2);
		
	})
	
	// Change the Details Page images
	$('select').change(function(){
		var sItem = $('select').val();
		
		if(sItem == 'Black Leather'){
			$('.img-highlight').attr('src',"img/Eshoe4A.png" );
			$('#img1').attr('src',"img/Eshoe4A.png" );
			$('#img2').attr('src',"img/Eshoe4B.png" );
			$('#img3').attr('src',"img/Eshoe4C.png" );
		}
		else if(sItem == 'Brown Leather'){
			$('.img-highlight').attr('src',"img/Eshoe1A.png" );
			$('#img1').attr('src',"img/Eshoe1A.png" );
			$('#img2').attr('src',"img/Eshoe1B.png" );
			$('#img3').attr('src',"img/Eshoe1C.png" );
		}
		else if(sItem == 'Black Suede'){
			$('.img-highlight').attr('src',"img/Eshoe3A.png" );
			$('#img1').attr('src',"img/Eshoe3A.png" );
			$('#img2').attr('src',"img/Eshoe3B.png" );
			$('#img3').attr('src',"img/Eshoe3C.png" );
		}
		
	})
	
	
	
});