<?php include_once("./components/header.php"); ?>
<div class="home-page page">
   <div class="card total-card mb-0 shadow">
      <div class="icon">
         <i class='bx bx-file'></i>
      </div>
      <div class="info">
         <span class="number">0</span>
         <span class="title">TOTAL</span>
      </div>
   </div>
   
   <div class="card shadow p-4 bg-white">
      <table id="admin_user_tbl" class="table table-striped align-middle text-nowrap" style="width:100%">
         <thead>
               <tr>
                  <th>Application ID</th>
                  <th>Full name</th>
                  <th>Date created</th>
                  <th>Date verified</th>
                  <th>Date completed</th>
               </tr>
         </thead>
         <tbody>
            
         </tbody>
      </table>
   </div>
</div>
<?php if ( $_GET["rel"]!="page") { echo "</div>"; } ?>
<?php include_once("./components/footer.php"); ?>