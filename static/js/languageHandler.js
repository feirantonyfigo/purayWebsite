
var language;
//load language from cookie
function loadLanguage() {
	language = getLanguage();
	//if language not set, set it to english
	if ( language != 'en' && language != "zh" && language != "fr") {
		language = 'en';
	}
	console.log("language is", language);
	//apply language
	applyLanguage();
}

//use cookie to save language
function saveLanguage( language ) {
	eraseCookie( "language" );
	createCookie( "language", language, 180 );
}
//read language from cookie
function getLanguage() {
	return readCookie( "language" );
}
//dictionary for language replacement
var arrLang = {
	'en': {
		'product': 'SHOP',
		'idea':"IDEA BEHIND",
		'contactUs':"CONTACT US",
		'naturalBeauty' : "HYDROGEN WATER",
		'smartHealth' : "INTELLIGENT MOISTURIZER",
		'productName' : "HYDROGEN WATER SPRAY",
		'newsletter':" NEWSLETTER",
		'email' : 'EMAIL',
			'invalidEmail':"Please enter a valid email address.",
			'register':"REGISTER",
			'contactBtm':"Contact",
			'wechat':"Wechat",
			'languagePref':"Language",
			'T&C':"Terms & Conditions",
			'sendEnquiry':"SEND ENQUIRY",
			'thankSubscription':"Thank you for your registration.",
			'contactEx1':"You can email us at",
			'contactEx2':"An advisor will respond to you in English, French or Mandarin",
			'contactEx3':"within 24 hours, from Monday to Saturday.",
			'titleLabel':"TITLE",
			'firstNameLabel':"FIRST NAME",
			'lastNameLabel':"LAST NAME",
			'emailSubLabel':'EMAIL',
			'phoneLabel':'PHONE NUMBER (OPTIONAL)',
			'submitBtn':"SUBMIT",
			'cancelBtn':"CANCEL",
			'reminder':"This Field is Required.",
			'phoneReminder' : "Invalid Phone Number.",
			'siteInPrepare':"Site in preparation. We apologize for any inconvinience.",
			'agreeOnCookie':"I AGREE",
			'privacyPolicy':"PRIVACY POLICY",
			"T&CCapital":"TERMS AND CONDITIONS",
			'home': "HOME"
		},
	'zh': {
		'product': '产品',
		'idea':"产.品.理.念",
		'contactUs':"联系我们",
		'naturalBeauty' : "你的自然美丽",
		'smartHealth' : "你的智能健康",
		'productName' : "富氢水喷雾",
		'newsletter':"新闻资讯",
		'email' : '邮箱',
		'invalidEmail':"请输入有效的邮箱地址",
		'register':"注册",
		'contactBtm':"联络",
		'wechat':"微信",
		'languagePref':"语言",
		'T&C':"条款和条件",
		'sendEnquiry':"发送请求",
		'thankSubscription':"感谢您的注册。",
			'contactEx1':"您可以通过电子邮箱联系我们：",
		'contactEx2':"顾问将在周一至周六的24小时内以英文，法文或普通话",
			'contactEx3':"回复您",
			'titleLabel':"称谓",
			'firstNameLabel':"名字",
			'lastNameLabel':"姓氏",
			'emailSubLabel':"电子邮箱",
			'phoneLabel':'电话号码 (非必须)',
			'submitBtn':"提交",
			'cancelBtn':"取消",
			'reminder':"此项不能为空",
			'phoneReminder' : "无效电话号码",
			'siteInPrepare':"网站正在准备中。对于任何不方便，我们深表歉意。",
			'agreeOnCookie':"我同意",
			'privacyPolicy':"隐私政策",
			"T&CCapital":"使用条款",
				'home': "主页"
	},
	'fr':{
		'product': 'PRODUIT',
		'idea':"I.D.É.E",
		'contactUs':"CONTACTEZ NOUS",
		'naturalBeauty' : "VOTRE BEAUTÉ NATURELLE",
		'smartHealth' : "VOTRE SANTÉ INTELLIGENTE",
		'productName' : "PULVÉRISATEUR D'EAU HYDROGÈNE",
		'newsletter':"BULLETIN",
		'email' : 'EMAIL',
		'invalidEmail':"S'il vous plaît, mettez une adresse email valide.",
		'register':"REGISTRE",
		'contactBtm':"Contact",
		'wechat':"Wechat",
		'languagePref':"La langue",
		'T&C':"	Termes et Conditions",
		'sendEnquiry':"ENVOYER ENQUÊTE",
		'thankSubscription':"Merci pour votre inscription.",
		'contactEx1':"Vous pouvez nous envoyer un courriel à",
		'contactEx2':"Un conseiller vous répondra en anglais, français ou mandarin",
		'contactEx3':"dans les 24 heures, du lundi au samedi.",
		'titleLabel':"TITRE",
		'firstNameLabel':"PRÉNOM",
		'lastNameLabel':"NOM DE FAMILLE",
		'emailSubLabel':"EMAIL",
		'phoneLabel':'NUMÉRO DE TÉLÉPHONE (FACULTATIF)',
		'submitBtn':"SOUMETTRE",
		'cancelBtn':"ANNULER",
		'reminder':"Ce champ est requis.",
		'phoneReminder' : "Numéro de téléphone invalide.",
			'siteInPrepare':"Site en préparation. Nous nous excusons pour tout inconvénient.",
			'agreeOnCookie':"JE SUIS D'ACCORD",
			'privacyPolicy':"POLITIQUE DE CONFIDENTIALITÉ",
			"T&CCapital":"TERMES ET CONDITIONS",
				'home': "MAISON"
	}
};
//function to apply language
function applyLanguage() {
	disableAndSetStyle(language);
	//jquery to replace words corresponding to arrLang regarding current language
	$( '.lang' )
		.each( function() {
			$( this )
				.text( arrLang[ language ][ $( this )
					.attr( 'key' ) ] );
		} );
		if(language == "en"){
			$("#search").attr("placeholder","SEARCH");
		  $("#agreementEmailSub").html("I have read, understood and agree to the  <a href='privacypolicy'>Privacy Policy</a> and the  <br> <a href='termsAndconditions'>Terms of Use</a>")	;
			$("#commentTextArea").attr("placeholder","COMMENT");
			$("#enquirySuccess").html("<p>Enquiry <br><br>We recieved your enquiry.  <br><br> An advisor will respond to you in English, French or Mandarin <br> <br> within 24 hours, from Monday to Saturday.</p>")
			$("#searchPrimary").attr("placeholder","SEARCH");
			$("#cookieContent").html("by continuing browse this website, you agree to our use of <a href='#' style='color:grey;   text-decoration: underline;'>cookies</a> . These allow us to collect information to improve your experience.");
		}else if(language == "fr"){
			$("#search").attr("placeholder","CHERCHER");
			$("#agreementEmailSub").html("J'ai lu, compris et accepté le  <a href='privacypolicy'>Politique de confidentialité</a> et le  <br> <a href='termsAndconditions'> Conditions d'utilisation </a>")	;
			$("#commentTextArea").attr("placeholder","COMMENTAIRE");
			$("#enquirySuccess").html("<p>Enquête <br><br>Nous avons reçu votre demande.  <br><br> Un conseiller vous répondra en anglais, français ou mandarin <br> <br> dans les 24 heures, du lundi au samedi.</p>")
			$("#searchPrimary").attr("placeholder","CHERCHER");
			$("#cookieContent").html("En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de <a href='#' style='color:grey;   text-decoration: underline;'>cookies</a> . Ceux-ci nous permettent de collecter des informations pour améliorer votre expérience.");
		}else if(language == "zh"){
			$("#search").attr("placeholder","搜索");
			$("#agreementEmailSub").html("我已阅读理解并同意  <a href='privacypolicy'>隐私政策</a> 以及  <br> <a href='termsAndconditions'>使用条款</a>")	;
			$("#commentTextArea").attr("placeholder","留言");
			$("#enquirySuccess").html("<p>请求 <br><br>我们收到了您的请求.  <br><br> 顾问将在周一至周六的24小时内以英文，法文或普通话 <br> <br> 回复您</p>")
			$("#searchPrimary").attr("placeholder","搜索");
			$("#cookieContent").html("继续浏览本网站，则表明您同意我们的<a href='#' style='color:grey;   text-decoration: underline;'>cookies</a>使用政策。这将有助我们收集相关信息，并改进我们的网站。");
		}

}

