$(document).ready(function () {

  const db = firebase.firestore();
  const auth = firebase.auth();
  const functions = firebase.auth();

  let dataSet = [];
  let oldDataSet = [];

  let dataTable;

  //DATATABLES>>>>>>>>>>>>>>>>
  dataTable = $("#queue_tbl").DataTable({
    data: dataSet,
    scrollX: true,
    responsive: true,
    columns: [
      { data: 'appl_id' },
      { data: 'appl_name' },
      { data: 'appl_email' },
      { data: 'socser_applied' },
      { data: 'status' },
      { data: 'date_created' },
      { data: 'action' },
    ],
    lengthMenu: [
      [5, 10, 25, 50, -1],
      ['5 rows', '10 rows', '25 rows', '50 rows', 'Show all']
    ],
    columnDefs: [
      {
        targets: 6,
        orderable: false,
        searchable: false,
        className: "dt-center"
      },
    ],
  });

  //DELETE FROM DATASET
  function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }

    return arr;
  }

  // var date = new Date(); // some mock date
  // var milliseconds = date.getTime(); 
  // console.log(milliseconds);
  // var date = new Date(milliseconds); // create Date object
  // console.log(date.toLocaleDateString());

  // Real time listener
  db.collection('queue_list').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'removed') {
        removeObjectWithId(dataSet, change.doc.id);
      }
      if (change.type === 'added') {

        var queue = change.doc.data();
        var appl_id = queue.application_id;

        let datas = {
          "appl_id": queue.application_id,
          "appl_name": queue.fullname,
          "appl_email": queue.email,
          "socser_applied": queue.socser_applied,
          "status": queue.status,
          "date_created": queue.date_created,
          "action": '<div class="dropdown">'+
          '<button class="btn btn-danger dropdown-toggle" type="button" id="action_menu" data-bs-toggle="dropdown" aria-expanded="false">'+
            'Actions'+
          '</button>'+
          '<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="action_menu">'+
            '<li><a class="dropdown-item action_btn_item" onclick="$.fn.viewInfo(\''+appl_id+'\')" data-bs-toggle="modal" data-bs-target="#modal_appl_info">View full info</a></li>'+
            '<li><a class="dropdown-item action_btn_item" id="edit_std_btn">Set schedule</a></li>'+
            '<li><a class="dropdown-item action_btn_item" id="gen_qr">Delete</a></li>'+
          '</ul>'+
        '</div>',
        }
        dataSet.push(datas);
      }
    })
    console.log(dataSet);
    dataTable.clear();
    dataTable.rows.add(dataSet);
    dataTable.draw();
  });


  $.fn.viewInfo = function(appl_id) {  
    console.log(appl_id);
    db.collection("fullinfo").doc(appl_id).get().then((doc) => {
      const user = doc.data();
      $(".appl_id").text(appl_id);
      $(".name").text(user.first_name +" "+ user.last_name);
  
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }


  //ADD NEW socser BUTTON
  $("#view_fullinfo").click(function () {
    console.log('BOBO');
    $("#modal_appl_info").modal("show");
  });

  //ADD socser FORM SUBMIT BUTTON
  $("#add_socser_btn").click(function () {
    $("#new_socser_form").submit();
  })

  //NEW socser FORMS
  $("#new_socser_form").submit(function (e) {
    e.preventDefault();

    if ($("#new_socser_form").valid()) {

      var socser_name = $("#socser_name option:selected").text();
      var max_appl = $("#max_appl").val();
      var get_date_open = $("#date_open").val();
      var get_date_close = $("#date_close").val();

      db.collection('social_services').add({
        socser_name: socser_name,
        max_applicant: max_appl,
        num_applied: 0,
        date_open: get_date_open,
        date_closed: get_date_close,
        status: false
      }).then(() => {

        resetForm();
        $('#socser_name').prop('selectedIndex', 0);
        $(".err-message").addClass('text-success').text('Social service has been open.');
        setTimeout(() => {
          $('.err-message').text('');
          $("#modal_new_socser").modal("hide");
        }, 3000);

      }).catch((error) => {

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        $(".err-message").removeClass('text-success').text(errorMessage);

      });

    }

  });


  //CLOSE MODAL CONFIRM
  $("#close_modal_new_socser").confirm({
    title: 'Are you sure?',
    content: "Your data won't be saved! Are you sure you want to exit",
    animation: 'scale',
    closeAnimation: 'scale',
    animationSpeed: 200,
    boxWidth: '300px',
    useBootstrap: false,
    onOpenBefore: function () {
      if (!$(".text-box").val()) {
        resetForm();
        $(".jconfirm").remove();
        $("#modal_new_socser").modal("hide");
      }
    },
    buttons: {
      Confirm: {
        text: "Exit",
        btnClass: 'btn-red',
        action: function () {
          resetForm();
          $("#modal_new_socser").modal("hide");
        }
      },
      cancel: function () {

      },
    }
  });


  //RESET FORM BUTTON
  $("#reset_btn").click(resetForm);

  function resetForm() {
    var validator = $("#new_socser_form").validate();
    validator.resetForm();
    $(".text-box").val('');
  }

});


function delSocser(id) {
  $.confirm({
    title: 'Delete social service?',
    content: "Are you sure you want to delete this social service?",
    animation: 'scale',
    closeAnimation: 'scale',
    animationSpeed: 200,
    boxWidth: '300px',
    useBootstrap: false,
    buttons: {
      Confirm: {
        text: "Delete",
        btnClass: 'btn-red',
        action: function () {
          $.alert({
            title: 'Deleted',
            content: 'Social Service has been deleted!',
          });
          firebase.firestore().collection('social_services').doc(id).delete().then(() => {
          }).catch(err => {
            console.log('Error removing document', err);
          });
        }
      },
      cancel: function () {

      },
    }
  });
}