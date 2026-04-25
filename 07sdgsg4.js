$(document).ready(function () {

  // Exit intent (desktop only)
  document.addEventListener("mouseout", function (e) {
    if (!e.relatedTarget && !e.toElement) {
      $(".lightbox").stop(true, true).slideDown();
    }
  });

  // Close button
  $("a.close").on("click", function (e) {
    e.preventDefault();
    $(".lightbox").slideUp();
  });

  // Optional: click outside closes popup
  $("body").on("click", function (e) {
    if (!$(e.target).closest(".lightbox").length) {
      $(".lightbox").slideUp();
    }
  });

});
