<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PURAY - Your Natural Beauty</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="static/css/main.css">
    <link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    <link rel="icon" type="image/png" href="static/image/icon.PNG">
  </head>
  <body onload="loadCookieEnabled();loadLanguage();">
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
        <a href="/">PURAY</a>
        <div class="utilityHeader">
          <a href="accountInfo" id="accountBtn" style="margin-left:1000px;">LOG IN</a>
          <a href="#" id="shoppingCart" style="margin-left:50px; text-decoration:underline;">0</a>
      </div>
    </div>

    <div class="content">

      <div class="leftMenu" id="leftMenu" style="z-index:1; margin-top:30px;">
    <input type="text" name="" value="" placeholder="SEARCH" id="search">
    <div class="productList menuTitle" >
      <h3 class="lang" key="product">PRODUCT</h3>
    <a href="purayModel" style="margin-left: 30px; ">PURAY I</a>
    </div>
    <div class="introduction menuTitle">
      <h3 class="lang" key="idea"> I.D.E.A</h3>
      <a href="#" class="lang" key="naturalBeauty">YOUR NATURAL BEAUTY</a>
      <a href="#" class="lang" key="smartHealth">YOUR SMART HEALTH</a>
    </div>

    <div class="contactUs menuTitle">
    <a href="contact" style="margin-left:0px; color:red;" class="lang" key="contactUs">CONTACT US</a>
    </div>
      </div>

      <div class="centerContent" style="position: relative; z-index:13;">
        <div class="centerContent1">
          <p id="contactExplanation"> Email <br> <br> <span class="lang" key="contactEx1">You can email us at</span> <a style="color:grey; text-decoration: underline;" href="mailto:clientservices@puray.ca" >clientservices@puray.ca</a> <br><br>
        <span class="lang" key="contactEx2">An advisor will respond to you in English, French or Mandarin</span> <br> <br> <span class="lang" key="contactEx3">within 24 hours, from Monday to Saturday.</span> </p>
          <div class="Enquiry" >
            <a id="sendEnquriy" class="lang" key="sendEnquiry">SEND ENQUIRY</a>
          </div>
        </div>
        <div class="centerContent2">
          <form class="" action="contact.php" method="post" id="enquiryForm">
            <div class="titleInput">
              <select name="inquiryTitle" id="title" value=" ">
                <option label="" style="display: none" id="hiddenOption"> </option>
                <option value="Mr.">Mr.</option>
                <option value="Miss.">Miss.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
              </select>
              <label id="titleLabel" class="titleLabel lang" key="titleLabel">TITLE</label>
              <h3 id="titleReminder" class="reminder lang" key="reminder">This Field is Required.</h3>
            </div>
            <div class="firstNameInput">
              <input type="text" name="inquiryFirstName" value="" placeholder="" id="firstNameInputBox" class="fieldInput">
              <label id="firstNameLabel" class="firstNameLabel fieldLabel lang" key="firstNameLabel">FIRST NAME</label>
              <h3 id="firstNameReminder" class="reminder lang" key="reminder">This Field is Required.</h3>
            </div>
            <div class="lastNameInput">
              <input type="text" name="inquiryLastName" value="" id="lastNameInputBox" class="fieldInput">
              <label id="lastNameLabel" class="lastNameLabel fieldLabel lang" key="lastNameLabel">LAST NAME</label>
              <h3 id="lastNameReminder" class="reminder lang" key="reminder">This Field is Required.</h3>
            </div>
            <div class="emailInput">
              <input type="text" name="inquiryEmail" value="" id="emailInputBox" class="fieldInput">
              <label id="emailSubLabel" class="emailSubLabel fieldLabel lang" key="emailSubLabel">EMAIL</label>
              <h3 id="emailReminder" class="reminder lang" key="reminder">This Field is Required.</h3>
            </div>
            <div class="phoneInput">
              <input type="text" name="inquiryPhone" value="" id="phoneInputBox" class="fieldInput">
              <label id="phoneLabel" class="phoneLabel fieldLabel lang" key="phoneLabel">PHONE NUMBER (OPTIONAL)</label>
              <h3 id="phoneReminder" class="reminder lang" key="phoneReminder" >Invalid Phone Number.</h3>
            </div>
            <div class="commentInput">
              <textarea name="inquiryComment" rows="2" cols="80" class="fieldInput" id="commentTextArea" placeholder="COMMENT" maxlength="250"></textarea>
              <!--<label id="commentLabel" class="commentLabel fieldLabel">COMMENT</label>-->
              <h3 id="commentReminder" class="reminder lang" key="reminder">This Field is Required.</h3>
            </div>
            <div class="SubmitAndCancel">
              <input type="submit" name="" value="SUBMIT"  id="submitInquiry" disabled>
               <label for="submitInquiry" id="submitInquiryButton" class="lang" key="submitBtn">SUBMIT</label>
               <a  style="margin-left:100px;" id="cancelInquiryButton" class="lang" key="cancelBtn">CANCEL</a>
            </div>

          </form>
