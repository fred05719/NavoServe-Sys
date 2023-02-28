<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NavoServe | Forgot Password</title>

  <!-- Tab icon -->
  <link rel="icon" href="img/navo_logo.png">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">

  <!-- boxicons css -->
  <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>

  <!-- Bootstrap JS -->
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

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
    <div class="text-center mt-4 mb-2 fw-bold" style="font-size: 18px;">Forgot your password?</div>
    <div class="text-center mb-4" style="font-size: 14px;">
      <span>Please enter your email </span>
    </div>
    <div class="p-3">
      <div class="form-field d-flex align-items-center">
        <i class='bx bxs-envelope'></i>
        <input type="text" name="email" id="forgot_email" placeholder="Email">
        <button type="button" class="input_option clear_input"><i class="bi bi-x"></i></button>
      </div>
    </div>
    <button type="button" class="btn mt-3" id="btn_forgot_confirm">Confirm</button>
    <div class="text-center mt-2">
      <a href="index" class="fs-6">Back to login</a>
    </div>
  </div>

  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <i class='bx me-2 fs-4' id='toast-icon'></i>
      <strong class="me-auto toast-title"></strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">

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
  <script src="js/forgot_password.js"></script>


</body>

</html>