$(document).ready(function () {

  const db = firebase.firestore();
  const auth = firebase.auth();


  $('#save_event').click(() => {
    $("#event_form").submit();
    // $('.toast').toast('show');
  });


  $("#event_form").submit(function (e) {
    e.preventDefault();
    
    var event_name = $("#event_name option:selected").text();
    var max_appl = $("#max_appl").val();
    var eventDate = $("#event-date").val();
    var eventStartTime = $("#event-start-time").val();
    var eventEndTime = $("#event-end-time").val();
    var event_color = $("#event_name").val();
    
    if ($("#event_form").valid()) {
      console.log('SUBMIT');

      db.collection("entry_count").doc("soc_services").get().then((doc) => {
        var count = doc.data().count;
        var newCount = count + 1;

        // var code = 'SID' + ((newCount).toString().padStart(6, 0));
        // console.log(id)
        var formData = new FormData();
        // formData.append('id', newCount);
        // formData.append('code', code);
        formData.append('event_name', event_name);
        formData.append('max_appl', max_appl);
        formData.append('date_start', eventDate + ' ' + eventStartTime);
        formData.append('date_end', eventDate + ' ' + eventEndTime);
        formData.append('num_appl', 0);
        formData.append('event_color', event_color);
        formData.append('event_status', true);

        $.ajax({
          type: "POST",
          url: "sql/soc_services/add.php",
          data: formData,
          processData: false,
          contentType: false,
          dataType: "json",
          success: function (data) {
            if (data.status == 'SUCCESS') {
              console.log(data.status);
              db.collection('soc_services').doc(data.id).set({
                event_name: formData.get('event_name'),
                max_appl: formData.get('max_appl'),
                date_start: formData.get('date_start'),
                date_end: formData.get('date_end'),
                num_appl: formData.get('num_appl'),
                event_color: formData.get('event_color'),
                event_status: formData.get('event_status'),
              }).then(() => {
                db.collection('entry_count').doc("soc_services").update({ count: (newCount) });
                $('.toast').toast('show').addClass('success').removeClass('error');
                $('.toast-body').text('Event added successfully');
                $('#event_entry_modal').modal('hide');
                clearField();

              }).catch((error) => {
                $('#event_entry_modal').modal('hide');
                $('.toast').toast('show').addClass('error').removeClass('success');
                $('.toast-body').text(error.message);
                clearField();

              });
            } else {
              $('#event_entry_modal').modal('hide');
              $('.toast').toast('show').addClass('error').removeClass('success');
              $('.toast-body').text('Error has occured. Event not added');
              clearField();
            }
          }
        });
      });
    }
  });

  function clearField() {
    $('.text-box').val('');
    $('.choice-box').prop("selectedIndex", 0);
    $(".form-check-input").prop('checked', false);
    $("#event_start_date").attr('type', 'datetime-local');
    $("#event_end_date").attr('type', 'datetime-local');
    $('#event_start_date').val(moment().format('YYYY-MM-DDTHH:mm'));
    $('#event_end_date').val(moment().format('YYYY-MM-DDTHH:mm'));
  }

});