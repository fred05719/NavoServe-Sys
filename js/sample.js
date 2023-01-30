$(document).ready(function () {

  const db = firebase.firestore();
  const auth = firebase.auth();
  
  var events = new Array();

  var calendarEl = document.getElementById('calendar_socser');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listMonth'
    },
    buttonText: {
      month: 'Grid View',
      listMonth: 'List View'
    },
    initialView: 'dayGridMonth',
    navLinks: true, // can click day/week names to navigate views
    businessHours: true, // display business hours
    editable: true,
    selectable: true,
    select: function (start, end) {
      $('#event-date').val(moment(start).format('YYYY-MM-DD'));
      $('#event-start-time').val('08:00');
      $('#event-end-time').val('17:00');
      $('#save_event').css('display', 'block');
      $('#update_event').css('display', 'none');
      $('.event_modal_title').text('Add new event');
      $('#event_entry_modal').modal('show');
    },
    eventClick: function (info) {
        $('#view_socser_modal').modal('show');
        $('.event_id_info').text(info.event.event_id);
        $('.event_title').text(info.event.title);
        $('.max_appl_info').text(info.event.extendedProps.max_appl);
        $('.open_date_info').text(moment(info.event.start).format('llll'));
        $('.close_date_info').text(moment(info.event.end).format('llll'));
        $('.num_applied_info').text(info.event.extendedProps.num_applied);
    },
    events: events,
  });

  calendar.render();

  
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
          id: event_id,
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
          id: event_id,
          title: socser.event_name,
          // rrule: {
          //   freq: 'weekly',
          //   byweekday: null,
          //   dtstart: socser.event_start_date, // will also accept '20120201T103000'
          //   until: socser.event_end_date // will also accept '20120201'
          // },
          start: socser.event_start_date,
          end: socser.event_end_date,
          color: socser.event_color,
          max_appl: socser.max_appl,
          num_applied: socser.num_applied,
        });
      }
    })
    calendar.batchRendering(() => {
      // remove all events
      calendar.getEvents().forEach(event => event.remove());
      // add your new events source
      calendar.addEventSource(events);
    });
    calendar.render();
  });

  $('#save_event').click(function () {
    var event_name = $("#event_name option:selected").text();
    var eventDate = $("#event-date").val();
    var eventStartTime = $("#event-start-time").val();
    var eventEndTime = $("#event-end-time").val();
    var event_color = $("#event_name").val();
    var max_appl = $("#max_appl").val();
    console.log(eventStartTime)

    if ((event_color != '') && (max_appl != '')) {

      db.collection('social_services').add({
        event_name: event_name,
        event_start_date: eventDate +' '+ eventStartTime,
        event_end_date: eventDate +' '+ eventEndTime,
        event_color: event_color,
        max_appl: max_appl,
        num_applied: 0
      }).then(() => {
        $.alert({
          title: 'Success',
          content: 'Event added successfully',
        });
        $('#event_entry_modal').modal('hide');
        clearField();

      }).catch((error) => {
        $.alert({
          title: 'Error',
          content: error.message,
        });

      });

    } else {
      $.alert({
        title: 'Error',
        content: 'Please fill up all field',
      });
    }
  });

});
