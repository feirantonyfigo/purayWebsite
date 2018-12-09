<?php
session_start();
$validSession = "";
if(isset($_SESSION['ClientID'])){
//client id is set
$validSession = "ACCOUNT";
}else{
  $validSession = "LOG IN";
}
 ?>
