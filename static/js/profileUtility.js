if(initialTitle == ""){
  titleClickTime = 0;
}else{
  titleClickTime = 1;
  $("#titleLabel").addClass("enquirylabelUp");
}
if(initialPhoneNumber == ""){
  phoneClickTime = 0;
}else{
  phoneClickTime = 1;
  $("#phoneLabelDetails").addClass("enquirylabelUp");
}
if(initialDOB == ""){
  DOBClickTime = 0;
}else{
  DOBClickTime = 1;
  $("#DOBLabelDetails").addClass("enquirylabelUp");
}

if(initialNationality == ""){
  nationalityClickTime = 0;
}else{
  nationalityClickTime = 1;
  $("#nationalityLabelDetails").addClass("enquirylabelUp");
}



$('#firstNameInputBoxDetails').on('keyup',function(){
  var firstNameValue = this.value;
  var trimedLength = firstNameValue.trim().length ;
  if(trimedLength == 0 || firstNameValue == null){
    $("#firstNameLabelDetails").css("color", "red");
    $("#firstNameInputBoxDetails").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#firstNameReminderDetails").css("visibility","visible");
  }else{
    $("#firstNameLabelDetails").css("color", "grey");
    $("#firstNameInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#firstNameReminderDetails").css("visibility","hidden");
  }
  activateSave();
});


$("#lastNameInputBoxDetails").on('focusout',function(){
  var lastNameValue = this.value;
  var trimedLength = lastNameValue.trim().length ;
  if(trimedLength == 0 || lastNameValue == null){
    $("#lastNameLabelDetails").css("color", "red");
    $("#lastNameInputBoxDetails").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#lastNameReminderDetails").css("visibility","visible");
  }else{
    $("#lastNameLabelDetails").css("color", "grey");
    $("#lastNameInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#lastNameReminderDetails").css("visibility","hidden");
  }
  activateSave();
});

$("#lastNameInputBoxDetails").on('keyup',function(){
  var lastNameValue = this.value;
  var trimedLength = lastNameValue.trim().length ;
  if(trimedLength == 0 || lastNameValue == null){
    $("#lastNameLabelDetails").css("color", "red");
    $("#lastNameInputBoxDetails").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#lastNameReminderDetails").css("visibility","visible");
  }else{
    $("#lastNameLabelDetails").css("color", "grey");
    $("#lastNameInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#lastNameReminderDetails").css("visibility","hidden");
  }
  activateSave();
});

$('#emailInputBoxDetails').on('keyup',function(){
  var emailValue = this.value;
  var trimedLength = emailValue.trim().length ;
  if(trimedLength == 0 || emailValue == null){
    $("#emailLabelDetails").css("color", "red");
    $("#emailInputBoxDetails").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#emailReminderDetails").css("visibility","visible");
    $('#emailReminderDetails').text('This Field is Required.');
  }
else if(!validateEmail(emailValue)){
  $("#emailLabelDetails").css("color", "red");
  $("#emailInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px red");
  $("#emailReminderDetails").css("visibility","visible");
  $('#emailReminderDetails').text('Invalid Email Address.');
}else {
    $("#emailLabelDetailss").css("color", "grey");
    $("#emailInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#emailReminderDetails").css("visibility","hidden");
  }
  activateSave();
});


$('#emailInputBoxDetails').on('focusout',function(){
  var emailValue = this.value;
  var trimedLength = emailValue.trim().length ;
  if(trimedLength == 0 || emailValue == null){
    $("#emailLabelDetails").css("color", "red");
    $("#emailInputBoxDetails").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#emailReminderDetails").css("visibility","visible");
    $('#emailReminderDetails').text('This Field is Required.');
  }
else if(!validateEmail(emailValue)){
  $("#emailLabelDetails").css("color", "red");
  $("#emailInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px red");
  $("#emailReminderDetails").css("visibility","visible");
  $('#emailReminderDetails').text('Invalid Email Address.');
}else {
    $("#emailLabelDetailss").css("color", "grey");
    $("#emailInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#emailReminderDetails").css("visibility","hidden");
  }
  activateSave();
});


$("#titleDetails").on('focus', function () {
  console.log(titleClickTime);
  if(titleClickTime > 0 && titleClickTime%2 == 0){
  $("#titleLabel").removeClass("enquirylabelUp");
  $("#titleLabel").removeClass("enquirylabelDown");
  }
  $("#titleLabel").addClass("enquirylabelUp");
  console.log(document.getElementById("titleLabel"));
  titleClickTime += 1;
});

