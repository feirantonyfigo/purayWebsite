<?php
session_start();
require_once('config.php');
require_once('authencateApiShopify.php');
if(isset($_GET['key'])&&isset($_GET['email'])){
$key = $_GET['key'];
$email = $_GET['email'];
$confirmQuery = "SELECT * FROM Email_Confirm WHERE Email_Confirm.key = '$key' AND Email_Confirm.email = '$email'  LIMIT 1";
$checkKey = mysqli_query($conn, $confirmQuery);
if(mysqli_num_rows($checkKey) != 0){
  $confirm_info = mysqli_fetch_assoc($checkKey);
  //update users
  $update_usersQuery = "UPDATE CLIENT_ACCOUNT SET `Email_Confirmed` = 1 WHERE `ClientID` = '$confirm_info[ClientID]' LIMIT 1";
  $update_users = mysqli_query($conn, $update_usersQuery);
  //delete confirm row
  $delete_rowQuery = "DELETE FROM Email_Confirm WHERE `ClientID` = '$confirm_info[ClientID]' LIMIT 1";
  $delete_row = mysqli_query($conn, $delete_rowQuery);
  //get user info now
  $get_UserInfo = "SELECT * FROM CLIENT_ACCOUNT WHERE `ClientID` = '$confirm_info[ClientID]' LIMIT 1";
  $userInfo = mysqli_query($conn, $get_UserInfo);
  if($update_users){
    while($row = mysqli_fetch_assoc($userInfo)) {
      $ClientID = $row['ClientID'];
      $firstName = $row['FirstName'];
      $lastName = $row['LastName'];
      $emailReal = $row['Email'];
      $password = $row['Password'];
      $phone = $row['PhoneNumber'];
    }
    $_SESSION["ClientID"] = $ClientID;
    header('Location: accountInfo.php');
    //now post to shopify
    //get user info first
    //try to add one client
    $customer_array = array(
                    'customer' => array(
                        'first_name' => $firstName,
                        'last_name' =>$lastName,
                        "email" =>  $emailReal,
                        'phone' => $phone,
                        "verified_email"=> true,
                        "password"=> $password,
                        "password_confirmation"=> $password,
                        "send_email_welcome"=> false,
                    )
                  );
    $url = 'https://' . $API_KEY . ':' . "43216a38da38ea7009b702f4b779204b" . '@' . $STORE_URL . '/admin/customers.json';
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST, 1);                //0 for a get request
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($customer_array));
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT ,3);
    curl_setopt($ch,CURLOPT_TIMEOUT, 20);
    $response = curl_exec($ch);
    $decodedJson = json_decode($response,true);
    $shopifyCustomerID = $decodedJson["customer"]["id"];
    curl_close ($ch);
    $updateShopifyCustomerID = "UPDATE CLIENT_ACCOUNT SET ShopifyClientID = '$shopifyCustomerID' WHERE ClientID = $ClientID";
    $newRes= mysqli_query($conn, $updateShopifyCustomerID);
    $_SESSION["ShopifyClientID"] = $shopifyCustomerID;
  }else{
    echo "Failed";
  }
}else{
  echo "Invalid email";
}
}
 ?>
