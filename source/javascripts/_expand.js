$('[data-expand-parent]').click(function(){
  var $toggle = $(this);
  var parentSelector = $toggle.data('expand-parent');
  var childrenSelector = $toggle.data('expand-children');
  var $parent = $toggle.closest(parentSelector);
  var $children = $parent.children(childrenSelector);
  var delay = $parent.hasClass('is-expanded') ? 116 : 83;

  $toggle.toggleClass('is-active');
  $parent.toggleClass('is-expanded');
  $children.delay(delay / 2).slideToggle(delay);
});