$("#titleDetails").on('focusout',function(){
titleValue = this.value;
console.log(titleValue);
if(titleValue != "Mr." && titleValue != "Miss." && titleValue != "Mrs." &&  titleValue != "Ms."){
  $("#titleLabel").css("color", "grey");
  $("#title").css("box-shadow", " -10px 14px 0px -9px grey")
  $("#titleReminder").css("visibility","hidden");
  titleClickTime += 1;
  $("#titleLabel").addClass("enquirylabelDown");
}else{
  $("#titleLabel").css("color", "grey");
  $("#title").css("box-shadow", " -10px 14px 0px -9px grey")
  $("#titleReminder").css("visibility","hidden");
}
activateSave();
});



$("#phoneInputBoxDetails").on('focus', function () {
  console.log("phone click time: ", phoneClickTime);
  if(phoneClickTime > 0 && phoneClickTime%2 == 0){
  $("#phoneLabelDetails").removeClass("enquirylabelUp");
  $("#phoneLabelDetails").removeClass("enquirylabelDown");
}
  $("#phoneLabelDetails").addClass("enquirylabelUp");
  phoneClickTime += 1;
});

$('#phoneInputBoxDetails').on('keyup',function(){
  var phoneValue = this.value;
  var trimedLength = phoneValue.trim().length ;
if(haveAlphabet(phoneValue)){
  $("#phoneLabelDetails").css("color", "red");
  $("#phoneInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px red");
  $("#phoneReminderDetails").css("visibility","visible");
}else {
    $("#phoneLabelDetails").css("color", "grey");
    $("#phoneInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#phoneReminderDetails").css("visibility","hidden");
  }
  activateSave();
});

$('#phoneInputBoxDetails').on('focusout',function(){
  var phoneValue = this.value;
  var trimedLength = phoneValue.trim().length ;
if(trimedLength == 0){
  $("#phoneLabelDetails").css("color", "grey");
  $("#phoneInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#phoneReminderDetails").css("visibility","hidden");
  phoneClickTime += 1;
  $("#phoneLabelDetails").addClass("enquirylabelDown");
}else if(haveAlphabet(phoneValue)){
  $("#phoneLabelDetails").css("color", "red");
  $("#phoneInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px red");
  $("#phoneReminderDetails").css("visibility","visible");
}else {
    $("#phoneLabelDetails").css("color", "grey");
    $("#phoneInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#phoneReminderDetails").css("visibility","hidden");
  }
  activateSave();
});


$("#DOBInputBoxDetails").on('focus', function () {
  if(DOBClickTime > 0 && DOBClickTime%2 == 0){
  $("#DOBLabelDetails").removeClass("enquirylabelUp");
  $("#DOBLabelDetails").removeClass("enquirylabelDown");
  }
  $("#DOBLabelDetails").addClass("enquirylabelUp");
  DOBClickTime += 1;
});

$('#DOBInputBoxDetails').on('keyup',function(){
  var DOBValue = this.value;
  var trimedLength = DOBValue.trim().length ;
  if(trimedLength != 0 && !isFormattedDate(DOBValue)){
  $("#DOBLabelDetails").css("color", "red");
  $("#DOBInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px red");
  $("#DOBReminderDetails").css("visibility","visible");
  }else {
      $("#DOBLabelDetails").css("color", "grey");
      $("#DOBInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px grey");
      $("#DOBReminderDetails").css("visibility","hidden");
    }
    activateSave();
});

$('#DOBInputBoxDetails').on('focusout',function(){
  var DOBValue = this.value;
  var trimedLength = DOBValue.trim().length ;
  if(trimedLength != 0 && !isFormattedDate(DOBValue)){
  $("#DOBLabelDetails").css("color", "red");
  $("#DOBInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px red");
  $("#DOBReminderDetails").css("visibility","visible");
}else if(trimedLength == 0){
  $("#DOBLabelDetails").css("color", "grey");
  $("#DOBInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#DOBReminderDetails").css("visibility","hidden");
  DOBClickTime += 1;
  $("#DOBLabelDetails").addClass("enquirylabelDown");
} else {
      $("#DOBLabelDetails").css("color", "grey");
      $("#DOBInputBoxDetails").css("box-shadow", "-10px 14px 0px -8.9px grey");
      $("#DOBReminderDetails").css("visibility","hidden");
    }
    activateSave();
});


