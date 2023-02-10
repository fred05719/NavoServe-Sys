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

          $.ajax({
            type: 'post',
            url: 'sql/admins/alter.php',
            data: {
              'admin_id': aid,
              'action': '_DELETE'
            },
            success: function (data) {
              console.log(data);
              if (data == 'SUCCESS') {
                firebase.firestore().collection('admins').doc(id).delete();
                $('#event_entry_modal').modal('hide');
                $('.toast').toast('show').addClass('error').removeClass('success');
                $('.toast-body').text('Account has been deleted.');
              } else {
                $('#event_entry_modal').modal('hide');
                $('.toast').toast('show').addClass('error').removeClass('success');
                $('.toast-body').text('Error has occured. Account not deleted');
              }
            }
          });
        }
      },
      cancel: function () {

      },
    }
  });
}
