$(document).ready(function () {

  const db = firebase.firestore();
  const auth = firebase.auth();

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

      var docRef = db.collection("entry_count").doc("admins");
      docRef.get().then(function (doc) {
        if (doc.exists) {
          var adminsCount = doc.data().count;
          var newCount = adminsCount + 1;

          auth.createUserWithEmailAndPassword(email, password).then((cred) => {

            var id = 'AID' + ((newCount).toString().padStart(6, 0));
            var formData = new FormData();
            formData.append('id', id);
            formData.append('first_name', first_name);
            formData.append('last_name', last_name);
            formData.append('email', cred.user.email);
            formData.append('emailVerified', cred.user.emailVerified);
            formData.append('user_type', 'ADMIN');

            $.ajax({
              type: "POST",
              url: "sql/admins/add.php",
              data: formData,
              processData: false,
              contentType: false,
              success: function (data) {
                console.log(data);
                if (data == 'SUCCESS') {
                  db.collection('admins').doc(cred.user.uid).set({
                    id: formData.get('id'),
                    firstname: formData.get('first_name'),
                    lastname: formData.get('last_name'),
                    email: formData.get('email'),
                    email_verified: formData.get('emailVerified'),
                    user_type: formData.get('user_type'),
                  }).then(() => {
                    db.collection('entry_count').doc("admins").update({ count: (newCount) });
                    $('.toast').toast('show').addClass('success').removeClass('error');
                    $('.toast-body').text('New account has been created successfully.');
                    $('#modal_new_admin').modal('hide');
                    resetForm();
                  })

                    //CATCH ERROR FOR FIRESTORE SET
                    .catch((error) => {
                      console.log(error.message);
                    });
                } else {
                  $('#modal_new_admin').modal('hide');
                  $('.toast').toast('show').addClass('error').removeClass('success');
                  $('.toast-body').text('Error has occured. Account not created.');
                  resetForm();
                }
              }
            });

            //CATCH ERROR FOR FIREBASE CREATE ACC
          }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            $('#modal_new_admin').modal('hide');
            $('.toast').toast('show').addClass('error').removeClass('success');
            $('.toast-body').text(errorMessage);
            resetForm();
          });
        }

      });
    }

  });

  function resetForm() {
    var validator = $("#new_admin_form").validate();
    validator.resetForm();
    $(".text-box").val('');
  }

});