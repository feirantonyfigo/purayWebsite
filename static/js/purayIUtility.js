silverInStock = true;
goldInStock = false;
console.log("here");
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'static/js/purayICartSilver.js';
script.setAttribute('id', 'addedScript');
document.body.appendChild(script);
var script2 = document.createElement('script');
script2.type = 'text/javascript';
script2.src = 'static/js/purayICartGold.js';
script2.setAttribute('id', 'addedScript');


$("#silverModel").on("click",function(){
    $("#goldModel").removeClass("modelSelected");
    $("#silverModel").addClass("modelSelected");
    $("#addedScript").empty();
    $('#product-component-b19d0ed069e').html("");
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'static/js/purayICartSilver.js';
    script.setAttribute('id', 'addedScript');
    document.body.appendChild(script);
  if(!silverInStock){
    //change gold images
    $("#outOfStockReminder").css("visibility","visible");
    $("#product-component-b19d0ed069e").css("margin-top","0px");
  }else{
    $("#outOfStockReminder").css("visibility","hidden");
    $("#product-component-b19d0ed069e").css("margin-top","-80px");
  }
})


$("#goldModel").on("click",function(){
  $("#silverModel").removeClass("modelSelected");
  $("#goldModel").addClass("modelSelected");
  $("#addedScript").empty();
  $('#product-component-b19d0ed069e').html("");
  var script2 = document.createElement('script');
  script2.type = 'text/javascript';
  script2.src = 'static/js/purayICartGold.js';
  script2.setAttribute('id', 'addedScript');
  document.body.appendChild(script2);
  if(!goldInStock){
    //change gold images
    $("#outOfStockReminder").css("visibility","visible");
    $("#product-component-b19d0ed069e").css("margin-top","0px");
  }else{
    $("#outOfStockReminder").css("visibility","hidden");
    $("#product-component-b19d0ed069e").css("margin-top","-80px");
  }
})

$("#purayIPreview1").on("click",function(){
  $("#productImg").css('width',"150px");
   $("#productImg").attr('src','static/image/product/purayI/detail/1.jpg');
   $("#productImg").css('margin-left',"-150px");
   $("#productImg").css('margin-top',"0px");
})
$("#purayIPreview2").on("click",function(){
  $("#productImg").css('width',"220px");
   $("#productImg").attr('src','static/image/product/purayI/detail/2.jpg');
   $("#productImg").css('margin-left',"-150px");
   $("#productImg").css('margin-top',"0px");
})

$("#purayIPreview3").on("click",function(){
  $("#productImg").css('width',"300px");
   $("#productImg").attr('src','static/image/product/purayI/detail/3.jpg');
   $("#productImg").css('margin-left',"-200px");
   $("#productImg").css('margin-top',"-50px");
})

$("#purayIPreview4").on("click",function(){
  $("#productImg").css('width',"200px");
   $("#productImg").attr('src','static/image/product/purayI/detail/4.jpg');
   $("#productImg").css('margin-left',"-150px");
   $("#productImg").css('margin-top',"0px");
})

$("#productImg").elevateZoom({
  zoomType				: "lens",
  lensShape : "round",
  lensSize    : 100,
});


$("#productDescription").on("click",function(){
var hiddenHtml = document.getElementById("detailInfopriceInfoHidden").innerHTML;
$("#productDescription").css("font-weight","bolder");
$("#shippingInfo").css("font-weight","lighter");
document.getElementById("detailInfopriceInfo").innerHTML = hiddenHtml;
})

$("#shippingInfo").on("click",function(){
var hiddenHtml = document.getElementById("detailInfoshippingInfoHidden").innerHTML;
$("#shippingInfo").css("font-weight","bolder");
$("#productDescription").css("font-weight","lighter");
document.getElementById("detailInfopriceInfo").innerHTML = hiddenHtml;
})
