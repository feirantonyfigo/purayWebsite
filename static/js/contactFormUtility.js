titleReady = false;
firstNameReady = false;
lastNameReady = false;
emailReady = false;
phoneReady = true;
commentReady = false;

titleClickTime = 0;
firstNameClickTime = 0;
lastNameClickTime = 0;
emailBoxClickTime = 0;
phoneClickTime = 0;
commentClickTime = 0;



$("#title").on('focus', function () {
  console.log(titleClickTime);
  if(titleClickTime > 0 && titleClickTime%2 == 0){
  $("#titleLabel").removeClass("enquirylabelUp");
  }
  $("#titleLabel").addClass("enquirylabelUp");
  console.log(document.getElementById("titleLabel"));
  titleClickTime += 1;
});

$("#title").on('focusout',function(){
titleValue = this.value;
console.log(titleValue);
if(titleValue != "Mr." && titleValue != "Miss." && titleValue != "Mrs." &&  titleValue != "Ms."){
  $("#titleLabel").css("color", "red");
  $("#title").css("box-shadow", " -10px 14px 0px -9px red")
  $("#titleReminder").css("visibility","visible");
  titleReady = false;
}else{
  $("#titleLabel").css("color", "grey");
  $("#title").css("box-shadow", " -10px 14px 0px -9px grey")
  $("#titleReminder").css("visibility","hidden");
  titleReady = true;
}
activeSubmit();
});

$("#firstNameInputBox").on('focus', function () {
  if(firstNameClickTime > 0 && firstNameClickTime%2 == 0){
  $("#firstNameLabel").removeClass("enquirylabelUp");
  }
  $("#firstNameLabel").addClass("enquirylabelUp");
  firstNameClickTime += 1;
});

$("#firstNameInputBox").on('focusout',function(){
var firstNameValue = this.value;
var trimedLength = firstNameValue.trim().length ;
console.log(trimedLength);
if(trimedLength == 0 || firstNameValue == null){
  $("#firstNameLabel").css("color", "red");
  $("#firstNameInputBox").css("box-shadow", " -10px 14px 0px -8.9px red")
  $("#firstNameReminder").css("visibility","visible");
  firstNameReady = false;
}else{
  $("#firstNameLabel").css("color", "grey");
  $("#firstNameInputBox").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#firstNameReminder").css("visibility","hidden");
  firstNameReady = true;
}
activeSubmit();
});

$("#lastNameInputBox").on('focus', function () {
  console.log(lastNameClickTime);
  if(lastNameClickTime > 0 && lastNameClickTime%2 == 0){
  $("#lastNameLabel").removeClass("enquirylabelUp");
  }
  $("#lastNameLabel").addClass("enquirylabelUp");
  lastNameClickTime += 1;
});

$("#lastNameInputBox").on('focusout',function(){
var lastNameValue = this.value;
var trimedLength = lastNameValue.trim().length ;
console.log(trimedLength);
if(trimedLength == 0 || lastNameValue == null){
  $("#lastNameLabel").css("color", "red");
  $("#lastNameInputBox").css("box-shadow", " -10px 14px 0px -8.9px red")
  $("#lastNameReminder").css("visibility","visible");
  lastNameReady = false;
}else{
  $("#lastNameLabel").css("color", "grey");
  $("#lastNameInputBox").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#lastNameReminder").css("visibility","hidden");
  lastNameReady = true;
}
activeSubmit();
});


$("#emailInputBox").on('focus', function () {
  console.log(lastNameClickTime);
  if(emailBoxClickTime > 0 && emailBoxClickTime%2 == 0){
  $("#emailSubLabel").removeClass("enquirylabelUp");
  }
  $("#emailSubLabel").addClass("enquirylabelUp");
  emailBoxClickTime += 1;
});

$("#emailInputBox").on('focusout',function(){
var emailValue = this.value;
var trimedLength = emailValue.trim().length ;
console.log(trimedLength);
if(trimedLength == 0 || emailValue == null){
  $("#emailSubLabel").css("color", "red");
  $("#emailInputBox").css("box-shadow", " -10px 14px 0px -8.9px red");
  $("#emailReminder").css("visibility","visible");
  if(language == "en"){
    $('#emailReminder').text('This Field is Required.');
}else if(language == "fr"){
  $('#emailReminder').text('Ce champ est requis.');
}else if(language == "zh"){
  $('#emailReminder').text('此项不能为空');
}

  emailReady = false;

}else if(!validateEmail(emailValue)){
  $("#emailSubLabel").css("color", "red");
  $("#emailInputBox").css("box-shadow", " -10px 14px 0px -8.9px red");
  $("#emailReminder").css("visibility","visible");
  if(language == "en"){
      $('#emailReminder').text('Email address is invalid.');
}else if(language == "fr"){
  $('#emailReminder').text('Adresse email invalide.');
}else if(language == "zh"){
  $('#emailReminder').text('无效电子邮箱');
}
  emailReady = false;
}else{
  $("#emailSubLabel").css("color", "grey");
  $("#emailInputBox").css("box-shadow", "-10px 14px 0px -8.9px grey");
  $("#emailReminder").css("visibility","hidden");
  emailReady = true;
}
activeSubmit();
});

