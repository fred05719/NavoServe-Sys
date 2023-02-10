$(document).ready(function () {

  const db = firebase.firestore();
  const auth = firebase.auth();

  var events = new Array();
  var calendar;


  $('.form-check-input').change(function () {

    if ($(".form-check-input").is(':checked')) {
      $("#event_start_date").attr('type', 'date');
      $("#event_end_date").attr('type', 'date');

      $('#event_start_date').val(moment().format('YYYY-MM-DD'));
      $('#event_end_date').val(moment().format('YYYY-MM-DD'));
    } else {
      $("#event_start_date").attr('type', 'datetime-local');
      $("#event_end_date").attr('type', 'datetime-local');

      $('#event_start_date').val(moment().format('YYYY-MM-DDTHH:mm'));
      $('#event_end_date').val(moment().format('YYYY-MM-DDTHH:mm'));

    }

  });

  $('.btn-close').click(clearField);

  function clearField() {
    $('.text-box').val('');
    $('.choice-box').prop("selectedIndex", 0);
    $(".form-check-input").prop('checked', false);
    $("#event_start_date").attr('type', 'datetime-local');
    $("#event_end_date").attr('type', 'datetime-local');
    $('#event_start_date').val(moment().format('YYYY-MM-DDTHH:mm'));
    $('#event_end_date').val(moment().format('YYYY-MM-DDTHH:mm'));
  }

  function removeObjectWithId(arr, event_id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.event_id === event_id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }

    return arr;
  }

  calendar = $('#calendar_socser').fullCalendar({
    plugins: ['dayGrid', 'interaction'],
    buttonText: {
      month: 'Grid View',
      listMonth: 'List View'
    },
    header: {
      left: 'prev, next today',
      center: 'title',
      right: 'month, listMonth,'
    },
    defaultView: 'month',
    timeZone: 'local',
    selectable: true,
    selectHelper: true,
    select: function (start, end) {
      console.log(new Date('08:00').toLocaleTimeString());
      // alert(moment(start).format('YYYY-MM-DDTHH:mm'));
      // alert(moment(end).format('YYYY-MM-DDTHH:mm'));
      $('#event-date').val(moment(start).format('YYYY-MM-DD'));
      $('#event-start-time').val('08:00');
      $('#event-end-time').val('17:00');
      $('#save_event').css('display', 'block');
      $('#update_event').css('display', 'none');
      $('.event_modal_title').text('Add new event');
      $('#event_entry_modal').modal('show');
    },
    events: events,
    eventRender: function (event, element, view) {
      element.bind('click', function () {
        $('#view_socser_modal').modal('show');
        $('.event_id_info').text(event.event_id);
        $('.event_title').text(event.title);
        $('.max_appl_info').text(event.max_appl);
        $('.open_date_info').text(moment(event.start).format('llll'));
        $('.close_date_info').text(moment(event.end).format('llll'));
        $('.num_applied_info').text(event.num_applied);
      });
    }
  });

  db.collection('social_services').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      var socser = change.doc.data();
      var event_id = change.doc.id;

      if (change.type === 'removed') {
        removeObjectWithId(events, change.doc.id);
      }

      if (change.type === 'modified') {
        removeObjectWithId(events, change.doc.id);
        events.push({
          event_id: event_id,
          title: socser.event_name,
          start: socser.event_start_date,
          end: socser.event_end_date,
          color: socser.event_color,
          max_appl: socser.max_appl,
          num_applied: socser.num_applied,
        });
      }

      if (change.type === 'added') {
        events.push({
          allDay: false,
          event_id: event_id,
          title: socser.event_name,
          start: socser.event_start_date,
          end: socser.event_end_date,
          color: socser.event_color,
          max_appl: socser.max_appl,
          num_applied: socser.num_applied,
        });
      }
    })
    $('#calendar_socser').fullCalendar('removeEvents');
    $('#calendar_socser').fullCalendar('addEventSource', events);
  });

  $("#event-start-time").change(function () {
    $("#event-end-time").attr('min', $("#event-start-time").val())
  });


});