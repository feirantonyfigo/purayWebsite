<?php
$servername = "167.114.116.239";
$username = "purayca_admin";
$password = "init_1234";
$dbname = "purayca_purayDataBase";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 ?>
