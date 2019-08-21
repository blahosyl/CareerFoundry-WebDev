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
    $('#visible-comment').html("Thank you for your message! You submitted the following:<br>Name: "+name+"<br>Email: "+email+"<br>Message: "+comment).addClass("form-submitted");
    $('#form-textbox').hide();
    $('#form-email').hide();
    $('#form-name').hide();
    $('#form-btn').hide();
    return false;
  });
  $('#form-textbox') .hover(
    function() {
      $(this).css("background-color", "var(--quite-light)");
      }, function(){
      $(this).css("background-color", "white");
    });
});
