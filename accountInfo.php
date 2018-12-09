<?php
session_start();
require_once('config.php');
if($_SESSION['ClientID'] == ""){
header('Location: login.php');
}
$getInfoQuery = "SELECT * FROM CLIENT_ACCOUNT WHERE ClientID = {$_SESSION['ClientID']}; ";
$clientInfo = mysqli_query( $conn, $getInfoQuery );
if (mysqli_num_rows($clientInfo) > 0) {
    while($row = mysqli_fetch_assoc($clientInfo)) {
      $title =$row['Title'];
      $firstName =$row['FirstName'];
      $lastName = $row['LastName'];
      $emailDetails = $row['Email'];
      $phoneNumber = $row['PhoneNumber'];
      $DOB = $row['DOB'];
      $nationality = $row['Nationality'];
      $newsletterSubscribe = $row['Newsletter_Subscribed'];
    }
}
 ?>
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
  <div class="accountTitle" >
  <a href="accountInfo" class="lang" key="accountInfo" style="color:red;" >INFORMATION</a>
  <a href="addressbook"  class="lang" key="addressbook">ADDRESS BOOK</a>
  <a href="orders" class="lang" key="orders">ORDER HISTORY</a>
  <a href="logout" class="lang" key="logout">LOG OUT</a>
  </div>
    </div>

