setTimeout(function() {
    $("#mypic").fadeOut();
    $("#preloader").delay(1000).fadeOut("slow");
}, 2000);

$( document ).ready(function() {
  var h = $(window).height();
  // var cover = document.getElementById("cover");
  // var cover2 = document.getElementById("cover2");
  // cover.style.height = h + 'px';
  // cover2.style.height = h + 'px';
  $("#container").html('<div id="preloader"><img id="mypic" alt ="mypic" src ="assets/img/richard.jpg"/></div>');
});
