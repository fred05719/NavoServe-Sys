$(document).ready(function () {

  const db = firebase.firestore();
  const auth = firebase.auth();
  
  var events = new Array();

  function removeObjectWithId(arr, doc_id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.doc_id === doc_id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }

    return arr;
  }

  var calendarEl = document.getElementById('calendar_socser');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    customButtons: {
      addEventBtn: {
        text: 'New Event',
        click: function() {
          $('#event_entry_modal').modal('show');
          $('#save_event').css('display', 'block');
          $('#update_event').css('display', 'none');
          $('.event_modal_title').text('Add new event');
        }
      }
    },
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listMonth addEventBtn'
    },
    buttonText: {
      month: 'Grid View',
      listMonth: 'List View'
    },
    initialView: 'dayGridMonth',
    navLinks: false, // can click day/week names to navigate views
    businessHours: true, // display business hours
    editable: false,
    selectable: true,
    select: function (start) {
      console.log(moment(start.start).format('YYYY-MM-DD'));
      $('#event_entry_modal').modal('show');
      $('#save_event').css('display', 'block');
      $('#update_event').css('display', 'none');
      $('.event_modal_title').text('Add new event');
      $('#event-date').val(moment(start.start).format('YYYY-MM-DD'));
      $('#event-start-time').val('08:00');
      $('#event-end-time').val('17:00');
      $('.my_form').attr('id', 'add_event');
      // $('#event_form').addClass('add');
    },
    eventClick: function (info) {
      console.log(info.event);
      var avail = info.event.extendedProps.event_status;
      $('.socser_id').text(info.event.extendedProps.socser_id);
      $('.event_title').text(info.event.title);
      $('.max_appl_info').text(info.event.extendedProps.max_appl);
      $('.open_date_info').text(moment(info.event.start).format('llll'));
      $('.close_date_info').text(moment(info.event.end).format('llll'));
      $('.num_applied_info').text(info.event.extendedProps.num_appl);
      $('.event_status_info').text(avail == 'true' ? 'ONLINE' : 'OFFLINE');
      $('#view_socser_modal').modal('show');
    },
    events: events,
  });

  calendar.render();

  
  db.collection('soc_services').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      var socser = change.doc.data();
      // var doc_id = change.doc.id;

      if (change.type === 'removed') {
        removeObjectWithId(events, change.doc.id);
      }

      if (change.type === 'modified') {
        removeObjectWithId(events, change.doc.id);
        events.push({
          socser_id: change.doc.id,
          title: socser.event_name,
          start: socser.date_start,
          end: socser.date_end,
          color: socser.event_color,
          max_appl: socser.max_appl,
          num_appl: socser.num_appl,
          event_status: socser.event_status,
        });
      }

      if (change.type === 'added') {
        events.push({
          socser_id: change.doc.id,
          title: socser.event_name,
          start: socser.date_start,
          end: socser.date_end,
          color: (socser.event_color == !'') ? (socser.event_color).replace('0xFF', '#') : null,
          max_appl: socser.max_appl,
          num_appl: socser.num_appl,
          event_status: socser.event_status,
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

});