<a href="#"></a>
<div class="centerContent" style="margin-left:calc(50% - 150px); margin-top:-80px; position:relative; z-index:100;">
  <div class="registerForm" id="detailsDiv">
    <h2 class="lang" key="registerTitle">DETAILS</h2>
    <br>
    <form class="" action="detailsFunction.php" method="post" id="detailsForm">
      <div class="titleInput">
        <select name="inquiryTitle" id="titleDetails" value=" " onchange="activateSave();">
          <option label="" style="display: none" id="hiddenOption"> </option>
          <option value="Mr.">Mr.</option>
          <option value="Miss.">Miss.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Ms.">Ms.</option>
        </select>
        <label id="titleLabel" class="titleLabel lang" key="titleLabel">TITLE</label>
        <h3 id="titleReminder" class="reminder lang" key="reminder">This Field is Required.</h3>
      </div>
      <div class="firstnameInputDetails">
        <input type="text" name="detailsFirstName" value="" placeholder="" id="firstNameInputBoxDetails" class="fieldInput">
        <label id="firstNameLabelDetails" class="firstNameLabelDetails fieldLabel lang enquirylabelUp" key="firstNameLabel">FIRSTNAME</label>
        <h3 id="firstNameReminderDetails" class="reminder lang" key="reminder">This Field is Required.</h3>
      </div>
      <div class="lastnameInputDetails">
        <input type="text" name="detailsLastName" value="" placeholder="" id="lastNameInputBoxDetails" class="fieldInput">
        <label id="lastNameLabelDetails" class="lastNameLabelDetails fieldLabel lang enquirylabelUp" key="lastNameLabel">LASTNAME</label>
        <h3 id="lastNameReminderDetails" class="reminder lang" key="reminder">This Field is Required.</h3>
      </div>
      <div class="emailInputDetails">
        <input type="text" name="detailsEmail" value="" placeholder="" id="emailInputBoxDetails" class="fieldInput">
        <label id="emailLabelDetails" class="emailLabelDetails fieldLabel lang enquirylabelUp" key="emailLabel">EMAIL</label>
        <h3 id="emailReminderDetails" class="reminder lang" key="reminder">This Field is Required.</h3>
      </div>
      <div class="phoneInputDetails">
        <input type="text" name="detailsPhoneNumber" value="" placeholder="" id="phoneInputBoxDetails" class="fieldInput">
        <label id="phoneLabelDetails" class="phoneLabelDetails fieldLabel lang" key="phoneLabelDetails">PHONE NUMBER</label>
        <h3 id="phoneReminderDetails" class="reminder lang" key="phoneReminderDetails">Invalid Phone Number.</h3>
      </div>
      <div class="DOBInputDetails">
        <input type="text" name="detailsDOB" value="" placeholder="" id="DOBInputBoxDetails" class="fieldInput">
        <label id="DOBLabelDetails" class="DOBLabelDetails fieldLabel lang" key="DOBlLabel">DATE OF BIRTH (YYYY-MM-DD)</label>
        <h3 id="DOBReminderDetails" class="reminder lang" key="DOBReminderDetails">Invalid Date of Birth.</h3>
      </div>

      <div class="nationalityInputDetails">
        <select name="nationalityDetails" id="nationalityDetails" value=" " onchange="activateSave();">
              <option label="" style="display: none" id="hiddenOption"></option>
              <option value="Afghan">Afghan</option>
              <option value="Albanian">Albanian</option>
              <option value="Algerian">Algerian</option>
              <option value="American">American</option>
              <option value="Andorran">Andorran</option>
              <option value="Angolan">Angolan</option>
              <option value="Antiguans">Antiguans</option>
              <option value="Argentinean">Argentinean</option>
              <option value="Armenian">Armenian</option>
              <option value="Australian">Australian</option>
              <option value="Austrian">Austrian</option>
              <option value="Azerbaijani">Azerbaijani</option>
              <option value="Bahamian">Bahamian</option>
              <option value="Bahraini">Bahraini</option>
              <option value="Bangladeshi">Bangladeshi</option>
              <option value="Barbadian">Barbadian</option>
              <option value="Barbudans">Barbudans</option>
              <option value="Batswana">Batswana</option>
              <option value="Belarusian">Belarusian</option>
              <option value="Belgian">Belgian</option>
              <option value="Belizean">Belizean</option>
              <option value="Beninese">Beninese</option>
              <option value="Bhutanese">Bhutanese</option>
              <option value="Bolivian">Bolivian</option>
              <option value="Bosnian">Bosnian</option>
              <option value="Brazilian">Brazilian</option>
              <option value="British">British</option>
              <option value="Bruneian">Bruneian</option>
              <option value="Bulgarian">Bulgarian</option>
              <option value="Burkinabe">Burkinabe</option>
              <option value="Burmese">Burmese</option>
              <option value="Burundian">Burundian</option>
              <option value="Cambodian">Cambodian</option>
              <option value="Cameroonian">Cameroonian</option>
              <option value="Canadian">Canadian</option>
              <option value="Cape Verdean">Cape Verdean</option>
              <option value="Central African">Central African</option>
              <option value="Chadian">Chadian</option>
              <option value="Chilean">Chilean</option>
              <option value="Chinese">Chinese</option>
              <option value="Colombian">Colombian</option>
              <option value="Comoran">Comoran</option>
              <option value="Congolese">Congolese</option>
              <option value="Costa Rican">Costa Rican</option>
              <option value="Croatian">Croatian</option>
              <option value="Cuban">Cuban</option>
              <option value="Cypriot">Cypriot</option>
              <option value="Czech">Czech</option>
              <option value="Danish">Danish</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominican">Dominican</option>
              <option value="Dutch">Dutch</option>
              <option value="East Timorese">East Timorese</option>
              <option value="Ecuadorean">Ecuadorean</option>
              <option value="Egyptian">Egyptian</option>
              <option value="Emirian">Emirian</option>
              <option value="Equatorial Guinean">Equatorial Guinean</option>
              <option value="Eritrean">Eritrean</option>
              <option value="Estonian">Estonian</option>
              <option value="Ethiopian">Ethiopian</option>
              <option value="Fijian">Fijian</option>
              <option value="Filipino">Filipino</option>
              <option value="Finnish">Finnish</option>
              <option value="French">French</option>
              <option value="Gabonese">Gabonese</option>
              <option value="Gambian">Gambian</option>
              <option value="Georgian">Georgian</option>
              <option value="German">German</option>
              <option value="Ghanaian">Ghanaian</option>
              <option value="Greek">Greek</option>
              <option value="Grenadian">Grenadian</option>
              <option value="Guatemalan">Guatemalan</option>
              <option value="Guinea-Bissauan">Guinea-Bissauan</option>
              <option value="Guinean">Guinean</option>
              <option value="Guyanese">Guyanese</option>
              <option value="Haitian">Haitian</option>
              <option value="Herzegovinian">Herzegovinian</option>
              <option value="Honduran">Honduran</option>
              <option value="Hungarian">Hungarian</option>
              <option value="Icelander">Icelander</option>
              <option value="Indian">Indian</option>
              <option value="Indonesian">Indonesian</option>
              <option value="Iranian">Iranian</option>
              <option value="Irish">Irish</option>
              <option value="Irish">Irish</option>
              <option value="Israeli">Israeli</option>
              <option value="Italian">Italian</option>
              <option value="Ivorian">Ivorian</option>
              <option value="Jamaican">Jamaican</option>
              <option value="Japanese">Japanese</option>
              <option value="Jordanian">Jordanian</option>
              <option value="Kazakhstani">Kazakhstani</option>
              <option value="Kenyan">Kenyan</option>
              <option value="Kittian and Nevisian">Kittian and Nevisian</option>
              <option value="Kuwaiti">Kuwaiti</option>
              <option value="Kyrgyz">Kyrgyz</option>
              <option value="Laotian">Laotian</option>
              <option value="Latvian">Latvian</option>
              <option value="Lebanese">Lebanese</option>
              <option value="Liberian">Liberian</option>
              <option value="Libyan">Libyan</option>
              <option value="Liechtensteiner">Liechtensteiner</option>
              <option value="Lithuanian">Lithuanian</option>
              <option value="Luxembourger">Luxembourger</option>
              <option value="Macedonian">Macedonian</option>
              <option value="Malagasy">Malagasy</option>
              <option value="Malawian">Malawian</option>
              <option value="Malaysian">Malaysian</option>
              <option value="Maldivan">Maldivan</option>
              <option value="Malian">Malian</option>
              <option value="Maltese">Maltese</option>
              <option value="Marshallese">Marshallese</option>
              <option value="Mauritanian">Mauritanian</option>
              <option value="Mauritian">Mauritian</option>
              <option value="Mexican">Mexican</option>
              <option value="Micronesian">Micronesian</option>
              <option value="Moldovan">Moldovan</option>
              <option value="Monacan">Monacan</option>
              <option value="Mongolian">Mongolian</option>
              <option value="Moroccan">Moroccan</option>
              <option value="Mosotho">Mosotho</option>
              <option value="Motswana">Motswana</option>
              <option value="Mozambican">Mozambican</option>
              <option value="Namibian">Namibian</option>
              <option value="Nauruan">Nauruan</option>
              <option value="Nepalese">Nepalese</option>
              <option value="New Zealander">New Zealander</option>
              <option value="Ni-Vanuatu">Ni-Vanuatu</option>
              <option value="Nicaraguan">Nicaraguan</option>
              <option value="Nigerien">Nigerien</option>
              <option value="North Korean">North Korean</option>
              <option value="Northern Irish">Northern Irish</option>
              <option value="Norwegian">Norwegian</option>
              <option value="Omani">Omani</option>
              <option value="Pakistani">Pakistani</option>
              <option value="Palauan">Palauan</option>
              <option value="Panamanian">Panamanian</option>
              <option value="Papua New Guinean">Papua New Guinean</option>
              <option value="Paraguayan">Paraguayan</option>
              <option value="Peruvian">Peruvian</option>
              <option value="Polish">Polish</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Qatari">Qatari</option>
              <option value="Romanian">Romanian</option>
              <option value="Russian">Russian</option>
              <option value="Rwandan">Rwandan</option>
              <option value="Saint Lucian">Saint Lucian</option>
              <option value="Salvadoran">Salvadoran</option>
              <option value="Samoan">Samoan</option>
              <option value="San Marinese">San Marinese</option>
              <option value="Sao Tomean">Sao Tomean</option>
              <option value="Saudi">Saudi</option>
              <option value="Scottish">Scottish</option>
              <option value="Senegalese">Senegalese</option>
              <option value="Serbian">Serbian</option>
              <option value="Seychellois">Seychellois</option>
              <option value="Sierra Leonean">Sierra Leonean</option>
              <option value="Singaporean">Singaporean</option>
              <option value="Slovakian">Slovakian</option>
              <option value="Slovenian">Slovenian</option>
              <option value="Solomon Islander">Solomon Islander</option>
              <option value="Somali">Somali</option>
              <option value="South African">South African</option>
              <option value="South Korean">South Korean</option>
              <option value="Spanish">Spanish</option>
              <option value="Sri Lankan">Sri Lankan</option>
              <option value="Sudanese">Sudanese</option>
              <option value="Surinamer">Surinamer</option>
              <option value="Swazi">Swazi</option>
              <option value="Swedish">Swedish</option>
              <option value="Swiss">Swiss</option>
              <option value="Syrian">Syrian</option>
              <option value="Taiwanese">Taiwanese</option>
              <option value="Tajik">Tajik</option>
              <option value="Tanzanian">Tanzanian</option>
              <option value="Thai">Thai</option>
              <option value="Togolese">Togolese</option>
              <option value="Tongan">Tongan</option>
              <option value="Trinidadian or Tobagonian">Trinidadian or Tobagonian</option>
              <option value="Tunisian">Tunisian</option>
              <option value="Turkish">Turkish</option>
              <option value="Tuvaluan">Tuvaluan</option>
              <option value="Ugandan">Ugandan</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Uruguayan">Uruguayan</option>
              <option value="Uzbekistani">Uzbekistani</option>
              <option value="Venezuelan">Venezuelan</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Welsh">Welsh</option>
              <option value="Yemenite">Yemenite</option>
              <option value="Zambian">Zambian</option>
              <option value="Zimbabwean">Zimbabwean</option>
            </select>
            <label id="nationalityLabelDetails" class="nationalityLabelDetails lang" key="nationalityLabel">NATIONALITY</label>
      </div>
      <br>
      <br>
      <div class="checkbox">
    <input type="checkbox" id="purayNewsLetterDetails" name="purayNewsLetterDetails" onchange="activateSave();">
    <label for="purayNewsLetterDetails" id="subscribeConfirm">I agree to receive the PURAY newletter.</label>
      </div>
      <br>
      <br>
      <div class="resetPassword">
        <a id="newPasswordLink">NEW PASSWORD</a>
      </div>
      <br>
      <br>
      <div class="save">
        <input type="submit" name="saveDetails" value="SUBMIT"  id="saveDetails" disabled>
        <label for="saveDetails" id="saveButton" class="lang" key="save">SAVE</label>
      </div>

    </form>

  </div>

