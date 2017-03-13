$('[data-toggle]').click(function(ev){
  ev.stopPropagation();
  var selector = $(this).data('toggle');
  $(selector).toggleClass('is-toggled');
});

$(document).click(function(){
  $('.is-toggled').removeClass('is-toggled');
});
