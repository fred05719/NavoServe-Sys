const db = firebase.firestore();
const auth = firebase.auth();

function viewInfo(appl_id) {  
  console.log(appl_id);
  db.collection("fullinfo").doc(appl_id).get().then((doc) => {
    const user = doc.data();
    $(".name").text(user.first_name +" "+ user.last_name);

  }).catch((error) => {
    console.log("Error getting document:", error);
  });
}