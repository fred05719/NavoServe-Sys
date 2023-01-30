$(document).ready(function () {

  const db = firebase.firestore();
  const auth = firebase.auth();
  const functions = firebase.auth();

  let dataSet = [];
  let oldDataSet = [];

  let dataTable;

  //DATATABLES>>>>>>>>>>>>>>>>
  dataTable = $("#admin_user_tbl").DataTable({
    data: dataSet,
    scrollX: true,
    columns: [
      { data: 'name' },
      { data: 'email' },
      { data: 'action' },
    ],
    lengthMenu: [
      [5, 10, 25, 50, -1],
      ['5 rows', '10 rows', '25 rows', '50 rows', 'Show all']
    ],
    columnDefs: [
      {
        targets: 2,
        orderable: false,
        searchable: false,
      },
      { "width": "30%", "targets": 1 },
      { "width": "30%", "targets": 0 }
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

  // Real time listener
  db.collection('mobile_users').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if(change.type === 'removed') {
        removeObjectWithId(dataSet, change.doc.id);
      }
      if(change.type === 'added') {
      
        var admin = change.doc.data();
        var id = change.doc.id;
        let datas = {
          "id": change.doc.id,
          "name": admin.full_name,
          "email": admin.email,
          "action": '<div data-id=' + change.doc.id + '><button type="button" class="btn btn-success btn-floating me-2 btn_edit"><i class="bx bxs-edit-alt"></i></button><button type="button" class="btn btn-danger btn-floating btn_del" onclick="delAdmin(\'' + id + '\')"><i class="bx bxs-trash"></i></button></div>'
        }
        dataSet.push(datas);
      }
    })
    console.log(dataSet);
    dataTable.clear();
    dataTable.rows.add(dataSet);
    dataTable.draw();
  });




  //ADD NEW ADMIN BUTTON
  $("#btn_new_admin").click(function () {
    $("#modal_new_admin").modal("show");
  });

  //ADD ADMIN FORM SUBMIT BUTTON
  $("#add_user_btn").click(function () {
    $("#new_admin_form").submit();
  })

  //NEW ADMIN FORMS
  $("#new_admin_form").submit(function (e) {
    e.preventDefault();

    if ($("#new_admin_form").valid()) {

      var first_name = $("#first_name").val();
      var last_name = $("#last_name").val();
      var email = $("#email").val();
      var con_num = $("#con_num").val();
      var password = $("#password").val();
      var cpassword = $("#cpassword").val();

      auth.createUserWithEmailAndPassword(email, password).then(cred => {

        return db.collection('admins').doc(cred.user.uid).set({
          firstname: first_name,
          lastname: last_name,
          user_type: "ADMIN",
          email: cred.user.email,
          contact_num: con_num
        });

      }).then(() => {

        resetForm();
        $(".err-message").addClass('text-success').text('Account Added Sucessfully.');
        setTimeout(() => {
          $('.err-message').text('');
          $("#modal_new_admin").modal("hide");
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
  $("#close_modal_new_admin").confirm({
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
        $("#modal_new_admin").modal("hide");
      }
    },
    buttons: {
      Confirm: {
        text: "Exit",
        btnClass: 'btn-red',
        action: function () {
          resetForm();
          $("#modal_new_admin").modal("hide");
        }
      },
      cancel: function () {

      },
    }
  });


  //RESET FORM BUTTON
  $("#reset_btn").click(resetForm);

  function resetForm() {
    var validator = $("#new_admin_form").validate();
    validator.resetForm();
    $(".text-box").val('');
  }

});

function delAdmin(id) {
  $.confirm({
    title: 'Delete account?',
    content: "Are you sure you want to delete this account?",
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
            content: 'Account has been deleted!',
          });
          firebase.firestore().collection('admins').doc(id).delete().then(() => {
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