<div class="newPassword" id="newPasswordInterface">
  <h2 class="lang" key="modifyPassword">MODIFY PASSWORD</h2>
  <h3 id="successModify">Updated successfully. Redirecting...</h3>
  <form class="" action="index.html" method="post" id="passwordForm">
    <div class="currentPassword">
      <input type="password" name="currentPassword" value="" placeholder="" id="currentPassword" class="fieldInput">
      <label id="currentPasswordLabel" class="currentPasswordLabel fieldLabel lang" key="currentPasswordLabel">CURRENT PASSWORD</label>
      <h3 id="currentPasswordReminder" class="reminder lang" key="currentPasswordReminder">Current password is wrong.</h3>
    </div>
    <div class="newPassword">
      <input type="password" name="newPassword" value="" placeholder="" id="newPassword" class="fieldInput">
      <label id="newPasswordLabel" class="newPasswordLabel fieldLabel lang" key="newPasswordLabel">NEW PASSWORD</label>
      <h3 class="passwordRequirement lang" key="passwordRequirement" id="passwordRequirement">Minimum password length: 8. <br>Password must at least contain an uppercase letter and a number or <br>non-alphanumeric letter.</h3>
      <h3 id="newPasswordReminder" class="reminder lang" key="passwordReminder">This Field is Required.</h3>
    </div>
    <div class="newPasswordConfirm">
      <input type="password" name="newPasswordConfirm" value="" placeholder="" id="newPasswordConfirm" class="fieldInput">
      <label id="newPasswordConfirmLabel" class="newPasswordConfirmLabel fieldLabel lang" key="newPasswordConfirmLabel">VERIFY PASSWORD</label>
      <h3 id="newPasswordConfirmReminder" class="reminder lang" key="passwordReminder">This Field is Required.</h3>
    </div>
    <div class="newPasswordSave">
      <input type="submit" name="saveNewPassword" value="SUBMIT"  id="saveNewPassword" disabled>
      <label for="saveNewPassword" id="saveButtonPassword" class="lang" key="save">SAVE</label>
      <a id="hidePasswordInterface">CANCEL</a>
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
    <h5 id="purayLogoFooter">PURAY/ACCOUNT</h5>
    <li style="text-align: center; list-style: none; margin-top:-42px; margin-left:-80px;">
  <a id="terms" href="termsAndconditions" class="lang" key="T&C">Terms & Conditions</a>
