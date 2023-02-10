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
          db.collection('admins').doc(user.uid).update({verified: true})
          .then(()=> {
            db.collection('admins').doc(user.uid).get().then(function (doc) {
              $.ajax({
                type: 'post',
                url: 'sql/admins/alter.php',
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
          $('.toast').toast('show').addClass('success').removeClass('error');
          $('#toast-icon').addClass('bxs-check-circle').removeClass('bxs-error-circle');
          $('.toast-title').text('Verification email sent');
          $('.toast-body').text('Please check your inbox and follow the instructions');
        }).catch((error) => {
          $('.toast').toast('show').addClass('error').removeClass('success');
          $('#toast-icon').addClass('bxs-error-circle').removeClass('bxs-check-circle');
          $('.toast-title').text('Verification email not sent');
          $('.toast-body').text(error.message);
        });
      });

    } else {
      window.location.href = "index";
    }

  });


});