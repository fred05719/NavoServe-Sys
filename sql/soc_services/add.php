<?php

@include '../connection.php';

  // $id = $_POST['id'];
  // $code = $_POST['code'];
  $event_name = $_POST['event_name'];
  $max_appl = $_POST['max_appl'];
  $date_start = $_POST['date_start'];
  $date_end = $_POST['date_end'];
  $num_appl = $_POST['num_appl'];
  $event_color = $_POST['event_color'];
  $event_status = $_POST['event_status'];


  $sql = "INSERT INTO soc_services (event_name, max_appl, date_start, date_end, num_appl, event_color, event_status) VALUES ('$event_name', '$max_appl', '$date_start', '$date_end', '$num_appl','$event_color', '$event_status')";

  $send_status = '';
  $send_id = '';
  $send_index = '';

  if ($conn->query($sql) === TRUE) {
    $index = mysqli_insert_id($conn);
    $id = "SID".(str_pad($index, 6, '0', STR_PAD_LEFT));
    $set_code = " UPDATE soc_services SET socser_id = '$id' WHERE socser_index = $index ";
    if ($conn->query($set_code) === TRUE) {
      $send_status = 'SUCCESS';
      $send_index = $index;
      $send_id = $id;
    } else {
      $send_status = 'ERROR';
    }
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $data = array(
    "status" => $send_status,
    "index" => $send_index,
    "id" => $send_id
  );

  $json = json_encode($data);
  echo $json;

  $conn->close();
?>