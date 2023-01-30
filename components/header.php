<?php
   ini_set("error_reporting", 1);
   header("Cache-Control: no-cache, no-store, must-revalidate, max-age=0");
   header("Cache-Control: pre-check=0, post-check=0", false);
   header("Pragma: no-cache");

   if ( $_GET["rel"]!="page") {
?>
<!doctype html>
<html lang="en">

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<title>NavoServe</title>

		<!-- Tab icon -->
	<link rel="icon" href="img/navo_logo.png">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">

	<!-- boxicons css -->
	<link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
	<!----css3---->
	<link rel="stylesheet" href="components/css/sidebar.css">
	<link rel="stylesheet" href="components/css/fullcalendar.css">
	<!-- SLIDER REVOLUTION 4.x CSS SETTINGS -->

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">

	<!-- dataTables css -->
	<link rel="stylesheet" href="vendor/datatables/css/dataTables.bootstrap5.min.css">

	<!-- jQuery confirm css -->
	<link rel="stylesheet" href="vendor/jquery_confirm/css/jquery-confirm.min.css">
	
	<!-- custom css -->
	<link rel="stylesheet" href="components/css/datepicker.css">
	<link rel="stylesheet" href="components/css/forms.css">
	<link rel="stylesheet" href="components/css/modals.css">
	<link rel="stylesheet" href="css/queue.css">
	<link rel="stylesheet" href="css/transaction.css">

	<!--google material icon-->
	<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">

	<!-- <link href="https://www.unpkg.com/fullcalendar@5.11.4/main.min.css" rel="stylesheet"></link> -->
	<!-- <link href="https://unpkg.com/fullcalendar-scheduler@3.10.4/dist/scheduler.css" rel="stylesheet"></link> -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" rel="stylesheet"></link>

	<!-- Bootstrap JS -->
	<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<!-- jQuery  -->
	<script src="vendor/jquery/js/jquery.min.js"></script>

	<script src='https://cdn.jsdelivr.net/npm/luxon@2.3.0/build/global/luxon.min.js'></script>
	<script src='https://cdn.jsdelivr.net/npm/rrule@2.6.4/dist/es5/rrule.min.js'></script>

	<!-- <script src="https://momentjs.com/downloads/moment-with-locales.js"></script> -->
	<script src="https://www.unpkg.com/fullcalendar@6.0.3/index.global.js"></script>

	<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/luxon2@6.1.0/index.global.min.js'></script>
	<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/rrule@6.1.0/index.global.min.js'></script>
	<!-- <script src="https://unpkg.com/fullcalendar-scheduler@3.10.4/dist/scheduler.js"></script> -->
</head>

<body>
	<div class="wrapper">

		<div class="body-overlay"></div>

		<!-- Sidebar  -->
		<nav id="sidebar">
			<div class="sidebar-header">
				<div class="logo">
					<img src="img/logo.jpg" alt="">
				</div>
				<span class="text-truncate">NavoServe</span>
			</div>

			<ul class="list-unstyled components">

			
				<li class="dropdown mb-2">
					<a href="#Submenu1" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle toggle-parent">
						<i class="material-icons">point_of_sale</i><span>Transactions</span></a>
					<ul class="collapse list-unstyled menu" id="Submenu1">
						<li>
							<a href="social-service" rel="page">Social Services</a>
						</li>
						<li>
							<a href="queue" rel="page">Queue</a>
						</li>
					</ul>
				</li>

				<li class="dropdown mt-1 mb-2">
					<a href="#Submenu2" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle toggle-parent">
						<i class="material-icons">people_alt</i><span>User Management</span></a>
					<ul class="collapse list-unstyled menu mb-4" id="Submenu2">
						<li>
							<a href="admin-users" rel="page">Admins</a>
						</li>
						<li>
							<a href="mobile-users" rel="page">Mobile Users</a>
						</li>
					</ul>
				</li>

				<li class="dropdown mb-2">
					<a href="#Submenu3" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle toggle-parent">
						<i class="material-icons">summarize</i><span>Report Management</span></a>
					<ul class="collapse list-unstyled menu" id="Submenu3">
						<li>
							<a href="reports" rel="page">Reports</a>
						</li>
						<li>
							<a href="transaction-history" rel="page">Transaction History</a>
						</li>
					</ul>
				</li>


				<hr class="mt-4">
				<li class="mt-3">
					<a href="" id="logout_btn"><i class="material-icons">logout</i><span>Logout</span></a>
				</li>
				

			</ul>

		</nav>


		<!-- Page Content  -->
		<div id="content">

			<div class="top-navbar">
				<nav class="navbar navbar-expand-lg shadow">
					<div class="container-fluid d-flex justify-content-start">
						<i class='bx bx-menu' id="sidebarCollapse"></i>
						<a class="navbar-brand" href=""></a>
					</div>
				</nav>
			</div>


			<div class="main-content">

			<?php } ?>


