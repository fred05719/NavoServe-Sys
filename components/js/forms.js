$(document).ready(function () {

  // SHOW INPUT OPTION
  $(".form-control").on("keyup", function () {
    if (!$(this).val()) {
      $(this).siblings('button').css("display", "none");
    } else {
      $(this).siblings('button').css("display", "block");
    }
  });

  // CLEAR TEXTBOX
  $(".clear_input").on("click", function () {
    $(this).siblings('input').focus();
    $(this).siblings('input').val('');
    $(this).css("display", "none");
  });

  // SHOW PASSWORD
  $(".show_password").mousedown(function () {
    $(this).siblings('input').focus();
    $(this).siblings('input').attr("type", "text");
    $(this).children().toggleClass("bi-eye-fill");
    $(this).children().toggleClass("bi-eye-slash-fill");
  })
    .mouseup(function () {
      $(this).siblings('input').focus();
      $(this).siblings('input').attr("type", "password");
      $(this).empty().html('<i class="bi bi-eye-slash-fill"></i>');
    });

  // FORM SELECT NO VALUE COLOR
  $(".form-select").on('change', function () {
    if ($(this).val() == '') {
      $(this).removeClass('selected');
    } else {
      $(this).addClass('selected');
    }
  });
  

  $("#date_open").keydown(function(event) { 
    return false;
  });
  $("#date_closed").keydown(function(event) { 
    return false;
  });


});

