<?php include_once("./components/header.php"); ?>
<div class="home-page page">
   <div class="card mt-4 shadow p-4 bg-white">
         <table id="queue_tbl" class="table table-striped align-middle text-nowrap" style="width:100%">
         <thead>
               <tr>
                  <th>Application ID</th>
                  <th>Full name</th>
                  <th>Email</th>
                  <th>Applied Social Service</th>
                  <th>Status</th>
                  <th>Date Created</th>
                  <th>Actions</th>
               </tr>
         </thead>
         <tbody>
            
         </tbody>
         </table>
   </div>
</div>
<?php include_once('components/appl_fullinfo_modal.php'); ?>
<script src="js/queue.js"></script>
<?php if ( $_GET["rel"]!="page") ?>
<?php include_once("./components/footer.php"); ?>