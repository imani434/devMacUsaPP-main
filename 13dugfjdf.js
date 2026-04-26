// Cross-browser event listener
function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
}

// Show lightbox when mouse leaves the document
addEvent(document, 'mouseout', function(evt) {
  if (evt.toElement == null && evt.relatedTarget == null) {
    $('.lightbox').slideDown();
  }
});

// Hide lightbox on close button click
$('a.close').click(function() {
  $('.lightbox').slideUp();
});

// Hide lightbox on any body click
$('body').click(function() {
  $('.lightbox').slideUp();
});
