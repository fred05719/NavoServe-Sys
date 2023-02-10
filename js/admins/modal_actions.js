$('.admins-page').ready(function () {

  //ADD NEW ADMIN BUTTON
  $("#btn_new_admin").click(function () {
    $("#modal_new_admin").modal("show");
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
      $("#modal_new_admin").modal("hide");
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
        $("#modal_new_admin").modal("show");
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

