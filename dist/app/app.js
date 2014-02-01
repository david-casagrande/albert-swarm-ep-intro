$('#drawing img').on('load', function(){
	$('#drawing').addClass('show');
});

setTimeout(function(){
	$('#full-bar').addClass('show');
	$('#bars').addClass('show');
}, 2000);

setTimeout(function(){
	$('#full-bar').remove();
	$('.items').addClass('stop');
}, 4000);
