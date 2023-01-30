$(document).ready(function () {  

  const db = firebase.firestore();
  const auth = firebase.auth();
  
  auth.onAuthStateChanged(user => {
    if (user !== null) {

    } else {
      window.location.href = "index";
    }
  });

});