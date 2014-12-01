<?php  

require("phpsqlajax_dbinfo.php"); 

// Start XML file, create parent node

$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node); 

// Opens a connection to a MySQL server

$connection=mysql_connect ('localhost', $username, $password);
if (!$connection) {  die('Not connected : ' . mysql_error());} 

// Set the active MySQL database

$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
} 

// Select all the rows in the markers table

$query = "SELECT p.user_id,
MAX(CASE WHEN p.meta_key = 'company' THEN p.meta_value END) AS 'Company',
MAX(CASE WHEN p.meta_key = 'category' THEN p.meta_value END) AS 'Category',
MAX(CASE WHEN p.meta_key = 'address' THEN p.meta_value END) AS 'Address',
MAX(CASE WHEN p.meta_key = 'phone' THEN p.meta_value END) AS 'Phone',
MAX(CASE WHEN p.meta_key = 'live_updates' THEN p.meta_value END) AS 'Live Updates',
MAX(CASE WHEN p.meta_key = 'lat' THEN p.meta_value END) AS 'Latitude',
MAX(CASE WHEN p.meta_key = 'lng' THEN p.meta_value END) AS 'Longitude',
m.avatar,
m.url
FROM usermeta p 
INNER JOIN users m ON p.user_id = m.id
GROUP BY p.user_id";
$result = mysql_query($query);
if (!$result) {  
  die('Invalid query: ' . mysql_error());
} 

header("Content-type: text/xml"); 

// Iterate through the rows, adding XML nodes for each

while ($row = @mysql_fetch_assoc($result)){  
  // ADD TO XML DOCUMENT NODE  
  $node = $dom->createElement("marker");  
  $newnode = $parnode->appendChild($node);   
  $newnode->setAttribute("Company",$row['Company']);
    $newnode->setAttribute("avatar",$row['avatar']);
  $newnode->setAttribute("Category", $row['Category']);
  $newnode->setAttribute("Address", $row['Address']);  
  $newnode->setAttribute("Phone", $row['Phone']);
  $newnode->setAttribute("url",$row['url']);  
  $newnode->setAttribute("live_updates", $row['Live Updates']);   
  $newnode->setAttribute("lat", $row['Latitude']);  
  $newnode->setAttribute("lng", $row['Longitude']);  

} 

echo $dom->saveXML();

?>