$("#EN").on('click',function(){
language = "en"
//save language
//console.log("come to this point");
saveLanguage(language);
console.log(language);
//apply language
applyLanguage();
});

$("#FR").on('click',function(){
language = "fr";
saveLanguage(language);
applyLanguage();
});

$("#CN").on('click',function(){
language = "zh";
//save language
saveLanguage(language);
console.log(language);
//apply language
applyLanguage();
});


function disableAndSetStyle(language){
	console.log(language);
	resetDefault();
	console.log(language == 'en');
	if(language == "en"){
		document.getElementById("EN").disabled = true;
		console.log(document.getElementById("EN"));
		$("#EN").css("text-decoration","none");
		$("#EN").css("color","red");
	}else if(language == "fr"){
		document.getElementById("FR").disabled = true;
		$("#FR").css("text-decoration","none");
		$("#FR").css("color","red");
	}else if(language == "zh"){
		document.getElementById("CN").disabled = true;
		$("#CN").css("text-decoration","none");
		$("#CN").css("color","red");
	}
}

function resetDefault(){
	document.getElementById("FR").disabled = false;
	document.getElementById("CN").disabled = false;
	document.getElementById("EN").disabled = false;
	$("#EN").css("text-decoration","underline");
	$("#EN").css("color","grey");
	$("#FR").css("text-decoration","underline");
	$("#FR").css("color","grey");
	$("#CN").css("text-decoration","underline");
	$("#CN").css("color","grey");
}
