<?php

@include 'connection.php';

  $id = $_POST['id'];
  $fname = $_POST['first_name'];
  $lname = $_POST['last_name'];
  $email = $_POST['email'];
  $emailVer = $_POST['emailVerified'];
  $user_type = $_POST['user_type'];


  $sql = "INSERT INTO tbl_admins (id, first_name, last_name, email, email_verified, user_type) VALUES ('$id', '$fname', '$lname', '$email', '$emailVer', '$user_type')";

  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
?>