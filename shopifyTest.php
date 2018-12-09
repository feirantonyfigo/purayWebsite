<?php
  //Modify these
  $API_KEY = 'babcf268aa565282c961e1dd12167556';
  $SECRET = 'e99534dbfa6430a0f0a2e4e632952afe';
  $TOKEN = 'fb679dbb4b8b82e745fee60828f13346';
  $STORE_URL = 'puray.myshopify.com';
  $url = 'https://' . $API_KEY . ':' . "43216a38da38ea7009b702f4b779204b" . '@' . $STORE_URL . '/admin/orders.json?customer_id=638902861896';
  //print "url is ".$url;
  $ch = curl_init();
  curl_setopt($ch,CURLOPT_URL,$url);
  curl_setopt($ch,CURLOPT_CUSTOMREQUEST, "GET");                //0 for a get request
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch,CURLOPT_CONNECTTIMEOUT ,3);
  curl_setopt($ch,CURLOPT_TIMEOUT, 20);
  $response = curl_exec($ch);
  $clientOrders = json_decode($response,true)["orders"];
  //var_dump($clientOrders);
  foreach($clientOrders as $i => $item) {
    $orderDetail = $clientOrders[$i];
    var_dump($orderDetail);
    echo "<br>";
    print_r($orderDetail['id']);
    echo "<br>";
    print_r($orderDetail['created_at']);
    echo "<br>";
    print_r($orderDetail['total_price']);
    echo "<br>";
    print_r($orderDetail['currency']);
    echo "<br>";
    print_r($orderDetail['order_status_url']);
    echo "<br>";
    var_dump($orderDetail['line_items'][0]["title"]);
    echo "<br>";

}

  //$product_xml = new SimpleXMLElement($response);
  //echo $product_xml->asXML('blog.xml');
  //echo $product_xml->title;
  //echo $product_xml->variants->variant[0]->{'inventory-quantity'};
//post account log in ;



?>
