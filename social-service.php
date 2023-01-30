<?php include_once("./components/header.php"); ?>
<div class="home-page page">
   <div class="card mt-4 shadow p-4 bg-white">
      <div id="calendar_socser"></div>
   </div>  
</div>
<?php include_once('components/event_entry_modal.php'); ?>
<?php include_once('components/view_socser_modal.php'); ?>
<script src="js/sample.js"></script>
<?php if ( $_GET["rel"]!="page") { echo "</div>"; } ?>
<?php include_once("./components/footer.php"); ?>