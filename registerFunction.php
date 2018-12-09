<?php
require_once('config.php');
if(isset($_POST["signupFirstName"])){
$firstName = $_POST["signupFirstName"];
$lastName = $_POST["signupLastName"];
$email = $_POST["signupEmail"];
$password = $_POST["signupPassword"];
$checkDuplicate = "SELECT * FROM CLIENT_ACCOUNT where  Email = '$email'";
$result = mysqli_query($conn, $checkDuplicate);
if (mysqli_num_rows($result) == 0){
  //correct result
  $registerQuery =  "INSERT INTO CLIENT_ACCOUNT".
  " (FirstName, LastName, Email, Password,Email_Confirmed)".
  "VALUES ('$firstName', '$lastName', '$email', '$password',0)";
  $retval = mysqli_query($conn, $registerQuery);
  $clientId = mysqli_insert_id($conn);;
  $key = $firstName . $lastName.$email . date('mY');
  $key = md5($key);
  $confirmEntryCreate = "INSERT INTO Email_Confirm VALUES(NULL,'$clientId','$key','$email')";
  $retval1 = mysqli_query($conn, $confirmEntryCreate);
  echo "valid";
  //now send confirmation email
  $path = "http://puray.ca/emailConfirm?key=".$key."&email=".$email;
  $confirmationAddressHtml = "<a href='$path'>Click here to confirm your account</a>";
  $template = file_get_contents("http://puray.ca/static/email/emailConfirmation.html");
  $template = ereg_replace('{confirmationAddress}', $confirmationAddressHtml, $template);
  $from = 'clientservices@puray.ca';
  // To send HTML mail, the Content-type header must be set
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  // Create email headers
  $headers .= 'From: '.$from."\r\n".
  'Reply-To: '.$from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  mail($email,"Account Confirmation",$template,$headers);
}else{
  echo "duplicate";
}
}


 ?>
