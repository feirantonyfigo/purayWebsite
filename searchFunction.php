<?php
require_once('config.php');
if(isset($_POST["searchKey"])){
//get auto complete content
$keyword = $_POST['searchKey']."%";
$autoCompleteQuery = "SELECT DISTINCT * FROM ( (SELECT First_Keyword as Keyword, Image_Src, Address  FROM".
"(SELECT DISTINCT * FROM Keywords_Relation WHERE FIRST_KEYWORD LIKE '$keyword')  AS KR "
."JOIN Search_Keywords ON SECOND_KEYWORD = KEYWORD) "
."UNION (SELECT Keyword, Image_Src, Address FROM Search_Keywords WHERE KEYWORD LIKE '$keyword')) AS SR ".
"GROUP BY Image_Src ";
$result = mysqli_query($conn, $autoCompleteQuery);
$data = "";
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
      $keyword = $row['Keyword'];
      $imgSrc= $row["Image_Src"];
      $address = $row["Address"];
      $data = $data.$keyword.";".$imgSrc.";".$address."\n";
    }
}
echo $data;
mysqli_close($conn);
}
 ?>
