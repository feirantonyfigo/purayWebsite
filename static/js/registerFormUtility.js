firstNameReady = false;
lastNameReady = false;
emailReadyRegister = false;
passwordReadyRegister = false;
passwordConfirmed = false;
firstNameClickTime = 0;
lastNameClickTime = 0;
emailRegisterClickTime = 0;
passwordRegisterClickTime  = 0;
passwordRegisterConfirmClickTime  = 0;

$("#firstNameInputBoxRegister").on('focus', function () {
  if(firstNameClickTime > 0 && firstNameClickTime%2 == 0){
  $("#firstNameLabelRegister").removeClass("enquirylabelUp");
  }
  $("#firstNameLabelRegister").addClass("enquirylabelUp");
  firstNameClickTime += 1;
});

$('#firstNameInputBoxRegister').on('keyup',function(){
  var firstNameValue = this.value;
  var trimedLength = firstNameValue.trim().length ;
  if(trimedLength == 0 || firstNameValue == null){
    $("#firstNameLabelRegister").css("color", "red");
    $("#firstNameInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#firstNameReminderRegister").css("visibility","visible");
    firstNameReady = false;
  }else{
    $("#firstNameLabelRegister").css("color", "grey");
    $("#firstNameInputBoxRegister").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#firstNameReminderRegister").css("visibility","hidden");
    firstNameReady = true;
  }
  activeSubmit();
});


$("#firstNameInputBoxRegister").on('focusout',function(){
  var firstNameValue = this.value;
  var trimedLength = firstNameValue.trim().length ;
  if(trimedLength == 0 || firstNameValue == null){
    $("#firstNameLabelRegister").css("color", "red");
    $("#firstNameInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#firstNameReminderRegister").css("visibility","visible");
    firstNameReady = false;
  }else{
    $("#firstNameLabelRegister").css("color", "grey");
    $("#firstNameInputBoxRegister").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#firstNameReminderRegister").css("visibility","hidden");
    firstNameReady = true;
  }
  activeSubmit();
});


$("#lastNameInputBoxRegister").on('focus', function () {
  if(lastNameClickTime > 0 && lastNameClickTime%2 == 0){
  $("#lastNameLabelRegister").removeClass("enquirylabelUp");
  }
  $("#lastNameLabelRegister").addClass("enquirylabelUp");
  lastNameClickTime += 1;
});

