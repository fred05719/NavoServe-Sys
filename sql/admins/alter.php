<?php

@include '../connection.php';

  $action = $_POST['action'];
  $id = $_POST['admin_id'];

  if($action == '_DELETE') {

    $sql = "DELETE FROM `admins` WHERE `adminsID` = '$id'";
    $result = $conn->query($sql);
    if ($result === TRUE) {
        echo "SUCCESS";
    } else {
        echo "Error deleting record: " . $conn->error;
    }

  } 
  if($action == '_UPDATE') {
    $sql = "UPDATE `admins` SET `email_verified` = 'true'";
    $result = $conn->query($sql);
    if ($result === TRUE) {
        echo "SUCCESS";
    } else {
        echo "Error updating record: " . $conn->error;
    }
  }


  $conn->close();
?>