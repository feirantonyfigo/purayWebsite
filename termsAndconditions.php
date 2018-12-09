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
<body onload="loadCookieEnabled(); loadLanguage();">
<?php
require_once('config.php');
require_once('sessionCheck.php');
 ?>
  <div id="bigBanner" >
    <div class="cookieBanner"  id="cookieBanner">
      <h3 id="cookieContent">by continuing browse this website, you agree to our use of <a href="#" style="color:grey;   text-decoration: underline;">cookies</a> . These allow us to collect information to improve your experience.</h3>
      <a  id="cookieAgreement" href="#" onclick="cookieAgree();" class="lang" key="agreeOnCookie">I AGREE</a>
    </div>

    <div class="header" id="myHeader" style="z-index: -1;">
      <h3 class="lang" key="siteInPrepare">Site in preparation. We apologize for any inconvinience.</h3>
      <a href="\">PURAY</a>
      <div class="utilityHeader">
        <a href="accountInfo" id="accountBtn" style="margin-left:1000px;">LOG IN</a>
        <a href="#" id="shoppingCart" style="margin-left:50px; text-decoration:underline;">0</a>
      </div>
    </div>
  </div>


<div class="content">
    <div class="leftMenu" id="leftMenu" style="z-index:1; margin-top:30px;">
      <a href="\" style="margin-left: 10px;" class="lang" key="home">HOME</a>
  <div class="knowledgeTitle" >
  <a href="privacypolicy" class="lang" key="privacyPolicy">PRIVACY POLICY</a>
  <a href="termsAndconditions" class="lang" key="T&CCapital" style="color:red;">TERMS AND CONDITIONS</a>
  <a href="#" class="lang" key="cookies">COOKIES</a>
  </div>



    </div>


<div class="centerContent" style="margin-left:calc(50% - 320px); margin-top:-160px; position:relative; z-index:100;">
  <div class="privacyPolicy">
    <h2>TERMS & CONDITIONS</h2>
    <h2>LAST UPDATED: 1 JULY 2018</h2>
    <p>You can print a full copy of our Terms & Conditons from your browser by pressing CTRL+P in Windows and Linux or ⌘+P from a Mac</p>
    <p>&nbsp;</p>
    <p>Welcome to the PURAY website. We hope you are having satisfying experience. Your use of our website constitutes your agreement to these terms. This is how we collect your personal information on this website and how we protect it.</p>
    <p>&nbsp;</p>
    <p>When you visit this website, we use cookies to provide you better browsing experience. For more information about cookies, such as how to block cookies, please refer to our Privacy Policy. This allows us to understand your interests and serve you ads or promotional offers according to your interests.</p>
    <p>&nbsp;</p>
    <p>When you make your purchases or open your personal account, you provide us your personal information requested and necessary to place the order and have your purchase delivered.</p>
    <p>&nbsp;</p>
    <p>After you make a purchase, we may also contact you to enquire about your shopping experience through email, if applicable. You can easily refuse to participate by clicking the relevant link on our survey email.  If you wish not to receive further updates about our new products, announcement, promotions, you can unsubscribe anytime by selecting the unsubscribe options in the “Email Preference” section of your account on the PURAY website.
      If you wish to delete your account, please refer to the Contact Information below.</p>
    <p>&nbsp;</p>
  <h2>Contact Information </h2>
  <p>If you would like to opt-out by withdrawing your consent for us to contact you, use or disclosure of your information, or you would like to learn more about this Terms and Conditions, or you would like your account to be deleted, you may contact us at <a href="mailto:clientservices@puray.ca" style="text-decoration:underline;">clientservices@puray.ca</a> at any time.</p>
  </div>
</div>



<div class="bottomContent" style="margin-left: 100px; margin-top:30px;" id="bottomContent">
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
    <h5 id="purayLogoFooter">PURAY/TERMS & CONDITIONS</h5>
    <li style="text-align: center; list-style: none; margin-top:-42px; margin-left:-80px;">
  <a id="terms" href="termsAndconditions" class="lang" key="T&C">Terms & Conditions</a>
</li>
  </div>

</div>
</div>
<script type="text/javascript" src="static/js/jquery.js"></script>
<script type="text/javascript" src="static/js/privacyUtility.js"></script>
<script type="text/javascript" src="static/js/cookieHandler.js"></script>
<script type="text/javascript">
document.getElementById("accountBtn").innerText = "<?php echo  $validSession ?>";
</script>
<script type="text/javascript" src="static/js/languageHandler.js"></script>
</body>
</html>
