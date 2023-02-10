$(document).ready(function () {
  const db = firebase.firestore();
  const auth = firebase.auth();

  var errorCount = 0;
  getLocalTimer();

  //ON AUTHSTATECHANGED
  auth.onAuthStateChanged(user => {
    if (user !== null) {
      
      if(user.uid == "ASZjh8Lxj7eEhmVnO8crVcYOzBx1") {
        window.location.href = "social-service";
      }

      db.collection('admins').doc(user.uid).get().then((doc) => {

        if (doc.exists) {
          (!user.emailVerified) ? window.location.href = 'email_verify' : window.location.href = "social-service";
        } else {
          db.collection('customers').doc(user.uid).get().then((mobileDoc) => {
            if (mobileDoc.exists) {
              loginFailed("The account is for mobile app.");
              auth.signOut();
            } else {
              user.delete();
              loginFailed("There is no user record corresponding to this identifier. The user may have been deleted.");
            }
          });
        }
      });
    }
  });




  //ON LOGIN BUTTON CLICK
  $("#login_form").submit(function (event) {
    event.preventDefault();
    $('#login-btn').html('<div class="spinner-border text-light" role="status"><span class="sr-only"></span></div>');

    var email = $("#email").val();
    var password = $("#password").val();

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {}).catch((error) => {loginFailed(error.message);});

  });


  //GET LOCALSTORAGE TIME FUNCTION
  function getLocalTimer() {
    var timeleft = localStorage.getItem("countDown");
    if (timeleft !== null) {
      $('#login-btn').prop('disabled', true);
      var downloadTimer = setInterval(function () {
        timeleft--;
        localStorage.setItem("countDown", timeleft);
        $('#login-btn').text('Login (' + timeleft + ')');
        if (timeleft <= 0) {
          clearInterval(downloadTimer);
          localStorage.removeItem("countDown");
          $('#login-btn').prop('disabled', false);
          $('#login-btn').text('Login');
        }
      }, 1000);
    }

  }


  //LOGIN FAILED FUNCTION
  function loginFailed(errorMessage) {
    errorCount++;
    $("#password").val('');
    $('#login-btn').html('Login');
    $(".err_mess").text(errorMessage);

    if (errorCount > 3) {
      errorCount = 0;
      $(".err_mess").text('');
      $('#login-btn').prop('disabled', true);
      var timeleft = 30;

      var downloadTimer = setInterval(function () {
        timeleft--;
        localStorage.setItem("countDown", timeleft);
        $('#login-btn').text('Login (' + timeleft + ')');
        if (timeleft <= 0) {
          clearInterval(downloadTimer);
          localStorage.removeItem("countDown");
          $('#login-btn').prop('disabled', false);
          $('#login-btn').text('Login');
        }
      }, 1000);

      $.alert({
        title: 'Error',
        content: 'We temporarily disable your login. Please contact the administrator to register your account',
      });
    }
  }

});

