$(document).ready(function () {

  

//DELETE FROM DATASET
  function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  
    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
  
    return arr;
  }

  




  //ADD NEW ADMIN BUTTON
  $("#btn_new_admin").click(function () {
    $("#modal_new_admin").modal("show");
  });

  //ADD ADMIN FORM SUBMIT BUTTON
  $("#add_user_btn").click(function () {
    $("#new_admin_form").submit();
  })

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