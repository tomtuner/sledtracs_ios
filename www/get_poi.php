<?php

 

// Connect and query the database for the users

$conn = new PDO("mysql:host=localhost;dbname=trsmap", 'trsmap', 'mxride5332514');

//$sql = "SELECT * FROM poi";
$sql = "SELECT p.user_id,
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

$results = $conn->query($sql);



// Pick a filename and destination directory for the file

// Remember that the folder where you want to write the file has to be writable

$filename = "poi.csv";

 

// Actually create the file

// The w+ parameter will wipe out and overwrite any existing file with the same name

$handle = fopen($filename, 'w+');
//$image = "http://trsmap.com//admin/easylogin/avatars/";


// Write the spreadsheet column titles / labels

fputcsv($handle, array('Company','','Category','Address','Phone','Website',"<font color='red'>".'Live Updates'."</font>",'lat','lng'), ',');

// Write all the user records to the spreadsheet

foreach($results as $row)

{

    fputcsv($handle, array($row['Company'],"<center><img src='http://trsmap.com/admin/easylogin/avatars/".$row['avatar']."'".$row['avatar']." height='200' width='200'></center>",$row['Category'],$row['Address'],$row['Website'],"<a href='".$row['url']."'>".$row['url']."</a>", $row['Live Updates'], $row['Latitude'], $row['Longitude']), ',');

}
var_dump($row);
//  var_dump($row);

// Finish writing the file

fclose($handle);

 

?>