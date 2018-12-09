function focusSearchBox(){
  $("#searchPrimary").focus();
}

$("#searchPrimary").keyup(function (){
    var keyValue = $(this).val();
    var trimedLength = keyValue.trim().length ;
    console.log(keyValue);
    if(trimedLength!=0){
    var searchKey = $("#searchForm").serialize();
    $.ajax({
        type: 'POST',
        url: "searchFunction.php",
        data: searchKey,
        dataType: "text",
        success: function(data){
          handleSearchedResult(data);
        }
    });
  }else{
      clearSearchResult();
  }
});



$('#searchForm').submit(function(e){
    e.preventDefault(); // stops the form submission
    var formContent = $(this).serialize();
    $.ajax({
      url: "searchFunction.php", // action attribute of form to send the values
      type: 'POST', // method used in the form
      data: formContent,
      dataType: "text",
    });
    });

    function handleSearchedResult(data){
      var rows = data.split("\n");
      var primaryKeyword = ""
      var validElementNo = 0;
      var j = 1
      //sleep(500);
      for (var i in rows) {
        var tdID = "SR"+ j;
        console.log(tdID);
        var trimedLength = rows[i].trim().length ;
        if (trimedLength != 0){
        validElementNo += 1;
        var singleRow = rows[i]
        var row = singleRow.split(";");
        var tmpKeyword = row[0];
        var tmpImgSrc = row[1];
        var tmpAddress = row[2];
        if(i == 0){
          primaryKeyword = tmpKeyword;
        }
        console.log(tmpKeyword);
        console.log(tmpImgSrc);
        console.log(tmpAddress);
        //Now we replace content in this td:
        var currentHtml = document.getElementById(tdID).innerHTML;
        var newInnerHtml = "<a href=' " + tmpAddress + " '> <img src=' " + tmpImgSrc +  " '></a>"
        if(currentHtml != newInnerHtml ){
          document.getElementById(tdID).innerHTML = newInnerHtml;
        }
      }
      j = j+1;
      }
      console.log(validElementNo);
      for (var i = validElementNo+1; i <7; i++) {
        tdID = "SR"+ i;
        document.getElementById(tdID).innerHTML = "";
      }
      if(validElementNo == 0){
        clearSearchResult();
        resultNotFound();
      }else if(validElementNo > 3){
        $("#bottomContent").css("margin-top","100px");
      }else{
        $("#bottomContent").css("margin-top","0px");
      }

      $("#searchHint").text(primaryKeyword);
    }

    function clearSearchResult(){
      $("#searchHint").text(" ");
      $("#bottomContent").css("margin-top","250px");
      var i = 1;
      for(i = 1; i < 7;i++ ){
        var tdID = "SR"+i;
        document.getElementById(tdID).innerHTML = "";
      }
    }


function resultNotFound(){
  var notFoundHtml = "<span style='margin-left:100px;'>No Result Found For Your Search </span><br><br> <img src='static/image/small-search-no-result.png' alt='' style='width:auto; height:400px; margin-left:80px;'>"
  var currentHtml = document.getElementById("SR2").innerHTML;
  if(currentHtml != notFoundHtml){
  document.getElementById("SR2").innerHTML = notFoundHtml;
  $("#bottomContent").css("margin-top","-130px");
  }

}
