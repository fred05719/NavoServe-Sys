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
    return this.optional(element) || (new Date().getTime() < new Date($('#event-date').val()).getTime())
  }, 'You can\'t set previous date.');


  $("#event_form").validate({
    rules: {
      'event_name': {
        required: true
      },
      'max_appl': {
        required: true,
      },
      'event-date': {
        required: true,
        checkCloseTime: true,
      },
      'event-start-time': {
        required: true,
      },
      'event-end-time': {
        required: true,
      },
      'event_name': {
        required: true
      }
    },
    messages: {
      event_name: {
        required: 'Please select event name'
      },
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