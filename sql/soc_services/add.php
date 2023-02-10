<?php

@include '../connection.php';

  $id = $_POST['id'];
  $event_name = $_POST['event_name'];
  $max_appl = $_POST['max_appl'];
  $date_start = $_POST['date_start'];
  $date_end = $_POST['date_end'];
  $num_appl = $_POST['num_appl'];
  $event_color = $_POST['event_color'];
  $event_status = $_POST['event_status'];


  $sql = "INSERT INTO soc_services (socserID, event_name, max_appl, date_start, date_end, num_appl, event_color, event_status) VALUES ('$id', '$event_name', '$max_appl', '$date_start', '$date_end', '$num_appl','$event_color', '$event_status')";

  if ($conn->query($sql) === TRUE) {
      echo "SUCCESS";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
?>