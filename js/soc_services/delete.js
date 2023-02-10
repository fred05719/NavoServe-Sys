$(document).ready(function () {

  $('#del_event').click(function () {
    var doc_id = $('.doc_id').text();
    var event_id = $('.event_id').text();
    $.confirm({
      title: 'Delete event?',
      content: "Are you sure you want to delete this event?",
      animation: 'scale',
      closeAnimation: 'scale',
      animationSpeed: 200,
      boxWidth: '300px',
      useBootstrap: false,
      onOpenBefore: function () {
        $('#view_socser_modal').modal('hide');
      },
      buttons: {
        Confirm: {
          text: "Delete",
          btnClass: 'btn-danger',
          action: function () {
            $.ajax({
              type: 'post',
              url: 'sql/soc_services/alter.php',
              data: {
                'event_id': event_id,
                'action': '_DELETE'
              },
              success: function (data) {
                console.log(data);
                if (data == 'SUCCESS') {
                  firebase.firestore().collection('soc_services').doc(doc_id).delete().then(() => {
                    $('#view_socser_modal').modal('hide');
                    $('.toast').toast('show').addClass('success').removeClass('error');
                    $('.toast-body').text('Event has been deleted.');
                  }).catch(err => {
                    $('#view_socser_modal').modal('hide');
                    $('.toast').toast('show').addClass('error').removeClass('success');
                    $('.toast-body').text(err);
                  });
                } else {
                  $('#view_socser_modal').modal('hide');
                  $('.toast').toast('show').addClass('error').removeClass('success');
                  $('.toast-body').text('Error occured. Event not deleted.');
                }
              }
            });
          }
        },
        cancel: function () {
          $('#view_socser_modal').modal('show');
        },
      }
    });

  });

});