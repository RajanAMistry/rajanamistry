$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('.nav-link').on('click', function (evt) {
	$('.nav-link.active').toggleClass('active');
    $(this).toggleClass('active');
});