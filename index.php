<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NavoServe | Login Page</title>

  <!-- Tab icon -->
	<link rel="icon" href="img/navo_logo.png">
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">

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
    <div class="text-center err_mess mt-4"></div>
    <form class="p-3" id="login_form" method="POST">
        <div class="form-field d-flex align-items-center">
            <i class='bx bxs-envelope'></i>
            <input type="text" name="email" id="email" placeholder="Email" tabindex='1'>
            <button type="button" class="input_option clear_input"><i class="bi bi-x"></i></button>
        </div>
        <div class="form-field d-flex align-items-center">
            <i class='bx bxs-key' ></i>
            <input type="password" name="password" id="password" placeholder="Password" tabindex='2'>
            <button type="button" class="input_option show_password"><i class="bi bi-eye-fill"></i></button>
        </div>
        <button type="submit" class="btn mt-3" id="login-btn">Login</button>
    </form>
    <div class="text-center">
        <a href="forgot_password" class="fs-6">Forgot Password?</a>
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
	<script src="js/login_auth.js"></script>
	<script src="components/js/login_form_actions.js"></script>
  

</body>
</html>