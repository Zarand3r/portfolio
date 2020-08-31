setTimeout(function() {
    $("#mypic").fadeOut();
    $("#preloader").delay(1000).fadeOut("slow");
}, 2000);

$( document ).ready(function() {
  $("#container").html('<div id="preloader"><img id="mypic" alt ="mypic" src ="assets/img/richard.jpg"/></div>');
  var w = $("#intro").width()
  var cover = document.getElementById("cover");
  cover.style.width = w + 'px';

  $(window).resize(function() {
    w = $("#intro").width()
    cover.style.width = w + 'px';
  });
  $(window).scroll(function () {
    cover.style.opacity = $(this).scrollTop() / 1000;
  });
});
