<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NavoServe | Verify Email</title>

  <!-- Tab icon -->
	<link rel="icon" href="img/navo_logo.png">
  <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">

  <!-- boxicons css -->
	<link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>

  <!-- jQuery confirm css -->
	<link rel="stylesheet" href="vendor/jquery_confirm/css/jquery-confirm.min.css">

  <!-- Custom css -->
  <link rel="stylesheet" href="css/login.css">


</head>
<body class="vh-100 d-flex flex-column">
  <div class="wrapper">
    <div class="logo">
        <img src="img/logo.jpg" alt="">
    </div>
    <div class="text-center mt-4 name">
        NavoServe
    </div>
    <div class="text-center subname">
      Social Services One-Stop Shop
    </div>
    <div class="text-center mt-5 mb-2 fw-bold" style="font-size: 18px;">Please verify your email</div>
    <div class="text-center mb-5" style="font-size: 13px;">
      <span>Please confirm that your email </span>
      <span class="fw-bold currentEmail"></span>
      <span> is your e-mail address by clicking on the button below.</span>
    </div>
    <button type="button" class="btn mt-3" id="btn_verify_email">Send Verification</button>
    <div class="text-center mt-2">
        <a href="" class="fs-6" id="back-to-login">Back to login</a>
    </div>
  </div>


  <footer class="mt-auto pb-4">
    <div class="container">
      <div class="copyright text-center">
        <span class="text-white">Copyright &copy; Team SAND 2023</span>
      </div>
    </div>
  </footer>

  <!-- jQuery -->
	<script src="vendor/jquery/js/jquery-3.6.3.min.js"></script>

  <!-- jquery confirm script -->
	<script src="vendor/jquery_confirm/js/jquery-confirm.min.js"></script>

  <!-- firebase scripts -->
	<script src="vendor/firebase/js/firebase-app.js"></script>
	<script src="vendor/firebase/js/firebase-auth.js"></script>
	<script src="vendor/firebase/js/firebase-firestore.js"></script>
	<script src="js/firebase_init.js"></script>
	<script src="js/email_verify.js"></script>
  

</body>
</html>