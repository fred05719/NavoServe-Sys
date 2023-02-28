$(document).ready(function () {

  // $('#update_event').click(() => {
  //   $("#event_form").submit();
  // });


  // $('#event_form').submit(function (e) {
  //   e.preventDefault();
  //   console.log('BOBO')
  //   // var event_id = $('.event_id_update').text();
  //   // var event_name = $("#event_name option:selected").text();
  //   // var event_start_date = $("#event_start_date").val();
  //   // var event_end_date = $("#event_end_date").val();
  //   // var event_color = $("#event_name").val();
  //   // var max_appl = $("#max_appl").val();

  //   // if ((event_color != '') && (max_appl != '')) {

  //   //   console.log(event_id)
  //   //   // var formData = new FormData();
  //   //   // formData.append('id', id);
  //   //   // formData.append('event_name', event_name);
  //   //   // formData.append('max_appl', max_appl);
  //   //   // formData.append('date_start', eventDate + ' ' + eventStartTime);
  //   //   // formData.append('date_end', eventDate + ' ' + eventEndTime);
  //   //   // formData.append('num_appl', 0);
  //   //   // formData.append('event_color', event_color);
  //   //   // formData.append('event_status', true);

  //   //   // $.ajax({
  //   //   //   type: "POST",
  //   //   //   url: "sql/soc_services/add.php",
  //   //   //   data: formData,
  //   //   //   processData: false,
  //   //   //   contentType: false,
  //   //   //   success: function (data) {
  //   //   //     console.log(data);
  //   //   //     if (data == 'SUCCESS') {
  //   //   //       db.collection('soc_services').add({
  //   //   //         socserID: formData.get('id'),
  //   //   //         event_name: formData.get('event_name'),
  //   //   //         max_appl: formData.get('max_appl'),
  //   //   //         date_start: formData.get('date_start'),
  //   //   //         date_end: formData.get('date_end'),
  //   //   //         num_appl: formData.get('num_appl'),
  //   //   //         event_color: formData.get('event_color'),
  //   //   //         event_status: formData.get('event_status'),
  //   //   //       }).then(() => {
  //   //   //         db.collection('entry_count').doc("soc_services").update({ count: (newCount) });
  //   //   //         $.alert({
  //   //   //           title: 'Success',
  //   //   //           content: 'Event added successfully',
  //   //   //         });
  //   //   //         $('#event_entry_modal').modal('hide');
  //   //   //         clearField();

  //   //   //       }).catch((error) => {
  //   //   //         $.alert({
  //   //   //           title: 'Error',
  //   //   //           content: error.message,
  //   //   //         });

  //   //   //       });
  //   //   //     } else {
  //   //   //       $.alert({
  //   //   //         title: 'Failed',
  //   //   //         content: 'Event not added',
  //   //   //       });
  //   //   //     }
  //   //   //   }
  //   //   // });
  //   // }
  // });


  // $('#edit_event').click(function () {
  //   $('#event_form').removeClass('add');
  //   $('#event_form').addClass('update');

  //   var event_id = $('.event_id_info').text();
  //   var event_title = $('.event_title').text();
  //   var max_appl = $('.max_appl_info').text();
  //   var start = $('.open_date_info').text();
  //   var end = $('.close_date_info').text();

  //   $("#event_name option").filter(function () {
  //     //may want to use $.trim in here
  //     return $(this).text() == event_title;
  //   }).prop('selected', true);
  //   $("#max_appl").val(max_appl);
  //   $('#event-date').val(moment(start).format('YYYY-MM-DD'));
  //   $('#event-start-time').val(moment(start).format('hh:mm'));
  //   $('#event-end-time').val(moment(end).format('hh:mm'));

  //   $('#view_socser_modal').modal('hide');
  //   $('#save_event').css('display', 'none');
  //   $('#update_event').css('display', 'block');
  //   $('.event_modal_title').text('Edit event');
  //   $('.event_id_update').text(event_id);
  //   $('#event_entry_modal').modal('show');

  // });

  // function checkIfAltered() {

  // }

});