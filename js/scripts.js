// Twitter button - should be called outside document.ready

$(document).ready(function(){
  // <!-- smooth scrolling -->
  var $root = $('html, body');
  $('#navbar-example a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

  //tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //submit button in form
  $('#form-btn').on('click', function() {
    var comment = $('.message-box').val();
    var name = $('#form-name').val();
    var email = $('#form-email').val();
    if (comment === "") {
      $('.message-box').css("border-color", "red");
      console.log("message box empty");
    } else if (email === "") {
      $('#form-email').css("border-color", "red");
      console.log("email empty");
    } else {
      $('#visible-comment').html("Thank you for your message! You submitted the following:<br>Name: "+name+"<br>Email: "+email+"<br>Message: "+comment).addClass("form-submitted");
      $('#form-textbox').hide();
      $('#form-email').hide();
      $('#form-name').hide();
      $('#form-btn').hide();
      // $('.message-box').css("border-color", "green");
      return false;
    };
  });

  //Text box to change background colour on hover
  $('#form-textbox') .hover(
    function() {
      $(this).css("background-color", "var(--quite-light)");
    }, function(){
      $(this).css("background-color", "white");
    });

  //track key strokes in message box
  $(".message-box").on("keyup", function() {
    //set the length of the content of the textarea to a variable
    //show a running character count to the user
    var charCount = $(".message-box").val().length;
    $("#char-count").html("Nr. of characters: "+charCount);
    if(charCount > 10) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "white");
      console.log("keyup happened");
    };
  });

  // work section
  for(var i = 0; i < works.length; ++i ) {
    $("#work").append('\
    <div class="col-6 col-md-4">\
      <a href="' + works[i].url + '" class="work-img">\
        <img class="img-fluid workpics" src="' + works[i].pic + '">\
        <span class="info"><p class="proj-title">Title:</p>"' + works[i].title + '"</span>\
       </a>\
    </div>\
    ');
    var images = $("#work img");
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid var(--med-dark)");
    } else {
      $(images[i]).css("border", "2px solid var(--bright)");
    };
  };
  $(".work-img").mouseenter( function() {
    $(".info", this).show();
    $(".workpics", this).css("opacity", "0.1");
  }).mouseleave(function(){
    $(".info", this).hide();
    $(".workpics", this).css("opacity", "1");
  });
});

// Google Maps
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.5200, lng: 13.4050},
    zoom: 12
  });
}
