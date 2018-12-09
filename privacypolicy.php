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
  <a href="privacypolicy" style="color:red;" class="lang" key="privacyPolicy">PRIVACY POLICY</a>
  <a href="termsAndconditions" class="lang" key="T&CCapital">TERMS AND CONDITIONS</a>
  <a href="#" class="lang" key="cookies">COOKIES</a>
  </div>



    </div>


<div class="centerContent" style="margin-left:calc(50% - 320px); margin-top:-160px; position:relative; z-index:100;">
  <div class="privacyPolicy">
    <h2>PRIVACY AND DATA PROTECTION POLICY</h2>
    <h2>LAST UPDATED: 1 JULY 2018</h2>
    <p>You can print a full copy of our Privacy and Data Protection Policy from your browser by pressing CTRL+P in Windows and Linux or ⌘+P from a Mac</p>
    <p>&nbsp;</p>
    <h2>I. CONSENT</h2>
    <p style="text-decoration:underline;">How do you get my consent? </p>
    <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, you consent to Puray’s collection, use, disclosure, and retention of your information for that specific reason only and as otherwise permitted by law.</p>
  <p>&nbsp;</p>
  <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no. For example, when you sign up for an account, you have the option to permit us to send you emails about our new products, promotions, announcements and other updates. </p>
  <p>&nbsp;</p>
  <h2>2. DISCLOSURE </h2>
  <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service. We may also disclose your personal information if we reasonably believe the disclosure is necessary or appropriate to protect and enforce our legal rights, interests and remedies or protect the business, operations or customers of us or other persons (including detecting and preventing fraud and preventing violation of the terms of use that govern our websites).</p>
  <p>&nbsp;</p>
  <h2>3. SHOPIFY</h2>
  <p>We use Shopify Inc., an online e-commerce platform, to sell our products and services to you. Your data is stored through Shopify’s data storage, databases and the general Shopify application. They store your data on a secure server behind a firewall. </p>
  <p>&nbsp;</p>
  <p style="text-decoration:underline;">Payment:</p>
  <p>By using a direct payment gateway, Shopify stores your data which is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS).
After your transaction is completed, your purchase transaction information is deleted. For more information, you may also want to read Shopify’s Terms of Service (https://www.shopify.com/legal/terms) or Shopify’s Privacy Policy (https://www.shopify.com/legal/privacy). </p>
  <p>&nbsp;</p>
  <h2>4. THIRD-PARTY SERVICES </h2>
  <p>In general, third-party service providers, such as payment gateways, have their own pricy policies and terms of use. We strongly recommend that you read their privacy policies in order to understand how your personal information will be used and stored by these third-party service providers. You are no longer governed by our Privacy Policy or Terms of Use if you click third-party website links and are redirected to their websites. </p>
  <p>&nbsp;</p>
  <h2>5. CHANGES TO THIS PRIVACY POLICY </h2>
  <p>We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting on the website. If there is significant change to this policy, we will notify you on our website, or through email, if applicable.
   of three years, PURAY may again contact the customer in question in order to discover if the latter wishes (i) to continue to receive newsletters and other publications from PURAY and/or (ii) to keep his or her customer account on the Website. Your data will moreover be destroyed within a maximum of two business days following receipt of an unsubscribe request from you.</p>
   <p>&nbsp;</p>
  <h2>6. CONTACT INFORMATION </h2>
  <p>If you would like to opt-out by withdrawing your consent for us to contact you, use or disclosure of your information, or you would like to learn more about this Privacy Policy, you may contact us at <a href="mailto:clientservices@puray.ca" style="text-decoration:underline;">clientservices@puray.ca</a> at any time.</p>
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
    <h5 id="purayLogoFooter">PURAY/PRIVACY POLICY</h5>
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
