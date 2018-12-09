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