$("#lastNameInputBoxRegister").on('focusout',function(){
var lastNameValue = this.value;
var trimedLength = lastNameValue.trim().length ;
console.log(trimedLength);
if(trimedLength == 0 || lastNameValue == null){
  $("#lastNameLabelRegister").css("color", "red");
  $("#lastNameInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
  $("#lastNameReminderRegister").css("visibility","visible");
  lastNameReady = false;
}else{
  $("#lastNameLabelRegister").css("color", "grey");
  $("#lastNameInputBoxRegister").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#lastNameReminderRegister").css("visibility","hidden");
  lastNameReady = true;
}
activeSubmit();
});

$('#lastNameInputBoxRegister').on('keyup',function(){
  var lastNameValue = this.value;
  var trimedLength = lastNameValue.trim().length ;
  console.log(trimedLength);
  if(trimedLength == 0 || lastNameValue == null){
    $("#lastNameLabelRegister").css("color", "red");
    $("#lastNameInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#lastNameReminderRegister").css("visibility","visible");
    lastNameReady = false;
  }else{
    $("#lastNameLabelRegister").css("color", "grey");
    $("#lastNameInputBoxRegister").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#lastNameReminderRegister").css("visibility","hidden");
    lastNameReady = true;
  }
  activeSubmit();
});


$("#lastNameInputBoxRegister").on('focus', function () {
  if(lastNameClickTime > 0 && lastNameClickTime%2 == 0){
  $("#lastNameLabelRegister").removeClass("enquirylabelUp");
  }
  $("#lastNameLabelRegister").addClass("enquirylabelUp");
  lastNameClickTime += 1;
});

$("#lastNameInputBoxRegister").on('focusout',function(){
var lastNameValue = this.value;
var trimedLength = lastNameValue.trim().length ;
console.log(trimedLength);
if(trimedLength == 0 || lastNameValue == null){
  $("#lastNameLabelRegister").css("color", "red");
  $("#lastNameInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
  $("#lastNameReminderRegister").css("visibility","visible");
  lastNameReady = false;
}else{
  $("#lastNameLabelRegister").css("color", "grey");
  $("#lastNameInputBoxRegister").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#lastNameReminderRegister").css("visibility","hidden");
  lastNameReady = true;
}
activeSubmit();
});

$('#lastNameInputBoxRegister').on('keyup',function(){
  var lastNameValue = this.value;
  var trimedLength = lastNameValue.trim().length ;
  console.log(trimedLength);
  if(trimedLength == 0 || lastNameValue == null){
    $("#lastNameLabelRegister").css("color", "red");
    $("#lastNameInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#lastNameReminderRegister").css("visibility","visible");
    lastNameReady = false;
  }else{
    $("#lastNameLabelRegister").css("color", "grey");
    $("#lastNameInputBoxRegister").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#lastNameReminderRegister").css("visibility","hidden");
    lastNameReady = true;
  }
  activeSubmit();
});


$("#emailInputBoxRegister").on('focus', function () {
  if(emailRegisterClickTime > 0 && emailRegisterClickTime%2 == 0){
  $("#emailLabelRegister").removeClass("enquirylabelUp");
  }
  $("#emailLabelRegister").addClass("enquirylabelUp");
  emailRegisterClickTime += 1;
});


$("#emailInputBoxRegister").on('focusout',function(){
var emailValueRegister = this.value;
var trimedLength = emailValueRegister.trim().length ;
if(trimedLength == 0 || emailValueRegister == null){
  $("#emailLabelRegister").css("color", "red");
  $("#emailInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
  $("#emailReminderRegister").css("visibility","visible");
  $('#emailReminderRegister').text('This Field is Required.');
  emailReadyRegister = false;
}else if(!validateEmail(emailValueRegister)){
  $("#emailLabelRegister").css("color", "red");
  $("#emailInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
  $("#emailReminderRegister").css("visibility","visible");
  $('#emailReminderRegister').text('Invalid Email Address.');
}else{
  $("#emailLabelRegister").css("color", "grey");
  $("#emailInputBoxRegister").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#emailReminderRegister").css("visibility","hidden");
  emailReadyRegister = true;
}
activeSubmit();
});


$("#emailInputBoxRegister").on('keyup',function(){
  var emailValueRegister = this.value;
  var trimedLength = emailValueRegister.trim().length ;
  if(trimedLength == 0 || emailValueRegister == null){
    $("#emailLabelRegister").css("color", "red");
    $("#emailInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#emailReminderRegister").css("visibility","visible");
    $('#emailReminderRegister').text('This Field is Required.');
    emailReadyRegister = false;
  }else if(!validateEmail(emailValueRegister)){
    $("#emailLabelRegister").css("color", "red");
    $("#emailInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#emailReminderRegister").css("visibility","visible");
    $('#emailReminderRegister').text('Invalid Email Address.');
  }else{
    $("#emailLabelRegister").css("color", "grey");
    $("#emailInputBoxRegister").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#emailReminderRegister").css("visibility","hidden");
    emailReadyRegister = true;
  }
  activeSubmit();
});


$("#passwordInputBoxRegister").on('focus', function () {
  if(passwordRegisterClickTime > 0 && passwordRegisterClickTime%2 == 0){
  $("#passwordLabelRegister").removeClass("enquirylabelUp");
  }
  $("#passwordLabelRegister").addClass("enquirylabelUp");
  passwordRegisterClickTime += 1;
});


$("#passwordInputBoxRegister").on('keyup',function(){
  var passwordValueRegister = this.value;
  var trimedLength = passwordValueRegister.trim().length ;
  if(trimedLength == 0 || passwordValueRegister == null){
    $("#passwordLabelRegister").css("color", "red");
    $("#passwordInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#passwordReminderRegister").css("visibility","visible");
    $('#passwordReminderRegister').text('This Field is Required.');
    passwordReadyRegister = false;
  }else if(!validatePassword(passwordValueRegister)){
    $("#passwordLabelRegister").css("color", "red");
    $("#passwordInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#passwordReminderRegister").css("visibility","visible");
    $('#passwordReminderRegister').text('Invalid Password.');
  }else{
    $("#passwordLabelRegister").css("color", "grey");
    $("#passwordInputBoxRegister").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#passwordReminderRegister").css("visibility","hidden");
    passwordReadyRegister = true;
  }
  var passwordConfirmValue = document.getElementById("passwordInputBoxRegisterConfirm").value;
  if(passwordConfirmValue.trim().length != 0 && passwordValueRegister!=passwordConfirmValue){
    $("#passwordLabelRegisterConfirm").css("color", "red");
    $("#passwordInputBoxRegisterConfirm").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#passwordReminderConfirm").css("visibility","visible");
    $("#passwordReminderConfirm").text("Password doesn't match previous record.");
    passwordConfirmed = false;
  }else if(passwordValueRegister == passwordConfirmValue){
    $("#passwordLabelRegisterConfirm").css("color", "grey");
    $("#passwordInputBoxRegisterConfirm").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#passwordReminderConfirm").css("visibility","hidden");
    passwordConfirmed = true;
  }
  activeSubmit();
});


$("#passwordInputBoxRegister").on('focusout',function(){
  var passwordValueRegister = this.value;
  var trimedLength = passwordValueRegister.trim().length ;
  if(trimedLength == 0 || passwordValueRegister == null){
    $("#passwordLabelRegister").css("color", "red");
    $("#passwordInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#passwordReminderRegister").css("visibility","visible");
    $('#passwordReminderRegister').text('This Field is Required.');
    passwordReadyRegister = false;
  }else if(!validatePassword(passwordValueRegister)){
    $("#passwordLabelRegister").css("color", "red");
    $("#passwordInputBoxRegister").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#passwordReminderRegister").css("visibility","visible");
    $('#passwordReminderRegister').text('Invalid Password.');
  }else{
    $("#passwordLabelRegister").css("color", "grey");
    $("#passwordInputBoxRegister").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#passwordReminderRegister").css("visibility","hidden");
    passwordReadyRegister = true;
  }
  var passwordConfirmValue = document.getElementById("passwordInputBoxRegisterConfirm").value;
  if(passwordConfirmValue.trim().length != 0 && passwordValueRegister!=passwordConfirmValue){
    $("#passwordLabelRegisterConfirm").css("color", "red");
    $("#passwordInputBoxRegisterConfirm").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#passwordReminderConfirm").css("visibility","visible");
    $("#passwordReminderConfirm").text("Password doesn't match previous record.");
    passwordConfirmed = false;
  }else if(passwordValueRegister == passwordConfirmValue){
    $("#passwordLabelRegisterConfirm").css("color", "grey");
    $("#passwordInputBoxRegisterConfirm").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#passwordReminderConfirm").css("visibility","hidden");
    passwordConfirmed = true;
  }
  activeSubmit();
});


$("#passwordInputBoxRegisterConfirm").on('focus', function () {
  if(passwordRegisterConfirmClickTime > 0 && passwordRegisterConfirmClickTime%2 == 0){
  $("#passwordLabelRegisterConfirm").removeClass("enquirylabelUp");
  }
  $("#passwordLabelRegisterConfirm").addClass("enquirylabelUp");
  passwordRegisterConfirmClickTime += 1;
});

$('#passwordInputBoxRegisterConfirm').on('keyup',function(){
  var passwordConfirmValue = this.value;
  console.log("confirm value:", passwordConfirmValue);
  var previousPassword = document.getElementById("passwordInputBoxRegister").value;
  var trimedLength = previousPassword.trim().length ;
  console.log("old value:", previousPassword);
  if(trimedLength == 0 || previousPassword == null){
    $("#passwordLabelRegisterConfirm").css("color", "red");
    $("#passwordInputBoxRegisterConfirm").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#passwordReminderConfirm").css("visibility","visible");
    $("#passwordReminderConfirm").text("Previous password can't be empty");
      passwordConfirmed = false;
  } else if(passwordConfirmValue!=previousPassword){
    $("#passwordLabelRegisterConfirm").css("color", "red");
    $("#passwordInputBoxRegisterConfirm").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#passwordReminderConfirm").css("visibility","visible");
    $("#passwordReminderConfirm").text("Password doesn't match previous record.");
      passwordConfirmed = false;
  }else{
    $("#passwordLabelRegisterConfirm").css("color", "grey");
    $("#passwordInputBoxRegisterConfirm").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#passwordReminderConfirm").css("visibility","hidden");
    passwordConfirmed = true;
  }
  activeSubmit();
});

$('#passwordInputBoxRegisterConfirm').on('focusout',function(){
  var passwordConfirmValue = this.value;
  var previousPassword = $("#passwordInputBoxRegister").value;
  var trimedLength = previousPassword.trim().length ;
  console.log("old value:", previousPassword);
  if(trimedLength == 0 || previousPassword == null){
    $("#passwordLabelRegisterConfirm").css("color", "red");
    $("#passwordInputBoxRegisterConfirm").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#passwordReminderConfirm").css("visibility","visible");
    $("#passwordReminderConfirm").text("Previous password can't be empty");
      passwordConfirmed = false;
  } else if(passwordConfirmValue!=previousPassword){
    $("#passwordLabelRegisterConfirm").css("color", "red");
    $("#passwordInputBoxRegisterConfirm").css("box-shadow", " -10px 14px 0px -8.9px red")
    $("#passwordReminderConfirm").css("visibility","visible");
    $("#passwordReminderConfirm").text("Password doesn't match previous record.");
      passwordConfirmed = false;
  }else{
    $("#passwordLabelRegisterConfirm").css("color", "grey");
    $("#passwordInputBoxRegisterConfirm").css("box-shadow", "-10px 14px 0px -8.9px grey");
    $("#passwordReminderConfirm").css("visibility","hidden");
    passwordConfirmed = true;
  }
  activeSubmit();
});



function validatePassword(password){
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return re.test(password);
}


function inquiryReady(){
return (firstNameReady&&lastNameReady&&emailReadyRegister&&passwordReadyRegister&&passwordConfirmed);
}

function activeSubmit(){
  if(inquiryReady()){
    $('#registerButton').css('color','red');
    $("#submitRegister").prop('disabled', false);
  }else{
    $('#registerButton').css('color','grey');
    $("#submitRegister").prop('disabled', true);
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

  if(window.pageYOffset >= stickyLeftMenu-100 && window.pageYOffset < 200){
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
  if (window.pageYOffset >= 200) {
    leftMenu.classList.remove("stickyLeftMenu");
    leftMenu.classList.remove("leftMenuAnimation");
    leftMenu.style.transform = 'translateY(170px)';
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
         document.body.style.height =   "500px";
         $('.footerContent').css('transform', 'translateY(0px)');
    }else{
          $("#emailLabel").css('color','grey');
          $("#emailSub").css('box-shadow','-10px 14px 0px -8.9px black');
          $('#notValidEmail').css('visibility','hidden');
          $('.emailFormOther').css('visibility', 'visible');
          document.body.style.height =   "700px";
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
    document.body.style.height =   "500px";
    $('.footerContent').css('transform', 'translateY(0px)');

  }else{
    $("#emailLabel").css('color','grey');
    $('#notValidEmail').css('visibility','hidden');
    $("#emailSub").css('box-shadow','-10px 14px 0px -8.9px black');
    $('.emailFormOther').css('visibility', 'visible');
    document.body.style.height =   "600px";
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
    document.body.style.height =   "500px";
    $('.footerContent').css('transform', 'translateY(0px)');
    });


$('#search').on('focus',function(){
window.location.replace("searchInterface");
});



$('#registerForm').submit(function(e){
    e.preventDefault(); // stops the form submission
    var formContent = $(this).serialize();
    $.ajax({
      url: "registerFunction.php", // action attribute of form to send the values
      type: 'POST', // method used in the form
      data: formContent,
      dataType: "text",
      success: function(data){
        if(data.trim() == "duplicate"){
          $('#duplicateAccount').css("visibility","visible");
        }else{
          $('#registerForm').css("visibility","hidden");
          $('#passwordRequirement').css("visibility","hidden");
          $('#emailConfirm').css("visibility","visible");
          $('#emailConfirm').css("margin-top","-500px");
          $('#emailConfirm').css("margin-bottom","200px");
          emailConfirm

        }
      }
    });
    });
