var animationDelay = 10; // default 2000

$(document).ready( function(){
  $('.tracking-button').click();
});

$('.tracking-button').click(function () {
  $('.tracking').addClass('loading');

  // First click - getting details
  setTimeout(function () {
    $('.tracking').removeClass('loading').addClass('open');
  }, animationDelay);
});  


$('.da-closer').click(function(){
  $('.tracking').removeClass('open');
});

$('.transportation-select').click( function() {
  $(this).addClass('open');
});

$('.transport-option.walking').click( function(e) {
  $('.transportation-select').addClass('walking').removeClass('driving open');
  $('.status-ready').addClass('walking').removeClass('driving');
  e.stopPropagation();
});

$('.transport-option.driving').click( function(e) {
  $('.transportation-select').addClass('driving').removeClass('walking open');
  $('.status-ready').addClass('driving').removeClass('walking');
  e.stopPropagation();
});