<?php
  if(isset($_POST['inquiryTitle'])&&isset($_POST['inquiryFirstName'])
  &&isset($_POST['inquiryLastName'])&&isset($_POST['inquiryEmail'])&&isset($_POST['inquiryPhone'])&&isset($_POST['inquiryComment'])){
    $inquiryTitle = $_POST['inquiryTitle'];
    $inquiryFirstName = $_POST['inquiryFirstName'];
    $inquiryLastName = $_POST['inquiryLastName'];
    $inquiryEmail = $_POST['inquiryEmail'];
    $inquiryPhone = $_POST['inquiryPhone'];
    $inquiryComment = $_POST['inquiryComment'];
    $currrentTime = current_timestamp;
    $sql = "INSERT INTO Client_Inquiry".
    " (Title, FirstName, LastName, Email, PhoneNumber, Comment,InquiryTime)".
    "VALUES ('$inquiryTitle', '$inquiryFirstName', '$inquiryLastName', '$inquiryEmail', '$inquiryPhone', '$inquiryComment', $currrentTime)";
    $retval = mysqli_query( $conn, $sql );
    if($retval){
      $inquiryID = mysqli_insert_id($conn);;
    }else{
      $inquiryID = "unknown";
    }
  //ignore any mysqli error, the error can only be duplicate email
    mysqli_close($conn);
    //now send dev email
    // the message
    $msg = "Inquiry No. ". $inquiryID.":\n Client Name: ".$inquiryTitle." ";
    $msg .= $inquiryFirstName." ".$inquiryLastName."\n";
    $msg .= "Email: ".$inquiryEmail."\n"."Phone: ".$inquiryPhone."\n";
    $msg .= "Comment: ".$inquiryComment;
    // use wordwrap() if lines are longer than 70 characters
    $msg = wordwrap($msg,70);
    // send email
    mail("clientservices@puray.ca","New Inquiry",$msg);
  }

 ?>


        </div>
        <div class="centerContent3" id="enquirySuccess">
          <p>Enquiry <br><br>We recieved your enquiry.  <br><br> An advisor will respond to you in English, French or Mandarin <br> <br> within 24 hours, from Monday to Saturday.</p>
        </div>

      </div>


      <div class="bottomContent" style="margin-left: 100px; margin-top: -180px;" id="bottomContent">
        <hr class="divisionLine">
        <div class="emailSubContent">
          <div class="leftBottom">
            <h4 class="lang" key="newsletter">NEWSLETTER</h4>
            <form class="" action="contact.php" method="post" name="emailSubscription" id="emailSubscribeForm">
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
              //ignore any mysqli error, the error can only be duplicate email
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
                <td> <span class="lang" key="languagePref">Language</span> &nbsp;&nbsp;
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
          <h5 id="purayLogoFooter">PURAY/<span class="lang" key="contactUs">Contact Us</span></h5>
          <li style="text-align: center; list-style: none; margin-top:-42px; margin-left:-80px;">
        <a id="terms" href="termsAndconditions" class="lang" key="T&C">Terms & Conditions</a>
      </li>
        </div>

    </div>


    <script type="text/javascript" src="static/js/jquery.js"></script>
    <script type="text/javascript" src="static/js/utility.js"></script>
    <script type="text/javascript" src="static/js/cookieHandler.js"></script>
    <script type="text/javascript" src="static/js/contactFormUtility.js"></script>
    <script type="text/javascript" src="static/js/textarea-autogrow.js"></script>
    <script type="text/javascript">
    document.getElementById("accountBtn").innerText = "<?php echo  $validSession ?>";
    </script>
    <script type="text/javascript" src="static/js/languageHandler.js"></script>
  </body>
</html>
