<?php
session_start();
require_once('config.php');
if(isset($_POST["loginUserName"])&&isset($_POST["loginPassword"])){
$userName = $_POST["loginUserName"];
$password =  $_POST["loginPassword"];
$logInQuery = "SELECT * FROM CLIENT_ACCOUNT WHERE Email = '$userName' and Password = '$password' ";
$result = mysqli_query($conn, $logInQuery);
if (mysqli_num_rows($result) > 0) {
  //should be only one result
  while($row = mysqli_fetch_assoc($result)) {
    $ClientID = $row['ClientID'];
    $firstName = $row['FirstName'];
    $secondName = $row['LastName'];
    $fullName = $firstName." ".$secondName;
    $email_confirmed = $row['Email_Confirmed'];
    $shopifyCustomerID = $row['ShopifyClientID'];
    if($email_confirmed == 0){
    echo "notConfirmed";
  }else{
    echo $fullName;
    $_SESSION["ClientID"] = $ClientID;
    $_SESSION["ShopifyClientID"] = $shopifyCustomerID;
    $customer_login_array = array(
                    'customer' => array(
                        'email' => $userName,
                        'password' =>$password,
                    )
                  );
      $url = 'https://' . $API_KEY . ':' . "43216a38da38ea7009b702f4b779204b" . '@' . $STORE_URL . '/account/login';
      $ch = curl_init();
      curl_setopt($ch,CURLOPT_URL,$url);
      curl_setopt($ch,CURLOPT_POST, 1);                //0 for a get request
      curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($customer_login_array));
      curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch,CURLOPT_CONNECTTIMEOUT ,3);
      curl_setopt($ch,CURLOPT_TIMEOUT, 20);
      $response = curl_exec($ch);
      curl_close ($ch);
  }
  }
}else{
  echo "invalid";
}
mysqli_close($conn);
}
?>
