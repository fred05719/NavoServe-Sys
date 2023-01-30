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

  $.validator.addMethod('checkCloseTime', function(value, element) {
    return this.optional(element) || (new Date(value).getTime() > new Date($('#date_open').val()).getTime())
  }, 'Invalid date and time.');


  $("#new_socser_form").validate({
    rules: {
      socser_name: {
        required: true
      },
      max_appl: {
        required: true,
      },
      date_open: {
        required: true,
      },
      date_closed: {
        required: true,
        checkCloseTime: true
      },
    },
    messages: {
      socser_name: {
        required: "Please select social service."
      },
      max_appl: {
        required: "Please enter max applicant."
      },
      date_open: {
        required: "Please choose opening date."
      },
      date_closed: {
        required: "Please choose closing date."
      },
    }
  });


});