
// Keep track of the name of the pressed
var cname = "";

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
	
	$('content-collection').click(function(){
		cname = $(this).attr('src');
		
		
	})
	
	console.log($(cname));
	
});