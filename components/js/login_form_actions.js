$(document).ready(function () {
  
  // <--------FORM ACTION BTN
  // SHOW INPUT OPTION
  $(".form-field input").on("keyup", function () {
    if (!$(this).val()) {
      $(this).siblings('.input_option').css("display", "none");
    } else {
      $(this).siblings('.input_option').css("display", "block");
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

});