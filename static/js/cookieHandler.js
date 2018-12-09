var cookieEnabled;

function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
    console.log(document.cookie);
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function cookieAgree(){
  var header = document.getElementById("myHeader");
  var offsetY = header.offsetTop;
  header.style.transform = 'translateY(-20px)';
  console.log(header.style.transform);
  document.getElementById("cookieBanner").style.visibility = "hidden";
  header.classList.add("bannerUp");
  console.log(header.offsetTop);
  createCookie("cookieEnabled", "true",  180)
  console.log(readCookieEnable());
}

function readCookieEnable(){
  return readCookie("cookieEnabled");
}

function loadCookieEnabled(){
var header = document.getElementById("myHeader");
header.style.transform = 'translateY(-20px)';
cookieEnabled = readCookieEnable();
console.log("cookie enabled: ", cookieEnabled);
if(cookieEnabled != "true"){
  header.style.transform = 'translateY(20px)';
  header.classList.add("bannerUp");
  document.getElementById("cookieBanner").style.visibility = "visible";
}
}
