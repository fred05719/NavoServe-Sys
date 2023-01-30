<?php include_once("./components/header.php"); ?>
<div class="home-page page">
   <div class="card mt-4 shadow p-4 bg-white">
      <div class="row g-1">
         <div class="col-lg-3 col-md-4 col-sm-6">
            <select class="form-select" aria-label="Default select example">
               <option selected>Open this select menu</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </select>
         </div>
         <div class="col-lg-3 col-md-4 col-sm-6">
            <select class="form-select" aria-label="Default select example">
               <option selected>Open this select menu</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </select>
         </div>
         <div class="col-lg-3 col-md-4 col-sm-6">
            <select class="form-select" aria-label="Default select example">
               <option selected>Open this select menu</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </select>
         </div>
         <div class="col-lg-3 col-md-4 col-sm-6">
            <select class="form-select" aria-label="Default select example">
               <option selected>Open this select menu</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </select>
         </div>
      </div>
      <div class="mt-4 row">
         <button type="button" class="btn btn-success gen-rep">Generate Report</button>
      </div>
   </div>

   <div class="card trans-card shadow p-4 bg-white" style="display: none">
      <table id="trans-history-tbl" class="table table-striped align-middle text-nowrap">
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
</div>
<script>
   $(document).ready(function () {
      $('.gen-rep').click(function (e) { 
         e.preventDefault();
         $('.trans-card').css('display', 'block');
      });
   });
</script>
<?php if ( $_GET["rel"]!="page") { echo "</div>"; } ?>
<?php include_once("./components/footer.php"); ?>