$("#nationalityDetails").on('focus', function () {
  if(nationalityClickTime > 0 && nationalityClickTime%2 == 0){
  $("#nationalityLabelDetails").removeClass("enquirylabelUp");
  $("#nationalityLabelDetails").removeClass("enquirylabelDown");
  }
  $("#nationalityLabelDetails").addClass("enquirylabelUp");
  nationalityClickTime += 1;
});

$("#nationalityDetails").on('focusout',function(){
  var nationality = this.value;
  var trimedLength = nationality.trim().length ;
  console.log(trimedLength);
  if(trimedLength == 0){
    console.log("arrive here");
    $("#nationalityLabelDetails").css("color", "grey");
    $("#nationalityDetails").css("box-shadow", " -10px 14px 0px -9px grey")
    nationalityClickTime += 1;
    $("#nationalityLabelDetails").addClass("enquirylabelDown");
  }else{
    $("#nationalityLabelDetails").css("color", "grey");
    $("#nationalityDetails").css("box-shadow", " -10px 14px 0px -9px grey")
  }
  activateSave();
});


function activateSave(){
  var currentTitle =   document.getElementById('titleDetails').value;
  console.log("currentTitle: ", currentTitle);
  var currentFirstName = document.getElementById('firstNameInputBoxDetails').value;
  var currentLastName = document.getElementById('lastNameInputBoxDetails').value;
  var currentEmail = document.getElementById('emailInputBoxDetails').value;
  var currentPhoneNumber = document.getElementById('phoneInputBoxDetails').value;
  var currentDOB =document.getElementById('DOBInputBoxDetails').value;
  var currentNationality = document.getElementById('nationalityDetails').value;
  var currentSubscribeAgreement =document.getElementById('purayNewsLetterDetails').checked;
  var titleModified = false;
  var firstNameModified = false;
  var lastNameModified =false;
  var emailModified = false;
  var phoneModified = false;
  var DOBModified = false;
  var nationalityModified = false;
  var newsletterSubscribedModified = false;
  //now compare with old one and also ensure data is as correct format
  if(currentTitle != initialTitle){
    titleModified = true;
    console.log("title modified: ", titleModified);
  }
  if(currentFirstName != initialFirstName){
    firstNameModified = true;
    console.log("firstName modified: ", firstNameModified);
  }
  if(currentLastName != initialLastName){
    lastNameModified = true;
    console.log("lastName modified: ", lastNameModified);
  }
  if(currentEmail != initialEmail){
    emailModified = true;
    console.log("email modified: ", emailModified);
  }
  if(currentPhoneNumber != initialPhoneNumber){
    phoneModified = true;
    console.log("phone number modified: ", phoneModified);
  }
  if(currentDOB != initialDOB){
    DOBModified = true;
    console.log("DOB modified: ", DOBModified);
  }
  if(currentNationality != initialNationality){
    nationalityModified = true;
    console.log("nationality modified: ", nationalityModified);
  }
  if(currentSubscribeAgreement != initialNewsletterSubscribed){
    newsletterSubscribedModified = true;
    console.log("subscribe email modified: ", newsletterSubscribedModified);
  }
  if(titleModified || firstNameModified || lastNameModified ||  emailModified || phoneModified || DOBModified || nationalityModified ||
  newsletterSubscribedModified){
    $('#saveButton').css('color','red');
    $("#saveDetails").prop('disabled', false);
  }else{
    $('#saveButton').css('color','grey');
    $("#saveDetails").prop('disabled', true);
  }
}


window.onscroll = function() {myFunction()};


var header = document.getElementById("bigBanner");
var leftMenu = document.getElementById("leftMenu");
var bottomContent = document.getElementById("bottomContent");
var screenHeight = screen.height;
var innerHeight = window.innerHeight;
var sticky = header.offsetTop;
var stickyLeftMenu = leftMenu.offsetTop;
var bottomContentOffset = bottomContent.offsetTop;
//console.log("window height", innerHeight);
//console.log("bottomconent offsettop", bottomContentOffset);
//console.log("screen height: ", screenHeight);
var emailClickTime = 0;
//console.log(sticky);

