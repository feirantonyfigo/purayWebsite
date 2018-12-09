<!DOCTYPE html>
<html>
<head>
  <title>PURAY - Your Natural Beauty</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="static/css/main.css">
<link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
<link rel="icon" type="image/png" href="static/image/icon.PNG">
</head>
<body onload="loadCookieEnabled(); loadLanguage();" style="height:500px;">
<?php
require_once('config.php');
 ?>
  <div id="bigBanner" >
    <div class="cookieBanner"  id="cookieBanner">
      <h3 id="cookieContent">by continuing browse this website, you agree to our use of <a href="#" style="color:grey;   text-decoration: underline;">cookies</a> . These allow us to collect information to improve your experience.</h3>
      <a  id="cookieAgreement" href="#" onclick="cookieAgree();" class="lang" key="agreeOnCookie">I AGREE</a>
    </div>

    <div class="header" id="myHeader" style="z-index: -1;">
      <h3 class="lang" key="siteInPrepare">Site in preparation. We apologize for any inconvinience.</h3>
      <a href="\">PURAY</a>
    </div>
  </div>


<div class="content">
    <div class="leftMenu" id="leftMenu" style="z-index:1; margin-top:30px;">
      <a href="\" style="margin-left: 10px;" class="lang" key="home">HOME</a>
  <div class="knowledgeTitle" >
  <a href="login" style="color:red;" class="lang" key="login">LOG IN</a>
  <a href="register" class="lang" key="signup">SIGN UP</a>
  </div>



    </div>


<div class="centerContent" style="margin-left:calc(50% - 150px); margin-top:-80px; position:relative; z-index:100;">
  <div class="login">
    <h2 class="lang" key="loginTitle">Log In</h2>
    <br>
    <h3 id="invalidCredential">Invalid credentials. Please try again.</h3>
    <form class="" action="loginFunction.php" method="post" id="loginForm">
      <div class="usernameInput">
        <input type="text" name="loginUserName" value="" placeholder="" id="userNameInputBox" class="fieldInput">
        <label id="userNameLabel" class="userNameLabel fieldLabel lang" key="userNameLabel">EMAIL</label>
        <h3 id="userNameReminder" class="reminder lang" key="emailLogIn">This Field is Required.</h3>
      </div>
      <div class="passwordInput">
        <input type="password" name="loginPassword" value="" placeholder="" id="passwordInputBox" class="fieldInput">
        <label id="passwordLabel" class="passwordLabel fieldLabel lang" key="passwordLabel">PASSWORD</label>
        <h3 id="passwordReminder" class="reminder lang" key="reminder">This Field is Required.</h3>
      </div>
      <br>
      <div class="signin">
        <input type="submit" name="" value="SUBMIT"  id="submitSignin" disabled>
        <label for="submitSignin" id="signInButton" class="lang" key="signin">SIGN IN</label>
        <input type="submit" name="" value="SUBMIT"  id="submitSignin" disabled>
        <a  style="margin-left: calc(40% - 140px);" id="signUpButton" href="register" >SIGN UP</a>
      </div>

    </form>

  </div>

</div>



<div class="bottomContent" style="margin-left: 100px; margin-top:60px;" id="bottomContent">
  <hr class="divisionLine">
  <div class="emailSubContent">
    <div class="leftBottom">
      <h4 class="lang" key="newsletter">NEWSLETTER</h4>
      <form class="" action="\" method="post" name="emailSubscription" id="emailSubscribeForm">
        <div class="emailSubscription" id="emailSubscription">
          <input type="text" name="emailAddress" value="" id="emailSub">
          <label id="emailLabel" class="lang" key="email">EMAIL</label>
          <h5 id="notValidEmail" class="lang" key="invalidEmail">Please enter a valid email address.</h5>
          <div class="emailFormOther" id="emailFormOther">
          <div class="checkbox">
        <input type="checkbox" id="checkbox_1">
        <label for="checkbox_1" id="agreementEmailSub">I have read, understood and agree to the  <a href="#">Privacy Policy</a> and the  <br> <a href="#">Terms of Use</a></label>
            </div>
        <div class="submitForm">
               <input type="submit" name="submitEmailSub" value="REGISTER" id="submitEmail"  disabled>
               <label for="submitEmail" id="submitEmailLabel" class="lang" key="register">REGISTER</label>
        </div>
          </div>
        </div>
          <h3 id="thankSubscription" class="lang" key="thankSubscription">Thank you for your registration.</h3>
      </form>


      <?php
      if(isset($_POST['emailAddress'])){
        $emailAddress = $_POST['emailAddress'];
        $date = date('Y-m-d H:i:s');
        $sql = "INSERT INTO Email_Subscription".
        " (Email_Address, Starting_Date, Email_Sent_Count,Last_Email_ID)".
        "VALUES ('$emailAddress', current_timestamp, 1,0)";
        $retval = mysqli_query( $conn, $sql );
        //ignore any mysqli error, the error can only be duplicate
        //send subscription email
        $from = 'clientservices@puray.ca';
        // To send HTML mail, the Content-type header must be set
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        // Create email headers
        $headers .= 'From: '.$from."\r\n".
        'Reply-To: '.$from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
        $ES_ID = mysqli_insert_id($conn);
        $msg = file_get_contents("http://puray.ca/static/email/subscriptionEmail.html");
        // send email
        mail($emailAddress,"Subscription Confirmation",$msg,$headers);
        mysqli_close($conn);
      }
       ?>
    </div>
    <div class="rightBottom">
      <table style="border-spacing: 50px 0; ">
        <tr>
          <td><a href="contact" class="lang" key="contactBtm">Contact</a></td>
          <td><a href="https://www.instagram.com/puray.ca/">Instagram</a></td>
          <td><span class="lang" key="languagePref">Language</span> &nbsp;&nbsp;
<div class="languageSelector">
  <a  id="EN">EN</a> / <a id="FR">FR</a> / <a id="CN">CN</a>
</div>
</td>
        </tr>
        <tr>
          <td><a href="wechat" class="lang" key="wechat">Wechat</a></td>
          <td><a href="#">LinkedIn</a></td>
          <td><a href="https://www.facebook.com/puraybeauty">Facebook</a></td>
        </tr>
      </table>
    </div>

  </div>

  <div class="footerContent">
    <h5 id="purayLogoFooter">PURAY/LOG IN</h5>
    <li style="text-align: center; list-style: none; margin-top:-42px; margin-left:-80px;">
  <a id="terms" href="termsAndconditions" class="lang" key="T&C">Terms & Conditions</a>
</li>
  </div>

</div>
</div>
<script type="text/javascript" src="static/js/jquery.js"></script>
<script type="text/javascript" src="static/js/cookieHandler.js"></script>
<script type="text/javascript" src="static/js/languageHandler.js"></script>
<script type="text/javascript" src="static/js/loginFormUtility.js"></script>
</body>
</html>