</li>
  </div>

</div>
</div>
<script type="text/javascript" src="static/js/jquery.js"></script>
<script type="text/javascript" src="static/js/cookieHandler.js"></script>
<script type="text/javascript" src="static/js/languageHandler.js"></script>
<script type="text/javascript">
//set initial value of fields first
var initialTitle = "<?php echo $title; ?>";
//following three can't be null thus must have value
var initialFirstName = "<?php echo $firstName; ?>";
var initialLastName = "<?php echo $lastName; ?>";
var initialEmail = "<?php echo $emailDetails; ?>";
//
var initialPhoneNumber = "<?php echo $phoneNumber; ?>";
var initialDOB = "<?php echo $DOB; ?>";
var initialNewsletterSubscribed = "<?php echo $newsletterSubscribe; ?>";
if(initialDOB == "0000-00-00"){
  initialDOB = ""
}
var initialNationality = "<?php echo $nationality; ?>";
console.log("initialNationality is ", initialNationality );
//title setting is little tricky
$("#titleDetails option").filter(function() {
   return $(this).text() == initialTitle;
}).prop('selected', true);
//others are just set
$("#firstNameInputBoxDetails").val(initialFirstName);
$("#lastNameInputBoxDetails").val(initialLastName);
$("#emailInputBoxDetails").val(initialEmail);
$("#phoneInputBoxDetails").val(initialPhoneNumber);
$("#DOBInputBoxDetails").val(initialDOB);
//nationality setting is also tricky
console.log($("#nationalityDetails option").filter(function() {
   return $(this).text() == initialNationality;
}));
$("#nationalityDetails option").filter(function() {
   return $(this).text() == initialNationality;
}).prop('selected', true);
//set newsletter subscribe agreement
if(initialNewsletterSubscribed == "1"){
  document.getElementsByName("purayNewsLetterDetails")[0].checked = true;
  initialNewsletterSubscribed = true;
}else{
  initialNewsletterSubscribed = false;
}
</script>
<script type="text/javascript" src="static/js/profileUtility.js"></script>
</body>
</html>