var emailBar = document.getElementById("emailSub");
var isFocused = (document.activeElement === emailBar);
//console.log(isFocused);


function myFunction() {
  var scrollUp = this.oldScroll > this.scrollY
  this.oldScroll = this.scrollY
  console.log(scrollUp);
  console.log(window.pageYOffset);
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if(window.pageYOffset >= stickyLeftMenu-100 && window.pageYOffset < 300){
    leftMenu.style.transform = 'translateY(100px)';
    if(!scrollUp){
    leftMenu.classList.add("leftMenuAnimation");
    }
    leftMenu.classList.add("stickyLeftMenu");

  }else if(window.pageYOffset < stickyLeftMenu-100 ){
    leftMenu.classList.remove("stickyLeftMenu");
    leftMenu.style.transform = 'translateY(0px)';
    leftMenu.classList.add("leftMenuAnimation");
  }
  if (window.pageYOffset >= 300) {
    leftMenu.classList.remove("stickyLeftMenu");
    leftMenu.classList.remove("leftMenuAnimation");
    leftMenu.style.transform = 'translateY(270px)';
  }else{
    leftMenu.classList.add("stickyLeftMenu");
  }
}


function labelUp(){
var label = document.getElementById("emailLabel");
console.log(label);
label.style.transform = 'translateY(-25px)';
label.classList.add("labelUp");

}

$("#emailSub").on('focus', function () {
  var emailContent = document.getElementById("emailSub").value;
  var length = emailContent.length;
  console.log(length);
  if(emailContent ==" " ||  emailContent=="" || emailContent==null){
    if(emailClickTime > 0 && emailClickTime%2 == 0){
   $("#emailLabel").removeClass("labelUp");
   $("#emailLabel").removeClass("labelDown");
    }
    $("#emailLabel").addClass("labelUp");
    emailClickTime += 1;
  }
});

$('#emailSub').on('focusout', function () {
  var emailContent = document.getElementById("emailSub").value;
  var length = emailContent.length;
  console.log(length);
  if (emailContent == " " || emailContent==null ||  emailContent == "" ) {
    $("#emailLabel").addClass("labelDown");
    emailClickTime += 1;
  }else{
    var emailIsValid = validateEmail(emailContent);
    console.log(emailIsValid);
    if(!emailIsValid){
          $("#emailLabel").css('color','red');
          $("#emailSub").css('box-shadow','-10px 14px 0px -8.9px red');
          $('#notValidEmail').css('visibility','visible');
          $('.emailFormOther').css('visibility', 'hidden');
         document.body.style.height =   "1000px";
         $('.footerContent').css('transform', 'translateY(0px)');
    }else{
          $("#emailLabel").css('color','grey');
          $("#emailSub").css('box-shadow','-10px 14px 0px -8.9px black');
          $('#notValidEmail').css('visibility','hidden');
          $('.emailFormOther').css('visibility', 'visible');
          document.body.style.height =   "1200px";
    }
  }
});

$('#emailSub').on('keyup',function(){
  var emailContent = document.getElementById("emailSub").value;
  var emailIsValid =  validateEmail(emailContent);
  if(!emailIsValid){
    $("#emailLabel").css('color','red');
    $('#notValidEmail').css('visibility','visible');
    $("#emailSub").css('box-shadow','-10px 14px 0px -8.9px red');
    $('.emailFormOther').css('visibility', 'hidden');
    document.body.style.height =   "1000px";
    $('.footerContent').css('transform', 'translateY(0px)');

  }else{
    $("#emailLabel").css('color','grey');
    $('#notValidEmail').css('visibility','hidden');
    $("#emailSub").css('box-shadow','-10px 14px 0px -8.9px black');
    $('.emailFormOther').css('visibility', 'visible');
    document.body.style.height =   "1100px";
    $('.footerContent').css('transform', 'translateY(100px)');
  }
});

$("#checkbox_1").change(function() {
    if(this.checked) {
        $('#submitEmailLabel').css('color','red');
        $("#submitEmail").prop('disabled', false);
    }else{
      $('#submitEmailLabel').css('color','grey');
      $("#submitEmail").prop('disabled', true);
    }
});



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$('#emailSubscribeForm').submit(function(e){
    e.preventDefault(); // stops the form submission
    var formContent = $(this).serialize();
    $.ajax({
      url: $(this).attr('action'), // action attribute of form to send the values
      type: 'POST', // method used in the form
      data: formContent,
      dataType: "text"
    });
    $('#thankSubscription').css("visibility","visible");
    $('#emailSubscription').css("visibility","hidden");
    $('#emailFormOther').css("visibility","hidden");
    document.body.style.height =   "1000px";
    $('.footerContent').css('transform', 'translateY(0px)');
    });


