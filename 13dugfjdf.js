$(function () {

  // Exit intent (desktop)
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

  // Click outside to close (safe)
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".lightbox").length) {
      $(".lightbox").slideUp();
    }
  });

});
