<?php include_once("./components/header.php"); ?>
<?php include_once("./sql/connection.php"); ?>
<div class="admins-page page">
   <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
         <div class="toast-body">
            <!-- Hello, world! This is a toast message. -->
         </div>
         <button type="button" class="btn-close btn-close-secondary me-2 m-auto" data-bs-dismiss="toast"
            aria-label="Close"></button>
      </div>
   </div>
   <div class="card mt-4 shadow p-4 bg-white">
      <div class="d-flex mb-4 flex-row-reverse">
         <button type="button" class="btn btn-success" id="btn_new_admin">
            <span>Add Admin</span>
         </button>
      </div>
      <table id="admin_user_tbl" class="table table-striped align-middle text-nowrap" style="width:100%">
         <thead>
            <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Email</th>
               <th>Email Verification</th>
               <th>Actions</th>
            </tr>
         </thead>
         <tbody>

         </tbody>
      </table>
   </div>
</div>
<?php include_once('components/add_user_modal.php'); ?>
<script src="js/admins/snapshot.js"></script>
<script src="js/admins/add.js"></script>
<script src="js/admins/delete.js"></script>
<script src="js/admins/modal_actions.js"></script>
<script src="components/js/add_user_validator.js"></script>
<?php if ($_GET["rel"] != "page") {
   echo "</div>";
} ?>
<?php include_once("./components/footer.php"); ?>