<?php
session_start();
require_once('config.php');
require_once('authencateApiShopify.php');
if(isset($_POST["inquiryTitle"])){
$newTitle = $_POST["inquiryTitle"];
$newFirstName = $_POST["detailsFirstName"];
$newLastName = $_POST["detailsLastName"];
$newEmail = $_POST["detailsEmail"];
$newPhoneNumber = $_POST["detailsPhoneNumber"];
$newDOB = $_POST["detailsDOB"];
if($newDOB == ""){
  $newDOB = "0000-00-00";
}
$newNationality = $_POST["nationalityDetails"];
$newNewsLetterSubscription = $_POST["purayNewsLetterDetails"];
if($newNewsLetterSubscription == "on"){
  $newNewsLetterSubscription = 1;
}else{
  $newNewsLetterSubscription = 0;
}
$updateQuery = "UPDATE CLIENT_ACCOUNT SET Title = '$newTitle',  ".
                          "FirstName = '$newFirstName',  ".
                          "LastName = '$newLastName', ".
                          "Email = '$newEmail',  ".
                          "PhoneNumber = '$newPhoneNumber', ".
                          "DOB = '$newDOB', " .
                          "Nationality = '$newNationality', ".
                          "Newsletter_Subscribed =  $newNewsLetterSubscription ".
                            "WHERE ClientID = {$_SESSION['ClientID']}";
$result = mysqli_query($conn, $updateQuery);
$get_UserInfo = "SELECT * FROM CLIENT_ACCOUNT WHERE `ClientID` = {$_SESSION['ClientID']} LIMIT 1";
$userInfo = mysqli_query($conn, $get_UserInfo);
while($row = mysqli_fetch_assoc($userInfo)) {
  $shopifyClientID = $row['ShopifyClientID'];
}
echo $shopifyClientID;
//now have to update shopify as well
$customer_array = array(
                'customer' => array(
                    'id' => $shopifyClientID,
                    'first_name' => "$newFirstName",
                    'last_name' =>"$newLastName",
                    "email" =>  "$newEmail",
                    'phone' => $newPhoneNumber,
                )
              );
$url = 'https://' . $API_KEY . ':' . "43216a38da38ea7009b702f4b779204b" . '@' . $STORE_URL . '/admin/customers/'.(string)($shopifyClientID).'.json';
print $url;
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_CUSTOMREQUEST, "PUT");                //0 for a get request
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($customer_array));
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch,CURLOPT_CONNECTTIMEOUT ,3);
curl_setopt($ch,CURLOPT_TIMEOUT, 20);
$response = curl_exec($ch);
curl_close ($ch);
echo $response;
}
if(isset($_POST["newPassword"])){
$currentPassword = $_POST["currentPassword"];
$newPassword = $_POST["newPassword"];
$checkExistingQuery = "SELECT * FROM CLIENT_ACCOUNT WHERE ClientID = {$_SESSION['ClientID']} AND Password = '$currentPassword' ";
$allEntries = mysqli_query($conn, $checkExistingQuery);
if (mysqli_num_rows($allEntries) > 0) {
  //should be only one result
  while($row = mysqli_fetch_assoc($allEntries)) {
    $oldPassword= $row['Password'];
    $shopifyClientID = $row['ShopifyClientID'];
    if($oldPassword == $newPassword){
    echo "duplicate";
  }else{
    $updatePasswordQuery = "UPDATE CLIENT_ACCOUNT SET Password = '$newPassword' WHERE  ClientID = {$_SESSION['ClientID']}";
    $updateResult= mysqli_query($conn, $updatePasswordQuery);
    //now update shopify
    $customer_array = array(
                    'customer' => array(
                        'id' => $shopifyClientID,
                        "password"=> $newPassword,
                        "password_confirmation"=> $newPassword,
                    )
                  );
    $url = 'https://' . $API_KEY . ':' . "43216a38da38ea7009b702f4b779204b" . '@' . $STORE_URL . '/admin/customers/'.(string)($shopifyClientID).'.json';
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_CUSTOMREQUEST, "PUT");                //0 for a get request
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($customer_array));
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT ,3);
    curl_setopt($ch,CURLOPT_TIMEOUT, 20);
    $response = curl_exec($ch);
    curl_close ($ch);
    echo "success";
  }
  }
}else{
  echo "error";
}
}


 ?>
