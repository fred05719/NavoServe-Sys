<?php include_once("./components/header.php"); ?>
<div class="home-page page">
   <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
         <div class="toast-body">
            <!-- Hello, world! This is a toast message. -->
         </div>
         <button type="button" class="btn-close btn-close-secondary me-2 m-auto" data-bs-dismiss="toast"
            aria-label="Close"></button>
      </div>
   </div>
   <div class="card shadow p-4 bg-white">
      <div id="calendar_socser"></div>
   </div>
</div>



<?php include_once('components/event_entry_modal.php'); ?>
<?php include_once('components/view_socser_modal.php'); ?>
<script src="js/soc_services/calendar_snapshot.js"></script>
<script src="js/soc_services/modal_actions.js"></script>
<script src="js/soc_services/add.js"></script>
<script src="js/soc_services/delete.js"></script>
<script src="js/soc_services/update.js"></script>
<script src="components/js/socser_validator.js"></script>
<?php if ($_GET["rel"] != "page") {
   echo "</div>";
} ?>
<?php include_once("./components/footer.php"); ?>