$('#search').on('focus',function(){
window.location.replace("searchInterface");
});

function haveAlphabet(str){
  return (/[a-z]/.test(str.toLowerCase()));
}

function isFormattedDate(date){
  var re = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  return re.test(String(date).toLowerCase());
}


$('#detailsForm').submit(function(e){
    e.preventDefault(); // stops the form submission
    var formContent = $(this).serialize();
    console.log(formContent);
    $.ajax({
      url: "profileModifyFunction.php", // action attribute of form to send the values
      type: 'POST', // method used in the form
      data: formContent,
      dataType: "text",
      success: function(data){
        window.location.href = "accountInfo";
      }
    });
    });


    $('#newPasswordLink').click(function() {
    $(window.opera ? 'html' : 'html, body').animate({
        scrollTop: 0
    }, 'slow');
    //now hide details form
    $("#detailsDiv").css("visibility","hidden");
    $("#newPasswordInterface").css("visibility","visible");
    $("#detailsDiv").css("z-index","10");
    $("#newPasswordInterface").css("index","12");
});


//password modify
currentPasswordReady = false;
newPasswordReady = false;
newPasswordConfirmed = false;
currentPasswordClickTime = 0;
newPasswordClickTime = 0;
newPasswordConfirmClickTime = 0;

function validatePassword(password){
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return re.test(password);
}



$("#currentPassword").on('focus', function () {
  if(currentPasswordClickTime > 0 && currentPasswordClickTime%2 == 0){
  $("#currentPasswordLabel").removeClass("enquirylabelUp");
  $("#currentPasswordLabel").removeClass("enquirylabelDown");
}
  $("#currentPasswordLabel").addClass("enquirylabelUp");
  currentPasswordClickTime += 1;
});

$('#currentPassword').on('keyup',function(){
  var currenPassword = this.value;
  var trimedLength = currenPassword.trim().length ;
if(trimedLength == 0){
  $("#currentPasswordLabel").css("color", "grey");
  $("#currentPassword").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#currentPasswordReminder").css("visibility","hidden");
  currentPasswordReady = false;
}else if(!validatePassword(currenPassword)){
  $("#currentPasswordLabel").css("color", "red");
  $("#currentPassword").css("box-shadow", "-10px 14px 0px -8.9px red");
  $("#currentPasswordReminder").css("visibility","visible");
  $("#currentPasswordReminder").text("Invalid password.");
  currentPasswordReady = false;
}else {
    $("#currentPasswordLabel").css("color", "grey");
    $("#currentPassword").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#currentPasswordReminder").css("visibility","hidden");
      currentPasswordReady = true;
  }
  var newPassword = document.getElementById("newPassword").value;
  if(currenPassword.trim() == newPassword.trim()){
    console.log("here we are");
    $("#newPasswordLabel").css("color", "red");
    $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px red");
    $("#newPasswordReminder").css("visibility","visible");
    $("#newPasswordReminder").text("New password cannot be the same as current password.");
    newPasswordReady = false;
  }else{
    $("#newPasswordLabel").css("color", "grey");
    $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#newPasswordReminder").css("visibility","hidden");
      newPasswordReady = true;
  }
  activatePasswordModify();
});

$('#currentPassword').on('focusout',function(){
  var currenPassword = this.value;
  var trimedLength = currenPassword.trim().length ;
if(trimedLength == 0){
  $("#currentPasswordLabel").css("color", "grey");
  $("#currentPassword").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#currentPasswordReminder").css("visibility","hidden");
  currentPasswordClickTime += 1;
  $("#currentPasswordLabel").addClass("enquirylabelDown");
  currentPasswordReady = false;
}else if(!validatePassword(currenPassword)){
  $("#currentPasswordLabel").css("color", "red");
  $("#currentPassword").css("box-shadow", "-10px 14px 0px -8.9px red");
  $("#currentPasswordReminder").css("visibility","visible");
  $("#currentPasswordReminder").text("Invalid password.");
  currentPasswordReady = false;
}else {
    $("#currentPasswordLabel").css("color", "grey");
    $("#currentPassword").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#currentPasswordReminder").css("visibility","hidden");
      currentPasswordReady = true;
  }
  var newPassword = document.getElementById("newPassword").value;
  if(currenPassword.trim() == newPassword.trim()){
    $("#newPasswordLabel").css("color", "red");
    $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px red");
    $("#newPasswordReminder").css("visibility","visible");
    $("#newPasswordReminder").text("New password cannot be the same as current password.");
    newPasswordReady = false;
  }else{
    $("#newPasswordLabel").css("color", "grey");
    $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#newPasswordReminder").css("visibility","hidden");
      newPasswordReady = true;
  }
  activatePasswordModify();
});



