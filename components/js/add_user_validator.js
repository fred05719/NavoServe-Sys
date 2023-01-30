$(document).ready(function() {

  $.validator.setDefaults({
    errorClass: 'help-block',
    highlight: function(element) {
      $(element)
        .closest('input')
        .addClass('invalid');
      $(element)
        .closest('select')
        .addClass('invalid');
    },
    unhighlight: function(element) {
      $(element)
        .closest('input')
        .removeClass('invalid')
      $(element)
        .closest('select')
        .removeClass('invalid')
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'select') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element.parent());
      }
    },
  });

  $.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element) 
      || value.length >= 6
      && /\d/.test(value)
      && /[a-z]/i.test(value);
  }, 'Your password must be at least 6 characters long and contain at least one number and one char.');

  // $.validator.addMethod('notPhone', function(value, element, param) {
  //   return this.optional(element) || !isNaN(value) && value.length < 13;
  // }, 'Please enter a valid contact number.')


  $("#new_admin_form").validate({
    rules: {
      first_name: {
        required: true
      },
      last_name: {
        required: true,
      },
      password: {
        required: true,
        // strongPassword: true
      },
      // con_num: {
      //   required: true,
      //   notPhone: true
      // },
      cpassword: {
        required: true,
        equalTo: '#password'
      },
    },
    messages: {
      first_name: {
        required: "Please enter your first name."
      },
      last_name: {
        required: "Please enter your last name."
      },
      email: {
        required: "Please enter your email address."
      },
      // con_num: {
      //   required: "Please enter your contact number."
      // },
      password: {
        required: "Please enter a password."
      },
      cpassword: {
        equalTo: "Your password and confirmation password must match.",
        required: "Please confirm your password."
      }, 
    }
  });


});