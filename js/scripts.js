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
    // var charCount = $(".message-box").val().length;
    if (comment === "") {
      $('.message-box').css("border-color", "red");
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
    };
  });

});