$("#newPassword").on('focus', function () {
  if(newPasswordClickTime > 0 && newPasswordClickTime%2 == 0){
  $("#newPasswordLabel").removeClass("enquirylabelUp");
  $("#newPasswordLabel").removeClass("enquirylabelDown");
}
  $("#newPasswordLabel").addClass("enquirylabelUp");
  newPasswordClickTime += 1;
});

$('#newPassword').on('keyup',function(){
  var newPassword = this.value;
  var trimedLength = newPassword.trim().length ;
if(trimedLength == 0){
  $("#newPasswordLabel").css("color", "grey");
  $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#newPasswordReminder").css("visibility","hidden");
  newPasswordReady = false;
}else if(!validatePassword(newPassword)){
  $("#newPasswordLabel").css("color", "red");
  $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px red");
  $("#newPasswordReminder").css("visibility","visible");
  $("#newPasswordReminder").text("Invalid password.");
  newPasswordReady = false;
}else {
    $("#newPasswordLabel").css("color", "grey");
    $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#newPasswordReminder").css("visibility","hidden");
    newPasswordReady = true;
  }
  var passwordConfirmValue = document.getElementById("newPasswordConfirm").value;

  if(newPassword != passwordConfirmValue && passwordConfirmValue.trim().length != 0){
    $("#newPasswordConfirmLabel").css("color", "red");
    $("#newPasswordConfirm").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#newPasswordConfirmReminder").css("visibility","visible");
    $("#newPasswordConfirmReminder").text("Password doesn't match previous record.");
      newPasswordConfirmed = false;
  }else{
    $("#newPasswordConfirmLabel").css("color", "grey");
    $("#newPasswordConfirm").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#newPasswordConfirmReminder").css("visibility","hidden");
    newPasswordConfirmed = true;
  }
  activatePasswordModify();
});

$('#newPassword').on('focusout',function(){
  var newPassword = this.value;
  var trimedLength = newPassword.trim().length ;
if(trimedLength == 0){
  $("#newPasswordLabel").css("color", "grey");
  $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#newPasswordReminder").css("visibility","hidden");
  newPasswordClickTime += 1;
  $("#newPasswordLabel").addClass("enquirylabelDown");
  newPasswordReady = false;
}else if(!validatePassword(newPassword)){
  $("#newPasswordLabel").css("color", "red");
  $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px red");
  $("#newPasswordReminder").css("visibility","visible");
  $("#newPasswordReminder").text("Invalid password.");
  newPasswordReady = false;
}else {
    $("#newPasswordLabel").css("color", "grey");
    $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#newPasswordReminder").css("visibility","hidden");
    newPasswordReady = true;
  }
  var currenPassword = document.getElementById("currentPassword").value;
  console.log("currentPassword is ", currenPassword);
  if(currenPassword.trim() == newPassword.trim()){
    console.log("here we are");
    $("#newPasswordLabel").css("color", "red");
    $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px red");
    $("#newPasswordReminder").css("visibility","visible");
    $("#newPasswordReminder").text("New password cannot be the same as current password.");
    newPasswordReady = false;
  }else{
    $("#newPasswordLabel").css("color", "grey");
    $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#newPasswordReminder").css("visibility","hidden");
      newPasswordReady = true;
  }
  activatePasswordModify();
});




$("#newPasswordConfirm").on('focus', function () {
  if(newPasswordConfirmClickTime > 0 && newPasswordConfirmClickTime%2 == 0){
  $("#newPasswordConfirmLabel").removeClass("enquirylabelUp");
  }
  $("#newPasswordConfirmLabel").addClass("enquirylabelUp");
  newPasswordConfirmClickTime += 1;
});

