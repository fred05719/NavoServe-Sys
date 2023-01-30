$(document).ready(function () {
  const db = firebase.firestore();
  const auth = firebase.auth();

  $('#back-to-login').click(() => {
    auth.signOut();
  })

  var emailInterval = setInterval(() => {
    auth.currentUser.reload().then(function() {
      var user = auth.currentUser;
      if (user !== null) {
        console.log(user.uid);
        if (user.emailVerified) {
          db.collection('tbl_admins').doc(user.uid).update({verified: true})
          .then(()=> {
            db.collection('tbl_admins').doc(user.uid).get().then(function (doc) {
              $.ajax({
                type: 'post',
                url: 'sql/alter_admin.php',
                data: {
                  'admin_id': doc.data().id,
                  'action': '_UPDATE'
                },
                success: function (data) {  
                  console.log(data);
                  window.location.href = 'admin-users';
                }
              })
            });
          });
          clearInterval(emailInterval);
        }
      }
    });
  }, 1000);

  auth.onAuthStateChanged(user => {
    if (user !== null) {

      $('.currentEmail').text(user.email);

      $('#btn_verify_email').click(function () {
        $(this).prop('disabled', true);
        var timeleft = 31;
        var downloadTimer = setInterval(function () {
          timeleft--;
          $('#btn_verify_email').text('Resend verification (' + timeleft + ')');
          if (timeleft <= 0) {
            clearInterval(downloadTimer);
            $('#btn_verify_email').prop('disabled', false);
            $('#btn_verify_email').text('Resend verification');
          }
        }, 1000);
        user.sendEmailVerification().then(function () {
          $.alert({
            title: 'Verification email sent',
            content: 'Please check your inbox and follow the instructions',
            type: 'green',
          });
        }).catch((error) => {
          $.alert({
            title: 'Verification email not sent',
            content: error.message,
            type: 'red',
          });
        });
      });

    } else {
      window.location.href = "index";
    }

  });


});