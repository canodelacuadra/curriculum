$(document).ready(function(){
//tooltip
$('*[data-toggle="tooltip"]').mouseover(
function(){
$(this).tooltip();
}
);

$('#blogroll').mouseover(
function(){
$('#blogroll').css("animationPlayState" ,"paused");
}
);
$('#blogroll').mouseout(
function(){
$('#blogroll').css("animationPlayState" ,"running");
}
);
$('#nombre').slideDown(2000);

$('#acordeon').delay(2000).show('fold',3000);
$('#iconsup').delay(1000).fadeIn(2000);
$('#redes').delay(3000).fadeIn(5000);
$('footer').delay(6000).fadeIn(5000);

//fin de document ready
});


