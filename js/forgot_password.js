$(document).ready(function () {
  const db = firebase.firestore();
  const auth = firebase.auth();

  var email;

  $('#btn_forgot_confirm').click(function () {

    email = $('#forgot_email').val();
    if (!email == '') {
      auth.sendPasswordResetEmail(email).then(() => {
        $('#btn_forgot_confirm').prop('disabled', true);
        var timeleft = 31;
        var downloadTimer = setInterval(function () {
          timeleft--;
          $('#btn_forgot_confirm').text('Resend (' + timeleft + ')');
          if (timeleft <= 0) {
            clearInterval(downloadTimer);
            $('#btn_forgot_confirm').prop('disabled', false);
            $('#btn_forgot_confirm').text('Resend');
          }
        }, 1000);
        $('.toast').toast('show').addClass('success').removeClass('error');
        $('#toast-icon').addClass('bxs-check-circle').removeClass('bxs-error-circle');
        $('.toast-title').text('Password reset email sent');
        $('.toast-body').text('Please check your inbox and follow the instructions');
      }).catch((error) => {
        $('.toast').toast('show').addClass('error').removeClass('success');
        $('#toast-icon').addClass('bxs-error-circle').removeClass('bxs-check-circle');
        $('.toast-title').text('Password reset email not sent');
        $('.toast-body').text(error.message);
      });
    } else {
      $('.toast').toast('show').addClass('error').removeClass('success');
      $('#toast-icon').addClass('bxs-error-circle').removeClass('bxs-check-circle');
      $('.toast-title').text('Password reset email not sent');
      $('.toast-body').text('This field can\'t be empty. Please enter your email');
    }

  });


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



});