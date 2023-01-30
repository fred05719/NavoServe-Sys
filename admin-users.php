<?php include_once("./components/header.php"); ?>
<?php include_once("./sql/connection.php"); ?>
<div class="admins-page page">
   <div class="card mt-4 shadow p-4 bg-white">
      <div class="d-flex mb-4 flex-row-reverse">
      <button type="button" class="btn btn-success" id="btn_new_admin">
         <span>Add Adminsasaas</span>
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
<script src="js/admin_user.js"></script>
<script src="components/js/add_user_validator.js"></script>
<?php if ( $_GET["rel"]!="page") { echo "</div>"; } ?>
<?php include_once("./components/footer.php"); ?>
