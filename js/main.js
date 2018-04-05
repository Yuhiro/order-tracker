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

$('.trasportation-select').click( function() {
  $(this).addClass('open');
  console.log('hi');
});

$('.transport-option.walking').click( function(e) {
  $('.trasportation-select').addClass('walking').removeClass('driving open');
  e.stopPropagation();
});

$('.transport-option.driving').click( function(e) {
  $('.trasportation-select').addClass('driving').removeClass('walking open');
  e.stopPropagation();
});