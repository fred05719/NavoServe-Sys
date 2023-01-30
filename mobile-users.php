<?php include_once("./components/header.php"); ?>
<div class="home-page page">
   <div class="card my-4 shadow p-4 pt-5 bg-white">
      <table id="admin_user_tbl" class="table table-striped align-middle text-nowrap" style="width:100%">
         <thead>
               <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
               </tr>
         </thead>
         <tbody>
            
         </tbody>
      </table>
   </div>
<script src="js/mobile_user.js"></script>
<?php if ( $_GET["rel"]!="page") { echo "</div>"; } ?>
<?php include_once("./components/footer.php"); ?>