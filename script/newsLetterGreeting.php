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

$sql = "SELECT * FROM Email_Subscription;";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      $from = 'clientservices@puray.ca';
      // To send HTML mail, the Content-type header must be set
      $headers  = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
      // Create email headers
      $headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
      $ES_ID = $row["ES_ID"];
      $Email = $row["Email_Address"];
      $EmailCount = $row["Email_Sent_Count"];
      $sql2 = "UPDATE Email_Subscription SET Email_Sent_Count = ($EmailCount+1) WHERE ES_ID = $ES_ID;";
      if($EmailCount == 0){
        $msg = file_get_contents("http://puray.ca/static/email/subscriptionEmail.html");
        echo $msg;
        // send email
        mail($Email,"Subscription Confirmation",$msg,$headers);
        $conn->query($sql2);
      }
    }
} else {
    echo "0 results";
}
$conn->close();
 ?>
