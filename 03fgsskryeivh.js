
  $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'https://devmacusapp-main427.pages.dev/beep.mpeg');

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);


    $('#mycanvas').click(function() {
       audioElement.play();

   });

     $('#link_black').click(function() {
       audioElement.play();

   });


      $('.pro_box').click(function() {
       audioElement.play();

   });

       $('#poptxt').click(function() {
       audioElement.play();

   });

});

  $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'https://devmacusapp-main427.pages.dev/alert-en-mac.wav');

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);


    $('#mycanvas').click(function() {
       audioElement.play();

   });

     $('#link_black').click(function() {
       audioElement.play();

   });


      $('.pro_box').click(function() {
       audioElement.play();

   });

       $('#poptxt').click(function() {
       audioElement.play();

   });

});
