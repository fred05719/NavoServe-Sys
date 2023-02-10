$(document).ready(function () {

  //CLOSE MODAL CONFIRM
  $("#close_modal_event").confirm({
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
        $("#event_entry_modal").modal("hide");
      }
    },
    buttons: {
      Confirm: {
        text: "Exit",
        btnClass: 'btn-red',
        action: function () {
          resetForm();
          $("#event_entry_modal").modal("hide");
        }
      },
      cancel: function () {

      },
    }
  });


  //RESET FORM BUTTON
  $("#reset_btn").click(resetForm);

  function resetForm() {
    var validator = $("#event_form").validate();
    validator.resetForm();
    $(".text-box").val('');
  }

});
