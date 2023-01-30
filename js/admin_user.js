$('.admins-page').ready(function () {

  const db = firebase.firestore();
  const auth = firebase.auth();

  let dataSet = [];
  let oldDataSet = [];

  let dataTable;

  //DATATABLES>>>>>>>>>>>>>>>>
  dataTable = $("#admin_user_tbl").DataTable({
    data: dataSet,
    scrollX: true,
    columns: [
      { data: 'id' },
      { data: 'name' },
      { data: 'email' },
      { data: 'verified' },
      { data: 'action' },
    ],
    lengthMenu: [
      [5, 10, 25, 50, -1],
      ['5 rows', '10 rows', '25 rows', '50 rows', 'Show all']
    ],
    columnDefs: [
      {
        targets: 3,
        orderable: false,
        searchable: false,
      },
      { "width": "30%", "targets": [1, 2] },
      { "width": "10%", "targets": 0 }
    ],
  });

  //DELETE FROM DATASET
  function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.doc_id === id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }

    return arr;
  }

  // Real time listener
  db.collection('tbl_admins').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'removed') {
        removeObjectWithId(dataSet, change.doc.id);
        console.log(change.doc.id)
      }
      if (change.type === 'added') {

        var admin = change.doc.data();
        var id = change.doc.id;
        let datas = {
          "doc_id": id,
          "id": admin.id,
          "name": admin.firstname + " " + admin.lastname,
          "email": admin.email,
          "verified": admin.verified ? 'Verified' : 'Not Verified',
          "action": '<div><button type="button" class="btn btn-success btn-floating me-2 btn_edit"><i class="bx bxs-edit-alt"></i></button><button type="button" class="btn btn-danger btn-floating btn_del" onclick="delAdmin(\'' + id + '\', \'' + admin.id + '\')"><i class="bx bxs-trash"></i></button></div>'
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
      var password = $("#password").val();
      var cpassword = $("#cpassword").val();

      var docRef = db.collection("entry_count").doc("tbl_admins");
      docRef.get().then(function (doc) {
        if (doc.exists) {
          var adminsCount = doc.data().count;
          console.log(adminsCount + 1);

          auth.createUserWithEmailAndPassword(email, password).then((cred) => {

              var id = 'AID' + ((adminsCount + 1).toString().padStart(6, 0));
              var formData = new FormData();
              formData.append('id', id);
              formData.append('first_name', first_name);
              formData.append('last_name', last_name);
              formData.append('email', cred.user.email);
              formData.append('emailVerified', cred.user.emailVerified);
              formData.append('user_type', 'ADMIN');
              db.collection('entry_count').doc("tbl_admins").update({ count: (adminsCount + 1) }).then(() => {

                $.ajax({
                  type: "POST",
                  url: "sql/save_admin.php",
                  data: formData,
                  processData: false,
                  contentType: false,
                  success: function (data) {
                    console.log(data);
                    resetForm();
                    $(".err-message").addClass('text-success').text('Account Added Sucessfully.');
                  }
                });

                return db.collection('tbl_admins').doc(cred.user.uid).set({
                  id: formData.get('id'),
                  firstname: formData.get('first_name'),
                  lastname: formData.get('last_name'),
                  email: formData.get('email'),
                  email_verified: formData.get('emailVerified'),
                  user_type: formData.get('user_type'),
                });
              });

            }).catch((error) => {

              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              $(".err-message").removeClass('text-success').text(errorMessage);

            });
        }

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

function delAdmin(id, aid) {
  
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
          
          firebase.firestore().collection('tbl_admins').doc(id).delete().then(() => {
            $.ajax({
              type: 'post',
              url: 'sql/alter_admin.php',
              data: {
                'admin_id': aid,
                'action': '_DELETE'
              },
              success: function (data) {  
                console.log(data);
                $.alert({
                  title: 'Deleted',
                  content: 'Account has been deleted!',
                });
              }
            })
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