$('#newPasswordConfirm').on('keyup',function(){
  var passwordConfirmValue = this.value;
  console.log("confirm value:", passwordConfirmValue);
  var previousPassword = document.getElementById("newPassword").value;
  var trimedLength = previousPassword.trim().length ;
  console.log("old value:", previousPassword);
  if(trimedLength == 0 || previousPassword == null){
    $("#newPasswordConfirmLabel").css("color", "red");
    $("#newPasswordConfirm").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#newPasswordConfirmReminder").css("visibility","visible");
    $("#newPasswordConfirmReminder").text("Previous password can't be empty");
      newPasswordConfirmed = false;
  } else if(passwordConfirmValue!=previousPassword){
    $("#newPasswordConfirmLabel").css("color", "red");
    $("#newPasswordConfirm").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#newPasswordConfirmReminder").css("visibility","visible");
    $("#newPasswordConfirmReminder").text("Password doesn't match previous record.");
      newPasswordConfirmed = false;
  }else{
    $("#newPasswordConfirmLabel").css("color", "grey");
    $("#newPasswordConfirm").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#newPasswordConfirmReminder").css("visibility","hidden");
    newPasswordConfirmed = true;
  }
  activatePasswordModify();
});

$('#newPasswordConfirm').on('focusout',function(){
  var passwordConfirmValue = this.value;
  console.log("confirm value:", passwordConfirmValue);
  var previousPassword = document.getElementById("newPassword").value;
  var trimedLength = previousPassword.trim().length ;
  console.log("old value:", previousPassword);
  if(trimedLength == 0 || previousPassword == null){
    $("#newPasswordConfirmLabel").css("color", "red");
    $("#newPasswordConfirm").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#newPasswordConfirmReminder").css("visibility","visible");
    $("#newPasswordConfirmReminder").text("Previous password can't be empty");
      newPasswordConfirmed = false;
  } else if(passwordConfirmValue!=previousPassword){
    $("#newPasswordConfirmLabel").css("color", "red");
    $("#newPasswordConfirm").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#newPasswordConfirmReminder").css("visibility","visible");
    $("#newPasswordConfirmReminder").text("Password doesn't match previous record.");
      newPasswordConfirmed = false;
  }else{
    $("#newPasswordConfirmLabel").css("color", "grey");
    $("#newPasswordConfirm").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#newPasswordConfirmReminder").css("visibility","hidden");
    newPasswordConfirmed = true;
  }
  activatePasswordModify();
});


function activatePasswordModify(){
  if(currentPasswordReady && newPasswordReady && newPasswordConfirmed){
    $('#saveButtonPassword').css('color','red');
    $("#saveNewPassword").prop('disabled', false);
  }else{
    $('#saveButtonPassword').css('color','grey');
    $("#saveNewPassword").prop('disabled', true);
  }
}


$('#passwordForm').submit(function(e){
    e.preventDefault(); // stops the form submission
    var formContent = $(this).serialize();
    console.log(formContent);
    $.ajax({
      url: "profileModifyFunction.php", // action attribute of form to send the values
      type: 'POST', // method used in the form
      data: formContent,
      dataType: "text",
      success: function(data){
        if(data == "duplicate"){
          $("#newPasswordLabel").css("color", "red");
          $("#newPassword").css("box-shadow", "-10px 14px 0px -8.9px red");
          $("#newPasswordReminder").css("visibility","visible");
          $("#newPasswordReminder").text("Invalid password.");
          newPasswordReady = false;
        }else if(data == "error"){
          $("#currentPasswordLabel").css("color", "red");
          $("#currentPassword").css("box-shadow", "-10px 14px 0px -8.9px red");
          $("#currentPasswordReminder").css("visibility","visible");
          $("#currentPasswordReminder").text("Incorrect current password.");
          currentPasswordReady = false;
        }else{
          $("#successModify").css("visibility","visible");
          window.setTimeout(function(){
       // Move to a new location or you can do something else
       window.location.href = "accountInfo";
   }, 2000);
        }
      }
    });
    });

    $('#hidePasswordInterface').on('click',function(){
      $("#detailsDiv").css("visibility","visible");
      $("#newPasswordInterface").css("visibility","hidden");
      $("#detailsDiv").css("z-index","12");
      $("#newPasswordInterface").css("index","10");
    });
