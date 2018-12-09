<!DOCTYPE html>
<html>
<head>
  <title>PURAY - Your Natural Beauty</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="static/css/product.css">
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

    <div class="header" id="myHeader" style="z-index: 11;">
      <h3 class="lang" key="siteInPrepare">Site in preparation. We apologize for any inconvinience.</h3>
      <a href="\">PURAY</a>
      <div class="utilityHeader">
        <a href="accountInfo" id="accountBtn" style="margin-left:1000px; z-index:11;">LOG IN</a>
      <!--  <a href="#" id="shoppingCart" style="margin-left:50px; text-decoration:underline;">0</a>-->
      </div>

    </div>
  </div>


<div class="content">
    <div class="leftMenu" id="leftMenu" style="z-index:1; margin-top:30px;">
  <input type="text" name="" value="" placeholder="SEARCH" id="search">
  <div class="productList menuTitle" >
    <h3 class="lang" key="product">SHOP</h3>
  <a href="product" style="margin-left: 30px;">PURAY I</a>
  </div>
  <div class="introduction menuTitle">
    <h3 class="lang" key="idea"> IDEA BEHIND</h3>
    <a href="purayIIdea1" class="lang" key="naturalBeauty">HYDROGEN WATER"</a>
    <a href="purayIIdea2" class="lang" key="smartHealth" style="color:red">INTELLIGENT MOISTURIZER</a>
  </div>
  <div class="brandInfo">
  <a href="brand" style="margin-left:0px;" class="lang" key="brandInfo">THE BRAND</a>
  </div>
  <div class="contactUs menuTitle">
  <a href="contact" style="margin-left:0px;" class="lang" key="contactUs">CONTACT US</a>
  </div>
    </div>


<div class="centerContent" >
  <div class="moisturizerInfo">
    <h3>／AWARD-WINNING／</h3>
    <br>
    <h3>／MOISTURE TRACK／</h3>
    <p>Download “Pure Spray” app to your phone - Connect Pure Spray with your phone through Bluetooth <br>
    Put hygiene-safe sensors on your skin and hold for five seconds <br>
    Understand your skin moisturizing condition with accurate numbers <br>
    Your personal data will be safely stored in the app. You will be able to track your skin condition’s improvement
    </p>
    <br>
    <h3>／TEST YOUR PRODUCTS／</h3>
    <p>Giving a first try to new products that you just bought and not sure about if they improve your skin’s dryness? <br>
    Use Pure Spray intelligent sensors to test how your skin is moisturized after each use of the new products. <br>
    Keep tracking on app will help you to see if your new skincare/cosmetic products are your perfect fit.
</p>
    <br>
    <h3>／SWAROSKI CRYSTAL EMBEDDED／</h3>
  </div>
</div>


<div class="rightContent" style="position:relative; z-index:10; margin-top:-500px;">
</div>

<div class="bottomContent" style="margin-left: 100px; margin-top:80px;" id="bottomContent">
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
        <label for="checkbox_1" id="agreementEmailSub">I have read, understood and agree to the  <a href="privacypolicy">Privacy Policy</a> and the  <br> <a>Terms of Use</a></label>
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
  <a id="EN">EN</a> / <a id="FR">FR</a> / <a id="CN">CN</a>
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
    <h5 id="purayLogoFooter">PURAY</h5>
    <li style="text-align: center; list-style: none; margin-top:-42px; margin-left:-80px;">
  <a id="terms" href="termsAndconditions" class="lang" key="T&C">Terms & Conditions</a>
</li>
  </div>

</div>
</div>
<script type="text/javascript" src="static/js/jquery.js"></script>
<script type="text/javascript" src="static/js/utility.js"></script>
<script type="text/javascript" src="static/js/cookieHandler.js"></script>
<script type="text/javascript">
document.getElementById("accountBtn").innerText = "<?php echo  $validSession ?>";
</script>
<script type="text/javascript" src="static/js/languageHandler.js"></script>
<script src='static/js/jquery.elevatezoom.js'></script>
<script type="text/javascript" src="static/js/purayIUtility.js"></script>
</body>
</html>