$("#phoneInputBox").on('focus', function () {
  console.log(lastNameClickTime);
  if(phoneClickTime > 0 && phoneClickTime%2 == 0){
  $("#phoneLabel").removeClass("enquirylabelUp");
  $("#phoneLabel").removeClass("enquirylabelDown");
  }
  $("#phoneLabel").addClass("enquirylabelUp");
  phoneClickTime += 1;
});


$("#phoneInputBox").on('focusout',function(){
  console.log("here");
var phoneNumber = this.value;
var trimedLength = phoneNumber.trim().length ;
if(trimedLength == 0 || phoneNumber == null){
  console.log("here");
  $("#phoneLabel").css("color", "grey");
  $("#phoneInputBox").css("box-shadow", " -10px 14px 0px -8.9px grey");
  $("#phoneReminder").css("visibility","hidden");
$("#phoneLabel").addClass("enquirylabelDown");
  phoneClickTime += 1;
  phoneReady = true;
}else if(haveAlphabet(phoneNumber)){
  $("#phoneLabel").css("color", "red");
  $("#phoneInputBox").css("box-shadow", " -10px 14px 0px -8.9px red");
  $("#phoneReminder").css("visibility","visible");
  phoneReady = false;
}else{
  $("#phoneLabel").css("color", "grey");
  $("#phoneInputBox").css("box-shadow", " -10px 14px 0px -8.9px grey");
  $("#phoneReminder").css("visibility","hidden");
  phoneReady = true;
}
activeSubmit();
});



$("#commentTextArea").on('focus', function () {
  if(commentClickTime > 0 && commentClickTime%2 == 0){
  $("#commentLabel").removeClass("commentLabelUp");
  }
  $("#commentLabel").addClass("commentLabelUp");
  commentClickTime += 1;
});

$("#commentTextArea").on('focusout',function(){
var commentValue = this.value;
var trimedLength = commentValue.trim().length ;
console.log(trimedLength);
if(trimedLength == 0 || commentValue == null){
  $("#commentLabel").css("color", "red");
  $("#commentTextArea").css("box-shadow", " -10px 14px 0px -10.5px red")
  $("#commentReminder").css("visibility","visible");
  commentReady = false;
}else{
  $("#commentLabel").css("color", "grey");
  $("#commentTextArea").css("box-shadow", "-10px 14px 0px -10.5px grey");
  $("#commentReminder").css("visibility","hidden");
  commentReady = true;
}
activeSubmit();
});
function haveAlphabet(str){
  return (/[a-z]/.test(str.toLowerCase()));
}

$("#commentTextArea").on('input', function() {
  var commentValue = $(this).val();
  var length = commentValue.length;
  var maxLength =$(this).attr('maxLength');
  console.log("length ",length);
  console.log("max", maxLength);
  console.log(commentValue);
	var scroll_height = $("#commentTextArea").get(0).scrollHeight;
  console.log(scroll_height);
	$("#commentTextArea").css('height', scroll_height + 'px');
  if(length == maxLength){
    $('#commentReminder').text('Word limit reached.');
    $("#commentReminder").css("visibility","visible");
  }else{
    $('#commentReminder').text('This Field is Required.');
    $("#commentReminder").css("visibility","hidden");
  }
});




function inquiryReady(){
return (titleReady&&firstNameReady&&lastNameReady&&emailReady&&phoneReady&&commentReady);
}

function activeSubmit(){
  if(inquiryReady()){
    $('#submitInquiryButton').css('color','red');
    $("#submitInquiry").prop('disabled', false);
  }else{
    $('#submitInquiryButton').css('color','grey');
    $("#submitInquiry").prop('disabled', true);
  }
}

$('#sendEnquriy').on('click',function(){
$(".centerContent1").css('visibility','hidden');
$(".centerContent2").css('visibility','visible');
$(".centerContent1").css('z-index','10');
});

$('#cancelInquiryButton').on('click',function(){
  $(".centerContent2").css('visibility','hidden');
  $(".centerContent1").css('visibility','visible');
  $(".centerContent1").css('z-index','12');
  restoreInquiryForm();
});

function restoreInquiryForm(){
  $(".fieldLabel").css('color','grey');
  $(".reminder").css('visibility','hidden');
  $(".fieldInput").css("box-shadow", " -10px 14px 0px -8.9px grey");
  $("#commentTextArea").css("box-shadow", "-10px 14px 0px -10.5px grey");
}

$('#enquiryForm').submit(function(e){
    e.preventDefault(); // stops the form submission
    var formContent = $(this).serialize();
    console.log(formContent);
    $.ajax({
      url: $(this).attr('action'), // action attribute of form to send the values
      type: 'POST', // method used in the form
      data: formContent,
      dataType: "text"
    });
    $(".centerContent1").css('visibility','hidden');
    $(".centerContent2").css('visibility','hidden');
    $(".centerContent3").css('visibility','visible');
    $(".centerContent3").css('z-index','13');
    });
