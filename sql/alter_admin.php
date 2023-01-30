<?php

@include 'connection.php';

  $action = $_POST['action'];
  $id = $_POST['admin_id'];

  if($action == '_DELETE') {

    $sql = "DELETE FROM `tbl_admins` WHERE `id` = '$id'";
    $result = $conn->query($sql);
    if ($result === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }

  } 
  if($action == '_UPDATE') {
    $sql = "UPDATE `tbl_admins` SET `email_verified` = 'true'";
    $result = $conn->query($sql);
    if ($result === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
  }


  $conn->close();
?>